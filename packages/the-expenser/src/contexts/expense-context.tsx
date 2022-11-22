import React, { createContext, useState } from "react"
import { fetchExpenses, deleteExpense, addExpense, editExpense } from "../services/expenses";
import { fetchCategories, addCategory } from "../services/categories";
import { fetchUsers } from "../services/users";

const ExpenseContext = createContext<any>({});

const ExpenseProvider = ({ children }: any) => {
  const [expenses, setExpenses] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);
  const [lastExpense, setLastExpense] = useState<any>([]);
  const [weekAmount, setWeekAmount] = useState<number>(0);

  const prefetchExepenseData = async () => {
      const expenses = await fetchExpenses();
      const categories = await fetchCategories();
      const users = await fetchUsers();

      setExpenses(expenses);
      setCategories(categories);
      setUsers(users);
      setLastExpense(expenses[0])
      setWeekAmount(weeklyAmount(expenses))
    };

  const postExpense = (expenseData: any) => {
    addExpense(expenseData).then((res) => {
      if (res.status === 200) {
        setExpenses([...expenses, res.data.payload])
      }
    })
  };

  const postCategory = (categoryData: any) => {
    addCategory(categoryData).then((res) => {
      if (res.status === 200) {
        setCategories([...categories, res.data.payload])
      }
    })
  }

  const putExpense = (expenseData: any) => {
    editExpense(expenseData)
  }

  const removeExpense = (expenseId: number) => {
    deleteExpense(expenseId).then(() => setExpenses([...expenses.filter((expense: any) => expense.id !== expenseId )]))
  }

  const weeklyAmount = (expenses: any) => {
    if (expenses) {
      const oneWeek = expenses.slice(0, 7);
      const amount = oneWeek.reduce((accumulator: number, item: any ) => accumulator + item.amount, 0)
      return amount;
    }
  }

  return (
    <ExpenseContext.Provider
      value={
        { 
          expenses,
          postExpense,
          categories,
          users,
          prefetchExepenseData,
          lastExpense,
          weekAmount,
          postCategory,
          putExpense,
          removeExpense
       }
      }
    >
      {children}
    </ExpenseContext.Provider>
  )
}

export { ExpenseContext, ExpenseProvider }
import React, { createContext, useState, useEffect } from "react"
import { fetchExpenses, deleteExpense, addExpense, editExpense } from "../services/expenses";
import { fetchCategories, addCategory } from "../services/categories";
import { fetchUsers } from "../services/users";

const ExpenseContext = createContext<any>({});


const ExpenseProvider = ({ children }: any) => {
    const [expenses, setExpenses] = useState<any>([]);
    const [categories, setCategories] = useState<any>([]);
    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            const expenses = await fetchExpenses();
            const categories = await fetchCategories();
            const users = await fetchUsers();
            setExpenses(expenses);
            setCategories(categories);
            setUsers(users);
        }
        fetchData() 
    }, []);

    return <ExpenseContext.Provider value={{ expenses: expenses, categories: categories, users: users }}>{children}</ExpenseContext.Provider>


}

export { ExpenseContext, ExpenseProvider }
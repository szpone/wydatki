import { useState, useEffect } from "react";
import { MODES } from "./ShowButtons";
import { fetchExpenses, deleteExpense, addExpense, editExpense } from "../services/expenses";
import { fetchCategories, addCategory } from "../services/categories";
import { fetchUsers } from "../services/users";

const useExpenseTable = () => {
    const [expenses, setExpenses] = useState<any>([]);
    const [categories, setCategories] = useState<any>([]);
    const [users, setUsers] = useState<any>([]);
    const [editedExpense, setEditedExpense] = useState<number>();

    const [showMode, setShowMode] = useState<MODES>(MODES.All);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const expense = await fetchExpenses();
    //         // const category = await fetchCategories();
    //         const user = await fetchUsers();
    //         setExpenses(expense);
    //         // setCategories(category);
    //         setUsers(user);
    //     }
    //     fetchData() 
    // }, []);

    const handleSubmit = (data: any) => {
        const postData = {
            name: data.name,
            amount: +data.amount,
            user: +data.user,
            category: +data.category
        }
        addExpense(postData).then((res: any) => {
            if (res.status === 200) {
                setExpenses([...expenses, res.data.payload])
            }
        })
    }

    const handleCategorySubmit = (data: any) => {
        addCategory(data).then((res: any) => {
            if (res.status === 200) {
                setCategories([...categories, res.data.payload])
            }
        })
    }

    const handleEditExpense = (data: any) => {
        const postData = {
            name: data.name,
            amount: +data.amount,
            user: +data.user,
            category: +data.category
        }
        editExpense(postData).then((res: any) => {
            if (res.status === 200) {
                console.log(res, "res")
                // setExpenses([])
            }
        })
    }

    const onExpenseDelete = async (id: number) => {
        const response = await deleteExpense(id);
        if (response.status === 200) {
            setExpenses([...expenses.filter((expense: any) => expense.id !== id )])
        };
    }

    return { 
        expenses,
        showMode,
        setShowMode,
        onExpenseDelete, 
        // categories,
        users,
        handleSubmit,
        handleCategorySubmit,
        handleEditExpense,
        editedExpense,
        setEditedExpense
    }
}

export default useExpenseTable;
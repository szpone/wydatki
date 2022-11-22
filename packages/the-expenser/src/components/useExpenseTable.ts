import { useState, useEffect, useContext } from "react";
import { MODES } from "./ShowButtons";
import { ExpenseContext  } from "../contexts/expense-context";

const useExpenseTable = () => {
    const [editedExpense, setEditedExpense] = useState<number>();
    const [showMode, setShowMode] = useState<MODES>(MODES.All);
    const { expenses, postExpense, categories, users, prefetchExepenseData, postCategory, putExpense, removeExpense } = useContext(ExpenseContext);


    useEffect(() => {
        (async () => await prefetchExepenseData())();
    }, []);

    const handleSubmit = (data: any) => {
        const postData = {
            name: data.name,
            amount: +data.amount,
            user: +data.user,
            category: +data.category
        }
        postExpense(postData)
    }

    const handleCategorySubmit = (data: any) => {
        postCategory(data);
    };

    const handleEditExpense = (data: any) => {
        if (editedExpense) {
            const postData = {
                name: data.name,
                amount: +data.amount,
                user: +data.user,
                category: +data.category,
                expenseId: +editedExpense
            }
            putExpense(postData)
        }
    }

    const onExpenseDelete = async (id: number) => {
        removeExpense(id)
    }

    return { 
        expenses,
        showMode,
        setShowMode,
        onExpenseDelete, 
        categories,
        users,
        handleSubmit,
        handleCategorySubmit,
        handleEditExpense,
        editedExpense,
        setEditedExpense
    }
}

export default useExpenseTable;
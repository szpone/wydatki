import React, { useContext } from "react";
import TEST_ID from "../tests/unit/testIds";
import AddExpenseForm from "./forms/AddExpenseForm";
import ShowButtons from "./ShowButtons";
import useExpenseTable from "./useExpenseTable";
import AddCategoryForm from "./forms/AddCategoryForm";
import EditableRow from "./forms/EditableRow";
import { ExpenseContext } from "../contexts/expense-context";

const ExpenseTable = () => {
    const { 
        setShowMode,
        // showMode,
        onExpenseDelete,
        handleSubmit,
        handleCategorySubmit,
        handleEditExpense,
        setEditedExpense,
        editedExpense
    } = useExpenseTable();

    const { categories, expenses, users } = useContext(ExpenseContext);

    console.log(categories, "categories")




    return (
        <div data-testid={TEST_ID.EXPENSE_TABLE}>
            <ShowButtons setShowMode={setShowMode} />
            <div>
            {expenses && expenses.map((item: Record<string, any>) => 
            <div key={item.id} data-testid={`${TEST_ID.EXPENSE_EL}-${item.id}`}> 
            {editedExpense === item.id ? <EditableRow categories={[]} users={users} name={item.name} userId={item.user.id} categoryId={item.category.id} handleSubmit={handleEditExpense} amount={item.amount} expenseId={item.id} /> : <div>{item.user.name}</div>} 
            <button data-testid={`${TEST_ID.DELETE_EXPENSE}-${item.id}`} onClick={()=> onExpenseDelete(item.id)}>
                 DELETE 
                 </button>
                 <button data-testid={`${TEST_ID.EDIT_EXPENSE_BTN}-${item.id}`} onClick={()=> setEditedExpense(item.id)}>
                 EDIT
                 </button>
                </div>
                )}
            </div>
            <AddExpenseForm categories={categories} users={users} handleSubmit={handleSubmit} />
            <AddCategoryForm handleSubmit={handleCategorySubmit} />
        </div>
    )
}

export default ExpenseTable;
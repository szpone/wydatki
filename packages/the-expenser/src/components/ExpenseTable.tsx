import React from "react";
import TEST_ID from "../tests/unit/testIds";
import AddExpenseForm from "./forms/AddExpenseForm";
import useExpenseTable from "./useExpenseTable";
import AddCategoryForm from "./forms/AddCategoryForm";
import EditableRow from "./forms/EditableRow";

const ExpenseTable = () => {
  const { 
    onExpenseDelete,
    handleSubmit,
    handleCategorySubmit,
    handleEditExpense,
    setEditedExpense,
    editedExpense,
    categories,
    users,
    expenses
  } = useExpenseTable();
  
  
  return (
    <div data-testid={TEST_ID.EXPENSE_TABLE}>
      <div>
        { 
          expenses && expenses.map((item: Record<string, any>) => 
            <div 
              key={item.id}
              data-testid={`${TEST_ID.EXPENSE_EL}-${item.id}`}
            > 
              {
                editedExpense === item.id
                  ? <EditableRow 
                      categories={categories}
                      users={users}
                      name={item.name}
                      userId={item.user.id}
                      categoryId={item.category.id}
                      handleSubmit={handleEditExpense}
                      amount={item.amount}
                      expenseId={item.id}
                    />
                  : <div>
                      What? {item.name} How much? {item.amount} Who? {item.user.name} Category? {item.category.name}
                    </div>
              } 

              <button 
                data-testid={`${TEST_ID.DELETE_EXPENSE}-${item.id}`}
                onClick={()=> onExpenseDelete(item.id)}
              >
                DELETE 
              </button>
              
              {!editedExpense ? <button
                data-testid={`${TEST_ID.EDIT_EXPENSE_BTN}-${item.id}`}
                onClick={()=> setEditedExpense(item.id)}
              >
                EDIT
              </button> : 
              <button data-testid={TEST_ID.CANCEL_BUTTON} onClick={() => setEditedExpense(undefined)}>Cancel</button>
            }

            </div>
          ) 
        }
      </div>



      
      <AddExpenseForm
        categories={categories}
        users={users}
        handleSubmit={handleSubmit}
      />
      
      <AddCategoryForm
        handleSubmit={handleCategorySubmit} 
      />
    </div>
    )
  }
  
  export default ExpenseTable;
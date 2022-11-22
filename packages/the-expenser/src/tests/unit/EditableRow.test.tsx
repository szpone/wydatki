import React from "react"
import TEST_ID from "./testIds";
import "@testing-library/jest-dom";
import { render, screen, waitFor} from "@testing-library/react";
import EditableRow from "../../components/forms/EditableRow"
import { mockedCategories, mockedUsers, mockedExpenses, mockedLastExpense } from "./mocks";
import userEvent from "@testing-library/user-event";
import { ExpenseContext } from "../../contexts/expense-context";
import { act } from "react-dom/test-utils";


describe("Add category form", () => {
    const handleSubmit = jest.fn();
    const providerProps = { 
        expenses: mockedExpenses, 
        categories: mockedCategories, 
        users: mockedUsers,
        lastExpense: mockedLastExpense,
        weekAmount: 12353,
        addExpense: jest.fn(),
        prefetchExepenseData: jest.fn(),
      }
  
    it("Should render editable row", async () => {
        render(
        <ExpenseContext.Provider value={ providerProps }>
            <EditableRow 
                name="test-name" 
                amount={399} 
                categoryId={1}
                expenseId={1}
                userId={1} 
                handleSubmit={handleSubmit}
                users={mockedUsers}
                categories={mockedCategories}  
                />
        </ExpenseContext.Provider>
        )
        expect(screen.getByTestId(`${TEST_ID.EDITABLE_ROW}-1`)).not.toBeNull();

    });
    it("Should edit expense record fully", async () => {
        render(
        <ExpenseContext.Provider value={ providerProps }>

            <EditableRow 
                name="test-name" 
                amount={399} 
                categoryId={1}
                expenseId={1}
                userId={1} 
                handleSubmit={handleSubmit}
                users={mockedUsers}
                categories={mockedCategories}  
            />
        </ExpenseContext.Provider>

            )
            await act(async () => {
                userEvent.type(screen.getByTestId(TEST_ID.EDIT_EXPENSE_NAME), "test-nametest-nameTest stuff");
                 userEvent.type(screen.getByTestId(TEST_ID.EDIT_EXPENSE_AMOUNT), "3993992137");
                 userEvent.selectOptions(screen.getByTestId(TEST_ID.EDIT_EXPENSE_USER), ["2"]);
                 userEvent.selectOptions(screen.getByTestId(TEST_ID.EDIT_EXPENSE_CATEGORY), ["2"]);
    
                 userEvent.click(screen.getByTestId(TEST_ID.EDIT_EXPENSE_SUBMIT))

            })

            await waitFor(() => {
                expect(handleSubmit).toHaveBeenCalledWith({
                    name: "test-nametest-nametest-nameTest stuff",
                    amount: "3993993992137",
                    user: "2",
                    category: "2"
                })
            })

    })
    it("Should edit expense amount", async () => {
        render(
        <ExpenseContext.Provider value={ providerProps }>

            <EditableRow 
                name="test-name" 
                amount={399} 
                categoryId={1}
                expenseId={1}
                userId={1} 
                handleSubmit={handleSubmit}
                users={mockedUsers}
                categories={mockedCategories}  
            />
            </ExpenseContext.Provider>
            )

            await act(async () => {
                 userEvent.type(screen.getByTestId(TEST_ID.EDIT_EXPENSE_AMOUNT), "21");
               userEvent.click(screen.getByTestId(TEST_ID.EDIT_EXPENSE_SUBMIT))
    

            })

            await waitFor(() => {
                expect(handleSubmit).toHaveBeenCalledWith({
                    name: "test-name",
                    amount: "39921",
                    user: 1,
                    category: 1
                })
            })
    })
})


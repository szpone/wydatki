import React from "react"
import AddExpenseForm from "../../components/forms/AddExpenseForm";
import TEST_ID from "./testIds";
import "@testing-library/jest-dom";
import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockedCategories, mockedUsers, mockedExpenses, mockedLastExpense } from "./mocks";
import { ExpenseContext } from "../../contexts/expense-context";
import { act } from "react-dom/test-utils";


describe("Add expense form", () => {
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
  
    it("Should render form", () => {
        render(
            <ExpenseContext.Provider value={ providerProps }>
                <AddExpenseForm categories={mockedCategories} users={mockedUsers} handleSubmit={handleSubmit} />
            </ExpenseContext.Provider>
        )
        expect(screen.getByTestId(TEST_ID.ADD_EXPENSE)).not.toBeNull();
    });
    it("Should render all fields", () => {
        render(
            <ExpenseContext.Provider value={ providerProps }>
            <AddExpenseForm categories={mockedCategories} users={mockedUsers} handleSubmit={handleSubmit} />
        </ExpenseContext.Provider>
        )
        expect(screen.getByTestId(TEST_ID.EXPENSE_NAME)).not.toBeNull();
        expect(screen.getByTestId(TEST_ID.EXPENSE_AMOUNT)).not.toBeNull();
        expect(screen.getByTestId(TEST_ID.EXPENSE_USER)).not.toBeNull();
        expect(screen.getByTestId(TEST_ID.EXPENSE_CATEGORY)).not.toBeNull();
    });

    it("Should submit form", async () => {
        render(
            <ExpenseContext.Provider value={ providerProps }>
            <AddExpenseForm categories={mockedCategories} users={mockedUsers} handleSubmit={handleSubmit} />
        </ExpenseContext.Provider>
        )

        await act(async () => {
             userEvent.type(screen.getByTestId(TEST_ID.EXPENSE_NAME), "Test stuff");
            userEvent.type(screen.getByTestId(TEST_ID.EXPENSE_AMOUNT), "2137");
             userEvent.selectOptions(screen.getByTestId(TEST_ID.EXPENSE_USER), ["1"]);
             userEvent.selectOptions(screen.getByTestId(TEST_ID.EXPENSE_CATEGORY), ["1"]);
             userEvent.click(screen.getByTestId(TEST_ID.EXPENSE_SUBMIT))
        })


        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalledWith({
                name: "Test stuff",
                amount: "2137",
                user: "1",
                category: "1"
            })
        })
    });
});


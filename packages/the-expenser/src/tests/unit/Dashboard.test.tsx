import React from "react";
import TEST_ID from "./testIds";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import Dashboard from "../../pages/Dashboard";
import { ExpenseContext } from "../../contexts/expense-context";
import { mockedCategories, mockedExpenses, mockedUsers, mockedLastExpense } from "./mocks";

describe("Main dashboard test", () => {
    const providerProps = { 
        expenses: mockedExpenses, 
        categories: mockedCategories, 
        users: mockedUsers,
        lastExpense: mockedLastExpense,
        weekAmount: 12353,
        addExpense: jest.fn(),
        prefetchExepenseData: jest.fn(),
      }
    it("Should render main dashboard", () => {
        render(<ExpenseContext.Provider value={providerProps}>
            <Dashboard />
            </ExpenseContext.Provider>)
        expect(screen.getByTestId(TEST_ID.DASHBOARD)).not.toBeNull()

    })
})
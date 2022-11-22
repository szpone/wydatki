import React from "react";
import TEST_ID from "./testIds";
import "@testing-library/jest-dom";
import {render, screen,} from "@testing-library/react";
import { mockedExpenses, mockedCategories, mockedUsers, mockedLastExpense } from "./mocks";
import { ExpenseContext, ExpenseProvider } from "../../contexts/expense-context";
import Summary from "../../components/Summary";

describe("Summary test", () => {
    const providerProps = { 
        expenses: mockedExpenses, 
        categories: mockedCategories, 
        users: mockedUsers,
        lastExpense: mockedLastExpense,
        weekAmount: 12353,
        addExpense: jest.fn(),
        prefetchExepenseData: jest.fn(),
      }
    it("Should render Summary", () => {
        render(
        <ExpenseContext.Provider value={providerProps}>
            <Summary />
        </ExpenseContext.Provider>)
        expect(screen.getByTestId(TEST_ID.SUMMARY)).not.toBeNull()

    })
})
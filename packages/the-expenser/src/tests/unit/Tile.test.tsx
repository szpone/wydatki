import React from "react";
import TEST_ID from "./testIds";
import "@testing-library/jest-dom";
import {render, screen,} from "@testing-library/react";
import { mockedExpenses, mockedCategories, mockedUsers, mockedLastExpense } from "./mocks";
import { ExpenseContext } from "../../contexts/expense-context";
import Tile from "../../components/Tile";

describe("Tile test", () => {
    const providerProps = { 
        expenses: mockedExpenses, 
        categories: mockedCategories, 
        users: mockedUsers,
        lastExpense: mockedLastExpense,
        weekAmount: 12353,
        addExpense: jest.fn(),
        prefetchExepenseData: jest.fn(),
      }
    it("Should render tile with given test id and title", () => {
        render(
        <ExpenseContext.Provider value={providerProps}>
            <Tile testId={TEST_ID.LAST_EXPENSE_TILE} title="Last expense" />
        </ExpenseContext.Provider>)
        expect(screen.getByTestId(TEST_ID.LAST_EXPENSE_TILE)).not.toBeNull();
        expect(screen.getByTestId(TEST_ID.LAST_EXPENSE_TILE)).toHaveTextContent("Last expense");

    })
})
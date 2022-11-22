import React from "react";
import TEST_ID from "./testIds";
import "@testing-library/jest-dom";
import {cleanup, fireEvent, render, screen, waitFor} from "@testing-library/react";
import ExpenseTable from "../../components/ExpenseTable";
import AddExpenseForm from "../../components/forms/AddExpenseForm";
import { mockedExpenses, mockedCategories, mockedUsers, mockedLastExpense } from "./mocks";
import { ExpenseContext, ExpenseProvider } from "../../contexts/expense-context";


describe("Main expense table", () => {
    const providerProps = { 
        expenses: mockedExpenses, 
        categories: mockedCategories, 
        users: mockedUsers,
        lastExpense: mockedLastExpense,
        weekAmount: 12353,
        addExpense: jest.fn(),
        removeExpense: jest.fn(),
        prefetchExepenseData: jest.fn(),
      }

    it("Should render expense table", () => {
      render(
          <ExpenseContext.Provider value={ providerProps }>
              <ExpenseTable />
          </ExpenseContext.Provider>
      );

      expect(screen.getByTestId(TEST_ID.EXPENSE_TABLE)).not.toBeNull();
      expect(providerProps.prefetchExepenseData).toHaveBeenCalledTimes(1);
    });


    it("Should elements be in table", () => {
        render(
            <ExpenseProvider value={ providerProps }>

        <ExpenseTable />
        </ExpenseProvider>
        );
         expect(screen.findByTestId(`${TEST_ID.EXPENSE_EL}-1`).then(res => res)).not.toBeNull()
    });

    it("Should render delete buttons", () => {
      render(
        <ExpenseContext.Provider value={ providerProps }>
            <ExpenseTable />
        </ExpenseContext.Provider>
    );
        expect(screen.getByTestId(`${TEST_ID.DELETE_EXPENSE}-1`)).not.toBeNull();
    });

    it("Should render edit buttons", () => {

      render(
        <ExpenseContext.Provider value={ providerProps }>
            <ExpenseTable />
        </ExpenseContext.Provider>
    );
        expect(screen.getByTestId(`${TEST_ID.EDIT_EXPENSE_BTN}-1`)).not.toBeNull();
    });
    it("Should delete given expense", async () => {
         render(
          <ExpenseContext.Provider value={ providerProps }>
              <ExpenseTable />
          </ExpenseContext.Provider>
      );
        screen.findByTestId(`${TEST_ID.DELETE_EXPENSE}-1`).then(res => fireEvent.click(res));
        await waitFor(() => expect(screen.findByTestId(`${TEST_ID.EXPENSE_EL}-1`).then(res => res)).toBeInstanceOf(Object));
    });
    it("Should render form under table", () => {
        const handleSubmit = jest.fn();
        render(
          <ExpenseContext.Provider value={ providerProps }>
        <AddExpenseForm categories={mockedCategories} users={mockedUsers} handleSubmit={handleSubmit} />
        </ExpenseContext.Provider>
        )
        expect(screen.getByTestId(TEST_ID.ADD_EXPENSE)).not.toBeNull();
    });
    it("Should go to edit mode for a given row", () => {
      render(
        <ExpenseContext.Provider value={ providerProps }>
            <ExpenseTable />
        </ExpenseContext.Provider>
    );
        fireEvent.click(screen.getByTestId(`${TEST_ID.EDIT_EXPENSE_BTN}-1`))
        expect(screen.getByTestId(`${TEST_ID.EDITABLE_ROW}-1`)).not.toBeNull()
        
    })
    it("Should go to edit mode and display cancel button", () => {
      render(
        <ExpenseContext.Provider value={ providerProps }>
            <ExpenseTable />
        </ExpenseContext.Provider>
    );
        fireEvent.click(screen.getByTestId(`${TEST_ID.EDIT_EXPENSE_BTN}-1`))
        expect(screen.getByTestId(`${TEST_ID.CANCEL_BUTTON}`)).not.toBeNull()
        
    })
})


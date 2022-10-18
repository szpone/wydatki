import React from "react";
import TEST_ID from "./testIds";
import "@testing-library/jest-dom";
import {cleanup, fireEvent, render, screen, waitFor, act} from "@testing-library/react";
import ExpenseTable from "../../components/ExpenseTable";
import AddExpenseForm from "../../components/forms/AddExpenseForm";
import axios from "axios";
import { mockedExpenses, mockedCategories, mockedUsers } from "./mocks";
import { ExpenseProvider } from "../../contexts/expense-context";

jest.mock('axios');
jest.mock("../../services/expenses");
jest.mock("../../services/categories");
jest.mock("../../services/users");

const mockedAxios = axios as jest.Mocked<typeof axios>;


describe("Main expense table", () => {
    afterEach(() => {
        cleanup();
        jest.resetAllMocks()
    });
    it("Should render expense table", () => {
        render(
            <ExpenseProvider value={{ expenses: mockedExpenses, categories: mockedCategories, users: mockedUsers, fetchData: jest.fn()}}>
                <ExpenseTable />
            </ExpenseProvider>
        );
        expect(screen.getByTestId(TEST_ID.EXPENSE_TABLE)).not.toBeNull();
    });
    it("Should elements be in table", async () => {
        render(
            <ExpenseProvider value={{ expenses: mockedExpenses, categories: mockedCategories, users: mockedUsers, fetchData: jest.fn()}}>

        <ExpenseTable />
        </ExpenseProvider>
        );
        await waitFor(() => expect(screen.findByTestId(`${TEST_ID.EXPENSE_EL}-1`).then(res => res)).not.toBeNull())
    });
    // it("Should render show buttons", () => {
    //     render(<ExpenseTable />);
    //     expect(screen.getByTestId(TEST_ID.SHOW_BTNS)).not.toBeNull();
    // });

    // it("Should render delete buttons", async () => {
    //     jest.spyOn(axios, "get").mockResolvedValueOnce({ data: mockedExpenses });
    //     render(<ExpenseTable />);
    //     await waitFor(() => expect(screen.findByTestId(`${TEST_ID.DELETE_EXPENSE}-1`).then(res => res)).not.toBeNull())
    // });

    // it("Should render edit buttons", async () => {
        // jest.spyOn(axios, "get").mockResolvedValueOnce({ data: mockedExpenses });
        // mockedAxios.get.mockResolvedValue({ data: mockedExpenses })
        // mockedAxios.get.mockResolvedValue({ data: mockedCategories })

        // render(<ExpenseTable />);
        // const element =  screen.findByTestId(`${TEST_ID.EDIT_EXPENSE_BTN}-1`)
        // await waitFor(() => expect(screen.findByTestId(`${TEST_ID.EDIT_EXPENSE_BTN}-1`).then(res => res)).not.toBeNull());
        // expect(element.not.toBeNull())
    // });
    // it("Should delete given expense", async () => {
    //     // jest.spyOn(axios, "get").mockResolvedValueOnce({ data: mockedExpenses });
    //     mockedAxios.get.mockResolvedValueOnce(mockedExpenses)
    //     mockedAxios.delete.mockResolvedValueOnce({ deleted: "true", id: 1})
    //     // jest.spyOn(axios, "delete").mockImplementation(jest.fn(() => Promise.resolve({ data: { deleted: 'true', id: 1 }})))
    //     render(<ExpenseTable />);
    //     screen.findByTestId(`${TEST_ID.DELETE_EXPENSE}-1`).then(res => fireEvent.click(res));
    //     await waitFor(() => expect(screen.findByTestId(`${TEST_ID.EXPENSE_EL}-1`).then(res => res)).toBeInstanceOf(Object));
    // });
    // it("Should render form under table", () => {
    //     const handleSubmit = jest.fn();
    //     render(<AddExpenseForm categories={mockedCategories} users={mockedUsers} handleSubmit={handleSubmit} />)
    //     expect(screen.getByTestId(TEST_ID.ADD_EXPENSE)).not.toBeNull();
    // });
    // it("Should go to edit mode for a given row", () => {
    //     render(<ExpenseTable />);
    //     screen.findByTestId(`${TEST_ID.EDIT_EXPENSE_BTN}-1`).then(res => fireEvent.click(res));
    //     expect(screen.getByTestId(`${TEST_ID.EDITABLE_ROW}-1`)).not.toBeNull()
        
    // })
})


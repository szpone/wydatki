import React from "react"
import AddExpenseForm from "../../components/forms/AddExpenseForm";
import TEST_ID from "./testIds";
import "@testing-library/jest-dom";
import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockedCategories, mockedUsers } from "./mocks";



describe("Add expense form", () => {
    const handleSubmit = jest.fn();
    it("Should render form", () => {
        render(<AddExpenseForm categories={mockedCategories} users={mockedUsers} handleSubmit={handleSubmit} />)
        expect(screen.getByTestId(TEST_ID.ADD_EXPENSE)).not.toBeNull();
    });
    it("Should render all fields", () => {
        render(<AddExpenseForm categories={mockedCategories} users={mockedUsers} handleSubmit={handleSubmit} />)
        expect(screen.getByTestId(TEST_ID.EXPENSE_NAME)).not.toBeNull();
        expect(screen.getByTestId(TEST_ID.EXPENSE_AMOUNT)).not.toBeNull();
        expect(screen.getByTestId(TEST_ID.EXPENSE_USER)).not.toBeNull();
        expect(screen.getByTestId(TEST_ID.EXPENSE_CATEGORY)).not.toBeNull();
    });
    it("Should submit form", async () => {
        render(<AddExpenseForm categories={mockedCategories} users={mockedUsers} handleSubmit={handleSubmit} />)
        await userEvent.type(screen.getByTestId(TEST_ID.EXPENSE_NAME), "Test stuff");
        await userEvent.type(screen.getByTestId(TEST_ID.EXPENSE_AMOUNT), "2137");
        await userEvent.selectOptions(screen.getByTestId(TEST_ID.EXPENSE_USER), ["1"]);
        await userEvent.selectOptions(screen.getByTestId(TEST_ID.EXPENSE_CATEGORY), ["1"]);

        await userEvent.click(screen.getByTestId(TEST_ID.EXPENSE_SUBMIT))

        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalledWith({
                name: "Test stuff",
                amount: "2137",
                user: "1",
                category: "1"
            })
        })
    });
    // it("Should fire validation", async () => {
    //     render(<AddExpenseForm categories={mockedCategories} users={mockedUsers} handleSubmit={handleSubmit} />);
    //     await userEvent.click(screen.getByTestId(TEST_ID.EXPENSE_SUBMIT));
    //     expect(screen.getByTestId(TEST_ID.EXPENSE_NAME_ERROR)).toBeTruthy()

    // })

})


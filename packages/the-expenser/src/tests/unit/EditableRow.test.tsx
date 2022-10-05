import React from "react"
import TEST_ID from "./testIds";
import "@testing-library/jest-dom";
import { render, screen, waitFor} from "@testing-library/react";
import EditableRow from "../../components/forms/EditableRow"
import { mockedCategories, mockedUsers } from "./mocks";
import userEvent from "@testing-library/user-event";


describe("Add category form", () => {
    const handleSubmit = jest.fn();
    it("Should render editable row", async () => {
        render(
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
        )
        expect(screen.findByTestId(`${TEST_ID.EDITABLE_ROW}-1`).then(res => res)).not.toBeNull();

    });
    it("Should edit expense record fully", async () => {
        render(
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
            )
            await userEvent.type(screen.getByTestId(TEST_ID.EDIT_EXPENSE_NAME), "test-nametest-nameTest stuff");
            await userEvent.type(screen.getByTestId(TEST_ID.EDIT_EXPENSE_AMOUNT), "3993992137");
            await userEvent.selectOptions(screen.getByTestId(TEST_ID.EDIT_EXPENSE_USER), ["2"]);
            await userEvent.selectOptions(screen.getByTestId(TEST_ID.EDIT_EXPENSE_CATEGORY), ["2"]);

            await userEvent.click(screen.getByTestId(TEST_ID.EDIT_EXPENSE_SUBMIT))

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
            )
            await userEvent.type(screen.getByTestId(TEST_ID.EDIT_EXPENSE_AMOUNT), "21");
            await userEvent.click(screen.getByTestId(TEST_ID.EDIT_EXPENSE_SUBMIT))

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


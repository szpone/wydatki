import React from "react"
import AddCategoryForm from "../../components/forms/AddCategoryForm";
import TEST_ID from "./testIds";
import "@testing-library/jest-dom";
import { render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe("Add category form", () => {
    const handleSubmit = jest.fn();
    it("Should render form", () => {
        render(<AddCategoryForm handleSubmit={handleSubmit}  />)
        expect(screen.getByTestId(TEST_ID.ADD_CATEGORY)).not.toBeNull();
    });
    it("Should render all fields", () => {
        render(<AddCategoryForm handleSubmit={handleSubmit}  />)
        expect(screen.getByTestId(TEST_ID.CATEGORY_NAME)).not.toBeNull();
    });
    it("Should submit form", async () => {
        render(<AddCategoryForm handleSubmit={handleSubmit} />)
        await userEvent.type(screen.getByTestId(TEST_ID.CATEGORY_NAME), "Test category");
        await userEvent.click(screen.getByTestId(TEST_ID.CATEGORY_SUBMIT))

        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalledWith({
                name: "Test category",
            });
        })
    });

})


import React from "react";
import TEST_ID from "./testIds";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import Dashboard from "../../pages/Dashboard";

describe("Main dashboard test", () => {
    it("Should render main dashboard", () => {
        render(<Dashboard />);
        expect(screen.getByTestId(TEST_ID.DASHBOARD)).not.toBeNull()
    })
})
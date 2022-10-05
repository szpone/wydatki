import React from "react";
import TEST_ID from "./testIds";
import "@testing-library/jest-dom";
import {fireEvent, render, screen,} from "@testing-library/react";
import ShowButtons, { MODES } from "../../components/ShowButtons";



describe("Main show butons", () => {
    const setShowMode = jest.fn();

    it("Should render show buttons container", () => {
        render(<ShowButtons setShowMode={setShowMode} />);
        expect(screen.getByTestId(TEST_ID.SHOW_BTNS)).not.toBeNull();
    });
    it("Should render filter buttons", () => {
        render(<ShowButtons setShowMode={setShowMode} />);
        expect(screen.getByTestId(TEST_ID.SHOW_ALL)).not.toBeNull();
        expect(screen.getByTestId(TEST_ID.SHOW_USER)).not.toBeNull();
        expect(screen.getByTestId(TEST_ID.SHOW_CATEGORY)).not.toBeNull();
    });
    it("Should call set show mode for user", () => {
        render(<ShowButtons setShowMode={setShowMode} />)
        fireEvent.click(screen.getByTestId(TEST_ID.SHOW_USER));
        expect(setShowMode).toHaveBeenCalledWith(MODES.User)
    });
    it("Should call set show mode for category", () => {
        render(<ShowButtons setShowMode={setShowMode} />)
        fireEvent.click(screen.getByTestId(TEST_ID.SHOW_CATEGORY));
        expect(setShowMode).toHaveBeenCalledWith(MODES.Category)
    });
});
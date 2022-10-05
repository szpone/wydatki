import React from "react";
import TEST_ID from "../tests/unit/testIds";

export enum MODES  {
    User = "user",
    All = "all",
    Category = "category"
}

interface Props {
    setShowMode: (value: MODES) => void;
}


const ShowButtons = ({ setShowMode }: Props) => {
    return (
        <div data-testid={TEST_ID.SHOW_BTNS}>
            <button data-testid={TEST_ID.SHOW_ALL} onClick={() => setShowMode(MODES.All)}> ALL </button>
            <button data-testid={TEST_ID.SHOW_CATEGORY} onClick={() => setShowMode(MODES.Category)}> CATEGORY </button>
            <button data-testid={TEST_ID.SHOW_USER} onClick={() => setShowMode(MODES.User)}> USER </button>
        </div>

    )
};

export default ShowButtons;
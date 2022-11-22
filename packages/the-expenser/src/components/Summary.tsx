import React, { useContext } from "react"
import styles from "../stylesheets/Utils.module.css";
import TEST_ID from "../tests/unit/testIds";
import Tile from "../components/Tile";
import { ExpenseContext } from "../contexts/expense-context";


const Summary = () => {
    const { lastExpense, weekAmount } = useContext(ExpenseContext);
    const { amount, name, user } = lastExpense;
    return (
        <div data-testid={TEST_ID.SUMMARY}>
            <div>
                <Tile testId={TEST_ID.LAST_EXPENSE_TILE} title="Last expense">
                    <span>How much? {amount} </span>
                    <span>What? {name} </span>
                    <span>Who? {user && user.name} </span>
                </Tile>
                <Tile testId={TEST_ID.WEEKLY_AMOUNT} title="Weekly amount">
                <span>{weekAmount}</span>
            </Tile>
            </div>
        </div>
    )
}

export default Summary;
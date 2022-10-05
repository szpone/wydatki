import React from "react";
import TEST_ID from "../tests/unit/testIds";
import ExpenseTable from "../components/ExpenseTable";

const Dashboard = () => {
    return (
    <div data-testid={TEST_ID.DASHBOARD}>
        <h1>Dashboard</h1>
        <ExpenseTable />
    </div>
    )
};

export default Dashboard;
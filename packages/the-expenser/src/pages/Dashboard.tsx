import React from "react";
import TEST_ID from "../tests/unit/testIds";
import ExpenseTable from "../components/ExpenseTable";
import Summary from "../components/Summary";

const Dashboard = () => {
    return (
    <div data-testid={TEST_ID.DASHBOARD}>
        <h1>Dashboard</h1>
        <Summary />
        <ExpenseTable />
    </div>
    )
};

export default Dashboard;
export const mockedCategories = [
    {
        id: 1,
        name: "Groceries"
    },
    {
        id: 2,
        name: "Dentist"
    }
];


export const mockedUsers = [
    {
        id: 1,
        name: "User 1"
    },
    { 
        id: 2,
        name: "User 2"
    }
];

export const mockedLastExpense = {
    amount: 1234,
    name: "test expense",
    user: { name: "Test user" }
}
export const mockedExpenses = [
    {
        id: 1,
        amount: 200,
        createdAt: 1661883500,
        updatedAt: 1661883500,
        name: "food",
        categoryId: 1,
        userId: 1,
        user: {
            id: 1,
            name: "Test User 1"
        },
        category: {
            id: 1,
            name: "Test category"
        }
    },
    {
        id: 2,
        amount: 300,
        createdAt: 1661883500,
        updatedAt: 1661883500,
        name: "animals",
        categoryId: 2,
        userId: 1,
        user: {
            id: 2,
            name: "Test User 2"
        },
        category: {
            id: 2,
            name: "Test category 2"
        }
    }
];

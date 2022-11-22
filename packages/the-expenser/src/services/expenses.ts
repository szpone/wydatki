import axios from "axios";

const HOST_URL = "http://localhost:5000/api"

export const fetchExpenses = (queryParams?: string) => {
    const url = queryParams ? `${HOST_URL}/expenses${queryParams}` : `${HOST_URL}/expenses`
    return axios.get(url)
        .then((res: any) => res.data.payload)
        .catch((error: any) => console.log(error))
}

export const deleteExpense = (id: number) => axios.delete(`${HOST_URL}/expense/${id}`)
    .then((res: any) => res)
    .catch((error: any) => console.log(error))

export const addExpense = ({ name, amount, category, user }: any) => axios.post(`${HOST_URL}/expense`, { name: name, amount: amount, category: category, user: user})

export const editExpense = ({ name, amount, category, user, expenseId }: any) => axios.put(`${HOST_URL}/expense/${expenseId}`, { name: name, amount: amount, category: category, user: user, expenseId: expenseId })



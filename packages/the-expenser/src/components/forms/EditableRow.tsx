import React from "react";
import TEST_ID from "../../tests/unit/testIds";
import { useFormik } from "formik";

interface Props {
    name: string;
    amount: number;
    userId: number;
    categoryId: number;
    expenseId: number;
    handleSubmit: Function;
    categories: any[],
    users: any[]
}

const EditableRow = ({ name, amount, userId, categoryId, expenseId, handleSubmit, users, categories }: Props) => {
    const formik = useFormik({
        initialValues: {
          name: name,
          amount: amount,
          category: categoryId,
          user: userId,
        },
        onSubmit: values => {
          handleSubmit(values);
        },
      });
   
    return (
        <div data-testid={`${TEST_ID.EDITABLE_ROW}-${expenseId}`}>
            <form onSubmit={formik.handleSubmit}>
            <input name="name" onChange={formik.handleChange} value={formik.values.name} data-testid={TEST_ID.EDIT_EXPENSE_NAME} />
            <input name="amount" onChange={formik.handleChange} value={formik.values.amount} data-testid={TEST_ID.EDIT_EXPENSE_AMOUNT} />
            <select name="category" data-testid={TEST_ID.EDIT_EXPENSE_CATEGORY} onChange={formik.handleChange} value={formik.values.category}>
                        {categories.map((category: any) => <option key={category.id} value={category.id}>{category.name}</option>)}

                    </select>
            <select name="user" data-testid={TEST_ID.EDIT_EXPENSE_USER} onChange={formik.handleChange} value={formik.values.user}>
                        {users.map((user: any) => <option key={user.id} value={user.id}>{user.name}</option>)}
                    </select>
            <button type="submit" data-testid={TEST_ID.EDIT_EXPENSE_SUBMIT}>submit</button>

            </form>

        </div>
    )
}

export default EditableRow
import React from "react";
import TEST_ID from "../../tests/unit/testIds";
import { useFormik } from "formik";

interface Props {
    categories: Record<string, any>[];
    users: Record<string, any>[];
    handleSubmit: any;
}

const AddExpenseForm = ({ categories, users, handleSubmit }: Props) => {
    const formik = useFormik({
        initialValues: {
          name: '',
          amount: '',
          category: '1',
          user: '1',
        },
        onSubmit: values => {
          handleSubmit(values);
        },
      });
    return (
        <div data-testid={TEST_ID.ADD_EXPENSE}>
             Form 
             <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Expense name</label>
                    <input name="name" type="text" data-testid={TEST_ID.EXPENSE_NAME} onChange={formik.handleChange} value={formik.values.name} />
                </div>
                <div>
                    <label>Expense amount</label>
                    <input name="amount" type="text" data-testid={TEST_ID.EXPENSE_AMOUNT} onChange={formik.handleChange} value={formik.values.amount} />
                </div>
                <div>
                    <label>Expense category</label>
                    <select name="category" data-testid={TEST_ID.EXPENSE_CATEGORY} onChange={formik.handleChange} value={formik.values.category}>
                        {categories.map((category: any) => <option key={category.id} value={category.id}>{category.name}</option>)}

                    </select>
                </div>
                <div>
                    <label>Expense user</label>
                    <select name="user" data-testid={TEST_ID.EXPENSE_USER} onChange={formik.handleChange} value={formik.values.user}>
                        {users.map((user: any) => <option key={user.id} value={user.id}>{user.name}</option>)}
                    </select>
                </div>
                <button type="submit" data-testid={TEST_ID.EXPENSE_SUBMIT}>Submit</button>
             </form>
        </div>
    )
};

export default AddExpenseForm;
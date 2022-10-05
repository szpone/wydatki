import React from "react";
import TEST_ID from "../../tests/unit/testIds";
import { useFormik } from "formik";

interface Props {
    handleSubmit: any;
}

const AddExpenseForm = ({ handleSubmit }: Props) => {
    const formik = useFormik({
        initialValues: {
          name: ''
        },
        onSubmit: values => {
          handleSubmit(values);
        },
      });
    return (
        <div data-testid={TEST_ID.ADD_CATEGORY}>
             Form 
             <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Category name</label>
                    <input name="name" type="text" data-testid={TEST_ID.CATEGORY_NAME} onChange={formik.handleChange} value={formik.values.name} />
                </div>

                <button type="submit" data-testid={TEST_ID.CATEGORY_SUBMIT}>Submit</button>
             </form>
        </div>
    )
};

export default AddExpenseForm;
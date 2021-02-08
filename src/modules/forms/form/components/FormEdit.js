import React from 'react';
import { FormEdit as FormEditComponent, Errors } from 'react-formio';
import { useForm, saveForm } from '../formContext';

const FormEdit = (props) => {
  const { state: formState, dispatch } = useForm();

  const onSaveForm = (form) => saveForm(dispatch, form, (err, form) => {
    if (!err) {
      // TODO: Display a save success message here.
    }
  });

  return (
    <div>
      <h2>Edit {formState.form?.title} Form</h2>
      <hr />
      <Errors errors={[formState.error]} />
      <FormEditComponent {...props} saveText="Save Form" saveForm={onSaveForm} />
    </div>
  )
};

export default FormEdit;
import React, { useEffect } from 'react';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import SubmissionsPage from '../../submission/components/SubmissionsPage';
import { getForm, useForm } from '../formContext';
import FormDelete from './FormDelete';
import FormView from './FormView';
import FormEdit from './FormEdit';
import { SubmissionProvider, SubmissionsProvider } from '../../submission';

const FormNavigation = () => {
  const { formId } = useParams();
  const { dispatch } = useForm();

  useEffect(() => {
    getForm(dispatch, formId);
  }, [dispatch, formId]);

  const Navbar = () => (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink className="nav-link" end to="/form">
          <i className="fa fa-chevron-left"></i>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"  end to={``}>
          <i className="fa fa-pencil"></i> Enter Data
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={`submission`}>
          <i className="fa fa-list-alt"></i> View Data
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={`edit`}>
          <i className="fa fa-edit"></i> Edit Form
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={`delete`}>
          <i className="fa fa-trash"></i> Delete Form
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          index
          element={(
            <SubmissionsProvider>
              <SubmissionProvider>
                <FormView />
              </SubmissionProvider>
            </SubmissionsProvider>
  )}
        />
        <Route path="edit" element={<FormEdit/>} />
        <Route path="delete" element={<FormDelete/>} />
        <Route path="submission/*" element={<SubmissionsPage/>} />
      </Routes>
    </div>
  );
};

export default FormNavigation;

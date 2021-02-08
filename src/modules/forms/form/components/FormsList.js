import React, { useEffect, useState, useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Errors, FormGrid } from 'react-formio';
import { Loading } from '../../../../common/components';
import { useForms, indexForms } from '../formsContext';

const FormsList = () => {
  const history = useHistory();
  const { state: formsState, dispatch: dispatchFormsAction } = useForms();
  const [requestParams, setRequestParams] = useState({
    limit: 10,
    query: {},
    select: '',
    sort: '',
  });

  const getForms = useCallback(
    (page, params) => {
      indexForms(
        dispatchFormsAction,
        requestParams,
        page,
        params,
      );
    },
    [requestParams, dispatchFormsAction],
  );

  useEffect(() => {
    getForms(1);
  }, [getForms]);

  const onAction = (form, action) => {
    switch(action) {
      case 'view':
        history.push(`/form/${form._id}`);
        break;
      case 'submission':
        history.push(`/form/${form._id}/submission`);
        break;
      case 'edit':
        history.push(`/form/${form._id}/edit`);
        break;
      case 'delete':
        history.push(`/form/${form._id}/delete`);
        break;
      default:
    }
  };

  const { isActive } = formsState;

  if (isActive) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      <h1>Forms</h1>
      <Errors errors={[formsState.error]} />
      <FormGrid
        forms={formsState}
        getForms={getForms}
        onAction={onAction}
      />
      <Link className="btn btn-primary" to="/form/create"><i className="fa fa-plus"></i> Create Form</Link>
    </div>
  );
};

export default FormsList;

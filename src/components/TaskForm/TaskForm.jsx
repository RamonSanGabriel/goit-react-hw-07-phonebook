import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  deleteContacts,
  fetchContacts,
} from '../../redux/contacts/contactsOperations';
import {
  selectIsLoading,
  selectIsError,
  selectContacts,
} from '../../redux/contacts/contactsSelector';
import { Loader } from '../Loader/Loader';

export const TaskForm = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {/*  {isLoading && <p>LOADING....</p>}
      {isError && <p>ERROR!!!!!!!</p>} */}
      {isLoading && !isError && <Loader />}
      {contacts.length === 0 && <p>The task is empty. Please add a task</p>}

      {contacts.length > 0 && (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <p>{contact.text} </p>
              <button onClick={() => dispatch(deleteContacts(contact.id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

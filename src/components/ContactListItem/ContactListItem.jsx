import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { deleteContact } from '../../redux/contacts/contactsSlice';

export const ContactListItem = ({ filteredContact }) => {
  const dispatch = useDispatch();

  const handleDeleteFulfilled = () => {
    dispatch(deleteContact(filteredContact.id));
    Notify.success(`${filteredContact.name} was deleted`, {
      position: 'right-bottom',
    });
  };

  return (
    <li>
      <p>{filteredContact.name}:</p>
      <p>{filteredContact.number}</p>
      <button onClick={handleDeleteFulfilled}>Delete</button>
    </li>
  );
};
ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
};

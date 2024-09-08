import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selector';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import iconSearch from '../../assets/icons/search.svg';
import './style.css';

export default function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <section className="TodoSearch">
      <div className="search">
        <img src={iconSearch} alt="iconSearch" className="iconSearch" />
        <input placeholder="Ducharse" onChange={onSearchValue} value={searchValue} />
      </div>
    </section>
  );
}

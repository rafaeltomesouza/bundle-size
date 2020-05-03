import React, { useEffect } from 'react';
import { useSearch } from './hooks';
import { DebounceInput } from 'react-debounce-input';
import styles from './styles/Search.module.scss';
import { InputOnChangeEvent } from '../../types';

type SearchProps = {
  placeholder: string,
  updateFilter: (done: string) => void
}

const Search: React.FC<SearchProps> = (props) => {

  const { input, setInput } = useSearch();
  const { placeholder } = props;

  function searchForLibrary(evt: InputOnChangeEvent) {
    setInput(evt.target.value);
  }

  useEffect(() => {
    const { updateFilter } = props;
    updateFilter(input);
  }, [props, input]);

  return (
    <div className={styles.search}>
      <DebounceInput
        minLength={2}
        debounceTimeout={500}
        placeholder={placeholder}
        value={input}
        onChange={searchForLibrary} />
    </div>
  );
}

export default Search;

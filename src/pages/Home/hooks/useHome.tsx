import { useState, useEffect } from 'react';
import { fetchSuggestions } from '../../../api';

type LibraryProps = {
  closeChart: () => void
}

function useHome(props: LibraryProps) {
  const [filter, setFilter] = useState('');
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  function updateFilter(libraryName: string) {
    props.closeChart();
    setFilter(libraryName);
  }

  function updateLoading(status: boolean) {
    setLoading(status);
  }

  useEffect(() => {
    updateLoading(true);
    fetchSuggestions(filter)
    .then((result) => {
      setData(result);
      updateLoading(false);
    });
  }, [filter]);

  return {
    data,
    filter,
    updateFilter,
    loading
  }
}

export { useHome };
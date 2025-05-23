import { useEffect, useState } from 'react';

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isCatLoading, setIsCatLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsCatLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, isCatLoading, error };
};

export default useFetchCategories;

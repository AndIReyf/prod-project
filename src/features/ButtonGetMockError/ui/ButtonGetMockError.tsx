import { useEffect, useState } from 'react';

export const ButtonGetMockError = () => {
  const [error, setError] = useState(false);

  const getError: VoidFunction = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <button type="button" onClick={getError}>Get Error</button>
  );
};

import { useState } from 'react';

export default (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = (event) => {
    setValue(event.target.value);
  };
  return [value, handler, setValue];
};

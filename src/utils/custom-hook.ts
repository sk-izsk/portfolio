import { ChangeEvent, useMemo, useState } from 'react';

const useForm = (initialValue: any) => {
  const [values, setValues] = useState(initialValue);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const reset = (name: string) =>
    setValues({
      ...values,
      [name]: '',
    });
  return [values, handleChange, reset];
};

const MemoizedComponent = (Component: JSX.Element, dependencies?: unknown) => {
  // eslint-disable-next-line
  return useMemo(() => Component, [Component, dependencies]);
};

export { useForm, MemoizedComponent };

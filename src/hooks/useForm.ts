import { useState, useCallback } from 'react';

export const useForm = (initialValues: any, onSubmit: (data: any) => void, validator: any) => {
  const [formState, setFormState] = useState({...initialValues, errors: {} });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormState({...formState, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const errors = validator(formState);
    if (Object.keys(errors).length === 0) {
      onSubmit(formState);
    } else {
      setFormState({...formState, errors });
    }
  };

  return [formState, handleInputChange, handleSubmit];
};
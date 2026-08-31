import React, { FC, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { accountValidator } from '../validators/accountValidator';
import { errorMessages } from '../utils/errorMessages';

interface AccountFormProps {
  onSubmit: (data: any) => void;
}

const AccountForm: FC<AccountFormProps> = ({ onSubmit }) => {
  const [formState, handleInputChange, handleSubmit] = useForm({
    name: '',
    accountNumber: '',
    initialBalance: '',
    accountType: 'savings'
  }, onSubmit, accountValidator);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" name="name" value={formState.name} onChange={handleInputChange} />
        {formState.errors.name && <span>{formState.errors.name}</span>}
      </div>
      <div>
        <label>Número de cuenta:</label>
        <input type="text" name="accountNumber" value={formState.accountNumber} onChange={handleInputChange} />
        {formState.errors.accountNumber && <span>{formState.errors.accountNumber}</span>}
      </div>
      <div>
        <label>Saldo inicial:</label>
        <input type="text" name="initialBalance" value={formState.initialBalance} onChange={handleInputChange} />
        {formState.errors.initialBalance && <span>{formState.errors.initialBalance}</span>}
      </div>
      <div>
        <label>Tipo de cuenta:</label>
        <select name="accountType" value={formState.accountType} onChange={handleInputChange}>
          <option value="savings">Ahorros</option>
          <option value="checking">Corriente</option>
        </select>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default AccountForm;
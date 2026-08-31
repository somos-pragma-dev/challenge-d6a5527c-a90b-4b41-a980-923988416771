import React from 'react';
import AccountForm from './components/AccountForm';
import { accountService } from './services/accountService';

const App: React.FC = () => {
  const handleSubmit = (data: any) => {
    accountService.createAccount(data);
  };
  return (
    <div>
      <h1>Formulario de Cuenta Bancaria</h1>
      <AccountForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
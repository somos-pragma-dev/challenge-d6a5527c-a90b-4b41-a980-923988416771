export const accountValidator = (formState: any) => {
  const errors: any = {};
  if (formState.initialBalance < 0) {
    errors.initialBalance = 'El saldo inicial no puede ser negativo';
  }
  if (!/^\d{10}$/.test(formState.accountNumber)) {
    errors.accountNumber = 'El número de cuenta debe tener 10 dígitos';
  }
  if (!['savings', 'checking'].includes(formState.accountType)) {
    errors.accountType = 'Seleccione un tipo de cuenta válido';
  }
  return errors;
};
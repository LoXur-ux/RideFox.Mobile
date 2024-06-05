interface IRegistrationModel {
  login: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  secondName: string;
  lastName: string;
  birthday: string; // используем string для простоты
  verificationCode: string;
  step: number;
  error: string | null;
}

export default IRegistrationModel;

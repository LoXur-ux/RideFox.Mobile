interface IUserModel {
  id: string;
  login: string;
  email: string;
  phone: string;
  firstName: string;
  secondName: string;
  lastName: string | null;
  birthday: string;
}

export default IUserModel;

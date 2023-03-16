export default class AuthModel {
  id: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";

  constructor(data?: Partial<AuthModel>) {
    Object.assign(this, data);
  }
}

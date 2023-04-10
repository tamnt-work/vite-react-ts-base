export class AuthModel {
  id = '';
  firstName = '';
  lastName = '';
  email = '';

  constructor(data?: Partial<AuthModel>) {
    Object.assign(this, data);
  }
}

import { UserModel } from '@/app/user/user.model';
import { IEntity } from '@/core/IEntity';
import { Role } from '@/enums/role';

export class UserEntity implements IEntity<UserModel> {
  id = '';
  firstName = '';
  lastName = '';
  role: Role = Role.User;

  constructor(partial?: Partial<UserModel>) {
    Object.assign(this, partial);
  }

  toModel(): UserModel {
    return new UserModel({
      ...this,
    });
  }
}

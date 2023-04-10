import { IForm } from '@/core/IForm';
import { Role } from '@/enums/role';

export class CreateUserDto implements IForm {
  firstName: string | null = null;
  lastName: string | null = null;
  role: Role | null = null;

  constructor(partial?: Partial<CreateUserDto>) {
    Object.assign(this, partial);
  }

  toForm() {
    return {
      ...this,
    };
  }
}

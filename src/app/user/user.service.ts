import axios from '@/app/axios';
import { CreateUserDto } from '@/app/user/dto/create-user.dto';
import { UpdateUserDto } from '@/app/user/dto/update-user.dto';
import { UserEntity } from '@/app/user/user.entity';
import { UserModel } from '@/app/user/user.model';

const prefix = '/users';

const UserService = {
  /**
   * Get all users
   * @returns
   */
  async all(): Promise<Array<UserModel>> {
    const { data } = await axios.get<UserEntity[]>(prefix);

    return data.map((user) => user.toModel());
  },

  /**
   * Find one user by id
   * @param id
   * @returns
   */
  async findOne(id: string): Promise<UserModel> {
    const { data } = await axios.get<UserEntity>(`${prefix}/${id}`);

    return data.toModel();
  },

  /**
   * Create a new user
   * @param user
   * @returns
   */
  async create(user: CreateUserDto): Promise<UserModel> {
    const { data } = await axios.post<UserEntity>(prefix, user.toForm());

    return data.toModel();
  },

  async update(id: string, user: UpdateUserDto): Promise<UserModel> {
    const { data } = await axios.put<UserEntity>(`${prefix}/${id}`, user.toForm());

    return data.toModel();
  },

  /**
   * Delete a user
   * @param id
   * @returns
   */
  async delete(id: string): Promise<boolean> {
    const { data } = await axios.delete<UserEntity>(`${prefix}/${id}`);

    return !!data;
  },
};

export default UserService;

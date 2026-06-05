import { Injectable, NotFoundException } from '@nestjs/common';
import { IUserData } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private user: { id: number; name: string; age: number }[] = [
    { id: 1, name: 'shoqat', age: 20 },
    { id: 2, name: 'liaqat', age: 22 },
    { id: 3, name: 'jabbar', age: 23 },
    { id: 4, name: 'raheem', age: 25 },
  ];

  getUsers() {
    return this.user;
  }

  createUser(userData: IUserData) {
    this.user.push({
      ...userData,
      id: this.user.length + 1,
    });
    return userData;
  }

  findUserById(id: number) {
    let findUser = this.user.find((item) => item.id === id);
    if (!findUser) {
      throw new NotFoundException('user not found');
    }
    return findUser;
  }

  updateUser(id: number, userData: IUserData) {
    this.findUserById(id);
    this.user[id - 1] = {
      ...userData,
      id,
    };
    return userData;
  }
}

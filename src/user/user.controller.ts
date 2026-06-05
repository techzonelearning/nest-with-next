import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import type { IUserData } from './interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  fetchUser() {
    return this.userService.getUsers();
  }

  @Post()
  create(@Body() user: IUserData){
    return  this.userService.createUser(user)
  }

  @Get(":id")
  findUserById(@Param("id") id: string){
    return  this.userService.findUserById(+id)
  }

  @Put(":id")
  updateUser(@Param("id") id: string, @Body() userData: IUserData){
    return  this.userService.updateUser(+id, userData)
  }
}

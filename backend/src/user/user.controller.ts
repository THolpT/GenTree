import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import type { UserCreateInput, UserUpdateInput } from 'src/generated/models';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  create(@Body() data: UserCreateInput) {
    return this.userService.create(data);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UserUpdateInput) {
    return this.userService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}

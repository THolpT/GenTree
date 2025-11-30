import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { User } from 'src/generated/client';
import { UserCreateInput, UserUpdateInput } from 'src/generated/models';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({ include: { trees: true } });
  }

  async findOne(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ 
      where: { id }, 
      include: { trees: true } 
    });
  }

  async update(id: string, data: UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }
}

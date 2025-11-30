import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Tree } from 'src/generated/client';
import { TreeCreateInput, TreeUpdateInput } from 'src/generated/models';

@Injectable()
export class TreeService {
  constructor(private prisma: PrismaService) {}

  async create(data: TreeCreateInput): Promise<Tree> {
    return this.prisma.tree.create({ data });
  }

  async findAll(): Promise<Tree[]> {
    return this.prisma.tree.findMany({ include: { persons: true } });
  }

  async findOne(id: string): Promise<Tree | null> {
    return this.prisma.tree.findUnique({ where: { id }, include: { persons: true } });
  }

  async update(id: string, data: TreeUpdateInput): Promise<Tree> {
    return this.prisma.tree.update({ where: { id }, data });
  }

  async remove(id: string): Promise<Tree> {
    return this.prisma.tree.delete({ where: { id } });
  }
}

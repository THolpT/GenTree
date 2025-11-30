import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TreeService } from './tree.service.js';
import type { TreeCreateInput, TreeUpdateInput } from 'src/generated/models.js';

@Controller('trees')
export class TreeController {
  constructor(private readonly treeService: TreeService) {}

  @Post()
  create(@Body() data: TreeCreateInput) {
    return this.treeService.create(data);
  }

  @Get()
  findAll() {
    return this.treeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.treeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: TreeUpdateInput) {
    return this.treeService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.treeService.remove(id);
  }
}

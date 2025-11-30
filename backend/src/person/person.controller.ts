import { Controller, Get, Post, Body, Param, Patch, Delete, Put } from '@nestjs/common';
import { PersonService } from './person.service';
import type { PersonCreateInput, PersonUpdateInput } from 'src/generated/models';


@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() data: PersonCreateInput) {
    return this.personService.create(data);
  }

  @Get()
  async findAll() {
    return await this.personService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: PersonUpdateInput) {
    return this.personService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personService.remove(id);
  }
}

import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { TreeImportController } from './person.conroller.import';

@Module({
  providers: [PersonService],
  controllers: [PersonController, TreeImportController]
})
export class PersonModule {}

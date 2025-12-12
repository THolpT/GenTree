import { Controller, Post, Param, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PersonService } from './person.service';

@Controller('trees/:treeId')
export class TreeImportController {
  constructor(private readonly personService: PersonService) {}

  @Post('import-gedcom')
  @UseInterceptors(FileInterceptor('file'))
  async importGedcom(@Param('treeId') treeId: string, @UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException('Файл не загружен');
    const content = file.buffer.toString('utf8');
    return this.personService.importGedcomToTree(treeId, content);
  }
}

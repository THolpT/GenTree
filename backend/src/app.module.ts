import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TreeModule } from './tree/tree.module';
import { PersonModule } from './person/person.module';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    PersonModule,
    TreeModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

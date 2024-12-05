import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { Author, AuthorsSchema } from './schemas/authors.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Author.name, schema: AuthorsSchema }])],
  controllers: [AuthorsController],
  providers: [AuthorsService],
  exports: [AuthorsService],
})
export class AuthorsModule {}

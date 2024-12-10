import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book, BooksSchema } from './schemas/books.schema';
import { Author, AuthorsSchema } from 'src/authors/schemas/authors.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Book.name, schema: BooksSchema },
    { name: Author.name, schema: AuthorsSchema },
  ])],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}

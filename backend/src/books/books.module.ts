import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book, BooksSchema } from './schemas/books.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Book.name, schema: BooksSchema }])],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}

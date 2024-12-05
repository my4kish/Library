import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Book extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ type: [Types.ObjectId], ref: 'Author', required: true })
  authorIds: Types.ObjectId[];

  @Prop({ type: [String] })
  genres: string[];

  @Prop()
  description: string;

  @Prop()
  publicationDate: Date;

  @Prop({ unique: true })
  isbn: string;

  @Prop()
  language: string;

  @Prop()
  pages: number;

  @Prop()
  coverImageUrl: string;

  @Prop()
  fileUrl: string;

  @Prop({
    type: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },
  })
  ratings: { average: number; count: number };
}

export const BooksSchema = SchemaFactory.createForClass(Book);

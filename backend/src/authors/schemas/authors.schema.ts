import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Author extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  birthDate: Date;

  @Prop()
  deathDate: Date;

  @Prop()
  nationality: string;

  @Prop()
  bio: string;

  @Prop()
  photoUrl: string;

  @Prop({ type: [Types.ObjectId], ref: 'Book' })
  books: Types.ObjectId[];
}

export const AuthorsSchema = SchemaFactory.createForClass(Author);

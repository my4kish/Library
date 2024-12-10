import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [Types.ObjectId], ref: 'Book' })
  favorites: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'Review' })
  reviews: Types.ObjectId[];
}

export const UsersSchema = SchemaFactory.createForClass(User);

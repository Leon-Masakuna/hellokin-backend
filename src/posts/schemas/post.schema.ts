import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema({
  timestamps: true,
})
export class Post {
  @Prop()
  userName: string;

  @Prop()
  userProfile: string;

  @Prop()
  postContent: string;

  @Prop()
  postContentTitle: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);

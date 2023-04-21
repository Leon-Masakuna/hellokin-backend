import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type UserDocument = User & Document;

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ unique: [true, 'Duplicate user email or phone entered'] })
  phoneOrEmail: string;

  @Prop()
  fullName: string;

  @Prop()
  userName: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

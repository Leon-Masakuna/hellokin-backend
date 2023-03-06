import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ unique: [true, 'Duplicate user name entered'] })
  phoneOrEmail: string;

  @Prop()
  fullName: string;

  @Prop({ unique: [true, 'Duplicate user name entered'] })
  userName: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

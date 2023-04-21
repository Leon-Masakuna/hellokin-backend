import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';
import { User } from '../../model/user.schema';

export class CreatePostDto {
  @IsEmpty({ message: 'You cannot pass user id manually' })
  readonly user: User;

  @IsNotEmpty()
  @IsString()
  readonly postContent: string;

  @IsNotEmpty()
  @IsString()
  readonly postContentTitle: string;
}

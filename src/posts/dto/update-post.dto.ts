import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';
import { User } from '../../model/user.schema';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsEmpty({ message: 'You cannot pass user id manually' })
  readonly user: User;

  @IsNotEmpty()
  @IsString()
  readonly postContent: string;

  @IsNotEmpty()
  @IsString()
  readonly postContentTitle: string;
}

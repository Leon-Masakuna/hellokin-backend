import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  readonly userName: string;

  @IsString()
  readonly userProfile: string;

  @IsString()
  readonly postContent: string;

  @IsString()
  readonly postContentTitle: string;
}

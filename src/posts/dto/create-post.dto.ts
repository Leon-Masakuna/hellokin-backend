import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  readonly user: string;

  @IsString()
  readonly postContent: string;

  @IsString()
  readonly postContentTitle: string;
}

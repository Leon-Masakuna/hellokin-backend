import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsEmail()
  readonly phoneOrEmail: string;

  @IsNotEmpty()
  @IsString()
  readonly fullName: string;

  @IsNotEmpty()
  @IsString()
  readonly userName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  readonly password: string;
}

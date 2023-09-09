import { PickType } from '@nestjs/mapped-types';
import { Length, IsString, IsEmail, IsInt, IsNotEmpty } from 'class-validator';

export class AuthDto {
  @IsInt()
  id: number;

  @IsString()
  nama: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsString()
  avatar: string;

  @IsString()
  @Length(8)
  password: string;

  @IsString()
  refresh_token: string;

  @IsString()
  role: string;
}

export class RegisterDto extends PickType(AuthDto, [
  'nama',
  'email',
  'password',
]) {}

import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class LoginDto{

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Transform(({value})=> value.trim())
  @IsString()
  @MinLength(8)
  password: string;

}
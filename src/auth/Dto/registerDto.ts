import { IsDateString, IsEmail, IsISO8601, IsNotEmpty, IsString, IsUUID, MaxLength, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterDto{
  @Transform(({value})=> value.trim())
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  first_name: string;

  @Transform(({value})=> value.trim())
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Transform(({value})=> value.trim())
  @IsString()
  @MinLength(8)
  password: string;

  @Transform(({value})=> value.trim())
  @IsString()
  @MinLength(8)
  confirm_password: string;



  //@IsISO8601(undefined,{each:true})
  //@IsDateString(undefined,{each:true})
  //@MaxLength(50, {each:true})
  //birthday: Date;
}
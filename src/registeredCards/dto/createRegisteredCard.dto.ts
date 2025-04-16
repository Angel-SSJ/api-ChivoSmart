import {IsString,IsUUID, IsNotEmpty, IsDate,IsInt, ValidateNested} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { UserDto } from 'src/users/dto/userDto';

export class RegisteredCardsDto {

  @IsUUID()
  id: string;


  @IsNotEmpty()
  @IsInt()
  card_number:number;

  @IsNotEmpty()
  @IsInt()
  cvv:number;


  @IsNotEmpty()
  @IsInt()
  amount:number;


  @IsNotEmpty()
  @IsDate()
  expiration_date:Date;

  @IsNotEmpty()
  @IsDate()
  created_at:Date;

  @IsDate()
  deleted_at:Date;

  @IsDate()
  updated_at:Date;


  @ValidateNested({each:true})
  @Type(()=>TypesRegisteredCardDto)
  card_type_name:TypesRegisteredCardDto[];


  @ValidateNested({each:true})
  @Type(()=>BanksDto)
  bank_id:BanksDto[];

  @ValidateNested({each:true})
  @Type(()=>UserRegisteredCardsDto)
  user_registered_cards_id:UserRegisteredCardsDto[];


}


export class UserRegisteredCardsDto{

  @IsUUID()
  id: string;

  @Transform(({value})=> value.trim())
  @IsString()
  @IsNotEmpty()
  name:string;

  @Transform(({value})=> value.trim())
  @IsString()
  @IsNotEmpty()
  status:string;

  @IsNotEmpty()
  @IsDate()
  created_at:Date;

  @IsDate()
  deleted_at:Date;

  @IsDate()
  updated_at:Date;

  @ValidateNested({each:true})
  @Type(()=>UserDto)
  user_id:UserDto[];

  @ValidateNested({each:true})
  @Type(()=>RegisteredCardsDto)
  own_registered_id:RegisteredCardsDto[];

}


export class TypesRegisteredCardDto{

  @IsUUID()
  id: string;

  @Transform(({value})=> value.trim())
  @IsString()
  @IsNotEmpty()
  name:string;

  @Transform(({value})=> value.trim())
  @IsString()
  @IsNotEmpty()
  registered_card_logo:string;

  @IsNotEmpty()
  @IsDate()
  created_at:Date;

  @IsDate()
  deleted_at:Date;

  @IsDate()
  updated_at:Date;


  @ValidateNested({each:true})
  @Type(()=>RegisteredCardsDto)
  registered_card_id:RegisteredCardsDto[];



}


export class BanksDto{

  @IsUUID()
  id: string;

  @Transform(({value})=> value.trim())
  @IsString()
  @IsNotEmpty()
  name:string;

  @Transform(({value})=> value.trim())
  @IsString()
  @IsNotEmpty()
  bank_logo:string;

  @Transform(({value})=> value.trim())
  @IsString()
  @IsNotEmpty()
  status:string;

  @IsNotEmpty()
  @IsDate()
  created_at:Date;

  @IsDate()
  deleted_at:Date;

  @IsDate()
  updated_at:Date;

  @ValidateNested({each:true})
  @Type(()=>RegisteredCardsDto)
  registered_card_id:RegisteredCardsDto[];



}
import {IsString,IsUUID, IsNotEmpty, IsDate,IsInt, ValidateNested} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { UserDto } from 'src/users/dto/userDto';

export class UpdateRegisteredCardsDto {

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
  @Type(()=>UpdateTypesRegisteredCardDto)
  card_type_name:UpdateTypesRegisteredCardDto[];


  @ValidateNested({each:true})
  @Type(()=>UpdateBanksDto)
  bank_id:UpdateBanksDto[];

  @ValidateNested({each:true})
  @Type(()=>UpdateUserRegisteredCardsDto)
  user_registered_cards_id:UpdateUserRegisteredCardsDto[];

}


export class UpdateUserRegisteredCardsDto {

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
  @Type(()=>UpdateRegisteredCardsDto)
  own_registered_id:UpdateRegisteredCardsDto[];

}


export class UpdateTypesRegisteredCardDto {

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
  @Type(()=>UpdateRegisteredCardsDto)
  registered_card_id:UpdateRegisteredCardsDto[];


}


export class UpdateBanksDto {

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
  @Type(()=>UpdateRegisteredCardsDto)
  registered_card_id:UpdateRegisteredCardsDto[];

}
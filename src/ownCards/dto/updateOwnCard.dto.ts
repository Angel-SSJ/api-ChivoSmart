
import { ValidateNested,IsJSON,MinLength,IsString,IsUUID, IsNotEmpty,IsEmail,IsISO8601, IsDateString,MaxLength, IsDate,IsInt} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { UserDto } from 'src/users/dto/userDto';

export class UpdateOwnCardsDto {

  @IsUUID()
  id: string;

  @IsInt()
  @IsNotEmpty()
  card_number:number;

  @IsNotEmpty()
  @IsDate()
  expiration_date:Date;

  @IsInt()
  @IsNotEmpty()
  cvv:number;

  @IsInt()
  @IsNotEmpty()
  amount:number;

  @IsNotEmpty()
  @IsDate()
  created_at:Date;

  @IsDate()
  deleted_at:Date;

  @IsDate()
  updated_at:Date;

  @ValidateNested({each:true})
  @Type(()=>UpdateTypesOwnCardDto)
  card_type_name:UpdateTypesOwnCardDto[];


}

export class UpdateUserOwnCardsDto {

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
  @Type(()=>UpdateOwnCardsDto)
  own_card_id:UpdateOwnCardsDto[];

}

export class UpdateTypesOwnCardDto {

  @IsUUID()
  id: string;

  @Transform(({value})=> value.trim())
  @IsString()
  @IsNotEmpty()
  name:string;

  @IsNotEmpty()
  @IsDate()
  created_at:Date;

  @IsDate()
  deleted_at:Date;

  @IsDate()
  updated_at:Date;

  @Transform(({value})=> value.trim())
  @IsString()
  @IsNotEmpty()
  cards_logo:string;


}

import { ValidateNested,IsJSON,MinLength,IsString,IsUUID, IsNotEmpty,IsEmail,IsISO8601, IsDateString,MaxLength, IsDate,IsInt} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { UserDto } from 'src/users/dto/userDto';

export class OwnCardsDto {

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
  @Type(()=>TypesOwnCardDto)
  card_type_name:TypesOwnCardDto[];


}

export class UserOwnCardsDto{

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
  @Type(()=>OwnCardsDto)
  own_card_id:OwnCardsDto[];


}

export class TypesOwnCardDto {

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
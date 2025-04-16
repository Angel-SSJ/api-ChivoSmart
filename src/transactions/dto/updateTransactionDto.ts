
import {IsString,IsUUID, IsNotEmpty, IsDate,IsInt, ValidateNested} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { UserOwnCardsDto } from 'src/ownCards/dto/createOwnCard.dto';
import { UserRegisteredCardsDto } from 'src/registeredCards/dto/createRegisteredCard.dto';

export class UpdateTransactionsDto {

  @IsUUID()
  id: string;

  @IsInt()
  @IsNotEmpty()
  amount:number;


  @IsString()
  @IsNotEmpty()
  title:string;

  @IsString()
  @IsNotEmpty()
  description:string;

  @Transform(({value})=> value.trim())
  @IsString()
  @IsNotEmpty()
  status:string;

  @IsString()
  @IsNotEmpty()
  decline_reason:string;

  @IsNotEmpty()
  @IsDate()
  date:Date;

  @ValidateNested({each:true})
  @Type(()=>UpdateTypeTransactionsDto)
  type_transaction:UpdateTypeTransactionsDto[];

  @ValidateNested({each:true})
  @Type(()=>UpdateCategoryTransactionsDto)
  category_transaction:UpdateCategoryTransactionsDto[];

  @ValidateNested({each:true})
  @Type(()=>UserOwnCardsDto)
  card_own:UserOwnCardsDto[];


  @ValidateNested({each:true})
  @Type(()=>UserRegisteredCardsDto)
  card_registeredard:UserRegisteredCardsDto[];


  @ValidateNested({each:true})
  @Type(()=>UserRegisteredCardsDto)
  destination_registered_card:UserRegisteredCardsDto[];


  @ValidateNested({each:true})
  @Type(()=>UserOwnCardsDto)
  destination_own_card:UserOwnCardsDto[];


}

export class UpdateTypeTransactionsDto {
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
}
export class UpdateCategoryTransactionsDto {
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
}

export class UpdateScheduleTransactionsDto {

  @IsUUID()
  id: string;

  @IsInt()
  @IsNotEmpty()
  amount:number;

  @IsString()
  @IsNotEmpty()
  title:string;

  @IsString()
  @IsNotEmpty()
  description:string;

  @Transform(({value})=> value.trim())
  @IsString()
  @IsNotEmpty()
  status:string;

  @IsString()
  @IsNotEmpty()
  decline_reason:string;

  @IsNotEmpty()
  @IsDate()
  date:Date;

  @Transform(({value})=> value.trim())
  @IsNotEmpty()
  @IsString()
  frequency:string;

  @IsNotEmpty()
  @IsDate()
  start_date:Date;

  @IsNotEmpty()
  @IsDate()
  end_date:Date;


  @ValidateNested({each:true})
  @Type(()=>UpdateTypeTransactionsDto)
  type_transaction:UpdateTypeTransactionsDto[];

  @ValidateNested({each:true})
  @Type(()=>UpdateCategoryTransactionsDto)
  category_transaction:UpdateCategoryTransactionsDto[];

  @ValidateNested({each:true})
  @Type(()=>UserOwnCardsDto)
  card_own:UserOwnCardsDto[];


  @ValidateNested({each:true})
  @Type(()=>UserRegisteredCardsDto)
  card_registeredard:UserRegisteredCardsDto[];


  @ValidateNested({each:true})
  @Type(()=>UserRegisteredCardsDto)
  destination_registered_card:UserRegisteredCardsDto[];


  @ValidateNested({each:true})
  @Type(()=>UserOwnCardsDto)
  destination_own_card:UserOwnCardsDto[];

}

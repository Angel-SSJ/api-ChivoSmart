import { ValidateNested,IsJSON,MinLength,IsString,IsUUID, IsNotEmpty,IsEmail,IsISO8601, IsDateString,MaxLength, IsDate} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { UserOwnCardsDto } from 'src/ownCards/dto/createOwnCard.dto';
import { UserRegisteredCardsDto } from 'src/registeredCards/dto/createRegisteredCard.dto';


export class UserDto {
  @IsUUID()
  id: string;

  @Transform(({value})=> value.trim())
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  first_name: string;

  @Transform(({value})=> value.trim())
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  last_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Transform(({value})=> value.trim())
  @IsString()
  @MinLength(8)
  password: string;

  //@Transform((birthday)=>Date('DD/MM/YY'), (value)=> new Date(value))
  @IsNotEmpty()
  @IsDate()
  birthday:Date;



  @IsNotEmpty()
  @IsDate()
  created_at:Date;

  @IsDate()
  deleted_at:Date;


  @IsDate()
  updated_at:Date;

  @Transform(({value})=> value.trim())
  @IsString()
  profile_picture:string;

  @Transform(({value})=> value.trim())
  @IsString()
  fcm_token:string;

  @ValidateNested({each:true})
  @Type(()=>UserPreferenceDto)
  user_preference_id:UserPreferenceDto[];

  @ValidateNested({each:true})
  @Type(()=>UserSessionsDto)
  user_sessions:UserSessionsDto[];

  @ValidateNested({each:true})
  @Type(()=>NotificationsDto)
  user_notifications:NotificationsDto[];

  @ValidateNested({each:true})
  @Type(()=>UserOwnCardsDto)
  user_own_cards:UserOwnCardsDto[]

  @ValidateNested({each:true})
  @Type(()=>UserRegisteredCardsDto)
  user_registered_cards:UserRegisteredCardsDto[]




}


export class UserPreferenceDto{

  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  theme:string;

  @IsString()
  @IsNotEmpty()
  suggestion_frequency:string;

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

}


export class UserSessionsDto{

  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsDate()
  date:Date;


  @IsNotEmpty()
  @IsString()
  status:string;

  @IsNotEmpty()
  @IsString()
  device:string;

  @ValidateNested({each:true})
  @Type(()=>UserDto)
  user_id:UserDto[];
}


export class SuggestionsDto{

  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  title:string

  @IsNotEmpty()
  @IsString()
  description:string;

  @IsJSON()
  @IsNotEmpty()
  content:JSON; // a json that can contains multiple information


  @IsNotEmpty()
  @IsString()
  suggestion_type:string

  @IsNotEmpty()
  @IsString()
  frequency:number;


  @IsNotEmpty()
  @IsDate()
  start_at:Date;

  @IsNotEmpty()
  @IsDate()
  end_at:Date;



  @IsNotEmpty()
  @IsDate()
  created_at:Date;

  @IsDate()
  deleted_at:Date;

  @IsDate()
  updated_at:Date;
}


export class NotificationsDto{

  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  title:string

  @IsNotEmpty()
  @IsString()
  message:string;

  @IsNotEmpty()
  @IsString()
  description:string;

  @IsNotEmpty()
  @IsJSON()
  data:JSON; // a json that can contains multiple information

  @IsNotEmpty()
  @IsDate()
  created_at:Date;

  @IsDate()
  deleted_at:Date;

  @IsDate()
  updated_at:Date;

  @ValidateNested({each:true})
  @Type(()=>UserDto)
  user_id:UserDto;
}
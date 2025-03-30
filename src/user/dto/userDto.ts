import { ValidateNested,IsJSON,MinLength,IsString,IsUUID, IsNotEmpty,IsEmail,IsISO8601, IsDateString,MaxLength} from 'class-validator';
import {Type} from 'class-transformer'

export class userDto{
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)

  firstName_name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString
  @MinLength(8)
  password: string;


  @IsISO8601(undefined,{each:true})
  @IsDateString(undefined,{each:true})
  @MaxLength(50, {each:true})
  birthday: Date;



  @IsISO8601(undefined,{each:true})
  @IsDateString(undefined,{each:true})
  @MaxLength(50, {each:true})
  created_at:Date;

  @IsISO8601(undefined,{each:true})
  @IsDateString(undefined,{each:true})
  @MaxLength(50, {each:true})
  deleted_at:Date;

  @IsISO8601(undefined,{each:true})
  @IsDateString(undefined,{each:true})
  @MaxLength(50, {each:true})
  updated_at:Date;

  @ValidateNested({each:true})
  @Type(()=>UserPreferenceDto)
  user_preferences_id:UserPreferenceDto[]

  @Type(()=>UserSessionsDto)
  user_sessions_id:UserSessionsDto[]

  @Type(()=>NotificationsDto)
  user_notifications_id:NotificationsDto[]
}


export class UserPreferenceDto{

  @IsUUID()
  id: string;

  //@Column()
  //theme:string;

  suggestion_frequency:string;

  @IsISO8601(undefined,{each:true})
  @IsDateString(undefined,{each:true})
  @MaxLength(50, {each:true})
  created_at:Date;

  @IsISO8601(undefined,{each:true})
  @IsDateString(undefined,{each:true})
  @MaxLength(50, {each:true})
  deleted_at:Date;

  @IsISO8601(undefined,{each:true})
  @IsDateString(undefined,{each:true})
  @MaxLength(50, {each:true})
  updated_at:Date;
}


export class UserSessionsDto{

  @IsUUID()
  id: string;



  @IsISO8601(undefined,{each:true})
  @IsDateString(undefined,{each:true})
  @MaxLength(50, {each:true})
  date:Date;

  @IsNotEmpty()
  @IsString()
  status:string;

  @IsNotEmpty()
  @IsString()
  device:string;

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
  content:JSON; // a json that can contains multiple information


  @IsNotEmpty()
  @IsString()
  suggestion_type:string

  @IsNotEmpty()
  @IsString()
  frequency:number;


  @IsISO8601(undefined,{each:true})
  @IsDateString(undefined,{each:true})
  @MaxLength(50, {each:true})
  start_at:Date;

  @IsISO8601(undefined,{each:true})
  @IsDateString(undefined,{each:true})
  @MaxLength(50, {each:true})
  end_at:Date;

  @IsISO8601(undefined,{each:true})
  @IsDateString(undefined,{each:true})
  @MaxLength(50, {each:true})
  created_at:Date;

  @IsISO8601(undefined,{each:true})
  @IsDateString(undefined,{each:true})
  @MaxLength(50, {each:true})
  deleted_at:Date;

  @IsISO8601(undefined,{each:true})
  @IsDateString(undefined,{each:true})
  @MaxLength(50, {each:true})
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
  @IsString()
  data:string; // a json that can contains multiple information


  @IsISO8601(undefined,{each:true})
  @IsDateString(undefined,{each:true})
  @MaxLength(50, {each:true})
  created_at:Date;

  @IsISO8601(undefined,{each:true})
  @IsDateString(undefined,{each:true})
  @MaxLength(50, {each:true})
  deleted_at:Date;

  @IsISO8601(undefined,{each:true})
  @IsDateString(undefined,{each:true})
  @MaxLength(50, {each:true})
  updated_at:Date;
}
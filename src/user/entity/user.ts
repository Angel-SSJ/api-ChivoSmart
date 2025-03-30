import {Entity, PrimaryGeneratedColumn, Column,OneToMany,} from 'typeorm'
import {
  IsDateString,
  IsEmail,
  IsISO8601,
  IsNotEmpty,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { NotificationsDto, UserSessionsDto } from '../dto/userDto';

@Entity({name:'users'})
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;


  @Column()
  birthday: Date;



  @Column()
  created_at:Date;

  @Column()
  deleted_at:Date;

  @Column()
  updated_at:Date;

  /*
  @OneToMany(()=>UserPreference, user_preferences_id=> user_preferences_id.user_id, {cascade:true, eager:true})
  user_preferences_id:UserPreference[]

  @OneToMany(()=>UserSessions, user_sessions_id=> user_sessions_id.user_id, {cascade:true, eager:true})
  user_sessions_id:UserSessions[]

  @OneToMany(()=>Notifications,user_notifications_id=>user_notifications_id.user_id, {cascade:true, eager:true})
  user_notifications_id:Notifications[]
  */

// profile_picture:en duda, talvez sea uuid
// fcm_token:En duda, no se si se va a usar como string o que / es string
}

/*
@Entity({name:'user_preferences'})
export class UserPreference{
  @PrimaryGeneratedColumn('uuid')
  id:string;

  //TODO: ver como se puede vincular con id de user.
  @OneToMany(()=>User, (user_id)=>user_id.user_preferences_id, {cascade:true, eager:true})
  user_id:User;

  //@Column()
  //theme:string;

  @Column()
  suggestion_frequency:string;

  @Column()
  created_at:Date;

  @Column()
  deleted_at:Date;

  @Column()
  updated_at:Date;
}

@Entity({name:'user_sessions'})
export class UserSessions{

  @PrimaryGeneratedColumn('uuid')
  id:string;


  @OneToMany(()=>User, (user_id)=>user_id.user_sessions_id, {cascade:true, eager:true})
  user_id:User;

  @Column()
  date:Date;

  @Column()
  status:string;

  @Column()
  device:string;

}

@Entity({name:'suggestions'})
export class Suggestions{

  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  title:string

  @Column()
  description:string;

  @Column()
  content:JSON; // a json that can contains multiple information


  @Column()
  suggestion_type:string

  @Column()
  frequency:number;

  @Column()
  start_date:Date;

  @Column()
  end_date:Date;

  @Column()
  created_at:Date;

  @Column()
  deleted_at:Date;

  @Column()
  updated_at:Date;
}

@Entity({name:'notifications'})
export class Notifications{

  @PrimaryGeneratedColumn('uuid')
  id:string;

  @OneToMany(()=>User, (user_id)=>user_id.user_notifications_id, {cascade:true, eager:true})
  user_id:User;

  @Column()
  title:string

  @Column()
  message:string;

  @Column()
  description:string;

  @Column()
  data:string; // a json that can contains multiple information



  @Column()
  created_at:Date;

  @Column()
  deleted_at:Date;

  @Column()
  updated_at:Date;
}
 */
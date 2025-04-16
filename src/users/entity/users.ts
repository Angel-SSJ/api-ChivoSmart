import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';
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
import { UserOwnCards } from 'src/ownCards/entity/ownCards';
import { UserRegisteredCards } from 'src/registeredCards/entity/registeredCards';

@Entity({name:'users'})
export class Users {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable:false})
  first_name: string;

  @Column({nullable:false})
  last_name: string;

  @Column({unique:true, nullable:false})
  email: string;

  @Column({nullable:false})
  password: string;

  @Column({type: 'date',nullable:false})
  birthday:Date;

  @CreateDateColumn({type:'timestamp'})
  created_at:Date;

  @DeleteDateColumn()
  deleted_at:Date;

  @UpdateDateColumn()
  updated_at:Date;

  @Column({nullable:false})
  profile_picture:string;

  @Column({nullable:false})
  fcm_token:string;


  @OneToOne(()=>UserPreference,(userPreference)=>userPreference.id, {cascade:true, eager:true})
  user_preference_id:UserPreference[];

  @OneToMany(()=>UserSessions,(userSessions)=>userSessions.id, {cascade:true, eager:true})
  user_sessions:UserSessions[];

  @ManyToOne(()=>Notifications,(notifications)=>notifications.id, {cascade:true, eager:true})
  user_notifications:Notifications[];

  @OneToMany(()=>UserOwnCards,(userOwnCards)=>userOwnCards.id, {cascade:true, eager:true})
  user_own_cards:UserOwnCards[];

  @OneToMany(()=>UserRegisteredCards, (userRegisteredCards)=> userRegisteredCards.id, {cascade:true, eager:true})
  user_registered_cards:UserRegisteredCards[]
}


@Entity({name:'user_preference'})
export class UserPreference{
  @PrimaryGeneratedColumn('uuid')
  id:string;


  @Column()
  theme:string;


  @Column()
  language:string;

  @Column()
  suggestion_frequency:string;

  @OneToOne(()=>Users, (users)=>users.id, {cascade:true, eager:true})
  user_id:Users[];

  @CreateDateColumn({type:'timestamp'})
  created_at:Date;

  @DeleteDateColumn()
  deleted_at:Date;

  @UpdateDateColumn()
  updated_at:Date;


}

@Entity({name:'user_sessions'})
export class UserSessions{

  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  status:string;

  @Column()
  device:string;



  @Column({type: 'date',nullable:false})
  date:Date;

  @ManyToOne(()=>Users, (users)=>users.id, {cascade:true, eager:true})
  user_id:Users[];



}

@Entity({name:'suggestions'})
export class Suggestions{

  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  title:string

  @Column()
  description:string;


  @Column({type: 'json',nullable:false})
  content:string; // a json that can contains multiple information


  @Column()
  suggestion_type:string

  @Column()
  frequency:number;


  @Column({type: 'timestamp',nullable:false})
  start_date:Date;

  @Column({type: 'timestamp',nullable:false})
  end_date:Date;

  @CreateDateColumn({type:'timestamp'})
  created_at:Date;

  @DeleteDateColumn()
  deleted_at:Date;

  @UpdateDateColumn()
  updated_at:Date;
}

@Entity({name:'notifications'})
export class Notifications{

  @PrimaryGeneratedColumn('uuid')
  id:string;


  @OneToMany(()=>Users, (users)=>users.id, {cascade:true, eager:true})
  user_id:Users[];

  @Column()
  title:string

  @Column()
  message:string;

  @Column()
  description:string;

  @Column({type: 'json',nullable:false})
  data:JSON; // a json that can contains multiple information

  @CreateDateColumn({type:'timestamp'})
  created_at:Date;

  @DeleteDateColumn()
  deleted_at:Date;

  @UpdateDateColumn()
  updated_at:Date;
}


//TODO: posible un notifications-token table
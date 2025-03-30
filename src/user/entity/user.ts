import {Entity, PrimaryGeneratedColumn, Column, GeneratedColumn} from 'typeorm'

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

  //TODO: fcm_token:En duda, no se si se va a usar como string o que

  @Column()
  birthday: Date;

  //TODO: profile_picture:en duda, talvez sea uuid

  @Column()
  created_at:Date;

  @Column()
  deleted_at:Date;

  @Column()
  updated_at:Date;



}

@Entity({name:'user_preferences'})
export class UserPreference{
  @PrimaryGeneratedColumn('uuid')
  id:string;

  //TODO: ver como se puede vincular con id de user.
  @Column()
  user_id:string

  @Column()
  theme:string;

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

//TODO: ver como se puede vincular con id de user.
  @Column()
  user_id:string;

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

  //TODO: tengo que ver que hago con content
  @Column()
  content:string; // a json that can contains multiple information


  @Column()
  suggestion_type:string

  //TODO: tengo que ver que hago con frequency
  @Column()
  frequency:string;

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

  //TODO: ver como se puede vincular con id de user.
  @Column()
  user_id:string

  @Column()
  title:string

  @Column()
  message:string;

  @Column()
  description:string;

  //TODO: tengo que ver que hago con content
  @Column()
  data:string; // a json that can contains multiple information



  @Column()
  created_at:Date;

  @Column()
  deleted_at:Date;

  @Column()
  updated_at:Date;
}
import {Entity, PrimaryGeneratedColumn, Column, GeneratedColumn} from 'typeorm'

@Entity({name:'own_cards'})
export class OwnCards {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  card_number:number;

  @Column()
  expiration_date:Date;

  @Column()
  cvv:number;

  @Column()
  card_type:string;

  @Column()
  amount:number;

  @Column()
  created_at:Date;

  @Column()
  deleted_at:Date;

  @Column()
  updated_at:Date;

}

@Entity({name:'user_own_cards'})
export class UserOwnCards{

  @PrimaryGeneratedColumn('uuid')
  id: string;

  //TODO: ver como habgo para conectar con los IDs
  @Column()
  user_id:string;

  @Column()
  own_card_id:string;

  @Column()
  name:string;

  @Column()
  status;string;

  @Column()
  created_at:Date;

  @Column()
  deleted_at:Date;

  @Column()
  updated_at:Date;



}

@Entity({name:'own_card_types'})
export class TypesOwnCard{

  @PrimaryGeneratedColumn('uuid')
  id: string;



  @Column()
  name:string;
  //TODO: ver si se puede usar uuid
  // logo:string;

  @Column()
  created_at:Date;

  @Column()
  deleted_at:Date;

  @Column()
  updated_at:Date;


}
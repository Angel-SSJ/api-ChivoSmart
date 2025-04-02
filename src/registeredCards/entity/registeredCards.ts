import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({name:'registered_cards'})
export class RegisteredCards {

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

  //TODO: ver como habgo para conectar con los IDs
  // @Column()
  //  bank_id:string;

  @Column()
  amount:number;

  @Column()
  created_at:Date;

  @Column()
  deleted_at:Date;

  @Column()
  updated_at:Date;

}

@Entity({name:'user_registered_cards'})
export class UserRegisteredCards{

  @PrimaryGeneratedColumn('uuid')
  id: string;

  //TODO: ver como habgo para conectar con los IDs
  @Column()
  user_id:string;

  @Column()
  own_registered_id:string;

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

@Entity({name:'registered_card_types'})
export class TypesRegisteredCard{

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

@Entity({name:'banks'})
export class Banks{

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name:string;

  //TODO: ver si se puede usar uuid
  // logo:string;

  @Column()
  status:string;

//TODO:  caretuda: nose que quise escribir
  
  @Column()
  created_at:Date;

  @Column()
  deleted_at:Date;

  @Column()
  updated_at:Date;


}

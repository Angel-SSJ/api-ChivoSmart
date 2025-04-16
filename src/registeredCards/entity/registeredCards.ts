import { Users } from 'src/users/entity/users';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, OneToMany} from 'typeorm'

@Entity({name:'registered_cards'})
export class RegisteredCards {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  card_number:number;

  @Column()
  cvv:number;


  @Column()
  amount:number;


  @Column({type: 'timestamp',nullable:false})
  expiration_date:Date;

  @CreateDateColumn({type:'timestamp'})
  created_at:Date;

  @DeleteDateColumn()
  deleted_at:Date;

  @UpdateDateColumn()
  updated_at:Date;

  @ManyToOne(()=>TypesRegisteredCard,(typesRegisteredCard)=>typesRegisteredCard.name, {cascade:true,eager:true})
  card_type_name:TypesRegisteredCard[];

  @ManyToOne(()=>Banks,(banks)=>banks.id, {cascade:true,eager:true})
  bank_id:Banks[];

  @ManyToOne(()=>UserRegisteredCards,(userRegisteredCards)=>userRegisteredCards.id, {cascade:true,eager:true})
  user_registered_cards_id:UserRegisteredCards[];
}

@Entity({name:'user_registered_cards'})
export class UserRegisteredCards{

  @PrimaryGeneratedColumn('uuid')
  id: string;



  @Column()
  name:string;

  @Column()
  status:string;

  @CreateDateColumn({type:'timestamp'})
  created_at:Date;

  @DeleteDateColumn()
  deleted_at:Date;

  @UpdateDateColumn()
  updated_at:Date;

  @ManyToOne(()=>Users,(users)=>users.id, {cascade:true,eager:true})
  user_id:Users[];

  @OneToMany(()=>RegisteredCards,(registeredCards)=>registeredCards.id, {cascade:true,eager:true})
  own_registered_id:RegisteredCards[];

}

@Entity({name:'registered_card_types'})
export class TypesRegisteredCard{

  @PrimaryGeneratedColumn('uuid')
  id: string;



  @Column()
  name:string;

  @Column({nullable:true})
  registered_card_logo:string;


  @CreateDateColumn({type:'timestamp'})
  created_at:Date;

  @DeleteDateColumn()
  deleted_at:Date;

  @UpdateDateColumn()
  updated_at:Date;

  @OneToMany(()=>RegisteredCards,(registeredCards)=>registeredCards.id, {cascade:true,eager:true})
  registered_card_id:RegisteredCards[];


}

@Entity({name:'banks'})
export class Banks{

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name:string;

  @Column({nullable:true})
  bank_logo:string;

  @Column()
  status:string;

  @CreateDateColumn({type:'timestamp'})
  created_at:Date;

  @DeleteDateColumn()
  deleted_at:Date;

  @UpdateDateColumn()
  updated_at:Date;

  @OneToMany(()=>RegisteredCards,(registeredCards)=>registeredCards.id, {cascade:true,eager:true})
  registered_card_id:RegisteredCards[];

}

import { Users } from 'src/users/entity/users';
import {Entity, PrimaryGeneratedColumn, Column,CreateDateColumn, DeleteDateColumn, UpdateDateColumn, OneToMany, OneToOne, ManyToOne} from 'typeorm'

@Entity({name:'own_cards'})
export class OwnCards {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  card_number:number;

  @Column({type:'timestamp', nullable:false})
  expiration_date:Date;

  @Column()
  cvv:number;



  @Column()
  amount:number;

  @CreateDateColumn({type:'timestamp'})
  created_at:Date;

  @DeleteDateColumn()
  deleted_at:Date;

  @UpdateDateColumn()
  updated_at:Date;

  @ManyToOne(()=>TypesOwnCard, (typesOwnCard)=>typesOwnCard.name,{cascade:true,eager:true})
  card_type_name:TypesOwnCard[]

}

@Entity({name:'user_own_cards'})
export class UserOwnCards{

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

  @ManyToOne(()=>Users, (users)=>users.id,{cascade:true,eager:true})
  user_id:Users[];

  @OneToOne(()=>OwnCards, (ownCards)=>ownCards.id,{cascade:true, eager:true})
  own_card_id:OwnCards[];



}

@Entity({name:'own_card_types'})
export class TypesOwnCard{

  @PrimaryGeneratedColumn('uuid')
  id: string;



  @Column()
  name:string;

  @CreateDateColumn({type:'timestamp'})
  created_at:Date;

  @DeleteDateColumn()
  deleted_at:Date;

  @UpdateDateColumn()
  updated_at:Date;

  @Column({nullable:true})
  cards_logo:string;


}
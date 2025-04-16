import { UserOwnCards } from 'src/ownCards/entity/ownCards';
import { UserRegisteredCards } from 'src/registeredCards/entity/registeredCards';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, ManyToOne} from 'typeorm'

@Entity({name:'transactions_cards'})
export class Transactions {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  amount:number;

  @Column()
  title:string;

  @Column()
  description:string;

  @Column({type:'timestamp', nullable:true})
  date:Date;

  @Column()
  status:string;

  @Column()
  decline_reason:string;


  @ManyToOne(()=>TypeTransactions, (typeTransactions )=> typeTransactions.name, {cascade:true, eager:true})
  type_transaction:TypeTransactions[];

  @ManyToOne(()=>CategoryTransactions, (categoryTransactions )=> categoryTransactions.name, {cascade:true, eager:true})
  category_transaction:CategoryTransactions[];




  @ManyToOne(()=>UserOwnCards,(userOwnCards)=>userOwnCards.id, {cascade:true, eager:true})
  card_own:UserOwnCards[];

  @ManyToOne(()=>UserRegisteredCards, (userRegisteredCards )=>userRegisteredCards.id, {cascade:true, eager:true})
  card_registered:UserRegisteredCards[];

  @ManyToOne(()=>UserRegisteredCards, (userRegisteredCards )=>userRegisteredCards.id, {cascade:true, eager:true})
  destination_registered_card:UserRegisteredCards[];
  @ManyToOne(()=>UserOwnCards,(userOwnCards)=>userOwnCards.id, {cascade:true, eager:true})
  destination_own_card:UserOwnCards[];


  //TODO: tengo que investigar que hacer para esto ptm
  // destination_trade



}


@Entity({name:'transactions_type'})
export class TypeTransactions {
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

}

@Entity({name:'transaction_category'})
export class CategoryTransactions {
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

}

@Entity({name:'schedule_transactions'})
export class ScheduleTransactions{

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  amount:number;

  @Column()
  title:string;

  @Column()
  description:string;

  @Column()
  status:string;

  @Column()
  decline_reason:string;

  @Column()
  limit:number;

  @Column({type:'timestamp',nullable:true})
  date:Date;

  @Column()
  frequency:string;

  @Column({type:'timestamp',nullable:true})
  start_date:Date;

  @Column({type:'timestamp',nullable:true})
  end_date:Date;



  @ManyToOne(()=>TypeTransactions, (typeTransactions )=> typeTransactions.name, {cascade:true, eager:true})
  type_transaction:TypeTransactions[];

  @ManyToOne(()=>CategoryTransactions, (categoryTransactions )=> categoryTransactions.name, {cascade:true, eager:true})
  category_transaction:CategoryTransactions[];


  @ManyToOne(()=>UserOwnCards,(userOwnCards)=>userOwnCards.id, {cascade:true, eager:true})
  card_own:UserOwnCards[];

  @ManyToOne(()=>UserRegisteredCards, (userRegisteredCards )=>userRegisteredCards.id, {cascade:true, eager:true})
  card_registered:UserRegisteredCards[];

  @ManyToOne(()=>UserRegisteredCards, (userRegisteredCards )=>userRegisteredCards.id, {cascade:true, eager:true})
  destination_registered_card:UserRegisteredCards[];
  @ManyToOne(()=>UserOwnCards,(userOwnCards)=>userOwnCards.id, {cascade:true, eager:true})
  destination_own_card:UserOwnCards[];


  //TODO: tengo que investigar que hacer para esto ptm
  // destination_trade


  
}
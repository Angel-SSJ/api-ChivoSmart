import {Entity, PrimaryGeneratedColumn, Column, GeneratedColumn} from 'typeorm'

@Entity({name:'transactions_cards'})
export class Transactions {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  amount:string;

  //TODO: tengo que buscar como hacer algo con card, ya que se mezcla con owncards y registeredcards
  // card:

  @Column()
  type_transactions:string;

  @Column()
  category_transactions:string;

  @Column()
  title:string;

  @Column()
  description:string;

  //TODO: tengo que investigar que hacer para esto ptm
  // destionation_card:
  // destination_trade

  @Column()
  date:Date;

  @Column()
  status:string;

  @Column()
  decline_reason:string;

}


@Entity({name:'transactions_type'})
export class TransactionsType{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  name:string;
  @Column()
  created_at:Date;

  @Column()
  deleted_at:Date;

  @Column()
  updated_at:Date;

}

@Entity({name:'transactions_category'})
export class TransactionsCategory{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  name:string;
  @Column()
  created_at:Date;

  @Column()
  deleted_at:Date;

  @Column()
  updated_at:Date;

}

@Entity({name:'schedule_transactions'})
export class ScheduleTransactions{

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  amount:number;

  //TODO: tengo que investigar que hacer para esto ptm
  // card:

  @Column()
  category_transactions:string;

  @Column()
  type_transactions:string;

  //TODO: tengo que investigar que hacer para esto ptm
  // destionation_card:
  // destination_trade

  @Column()
  title:string;

  @Column()
  description:string;

  @Column()
  date:Date;

  @Column()
  status:string;

  @Column()
  decline_reason:string;

  //TODO: tengo que ver que hago con frequency
  // frequency:string;

  @Column()
  limit:string;

  @Column()
  start_date:Date;

  @Column()
  end_date:Date;
  
}
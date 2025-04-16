
import { HttpException, HttpStatus, Injectable, } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryTransactions, ScheduleTransactions, Transactions, TypeTransactions } from './entity/transactions';



@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transactions)
    private readonly transactionsRepository:Repository<Transactions>){}

  async getTransactions(): Promise<Transactions[]>{
    return this.transactionsRepository.find();
  }

  async getTransaction(id:string):Promise<Transactions>{
    const transaction = await this.transactionsRepository.findOne({where:{id}});
    if(!transaction){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return transaction;
  }

  async createTransaction(transaction):Promise<void>{
    await this.transactionsRepository.save(transaction);
  }

  async deleteTransaction(id:string){
    await this.transactionsRepository.delete({id});
  }

}

@Injectable()
export class TypeTransactionsService {
  constructor(
    @InjectRepository(TypeTransactions)
    private readonly typeTransactionsRepository:Repository<TypeTransactions>){}

  async getTypeTransactions(): Promise<TypeTransactions[]>{
    return this.typeTransactionsRepository.find();
  }

  async getTypeTransaction(name:string):Promise<TypeTransactions>{
    const typeTransaction = await this.typeTransactionsRepository.findOne({where:{name}});
    if(!typeTransaction){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return typeTransaction;
  }

  async createTypeTransaction(typeTransaction):Promise<void>{
    await this.typeTransactionsRepository.save(typeTransaction);
  }

  async deleteTypeTransaction(name:string){
    await this.typeTransactionsRepository.delete({name});
  }

}
@Injectable()
export class CategoryTransactionsService {
  constructor(
    @InjectRepository(CategoryTransactions)
    private readonly categoryTransactionsRepository:Repository<CategoryTransactions>){}

  async getCategoryTransactions(): Promise<CategoryTransactions[]>{
    return this.categoryTransactionsRepository.find();
  }

  async getCategoryTransaction(name:string):Promise<CategoryTransactions>{
    const categoryTransaction = await this.categoryTransactionsRepository.findOne({where:{name}});
    if(!categoryTransaction){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return categoryTransaction;
  }

  async createCategoryTransaction(categoryTransaction):Promise<void>{
    await this.categoryTransactionsRepository.save(categoryTransaction);
  }

  async deleteCategoryTransaction(name:string){
    await this.categoryTransactionsRepository.delete({name});
  }

}
@Injectable()
export class ScheduleTransactionsService {
  constructor(
    @InjectRepository(ScheduleTransactions)
    private readonly scheduleTransactionsRepository:Repository<ScheduleTransactions>){}

  async getScheduleTransactions(): Promise<ScheduleTransactions[]>{
    return this.scheduleTransactionsRepository.find();
  }

  async getScheduleTransaction(id:string):Promise<ScheduleTransactions>{
    const scheduleTransaction = await this.scheduleTransactionsRepository.findOne({where:{id}});
    if(!scheduleTransaction){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return scheduleTransaction;
  }

  async createScheduleTransaction(scheduleTransaction):Promise<void>{
    await this.scheduleTransactionsRepository.save(scheduleTransaction);
  }

  async deleteScheduleTransaction(id:string){
    await this.scheduleTransactionsRepository.delete({id});
  }

}
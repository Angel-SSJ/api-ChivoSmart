import { HttpException, HttpStatus, Injectable, } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Banks, RegisteredCards, TypesRegisteredCards, UserRegisteredCards } from './entity/registeredCards';



@Injectable()
export class RegisteredCardsService {
  constructor(
    @InjectRepository(RegisteredCards)
    private readonly registeredCardsRepository:Repository<RegisteredCards>){}

  async getRegisteredCards(): Promise<RegisteredCards[]>{
    return this.registeredCardsRepository.find();
  }

  async getRegisteredCard(id:string):Promise<RegisteredCards>{
    const registeredCards = await this.registeredCardsRepository.findOne({where:{id}});
    if(!registeredCards){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return registeredCards;
  }

  async createRegisteredCards(registeredCards):Promise<void>{
    await this.registeredCardsRepository.save(registeredCards);
  }

  async deleteRegisteredCards(id:string){
    await this.registeredCardsRepository.delete({id});
  }

}

@Injectable()
export class UserRegisteredCardsService {
  constructor(
    @InjectRepository(UserRegisteredCards)
    private readonly userRegisteredCardsRepository:Repository<UserRegisteredCards>){}

  async getUserRegisteredCards(): Promise<UserRegisteredCards[]>{
    return this.userRegisteredCardsRepository.find();
  }

  async getUserRegisteredCard(id:string):Promise<UserRegisteredCards>{
    const userRegisteredCards = await this.userRegisteredCardsRepository.findOne({where:{id}});
    if(!userRegisteredCards){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return userRegisteredCards;
  }

  async createUserRegisteredCards(userRegisteredCards):Promise<void>{
    await this.userRegisteredCardsRepository.save(userRegisteredCards);
  }

  async deleteUserRegisteredCards(id:string){
    await this.userRegisteredCardsRepository.delete({id});
  }

}

@Injectable()
export class TypeRegisteredCardsService {
  constructor(
    @InjectRepository(TypesRegisteredCards)
    private readonly typeRegisteredCardsRepository:Repository<TypesRegisteredCards>){}

  async getTypesRegisteredCards(): Promise<TypesRegisteredCards[]>{
    return this.typeRegisteredCardsRepository.find();
  }

  async getTypesRegisteredCard(id:string):Promise<TypesRegisteredCards>{
    const typesRegisteredCards = await this.typeRegisteredCardsRepository.findOne({where:{id}});
    if(!typesRegisteredCards){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return typesRegisteredCards;
  }

  async createTypesRegisteredCards(typesRegisteredCards):Promise<void>{
    await this.typeRegisteredCardsRepository.save(typesRegisteredCards);
  }

  async deleteTypesRegisteredCards(id:string){
    await this.typeRegisteredCardsRepository.delete({id});
  }

}

@Injectable()
export class BanksService {
  constructor(
    @InjectRepository(Banks)
    private readonly banksRepository:Repository<Banks>){}

  async getBanks(): Promise<Banks[]>{
    return this.banksRepository.find();
  }

  async getBank(name:string):Promise<Banks>{
    const bank = await this.banksRepository.findOne({where:{name}});
    if(!bank){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return bank;
  }

  async createBank(bank: any):Promise<void>{
    await this.banksRepository.save(bank);
  }

  async deleteBank(name:string){
    await this.banksRepository.delete({name});
  }

}

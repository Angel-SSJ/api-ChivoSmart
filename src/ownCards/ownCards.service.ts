import { HttpException, HttpStatus, Injectable, } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OwnCards, TypesOwnCard, UserOwnCards } from './entity/ownCards';



@Injectable()
export class OwnCardsService {
  constructor(
    @InjectRepository(OwnCards)
    private readonly ownCardsRepository:Repository<OwnCards>){}

  async getOwnCards(): Promise<OwnCards[]>{
    return this.ownCardsRepository.find();
  }

  async getOwnCard(id:string):Promise<OwnCards>{
    const ownCard = await this.ownCardsRepository.findOne({where:{id}});
    if(!ownCard){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return ownCard;
  }

  async createOwnCard(ownCard):Promise<void>{
    await this.ownCardsRepository.save(ownCard);
  }

  async deleteOwnCard(id:string){
    await this.ownCardsRepository.delete({id});
  }

}

@Injectable()
export class UserOwnCardsService {
  constructor(
    @InjectRepository(UserOwnCards)
    private readonly userOwnCardsRepository:Repository<UserOwnCards>){}

  async getUserOwnCards(): Promise<UserOwnCards[]>{
    return this.userOwnCardsRepository.find();
  }

  async getUserOwnCard(id:string):Promise<UserOwnCards>{
    const userOwnCard = await this.userOwnCardsRepository.findOne({where:{id}});
    if(!userOwnCard){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return userOwnCard;
  }

  async createUserOwnCard(userOwnCard):Promise<void>{
    await this.userOwnCardsRepository.save(userOwnCard);
  }

  async deleteUserOwnCard(id:string){
    await this.userOwnCardsRepository.delete({id});
  }

}

@Injectable()
export class TypeOwnCardsService {
  constructor(
    @InjectRepository(TypesOwnCard)
    private readonly typeOwnCardsRepository:Repository<TypesOwnCard>){}

  async getTypesOwnCards(): Promise<TypesOwnCard[]>{
    return this.typeOwnCardsRepository.find();
  }

  async getTypesOwnCard(id:string):Promise<TypesOwnCard>{
    const typesOwnCard = await this.typeOwnCardsRepository.findOne({where:{id}});
    if(!typesOwnCard){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return typesOwnCard;
  }

  async createTypesOwnCard(typesOwnCard):Promise<void>{
    await this.typeOwnCardsRepository.save(typesOwnCard);
  }

  async deleteTypesOwnCard(id:string){
    await this.typeOwnCardsRepository.delete({id});
  }

}


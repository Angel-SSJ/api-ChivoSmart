import { HttpException, HttpStatus, Injectable, } from '@nestjs/common';
import { User } from './entity/user';
import { Repository } from 'typeorm';
import{userDto, NotificationsDto, UserPreferenceDto, UserSessionsDto, SuggestionsDto}  from './dto/userDto';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){
  }


  async getUsers(): Promise<User[]>{

    return this.userRepository.find();
  }

  async getUser(id:string):Promise<User>{
    const user = await this.userRepository.findOne({where:{id}});
    if(!user){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return user;
  }

  async createUser(user:userDto):Promise<void>{
    await this.userRepository.save(user);
  }

  async deleteUser(id:string){
    await this.userRepository.delete({id});
  }
  //TODO: update user

}

/*
export class UserPreferencesService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){
  }


  async getUsersPreferences(): Promise<User[]>{

    return this.userRepository.find();
  }

  async getUsersPreference(id:string):Promise<User>{
    const user = await this.userRepository.findOne({where:{id}});
    if(!user){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return user;
  }

  async createUser(user:userDto):Promise<void>{
    await this.userRepository.save(user);
  }

  async deleteUser(id:string){
    await this.userRepository.delete({id});
  }

}
export class UserSessionsService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){
  }


  async getUsers(): Promise<User[]>{

    return this.userRepository.find();
  }

  async getUser(id:string):Promise<User>{
    const user = await this.userRepository.findOne({where:{id}});
    if(!user){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return user;
  }

  async createUser(user:userDto):Promise<void>{
    await this.userRepository.save(user);
  }

  async deleteUser(id:string){
    await this.userRepository.delete({id});
  }

}
export class SuggestionsService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){
  }


  async getUsers(): Promise<User[]>{

    return this.userRepository.find();
  }

  async getUser(id:string):Promise<User>{
    const user = await this.userRepository.findOne({where:{id}});
    if(!user){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return user;
  }

  async createUser(user:userDto):Promise<void>{
    await this.userRepository.save(user);
  }

  async deleteUser(id:string){
    await this.userRepository.delete({id});
  }

}
export class Notifications {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){
  }


  async getUsers(): Promise<User[]>{

    return this.userRepository.find();
  }

  async getUser(id:string):Promise<User>{
    const user = await this.userRepository.findOne({where:{id}});
    if(!user){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return user;
  }

  async createUser(user:userDto):Promise<void>{
    await this.userRepository.save(user);
  }

  async deleteUser(id:string){
    await this.userRepository.delete({id});
  }

}

*/
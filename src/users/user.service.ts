import { HttpException, HttpStatus, Injectable, } from '@nestjs/common';
import { Users } from './entity/users';
import { Repository } from 'typeorm';
import{UserDto, NotificationsDto, UserPreferenceDto, UserSessionsDto, SuggestionsDto}  from './dto/userDto';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository:Repository<Users>){}

    async getUsers(): Promise<Users[]>{
    return this.userRepository.find();
  }

  async getUser(id:string):Promise<Users>{
    const user = await this.userRepository.findOne({where:{id}});
    if(!user){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return user;
  }

  async createUser(user):Promise<void>{
    await this.userRepository.save(user);
  }

  async findOneByEmail(email:string){
    return this.userRepository.findOneBy({email})
  }
  async deleteUser(id:string){
    await this.userRepository.delete({id});
  }

}



//IT IS PAUSED
/*
export class UserPreferencesService {
  constructor(@InjectRepository(UserEntity) private userRepository:Repository<UserEntity>){
  }


  async getUsersPreferences(): Promise<UserEntity[]>{

    return this.userRepository.find();
  }

  async getUsersPreference(id:string):Promise<UserEntity>{
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
  constructor(@InjectRepository(UserEntity) private userRepository:Repository<UserEntity>){
  }


  async getUsers(): Promise<UserEntity[]>{

    return this.userRepository.find();
  }

  async getUser(id:string):Promise<UserEntity>{
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
  constructor(@InjectRepository(UserEntity) private userRepository:Repository<UserEntity>){
  }


  async getUsers(): Promise<UserEntity[]>{

    return this.userRepository.find();
  }

  async getUser(id:string):Promise<UserEntity>{
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
  constructor(@InjectRepository(UserEntity) private userRepository:Repository<UserEntity>){
  }


  async getUsers(): Promise<UserEntity[]>{

    return this.userRepository.find();
  }

  async getUser(id:string):Promise<UserEntity>{
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
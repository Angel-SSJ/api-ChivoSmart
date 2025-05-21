import { HttpException, HttpStatus, Injectable, } from '@nestjs/common';
import { Notifications, Suggestions, UserPreference, Users, UserSessions } from './entity/users';
import { Repository } from 'typeorm';
import{UserDto, NotificationsDto, UserPreferenceDto, UserSessionsDto, SuggestionsDto}  from './dto/userDto';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository:Repository<Users>){}

    async getUsers(user:object): Promise<Users[]>{
    const users=await this.userRepository.find(user);
    return users;
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

@Injectable()
export class UserPreferenceService {
  constructor(
    @InjectRepository(UserPreference)
    private readonly userPreferenceRepository:Repository<UserPreference>){}

  async getUserPreferences(): Promise<UserPreference[]>{
    return this.userPreferenceRepository.find();
  }

  async getUserPreference(id:string):Promise<UserPreference>{
    const userPreference = await this.userPreferenceRepository.findOne({where:{id}});
    if(!userPreference){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return userPreference;
  }

  async createUserPreference(userpreference: any):Promise<void>{
    await this.userPreferenceRepository.save(userpreference);
  }

  async deleteUserPreference(id:string){
    await this.userPreferenceRepository.delete({id});
  }

}



@Injectable()
export class UserSessionsService {
  constructor(
    @InjectRepository(UserSessions)
    private readonly userSessionsRepository:Repository<UserSessions>){}

  async getUsersSessions(): Promise<UserSessions[]>{
    return this.userSessionsRepository.find();
  }

  async getUserSessions(id:string):Promise<UserSessions>{
    const userSessions = await this.userSessionsRepository.findOne({where:{id}});
    if(!userSessions){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return userSessions;
  }

  async createUserSessions(userSessions):Promise<void>{
    await this.userSessionsRepository.save(userSessions);
  }

  async deleteUserSessions(id:string){
    await this.userSessionsRepository.delete({id});
  }

}
@Injectable()
export class SuggestionsService {
  constructor(
    @InjectRepository(Suggestions)
    private readonly suggestionsRepository:Repository<Suggestions>){}

  async getSuggestions(): Promise<Suggestions[]>{
    return this.suggestionsRepository.find();
  }

  async getSuggestion(id:string):Promise<Suggestions>{
    const suggestions = await this.suggestionsRepository.findOne({where:{id}});
    if(!suggestions){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return suggestions;
  }

  async createSuggestions(user):Promise<void>{
    await this.suggestionsRepository.save(user);
  }


  async deleteSuggestion(id:string){
    await this.suggestionsRepository.delete({id});
  }

}
@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notifications)
    private readonly notificationsRepository:Repository<Notifications>){}

  async getNotifications(): Promise<Notifications[]>{
    return this.notificationsRepository.find();
  }

  async getNotification(id:string):Promise<Notifications>{
    const notification = await this.notificationsRepository.findOne({where:{id}});
    if(!notification){
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }
    return notification;
  }

  async createNotification(notification):Promise<void>{
    await this.notificationsRepository.save(notification);
  }


  async deleteNotification(id:string){
    await this.notificationsRepository.delete({id});
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
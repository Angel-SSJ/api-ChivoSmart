import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { UserService,UserPreferenceService, UserSessionsService, SuggestionsService, NotificationsService } from './user.service';
import {NotificationsDto, SuggestionsDto, UserDto, UserPreferenceDto, UserSessionsDto} from './dto/userDto';


@Controller('user')

export class UserController {
  constructor(private userService: UserService) {}


  @Get('')
  async getUsers(req,res){
    const user= await this.userService.getUsers(req.params.id);
    return res.json(user)

  }

  @Get('/:id')
  async getUser(@Param('id', new ParseUUIDPipe()) id:string){
    return await this.userService.getUser(id);


  }


  @Post()
  async createUser(@Body() userDto:UserDto){
    return await this.userService.createUser(userDto);
  }




  @Delete('/:id')
  async deleteUser(@Param('id',new ParseUUIDPipe()) id:string){
    return await this.userService.deleteUser(id);

  }

  /*//TODO:
  //Update birthday
  //Update password
  //Update email
  //Update firstname
  //Update lastname
  @Patch('/:id')
async updateDescription(@Body() descriptionDto: UpdatedescriptionDto, @Param('id',new ParseUUIDPipe()) id:string){
  return await this.recipeService.updateDescription(id,descriptionDto.description);
}
*/







  /*//TODO:
  //Update birthday
  //Update password
  //Update email
  //Update firstname
  //Update lastname
  @Patch('/:id')
async updateDescription(@Body() descriptionDto: UpdatedescriptionDto, @Param('id',new ParseUUIDPipe()) id:string){
  return await this.recipeService.updateDescription(id,descriptionDto.description);
}
*/





}


@Controller('user/preference')
export class UserPreferenceController {
  constructor(private userPreferenceService:UserPreferenceService) {}


  @Get()
  async getUserPreferences(){
    return await this.userPreferenceService.getUserPreferences();

  }

  @Get('/:id')
  async getUserPreference(@Param('id', new ParseUUIDPipe()) id:string){
    return await this.userPreferenceService.getUserPreference(id);


  }


  @Post()
  async createUserPreference(@Body() userPreferenceDto:UserPreferenceDto){
    return await this.userPreferenceService.createUserPreference(userPreferenceDto);
  }




  @Delete('/:id')
  async deleteUserPreference(@Param('id',new ParseUUIDPipe()) id:string){
    return await this.userPreferenceService.deleteUserPreference(id);

  }

  /*//TODO:
  //Update birthday
  //Update password
  //Update email
  //Update firstname
  //Update lastname
  @Patch('/:id')
async updateDescription(@Body() descriptionDto: UpdatedescriptionDto, @Param('id',new ParseUUIDPipe()) id:string){
  return await this.recipeService.updateDescription(id,descriptionDto.description);
}
*/





}


@Controller('user/sessions')
export class UserSessionsController {
  constructor(private userSessionsService: UserSessionsService) {}


  @Get()
  async getUsersSessions(){
    return await this.userSessionsService.getUsersSessions();

  }

  @Get('/:id')
  async getUserSessions(@Param('id', new ParseUUIDPipe()) id:string){
    return await this.userSessionsService.getUserSessions(id);


  }


  @Post()
  async createUserSessions(@Body() userSessionsDto:UserSessionsDto){
    return await this.userSessionsService.createUserSessions(userSessionsDto);
  }




  @Delete('/:id')
  async deleteUserSessions(@Param('id',new ParseUUIDPipe()) id:string){
    return await this.userSessionsService.deleteUserSessions(id);

  }

  /*//TODO:
  //Update birthday
  //Update password
  //Update email
  //Update firstname
  //Update lastname
  @Patch('/:id')
async updateDescription(@Body() descriptionDto: UpdatedescriptionDto, @Param('id',new ParseUUIDPipe()) id:string){
  return await this.recipeService.updateDescription(id,descriptionDto.description);
}
*/





}


@Controller('user')
export class SuggestionsController {
  constructor(private suggestionsService: SuggestionsService) {}


  @Get()
  async getSuggestions(){
    return await this.suggestionsService.getSuggestions();

  }

  @Get('/:id')
  async getSuggestion(@Param('id', new ParseUUIDPipe()) id:string){
    return await this.suggestionsService.getSuggestion(id);


  }


  @Post()
  async createSuggestions(@Body() suggestionsDto:SuggestionsDto){
    return await this.suggestionsService.createSuggestions(suggestionsDto);
  }




  @Delete('/:id')
  async deleteSuggestion(@Param('id',new ParseUUIDPipe()) id:string){
    return await this.suggestionsService.deleteSuggestion(id);

  }

  /*//TODO:
  //Update birthday
  //Update password
  //Update email
  //Update firstname
  //Update lastname
  @Patch('/:id')
async updateDescription(@Body() descriptionDto: UpdatedescriptionDto, @Param('id',new ParseUUIDPipe()) id:string){
  return await this.recipeService.updateDescription(id,descriptionDto.description);
}
*/





}


@Controller('user/notifications')
export class NotificationsController {
  constructor(private notificationsService: NotificationsService) {}


  @Get()
  async getNotifications(){
    return await this.notificationsService.getNotifications();

  }

  @Get('/:id')
  async getNotification(@Param('id', new ParseUUIDPipe()) id:string){
    return await this.notificationsService.getNotification(id);


  }


  @Post()
  async createNotification(@Body() notificationsDto:NotificationsDto ){
    return await this.notificationsService.createNotification(notificationsDto);
  }




  @Delete('/:id')
  async deleteNotification(@Param('id',new ParseUUIDPipe()) id:string){
    return await this.notificationsService.deleteNotification(id);

  }

  /*//TODO:
  //Update birthday
  //Update password
  //Update email
  //Update firstname
  //Update lastname
  @Patch('/:id')
async updateDescription(@Body() descriptionDto: UpdatedescriptionDto, @Param('id',new ParseUUIDPipe()) id:string){
  return await this.recipeService.updateDescription(id,descriptionDto.description);
}
*/





}




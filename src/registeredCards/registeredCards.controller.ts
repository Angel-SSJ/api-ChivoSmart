import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { BanksService, RegisteredCardsService, TypeRegisteredCardsService, UserRegisteredCardsService } from './registeredCards.service';
import { BanksDto, RegisteredCardsDto, TypesRegisteredCardDto, UserRegisteredCardsDto } from './dto/createRegisteredCard.dto';
import { Banks } from './entity/registeredCards';




@Controller('registeredCards')
export class RegisteredCardsController {
  constructor(private registeredCardsService: RegisteredCardsService) {}


  @Get()
  async getRegisteredCards(){
    return await this.registeredCardsService.getRegisteredCards();

  }

  @Get('/:id')
  async getRegisteredCard(@Param('id', new ParseUUIDPipe()) id:string){
    return await this.registeredCardsService.getRegisteredCard(id);


  }

  @Post()
  async createRegisteredCards(@Body() registeredCardsSessionsDto:RegisteredCardsDto){
    return await this.registeredCardsService.createRegisteredCards(registeredCardsSessionsDto);
  }


  @Delete('/:id')
  async deleteRegisteredCards(@Param('id',new ParseUUIDPipe()) id:string){
    return await this.registeredCardsService.deleteRegisteredCards(id);

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

@Controller('registeredCards/user')
export class UserRegisteredCardsController {
  constructor(private userRegisteredCardsService: UserRegisteredCardsService) {}


  @Get()
  async getUserRegisteredCards(){
    return await this.userRegisteredCardsService.getUserRegisteredCards();

  }

  @Get('/:id')
  async getUserRegisteredCard(@Param('id', new ParseUUIDPipe()) id:string){
    return await this.userRegisteredCardsService.getUserRegisteredCard(id);


  }

  @Post()
  async createUserRegisteredCards(@Body() userRegisteredCardsDto:UserRegisteredCardsDto){
    return await this.userRegisteredCardsService.createUserRegisteredCards(userRegisteredCardsDto);
  }


  @Delete('/:id')
  async deleteUserRegisteredCards(@Param('id',new ParseUUIDPipe()) id:string){
    return await this.userRegisteredCardsService.deleteUserRegisteredCards(id);

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

@Controller('typeRegisteredCards')
export class TypeRegisteredCardsController {
  constructor(private typeRegisteredCardsService: TypeRegisteredCardsService) {}


  @Get()
  async getTypesRegisteredCards(){
    return await this.typeRegisteredCardsService.getTypesRegisteredCards();

  }

  @Get('/:id')
  async getTypesRegisteredCard(@Param('id', new ParseUUIDPipe()) id:string){
    return await this.typeRegisteredCardsService.getTypesRegisteredCard(id);


  }

  @Post()
  async createTypesRegisteredCards(@Body() typesRegisteredCardDto: TypesRegisteredCardDto){
    return await this.typeRegisteredCardsService.createTypesRegisteredCards(typesRegisteredCardDto);
  }


  @Delete('/:id')
  async deleteTypesRegisteredCards(@Param('id',new ParseUUIDPipe()) id:string){
    return await this.typeRegisteredCardsService.deleteTypesRegisteredCards(id);

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

@Controller('registeredCards/banks')
export class BanksController {
  constructor(private banksService: BanksService) {}


  @Get()
  async getBanks(){
    return await this.banksService.getBanks();

  }

  @Get('/:name')
  async getBank(@Param('name', new ParseUUIDPipe()) name:string){
    return await this.banksService.getBank(name);


  }

  @Post()
  async createBank(@Body() banksDto: BanksDto){
    return await this.banksService.createBank(banksDto);
  }


  @Delete('/:name')
  async deleteBank(@Param('name',new ParseUUIDPipe()) name:string){
    return await this.banksService.deleteBank(name);

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

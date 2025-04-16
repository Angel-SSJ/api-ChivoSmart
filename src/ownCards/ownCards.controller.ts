import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { OwnCardsService, TypeOwnCardsService, UserOwnCardsService } from './ownCards.service';
import { OwnCardsDto, TypesOwnCardDto, UserOwnCardsDto } from './dto/createOwnCard.dto';





@Controller('ownCards')
export class OwnCardsController {
  constructor(private ownCardsService: OwnCardsService) {}


  @Get()
  async getOwnCards(){
    return await this.ownCardsService.getOwnCards();

  }

  @Get('/:id')
  async getOwnCard(@Param('id', new ParseUUIDPipe()) id:string){
    return await this.ownCardsService.getOwnCard(id);


  }

  @Post()
  async createOwnCard(@Body() ownCardsSessionsDto: OwnCardsDto){
    return await this.ownCardsService.createOwnCard(ownCardsSessionsDto);
  }


  @Delete('/:id')
  async deleteOwnCard(@Param('id',new ParseUUIDPipe()) id:string){
    return await this.ownCardsService.deleteOwnCard(id);

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

@Controller('ownCards/user')
export class UserOwnCardsController {
  constructor(private userOwnCardsService:  UserOwnCardsService) {}


  @Get()
  async getUserOwnCards(){
    return await this.userOwnCardsService.getUserOwnCards();

  }

  @Get('/:id')
  async getUserOwnCard(@Param('id', new ParseUUIDPipe()) id:string){
    return await this.userOwnCardsService.getUserOwnCard(id);


  }

  @Post()
  async createUserOwnCard(@Body() userOwnCardsDto:UserOwnCardsDto){
    return await this.userOwnCardsService.createUserOwnCard(userOwnCardsDto);
  }


  @Delete('/:id')
  async deleteUserOwnCard(@Param('id',new ParseUUIDPipe()) id:string){
    return await this.userOwnCardsService.deleteUserOwnCard(id);

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

@Controller('typeOwnCards')
export class TypeOwnCardsController {
  constructor(private typeOwnCardsService: TypeOwnCardsService) {}


  @Get()
  async getTypesOwnCards(){
    return await this.typeOwnCardsService.getTypesOwnCards();

  }

  @Get('/:id')
  async getTypesOwnCard(@Param('id', new ParseUUIDPipe()) id:string){
    return await this.typeOwnCardsService.getTypesOwnCard(id);


  }

  @Post()
  async createTypesOwnCard(@Body() typesOwnCardDto: TypesOwnCardDto){
    return await this.typeOwnCardsService.createTypesOwnCard(typesOwnCardDto);
  }


  @Delete('/:id')
  async deleteTypesOwnCard(@Param('id',new ParseUUIDPipe()) id:string){
    return await this.typeOwnCardsService.deleteTypesOwnCard(id);

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

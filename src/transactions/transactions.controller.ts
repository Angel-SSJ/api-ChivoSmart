import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CategoryTransactionsService, ScheduleTransactionsService, TransactionsService, TypeTransactionsService } from './transactions.service';
import { CategoryTransactionsDto, ScheduleTransactionsDto, TransactionsDto, TypeTransactionsDto } from './dto/TransactionsDto';


@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}


  @Get()
  async getTransactions(){
    return await this.transactionsService.getTransactions();

  }

  @Get('/:id')
  async getUsergetTransaction(@Param('id', new ParseUUIDPipe()) id:string){
    return await this.transactionsService.getTransaction(id);


  }


  @Post()
  async createTransaction(@Body() transactionsDto: TransactionsDto){
    return await this.transactionsService.createTransaction(transactionsDto);
  }




  @Delete('/:id')
  async deleteTransaction(@Param('id',new ParseUUIDPipe()) id:string){
    return await this.transactionsService.deleteTransaction(id);

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


@Controller('typeTransactions')
export class TypeTransactionsController {
  constructor(private typeTransactionsService: TypeTransactionsService) {}


  @Get()
  async getTypeTransactions(){
    return await this.typeTransactionsService.getTypeTransactions();

  }

  @Get('/:name')
  async getTypeTransaction(@Param('name', new ParseUUIDPipe()) name:string){
    return await this.typeTransactionsService.getTypeTransaction(name);


  }


  @Post()
  async createTypeTransaction(@Body() typeTransactionsDto:  TypeTransactionsDto){
    return await this.typeTransactionsService.createTypeTransaction(typeTransactionsDto);
  }




  @Delete('/:name')
  async deleteTypeTransaction(@Param('name',new ParseUUIDPipe()) name:string){
    return await this.typeTransactionsService.deleteTypeTransaction(name);

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


@Controller('categoryTransactions')
export class CategoryTransactionsController {
  constructor(private categoryTransactionsService: CategoryTransactionsService) {}


  @Get()
  async getCategoryTransactions(){
    return await this.categoryTransactionsService.getCategoryTransactions();

  }

  @Get('/:name')
  async getCategoryTransaction(@Param('name', new ParseUUIDPipe()) name:string){
    return await this.categoryTransactionsService.getCategoryTransaction(name);


  }


  @Post()
  async createCategoryTransaction(@Body() categoryTransactionsDto: CategoryTransactionsDto ){
    return await this.categoryTransactionsService.createCategoryTransaction(categoryTransactionsDto);
  }




  @Delete('/:name')
  async deleteCategoryTransaction(@Param('name',new ParseUUIDPipe()) name:string){
    return await this.categoryTransactionsService.deleteCategoryTransaction(name);

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


@Controller('scheduleTransactions')
export class ScheduleTransactionsController {
  constructor(private scheduleTransactionsService: ScheduleTransactionsService) {}


  @Get()
  async getScheduleTransactions(){
    return await this.scheduleTransactionsService.getScheduleTransactions();

  }

  @Get('/:id')
  async getScheduleTransaction(@Param('id', new ParseUUIDPipe()) id:string){
    return await this.scheduleTransactionsService.getScheduleTransaction(id);


  }


  @Post()
  async createScheduleTransaction(@Body() scheduleTransactionDto: ScheduleTransactionsDto){
    return await this.scheduleTransactionsService.createScheduleTransaction(scheduleTransactionDto);
  }




  @Delete('/:id')
  async deleteScheduleTransaction(@Param('id',new ParseUUIDPipe()) id:string){
    return await this.scheduleTransactionsService.deleteScheduleTransaction(id);

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

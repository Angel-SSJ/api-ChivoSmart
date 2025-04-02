import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import {UserDto} from './dto/userDto';


@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}


  @Get()
  async getUsers(){
    return await this.userService.getUsers();

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

  /*@Patch('/:id')
async updateDescription(@Body() descriptionDto: UpdatedescriptionDto, @Param('id',new ParseUUIDPipe()) id:string){
  return await this.recipeService.updateDescription(id,descriptionDto.description);

  //TODO: add a update
    firstname
    lastname
    email
    password
    birthday
}
*/


}




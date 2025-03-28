import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeDto } from './dto/recipe.dto';
import { UpdatedescriptionDto } from './dto/update-description.dto';

@Controller('recipe')
export class RecipeController {

  constructor(private recipeService: RecipeService){}



  @Get()
  async getRecipes(){
    return await this.recipeService.getRecipes();

  }

  @Get('/:id')
  async getRecipe(@Param('id') id:string){
    return await this.recipeService.getRecipe(id);


  }


  @Post()
  async createRecipe(@Body() recipeDto:RecipeDto){
    return await this.recipeService.createRecipe(recipeDto);
  }


  @Patch('/:id')
  async updateDescription(@Body() descriptionDto: UpdatedescriptionDto, @Param('id') id:string){
    return await this.recipeService.updateDescription(id,descriptionDto.description);
  }

  @Delete('/:id')
  async deleteRecipe(@Param('id') id:string){
  return await this.recipeService.deleteRecipe(id);

  }


}

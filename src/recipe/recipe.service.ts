import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Recipe } from './entity/recipe';
import { RecipeDto } from './dto/recipe.dto';
import {v4} from 'uuid';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class RecipeService {
 constructor(@InjectRepository(Recipe) private recipeRepository:Repository<Recipe>){
   //HOW TO IMPLEMENT CRUD OPERATIONS IN TYPEORM
 }

  async getRecipes(): Promise<Recipe[]>{
   return this.recipeRepository.find();

    //return this._recipes;

  }

 async getRecipe(id:string): Promise<Recipe>{
   const recipe = await this.recipeRepository.findOne({where:{id}});
   if(!recipe){
     throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
   }
   return recipe;
   //const recipe = this._recipes.find(r => r.id == id);
   //if(!recipe){
   //   throw new HttpException('Notofund',HttpStatus.NOT_FOUND);
   // }
   // return recipe;

 }

  async createRecipe(recipe: RecipeDto): Promise<void> {
    await this.recipeRepository.save(recipe);

    //const recipeEntity = { ...recipe, id: v4()};
    //this._recipes.push(recipeEntity);

  }

  async updateDescription(id:string, description:string){
   await this.recipeRepository.update({ id}, { description });
    //const recipeIndex= this._recipes.findIndex(r=>r.id==id);
    //->  if(recipeIndex < 0){
    //->throw new HttpException('Notofund',HttpStatus.NOT_FOUND);
    //->}
    //this._recipes[recipeIndex]={...this._recipes[recipeIndex],description};
  }

  async deleteRecipe(id:string){
   await this.recipeRepository.delete({id});
    //this._recipes=this._recipes.filter(r=>r.id !==id);
  }
}

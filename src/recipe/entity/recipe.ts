import { Unit } from '../dto/recipe.dto';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';


@Entity({name:'recipe'})
export class Recipe{
  //I think this is a place where I will create a tables

 // @PrimaryColumn() this is a primary key
  @PrimaryGeneratedColumn('uuid')
  id:string;
  @Column()
  description:string;

  // we are connecting ingredients so will be ingredient type
  //the second callback is a little bit tricky, we have the
  // object from the second side of the relation and we have
  // to return th e field from this object pointing to the relation
  //WHAT DOES CASCADE DO?
  // eager will automatically join our relation
  @OneToMany(()=>Ingredient, ingredient=> ingredient.recipe, {cascade:true, eager:true}) //callback?
  ingredients:Ingredient[];

}

@Entity({name:'ingredient'})
export class Ingredient {
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  name:string;

  @Column({ type: 'varchar' })
  unit:Unit;

  @Column({type:'integer'})
  quantify: number;

  @ManyToOne(()=> Recipe, (recipe)=>recipe.ingredients,{onDelete:"CASCADE"})
  recipe:Recipe;
}

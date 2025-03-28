import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString, Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum Unit{
  MILILITERS ='mililiters',
  LITERS='LITERS',
  GRAMS='grams',
  KILOGRAMS='kilograms',
  SPOONS='spoons',
  CUPS='cups',
  PIECES='pieces',
}

export class RecipeDto{
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  description:string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({each:true})
  @Type(()=> IgredientDto)
  ingredients:IgredientDto[];

}

export class IgredientDto{
  @IsNotEmpty()
  @IsString()
  name:string;

  @IsNotEmpty()
  @IsEnum(Unit)
  unit:Unit;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  quantify: number;
}


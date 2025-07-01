import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  imageUrl: string;

  @IsNotEmpty()
  @IsNumber()
  proteins: number;

  @IsNotEmpty()
  @IsNumber()
  carbs: number;

  @IsNotEmpty()
  @IsNumber()
  fats: number;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  calories: number;
}

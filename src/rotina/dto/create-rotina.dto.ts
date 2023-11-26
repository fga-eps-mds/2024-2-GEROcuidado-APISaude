import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ECategoriaRotina } from '../classes/categoria-rotina.enum';
import { EDiasSemana } from '../classes/dias-semana.enum';
export class CreateRotinaDto {
  @IsNotEmpty()
  @IsNumber()
  idIdoso!: number;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  titulo?: string;

  @IsNotEmpty()
  @IsEnum(ECategoriaRotina)
  categoria?: ECategoriaRotina;

  @IsDateString()
  @IsNotEmpty()
  dataHora!: Date;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  descricao?: string;

  @IsOptional()
  @IsBoolean()
  concluido?: boolean;

  @IsArray()
  @IsEnum(EDiasSemana, { each: true })
  dias?: EDiasSemana[];
}
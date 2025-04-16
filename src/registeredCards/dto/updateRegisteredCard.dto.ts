import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisteredCardDto } from './createRegisteredCard.dto';

export class UpdateRegisteredCardDto extends PartialType(CreateRegisteredCardDto) {}

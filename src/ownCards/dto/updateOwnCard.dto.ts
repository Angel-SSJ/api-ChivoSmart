import { PartialType } from '@nestjs/mapped-types';
import { CreateOwnCardDto } from './createOwnCard.dto';

export class UpdateOwnCardDto extends PartialType(CreateOwnCardDto) {}

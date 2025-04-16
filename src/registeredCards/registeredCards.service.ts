import { Injectable } from '@nestjs/common';
import { RegisteredCardsDto } from './dto/createRegisteredCard.dto';
import { UpdateRegisteredCardsDto } from './dto/updateRegisteredCard.dto';

@Injectable()
export class RegisteredCardsService {
  create(createRegisteredCardDto:RegisteredCardsDto) {
    return 'This action adds a new registeredCard';
  }

  findAll() {
    return `This action returns all registeredCards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registeredCard`;
  }

  update(id: number, updateRegisteredCardDto:UpdateRegisteredCardsDto) {
    return `This action updates a #${id} registeredCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} registeredCard`;
  }
}

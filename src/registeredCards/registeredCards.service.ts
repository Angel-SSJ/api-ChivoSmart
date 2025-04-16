import { Injectable } from '@nestjs/common';
import { CreateRegisteredCardDto } from './dto/createRegisteredCard.dto';
import { UpdateRegisteredCardDto } from './dto/updateRegisteredCard.dto';

@Injectable()
export class RegisteredCardsService {
  create(createRegisteredCardDto: CreateRegisteredCardDto) {
    return 'This action adds a new registeredCard';
  }

  findAll() {
    return `This action returns all registeredCards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registeredCard`;
  }

  update(id: number, updateRegisteredCardDto: UpdateRegisteredCardDto) {
    return `This action updates a #${id} registeredCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} registeredCard`;
  }
}

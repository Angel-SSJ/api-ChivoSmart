import { Injectable } from '@nestjs/common';
import { CreateOwnCardDto } from './dto/createOwnCard.dto';
import { UpdateOwnCardDto } from './dto/updateOwnCard.dto';

@Injectable()
export class OwnCardsService {
  create(createOwnCardDto: CreateOwnCardDto) {
    return 'This action adds a new ownCard';
  }

  findAll() {
    return `This action returns all ownCards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ownCard`;
  }

  update(id: number, updateOwnCardDto: UpdateOwnCardDto) {
    return `This action updates a #${id} ownCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} ownCard`;
  }
}

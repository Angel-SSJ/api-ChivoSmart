import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OwnCardsService } from './ownCards.service';
import { CreateOwnCardDto } from './dto/createOwnCard.dto';
import { UpdateOwnCardDto } from './dto/updateOwnCard.dto';

@Controller('own-cards')
export class OwnCardsController {
  constructor(private readonly ownCardsService: OwnCardsService) {}

  @Post()
  create(@Body() createOwnCardDto: CreateOwnCardDto) {
    return this.ownCardsService.create(createOwnCardDto);
  }

  @Get()
  findAll() {
    return this.ownCardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ownCardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOwnCardDto: UpdateOwnCardDto) {
    return this.ownCardsService.update(+id, updateOwnCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ownCardsService.remove(+id);
  }
}

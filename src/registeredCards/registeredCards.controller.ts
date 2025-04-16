import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisteredCardsService } from './registeredCards.service';
import { CreateRegisteredCardDto } from './dto/createRegisteredCard.dto';
import { UpdateRegisteredCardDto } from './dto/updateRegisteredCard.dto';

@Controller('registered-cards')
export class RegisteredCardsController {
  constructor(private readonly registeredCardsService: RegisteredCardsService) {}

  @Post()
  create(@Body() createRegisteredCardDto: CreateRegisteredCardDto) {
    return this.registeredCardsService.create(createRegisteredCardDto);
  }

  @Get()
  findAll() {
    return this.registeredCardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registeredCardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegisteredCardDto: UpdateRegisteredCardDto) {
    return this.registeredCardsService.update(+id, updateRegisteredCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registeredCardsService.remove(+id);
  }
}

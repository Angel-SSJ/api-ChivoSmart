import { Module } from '@nestjs/common';
import { OwnCardsService } from './ownCards.service';
import { OwnCardsController } from './ownCards.controller';
import { UserModule } from 'src/users/user.module';

@Module({
  controllers: [OwnCardsController],
  providers: [OwnCardsService],
  imports:[UserModule],
})
export class OwnCardsModule {}

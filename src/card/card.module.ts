import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { UserEntity } from 'src/user/userEntity/user.entity';
import { CardController } from './card.controller';
import { CardEntity } from './card.entity';
import { CardService } from './card.service';
import { GroupEntity } from 'src/group/group.entity';
import { UserGroupEntity } from 'src/user/userEntity/user-group.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CardEntity,
      UserEntity,
      GroupEntity,
      UserGroupEntity,
    ]),
  ],
  providers: [CardService, UserService],
  controllers: [CardController],
})
export class CardModule {}
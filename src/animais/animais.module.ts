import { Module } from '@nestjs/common';
import { AnimaisService } from './animais.service';
import { AnimaisController } from './animais.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AnimaisController],
  providers: [AnimaisService],
  imports: [PrismaService],
})
export class AnimaisModule {}

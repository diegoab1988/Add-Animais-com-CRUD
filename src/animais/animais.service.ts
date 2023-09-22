import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnimaiDto } from './dto/create-animai.dto';
import { UpdateAnimaiDto } from './dto/update-animai.dto';

@Injectable()
export class AnimaisService {
  constructor(private prisma: PrismaService){}
  create(createAnimaiDto: CreateAnimaiDto) {
    return this.prisma.animais.create({data: createAnimaiDto});
  }

  findAll() {
    return this.prisma.animais.findMany();
  }

  findOne(id: number) {
    return this.prisma.animais.findUnique({where: {id}});
  }

  update(id: number, updateAnimaiDto: UpdateAnimaiDto) {
    return this.prisma.animais.update({
      where: {id},
      data: UpdateAnimaiDto
    });
  }

  remove(id: number) {
    return this.prisma.animais.delete({where:{id}});
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AnimaisService } from './animais.service';
import { CreateAnimaiDto } from './dto/create-animai.dto';
import { UpdateAnimaiDto } from './dto/update-animai.dto';

@Controller('animais')
export class AnimaisController {
  constructor(private readonly animaisService: AnimaisService) {}

  @Post('criar')
  @ApiOperation({summary:'Criar um animal'})
  create(@Body() createAnimaiDto: CreateAnimaiDto) {
    return this.animaisService.create(createAnimaiDto);
  }

  @Get('listar-todos')
  @ApiOperation({summary: 'Listar Todos os Animais'})
  findAll() {
    return this.animaisService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Buscar um Animal Pela Id'})
  findOne(@Param('id') id: string) {
    return this.animaisService.findOne(+id);
  }

  @Patch('atualizar/:id')
  @ApiOperation({summary: 'Atualizar um animal pelo id'})
  update(@Param('id') id: string, @Body() updateAnimaiDto: UpdateAnimaiDto) {
    return this.animaisService.update(+id, updateAnimaiDto);
  }

  @Delete('deletar/:id')
  @ApiOperation({summary: 'Deletar um Animal Pelo Id'})
  remove(@Param('id') id: string) {
    return this.animaisService.remove(+id);
  }
}

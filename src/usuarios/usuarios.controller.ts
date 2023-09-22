import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('usuarios')
@ApiTags('Usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('criar')
  @ApiOperation({ summary: 'Criar um Usuario'})
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get('listar-todos')
  @ApiOperation({summary: 'Listar Todos os Usuarios'})
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Buscar um Usuario Pela Id'})
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  @Patch('atualizar/:id')
  @ApiOperation({summary: 'Atualizar um Usuario Pelo Id'})
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete('deletar/:id')
  @ApiOperation({summary: 'Deletar um Usuario Pelo Id'})
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}

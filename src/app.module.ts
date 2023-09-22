import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AnimaisModule } from './animais/animais.module';

@Module({
  imports: [PrismaModule, UsuariosModule, AnimaisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

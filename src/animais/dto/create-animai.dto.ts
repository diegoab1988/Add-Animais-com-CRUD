import { ApiProperty } from "@nestjs/swagger";

export class CreateAnimaiDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    tipo: string
    @ApiProperty()
    idade: string
    @ApiProperty()
    descricao: string
    @ApiProperty({required:true})
    localizacao: string
    @ApiProperty({required:true})
    status: string



}

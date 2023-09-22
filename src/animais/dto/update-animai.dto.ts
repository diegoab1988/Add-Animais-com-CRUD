import { PartialType } from '@nestjs/swagger';
import { CreateAnimaiDto } from './create-animai.dto';

export class UpdateAnimaiDto extends PartialType(CreateAnimaiDto) {}

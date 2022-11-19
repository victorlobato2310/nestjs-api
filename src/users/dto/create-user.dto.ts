/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';

export class  CreateUserDTO {
    @ApiProperty()
    @MaxLength(10)
    name: string
}
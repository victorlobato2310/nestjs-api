/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class AppError {
    @ApiProperty()
    statusCode: number;

    @ApiProperty()
    error: string;

    constructor(statusCode: number, error: string){
        this.statusCode = statusCode;
        this.error = error;
    }
}
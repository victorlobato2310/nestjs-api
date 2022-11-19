import { AppError } from './entities/error.entity';
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { ApiTags, ApiCreatedResponse, ApiOkResponse, ApiQuery, ApiResponse, ApiBadRequestResponse} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @ApiQuery({ name: 'name', required: false })
    @ApiOkResponse({ type: User, isArray: true })
    @Get()
    getUsers(@Query('name') name?: string): User[] {
        return this.usersService.findAll(name);
    }

    @ApiResponse({ status: 404, description: 'User not found', type: AppError})
    @ApiOkResponse({ status: 200, description: 'OK', type: User })
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number): User {
        const user = this.usersService.findById(id);

        if(!user){
            throw new HttpException({
                error: 'User not found',
                status: HttpStatus.NOT_FOUND
            }, HttpStatus.NOT_FOUND)
        }

        return user;
    }

    @ApiCreatedResponse({ type: User })
    @ApiBadRequestResponse()
    @Post()
    createUser(@Body() body: CreateUserDTO): User {
        return this.usersService.createUser(body);
    }
}

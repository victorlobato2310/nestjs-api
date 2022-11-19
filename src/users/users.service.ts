/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [{ id: 1, name: 'Paulo'}, { id: 2, name: 'Victor'}, { id: 3, name: 'Lobato'}];

    findAll(name?: string): User[] {

        if(name) {
            return this.users.filter(user => user.name === name)
        }

        return this.users;
    }
    
    findById(userId: number): User {
        return this.users.find(user => user.id === userId);
    }

    createUser(createUserDTO: CreateUserDTO): User {
        const newUser = { id: Date.now(), ...createUserDTO };

        this.users.push(newUser);

        return newUser;
    }
}

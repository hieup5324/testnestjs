import { IsEmail, IsNotEmpty } from "class-validator";

export class RegisterUserDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;
}
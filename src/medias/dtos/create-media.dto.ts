import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class createMediaDto {
    @IsNotEmpty()
    @IsString()
    title: string
    @IsNotEmpty()
    @IsString()
    @IsUrl()
    username: string;
}
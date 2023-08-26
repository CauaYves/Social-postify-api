import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class publicationDto {
    @IsNotEmpty()
    @IsNumber()
    mediaId: number;

    @IsNotEmpty()
    @IsNumber()
    postId: number;

    @IsNotEmpty()
    @IsDateString()
    date: Date;
}
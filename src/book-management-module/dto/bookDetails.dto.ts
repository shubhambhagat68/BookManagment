import { IsNotEmpty, IsOptional } from "class-validator";

export class BookDetailsDto{

    @IsNotEmpty({message: "Title is required"})
    title: string;

    @IsNotEmpty({message: "Author is required"})
    author: string;

    @IsOptional()
    summary: string
    
}



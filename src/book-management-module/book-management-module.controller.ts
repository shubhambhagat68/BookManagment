import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { BookManagementModuleService } from './book-management-module.service';
import { BookDetailsDto } from './dto/bookDetails.dto';

@Controller('book-management-module')
export class BookManagementModuleController {
    constructor( private bookManagementService: BookManagementModuleService){}

    @Get('getBook')
    async getBookRecord(@Query('id')id:string){
        return await this.bookManagementService.getBookRecord(id)
    }

    @Post('addBook')
    async createBookRecord(@Body()body:BookDetailsDto){
        return await this.bookManagementService.createBookRecord(body)
    }

    @Patch('updateBookRecord')
    async updateBookRecord(@Query('id')id:string,@Body()body){
        return await this.bookManagementService.updateBookRecord(id,body)
    }

    @Delete('deleteBook')
    async deleteBookRecord(@Query('id')id:string){
        return await this.bookManagementService.deleteBookRecord(id)
    }
}

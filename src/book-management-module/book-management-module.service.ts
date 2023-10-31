import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBook } from 'src/interface/book.interface';
import { BookDetailsDto } from './dto/bookDetails.dto';
import { BookSchema } from 'src/schema/book.schema';

@Injectable()
export class BookManagementModuleService {
    constructor(
    @InjectModel('Book') private readonly bookManagement: Model<IBook>
    ) {}

    async getBookRecord(id:string){
        if(id){
           
            const book = await this.bookManagement.findOne({uniqueId:id});

            if(!book){
                return{
                    show:{
                        type: 'error',
                        message: 'No Book Found!',
                    }
                }
            }

            return book;
        }

         const allBooks = await this.bookManagement.find().sort({ updatedAt: -1 }).exec();

        return allBooks;
    }   

    async createBookRecord(body:BookDetailsDto){
        if(!body.author || !body.title){
            return {
                show:{
                    type:"error",
                    message:"Please Provide Missing Field Author or Title!"
                }
            } 
        }

        const bookExist = await this.bookManagement.findOne( { "author" : { $regex : new RegExp(body.author.trim(), "i") } ,"title" : { $regex : new RegExp(body.title.trim(), "i") }} );
        let book;
        if(bookExist){
            return {
                show:{
                    type:"error",
                    message:"Book Already Exist!"
                }
            } 
        }
        else{
            book = new this.bookManagement();
        }
        book.author = body.author.trim()
        book.title = body.title.trim()

        if(body?.summary){
            book.summary = body.summary.trim()
        }

        await book.save()

        return {
            show:{
                type:"success",
                message:"Book Record Created!"
            }
        } 

    }

    async updateBookRecord(id:string,body:any){

        try{
            let bookExist

            if(!id){
                return {
                    show:{
                        type:"error",
                        message:"Please Provide Book Id!"
                    }
                } 
            }

            if(body?.author && body?.title ){
                const bookExist = await this.bookManagement.findOne( { "author" : { $regex : new RegExp(body.author.trim(), "i") } ,"title" : { $regex : new RegExp(body.title.trim(), "i") }} );
                let book;
                if(bookExist){
                    return {
                        show:{
                            type:"error",
                            message:"Book Already Exist!"
                        }
                    } 
                }
            }
            else if(body?.author ){
                const authorName = body.author.trim()
                bookExist = await this.bookManagement.findOne( { "author" : { $regex : new RegExp(authorName, "i") } } );
            }
            else if(body?.title){
                const titleName= body.title.trim()
                bookExist = await this.bookManagement.findOne( { "title" : { $regex : new RegExp(titleName, "i") } } );
            }

        
            if(body?.author && !body?.title && bookExist &&body.author == bookExist?.author){
                return {
                    show:{
                        type:"error",
                        message:"Book Already Exist!"
                    }
                } 
            }
            if(body?.title && !body?.author && bookExist &&body.title == bookExist?.title){
                return {
                    show:{
                        type:"error",
                        message:"Book Already Exist!"
                    }
                } 
            }
            else if(body?.title && body?.author && bookExist && body.title == bookExist?.title && body.author == bookExist?.author){
                return {
                    show:{
                        type:"error",
                        message:"Book Already Exist!"
                    }
                } 
            }
            
          
            const book = await this.bookManagement.findOneAndUpdate({uniqueId:id},body,{useFindAndModify: false}).exec();


            if (!book) {
                let show = {
                    type: 'error',
                    message: 'Book Record Not Found!',
                };

                return show
            }
    
            return {
                show:{
                    type:"success",
                    message:"Record Updated Successfully!"
                }
            }
        }
        catch(error){
            throw new NotFoundException(error);
        }
      

    }

    async deleteBookRecord(id:string){
        try{
            if(!id){
                return{
                    show:{
                        type:"error",
                        message:"Please Provide The Book Id To Be Deleted."
                    }
                }
            }
            const deletedRecord = await this.bookManagement.deleteOne({uniqueId:id}).exec();
            let show;
            if(deletedRecord.acknowledged==true&&deletedRecord.deletedCount==0){
                show = {
                    type: 'error',
                    message: 'Book Record Not Found!',
                  };
            }
            else{
                show = {
                    type: 'success',
                    message: 'Book Record Deleted Successfully!',
                };
            }
           

            return { show };
        }
        catch(error){
            throw new InternalServerErrorException(error);
        }
    }
}

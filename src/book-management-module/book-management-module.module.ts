import { Module } from '@nestjs/common';
import { BookManagementModuleController } from './book-management-module.controller';
import { BookManagementModuleService } from './book-management-module.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Schema } from 'mongoose';
import { BookSchema } from 'src/schema/book.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name:'Book', schema: BookSchema }]),
  ],
  controllers: [BookManagementModuleController],
  providers: [BookManagementModuleService]
})
export class BookManagementModuleModule {}

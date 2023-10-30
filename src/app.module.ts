import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookManagementModuleModule } from './book-management-module/book-management-module.module';

@Module({
  imports:[ 
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/Book'
    ),
    BookManagementModuleModule],
  providers: [],
})
export class AppModule {}

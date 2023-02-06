import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlashcardsController } from './flashcards.controller';

@Module({
  imports: [],
  controllers: [AppController, FlashcardsController],
  providers: [AppService],
})
export class AppModule { }

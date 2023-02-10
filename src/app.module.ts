import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlashcardsModule } from './flashcards/flashcards.module';

@Module({
  imports: [FlashcardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

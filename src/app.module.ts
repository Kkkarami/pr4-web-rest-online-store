import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishesController } from './dishes/dishes.controller';
import { DishesService } from './dishes/dishes.service';

@Module({
  imports: [],
  controllers: [AppController, DishesController],
  providers: [AppService, DishesService],
})
export class AppModule {}

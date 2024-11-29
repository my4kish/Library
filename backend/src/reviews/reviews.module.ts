import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { Review, ReviewsSchema } from './schemas/reviews.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Review.name, schema: ReviewsSchema }])],
  controllers: [ReviewsController],
  providers: [ReviewsService],
  exports: [ReviewsService],
})
export class ReviewsModule {}

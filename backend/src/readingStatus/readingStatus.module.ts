import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReadingStatusController } from './readingStatus.controller';
import { ReadingStatusService } from './readingStatus.service';
import { ReadingStatus, ReadingStatusSchema } from './schemas/readingStatus.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReadingStatus.name, schema: ReadingStatusSchema },
    ]),
  ],
  controllers: [ReadingStatusController],
  providers: [ReadingStatusService],
  exports: [ReadingStatusService],
})
export class ReadingStatusModule {}

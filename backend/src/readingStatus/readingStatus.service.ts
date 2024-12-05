import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReadingStatus } from './schemas/readingStatus.schema';
import { CreateReadingStatusDto } from './dto/createReadingStatus.dto';
import { UpdateReadingStatusDto } from './dto/updateReadingStatus.dto';

@Injectable()
export class ReadingStatusService {
  constructor(
    @InjectModel(ReadingStatus.name) private readonly readingStatusModel: Model<ReadingStatus>,
  ) {}

  async create(createReadingStatusDto: CreateReadingStatusDto): Promise<ReadingStatus> {
    const readingStatus = new this.readingStatusModel(createReadingStatusDto);
    return readingStatus.save();
  }

  async findAll(): Promise<ReadingStatus[]> {
    return this.readingStatusModel.find().populate('userId bookId').exec();
  }

  async findByUser(userId: string): Promise<ReadingStatus[]> {
    return this.readingStatusModel.find({ userId }).populate('bookId').exec();
  }

  async findByBook(bookId: string): Promise<ReadingStatus[]> {
    return this.readingStatusModel.find({ bookId }).populate('userId').exec();
  }

  async update(
    id: string,
    updateReadingStatusDto: UpdateReadingStatusDto,
  ): Promise<ReadingStatus> {
    const updatedStatus = await this.readingStatusModel
      .findByIdAndUpdate(id, updateReadingStatusDto, { new: true })
      .populate('userId bookId')
      .exec();
    if (!updatedStatus) {
      throw new NotFoundException(`ReadingStatus with ID "${id}" not found`);
    }
    return updatedStatus;
  }

  async delete(id: string): Promise<void> {
    const result = await this.readingStatusModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`ReadingStatus with ID "${id}" not found`);
    }
  }
}

import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ReadingStatusService } from './readingStatus.service';
import { CreateReadingStatusDto } from './dto/createReadingStatus.dto';
import { UpdateReadingStatusDto } from './dto/updateReadingStatus.dto';

@Controller('reading-status')
export class ReadingStatusController {
  constructor(private readonly readingStatusService: ReadingStatusService) {}

  @Post()
  async create(@Body() createReadingStatusDto: CreateReadingStatusDto) {
    return this.readingStatusService.create(createReadingStatusDto);
  }

  @Get()
  async findAll() {
    return this.readingStatusService.findAll();
  }

  @Get('user/:userId')
  async findByUser(@Param('userId') userId: string) {
    return this.readingStatusService.findByUser(userId);
  }

  @Get('book/:bookId')
  async findByBook(@Param('bookId') bookId: string) {
    return this.readingStatusService.findByBook(bookId);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateReadingStatusDto: UpdateReadingStatusDto,
  ) {
    return this.readingStatusService.update(id, updateReadingStatusDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.readingStatusService.delete(id);
  }
}

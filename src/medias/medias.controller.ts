import { Controller, Res, Delete, Get, Post, Put, Body, HttpStatus, ValidationPipe, Param } from '@nestjs/common';
import { Response } from 'express';
import { MediasService } from './medias.service';
import { createMediaDto } from './dtos/create-media.dto';
import { Media } from '@prisma/client';

@Controller('/medias')
export class MediasController {
  constructor(private readonly mediasService: MediasService) {}
  @Get()
  async getMedias(@Res() res: Response) {
    const result: Media[] = await this.mediasService.getMedias();
    return res.status(HttpStatus.OK).send(result);
  }
  @Get(':id')
  async getMedia(@Param()mediaId: {id: string},@Res() res: Response) {
    try{
      const result = await this.mediasService.getMedia(mediaId.id);
      return res.status(HttpStatus.OK).send(result);
    }catch(error){
      if(error.name === 'notFoundError') return res.status(HttpStatus.NOT_FOUND).send(error.message)
    }
  }
  @Post()
  async createMedia(@Body(new ValidationPipe()) createMediaDto: createMediaDto, @Res() res: Response) {
    try{
      const result = await this.mediasService.createMedia(createMediaDto.title, createMediaDto.username);
      return res.status(HttpStatus.CREATED).send(result);
    }catch(error){
      if(error.name === 'conflictError') return res.status(HttpStatus.CONFLICT).send(error.message)
    }
  }
  @Put(':id')
  updateMedia(@Res() res: Response) {
    const result = this.mediasService.updateMedia();
    return res.status(HttpStatus.OK).send(result);
  }
  @Delete(':id')
  deleteMedia(@Res() res: Response) {
    const result = this.mediasService.deleteMedia();
    return res.status(HttpStatus.OK).send(result);
  }
}
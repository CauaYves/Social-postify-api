import { Controller, Delete, Res, Get, Post, Put, ValidationPipe, Body, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { PublicationsService } from './publications.service';
import { publicationDto } from './dtos/publication.dto';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}
  @Get()
  getPublications(@Res() res: Response) {
    const result = this.publicationsService.getPublications();
    return res.status(200).send(result);
  }
  @Get(':id')
  getPublication(@Res() res: Response) {
    const result = this.publicationsService.getPublication();
    return res.status(200).send(result);
  }
  @Post()
  async createPublication(@Body(new ValidationPipe()) publication: publicationDto, @Res() res: Response) {
    try{
      const result = await this.publicationsService.createPublication(publication);
      return res.status(201).send(result);
    }catch(error) {
      if(error.name === 'notFoundError') return res.sendStatus(HttpStatus.NOT_FOUND).send(error.message)
    }
  }
  @Put(':id')
  updatePublication(@Res() res: Response) {
    const result = this.publicationsService.updatePublication();
    return res.status(200).send(result);
  }
  @Delete(':id')
  deletePublication(@Res() res: Response) {
    const result = this.publicationsService.deletePublication();
    return res.status(200).send(result);
  }
}
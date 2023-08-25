import { Controller, Delete, Res, Get, Post, Put } from '@nestjs/common';
import { Response } from 'express';
import { PublicationsService } from './publications.service';

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
  createPublication(@Res() res: Response) {
    const result = this.publicationsService.createPublication();
    return res.status(201).send(result);
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
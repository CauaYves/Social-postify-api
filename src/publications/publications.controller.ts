import { Controller, Delete, Res, Get, Post, Put, ValidationPipe, Body, HttpStatus, Patch, ParseIntPipe, Param, Query } from '@nestjs/common';
import { Response } from 'express';
import { PublicationsService } from './publications.service';
import { publicationDto } from './dtos/publication.dto';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @Get()
  async getAllPublications(@Query("published") published: string = null, @Query("after") after: Date = null) {
      return await this.publicationsService.getAllPublicationsService(published, after);
  }

  @Get(":id")
  async getPublicationByIdController(@Param("id", ParseIntPipe) id: number)
  {
      return await this.publicationsService.getPublicationById(id);
  }

  @Post()//FIXME Cannot read properties of undefined (reading 'publication') 
  async createPublication(@Body(new ValidationPipe()) publication: publicationDto, @Res() res: Response) {
    try{
      const result = await this.publicationsService.createPublication(publication);
      return res.status(201).send(result);
    }catch(error) {
      if(error.name === 'notFoundError') return res.status(HttpStatus.NOT_FOUND).send(error.message)
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error.message)
    }
  }

  @Patch(":id")
  async updatePublicationController(@Param("id", ParseIntPipe) id: number, @Body() body: publicationDto, @Res() res: Response) {
      try{
        await this.publicationsService.updatePublicationService(id, body);
      }catch(error){
        if(error.name === 'forbiddenError') return res.status(HttpStatus.NOT_FOUND).send(error.message)
      }
  }

  @Delete(":id")
  async deletePublicationByIdController(@Param("id", ParseIntPipe) id: number, @Res() res: Response) {
      try{
        await this.publicationsService.deletePublicationByIdService(id);
      }catch(error){
      if(error.name === 'notFoundError') return res.status(HttpStatus.NOT_FOUND).send(error.message)
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error.message)
      }
  }
}
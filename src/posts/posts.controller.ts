import { Controller, Delete, Res, Get, Post, Put, Body, ValidationPipe, HttpStatus, Param } from '@nestjs/common';
import { Response } from 'express';
import { PostsService } from './posts.service';
import { postDto } from './dtos/post.dto';
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()//DONE
  async getPosts(@Res() res: Response) {
    try{
      const result = await this.postsService.getPosts();
      return res.status(HttpStatus.OK).send(result);
    }catch(error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error.message)
    }
  }

  @Get(':id')//DONE
  async getPost(@Param()postId: {id: string},@Res() res: Response) {
    try{
      const result = await this.postsService.getPost(Number(postId.id));
      return res.status(HttpStatus.OK).send(result);
    }catch(error) {
      if(error.name === 'notFoundError') return res.status(HttpStatus.NOT_FOUND).send(error.message)
    }
  }

  @Post()//DONE
  async createPost(@Body(new ValidationPipe()) Post: postDto, @Res() res: Response) {
    const result = await this.postsService.createPost(Post);
    return res.status(HttpStatus.CREATED).send(result);
  }

  @Put(':id')//FIXME
  updatePost(@Res() res: Response) {
    const result = this.postsService.updatePost();
    return res.status(200).send(result);
  }

  @Delete(':id')
  async deletePost(@Param()postId: {id: string},@Res() res: Response) {
    try{
      const result = await this.postsService.deletePost(Number(postId.id));
      return res.status(HttpStatus.NO_CONTENT).send(result);
    }catch(error) {
      // if(error.name === 'notFoundError') 
      return res.status(HttpStatus.NOT_FOUND).send(error.message)
    }
  }
}
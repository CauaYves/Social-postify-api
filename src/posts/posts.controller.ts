import { Controller, Delete, Res, Get, Post, Put } from '@nestjs/common';
import { Response } from 'express';
import { PostsService } from './posts.service';
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  getPosts(@Res() res: Response) {
    const result = this.postsService.getPosts();
    return res.status(200).send(result);
  }
  @Get(':id')
  getPost(@Res() res: Response) {
    const result = this.postsService.getPost();
    return res.status(200).send(result);
  }
  @Post()
  createPost(@Res() res: Response) {
    const result = this.postsService.createPost();
    return res.status(201).send(result);
  }
  @Put(':id')
  updatePost(@Res() res: Response) {
    const result = this.postsService.updatePost();
    return res.status(200).send(result);
  }
  @Delete(':id')
  deletePost(@Res() res: Response) {
    const result = this.postsService.deletePost();
    return res.status(200).send(result);
  }
}
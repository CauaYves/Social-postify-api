import { Module } from '@nestjs/common';
import { PostController } from './posts.controller';
import { PostsService } from './posts.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostsRepository } from './posts.repository';

@Module({
  controllers: [PostController],
  providers: [PostsService, PostsRepository]
})
export class PostsModule {}

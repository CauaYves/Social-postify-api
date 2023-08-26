import { Module } from '@nestjs/common';
import { PublicationsController } from './publications.controller';
import { PublicationsService } from './publications.service';
import { PublicationsRepository } from './publications.repository';
import { MediasModule } from 'src/medias/medias.module';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  imports: [MediasModule, PostsModule],
  controllers: [PublicationsController],
  providers: [PublicationsService, PublicationsRepository]
})
export class PublicationsModule {}

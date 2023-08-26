import { Injectable } from '@nestjs/common';
import { publicationDto } from './dtos/publication.dto';
import { MediasService } from '../medias/medias.service';
import { PostsService } from 'src/posts/posts.service';

@Injectable()
export class PublicationsService {
    constructor (private mediasService: MediasService, private postService: PostsService) {}
    deletePublication() {
        throw new Error('Method not implemented.');
    }
    updatePublication() {
        throw new Error('Method not implemented.');
    }
    async createPublication(publication: publicationDto) {
        const media = await this.mediasService.getMedia(publication.mediaId)
        const post = await this.postService.getPost(publication.postId)
    }
    getPublication() {
        throw new Error('Method not implemented.');
    }
    getPublications() {
        throw new Error('Method not implemented.');
    }
}

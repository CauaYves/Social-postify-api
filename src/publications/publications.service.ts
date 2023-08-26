import { Injectable } from '@nestjs/common';
import { publicationDto } from './dtos/publication.dto';
import { MediasService } from '../medias/medias.service';
import { PostsService } from 'src/posts/posts.service';
import { PublicationsRepository } from './publications.repository';
import { NotFoundError } from 'rxjs';
import { notFoundError } from 'src/errors/not-found-error';
import { forbiddenError } from 'src/errors/forbidden-error';
import { badRequestError } from 'src/errors/bad-request-error';

@Injectable()
export class PublicationsService {
    constructor (private mediasService: MediasService, private postService: PostsService, private readonly publicationsRepository: PublicationsRepository) {}

    async getAllPublicationsService(publish?: string, after?: Date) {
        if (publish !== null && publish !== "true" && publish !== "false") {
            throw badRequestError('data inválida');
        }
        if ((new Date(after).toString() === "Invalid Date")) {
            throw badRequestError('data inválida');
        }
        const booleanInput = JSON.parse(publish);
        return await this.publicationsRepository.getAllPublicationRepository(booleanInput, after);
    }
    
    async getPublicationById(id: number) {
        const publicationExists = await this.publicationsRepository.findByID(id);
        if (!publicationExists) {
            throw notFoundError('publication does not exists');
        }
        return publicationExists;
    }
    
    async createPublication(publication: publicationDto) {
        await this.mediasService.getMedia(publication.mediaId)
        await this.postService.getPost(publication.postId)
        const publicationResult = await this.publicationsRepository.create(publication)
        return publicationResult
    }

    async updatePublicationService(id: number, body: publicationDto) {
        const publicationExits = await this.getPublicationById(id);
        if (new Date(body.date) < new Date()) {
            throw forbiddenError('agendamento possivel apenas para datas futuras');
        }
        if (new Date(publicationExits.date) < new Date()) {
            throw forbiddenError('agendamento expirado');
        }
        await this.mediasService.getMedia(body.mediaId);
        await this.postService.getPost(body.postId);

        await this.publicationsRepository.putPublication(id, body);

        console.log(`Publication ${id}: Updated data.`)
    }

    async deletePublicationByIdService(id: number): Promise<void> {
        await this.getPublicationById(id);

        await this.publicationsRepository.delete(id);
    }


}

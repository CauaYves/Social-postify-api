import { Injectable } from '@nestjs/common';
import { publicationDto } from './dtos/publication.dto';

@Injectable()
export class PublicationsService {
    deletePublication() {
        throw new Error('Method not implemented.');
    }
    updatePublication() {
        throw new Error('Method not implemented.');
    }
    createPublication(publication: publicationDto) {
        
    }
    getPublication() {
        throw new Error('Method not implemented.');
    }
    getPublications() {
        throw new Error('Method not implemented.');
    }
}

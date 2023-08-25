import { Injectable } from '@nestjs/common';
import { MediasRepository } from './medias.repository';
import { Media } from '@prisma/client';
import { conflictError } from 'src/errors/conflict-error';
import { notFoundError } from 'src/errors/not-found-error';

@Injectable()
export class MediasService {

    constructor (private MediasRepository: MediasRepository) {}

    async getMedia(mediaId: string) {
        const media = await this.MediasRepository.findById(Number(mediaId))
        if(!media) throw notFoundError("this media doens't exists.");
        return media
    }
    async deleteMedia(mediaId: string) {
        const media = await this.MediasRepository.findById(Number(mediaId))
        if(!media) throw notFoundError("this media doens't exists.");
    }
    updateMedia(id: string) {
    }
    async createMedia(title: string, username: string) {
        const medias: Media[] = await this.MediasRepository.findMany()
        const alreadyMediaExists = medias.find((media) => media.title === title && media.username === username)
        if(alreadyMediaExists) throw conflictError('media already exists.')
        return await this.MediasRepository.create(title, username)
    }
    async getMedias() {
        return await this.MediasRepository.findMany()
    }
}

import { Injectable } from '@nestjs/common';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
    constructor (private readonly repository: PostsRepository) {}
    deletePost() {
        throw new Error('Method not implemented.');
    }
    updatePost() {
        throw new Error('Method not implemented.');
    }
    async createPost(post) {
        return await this.repository.create(post)
    }
    getPost() {
        throw new Error('Method not implemented.');
    }
    getPosts() {
        throw new Error('Method not implemented.');
    }
}

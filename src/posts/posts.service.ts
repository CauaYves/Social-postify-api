import { Injectable } from '@nestjs/common';
import { PostsRepository } from './posts.repository';
import { notFoundError } from 'src/errors/not-found-error';

@Injectable()
export class PostsService {
    constructor (private readonly repository: PostsRepository) {}
    async deletePost(id: number) {//FIXME O post só pode ser deletado se não estiver fazendo parte de nenhuma publicação (agendada ou publicada). Neste caso, retornar o status code 403 Forbidden.
        const postExists = await this.repository.findUnique(id)
        if(!postExists) throw notFoundError("this post does not exist")
        return await this.repository.delete(id)
    }
    updatePost() {
        throw new Error('Method not implemented.');
    }
    async createPost(post) {
        return await this.repository.create(post)
    }
    async getPost(id: number) {
        const post = await this.repository.findUnique(id)
        if(!post) throw notFoundError("this post does not exist")
        return post
    }
    async getPosts() {
        return await this.repository.find()
    }
}

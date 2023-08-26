import { PrismaService } from "src/prisma/prisma.service";
import { postDto } from "./dtos/post.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostsRepository {
    constructor(private readonly prisma: PrismaService) {}

    async delete(id: number) {
        return await this.prisma.post.delete({
            where: { id }
        })
    }

    async findUnique(id: number) {
        return await this.prisma.post.findFirst({
            where: { id }
        })
    }

    async find() {
        return await this.prisma.post.findMany()
    }

    async create(post: postDto) {
        return await this.prisma.post.create({
            data: post
        })
    }

}
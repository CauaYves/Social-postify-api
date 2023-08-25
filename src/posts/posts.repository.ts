import { PrismaService } from "src/prisma/prisma.service";
import { postDto } from "./dtos/post.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostsRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(post: postDto) {
        return await this.prisma.post.create({
            data: post
        })
    }

}
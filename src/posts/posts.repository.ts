import { PrismaService } from "src/prisma/prisma.service";

export class PostsRepository {

    constructor (private readonly prisma: PrismaService) {}

}
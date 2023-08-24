import { PrismaService } from "src/prisma/prisma.service";

export class MediasRepository {
    constructor(private readonly prisma: PrismaService) {}
}
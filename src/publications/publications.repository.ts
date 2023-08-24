import { PrismaService } from "src/prisma/prisma.service";

export class PublicationsRepository {
    constructor(private readonly prisma: PrismaService) {}
    
}
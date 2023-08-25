import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
@Injectable()
export class MediasRepository {
    async findById(id: number) {
        return await this.prisma.media.findUnique({
            where: { id }
        })
    }
    constructor(private readonly prisma: PrismaService) {}
    
    async create(title: string, username: string) {
        return await this.prisma.media.create({
            data: {
                username,
                title
            }
        })
    }
    async findMany(){
        return await this.prisma.media.findMany()
    }    
}
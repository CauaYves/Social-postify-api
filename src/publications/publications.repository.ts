import { PrismaService } from "src/prisma/prisma.service";
import { publicationDto } from './dtos/publication.dto';
import { badRequestError } from "src/errors/bad-request-error";

export class PublicationsRepository {
    async getAllPublicationRepository(publish?: boolean, after?: Date){
        const dateFilter: { lt?: Date; gt?: Date } = {};

        if (after) {
            if (publish === true) {
                dateFilter.lt = new Date();
            } else if (publish === false) {
                dateFilter.gt = after > new Date() ? after : new Date();
            } else {
                dateFilter.gt = after;
            }
        } else if (publish === true) {
            dateFilter.lt = new Date();
        } else if (publish === false) {
            dateFilter.gt = new Date();
        }

        const whereClause = { date: dateFilter };

        return await this.prisma.publication.findMany({
            where: whereClause
        });
    }

    constructor(private readonly prisma: PrismaService) {}

    async delete(id: number) {
        await this.prisma.publication.delete({
            where: {
                id
            }
        })
    }
    
    async findByID(id: number) {
        return await this.prisma.publication.findFirst({
            where: { id }
        })
    }
    
    async create(publication: publicationDto) {
        return await this.prisma.publication.create({
            data: publication
        });
    }

    async putPublication(id: number, body: publicationDto) {
        await this.prisma.publication.update({
            where: { id },
            data: {
                mediaId: body.mediaId,
                postId: body.postId,
                date: new Date(body.date)
            }
        })  
    }

}
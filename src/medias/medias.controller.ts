import { Controller, Post } from '@nestjs/common';

@Controller('medias')
export class MediasController {
    @Post()
    postMedia(){}
    
}

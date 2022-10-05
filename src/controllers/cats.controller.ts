import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    console.log(request);
    return 'This action returns all cats';
  }

  @Post()
  @HttpCode(204)
  create(): string {
    return 'This action adds a new cat';
  }
}

import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get('ish')
  getCats(@Req() request: Request): string {
    console.log(request);
    return `all cats are dogs. uwu ${request}`;
  }
}

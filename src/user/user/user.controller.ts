import { Controller, Get, Post, Req, Query } from '@nestjs/common';
import type { Request } from 'express';

@Controller('api/users')
export class UserController {
  @Get('/hello')
  sayHello(@Query('name') name: string): string {
    return `Hello ${name}`;
  }

  @Get('/:id')
  getById(@Req() request: Request): string {
    return `Bau ${request.params.id as string}`;
  }

  @Post()
  post(): string {
    return 'Post';
  }

  @Get('/sample')
  get(): string {
    return 'GET';
  }
}

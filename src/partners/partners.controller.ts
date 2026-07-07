import { Controller, Get, Body, Post, Param, Patch } from '@nestjs/common';
import { PartnersService } from './partners.service';
import { CreatePartnerDto } from './dto/create-partner.dto';

@Controller('partners')
export class PartnersController {
  constructor(private partnersService: PartnersService) {}

  @Post()
  create(@Body() Createdto: CreatePartnerDto) {
    return this.partnersService.create(Createdto);
  }

  @Get()
  findAll() {
    return this.partnersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partnersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreatePartnerDto) {
    return this.partnersService.update(+id, dto);
  }
}

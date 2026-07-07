import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Partner } from './entities/partner.entity';
import { Repository } from 'typeorm';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';

@Injectable()
export class PartnersService {
  constructor(
    @InjectRepository(Partner)
    private partnerRepo: Repository<Partner>,
  ) {}

  create(dto: CreatePartnerDto) {
    const partner = this.partnerRepo.create(dto);
    return this.partnerRepo.save(partner);
  }

  async findAll() {
    const partners = await this.partnerRepo.find();
    return {
      statusCode: 200,
      message: 'sukses',
      data: partners,
    };
  }

  async findOne(id: number) {
    const partner = await this.partnerRepo.findOneBy({ id });
    if (!partner) throw new NotFoundException('Partner not found');
    return partner;
  }

  async update(id: number, dto: UpdatePartnerDto) {
    const partner = await this.findOne(id);
    Object.assign(partner, dto);
    return this.partnerRepo.save(partner);
  }
}

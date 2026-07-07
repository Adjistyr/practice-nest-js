import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreatePartnerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  ktp_number: number;

  @IsString()
  ktp_address: string;

  @IsString()
  mailing_address: string;

  @IsString()
  phone: string;

  @IsString()
  email: string;
}

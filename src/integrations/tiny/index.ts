import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmitInvoiceDto, emitInvoiceDtoSchema } from './dtos/EmitInvoice.dto';

@Injectable()
export class TinyService {
  api: AxiosInstance;
  token: string;

  constructor(configService: ConfigService) {
    this.api = axios.create({
      baseURL: 'https://api.tiny.com.br/api2',
    });

    this.token = configService.get('tiny.apiKey')!;
  }

  async createInvoice(body: EmitInvoiceDto) {
    try {
      const invoice = emitInvoiceDtoSchema.parse(body);

      const response = await this.api.post(
        'nota.servico.incluir.php',
        `token=${this.token}&nota=${JSON.stringify({ nota_servico: invoice })}&formato=JSON`,
      );

      if (response.data.retorno.status === 'Erro') {
        throw new Error(response.data.retorno.registros);
      }

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

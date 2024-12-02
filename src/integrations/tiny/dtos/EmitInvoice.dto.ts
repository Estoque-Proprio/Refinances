import { z } from 'zod';

export const emitInvoiceDtoSchema = z.object({
  data_emissao: z.string(),
  cliente: z.object({
    codigo: z.string(),
    nome: z.string(),
    tipo_pessoa: z.enum(['F', 'J', 'E']).default('F').optional(),
    cpf_cnpj: z.string().optional(),
    endereco: z.string().optional(),
    numero: z.string().optional(),
    complemento: z.string().optional(),
    bairro: z.string().optional(),
    cep: z.string().optional(),
    cidade: z.string().optional(),
    uf: z.string().length(2).optional(),
    fone: z.string().optional(),
    email: z.string().email().optional(),
    atualizar_cliente: z.enum(['S', 'N']).default('S').optional(),
  }),
  servico: z.object({
    descricao: z.string(),
    valor_servico: z.string(),
    codigo_lista_servico: z.string(),
  }),
  percentual_ir: z.string(),
  texto_ir: z.string(),
  percentual_iss: z.string(),
  descontar_iss_total: z.string(),
  forma_pagamento: z.enum(['boleto', 'credito', 'debito', 'deposito']),
  meio_pagamento: z.string(),
  categoria_financeira: z.string(),
  cnae: z.string(),
});

export type EmitInvoiceDto = z.infer<typeof emitInvoiceDtoSchema>;

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="docs/refinances.png" width="200" alt="Nest Logo" /></a>
</p>

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Sobre

Refinances é um projeto feito visando centralizar a contabilidade do Revendi. Ele gera todas as NFS-e para os pagamentos recebidos e faz a conciliação das transações bancárias.

Em resumo, ele recebe webhooks da Stripe informando quando uma assinatura é convertida ou renovada e gera as notas fiscais para esses pagamentos. Ao mesmo tempo que também processa os pagamentos da Stripe recebidos na conta bancária e faz a conciliação dos valores recebidos com as notas emitidas.

Além das automatizações, também permite lançamentos que fogem da Stripe ou de despesas pagas tanto via transferência bancária, como por cartão de crédito. Por fim, pode-se exportar todos os dados gerados para poderem ser enviados para contabilidade.

## Empresas integradas.

A ideia é que seja possível acoplar outras empresas respeitando os contratos definidos. Inicialmente, esse projeto integra as empresas utilizadas pelo Revendi para administração.

- Stripe
- Tiny ERP
- Agilize

## Motivação.

Conforme o produto escala, fica extremamente trabalhoso fazer a emissão de todas as notas fiscais e conciliar esses valores. Os pagamentos da Stripe são feitos em lote, então uma determinada transferência agrupa vários pagamentos já com as devidas taxas aplicadas, fazendo com que seja necessário consultar manualmente no painel da Stripe quais foram os pagamentos associados para ser possível conciliar.

A filosofia do Revendi é automatizar tudo que seja possível no digital para podermos focar em prover um produto de qualidade com atendimento totalmente humano.

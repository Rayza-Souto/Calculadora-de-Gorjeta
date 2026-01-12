**ID: BUG-01**
**Título:** Erro no console ao clicar em Calcular por elemento inexistente

**Ambiente:**
- Navegador: Chrome
- Aplicação: Calculadora de Gorjeta

**Descrição**
- Ao clicar no botão Calcular, a aplicação apresenta erro no console e não exibe os valores de gorjeta e total.

**Passos para reproduzir**
1. Abrir a aplicação
2. Preencher Valor da conta com 100
3. Preencher Gorjeta (%) com 10
4. Clicar em Calcular

**Resultado esperado**
- Gorjeta exibida como R$ 10,00
- Total exibido como R$ 110,00
- Nenhum erro no console

**Resultado obtido**
- Aplicação quebra ao clicar em Calcular
- Console exibe o erro:
Uncaught TypeError: Cannot set properties of null (setting 'innerText')
- Valores não são exibidos

**Causa raiz**
- O código tenta alterar o innerText do elemento mensagemErro, que não existe no HTML ou não foi carregado no momento da execução.

**Severidade**
- Média — impede o funcionamento da funcionalidade principal.

**Status**
Resolvido

**Correção Aplicada:**
- Ajuste no HTML incluindo o elemento mensagemErro
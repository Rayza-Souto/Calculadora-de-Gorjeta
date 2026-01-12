## CT-01 — Erro ao clicar em Calcular sem elemento de mensagem

**Pré-condição:** Aplicação carregada

- Elemento mensagemErro não existe no HTML

**Passos:**
1. Preencher Valor da conta com 100
2. Preencher Gorjeta (%) com 10
3. Clicar no botão Calcular

**Resultado esperado:**
- Sistema deve calcular a gorjeta normalmente
- Gorjeta exibida como R$ 10,00
- Total exibido como R$ 110,00
- Nenhum erro exibido no console

**Resultado obtido:**
- Aplicação quebra ao clicar em Calcular
- Console exibe erro
Uncaught TypeError: Cannot set properties of null (setting 'innerText')
- Nenhum valor é exibido na tela

**Status:** Passou

**Evidencia da correção:**
- Elemento mensagemErro adicionado ao HTML

**Resultado após correção:**
- Clicar no botão Calcular executa o cálculo corretamente
- Nenhum erro é exibido no console
- Valor e gorjeta exibidos corretamente

## CT-02 - Valor da conta vazia

**Passos:**
- Deixar o campo Valor da Conta vazio
- Preencher gorjeta em 10
- Clicar em calcular

**Resultado esperado:**
- Exibir mensagem de erro
- Não exibir valor de gorgeta nem total

## CT-03 - Gorjeta Vazia

**Passos:**
- Deixar o campo Valor da Conta com 100
- Preencher gorjeta vazio
- Clicar em calcular

**Resultado esperado:**
- Exibir mensagem de erro
- Não exibir valor de gorgeta nem total

## CT-04 - Valor da conta igual a 0

**Passos:**
- Informar 0 no campo Valor da Conta
- Informar 10 no campo Gorjeta
- Clicar em calcular

**Resultado esperado:**
- Exibir mensagem de erro
- Sistema não realiza nenhum cálculo

## CT-05 - Valor da gorjeta igual a 0

**Passos:**
- Informar 100 no campo Valor da Conta
- Informar 0 no campo Gorjeta
- Clicar em calcular

**Resultado esperado:**
- Exibir mensagem de erro
- Sistema não realiza nenhum cálculo

## CT-06 - Valor da conta com virgula

**Passos:**
- Informar 100,00 no campo Valor da conta
- Informar 15 no campo Gorjeta
- Clicar em calcular

**Resultado esperado:**
- Gorjeta exibida como R$15.00
- Total exibido como R$115.00

## CT-07 - Letras nos campos

**Passos:**
- Informar abc no campo Valor da conta
- Informar abc no campo Gorjeta
- Clicar em Calcular

**Resultado esperado:**
- Exibir mensagem de erro
- Não realizar nenhum cálculo

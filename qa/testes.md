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
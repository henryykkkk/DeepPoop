<p align="center">
  <img src="https://i.imgur.com/kb53BGi.png/" alt="DeepPoop Banner" />
</p>

<div align="center">
  <p>
    <a href="LICENSE"><img src="https://img.shields.io/badge/Licença-MIT-yellow.svg" alt="Licença: MIT"></a>  
    <a href="https://github.com/seu_usuario/DeepPoop"><img src="https://img.shields.io/badge/Versão-1.4-brightgreen" alt="Versão"></a>
    <a href="https://github.com/seu_usuario/DeepPoop"><img src="https://img.shields.io/badge/Status-Ativo-brightgreen" alt="Status"></a>
  </p>
</div>

## Índice

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Como Injetar](#como-injetar)
  - [Via DevTools no PC](#via-devtools-no-pc)
  - [Via DevTools no Android](#via-devtools-no-android)
  - [Via Userscript (Alternativo)](#via-userscript-alternativo)
- [Responsabilidade](#responsabilidade)
- [Nota](#nota)
- [Contribuições](#contribuições)
- [Licença](#licença)

---

## Sobre

**DeepPoop** é a evolução irreverente do lendário **PoopGPT**, agora adaptado para o **DeepSeek** utilizando **JavaScript puro**.  
Diga adeus às complicações e abrace uma experiência inovadora com prompts dinâmicos!

> **Inspiração:**  
> O **PoopGPT** injetava uma interface gráfica usando [SweetAlert2](https://sweetalert2.github.io/ ), com prompts customizáveis no ChatGPT.  
> Com o **DeepPoop**, essa essência se transforma para o DeepSeek, trazendo irreverência e praticidade em cada execução.

---

## Funcionalidades

- **💡 Praticidade:** Ativação rápida com um único comando ou com Userscript
- **🎨 Interface Intuitiva:** Mesma interface, usando SweetAlert2
- **⚡ JavaScript Puro:** Código limpo e sem dependências externas.
- **📱 Compatibilidade:** Funciona perfeitamente em PCs e dispositivos Android.
- **🚀 Atualizações Dinâmicas:** Preparado para receber novos prompts e funcionalidades!

---

## Como Injetar

### Via DevTools no PC

1. **Acesse o DeepSeek.**
2. **Abra o DevTools:**
   - **Windows/Linux:** `F12` ou `Ctrl + Shift + I`
   - **macOS:** `Cmd + Option + I`
3. **Selecione a aba "Console".**
4. **Cole e Execute** o código abaixo:

```javascript
fetch("https://raw.githubusercontent.com/henryykkkk/DeepPoop/refs/heads/main/deepPoop.js").then(t=>t.text()).then(eval);
```

---

### Via DevTools no Android

1. **Acesse o DeepSeek** no seu navegador (recomendamos o KiwiBrowser).
2. **Abra o DevTools:**
   - Toque nos três pontos no canto superior direito e selecione **Abrir DevTools**.
3. **Na aba "Console", cole o mesmo código acima e pressione Enter.**

> [!IMPORTANT]
> Você pode executar pela barra de pesquisa inserindo `javascript:` antes de colar o código, ou via bookmark!

---

### Via Userscript (Alternativo)

Se o procedimento manual parecer complicado, você pode instalar o **DeepPoop Userscript** com apenas um clique!  
Esse método adiciona um botão na página que, ao ser clicado, executa automaticamente o DeepPoop.

#### Instalação do Userscript

Clique no link abaixo para instalar o DeepPoop Userscript – ao acessar, o gerenciador de userscripts (como o Tampermonkey) será aberto automaticamente para facilitar a instalação:

✨ [Instalar Userscript](tampermonkey://install-script/https://github.com/henryykkkk/DeepPoop/raw/main/atalho.user.js)

Caso você ainda não tenha um gerenciador de userscripts instalado, recomendamos:

- **Chrome:** [Instalar Tampermonkey no Chrome](#)
- **Edge:** [Instalar Tampermonkey no Edge](#)
- **Firefox:** [Instalar Tampermonkey no Firefox](#)
  
*(KiwiBrowser também é compatível, ele aceita de todas as lojas de extensões)*

Após instalar o Tampermonkey, clique novamente no link para instalar o DeepPoop Userscript e aproveite!

---

## Responsabilidade

Ao utilizar o DeepPoop, você concorda com os seguintes termos:

1. **Uso Consciente:** Você assume total responsabilidade pelo uso deste script.
2. **Fins Éticos:** Utilize o DeepPoop apenas para fins legítimos e éticos.
3. **Sem Garantias:** O script é fornecido "no estado em que se encontra", sem garantias expressas ou implícitas.
4. **Segurança:** Não utilize o script para comprometer a segurança de sistemas, redes ou serviços.

---

## Nota

**DeepPoop** é uma adaptação experimental do **PoopGPT** para o **DeepSeek**, desenvolvida exclusivamente para fins educacionais e de experimentação.  
Tanto eu quando o criador do projeto anterior, não possuímos nenhuma relação com a OpenAI ou outras entidades oficiais. Use por sua conta e risco!

---

## Contribuições

Quer colaborar com o DeepPoop? Você pode:

- Abrir **issues** para relatar problemas ou sugerir melhorias.
- Enviar **pull requests** com novos prompts e funcionalidades.
- Compartilhar feedback e ideias para evoluir o DeepPoop.

---

## Licença

Distribuído sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

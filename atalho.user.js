// ==UserScript==
// @name         Atalho para Executar o DeepPoop
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Execute o DeepPoop pelo próprio site do DeepSeek!
// @author       henryykkkk
// @match        https://chat.deepseek.com
// @match        https://chat.deepseek.com/*
// @match        https://chat.deepseek.com/a/chat/s/*
// @icon         https://images.seeklogo.com/logo-png/61/2/deepseek-ai-icon-logo-png_seeklogo-611473.png
// @grant        none
// ==/UserScript==

async function carregarSweetAlert2() {
    return new Promise((resolve) => {
        const styleLink = document.createElement("link");
        styleLink.rel = "stylesheet";
        styleLink.href = "https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@5/dark.css";
        document.head.appendChild(styleLink);

        const scriptElem = document.createElement("script");
        scriptElem.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js";
        scriptElem.onload = () => resolve();
        document.head.appendChild(scriptElem);
    });
}

async function carregarSVG() {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/deepseek.png";
        img.onload = () => resolve();
    });
}

async function criarBotaoDeepPoop() {
    const botaoExistente = document.querySelector('.ds-button._3172d9f .ad0c98fd');
    if (botaoExistente && botaoExistente.textContent === 'DeepPoop') {
        return;
    }

    const novoBotao = document.createElement('div');
    novoBotao.setAttribute('role', 'button');
    novoBotao.setAttribute('class', 'ds-button ds-button--primary ds-button--filled ds-button--rect ds-button--m _3172d9f');
    novoBotao.setAttribute('tabindex', '0');
    novoBotao.setAttribute('style', '--ds-button-color: transparent; --button-text-color: #F8FAFF; --button-border-color: #626262; --ds-button-hover-color: #424451;');

    const divIcon = document.createElement('div');
    divIcon.setAttribute('class', 'ds-button__icon');

    const spanIcon = document.createElement('span');
    spanIcon.setAttribute('style', 'transition: none; transform: rotate(0deg);');

    const divIconSvg = document.createElement('div');
    divIconSvg.setAttribute('class', 'ds-icon');
    divIconSvg.setAttribute('style', 'font-size: 19px; width: 19px; height: 19px; color: rgb(248, 250, 255);');

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');
    svg.setAttribute('viewBox', '0 0 20 20');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    image.setAttribute('href', 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/deepseek.png');
    image.setAttribute('width', '20');
    image.setAttribute('height', '20');
    image.setAttribute('style', 'filter: var(--svg-filter)');

    svg.appendChild(image);
    divIconSvg.appendChild(svg);
    spanIcon.appendChild(divIconSvg);
    divIcon.appendChild(spanIcon);
    novoBotao.appendChild(divIcon);

    const spanTexto = document.createElement('span');
    spanTexto.setAttribute('class', 'ad0c98fd');
    spanTexto.textContent = 'DeepPoop';
    novoBotao.appendChild(spanTexto);

    novoBotao.addEventListener('click', async () => {
        novoBotao.style.transition = 'all 0.3s ease';
        novoBotao.style.cssText = `
            --ds-button-color: rgba(77, 107, 254, 0.40);
            --button-text-color: #4CAEFF;
            --button-border-color: rgba(0, 122, 255, 0.15);
            --ds-button-hover-color: rgba(77, 107, 254, 0.2);
            --svg-filter: invert(76%) sepia(13%) saturate(3113%) hue-rotate(183deg) brightness(101%) contrast(101%);
        `;

        await new Promise(resolve => setTimeout(resolve, 300));

        novoBotao.style.cssText = `
            --ds-button-color: transparent;
            --button-text-color: #F8FAFF;
            --button-border-color: #626262;
            --ds-button-hover-color: #424451;
        `;

        try {
            const response = await fetch("https://raw.githubusercontent.com/henryykkkk/DeepPoop/refs/heads/main/deepPoop.js");
            const script = await response.text();
            eval(script);
        } catch (error) {
            console.error("Erro ao carregar DeepPoop:", error);
        }
    });

    const divAlvo = document.querySelector('.ec4f5d61');
    if (divAlvo) {
        const botaoDeepThink = divAlvo.querySelector('.ad0c98fd');
        if (botaoDeepThink?.textContent === 'DeepThink (R1)') {
            botaoDeepThink.closest('.ds-button').insertAdjacentElement('beforebegin', novoBotao);
        }
    }
}

(async () => {
    await carregarSweetAlert2();
    await carregarSVG();
    setInterval(() => !document.querySelector('.ad0c98fd')?.textContent.includes('DeepPoop') && criarBotaoDeepPoop(), 1);
})();

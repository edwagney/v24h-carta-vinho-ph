/**
 * share.js — Menu de compartilhamento elegante (Bottom Sheet no celular / Modal no desktop)
 * Adega VINHO24H • ENNOVIN
 */
(function () {
    'use strict';

    const STYLE_ID = 'v24h-share-styles';
    const MODAL_ID = 'v24h-share-overlay';

    function injectStyles() {
        if (document.getElementById(STYLE_ID)) return;

        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
            #${MODAL_ID} {
                position: fixed;
                inset: 0;
                z-index: 9999;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                background: rgba(28, 25, 23, 0.52);
                backdrop-filter: blur(4px);
                padding: 0;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.22s ease;
                font-family: "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
            }
            #${MODAL_ID}.is-open {
                opacity: 1;
                pointer-events: auto;
            }
            .v24h-share-sheet {
                width: 100%;
                max-width: 460px;
                background: #FAF8F5;
                color: #1C1917;
                border-radius: 24px 24px 0 0;
                border: 1px solid #EAE5DC;
                box-shadow: 0 -10px 40px rgba(28, 25, 23, 0.22);
                padding: 14px 20px calc(22px + env(safe-area-inset-bottom, 0px));
                transform: translateY(24px);
                transition: transform 0.24s cubic-bezier(0.22, 1, 0.36, 1);
            }
            #${MODAL_ID}.is-open .v24h-share-sheet {
                transform: translateY(0);
            }
            @media (min-width: 640px) {
                #${MODAL_ID} {
                    align-items: center;
                    padding: 20px;
                }
                .v24h-share-sheet {
                    border-radius: 24px;
                    padding: 22px 24px 24px;
                    box-shadow: 0 24px 60px rgba(28, 25, 23, 0.25);
                    transform: translateY(12px) scale(0.98);
                }
                #${MODAL_ID}.is-open .v24h-share-sheet {
                    transform: translateY(0) scale(1);
                }
                .v24h-share-handle {
                    display: none !important;
                }
            }
            .v24h-share-handle {
                width: 42px;
                height: 4px;
                border-radius: 999px;
                background: #D6D3D1;
                margin: 0 auto 14px;
            }
            .v24h-share-header {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: 12px;
                margin-bottom: 18px;
            }
            .v24h-share-kicker {
                font-size: 11px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.12em;
                color: #7A1628;
                margin-bottom: 3px;
            }
            .v24h-share-title {
                font-size: 17px;
                font-weight: 800;
                color: #1C1917;
                line-height: 1.25;
                margin: 0;
            }
            .v24h-share-close {
                width: 34px;
                height: 34px;
                border-radius: 999px;
                border: 1px solid #EAE5DC;
                background: #FFFFFF;
                color: #57534E;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                flex-shrink: 0;
                transition: background-color 0.18s ease, color 0.18s ease;
            }
            .v24h-share-close:hover {
                background: #F3EFEA;
                color: #1C1917;
            }
            .v24h-share-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
                margin-bottom: 18px;
            }
            .v24h-share-option {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 8px;
                background: #FFFFFF;
                border: 1px solid #EAE5DC;
                border-radius: 16px;
                padding: 14px 8px;
                text-decoration: none;
                color: #1C1917;
                font-size: 12px;
                font-weight: 600;
                cursor: pointer;
                transition: transform 0.16s ease, border-color 0.16s ease, box-shadow 0.16s ease;
            }
            .v24h-share-option:hover {
                border-color: #D6CCC0;
                box-shadow: 0 4px 14px rgba(28, 25, 23, 0.08);
                transform: translateY(-2px);
            }
            .v24h-share-icon {
                width: 42px;
                height: 42px;
                border-radius: 999px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                color: #FFFFFF;
            }
            .v24h-share-link-box {
                display: flex;
                align-items: center;
                gap: 8px;
                background: #FFFFFF;
                border: 1px solid #EAE5DC;
                border-radius: 14px;
                padding: 6px 6px 6px 12px;
            }
            .v24h-share-url {
                flex: 1;
                min-width: 0;
                border: 0;
                background: transparent;
                font-size: 12px;
                color: #57534E;
                outline: none;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .v24h-share-copy-btn {
                flex-shrink: 0;
                display: inline-flex;
                align-items: center;
                gap: 6px;
                background: #7A1628;
                color: #FFFFFF;
                border: 0;
                border-radius: 10px;
                padding: 9px 14px;
                font-size: 12px;
                font-weight: 700;
                cursor: pointer;
                transition: background-color 0.18s ease;
            }
            .v24h-share-copy-btn:hover {
                background: #5B0F1D;
            }
            #v24h-toast {
                position: fixed;
                left: 50%;
                bottom: 24px;
                z-index: 10000;
                transform: translate(-50%, 80px);
                opacity: 0;
                pointer-events: none;
                background: #1C1917;
                color: #FFFFFF;
                padding: 11px 18px;
                border-radius: 14px;
                box-shadow: 0 10px 28px rgba(28, 25, 23, 0.25);
                font-size: 13px;
                font-weight: 600;
                transition: transform 0.25s ease, opacity 0.25s ease;
                font-family: "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
            }
            #v24h-toast.is-visible {
                transform: translate(-50%, 0);
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }

    function getShareContext(mode) {
        const isCatalog = mode === 'catalog' || Boolean(document.getElementById('grid-tintos'));
        const url = window.location.href;

        if (isCatalog) {
            return {
                kicker: 'Compartilhar carta',
                shareTitle: 'Carta Exclusiva de Vinhos • Adega VINHO24H',
                url,
                message: '🍷 Confira a Carta Exclusiva de Vinhos da Adega VINHO24H • Residencial Portal das Hortênsias:'
            };
        }

        const h1 = document.querySelector('h1');
        const wineTitle = h1
            ? h1.textContent.replace(/\s+/g, ' ').trim()
            : document.title.split('|')[0].trim();
        return {
            kicker: 'Compartilhar vinho',
            shareTitle: wineTitle,
            url,
            message: `🍷 Confira este vinho da Adega VINHO24H • Portal das Hortênsias: ${wineTitle}`
        };
    }

    function showToast(customMessage) {
        const pageToast = document.getElementById('toast');
        if (pageToast) {
            const label = pageToast.querySelector('span');
            if (label && customMessage) {
                label.textContent = customMessage;
            }
            pageToast.classList.remove('translate-y-20', 'opacity-0');
            clearTimeout(pageToast._hideTimer);
            pageToast._hideTimer = setTimeout(() => {
                pageToast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
            return;
        }

        let fallbackToast = document.getElementById('v24h-toast');
        if (!fallbackToast) {
            fallbackToast = document.createElement('div');
            fallbackToast.id = 'v24h-toast';
            document.body.appendChild(fallbackToast);
        }
        fallbackToast.textContent = customMessage || 'Link copiado!';
        requestAnimationFrame(() => fallbackToast.classList.add('is-visible'));
        clearTimeout(fallbackToast._hideTimer);
        fallbackToast._hideTimer = setTimeout(() => {
            fallbackToast.classList.remove('is-visible');
        }, 3000);
    }

    function copyUrlToClipboard(url, copyBtn) {
        const finishCopy = () => {
            if (copyBtn) {
                const original = copyBtn.innerHTML;
                copyBtn.innerHTML = '<span>Copiado!</span>';
                setTimeout(() => {
                    copyBtn.innerHTML = original;
                }, 1800);
            }
            showToast('Link da página copiado!');
        };

        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function' && window.isSecureContext) {
            navigator.clipboard.writeText(url).then(finishCopy).catch(() => fallbackCopy(url, finishCopy));
        } else {
            fallbackCopy(url, finishCopy);
        }
    }

    function fallbackCopy(url, onDone) {
        const dummyInput = document.createElement('input');
        dummyInput.value = url;
        dummyInput.setAttribute('readonly', '');
        dummyInput.style.position = 'fixed';
        dummyInput.style.opacity = '0';
        document.body.appendChild(dummyInput);
        dummyInput.select();
        dummyInput.setSelectionRange(0, url.length);
        try {
            document.execCommand('copy');
        } finally {
            document.body.removeChild(dummyInput);
        }
        onDone();
    }

    function buildModal(mode) {
        injectStyles();

        let overlay = document.getElementById(MODAL_ID);
        if (overlay) return overlay;

        const { kicker, shareTitle, url, message } = getShareContext(mode);
        const fullText = `${message}\n${url}`;

        const whatsappHref = `https://wa.me/?text=${encodeURIComponent(fullText)}`;
        const telegramHref = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(message)}`;
        const emailHref = `mailto:?subject=${encodeURIComponent(shareTitle + ' | Adega VINHO24H')}&body=${encodeURIComponent(message + '\n\n' + url)}`;
        const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`;
        const supportsNativeShare = typeof navigator.share === 'function';

        overlay = document.createElement('div');
        overlay.id = MODAL_ID;
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-labelledby', 'v24h-share-heading');

        overlay.innerHTML = `
            <div class="v24h-share-sheet">
                <div class="v24h-share-handle" aria-hidden="true"></div>
                <div class="v24h-share-header">
                    <div>
                        <div class="v24h-share-kicker"></div>
                        <h2 id="v24h-share-heading" class="v24h-share-title"></h2>
                    </div>
                    <button type="button" class="v24h-share-close" aria-label="Fechar opções de compartilhamento">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                </div>

                <div class="v24h-share-grid">
                    <a href="${whatsappHref}" target="_blank" rel="noopener noreferrer" class="v24h-share-option">
                        <span class="v24h-share-icon" style="background:#25D366;">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2a9.93 9.93 0 0 0-8.57 14.96L2 22l5.21-1.36A9.93 9.93 0 1 0 12.04 2m0 18.14a8.18 8.18 0 0 1-4.18-1.14l-.3-.18-3.09.81.83-3.01-.2-.31a8.2 8.2 0 1 1 7 3.83m4.5-6.15c-.25-.12-1.46-.72-1.69-.8-.22-.08-.39-.12-.55.12-.17.25-.64.8-.79.96-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.83-.2-.48-.4-.41-.55-.42h-.47c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.17.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z"/></svg>
                        </span>
                        <span>WhatsApp</span>
                    </a>

                    <a href="${telegramHref}" target="_blank" rel="noopener noreferrer" class="v24h-share-option">
                        <span class="v24h-share-icon" style="background:#229ED9;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.6c.2-.9-.6-1.6-1.4-1.3L2.7 10.2c-.9.3-.8 1.6.1 1.9l4.5 1.4 1.7 5.4c.3.8 1.3 1 1.8.3l2.6-2.8 4.9 3.6c.7.5 1.7.1 1.9-.7l1.7-14.7ZM9.2 13.7l8.2-5.4-6.4 6.8-.3 2.9-1.5-4.3Z"/></svg>
                        </span>
                        <span>Telegram</span>
                    </a>

                    <a href="${emailHref}" class="v24h-share-option">
                        <span class="v24h-share-icon" style="background:#7A1628;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        </span>
                        <span>E-mail</span>
                    </a>

                    <a href="${facebookHref}" target="_blank" rel="noopener noreferrer" class="v24h-share-option">
                        <span class="v24h-share-icon" style="background:#1877F2;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5H16l.5-3h-3V8.6c0-.9.3-1.6 1.6-1.6h1.5V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v2.3H8v3h2.5V21h3Z"/></svg>
                        </span>
                        <span>Facebook</span>
                    </a>

                    <a href="${xHref}" target="_blank" rel="noopener noreferrer" class="v24h-share-option">
                        <span class="v24h-share-icon" style="background:#1C1917;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24H16.17l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z"/></svg>
                        </span>
                        <span>X</span>
                    </a>

                    ${supportsNativeShare ? `
                    <button type="button" id="v24h-native-share-btn" class="v24h-share-option">
                        <span class="v24h-share-icon" style="background:#C59B27;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4"/><path d="m15.4 6.5-6.8 4"/></svg>
                        </span>
                        <span>Mais apps</span>
                    </button>` : ''}
                </div>

                <div class="v24h-share-link-box">
                    <input type="text" class="v24h-share-url" readonly aria-label="Link da página">
                    <button type="button" class="v24h-share-copy-btn">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                        <span>Copiar link</span>
                    </button>
                </div>
            </div>
        `;

        overlay.querySelector('.v24h-share-kicker').textContent = kicker;
        overlay.querySelector('#v24h-share-heading').textContent = shareTitle;
        const urlInput = overlay.querySelector('.v24h-share-url');
        urlInput.value = url;

        const closeBtn = overlay.querySelector('.v24h-share-close');
        const copyBtn = overlay.querySelector('.v24h-share-copy-btn');
        const nativeBtn = overlay.querySelector('#v24h-native-share-btn');

        closeBtn.addEventListener('click', closeShareMenu);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeShareMenu();
        });
        copyBtn.addEventListener('click', () => copyUrlToClipboard(urlInput.value, copyBtn));

        if (nativeBtn) {
            nativeBtn.addEventListener('click', () => {
                navigator.share({
                    title: `${shareTitle} | Adega VINHO24H`,
                    text: message,
                    url
                }).catch(() => {});
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
                closeShareMenu();
            }
        });

        document.body.appendChild(overlay);
        return overlay;
    }

    function openShareMenu(mode) {
        const overlay = buildModal(mode);
        const urlInput = overlay.querySelector('.v24h-share-url');
        if (urlInput) urlInput.value = window.location.href;
        requestAnimationFrame(() => overlay.classList.add('is-open'));
    }

    function closeShareMenu() {
        const overlay = document.getElementById(MODAL_ID);
        if (overlay) overlay.classList.remove('is-open');
    }

    window.openShareMenu = openShareMenu;
    window.copyPageLink = openShareMenu;
})();

/* ═══════════════════════════════════
   CHATBOT CONFIG
   Altere aqui para mudar número WA,
   delays e configurações globais.
═══════════════════════════════════ */
const CONFIG = {
  WA: '5583999953846',
  typingDelayMin: 2800,
  typingDelayRandom: 400,
};

function waLink(msg) {
  return `https://wa.me/${CONFIG.WA}?text=${encodeURIComponent(msg)}`;
}

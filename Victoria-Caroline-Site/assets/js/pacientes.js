/* ==========================================================================
   COFFEE SITES PRO — PACIENTES.JS
   Template: Clínica Odontológica (adaptado de Restaurante Premium)
   Responsabilidade: renderizar a seção #pacientes com um mural de fotos
   reais de pacientes atendidos pela Dra. Victoria Caroline.
   ========================================================================== */

(() => {
  "use strict";

  const App = window.CoffeeSitesPro;

  if (!App) {
    console.error("[CoffeeSitesPro] main.js não foi carregado antes de pacientes.js.");
    return;
  }

  const { qs } = App.utils;

  const FOTOS = Array.from({ length: 10 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `assets/images/pacientes/${n}.jpg`;
  });

  const pacientesModule = {
    render() {
      const container = qs("#pacientes-content");
      if (!container) return;

      container.innerHTML = "";
      FOTOS.forEach((src) => {
        const fig = document.createElement("figure");
        fig.className = "resultado-thumb";
        fig.innerHTML = `<img src="${src}" alt="Paciente atendido pela Dra. Victoria Caroline" loading="lazy" decoding="async">`;
        container.appendChild(fig);
      });
    },

    init() {
      this.render();

      const animationsModule = App.modules.animations;
      if (animationsModule && typeof animationsModule.init === "function") {
        animationsModule.init();
      }
    },
  };

  App.modules.pacientes = pacientesModule;

  if (document.readyState !== "loading") {
    pacientesModule.init();
  }
})();

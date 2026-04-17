import React from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

// Profile photo
import imgProfile from "figma:asset/9f85cd0b96c2ecf7f4416502f45ea8897af10de7.png";

// Banner images (originais)
import imgAncorAcademy from "figma:asset/dfc67643778774387e27aa90029f359e2ef1044d.png";
import imgDiagnostico from "figma:asset/cb0e3be767048f3dbf5f4e0df4f3a59ce1e359af.png";
import imgCurso from "figma:asset/fed098a5ff178043b9ce12cf583d51973559e12d.png";
import imgLivro from "figma:asset/95e9d907cea4e5766322addc7be79b1fefd4ef46.png";
import imgPalestras from "figma:asset/288b366f11d3c38401d574b0159e2820c4a5ddeb.png";
import imgLinkedin from "figma:asset/95711d847fb9841e88462015c7fa79cc3321d028.png";
import imgWhatsApp from "figma:asset/afecbc82c2ee6c8c191850282e0f2aee449cf54f.png";

// NOVA IMAGEM LOCAL (Certifique-se que o arquivo banner-instagram.png está na mesma pasta deste App.tsx)
import imgInstagram from "./banner-instagram.png";

// Utilitário: pega as UTMs da URL atual e as adiciona a uma URL de destino
// Prioridade: params da URL > routeDefaults > defaults fixos da página
function appendUtms(destinationUrl: string, routeDefaults: Record<string, string> = {}): string {
  const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const currentParams = new URLSearchParams(window.location.search);

  // Defaults fixos desta página (menor prioridade)
  const pageDefaults: Record<string, string> = {
    utm_campaign: 'links_mari',
  };

  // Merge: pageDefaults < routeDefaults < params da URL
  const merged = { ...pageDefaults, ...routeDefaults };
  const utmsToPass = new URLSearchParams(merged);

  UTM_KEYS.forEach((key) => {
    const value = currentParams.get(key);
    if (value) utmsToPass.set(key, value); // URL sempre tem prioridade
  });

  // Garante que não quebramos âncoras ou params já existentes
  const url = new URL(destinationUrl);
  utmsToPass.forEach((value, key) => url.searchParams.set(key, value));
  return url.toString();
}

export default function App() {
  // Lógica para detectar a "página" /linkedin na URL sem precisar de bibliotecas extras
  const isLinkedinRoute = window.location.pathname.includes('/linkedin');

  // Defaults de UTM específicos por rota:
  // No /linkedin o LinkedIn não injeta UTMs automaticamente, então forçamos utm_source=linkedin
  const routeUtmDefaults: Record<string, string> = isLinkedinRoute
    ? { utm_source: 'linkedin', utm_medium: 'social' }
    : {};

  const withUtms = (url: string) => appendUtms(url, routeUtmDefaults);

  // Configuração dinâmica do 7º Banner
  const banner7Src = isLinkedinRoute ? imgInstagram : imgLinkedin;
  const banner7Href = isLinkedinRoute ? "https://www.instagram.com/maristelagorayb/" : "https://www.linkedin.com/in/maristelagorayb/";
  const banner7Alt = isLinkedinRoute ? "Instagram Maristela Gorayeb" : "Mari no LinkedIn";

  return (
    <div className="min-h-screen bg-[#F1F1F1] flex flex-col items-center pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl flex flex-col items-center gap-8">

        {/* Profile/Header Section */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-40 h-40 rounded-full overflow-hidden border-[3.594px] border-white shadow-lg">
            <ImageWithFallback
              src={imgProfile}
              alt="Maristela Gorayb"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-[30px] leading-[36px] tracking-[0.3955px] text-[#101828] text-center">Maristela Gorayb</h1>
          <p className="text-[16px] leading-[26px] tracking-[-0.3125px] text-[#4a5565] text-center max-w-[489px]">
            Gestão de Carreira e Pós-Carreira para Executivos | Especialista em Longevidade Profissional | Colunista &amp; Palestrante | Cocriadora do Método ANCOR | Sócia-fundadora da Ancor Consultoria
          </p>
        </div>

        {/* Banner 1: ANCOR Academy */}
        <a
          href={withUtms("https://ancoracademy.ancorcarreira.com.br/")}
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02] hover:shadow-md overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageWithFallback
            src={imgAncorAcademy}
            alt="Ancor Academy"
            className="w-full h-auto rounded-[32px] block"
          />
        </a>

        {/* Banner 2: Diagnóstico ANCOR */}
        <a
          href={withUtms("https://diagnostico.ancorcarreira.com.br/")}
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02] hover:shadow-md overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageWithFallback
            src={imgDiagnostico}
            alt="Diagnóstico ANCOR"
            className="w-full h-auto rounded-[32px] block"
          />
        </a>

        {/* Banner 3: A Primeira Segunda-Feira: O Curso */}
        <a
          href={withUtms("https://ocurso.ancorcarreira.com.br/")}
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02] hover:shadow-md overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageWithFallback
            src={imgCurso}
            alt="Curso A Primeira Segunda-Feira"
            className="w-full h-auto rounded-[32px] block"
          />
        </a>

        {/* Banner 4: Livro Best Seller */}
        <a
          href={withUtms("https://amzn.to/4qS6vEp")}
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02] hover:shadow-md overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageWithFallback
            src={imgLivro}
            alt="Livro A Primeira Segunda-Feira"
            className="w-full h-auto rounded-[32px] block"
          />
        </a>

        {/* Banner 5: Palestras e Programas In Company */}
        <a
          href="mailto:contato@ancorconsultoria.com.br"
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02] hover:shadow-md overflow-hidden"
        >
          <ImageWithFallback
            src={imgPalestras}
            alt="Palestras e Programas In Company"
            className="w-full h-auto rounded-[32px] block"
          />
        </a>

        {/* Banner 7: DINÂMICO (LinkedIn ou Instagram) */}
        <a
          href={withUtms(banner7Href)}
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02] hover:shadow-md overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageWithFallback
            src={banner7Src}
            alt={banner7Alt}
            className="w-full h-auto rounded-[32px] block"
          />
        </a>

        {/* Banner 8: Contato via WhatsApp */}
        <a
          href={withUtms("http://wa.me/5511999007624")}
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02] hover:shadow-md overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageWithFallback
            src={imgWhatsApp}
            alt="Contato via WhatsApp"
            className="w-full h-auto rounded-[32px] block"
          />
        </a>

      </div>
    </div>
  );
}

import React from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

// Profile photo
import imgProfile from "figma:asset/9f85cd0b96c2ecf7f4416502f45ea8897af10de7.png";

// Banner images (in order)
import imgAncorAcademy from "figma:asset/dfc67643778774387e27aa90029f359e2ef1044d.png";
import imgDiagnostico from "figma:asset/4fc3ade916633ca6159863e433eae918e19234f3.png";
import imgCurso from "figma:asset/fed098a5ff178043b9ce12cf583d51973559e12d.png";
import imgLivro from "figma:asset/95e9d907cea4e5766322addc7be79b1fefd4ef46.png";
import imgPalestras from "figma:asset/ccb0708d628996d93173fed2a6d9175eec0b4f66.png";
import imgDoTopo from "figma:asset/e181caf17f12511fc31c15845ea4d42a38b6dea5.png";
import imgLinkedin from "figma:asset/95711d847fb9841e88462015c7fa79cc3321d028.png";
import imgWhatsApp from "figma:asset/e4bc765a63c36a8e07f7d70d1c5b9c48bca29ec4.png";

export default function App() {
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
          href="https://ancoracademy.ancorcarreira.com.br/"
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02]"
          onClick={(e) => e.preventDefault()}
        >
          <ImageWithFallback
            src={imgAncorAcademy}
            alt="Ancor Academy"
            className="w-full h-auto rounded-[32px] block"
          />
        </a>

        {/* Banner 2: Diagnóstico ANCOR */}
        <a
          href="https://diagnostico.ancorcarreira.com.br/"
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02]"
          onClick={(e) => e.preventDefault()}
        >
          <ImageWithFallback
            src={imgDiagnostico}
            alt="Diagnóstico ANCOR"
            className="w-full h-auto rounded-[32px] block"
          />
        </a>

        {/* Banner 3: A Primeira Segunda-Feira: O Curso */}
        <a
          href="https://ocurso.ancorcarreira.com.br/"
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02]"
          onClick={(e) => e.preventDefault()}
        >
          <ImageWithFallback
            src={imgCurso}
            alt="Curso A Primeira Segunda-Feira"
            className="w-full h-auto rounded-[32px] block"
          />
        </a>

        {/* Banner 4: Livro Best Seller */}
        <a
          href="https://aprimeirasegundafeira.com.br/"
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02]"
          onClick={(e) => e.preventDefault()}
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
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02]"
          onClick={(e) => e.preventDefault()}
        >
          <ImageWithFallback
            src={imgPalestras}
            alt="Palestras e Programas In Company"
            className="w-full h-auto rounded-[32px] block"
          />
        </a>

        {/* Banner 6: Do Topo ao Próximo Ciclo */}
        <a
          href="https://workshop.ancorcarreira.com.br/"
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02]"
          onClick={(e) => e.preventDefault()}
        >
          <ImageWithFallback
            src={imgDoTopo}
            alt="Do Topo ao Próximo Ciclo"
            className="w-full h-auto rounded-[32px] block"
          />
        </a>

        {/* Banner 7: Mari no LinkedIn */}
        <a
          href="https://www.linkedin.com/in/maristelagorayb/"
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02]"
          onClick={(e) => e.preventDefault()}
        >
          <ImageWithFallback
            src={imgLinkedin}
            alt="Mari no LinkedIn"
            className="w-full h-auto rounded-[32px] block"
          />
        </a>

        {/* Banner 8: Contato via WhatsApp */}
        <a
          href="wa.me/5511999007624"
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02]"
          onClick={(e) => e.preventDefault()}
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

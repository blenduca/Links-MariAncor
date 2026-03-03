import svgPaths from "../../imports/svg-hszu27lkbw";
import imgReservadaParaImprensa11 from "figma:asset/db128ca390a0dacabc8129498fe15dc63f3a86e6.png";
import imgImage6 from "figma:asset/7f0f3be8769969d3234da8827c0672cb6a28791d.png";

function Capa() {
  return (
    <div className="absolute bg-[#fefefe] h-[425px] left-0 overflow-clip top-0 w-[1157px]" data-name="Capa 2">
      <div className="absolute h-[485.563px] left-[739.19px] rounded-bl-[230.297px] rounded-tl-[230.297px] top-[-30.28px] w-[460.594px]" data-name="Reservada para imprensa (1) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[230.297px] rounded-tl-[230.297px]">
          <img alt="" className="absolute h-full left-[-32.51%] max-w-none top-0 w-[151.99%]" src={imgReservadaParaImprensa11} />
        </div>
      </div>
      <div className="absolute flex h-[391px] items-center justify-center left-[-0.25px] top-[323.8px] w-[1157px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[391px] relative w-[1157px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1157 391">
              <path d={svgPaths.pfd29180} fill="var(--fill-0, #00A7B4)" id="Vector 1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[391px] items-center justify-center left-[-0.25px] top-[289.8px] w-[1157px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[391px] relative w-[1157px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1157 391">
              <path d={svgPaths.pfd29180} fill="var(--fill-0, #00A7B4)" fillOpacity="0.76" id="Vector 2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BannerAncor() {
  return (
    <div className="bg-white overflow-clip relative rounded-[32px] size-full" data-name="Ancor Academy">
      <Capa />
      <div className="-translate-y-1/2 absolute h-[142.942px] left-[126px] top-[calc(50%-83.56px)] w-[453px]" data-name="image 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[110.66%] left-[-30.51%] max-w-none top-0 w-[130.51%]" src={imgImage6} />
        </div>
      </div>
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[33.198px] left-[126px] not-italic text-[#05a3af] text-[26.558px] top-[226.97px] w-[439px] whitespace-pre-wrap">Transforme sua carreira em uma nova jornada com propósito</p>
    </div>
  );
}

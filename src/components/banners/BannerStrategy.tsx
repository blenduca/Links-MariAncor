import imgImage8 from "figma:asset/2ccfbd7e402dd87cd00aec3becb254625b5a28d8.png";

export default function BannerStrategy() {
  return (
    <div className="bg-[#09193a] overflow-clip relative rounded-[32px] size-full" data-name="Sessao Estrategica">
      <div className="absolute h-[550px] left-[573px] top-0 w-[572px]" data-name="image 8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-100.17%] max-w-none top-0 w-[200.22%]" src={imgImage8} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-r from-[#09193a] h-[425px] left-[573px] to-[97.274%] to-[rgba(9,25,58,0)] top-0 w-[572px]" />
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] leading-[0] left-[84px] not-italic text-[0px] text-white top-[calc(50%-41.44px)] w-[489px] whitespace-pre-wrap">
        <span className="font-['Montserrat:Medium',sans-serif] leading-[62.044px] text-[28.63px] uppercase">Agende a sua</span>
        <span className="leading-[62.044px] text-[28.63px] uppercase">
          <br aria-hidden="true" />
        </span>
        <span className="leading-[62.044px] text-[49.635px]">Sessão Estratégica</span>
      </p>
    </div>
  );
}

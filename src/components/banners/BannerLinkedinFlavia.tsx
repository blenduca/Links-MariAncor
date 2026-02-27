import imgImage8 from "figma:asset/a8075f86144f3e587e6dc6882b1769ff69eb3d95.png";

export default function BannerLinkedinFlavia() {
  return (
    <div className="bg-[#09193a] overflow-clip relative rounded-[32px] size-full" data-name="Sessao Estrategica">
      <div className="absolute h-[550px] left-[484px] top-[-51px] w-[661px]" data-name="image 8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[0.01%] max-w-none top-0 w-[100.2%]" src={imgImage8} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-r from-[#09193a] h-[425px] left-[484px] to-[97.274%] to-[rgba(9,25,58,0)] top-0 w-[661px]" />
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] leading-[0] left-[84px] not-italic text-[0px] text-white top-[calc(50%-46.57px)] w-[489px] whitespace-pre-wrap">
        <span className="font-['Montserrat:Medium',sans-serif] leading-[62.044px] text-[28.63px] uppercase">siga no linkedin</span>
        <span className="leading-[62.044px] text-[28.63px] uppercase">
          <br aria-hidden="true" />
        </span>
        <span className="leading-[62.044px] text-[49.635px]">Flavia</span>
      </p>
    </div>
  );
}

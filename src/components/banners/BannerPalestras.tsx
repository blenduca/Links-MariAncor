import imgImage9 from "figma:asset/3cec50ae0c3b09edb82df8ef98ea478558aebff6.png";

export default function BannerPalestras() {
  return (
    <div className="bg-[#09193a] overflow-clip relative rounded-[32px] size-full" data-name="Livro">
      <div className="absolute h-[763px] left-[-1px] top-[-132px] w-[1146px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-15 pointer-events-none size-full" src={imgImage9} />
      </div>
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] leading-[0] left-[84px] not-italic text-[0px] text-white top-[calc(50%-41.44px)] w-[489px] whitespace-pre-wrap">
        <span className="font-['Montserrat:Medium',sans-serif] leading-[62.044px] text-[28.63px] uppercase">Contato para</span>
        <span className="leading-[62.044px] text-[28.63px] uppercase">
          <br aria-hidden="true" />
        </span>
        <span className="leading-[62.044px] text-[49.635px]">Palestras</span>
      </p>
    </div>
  );
}

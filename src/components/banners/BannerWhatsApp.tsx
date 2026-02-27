import imgImage1 from "figma:asset/b6f7842f1da578e2e1f35a69b0b6fe759967087c.png";

export default function BannerWhatsApp() {
  return (
    <div className="bg-[#09193a] overflow-clip relative rounded-[32px] size-full" data-name="Livro">
      <div className="absolute left-[794px] size-[276px] top-[75px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] leading-[0] left-[84px] not-italic text-[0px] text-white top-[calc(50%-41.44px)] w-[489px] whitespace-pre-wrap">
        <span className="font-['Montserrat:Medium',sans-serif] leading-[62.044px] text-[28.63px] uppercase">Contato via</span>
        <span className="leading-[62.044px] text-[28.63px] uppercase">
          <br aria-hidden="true" />
        </span>
        <span className="leading-[62.044px] text-[49.635px]">WhatsApp</span>
      </p>
    </div>
  );
}

import svgPaths from "./svg-k290bvwl29";
import img144074586031Cc9Cb5Cce430D931CA85Cb419173F21 from "figma:asset/bdf4ebb311c95d13da0d4922122b447847f1f87e.png";

function Text() {
  return (
    <div className="absolute content-stretch flex h-[21.633px] items-start left-[17.9px] top-[11.19px]" data-name="Text">
      <p className="font-['Montserrat:Bold',sans-serif] leading-[26.855px] not-italic relative shrink-0 text-[#00a7b4] text-[17.903px]">Livro Best Seller</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(121,233,255,0.1)] h-[45px] relative rounded-[25030778px] shrink-0 w-[188px]" data-name="Container">
      <Text />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col h-[121.924px] items-start left-[59.77px] top-[278.04px]" data-name="Heading 1">
      <Container />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[51.33px] not-italic relative shrink-0 text-[#00a7b4] text-[41.064px] uppercase w-[621.773px] whitespace-pre-wrap">A Primeira Segunda-Feira</p>
      <p className="font-['Inter:Extra_Light',sans-serif] font-extralight leading-[46.215px] not-italic relative shrink-0 text-[#372b2a] text-[36.972px] uppercase w-[686.734px] whitespace-pre-wrap">Após sua carreira executiva</p>
    </div>
  );
}

function Capa1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fefefe] h-[629.121px] left-[calc(50%+0.5px)] overflow-clip top-0 w-[1145px]" data-name="Capa 4">
      <div className="absolute flex h-[578.791px] items-center justify-center left-[-156.49px] top-[478.92px] w-[1301.494px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[578.791px] relative w-[1301.494px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1301.49 578.791">
              <path d={svgPaths.p2a598600} fill="var(--fill-0, #00A7B4)" id="Vector 1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[578.791px] items-center justify-center left-[-156.49px] top-[429.38px] w-[1301.494px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[578.791px] relative w-[1301.494px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1301.49 578.791">
              <path d={svgPaths.p2a598600} fill="var(--fill-0, #00A7B4)" fillOpacity="0.76" id="Vector 2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[483.012px] items-center justify-center left-[717.15px] top-[98.99px] w-[409.697px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "4099.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[12.32deg]">
          <div className="h-[423px] relative w-[327px]" data-name="144074586_031cc9cb-5cce-430d-931c-a85cb419173f2 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[152.72%] left-[-46.79%] max-w-none top-[-26.71%] w-[197.55%]" src={img144074586031Cc9Cb5Cce430D931CA85Cb419173F21} />
            </div>
          </div>
        </div>
      </div>
      <Heading />
    </div>
  );
}

function Capa() {
  return (
    <div className="absolute bg-[#fefefe] h-[629.121px] left-0 overflow-clip top-[-126px] w-[1145px]" data-name="Capa 1">
      <Capa1 />
    </div>
  );
}

export default function Livro() {
  return (
    <div className="bg-white overflow-clip relative rounded-[32px] size-full" data-name="Livro">
      <Capa />
    </div>
  );
}
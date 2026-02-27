import imgPrancheta21 from "figma:asset/a8693e034eb52ca286db5e70e352d9d84180175c.png";
import imgImage from "figma:asset/82ac34ca7a31eadde6b8f57e5652863c11b325f9.png";
import imgHeroHeaderSection from "figma:asset/d62981bd192730e6760bc3f3bb7a77c5d2ab8995.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="h-[283.465px] relative shrink-0 w-[460.223px]" data-name="Prancheta 2 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[155.17%] left-[-35.4%] max-w-none top-[-27.44%] w-[169.91%]" src={imgPrancheta21} />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-col items-start pr-[27.575px] relative w-full">
        <Container1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-start max-w-[551.5px] px-[27.575px] relative shrink-0 w-[551.5px]" data-name="Container">
      <Content />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px py-[76.333px] relative self-stretch" data-name="Section">
      <Container />
    </div>
  );
}

function Container2() {
  return <div className="bg-[rgba(2,160,175,0.2)] h-[638.154px] rounded-[19.083px] w-[490.884px]" data-name="Container" />;
}

function Section2() {
  return (
    <div className="flex-[1_0_0] h-[572.5px] min-h-px min-w-px relative" data-name="Section">
      <div className="absolute flex h-[685.589px] items-center justify-center left-[-48.5px] top-[-16.7px] w-[554.375px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[5.95deg]">
          <Container2 />
        </div>
      </div>
      <div className="absolute inset-[0.4px_0_-0.4px_-31.81px]" data-name="Image">
        <img alt="" className="block max-w-none size-full" height="572.5" src={imgImage} width="604.306" />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full z-[2]" data-name="Section">
      <Section1 />
      <Section2 />
    </div>
  );
}

function BackgroundPattern() {
  return <div className="-translate-x-1/2 absolute h-[1145px] left-1/2 top-0 w-[1526.667px] z-[1]" data-name="Background pattern" />;
}

function HeroHeaderSection() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-center left-0 overflow-clip top-[-73px] w-[1145px]" data-name="Hero header section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#02a0af] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeroHeaderSection} />
      </div>
      <Section />
      <BackgroundPattern />
    </div>
  );
}

export default function APrimeiraSegundaFeiraOCurso() {
  return (
    <div className="bg-white overflow-clip relative rounded-[32px] size-full" data-name="a primeira segunda-feira o curso">
      <HeroHeaderSection />
    </div>
  );
}
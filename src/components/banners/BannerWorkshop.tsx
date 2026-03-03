import imgImage from "figma:asset/1ea10e65949a2dbd41eefc37c01d41df9d6fa004.png";
import imgHeroHeaderSection from "figma:asset/a0ac460f31248a2bf833f1251358ea6c06e1c86d.png";

function Text() {
  return (
    <div className="absolute content-stretch flex h-[18.736px] items-start left-[15.78px] top-[10.35px] w-[90.722px]" data-name="Text">
      <p className="font-['Montserrat:Bold',sans-serif] leading-[23.667px] not-italic relative shrink-0 text-[15.778px] text-white">Workshop</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[39.444px] relative rounded-[22058910px] shrink-0 w-[118.333px]" data-name="Container">
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[73.958px] relative shrink-0 w-[495.028px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[73.958px] left-0 not-italic text-[59.167px] text-white top-[-0.66px] w-[546.306px] whitespace-pre-wrap">Do Topo ao</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <Text1 />
      <p className="font-['Inter:Extra_Light',sans-serif] font-extralight leading-[73.958px] not-italic relative shrink-0 text-[59.167px] text-white">Próximo Ciclo</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[63.111px] relative shrink-0 w-[583.778px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.929px] left-0 not-italic text-[22.446px] text-white top-[1.16px] w-[535.91px] whitespace-pre-wrap">Uma conversa real sobre planejamento, desafios e caminhos para sua próxima fase profissional.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Container">
      <Container2 />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-col items-start pr-[31.556px] relative w-full">
        <Container1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] max-w-[631.1111450195312px] min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex items-start max-w-[inherit] px-[31.556px] relative w-full">
        <Content />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[19.847px] items-start left-0 top-[1.42px] w-[226.865px]" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[23.667px] not-italic relative shrink-0 text-[15.778px] text-white">Imersão estratégica de 1h30</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[23.667px] left-[110.44px] overflow-clip top-[571.94px] w-[495.028px]" data-name="Paragraph">
      <Text2 />
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[23.667px] left-[233.71px] not-italic text-[15.778px] text-white top-[calc(50%-11.83px)]">• Metodologia Ancor Consultoria</p>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[63.111px] h-[537px] items-center justify-end min-h-px min-w-px py-[94.667px] relative" data-name="Section">
      <Container />
      <Paragraph1 />
    </div>
  );
}

function Container3() {
  return <div className="bg-[rgba(2,160,175,0.2)] h-[791.422px] rounded-[23.667px] w-[608.782px]" data-name="Container" />;
}

function Section2() {
  return (
    <div className="flex-[1_0_0] h-[710px] min-h-px min-w-px relative" data-name="Section">
      <div className="absolute flex h-[850.251px] items-center justify-center left-[-60.15px] top-[-20.71px] w-[687.521px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[5.95deg]">
          <Container3 />
        </div>
      </div>
      <div className="absolute inset-[25px_225.29px_191px_-39.65px]" data-name="Image">
        <img alt="" className="block max-w-none size-full" height="494" src={imgImage} width="514" />
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
  return <div className="-translate-x-1/2 absolute h-[1420px] left-[calc(50%+0.49px)] top-0 w-[1893.333px] z-[1]" data-name="Background pattern" />;
}

function HeroHeaderSection() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-center left-0 overflow-clip top-[-62px] w-[1399.292px]" data-name="Hero header section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#006670] inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-52 size-full" src={imgHeroHeaderSection} />
      </div>
      <Section />
      <BackgroundPattern />
    </div>
  );
}

export default function BannerWorkshop() {
  return (
    <div className="bg-white overflow-clip relative rounded-[32px] size-full" data-name="a primeira segunda-feira o curso">
      <HeroHeaderSection />
    </div>
  );
}

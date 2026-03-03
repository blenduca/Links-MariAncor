import React from 'react';
import imgLogoPng from "figma:asset/7c0bf1d6903f0c06b3de6316a41b1a867f63343e.png";
import imgMockup31Png from "figma:asset/d610713907fd50838ae93b92c0d640a160b09ce3.png";
import imgBackground from "figma:asset/0d81b16ed300767eab1dda24a48c3a913d966817.png";

function LogoPng() {
  return (
    <div className="h-[167.77px] max-w-[266.6600036621094px] relative shrink-0 w-[251.66px]" data-name="logo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[-2.98%] max-w-none size-[105.96%] top-[-2.98%]" src={imgLogoPng} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pr-[15px] right-3/4 top-[-53px]" data-name="Container">
      <LogoPng />
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[11.2px] w-full" />
    </div>
  );
}

function Item() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[58.07%] top-0" data-name="Item">
      <Component />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[11.2px] w-full" />
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[58.07%] top-[32.37px]" data-name="Item">
      <Component1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[11.2px] w-full" />
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[58.07%] top-[64.75px]" data-name="Item">
      <Component2 />
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[11.2px] w-full" />
    </div>
  );
}

function Item3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[51.8%] right-[6.27%] top-0" data-name="Item">
      <Component3 />
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Component 3">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[11.2px] w-full" />
    </div>
  );
}

function Item4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[51.8%] right-[6.27%] top-[32.37px]" data-name="Item">
      <Component4 />
    </div>
  );
}

function NavigationList() {
  return (
    <div className="absolute h-[97.13px] left-[444.42px] right-[177.8px] top-0" data-name="Navigation → List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[114.77px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <NavigationList />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1066.66px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[106.67px] relative w-full">
        <Container2 />
      </div>
    </div>
  );
}

function Mockup31Png() {
  return (
    <div className="absolute h-[336px] right-[-125px] top-[-350px] w-[458.69px]" data-name="mockup3-1.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMockup31Png} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Mockup31Png />
    </div>
  );
}

function Background() {
  return (
    <div className="relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {/* Changed background color from #00a3b0 to #f9fafb (gray-50) to match the page background */}
        <div className="absolute bg-[#f9fafb] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[39.51%] left-0 max-w-none top-0 w-full" src={imgBackground} />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pb-[50px] pt-[250px] px-[320px] relative w-full">
        <Container />
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Footer">
      <Background />
    </div>
  );
}

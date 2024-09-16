import React, { useRef } from "react";
import Hero from "../../components/landing/Hero";
import Introduction from "../../components/landing/Intoduction";
import WhyWebsite from "../../components/landing/WhyWebsite";

const Landing = () => {
  const introductionRef = useRef();
  const whyWebsiteRef = useRef();
  return (
    <div>
      <Hero introductionRef={introductionRef} whyWebsiteRef={whyWebsiteRef} />
      <Introduction introductionRef={introductionRef} />
      <WhyWebsite whyWebsiteRef={whyWebsiteRef} />
    </div>
  );
};

export default Landing;

import React, { useRef } from "react";
import Hero from "../../components/landing/Hero";
import Introduction from "../../components/landing/Intoduction";
import WhyWebsite from "../../components/landing/WhyWebsite";
import ChatBotWrapper from "../../components/common/ChatBotWrapper";

const Landing = () => {
  const introductionRef = useRef();
  const whyWebsiteRef = useRef();
  return (
    <div>
      <Hero introductionRef={introductionRef} whyWebsiteRef={whyWebsiteRef} />
      <Introduction introductionRef={introductionRef} />
      <WhyWebsite whyWebsiteRef={whyWebsiteRef} />
      <div className="fixed bottom-10 right-20 text-white">
        <ChatBotWrapper />
      </div>
    </div>
  );
};

export default Landing;

import React from "react";

const WhyWebsite = ({ whyWebsiteRef }) => {
  return (
    <div
      ref={whyWebsiteRef}
      className="min-h-dvh bg-black text-white text-center flex flex-col items-center justify-evenly py-10"
    >
      <h3 className="text-5xl font-PG">Why this website</h3>
      <div className="w-full pt-20 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-10 md:gap-0">
        <div className="md:border-e-2 md:border-e-yellow-900 text-center px-10">
          <h2 className="text-4xl font-PG mb-7">Assure solution</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            consequuntur alias sit laboriosam necessitatibus sapiente aliquam
            possimus expedita, sint quaerat nihil sed. Vero doloribus
            consectetur voluptas a, similique minima adipisci! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Earum ab omnis id esse
            eveniet reiciendis, doloremque rem placeat. Ducimus distinctio ullam
            et. Nisi ipsum aliquid consectetur at deserunt eius deleniti? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sequi, reiciendis
            incidunt. Cupiditate omnis possimus numquam quaerat nisi, error eius
            non quia, nostrum ad voluptatum earum optio animi suscipit expedita
            molestiae.
          </p>
        </div>
        <div className="text-center px-10">
          <h2 className="text-4xl font-PG mb-7">Analyse Problems</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            consequuntur alias sit laboriosam necessitatibus sapiente aliquam
            possimus expedita, sint quaerat nihil sed. Vero doloribus
            consectetur voluptas a, similique minima adipisci! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Earum ab omnis id esse
            eveniet reiciendis, doloremque rem placeat. Ducimus distinctio ullam
            et. Nisi ipsum aliquid consectetur at deserunt eius deleniti? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sequi, reiciendis
            incidunt. Cupiditate omnis possimus numquam quaerat nisi, error eius
            non quia, nostrum ad voluptatum earum optio animi suscipit expedita
            molestiae.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <h6>
          This website is only to find a solution to the people who suffer from
          problems, No other benefits is undergoing
        </h6>
        <p className="ms-auto me-4 font-PG tracking-widest text-2xl text-yellow-900">
          -Hero
        </p>
      </div>
    </div>
  );
};

export default WhyWebsite;

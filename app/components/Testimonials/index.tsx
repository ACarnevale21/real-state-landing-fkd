import TestimonialCard from "./TestimonialCard";

const Testimonials: React.FC = () => {
  return (
    <section
      className="text-black/90 bg-white body-font pb-16 h-auto"
      id="testimonials"
    >
      <div className="w-3/4 px-5 pt-24 mx-auto">
        <h1 className="text-3xl font-bold title-font text-black/90 mb-12 text-center">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          <TestimonialCard
            imageSrc="https://dummyimage.com/106x106"
            name="Julie G."
            role="Jacksonville, FL"
            content="Incredibly grateful for Bright Future! In a desperate moment where my home was on the brink of foreclosure (and I was about to lose everything), they sprang into action and managed to halt the auction by purchasing my home. Their efficiency in contacting my mortgage company and solving the situation left me speechless. Thanks to their prompt intervention, the mortgage is no longer a worry, and they even provided me with cash."
          />
          <TestimonialCard
            imageSrc="https://dummyimage.com/107x107"
            name="Alper Kamu"
            role="DESIGNER"
            content="Thanks to them, I can actually see a bright future for me and my family. From the first contact to the end of the process, their team, led by Dayanne, showcased an exceptional level of professionalism and supportive communication. Their meticulous and friendly approach allowed me to regain peace of mind and keep my sanity during such a challenging time. I'm super thankful."
          />
          {/* Agrega más testimonios aquí */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

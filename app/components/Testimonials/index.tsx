import TestimonialCard from "./TestimonialCard";

const Testimonials: React.FC = () => {
  return (
    <section className="text-black/90 bg-white/90 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-bold title-font text-black/90 mb-12 text-center">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          <TestimonialCard
            imageSrc="https://dummyimage.com/106x106"
            name="Holden Caulfield"
            role="UI DEVELOPER"
            content="Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland."
          />
          <TestimonialCard
            imageSrc="https://dummyimage.com/107x107"
            name="Alper Kamu"
            role="DESIGNER"
            content="Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland."
          />
          {/* Agrega más testimonios aquí */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

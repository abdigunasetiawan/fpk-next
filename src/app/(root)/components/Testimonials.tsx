import TestimonialsSwiper from "./TestimonialsSwiper";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container mx-auto mt-9 px-4 md:px-8 xl:px-16">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div className="text-wrapper text-center lg:mx-auto">
            <h2 className="testimonial-heading text-2xl font-semibold">
              Apa Kata Orang-Orang <br />
              Tentang Forum Programmer Kaputama
            </h2>
            <p className="mx-auto mt-7 max-w-md text-[#000000]/70 lg:mx-0 xl:max-w-xl">
              Dengar langsung dari mereka yang sudah bergabung dengan Forum
              Programmer Kaputama. Di sini, berbagai testimonial akan membagikan
              pengalaman mereka dan bagaimana program kami telah membuat
              perbedaan dalam karir dan keterampilan mereka.
            </p>
          </div>
        </div>

        <TestimonialsSwiper />
      </div>
    </section>
  );
};

export default Testimonials;

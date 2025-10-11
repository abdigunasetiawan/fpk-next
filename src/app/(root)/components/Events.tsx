import EventsWrapper from "./EventsSwiperWrapper";
import SectionsButtonNavigator from "./SectionsButtonNavigator";

const Events = () => {
  return (
    <section id="events">
      <div className="container mx-auto mt-9 px-4 md:px-8 xl:px-16">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div className="text-center lg:text-left">
            <h2 className="events-heading text-2xl font-semibold">
              Dokumentasi Kegiatan <br />
              Forum Programmer Kaputama
            </h2>
            <p className="mx-auto mt-7 max-w-md text-[#000000]/70 lg:mx-0 xl:max-w-xl">
              Temukan semua momen seru dan penting dari kegiatan Forum
              Programmer Kaputama di sini. Dari acara workshop hingga seminar,
              kami dokumentasikan setiap langkah perjalanan kami untuk memberi
              kamu pandangan lengkap tentang pengalaman dan aktivitas kami.
            </p>
          </div>

          <SectionsButtonNavigator href="/events" isMobile={false} />
        </div>

        <EventsWrapper />

        <SectionsButtonNavigator href="/events" isMobile={true} />
      </div>
    </section>
  );
};

export default Events;

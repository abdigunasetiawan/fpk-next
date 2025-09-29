// Kita gunakan ulang komponen EventCard dari folder home
import EventCard from "../../pages/home/EventCard";

const EventList = ({ events }) => {
  return (
    // Menggunakan grid untuk layout yang lebih rapi dan responsif
    <div className="card-event-container mt-9 grid content-start gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
      {events.map((event, index) => (
        // Berikan key yang unik, menggunakan id atau kombinasi
        <EventCard event={event} key={event.id || index} />
      ))}
    </div>
  );
};

export default EventList;

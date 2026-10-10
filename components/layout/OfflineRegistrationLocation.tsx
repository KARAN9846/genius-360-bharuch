import { ArrowUpRight, MapPin } from "lucide-react";

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=21.7159346,73.0200974";

const mapEmbedUrl =
  "https://maps.google.com/maps?q=21.7159346,73.0200974&z=16&output=embed";

export default function OfflineRegistrationLocation() {
  return (
    <section
      aria-labelledby="offline-registration-location-title"
      className="bg-white px-5 py-10 sm:px-6 sm:py-12 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1769E0]">
            Offline Registration
          </p>

          <h2
            id="offline-registration-location-title"
            className="mt-2 text-2xl font-bold tracking-tight text-[#101828] sm:text-3xl"
          >
            Visit Our Registration Centre
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#667085]">
            Complete your scholarship exam registration in person at Mahavir
            Classes, Bharuch.
          </p>

          <div className="mt-5 flex items-start gap-3">
            <MapPin
              aria-hidden="true"
              size={19}
              className="mt-0.5 shrink-0 text-[#1769E0]"
              strokeWidth={2}
            />

            <address className="min-w-0 not-italic text-sm leading-6 text-[#475467]">
              <span className="block font-semibold text-[#101828]">
                Mahavir Classes
              </span>
              <span>
                2nd Floor, Harihar Complex, 234–236, Pramukh Swami Maharaj
                Marg, near Radhakrishna Bus Stand, Aalekh Society, Bholav,
                Bharuch, Gujarat 392012.
              </span>
            </address>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#1769E0] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#174EA6] focus:outline-none focus:ring-2 focus:ring-[#1769E0]/40 focus:ring-offset-2"
          >
            Get Directions
            <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.2} />
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#E4E7EC] bg-[#F8FAFC]">
          <iframe
            title="Mahavir Classes location map"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="block h-[190px] w-full sm:h-[210px] lg:h-[240px]"
          />
        </div>
      </div>
    </section>
  );
}

import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MLCI-CasiG | Upcoming Events",
  description: "Stay updated with the upcoming events at Miracle Life Church International - Casiguran Aurora.",
};

export default function EventsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1 className="text-2xl font-bold">Upcoming Events</h1>
                <p className="text-body-color dark:text-body-color-dark text-base mt-4">
                  Join us for our upcoming events at Miracle Life Church International. Here you will find opportunities for worship, fellowship, and community engagement.
                </p>
                
                <h2 className="text-xl font-semibold mt-4">Event List:</h2>
                <ul className="list-disc pl-6 mt-2 text-body-color dark:text-body-color-dark">
                  <li>Sunday Service - Every Sunday at 9:00 AM</li>
                  <li>Midweek Prayer - Every Wednesday at 7:00 PM</li>
                  <li>Youth Fellowship - Every Friday at 6:00 PM</li>
                  <li>Community Outreach - First Saturday of every month</li>
                  <li>Special Church Events - Check our website for updates</li>
                </ul>

                <p className="text-body-color dark:text-body-color-dark text-base mt-4">
                  We invite everyone to participate and grow in faith together as a community. For more information on specific events, visit our official website:{" "}
                  <b>
                    <a href="https://mlci-casiguran.com/docs">
                      mlci-casiguran.com/docs
                    </a>
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

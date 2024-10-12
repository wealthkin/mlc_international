import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MLCI-CasiG | Prayer Requests",
  description: "Submit your prayer requests and join us in prayer at Miracle Life Church International - Casiguran Aurora.",
};

export default function PrayerPage() {
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
                <h1 className="text-2xl font-bold">Prayer Requests</h1>
                <p className="text-body-color dark:text-body-color-dark text-base mt-4">
                  At Miracle Life Church International, we believe in the power of prayer and its ability to bring hope, healing, and strength. We encourage you to submit your prayer requests so that our church community can stand with you in faith.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base mt-4">
                  Whether you are facing challenges or celebrating victories, we want to support you through prayer. Our prayer team is dedicated to lifting up the needs of our members and community before God.
                </p>
                <h2 className="text-xl font-semibold mt-4">How to Submit Your Prayer Request:</h2>
                <ul className="list-disc pl-6 mt-2 text-body-color dark:text-body-color-dark">
                  <li>Fill out the prayer request form on our website.</li>
                  <li>Contact us directly through our church office.</li>
                  <li>Join us during our prayer meetings to share your request.</li>
                </ul>

                <p className="text-body-color dark:text-body-color-dark text-base mt-4">
                  For more information, visit our official website:{" "}
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

import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MLCI-CasiG | Church Ministries",
  description: "Discover the various ministries at Miracle Life Church International - Casiguran Aurora.",
};

export default function MinistriesPage() {
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
                <h1 className="text-2xl font-bold">Church Ministries</h1>
                <p className="text-body-color dark:text-body-color-dark text-base mt-4">
                  At Miracle Life Church International, we have a variety of ministries dedicated to serving our community and meeting the spiritual needs of our members.
                </p>
                
                <h2 className="text-xl font-semibold mt-4">Our Ministries:</h2>
                <ul className="list-disc pl-6 mt-2 text-body-color dark:text-body-color-dark">
                  <li><strong>Children’s Ministry:</strong> Focused on teaching children about God’s love through engaging activities and lessons.</li>
                  <li><strong>Youth Ministry:</strong> A space for teenagers to connect, grow in their faith, and participate in fun events and discussions.</li>
                  <li><strong>Men’s Ministry:</strong> Aimed at fostering fellowship among men through events, Bible studies, and community service.</li>
                  <li><strong>Women’s Ministry:</strong> Supporting women in their spiritual journey through fellowship, mentorship, and outreach programs.</li>
                  <li><strong>Music Ministry:</strong> Encouraging worship through music and providing opportunities for individuals to share their talents.</li>
                  <li><strong>Outreach Ministry:</strong> Engaging with the community through service projects and events to share the love of Christ.</li>
                </ul>

                <p className="text-body-color dark:text-body-color-dark text-base mt-4">
                  We invite everyone to get involved and grow in their faith through these ministries. For more information, visit our official website:{" "}
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

import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MLCI-CasiG | Mission & Vision",
  description: "Learn about the mission and vision of Miracle Life Church International - Casiguran Aurora.",
};

export default function MissionVisionPage() {
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
                <h1 className="text-2xl font-bold">Our Mission & Vision</h1>
                <p className="text-body-color dark:text-body-color-dark text-base mt-4">
                  At Miracle Life Church International, our mission is to lead people to a transformative relationship with Jesus Christ through the power of the Holy Spirit. We aim to share the message of love, hope, and salvation to our community and beyond.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base mt-4">
                  Our vision is to create a vibrant community of believers who are passionate about worship, discipleship, and outreach. We strive to be a church that reflects the love of Christ and impacts lives through service, fellowship, and spiritual growth.
                </p>
                <h2 className="text-xl font-semibold mt-4">Core Values:</h2>
                <ul className="list-disc pl-6 mt-2 text-body-color dark:text-body-color-dark">
                  <li><strong>Faith:</strong> We believe in the power of faith in Christ as the foundation of our lives.</li>
                  <li><strong>Community:</strong> We foster a supportive and loving environment for all.</li>
                  <li><strong>Service:</strong> We are committed to serving others, following the example of Jesus.</li>
                  <li><strong>Discipleship:</strong> We prioritize spiritual growth through teaching and mentorship.</li>
                  <li><strong>Outreach:</strong> We are dedicated to sharing the Gospel and impacting our community.</li>
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

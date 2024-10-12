import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MLCI-CasiG | Church Documentation",
  description: "Miracle Life Church International - Casiguran Aurora - Documentations for members and community",
  // other metadata
};

export default function DocsPage() {
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
                <h1>Welcome to MLCI-CasiG Documentation</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  This documentation serves as a guide for our church community, providing resources, teachings, and support for our members and newcomers alike.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Here, you'll find helpful information about our church's mission, history, and activities. We encourage you to explore and grow in faith with us.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
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

import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MLCI-CasiG | Church History",
  description:
    "Learn about the history of Miracle Life Church International - Casiguran Aurora.",
};

export default function HistoryPage() {
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
                <h1 className="text-2xl font-bold">Church History</h1>
                <p className="text-body-color dark:text-body-color-dark mt-4 text-base">
                  Miracle Life Church International (MLCI) has a rich history
                  that reflects its commitment to spreading the message of love
                  and faith.
                </p>
                <h2 className="mt-4 text-xl font-semibold">
                  SEC Registration:
                </h2>
                <p className="text-body-color dark:text-body-color-dark mt-2 text-base">
                  <strong>Registration Number:</strong> CN201966866
                </p>
                <p className="text-body-color dark:text-body-color-dark mt-2 text-base">
                  <strong>Date Registered:</strong> Monday, May 20, 2019
                </p>
                <h2 className="mt-4 text-xl font-semibold">History</h2>
                <p className="text-body-color dark:text-body-color-dark mt-2 text-base">
                  Formerly named Miracle Revivals, Inc., the church was
                  established in 1972 and was later renamed to Don Stewart
                  Ministries Miracle Revivals, Inc. (DSMMRI). On October 19,
                  2015, it was renamed and registered as Miracle Life Fellowship
                  International-Philippines, Inc. (MLFI-PI), with leadership
                  passed from Apostle Don Stewart to Bishop Felipe L. Alba to
                  continue the ministry that Evangelist AA Allen had started.
                </p>
                <p className="text-body-color dark:text-body-color-dark mt-2 text-base">
                  On May 20, 2019, it was renamed and registered as Miracle Life
                  Church International (Metro Gensan), Inc. (MLCI). By the grace
                  of God, the ministry in the Philippines is growing stronger
                  and larger under the leadership of Bishop Felipe L. Alba.
                </p>

                <p className="text-body-color dark:text-body-color-dark mt-4 text-base">
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

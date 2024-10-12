"use client";
import Link from "next/link";

const SidebarLink = () => {
  return (
    <ul>
      <li className="block">
        <Link
          href={`/docs`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700`}
        >
          Introduction
        </Link>
        <Link
          href={`/docs/history`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700`}
        >
          Church History
        </Link>
        <Link
          href={`/docs/mission_vision`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700`}
        >
          Our Mission & Vision
        </Link>
        <Link
          href={`/docs/ministries`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700`}
        >
          Church Ministries
        </Link>
        <Link
          href={`/docs/events`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700`}
        >
          Upcoming Events
        </Link>
        <Link
          href={`/docs/prayer`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700`}
        >
          Prayer Requests
        </Link>
      </li>
    </ul>
  );
};

export default SidebarLink;

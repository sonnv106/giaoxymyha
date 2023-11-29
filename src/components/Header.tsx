import SubmenuHomePage from "@/app/HomePage/SubmenuHomePage";
import SubmenuNews from "@/app/News/SubmenuNews";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-white w-full">
      <nav
        className="mx-auto flex justify-between p-6 lg:px-8 shadow-md h-full w-full"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          {/* <Link href={"/"} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto rounded-full"
              src="https://picsum.photos/200"
              alt=""
            />
          </Link> */}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-x-1 link hover group "
              aria-expanded="false"
            >
              Trang chủ
            </button>
            <SubmenuHomePage/>
          </div>

          <div className="relative group">
            <Link href="#" className="link">
              Tin tức
            </Link>
            <SubmenuNews/>
          </div>
          
          <Link href="#" className="link">
            Giáo lý
          </Link>
          <Link href="#" className="link">
            Thông báo
          </Link>
          <Link href="#" className="link">
            Hội đoàn
          </Link>
          <Link href="#" className="link">
            Đóng góp ý kiến
          </Link>
          <Link href="/introduce" className="link">
            Giới thiệu
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="link">
            Log in
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

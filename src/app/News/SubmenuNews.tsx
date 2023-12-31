import Link from "next/link"


const SubmenuNews = () =>{
    return (
        <div className="absolute hidden py-6 group-hover:block transition-all duration-1000 w-full">
              <ul className=" shadow-lg w-44 bg-white">
                <li>
                  <Link href="#" className="submenu font-light block w-full">
                    Tin giáo hội toàn cầu
                  </Link>
                </li>
                <li>
                  <Link href="#" className="submenu font-light block w-full">
                    Tin giáo hội Việt Nam
                  </Link>
                </li>
                <li>
                  <Link href="#" className="submenu font-light block w-full">
                    Tin giáo phận
                  </Link>
                </li>
                <li>
                  <Link href="#" className="submenu font-light block w-full">
                    Tin giáo xứ
                  </Link>
                </li>
              </ul>
            </div>
    )
}
export default SubmenuNews
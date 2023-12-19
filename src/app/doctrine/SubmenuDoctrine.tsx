import Link from "next/link"


const SubmenuDoctrine = () =>{
    return (
        <div className="absolute hidden py-6 group-hover:block transition-all duration-1000 w-full">
              <ul className=" shadow-lg w-40 bg-white">
                <li>
                  <Link href="#" className="submenu font-light block w-full">
                    Bài học giáo lý
                  </Link>
                </li>
                <li>
                  <Link href="#" className="submenu font-light block w-full">
                    Tranh tô màu
                  </Link>
                </li>
                <li>
                  <Link href="#" className="submenu font-light block w-full">
                    Trò chơi ô chữ
                  </Link>
                </li>
              </ul>
            </div>
    )
}
export default SubmenuDoctrine
import Link from "next/link"


const SubmenuHomePage = () =>{
    return (
        <div className="absolute hidden py-6 group-hover:block transition-all duration-1000 w-full">
              <ul className=" shadow-lg w-40">
                <li className="py-1  ">
                  <Link href="#" className="submenu font-light block w-full">
                    Giao ly
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="#" className="submenu font-light block w-full">
                    Giao ly
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="#" className="submenu font-light block w-full">
                    Giao ly
                  </Link>
                </li>
              </ul>
            </div>
    )
}
export default SubmenuHomePage
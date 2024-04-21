import Bars from "@/assets/Bars";
import X from "@/assets/X";
import logo from "../../assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import {useState} from 'react'
import Button from "@/shared/Button";
import ActionButton from "@/shared/ActionButton";
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopPage : boolean
};

const Navbar = ({ selectedPage, setSelectedPage , isTopPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled , setIsMenuToggled] = useState(false);
  const navBackGround = isTopPage? "" : "bg-primary-100 drop-shadow";
  console.log(isMenuToggled);
  return (
    <nav>
      <div className={`${flexBetween} ${navBackGround} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-3/6 gap-12`}>
            {/* left side */}
            <img src={logo} alt="logo" />
          </div>
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              {/* right side */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>

              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
              </div>
            </div>
          ) : (
            <Button OnClick={()=>setIsMenuToggled(!isMenuToggled)} className="rounded-full bg-secondary-500 p-2"> <Bars/> </Button>
          )}
        </div>
      </div>
      {/* Mobile menu modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12 ">
            <Button className="" OnClick={()=> setIsMenuToggled(!isMenuToggled)}> <X/> </Button>
          </div>
          <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

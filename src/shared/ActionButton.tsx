import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";
import { HTMLAttributes } from "react";
type Props = HTMLAttributes<HTMLHeadingElement> & {
    children:React.ReactNode;
    setSelectedPage : (value:SelectedPage) => void
}

function ActionButton({children, setSelectedPage}: Props) {
  return (
    <AnchorLink
    href="#contactus"
    className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
    onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
    >{children}
    </AnchorLink>
  )
}

export default ActionButton
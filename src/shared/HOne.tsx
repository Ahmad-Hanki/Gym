
import React, { HTMLAttributes } from 'react';


type Props = HTMLAttributes<HTMLHeadingElement> & {
    children : React.ReactNode;
}

const HOne = ({children, ...props }: Props) => {
  return (
    <h1 {...props}> {children}</h1>
    )
}

export default HOne
import { ReactDOM, ReactNode, Ref, useEffect, useState } from "react";

interface PropTypes {
    refEl: Ref<ReactDOM>,
    children: ReactNode
}
export default function ShowOnHover({refEl, children}: PropTypes) {
    const [showChildren, setShow] = useState<boolean>(false)

    const style = {}

    useEffect(() => {
        
    }, [refEl])
    return showChildren && (
        <div className="fixed" style={style}>
            {children}
        </div>
    )
}
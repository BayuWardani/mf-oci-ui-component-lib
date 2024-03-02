import React from "react"

import 'bootstrap/scss/bootstrap.scss'

interface Props {
    title:string,
    children:React.ReactNode
}

export default (props:Props) => {
    return (
        <div className="card">
            <div className="card-header">{props.title}</div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}
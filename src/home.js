import React from 'react'
import { userContext } from './context'


export default function Home() {
    let user = React.useContext(userContext)
    return (
        <div style={{TextAlign:"center"}}>
            <h1 > Welcome songkang.</h1>
            <p>Hello : {user}.</p>
        </div>
    )

}
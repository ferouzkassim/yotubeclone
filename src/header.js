// import { react } from '@babel/types'
import React from 'react'
import { FaCircle, FaYoutube } from 'react-icons/fa'
import {} from 'react-icons/fa'
import { FaAlignJustify } from 'react-icons/fa'
class Header extends React.Component {

    render(props) {
        return ( <
            header >
            <
            div >
            <
            div className = 'dropmenu' > <
            FaAlignJustify className = 'dropbar' / >
            <
            /div>  <
            ul >
            <
            li className = 'yout' > < FaYoutube className = 'youtube' / >
            YouTube < /li > < /
            ul > < /
            div >
            <
            div className = 'left' >
            <
            FaCircle className = 'user-logo icon-4x' / >
            <
            /div> < /
            header >
        )
    }

}
export default Header;
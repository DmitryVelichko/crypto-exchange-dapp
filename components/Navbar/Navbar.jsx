import React, {useState, useEffect, useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'

// import internal
import Style from './Navbar.module.css'
import images from '../../assets'
import {Model, TokenList} from '../index'

const NavBar = () => {
  const menuItems = [
    {
      name: 'Swap',
      link: '/'
    },
    {
      name: 'Tokens',
      link: '/'
    },
    {
      name: 'Pools',
      link: '/'
    }
  ]

  const [openModel, setOpenModel] = useState(false)
  const [openTokenBox, setOpenTokenBox] = useState(false)

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          {/* LOGO IMAGE */}
          <div className={Style.NavBar_box_left_img}>
            <Image src={images.uniswap} alt='logo' width={50} height={50}/>
          </div>
          {/* MENU ITEMS */}
          <div className={Style.NavBar_box_left_menu}>
            
          </div>
        </div>
        <div className={Style.NavBar_box_right}>Right</div>
      </div>
    </div>
  )
}

export default NavBar
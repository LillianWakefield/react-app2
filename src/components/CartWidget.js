import React, {useState}from 'react';
import {IconContext} from 'react-icons'
import { CgShoppingCart } from 'react-icons/cg';
import ClickCounter from './ClickCounter';

export default function CartWidget () {
    
    return (
        <IconContext.Provider
      value={{ color: 'gray', size: '23px'}}
    >
        <CgShoppingCart /> (0)
        </IconContext.Provider>
       

    )

};
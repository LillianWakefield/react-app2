import React from 'react';
import {IconContext} from 'react-icons'
import { CgShoppingCart } from 'react-icons/cg';

export default function CartWidget () {
    return (
        <IconContext.Provider
      value={{ color: 'gray', size: '23px', paddingTop: '10px' }}
    >
        <CgShoppingCart />
        </IconContext.Provider>
    )

};
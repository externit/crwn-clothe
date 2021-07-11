import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

export default function CartDropdown() {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'></div>
            <CustomButton>GO TO CART</CustomButton>
        </div>
    )
}

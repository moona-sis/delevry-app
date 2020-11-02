import React from 'react'
import { Input } from 'antd';
import  './adressInput.css'


function AdressInput({value, onChangeForm}) {
    const { Search } = Input;

    return (
        <div className='search-input'>
                <Search   onChange={(e)=> onChangeForm('address', e.target.value)} value={value} size='large' placeholder='Search Address' />

        </div>
    )
}

export default AdressInput

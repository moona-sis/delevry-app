import React from 'react'
import './adressBookBtn.css'
import { Switch } from 'antd';

function AdressBookBtn({value, onChangeForm}) {
    return (
        <div className='row switch-btn'>
            <Switch 
            onChange={()=>onChangeForm('savedToAddressBook', !value)}
            checked={value} size='small'/>
            <div className='address-book-txt'>Save to Address Book</div>
        </div>
    )
}

export default AdressBookBtn

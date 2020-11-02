import React from 'react'
import './locationContent.css'
import AdressInput from './AdressInput'
import ClientInfo from './ClientInfo'
import AdressBookBtn from './AdressBookBtn'

function LocationContent({type,data, onChangeForm}) {
    return (
        <div className='location-content'>
            <AdressInput value={data.address} onChangeForm={onChangeForm}/>
            <ClientInfo type={type} data={data} onChangeForm={onChangeForm}/>
            <AdressBookBtn value={data.savedToAddressBook} onChangeForm={onChangeForm}/>
        </div>
    )
}

export default LocationContent

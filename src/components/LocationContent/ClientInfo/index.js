import React from 'react'
import './clientInfo.css'
import {Input} from 'antd'

function ClientInfo({type, data, onChangeForm}) {
    return (
        <>
           <div className='row'>
               <div className='info-input'>
                   <Input 
                   onChange={(e)=> onChangeForm('firstname', e.target.value)}
                   value={data.firstname} className='input'  placeholder='First Name' size='large'/></div>
               <div className='info-input'>
                   <Input onChange={(e)=> onChangeForm('lastname', e.target.value)}
                    value={data.lastname}  className='input' placeholder='Last Name' size='large'/></div>
           </div> 

           <div className='row'>
               <div className='info-input'>
                   <Input onChange={(e)=> onChangeForm('company', e.target.value)}
                   value={data.company}  className='input' placeholder='Company' size='large'/></div>
           </div>

           <div className='row'>
               <div className='info-input'>
                   <Input onChange={(e)=> onChangeForm('phone', e.target.value)} 
                   value={data.phone}  className='input'  placeholder='Phone Number' size='large'/></div>
               <div className='info-input'>
                   <Input onChange={(e)=> onChangeForm('email', e.target.value)}
                    value={data.email}  className='input' placeholder='Email' size='large'/></div>
           </div>
           
           <div className='row'>
               <div className='info-input'>
                   <Input 
                   onChange={(e)=> onChangeForm('details', e.target.value)} 
                   value={data.details}  className='input'  placeholder='Details' size='large'/></div>
           </div>

           {type!=='pickup'?
           <>
           <div className='order-details'>Order details</div>
           <div className='row'>
               <div  className='info-input'>
                   <Input 
                   onChange={(e)=> onChangeForm('orderId', e.target.value)} 
                   value={data.orderId}  className='input'  placeholder='Order ID' size='large'/></div>
           </div>
           <div className='row'>
               <div   className='info-input'>
                   <Input 
                   onChange={(e)=> onChangeForm('orderInformations', e.target.value)} 
                   value={data.orderInformations}  className='input'  placeholder='Order Information'/></div>
           </div>

           
           </>
        :null}
        </>
    )
}

export default ClientInfo

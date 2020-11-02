import React from 'react'
import Card from './Card'
import './delevrySide.css'
import {FlagTwoTone, CarTwoTone, CalendarTwoTone} from '@ant-design/icons'
import LocationContent from '../../components/LocationContent'
import VehiculeContent from '../VehiculeContent'
import DateContent from '../DateContent'
import AddBtn from '../AddBtn'
import {useSelector, useDispatch} from 'react-redux'


function DeleverySide() {
    const dispatch = useDispatch()
    const {pickup, dropOff,vehicule,when,date,time} = useSelector((state)=>state.delevry)
   
   
    return (
        <div className='delevry-side-container center'>
            <Card title='Pick Up'  icon={<FlagTwoTone twoToneColor="#4869c5" />}>
                <LocationContent onChangeForm={(name,value)=> dispatch({
                    //name represente key
                    type:'SET_STATE',
                     payload:{pickup : {...pickup, [`${name}`]:value}}})}
                     data={pickup}type = 'pickup'/>
            </Card>
            <Card title='Drop Off'  icon={<FlagTwoTone twoToneColor="#55f1a0" />}>
                <LocationContent onChangeForm={(name,value)=> dispatch({
                    //name represente key
                    type:'SET_STATE',
                     payload:{dropOff : {...dropOff, [`${name}`]:value}}})} data={dropOff} type = 'dropof'/>
            </Card>
            <AddBtn onClick={()=>dispatch({
                type: 'SET_STATE',
                payload: {dropOff: [...dropOff, {adress:'', firstname:''}]}
            })}
           />
            <Card title='Drop Off'  icon={<CarTwoTone twoToneColor="#4869c5" />}>
                <VehiculeContent onChangeForm={(value)=> dispatch({
                    
                    type:'SET_STATE',
                     payload:{vehicule :value}})}
                     data={vehicule}/>
            </Card>

            <Card title='When do you need a courrier ?'  icon={<CalendarTwoTone twoToneColor="#55f1a0" />}>
                <DateContent onChangeForm={(value)=> dispatch({
                    //name represente key
                    type:'SET_STATE',
                     payload:{when :value}})} 
                     onChangeDate={(date)=> dispatch({
                         type: 'SET_STATE',
                         payload: {date:date}
                     })}

                     onChangeTime={(time)=> dispatch({
                        type: 'SET_STATE',
                        payload: {time:time}
                    })}
                     
                     when={when} date={date} time={time}/>
            </Card>
        </div>
    )
}

export default DeleverySide

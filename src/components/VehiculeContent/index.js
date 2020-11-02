import React from 'react'
import './vehiculeContent.css'
import { Radio } from 'antd';


function VehiculeContent({data, onChangeForm}) {
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };
    return (
        <div className='column vehicules'>
            <Radio.Group value={data} onChange={(e)=> onChangeForm(e.target.value)} >
        <Radio  className='radio' style={radioStyle} value={1}>
          Bike
        </Radio>
        <Radio className='radio'style={radioStyle} value={2}>
          MotorBike
        </Radio>
        <Radio className='radio' style={radioStyle} value={3}>
          Car
        </Radio>
        <Radio className='radio'style={radioStyle} value={4}>
          MotorBike XL
        </Radio>
      
      </Radio.Group>
        </div>
    )
}

export default VehiculeContent


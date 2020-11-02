import React from 'react'
import './dateContent.css'
import { Radio,DatePicker, TimePicker } from 'antd';
import {CalendarOutlined, FieldTimeOutlined} from '@ant-design/icons'

function DateContent({when, date,time,onChangeForm,onChangeDate,onChangeTime}) {
    return (
        <div>
             <Radio.Group onChange={(e)=>onChangeForm(e.target.value)}value={when} className='row ' >
        <Radio className='date' value={1}>Now <FieldTimeOutlined/></Radio>
        <Radio  className='date'value={2}>Later<CalendarOutlined/></Radio>
       
      </Radio.Group>
      {when=== 2? 
      <div className='dater'>
        <DatePicker onChange={(date)=>onChangeDate(date)} value={date} />
        <TimePicker onChange={(time)=>onChangeTime(time)} value={time}/>
      </div>: null}
        </div>
    )
}

export default DateContent

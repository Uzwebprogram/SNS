import React from 'react'
import {Commoninput} from "./styled-index"
function CommonInput({title , placeholder , onChange , ref , type}) {
  return (
    <Commoninput>
                <label htmlFor="name">{title}</label>
                <input type={type} ref={ref} onChange={onChange} placeholder={placeholder} required />
    </Commoninput>
  )
}

export default CommonInput
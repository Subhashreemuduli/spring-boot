import React from 'react'
import img6 from "../images/Dust Removal.jpg"

const Dust = () => {
  return (
    <div className='deep'>
        <img src={img6} className="deep-img" alt="" /><br/>
        <span className='deep-span'> Dust Removal</span>
        <p>An industrial dust collector is a type of air pollution control equipment used in factories, plants, warehouses and other industrial or commercial settings to meet environmental and workplace safety requirements. Effective dust collection systems control, reduce, and remove potentially harmful particulate matter and fumes from gases from a manufacturing process or the air and the surrounding environment during production and manufacturing. The equipment is specifically designed to purify and filter hazardous dust and fine particulate contaminant matter released into the work environment or atmosphere to maintain and improve air quality.

Types of pollutants can differ by industry. Therefore, industrial dust collector designs are specific to the extraction method required for each industry. Dust collector systems work in general by drawing dust and particulates from the air through a filter that first captures and separates the matter and then discharges purified air back into the workplace or environment. The objective of each design application is essentially the same—to filter, separate, and capture dust and particulate matter and release sanitized air.</p>
      
<div className="tablebox">
    <div className="table-row table-head">
      <div className="table-cell first-cell">
        <p>Type of Work </p>
        </div>
        <div className="table-cell">
        <p>Price</p>
        </div>
        
    </div>
    <div className="table-row">
          <div className="table-cell first-cell">
            <p>Dust Removal</p>
            </div>
            <div className="table-cell">
            <p>Rs.399/-</p>
            </div>
           
    </div>
    </div>
    </div>
  )
}

export default Dust

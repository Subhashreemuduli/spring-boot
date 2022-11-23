import React from 'react'
import img5 from "../images/dish.jpg"


const Dish = () => {
  return (
    <div className='deep'>
     <img src={img5} className="deep-img" alt="" /><br/>
        <span className='deep-span'>Dish Washing</span>
        <p>The kitchen is the heart of any home. The wonderful food that we all love every day is prepared in the kitchen and the whole family’s health relies on the cleanliness standards of the kitchen. Looking for a cheap and expert kitchen cleaning services provider, EHome Cleaners is the finest one with extensive experience in the cleaning business.<br/><br/>

<strong>Why EHome Cleaners for dish cleaning services?</strong><br/><br/>
It’s important to prevent pests and dust off your kitchen shelves and maintain it completely clean and sanitary.
We know the efforts that go into cleaning a kitchen, from the grease stains on the stove and the burned markings on the walls to the termites that may have infested your shelves or the discolored flooring.
Need not to worry, EHome Cleaners is here to take care of all your kitchen cleaning issues, to make sure your kitchen is free of all the stains and filth and is spick & span before you realize it!
What is the necessity for kitchen cleaning service providers?

In today’s hectic schedules nobody has enough time to invest in cleaning settings like home, workplace, hospitals, schools, etc. Cleaning service providers play an essential function to save the customers time and energy. Although there are numerous service providers in India.</p>
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
            <p>Normal Kitchen</p>
            </div>
            <div className="table-cell">
            <p>Rs.399/-</p>
            </div>
           
    </div>
    <div className="table-row">
          <div className="table-cell first-cell">
            <p>Commercial Kitchen</p>
            </div>
            <div className="table-cell">
            <p>Rs.1099/-</p>
            </div>
           
    </div>
    </div>
    </div>
  )
}

export default Dish

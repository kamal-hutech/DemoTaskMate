import React from 'react'

const ShowTask = () => {
  const tasks=[
    {id:10001,name:"TASK A",time:"2:09:01 AM 9/10/2030"},
    {id:10002,name:"TASK B",time:"2:09:05 AM 9/14/2030"},
    {id:10003,name:"TASK C",time:"3:09:04 AM 9/18/2030"}
    ]  
  return (
    <section className='showTask'>
        <div className='head'>
            <div>
                <span className='title'>Todo</span>
                <span className='count'>0</span>
            </div>
            <button className='clearAll'>Clear All</button>
        </div>
        <ul>
            {
                tasks.map(({id,name,time})=>{
                    return(<li key={id}>
                        <p>
                            <span className='name'>{name}</span>
                            <span className='time'>{time}</span>
                        </p>
                        <i className='bi bi-pencil-square'></i>
                        <i className='bi bi-trash'></i>
                    </li>)
                })
            }
           
        </ul>
    </section>
  )
}

export default ShowTask
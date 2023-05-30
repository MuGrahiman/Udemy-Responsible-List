import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeData } from '../store';

function CarList() {
    const dispatch = useDispatch()
    const {datas,name} = useSelector(({form,datas:{data,searchTerm}})=>{
        const filteredData =  data.filter((data)=>data.name.toLowerCase().includes(searchTerm.toLowerCase()))
    
        return{
            datas:filteredData,
            name:form.name
        }
    })
    const handleDataDelete = (data)=>{
        
        dispatch(removeData(data.id))
    }
     const renderedData = datas.map((data)=>{
        const bold = name && data.name.toLowerCase().includes(name.toLowerCase())
        return (
            <div key={data.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {data.name}-${data.cost}
                </p>
                <button className='button is-danger' onClick={()=>{handleDataDelete(data)}}>Delete</button>
            </div>
        )
     })
  return (
    <div className='car-list'>
      {renderedData}
      <hr/>
    </div>
  )
}

export default CarList

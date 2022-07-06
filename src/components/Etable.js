import {React,useState} from 'react'
import employeeData from '../MOCK_DATA.json'

export const Etable = () => {
    const[data,setData]=useState(employeeData)
    const[ord,setOrd]=useState('Ascending')
    console.log('data',data)
    const sorting=(d)=>{
        if(ord==='Ascending'){
            const sorted=[...data].sort((a,b)=>(
                a[d].toLowerCase()> b[d].toLowerCase()?1:-1
            ))
            setData(sorted);
            setOrd('Descending')
        }
        if(ord==='Descending'){
            const sorted=[...data].sort((a,b)=>(
                a[d].toLowerCase()< b[d].toLowerCase()?1:-1
            ))
            setData(sorted);
            setOrd('Ascending')
        }
    }
    const sortingd=(d)=>{
        if(ord==='Ascending'){
            const sorted=[...data].sort((a,b)=>(
                 parseInt(a[d]) - parseInt(b[d])
            ))
            setData(sorted);
            setOrd('Descending')
        }
        if(ord==='Descending'){
            const sorted=[...data].sort((a,b)=>(
                 parseInt(b[d])-parseInt(a[d]) 
            ))
            setData(sorted);
            setOrd('Ascending')
        }
    }
    
   
  
  return (
    <div className='container'  style={{'width':'65rem','marginLeft':'20rem'}}>
      

        <table border={'1px solid black'}>
            <thead >
                <th >id </th>
                <th onClick={()=>sorting('name')}>Name </th>
                <th onClick={()=>sortingd('date_of_joining')}>Date of Joining </th>
                <th onClick={()=>sortingd('ratings')}>Ratings(out of 10) </th>
                <th onClick={()=>sorting('location')}>Location</th>
                <th onClick={()=>sorting('profile')}>Profile </th>
                <th onClick={()=>sortingd('project_done')}>No. of projects done</th>
            </thead>
            <tbody>
                {data.map((dataa)=>(
                      <tr key={dataa.id}>
                      <td >
                          {dataa.id}
                          
                      </td>
                      <td>
                          {dataa.name}
                          
                      </td>
                      <td>
                          {dataa.date_of_joining}
                          
                      </td>
                      <td>
                          {dataa.ratings}
                          
                      </td>
                      <td>
                          {dataa.location}
                          
                      </td>
                      <td>
                          {dataa.profile}
                          
                      </td>
                      <td>
                          {dataa.project_done}
                          
                      </td>
                  </tr>
                ))}
         

            </tbody>
            <button onClick={()=>sorting('name')}>sort by name</button>
            <button onClick={()=>sorting('location')}>sort by location</button>
            <button onClick={()=>sorting('profile')}>sort by profile</button>
            <button onClick={()=>sortingd('ratings')}>sort by ratings</button>
            <button onClick={()=>sortingd('project_done')}>sort by project done</button>
            <button onClick={()=>sortingd('date_of_joining')}>sort by joining date</button>
            

        </table>
    </div>
  )
}

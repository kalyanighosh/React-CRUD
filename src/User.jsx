import axios from 'axios'
import React, { useEffect ,useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"

const User = () => {

    let [data,setData]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/content")

        .then((resp)=>{
            setData(resp.data)
        })

        .catch(()=>{
            console.log("did not get the data")
        })


    },[])

    let deleteData=(id)=>{
        axios.delete(`http://localhost:3000/content/${id}`)
        window.location.assign("/users")
    }






  return (

<div id={style.myuser}>

    {data.map((x)=>{

        return(
            <div id={style.cards}>

            <table>
            <tr>
              <th colSpan="2">
                <h4>Employee {x.id}</h4>
              </th>
            </tr>
            <tr>
            <td>Name</td>
            <td>:{x.name}</td>
            </tr>
            <tr>
            <td>Salary</td>
            <td>:{x.salary}</td>
            </tr>
            <tr>
            <td>Company</td>
            <td>:{x.company}</td>
            </tr>

            <tr>
              <td><button><Link to={`/edituser/${x.id}`} href="">Edit</Link></button></td>
              <td><button onClick={()=>{deleteData(x.id)}}>Delete</button></td>

            </tr>

            
          </table>


            </div>
        )

        })}

    </div>
    
  )
}

export default User
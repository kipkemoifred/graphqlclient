import React, { useState } from 'react'

import { CREATE_USER_MUTATION } from '../GraphQl/Mutation'
import { useMutation } from '@apollo/client'


function Form() {
    const [name,setName]=useState("")
    const [age,setAge]=useState(0)
    const [createUser,{error}]=useMutation(CREATE_USER_MUTATION)
    const addUser=()=>{
        createUser({
            variables:{
                name:name,
                age:age
            }
        })
        if(error){
            console.log(error)
            console.log(name)
            console.log(age)
        }
    }
  return (
    <div>

        <input
        type="text"
        placeholder='Name'
        onChange={(e)=>setName(e.target.value)}
        />

<input
        type="number"
        placeholder='age'
        onChange={(e)=>setAge(parseInt(e.target.value))}
        />
        <button onClick={addUser}>add user</button>
    </div>
  )
}

export default Form
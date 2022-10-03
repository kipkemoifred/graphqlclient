import logo from './logo.svg';
import './App.css';

import { useQuery, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import Form from './Components/Form';

const GET_LOCATIONS = gql`
  #query GetLocations {
    #locations {
      #id
      #name
     # description
    #  photo
   # }
  #}

  query {
        getAllUsers{
  
        name
        age
        
        }
        }
`;
function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

function GetUsers() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  const [users,setUsers]=useState([])
  useEffect(()=>{if (data){
    setUsers(data.getAllUsers)
  }},[data])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  
  
  return(
  <div>
 {users.map((val) =>{ return <h1>{val.age}</h1>})}
  </div>)
 


}

function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  const [users,setUsers]=useState([])
  useEffect(()=>{if (data){
    setUsers(data.getAllUsers)
  }},[data])
  return (
    <div>
    <h2>My first Apollo app 🚀</h2>
    <br/>
    {users.map((val) =>{ <h1>{val.name}</h1> })}
    {/* <DisplayLocations /> */}
    <Form/>
  </div>
  );
}

export default App;

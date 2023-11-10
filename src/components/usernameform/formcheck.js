import React, { useEffect, useState } from 'react';
import Form from './form';

function Formcheck() {
  // Logic to ceheck wheater user already exist or not 
  const [isloggedin , setisloggedin] = useState(false)
  const [useEffectTrigger , setuseEffectTrigger] = useState(true)

  useEffect(() => {
    let username = localStorage.getItem("username");

    setisloggedin(username === null ? false : true)
    // If not let set username for it 

  },[useEffectTrigger])

  // Modal to set username 
  const Setusername = () => {
    const useEffectToogle = () => {
      setuseEffectTrigger(!useEffectTrigger)
    }
    if(!isloggedin){
      return(
        <Form togglehandler={useEffectToogle} />
      )
    }
  }

  return (
    <React.Fragment>
      <p>{!isloggedin && <Setusername/> }</p>
    </React.Fragment>
  );
}

export default Formcheck;

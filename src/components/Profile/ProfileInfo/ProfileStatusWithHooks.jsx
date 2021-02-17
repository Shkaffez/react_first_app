import React, { useEffect, useState } from 'react';


const ProfileStatus = (props) => {

  let [editMod, setEditMod] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status)
  }, [props.status]);

  const activateEditMod = () => {
    setEditMod(true);
  }
  const deactivateEditMod = () => {
    setEditMod(false);
    props.updateStatus(status);  
  }

  return (
    <div>
      { editMod ?
        <div>
        <input onChange={(e)=>{setStatus(e.currentTarget.value)}} autoFocus={true} onBlur={()=>{deactivateEditMod()}} value={status}></input>
      </div>     
        :  <div>
        <span onDoubleClick={()=>{activateEditMod()}}>{props.status ? props.status : "..."}</span>
      </div>
      }
    </div>
  )

}

export default ProfileStatus; 
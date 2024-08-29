import { useState } from "react";

const User = ({name}) =>{
   const [count] = useState(0);    
    return (
    <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location: Indore</h3>
        <h4>Mail : Shivam.gupta75098@gmail.com</h4>
    </div>
    )
}

export default User ;
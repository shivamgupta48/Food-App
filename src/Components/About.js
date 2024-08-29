import UserClass from "./UserClass";
import { Component} from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
   constructor(props){
    super(props);
 console.log("parent constructor")   
}

componentDidMount(){
    console.log("parent componet mount");
}

  render(){
    return (
        <div>
            <h1>About Us</h1>
            <div>
                loggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser}) => (<h1 className="font font-bold"> {loggedInUser}</h1>)
                        }
                        </UserContext.Consumer>
            </div>
            <h2>Hi this is Namaste React</h2>
            {/* <User name= {"Shivam Ji Gupta (funtional)"}/> */}
            <UserClass name= {"Shivam Ji Gupta (classbased)"} location = {"Indore (class)"}/> 
        </div>
    )
}
}
export default About;
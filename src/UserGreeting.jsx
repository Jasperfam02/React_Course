function UserGreeting(props){

    const messageBox = <h2 className="message"> Welcome {props.username}</h2>;

    const loggedPrompt = <h2 className="loginPrompt">Please Logged in again</h2>;

    return(props.isLoggedIn ?
     messageBox: loggedPrompt);

}

export default UserGreeting
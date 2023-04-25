import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

const ProfilePage = () => {
    const userData= useAuth();
    return ( 
        <div className="profileContainer">
            <h1>You're welcome back {userData.name}</h1>
            <p>Your email address is {userData.email}</p>
            <p>Your phone number is {userData.phoneNumber}</p>
            <Link to="/">
            <button className="btn secondary">Go back to home</button></Link>
        </div>
     );
}
 
export default ProfilePage;
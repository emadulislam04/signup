import '../pages/LoggedIn.css'
import { signOut } from 'firebase/auth';
import {auth} from '../firebase'
function LoggedIn ({email}){

  // logout function
  const logout = async () => {
    await signOut(auth);
  };

    return(
        <>
         <div class="card">
  <div class="user-avatar">
    <img src="https://via.placeholder.com/150/FFFFFF/5995FD?text=User" alt="User Avatar"/>
  </div>
  <div class="user-name">
    Logged in as: {email}
  </div>
  <button class="logout-button" onClick={logout}>Logout</button>
</div>
        </>
    );

}

export default LoggedIn;
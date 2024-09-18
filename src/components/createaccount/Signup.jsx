import './Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='sign-up-page'>
        <h3>Sign up</h3>
        <form>
            <div>
                <i className="fa-solid fa-user fa-xl"></i>
                <input type="text" id='email' placeholder='Your email' name='username'/>
            </div>
            <div>
                <i className="fa-solid fa-lock fa-xl"></i>
                <input type="password" id='password' placeholder='Your password' name='password'/>
            </div>
            <div>
                <i class="fa-solid fa-phone fa-xl"></i>
                <input type="text" id='phone' placeholder='Your phone number' name='phone'/>
            </div>
            <div className='btn-remember'>
                <button type='submit'><Link to="/Login-Page" style={{textDecoration: "none",width: "100%",height: "100%"}}>Sign up</Link></button>
            </div>
        </form>
        
    </div>
  )
}

export default Signup
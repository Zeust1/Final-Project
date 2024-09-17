import { useState } from 'react'
import './loginpage.css'
// thư viện hỗ trợ so sánh 2 obj (npm install lodash)
import {isEqual} from 'lodash'
import { Link } from 'react-router-dom'


const Loginpage = (props) => {
    
    const userDatas = props.userData

    const [formData, setFormData] = useState({
        username:'',
        password:''
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData,[name]: value})
    }


    const handleOnLogin = (e) => {
        e.preventDefault()
        const { username,password } = formData
        if(username && password)
        userDatas.forEach(userData => {
            if(isEqual(formData,userData))
            window.alert(`Hello, welcom ${formData.username}`)
        });
    }



  return (
    <div className='login-page'>
        <h3>Enjoy coffe</h3>
        <form onSubmit={handleOnLogin}>
            <div>
                <i className="fa-solid fa-user fa-xl"></i>
                <input type="text" id='email' placeholder='Your email' name='username' value={formData.username}  onChange={handleOnChange}/>
            </div>
            <div>
                <i className="fa-solid fa-lock fa-xl"></i>
                <input type="password" id='password' placeholder='Your password' name='password' value={formData.password} onChange={handleOnChange}/>
                <p></p>
            </div>
            <div className='btn-remember'>
                <div>
                    <input type="checkbox" />
                    <p>Remember</p>
                </div>
                <button type='submit'>Login</button>
            </div>
        </form>
        <Link to="/Create-Account-Page">Create account</Link>
    </div>
  )
}

export default Loginpage
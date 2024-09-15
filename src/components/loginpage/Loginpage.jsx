import './loginpage.css'

const Loginpage = () => {
  return (
    <div className='login-page'>
        <h3>Enjoy coffe</h3>
        <form>
            <div>
                <i class="fa-solid fa-user fa-xl"></i>
                <input type="text" id='email' placeholder='Your email'/>
            </div>
            <div>
                <i class="fa-solid fa-lock fa-xl"></i>
                <input type="password" id='password' placeholder='Your password'/>
            </div>
            <div className='btn-remember'>
                <div>
                    <input type="checkbox" />
                    <p>Remember</p>
                </div>
                <button type='submit'>Login</button>
            </div>
        </form>
        <a href="#">Create account</a>
    </div>
  )
}

export default Loginpage
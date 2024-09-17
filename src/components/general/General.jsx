import './general.css'
import {Routes, Route} from 'react-router-dom'
import Loginpage from '../loginpage/Loginpage'
import userData from '../../../userData.json'


const General = () => {
  return (
    <div>
      <Routes>
        <Route path='/Login-Page' element={<Loginpage userData={userData}/>}/>
      </Routes>
    </div>
  )
}

export default General
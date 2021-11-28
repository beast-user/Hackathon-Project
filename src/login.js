import React, { useState } from 'react';
import ParentSection from './parent-section';
import './parent-section/parent-section.css';
import OwnerSection from './schoolOwner/schoolOwnerSection';

function Login({setVissibility}) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(true)
  const [parent, setParent] = useState(false)
  const [school, setSchool] = useState(false)
  
  // handle button click of login form
  const handleLogin = (e) => {
    console.log(e, username,password)
    if(username.value == '7660864501'){
        setParent(true)
        setLogin(false)
    }else if(username.value == '987654321') {
        setSchool(true)
        setLogin(false)
    }
    console.log(login, parent, school)
  }
 
  return (
      <div>

      {login && <div className="paddingTop">
        <div className = "login-box">

<div>
<div className="login-title">Login to your Account</div><br /><br />
  <div>
    Mobile<br />
    <input type="text" {...username} autoComplete="new-password" />
  </div>
  <div style={{ marginTop: 10 }}>
    Password<br />
    <input type="password" {...password} autoComplete="new-password" />
  </div>
  {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
  <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={e=>handleLogin(e)} disabled={loading} /><br />
</div>
  </div>    
      </div> 
      }
       { parent && <ParentSection setVissibility={ setVissibility} ></ParentSection>}
        {school && <OwnerSection setVissibility={null}></OwnerSection>}
      </div>
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;
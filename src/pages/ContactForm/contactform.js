import React from "react";
import Card from '../../components/Card/card'
import styles from './styles.module.css'
import emailjs from '@emailjs/browser'
export default function ContactForm(){
    const [inputs,setInputs]=React.useState({fname:'',lname:'',email:'',subject:'',message:''})
    const [success,setSuccess]=React.useState(false);
    const [failure,setFailure]=React.useState(false);
    const form=React.useRef();
    function changeInput(event){
        const {name,value}=event.target;
        setInputs((prevInputs)=>({
            ...prevInputs,
            [name]:value
        }))
    }

    function sendMail(e){
        e.preventDefault();
        emailjs.sendForm('service_31cm626', 'template_j2ce0ts', form.current, 'H4dUH3fVS2uSa1XY0')
        .then(function(response){setSuccess(true);setFailure(false);},function(error){setFailure(true);})
        
    }
    function clear(){
        setInputs({fname:'',lname:'',email:'',subject:'',message:''});
    }

    React.useEffect(()=>window.scrollTo(0,0),[])
    return(
        <div className={styles.contact}>
            <h1 className={styles.contactForm}><span className={styles.blue_dot}></span>Let's Talk</h1>
            {failure && <p className={styles.cantSend}><span style={{color:'red'}}>!</span> Failed to send the form</p>}
            <Card render={()=>(
                <>
                    {!success && 
                    <form ref={form}onSubmit={sendMail}>
                        <div className={styles.fullName}>
                            <label>First Name <span style={{color:'#0050ff'}}>*</span>
                            <input value={inputs.fname} type='text' id='fname' className={styles.input} onChange={changeInput} name='fname' required/></label>
                            <label >Last Name <span style={{color:'#0050ff'}}>*</span>
                            <input value={inputs.lname} type='text' id='lname' className={styles.input}name='lname' onChange={changeInput} required/></label>
                        </div>
                        <label >Email <span style={{color:'#0050ff'}}>*</span>
                        <input value={inputs.email} type='text' id='email' className={styles.input} name='email' onChange={changeInput} required/></label>
                        <label >Subject <span style={{color:'#0050ff'}}>*</span>
                        <input value={inputs.subject} type='text' id='subject' className={styles.input} name='subject' onChange={changeInput} required/></label>
                        <label >Message <span style={{color:'#0050ff'}}>*</span>
                        <input value={inputs.message} type='text' id='message' className={styles.input} name='message' onChange={changeInput} required/></label>
                        {!failure && <button className={styles.send}>Send</button>}
                        {failure && <button className={styles.send} onClick={()=>setFailure(false)}>Try Again</button>}
                    </form>}
                    {success && 
                    <div className={styles.submitted}>
                        <p className={styles.sent}>SENT!</p>
                        <button className={styles.send} onClick={()=>{clear();setSuccess(false)}}>New Form</button>
                    </div>}
                </>
            )} className={styles.card}/>
            
        </div>
    )
}
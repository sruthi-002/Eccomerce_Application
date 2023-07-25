import React, { useState,useEffect } from 'react'
import {Paper,Stepper,Step,StepLabel,Typography,Button,CircularProgress,Divider} from '@mui/material'
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import Confirmation from '../Confirmation';
import { commerce } from '../../commerce/commerce';
const steps =['Shipping Address' , 'Payment Details']
const CheckOut = ({cart,order,checkout,error}) => {
    const [activestep,SetActiveStep]=useState(0);
    const[checkoutToken , SetCheckoutToken]=useState('null');
    const [shippingdata,setShippingdata]=useState({});
    const Form =() => activestep===0 ?
    <AddressForm checkoutToken={checkoutToken} test={next}/>:
    <PaymentForm shippingdata={shippingdata} checkoutToken={checkoutToken} backstep={backstep}
    checkout={checkout} nextstep={nextstep}/>

    useEffect(()=>
    {
      const generateToken =async ()=>{
        try{
          const token = await commerce.checkout.generateToken(cart.id,{type:'cart'});
          console.log(token)
          SetCheckoutToken(token);
        }
        catch(error)
        {

        }
      }
      generateToken();
    },[]);

    const nextstep =() =>
    {
      SetActiveStep((activestep)=>(activestep+1))
    }
    const backstep =() => SetActiveStep((activestep)=>(activestep-1))

    const next = (data) => {
      setShippingdata(data);
      nextstep();
      console.log(data);
    }

  return (
    <>
      <div>
        <main>
            <Paper style={{alignItems:"center",width:"auto",height:"auto",margin:'auto',marginLeft:'100px',marginRight:'100px',marginTop:'30px'}} square>
            <br></br>
                <Typography variant='h4' align="center">CheckOut</Typography>
                <Stepper activeStep={activestep} style={{marginTop:"15px",color:"black"}}>
                    {steps.map((st)=>(
                        <Step key={st}>
                            <StepLabel>{st}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activestep === steps.length ? <Confirmation/>:<Form/>}
            </Paper>
        </main>
      </div>
    </>
  )
}

export default CheckOut

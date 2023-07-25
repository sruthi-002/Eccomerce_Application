import React from 'react';
import { Divider,Typography,Button } from '@mui/material';
import { CardElement , Elements , ElementsConsumer} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';
const stripePromise = loadStripe('pk_test_51NKH9YSF6x9NphuRMVyHWWGZr6sCeSAKPf9zJztML6OZ5Oh6cdPR99NCMmPuzs5VEXveQqFqFD2F0QZ3nFIytQOX00yj29yxJf')
const PaymentForm = ({shippingdata,checkoutToken,backstep,checkout,nextstep}) => {
  console.log(shippingdata);
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if (error) {
      console.log('[error]', error);
    } else {
      const orderData = {
        line_items: checkoutToken?.line_items,
        customer: { firstname:shippingdata.firstName, lastname:shippingdata.lastName, email:shippingdata.email },
        shipping: { name: 'International', street:shippingdata.address1, town_city:shippingdata.city, county_state:shippingdata.shippingSubdivision, postal_zip_code:shippingdata.zip, country:shippingdata.shippingCountry },
        fulfillment: { shipping_method:shippingdata.shippingOption },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      checkout(checkoutToken.id, orderData);

      nextstep();
    }
  };

  return (
    <>
    <Review checkoutToken={checkoutToken}/>
    <Divider/>
    <Typography  variant="h6" gutterBottom style={{textAlign:"center"}}>Payment Method</Typography>
    <Elements stripe={stripePromise}>
      <ElementsConsumer sx={{margin:"20px" ,marginLeft:"20px"}} >
        {
          ({elements,stripe}) =>(
            <form onSubmit={(e)=> handleSubmit(e,elements,stripe)} style={{margin:"20px" ,marginLeft:"20px"}} >
                 <CardElement style={{margin:"20px" ,marginLeft:"20px"}}/>
                 <br></br>
                 <div style={{display:'flex',justifyContent:'space-between',margin:"20px" ,marginLeft:"20px"}}>
                  <Button variant='outlined' onClick={backstep}>Back</Button>
                  <Button sx={{marginLeft:"20px",backgroundColor:"white",color:"slateblue","&:hover":{
                    backgroundColor:"slateblue",color:"white"
                  },}} type="submit" variant="container" disabled={!stripe}>
                    Pay {checkoutToken.subtotal?.formatted_with_symbol}
                  </Button>
                 </div>
            </form>
          )
        }
      </ElementsConsumer>
    </Elements>
    <br></br>
    </>
  )
}

export default PaymentForm

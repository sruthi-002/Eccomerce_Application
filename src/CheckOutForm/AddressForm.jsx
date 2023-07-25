import React ,{useEffect, useState}from 'react'
import { Input, MenuItem, Select,Typography,Button,Grid, InputLabel,Box,CircularProgress} from '@mui/material'
import {useForm ,FormProvider} from 'react-hook-form'
import InputForm from './InputForm';
import { commerce } from '../commerce/commerce';
import {Link } from 'react-router-dom';

const AddressForm = ({ checkoutToken, test }) => {
    console.log(checkoutToken);
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const[load,setLoad]=useState(false)
    const methods = useForm();

    const { register, handleSubmit, reset } = useForm();

      
    const fetchShippingCountries = async (checkoutTokenId) => {

      const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
      console.log(countries);
      setShippingCountries(countries);
      setShippingCountry(countries[0]);
      console.log("........",shippingCountry);
    };
  
    const fetchSubdivisions = async (countryCode) => {
      const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
  
      setShippingSubdivisions(subdivisions);
      setShippingSubdivision(Object.keys(subdivisions)[0]);
    };
  
    const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
      const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });
  
      setShippingOptions(options);
      setShippingOption(options[0].id);
    };
  
    useEffect(() => {
      fetchShippingCountries(checkoutToken.id);
    }, []);
  
    useEffect(() => {
      if (shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]);
  
    useEffect(() => {
      if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
    }, [shippingSubdivision]);

    return (
        <>
        {/* {!shippingCountry ? <h3>Loading</h3>: <> */}
        <Typography style={{textAlign:"center"}} variant="h6" gutterBottom>Shipping address</Typography>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit((data) => test({ ...data, shippingCountry, shippingSubdivision, shippingOption }))} >
            <Grid style={{margin:"5px"}} container spacing={3}>
              <InputForm required name="firstName" label="First name" {...register('firstName')} />
              <InputForm required name="lastName" label="Last name" />
              <InputForm required name="address1" label="Address line 1" />
              <InputForm required name="email" label="Email" />
              <InputForm required name="city" label="City" />
              <InputForm required name="zip" label="Zip / Postal code" />
              <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Country</InputLabel>
                <Select value={shippingCountry} autoWidth onChange={(e) => setShippingCountry(e.target.value)}>
                  {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Subdivision</InputLabel>
                <Select value={shippingSubdivision} autoWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                  {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Options</InputLabel>
                <Select value={shippingOption} autoWidth onChange={(e) => setShippingOption(e.target.value)}>
                  {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-between',height:"auto",width:"auto",marginLeft:"10px",marginRight:"10px"}}>
              <Button sx={{backgroundColor:"white",color:"SlateBlue","&:hover": {
                  backgroundColor: "SlateBlue",color:"white"
                },}} component={Link} variant="contained" to="/cart" color="primary" >Back to Cart</Button>
              <Button type="submit" variant="contained" sx={{backgroundColor:"white",color:"slateblue","&:hover": {
                  backgroundColor: "SlateBlue",color:"white"
                },}}>Next</Button>
            </div>
          </form>
        </FormProvider>
         <br></br></>
      // }</> 
    );
  };
export default AddressForm
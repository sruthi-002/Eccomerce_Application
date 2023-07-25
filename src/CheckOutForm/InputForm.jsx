import React from 'react'
import { Controller,useFormContext } from 'react-hook-form'
import { TextField,Grid } from '@mui/material'
const InputForm = ({name,label,required}) => {
    const {control} =useFormContext();
  return (
    <Grid item xs={12} sm={6}>
        {/* <Controller
                control={control}
                name={name}
                render = {({ field})=> (
                    <TextField variant="standard" sx={{width:"200px"}}
                        fullWidth
                        label={label}
                        required
                    />
                )}
            /> */}
            <TextField variant="standard" 
                        autoWidth
                        label={label}
                        required
                    />
    </Grid>
  )
}

export default InputForm

import React from 'react';
import {
    Grid,
    Card,
    CardContent,
    CardHeader,
    Box,
    Button,
  } from '@material-ui/core';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


  const Category = () => {
   

    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
      };

   
    return (
        <Grid container spacing={3}>
           
            <Grid item lg={9} md={12} xs={12}>
                <Card elevation={1}>
                    <CardHeader titleTypographyProps={{variant:'h4' }} title="Category"/>
                    <CardContent>
                    <form autoComplete="off" noValidate >
                            <Grid  container spacing={3} >
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={1}>Vegetarian</MenuItem>
                                <MenuItem value={2}>Non-Vegetarian</MenuItem>
                                <MenuItem value={3}>Chef's Choice</MenuItem>
                                <MenuItem value={4}>Diabetes-Friendly</MenuItem>
                                <MenuItem value={5}>Gluten Free</MenuItem>
                                <MenuItem value={6}>Low Calorie</MenuItem>
                                <MenuItem value={7}>Lean and Clean</MenuItem>
                                <MenuItem value={8}>Fresh and Ready</MenuItem>
                                </Select>
                            </FormControl>
                                <Grid item md={12} xs={12} >
                                <input type="file" name="FileAttachment" id="FileAttachment"/>
                                </Grid>
                               
                            </Grid>
                            
                            
                            <Box
                            display="flex"
                            justifyContent="flex-start"
                            mt={3}
                            >
                            <Button
                                color="primary"
                                variant="contained"
                            >
                                Submit
                            </Button>
                            </Box>
                        
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
 
export default Category;
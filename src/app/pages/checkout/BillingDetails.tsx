import { FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import React from "react";

const BillingDetails: React.FC = () => {
    const [selectedValue, setSelectedValue] = React.useState(0);
    const handleSelectedValueChange = (event: any) => {
        setSelectedValue(event.target.value);
    };

    const [controledSelectedValue, setControledSelectedValue] = React.useState('home');
    const handleControledSelectedChange = (event: any) => {
        setControledSelectedValue(event.target.value);
    };
    return (
        <div className="cart-main">
            <Grid container spacing={2.5} >
                <Grid item lg={6} xs={12}>
                    <div className="form-group">
                        <InputLabel>First Name <sup className="required">*</sup> </InputLabel>
                        <FormControl fullWidth>
                            <OutlinedInput placeholder="First Name" />
                        </FormControl>
                    </div>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <div className="form-group">
                        <InputLabel>Last Name <sup className="required">*</sup> </InputLabel>
                        <FormControl fullWidth>
                            <OutlinedInput placeholder="Last Name" />
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="form-group">
                        <InputLabel>Address <sup className="required">*</sup> </InputLabel>
                        <FormControl fullWidth className="select-group">
                            <OutlinedInput placeholder="Placeholder" endAdornment={
                                <InputAdornment position="start">
                                    <Select
                                        className="controled-select"
                                        value={controledSelectedValue}
                                        onChange={handleControledSelectedChange}
                                    >
                                        <MenuItem value="home">Home</MenuItem>
                                        <MenuItem value="office">Office</MenuItem>
                                    </Select>
                                </InputAdornment>
                            } />
                        </FormControl>
                    </div>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <div className="form-group">
                        <InputLabel>Zip Code <sup className="required">*</sup> </InputLabel>
                        <FormControl fullWidth>
                            <OutlinedInput placeholder="Last Name" />
                        </FormControl>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <div className="form-group">
                        <InputLabel>City <sup className="required">*</sup> </InputLabel>
                        <FormControl fullWidth>
                            <Select value={selectedValue}
                                onChange={handleSelectedValueChange}>
                                <MenuItem value={1}>Option 1</MenuItem>
                                <MenuItem value={2}>Option 2</MenuItem>
                                <MenuItem value={3}>Option 3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <div className="form-group">
                        <InputLabel>State <sup className="required">*</sup> </InputLabel>
                        <FormControl fullWidth>
                            <Select value={selectedValue}
                                onChange={handleSelectedValueChange}>
                                <MenuItem value={1}>Option 1</MenuItem>
                                <MenuItem value={2}>Option 2</MenuItem>
                                <MenuItem value={3}>Option 3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <div className="form-group">
                        <InputLabel>Country <sup className="required">*</sup> </InputLabel>
                        <FormControl fullWidth>
                            <Select value={selectedValue}
                                onChange={handleSelectedValueChange}>
                                <MenuItem value={1}>Option 1</MenuItem>
                                <MenuItem value={2}>Option 2</MenuItem>
                                <MenuItem value={3}>Option 3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default BillingDetails;
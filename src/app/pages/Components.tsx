/* eslint-disable no-script-url */
// eslint-disable-next-line no-script-url
import { Helmet, HelmetProvider } from "react-helmet-async";
import React from "react";
import {
  Avatar,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Switch,
  Typography,
  Tab,
  Button,
  Breadcrumbs,
} from "@mui/material";
import images from "../assets/images";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Link } from "react-router-dom";

const Components: React.FC = () => {

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const [controledSelectedValue, setControledSelectedValue] = React.useState('office');
  const handleControledSelectedChange = (event: any) => {
    setControledSelectedValue(event.target.value);
  };

  const [selectedValue, setSelectedValue] = React.useState(1);
  const handleSelectedValueChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const [tabValue, setTabValue] = React.useState('1');
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Components | E-Learning</title>
      </Helmet>
      <div className="component-wrap">
        <Typography variant="h1">Heading</Typography>
        <Typography variant="h2">Heading</Typography>
        <Typography variant="h3">Heading</Typography>
        <Typography variant="h4">Heading</Typography>
        <Typography variant="h5">Heading</Typography>
        <Typography variant="h6">Heading</Typography>
      </div>
      <div className="component-wrap">
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <div className="form-group">
              <InputLabel>Label</InputLabel>
              <FormControl fullWidth>
                <OutlinedInput placeholder="Placeholder" />
              </FormControl>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="form-group">
              <InputLabel>Label <sup className="required">*</sup>  </InputLabel>
              <FormControl fullWidth>
                <OutlinedInput placeholder="Placeholder" type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        color="primary"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        <Avatar src={showPassword ? images.PasswordGreyShow : images.PasswordGreyHide} variant="square" />
                      </IconButton>
                    </InputAdornment>
                  } />
              </FormControl>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="form-group">
              <InputLabel>Label <span className="optional">(Optional)</span> </InputLabel>
              <FormControl fullWidth>
                <OutlinedInput placeholder="Placeholder" startAdornment={
                  <InputAdornment position="start">
                    <Avatar src={images.SearchGrey} variant="square" />
                  </InputAdornment>
                } />
              </FormControl>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="form-group">
              <InputLabel>Label</InputLabel>
              <FormControl fullWidth className="select-group">
                <OutlinedInput placeholder="Placeholder" endAdornment={
                  <InputAdornment position="start">
                    <Select
                      className="controled-select"
                      value={controledSelectedValue}
                      onChange={handleControledSelectedChange}
                    >
                      <MenuItem value="office">Office</MenuItem>
                      <MenuItem value="home">Home</MenuItem>
                    </Select>
                  </InputAdornment>
                } />
              </FormControl>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="form-group">
              <InputLabel>Label</InputLabel>
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
              <InputLabel>Label</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker className="MuiDatepicker" views={['year', 'month', 'day']} orientation="portrait" />
              </LocalizationProvider>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="form-group">
              <InputLabel>Label</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* <DesktopDatePicker  views={['year', 'month', 'day']} orientation="portrait" /> */}
                <TimePicker className="MuiTimepicker" />
              </LocalizationProvider>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="component-wrap">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox size="medium" color="primary" />} label="Tab Link 1" />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox size="medium" color="primary" checked />} label="Tab Link 1" />
          </Grid>
        </Grid>
      </div>
      <div className="component-wrap">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Switch defaultChecked size="small" />
          </Grid>
          <Grid item xs={12}>
            <Switch defaultChecked />
          </Grid>
        </Grid>
      </div>
      <div className="component-wrap">
        <TabContext value={tabValue}>
          <div className="tabs-wrapper">
            <TabList onChange={handleTabChange}>
              <Tab label="Tab Link 1" value="1" />
              <Tab label="Tab Link 2" value="2" />
              <Tab label="Tab Link 3" value="3" />
            </TabList>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </div>
        </TabContext>
      </div>
      <div className="component-wrap">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Button variant="contained" size="large" color="primary">Filled</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" size="medium" color="primary">Filled</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" size="small" color="primary">Filled</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Button variant="outlined" size="large" color="primary">Outlined</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" size="medium" color="primary">Outlined</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" size="small" color="primary">Outlined</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Button variant="outlined" size="large" color="inherit">Outlined</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" size="medium" color="inherit">Outlined</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" size="small" color="inherit">Outlined</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Button variant="contained" size="large" color="primary" startIcon={<Avatar src={images.LogoWhite} variant="square" />}>Filled</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" size="large" color="primary" startIcon={<Avatar src={images.LogoColored} variant="square" />}>Outlined</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" size="large" color="inherit" startIcon={<Avatar src={images.LogoColored} variant="square" />}>Outlined</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Button variant="contained" size="large" color="primary" endIcon={<Avatar src={images.LogoWhite} variant="square" />}>Filled</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" size="large" color="primary" endIcon={<Avatar src={images.LogoColored} variant="square" />}>Outlined</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" size="large" color="inherit" endIcon={<Avatar src={images.LogoColored} variant="square" />}>Outlined</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Button className="MuiIconButton" variant="contained" size="large" color="primary">
                  <Avatar src={images.LogoWhite} variant="square" />
                </Button>
              </Grid>
              <Grid item>
                <Button className="MuiIconButton" variant="outlined" size="large" color="primary">
                  <Avatar src={images.TimepickerGrey} variant="square" />
                </Button>
              </Grid>
              <Grid item>
                <Button className="MuiIconButton" variant="outlined" size="large" color="inherit">
                  <Avatar src={images.TimepickerGrey} variant="square" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Button className="MuiIconButton" variant="contained" size="medium" color="primary">
                  <Avatar src={images.LogoWhite} variant="square" />
                </Button>
              </Grid>
              <Grid item>
                <Button className="MuiIconButton" variant="outlined" size="medium" color="primary">
                  <Avatar src={images.TimepickerGrey} variant="square" />
                </Button>
              </Grid>
              <Grid item>
                <Button className="MuiIconButton" variant="outlined" size="medium" color="inherit">
                  <Avatar src={images.TimepickerGrey} variant="square" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Button className="MuiIconButton" variant="contained" size="small" color="primary">
                  <Avatar src={images.LogoWhite} variant="square" />
                </Button>
              </Grid>
              <Grid item>
                <Button className="MuiIconButton" variant="outlined" size="small" color="primary">
                  <Avatar src={images.TimepickerGrey} variant="square" />
                </Button>
              </Grid>
              <Grid item>
                <Button className="MuiIconButton px-8p" variant="outlined" size="small" color="inherit">
                  <Avatar className="me-4p" src={images.PasswordGreyShow} variant="square" /> 23
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="component-wrap">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Breadcrumbs separator={<Avatar src={images.ChevronRightGrey} variant="square" />}>
              <Link className="link link-light" key="1" to="/link1" onClick={(e) => { e.preventDefault() }}>
                Link 1
              </Link>
              <Typography variant="body2" key="3">
                Link 2
              </Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Breadcrumbs separator={<Avatar src={images.ChevronRightGrey} variant="square" />}>
              <Link className="link link-light" key="1" to="/link1" onClick={(e) => { e.preventDefault() }}>
                Link 1
              </Link>
              <Link
                className="link link-light"
                key="2"
                to="/link2"
                onClick={(e) => { e.preventDefault() }}
              >
                Link 2
              </Link>
              <Typography variant="body2" key="3">
                Link 3
              </Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </div>
    </HelmetProvider>
  );
};

export default Components;

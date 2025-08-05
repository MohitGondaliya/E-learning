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
  type SelectChangeEvent,
} from "@mui/material";
import images from "../assets/images";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Link } from "react-router-dom";
import Datepicker from "../shared/component/Datepicker";
import Timepicker from "../shared/component/Timepicker";

const Components: React.FC = () => {

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const [controlledSelectedValue, setControlledSelectedValue] = React.useState('home');
  const handleControlledSelectedChange = (event: SelectChangeEvent) => {
    setControlledSelectedValue(event.target.value);
  };

  const [selectedValue, setSelectedValue] = React.useState('');
  const handleSelectedValueChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
  };

  const [tabValue, setTabValue] = React.useState('1');
  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <>
      <title>Components | E-Learning</title>
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
          <Grid size={{ md: 6, xs: 12 }}>
            <div className="form-group">
              <InputLabel>Label</InputLabel>
              <FormControl fullWidth>
                <OutlinedInput placeholder="Placeholder" />
              </FormControl>
            </div>
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}>
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
          <Grid size={{ md: 6, xs: 12 }}>
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
          <Grid size={{ md: 6, xs: 12 }}>
            <div className="form-group">
              <InputLabel>Label</InputLabel>
              <FormControl fullWidth className="select-group">
                <OutlinedInput placeholder="Placeholder" endAdornment={
                  <InputAdornment position="start">
                    <Select
                      className="controlled-select"
                      value={controlledSelectedValue}
                      onChange={handleControlledSelectedChange}
                    >
                      <MenuItem value="office">Office</MenuItem>
                      <MenuItem value="home">Home</MenuItem>
                    </Select>
                  </InputAdornment>
                } />
              </FormControl>
            </div>
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}>
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
          <Grid size={{ md: 6, xs: 12 }}>
            <div className="form-group">
              <InputLabel>Label</InputLabel>
              <Datepicker />
            </div>
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}>
            <div className="form-group">
              <InputLabel>Label</InputLabel>
              <Timepicker />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="component-wrap">
        <Grid container spacing={2}>
          <Grid size={12}>
            <FormControlLabel control={<Checkbox size="medium" color="primary" />} label="Tab Link 1" />
          </Grid>
          <Grid size={12}>
            <FormControlLabel control={<Checkbox size="medium" color="primary" checked />} label="Tab Link 1" />
          </Grid>
        </Grid>
      </div>
      <div className="component-wrap">
        <Grid container spacing={2}>
          <Grid size={12}>
            <Switch defaultChecked size="small" />
          </Grid>
          <Grid size={12}>
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
          <Grid size={12}>
            <Grid container spacing={2}>
              <Grid size="auto">
                <Button variant="contained" size="large" color="primary">Filled</Button>
              </Grid>
              <Grid size="auto">
                <Button variant="contained" size="medium" color="primary">Filled</Button>
              </Grid>
              <Grid size="auto">
                <Button variant="contained" size="small" color="primary">Filled</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={12}>
            <Grid container spacing={2}>
              <Grid size="auto">
                <Button variant="outlined" size="large" color="primary">Outlined</Button>
              </Grid>
              <Grid size="auto">
                <Button variant="outlined" size="medium" color="primary">Outlined</Button>
              </Grid>
              <Grid size="auto">
                <Button variant="outlined" size="small" color="primary">Outlined</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={12}>
            <Grid container spacing={2}>
              <Grid size="auto">
                <Button variant="outlined" size="large" color="inherit">Outlined</Button>
              </Grid>
              <Grid size="auto">
                <Button variant="outlined" size="medium" color="inherit">Outlined</Button>
              </Grid>
              <Grid size="auto">
                <Button variant="outlined" size="small" color="inherit">Outlined</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={12}>
            <Grid container spacing={2}>
              <Grid size="auto">
                <Button variant="contained" size="large" color="primary" startIcon={<Avatar src={images.LogoWhite} variant="square" />}>Filled</Button>
              </Grid>
              <Grid size="auto">
                <Button variant="outlined" size="large" color="primary" startIcon={<Avatar src={images.LogoColored} variant="square" />}>Outlined</Button>
              </Grid>
              <Grid size="auto">
                <Button variant="outlined" size="large" color="inherit" startIcon={<Avatar src={images.LogoColored} variant="square" />}>Outlined</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={12}>
            <Grid container spacing={2}>
              <Grid size="auto">
                <Button variant="contained" size="large" color="primary" endIcon={<Avatar src={images.LogoWhite} variant="square" />}>Filled</Button>
              </Grid>
              <Grid size="auto">
                <Button variant="outlined" size="large" color="primary" endIcon={<Avatar src={images.LogoColored} variant="square" />}>Outlined</Button>
              </Grid>
              <Grid size="auto">
                <Button variant="outlined" size="large" color="inherit" endIcon={<Avatar src={images.LogoColored} variant="square" />}>Outlined</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={12}>
            <Grid container spacing={2}>
              <Grid size="auto">
                <Button className="MuiIconButton" variant="contained" size="large" color="primary">
                  <Avatar src={images.LogoWhite} variant="square" />
                </Button>
              </Grid>
              <Grid size="auto">
                <Button className="MuiIconButton" variant="outlined" size="large" color="primary">
                  <Avatar src={images.TimepickerGrey} variant="square" />
                </Button>
              </Grid>
              <Grid size="auto">
                <Button className="MuiIconButton" variant="outlined" size="large" color="inherit">
                  <Avatar src={images.TimepickerGrey} variant="square" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={12}>
            <Grid container spacing={2}>
              <Grid size="auto">
                <Button className="MuiIconButton" variant="contained" size="medium" color="primary">
                  <Avatar src={images.LogoWhite} variant="square" />
                </Button>
              </Grid>
              <Grid size="auto">
                <Button className="MuiIconButton" variant="outlined" size="medium" color="primary">
                  <Avatar src={images.TimepickerGrey} variant="square" />
                </Button>
              </Grid>
              <Grid size="auto">
                <Button className="MuiIconButton" variant="outlined" size="medium" color="inherit">
                  <Avatar src={images.TimepickerGrey} variant="square" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={12}>
            <Grid container spacing={2}>
              <Grid size="auto">
                <Button className="MuiIconButton" variant="contained" size="small" color="primary">
                  <Avatar src={images.LogoWhite} variant="square" />
                </Button>
              </Grid>
              <Grid size="auto">
                <Button className="MuiIconButton" variant="outlined" size="small" color="primary">
                  <Avatar src={images.TimepickerGrey} variant="square" />
                </Button>
              </Grid>
              <Grid size="auto">
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
          <Grid size={12}>
            <Breadcrumbs separator={<Avatar src={images.ChevronRightGrey} variant="square" />}>
              <Link className="link link-light" key="1" to="/link1" onClick={(e) => { e.preventDefault() }}>
                Link 1
              </Link>
              <Typography variant="body2" key="3">
                Link 2
              </Typography>
            </Breadcrumbs>
          </Grid>
          <Grid size={12}>
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
    </>
  );
};

export default Components;

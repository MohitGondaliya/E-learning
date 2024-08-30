import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Avatar, Button, Card, CardContent, FormControl, Grid, IconButton, InputLabel, ListItemIcon, ListItemText, Menu, MenuItem, OutlinedInput, Tab, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import images from "../../assets/images";

interface CardData {
    icon: string;
    cardNumber: string;
    expiry: string;
    width?: number;
    height?: number;
}

interface UPIData {
    icon: string;
    appName: string;
}

interface CardAnchorState {
    [key: string]: HTMLElement | null;
}

interface UPIAnchorState {
    [key: string]: HTMLElement | null;
}

const PaymentMethod: React.FC = () => {

    const [tabValue, setTabValue] = React.useState('1');
    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    const [cardAnchorEl, setCardAnchorEl] = React.useState<CardAnchorState>({});
    const handleClickCard = (id: string, event: React.MouseEvent) => {
        setCardAnchorEl((prevState: CardAnchorState) => ({
            ...prevState,
            [id]: event.currentTarget as HTMLElement,
        }));
    };
    const handleCloseCard = (id: string) => {
        setCardAnchorEl(prevState => ({
            ...prevState,
            [id]: null,
        }));
    };

    const [editSavedCard, setEditSavedCard] = React.useState(false);
    const [addSavedCard, setAddSavedCard] = React.useState(false);
    const handleClickEditSavedCard = () => {
        setEditSavedCard(true)
    }
    const handleClickAddSavedCard = () => {
        setAddSavedCard(true)
    }
    const handleCloseSavedCard = () => {
        setEditSavedCard(false)
        setAddSavedCard(false)
    }

    const [upiAnchorEl, setUPIAnchorEl] = React.useState<UPIAnchorState>({});
    const handleClickUPI = (id: string, event: React.MouseEvent) => {
        setUPIAnchorEl((prevState: UPIAnchorState) => ({
            ...prevState,
            [id]: event.currentTarget as HTMLElement,
        }));
    };
    const handleCloseUPI = (id: string) => {
        setUPIAnchorEl(prevState => ({
            ...prevState,
            [id]: null,
        }));
    };

    const [editSavedUPI, setEditSavedUPI] = React.useState(false);
    const [addSavedUPI, setAddSavedUPI] = React.useState(false);
    const handleClickEditSavedUPI = () => {
        setEditSavedUPI(true)
    }
    const handleClickAddSavedUPI = () => {
        setAddSavedUPI(true)
    }
    const handleCloseSavedUPI = () => {
        setEditSavedUPI(false)
        setAddSavedUPI(false)
    }

    const [upiBank, setUPIBank] = React.useState<string[]>([]);
    const handleUPIBank = (
        event: React.MouseEvent<HTMLElement>,
        newInterest: string[],
    ) => {
        setUPIBank(newInterest);
    };

    const savedCards: CardData[] = [
        {
            icon: images.MasterCard,
            cardNumber: 'xxxx xxxx xxxx 4567',
            expiry: '02/23',
        },
        {
            icon: images.MasterCard,
            cardNumber: 'xxxx xxxx xxxx 1267',
            expiry: '02/23',
        },
        {
            icon: images.VisaCard,
            cardNumber: 'xxxx xxxx xxxx 5527',
            expiry: '02/23',
            width: 50,
            height: 16,
        },
    ];

    const savedUPIs: UPIData[] = [
        {
            icon: images.Gpay,
            appName: 'Google Pay',
        },
        {
            icon: images.Paytm,
            appName: 'Paytm',
        },
        {
            icon: images.Phonepay,
            appName: 'Phone Pay',
        },
    ];

    return (
        <HelmetProvider>
            <Helmet>
                <title>Payment Methods | E-Learning</title>
            </Helmet>
            <div className="page-title">
                <Typography variant="h4">Payment Methods</Typography>
            </div>

            <TabContext value={tabValue}>
                <div className="tabs-wrapper">
                    <TabList onChange={handleTabChange}>
                        <Tab label="Saved Cards" value="1" />
                        <Tab label="Saved UPIs" value="2" />
                    </TabList>
                    <TabPanel value="1" className="pb-0">
                        {editSavedCard ? (
                            <Card className="full-height-card">
                                <CardContent>
                                    <Grid container justifyContent="center" className="mb-lg-2">
                                        <Grid item xl={7}>
                                            <div className="d-flex align-items-center my-lg-2 mb-lg-2 mb-1 ms-n1">
                                                <IconButton className="me-4p" color="primary" onClick={handleCloseSavedCard}>
                                                    <Avatar src={images.ArrowLeftPrimary} variant="square" alt="Edit" />
                                                </IconButton>
                                                <Typography variant="h6" color="black">
                                                    Edit Debit/Credit Card
                                                </Typography>
                                            </div>
                                            <Grid container spacing={2.5}>
                                                <Grid item xs={12}>
                                                    <div className="form-group">
                                                        <InputLabel>Card Number <sup className="required">*</sup>  </InputLabel>
                                                        <FormControl fullWidth>
                                                            <OutlinedInput placeholder="Card Number" value="1266 8956 5656 4567" />
                                                        </FormControl>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <div className="form-group">
                                                        <InputLabel>Name on Card <sup className="required">*</sup>  </InputLabel>
                                                        <FormControl fullWidth>
                                                            <OutlinedInput placeholder="Name on Card" value="John Doe" />
                                                        </FormControl>
                                                    </div>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <div className="form-group">
                                                        <InputLabel>Expiry Date <sup className="required">*</sup>  </InputLabel>
                                                        <FormControl fullWidth>
                                                            <OutlinedInput placeholder="Expiry Date" value="11/2030" />
                                                        </FormControl>
                                                    </div>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <div className="form-group">
                                                        <InputLabel>Security Code <sup className="required">*</sup>  </InputLabel>
                                                        <FormControl fullWidth>
                                                            <OutlinedInput placeholder="Security Code" value="158" />
                                                        </FormControl>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container spacing={1.25}>
                                                        <Grid item>
                                                            <Button variant="contained" size="large" color="primary" sx={{ minWidth: 120 }} onClick={handleCloseSavedCard}>Save</Button>
                                                        </Grid>
                                                        <Grid item>
                                                            <Button variant="outlined" size="large" color="primary" sx={{ minWidth: 120 }} onClick={handleCloseSavedCard}>Cancel</Button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        ) : addSavedCard ? (
                            <Card className="full-height-card">
                                <CardContent>
                                    <Grid container justifyContent="center" className="mb-lg-2">
                                        <Grid item xl={7}>
                                            <div className="d-flex align-items-center my-lg-2 mb-lg-2 mb-1 ms-n1">
                                                <IconButton className="me-4p" color="primary" onClick={handleCloseSavedCard}>
                                                    <Avatar src={images.ArrowLeftPrimary} variant="square" alt="Edit" />
                                                </IconButton>
                                                <Typography variant="h6" color="black">
                                                    Add Debit/Credit Card
                                                </Typography>
                                            </div>
                                            <Grid container spacing={2.5}>
                                                <Grid item xs={12}>
                                                    <div className="form-group">
                                                        <InputLabel>Card Number <sup className="required">*</sup>  </InputLabel>
                                                        <FormControl fullWidth>
                                                            <OutlinedInput placeholder="Card Number" />
                                                        </FormControl>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <div className="form-group">
                                                        <InputLabel>Name on Card <sup className="required">*</sup>  </InputLabel>
                                                        <FormControl fullWidth>
                                                            <OutlinedInput placeholder="Name on Card" />
                                                        </FormControl>
                                                    </div>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <div className="form-group">
                                                        <InputLabel>Expiry Date <sup className="required">*</sup>  </InputLabel>
                                                        <FormControl fullWidth>
                                                            <OutlinedInput placeholder="Expiry Date" />
                                                        </FormControl>
                                                    </div>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <div className="form-group">
                                                        <InputLabel>Security Code <sup className="required">*</sup>  </InputLabel>
                                                        <FormControl fullWidth>
                                                            <OutlinedInput placeholder="Security Code" />
                                                        </FormControl>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container spacing={1.25}>
                                                        <Grid item>
                                                            <Button variant="contained" size="large" color="primary" sx={{ minWidth: 120 }} onClick={handleCloseSavedCard}>Save</Button>
                                                        </Grid>
                                                        <Grid item>
                                                            <Button variant="outlined" size="large" color="primary" sx={{ minWidth: 120 }} onClick={handleCloseSavedCard}>Cancel</Button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        )
                            : (
                                <Grid container spacing={3}>
                                    {savedCards.map((card, index) => {
                                        const cardId = `card_${index}`;
                                        return (
                                            <Grid item md={3} sm={4} xs={12} key={index}>
                                                <Card className="save-payment-card">
                                                    <CardContent>
                                                        <Button className="MuiIconButton" variant="text" size="small" color="primary" aria-haspopup="true"
                                                            aria-expanded={Boolean(cardAnchorEl[cardId]) ? 'true' : undefined} onClick={(event) => handleClickCard(cardId, event)}>
                                                            <Avatar src={images.MoreOutlinedPrimary} variant="rounded" alt="More" sx={{ width: 20, height: 20 }} />
                                                        </Button>
                                                        <Menu
                                                            anchorEl={cardAnchorEl[cardId]}
                                                            open={Boolean(cardAnchorEl[cardId])}
                                                            onClose={() => handleCloseCard(cardId)}
                                                            onClick={(event) => handleClickCard(cardId, event)} // This line may not be necessary
                                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                                        >
                                                            <MenuItem onClick={() => { handleCloseCard(cardId); handleClickEditSavedCard(); }}>
                                                                <ListItemIcon>
                                                                    <Avatar src={images.EditGrey} variant="square" alt="Edit" />
                                                                </ListItemIcon>
                                                                <ListItemText>
                                                                    Edit
                                                                </ListItemText>
                                                            </MenuItem>
                                                            <MenuItem onClick={() => handleCloseCard(cardId)}>
                                                                <ListItemIcon>
                                                                    <Avatar src={images.DeleteGrey} variant="square" alt="Badge" />
                                                                </ListItemIcon>
                                                                <ListItemText>
                                                                    Delete
                                                                </ListItemText>
                                                            </MenuItem>
                                                        </Menu>
                                                        <i className="icon">
                                                            <Avatar variant="square" src={card.icon} alt={card.cardNumber} sx={{ width: card.width || 30, height: card.height || 30 }} />
                                                        </i>
                                                        <Typography className="name mb-4p" variant="h6" color="text.primary">
                                                            {card.cardNumber}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            expires on {card.expiry}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        )
                                    }
                                    )}
                                    <Grid item md={3} sm={4} xs={12}>
                                        <Card className="add-new-card">
                                            <CardContent>
                                                <IconButton className="icon" color="primary" onClick={handleClickAddSavedCard}>
                                                    <Avatar src={images.AddPrimary} variant="square" alt="Edit" sx={{ width: 32, height: 32, }} />
                                                </IconButton>
                                                <Typography variant="body1" className="fw-700" color="text.priamry">
                                                    Add New Debit/Credit Card
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            )}
                    </TabPanel>
                    <TabPanel value="2" className="pb-0">
                        {editSavedUPI ? (
                            <Card className="full-height-card">
                                <CardContent>
                                    <Grid container justifyContent="center" className="mb-lg-2">
                                        <Grid item xl={7}>
                                            <div className="d-flex align-items-center my-lg-2 mb-lg-2 mb-1 ms-n1">
                                                <IconButton className="me-4p" color="primary" onClick={handleCloseSavedUPI}>
                                                    <Avatar src={images.ArrowLeftPrimary} variant="square" alt="Edit" />
                                                </IconButton>
                                                <Typography variant="h6" color="black">
                                                    Edit UPI
                                                </Typography>
                                            </div>
                                            <Grid container spacing={2.5}>
                                                <Grid item xs={12}>
                                                    <div className="form-group">
                                                        <FormControl fullWidth>
                                                            <OutlinedInput placeholder="Enter UPI ID" value="abcLorem@okhdfcbank" />
                                                        </FormControl>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <ToggleButtonGroup
                                                        size="small"
                                                        value={upiBank}
                                                        exclusive
                                                        onChange={handleUPIBank}
                                                    >
                                                        <ToggleButton value="hdfc" size="small" color="primary">
                                                            @okhdfcbank
                                                        </ToggleButton>
                                                        <ToggleButton value="sbi" size="small" color="primary">
                                                            @oksbibank
                                                        </ToggleButton>
                                                        <ToggleButton value="axis" size="small" color="primary">
                                                            @okaxisbank
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container spacing={1.25}>
                                                        <Grid item>
                                                            <Button variant="contained" size="large" color="primary" sx={{ minWidth: 120 }} onClick={handleCloseSavedUPI}>Save</Button>
                                                        </Grid>
                                                        <Grid item>
                                                            <Button variant="outlined" size="large" color="primary" sx={{ minWidth: 120 }} onClick={handleCloseSavedUPI}>Cancel</Button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        ) : addSavedUPI ? (
                            <Card className="full-height-card">
                                <CardContent>
                                    <Grid container justifyContent="center" className="mb-lg-2">
                                        <Grid item xl={7}>
                                            <div className="d-flex align-items-center my-lg-2 mb-lg-2 mb-1 ms-n1">
                                                <IconButton className="me-4p" color="primary" onClick={handleCloseSavedUPI}>
                                                    <Avatar src={images.ArrowLeftPrimary} variant="square" alt="Edit" />
                                                </IconButton>
                                                <Typography variant="h6" color="black">
                                                    Add UPI
                                                </Typography>
                                            </div>
                                            <Grid container spacing={2.5}>
                                                <Grid item xs={12}>
                                                    <div className="form-group">
                                                        <FormControl fullWidth>
                                                            <OutlinedInput placeholder="Enter UPI ID" />
                                                        </FormControl>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container spacing={1.25}>
                                                        <Grid item>
                                                            <Button variant="contained" size="large" color="primary" sx={{ minWidth: 120 }} onClick={handleCloseSavedUPI}>Save</Button>
                                                        </Grid>
                                                        <Grid item>
                                                            <Button variant="outlined" size="large" color="primary" sx={{ minWidth: 120 }} onClick={handleCloseSavedUPI}>Cancel</Button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        )
                            : (
                                <Grid container spacing={3}>
                                    {savedUPIs.map((upi, index) => {
                                        const upiId = `upi_${index}`;
                                        return (
                                            <Grid item lg={2} md={3} sm={4} xs={12} key={index}>
                                                <Card className="save-payment-card">
                                                    <CardContent>
                                                        <Button className="MuiIconButton" variant="text" size="small" color="primary" aria-haspopup="true"
                                                            aria-expanded={Boolean(upiAnchorEl[upiId]) ? 'true' : undefined} onClick={(event) => handleClickUPI(upiId, event)}>
                                                            <Avatar src={images.MoreOutlinedPrimary} variant="rounded" alt="More" sx={{ width: 20, height: 20 }} />
                                                        </Button>
                                                        <Menu
                                                            anchorEl={upiAnchorEl[upiId]}
                                                            open={Boolean(upiAnchorEl[upiId])}
                                                            onClose={() => handleCloseUPI(upiId)}
                                                            onClick={(event) => handleClickUPI(upiId, event)} // This line may not be necessary
                                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                                        >
                                                            <MenuItem onClick={() => { handleCloseUPI(upiId); handleClickEditSavedUPI(); }}>
                                                                <ListItemIcon>
                                                                    <Avatar src={images.EditGrey} variant="square" alt="Edit" />
                                                                </ListItemIcon>
                                                                <ListItemText>
                                                                    Edit
                                                                </ListItemText>
                                                            </MenuItem>
                                                            <MenuItem onClick={() => handleCloseUPI(upiId)}>
                                                                <ListItemIcon>
                                                                    <Avatar src={images.DeleteGrey} variant="square" alt="Badge" />
                                                                </ListItemIcon>
                                                                <ListItemText>
                                                                    Delete
                                                                </ListItemText>
                                                            </MenuItem>
                                                        </Menu>
                                                        <i className="icon">
                                                            <Avatar variant="square" src={upi.icon} alt={upi.appName} sx={{ width: 30, height: 30 }} />
                                                        </i>
                                                        <Typography className="name" variant="h6" color="text.primary">
                                                            {upi.appName}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        )
                                    }
                                    )}
                                    <Grid item lg={2} md={3} sm={4} xs={12}>
                                        <Card className="add-new-card">
                                            <CardContent>
                                                <IconButton className="icon" color="primary" onClick={handleClickAddSavedUPI}>
                                                    <Avatar src={images.AddPrimary} variant="square" alt="Edit" sx={{ width: 32, height: 32, }} />
                                                </IconButton>
                                                <Typography variant="body1" className="fw-700" color="text.priamry">
                                                    Add New UPI
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            )}
                    </TabPanel>
                </div>
            </TabContext >
        </HelmetProvider>
    )
}

export default PaymentMethod;
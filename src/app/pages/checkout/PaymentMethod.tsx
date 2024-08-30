import { Avatar, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React from "react";
import images from "../../assets/images";

interface UPICard {
    icon: string;
    appName: string;
    width?: number;
    height?: number;
}
interface Card {
    icon: string;
    cardNumber: string;
    cardExpiry: string;
    width?: number;
    height?: number;
}
interface Bank {
    icon: string;
    bankName: string;
    width?: number;
    height?: number;
}
interface OtherPayment {
    icon: string;
    paymentName: string;
    width?: number;
    height?: number;
}

const PaymentMethod: React.FC = () => {
    const [PaymentMethod, setPaymentMethod] = React.useState('UPI');
    const [NewUPI, setNewUPI] = React.useState(false);
    const [NewCard, setNewCard] = React.useState(false);

    const [selectedValue, setSelectedValue] = React.useState(0);
    const handleSelectedValueChange = (event: any) => {
        setSelectedValue(event.target.value);
    };

    const handlePaymentMethod = (
        event: React.MouseEvent<HTMLElement>,
        newPaymentMethod: string,
    ) => {
        if (newPaymentMethod !== null) {
            setPaymentMethod(newPaymentMethod);
        }
        setNewUPI(false);
        setNewCard(false);
        return newPaymentMethod;
    };

    const isPaymentMethod = (currentPaymentMethod: string, checkMethod: string) => {
        return currentPaymentMethod === checkMethod;
    };

    const savedUPIs: UPICard[] = [
        {
            icon: images.Gpay,
            appName: 'Google Pay',
        },
        {
            icon: images.Paytm,
            appName: 'Paytm',
            width: 34,
            height: 24,
        },
        {
            icon: images.Phonepay,
            appName: 'Phone Pay',
        },
    ];

    const savedCards: Card[] = [
        {
            icon: images.MasterCard,
            cardNumber: 'xxxx xxxx xxxx 4567',
            cardExpiry: '02/23',
        },
        {
            icon: images.VisaCard,
            cardNumber: 'xxxx xxxx xxxx 4577',
            cardExpiry: '02/23',
            width: 50,
            height: 16,
        },
        {
            icon: images.MasterCard,
            cardNumber: 'xxxx xxxx xxxx 5577',
            cardExpiry: '02/23',
        },
    ];

    const savedBanks: Bank[] = [
        {
            icon: images.HDFCBank,
            bankName: 'HDFC',
        },
        {
            icon: images.ICICIBank,
            bankName: 'ICICI',
        },
        {
            icon: images.SBIBank,
            bankName: 'SBI',
        },
        {
            icon: images.AXISBank,
            bankName: 'AXIS',
        },
        {
            icon: images.KOTAKBank,
            bankName: 'KOTAK',
        },
    ];

    const otherPayment: OtherPayment[] = [
        {
            icon: images.PaypalPrimary,
            paymentName: 'Paypal',
        },
    ];

    return (
        <div className="cart-main">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h6" color="black" className="mb-1">Choose Payment Method</Typography>
                    <ToggleButtonGroup
                        size="medium"
                        value={PaymentMethod}
                        onChange={handlePaymentMethod}
                        exclusive
                    >
                        <ToggleButton value="UPI" size="medium" color="primary">
                            <Avatar src={isPaymentMethod(PaymentMethod, 'UPI') ? images.UPIPrimary : images.UPIGrey} alt="UPI" sx={{ marginRight: 1 }} />
                            UPI
                        </ToggleButton>
                        <ToggleButton value="Card" size="medium" color="primary">
                            <Avatar src={isPaymentMethod(PaymentMethod, 'Card') ? images.CardPrimary : images.CardGrey} alt="Card" sx={{ marginRight: 1 }} />
                            Debit/Credit Card
                        </ToggleButton>
                        <ToggleButton value="Netbanking" size="medium" color="primary">
                            <Avatar src={isPaymentMethod(PaymentMethod, 'Netbanking') ? images.NetbankingPrimary : images.NetbankingGrey} alt="Netbanking" sx={{ marginRight: 1 }} />
                            Netbanking
                        </ToggleButton>
                        <ToggleButton value="Other" size="medium" color="primary">
                            Other
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid item xs={12}>
                    {isPaymentMethod(PaymentMethod, 'UPI') && (
                        <>
                            {!NewUPI ? (
                                <>
                                    <Typography variant="body1" color="black" className="mb-1 fw-700">Saved UPIs</Typography>
                                    <FormControl className="w-100">
                                        <RadioGroup
                                            row
                                            className="radio-card-wrapper"
                                            aria-labelledby="custom-radio-group-label"
                                            defaultValue={savedUPIs[0].appName}
                                            name="custom-radio-group"
                                        >
                                            <Grid container spacing={2}>
                                                {savedUPIs.map((upi, index) => {
                                                    const upiId = `upi_${index}`;
                                                    return (
                                                        <Grid lg={2} md={3} sm={4} xs={6} item key={upiId}>
                                                            <FormControlLabel
                                                                className="radio-card"
                                                                value={upi.appName}
                                                                control={<Radio size="small" className="radio-check" />}
                                                                label={
                                                                    <div>
                                                                        <i className="icon d-block mb-8p">
                                                                            <Avatar className="mx-auto" variant="square" src={upi.icon} alt={upi.icon} sx={{ width: upi.width || 30, height: upi.height || 30 }} />
                                                                        </i>
                                                                        <Typography variant="body1" color="text.primary">
                                                                            {upi.appName}
                                                                        </Typography>
                                                                    </div>
                                                                }
                                                            />
                                                        </Grid>
                                                    )
                                                })}
                                                <Grid item lg={2} md={3} sm={4} xs={6}>
                                                    <div className="radio-card MuiFormControlLabel-root" onClick={() => setNewUPI(true)}>
                                                        <i className="icon d-block mb-8p">
                                                            <Avatar className="mx-auto" variant="square" src={images.UPIGrey} alt="UPIGrey" />
                                                        </i>
                                                        <Typography variant="body1" color="text.primary">
                                                            Other UPI
                                                        </Typography>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </RadioGroup>
                                    </FormControl>
                                </>
                            ) : (
                                <>
                                    <Typography variant="body1" color="black" className="fw-700 mb-8p">Other UPI</Typography>
                                    <Grid container spacing={2.5}>
                                        <Grid item xs={12}>
                                            <div className="form-group">
                                                <FormControl fullWidth>
                                                    <OutlinedInput placeholder="Enter UPI ID" />
                                                </FormControl>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel control={<Checkbox size="medium" color="primary" defaultChecked />} label="Securely save this UPI for a faster checkout next time" />
                                        </Grid>
                                    </Grid>
                                </>
                            )}
                        </>
                    )}

                    {isPaymentMethod(PaymentMethod, 'Card') && (
                        <>
                            {!NewCard ? (
                                <>
                                    <Typography variant="body1" color="black" className="mb-1 fw-700">Saved Cards</Typography>
                                    <FormControl className="w-100">
                                        <RadioGroup
                                            row
                                            className="radio-card-wrapper"
                                            aria-labelledby="custom-radio-group-label"
                                            defaultValue={savedCards[0].cardNumber}
                                            name="custom-radio-group"
                                        >
                                            <Grid container spacing={2}>
                                                {savedCards.map((card, index) => {
                                                    const cardId = `card_${index}`;
                                                    return (
                                                        <Grid item md={3} sm={6} xs={12} key={cardId}>
                                                            <FormControlLabel
                                                                className="radio-card px-1 min-h-136p max-w-full"
                                                                value={card.cardNumber}
                                                                control={<Radio size="small" className="radio-check" />}
                                                                label={
                                                                    <div>
                                                                        <i className="icon d-block mb-8p">
                                                                            <Avatar className="mx-auto" variant="square" src={card.icon} alt={card.cardNumber} sx={{ width: card.width || 24, height: card.height || 24 }} />
                                                                        </i>
                                                                        <Typography className="name" variant="body1" color="text.primary">
                                                                            {card.cardNumber}
                                                                        </Typography>
                                                                        <Typography variant="body2" color="text.secondary">
                                                                            expires on {card.cardExpiry}
                                                                        </Typography>
                                                                    </div>
                                                                }
                                                            />
                                                        </Grid>
                                                    )
                                                })}
                                                <Grid item md={3} sm={6} xs={12}>
                                                    <div className="radio-card min-h-136p px-1 MuiFormControlLabel-root max-w-full" onClick={() => setNewCard(true)}>
                                                        <i className="icon d-block mb-8p">
                                                            <Avatar className="mx-auto" variant="square" src={images.CardGrey} alt="CardGrey" />
                                                        </i>
                                                        <Typography variant="body1" color="text.primary">
                                                            Other Debit/Credit Card
                                                        </Typography>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </RadioGroup>
                                    </FormControl>
                                </>
                            ) : (
                                <>
                                    <Typography variant="body1" color="black" className="fw-700 mb-8p">Other Debit/Credit Card</Typography>
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
                                    </Grid>
                                </>
                            )}
                        </>
                    )}

                    {isPaymentMethod(PaymentMethod, 'Netbanking') && (
                        <>
                            <Typography variant="body1" color="black" className="mb-1 fw-700">Internet Banking</Typography>
                            <FormControl className="w-100 mb-2">
                                <RadioGroup
                                    row
                                    className="radio-card-wrapper"
                                    aria-labelledby="custom-radio-group-label"
                                    defaultValue={savedBanks[0].bankName}
                                    name="custom-radio-group"
                                >
                                    <Grid container spacing={2}>
                                        {savedBanks.map((card, index) => {
                                            const cardId = `card_${index}`;
                                            return (
                                                <Grid item lg={2} md={3} sm={4} xs={6} key={cardId}>
                                                    <FormControlLabel
                                                        className="radio-card max-w-full"
                                                        value={card.bankName}
                                                        control={<Radio size="small" className="radio-check" />}
                                                        label={
                                                            <div>
                                                                <i className="icon d-block mb-8p">
                                                                    <Avatar className="mx-auto" variant="square" src={card.icon} alt={card.icon} sx={{ width: card.width || 24, height: card.height || 24 }} />
                                                                </i>
                                                                <Typography className="name" variant="body1" color="text.primary">
                                                                    {card.bankName}
                                                                </Typography>
                                                            </div>
                                                        }
                                                    />
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </RadioGroup>
                            </FormControl>
                            <div className="form-group">
                                <InputLabel>
                                    <Typography variant="body1" color="black" className="fw-700">
                                        Other Banks
                                    </Typography>
                                </InputLabel>
                                <FormControl fullWidth>
                                    <Select value={selectedValue}
                                        onChange={handleSelectedValueChange}>
                                        <MenuItem value={1}>Option 1</MenuItem>
                                        <MenuItem value={2}>Option 2</MenuItem>
                                        <MenuItem value={3}>Option 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </>
                    )}

                    {isPaymentMethod(PaymentMethod, 'Other') && (
                        <>
                            <Typography variant="body1" color="black" className="mb-1 fw-700">Other Payment Method</Typography>
                            <FormControl className="w-100 mb-2">
                                <RadioGroup
                                    row
                                    className="radio-card-wrapper"
                                    aria-labelledby="custom-radio-group-label"
                                    defaultValue={otherPayment[0].paymentName}
                                    name="custom-radio-group"
                                >
                                    <Grid container spacing={2}>
                                        {otherPayment.map((card, index) => {
                                            const cardId = `card_${index}`;
                                            return (
                                                <Grid item lg={2} md={3} sm={4} xs={6} key={cardId}>
                                                    <FormControlLabel
                                                        className="radio-card max-w-full"
                                                        value={card.paymentName}
                                                        control={<Radio size="small" className="radio-check" />}
                                                        label={
                                                            <div>
                                                                <i className="icon d-block mb-8p">
                                                                    <Avatar className="mx-auto" variant="square" src={card.icon} alt={card.icon} sx={{ width: card.width || 24, height: card.height || 24 }} />
                                                                </i>
                                                                <Typography className="name" variant="body1" color="text.primary">
                                                                    {card.paymentName}
                                                                </Typography>
                                                            </div>
                                                        }
                                                    />
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </RadioGroup>
                            </FormControl>
                        </>
                    )}
                </Grid>
            </Grid>
        </div >
    )
}

export default PaymentMethod;
import { Box, Button, Grid, MobileStepper, Step, StepLabel, Stepper, Typography } from "@mui/material";
import React from "react";
import OrderDetails from "./OrderDetails";
import BillingDetails from "./BillingDetails";
import PaymentMethod from "./PaymentMethod";
import ReviewPayment from "./ReviewPayment";
import Hidden from "../../shared/component/Hidden";

const Checkout: React.FC = () => {

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const steps = ['Order Details', 'Billing Address', 'Payment Method', 'Review & Pay'];

    const getStepContent = (step: React.ReactNode) => {
        switch (step) {
            case 0:
                return <OrderDetails />;
            case 1:
                return <BillingDetails />;
            case 2:
                return <PaymentMethod />;
            case 3:
                return <ReviewPayment />;
            default:
                return <div>Unknown Step</div>;
        }
    };

    return (
        <>
            <title>Checkout | E-Learning</title>
            <div className="cart-layout checkout-stepper">
                <div className="cart-main">
                    <div className="stepper-head">
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const stepProps: { completed?: boolean } = {};
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel>
                                            <Typography variant="caption" className="d-block fw-bold text-uppercase" color="text.secondary">Step {index + 1} <Hidden up="md"> / {steps.length}</Hidden></Typography>
                                            <Typography variant="body1" className="d-block fw-bold" color="text.primary">{label}</Typography>
                                        </StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                        <MobileStepper
                            variant="progress"
                            steps={5}
                            position="static"
                            activeStep={activeStep + 1}
                            sx={{ maxWidth: 400, flexGrow: 1 }}
                            nextButton={null}
                            backButton={null}
                        />
                    </div>
                    <Box className="stepper-body mx-auto" sx={{ maxWidth: { lg: 1020 } }}>
                        {getStepContent(activeStep)}
                    </Box>
                </div>
                {activeStep >= 0 && activeStep < steps.length - 1 && (
                    <div className="cart-footer">
                        <Grid container justifyContent="space-between" sx={{ maxWidth: { xl: 940 }, margin: '0 auto' }}>
                            <Grid size="auto">
                                {activeStep !== 0 && (
                                    <Button variant="outlined" color="primary" size="large" onClick={handleBack} disabled={activeStep === 0} sx={{ minWidth: 120 }}>
                                        Previous
                                    </Button>
                                )}
                            </Grid>
                            <Grid size="auto">
                                <Button variant="contained" color="primary" size="large" onClick={handleNext} disabled={activeStep === 5} sx={{ minWidth: 120 }}>
                                    Next
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                )}
            </div >
        </>
    )
}

export default Checkout;
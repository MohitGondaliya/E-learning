import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const Timer = () => {
    const [seconds, setSeconds] = useState(60);
    const [progress, setProgress] = useState(100);
    const [timerComplete, setTimerComplete] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds((prevSeconds) => prevSeconds - 1);
                setProgress((prevProgress) => (prevProgress <= 0 ? 100 : prevProgress - (100 / 60)));
            } else {
                clearInterval(interval);
                setTimerComplete(true);
            }
        }, 1000);

        // Clear interval on component unmount
        return () => {
            clearInterval(interval);
        };
    }, [seconds]);

    return (
        <>
            {!timerComplete && (
                <div className='timer ms-1'>
                    <CircularProgress variant="determinate" size={24} value={progress} />
                    <Typography variant="caption" component="div">
                        {seconds}
                    </Typography>
                </div>
            )}
        </>
    );
};

export default Timer;

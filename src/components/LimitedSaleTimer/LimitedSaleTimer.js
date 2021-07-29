import React, { useEffect, useState } from "react";

import './LimitedSaleTimer.scss';

const LimitedSaleTimer = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="Timer LimitedSaleTimer">
            <div className="TimerBody">
                <h3 className="TimerTitle">UNTIL SALE END</h3>
                <span className="TimerItem">
                    { days } <span className="orange">Days</span>
                </span>

                <span className="TimerItem">
                    { hours } <span className="orange">Hours</span>
                </span>

                <span className="TimerItem">
                    { minutes } <span className="orange">Minutes</span>
                </span>

                <span className="TimerItem">
                    { seconds } <span className="orange">Seconds</span>
                </span>
            </div>
        </div>
    );
};

const LimitedSaleTimerContainer = ({ startTime }) => {
    const [ currentTime, setCurrentTime ] = useState(new Date());

    const reduceTime = () => {
        const saveTimeInStorage = (time) => {
            localStorage.setItem('saleTimer', String(time));
            localStorage.setItem('saleTimerDiff', String(Date.now()));
        };

        setCurrentTime(prevTime => {
            const dateTime = prevTime.getTime() - 1000;
            saveTimeInStorage(dateTime);
            return new Date(dateTime);
        });
    };

    const initializeTime = () => {
        const getTimeFromStorage = () => {
            const storedTimer = +localStorage.getItem('saleTimer');
            const storedTimerDiff = +localStorage.getItem('saleTimerDiff');
            const res = storedTimer - (Date.now() - storedTimerDiff);

            return (res > 0) ? res : false;
        };

        const dateTime = getTimeFromStorage() || startTime;

        return new Date(dateTime);
    };

    useEffect(() => {
        setCurrentTime(initializeTime());
        const timer = setInterval(reduceTime, 1000)
        return () => clearInterval(timer);
    }, [startTime]);

    return (
        <LimitedSaleTimer
        days={currentTime.getDay()}
        hours={currentTime.getHours()}
        minutes={currentTime.getMinutes()}
        seconds={currentTime.getSeconds()} />
    );
};

export default LimitedSaleTimerContainer;
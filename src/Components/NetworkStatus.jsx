import React, { useState, useEffect } from 'react';

const NetworkStatus = () => {
    const [status, setStatus] = useState(true);

    useEffect(() => {
        function changeStatus() {
            setStatus(navigator.onLine);
        }
        window.addEventListener("online", changeStatus);
        window.addEventListener("offline", changeStatus);
        return () => {
            window.removeEventListener("online", changeStatus);
            window.removeEventListener("offline", changeStatus);
        };
    }, []);

    return status ? "Online" : "Offline";
};

export default NetworkStatus
export const errorDisplay = (error, setNotification, setNotificationType) => {
    console.log(error);
    setNotification(error);
    setNotificationType('fail');
}

export const resetNotifications = (setNotification, setNotificationType) => {
    setTimeout(() => {
        setNotification(null);
        setNotificationType('success');
    }, 5000)
}
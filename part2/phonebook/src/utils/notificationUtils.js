export const errorDisplay = (error, setNotification, setNotificationType) => {
    console.error(error);
    setNotification(`Oops! Contact has already been removed from server.`);
    setNotificationType('fail');
}

export const resetNotifications = (setNotification, setNotificationType) => {
    setTimeout(() => {
        setNotification(null);
        setNotificationType('success');
    }, 4000)
}
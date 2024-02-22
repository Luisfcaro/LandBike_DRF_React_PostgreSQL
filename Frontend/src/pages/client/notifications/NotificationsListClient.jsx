import React from "react";
import { useNotifications } from "../../../hooks/useNotifications";
import NotificationListCard from "../../../components/client/notifications/NotificationListCard";

const NotificationsListClient = () => {

    const { notifications, useReadNotification } = useNotifications();

    return (
        <div className="row ">
            {notifications.map((notification) => (
                <NotificationListCard key={notification.id} notification={notification}  read_notification={(id) => useReadNotification(id)}/>
            ))
            }
        </div>
    )
}

export default NotificationsListClient;
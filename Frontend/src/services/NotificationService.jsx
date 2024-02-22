import api from './Api';

const NotificationService = {

    getNotifications: async () => {
        try {
            const response = await api().get("rest/all_notifications/");
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    readNotification: async (id) => {
        try {
            const response = await api().post(`rest/read_notification/${id}`);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

}

export default NotificationService;
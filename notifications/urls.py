from django.urls import path, include
from rest_framework import routers
from .views import NotificationViewSet

router = routers.DefaultRouter()
router.register(r'notifications', NotificationViewSet, 'notifications')

urlpatterns = [
    path('rest/', include(router.urls)),
    path('rest/notify_incidence/', NotificationViewSet.as_view({'post': 'create_notification'})),
    path('rest/read_notification/<str:notification_id>', NotificationViewSet.as_view({'post': 'read_notification'})),
    path('rest/delete_all_notifications/', NotificationViewSet.as_view({'post': 'delete_all_notifications'})),
    path('rest/all_notifications/', NotificationViewSet.as_view({'get': 'all_user_notifications'})),

]

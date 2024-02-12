from django.urls import path, include
from rest_framework import routers
from users import views
from .views import UserViewSet, UserInfoViewSet

router = routers.DefaultRouter()

router.register(r'users', views.UserViewSet, 'users')

urlpatterns = [
    #Users
    path('rest/users/', include(router.urls)),
    path('rest/user/', UserInfoViewSet.as_view({'get': 'GetActualUser'})),
    path('rest/user/<str:uuid>/', include(router.urls)),
    path('rest/register/', UserViewSet.as_view({'post': 'register'})),
    path('rest/login/', UserViewSet.as_view({'post': 'login'})),
    path('rest/refreshtoken/', UserInfoViewSet.as_view({'post': 'refresh_token'})),
]


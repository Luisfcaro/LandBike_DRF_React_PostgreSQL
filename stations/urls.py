from django.urls import path, include
from rest_framework import routers
from stations import views

router = routers.DefaultRouter()
router.register(r'stations', views.StationViewSet, 'stations')

urlpatterns = [
    path('rest/', include(router.urls))
]
from django.urls import path, include
from rest_framework import routers
from bikes import views

router = routers.DefaultRouter()
router.register(r'bikes', views.BikeViewSet, 'bikes')

urlpatterns = [
    path('rest/', include(router.urls))
]
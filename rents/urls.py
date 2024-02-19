from django.urls import path, include
from rest_framework import routers
from rents import views
from .views import RentViewSet

router = routers.DefaultRouter()
router.register(r'rents', views.RentViewSet, 'rents')

urlpatterns = [
    path('rest/', include(router.urls)),
    path('rest/return_bike/', RentViewSet.as_view({'post': 'return_bike'})),
    path('rest/rent_bike/', RentViewSet.as_view({'post': 'rent_bike'}))
]


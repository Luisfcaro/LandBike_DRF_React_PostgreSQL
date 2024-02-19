from django.urls import path, include
from rest_framework import routers
from incidents import views
from .views import IncidentViewSet

router = routers.DefaultRouter()
router.register(r'incidents', views.IncidentViewSet, 'incidents')

urlpatterns = [
    path('rest/', include(router.urls)),
    path('rest/resolve_incident/', IncidentViewSet.as_view({'post': 'resolve_incident'})),
    path('rest/create_incident/', IncidentViewSet.as_view({'post': 'create_incident'})),
]

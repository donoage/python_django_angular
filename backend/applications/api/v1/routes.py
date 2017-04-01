from rest_framework import routers
from viewsets import InsuranceViewSet

api_router = routers.SimpleRouter()
api_router.register(r'insurances', InsuranceViewSet)

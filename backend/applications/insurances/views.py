from rest_framework import generics, permissions
from backend.applications.api.v1.serializers import InsuranceSerializer
from backend.applications.insurances.models import Insurance


class InsuranceList(generics.ListCreateAPIView):
    model = Insurance
    queryset = Insurance.objects.all()
    serializer_class = InsuranceSerializer
    permission_classes = [
        permissions.AllowAny
    ]

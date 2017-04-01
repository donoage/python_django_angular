from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from backend.applications.insurances.models import Insurance
from serializers import InsuranceSerializer


class InsuranceViewSet(viewsets.ModelViewSet):
    queryset = Insurance.objects.all()
    serializer_class = InsuranceSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            Insurance.objects.create_insurance(**serializer.validated_data)
            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

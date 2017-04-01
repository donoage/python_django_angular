from rest_framework.serializers import ModelSerializer
from backend.applications.insurances.models import Insurance


class InsuranceSerializer(ModelSerializer):
    class Meta:
        model = Insurance
        fields = ('id', 'title', 'description')

        def create(self, validated_data):
            return Insurance.objects.create(**validated_data)

        def update(self, instance, validated_data):
            instance.title = validated_data.get('title', instance.title)
            instance.description = validated_data.get('description', instance.description)
            instance.save()
            return instance

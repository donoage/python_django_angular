from __future__ import unicode_literals

from django.db import models


class InsuranceManager(models.Manager):
    def create_insurance(self, title, description):
        if not title:
            raise ValueError('Insurances must have a title')
        if not description:
            raise ValueError('Insurances must have a description')

        insurance = self.model(
            title=title, description=description
        )

        insurance.save()

        return insurance


class Insurance(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=750)

    objects = InsuranceManager()

    def __str__(self):
        return self.title

from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView
from backend.applications.insurances.views import InsuranceList
from rest_framework.documentation import include_docs_urls

from backend.applications.api.v1.routes import api_router

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # API:V1
    url(r'^api/v1/', include(api_router.urls)),
    # Web App Entry
    url(r'^$', TemplateView.as_view(template_name="app/index.html"), name='index'),
    url(r'^docs/', include_docs_urls(title='My API title'))
]

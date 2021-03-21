from django.urls import path

from .views import IndexPageView

app_name = 'accounts'

urlpatterns = [
    path('', IndexPageView.as_view()),
]

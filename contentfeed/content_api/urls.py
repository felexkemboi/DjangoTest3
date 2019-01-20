from django.urls import path

from content_api.views import ItemViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('item', ItemViewSet, base_name='item')

urlpatterns = router.urls

from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from .views import *

router = routers.SimpleRouter()
router.register('films-genres', FilmGenreViewSet, basename='films-genres')
router.register('series-genres', SeriesGenreViewSet, basename='series-genres')
router.register('anime-genres', AnimeGenreViewSet, basename='anime-genres')
router.register('cartoons-genres', CartoonGenreViewSet, basename='cartoons-genres')
router.register('actors', ActorViewSet, basename='actors')
router.register('directors', DirectorViewSet, basename='directors')
router.register('marks', MarkViewSet, basename='marks')
router.register('watchLinks', WatchLinkViewSet, basename='watchLinks')
router.register('films', FilmViewSet, basename='films')
router.register('series', SeriesViewSet, basename='series')
router.register('anime', AnimeViewSet, basename='anime')
router.register('cartoons', CartoonViewSet, basename='cartoons')

urlpatterns = []
urlpatterns += router.urls
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

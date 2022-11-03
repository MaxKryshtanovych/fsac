from rest_framework.filters import OrderingFilter, SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets

from .serializers import *
from .services import *


class ActorViewSet(viewsets.ModelViewSet):

    serializer_class = ActorListSerializer
    queryset = Actor.objects.all()
    ordering_fields = ['name']
    ordering = ['name']
    lookup_field = 'slug'

    action_to_serializer = {
        "list": ActorListSerializer,
        "retrieve": ActorDetailSerializer
    }

    def get_serializer_class(self, *args, **kwargs):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class DirectorViewSet(viewsets.ModelViewSet):

    serializer_class = DirectorListSerializer
    queryset = Director.objects.all()
    ordering_fields = ['name']
    ordering = ['name']
    lookup_field = 'slug'

    action_to_serializer = {
        "list": DirectorListSerializer,
        "retrieve": DirectorDetailSerializer
    }

    def get_serializer_class(self, *args, **kwargs):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class FilmGenreViewSet(viewsets.ModelViewSet):

    serializer_class = FilmGenreSerializer
    queryset = FilmGenre.objects.all()
    filter_backends = [OrderingFilter]
    ordering = ['name']


class SeriesGenreViewSet(viewsets.ModelViewSet):

    serializer_class = SeriesGenreSerializer
    queryset = SeriesGenre.objects.all()
    filter_backends = [OrderingFilter]
    ordering = ['name']


class AnimeGenreViewSet(viewsets.ModelViewSet):

    serializer_class = AnimeGenreSerializer
    queryset = AnimeGenre.objects.all()
    filter_backends = [OrderingFilter]
    ordering = ['name']


class CartoonGenreViewSet(viewsets.ModelViewSet):

    serializer_class = CartoonGenreSerializer
    queryset = CartoonGenre.objects.all()
    filter_backends = [OrderingFilter]
    ordering = ['name']


class MarkViewSet(viewsets.ModelViewSet):

    serializer_class = MarkSerializer
    queryset = Mark.objects.all()


class WatchLinkViewSet(viewsets.ModelViewSet):

    serializer_class = WatchLinkSerializer
    queryset = WatchLink.objects.all()


class FilmViewSet(viewsets.ModelViewSet):

    serializer_class = FilmSerializer
    queryset = Film.objects.all()
    pagination_class = FsacPagination
    filter_backends = [DjangoFilterBackend, OrderingFilter, SearchFilter]
    search_fields = ['^title']
    filterset_fields = ['year', 'genre__name']
    ordering_fields = ['title', 'year', 'rating', 'created']
    ordering = ['-created']
    lookup_field = 'slug'


class SeriesViewSet(viewsets.ModelViewSet):

    serializer_class = SeriesSerializer
    queryset = Series.objects.all()
    pagination_class = FsacPagination
    filter_backends = [DjangoFilterBackend, OrderingFilter, SearchFilter]
    search_fields = ['^title']
    filterset_fields = ['year', 'genre__name']
    ordering_fields = ['title', 'year', 'rating', 'created']
    ordering = ['-created']
    lookup_field = 'slug'


class AnimeViewSet(viewsets.ModelViewSet):

    serializer_class = AnimeSerializer
    queryset = Anime.objects.all()
    pagination_class = FsacPagination
    filter_backends = [DjangoFilterBackend, OrderingFilter, SearchFilter]
    search_fields = ['^title']
    filterset_fields = ['year', 'genre__name']
    ordering_fields = ['title', 'year', 'rating', 'created']
    ordering = ['-created']
    lookup_field = 'slug'


class CartoonViewSet(viewsets.ModelViewSet):

    serializer_class = CartoonSerializer
    queryset = Cartoon.objects.all()
    pagination_class = FsacPagination
    filter_backends = [DjangoFilterBackend, OrderingFilter, SearchFilter]
    search_fields = ['^title']
    filterset_fields = ['year', 'genre__name']
    ordering_fields = ['title', 'year', 'rating', 'created']
    ordering = ['-created']
    lookup_field = 'slug'

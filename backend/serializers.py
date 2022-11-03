from rest_framework import serializers
from .models import *


class ActorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = '__all__'


class DirectorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Director
        fields = '__all__'


class FilmGenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = FilmGenre
        fields = '__all__'


class SeriesGenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = SeriesGenre
        fields = '__all__'


class AnimeGenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnimeGenre
        fields = '__all__'


class CartoonGenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartoonGenre
        fields = '__all__'


class MarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mark
        fields = '__all__'


class WatchLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = WatchLink
        fields = '__all__'


class FilmSerializer(serializers.ModelSerializer):
    director = DirectorListSerializer(read_only=True, many=True)
    actor = ActorListSerializer(read_only=True, many=True)
    genre = FilmGenreSerializer(many=True, read_only=True)
    watch_url = WatchLinkSerializer(many=True, read_only=True)
    rating = MarkSerializer(many=False, read_only=True)

    class Meta:
        model = Film
        fields = '__all__'


class SeriesSerializer(serializers.ModelSerializer):
    director = DirectorListSerializer(read_only=True, many=True)
    actor = ActorListSerializer(read_only=True, many=True)
    genre = SeriesGenreSerializer(many=True, read_only=True)
    watch_url = WatchLinkSerializer(many=True, read_only=True)
    rating = MarkSerializer(many=False, read_only=True)

    class Meta:
        model = Series
        fields = '__all__'


class AnimeSerializer(serializers.ModelSerializer):
    genre = AnimeGenreSerializer(many=True, read_only=True)
    watch_url = WatchLinkSerializer(many=True, read_only=True)
    rating = MarkSerializer(many=False, read_only=True)

    class Meta:
        model = Anime
        fields = '__all__'


class CartoonSerializer(serializers.ModelSerializer):
    genre = CartoonGenreSerializer(many=True, read_only=True)
    watch_url = WatchLinkSerializer(many=True, read_only=True)
    rating = MarkSerializer(many=False, read_only=True)

    class Meta:
        model = Cartoon
        fields = '__all__'


class ActorDetailSerializer(serializers.ModelSerializer):
    films_by_person = serializers.SerializerMethodField()
    series_by_person = serializers.SerializerMethodField()

    class Meta:
        model = Actor
        fields = '__all__'

    @staticmethod
    def get_films_by_person(obj):
        return FilmSerializer(Film.objects.filter(actor=obj), many=True).data

    @staticmethod
    def get_series_by_person(obj):
        return SeriesSerializer(Series.objects.filter(actor=obj), many=True).data


class DirectorDetailSerializer(serializers.ModelSerializer):
    films_by_person = serializers.SerializerMethodField()
    series_by_person = serializers.SerializerMethodField()

    class Meta:
        model = Director
        fields = '__all__'

    @staticmethod
    def get_films_by_person(obj):
        return FilmSerializer(Film.objects.filter(director=obj), many=True).data

    @staticmethod
    def get_series_by_person(obj):
        return SeriesSerializer(Series.objects.filter(director=obj), many=True).data

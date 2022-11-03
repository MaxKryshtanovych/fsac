from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models
from django.utils.text import slugify
from django_resized import ResizedImageField


class Person(models.Model):
    name = models.CharField(max_length=128, verbose_name="Ім'я")
    surname = models.CharField(max_length=128, verbose_name="Прізвище")
    avatar = ResizedImageField(null=True, blank=True, upload_to="persons/%Y/%m/%d")
    slug = models.SlugField(unique=True, null=False, blank=True, default='')

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        self.slug = slugify(f'{self.name}-{self.surname}')
        super(Person, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} {self.surname}"


class Actor(Person):
    pass


class Director(Person):
    pass


class Genre(models.Model):
    name = models.CharField(max_length=128, verbose_name="Назва жанру")

    class Meta:
        abstract = True

    def __str__(self):
        return self.name


class FilmGenre(Genre):
    pass


class SeriesGenre(Genre):
    pass


class AnimeGenre(Genre):
    pass


class CartoonGenre(Genre):
    pass


class Mark(models.Model):
    value = models.FloatField(null=False, blank=False, default=0, verbose_name="Оцінка")

    def __str__(self):
        return f"{self.value}"


class WatchLink(models.Model):
    value = models.URLField(max_length=1024, verbose_name="Посилання")
    desc = models.CharField(max_length=128, verbose_name="Озвучка")


class Fsac(models.Model):
    title = models.CharField(max_length=128, verbose_name="Назва")
    poster = ResizedImageField(null=True, blank=True, upload_to="posters/%Y/%m/%d")
    year = models.PositiveSmallIntegerField(verbose_name="Рік")
    rating = models.ForeignKey(Mark, null=True, on_delete=models.SET_NULL, verbose_name="Рейтинг")
    desc = models.TextField(max_length=2048, verbose_name="Опис")
    director = models.ManyToManyField(Director, blank=True, verbose_name="Режисер-и")
    actor = models.ManyToManyField(Actor, blank=True, verbose_name="Актор-и")
    trailer = models.CharField(max_length=256, null=True, blank=True, verbose_name="Трейлер")
    watch_url = models.ManyToManyField(WatchLink, blank=True, verbose_name="Посилання для перегляду")
    slug = models.SlugField(null=False, blank=True, default='')
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        self.slug = slugify(f'{self.title}-{self.year}')
        super(Fsac, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.title}, {self.year}"


class Film(Fsac):
    genre = models.ManyToManyField(FilmGenre, verbose_name="Жанр-и")


class Series(Fsac):
    genre = models.ManyToManyField(SeriesGenre, verbose_name="Жанр-и")


class Anime(Fsac):
    genre = models.ManyToManyField(AnimeGenre, verbose_name="Жанр-и")


class Cartoon(Fsac):
    genre = models.ManyToManyField(CartoonGenre, verbose_name="Жанр-и")

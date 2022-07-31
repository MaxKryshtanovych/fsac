from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models


class Person(models.Model):
    name = models.CharField(max_length=128, verbose_name="Ім'я")
    surname = models.CharField(max_length=128, verbose_name="Прізвище")
    avatar = models.ImageField(null=True, blank=True, upload_to="persons/%Y/%m/%d")

    class Meta:
        abstract = True

    def __str__(self):
        fullname = self.name + ' ' + self.surname
        return fullname


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
    MARK_CHOICES = (
        (0, '0'),
        (1, '1'),
        (2, '2'),
        (3, '3'),
        (4, '4'),
        (5, '5'),
        (6, '6'),
        (7, '7'),
        (8, '8'),
        (9, '9'),
        (10, '10'),
    )
    value = models.IntegerField(choices=MARK_CHOICES, default=0, verbose_name="Оцінка")

    def __str__(self):
        return f"{self.value}"


class Shot(models.Model):
    image = models.ImageField(null=True, blank=True, upload_to="shots/%Y/%m/%d")


class WatchUrl(models.Model):
    value = models.URLField(max_length=1024, verbose_name="Посилання")
    desc = models.CharField(max_length=128, verbose_name="Опис")


class Fsac(models.Model):
    title = models.CharField(max_length=128, verbose_name="Назва")
    poster = models.ImageField(null=True, blank=True, upload_to="posters/%Y/%m/%d")
    year = models.PositiveSmallIntegerField(verbose_name="Рік")
    rating = models.ForeignKey(Mark, null=True, on_delete=models.SET_NULL, verbose_name="Рейтинг")
    shot = models.ManyToManyField(Shot, null=True, blank=True, verbose_name="Кадри")
    desc = models.TextField(max_length=2048, verbose_name="Опис")
    comment = models.CharField(max_length=256, blank=True, verbose_name="Комент")
    director = models.ManyToManyField(Director, blank=True, verbose_name="Режисер-и")
    actor = models.ManyToManyField(Actor, blank=True, verbose_name="Актор-и")
    watch_url = models.ManyToManyField(WatchUrl, blank=True, verbose_name="Посилання для перегляду")
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True

    def __str__(self):
        return self.title


class Film(Fsac):
    genre = models.ManyToManyField(FilmGenre, verbose_name="Жанр-и")


class Series(Fsac):
    genre = models.ManyToManyField(SeriesGenre, verbose_name="Жанр-и")


class Anime(Fsac):
    genre = models.ManyToManyField(AnimeGenre, verbose_name="Жанр-и")


class Cartoon(Fsac):
    genre = models.ManyToManyField(CartoonGenre, verbose_name="Жанр-и")

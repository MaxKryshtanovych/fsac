# Generated by Django 4.0.4 on 2022-07-17 11:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Actor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128, verbose_name="Ім'я")),
                ('surname', models.CharField(max_length=128, verbose_name='Прізвище')),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='persons/%Y/%m/%d')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='AnimeGenre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128, verbose_name='Назва жанру')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='CartoonGenre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128, verbose_name='Назва жанру')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Director',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128, verbose_name="Ім'я")),
                ('surname', models.CharField(max_length=128, verbose_name='Прізвище')),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='persons/%Y/%m/%d')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='FilmGenre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128, verbose_name='Назва жанру')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Mark',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.IntegerField(choices=[(0, '0'), (1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5'), (6, '6'), (7, '7'), (8, '8'), (9, '9'), (10, '10')], default=0, verbose_name='Оцінка')),
            ],
        ),
        migrations.CreateModel(
            name='SeriesGenre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128, verbose_name='Назва жанру')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Shot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='shots/%Y/%m/%d')),
            ],
        ),
        migrations.CreateModel(
            name='WatchUrl',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.URLField(max_length=1024, verbose_name='Посилання')),
                ('desc', models.CharField(max_length=128, verbose_name='Опис')),
            ],
        ),
        migrations.CreateModel(
            name='Series',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='Назва')),
                ('poster', models.ImageField(blank=True, null=True, upload_to='posters/%Y/%m/%d')),
                ('year', models.PositiveSmallIntegerField(verbose_name='Рік')),
                ('desc', models.TextField(max_length=2048, verbose_name='Опис')),
                ('comment', models.CharField(blank=True, max_length=256, verbose_name='Комент')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('actor', models.ManyToManyField(blank=True, to='backend.actor', verbose_name='Актор-и')),
                ('director', models.ManyToManyField(blank=True, to='backend.director', verbose_name='Режисер-и')),
                ('genre', models.ManyToManyField(to='backend.seriesgenre', verbose_name='Жанр-и')),
                ('rating', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='backend.mark', verbose_name='Рейтинг')),
                ('shot', models.ManyToManyField(blank=True, null=True, to='backend.shot', verbose_name='Кадри')),
                ('watch_url', models.ManyToManyField(blank=True, to='backend.watchurl', verbose_name='Посилання для перегляду')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Film',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='Назва')),
                ('poster', models.ImageField(blank=True, null=True, upload_to='posters/%Y/%m/%d')),
                ('year', models.PositiveSmallIntegerField(verbose_name='Рік')),
                ('desc', models.TextField(max_length=2048, verbose_name='Опис')),
                ('comment', models.CharField(blank=True, max_length=256, verbose_name='Комент')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('actor', models.ManyToManyField(blank=True, to='backend.actor', verbose_name='Актор-и')),
                ('director', models.ManyToManyField(blank=True, to='backend.director', verbose_name='Режисер-и')),
                ('genre', models.ManyToManyField(to='backend.filmgenre', verbose_name='Жанр-и')),
                ('rating', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='backend.mark', verbose_name='Рейтинг')),
                ('shot', models.ManyToManyField(blank=True, null=True, to='backend.shot', verbose_name='Кадри')),
                ('watch_url', models.ManyToManyField(blank=True, to='backend.watchurl', verbose_name='Посилання для перегляду')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Cartoon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='Назва')),
                ('poster', models.ImageField(blank=True, null=True, upload_to='posters/%Y/%m/%d')),
                ('year', models.PositiveSmallIntegerField(verbose_name='Рік')),
                ('desc', models.TextField(max_length=2048, verbose_name='Опис')),
                ('comment', models.CharField(blank=True, max_length=256, verbose_name='Комент')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('actor', models.ManyToManyField(blank=True, to='backend.actor', verbose_name='Актор-и')),
                ('director', models.ManyToManyField(blank=True, to='backend.director', verbose_name='Режисер-и')),
                ('genre', models.ManyToManyField(to='backend.cartoongenre', verbose_name='Жанр-и')),
                ('rating', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='backend.mark', verbose_name='Рейтинг')),
                ('shot', models.ManyToManyField(blank=True, null=True, to='backend.shot', verbose_name='Кадри')),
                ('watch_url', models.ManyToManyField(blank=True, to='backend.watchurl', verbose_name='Посилання для перегляду')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Anime',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='Назва')),
                ('poster', models.ImageField(blank=True, null=True, upload_to='posters/%Y/%m/%d')),
                ('year', models.PositiveSmallIntegerField(verbose_name='Рік')),
                ('desc', models.TextField(max_length=2048, verbose_name='Опис')),
                ('comment', models.CharField(blank=True, max_length=256, verbose_name='Комент')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('actor', models.ManyToManyField(blank=True, to='backend.actor', verbose_name='Актор-и')),
                ('director', models.ManyToManyField(blank=True, to='backend.director', verbose_name='Режисер-и')),
                ('genre', models.ManyToManyField(to='backend.animegenre', verbose_name='Жанр-и')),
                ('rating', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='backend.mark', verbose_name='Рейтинг')),
                ('shot', models.ManyToManyField(blank=True, null=True, to='backend.shot', verbose_name='Кадри')),
                ('watch_url', models.ManyToManyField(blank=True, to='backend.watchurl', verbose_name='Посилання для перегляду')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
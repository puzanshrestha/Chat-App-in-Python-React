# Generated by Django 2.1.4 on 2019-01-08 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('chat', '0002_delete_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('chatRoom', models.CharField(max_length=50)),
            ],
        ),
    ]

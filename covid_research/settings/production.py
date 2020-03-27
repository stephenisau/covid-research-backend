from .base import *

DEBUG = False
ALLOWED_HOSTS = ['*']

with open('/etc/fund_covid/secret.txt') as f:
    SECRET_KEY = f.read().strip()

with open('/etc/fund_covid/db_password.txt') as f:
    db_password = f.read().strip()

with open('/etc/fund_covid/db_host.txt') as f:
    db_host = f.read().strip()

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": "covid_research",
        "USER": "fcpostgres",
        "PASSWORD": db_password,
        "HOST": db_host,
        "PORT": "5432",
    }
}

STATIC_ROOT = '/var/www/fund_covid/static/'

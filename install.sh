set -ex
sudo apt update
sudo apt install -y python3-pip nginx libpq-dev
pip3 install virtualenv uwsgi
virtualenv venv

sudo mkdir -p /etc/uwsgi/sites
sudo cp wsgi.ini /etc/uwsgi/sites/covid-research-backend.ini
sudo cp nginx-site.conf /etc/nginx/sites-available/covid-research-backend
sudo ln -sf /etc/nginx/sites-available/covid-research-backend /etc/nginx/sites-enabled/covid-research-backend
sudo rm -f /etc/nginx/sites-enabled/default
sudo cp uwsgi.service /etc/systemd/system/uwsgi.service

sudo mkdir -p /var/www/fund_covid/static/
sudo chown ubuntu /var/www/fund_covid/static/

sudo systemctl daemon-reload
sudo systemctl restart nginx
sudo systemctl start uwsgi
sudo systemctl enable nginx
sudo systemctl enable uwsgi

export DJANGO_SETTINGS_MODULE=covid_research.settings.production
source ./venv/bin/activate
pip install -r requirements.txt
python manage.py collectstatic --noinput
sudo chown -R ubuntu:www-data /var/www/fund_covid/static

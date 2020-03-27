set -ex
apt install -y python3-pip nginx
pip3 install virtualenv uwsgi
virtualenv venv

mkdir -p /etc/uwsgi/sites
cp wsgi.ini /etc/uwsgi/sites/covid-research-backend.ini
cp nginx-site.conf /etc/nginx/sites-available/covid-research-backend
ln -s /etc/nginx/sites-available/covid-research-backend /etc/nginx/sites-enabled/covid-research-backend
cp uwsgi.service /etc/systemd/system/uwsgi.service

mkdir -p /var/www/fund_covid/static/

systemctl daemon-reload
systemctl restart nginx
systemctl start uwsgi
systemctl enable nginx
systemctl enable uwsgi

source venv/bin/activate
pip install -r requirements.txt
python manage.py collectstatic

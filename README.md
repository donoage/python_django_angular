## Pre-reqs
- Python 2.x
- a virtual Python environment (See step 0)
- Django 1.9.x (pip install django)
- npm 2.15.8+
- Webpack 1.13.x (sudo npm i -g webpack)
- ESLint 2.13.1+ (sudo npm i -g eslint)
- NodeJS 4.4.7+


## Getting started

##### Starting backend server,
from `root/`,
```
$ mkvirtualenv mysite
```
```
$ sudo pip install -r backend/requirements.txt
```
```
$ python manage.py runserver --setting=zipari.settings.dev
```

##### Bundling up frontend package,
from `frontend/`
```
$ npm install
```
```
$ webpack
```

##### Setting up your DB
In `root/zipari/settings/base.py`

Modify this block to your db setting,
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'zipari',
        'USER': 'stephenbae',
        'PASSWORD': '1234',
        'HOST': 'localhost',
        'PORT': '32768',
    }
}
```

##### When ready

The app can be viewed at `http://127.0.0.1:8000/`








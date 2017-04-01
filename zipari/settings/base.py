import environ

project_root = environ.Path(__file__) - 3
env = environ.Env(DEBUG=(bool, False), )
CURRENT_ENV = 'dev'  # 'dev' is the default environment

# read the .env file associated with the settings that're loaded
env.read_env('./zipari/{}.env'.format(CURRENT_ENV))
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
SECRET_KEY = env('SECRET_KEY')
DEBUG = env('DEBUG')
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Django Packages
    'rest_framework',
    'backend.applications.insurances',

]

ROOT_URLCONF = 'zipari.urls'
STATIC_URL = '/static/'
STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
]
STATICFILES_DIRS = [
    env('FRONTEND_ROOT')
]
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [env('FRONTEND_ROOT')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

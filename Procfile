web: daphne djangoChat.asgi:channel_layer --port $PORT --bind 0.0.0.0 -v2
chatworker: python manage.py runworker --settings=djangoChat.settings -v2
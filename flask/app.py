"""."""
from flask import Flask
app = Flask(__name__, static_url_path='')
app.static_folder = 'static'


@app.route('/')
def home_view():
    """."""
    return app.send_static_file('./index.html')


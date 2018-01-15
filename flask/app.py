"""."""
from flask import Flask
app = Flask(__name__)


@app.route('/')
def home_view():
    """."""
    return 'Home!'


@app.route('/projects/')
def projects_view():
    """."""
    return 'projects are here'


@app.route('/about')
def about_view():
    """."""
    return 'this is the about me view'
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# Create the app
app = Flask(__name__)

# Configure the SQLite database, relative to the app instance folder
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Create the extension
db = SQLAlchemy(app)


if __name__ == "__main__":
    app.run(debug=True)

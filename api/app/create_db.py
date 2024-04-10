from models import db

def create_tables(app, db):
    with app.app_context():
        db.create_all()

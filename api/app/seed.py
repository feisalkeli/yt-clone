from main import db, User, Video
from faker import Faker
from random import randint, choice
from datetime import datetime, timedelta

fake = Faker()

# Function to generate random datetime within a range
def random_date(start_date, end_date):
    delta = end_date - start_date
    random_days = randint(0, delta.days)
    return start_date + timedelta(days=random_days)

# Function to seed users
def seed_users(num_users):
    for _ in range(num_users):
        user = User(username=fake.user_name())
        db.session.add(user)
    db.session.commit()

# Function to seed videos
def seed_videos(num_videos, num_users):
    start_date = datetime(2020, 1, 1)
    end_date = datetime.now()
    categories = ['Music', 'Education', 'Gaming', 'Comedy', 'Travel', 'Science', 'Technology']

    for _ in range(num_videos):
        user_id = randint(1, num_users)
        date = random_date(start_date, end_date)
        video = Video(
            user_id=user_id,
            comments=randint(0, 100),
            views=randint(0, 1000),
            date=date,
            category=choice(categories),
            thumbnail=f'https://example.com/thumbnails/{randint(1, 10)}.jpg',
            description=fake.text(),
            created_at=date
        )
        db.session.add(video)
    db.session.commit()

if __name__ == "__main__":
    num_users = 50
    num_videos = 100  # You can adjust this number as needed
    seed_users(num_users)
    seed_videos(num_videos, num_users)
    print("Database seeding completed.")


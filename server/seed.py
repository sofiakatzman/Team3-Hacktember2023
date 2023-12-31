from random import randint

from app import app
from models.models import User, Content
from config import db


def seed_content():
    Content.query.delete()
    seed_data = [
    {
        'title': 'Addition and Subtraction with Dinosaurs',
        'video': 'https://www.youtube.com/watch?v=igcoDFokKzU',
        'genre': 'Math',
        'description': 'Educational video for children to learn how to add and subtract in a fun way. This is a compilation of several addition and subtraction videos. Are you ready to learn how to add and subtract with our friends the dinosaurs? This video is part of a collection of math videos for children featuring material to learn and practice math operations in a fun way. Great resource for elementary school.',
    },
    {
        'title': 'Data! | Mini Math Movies | Scratch Garden',
        'video': 'https://www.youtube.com/watch?v=zF_dBk8EPDk',
        'genre': 'Math',
        'description': 'This primary math lesson video is about data and practices data collection, data organization, data visualization and data analysis... wow! There is a is also a section that fully explains tally marks! Whether it\'s a tally chart or pictograph, this is a great video for learning about representing data and understanding charts and graphs for kids. ',
    },
    {
        'title': 'Let\'s Learn Fractions!',
        'video': 'https://www.youtube.com/watch?v=n0FZhQ_GkKw',
        'genre': 'Math',
        'description': 'This video teaches the mathematical principle of fractions in an easy to understand way for children and kids to learn.  This video uses visual representations to point out common fractions that we see in everyday life.   This will help children to learn and apply fractions each day.',
    },
    {
        'title': 'Counting Coins Song - Penny, Nickel, Dime, Quarter ',
        'video': 'https://www.youtube.com/watch?v=MbtmucV-U2c',
        'genre': 'Math',
        'description': 'Knowing how to count coins is important! The aim is to teach children how to understand and use money. To do this they need to be able to count the money they have and to compare it to the cost of what they wish to purchase.',
    },
    {
        'title': 'Syllables!',
        'video': 'https://www.youtube.com/watch?v=9S7DY2lgJlU',
        'genre': 'English',
        'description': 'Learn about dividing words and counting syllables as we explain what is a syllable in the English language. ',
    },
    {
        'title': 'Nessy Reading Strategy | Closed and Open Syllables | Learn to Read',
        'video': 'https://www.youtube.com/watch?v=c3j3YVocNxk',
        'genre': 'English',
        'description': 'Find out how a vowel should sound in a word with Open and Closed Syllables. A closed syllable is when a vowel is followed by a consonant creating a short vowel sound. An open syllable is when a syllable ends in a vowel, leaving its sound long and open.',
    },
    {
        'title': 'Punctuation Explained (by Punctuation!)',
        'video': 'https://www.youtube.com/watch?v=LdCOswMeXFQ',
        'genre': 'English',
        'description': 'Learn about punctuation from the punctuation marks themselves!',
    },
    {
        'title': 'Contractions! | English Grammar Practice',
        'video': 'https://www.youtube.com/watch?v=gubPH3WEurg',
        'genre': 'English',
        'description': 'When writing English or practicing your spelling, contractions can often be confusing. We animate some real examples in this video so you can see the correct way of contracting English words with apostrophes!',
    },
    {
        'title': 'Our Sun',
        'video': 'https://www.youtube.com/watch?v=sePqPIXMsAc',
        'genre': 'Science',
        'description': 'The Sun is in the middle of our solar system, and all the eight planets of the solar system revolve around it following their orbits. The Sun is a star, which means it’s a big ball of hot gas. Right now, it’s a dwarf star in the middle of its life, but over time it expands, which means “grows bigger”, to turn into a giant star when it gets really old.',
    },
    {
        'title': 'Let’s Be Scientists!',
        'video': 'https://www.youtube.com/watch?v=uGCexyr4IYw',
        'genre': 'Science',
        'description': 'This nutshell was created for Kentucky Educational Television as part of an early childhood education series and helps kids draw conclusions based on proved/disproved predictions, just like a scientist!',
    },
    {
        'title': 'Know Your Globe',
        'video': 'https://www.youtube.com/watch?v=x7k7CeWDtWs',
        'genre': 'Science',
        'description': 'Join Jessi, Bill and Webb to learn all about the place we call home!',
    },
    ]
    for data in seed_data:
        content = Content(
            title=data['title'],
            video=data['video'],
            genre=data['genre'],
            description=data['description']
        )
        db.session.add(content)
    db.session.commit()


def seed():
    # delete current data
    User.query.delete()
    
    # create admin user for testing and debugging
    admin = User(username="admin", admin=True)
    admin.password_hash = 'admin'

    db.session.add(admin)
    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        print("Starting seed...")
        seed()
        seed_content()
        print("Seed complete!")
from flask import request,jsonify
from main import app,db
from models import User,Video


@app.route("/",methods=['GET'])
def index():
 return "<h1>Hello world</h1>"


@app.route('/users',methods=['GET'])
def get_users():
  users = User.query.all
  user_list = [{'id':user.id,'username':user.username}for user in users]
  return jsonify(user_list)


@app.route('/videos',methods=['GET'])
def get_videos():
  videos = Video.query.all()
  video_list = [{'id': video.id, 'comments': video.comments, 'views': video.views, 
                    'date': video.date, 'category': video.category, 
                    'thumbnail': video.thumbnail, 'description': video.description} for video in videos]
  return jsonify(video_list)


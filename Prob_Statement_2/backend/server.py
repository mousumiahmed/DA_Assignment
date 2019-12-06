from flask import Flask
from flask import request
import json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from bson.json_util import dumps
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/booksite"
mongo = PyMongo(app)



@app.route('/lists')
def bookList():
    data = mongo.db.lists.find()
    return dumps(data);

@app.route('/math')
def mathList():
    data = mongo.db.lists.find({"subject":"Mathematics"})
    return dumps(data);

@app.route('/physics')
def phyList():
    data = mongo.db.lists.find({"subject":"Physics"})
    return dumps(data);

@app.route('/chemistry')
def chemList():
    data = mongo.db.lists.find({"subject":"Chemistry"})
    return dumps(data);

from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

HASHTAGS = {
    "beauty": ["#beautytok", "#glowup", "#skincare", "#makeup", "#fyp"],
    "fashion": ["#fashiontok", "#outfit", "#style", "#ootd", "#fyp"],
    "food": ["#foodtok", "#recipe", "#cooking", "#tasty", "#fyp"],
    "fitness": ["#fitnesstok", "#gym", "#workout", "#motivation", "#fyp"],
    "general": ["#viral", "#trending", "#explore", "#fyp", "#foryou"]
}

@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    category = data.get('category', 'general').lower()
    tags = HASHTAGS.get(category, HASHTAGS['general'])
    selected = random.sample(tags, 5)
    return jsonify({"hashtags": " ".join(selected)})

if __name__ == '__main__':
    app.run()

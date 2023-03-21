from flask import Flask, request, Response, json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/lessons", methods=["GET"])
def lessons():
    return {"Monday": ["Databases", "VAP", "Statistics", "Cryptography"],
            "Tuesday": ["Statistics", "Cryptography", "App Prototyping"]}

app.run(host = "localhost", port=80, debug=False)
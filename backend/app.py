from flask import Flask, request, jsonify
import torch
from flask_ngrok import run_with_ngrok

# Flask 앱 초기화
app = Flask(__name__)
run_with_ngrok(app) 

# Flask 서버 실행
if __name__ == "__main__":
    app.run()
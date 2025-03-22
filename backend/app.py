from flask import Flask, request, jsonify
import pickle
import pandas as pd
import numpy as np
from flask_cors import CORS

import os

# Load environment variables


# Load the trained model
with open("model/model.pkl", "rb") as model_file:
    model = pickle.load(model_file)

app = Flask(__name__)
CORS(app)

@app.route('/')
def welcome():
    return "Welcome to the Heart Attack Prediction API!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        df = pd.DataFrame([data])
        
        # Make prediction (returns numeric 0 or 1)
        prediction = model.predict(df)[0]
        # Return a string result
        result = "High Risk" if prediction == 1 else "Low Risk"
        
        # Note: If you want to send risk factors along, update your model accordingly.
        # For now, we'll send an empty list.
        return jsonify({"prediction": result, "risk_factors": []})
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == '__main__':
    app.run(debug=True)

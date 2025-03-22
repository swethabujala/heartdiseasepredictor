from flask import Flask, request, jsonify
import pickle
import pandas as pd
import numpy as np

# Load the trained model
with open("model/model.pkl", "rb") as model_file:
    model = pickle.load(model_file)

app = Flask(__name__)

@app.route('/')
def welcome():
    return "Welcome to the Heart Attack Prediction API!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        df = pd.DataFrame([data])
        
        # Make prediction
        prediction = model.predict(df)[0]
        result = "High Risk" if prediction == 1 else "Low Risk"
        
        return jsonify({"prediction": result})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)

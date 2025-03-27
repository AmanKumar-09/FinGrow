import requests
import os
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from dotenv import load_dotenv
import hashlib
import re
import google.generativeai as genai

load_dotenv()

DEFAULT_INR_RATE = 83

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=GEMINI_API_KEY)

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

ai_suggestions_cache = {}
stock_recommendations_cache = {}
inr_usd_rate = DEFAULT_INR_RATE

# Function to convert USD to INR
def get_usd_to_inr():
    try:
        response = requests.get("https://api.exchangerate-api.com/v4/latest/USD")
        data = response.json()
        return data.get("rates", {}).get("INR", DEFAULT_INR_RATE)
    except requests.RequestException:  
        return DEFAULT_INR_RATE

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/calculate_savings', methods=['POST'])
def calculate_savings():
    data = request.json
    salary = data.get('salary', 0)
    spendings = data.get('spendings', [])

    total_spendings = sum(spendings)
    savings = salary - total_spendings

    return jsonify({"savings": savings, "message": "Savings calculated successfully."})

# Function to clean the AI suggestion text
def clean_text(text):
    cleaned_text = re.sub(r'[*#]', '', text)
    return cleaned_text

@app.route('/ai_suggestions', methods=['POST'])
def ai_suggestions():
    data = request.json
    savings = data.get('savings', 0)

    cache_key = hashlib.md5(f"{savings}".encode()).hexdigest()

    if cache_key in ai_suggestions_cache:
        return jsonify({"suggestions": ai_suggestions_cache[cache_key]})

    try:
        model = genai.GenerativeModel('gemini-2.0-flash')
        prompt = f"I have ₹{savings} in savings each month. Please suggest financial planning ideas, including savings, investment, and expense reduction. Make it simple for example I do not know much about finance. Give response in less than 210 words. (don't give disclaimer that it is not financial advice as it's a financial AI model)"
        response = model.generate_content(prompt)
        suggestion = response.text if response and hasattr(response, 'text') else "No AI response."

        cleaned_suggestion = clean_text(suggestion)
        ai_suggestions_cache[cache_key] = cleaned_suggestion

        return jsonify({"suggestions": cleaned_suggestion})

    except Exception as e:
        print(f"AI Suggestion Error: {e}")
        return jsonify({"error": f"AI suggestion failed: {str(e)}"}), 500

@app.route('/get_investment_recommendations', methods=['POST'])
def get_investment_recommendations():
    data = request.json
    savings = data.get('savings', 0)
    cache_key = hashlib.md5(f"{savings}".encode()).hexdigest()

    if cache_key in stock_recommendations_cache:
        return jsonify({"stocks": stock_recommendations_cache[cache_key]})

    try:
        import google.generativeai as genai
        genai.configure(api_key=os.getenv("GEMINI_API_KEY1"))
        model = genai.GenerativeModel('gemini-1.5-flash')  # Using gemini-1.5-flash for consistency
        prompt = f"List 5 affordable Indian stocks I can buy with ₹{savings} savings. Provide only the stock names and approximate prices in INR in the format 'Stock Name - ₹Price', one per line. Do not include any additional text, paragraphs, disclaimers, or explanations. Just the list."
        response = model.generate_content(prompt)
        stock_text = response.text if response and hasattr(response, 'text') else "No stock recommendations."

        cleaned_stock_text = clean_text(stock_text)
        stocks = [stock.strip() for stock in cleaned_stock_text.split('\n') if stock.strip()]
        stock_recommendations_cache[cache_key] = stocks
        print(f"Gemini stock recommendations: {stocks}")
        return jsonify({"stocks": stocks})
    except Exception as e:
        print(f"Stock Recommendation Error: {e}")
        return jsonify({"error": f"Stock recommendation failed: {str(e)}"}), 500

if __name__ == '_main_':
    app.run(debug=True, port=5001)
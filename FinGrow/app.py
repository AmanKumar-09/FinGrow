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
        prompt = f"I have ₹{savings} in savings each month. Please suggest financial planning ideas, including savings, investment, and expense reduction.Make it simple for example i do not know much about finance.Give response in less than 210 words.(don't give disclaimer that it is not financial advice as its a financial AI model)"
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
    risk_tolerance = data.get('risk_tolerance', 'medium')

    recommendations = {
        "low": {
            "low_savings": {
                "stocks": {
                    "Johnson & Johnson (JNJ)": "₹1500",
                    "Procter & Gamble (PG)": "₹1400",
                    "Coca-Cola (KO)": "₹1300"
                },
                "crypto": {
                    "Bitcoin (BTC)": "₹15000",
                    "Ethereum (ETH)": "₹12000"
                }
            },
            "medium_savings": {
                "stocks": {
                    "PepsiCo (PEP)": "₹1600",
                    "McDonald's (MCD)": "₹1700",
                    "Walmart (WMT)": "₹1800"
                },
                "crypto": {
                    "Bitcoin (BTC)": "₹16000",
                    "Ethereum (ETH)": "₹13000"
                }
            },
            "high_savings": {
                "stocks": {
                    "Visa (V)": "₹1900",
                    "Mastercard (MA)": "₹2000",
                    "Disney (DIS)": "₹2100"
                },
                "crypto": {
                    "Bitcoin (BTC)": "₹17000",
                    "Ethereum (ETH)": "₹14000"
                }
            }
        },
        "medium": {
            "low_savings": {
                "stocks": {
                    "Apple (AAPL)": "₹2500",
                    "Microsoft (MSFT)": "₹2400",
                    "Alphabet (GOOGL)": "₹2300"
                },
                "crypto": {
                    "Bitcoin (BTC)": "₹18000",
                    "Ethereum (ETH)": "₹16000"
                }
            },
            "medium_savings": {
                "stocks": {
                    "Amazon (AMZN)": "₹2600",
                    "Facebook (FB)": "₹2700",
                    "Netflix (NFLX)": "₹2800"
                },
                "crypto": {
                    "Bitcoin (BTC)": "₹19000",
                    "Ethereum (ETH)": "₹17000"
                }
            },
            "high_savings": {
                "stocks": {
                    "Tesla (TSLA)": "₹2900",
                    "NVIDIA (NVDA)": "₹3000",
                    "Coinbase (COIN)": "₹3100"
                },
                "crypto": {
                    "Bitcoin (BTC)": "₹20000",
                    "Ethereum (ETH)": "₹18000"
                }
            }
        },
        "high": {
            "low_savings": {
                "stocks": {
                    "Tesla (TSLA)": "₹3500",
                    "NVIDIA (NVDA)": "₹3400",
                    "Coinbase (COIN)": "₹3300"
                },
                "crypto": {
                    "Bitcoin (BTC)": "₹20000",
                    "Ethereum (ETH)": "₹19000"
                }
            },
            "medium_savings": {
                "stocks": {
                    "Shopify (SHOP)": "₹3600",
                    "Square (SQ)": "₹3700",
                    "Zoom (ZM)": "₹3800"
                },
                "crypto": {
                    "Bitcoin (BTC)": "₹21000",
                    "Ethereum (ETH)": "₹20000"
                }
            },
            "high_savings": {
                "stocks": {
                    "Spotify (SPOT)": "₹3900",
                    "Roku (ROKU)": "₹4000",
                    "DocuSign (DOCU)": "₹4100"
                },
                "crypto": {
                    "Bitcoin (BTC)": "₹22000",
                    "Ethereum (ETH)": "₹21000"
                }
            }
        }
    }

    if savings < 5000:
        savings_category = "low_savings"
    elif savings < 15000:
        savings_category = "medium_savings"
    else:
        savings_category = "high_savings"

    selected_data = recommendations.get(risk_tolerance, recommendations["medium"]).get(savings_category, recommendations["medium"]["medium_savings"])

    return jsonify(selected_data)

if __name__ == '__main__':
    app.run(debug=True)
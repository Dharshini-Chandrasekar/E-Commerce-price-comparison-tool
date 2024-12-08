from flask import Flask, render_template, request, redirect, url_for
from scraper import scrape_products
import sqlite3
import os

app = Flask(__name__)

# Home Page
@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        product = request.form["product"]
        count = int(request.form["count"])
        # Call scraper
        scrape_products(product, count)
        return redirect(url_for("results"))
    return render_template("home.html")

# Results Page
@app.route("/results", methods=["GET"])
def results():
    conn = sqlite3.connect("data/scraped_data.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM products ORDER BY price ASC")
    products = cursor.fetchall()
    conn.close()
    return render_template("results.html", products=products)


@app.route('/analysis')
def analysis():
    amazon_prices = [199, 299, 249, 399, 259, 329]  
    ebay_prices = [189, 315, 259, 389, 269, 309]  
    return render_template('analysis.html', amazon_prices=amazon_prices, ebay_prices=ebay_prices)

if __name__ == "__main__":
    app.run(debug=True)


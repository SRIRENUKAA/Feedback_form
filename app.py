from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
import traceback

app = Flask(__name__)
CORS(app)

@app.route('/submit-feedback', methods=['POST'])
def submit_feedback():
    try:
        data = request.json
        print("Received data:", data)

        # 📝 Extract all fields from form
        name = data.get('name', 'Not Provided')
        email = data.get('email', 'Not Provided')
        favoriteDish = data.get('favoriteDish', 'Not Provided')
        foodRating = data.get('foodRating', 'Not Provided')
        serviceRating = data.get('serviceRating', 'Not Provided')
        tasteSatisfaction = data.get('tasteSatisfaction', 'Not Provided')
        spiceLevel = data.get('spiceLevel', 'Not Provided')
        valueForQuantity = data.get('valueForQuantity', 'Not Provided')
        foodVariety = data.get('foodVariety', 'Not Provided')
        foodWastage = data.get('foodWastage', 'Not Provided')
        wastageDetails = data.get('wastageDetails', 'Not Provided')
        comments = data.get('comments', 'Not Provided')

        # 💌 Compose the email body
        message_body = f"""
🧾 NEW CUSTOMER FEEDBACK 🧾

👤 Name: {name}
📧 Email: {email}
🍽️ Favorite Dish: {favoriteDish}
⭐ Food Rating: {foodRating}
⭐ Service Rating: {serviceRating}
😋 Taste Satisfaction: {tasteSatisfaction}
🌶️ Spice Level: {spiceLevel}
💰 Value for Quantity: {valueForQuantity}
🥗 Food Variety: {foodVariety}
🚮 Food Wastage: {foodWastage}
📝 Wastage Details: {wastageDetails}
💬 Additional Comments: {comments}
"""

        msg = MIMEText(message_body)
        msg['Subject'] = "📬 New Feedback Submission"
        msg['From'] = "abish2004v@gmail.com"
        msg['To'] = "abish2004v@gmail.com"
        if email != "Not Provided" and email.strip() != "":
            msg['Reply-To'] = email

        # ✅ Gmail SMTP
        smtp = smtplib.SMTP("smtp.gmail.com", 587)
        smtp.starttls()
        smtp.login("abish2004v@gmail.com", "vgvt dtyy asnz ycss")  # Use App Password
        smtp.sendmail("abish2004v@gmail.com", "abish2004v@gmail.com", msg.as_string())
        print('Mail send successfully')
        smtp.quit()

        return jsonify({"message": "Feedback sent successfully"}), 200

    except Exception as e:
        print("❌ ERROR:", e)
        traceback.print_exc()
        return jsonify({"error": "Failed to send feedback"}), 500

if __name__ == '__main__':
    app.run(debug=True)

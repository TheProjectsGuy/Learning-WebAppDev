import os
from flask import Flask, request

app = Flask(__name__)

@app.route("/submit")
def submit():
    if len(request.args) == 0:
        return "<p>No args!</p>"
    name = request.args.get('name', "unknown")
    email = request.args.get('email', "none@example.com")
    phone = request.args.get('phone', "0")
    dob = request.args.get('dob', "0000-00-00")
    gender = request.args.get('gender', "unknown")
    if not os.path.exists("data.csv"):
        with open("data.csv", "w") as f:
            f.write("name, email, phone, dob, gender\n")
    with open("data.csv", "a") as f:    # Write to file
        f.write(f"\"{name}\",\"{email}\",\"{phone}\",\"{dob}\",\"{gender}\"\n")
    return f"""
    <p>Got it!</p>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
    <p>DOB: {dob}</p>
    <p>Gender: {gender}</p>
    """

import os
from cs50 import SQL
from flask import Flask, flash, jsonify, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from werkzeug.security import check_password_hash, generate_password_hash
from helpers import apology, login_required

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///engineer.db")

# Make sure API key is set
if not os.environ.get("API_KEY"):
    raise RuntimeError("API_KEY not set")


#MIDDLE BLOCK TODO
@app.route("/")
def index():
    return render_template("home.html")


@app.route("/register", methods=["GET","POST"])
def register():
    if request.method == "POST":


        if not request.form.get("username"):
            return apology("must provide username", 403)

        elif not request.form.get("password"):
            return apology("must provide password", 403)

        elif not request.form.get("confirmation"):
            return apology("must confirm password", 403)

        elif request.form.get("password") != request.form.get("confirmation"):
            return apology("Passwords do not match", 403)

        elif not request.form.get("email") or not ('.' and '@') in request.form.get("email"):
            return apology("Missing email!", 403)

        # Create a hash table to link the password to
        hash = generate_password_hash(request.form.get("password"))
        #insert the user and hash value into the database
        new_user_id = db.execute("INSERT INTO users (username, email, hash) VALUES(:username, :email, :hash)", username=request.form.get("username"), email=request.form.get("email"), hash = hash)

        # check if username is unique
        if not new_user_id:
            return apology("sorry username already taken", 403)
        # Remember which user has logged in
        session["user_id"] = new_user_id

        # Redirect user to home page
        return redirect("/")

    else:
        return render_template("register.html")



@app.route("/login", methods=["GET", "POST"])
def login():
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.form.get("username"):
            return apology("must provide username", 403)

        # Ensure password was submitted
        elif not request.form.get("password"):
            return apology("must provide password", 403)

        # Query database for username
        rows = db.execute("SELECT * FROM users WHERE username = :username",
                          username=request.form.get("username"))

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")):
            return apology("invalid username and/or password", 403)

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
        return redirect("/")

    return render_template("login.html")

@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")


@app.route("/change_pw", methods=["GET", "POST"])
@login_required
def change_pw():
    """Let user change the password"""
    if request.method == "GET":
        return render_template("change_pw.html")
    
    if request.method == "POST":
        # Ensure email was submitted
        if not request.form.get("email"):
            return apology("Missing Email!", 403)
        
        # Ensure password was submitted
        if not request.form.get("password"):
            return apology("Missing password!", 403)
        
        # Ensure password equals confirmation password submitted
        elif request.form.get("password") != request.form.get("confirmation"):
            return apology("Passwords don't match!", 403)
        else:
            # hash the password
            pwdhash = generate_password_hash(request.form.get("password"))
            db.execute("UPDATE users SET hash = :hash WHERE id=:id", hash=pwdhash, id=session["user_id"])

        return redirect("/")

@app.route("/change_user", methods=["GET", "POST"])
@login_required
def change_user():
    """Let user change their Username"""
    if request.method == "GET":
        return render_template("change_user.html")
    
    if request.method == "POST":
        # Ensure email was submitted
        if not request.form.get("email"):
            return apology("Missing Email!", 403)
        
        # Ensure Username was submitted
        if not request.form.get("newusername"):
            return apology("Missing Username!", 403)
        
        # Ensure password equals conrfirmation password submitted
        elif request.form.get("newusername") != request.form.get("confirmation"):
            return apology("Usernames don't match!", 403)
        else:
            # hash the password
            newuser = request.form.get("newusername")
            db.execute("UPDATE users SET username = :username WHERE id=:id", username=newuser, id=session["user_id"])

        return redirect("/")



@app.route("/riddles")
@login_required
def riddle():
    """ Riddles Quiz """
    return render_template("riddles.html")

@app.route("/quizzes")
@login_required
def quizzes():
    """ Engineering Types Quiz """
    return render_template("quizzes.html")

@app.route("/profile")
@login_required
def profile():
    """ User Profile """
    rows = db.execute("SELECT username FROM users WHERE id=:user_id", user_id=session["user_id"])
    user_profile_name = rows[0]["username"]

    return render_template("profile.html", user_profile_name=user_profile_name)

@app.route("/explore")
@login_required
def explore():
    """ Explore Texts """
    return render_template("explore.html")

@app.route("/aerospace")
@login_required
def aerospace():
    """ Explore Aerospace """
    return render_template("texts/aerospace.html")

@app.route("/aerospacequiz")
@login_required
def aerospacequiz():
    """ Aerospace Quiz """
    return render_template("quizzes/aerospacequiz.html")

@app.route("/bio")
@login_required
def bio():
    """ Explore Bio """
    return render_template("texts/bio.html")

@app.route("/bioquiz")
@login_required
def bioquiz():
    """ Bio Quiz """
    return render_template("quizzes/bioquiz.html")

@app.route("/chemical")
@login_required
def chemical():
    """ Explore Chemical """
    return render_template("texts/chemical.html")

@app.route("/chemicalquiz")
@login_required
def chemicalquiz():
    """ Chemical Quiz """
    return render_template("quizzes/chemicalquiz.html")

@app.route("/civil")
@login_required
def civil():
    """ Explore Civil """
    return render_template("texts/civil.html")

@app.route("/civilquiz")
@login_required
def civilquiz():
    """ Civil Quiz """
    return render_template("quizzes/civilquiz.html")

@app.route("/electrical")
@login_required
def electrical():
    """ Explore Electrical """
    return render_template("texts/electrical.html")

@app.route("/electricalquiz")
@login_required
def electricalquiz():
    """ Electrical Quiz """
    return render_template("quizzes/electricalquiz.html")

@app.route("/mechanical")
@login_required
def mechanical():
    """ Explore Mechanical """
    return render_template("texts/mechanical.html")

@app.route("/mechanicalquiz")
@login_required
def mechanicalquiz():
    """ Mechanical Quiz """
    return render_template("quizzes/mechanicalquiz.html")
    
@app.route("/nuclear")
@login_required
def nuclear():
    """ Explore Nuclear """
    return render_template("texts/nuclear.html")

@app.route("/nuclearquiz")
@login_required
def nuclearquiz():
    """ Nuclear Quiz """
    return render_template("quizzes/nuclearquiz.html")

@app.route("/software")
@login_required
def software():
    """ Explore Software """
    return render_template("texts/software.html")

@app.route("/softwarequiz")
@login_required
def softwarequiz():
    """ Software Quiz """
    return render_template("quizzes/softwarequiz.html")

@app.route("/other")
@login_required
def other():
    """ Explore Engineering Even Further """
    return render_template("texts/other.html")


def errorhandler(e):
    """Handle error"""
    if not isinstance(e, HTTPException):
        e = InternalServerError()
    return apology(e.name, e.code)


# Listen for errors
for code in default_exceptions:
    app.errorhandler(code)(errorhandler)
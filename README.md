# CS50 Final Project EngHub

This project is a web app that creates awareness and tests users knowledge on the different engineering sectors.
users can explore different engineering fields and take quizzes on them.
The user must register then login to unlock the quizzes and riddles section or to change their details.
when the user logs on, he can change his profile settings (username, password) under the profile tab

you can alter the quizzes.js sections and change the riddles sections to change the questions

# usage
Visit [iexcloud.io/cloud-login#/register/](iexcloud.io/cloud-login#/register/) <br>
Enter your email address and a password, and click “Create account”.<br>
On the next page, scroll down to choose the Start (free) plan. <br>
Once you’ve confirmed your account via a confirmation email, sign in to [iexcloud.io.](iexcloud.io.) <br>
Click API Tokens <br>
Copy the key that appears under the Token column (it should begin with pk_) <br>

## for mac and linux
cd [path to app.py] <br/>
export API_KEY=[your api key] <br/>
export FLASK_APP=application.py <br/>
flask run <br/>
### optional
export FLASK_ENV=development <br/>
export FLASK_DEBUG=1 <br/>

## for Windows
cd [path to app.py] <br/>
set API_KEY=[your api key] <br/>
set FLASK_APP=application <br/>
flask run
### optional
set FLASK_ENV=development <br/>
set FLASK_DEBUG=1
<br/>
for more info visit: [https://flask.palletsprojects.com/en/1.0.x/cli/](https://flask.palletsprojects.com/en/1.0.x/cli/)

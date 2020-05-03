import speech_recognition as sr
from flask import Flask

app = Flask(name)

r = sr.Recognizer()

@app.route("/spk")
def speech():
    with sr.Microphone() as source:
            print("Speak Anything: ")
            audio = r.listen(source)

            try:
                text = r.recognize_google(audio)
                print('You said : {}'.format(text))
            except:
                print("Didnt work")
    return text

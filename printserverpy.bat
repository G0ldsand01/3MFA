@echo off
python.exe -m pip install --upgrade pip
@echo off
pip install requirements.txt
python ./app.py
pause
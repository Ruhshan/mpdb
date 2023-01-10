FROM python:3.8.16-alpine

RUN mkdir /opt/code
COPY . /opt/code
WORKDIR /opt/code

RUN pip install -r requirements.txt
RUN rm -f .env


CMD uvicorn main:app --host 0.0.0.0 --port 8000

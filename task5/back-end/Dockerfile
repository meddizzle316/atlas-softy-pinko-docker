FROM ubuntu
ENV TZ=America/Chicago
COPY api.py /app/api.py
WORKDIR /app
RUN apt-get update --fix-missing && apt-get upgrade -y --fix-missing
RUN apt-get install -y docker.io
RUN apt-get install -y git
RUN apt-get install -y curl
RUN apt-get install -y python3
RUN apt-get install -y python3 python3-pip
RUN pip3 install flasgger
RUN pip3 install flask
RUN pip3 install flask-cors
RUN apt-get install -y python3-lxml
# EXPOSE 5252

CMD ["python3", "./api.py"]

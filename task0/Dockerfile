FROM ubuntu
ENV TZ=America/Chicago
WORKDIR /app
COPY helloworld.py /app
RUN apt-get update --fix-missing && apt-get upgrade -y --fix-missing
RUN apt-get install -y python3
CMD ["python3", "helloworld.py"]

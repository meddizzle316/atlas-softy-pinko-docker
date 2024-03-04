FROM nginx:latest
COPY ./softy-pinko-front-end /var/www/html/softy-pinko-front-end
COPY ./softy-pinko-front-end.conf /etc/nginx/conf.d/default.conf
RUN apt-get update --fix-missing && apt-get upgrade -y --fix-missing
EXPOSE 9000
# command to run docker run -p 9000:9000 -it --rm --name softy-pinko-front-end softy-pinko-front-end:task

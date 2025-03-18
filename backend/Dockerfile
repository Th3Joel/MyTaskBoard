FROM ubuntu:latest

RUN apt-get update && apt upgrade -y
WORKDIR /app

COPY cmd/build/sis .

EXPOSE 5000

CMD [ "./sis" ]

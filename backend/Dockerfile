FROM ubuntu:latest

RUN apt-get update && apt upgrade -y && apt install -y git
WORKDIR /app

COPY cmd/build/sis .

EXPOSE 80

CMD [ "./sis" ]

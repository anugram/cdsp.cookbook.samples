#!/bin/sh
url=`printenv API_IP`
port=`printenv API_PORT`
truncate -s 0 .env
echo "REACT_APP_BACKEND_IP_ADDRESS=$url" >> .env
echo "REACT_APP_BACKEND_PORT=$port" > .env
npm run start
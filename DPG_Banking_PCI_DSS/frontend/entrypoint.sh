#!/bin/sh
url=`printenv API_IP`
port=`printenv API_PORT`
echo "REACT_APP_BACKEND_IP_ADDRESS=$url \nREACT_APP_BACKEND_PORT=$port" > .env
npm run start
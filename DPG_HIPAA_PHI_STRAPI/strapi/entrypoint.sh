#!/bin/sh
ip=`printenv SERVER_IP`
echo "HOST=$url" >> .env
yarn develop
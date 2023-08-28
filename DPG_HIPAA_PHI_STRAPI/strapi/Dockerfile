FROM node:16
WORKDIR /app
ADD ./package.json /app
#ADD ./yarn.lock /app
RUN yarn install --frozen-lockfile
ADD . /app
#RUN yarn seed
EXPOSE 1337
RUN chmod -v +x entrypoint.sh
ENTRYPOINT ["sh", "/app/entrypoint.sh"]
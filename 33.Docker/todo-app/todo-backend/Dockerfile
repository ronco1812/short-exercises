FROM node:16

USER node
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci 

ENV MONGO_URL=mongodb+srv://fullstack:ronco1812@phonebook.lwgtz.mongodb.net/tasksDocker?retryWrites=true&w=majority

CMD npm start
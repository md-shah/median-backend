#  ______                     _                                        _
#  |  _  \                   | |                                      | |
#  | | | |  ___ __   __  ___ | |  ___   _ __   _ __ ___    ___  _ __  | |_
#  | | | | / _ \\ \ / / / _ \| | / _ \ | '_ \ | '_ ` _ \  / _ \| '_ \ | __|
#  | |/ / |  __/ \ V / |  __/| || (_) || |_) || | | | | ||  __/| | | || |_
#  |___/   \___|  \_/   \___||_| \___/ | .__/ |_| |_| |_| \___||_| |_| \__|
#                                      | |
#                                      |_|
FROM node:14-alpine As development

# Set necessary environment variables.
ENV NODE_ENV=development \
    NPM_CONFIG_PREFIX=/home/node/.npm-global \
    PATH=$PATH:/home/node/.npm-global/bin:/home/node/node_modules/.bin:$PATH

# For handling Kernel signals properly
RUN apk add --no-cache tini

# Create the working directory, including the node_modules folder for the sake of assigning ownership in the next command
RUN mkdir -p /usr/src/app/node_modules

# Change ownership of the working directory to the node:node user:group
# This ensures that npm install can be executed successfully with the correct permissions
RUN chown -R node:node /usr/src/app

# Set the user to use when running this image
# Non previlage mode for better security (this user comes with official NodeJS image).
USER node

# Set the default working directory for the app
# It is a best practice to use the /usr/src/app directory
WORKDIR /usr/src/app

# Copy package.json, package-lock.json
# Copying this separately prevents re-running npm install on every code change.
COPY --chown=node:node package*.json ./

# Install dependencies.
RUN npm i -g @nestjs/cli
RUN npm ci --only=development

# Necessary to run before adding application code to leverage Docker cache
RUN npm cache clean --force
#RUN mv node_modules ../

# Bundle app source
COPY --chown=node:node . ./

# Display directory structure
RUN ls -l

# Expose API port
EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--"]

## Run the the Nest Build command
#RUN npm run build
# Run the web service on container startup
CMD [ "npm", "start" ]

#  ______                   _               _    _
#  | ___ \                 | |             | |  (_)
#  | |_/ / _ __   ___    __| | _   _   ___ | |_  _   ___   _ __
#  |  __/ | '__| / _ \  / _` || | | | / __|| __|| | / _ \ | '_ \
#  | |    | |   | (_) || (_| || |_| || (__ | |_ | || (_) || | | |
#  \_|    |_|    \___/  \__,_| \__,_| \___| \__||_| \___/ |_| |_|
#
#
FROM node:14-alpine As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV} \
    NPM_CONFIG_PREFIX=/home/node/.npm-global \
    PATH=$PATH:/home/node/.npm-global/bin:/home/node/node_modules/.bin:$PATH

RUN apk add --no-cache tini

RUN mkdir -p /usr/src/app/node_modules

RUN chown -R node:node /usr/src/app

USER node

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm i -g @nestjs/cli
RUN npm ci --only=production

RUN npm cache clean --force

COPY --chown=node:node . ./

RUN ls -l

EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--"]

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]

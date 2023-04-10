FROM node
ADD . /app
WORKDIR /app
RUN npm install -g pnpm
RUN pnpm install && pnpm install nacos
CMD ["sh", "start.sh"]
# Twiddit
Twiddit is a mashup between Twitter and Reddit, so you can up/down vote your friends' posts. It is written using the Ionic framework with a Node.js backend and Express api.

## Setup

To run you must have [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/).

While in the root directory run `docker-compose up`. This will start up the database and run the api on `localhost:3000/api`.

Keep in mind that any change to the api will require you to run `docker-compose up --build` in order to rebuild the docker images.

Then simply navigate into the `ionic-client` directory and run `ionic serve`.

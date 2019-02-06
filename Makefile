CONTAINER = homepage-app
USERNAME = cookie
RUNFLAGS = -p 49160:8080 -d

#TESTING ?= 

#up:
#	docker-compose up -d

build:
	docker build -t $(USERNAME)/$(CONTAINER) .
#	docker-compose rm -vsf
#	docker-compose down -v --remove-orphans
#	docker-compose build
#	docker-compose up -d

#down:
#	docker-compose down
#
#require:
#	docker-compose run $(CONTAINER) composer require
#
#require-dev:
#	docker-compose run $(CONTAINER) composer require --dev

run:
	docker run $(RUNFLAGS) $(USERNAME)/$(CONTAINER)
#	docker-compose run $(CONTAINER) node index.js

jumpin:
	docker exec -it $(CONTAINER) /bin/bash
#	docker-compose run $(CONTAINER) bash

#tail-logs:
#	docker-compose logs -f $(CONTAINER)

#testing:
#	echo

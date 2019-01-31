CONTAINER=homepage-app

up:
	docker-compose up -d

build:
	docker-compose rm -vsf
	docker-compose down -v --remove-orphans
	docker-compose build
	docker-compose up -d

down:
	docker-compose down

require:
	docker-compose run $(CONTAINER) composer require

require-dev:
	docker-compose run $(CONTAINER) composer require --dev

run:
	docker-compose run $(CONTAINER) node index.js

jumpin:
	docker-compose run $(CONTAINER) bash

tail-logs:
	docker-compose logs -f $(CONTAINER)

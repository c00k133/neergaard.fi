SHELL := /bin/bash

all:
	npm run build

css: src/assets/scss/*.scss
	npm run scss

html: src/templates/*.pug
	npm run pug

clean:
	rm -rf build

docker-build:
	@docker build \
		--file=Dockerfile \
		--tag=homepage-builder \
		.

docker-run: docker-build
	@docker run \
		--rm \
		--interactive=true \
		--tty=true \
		--volume ${PWD}:/src \
		--volume ${PWD}/build:/src/build \
		homepage-builder \
		npm run build --prefix /src

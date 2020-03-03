SHELL := /bin/bash

all:
	npm run build

css: assets/scss/*.scss
	npm run scss

html: templates/*.pug
	npm run pug

clean:
	rm -rf build

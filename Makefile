.PHONY: install
install:		## make install
	npm i --legacy-peer-deps

.PHONY: install
sb:		## start storybook in development mode
	npm run storybook

.PHONY: start
start:
	npm run dev

.PHONY: build
build:
	npm run build

.PHONY: start-prod
start-prod:
	npm run start

.PHONY: test
test:		## Run Jest tests
	npm run test

.DEFAULT_GOAL: help

help: ## This help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

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

.next/BUILD_ID:
	npm run build

.PHONY: start-prod
start-prod:	.next/BUILD_ID
	npm run start

.PHONY: test
test:		## Run Jest tests
	npm run test

.PHONY: clean
clean:		## Cleanup nextjs build folder
	rm -rf ./.next

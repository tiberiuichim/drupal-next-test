.DEFAULT_GOAL: help

NPM=pnpm

help: ## This help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: install
install:		## make install
	$(NPM) i --legacy-peer-deps

.PHONY: install
sb:		## start storybook in development mode
	$(NPM) run storybook

.PHONY: start
start:
	$(NPM) run dev

.PHONY: build
build:
	$(NPM) run build

.next/BUILD_ID:
	$(NPM) run build

.PHONY: start-prod
start-prod:	.next/BUILD_ID
	$(NPM) run start

.PHONY: test
test:		## Run Jest tests
	$(NPM) run test

.PHONY: clean
clean:		## Cleanup nextjs build folder
	rm -rf ./.next

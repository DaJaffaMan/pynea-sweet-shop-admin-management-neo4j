#!/bin/bash

machine-install: ## Install backend dependencies
	cd machine-api && \
	npm ci

machine-start: ## Start backend
	cd machine-api && \
	npm start

# Misc
help: ## Used to display the help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)	
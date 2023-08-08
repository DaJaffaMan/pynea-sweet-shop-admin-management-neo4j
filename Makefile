#!/bin/bash
machine-install: ## Install backend dependencies
	cd api && \
	npm i

start-machine-graph: ## Start machine graph
	docker compose up -d machine

start-neo4j: ## Start neo
	docker compose up -d neo4j

start-system: ## Start everything
	docker compose up -d

stop-system: ## stop everything
	docker compose down

# Misc
help: ## Used to display the help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)	
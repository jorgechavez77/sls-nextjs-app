BUILD_DIR=${PWD}

install:
	rm -rf node_modules
	yarn

build:
	yarn build

artifacts:
	# Static resources ideally served from CloudFront
	# cp -r public/. .next/standalone/public
	# cp -r .next/static/. .next/standalone/.next/static

	cp -r public $(BUILD_DIR)/tmp/
	cp -r .next/static $(BUILD_DIR)/tmp/

	# Copy artifacts for deployment
	cp -r .next/standalone/. $(ARTIFACTS_DIR)
	cp run.sh $(ARTIFACTS_DIR)

	$(eval ARCHIVE_PATH=$(shell npm pack))
	tar -xzvf "$(ARCHIVE_PATH)"

	ln -s /tmp/cache $(ARTIFACTS_DIR)/.next/cache

	cd $(ARTIFACTS_DIR) && zip -ry ${BUILD_DIR}/lambdaFunctionSrc.zip .
	rm -rf "$(ARTIFACTS_DIR)"
	mv ${BUILD_DIR}/lambdaFunctionSrc.zip "$(ARTIFACTS_DIR)"

build-NextjsFunction: install build artifacts

all: patch_node_modules

patch_node_modules:
	sed -i 's/\[name\].\[chunkhash\].bundle.js/js\/\[name\].\[chunkhash\].bundle.js/' ./node_modules/@storybook/core/dist/server/manager/manager-webpack.config.js
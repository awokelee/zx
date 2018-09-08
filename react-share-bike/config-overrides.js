const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
 
module.exports = function override(config, env) {
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': resolve('src'),
        'pages': resolve('src/pages'),
    }
    
    config = injectBabelPlugin(
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
      config,
    );

    config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#001529" },
    javascriptEnabled: true,
    })(config, env);
 
    return config;
}
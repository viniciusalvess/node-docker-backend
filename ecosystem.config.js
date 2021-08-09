module.exports = {
  apps : [{
    name: 'node-docker-backend',
    script: 'index.js',
    watch: '.',
    env: {
      NODE_ENV: "production",
    }
  }]

};

const config = {
    server: {
      port: process.env.PORT || 3000,
      hostname: "127.0.0.1",
      swaggerHostname: process.env.SWAGGER_HOSTNAME
    }
};

module.exports.config = config;
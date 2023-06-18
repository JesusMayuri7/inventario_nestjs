module.exports = {
    apps: [{
      name: "inventario",
      script: "dist/main.js",
      env: {
        STAGE: "prod",
        DB_PASSWORD:"postgres",
        DB_NAME:"railway",
        DB_HOST:"inventario.zd.net.pe",
        DB_PORT:5432,
        DB_USERNAME:"postgres",

        PORT:3000,
        HOST_API:"http://inventario.zd.net.pe:3000/api",

        JWT_SECRET:"Est3EsMISE3Dsecreto32s"
      },
     
    }]
  }
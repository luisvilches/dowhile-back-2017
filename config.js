module.exports = {
    server:{
        port: process.env.PORT || 5000
    },
    db: {
        connection: "mongodb://dowhile:andres2230@ds139619.mlab.com:39619/dowhile"
    },
    TOKEN_SECRET: process.env.TOKEN_SECRET || "79d27Mh1swkXnqGp2GdB0Xl4zmTKox2T"
}

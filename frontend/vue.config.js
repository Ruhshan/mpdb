module.exports = {
    devServer: {
        proxy: {
            "/api/*": {
                target: "http://localhost:8090",
                secure: false
            }
        }
    }
};

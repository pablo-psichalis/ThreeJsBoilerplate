module.exports = {
    entry: "./app.js",
    output: {
        filename: "bundle.js"
    },
    watch: true, // Live reload
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}
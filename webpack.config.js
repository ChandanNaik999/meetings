const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    mode: "development",
    entry: {
        "index": "./public/js/index.js",
        "meetings": "./public/js/meetings.js",
        "teams": "./public/js/teams.js",
    },
    output: {
        path: path.join( __dirname, "dist" ),
        filename: "[name].bundle.js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Calendar',
            filename: './index.html',
            template: path.join( __dirname, 'public', 'index.html' ),
            inject: true,
            chunks: [ 'index' ]
        }),
        new HtmlWebpackPlugin({
            title: 'Meetings',
            filename: './meetings.html',
            template: path.join( __dirname, 'public', 'meetings.html' ),
            inject: true,
            chunks: [ 'meetings' ]
        }),
        new HtmlWebpackPlugin({
            title: 'Teams',
            filename: './teams.html',
            template: path.join( __dirname, 'public', 'teams.html' ),
            inject: true,
            chunks: [ 'teams' ]
        })
    ]
}
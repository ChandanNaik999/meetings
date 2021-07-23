const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: {
        "index": "./public/js/index.js",
        "add_meeting": "./public/js/add_meeting.js",
        "search_meetings": "./public/js/search_meetings.js",
        "teams": "./public/js/teams.js",
        "signup": "./public/js/signup.js"
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
            title: 'Search Meetings',
            filename: './search_meetings.html',
            template: path.join( __dirname, 'public', 'search_meetings.html' ),
            inject: true,
            chunks: [ 'search_meetings' ]
        }),
        new HtmlWebpackPlugin({
            title: 'Add Meetings',
            filename: './add_meeting.html',
            template: path.join( __dirname, 'public', 'add_meeting.html' ),
            inject: true,
            chunks: [ 'add_meeting' ]
        }),
        new HtmlWebpackPlugin({
            title: 'Teams',
            filename: './teams.html',
            template: path.join( __dirname, 'public', 'teams.html' ),
            inject: true,
            chunks: [ 'teams' ]
        }),
        new HtmlWebpackPlugin({
            title: 'Signup',
            filename: './signup.html',
            template: path.join( __dirname, 'public', 'signup.html' ),
            inject: true,
            chunks: [ 'signup' ]
        })
    ]
}
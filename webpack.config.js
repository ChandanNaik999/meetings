const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    const envFileName = env.production ? './.env.production' : './.env';
    return {
        mode: "development",
        devtool: 'inline-source-map',
        entry: {
            "index": "./public/js/index.js",
            "search_meetings": "./public/js/search_meetings.js",
            "teams_list": "./public/js/teams_list.js",
            "register": "./public/js/register.js",
            "login": "./public/js/login.js",
            "account": "./public/js/account.js",
        },
        output: {
            path: path.join(__dirname, "dist"),
            filename: "[name].bundle.js",
            clean: true
        },
        module: {
            rules: [{
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
                template: path.join(__dirname, 'public', 'index.html'),
                inject: true,
                chunks: ['index']
            }),
            new HtmlWebpackPlugin({
                title: 'Meetings',
                filename: './search_meetings.html',
                template: path.join(__dirname, 'public', 'search_meetings.html'),
                inject: true,
                chunks: ['search_meetings']
            }),
            new HtmlWebpackPlugin({
                title: 'Teams',
                filename: './teams_list.html',
                template: path.join(__dirname, 'public', 'teams_list.html'),
                inject: true,
                chunks: ['teams_list']
            }),
            new HtmlWebpackPlugin({
                title: 'Register',
                filename: './register.html',
                template: path.join(__dirname, 'public', 'register.html'),
                inject: true,
                chunks: ['register']
            }),
            new HtmlWebpackPlugin({
                title: 'Login',
                filename: './login.html',
                template: path.join(__dirname, 'public', 'login.html'),
                inject: true,
                chunks: ['login']
            }),
            new HtmlWebpackPlugin({
                title: 'Account',
                filename: './account.html',
                template: path.join(__dirname, 'public', 'account.html'),
                inject: true,
                chunks: ['account']
            }),
            new Dotenv({
                path: envFileName,
            }),
        ],
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
    }
}
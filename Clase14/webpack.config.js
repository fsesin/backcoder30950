const nodeExternals = require('webpack-node-externals')

module.exports={
    entry: './src/server.ts',
    mode:'production',
    output:{
        path:__dirname+'/dist',
        filename: 'main.js'
    },
    target:'node',
    externals:[nodeExternals()],
    resolve:{
        extensions:['.ts','.js']
    },
    module:{
        rules:[
            {
                test:/\.tsx?/,
                use: 'ts-loader',
                exclude:/node_modules/
            }
        ]
    }
}
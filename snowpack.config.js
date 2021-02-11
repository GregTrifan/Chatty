module.exports = {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist' },
    },
    plugins: [[
        "snowpack-plugin-less",{javascriptEnable:true}
    ],"@snowpack/plugin-dotenv"],
    "routes": [
        {"match": "routes", "src": ".*", "dest": "/index.html"}
    ]
}
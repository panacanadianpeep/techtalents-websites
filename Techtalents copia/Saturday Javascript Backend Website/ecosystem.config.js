module.exports = {
	apps: [
		{
			name: "login-server",
			script: "login/index.js",
			watch: "login/index.js"
        },
        {
            name: "chat",
            script: "chat/chat.js",
            watch: "chat/chat.js"
        }
	]
}

export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["png/elevator_system.png","sketch/sketch.js","svg/arduino.svg","svg/bash.svg","svg/c.svg","svg/css.svg","svg/database Integration.svg","svg/docker.svg","svg/git.svg","svg/html.svg","svg/intellij.svg","svg/java.svg","svg/javascript.svg","svg/junit.svg","svg/opencv.svg","svg/prometheus.svg","svg/python.svg","svg/raspberry pi.svg","svg/spring.svg","svg/svelte.svg","svg/swagger.svg","svg/tensorflow.svg","svg/typescript.svg","svg/ubuntu.svg","svg/vscode.svg"]),
	mimeTypes: {".png":"image/png",".js":"application/javascript",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.7e6cf6a2.js","app":"_app/immutable/entry/app.b9db1842.js","imports":["_app/immutable/entry/start.7e6cf6a2.js","_app/immutable/chunks/scheduler.89bf212d.js","_app/immutable/chunks/singletons.fd1f85e3.js","_app/immutable/entry/app.b9db1842.js","_app/immutable/chunks/scheduler.89bf212d.js","_app/immutable/chunks/index.44fa51b5.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

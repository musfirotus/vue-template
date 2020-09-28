const requireModule = require.context(".", false, /\.js$/); //extract js files inside modules folder
const modules = {};

requireModule.keys().forEach((fileName) => {
	if (fileName === "./index.js") return; //reject the index.js file
	const moduleName = fileName.replace(/\.[/]|.js|[/]/g, "");
	// console.log(moduleName);
	// const moduleName = fileName
	// 	.split(".js")
	// 	.join("")
	// 	.split("./")
	//     .join("")
	modules[moduleName] = requireModule(fileName).default;
});
export default modules;

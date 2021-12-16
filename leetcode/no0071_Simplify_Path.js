/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {

    const DBG = false;
    if (DBG) console.log(`------------------- INPUT: "${path}"`);

    path = path.replace(/\/\//g, "/");

    let items = path.split("/");
    console.log(items);

    let folders = [];

    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        if (item == "") {
            continue;
        }
        if (DBG) console.log("check", item);

        if (item == "..") {
            if (DBG) console.log("--> cd ..");
            folders.pop();
        } else if (item == ".") {
            if (DBG) console.log("--> ignore");
        } else {
            folders.push(item);
        }
        if (DBG) console.log("folders=", folders);
    }

    let output = folders.join("/");
    if (output.length > 1 && output[output.length - 1] == "/") {
        output = output.substring(0, output.length - 1);
    }
    if (output[0] != "/") {
        output = `/${output}`;
    }
    if (DBG) console.log("==> OUTPUT:", output);
    return output;
};

if (simplifyPath("/home/") != "/home") { console.log("!!! FAIL"); return; }
if (simplifyPath("/../") != "/") { console.log("!!! FAIL"); return; };
if (simplifyPath("/abc/...") != "/abc/...") { console.log("!!! FAIL"); return; };
if (simplifyPath("/a/./b/../../c/") != "/c") { console.log("!!! FAIL"); return; };
if (simplifyPath("/a/../../b/../c//.//") != "/c") { console.log("!!! FAIL"); return; };
if (simplifyPath("/a//b////c/d//././/..") != "/a/b/c") { console.log("!!! FAIL"); return; };
if (simplifyPath("/a/./b///../c/../././../d/..//../e/./f/./g/././//.//h///././/..///") != "/e/f/g") { console.log("!!! FAIL"); return; };
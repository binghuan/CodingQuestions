/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    console.log("INPUT:", path);
    let items = path.split("/");
    console.log("Items:", items.length);
    let result = [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        console.log("check ", i, `__${item}__`);
        if (item == ".") {
            continue;
        }
        if (item == "") {
            console.log("path 1");
            if (result.slice(-1) != "/" && i != items.length - 1) {
                console.log("path 2");
                result.push("/");
            }
        } else if (item == "...") {
            if (result.slice(-1) != "/") {
                console.log("path x");
                result.push("/");
            }
            result.push(item);
        } else if (item == "..") {
            console.log("path 3");
            result.pop();
            result.pop();
            continue;
        } else {
            result.push(item);
            console.log("+", item);
        }

        console.log("--> ", result);
    }

    if (result.length == 0) {
        result.push("/")
    }
    if (result[0] != "/") {
        result = ["/"].concat(result);
    }
    if (result.length > 1 && result[result.length - 1] == "/") {
        result.pop();
    }

    let finalPath = result.toString().replace(/,/g, "");
    console.log("OUTPUT:", finalPath);
    return finalPath;

};

//simplifyPath("/home/");
if (simplifyPath("/../") != "/") { console.log("NG"); return; };
if (simplifyPath("/abc/...") != "/abc/...") { console.log("NG"); return; };
//simplifyPath("/a/./b/../../c/");
//simplifyPath("/a/../../b/../c//.//");


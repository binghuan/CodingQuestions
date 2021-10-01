function prefixUppercase(input) {
    console.log("INPUT:", input);
    let result = "";
    let items = input.split(",");
    for (let i = 0; i < items.length; i++) {
        items[i] = items[i][0].toUpperCase() + items[i].substring(1, items[i].length);
    }
    result = items.join(",");

    console.log("OUTPUT:", result);
}

prefixUppercase("abc,Cde,fGh");
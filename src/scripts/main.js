const copyButton = document.querySelector("button:has(.bg-copy)");
const loadButton = document.querySelector("button:has(.bg-load)");
const deleteButton = document.querySelector("button:has(.bg-delete)");
const textContainer = document.querySelector("textarea");

copyButton.addEventListener('click', () => {
    const keyNumber = localStorage.length;
    localStorage.setItem(`Item index: ${keyNumber}`, textContainer.value);
    textContainer.value = "";
});

loadButton.addEventListener('click', () => {
    localStorageValue = [];
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            let value = localStorage.getItem(key);
            let keyValue = `${key}: ${value}`;
            localStorageValue.push(keyValue);
        };
    };
    textContainer.value = localStorageValue.sort().join("\n");
});

deleteButton.addEventListener('click', () => {
    localStorage.clear();
    textContainer.value = "";
});
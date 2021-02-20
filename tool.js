(async function () {
    if (!location.href.includes("nytimes")) {
        alert("Only New York Times");
    } else {
        let article = await fetch(location.href).then((r) => r.text());
        let parser = new DOMParser();
        let doc = parser.parseFromString(article, "text/html");

        let win = window.open();
        win.document.open();
        // Write Title
        try {
            win.document.write(
                "<h2>" + doc.querySelector(".e1h9rw200").innerText + "</h2>"
            );
            win.document.title = doc.querySelector(".e1h9rw200").innerText;
        } catch (e) {}
        // Write URL
        try {
            let url = location.origin + location.pathname;
            win.document.write(
                `From <a href="${url}" target="_blank">${url}</a><br>`
            );
        } catch (e) {}
        // Write Writer
        try {
            win.document.write(
                `By <a href="${
                    doc.querySelector(".e1jsehar0").href
                }" target='_blank'>${
                    doc.querySelector(".e1jsehar0").innerText
                }</a></span>`
            );
        } catch (e) {}
        //
        try {
            win.document.write(
                `<h2>${doc.querySelector(".balancedHeadline").innerText}</h2>`
            );
        } catch (e) {}
        // Write Summary
        try {
            win.document.write(
                `<h3 class="summary">${
                    doc.querySelector("#article-summary").innerText
                }</h3>`
            );
        } catch (e) {}
        // Write Article
        try {
            Array.from(doc.querySelectorAll(".evys1bk0")).forEach((elm) => {
                win.document.write(`<p>${elm.innerText}</p>`);
            });
        } catch (e) {}
        // Write Styles
        win.document.write(
            "<style>*{font-family: sans-serif;} .summary{color: gray}</stlye>"
        );
        win.document.close();
    }
})();

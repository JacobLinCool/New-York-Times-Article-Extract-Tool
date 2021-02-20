(async function(){
    if(!location.href.includes("nytimes")) {
        alert("Only New York Times");
    }
    else {
        let article = await fetch(location.href).then(r=>r.text())
        let parser = new DOMParser()
        let doc = parser.parseFromString(article, "text/html")
        
        let win = window.open();
        win.document.open();
        // Get Title
        try{
            win.document.title = doc.getElementsByClassName("e1h9rw200")[0].innerText;
            win.document.write("<h2>"+doc.getElementsByClassName("e1h9rw200")[0].innerText+"</h2>");
        }catch(e){}
        // Get Subtitle
        try{
            win.document.write("<span style='color: gray'>Article "+doc.getElementsByClassName("e16638kd1")[0].innerText+"<br>");
        } catch(e){}
        // Get URL
        try{
            win.document.write("From <a href='"+location.href+"' target='_blank'>"+location.href+"</a><br>");
        } catch(e){}
        // Get Writer 
        try{
            win.document.write("By <a href='"+doc.getElementsByClassName("e1jsehar0")[0].href+"' target='_blank'>"+doc.getElementsByClassName("e1jsehar0")[0].innerText+"</a></span>");
        } catch(e){}

        try{
            win.document.write("<h2>"+doc.getElementsByClassName("balancedHeadline")[0].innerText+"</h2>");
        } catch(e){}
        try{
            win.document.write("<h3>"+doc.getElementById("article-summary").innerText+"</h3>");
        } catch(e){}
        for(var i = 0; i < doc.getElementsByClassName("evys1bk0").length; i++) {
            win.document.write("<p>"+doc.getElementsByClassName("evys1bk0")[i].innerText + "</p>");
        }
        win.document.write("<style>h1,h2,h3,p{font-family: sans-serif;} h3{color: gray}</stlye>");
        win.document.close();
        window.win = win;
    }
})()

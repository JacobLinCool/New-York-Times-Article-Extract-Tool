if(!location.href.includes("nytimes")) {
    alert("Only New York Times");
}
else {
    let win = window.open();
    win.document.open();
    // Get Title
    try{
        win.document.title = document.getElementsByClassName("e1h9rw200")[0].innerText;
        win.document.write("<h2>"+document.getElementsByClassName("e1h9rw200")[0].innerText+"</h2>");
    }catch(e){}
    // Get Subtitle
    try{
        win.document.write("<span style='color: gray'>Article "+document.getElementsByClassName("e16638kd1")[0].innerText+"<br>");
    } catch(e){}
    // Get URL
    try{
        win.document.write("From <a href='"+location.href+"' target='_blank'>"+location.href+"</a><br>");
    } catch(e){}
    // Get Writer 
    try{
        win.document.write("By <a href='"+document.getElementsByClassName("e1jsehar0")[0].href+"' target='_blank'>"+document.getElementsByClassName("e1jsehar0")[0].innerText+"</a></span>");
    } catch(e){}

    try{
        win.document.write("<h2>"+document.getElementsByClassName("balancedHeadline")[0].innerText+"</h2>");
    } catch(e){}
    try{
        win.document.write("<h3>"+document.getElementById("article-summary").innerText+"</h3>");
    } catch(e){}
    for(var i = 0; i < document.getElementsByClassName("evys1bk0").length; i++) {
        win.document.write("<p>"+document.getElementsByClassName("evys1bk0")[i].innerText + "</p>");
    }
    win.document.write("<style>h1,h2,h3,p{font-family: sans-serif;} h3{color: gray}</stlye>");
    win.document.close();
    window.win = win;
}

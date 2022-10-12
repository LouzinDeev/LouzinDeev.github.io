var hello = document.getElementById('langs');
var lang = 0;


setInterval(() => {
    var cmd;
    switch (lang) {
        case 0:
            cmd = "print";
            lang++;
            break;
        case 1:
            cmd = "Console.WriteLine";
            lang++;
            break;
        case 2:
            cmd = "std::cout";
            lang++;
            break;
        case 3:
            cmd = "printf";
            lang++;
            break;
        case 4:
            cmd = "echo";
            lang++;
            break;
        case 5:
            cmd = "Console.log";
            lang = 0;
            break;
        default:
            break;
    }
    if(lang == 5)
        hello.innerHTML = `<div class = cmd>${cmd}<div class =str> "Hello, World"</div></div>`
    else if(lang == 3)
        hello.innerHTML = `<div class = cmd>${cmd}<div class =str> <div class = parent> <<</div> "Hello, World"</div></div>`
    else 
        hello.innerHTML = `<div class = cmd>${cmd}<div class = parent>(<div class =str>"Hello, World"</div>)</div></div>`
}, 3000);
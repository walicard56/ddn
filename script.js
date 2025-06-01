
    const nome = "Fabricya";

    var canvas = document.getElementById("starfield");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var context = canvas.getContext("2d");
    var stars = 500;
    var colorrange = [0, 60, 240];
    var starArray = [];

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (var i = 0; i < stars; i++) {
        var x = Math.random() * canvas.offsetWidth;
        var y = Math.random() * canvas.offsetHeight;
        var radius = Math.random() * 1.2;
        var hue = colorrange[getRandom(0, colorrange.length - 1)];
        var sat = getRandom(50, 100);
        var opacity = Math.random();
        starArray.push({ x, y, radius, hue, sat, opacity });
    }

    var frameNumber = 0;
    var opacity = 0;
    var secondOpacity = 0;
    var thirdOpacity = 0;

    var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

    function drawStars() {
        for (var i = 0; i < stars; i++) {
            var star = starArray[i];
            context.beginPath();
            context.arc(star.x, star.y, star.radius, 0, 360);
            context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
            context.fill();
        }
    }

    function updateStars() {
        for (var i = 0; i < stars; i++) {
            if (Math.random() > 0.99) {
                starArray[i].opacity = Math.random();
            }
        }
    }

    function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
        lines.forEach((line, index) => {
            context.fillText(line, x, y + index * (fontSize + lineHeight));
        });
    }

    function drawText() {
        var fontSize = Math.min(30, window.innerWidth / 24);
        var lineHeight = 8;
        context.font = fontSize + "px Comic Sans MS";
        context.textAlign = "center";

        context.shadowColor = "rgba(255, 105, 180, 1)";
        context.shadowBlur = 8;

        const pink = (a) => `rgba(255, 105, 180, ${a})`;

        if(frameNumber < 250){
            context.fillStyle = pink(opacity);
            context.fillText("todo dia eu não acredito na sorte que eu tenho", canvas.width/2, canvas.height/2);
            opacity += 0.01;
        }
        else if(frameNumber < 500){
            context.fillStyle = pink(opacity);
            context.fillText("todo dia eu não acredito na sorte que eu tenho", canvas.width/2, canvas.height/2);
            opacity -= 0.01;
        }
        else if(frameNumber < 750){
            context.fillStyle = pink(opacity);
            if (window.innerWidth < 600) {
                drawTextWithLineBreaks(["entre trilhões e trilhões de estrelas,", "ao longo de bilhões de anos"], canvas.width/2, canvas.height/2, fontSize, lineHeight);
            } else {
                context.fillText("entre trilhões e trilhões de estrelas, ao longo de bilhões de anos", canvas.width/2, canvas.height/2);
            }
            opacity += 0.01;
        }
        else if(frameNumber < 1000){
            context.fillStyle = pink(opacity);
            if (window.innerWidth < 600) {
                drawTextWithLineBreaks(["entre trilhões e trilhões de estrelas,", "ao longo de bilhões de anos"], canvas.width/2, canvas.height/2, fontSize, lineHeight);
            } else {
                context.fillText("entre trilhões e trilhões de estrelas, ao longo de bilhões de anos", canvas.width/2, canvas.height/2);
            }
            opacity -= 0.01;
        }
        else if(frameNumber < 1250){
            context.fillStyle = pink(opacity);
            context.fillText("estar vivo, e poder passar essa vida com você", canvas.width/2, canvas.height/2);
            opacity += 0.01;
        }
        else if(frameNumber < 1500){
            context.fillStyle = pink(opacity);
            context.fillText("estar vivo, e poder passar essa vida com você", canvas.width/2, canvas.height/2);
            opacity -= 0.01;
        }
        else if(frameNumber < 1750){
            context.fillStyle = pink(opacity);
            context.fillText("é algo tão incrivelmente, inimaginavelmente improvável", canvas.width/2, canvas.height/2);
            opacity += 0.01;
        }
        else if(frameNumber < 2000){
            context.fillStyle = pink(opacity);
            context.fillText("é algo tão incrivelmente, inimaginavelmente improvável", canvas.width/2, canvas.height/2);
            opacity -= 0.01;
        }
        else if(frameNumber < 2250){
            context.fillStyle = pink(opacity);
            if (window.innerWidth < 600) {
                drawTextWithLineBreaks(["e ainda assim estou aqui com a chance", "impossível de te conhecer"], canvas.width/2, canvas.height/2, fontSize, lineHeight);
            } else {
                context.fillText("e ainda assim estou aqui com a chance impossível de te conhecer", canvas.width/2, canvas.height/2);
            }
            opacity += 0.01;
        }
        else if(frameNumber < 2500){
            context.fillStyle = pink(opacity);
            if (window.innerWidth < 600) {
                drawTextWithLineBreaks(["e ainda assim estou aqui com a chance", "impossível de te conhecer"], canvas.width/2, canvas.height/2, fontSize, lineHeight);
            } else {
                context.fillText("e ainda assim estou aqui com a chance impossível de te conhecer", canvas.width/2, canvas.height/2);
            }
            opacity -= 0.01;
        }
        else if(frameNumber < 99999){
            context.fillStyle = pink(opacity);
            const frase = `eu te amo tanto, ${nome}, mais do que o tempo e o espaço do universo podem conter`;
            if (window.innerWidth < 600) {
                drawTextWithLineBreaks([`eu te amo tanto, ${nome}, mais do que`, "o tempo e o espaço do universo podem conter"], canvas.width/2, canvas.height/2, fontSize, lineHeight);
            } else {
                context.fillText(frase, canvas.width/2, canvas.height/2);
            }
            opacity += 0.01;
        }

        if(frameNumber >= 2750 && frameNumber < 99999){
            context.fillStyle = pink(secondOpacity);
            if (window.innerWidth < 600) {
                drawTextWithLineBreaks(["e mal posso esperar para passar todo", "o tempo do mundo compartilhando esse amor com você!"], canvas.width/2, canvas.height/2 + 60, fontSize, lineHeight);
            } else {
                context.fillText("e mal posso esperar para passar todo o tempo do mundo compartilhando esse amor com você!", canvas.width/2, canvas.height/2 + 50);
            }
            secondOpacity += 0.01;
        }

        if(frameNumber >= 3000 && frameNumber < 99999){
            context.fillStyle = pink(thirdOpacity);
            context.fillText("Feliz Dia dos Namorados <3", canvas.width/2, canvas.height/2 + 120);
            thirdOpacity += 0.01;
            button.style.display = "block";
        }

        context.shadowColor = "transparent";
        context.shadowBlur = 0;
    }

    function draw() {
        context.putImageData(baseFrame, 0, 0);
        drawStars();
        updateStars();
        drawText();
        if (frameNumber < 99999) frameNumber++;
        requestAnimationFrame(draw);
    }

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
    });

    requestAnimationFrame(draw);

function randomPage() {
    var rndInt = Math.floor(Math.random() * 3 + 1)

    console.log(rndInt)
    switch(rndInt) {
        case 1:
            document.location.href = '/about'
            break;
        case 2:
            document.location.href = '/projects'
            break;
        case 3:
            document.location.href = '/contact'
            break;
    }
}
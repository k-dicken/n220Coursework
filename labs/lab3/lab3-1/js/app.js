function setup() {
    // need canvas that will fit all 25 circles (n*25 + x*2)
    createCanvas(1250, 200);


    // loop for creating 25 circles; x = a; x < n*25 + a; x = x + n;
    for (var x = 17; x < 442; x=x+17) {

        fill(0)

        // if statements first for fill

        // if % by 3 fill purple
        if ((x % 3) === 0) {
            fill(255, 0, 255);
        } 

        // if % by 5 fill green
        if ((x % 5) === 0) {
            fill(0, 255, 0);
        } 

        // if % by 3 & 5 fill blue & be square
        if ((x % 3) === 0 && (x % 5) === 0) {
            fill(0, 0, 255);
            rect(x - 5, 95, 10, 10);
        } 

        // then create circle
        circle(x, 100, 10);
    }
}



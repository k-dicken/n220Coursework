let colors = ["#ff8daa", "#f6e2b3", "#7e6651"];

function setup() {
   createCanvas(600, 800);

   for (i = 0; i < colors.length; i++) {
       fill (colors[i]);
       stroke (colors[i]);

       rect (i*200, 0, 800, 200);
   }
}



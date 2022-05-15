
class CellularAutomata{
    constructor(size,ctx, cells){
        this.size = size;
        this.ctx = ctx;
        this.cells = cells ? cells : [];
    }
    create(){
        for(let x=0;x<this.size;x++){
            let row = [];
            for(let y=0;y<this.size;y++){ 
            const alive = Math.random()<0.5;
            row.push(alive);
            }
            this.cells.push(row);
        }
    }

    next(){
        this.print();
        this.evaluate();
    }

    print(){
        this.ctx.clearRect(0,0, this.size, this.size);
        for(let x=0;x<this.size;x++){
            for(let y=0; y<this.size; y++){ 
                if(this.cells[x][y])
                    this.ctx.fillStyle="black";
                else
                    this.ctx.fillStyle="white";
                
                this.ctx.fillRect(x, y ,1,1);
            }
        }
    }

    evaluate(){
        let cellsAux = 
            new Array(100).fill("").map(()=>new Array(100).fill(false));

        for (let x=0; x<this.size; x++){
            for(let y=0; y<this.size; y++){
                let livingNeighbor = 0;

                //1
                if(x>0 && y>0)
                if(this.cells[x-1][y-1])
                    livingNeighbor++;

                //2
                if(y>0)
                if(this.cells[x][y-1])
                    livingNeighbor++;
                
                //3
                if(x< (this.size-1) && y>0)
                if(this.cells[x+1][y-1])
                    livingNeighbor++;
                
                //4
                if(x > 0)
                if(this.cells[x -1][ y])
                    livingNeighbor++;
                
                //5
                if(x< (this.size-1))
                if(this.cells[x +1][y])
                    livingNeighbor++;

                //6
                if(x > 0 && y< (this.size-1))
                if(this.cells[x -1][y +1])
                    livingNeighbor++;
                
                //7
                if(y < (this.size -1))
                if(this.cells[x][y +1])
                    livingNeighbor++;

                //8
                if(x < (this.size-1) && y < (this.size-1))
                if(this.cells[x+1][y+1])
                    livingNeighbor++;
                
                if(this.cells[x][y])
                    cellsAux[x][y] = livingNeighbor == 2 ||
                                     livingNeighbor == 3 ? true : false;
                else
                    cellsAux[x][y] = livingNeighbor == 3 ? true : false;
            }
        }

        this.cells = cellsAux;
    }
}
const cells = new Array(100).fill("").map(()=>new Array(100).fill(false));


cells[0][4] = true;
cells[0][5] = true;
cells[1][4] = true;
cells[1][5] = true;

cells[10][4] = true;
cells[10][5] = true;
cells[10][6] = true;
cells[10][7] = true;
cells[10][8] = true;
cells[10][9] = true;
cells[10][10] = true;


cells[11][4] = true;
cells[11][5] = true;
cells[11][6] = true;
cells[11][7] = true;
cells[11][8] = true;
cells[11][9] = true;
cells[11][10] = true;


cells[12][4] = true;
cells[13][5] = true;
cells[12][6] = true;
cells[12][7] = true;
cells[12][8] = true;
cells[12][9] = true;
cells[12][10] = true;


cells[14][4] = true;
cells[14][5] = true;
cells[14][6] = true;
cells[14][7] = true;
cells[14][8] = true;
cells[14][9] = true;
cells[14][10] = true;

cells[14][14] = true;
cells[14][15] = true;
cells[14][16] = true;
cells[14][17] = true;
cells[14][18] = true;
cells[14][19] = true;
cells[14][20] = true;


cells[15][4] = true;
cells[15][5] = true;
cells[15][6] = true;
cells[15][7] = true;
cells[15][8] = true;
cells[15][9] = true;
cells[15][10] = true;

cells[15][14] = true;
cells[15][15] = true;
cells[15][16] = true;
cells[15][17] = true;
cells[15][18] = true;
cells[15][19] = true;
cells[15][20] = true;

cells[15][24] = true;
cells[15][25] = true;
cells[15][26] = true;
cells[15][27] = true;
cells[15][28] = true;
cells[15][29] = true;
cells[15][30] = true;

cells[15][34] = true;
cells[15][35] = true;
cells[15][36] = true;
cells[15][37] = true;
cells[15][38] = true;
cells[15][39] = true;
cells[15][40] = true


cells[29][4] = true;
cells[29][5] = true;
cells[22][6] = true;
cells[90][7] = true;
cells[45][8] = true;
cells[45][9] = true;
cells[45][10] = true;

cells[17][14] = true;
cells[19][15] = true;
cells[19][16] = true;
cells[19][17] = true;
cells[19][18] = true;
cells[19][19] = true;
cells[19][20] = true;

cells[19][24] = true;
cells[19][25] = true;
cells[19][26] = true;
cells[19][27] = true;
cells[19][28] = true;
cells[19][29] = true;
cells[78][30] = true;

cells[7][34] = true;
cells[7][35] = true;
cells[78][36] = true;
cells[78][37] = true;
cells[87][38] = true;
cells[78][39] = true;
cells[56][40] = true;


cells[80][37] = true;
cells[80][38] = true;
cells[81][38] = true;
cells[81][39] = true;
cells[82][38] = true;


cells[80][47] = true;
cells[80][48] = true;
cells[81][48] = true;
cells[81][49] = true;
cells[82][48] = true;


cells[80][57] = true;
cells[80][58] = true;
cells[81][58] = true;
cells[81][59] = true;
cells[82][58] = true;

cells[90][57] = true;
cells[90][58] = true;
cells[90][58] = true;
cells[90][59] = true;
cells[90][58] = true;
cells[90][59] = true;
cells[90][67] = true;
cells[90][68] = true;
cells[91][68] = true;
cells[90][69] = true;
cells[92][68] = true;
cells[90][57] = true;
cells[90][58] = true;
cells[90][58] = true;
cells[90][59] = true;
cells[90][58] = true;



const ctx=canvas.getContext('2d');
const cellularAutomata =
    new CellularAutomata(100, ctx, cells);
cellularAutomata.create();
//cellularAutomata.print();
setInterval(()=>cellularAutomata.next(), 500);

class cellularautomatas{
    constructor(size,ctx){
        this.size = size;
        this.ctx = ctx;
        this.cells = [];
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

    print(){
        this.ctx.clearReact(0,0, this.size, this.size);
        for(let x=0;x<this.size;x++){
            for(let y=0;y<this.size;y++){ 
                if(this.cells[x][y])
                    this.ctx.fillStyle="black";
                else
                    this.ctx.fillStyle="white";
                
                this.ctx.fillReact(x, y ,1,1);

            }
        }
    }
}

const ctx=canvas.getContext('2d');
const cellularAutomata =
    new CellularAutomata(100,ctx)
cellularAutomata.create();
cellularAutomata.print();
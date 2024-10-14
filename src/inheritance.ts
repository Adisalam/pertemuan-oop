class hewan46 {
    name!: string;
    kaki!: number;

    constructor(name: string, kaki: number){
        this.name = name;
        this.kaki = kaki;
    }
}

class hewan64 extends hewan46 {
    warna!: string;

    constructor(name: string, kaki: number, warna: string){
        super(name, kaki);
        this.warna = warna;
    }
}

const hewan01 = new hewan64("tikus",12,"hitam")
console.log(hewan01);
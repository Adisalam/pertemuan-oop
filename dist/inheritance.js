"use strict";
class hewan46 {
    constructor(name, kaki) {
        this.name = name;
        this.kaki = kaki;
    }
}
class hewan64 extends hewan46 {
    constructor(name, kaki, warna) {
        super(name, kaki);
        this.warna = warna;
    }
}
const hewan01 = new hewan64("tikus", 12, "hitam");
console.log(hewan01);

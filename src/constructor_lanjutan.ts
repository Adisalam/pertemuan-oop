class hewan3 {
    name!: string;
    kaki!: number;

    constructor(name: string, kaki: number){
        this.name = name;
        this.kaki = kaki;
    }
}
const hewan4 = new hewan3("Gajah", 12);
console.log(hewan4);

hewan4.name = "jerapah"
hewan4.kaki = 4
console.log(hewan4);

hewan4.name = "dimas"
hewan4.kaki = 100
console.log(hewan4);

// bagian 2

class hewan23 {
    constructor(public name: string, public kaki: number){}
}
const hewan21 = new hewan23("kucing", 4);
console.log(hewan21);
function deretAritmatika(awal: number, beda: number, jumlah: number): number[] {
    const deret: number[] = [];
    let nilai: number = awal;
    for (let i = 0; i < jumlah; i++) {
        deret.push(nilai);
        nilai += beda;
    }
    return deret;
}

const nim: string = "052714972";
const duaDigitTerakhir: number = parseInt(nim.slice(-2));
const digitKetigaDariBelakang: number = parseInt(nim.charAt(nim.length - 3));
const angkaAwal: number = duaDigitTerakhir;
const beda: number = digitKetigaDariBelakang + 1;

console.log("=== Soal 2: Deret Aritmatika ===");
console.log("NIM: " + nim);
console.log("2 digit terakhir: " + duaDigitTerakhir);
console.log("Digit ke-3 dari belakang: " + digitKetigaDariBelakang);
console.log("Angka awal deret: " + angkaAwal);
console.log("Beda (step): " + digitKetigaDariBelakang + " + 1 = " + beda);
console.log("");

const hasilDeret: number[] = deretAritmatika(angkaAwal, beda, 10);
console.log("Output: " + hasilDeret.join(", "));

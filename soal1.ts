function cetakSegitiga(tinggi: number): void {
    for (let i = 1; i <= tinggi; i++) {
        let baris: string = "";
        for (let j = 1; j <= i; j++) {
            baris += j + " ";
        }
        console.log(baris.trim());
    }
}

const nim: string = "052714972";
const digitTerakhir: number = parseInt(nim.charAt(nim.length - 1));
const tinggiSegitiga: number = digitTerakhir;

console.log("=== Soal 1: Pola Segitiga ===");
console.log("NIM: " + nim);
console.log("Digit terakhir: " + digitTerakhir);
console.log("Tinggi segitiga: " + tinggiSegitiga);
console.log("");
cetakSegitiga(tinggiSegitiga);
function isPrima(angka: number): boolean {
    if (angka < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(angka); i++) {
        if (angka % i === 0) {
            return false;
        }
    }
    return true;
}

function cariPrima(batas: number): number[] {
    const prima: number[] = [];
    for (let i = 1; i <= batas; i++) {
        if (isPrima(i)) {
            prima.push(i);
        }
    }
    return prima;
}

const nim: string = "052714972";
const duaDigitTerakhir: number = parseInt(nim.slice(-2));
const batasAkhir: number = duaDigitTerakhir + 10;

console.log("=== Soal 3: Bilangan Prima ===");
console.log("NIM: " + nim);
console.log("2 digit terakhir: " + duaDigitTerakhir);
console.log("Batas akhir: " + duaDigitTerakhir + " + 10 = " + batasAkhir);
console.log("");

const hasilPrima: number[] = cariPrima(batasAkhir);
console.log("Output: " + hasilPrima.join(", "));

const siswa = {
    nama: "Royan",
    kelas: "X RPL 3",
    hobi: "Bermain Catur",
};

//output dot notation
console.log(siswa.nama);
console.log(siswa.kelas);
console.log(siswa.hobi);
//output bracket notation
console.log(siswa["nama"]);
console.log(siswa["kelas"]);
console.log(siswa["hobi"]);
//template literal
console.log(`Siswa ini bernama ${siswa.nama} dari kelas ${siswa.kelas} dan hobinya adalah ${siswa.hobi}.`);

siswa.kelas = "XI RPL 3";
siswa.cita_cita = "Owner Perusahaan";

console.log(siswa)
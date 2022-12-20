const users = {
  nama: "ikhsan",
  kelas: 12,
};

// for (const key in users) {
//   if ("azzam" === users[key]) {
//     console.log("Nama sudah ada dalam database!");
//   } else {
//     console.log("Akun terdaftar, terimakasih!");
//   }
// }

if ("ikhsan" === users["nama"]) {
  console.log("Nama sudah ada dalam database!");
} else {
  console.log("Akun terdaftar, terimakasih!");
}

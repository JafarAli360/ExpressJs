const express = require("express");
const app = express();

// Ambil port dari environment variable
// Dengan nilai default 8000
const PORT = process.env.PORT || 8000;


app.get("/home/file", (req, res) => {
    console.log(req.query)
    res
      .status(200)
      .send(`User yang sedang menambahkan file ${req.query.user}`);
});

app.get("/home/file/:id", (req, res) => {
    console.log(req.params)
    res
      .status(200)
      .send(`Kamu sedang menambahkan file  ${req.params.id}`);
});

app.use(express.urlencoded());

const file_msg = `Terima kasih sudah menambah file di dalam database kami.`;

app.post("/home/file", (req, res) => {
    console.log(req.body);
    res.status(201).send(file_msg);
});

app.put("/home/file", (req, res) => {
    res.send("Anda berhasil")
});

app.delete("/home/file", (req, res) => {
    res.send("Anda berhasil menghapus")
});


app.listen(PORT, () => {
  console.log(`Express nyala di http://localhost:${PORT}`);
});


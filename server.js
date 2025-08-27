   // server.js
   const express = require('express');
   const cors = require('cors');
   const bodyParser = require('body-parser');
   const app = express();
   const port = 3000;

   app.use(cors());
   app.use(bodyParser.json());

   let submissions = []; // Array untuk menyimpan data tugas

   // Endpoint untuk mengumpulkan tugas
   app.post('/submit', (req, res) => {
       const submission = req.body;
       submissions.push(submission);
       res.status(201).send({ message: 'Tugas berhasil dikumpulkan!' });
   });

   // Endpoint untuk mendapatkan semua tugas
   app.get('/submissions', (req, res) => {
       res.send(submissions);
   });

   app.listen(port, () => {
       console.log(`Server berjalan di http://localhost:${port}`);
   });
   
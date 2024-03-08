const express = require('express');
const dbConnect = require('./database/dbConnect');
const router = require('./routes/index');
const cors = require("cors")
const tratamentoDeErros = require('./middlewares/tratamentoDeErros');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
router(app);
app.use(tratamentoDeErros);

dbConnect(process.env.DB);
app.listen(PORT);

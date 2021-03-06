const express = require('express');

const router = express.Router();
const GraficosResource = require('../resource/graficos-resource');

router.get('/boletim/grafico-diario', GraficosResource.consultarBoletimGraficoDiario);
router.get('/boletim/grafico', GraficosResource.consultarBoletimGrafico);
router.get('/boletim/graficoPaginado', GraficosResource.consultarBoletimGraficoPaginado);
router.get('/boletim/cards', GraficosResource.consultarBoletimCards);
router.get('/boletim/media-movel', GraficosResource.consultarMediaMovel);

module.exports = router;

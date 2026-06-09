const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// PDF 400x400 para melhor qualidade
const SIZE = 400;
const doc = new PDFDocument({ size: [SIZE, SIZE], margin: 0 });

const out = path.join(__dirname, 'finsight_logo.pdf');
doc.pipe(fs.createWriteStream(out));

// Fundo roxo FinSight
doc.rect(0, 0, SIZE, SIZE).fill('#7C5CFC');

// O SVG tem viewBox="0 -960 960 960"
// Isso significa: x de 0 a 960, y de -960 a 0
// Queremos mapear isso para um quadrado de ICON x ICON centrado no PDF

const ICON = SIZE * 0.65;  // ícone ocupa 65% do PDF
const offsetX = (SIZE - ICON) / 2;
const offsetY = (SIZE - ICON) / 2;
const scale = ICON / 960;

// Mapeamento correto:
// SVG x=0        → PDF x = offsetX
// SVG x=960      → PDF x = offsetX + ICON
// SVG y=-960     → PDF y = offsetY       (topo do ícone)
// SVG y=0        → PDF y = offsetY+ICON  (base do ícone)
//
// PDF_x = offsetX + svgX * scale
// PDF_y = (offsetY + ICON) + svgY * scale
//       = offsetY + ICON + svgY * scale
//       = offsetY + 960*scale + svgY * scale   (pois ICON = 960*scale)

doc.save();
doc.translate(offsetX, offsetY + ICON);  // origem no canto inferior esquerdo do ícone
doc.scale(scale, scale);                 // escala uniforme (Y já está correto: negativo = acima)

doc
  .path('M180-233v53-600 547Zm0 113q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h600q24.75 0 42.38 17.62Q840-804.75 840-780v134h-60v-134H180v600h600v-133h60v133q0 24.75-17.62 42.37Q804.75-120 780-120H180Zm358-173q-30.52 0-52.26-21.44Q464-335.89 464-366v-227q0-30.11 21.74-51.56Q507.48-666 538-666h270q30.53 0 52.26 21.44Q882-623.11 882-593v227q0 30.11-21.74 51.56Q838.53-293 808-293H538Zm284-60v-253H524v253h298Zm-169.76-63q26.76 0 45.26-18.96Q716-453.92 716-481q0-26.25-19-44.63Q678-544 652-544t-45 18.37q-19 18.38-19 44.63 0 27.08 18.74 46.04Q625.47-416 652.24-416Z')
  .fill('white');

doc.restore();
doc.end();

console.log('PDF gerado:', out);

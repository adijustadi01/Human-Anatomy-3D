/* Stylized abdomen navigator (schematic, not to scale). */
AN.DIAGRAMS['abdomen'] = {
  zones: [
    { id: 'wall', label: 'Anterior abdominal wall' },
    { id: 'inguinal', label: 'Inguinal region' },
    { id: 'liver', label: 'Liver & biliary tract' },
    { id: 'stomach', label: 'Stomach, spleen & lesser sac' },
    { id: 'pancreas', label: 'Pancreas & duodenum' },
    { id: 'intestines', label: 'Intestines' },
    { id: 'retro', label: 'Posterior wall & retroperitoneum' }
  ],
  svg:
  '<svg viewBox="0 0 300 320" role="img" aria-label="Abdomen navigator">' +
  '<a href="#/region/__REGION__?zone=wall" data-zone="wall"><rect class="z" x="6" y="6" width="288" height="306" rx="30"/><text x="150" y="24">Abdominal wall</text></a>' +
  '<a href="#/region/__REGION__?zone=liver" data-zone="liver"><path class="z" d="M18 40 L150 34 L150 70 Q110 100 60 98 Q24 96 18 70 Z"/><text x="80" y="70">Liver</text></a>' +
  '<a href="#/region/__REGION__?zone=stomach" data-zone="stomach"><path class="z" d="M156 34 L282 40 L282 96 Q230 104 156 98 Z"/><text x="219" y="66">Stomach</text><text x="219" y="82" style="font-size:10px">&amp; spleen</text></a>' +
  '<a href="#/region/__REGION__?zone=pancreas" data-zone="pancreas"><rect class="z" x="72" y="106" width="156" height="28" rx="12"/><text x="150" y="124" style="font-size:11px">Pancreas &amp; duodenum</text></a>' +
  '<a href="#/region/__REGION__?zone=retro" data-zone="retro"><ellipse class="z" cx="42" cy="160" rx="20" ry="34"/><ellipse class="z" cx="258" cy="160" rx="20" ry="34"/><text x="42" y="164" style="font-size:10px">Kidney</text><text x="258" y="164" style="font-size:10px">Kidney</text></a>' +
  '<a href="#/region/__REGION__?zone=intestines" data-zone="intestines"><rect class="z" x="72" y="142" width="156" height="124" rx="18"/><text x="150" y="208">Intestines</text></a>' +
  '<a href="#/region/__REGION__?zone=inguinal" data-zone="inguinal"><rect class="z" x="30" y="276" width="96" height="20" rx="8" transform="rotate(14 78 286)"/><rect class="z" x="174" y="276" width="96" height="20" rx="8" transform="rotate(-14 222 286)"/><text x="150" y="300" style="font-size:11px">Inguinal</text></a>' +
  '</svg>'
};

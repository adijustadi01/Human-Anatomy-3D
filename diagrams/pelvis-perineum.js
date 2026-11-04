/* Stylized pelvis & perineum navigator (schematic side view: front on the left, back on the right). */
AN.DIAGRAMS['pelvis-perineum'] = {
  zones: [
    { id: 'walls', label: 'Pelvic walls, floor & bony pelvis' },
    { id: 'bladder', label: 'Urinary bladder' },
    { id: 'female', label: 'Female reproductive organs' },
    { id: 'male', label: 'Male reproductive organs' },
    { id: 'rectum', label: 'Rectum & anal canal' },
    { id: 'perineum', label: 'Perineum' }
  ],
  svg:
  '<svg viewBox="0 0 300 270" role="img" aria-label="Pelvis and perineum navigator">' +
  '<a href="#/region/__REGION__?zone=walls" data-zone="walls"><path class="z" d="M14 18 L286 18 L254 200 L46 200 Z"/><text x="150" y="36">Pelvic walls &amp; floor</text></a>' +
  '<a href="#/region/__REGION__?zone=bladder" data-zone="bladder"><rect class="z" x="52" y="58" width="60" height="80" rx="24"/><text x="82" y="102">Bladder</text></a>' +
  '<a href="#/region/__REGION__?zone=female" data-zone="female"><rect class="z" x="118" y="50" width="66" height="54" rx="12"/><text x="151" y="74">Female</text><text x="151" y="90" style="font-size:10px">uterus, ovary</text></a>' +
  '<a href="#/region/__REGION__?zone=male" data-zone="male"><rect class="z" x="118" y="110" width="66" height="54" rx="12"/><text x="151" y="134">Male</text><text x="151" y="150" style="font-size:10px">prostate, testis</text></a>' +
  '<a href="#/region/__REGION__?zone=rectum" data-zone="rectum"><rect class="z" x="190" y="50" width="58" height="120" rx="20"/><text x="219" y="106">Rectum</text><text x="219" y="122" style="font-size:10px">&amp; anal canal</text></a>' +
  '<a href="#/region/__REGION__?zone=perineum" data-zone="perineum"><rect class="z" x="40" y="210" width="220" height="40" rx="14"/><text x="150" y="235">Perineum</text></a>' +
  '<text x="20" y="266" style="font-size:10px;text-anchor:start">front</text><text x="280" y="266" style="font-size:10px;text-anchor:end">back</text>' +
  '</svg>'
};

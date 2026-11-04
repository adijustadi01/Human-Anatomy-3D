/* Stylized thorax navigator (schematic, not to scale).
   The mediastinum is drawn as a divided column: superior above the sternal-angle
   plane; anterior | middle | posterior below it (as in the lateral-view teaching diagram). */
AN.DIAGRAMS['thorax'] = {
  zones: [
    { id: 'wall', label: 'Thoracic wall' },
    { id: 'lungs', label: 'Lungs & pleura' },
    { id: 'superior', label: 'Superior mediastinum' },
    { id: 'anterior', label: 'Anterior mediastinum' },
    { id: 'middle', label: 'Middle mediastinum (heart)' },
    { id: 'posterior', label: 'Posterior mediastinum' },
    { id: 'diaphragm', label: 'Diaphragm' }
  ],
  svg:
  '<svg viewBox="0 0 300 290" role="img" aria-label="Thorax navigator">' +
  '<a href="#/region/__REGION__?zone=wall" data-zone="wall"><rect class="z" x="6" y="6" width="288" height="262" rx="44"/><text x="150" y="26">Thoracic wall</text></a>' +
  '<a href="#/region/__REGION__?zone=lungs" data-zone="lungs"><path class="z" d="M104 40 C60 40 30 90 28 160 L28 236 L104 222 Z"/><path class="z" d="M196 40 C240 40 270 90 272 160 L272 236 L196 222 Z"/><text x="68" y="150">Lung</text><text x="232" y="150">Lung</text></a>' +
  '<a href="#/region/__REGION__?zone=superior" data-zone="superior"><rect class="z" x="110" y="36" width="80" height="62" rx="6"/><text x="150" y="71">Superior</text></a>' +
  '<a href="#/region/__REGION__?zone=anterior" data-zone="anterior"><rect class="z" x="110" y="102" width="18" height="118" rx="4"/><text x="119" y="161" transform="rotate(-90 119 161)" style="font-size:10px">Anterior</text></a>' +
  '<a href="#/region/__REGION__?zone=middle" data-zone="middle"><rect class="z" x="131" y="102" width="38" height="118" rx="6"/><text x="150" y="161" transform="rotate(-90 150 161)">Middle · heart</text></a>' +
  '<a href="#/region/__REGION__?zone=posterior" data-zone="posterior"><rect class="z" x="172" y="102" width="18" height="118" rx="4"/><text x="181" y="161" transform="rotate(-90 181 161)" style="font-size:10px">Posterior</text></a>' +
  '<a href="#/region/__REGION__?zone=diaphragm" data-zone="diaphragm"><path class="z" d="M24 262 L24 244 Q86 206 150 228 Q214 206 276 244 L276 262 Z"/><text x="150" y="254">Diaphragm</text></a>' +
  '</svg>'
};

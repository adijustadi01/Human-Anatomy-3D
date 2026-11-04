/* Stylized lower-limb navigator (schematic). Zone ids must match "zones" in content/lower-limb/*.js */
AN.DIAGRAMS['lower-limb'] = {
  zones: [
    { id: 'hip', label: 'Hip & gluteal region' },
    { id: 'thigh', label: 'Thigh' },
    { id: 'knee', label: 'Knee & popliteal fossa' },
    { id: 'leg', label: 'Leg' },
    { id: 'foot', label: 'Ankle & foot' }
  ],
  svg:
  '<svg viewBox="0 0 220 560" role="img" aria-label="Lower limb navigator">' +
  '<a href="#/region/__REGION__?zone=hip" data-zone="hip"><rect class="z" x="44" y="10" width="132" height="80" rx="36"/><text x="110" y="55">Hip &amp; gluteal</text></a>' +
  '<a href="#/region/__REGION__?zone=thigh" data-zone="thigh"><path class="z" d="M60 96 L160 96 L146 250 L74 250 Z"/><text x="110" y="178">Thigh</text></a>' +
  '<a href="#/region/__REGION__?zone=knee" data-zone="knee"><rect class="z" x="70" y="255" width="80" height="44" rx="16"/><text x="110" y="282">Knee</text></a>' +
  '<a href="#/region/__REGION__?zone=leg" data-zone="leg"><path class="z" d="M74 304 L146 304 L136 450 L84 450 Z"/><text x="110" y="382">Leg</text></a>' +
  '<a href="#/region/__REGION__?zone=foot" data-zone="foot"><path class="z" d="M82 455 L138 455 L144 498 L204 518 L204 548 L82 548 Z"/><text x="132" y="532">Ankle &amp; foot</text></a>' +
  '</svg>'
};

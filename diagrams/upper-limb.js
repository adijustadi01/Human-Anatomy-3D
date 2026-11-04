/* Stylized upper-limb navigator. Each clickable zone id must match the
   "zones" values used in content/upper-limb/*.js */
AN.DIAGRAMS['upper-limb'] = {
  zones: [
    { id: 'shoulder', label: 'Pectoral, scapular & shoulder' },
    { id: 'axilla', label: 'Axilla' },
    { id: 'arm', label: 'Arm' },
    { id: 'elbow', label: 'Elbow & cubital fossa' },
    { id: 'forearm', label: 'Forearm' },
    { id: 'hand', label: 'Wrist & hand' }
  ],
  svg:
  '<svg viewBox="0 0 260 540" role="img" aria-label="Upper limb navigator">' +
  '<a href="#/region/__REGION__?zone=shoulder" data-zone="shoulder"><rect class="z" x="55" y="12" width="120" height="82" rx="38"/><text x="115" y="58">Shoulder</text></a>' +
  '<a href="#/region/__REGION__?zone=arm" data-zone="arm"><rect class="z" x="72" y="100" width="72" height="136" rx="22"/><text x="108" y="175">Arm</text></a>' +
  '<a href="#/region/__REGION__?zone=axilla" data-zone="axilla"><ellipse class="z" cx="185" cy="112" rx="40" ry="17"/><text x="185" y="116">Axilla</text></a>' +
  '<a href="#/region/__REGION__?zone=elbow" data-zone="elbow"><rect class="z" x="68" y="241" width="80" height="42" rx="14"/><text x="108" y="267">Elbow</text></a>' +
  '<a href="#/region/__REGION__?zone=forearm" data-zone="forearm"><path class="z" d="M70 288 L146 288 L134 418 L84 418 Z"/><text x="108" y="358">Forearm</text></a>' +
  '<a href="#/region/__REGION__?zone=hand" data-zone="hand"><path class="z" d="M80 423 L138 423 L146 470 L140 528 L76 528 L70 470 Z"/><text x="108" y="482">Hand</text></a>' +
  '</svg>'
};

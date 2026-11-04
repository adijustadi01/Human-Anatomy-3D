/* Stylized head & neck navigator (schematic front view). Head zones are ready for part 2. */
AN.DIAGRAMS['head-neck'] = {
  zones: [
    { id: 'cranial', label: 'Scalp, skull & cranial cavity' },
    { id: 'face', label: 'Face & parotid' },
    { id: 'orbit', label: 'Orbit & eye' },
    { id: 'ear', label: 'Ear' },
    { id: 'nose-mouth', label: 'Nose, mouth & pharynx (upper)' },
    { id: 'anterior', label: 'Anterior triangle of neck' },
    { id: 'posterior', label: 'Posterior triangle of neck' },
    { id: 'larynx', label: 'Larynx & pharynx' },
    { id: 'thyroid', label: 'Thyroid & parathyroids' },
    { id: 'root', label: 'Root of neck' }
  ],
  svg:
  '<svg viewBox="0 0 260 400" role="img" aria-label="Head and neck navigator">' +
  '<a href="#/region/__REGION__?zone=cranial" data-zone="cranial"><ellipse class="z" cx="130" cy="118" rx="84" ry="104"/><text x="130" y="48">Scalp &amp; cranium</text></a>' +
  '<a href="#/region/__REGION__?zone=ear" data-zone="ear"><ellipse class="z" cx="40" cy="124" rx="11" ry="22"/><ellipse class="z" cx="220" cy="124" rx="11" ry="22"/><text x="40" y="160" style="font-size:10px">Ear</text></a>' +
  '<a href="#/region/__REGION__?zone=face" data-zone="face"><rect class="z" x="62" y="132" width="136" height="80" rx="38"/><text x="84" y="190" style="font-size:11px">Face</text></a>' +
  '<a href="#/region/__REGION__?zone=orbit" data-zone="orbit"><circle class="z" cx="96" cy="106" r="16"/><circle class="z" cx="164" cy="106" r="16"/><text x="96" y="110" style="font-size:10px">Orbit</text><text x="164" y="110" style="font-size:10px">Orbit</text></a>' +
  '<a href="#/region/__REGION__?zone=nose-mouth" data-zone="nose-mouth"><rect class="z" x="112" y="118" width="36" height="78" rx="12"/><text x="130" y="146" style="font-size:10px">Nose</text><text x="130" y="182" style="font-size:10px">Mouth</text></a>' +
  '<a href="#/region/__REGION__?zone=anterior" data-zone="anterior"><rect class="z" x="70" y="228" width="44" height="104"/><rect class="z" x="146" y="228" width="44" height="104"/><text x="92" y="262" style="font-size:10px">Ant. △</text><text x="168" y="262" style="font-size:10px">Ant. △</text></a>' +
  '<a href="#/region/__REGION__?zone=posterior" data-zone="posterior"><path class="z" d="M68 240 L68 334 L20 334 Z"/><path class="z" d="M192 240 L192 334 L240 334 Z"/><text x="52" y="324" style="font-size:9px">Post. △</text><text x="208" y="324" style="font-size:9px">Post. △</text></a>' +
  '<a href="#/region/__REGION__?zone=larynx" data-zone="larynx"><rect class="z" x="116" y="228" width="28" height="62" rx="10"/><text x="130" y="262" style="font-size:9px">Larynx</text></a>' +
  '<a href="#/region/__REGION__?zone=thyroid" data-zone="thyroid"><rect class="z" x="98" y="294" width="64" height="26" rx="12"/><text x="130" y="311" style="font-size:10px">Thyroid</text></a>' +
  '<a href="#/region/__REGION__?zone=root" data-zone="root"><rect class="z" x="20" y="340" width="220" height="34" rx="12"/><text x="130" y="362">Root of neck</text></a>' +
  '</svg>'
};

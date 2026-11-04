/* Stylized neuroanatomy navigator (schematic side view: front on the left). */
AN.DIAGRAMS['neuroanatomy'] = {
  zones: [
    { id: 'cerebrum', label: 'Cerebral cortex & white matter' },
    { id: 'deep', label: 'Thalamus, hypothalamus, basal ganglia, internal capsule' },
    { id: 'ventricles', label: 'Ventricles & CSF' },
    { id: 'vessels', label: 'Blood supply of brain' },
    { id: 'brainstem', label: 'Brainstem' },
    { id: 'cerebellum', label: 'Cerebellum' },
    { id: 'spinal', label: 'Spinal cord & tracts' }
  ],
  svg:
  '<svg viewBox="0 0 300 300" role="img" aria-label="Neuroanatomy navigator">' +
  '<a href="#/region/__REGION__?zone=cerebrum" data-zone="cerebrum"><ellipse class="z" cx="140" cy="104" rx="126" ry="90"/><text x="140" y="40">Cerebrum</text></a>' +
  '<a href="#/region/__REGION__?zone=ventricles" data-zone="ventricles"><rect class="z" x="100" y="58" width="80" height="18" rx="9"/><text x="140" y="71" style="font-size:10px">Ventricles &amp; CSF</text></a>' +
  '<a href="#/region/__REGION__?zone=deep" data-zone="deep"><ellipse class="z" cx="140" cy="114" rx="50" ry="28"/><text x="140" y="112" style="font-size:10px">Thalamus &amp;</text><text x="140" y="125" style="font-size:10px">basal ganglia</text></a>' +
  '<a href="#/region/__REGION__?zone=vessels" data-zone="vessels"><rect class="z" x="70" y="164" width="76" height="20" rx="10"/><text x="108" y="178" style="font-size:10px">Circle of Willis</text></a>' +
  '<a href="#/region/__REGION__?zone=cerebellum" data-zone="cerebellum"><ellipse class="z" cx="232" cy="206" rx="44" ry="30"/><text x="236" y="210" style="font-size:11px">Cerebellum</text></a>' +
  '<a href="#/region/__REGION__?zone=brainstem" data-zone="brainstem"><rect class="z" x="152" y="176" width="36" height="74" rx="12"/><text x="170" y="216" transform="rotate(-90 170 216)" style="font-size:11px">Brainstem</text></a>' +
  '<a href="#/region/__REGION__?zone=spinal" data-zone="spinal"><rect class="z" x="159" y="254" width="22" height="42" rx="7"/><text x="170" y="280" style="font-size:9px">Cord</text></a>' +
  '</svg>'
};

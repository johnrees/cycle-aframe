import xs from 'xstream';
import {run} from '@cycle/run';
import {h, makeDOMDriver} from '@cycle/dom';
require('aframe');

function main(sources) {
  let vdom$ = xs.periodic(16).startWith(0).endWhen(xs.periodic(3000).take(1)).map(i =>
    h('a-scene', [
      h('a-sphere', {
        attrs: {
          position: `0 ${i / 100} -4`,
          radius: '1.25',
          color: 'pink'
        }
      }),
      h('a-box', {
        attrs: {
          position: '-1 0.5 1',
          rotation: '0 45 0',
          width: '1',
          height: '1',
          depth: '1',
          color: '#4CC3D9'
        }
      }),
      h('a-cylinder', {
        attrs: {
          position: '1 0.75 1',
          radius: '0.5',
          height: '10',
          color: '#FFC65D'
        }
      }),
      h('a-plane', {
        attrs: {
          rotation: '-90 0 0',
          width: '4',
          height: '10',
          color: '#7BC8A4'
        }
      }),
      h('a-sky', { attrs: {color: '#ECECEC'} })
    ])
  );

  return {
    DOM: vdom$
  };
}

run(main, {
  DOM: makeDOMDriver('#main-container')
});

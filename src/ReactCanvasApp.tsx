import { ReactCanvas as RC } from './shared';

export const ReactCanvasApp = () => {

  return (
    <>
    <h1 style={{fontFamily: 'sans-serif', fontSize: '40px', color: '#009c22'}}>React TS Canvas - Axis</h1>
      <RC
        larguraCanva={500}
        alturaCanva={500}
        largura={500}
        altura={500}
        medidaX={'km'}
        medidaY={'mm'}
        strokeColor={'#5eff00'}
        strokeFormat={'solid'}
        strokeLine={'2px'}
      />
    </>
  )
}
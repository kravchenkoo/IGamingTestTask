import Circle from './Circle';

function Circles() {
  return (
    <>
      <Circle
        className="parallax parallax-circle"
        $widthHeight={'19px'}
        $color="#3083FF"
        $position={{ top: '22%', left: '75%' }}
        $zIndex={3}
        data-speedx="0.2"
        data-speedy="0.1"
        data-speedz="1.8"
      />
      <Circle
        className="parallax parallax-circle"
        $donut
        $blur={9}
        $widthHeight={'58px'}
        $borderWitdth={16}
        $zIndex={1}
        $color="#85E5FD"
        $position={{ top: '24%', left: '39%' }}
        data-speedx="0.05"
        data-speedy="0.07"
        data-speedz="0.5"
      />
      <Circle
        className="parallax parallax-circle"
        $widthHeight={'22px'}
        $color="#72EBF9"
        $position={{ top: '28%', left: '85%' }}
        data-speedx="0.1"
        data-speedy="0.05"
        data-speedz="1.3"
      />
      <Circle
        className="parallax parallax-circle"
        $donut
        $widthHeight={'79px'}
        $borderWitdth={21}
        $zIndex={1}
        $color="#3083FF"
        $position={{ top: '73%', left: '82%' }}
        data-speedx="0.15"
        data-speedy="0.19"
        data-speedz="2.6"
      />
      <Circle
        className="parallax parallax-circle"
        $donut
        $blur={12}
        $widthHeight={'138px'}
        $borderWitdth={36}
        $color="#3083FF"
        $position={{ top: '87%', left: '16%' }}
        data-speedx="0.07"
        data-speedy="0.03"
        data-speedz="3"
      />
      <Circle
        className="parallax parallax-circle"
        $widthHeight={'26px'}
        $color="#fff"
        $zIndex={3}
        $position={{ top: '83.5%', left: '69%' }}
        data-speedx="0.1"
        data-speedy="0.2"
        data-speedz="2"
      />
      <Circle
        className="parallax parallax-circle"
        $widthHeight={'17px'}
        $color="#fff"
        $position={{ top: '36%', left: '10%' }}
        data-speedx="0.113"
        data-speedy="0.19"
        data-speedz="0.39"
      />
      <Circle
        className="parallax parallax-circle"
        $widthHeight={'40px'}
        $color="#3083FF"
        $position={{ top: '57%', left: '12%' }}
        data-speedx="0.16"
        data-speedy="0.14"
        data-speedz="0.29"
      />
      <Circle
        className="parallax parallax-circle"
        $donut
        $widthHeight={'29px'}
        $borderWitdth={6}
        $color="#72EBF9"
        $position={{ top: '66%', left: '9%' }}
        data-speedx="0.18"
        data-speedy="0.12"
        data-speedz="1.25"
      />
      <Circle
        className="parallax parallax-circle"
        $widthHeight={'19px'}
        $color="#fff"
        $zIndex={3}
        $position={{ top: '70%', left: '16%' }}
        data-speedx="0.21"
        data-speedy="0.11"
        data-speedz="2"
      />
      <Circle
        className="parallax parallax-circle"
        $widthHeight={'30px'}
        $color="#fff"
        $position={{ top: '77%', left: '38%' }}
        data-speedx="0.125"
        data-speedy="0.09"
        data-speedz="1.32"
      />
      <Circle
        className="parallax parallax-circle"
        $widthHeight={'48px'}
        $color="#fff"
        $position={{ top: '90%', left: '58%' }}
        data-speedx="0.13"
        data-speedy="0.15"
        data-speedz="2.56"
      />
      <Circle
        className="parallax parallax-circle"
        $widthHeight={'40px'}
        $color="#fff"
        $blur={5}
        $position={{ top: '80%', left: '8.5%' }}
        data-speedx="0.15"
        data-speedy="0.1"
        data-speedz="1.32"
      />
      <Circle
        className="parallax parallax-circle"
        $donut
        $widthHeight={'180px'}
        $color="#85E5FD"
        $borderWitdth={36}
        $blur={12}
        $position={{ top: '70%', left: '43%' }}
        data-speedx="0.03"
        data-speedy="0.01"
        data-speedz="1.3"
      />
      <Circle
        className="parallax parallax-circle"
        $widthHeight={'18px'}
        $color="#fff"
        $blur={5}
        $position={{ top: '92%', left: '42%' }}
        data-speedx="0.1"
        data-speedy="0.19"
        data-speedz="1.4"
      />
      <Circle
        className="parallax parallax-circle"
        $widthHeight={'15px'}
        $color="#72EBF9"
        $position={{ top: '91%', left: '80%' }}
        data-speedx="0.25"
        data-speedy="0.2"
        data-speedz="0.38"
      />
      <Circle
        className="parallax parallax-circle"
        $widthHeight={'14px'}
        $color="#fff"
        $zIndex={3}
        $position={{ top: '78%', left: '66%' }}
        data-speedx="0.19"
        data-speedy="0.19"
        data-speedz="2.22"
      />
    </>
  );
}

export default Circles;

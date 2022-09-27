import React from 'react';
import './Svg.css';

const LogoSvg = (props) => {
  return (
    <svg
    width={props.size ? props.size : 420}
    height={props.size ? (props.size * 660) / 420 : 660}
    viewBox="0 0 420 660"
    xmlns="http://www.w3.org/2000/svg"
    >

<g fill="none" stroke={props.stroke ? `${props.stroke}` : "white"} strokeWidth={props.strokeWidth ? props.strokeWidth : 10} strokeMiterlimit={0}>
<polygon className="st1" points="0.03,116.93 202.67,0 406.19,117 304.38,175.75 203.17,116.6 101.82,175.75 "/>
<polygon className="st0" points="0,409.91 0,527.31 203.17,645 202.67,409.91 101.59,351.66 101.59,468.76 "/>
<polygon className="st1" points="304.12,351.66 202.67,409.91 203.17,645 406.45,528.36 406.45,409.68 304.56,467.7 "/>
<polygon className="st1" points="0,409.91 101.59,468.76 101.59,351.66 202.67,409.91 304.12,351.66 304.56,467.7 406.45,409.68 
	202.67,292.05 "/>
<polygon className="st0" points="0.03,116.93 0,234.56 151.8,321.64 202.67,292.05 203.23,234.56 304.56,292.05 304.38,175.75 
	203.17,116.6 203.17,233.87 101.92,292.57 101.82,175.75 "/>
<polygon className="st1" points="406.19,233.37 406.19,117 304.38,175.75 304.56,292.05 203.23,234.56 202.67,292.05 253.92,321.64 "/>
    </g>

    </svg>
  )
}

export default LogoSvg
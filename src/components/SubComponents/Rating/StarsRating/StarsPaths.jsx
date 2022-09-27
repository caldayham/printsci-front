import React from 'react'
import "./StarsRating.css";

const StarsForegroundSVG = (props) => {
    return (
        <svg
            width={props.size ? props.size : 324}
            height={props.size ? (props.size * 63) / 324 : 63}
            viewBox="0 0 324 63"
        >
            <g fill="none" stroke="none" strokeWidth={0} strokeMiterlimit={0}>
                <polygon
                    className="st0" 
                    points="289.5,50.85 270.69,60.9 274.28,39.62 259.07,24.56 280.1,21.46 289.5,2.1 298.9,21.46 
	                319.93,24.56 304.72,39.62 308.31,60.9 "/>
                <polygon
                    className="st0" 
                    points="34.5,50.85 15.69,60.9 19.28,39.62 4.07,24.56 25.1,21.46 34.5,2.1 43.9,21.46 
	                64.93,24.56 49.72,39.62 53.31,60.9 "/>
                <polygon
                    className="st0" 
                    points="98.5,50.85 79.69,60.9 83.28,39.62 68.07,24.56 89.1,21.46 98.5,2.1 107.9,21.46 
	                128.93,24.56 113.72,39.62 117.31,60.9 "/>
                <polygon
                    className="st0" 
                    points="163.5,50.85 144.69,60.9 148.28,39.62 133.07,24.56 154.1,21.46 163.5,2.1 172.9,21.46 
	                193.93,24.56 178.72,39.62 182.31,60.9 "/>
                <polygon
                    className="st0" 
                    points="225.5,50.85 206.69,60.9 210.28,39.62 195.07,24.56 216.1,21.46 225.5,2.1 234.9,21.46 
	                255.93,24.56 240.72,39.62 244.31,60.9 "/>
            </g>
        </svg>
    )
}

const StarsBackgroundSVG = (props) => {
    return (
        <svg
            width={props.size ? props.size * props.avgRating : 324}
            height={props.size ? (props.size * 63) / 324 : 63}
            viewBox={`0 0 ${324 * props.avgRating} 63`}
        >
            <g fill="none" stroke="none" strokeWidth={0} strokeMiterlimit={0}>
                <polygon
                    className="st1"
                    points="289.5,50.85 270.69,60.9 274.28,39.62 259.07,24.56 280.1,21.46 289.5,2.1 298.9,21.46 
	                319.93,24.56 304.72,39.62 308.31,60.9 "/>
                <polygon
                    className="st1"
                    points="34.5,50.85 15.69,60.9 19.28,39.62 4.07,24.56 25.1,21.46 34.5,2.1 43.9,21.46 
	                64.93,24.56 49.72,39.62 53.31,60.9 "/>
                <polygon
                    className="st1"
                    points="98.5,50.85 79.69,60.9 83.28,39.62 68.07,24.56 89.1,21.46 98.5,2.1 107.9,21.46 
	                128.93,24.56 113.72,39.62 117.31,60.9 "/>
                <polygon
                    className="st1"
                    points="163.5,50.85 144.69,60.9 148.28,39.62 133.07,24.56 154.1,21.46 163.5,2.1 172.9,21.46 
	                193.93,24.56 178.72,39.62 182.31,60.9 "/>
                <polygon
                    className="st1"
                    points="225.5,50.85 206.69,60.9 210.28,39.62 195.07,24.56 216.1,21.46 225.5,2.1 234.9,21.46 
	                255.93,24.56 240.72,39.62 244.31,60.9 "/>
            </g>
        </svg>
    )
}

export { StarsForegroundSVG, StarsBackgroundSVG };
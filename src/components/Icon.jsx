import React from 'react';
import "../css/icon.scss";

export default function SunIcon({width,height}) {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={width} height={height} viewbox="0 0 64 64">
  <g id="day">
      <g transform="translate(32,32)">
          <g className="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
              <g>
                  <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
              </g>
              <g transform="rotate(45)">
                  <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
              </g>
              <g transform="rotate(90)">
                  <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
              </g>
              <g transform="rotate(135)">
                  <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
              </g>
              <g transform="rotate(180)">
                  <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
              </g>
              <g transform="rotate(225)">
                  <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
              </g>
              <g transform="rotate(270)">
                  <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
              </g>
              <g transform="rotate(315)">
                  <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
              </g>
          </g>
          <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2"/>
      </g>
  </g>
</svg>
}


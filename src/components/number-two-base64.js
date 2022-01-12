import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const NumberTwoBase64 = () => {
  const {
    imageSharp: {
      fluid: { base64 }
    }
  } = useStaticQuery(graphql`
    query base64 {
      imageSharp(fluid: { originalName: { eq: "2-base.png" } }) {
        fluid(base64Width: 200) {
          base64
        }
      }
    }
  `);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 197 231"
      className="max-w-[197px] max-h-[231px]"
    >
      <defs>
        <linearGradient
          id="b"
          x1={117.34}
          y1={135.12}
          x2={60.11}
          y2={117.14}
          gradientTransform="rotate(-11.7 -413.304 223.943)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#e20011" />
          <stop offset={1} stopColor="#ff3c87" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={-212.4}
          y1={-136.13}
          x2={-175.28}
          y2={-136.13}
          gradientTransform="rotate(42.3 -282.93 271.257)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ffdf37" />
          <stop offset={1} stopColor="#ff0d6a" />
        </linearGradient>
        <linearGradient
          id="d"
          x1={118.64}
          y1={139.03}
          x2={55.65}
          y2={119.24}
          gradientTransform="rotate(-11.7 -413.304 223.943)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ffb100" />
          <stop offset={1} stopColor="#ff0d6a" />
        </linearGradient>
        <linearGradient
          id="e"
          x1={61.03}
          y1={479.41}
          x2={-4.17}
          y2={458.93}
          gradientTransform="rotate(-51.41 -412.714 218.919)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ffb100" />
          <stop offset={1} stopColor="#fb8400" />
        </linearGradient>
        <linearGradient
          id="a"
          x1={114.4}
          y1={-4.19}
          x2={114.4}
          y2={19.5}
          gradientTransform="rotate(.16 -175.248 157.808)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#004ca3" />
          <stop offset={0.34} stopColor="#014ea5" />
          <stop offset={0.53} stopColor="#0357ae" />
          <stop offset={0.69} stopColor="#0765bc" />
          <stop offset={0.83} stopColor="#0c78d0" />
          <stop offset={0.96} stopColor="#1392ea" />
          <stop offset={1} stopColor="#159bf3" />
        </linearGradient>
        <linearGradient id="f" x1={26.47} y1={57.8} x2={26.47} y2={77.01} xlinkHref="#a" />
        <linearGradient id="g" x1={76.81} y1={191.25} x2={76.81} y2={211.04} xlinkHref="#a" />
        <linearGradient
          id="h"
          x1={-15.62}
          y1={-50.71}
          x2={15.84}
          y2={-50.71}
          gradientTransform="rotate(8.88 -925.66 135.167)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ffdf37" />
          <stop offset={0.04} stopColor="#fcca33" />
          <stop offset={0.13} stopColor="#f5942a" />
          <stop offset={0.26} stopColor="#ea3e1c" />
          <stop offset={0.35} stopColor="#e20011" />
          <stop offset={1} stopColor="#271246" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="l" x1={119.56} y1={60.69} x2={135.79} y2={92.12} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#27a0e4" />
          <stop offset={0.39} stopColor="#299fe3" />
          <stop offset={0.52} stopColor="#309adf" />
          <stop offset={0.62} stopColor="#3b92d8" />
          <stop offset={0.7} stopColor="#4c87cf" />
          <stop offset={0.77} stopColor="#6278c2" />
          <stop offset={0.83} stopColor="#7e65b3" />
          <stop offset={0.89} stopColor="#9e4fa1" />
          <stop offset={0.94} stopColor="#c4358b" />
          <stop offset={0.98} stopColor="#ed1974" />
          <stop offset={1} stopColor="#ff0d6a" />
        </linearGradient>
        <linearGradient id="m" x1={146.44} y1={116.02} x2={138.29} y2={98.19} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#27a0e4" />
          <stop offset={0.2} stopColor="#64bbec" />
          <stop offset={0.4} stopColor="#9bd3f2" />
          <stop offset={0.59} stopColor="#c6e6f8" />
          <stop offset={0.76} stopColor="#e5f4fc" />
          <stop offset={0.9} stopColor="#f8fcfe" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient id="n" x1={118.39} y1={62.34} x2={125.27} y2={75.67} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#159bf3" />
          <stop offset={0.44} stopColor="#1799f2" />
          <stop offset={0.6} stopColor="#1e94ee" />
          <stop offset={0.72} stopColor="#298ae6" />
          <stop offset={0.81} stopColor="#3a7ddb" />
          <stop offset={0.89} stopColor="#506bce" />
          <stop offset={0.96} stopColor="#6b56bd" />
          <stop offset={1} stopColor="#8144af" />
        </linearGradient>
        <radialGradient
          id="i"
          cx={1838.45}
          cy={-1181.53}
          r={27.43}
          gradientTransform="scale(1 -1) rotate(77.3 311.21 -1806.785)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fb8400" />
          <stop offset={0.92} stopColor="#ffdf37" />
        </radialGradient>
        <radialGradient
          id="j"
          cx={1809.62}
          cy={-1274.77}
          r={41.11}
          gradientTransform="scale(1 -1) rotate(77.3 311.21 -1806.785)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fb8400" />
          <stop offset={0.7} stopColor="#ff0d6a" />
          <stop offset={0.95} stopColor="#aa008f" />
        </radialGradient>
        <radialGradient
          id="k"
          cx={244.03}
          cy={86.07}
          r={36.58}
          gradientTransform="matrix(.89 0 0 .91 -88.41 6.01)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#159bf3" />
          <stop offset={0.38} stopColor="#169af2" stopOpacity={0.99} />
          <stop offset={0.51} stopColor="#1998f1" stopOpacity={0.96} />
          <stop offset={0.61} stopColor="#1e94ed" stopOpacity={0.92} />
          <stop offset={0.69} stopColor="#268ee9" stopOpacity={0.85} />
          <stop offset={0.75} stopColor="#2f86e2" stopOpacity={0.76} />
          <stop offset={0.81} stopColor="#3b7cdb" stopOpacity={0.64} />
          <stop offset={0.87} stopColor="#4a70d2" stopOpacity={0.51} />
          <stop offset={0.92} stopColor="#5b63c7" stopOpacity={0.35} />
          <stop offset={0.96} stopColor="#6d54bc" stopOpacity={0.19} />
          <stop offset={1} stopColor="#8144af" stopOpacity={0} />
        </radialGradient>
      </defs>
      <g
        data-name="2-elements"
        style={{
          isolation: 'isolate'
        }}
      >
        <image href={base64} width="100%" height="100%" />
        <g data-name="Planet">
          <path
            d="M27.9 32.71c5.42-3.22 16-6.93 28.38-9.69 15-3.34 28-4.27 32.81-2.61"
            style={{
              fill: 'none',
              strokeMiterlimit: 10,
              strokeWidth: '.792737048164481px',
              stroke: 'url(#b)'
            }}
          />
          <path
            d="M36.2 58.24C33.56 56 41 41.25 52.74 25.36S76.21-1.58 78.84.69"
            style={{
              fill: 'none',
              stroke: '#fb8400',
              strokeMiterlimit: 10,
              strokeWidth: '.792737048164481px'
            }}
          />
          <ellipse
            cx={56.13}
            cy={29.01}
            rx={17.93}
            ry={19.3}
            style={{
              fill: 'url(#c)'
            }}
            data-name="Planet"
          />
          <path
            d="M89.09 20.41c1.12.39 1.78.92 1.91 1.59.68 3.56-13.75 9.79-32.24 13.91s-34 4.58-34.72 1c-.22-1.18 1.2-2.64 3.86-4.22"
            style={{
              fill: 'none',
              strokeMiterlimit: 10,
              strokeWidth: '.792737048164481px',
              stroke: 'url(#d)'
            }}
          />
          <path
            d="M78.84.69c2.64 2.27-4.77 17-16.54 32.88S38.84 60.5 36.2 58.24"
            style={{
              fill: 'none',
              strokeMiterlimit: 10,
              strokeWidth: '.792737048164481px',
              stroke: 'url(#e)'
            }}
          />
        </g>
        <path
          d="M104.66 216.69a1.47 1.47 0 0 1-1.06-.45 1.5 1.5 0 0 1 0-2.12l7.2-7.12a1.51 1.51 0 0 1 2.56 1.07 1.47 1.47 0 0 1-.45 1.06l-7.19 7.15a1.5 1.5 0 0 1-1.06.41Zm6.39-9.46-7.19 7.15a1.14 1.14 0 0 0 0 1.61 1.18 1.18 0 0 0 1.62 0l7.19-7.16a1.1 1.1 0 0 0 .34-.8 1.16 1.16 0 0 0-.33-.81 1.14 1.14 0 0 0-1.62 0Z"
          style={{
            fill: '#e3d74e'
          }}
        />
        <path
          data-name="Cloud 1"
          d="M91.19 12.88c-.26 1.8 47.22.13 47.22.13S136 2.11 131.18.88s-8.5 8.46-12.13 7.84S116.25 1 111.4 1s-5.67 8.26-8.7 7.64-10.27-4.23-11.51 4.24Z"
          style={{
            fill: 'url(#a)'
          }}
        />
        <path
          data-name="Cloud 2"
          d="m40.45 72.29-27.34-.07s-1.62-10.22 6-10.53 4.89 7.92 9.82 7.61 4-4.6 7.91-3.28 3.61 6.27 3.61 6.27Z"
          style={{
            fill: 'url(#f)'
          }}
        />
        <path
          data-name="Cloud 3"
          d="m49.82 206.18 53.69.16s-2-4-11.52-3c-4.92.49-5.24-7.92-10.84-7.94s-8.26 8.54-11.23 7.88S69.94 196 64 197s-4 7.24-6.61 7.23-6.9-1.67-7.57 1.95Z"
          style={{
            fill: 'url(#g)'
          }}
        />
        <g data-name="Coding">
          <path
            d="M107.76 23.32v2.48l-3.08 1.72 3.07 1.74v2.46L102 28.54v-2.08ZM113.64 22.33h1.67L110.48 34h-1.66ZM116.47 31.74v-2.48l3.06-1.71-3.05-1.74v-2.46l5.7 3.17v2.08Z"
            style={{
              fill: '#aa008f'
            }}
          />
        </g>
        <g data-name="Element 1">
          <path
            d="M135.05 42.85a12.64 12.64 0 0 1 17.75-17.59M156.51 29.64A12.64 12.64 0 0 1 145.27 48a12.77 12.77 0 0 1-4.84-.95"
            style={{
              fill: 'none',
              stroke: '#9ac288',
              strokeMiterlimit: 10,
              strokeWidth: '.646733413577949px'
            }}
          />
          <circle
            cx={145.27}
            cy={35.41}
            r={4.11}
            transform="rotate(-22.38 145.274 35.41)"
            style={{
              fill: '#ffdf37'
            }}
          />
        </g>
        <path
          d="M180 168.13a3.59 3.59 0 0 1-2.54-1.06 3.61 3.61 0 0 1 0-5.09l13.84-13.76a3.6 3.6 0 1 1 5.07 5.1l-13.84 13.76a3.59 3.59 0 0 1-2.53 1.05Zm11.44-19.79.13.13-13.84 13.76a3.24 3.24 0 0 0 0 4.59 3.25 3.25 0 0 0 4.58 0l13.84-13.76a3.24 3.24 0 1 0-4.57-4.6Z"
          style={{
            fill: '#1087de'
          }}
        />
        <path
          data-name="Rounded Rectangle 2"
          d="M185.4 147.45a1.5 1.5 0 0 1-1.05-2.56l7.19-7.16a1.5 1.5 0 0 1 2.11 2.13l-7.19 7.14a1.51 1.51 0 0 1-1.06.45Zm6.39-9.46-7.19 7.15a1.14 1.14 0 0 0 0 1.61 1.17 1.17 0 0 0 1.62 0l7.19-7.15a1.14 1.14 0 0 0 .34-.81 1.14 1.14 0 0 0-2-.81Z"
          style={{
            fill: '#e3d74e'
          }}
        />
        <path
          data-name="Rounded Rectangle 3"
          d="M158.52 59.42a1.5 1.5 0 0 1-1.06-2.56l7.2-7.15a1.49 1.49 0 0 1 2.55 1.07 1.48 1.48 0 0 1-.44 1L159.58 59a1.52 1.52 0 0 1-1.06.42Zm6.39-9.42-7.2 7.15a1.16 1.16 0 0 0 0 1.62 1.14 1.14 0 0 0 1.61 0l7.2-7.15a1.14 1.14 0 0 0 .33-.81 1.06 1.06 0 0 0-.33-.8 1.14 1.14 0 0 0-1.61 0Z"
          style={{
            fill: '#1087de'
          }}
        />
        <path
          data-name="Rounded Rectangle 4"
          d="M72.69 144.78a1.5 1.5 0 0 1-1-2.57l7.19-7.15a1.54 1.54 0 0 1 2.12 0 1.5 1.5 0 0 1 0 2.12l-7.19 7.15a1.53 1.53 0 0 1-1.12.45Zm7.2-9.8a1.1 1.1 0 0 0-.8.34l-7.2 7.15a1.14 1.14 0 0 0 1.61 1.62l7.2-7.15a1.16 1.16 0 0 0 0-1.62 1.11 1.11 0 0 0-.81-.32Z"
          style={{
            fill: '#9ac288'
          }}
        />
        <path
          data-name="Rounded Rectangle 5"
          d="M75 135.27a1.5 1.5 0 0 1-1.49-1.51 1.52 1.52 0 0 1 .49-1.06l7.19-7.15a1.54 1.54 0 0 1 2.12 0 1.5 1.5 0 0 1 0 2.12l-7.2 7.15a1.5 1.5 0 0 1-1.11.45Zm6.39-9.47-7.15 7.2a1.09 1.09 0 0 0-.33.8 1.06 1.06 0 0 0 .33.81 1.1 1.1 0 0 0 .8.34 1.16 1.16 0 0 0 .81-.33l7.15-7.2a1.1 1.1 0 0 0 .34-.8 1.16 1.16 0 0 0-.33-.81 1.18 1.18 0 0 0-1.62 0Z"
          style={{
            fill: '#fb8400'
          }}
        />
        <path
          data-name="Fireball 01"
          d="M35.83 80.35 4.89 108.41a3.13 3.13 0 0 1-4.27-.55 2.83 2.83 0 0 1 .58-4.08Z"
          style={{
            fill: 'url(#h)'
          }}
        />
        <path
          data-name="Fireball 02"
          d="M44.86 165.3S28 186.16 25.46 182.79s19.4-17.49 19.4-17.49Z"
          style={{
            fill: 'url(#i)'
          }}
        />
        <path
          data-name="Fireball 03"
          d="M139.3 204.51s-25.22 31.26-29.09 26.22 29.09-26.22 29.09-26.22Z"
          style={{
            mixBlendMode: 'screen',
            fill: 'url(#j)'
          }}
        />
        <path
          data-name="Pink Dot"
          d="M17.63 174.59c-3.33 0-3.34 5.17 0 5.17s3.37-5.17 0-5.17Z"
          style={{
            fill: '#ff0d6a'
          }}
        />
        <path
          data-name="Orange Dot"
          d="M147.14 208.5c-3.33 0-3.34 5.17 0 5.17s3.33-5.17 0-5.17Z"
          style={{
            fill: '#fb8400'
          }}
        />
        <g data-name="Number 2 Head">
          <ellipse
            cx={129.52}
            cy={84.22}
            rx={32.67}
            ry={33.24}
            style={{
              fill: 'url(#k)'
            }}
          />
          <circle
            cx={133.43}
            cy={87.56}
            r={28.62}
            style={{
              fill: 'url(#l)'
            }}
          />
          <ellipse
            cx={133.78}
            cy={88.49}
            rx={28.5}
            ry={12.19}
            transform="rotate(-20.91 133.797 88.488)"
            style={{
              fill: '#ffb2d0'
            }}
          />
          <ellipse
            cx={133.78}
            cy={88.49}
            rx={25.13}
            ry={10.75}
            transform="rotate(-20.91 133.797 88.488)"
            style={{
              fill: '#aa008f'
            }}
          />
          <path
            d="M161.06 87.86a27.59 27.59 0 0 1-47.67 18.92"
            style={{
              fill: 'none',
              stroke: '#000',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '1.5px'
            }}
          />
          <ellipse cx={134.03} cy={91.07} rx={8.51} ry={2.91} transform="rotate(-73.82 134.028 91.067)" />
          <ellipse
            cx={130.35}
            cy={83.3}
            rx={12.47}
            ry={8.4}
            transform="rotate(-73.82 130.348 83.295)"
            style={{
              fill: '#ffdf37'
            }}
          />
          <ellipse cx={129.79} cy={80.93} rx={2.55} ry={1.23} transform="rotate(-73.82 129.786 80.925)" />
          <ellipse cx={125.88} cy={80.28} rx={2} ry={0.97} transform="rotate(-73.82 125.881 80.273)" />
          <circle
            cx={133.43}
            cy={87.56}
            r={28.62}
            style={{
              mixBlendMode: 'multiply',
              fill: 'url(#m)'
            }}
          />
          <path d="M141.45 72.54a9.68 9.68 0 0 0-10.08-3.88c-4.4.94-2.54 7.69 1.86 6.75 3.92-.84 3.2 5 2.43 7-.68 1.76.76 3.84 2.45 4.3a3.56 3.56 0 0 0 4.3-2.44c1.48-3.8 1.48-8.27-.96-11.73Z" />
          <path
            d="M145.53 61.63a28.61 28.61 0 0 0-40.72 25.93c0 .64 0 1.28.07 1.91a35.57 35.57 0 0 0 40.65-27.84Z"
            style={{
              mixBlendMode: 'screen',
              fill: 'url(#n)'
            }}
          />
          <path
            d="M113 73.63a24.92 24.92 0 0 1 2.69-3.29M120.54 66.47a24.59 24.59 0 0 1 12.89-3.63 25 25 0 0 1 4.69.45"
            style={{
              fill: 'none',
              stroke: '#fff',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '2.878554311568px'
            }}
          />
        </g>
      </g>
    </svg>
  );
};

export default NumberTwoBase64;

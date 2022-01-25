import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { slide, spin, fade, swoosh } from '../utils/animation';

import usePrefersReducedMotion from '../utils/use-prefers-reduced-motion';

const NumberTwoGatsbyPluginImage = () => {
  const {
    file: {
      childImageSharp: { gatsbyImageData }
    }
  } = useStaticQuery(graphql`
    query NumberTwoAGatsbyPluginImageQuery {
      file(name: { eq: "2022-lockup_2-a-base" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, webpOptions: { quality: 100 })
        }
      }
    }
  `);

  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    slide('#cloud-1-2a', 18, 0, 40, -40, prefersReducedMotion);
    spin('#pink-star-1-2a', 5, 2, prefersReducedMotion);
    spin('#pink-star-2-2a', 3, 0, prefersReducedMotion);
    spin('#yellow-star-1-2a', 3, 2, prefersReducedMotion);
    spin('#yellow-star-2-2a', 4, 4, prefersReducedMotion);
    spin('#orange-star-1-2a', 4, 3, prefersReducedMotion);
    fade('#shape-1-2a', 4, 0, prefersReducedMotion);
    swoosh('#fireball-1', [20, -20], [-80, 120], 4, 1, prefersReducedMotion);
  }, [prefersReducedMotion]);

  return (
    <div className="relative animate-bob delay-250">
      <GatsbyImage alt="2022-lockup_2a" image={getImage(gatsbyImageData)} className="max-w-[145px] max-h-[184px]" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width={144.46}
        // height={183.39}
        viewBox="0 0 144.46 183.39"
        width="100%"
        height="100%"
        className="absolute max-w-[145px] max-h-[184px] top-0 z-10"
      >
        <defs>
          <linearGradient
            id="a-2a"
            x1={75.56}
            y1={170.54}
            x2={75.56}
            y2={188.34}
            gradientTransform="rotate(.16 68.334 211.183)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#2c4d9e" />
            <stop offset={0.33} stopColor="#2d4fa0" />
            <stop offset={0.53} stopColor="#3257a9" />
            <stop offset={0.69} stopColor="#3a64b7" />
            <stop offset={0.83} stopColor="#4577cb" />
            <stop offset={0.96} stopColor="#538fe5" />
            <stop offset={1} stopColor="#5999ef" />
          </linearGradient>
          <linearGradient
            id="b-2a"
            x1={16.2}
            y1={-17.54}
            x2={42.46}
            y2={-17.54}
            gradientTransform="translate(-3.39 31.39)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#f5dd4b" />
            <stop offset={0.04} stopColor="#f0c846" />
            <stop offset={0.14} stopColor="#e3923a" />
            <stop offset={0.26} stopColor="#ce3c26" />
            <stop offset={0.35} stopColor="#c00018" />
            <stop offset={1} stopColor="#271946" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="g-2a" x1={86.2} y1={-18.21} x2={112.46} y2={-18.21} xlinkHref="#b-2a" />
          <linearGradient id="d-2a" x1={97.87} y1={39.52} x2={114.03} y2={70.82} gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#5f9ee0" />
            <stop offset={0.42} stopColor="#619cde" />
            <stop offset={0.57} stopColor="#6795d8" />
            <stop offset={0.68} stopColor="#718ace" />
            <stop offset={0.77} stopColor="#8179bf" />
            <stop offset={0.85} stopColor="#9463ac" />
            <stop offset={0.91} stopColor="#ad4794" />
            <stop offset={0.97} stopColor="#c92879" />
            <stop offset={1} stopColor="#da1568" />
          </linearGradient>

          <linearGradient id="e-2a" x1={124.63} y1={94.61} x2={116.52} y2={76.86} gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#5f9ee0" />
            <stop offset={0.02} stopColor="#64a1e1" />
            <stop offset={0.27} stopColor="#9bc2ec" />
            <stop offset={0.5} stopColor="#c6ddf4" />
            <stop offset={0.7} stopColor="#e5effa" />
            <stop offset={0.88} stopColor="#f8fbfe" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient id="f-2a" x1={96.71} y1={41.17} x2={103.56} y2={54.44} gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#5999ef" />
            <stop offset={0.47} stopColor="#5a97ed" />
            <stop offset={0.64} stopColor="#5c90e8" />
            <stop offset={0.75} stopColor="#5f85de" />
            <stop offset={0.85} stopColor="#6574d0" />
            <stop offset={0.93} stopColor="#6b5ebe" />
            <stop offset={1} stopColor="#7346aa" />
          </linearGradient>
          <radialGradient
            id="c-2a"
            cx={190.79}
            cy={57.38}
            r={36.43}
            gradientTransform="matrix(.89 0 0 .91 -62.6 10.81)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#5999ef" />
            <stop offset={0.38} stopColor="#5998ee" stopOpacity={0.99} />
            <stop offset={0.51} stopColor="#5a96ec" stopOpacity={0.96} />
            <stop offset={0.61} stopColor="#5b92e9" stopOpacity={0.91} />
            <stop offset={0.69} stopColor="#5d8ce4" stopOpacity={0.84} />
            <stop offset={0.76} stopColor="#5f84de" stopOpacity={0.75} />
            <stop offset={0.82} stopColor="#627bd6" stopOpacity={0.64} />
            <stop offset={0.87} stopColor="#6670cd" stopOpacity={0.5} />
            <stop offset={0.92} stopColor="#6a63c2" stopOpacity={0.34} />
            <stop offset={0.96} stopColor="#6f54b6" stopOpacity={0.17} />
            <stop offset={1} stopColor="#7346aa" stopOpacity={0} />
          </radialGradient>
        </defs>
        <g>
          <path
            id="pink-star-1-2a"
            className="svg-center"
            style={{
              fill: '#dc3e83'
            }}
            d="m18.12 42.76-1.59-4.02-1.58 4.02-4.02 1.58 4.02 1.59 1.58 4.02 1.59-4.02 4.02-1.59-4.02-1.58z"
          />
          <path
            id="shape-1-2a"
            className="svg-center"
            d="M22.34 182.5a2.05 2.05 0 0 1-1.44-3.5l9.85-9.8a2.1 2.1 0 0 1 2.9 0 2.05 2.05 0 0 1 0 2.9l-9.86 9.8a2 2 0 0 1-1.45.6Zm8.75-13-9.85 9.8a1.57 1.57 0 0 0 1.1 2.67 1.55 1.55 0 0 0 1.11-.46l9.85-9.79a1.55 1.55 0 0 0 .46-1.11 1.58 1.58 0 0 0-.45-1.11 1.61 1.61 0 0 0-2.22 0Z"
            style={{
              fill: '#df821f'
            }}
          />
          <path
            id="yellow-star-1-2a"
            className="svg-center"
            style={{
              fill: '#e9a633'
            }}
            d="m123.22 12.38 2.03-5.17 2.04 5.17 5.16 2.03-5.16 2.04-2.04 5.16-2.03-5.16-5.16-2.04 5.16-2.03z"
          />
          <path
            id="cloud-1-2a"
            className="svg-center"
            d="m51.49 183.36 48.28.14s-1.77-3.56-10.36-2.7c-4.43.45-4.72-7.12-9.76-7.13s-7.42 7.68-10.09 7.08 0-6.52-5.31-5.65-3.58 6.51-6 6.5-6.16-1.49-6.76 1.76Z"
            style={{
              fill: 'url(#a-2a)'
            }}
          />
          <path
            id="pink-star-2-2a"
            className="svg-center"
            style={{
              fill: '#da1568'
            }}
            d="m6.47 151.71 1.92-4.85 1.91 4.85 4.85 1.92-4.85 1.91-1.91 4.85-1.92-4.85-4.85-1.91 4.85-1.92z"
          />
          <path
            id="orange-star-1-2a"
            className="svg-center"
            style={{
              fill: '#f5dd4b'
            }}
            d="m132.68 101.94 1.83-4.62 1.82 4.62 4.62 1.83-4.62 1.82-1.82 4.62-1.83-4.62-4.62-1.82 4.62-1.83z"
          />
          <g data-name="Number 2 Head" className="animate-bob">
            <ellipse
              cx={107.78}
              cy={62.95}
              rx={32.53}
              ry={33.1}
              style={{
                fill: 'url(#c-2a)'
              }}
            />
            <circle
              cx={111.68}
              cy={66.28}
              r={28.5}
              style={{
                fill: 'url(#d-2a)'
              }}
            />
            <ellipse
              cx={112.03}
              cy={67.2}
              rx={28.38}
              ry={12.14}
              transform="rotate(-20.91 112.03 67.212)"
              style={{
                fill: '#ebafcd'
              }}
            />
            <ellipse
              cx={112.03}
              cy={67.2}
              rx={25.02}
              ry={10.71}
              transform="rotate(-20.91 112.03 67.212)"
              style={{
                fill: '#90008a'
              }}
            />
            <path
              d="M139.19 66.58a27.47 27.47 0 0 1-47.46 18.83"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '1.49364242975008px'
              }}
            />
            <ellipse cx={112.28} cy={69.77} rx={8.47} ry={2.89} transform="rotate(-73.82 112.281 69.767)" />
            <ellipse
              cx={108.61}
              cy={62.03}
              rx={12.42}
              ry={8.36}
              transform="rotate(-73.82 108.607 62.03)"
              style={{
                fill: '#f5dd4b'
              }}
            />
            <ellipse cx={108.05} cy={59.67} rx={2.54} ry={1.23} transform="rotate(-73.82 108.052 59.677)" />
            <ellipse cx={104.17} cy={59.02} rx={1.99} ry={0.96} transform="rotate(-73.82 104.166 59.028)" />
            <circle
              cx={111.68}
              cy={66.28}
              r={28.5}
              style={{
                mixBlendMode: 'multiply',
                fill: 'url(#e-2a)'
              }}
            />
            <path d="M119.67 51.32a9.66 9.66 0 0 0-10-3.87c-4.38.94-2.53 7.66 1.85 6.72 3.9-.83 3.19 5 2.42 7-.68 1.76.76 3.83 2.44 4.29a3.57 3.57 0 0 0 4.25-2.46c1.46-3.78 1.47-8.29-.96-11.68Z" />
            <path
              d="M123.73 40.45a28.5 28.5 0 0 0-40.55 25.83c0 .64 0 1.27.07 1.9a35.48 35.48 0 0 0 40.48-27.73Z"
              style={{
                mixBlendMode: 'screen',
                fill: 'url(#f)'
              }}
            />
            <path
              d="M91.35 52.4A25.4 25.4 0 0 1 94 49.13M98.84 45.28a24.73 24.73 0 0 1 17.51-3.17"
              style={{
                fill: 'none',
                stroke: '#fff',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2.86635390406534px'
              }}
            />
          </g>
          <path
            id="fireball-1"
            d="M109.38.11,88.07,27.3a3.14,3.14,0,0,1-4.3.08h0a2.83,2.83,0,0,1,0-4.12Z"
            style={{
              fill: 'url(#g-2a)'
            }}
          />
        </g>
      </svg>
    </div>
  );
};

export default NumberTwoGatsbyPluginImage;

/* eslint-disable max-len, react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const getViewBox = (name) => {
  switch (name) {
    case 'message':
      return '0 0 38 34';
    case 'dowjones':
      return '2 0 72 72';
    case 'correction':
      return '0 0 16 16';
    default:
      return '0 0 32 32';
  }
};

// eslint-disable-next-line jsdoc/check-line-alignment
/**
 * Return the path for the SVG object.
 *
 * @TODO: add your path which will display the needed SVG.
 * @param {string} name
 * @param {Object} props
 *
 * @returns {JSX.Element}
 */
const getPath = (name, props) => {
  switch (name) {
    case 'message':
      return (
        <path
          {...props}
          d="M19.0675 0C8.5371 0 0 7.092 0 15.8401c0 5.5527 3.4417 10.4345 8.6471 13.2632.0083.0091.0221.0182.0434.0277.8433.3798.41 1.6817-.5651 2.8751-.742.9083-2.1668 1.8444-1.6251 1.8444.8667 0 2.7535-.4018 3.94-1.0597 1.7586-.9752 2.9897-1.8141 4.5758-1.469l-.0013-.0035a22.867 22.867 0 0 0 4.0527.3619c10.5309 0 19.0676-7.0916 19.0676-15.8401C38.1351 7.0921 29.5984 0 19.0675 0z"
        />
      );
    case 'correction':
      return (
        <path
          {...props}
          d="M6.586 2.299c0.364-0.601 1.013-0.966 1.712-0.966s1.347 0.365 1.712 0.966l5.652 9.436c0.355 0.615 0.357 1.373 0.006 1.991s-1.005 1.002-1.723 1.010l-11.301-0c-0.711-0.008-1.364-0.392-1.716-1.009s-0.35-1.375 0.011-2zM2.089 12.402c-0.118 0.205-0.119 0.458-0.002 0.664s0.335 0.334 0.565 0.336l11.286 0c0.237-0.003 0.455-0.131 0.572-0.336s0.117-0.458 0.004-0.654l-5.645-9.424c-0.121-0.199-0.337-0.321-0.57-0.321s-0.448 0.121-0.569 0.32zM7.631 6.069c0-0.368 0.298-0.667 0.667-0.667s0.667 0.298 0.667 0.667v2.667c0 0.368-0.298 0.667-0.667 0.667s-0.667-0.298-0.667-0.667zM8.298 12.069c-0.368 0-0.667-0.298-0.667-0.667s0.298-0.667 0.667-0.667c0.368 0 0.667 0.298 0.667 0.667s-0.298 0.667-0.667 0.667z"
        />
      );
    case 'dowjones':
      return (
        <path
          {...props}
          d="M 6.9277344 0.890625 L 6.9277344 36.832031 L 6.9277344 72.775391 L 18.933594 72.775391 L 30.939453 72.775391 L 30.939453 66.8125 L 30.939453 60.849609 L 24.978516 60.849609 L 19.013672 60.849609 L 19.013672 36.832031 L 19.013672 12.8125 L 32.027344 12.857422 L 45.041016 12.902344 L 46.330078 13.341797 C 48.727721 14.158874 50.891721 15.674019 52.330078 17.542969 C 53.767774 19.411609 54.570074 21.438635 54.878906 23.982422 L 54.972656 24.748047 L 60.951172 24.748047 L 66.927734 24.748047 L 66.830078 23.148438 C 66.710697 21.187926 66.060373 18.203792 65.351562 16.361328 C 62.406773 8.7069602 56.390272 3.4650789 48.185547 1.4101562 L 46.492188 0.98632812 L 26.710938 0.9375 L 6.9277344 0.890625 z M 54.970703 33.775391 L 54.912109 42.195312 C 54.844483 51.649126 54.891306 51.236027 53.591797 53.861328 C 52.038272 56.999728 48.700969 59.632969 45.255859 60.441406 C 44.694675 60.573182 43.276058 60.730183 42.101562 60.789062 L 39.964844 60.898438 L 39.964844 66.859375 L 39.966797 72.822266 L 42.828125 72.726562 C 46.053864 72.61964 47.804536 72.314039 50.466797 71.392578 C 54.031639 70.158722 57.053179 68.255319 59.787109 65.521484 C 63.155461 62.153164 65.189723 58.513503 66.361328 53.757812 L 66.777344 52.066406 L 66.837891 42.919922 L 66.898438 33.775391 L 60.933594 33.775391 L 54.970703 33.775391 z"
        />
      );
    case 'divider':
      return (
        <path {...props}
          d="M5,13 C4.44771525,13 4,12.5522847 4,12 C4,11.4477153 4.44771525,11 5,11 L19,11 C19.5522847,11 20,11.4477153 20,12 C20,12.5522847 19.5522847,13 19,13 L5,13 Z"
        />
      );
    default:
      return (
        <path/>
      );
  }
};

/**
 * SVG icon to display in the Component.
 *
 * @TODO: pass the name that would correspond to one of the provided in the path above.
 * @param {Object} name
 * @param {string} name.name
 * @param {string} name.style
 * @param {string} name.fill
 * @param {string} name.viewBox
 * @param {string} name.width
 * @param {string} name.className
 * @param {string} name.height
 * @returns {JSX.Element}
 * @constructor
 */
function SVGIcon (
  {
    name = '',
    style = {},
    fill = '#000',
    viewBox = '',
    width = '100%',
    className = '',
    height = '100%',
  }
) {
  return (
    <svg
      width={width}
      style={style}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox || getViewBox(name)}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {getPath(name, { fill })}
    </svg>
  );
}

SVGIcon.propTypes = {
  name: PropTypes.string,
  style: PropTypes.object,
  fill: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.number,
  className: PropTypes.string,
  height: PropTypes.number,
};

SVGIcon.defaultProps = {
  name: '',
  style: {},
  fill: '',
  viewBox: '',
  width: 16,
  className: '',
  height: 16,
};

export default SVGIcon;

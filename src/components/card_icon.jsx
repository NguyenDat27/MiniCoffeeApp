
import { PropTypes } from 'prop-types';

export const CartIcon = ({ active }) => {
  return (
    <div className="relative">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.6192 5.36729C21.1957 4.94573 20.6393 4.72291 20.0101 4.72291H6.92238C6.52149 4.72291 6.15038 4.81375 5.82421 4.98839L5.5668 3.32415C5.4706 2.70176 4.91261 2.25 4.24006 2.25H2.4852C2.11154 2.25 1.80859 2.55295 1.80859 2.92661C1.80859 3.30026 2.11154 3.60321 2.4852 3.60321H4.24065L4.76393 6.98633L5.97391 14.8094C6.12691 15.7986 7.0347 16.5167 8.13237 16.5167H18.8001C19.8978 16.5167 20.8056 15.7987 20.9586 14.8094L22.1686 6.98633C22.2612 6.38732 22.0661 5.81237 21.6192 5.36729ZM20.8312 6.77946L19.6213 14.6025C19.5718 14.9223 19.2188 15.1634 18.8001 15.1634H8.13237C7.71367 15.1634 7.36065 14.9223 7.31122 14.6025L6.10124 6.77967V6.7795L6.10115 6.77895C6.08335 6.66316 6.08644 6.50716 6.26819 6.32626C6.43721 6.15795 6.65123 6.07612 6.92243 6.07612H20.0101C20.2814 6.07612 20.4954 6.15795 20.6644 6.32626C20.8464 6.50746 20.8492 6.66367 20.8312 6.77946ZM8.55651 17.6716C7.43208 17.6716 6.51731 18.5864 6.51731 19.7108C6.51731 20.8352 7.43208 21.75 8.55651 21.75C9.68095 21.75 10.5957 20.8352 10.5957 19.7108C10.5958 18.5864 9.68095 17.6716 8.55651 17.6716ZM8.55651 20.3968C8.17825 20.3968 7.87052 20.0891 7.87052 19.7108C7.87052 19.3325 8.17825 19.0248 8.55651 19.0248C8.93478 19.0248 9.24251 19.3325 9.24251 19.7108C9.24251 20.0891 8.93478 20.3968 8.55651 20.3968ZM17.5108 17.6716C16.3864 17.6716 15.4716 18.5864 15.4716 19.7108C15.4716 20.8352 16.3864 21.75 17.5108 21.75C18.6352 21.75 19.55 20.8352 19.55 19.7108C19.55 18.5864 18.6352 17.6716 17.5108 17.6716ZM17.5108 20.3968C17.1325 20.3968 16.8248 20.0891 16.8248 19.7108C16.8248 19.3325 17.1325 19.0248 17.5108 19.0248C17.8891 19.0248 18.1968 19.3325 18.1968 19.7108C18.1968 20.0891 17.8891 20.3968 17.5108 20.3968Z"
          fill={active ? "#00b3e3" : "#767a7f"}
        />
      </svg>
    </div>
  );
};

CartIcon.propTypes = {
    active: PropTypes.bool
};

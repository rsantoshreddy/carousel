import './arrow.css';

const Arrow = ({ direction, onClick }) => (
  <div
    className={`arrow ${direction}`}
    data-move={direction}
    onClick={onClick}
  />
);

export default Arrow;

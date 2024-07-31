function SliderArrows(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`arrow ${className}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

export default SliderArrows;

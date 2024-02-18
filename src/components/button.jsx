  function Button({ color = 'black', fontSize = '12px', backgroundColor, borderColor = '#RRGGBB', borderRadius = '5px', padding = '10px', margin = '10px', fontWeight = 'bold', textDecoration = 'none', cursor = 'pointer', boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.2)', transition = 'background-color 0.3s ease-in-out', text = 'Button' }) {
    const buttonStyle = {
      color,
      fontSize,
      backgroundColor,
      border: `1px solid ${borderColor}`,
      borderRadius,
      padding,
      margin,
      fontWeight,
      textDecoration,
      cursor,
      boxShadow,
      transition,
    };
  
    return <button style={buttonStyle}>{text}</button>;
  }
  

export default Button;
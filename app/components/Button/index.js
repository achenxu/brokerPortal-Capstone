import React, { PropTypes } from 'react';

// You can pass in inline styles like so. Just add a style attribute to the element and provide the style obj.
const buttonStyle = {
  background: 'red',
};

// class is a reserved in javascript.Therefore, you must use className to give your element a class.
function Button(props) {
  return (
    <button
      className="btn"
      onClick={() => alert('Button Clicked')}
      style={buttonStyle}
    >{props.text}</button>
  );
}

// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <button onClick={() => alert('Button Clicked')}>{this.props.text}</button>
//     );
//   }
// }

// You must use propTypes for every component. Verify your props coming in to the component.
Button.propTypes = {
  text: PropTypes.string,
};

export default Button;

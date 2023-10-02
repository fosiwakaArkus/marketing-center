import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';
import { PropsButton } from '../../interfaces/button.interface';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button: React.FC<PropsButton> = (ButtonProps) => {
/*   const checkButtonStyle = STYLES.includes(ButtonProps.buttonStyle ?? '')
    ? ButtonProps.buttonStyle || STYLES[0] // Fix for Problem 1
    : STYLES[0];

  const checkButtonSize = SIZES.includes(ButtonProps.buttonSize ?? '')
    ? ButtonProps.buttonSize || SIZES[0] // Fix for Problem 2
    : SIZES[0]; */

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        /* className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={ButtonProps.onClick}
        type={ButtonProps.type ?? 'button'} */
      >
        {/* {ButtonProps.children} */}
      </button>
    </Link>
  );
};

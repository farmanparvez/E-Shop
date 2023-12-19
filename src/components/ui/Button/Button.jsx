import { LoadingOutlined } from '@ant-design/icons';
import styles from './Button.module.css';

const Button = (props) => {
  const { children, color, className } = props
  let buttonClass = `${styles.button} ${styles.standard}`;

  if (color === 'blue') {
    buttonClass = `${styles.button} ${styles.blue} ${className}`;
  } else if (color === 'white') {
    buttonClass = `${styles.button} ${styles.white} ${className}`;
  } else if (color === 'yellow') {
    buttonClass = `${styles.button} ${styles.yellow} ${className} `;
  }

  return (
    <button {...props} className={buttonClass}>
      {children} {!!props.loading && <span className='ml-2'><LoadingOutlined /></span>}
    </button>
  );
};

export default Button;
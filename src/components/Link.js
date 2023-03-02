import classNames from 'classnames';
import useNavigation from "../hooks/useNavigation";

function Link({ navigationPath, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    'text-blue-500',
    className,
    currentPath === navigationPath && activeClassName
  );

  const handleClick = (event) => {
    if (event.ctrlKey || event.metaKey) return;

    event.preventDefault();
    navigate(navigationPath);
  }

  return <a className={classes} href={navigationPath} onClick={handleClick}>{children}</a>;
}

export default Link;
import Link from './Link';

function Sidebar() {
  const navLinks = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
  ];

  const renderedLinks = navLinks.map((navLink) => {
    return (
      <Link key={navLink.path}
        navigationPath={navLink.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2">
        {navLink.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
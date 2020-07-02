import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { RiMenuLine } from 'react-icons/ri';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-scroll';
import { CustomTheme } from '../../theme';

export interface NavBarProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  navbarContainer: {
    position: 'sticky',
    top: 0,
    zIndex: 1200,
    background: 'rgba(0, 0, 0, 0.7)',
  },
  link: {
    color: `${theme.colors.white} !important`,
    '&:hover': {
      color: ` ${theme.colors.secondaryColor} !important`,
    },
  },
}));

const navLinks: string[] = ['Home', 'About', 'Education', 'Experience', 'My Offers', 'Photography', 'Contact'];

const NavBar: React.FC<NavBarProps> = () => {
  const classes: Record<'navbarContainer' | 'link', string> = useStyles();
  return (
    <Navbar className={classes.navbarContainer} sticky='top' expand='lg'>
      <Navbar.Brand className={classes.link} href='/'>
        iZsk
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'>
        <RiMenuLine size={25} className={classes.link} />
      </Navbar.Toggle>
      <Navbar.Collapse className={classes.link} id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          {navLinks.map((navLink: string) => {
            return (
              <Link key={navLink} to={navLink} spy={true} smooth={true} duration={500}>
                <Nav.Link className={classes.link}>{navLink}</Nav.Link>
              </Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { NavBar };

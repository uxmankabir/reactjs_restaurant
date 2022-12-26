import React from 'react';

const NavItem = ({categoryName, filterProducts}) => {
  return (
    <li className='list__item'>
      <button className='list__button' onClick={() => filterProducts(categoryName)}>{categoryName}</button>
    </li>
  )
}

const Navbar = ({categories, filterProducts}) => {
  return (
    <nav>
      <ul className='list'>
        {
          categories.map((category, index) => <NavItem categoryName={category} key={index} filterProducts={filterProducts} />)
        }
      </ul>
    </nav>
  )
}

export default Navbar;

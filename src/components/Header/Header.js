import React from 'react'
import { Link } from 'react-router-dom'

const Header = () =>(
	<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
		<div className='collapse navbar-collapse' id='navbarNav'>
			<ul className='navbar-nav'>
				<li className='nav-item active'>
					<Link to='/' className='nav-link'>Home <span className='sr-only'>(current)</span></Link>
				</li>
			</ul>
		</div>
	</nav>
)

export default Header
import React from 'react'

const Header = (props) =>(
    <header id="header">        
      <div className="page-header">
				<div className="container">
					<div className="row">
						<div className="col-md-10">
							<h1>{props}</h1>
						</div>
					</div>
				</div>
			</div>
    </header>
)

export default Header
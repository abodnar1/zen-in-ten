import React from 'react'
import "./Footer.css";

const Footer = () => {
	return(
		<footer className="footer-container">
			<div className="top-footer">
				<h3 className="footer-header">Created by:</h3>
				<p className="group-names"> Trish | Victoria | Amber | Corinne </p>
			</div>

			<div className="team-footer">
				<p>GitHub:  
					<a className="team-link" href="https://github.com/tfoxcollis">   tfoxcollis  |  </a> 
					<a className="team-link" href="https://github.com/VictoriaFC"> VictoriaFC  | </a> 
					<a className="team-link" href="https://github.com/abodnar1"> abodnar1  | </a> 
					<a className="team-link" href="https://github.com/CorCanavan"> CorCanavan</a> 
				</p>
				<p>LinkedIn:  
					<a className="team-link" href="https://www.linkedin.com/in/trish-fox-collis/">   Trish  | </a> 
					<a className="team-link"href="https://www.linkedin.com/in/victoria-fox-collis/"> Victoria  | </a> 
					<a className="team-link"href="https://www.linkedin.com/in/amberbodnar/"> Amber  | </a>
					<a className="team-link"href="https://www.linkedin.com/in/corinnecanavan/"> Corinne</a>
				</p>
			</div>
		</footer>
	)
}

export default Footer 
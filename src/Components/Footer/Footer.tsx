import React from 'react'
import "./Footer.css";

const Footer = () => {
	return(
		<footer className="footer-container">
			<div className="top-footer">
				<h3 className="footer-header">Created by:</h3>
				<p className="group-names"> Trish | Victoria | Amber | Corinne </p><br></br>
			</div>

			<div className="github-footer">
				<p>GitHub:  
					<a className="github" href="https://github.com/tfoxcollis">   tfoxcollis  |  </a> 
					<a className="github" href="https://github.com/VictoriaFC"> VictoriaFC  | </a> 
					<a className="github" href="https://github.com/abodnar1"> abodnar1  | </a> 
					<a className="github" href="https://github.com/CorCanavan"> CorCanavan</a> 
				</p>
				</div>

				<div className="linkedin-footer">
				<p>LinkedIn:  
					<a className="linkedin" href="https://www.linkedin.com/in/trish-fox-collis/">   Trish  | </a> 
					<a className="linkedin"href="https://www.linkedin.com/in/victoria-fox-collis/"> Victoria  | </a> 
					<a className="linkedin"href="https://www.linkedin.com/in/amberbodnar/"> Amber  | </a>
					<a className="linkedin"href="https://www.linkedin.com/in/corinnecanavan/"> Corinne</a>
				</p>
			</div>
		</footer>
	)
}

export default Footer 
import React from 'react'
import "./Footer.css";

const Footer = () => {
	return(
		<div>
			<h3 className="footer-header">Created by:</h3>
			<p> Trish | Victoria | Amber | Corinne </p><br></br>
			<p>GitHub:  
				<a className="github" href="https://github.com/tfoxcollis">tfoxcollis </a> 
				<a className="github" href="https://github.com/VictoriaFC"> VictoriaFC</a> 
				<a className="github" href="https://github.com/abodnar1"> abodnar1</a> 
				<a className="github" href="https://github.com/CorCanavan"> CorCanavan</a> 
				</p>
			<p>LinkedIn:  
				<a href="https://www.linkedin.com/in/trish-fox-collis/">Trish </a> 
				<a href="https://www.linkedin.com/in/victoria-fox-collis/"> Victoria</a> 
				<a href="https://www.linkedin.com/in/amberbodnar/"> Amber</a>
				<a href="https://www.linkedin.com/in/corinnecanavan/"> Corinne</a>
			</p>
		</div>
	)
}

export default Footer 
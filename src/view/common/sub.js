import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/sub.css'


//首页标题
class sub extends Component {
	render() {
		let {title,subherd,to}=this.props
	    return (
	      	<div className="sub">	      
				<p className="title">{title}</p>
				<div className="box">
					<span className="Subheading">{subherd}</span>
					<Link to={to} className="more">更多</Link>
				</div>
	      	</div>
	    );
	}
}

export default sub;

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/crumbs.css'


//面包屑
class crumbs extends Component {
	constructor(props) {
		super(props)
		this.state={

		}		
	}
	render() {
		let {name}=this.props
	    return (
	      	<ul className="crumbs">	     
				<li className="item">我的位置 / </li>
				<li className="item">
					<Link to="/"> 我的首页 / </Link>
				</li>
				<li className="item">
					<Link to="/good"> {name}</Link>
				</li>				
	      	</ul>
	    );
	}
}

export default crumbs;

import React, { Component } from 'react';
import './css/classification.css'

//分类
class classification extends Component {
	render() {
	    return (
	      	<table className="classification">	   
	      		<tbody>
					<tr>
						<td style={{width:"70px",textAlign:"center",background:"#f5f5f5"}}> 
							<span>衣服</span>
						</td>
						<td>
							<ul className="items">
								<li className="item active">上衣</li>
								<li className="item">外套</li>
								<li className="item">短袖</li>
								<li className="item">卫衣</li>								
							</ul>
						</td>
					</tr>
					<tr>
						<td style={{width:"70px",textAlign:"center",background:"#f5f5f5"}}> 
							<span>裤子</span>
						</td>
						<td>
							<ul className="items">
								<li className="item">上衣</li>
								<li className="item">外套</li>
								<li className="item">短袖</li>
								<li className="item">卫衣</li>							
							</ul>
						</td>
					</tr>
				</tbody>
	      	</table>
	    );
	}
}

export default classification;

import React, { Component } from 'react';
import './css/title.css'


//首页标题
class title extends Component {
	render() {
		let {back,left,right,title,history}=this.props
	    return (
	      	<div className="herdtitle">	   
	      		<div className="left">
	      			<i className={`icon iconfont ${back}`} onClick={()=>{if(history){history.goBack()}}}></i>
	      			{left}
	      		</div>				
				<div className="tit">{title}</div>
				<div className="right">
					{right}
				</div>
	      	</div>
	    );
	}
}

export default title;

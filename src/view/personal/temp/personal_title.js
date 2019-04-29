import React, { Component } from 'react';
import '../css/personal_title.css'


//个人中心标题
class personal_title extends Component {
	render() {
		let {title}=this.props
	    return (
	      	<div className="personal_title">	      
				<div className="left">{title}</div>
				<div className="right">
					查看全部
					<i className="icon iconfont icon-tubiao-"></i>
				</div>
	      	</div>
	    );
	}
}

export default personal_title;

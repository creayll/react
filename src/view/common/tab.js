import React, { Component } from 'react';
import './css/tab.css'


//底部选项卡
class tab extends Component {
	constructor(props) {
		super(props)
		this.state={
		    pageInfo:[
		        {pageUrl:"/",text:"首页",icon:'icon-home'},
		        {pageUrl:"/good",text:"商品",icon:'icon-shangpingouwudai2'},
		        {pageUrl:"/article",text:"文章",icon:'icon-wenzhang-copy'},
		        {pageUrl:"/personal",text:"我的",icon:'icon-iconfontgerenzhongxin'}
		    ]
		}		
	}
	componentWillMount() {
//      console.log(this.props.history.location.pathname)
    }
	click_tab(url){
		this.props.history.push(url);
	}
	render() {
		let pathname=this.props.history.location.pathname
	    return (
	      <div className="tab">	      
	      	{
	      		this.state.pageInfo.map((item,index)=>{	     	
	      			return (
						<div className={`item ${pathname===item.pageUrl?"active":""}`} key={index} onClick={()=>{this.click_tab(item.pageUrl)}}>
							<i className={`icon iconfont ${item.icon}`}></i>
							<div className="text">{item.text}</div>
						</div>	      				
	      			)
	      		})	
	      	}
	      </div>
	    );
	}
}

export default tab;

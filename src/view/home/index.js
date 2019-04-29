import React, { Component } from 'react';
import { Carousel } from 'antd';
import Tab from "../common/tab";
import Sub from "../common/sub";
import Goodlist from "../common/goodlist";
import Articlelist from "../common/articlelist";
import Title from "../common/title";
import "./css/index.css";

class home extends Component {
	componentWillMount() {
//	    fetch('https://www.easy-mock.com/mock/59801fd8a1d30433d84f198c/example/user/all')
//    	.then(res => res.json())
//    	.then(data => {
//	        console.log(data)
//	        this.setState({users: data})
//    	})
//    	.catch(e => console.log('错误:', e))	
	}

  render() {
  	let history=this.props.history
    return (
      	<div className="home">
  			<Title title="主页"/>      	
			<Carousel autoplay>
		    	<img alt="banner" className="banner" src="./img/banner.png"/>
		    	<img alt="banner" className="banner" src="./img/banner.png"/>
		    	<img alt="banner" className="banner" src="./img/banner.png"/>
			</Carousel>       
			<div className="contranal">
				<Sub title="优质商品推存" subherd='所有商品均经质检部们检查合格' to='/good'/>
				<Goodlist/>
			</div>
			<div className="contranal">
				<Sub title="优质文章推存" subherd='所有文章都是大家最喜爱的' to='/article'/>
				<Articlelist/>
			</div>			
        	<Tab history={history}/>
      	</div>
    );
  }
}

export default home;

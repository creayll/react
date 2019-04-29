import React, { Component } from 'react';
import './css/goodlist.css'


//商品列表
class goodlist extends Component {
	render() {
	    return (
	      	<div className="goodlist">	      
				<div className="item">
					<img alt="good" className="img" src="./img/good.jpg"/>
					<div className="des">
						<p className="name">物品物品物品物品物品物品物品物品</p>
						<div className="box">
							<p className="oldprice">原价:54534元 <i>5折优惠</i></p>
							<p className="nowprice">现价:54534元</p>
						</div>
					</div>
				</div>
				<div className="item">
					<img alt="good" className="img" src="./img/good.jpg"/>
					<div className="des">
						<p className="name">物品</p>
						<div className="box">
							<p className="oldprice">原价:54534元 <i>5折优惠</i></p>
							<p className="nowprice">现价:54534元</p>
						</div>
					</div>
				</div>	
				<div className="item">
					<img alt="good" className="img" src="./img/good.jpg"/>
					<div className="des">
						<p className="name">物品</p>
						<div className="box">
							<p className="oldprice">原价:54534元 <i>5折优惠</i></p>
							<p className="nowprice">现价:54534元</p>
						</div>
					</div>
				</div>
				<div className="item">
					<img alt="good" className="img" src="./img/good.jpg"/>
					<div className="des">
						<p className="name">物品</p>
						<div className="box">
							<p className="oldprice">原价:54534元 <i>5折优惠</i></p>
							<p className="nowprice">现价:54534元</p>
						</div>
					</div>
				</div>					
	      	</div>
	    );
	}
}

export default goodlist;

import React, { Component } from 'react';
import Title from "../common/title";
import "./css/order.css";

class order extends Component {
  render() {
	let {index}=this.props.match.params
	let history=this.props.history
	console.log(index)
    return (
      	<ul className="order">
      			<Title back="icon-fanhui" 
      			title="我的订单"
      			history={history}
      			left={
      					<div className="titleleft">
      							<i className="icon iconfont icon-shuaxin"></i>
      							<p>刷新</p>
      					</div>}
      			/>
						<li className="orderitem">
								<div className="titlebox">
										<div className="left">
											衣服
											<i className="icon iconfont icon-tubiao-"></i>
										</div>
										<div className="right">
											交易成功
										</div>
								</div>
								<div className="content">
										<div className="left">
												<img alt="good" src="/img/good.jpg"/>
												<div className="des">
													<p className="name">物品物品物品物品物品物品物品</p>
													<p className="size">XL</p>												
												</div>
										</div>
										<div className="right">
												<p className="price">$123</p>
												<p className="num">x1</p>
										</div>
								</div>
								<p className="all">共1件商品 合计:$123</p>
								<div className="lists">
										<div className="list">删除</div>
										<div className="list">确定收货</div>
										<div className="list">退货</div>
										<div className="list">申请售后</div>
								</div>
						</li>
						<li className="orderitem">
								<div className="titlebox">
										<div className="left">
											衣服
											<i className="icon iconfont icon-tubiao-"></i>
										</div>
										<div className="right">
											交易成功
										</div>
								</div>
								<div className="content">
										<div className="left">
												<img alt="good" src="/img/good.jpg"/>
												<div className="des">
													<p className="name">物品物品物品物品物品物品物品</p>
													<p className="size">XL</p>												
												</div>
										</div>
										<div className="right">
												<p className="price">$123</p>
												<p className="num">x1</p>
										</div>
								</div>
								<p className="all">共1件商品 合计:$123</p>
								<div className="lists">
										<div className="list">删除</div>
										<div className="list">确定收货</div>
										<div className="list">退货</div>
										<div className="list">申请售后</div>
								</div>
						</li>						
      	</ul>
    );
  }
}

export default order;
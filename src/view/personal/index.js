import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Tab from "../common/tab";
import Personaltitle from "./temp/personal_title";
import Title from "../common/title";
import "./css/index.css";

import {Route} from 'react-router-dom';
import One from './one'
import Two from './two'
import Three from './three'




import { connect } from 'react-redux';
import * as countAction from '../../redux/action/action_count';

class personal extends Component {
	go_order(index){
			this.props.history.push("/order/"+index);
	}
  render() {
  	let {match,history}=this.props
    return (
      <div className="personal">
  			<Title
  			title="个人中心"
	      	right={
	      			<div className="box">
						<div className="item">
	  							<i className="icon iconfont icon-shuaxin"></i>
	  							<p>刷新</p>      							
						</div>	      		
						<div className="item">
	  							<i className="icon iconfont icon-shuaxin"></i>
	  							<p>刷新</p>      							
						</div>
					</div>}
			/>
  			
			<div className="herder">
					<div className="top">
							<img alt="photoimg" src="./img/banner.png"/>
							<div className="per">
									<p className="name">刘杰</p>
									<p className="money">余额:123</p>
							</div>
					</div>
					<div className="bottom">
							<div className="item">
									<p>23</p>
									<p>商品收藏</p>
							</div>
							<div className="item">
									<p>23</p>
									<p>文章收藏</p>
							</div>
							<div className="item">
									<p>23</p>
									<p>足迹</p>
							</div>									
					</div>
			</div>
			<div className="row">
					<Personaltitle title="我的订单"/>
					<div className="items">
							<Link className="item" to={{pathname:'/order/'+0}}>
									<i className="icon iconfont icon-shangpingouwudai2"></i>
									<p>待付款</p>
							</Link>
							<Link className="item" to={{pathname:'/order/'+1}}>
									<i className="icon iconfont icon-shangpingouwudai2"></i>
									<p>待收货</p>
							</Link>
							<Link className="item" to={{pathname:'/order/'+2}}>
									<i className="icon iconfont icon-shangpingouwudai2"></i>									
									<p>付款</p>
							</Link>
							<Link className="item" to={{pathname:'/order/'+3}}>
									<i className="icon iconfont icon-shangpingouwudai2"></i>
									<p>售后</p>
							</Link>		
							<div className="item" onClick={this.go_order.bind(this,4)}>
									<i className="icon iconfont icon-shangpingouwudai2"></i>
									<p>测试</p>
							</div>										
					</div>
			</div>
			
			<div className="countbox">
				<div>dispatch触发 state 变化的惟一途径</div>
				<div>{this.props.count}</div>           
	            <div className="count">
	            	<span className="Calculation" onClick={() => {
                        this.props.dispatch(countAction.deincrease(5))
                    }}>-</span>
	            	<span className="num">{this.props.count}</span>
	            	<span className="Calculation" onClick={() => {
                        this.props.dispatch(countAction.increase(5))
                    }}>+</span>
	            </div>		
	            <div onClick={() => {
                        this.props.dispatch(countAction.reset())
                    }}>重置</div> 
			</div>
			<div className="Route">
				<Link className="item" to={{pathname:`${match.url}`}}>子路由1</Link>
				<Link className="item" to={{pathname:`${match.url}/two`}}>子路由2</Link>
				<Link className="item" to={{pathname:`${match.url}/three`}}>子路由3</Link>
				
				
				<Route exact  path="/personal" component={One}/>
				<Route path={`${match.url}/two`} component={Two}/>
				<Route path={`${match.url}/three`} component={Three}/>            
            </div>
			<Tab history={history}/>
      </div>
    );
  }
}

function select(store) {
    return {
        count: store.countReducer.count,
    }
}

export default connect(select)(personal)



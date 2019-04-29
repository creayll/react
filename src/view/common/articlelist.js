import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import './css/articlelist.css'


//文章列表
class articlelist extends Component {
	render() {
	    return (
	      	<div className="articlelist">	     
				<div className="item">
					<img alt="article" className="img" src="./img/good.jpg"/>
					<div className="des">
						<p className="name">物品</p>
						<div className="content">
已提交未审批通过的工时如需修改，请到“我的Timesheet”里删除后，在此处重新填写！
如需查询以前月份工时，请至“Timesheet高级查询”！如无项目可填，请联系部门助理或者项目经理，执行资源配置和资源计划并发布后即可！

						</div>
					</div>
				</div>	
				<div className="item">
					<img alt="article" className="img" src="./img/good.jpg"/>
					<div className="des">
						<p className="name">物品</p>
						<div className="content">
已提交未审批通过的工时如需修改，请到“我的Timesheet”里删除后，在此处重新填写！
如需查询以前月份工时，请至“Timesheet高级查询”！如无项目可填，请联系部门助理或者项目经理，执行资源配置和资源计划并发布后即可！
请假或加班申请同步后会自动更新Timesheet！
						</div>
					</div>
				</div>						
	      	</div>
	    );
	}
}

export default articlelist;

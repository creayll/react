import React, { Component } from 'react';
import Tab from "../common/tab";
import Crumbs from "../common/crumbs";
import Classification from "../common/classification";
import Sort from "../common/sort";
import Goodlist from "../common/goodlist";
import "./css/index.css";
import "../common/css/common.css";
import Title from "../common/title";
class good extends Component {
  render() {
  	let history=this.props.history
    return (
      <div className="good container">
      		<Title title="商品"/>  
      		<div className="row">
			      	<div className="Crumbsbox">
			      			<Crumbs name="商品分类"/>
			      	</div>
			      	<div className="Classificationbox">
			      			<Classification/>
			      	</div>
		  				<Sort/>
		  				<div className="Goodlistbox">
		  						<Goodlist/>
		  				</div>
  				</div>
					<Tab history={history}/>
      </div>
    );
  }
}

export default good;
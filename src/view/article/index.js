import React, { Component } from 'react';
import Tab from "../common/tab";
import Crumbs from "../common/crumbs";
import Classification from "../common/classification";
import Sort from "../common/sort";
import Articlelist from "../common/articlelist";
import "./css/index.css";
import "../common/css/common.css";
import Title from "../common/title";
class article extends Component {
  render() {
  	let history=this.props.history
    return (
      <div className="container">
      		<Title title="文章"/>  
	      	<div className="row">
			      	<div className="Crumbsbox">
			      			<Crumbs name="商品分类"/>
			      	</div>
			      	<div className="Classificationbox">
			      			<Classification/>
			      	</div>
		  				<Sort/>
		  				<div className="Goodlistbox">
		  						<Articlelist/>
		  				</div>
	  				</div>
						<Tab history={history}/>
      </div>
    );
  }
}

export default article;
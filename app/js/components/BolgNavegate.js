const React    = require('react');
const ReactDOM = require('react-dom');

var BolgNavegate = React.createClass({
	getInitialState: function(){
		return {
			style: {
				borderRight : "5px solid #337AB7",
				backgroundColor: "#F7F7F7"
			}
		};
	},
	func: function(index){
		var ul = ReactDOM.findDOMNode(this.refs.ul);
		console.log(ul.childNodes.length)
		console.log(this.state.style)
		for(let i = 0; i < ul.childNodes.length; i++){		
				ul.childNodes[i].style.borderRight = "0px";
				ul.childNodes[i].style.backgroundColor = "#fff";
		}
		ul.childNodes[index].style.borderRight = "5px solid #337AB7";
		ul.childNodes[index].style.backgroundColor = "#F7F7F7";	
	},
	ImgHandClick: function(){
		this.setState({ isInverse: !this.state.isInverse });
		console.log("点击了我")
	},
	Navigation1: function(e){
		e.stopPropagation();
		e.preventDefault();
		this.props.isNavigation1Click()();	
		this.func(0);
	},
	Navigation2: function(e){
		e.stopPropagation();
		e.preventDefault();
		this.props.isNavigation2Click()();	
		this.func(1);
	},
	Navigation3: function(e){
		e.stopPropagation();
		e.preventDefault();
		this.props.isNavigation3Click()();
		this.func(2);
	},
	Navigation4: function(e){
		e.stopPropagation();
		e.preventDefault();
		this.props.isNavigation4Click()();
		this.func(3);
	},
	componentDidMount: function(){

	},
	render: function(){
		return (
			<div className="bg">	
				<img className="imgclass" src="../../../src/images/01.jpg" onClick={this.ImgHandClick} />
				<ul className="nav nav-pills nav-stacked BolgNavegate-ul" ref="ul">
				  <li role="presentation" style={this.state.style}>
				  	<a href="#" onClick={this.Navigation1}>
				  		<i className="iconfont01">&#xe6d7;</i>&nbsp;&nbsp;
				  		导航一
				  	</a>
				  </li>
				  <li role="presentation">
				  	<a href="#" onClick={this.Navigation2}>
				  		<i className="iconfont02">&#xe696;</i>&nbsp;&nbsp;
				  		导航二&nbsp;&nbsp;
				  	</a>
				  </li>
				  <li role="presentation" className="dropdown">
				  	<a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" onClick={this.Navigation3}>
			      		&nbsp;&nbsp;&nbsp;&nbsp;<i className="iconfont03">&#xe656;</i>&nbsp;&nbsp;
			      		导航三 &nbsp;&nbsp;
			      		<i className="iconfont05">&#xe61a;</i>
			      	</a>
			    	<ul className="dropdown-menu">
					    <li><a href="#">Action</a></li>
					    <li><a href="#">Another action</a></li>
					    <li><a href="#">Separated link</a></li>
			    	</ul>
			  	  </li>
				  <li role="presentation" className="dropdown">
				  	<a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" onClick={this.Navigation4}>
			      		&nbsp;&nbsp;&nbsp;<i className="iconfont04">&#xe647;</i>&nbsp;&nbsp;
			      		导航四&nbsp;&nbsp;
			      		<i className="iconfont05">&#xe61a;</i>
			      	</a>	
			    	<ul className="dropdown-menu">
					    <li><a href="#">Action</a></li>
					    <li><a href="#">Another action</a></li>
					    <li><a href="#">Separated link</a></li>
			    	</ul>
			  	  </li>
				</ul>
			</div>
		);
	}
});

module.exports = BolgNavegate;
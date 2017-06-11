const  React        = require('react');
const  ReactDOM     = require('react-dom');
const  BolgNavegate = require('./components/BolgNavegate.js');
const  RightMap1     = require('./components/rightMap1.js');
const  RightMap2     = require('./components/rightMap2.js');

var  LeftMenu = React.createClass({
	getInitialState: function(){
		return {
			isNavigation:{
				isNavigation1: {
					isclick: false,
					islocal: true
				},
				isNavigation2: {
					isclick: false,
					islocal: false
				},
				isNavigation3: {
					isclick: false,
					islocal: false
				},
				isNavigation4: {
					isclick: false,
					islocal: false
				}
			}					
		};		
	},
	isNavigation1Click: function(){
		return function(){
			var isNavigation = this.state.isNavigation;
				isNavigation.isNavigation1.isclick = !isNavigation.isNavigation1.isclick;
				isNavigation.isNavigation1.islocal = true;
				isNavigation.isNavigation2.islocal = false;
			console.log("1")
			this.setState({
				isNavigation: isNavigation
			});
		}.bind(this);
	},	
	isNavigation2Click: function(){
		return function(){
			var isNavigation = this.state.isNavigation;
				isNavigation.isNavigation2.isclick = !isNavigation.isNavigation2.isclick;
				isNavigation.isNavigation2.islocal = true;
				isNavigation.isNavigation1.islocal = false;
			console.log("2")
			this.setState({
				isNavigation: isNavigation
			});
		}.bind(this);
	},	
	isNavigation3Click: function(){
		return function(){
			var isNavigation = this.state.isNavigation;
				isNavigation.isNavigation3.isclick = !isNavigation.isNavigation3.isclick;
				isNavigation.isNavigation3.islocal = true;
			console.log("3")
			this.setState({
				isNavigation3: isNavigation3
			});
		}.bind(this);
	},	
	isNavigation4Click: function(){
		return function(){
			var isNavigation = this.state.isNavigation;
				isNavigation.isNavigation4.isclick = !isNavigation.isNavigation4.isclick;
				isNavigation.isNavigation4.islocal = true;
			console.log("4")
			this.setState({
				isNavigation: isNavigation
			});
		}.bind(this);
	},		
	componentDidMount: function(){
		var bolg = ReactDOM.findDOMNode(this.refs.bg);
	},
	render: function(){
		return (
				<div className="contents">
					<div className="leftMenu" ref="bg">
						<BolgNavegate
						isNavigation={this.state.isNavigation} 
						isNavigation1Click={this.isNavigation1Click} 
						isNavigation2Click={this.isNavigation2Click} 
						isNavigation3Click={this.isNavigation3Click} 
						isNavigation4Click={this.isNavigation4Click} 
						/>
					</div>
					<div className="rightWrap">
						<RightMap1 isNavigation={this.state.isNavigation} />	
						<RightMap2 isNavigation={this.state.isNavigation} />
					</div>
				</div>
			);
	}
});

var E = ReactDOM.render(<LeftMenu/>, document.querySelector('.components'));

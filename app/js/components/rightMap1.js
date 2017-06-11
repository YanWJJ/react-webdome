const React = require('react');
const ReactDOM = require('react-dom');

var rightWrap = React.createClass({
	render: function(){
		var h1ClassName = "jumbotron welcome";
			h1ClassName += this.props.isNavigation.isNavigation1.isclick ? " h1-inverse" : "";
			h1ClassName += this.props.isNavigation.isNavigation1.islocal ? "" : " h1-local";
		return (
			<div className={h1ClassName}>
			  <h1>Welcome</h1>
			</div>
			);
	}
});

module.exports = rightWrap;
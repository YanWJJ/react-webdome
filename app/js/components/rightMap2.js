const React = require('react');
const ReactDOM = require('react-dom');

var rightWrap2 = React.createClass({
	render: function(){
		var rightWrap2Name = "M2";
			rightWrap2Name += this.props.isNavigation.isNavigation2.islocal ? " M2-local" : "";
		return (
			<div>
				<div className={rightWrap2Name}>
		  			<h1>Example page header <small>Subtext for header</small></h1>				
				</div>
			</div>
		);
	}
});

module.exports = rightWrap2;
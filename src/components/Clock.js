import React from "react";

class Clock extends React.Component{
state={Date:new Date()};

componentDidMount(){
	this.clockTimer = setInterval(()=>this.tick(),1000);
}

componentWillUnmount(){
	clearInterval(this.clockTimer);
}
/*
handleClick(){
console.log('the button was clicked!');
}*/
tick(){
	this.setState({
	date:new Date(),
	});
}

render(){
	return(
<div>
<h1 className="heading">
	<span>{new Date().toLocaleTimeString(this.props.locale)}</span>
</h1>

</div>
	
	)
}
}

export default Clock;
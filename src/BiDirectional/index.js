import React from 'react';
class BiDirectionalComponent extends React.Component {
	
	render() {
		var _props = this.props;
		var html = _props.todos.map(function(item, i) {
		  //pass item as parameter in the click method passing item.text doesnt work, it returns undefined
		  return <li key={i} onClick={(event)=>{_props.callReact(item)}}>{item.text}</li>
		});
		return (
		  <div>
			<ul>
			  {html}
			</ul>
			<button onClick={()=>{this.props.alertCallFromReact('message from React Component to Angular Directive')}}>Call from Component to Directive</button>
		  </div>
		);
	  }
  };

  export default BiDirectionalComponent;

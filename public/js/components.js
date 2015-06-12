var Message = React.createClass({displayName: "Message",

  render: function() {
    return (
      React.createElement("div", null, 
        "Hey, ", React.createElement("strong", null, this.props.name)
      )
    );
  }

});
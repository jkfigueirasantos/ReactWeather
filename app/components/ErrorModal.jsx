var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function(){
    return({
      title: 'Error'
    });
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
    var modal = new Foundation.Reveal( $('#error-modal') );
    modal.open();
  },
  render: function(){
    var {title, message} = this.props;
    return(
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h3>{title}</h3>
        <p>{message}</p>
        <p>
          <button type="button" className="button hollow" data-close="">Okay!</button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;

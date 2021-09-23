'use strict';

class PhotoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: false};
  }

  render () {
    if (this.state.liked) {
      return "You liked this"
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>

    );
  }
}
console.log("photo_container.js connected");
const e = React.createElement;

const domContainer = document.querySelector('#photo_container');
ReactDOM.render(e(PhotoContainer), domContainer);

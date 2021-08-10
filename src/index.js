import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  
    // A required React method when using class-based component.
    constructor(props) {
      super(props);
      this.state = {character:""};
    }
    
    toUpper(e) {
      this.setState({ character:e.target.value.toUpperCase() });
    }

    render() {
        return (
            <div className="container">
              <section class="content bgcolor_ruri">
                <div class="input input_ruri">
                  <input type="text" name="text" id="text" value={this.state.character} onChange={(e)=>{this.toUpper(e)}} required />
                  <label for="ruri" class="input_label_ruri">
                      <span class="input_label_content">Force UPPERCASE</span>
                  </label>
                </div>
              </section>
            </div>
        );
    };
};
ReactDOM.render(<App />, document.querySelector('#root'));

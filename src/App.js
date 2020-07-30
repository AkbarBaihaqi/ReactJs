import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle';
import Alert from './Components/Alert'
import './App.css';
import Media from './Components/Media';

class App extends Component {
  constructor(){
    
    super();
    this.state = {
      type: "danger",
      header: "Fata Error",
      content: "ini content dari alert"
    }
  }
  changeTypeAlert = (event) => {
      this.setState({type: event.target.value});
    }
    changeHeaderAlert = (event) =>{
      this.setState({header: event.target.value});
    }
    changeContentAlert = (event) => {
      this.setState({content: event.target.value});
    }

  render(){
    return (
      <div className="App container col-sm-6">
        <Alert type={this.state.type} header={this.state.header}>
        {this.state.content}
        </Alert>
        <hr/>
        <h4>Alert Control</h4>
        <b className="text-left">Tipe Alert</b>
        <select className="form-control" name="type" value={this.state.type} onChange={this.changeTypeAlert}>
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="danger">Danger</option>
        <option value="info">Info</option>
        </select>
        <b className="text-left">Header Alert</b>
        <input type="text" name="header" className="form-control" value={this.state.header} onChange={this.changeHeaderAlert} />
        <b className="text-left">Content Alert</b>
        <input type="text" name="content" className="form-control" value={this.state.content} onChange={this.changeContentAlert} />
        {/* <Alert type="success" header="Berhasil">
        Ini adalah alert tipe success
        </Alert>
        <Alert type="warning" header="Warning">
        Ini adalah alert tipe warning
        </Alert> */}
        <Media image="Moklet.png" tittle="Telkom School">
        abcddefghijklmnopqrstuvwxyz
        </Media>
      </div>
    );
  }
}

export default App;

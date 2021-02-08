import React from 'react';
// import style from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      editMod: false,
      status: this.props.status
     };
    this.activateEditMod = this.activateEditMod.bind(this);
    this.deactivateEditMod = this.deactivateEditMod.bind(this);
    this.onStatusChange = this.onStatusChange.bind(this);
  }
  
  activateEditMod() {
    this.setState({editMod: true});    
  }
  deactivateEditMod() {
    this.setState({editMod: false});  
    this.props.updateStatus(this.state.status);  
  }
  onStatusChange(e) {
    this.setState({
      status: e.currentTarget.value
    });    
  }
 
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }



  render() {
    return <>
      {this.state.editMod ?
        <div>
          <input onChange={ this.onStatusChange } autoFocus={true} onBlur={this.deactivateEditMod} value={this.state.status}></input>
        </div>
        : <div>
          <span onDoubleClick={ this.activateEditMod}>{this.props.status ? this.props.status : "..."}</span>
        </div>
      }
    </>
  }
}

export default ProfileStatus;
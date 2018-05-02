import React, {label} from 'react';
import TextField from 'material-ui/TextField';
import {Card} from 'material-ui/Card';
import InputMask from 'react-input-mask'
import RaisedButton from 'material-ui/RaisedButton';


import {connect} from 'react-redux'
import { pullDistance } from '../store/googlemaps/actions/action_get_distance'

class ZipField extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      msg: '',
       loading: false,
       zipFieldValue: ''
    };
  }

  handleChange = (event) => {
    this.setState({loading: true })
    this.props.pullDistance(this.state.zipFieldValue, '22770104')
            .then(resp => this.setState({msg: resp.msg , loading: false }))
            .catch(err => this.setState({msg: err , loading: false }))
  };

  componentDidMount(){}

  handleTextFieldChange = (e) => {
    if(e.target.value.length === 0){
      this.setState({
        msg: ''
    });
    }

    this.setState({
        zipFieldValue: e.target.value
    });
  }

  render() {
    const { loading, zipFieldValue, msg } = this.state;
    const zipFiledIsFilled = zipFieldValue.length >= 9 ;

    return (
      <Card>
        
        <div>
          <TextField
            id="zip-field"
            floatingLabelText='Preencha o cep para entrega'
            floatingLabelFixed={true}
            onChange={this.handleTextFieldChange}
            type='number'>
            <InputMask mask="99999-999" maskChar="" />
          </TextField>

          <RaisedButton
            label="OK"
            primary={true}
            onClick= {this.handleChange}
            disabled={!zipFiledIsFilled}
            style={style} />
        </div>
        <div>
          <label hidden={!loading} >Carregando...</label>
          <label hidden={loading} >{msg}</label>
        </div>
        
      </Card>
    );
  }
}

const style = {
  margin: 12,
};


function mapStateToProps(state) {
  return {
    distance: state.metrics
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
        pullDistance: (origin, dist) => dispatch(pullDistance(origin, dist)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ZipField)

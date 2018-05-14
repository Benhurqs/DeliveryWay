import React, {label} from 'react';
import TextField from 'material-ui/TextField';
import {Card} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


import {connect} from 'react-redux'
import { pullDistance } from '../store/googlemaps/actions/action_get_distance'
import { pullDirections } from '../store/googlemaps/actions/action_get_directions'

class AddressField extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      msg: '',
       loading: false,
       addressFieldValue: ''
    };
  }

  handleChange = (event) => {
    this.setState({loading: true })
    // this.props.pullDistance(this.state.addressFieldValue)
    //         .then(resp => this.setState({msg: resp.msg , loading: false }))
    //         .catch(err => this.setState({msg: err , loading: false }))

    this.props.pullDirections(this.state.addressFieldValue)
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
        addressFieldValue: e.target.value
    });
  }

  render() {
    const { loading, addressFieldValue, msg } = this.state;
    const zipFiledIsFilled = addressFieldValue.length >= 10 ;

    return (
      <Card>
        
        <div>
          <TextField
            id="address-field"
            floatingLabelText='Preencha o endereço para entrega'
            floatingLabelFixed={true}
            onChange={this.handleTextFieldChange}
            type='text'>
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
        pullDistance: (origin) => dispatch(pullDistance(origin)),
        pullDirections:  (origin) => dispatch(pullDirections(origin)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressField)

import React, {label} from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import InputMask from 'react-input-mask'
import RaisedButton from 'material-ui/RaisedButton';


import {connect} from 'react-redux'
// import getDistance from '../store/googlemaps/actions/action_get_distance'
import { pullDistance } from '../store/googlemaps/actions/action_get_distance'
// import {bindActionCreators} from 'redux'

class ZipField extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
       distance: '',
       value: "Testando"
    };
  }

  handleChange = (event) => {
    console.log(this.state.distance);
    this.setState({
       value: "blablba",
    });
  };

  componentDidMount(){
      this.props.pullDistance('25080150', '22770104')
            .then(resp => console.log(resp.distance.data))
            .catch(err => console.log(err))
  }

  render() {
    return (
      <Card>
        <label for="test">{this.state.value}</label>
        <TextField
          id="zip-field"
          floatingLabelText='Preencha o cep para entrega'
          floatingLabelFixed={true}
          type='number'>
          <InputMask mask="99999-999" maskChar="" />
        </TextField>

        <RaisedButton
          label="OK"
          primary={true}
          onClick= {this.handleChange}
          style={style} />
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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({getDistance: getDistance}, dispatch);
// }


const mapDispatchToProps = (dispatch) => {
    return {
        pullDistance: (origin, dist) => dispatch(pullDistance(origin, dist)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ZipField)

import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import InputMask from 'react-input-mask'
import RaisedButton from 'material-ui/RaisedButton';

export default class ZipField extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // value: 'Property Value',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <Card>
        <TextField
          id="zip-field"
          value={this.state.value}
          onChange={this.handleChange}
          floatingLabelText="Preencha com o cep de entrega"
          type='number'>
          <InputMask mask="99999-999" maskChar="" />
        </TextField>
        <RaisedButton label="OK" primary={true} style={style} />
      </Card>
    );
  }
}



const style = {
  margin: 12,
};

//AIza
//SyANn
//Fv6A0
//gzXlYm
//VVC1BN
//N018Yu
//1vlR3lE
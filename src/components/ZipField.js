import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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
          hintText="Preencha com o cep de entrega"
          
        />
      </Card>
    );
  }
}
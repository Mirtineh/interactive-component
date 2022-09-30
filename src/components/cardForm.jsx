import Form from "./common/form";
import Joi from "joi-browser";
class CardForm extends Form {
  state = {
    data: {
      name: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
    errors: {},
  };
  schema = {
    name: Joi.string().required().label("CARDHOLDER NAME"),
    cardNumber: Joi.number().required().label("CARD NUMBER"),
    expiryDate: Joi.number().required().label("Exp. Date (MM/YY)"),
    cvc: Joi.number().required().label("CVC"),
  };
  doSubmit = () => {
    this.props.onSubmit();
  };
  handleNameChange = () => {
    this.props.onNameChange(this.state.data.name);
  };
  handleNumberChange = () => {
    this.props.onNumberChange(this.state.data.cardNumber.split(/\s+/));
  };
  render() {
    return (
      <div className="mt-24 sm:mt-60 w-80 mx-auto">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "CARDHOLDER NAME")}
          {this.renderInput("cardNumber", "CARD NUMBER")}
          {this.renderInput("expiryDate", "Exp. Date (MM/YY)")}
          {this.renderInput("cvc", "CVC")}
          {this.renderButton("Confirm")}
        </form>
      </div>
    );
  }
}

export default CardForm;

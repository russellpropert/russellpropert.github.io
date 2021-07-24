"use strict";

class ReactIntro extends React.Component {
  handleSubmit(event) {
    event.preventDefault(); // prevent the page from refreshing
    const size = document.getElementById("size").value;
    const pepperoni = document.getElementById("pepp").checked;
    const glutenFree = document.getElementById("g-free").checked;
    const additionalInstructions =
      document.getElementById("add-instr").value || "None";
    const nameForOrder =
      document.getElementById("name-for-order").value || "Anonymous";
    const quantity = document.getElementById("quantity").value || 1;

    const orderStr = `Order for ${quantity} ${size} pizza(s) that are ${
      glutenFree ? `gluten-free` : `not gluten-free`
    } and ${
      pepperoni ? `have pepperoni` : `dont have pepperoni`
    } for ${nameForOrder} \n\n Instructions: ${additionalInstructions}`;

    // don't edit this line, it shows your string in the most-recent-order div
    document.getElementById("most-recent-order").innerText = orderStr;
    // alerts order string in browser
    alert(orderStr);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            Name: <input id="name-for-order" type="text" />
          </div>

          <div>
            Size{" "}
            <select id="size">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>

          <div>
            Pepperoni <input id="pepp" type="checkbox" />
          </div>

          <div>
            Gluten Free <input id="g-free" type="checkbox" />
          </div>

          <div>
            Quantity <input type="number" id="quantity" min="1" max="5" />
          </div>

          <textarea
            id="add-instr"
            name="paragraph_text"
            placeholder="Stuffed Crust, No Cheese, No Sauce, Add Mushrooms"
            cols="50"
            rows="3"
          ></textarea>

          <input id="form-submit" type="submit" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(ReactIntro),
  document.getElementById("root")
);

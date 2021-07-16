// import React, { useState, useEffect } from "react";

// const Form = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     user: {
//       day: "",
//       birthDay: "",
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevState) => ({
//       ...prevState,
//       user: {
//         ...prevState.Address,
//         [name]: value,
//       },
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = form;
//     console.log(data);
//   };
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-6 offset-3">
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Password</label>
//               <input
//                 name="name"
//                 onChange={handleChange}
//                 id="name"
//                 type="text"
//                 className="form-control"
//                 placeholder="Password"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 name="email"
//                 onChange={handleChange}
//                 id="email"
//                 type="email"
//                 className="form-control"
//                 placeholder="Email ni kiriting !"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 name="password"
//                 onChange={handleChange}
//                 id="password"
//                 type="password"
//                 className="form-control"
//                 placeholder="Password ni kiriting !"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="day">Password</label>
//               <input
//                 name="day"
//                 onChange={handleChange}
//                 id="day"
//                 type="day"
//                 className="form-control"
//                 placeholder="day ni kiriting !"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="birthDay">Password</label>
//               <input
//                 name="birthDay"
//                 onChange={handleChange}
//                 id="birthDay"
//                 type="text"
//                 className="form-control"
//                 placeholder="birthDay ni kiriting !"
//               />
//             </div>
//             <div className="form-group">
//               <button className="btn btn-primary">Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Form;

import React, { Component } from "react";

class Form extends Component {
  state = {
    form: {
      name: "",
      email: "",
      password: "",
      address: {
        street: "",
        number: "",
      },
    },
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prev) => ({
      form: { ...prev.form, address: { ...prev.address, [name]: value } },
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.form);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Password</label>
                <input
                  name="name"
                  onChange={this.handleChange}
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  onChange={this.handleChange}
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email ni kiriting !"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  onChange={this.handleChange}
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Password ni kiriting !"
                />
              </div>
              <div className="form-group">
                <label htmlFor="street">Password</label>
                <input
                  name="street"
                  onChange={this.handleChange}
                  id="street"
                  type="text"
                  className="form-control"
                  placeholder="street ni kiriting !"
                />
              </div>
              <div className="form-group">
                <label htmlFor="number">Password</label>
                <input
                  name="number"
                  onChange={this.handleChange}
                  id="number"
                  type="text"
                  className="form-control"
                  placeholder="number ni kiriting !"
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;

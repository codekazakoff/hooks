import React, { useState } from "react";
import Joi from "joi-browser";
import Input from "./Input";
const Validate = () => {
  const [user, setUser] = useState({
    name: "",
    number: "",
    address: {
      city: "",
    },
  });

  const [errors, setErrors] = useState({});

  const schema = {
    city: Joi.string().required().label("City"),
    name: Joi.string().required("Name ni kiriting ").label("Name"),
    number: Joi.number().required().label("Password"),
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const hi = { [name]: schema[name] };

    const { error } = Joi.validate(obj, hi);

    return error ? error.details[0].message : null;
  };

  const Validate = () => {
    const object = { abortEarly: false };
    const { error } = Joi.validate(user, schema, object);

    if (!error) return null;

    const errorS = { ...errors };

    for (let item of error.details) {
      errorS[item.path[0]] = item.message;
    }
    return errorS;
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    const msg = validateProperty(target);

    const error = { ...errors };

    if (msg) error[name] = msg;
    else delete error[name];

    if (name === "city") {
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
      setErrors(error);
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
      setErrors(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const errors = Validate();

    if (errors && name === "city") {
      setErrors(errors.address["city"]);
    } else if (errors) setErrors(errors);
    console.log(errors);
    console.log(user);
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-6 ">
          <form onSubmit={handleSubmit}>
            <Input
              label="Name"
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              error={errors["name"]}
            />
            <Input
              label="Number"
              type="number"
              name="number"
              value={user.number}
              onChange={handleChange}
              error={errors["number"]}
            />
            <Input
              label="Address"
              type="text"
              name="city"
              value={user.address.city}
              onChange={handleChange}
              error={errors["city"]}
            />
            <button className="btn btn-primary float-end mt-3">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Validate;

import { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState([
    { name: "", email: "", password: "", mobile: "", role: "" },
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(formData);
  };

  return (
    <form className="w-50 mx-auto" onSubmit={submitHandler}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          // value={setFormData.name}
          className="form-control"
          onChange={onChangeHandler}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          name="email"
          // value={setFormData.email}
          className="form-control"
          onChange={onChangeHandler}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="text"
          name="password"
          // value={setFormData.password}
          className="form-control"
          onChange={onChangeHandler}
        />
      </div>
      <div className="form-group">
        <label>Mobile</label>
        <input
          type="text"
          name="mobile"
          // value={setFormData.mobile}
          className="form-control"
          onChange={onChangeHandler}
        />
      </div>
      <div className="form-group">
        <label>Role</label>
        <select
          className="form-control"
          // value={setFormData.role}
          onChange={onChangeHandler}
        >
          <option>select</option>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
          <option value="Member">Member</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default MyForm;

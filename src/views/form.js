const MyForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("he");
  };

  return (
    <form className="w-50 mx-auto" onSubmit={submitHandler}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" name="name" value="" className="form-control" />
        <label>Email</label>
      </div>
      <div className="form-group">
        <input type="text" name="email" value="" className="form-control" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="text" name="password" value="" className="form-control" />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input type="text" name="mobile" value="" className="form-control" />
      </div>
      <div className="form-group">
        <select className="form-control">
          <option>select</option>
          <option>Teacher</option>
          <option>Student</option>
          <option>Admin</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default MyForm;

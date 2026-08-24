import { useEffect, useState } from "react";
import "./userCard.css";
const UserDetails = () => {
  const [userData, setUserData] = useState([
    {
      id: 1,
      name: "Ashu",
      age: 24,
      mobile: "9876543210",
      city: "Lucknow",
    },
    {
      id: 2,
      name: "Diya",
      age: 24,
      mobile: "9876543210",
      city: "Lucknow",
    },
    {
      id: 3,
      name: "Deepak",
      age: 24,
      mobile: "9876543210",
      city: "Lucknow",
    },
    {
      id: 4,
      name: "Saurabh",
      age: 24,
      mobile: "9876543210",
      city: "Lucknow",
    },
    {
      id: 5,
      name: "Rishu",
      age: 28,
      mobile: "9876543211",
      city: "Kanpur",
    },
    {
      id: 6,
      name: "Rahul",
      age: 22,
      mobile: "9876543212",
      city: "Delhi",
    },
    {
      id: 7,
      name: "Neha",
      age: 26,
      mobile: "9876543213",
      city: "Mumbai",
    },
    {
      id: 8,
      name: "Pooja",
      age: 30,
      mobile: "9876543214",
      city: "Pune",
    },
  ]);
  // const [userName, setUserName] = useState("ashu");
  const [userInputData, setUserInputData] = useState({
    id: Math.random(),
    name: "",
    age: "",
    mobile: "",
    city: "",
  });

  // fiunction for input Data







  const handleInputData = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    console.log(e.target, "datta type");
    setUserInputData({ ...userInputData, [name]: value });
  };



  
  //reset
  const resetInputForm = () => {
    setUserInputData({
      id: Math.random(),
      name: "",
      age: "",
      mobile: "",
      city: "",
    });
  };







  // function submit data

  const submitUserData = () => {
    setUserData([userInputData, ...userData]);
    resetInputForm();
  };

  // function for Delete Data
  const deleteUser = (id) => {
    setUserData(
      userData.filter((e) => {
        return e.id !== id;
      }),
    );
  };

  // function  for Update





  const handleUpdate = (id) => {
    const filterData = userData.find((e) => e.id == id);
    setUserInputData({...filterData});
    
  };





  const updateUserData = () => {
    const updatedData = userData.map((e) =>
      e.id == userInputData.id ? { ...userInputData } : e);
    setUserData(updatedData);
    resetInputForm()
  };
  //   useEffect(() => {
  //   }, [userData]);

  return (
    <>
      <div className="userForm ">
        <label>name</label>
        <input
          type="text"
          placeholder="userName"
          name="name"
          onChange={handleInputData}
          value={userInputData.name}
        />
        <label>age</label>
        <input
          type="number"
          placeholder="Age"
          name="age"
          onChange={handleInputData}
          value={userInputData.age}
        />
        <label>mobile</label>
        <input
          type="tel"
          placeholder="Mobile Number"
          name="mobile"
          onChange={handleInputData}
          value={userInputData.mobile}
        />
        <button onClick={submitUserData}>submit</button>
        <button onClick={updateUserData}>update</button>
      </div>
      <div className="container">
        {userData?.map((item) => {
          return (
            <div className="userCard" key={item.id}>
              <h3>{item.name}</h3>
              <h4>{item.age}</h4>
              <h4>{item.mobile}</h4>
              <button onClick={() => deleteUser(item.id)}>Delete</button>
              <button onClick={() => handleUpdate(item.id)}>Update</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserDetails;

import { useState } from "react";
import Buttons from "../components/Buttons";
import Input from "../components/Input";
import { fbSignUp } from "../config/Fbmethods";
import { useNavigate } from "react-router-dom";


import "./Login.css";

export default function Signup() {
  const [model, setModel] = useState<any>({});

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  const navigate = useNavigate();

  let signUpUser = () => {
    console.log(model);
    fbSignUp(model)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let go = () => {
    navigate('/Login')
  }

  return (
  
    <div className="container-fluid gbcolor">
      <div className="container">
        <h1 className="pt-3 bg-transparent fs-2">
          <b className="text-white ">SignUp Your Account</b>
        </h1>
        <hr className="w-25 text-center custom-hr" />
      </div>
      <div className="container-fluid m-auto py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                width={500}
                src="https://static.vecteezy.com/system/resources/previews/024/658/980/original/3d-male-character-sitting-on-a-sofa-and-working-on-a-laptop-with-thinking-pose-free-png.png"
                className="img-fluid"
                alt="Responsive image"
              />
            </div>
            <div className="col-md-6 m-auto border rounded p-2 shadow ">
              <h1 className="login fs-3">SignUp</h1>

              <div className="">
                <Input
                  onChange={(e: any) => fillModel("Name", e.target.value)}
                  label="Name"
                  type="text"
                />
              </div>

              <div className="">
                <Input
                  onChange={(e: any) => fillModel("LastName", e.target.value)}
                  label="Last Name"
                  type="text"
                />
              </div>

              <div className="">
                <Input
                  onChange={(e: any) => fillModel("Roll No", e.target.value)}
                  label="Roll No"
                  type="text"
                />
              </div>

              <div className="">
                <Input
                  value={model.Email}
                  onChange={(e: any) => fillModel("email", e.target.value)} 
                  label="Email"
                  type="email" 
                />
              </div>
              <div>
                <Input
                  type="password"
                  value={model.password}
                  onChange={(e: any) => fillModel("password", e.target.value)}
                  label="Password"
                />
              </div>
              <Buttons onClick={signUpUser} label="Signup" />
              <p className="p-3" onClick={go}>if you have already an account got to the <u><b className="text-white fs-5 p-2">Login</b></u>  </p>
              
            </div>
          </div>
        </div>
      </div>
      </div>

  );
}

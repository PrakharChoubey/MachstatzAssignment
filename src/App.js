import './App.css';
import { useState, useEffect } from 'react';
import Users from './components/UsersGrid';
import Collapse1 from './components/collapse';
import { Row } from 'react-bootstrap';
import UserInput from './components/UserInput';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const URL = "http://15.207.229.231:8000/machstatz";

function App() {
  const [allUsers, setUsers] = useState([]);
  const retrieveAllUsers = async () => {
//     const response = await axios.get(`${URL}/get_all_users`);
//     return response.data;
    const response = await axios.get(`${URL}/get_all_users`).catch(er => alert(`Network Error - Api failure`));
    return response? response.data: null ;
  }
  const addNewUser = async (User) => {
    const user = {
      email: User.email,
      fist_name: User.firstName,
      last_name: User.lastName,
      pwd: User.password,
      username: User.username
    }
    axios.post(`${URL}/add_new_user`, user).then(res => {
      console.log("Response message", res.data.message);
    }).catch(err => err);
    toast.success(`New User Added - ${user.fist_name}`, { position: toast.POSITION.TOP_RIGHT });
    window.scrollTo(0, 0);
    setUsers([...allUsers, user]);
  };

  const removeUserHandler = async (email) => {
    await axios.delete(`${URL}/delete_existing_user`, { params: { email: email } }).catch(err => err);
    toast.warn('Deleted', { position: toast.POSITION.TOP_LEFT });
    const newUsers = allUsers.filter((user) => {
      return user.email !== email;
    });

    setUsers(newUsers);
  };
  useEffect(() => {
    const getAllUsers = async () => {
      const XallUsers = await retrieveAllUsers();
      if (XallUsers) setUsers(XallUsers);
    };
    getAllUsers();
  }, []);

  useEffect(() => {
  }, [allUsers]);

  return (
    <div className="container mt-3 ">
      <Row>
        <Users
          allUsers={allUsers}
          getUserEmail={removeUserHandler}
        />
      </Row>
      <Row>
        <Collapse1>
          <UserInput allUsers={allUsers} addNewUser={addNewUser}/>
        </Collapse1>
      </Row>
    </div>
  )

}

export default App;

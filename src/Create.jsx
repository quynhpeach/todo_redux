import { useDispatch, useSelector } from 'react-redux';

import React from 'react'
import { addUser } from './UserReducer';
import useNavigate from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    //useSelector cho phép truy cập state của redux store
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1, name, email}));
        navigate('/');
    }
  return (
    <div className="d-flex w-100 vh-100 justify-content -center align-items-center">
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Add new user</h3>
        <form onSubmit={handleSubmit}>
            <br>
            <div>
                <label htmlFor="name">
                    Name:
                </label>
                <input type="text" name='name' className='form-control' placeholder='enter name' onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="email">
                    Email:
                </label>
                <input type="text" name='email' className='form-control' placeholder='enter email' onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            </br>
            <button className='btn btn-info'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create

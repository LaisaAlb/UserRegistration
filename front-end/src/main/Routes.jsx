import React from "react";
import { Route, Routes } from 'react-router-dom';

import Home from '../components/home/home'
import UserCrud from "../components/user/UserCrud";

export default props =>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/users' element={<UserCrud />} />
        <Route path='*' element={<Home />} />
    </Routes>
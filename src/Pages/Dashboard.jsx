import React, { useState, useRef } from 'react';
import Navbar from '../Components/Navbar';
import LinkedInFollow from '../Components/LinkedInFollow';
import EachApplication from '../Components/EachApplication';
import { auth, db } from "../firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { useAuth } from '../Contexts/AuthContext';

export default function Dashboard() {
    return(
    <>
        <LinkedInFollow/>
        <Navbar/>
        <EachApplication/>
    </>
    )
}
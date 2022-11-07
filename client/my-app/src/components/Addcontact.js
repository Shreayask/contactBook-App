import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from './Form';

const Addcontact = () => {
    const [input, setInput] = useState({

        name: "",
        number: "",
        email: "",
        description: ""

    })

    const setData = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value)

        setInput((preval) => {
            return {
                ...preval,
                [name]: value
            }

        })

    }

    return (
        <div className="form-container mt-6">
            <div  >
                <Link to="/"> <button className="view-btn">View Contact </button></Link>
            </div>
            <Form setInfo={setData} inputData={input} />


        </div>
    )
}

export default Addcontact;
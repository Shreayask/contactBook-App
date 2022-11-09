import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DisplayContact from "./DisplayContact";

const Home = () => {
    const [getContact, setContactData] = useState([]);

    useEffect(() => {
        getContactData();
    }, []);

    console.log('out', getContact);

    const getContactData = async () => {

        console.log('inside');

        const response = await fetch('http://localhost:8000/', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            }


        });
        console.log('resp ', response);
        const datas = await response.json();

        console.log('datas ', datas.data);

        if (response.status === 404 || !datas) {
            window.alert("Error!!");

        } else {
            setContactData(datas.data);
            console.log("Data recieved");
        }
    }

    const deleteContact = async (id) => {

        console.log('inside del', id);

        const response = await fetch(`http://localhost:8000/delete/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            }


        });
        console.log('resp ', response);
        const deletedData = await response.json();

        console.log('deletedData ', deletedData.data);

        if (response.status === 404 || !deletedData) {
            window.alert("Error!!");

        } else {

            console.log("User Deleted");
            getContactData();

        }
    }






    return (
        <div className="mt-5">
            <div className="container">
                <DisplayContact contactList={getContact} deleteContact={deleteContact} />


            </div>

        </div>
    )
}

export default Home
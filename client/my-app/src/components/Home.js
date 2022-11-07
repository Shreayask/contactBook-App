import React from "react";

const Home = () => {
    return (
        <div className="mt-5">
            <div className="container">

                <table class="table table-info">
                    <thead>
                        <tr>
                            <th scope="col">Sn</th>
                            <th scope="col">Name</th>
                            <th scope="col" >Phone no.</th>
                            <th scope="col" className="action" >Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td className="d-flex gap-4">
                                <button className="action-btn1"><i class="bi bi-eye-fill"></i></button>
                                <button className="action-btn2"><i class="bi bi-pen-fill"></i></button>
                                <button className="action-btn3"><i class="bi bi-trash3-fill"></i></button>
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>

                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Home
import React from "react";

const ViewDetails = () => {

    return (
        <div className="view-container mt-5">
            <div class="row">
                <div class="col-12 col-lg-8 col-xl-8 col-md-8 mb-2">
                    pp
                </div>
                <div class="col-12 col-lg-4 col-xl-4 col-md-4 mb-2">
                    <div className="d-flex gap-4">

                        <button className="action-btn2"><i class="bi bi-pen-fill"></i></button>
                        <button className="action-btn3"><i class="bi bi-trash3-fill"></i></button>
                    </div>
                </div>

                <div class="col-12 col-lg-6 col-xl-6 col-md-6 mt-5">
                    <h5> <i class="bi bi-person-fill"></i> Name: &nbsp; <span >Ssk</span></h5>
                </div>


                <div class="col-12 col-lg-6 col-xl-6 col-md-6 mt-5">
                    <h5> <i class="bi bi-telephone-fill"></i> Phone number: &nbsp; <span>9842412500</span></h5>
                </div>

                <div class="col-12 col-lg-6 col-xl-6 col-md-6 mt-5">
                    <h5><i class="bi bi-envelope-fill"></i>Email: &nbsp;<span>gamil.com</span></h5>
                </div>

                <div class="col-12 col-lg-6 col-xl-6 col-md-6 mt-5">
                    <h5>Description;&nbsp; <span>9842412500 hhh hhhhh kkk f</span></h5>
                </div>

            </div>
        </div >
    )


}

export default ViewDetails
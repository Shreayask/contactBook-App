import React from "react";

const Form = ({ setInfo, inputData }) => {
    console.log(inputData);
    return (
        <div className="form-container mt-4">

            <form>
                <div class="row">
                    <div class="col-12 col-lg-12 col-xl-12 ">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Profilegggg</label>
                            <input class="form-control" type="file" name="profile" id="formFile" style={{ borderRadius: "2rem ", width: "30%" }} />
                        </div>

                    </div>
                    <div class="col-12 col-lg-6 col-xl-6 ">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" class="form-control" name="name" value={inputData.name} onChange={setInfo} id="exampleInputEmail1" />

                        </div>

                    </div>
                    <div class="col-12 col-lg-6 col-xl-6 ">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Phone number</label>
                            <input type="text" class="form-control" name="number" value={inputData.number} onChange={setInfo} id="exampleInputEmail1" />
                        </div>

                    </div>
                    <div class="col-12 col-lg-6 col-xl-6 ">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" onChange={setInfo} name="email" value={inputData.email} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>

                    </div>
                    <div class="col-12 col-lg-6 col-xl-6 ">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Description</label>
                            <textarea type="text" class="form-control" name="description" onChange={setInfo} value={inputData.description} id="exampleInputEmail1" cols="25" rows="3" ></textarea>

                        </div>

                    </div>

                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form
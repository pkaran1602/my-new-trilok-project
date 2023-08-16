import axios from "axios";
import API_URL from "../api_url/API_URL";
import authHeader from "./authHeader";



export const get_interview_data = async (data) => {
    return axios.post(API_URL + "api/get_interviewer_details", data, {}
    ).then((response) => {
        return response.data;
    });
};


export const add_interview_detail = async (form_data) => {
    return axios.post(API_URL + "api/add_interviewer_detail", form_data, {}
    ).then((res) => {
        return res.data;
    })
};

export const edit_interviewer_detail = async (form_data) => {
    return axios.post(API_URL + "api/edit_interviewer_detail", form_data, {}
    ).then((res) => {
        return res.data;
    })
};



export const remove_interview_detail = async (interview_id) => {
    return axios.post(API_URL + "api/remove_interview_detail", { interview_id: interview_id }, {}
    ).then((res) => {
        return res.data;
    })
};
export const change_interview_status = async (interview_data) => {
    return axios.post(API_URL + "api/chage_interview_status", interview_data, {}
    ).then((res) => {
        return res.data;
    })
};


//hiring
export const add_hiring_detail = async (form_data) => {
    return axios.post(API_URL + "api/add_hiring_detail", form_data, {}
    ).then((res) => {
        return res.data;
    })
};

export const upload_hiring_detail = async (form_data, hiring_id) => {
    return axios.post(`${API_URL}api/uploads_hiring_detail/${hiring_id}`, form_data, {}
    ).then((res) => {
        return res.data;
    })
};


export const get_hiring_data = async (data) => {
    return axios.post(API_URL + "api/get_hiring_details", data, {}
    ).then((response) => {
        return response.data;
    });
};

export const change_hiring_status = async (hiring_data) => {
    return axios.post(API_URL + "api/change_hiring_status", hiring_data, {}
    ).then((res) => {
        return res.data;
    })
};

export const edit_hiring_detail = async (form_data) => {
    return axios.post(API_URL + "api/edit_hiring_detail", form_data, {}
    ).then((res) => {
        return res.data;
    })
};


export const remove_hiring_detail = async (hiring_id) => {
    return axios.post(API_URL + "api/remove_hiring_detail", { hiring_id: hiring_id }, {}
    ).then((res) => {
        return res.data;
    })
};

//inquiry

export const add_inquiry_details = async (inquiry_data) => {
    return axios.post(API_URL + "api/add_inquiry_details", inquiry_data, {}
    ).then((res) => {
        return res.data;
    })
};

export const get_inquiry_data = async (data) => {
    return axios.post(API_URL + "api/get_inquiry_detail", data, {}
    ).then((response) => {
        return response.data;
    });
};

export const remove_inquiry_detail = async (inquiry_id) => {
    return axios.post(API_URL + "api/remove_inquiry_detail", { inquiry_id: inquiry_id }, {}
    ).then((res) => {
        return res.data;
    })
};

// appraisal
export const add_appraisal_detail = async (appraisal_data) => {
    return axios.post(API_URL + "api/add_appraisal_detail", appraisal_data, {}
    ).then((res) => {
        return res.data;
    })
};

export const get_appraisal_detail = async (data) => {
    return axios.post(API_URL + "api/get_appraisal_detail", data, {
        headers: authHeader()
    }).then((response) => {
        return response.data;
    });
};

export const remove_appraisal_detail = async (appraisal_id) => {
    return axios.post(API_URL + "api/remove_appraisal_detail", { appraisal_id: appraisal_id }, {

    }).then((res) => {
        return res.data;
    })
};

// user

export const addEmployeeFun = async (json_Data) =>{
    return axios.post(API_URL + "api/addEmployee", json_Data, {}).then((res) =>{
        return res.data;
    })
};
export const getEmployeeData = async (json_Data) =>{
    return axios.post(API_URL + "api/getUsers", json_Data, {}).then((res) =>{
        return res.data;
    })
};


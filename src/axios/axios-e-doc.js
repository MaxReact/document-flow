import axios from "axios";

export default axios.create({
    baseURL: 'https://react-e-doc-default-rtdb.firebaseio.com/'
})
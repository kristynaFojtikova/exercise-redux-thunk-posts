/*
 * Created Date: Sat, 10th Jul 2021, 15:31:50 pm
 * Author: Kristyna Fojtikova
 */

import axios from "axios";

export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})
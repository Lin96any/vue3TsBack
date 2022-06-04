// Axios封装
import {AxiosInstance} from "axios";
import axios from "axios";
class LinRequest{
    instance: AxiosInstance;
    constructor() {
        this.instance = axios.create()
    }
}
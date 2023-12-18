import axios from "axios";
const interceptors =()=>{
    const RefreshUrl=process.env.REACT_APP_REFREACSH_TOKEN; 
       const refreshtoken =JSON.parse(localStorage.getItem("refreshToken"));
    axios.interceptors.request.use(
        (config) => {
            const accessToken = localStorage.getItem("accessToken");
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;    
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    (response) => {
        return response;
       
    },
    
    async (error) => {
        try 
        {
        if (error.response.status === 401) {
           await axios({
                method : "post",
                url :RefreshUrl,
                data : {
                     refreshToken : refreshtoken
                    },
                
            })
                .then(response => { console.log(response.data.refreshtoken,"refreshToken");  
                    // localStorage.removeItem("refreshToken");
                    // localStorage.removeItem("accessToken");
                    localStorage.setItem("refreshToken",JSON.stringify(response.data.response.refreshtoken));
                     localStorage.setItem("accessToken",response.data.response.accessToken.accessToken);
                 })
                .catch(err => { console.log(err,"ygyugvoyg"); })
        }
         if (error.response.status === 400) {
            console.log('Redirect to login page.');
        window.location.href="/"; 
        
        }
    }
    catch (err)
    {
        console.log(err);
    }


        return Promise.reject(error);
    }
    );
}
export default interceptors;
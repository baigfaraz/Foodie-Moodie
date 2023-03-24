import axios from "axios";

const useSighnInApi = ({navigation} , password, username) => {
    if (password == '' || username == '' ) {
        return alert('Invalid UserName or Password .');
    }
    else {

        axios.post('http://talk2you-live.lingmo-api.com/api/user', {
            password: password,
            languageId: "en-US",
            couponCode: "",
            username: username,
            deviceToken: "",
            fullName: "Any",
            email: "default",
            notificationApp: "lingmoimtab",
            phone: "0321111111",
        })
            .then(function (response) {
                if (response.data.message == "User already exists") {
                    navigation.navigate('Home');
                }
                else {
                    alert('Invalid UserName or Password .');
                }
            })
            .catch(error => {
                console.error(error);
            });
    };
}

export default useSighnInApi;
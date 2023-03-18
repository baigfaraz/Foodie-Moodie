import axios from "axios";

const useRegisterApi = ({navigation} , password, username, fullname, email, confirmpassword) => {
    if (password == '' || username == '' || fullname == '' || email == '' || confirmpassword == '') {
        return alert('Fields missing.');
    }
    else if (password != confirmpassword) {
        return alert('Password and Confirm Password is not same.');
    }
    else {

        axios.post('http://talk2you-live.lingmo-api.com/api/user', {
            password: password,
            languageId: "en-US",
            couponCode: "",
            username: username,
            deviceToken: "",
            fullName: fullname,
            email: email,
            notificationApp: "lingmoimtab",
            phone: "0321111111",
        })
            .then(function (response) {
                if (response.data.message == "User already exists") {
                    alert('User already exists');
                }
                else {
                    alert('Reistered Successfully');
                    navigation.navigate('Login');
                }
            })
            .catch(error => {
                console.error(error);
            });
    };
}

export default useRegisterApi;
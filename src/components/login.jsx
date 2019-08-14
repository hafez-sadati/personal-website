import React from 'react';
const Login = ({ history }) => {
    const handleLogin = () => {
        history.replace('/');
    };

    return (
        <form className="rtl form-signin border rounded m-2 mx-auto bg-light shadow">
            <h1 className="h3 mb-3 font-weight-normal">لطفا وارد شوید</h1>
            <label for="inputEmail" className="sr-only">
                آدرس ایمیل
            </label>
            <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="آدرس ایمیل"
                required
                autoFocus
            />
            <label for="inputPassword" className="sr-only">
                کلمه عبور
            </label>
            <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="کلمه عبور"
                required
            />

            <button
                class="btn btn-lg btn-primary btn-block"
                type="submit"
                onClick={handleLogin}
            >
                ورود
            </button>
        </form>
    );
};

export default Login;

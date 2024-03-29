import React, { useState } from "react";
import loginIcon from "../assets/loginbutton.png";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {  useHistory } from "react-router-dom";
import visibleIcon from "../assets/visible.png";
import invisibleIcon from "../assets/invisible.png";



export const SignInForm = ({ setVisibleLogin }) => {
    const [user, setUser] = useLocalStorage('user');
    const history = useHistory();
    const [visiblePassword, setVisiblePassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        setUser(data.name);
        history.push("/");
    };
    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-element">
                <input  {...register("name", {
                    required: {
                        value: true,
                        message: 'Bu alan gereklidir.'
                    }
                })}
                    placeholder="E-Mail"
                    type="email"

                />
                <span>{errors?.name?.message}</span>
            </div>
            <div className="form-element">
                <button className=" btn btn-success">
                    Giriş Yap
                </button>
            </div> 
        </form>
        <div className="form-element">
            <p className="new_acc">Henüz üye değil misiniz? </p>
        </div>
        <div >
            <button onClick={() => setVisibleLogin(false)} className="btn btn-primary">
                Kayıt Ol
            </button>
        </div>
    </>
}
export default SignInForm;
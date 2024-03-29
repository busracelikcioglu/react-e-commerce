import React, { useState } from "react";
import visibleIcon from "../assets/visible.png";
import invisibleIcon from "../assets/invisible.png";
import { useForm } from "react-hook-form";
import loginIcon from "../assets/loginbutton.png";
import Swal from "sweetalert2";

export const SignUpForm = ({ setVisibleLogin }) => {

  
    const [visiblePassword, setVisiblePassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        if (data.passwordCheck === data.password) {
            console.log("başarılı")
            Swal.fire({
                icon: 'success',
                title: 'Üyelik Oluşturuldu',
                text: 'Anasayfadan giriş yapabilirsiniz!',
                footer: '<a href="/">Anasayfa</a>'
            })

        } else {
            console.log("something went wrong.");
            Swal.fire({
                icon: 'error',
                title: 'Girdiğiniz şifreler eşleşmiyor!'
            })
        }

    };
    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-element">
                <input {...register("name", {
                    required: {
                        value: true,
                        message: 'Bu alan gereklidir.'
                    }
                })}
                    placeholder="Ad:"
                    type="text"
                />
                <span>{errors?.name?.message}</span>
            </div>
            <div className="form-element">
                <input {...register("surname", {
                    required: {
                        value: true,
                        message: 'Bu alan gereklidir.'
                    }
                })}
                    placeholder="Soyad:"
                    type="text"
                />
                <span>{errors?.name?.message}</span>
            </div>
            
            <div className="form-element">
                <input {...register("telephonenumber", {
                    required: {
                        value: true,
                        message: 'Bu alan gereklidir.'
                    }
                })}
                    placeholder="Telefon No:"
                    type="text"
                />
                <span>{errors?.telephonenumber?.message}</span>
            </div>
            <div className="form-element">
                <input {...register("e-mail", {
                    required: {
                        value: true,
                        message: 'Bu alan gereklidir.'
                    }
                })}
                    placeholder="E-Mail:"
                    type="email"
                />
                <span>{errors?.name?.message}</span>
            </div>
            <div className="form-element">
                <input {...register("password", { required: { value: true, message: 'Bu alan gereklidir' } })}
                    placeholder="Yeni Şifre"
                    type={visiblePassword ? "text" : "password"}
                />
                <span>{errors?.password?.message}</span>
                {visiblePassword ? (
                    <img onClick={() => setVisiblePassword(false)}
                        src={invisibleIcon}
                        alt="invisible-password" />
                ) : (
                    <img onClick={() => setVisiblePassword(true)}
                        src={visibleIcon}
                        alt="visible-password" />
                )}
            </div>
            <div className="form-element">
                <input {...register("passwordCheck", { required: { value: true, message: 'Bu alan gereklidir' } })}
                    placeholder="Şiferenizi tekrar giriniz."
                    type={visiblePassword ? "text" : "password"}
                />
                <span>{errors?.passwordCheck?.message}</span>
                {visiblePassword ? (
                    <img onClick={() => setVisiblePassword(false)}
                        src={invisibleIcon}
                        alt="invisible-password" />
                ) : (
                    <img onClick={() => setVisiblePassword(true)}
                        src={visibleIcon}
                        alt="visible-password" />
                )}
            </div>
        
            <div className="form-element">
                <button className="login-btn-container">
                    <img src={loginIcon} alt="login-btn-icon" />
                </button>
            </div>
        </form>
        <div className="signup-element">
            Üyeliğin var mı?
        </div>
        <button onClick={() => setVisibleLogin(true)} className="btn btn-primary">
            Giriş Yap
        </button>
    </>
}
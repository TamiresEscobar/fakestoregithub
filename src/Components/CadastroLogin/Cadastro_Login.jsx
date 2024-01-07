import React, { useEffect, useState } from "react";
import Header from "../../Header/Navbar";
import "./styles.css";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { MdDvr } from "react-icons/md";
import { BsEyeSlash } from "react-icons/bs";
import { LiaEyeSolid } from "react-icons/lia";
import Alert from "@mui/material/Alert";

const Cadastro_Login = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [userCpf, setUserCpf] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [visiblePassword, setVisiblePassword] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  const [mostrarAlert, setMostrarAlert] = useState(false);

  const [visiblePasswordConfirm, setVisiblePasswordConfirm] = useState(false);
  const [hidePasswordConfirm, setHidenPasswordConfirm] = useState(false);

  // const form_password = document.querySelector("#input__form__password");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleCpf = (e) => {
    const value = e.target.value;
    const maskValue = value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
    setUserCpf(maskValue);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailConfirm = (e) => {
    setEmailConfirm(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  useEffect(() => {
    const get_fristName = document.querySelector("#input__form__firstName");
    if (firstName.length >= 3) {
      get_fristName.style.background = "#BDECB6";
      get_fristName.style.transition = "all 3.s";
    } else if (firstName.length > 0) {
      get_fristName.style.background = "#ff7f7f";
      get_fristName.style.transition = "all 3.s";
    } else {
      get_fristName.style.background = "transparent";
      get_fristName.style.transition = "all 3.s";
    }
  }, [firstName]);

  useEffect(() => {
    const get_lastName = document.querySelector("#input__form__lastName");
    if (lastName.length >= 3) {
      get_lastName.style.background = "#BDECB6";
      get_lastName.style.transition = "all 3.s";
    } else if (lastName.length > 0) {
      get_lastName.style.background = "#ff7f7f";
      get_lastName.style.transition = "all 3.s";
    } else {
      get_lastName.style.background = "transparent";
      get_lastName.style.transition = "all 2.s";
    }
  }, [lastName]);

  useEffect(() => {
    const get_cpf = document.querySelector(".input__form__cpf");
    if (userCpf.length === 14) {
      get_cpf.style.background = "#BDECB6";
      get_cpf.style.transition = "all 3.s";
    } else if (userCpf.length > 0) {
      get_cpf.style.background = "#ff7f7f";
      get_cpf.style.transition = "all 3.s";
    } else {
      get_cpf.style.background = "transparent";
      get_cpf.style.transition = "all 2.s";
    }
  }, [userCpf]);

  useEffect(() => {
    const get_email = document.querySelector("#input__form__email");
    const get_alert = document.querySelector(".form__alert");
    if (get_alert) {
      get_email.style.background = "#ff7f7f";
      get_email.style.transition = "all 3.s";
    } else if (email.length <= 0) {
      get_email.style.background = "transparent";
      get_email.style.transition = "all 3.s";
    } else {
      get_email.style.background = "#BDECB6";
      get_email.style.transition = "all 3.s";
    }
  }, [email]);

  useEffect(() => {
    const get_emailConfirm = document.querySelector(
      "#input__form__emailConfirm"
    );

    if (emailConfirm !== email) {
      get_emailConfirm.style.background = "#ff7f7f";
      get_emailConfirm.style.transition = "all 3.s";
    } else {
      get_emailConfirm.style.background = "#BDECB6";
      get_emailConfirm.style.transition = "all 3.s";
    }

    if (emailConfirm.length <= 0) {
      get_emailConfirm.style.background = "transparent";
      get_emailConfirm.style.transition = "all 3.s";
    }
    //  eslint-disable-next-line
  }, [emailConfirm]);

  /* mostrar ou ocultar senha e validar senha 
  regra do regex: 
  . pelo menos 1 numero
  . pelo menos 1 caratere
  . pelo menos 1 caractere especial
  . minimo de 6 digitos 
  */

  useEffect(() => {
    let regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{6,20}$/;
    const form_password = document.querySelector("#input__form__password");

    if (password.length <= 0 && !regex.test(password)) {
      setMostrarAlert(false);
      setVisiblePassword(false);
      setHidePassword(false);

      form_password.style.background = "transparent";
      form_password.style.transition = "all 3.s";
    } else if (password.length > 0 && !regex.test(password)) {
      setMostrarAlert(true);
      setVisiblePassword(true);
      setHidePassword(false);

      form_password.style.background = "#ff7f7f";
      form_password.style.transition = "all 3.s";
    } else if (password.length > 0 && regex.test(password)) {
      setMostrarAlert(false);
      setVisiblePassword(true);
      setHidePassword(false);

      form_password.style.background = "#BDECB6";
      form_password.style.transition = "all 3.s";
    }
    // eslint-disable-next-line
  }, [password]);

  const clickShowPassword = () => {
    const form_password = document.querySelector("#input__form__password");

    if (password.length > 0) {
      form_password.type = "text";
      setVisiblePassword(false);
      setHidePassword(true);
    }
  };
  const clickHidePassword = () => {
    const form_password = document.querySelector("#input__form__password");

    if (password.length > 0) {
      form_password.type = "password";
      setVisiblePassword(true);
      setHidePassword(false);
    }
  };

  // confirmar senha
  useEffect(() => {
    const form_passwordConfirm = document.querySelector(
      "#input__form__passwordConfirm"
    );
    const form_password = document.querySelector(
      "#input__form__password"
    ).value;

    if (passwordConfirm.length <= 0) {
      setHidenPasswordConfirm(false);
      setVisiblePasswordConfirm(false);
      form_passwordConfirm.style.background = "transparent";
      form_passwordConfirm.style.transition = "all 3.s";
    } else if (
      passwordConfirm.length > 0 &&
      passwordConfirm !== form_password
    ) {
      setHidenPasswordConfirm(false);
      setVisiblePasswordConfirm(true);

      form_passwordConfirm.style.background = "#ff7f7f";
      form_passwordConfirm.style.transition = "all 3.s";
    } else if (
      passwordConfirm.length > 0 &&
      passwordConfirm === form_password
    ) {
      setHidenPasswordConfirm(false);
      setVisiblePasswordConfirm(true);

      form_passwordConfirm.style.background = "#BDECB6";
      form_passwordConfirm.style.transition = "all 3.s";
    }
  }, [passwordConfirm]);

  const clickShowPasswordConfirm = () => {
    const form_passwordConfirm = document.querySelector(
      "#input__form__passwordConfirm"
    );

    if (passwordConfirm.length > 0) {
      form_passwordConfirm.type = "text";
      setVisiblePasswordConfirm(false);
      setHidenPasswordConfirm(true);
    }
  };
  const clickHidePasswordConfirm = () => {
    const form_passwordConfirm = document.querySelector(
      "#input__form__passwordConfirm"
    );

    if (passwordConfirm.length > 0) {
      form_passwordConfirm.type = "password";
      setVisiblePasswordConfirm(true);
      setHidenPasswordConfirm(false);
    }
  };

  // function mostrar mais texto
  const [showTextResum, setShowTextResum] = useState(false);
  const handleTextResum = () => {
    showTextResum === false ? setShowTextResum(true) : setShowTextResum(false);
  };
  useEffect(() => {
    const btnVermais = document.querySelector(".btn_vermais_text");
    const pontinhos = document.querySelector(".text_pontinhos");

    if (showTextResum === true) {
      btnVermais.innerHTML = "ver menos";
      pontinhos.style.display = "none";
    } else {
      btnVermais.innerHTML = "ver mais";
      pontinhos.style.display = "inline";
    }
  }, [showTextResum]);

  return (
    <div className="page__register">
      <div>
        <Header />
      </div>
      <div className="container__return_homePage">
        <Link to={"/"} className="content_return_homePage">
          <GoArrowLeft size={24} /> Voltar para página principal
        </Link>
      </div>

      <div className="container__cadastroUser">
        <form action="">
          <div className="blocks">
            <div className="bloco_a">
              <div className="testeback">
                <div className="text__blockA__register">
                  <span>Lorem ipson</span>
                  <span>
                    Ganhe recompensas Em linguística, a noção de texto é ampla e
                    ainda aberta a uma definição mais precisa. Grosso modo, pode
                    ser entendido como manifestação linguística das ideias de um
                  </span>
                  <span className="text_pontinhos">...</span>
                  {showTextResum && (
                    <span className="text_resumo">
                      <br />
                      autor, que serão interpretadas pelo leitor de acordo com
                      seus conhecimentos linguísticos e culturais. Seu tamanho é
                      variável
                    </span>
                  )}

                  <button
                    type="button"
                    className="btn_vermais_text"
                    onClick={handleTextResum}
                  >
                    ver mais
                  </button>
                </div>
              </div>
            </div>

            <div className="bloco_b">
              <div className="testeback_b">
                <div className="title__form_register_user">
                  <span>
                    <MdDvr size={34} />
                    Cadastrar novo usuário
                  </span>
                </div>
                <table className="content_tatble_register_user">
                  <tr>
                    <label htmlFor="">Nome</label>
                    <td>
                      <input
                        type="text"
                        id="input__form__firstName"
                        name="input__form__firstName"
                        onChange={handleFirstName}
                        placeholder="Seu nome"
                      />
                    </td>
                  </tr>

                  <tr>
                    <label htmlFor="">Sobrenome</label>
                    <td>
                      <input
                        type="text"
                        id="input__form__lastName"
                        name="input__form__lastName"
                        onChange={handleLastName}
                        placeholder="Seu Sobrenome"
                      />
                    </td>
                  </tr>

                  <tr>
                    <label htmlFor="">CPF</label>
                    <td>
                      <input
                        className="input__form__cpf"
                        onChange={handleCpf}
                        maxLength={14}
                        name="pegarCpf"
                        value={userCpf}
                        placeholder="999.999.999.99"
                      />
                    </td>
                  </tr>

                  <tr>
                    <label htmlFor="">Email</label>
                    <td>
                      <input
                        type="email"
                        id="input__form__email"
                        name="input__form__email"
                        placeholder="example@email.com"
                        onChange={handleEmail}
                        value={email}
                      />

                      {email.length > 0 && !email.includes("@") && (
                        <Alert severity="info" className="form__alert">
                          {`Incluir @ em`} {email}
                        </Alert>
                      )}
                      {email.includes("@") && !email.includes(".") && (
                        <Alert severity="info" className="form__alert">
                          {`Incluir servidor em`} {email}
                        </Alert>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <label htmlFor="">Confirmação de email</label>
                    <td>
                      <input
                        type="email"
                        id="input__form__emailConfirm"
                        name="input__form__emailConfirm"
                        placeholder="Repita seu email"
                        onChange={handleEmailConfirm}
                        value={emailConfirm}
                      />
                      {emailConfirm.length > 0 && email !== emailConfirm && (
                        <Alert
                          severity="info"
                          className="form__alert__confirmEmail"
                        >
                          Verifique se o seu{" "}
                          <strong>{` ${emailConfirm} `}</strong>é igual{" "}
                          <strong>{email}</strong>
                        </Alert>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <label htmlFor="">Senha</label>
                    <td>
                      <input
                        type="password"
                        id="input__form__password"
                        name="input__form__password"
                        placeholder="Cadastrar senha"
                        onChange={handlePassword}
                      />
                      {visiblePassword && (
                        <BsEyeSlash
                          className="form__icon_eyes_password-invisible"
                          onClick={clickShowPassword}
                          size={20}
                        />
                      )}
                      {hidePassword && (
                        <LiaEyeSolid
                          className="form__icon_eyes_password-visible"
                          onClick={clickHidePassword}
                          size={20}
                        />
                      )}
                      {mostrarAlert && (
                        <Alert
                          severity="info"
                          className="form__alert__password"
                        >
                          <p>Sua senha precisa de ao menos:</p>
                          <span>
                            ° 1 caractere especial <br />° 6 dígitos
                          </span>
                        </Alert>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <label htmlFor="">Confirmação de Senha</label>
                    <td>
                      <input
                        type="password"
                        id="input__form__passwordConfirm"
                        name="input__form__passwordConfirm"
                        placeholder="Repetir senha"
                        onChange={handlePasswordConfirm}
                      />
                      {visiblePasswordConfirm && (
                        <BsEyeSlash
                          className="form__icon_eyes_password-invisible"
                          onClick={clickShowPasswordConfirm}
                          size={20}
                        />
                      )}
                      {hidePasswordConfirm && (
                        <LiaEyeSolid
                          className="form__icon_eyes_password-visible"
                          onClick={clickHidePasswordConfirm}
                          size={20}
                        />
                      )}
                      {passwordConfirm.length > 0 &&
                      password !== passwordConfirm ? (
                        <Alert
                          severity="info"
                          className="form__alert__confirmEmail"
                        >
                          <strong>
                            {` ${lastName} `}Verifique a senha é igual
                          </strong>
                        </Alert>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                </table>
                <div className="container__btns_form">
                  <button className="btnregister">Registrar usuário</button>
                  <Link to={"/login"}>
                    <button className="btnregister">Acessar conta</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Cadastro_Login;

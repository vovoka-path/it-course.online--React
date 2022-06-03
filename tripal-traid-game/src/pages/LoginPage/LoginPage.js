import { useState, useRef } from "react";

import cn from "classnames";

import s from "./LoginPage.module.scss";

import logo from "./assets/logo.png";
import { ReactComponent as Pen } from "./assets/icon-pen.svg";
// import { ReactComponent as Pencil } from "./assets/pencil.svg";

function LoginPage() {
  const loginRef = useRef(null);
  const registerRef = useRef(null);

  const [active, setActive] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  })

  const handleToggleClick = () => {
    setActive((prevState) => !prevState);
  };

  const handleOnChange = (event) => {
    setForm(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value,
      })
    );
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (registerRef.current === event.target) {
      handleToggleClick();
    } else if (loginRef.current === event.target) {
      setForm(prevState => ({
        ...prevState,
        repeatPassword: "",
      })
    );
    }

    console.log("form=", form);
  }

  return (
    <>
      <section className={s.section}>
        <div className={s.headerLogo}>
          <img src={logo} alt="Logo" />
        </div>

        <div 
          className={cn(s.container, { [s.active]: active })}
        >
          <div className={s.card}></div>

          <div className={s.card}>
            <h1 className={s.title}>Login</h1>
            <form 
              ref={loginRef}
              onSubmit={handleFormSubmit}
            >
              <div className={s.inputContainer}>
                <input type="email" name="email" id="#email" required="required" value={form.email} onChange={handleOnChange}/>
                <label htmlFor="#email">Email</label>
                <div className={s.bar}></div>
              </div>
              <div className={s.inputContainer}>
                <input type="password" name="password" id="#password" required="required" value={form.password} onChange={handleOnChange}/>
                <label htmlFor="#password">Password</label>
                <div className={s.bar}></div>
              </div>
              <div className={s.buttonContainer}>
                <button>
                  <span>Go</span>
                </button>
              </div>
            </form>
          </div>

          <div className={cn(s.card, s.alt)}>

            <div
              className={cn(s.toggle, { [s.active]: active })}
              onClick={handleToggleClick}
            >
              <Pen />
            </div>

            <h1 className={s.title}>Register
              <div 
                className={cn(s.close, { [s.active]: active })}
                onClick={handleToggleClick}
              >
              </div>
            </h1>

            <form
              ref={registerRef}
              onSubmit={handleFormSubmit}
            >
              <div className={s.inputContainer}>
                <input type="email" name="email" id="#signup-email" required="required" value={form.email} onChange={handleOnChange}/>
                <label htmlFor="#signup-email">Email</label>
                <div className={s.bar}></div>
              </div>
              <div className={s.inputContainer}>
                <input type="password" name="password" id="#signup-password" required="required" value={form.password} onChange={handleOnChange}/>
                <label htmlFor="#signup-password">Password</label>
                <div className={s.bar}></div>
              </div>
              <div className={s.inputContainer}>
                <input type="password" name="repeatPassword" id="#signup-repeat-password" required="required" value={form.repeatPassword} onChange={handleOnChange}/>
                <label htmlFor="#signup-repeat-password">Repeat Password</label>
                <div className={s.bar}></div>
              </div>
              <div className={s.buttonContainer}>
                <button>
                  <span>Register</span>
                </button>
              </div>
            </form>

          </div>

        </div>
      </section>
    </>
  );
}

export default LoginPage;

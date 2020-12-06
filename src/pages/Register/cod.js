<div className={style.blockCover}>
  <div className={style.firstblock}>
    <img className={style.imgrigister} src={selectsvg} />
    <img className={style.fiolet} src={fioletsvg} />
    <h2 className={style.titleselect}>Finance App</h2>
  </div>
  <div className={style.endblock}>
    <img className={style.sircle} src={sirclesvg} />
    {/* <h1 className={styles.header}>Register page</h1>  */}
    <form onSubmit={handleSubmit} className={style.form}>
      <img className={style.imgCesh} src={Ceshsvg} />
      <label className={style.list}>
        <img src={masage} />
        <input
          className="input"
          className={style.input}
          type="email"
          name="email"
          value={email}
          placeholder="E-mail"
          autoFocus
          onChange={handleChange}
        />
      </label>
      <label className={style.list}>
        <img src={regist} />
        <input
          className={style.input}
          type="password"
          name="password"
          value={password}
          placeholder="Пароль"
          onChange={handleChange}
        />
      </label>
      <label className={style.list}>
        <img src={regist} />
        <input
          className={style.input}
          type="password"
          name="repassword"
          value={rePassword}
          placeholder="Подтвердить пароль"
          onChange={handleChange}
        />
      </label>
      {/* {password.length >= 4 && <span>{passwordValid}</span>} */}

      <label className={style.list}>
        <img src={profil} />
        <input
          className={style.input}
          type="name"
          name="username"
          value={username}
          placeholder="Ваше имя"
          onChange={handleChange}
        />
      </label>
      <div class={style.buttonBlok}>
        <button className={style.button} type="submit">
          РЕГИСТРАЦИЯ
        </button>
        <Link to={routes.LOGIN.path}>
          {' '}
          <button className={style.button}>ВХОД</button>
        </Link>
      </div>
    </form>
    {/* </div> */}
  </div>
</div>;

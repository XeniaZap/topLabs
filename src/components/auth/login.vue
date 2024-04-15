<script>

import AuthLayout from "@/layout/AuthLayout.vue";

export default {
  components: {AuthLayout},

  data() {
    return {
      user: {
        email: '',
        password: '',
        remember: false,
      },
      showPassword: false,
    };
  },
  methods: {
    login() {
      // Handle the login logic here
      console.log('Logging in with:', this.user);
      // You would usually want to make an API call here
    },

    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
<template>
  <auth-layout>
      <div class="left-side-container">
        <div class="container-d">

          <div class="picture">
            <img src="../../pictures/Logo.svg">
          </div>
          <h1 class="entrance">Войти в аккаунт</h1>
        </div>


        <div class="authorization">
          <form class="login-form" @submit.prevent="login">
            <input class="e-mail login-form-input" v-model="user.email" type="email" placeholder="Введите ваш e-mail"
                   required>
            <div class="password-container">
              <input class="login-form-input password-input"
                     :type="showPassword ? 'text' : 'password'"
                     v-model="user.password"
                     placeholder=" Введите пароль"
                     required>
              <button type="button" class="toggle-password" @click="toggleShowPassword">
                <img v-if="showPassword" src="../../pictures/Hide.svg" alt="Hide">
                <img v-else src="../../pictures/Eye.svg" alt="Show">
              </button>
            </div>
            <div class="checkbox">
              <label>
                <input class="form-check-input" type="checkbox" v-model="user.remember"/> Запомнить
              </label>
            </div>
            <button class="button" type="submit">Войти</button>
            <div class="container-footer">
              <a href="#" class="not-account">Нет аккаунта?</a>
              <a href="#" class="pass">Забыли пароль?</a>
            </div>
          </form>

        </div>
      </div>
      <div class="left-side-footer">
        © 2023 Toplabs. Все права защищены.
      </div>
  </auth-layout>
</template>


<style scoped>
.left-side-container {
  max-width: 500px;
  width: 100%;
}

.login-form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;

}

.authorization {
  margin-top: 32px;
}

.login-form-input {
  width: 100%;
  padding: 16px;
  border-radius: 10px;
  height: 52px;
  border: 1px solid #E0E3EA;
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px;
  letter-spacing: unset;
  color: rgba(7, 7, 7, 0.85);
}

.form-check-input {
 gap: 16px;
}

.pass {
 gap:16px;
}

.password-container {
  margin-top: 16px;
}

.password-input {
  padding-right: 40px;
}

.button {
  color: #FFF;
  background-color: #3861CB;
  height: 52px;
  padding: 0.5px;
  border-radius: 10px;
  border: none;
  margin-top: 24px;
  width: 100%;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
}

.left-side-footer {
  font-size: 15px;
  color: #94A3B8;
  position: absolute;
  bottom: 30px;
  left: 0;
  font-family: Nunito;
  font-style: normal;
  font-weight: 300;
}

.form-check-input {
  margin-top: 16px;
  left: 10px;
  color: #94A3B8;
}


.container-footer {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 25px;
  color: #3861CB;
  font-family: Nunito;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
}


.password-container {
  position: relative;
  margin-top: 16px;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 65%;
  transform: translateY(-75%);
  background: none;
  border: none;
  cursor: pointer;
}

input::placeholder {
  color: rgba(148, 163, 184, 0.85);
  font-style: normal;
  font-weight: 300;
}

.entrance {
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 450;
}


.picture {
  max-width: 500px;
  margin: 70px 0 100px;
}

.checkbox {
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  display: flex;
  margin-left: 4px;
  align-items: center;
  color: rgba(84, 84, 101, 0.65);
  margin-top: 16px;
}


.container-d {
  display: flex;
  flex-direction: column;
  align-items: start;
}


@media screen and (max-width: 1044px) {
  .pic {
    width: 500px;
  }
}

@media screen and (max-width: 900px) {
  .pic {
    width: 400px;
  }
}

@media screen and (max-width: 767px) {
  .container {
    padding-right: 16px;
  }

  .Right-side {
    display: none;
  }
}
</style>


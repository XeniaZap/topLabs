<script setup>
function myFunction() {
  window.location.href='https://mail.google.com'
};

function myFunctionTwo() {
  window.location.href='https://passport.yandex.ru'
}
import SharedInput from "@/components/common/ui/SharedInput.vue";
import AuthLayout from "@/layout/AuthLayout.vue";
import Input from "@/components/common/ui/SharedInput.vue";
const MainComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }
};


</script>

<template>
  <AuthLayout>
    <div class="container-registration">

      <img class="logotip" alt="logo" src="../../pictures/Logo.svg"/>
      <div class="head">
        <h1 class="header-text">Зарегистрируйтесь в 2 клика и получите бесплатный доступ </h1>
      <h2 class="header-text2">Можете зарегистрироваться удобным для вас способом</h2>
      </div>
      <div class="btn-container">
          <button v-on:click="myFunction()" class="social-media-btn" id="btn1">
         <span>Продолжить с</span>
          <img class="btn1" alt="google_icon" src="../../pictures/Google.svg"/>
        </button>

        <button v-on:click="myFunctionTwo()" class="social-media-btn" id="btn2">
         <span>Продолжить с</span>
          <img class="btn1" alt="yandex" src="../../pictures/Yandex_icon.svg" />
        </button>
      </div>
      <div class="container-email">
        <div class="line"></div>
      <span class="email-form"> или E-mail</span>
        <div class="line"></div>
      </div>
      <SharedInput  class="input-form" placeholder="Введите Ваш E-mail"
                    onChange={handleChange}
      />
      <button class="further" type="submit"> Далее</button>

      <div class="account">
        <a class="have-account"> У вас уже есть аккаунт?</a>
        <p class="inscription">Создавая аккаунт, я принимаю условия
          <a class="offerta" href="https://pyeoptics.com/pages/oferta/">
          договора оферты
        </a>
          и
          <a  class="offerta" href="https://pyeoptics.com/pages/privacy-policy/">
            политики конфеденциальности
          </a>.
        </p>
      </div>


      <div class="left-side-footer">
        © 2023 Toplabs. Все права защищены.
      </div>
    </div>
  </AuthLayout>
</template>

<style scoped>

.container-email {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 12px;
  gap: 16px;
}

.line {
  width:188px;
  border-bottom: 1px solid  #E0E3EA;

}

.container-registration {
  display: flex;
  margin-top: 80px;
  height: 100%;
  flex-direction: column;
  position: relative;
  max-width: 508px;
  width: 100%;
}

.logotip {
margin-right: auto;
}
.header-text {
  margin-top:80px;
}

.header-text2 {
  margin-top:32px;

}
.further {
  margin-top: 16px;
  text-align: center;
  align-items: center;
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  background-color: #3861CB;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 8px;
  font-family: Nunito,sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
}

.left-side-footer {
  font-size: 15px;
  color: #94A3B8;
  position: absolute;
  bottom: 30px;
  left: 0;
  font-family: Nunito,sans-serif;
  font-style: normal;
  font-weight: 300;

}

.header-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 68px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 26px;
}

.header-text2 {
  height: 19px;
  font-family: Nunito,sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 15px;
  color: rgba(84, 84, 101, 0.65);
}

.offerta {
  font-family: Nunito,sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.8px;
  color:#3861CB;
}
.have-account {
  margin-top:8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Nunito,sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.8px;
  color:#3861CB;
  cursor: pointer;
  text-decoration: underline;
}

.btn-container {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:8px;
  color: rgba(84, 84, 101, 0.65);
  border-radius: 10px;
  background-color: white;
}

.btn-container span {
  margin-right: 10px;
  font-family: Nunito,sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
}

.email-form{
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Nunito,sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #545465;
  line-height: 18.2px;
}

.input-form {
  margin-top: 16px;
  font-family: Nunito,sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 19.5px;
  color: #545465;
}

.left-side-footer {
  font-size: 15px;
  color: #94A3B8;
  position: absolute;
  bottom: 30px;
  left: 0;
  font-family: Nunito,sans-serif;
  font-style: normal;
  font-weight: 300;
}
.inscription {
  margin-top: 16px;
  color: #94A3B8;
  font-family: Nunito,sans-serif;
  font-style: normal;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
}

.social-media-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: 1px solid #E0E3EA;
  padding: 8px 0;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
}

input::placeholder {
  color:  #94A3B8;
  font-style: normal;
  font-weight: 300;
}
</style>
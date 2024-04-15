<script setup>
import SharedInput from "../../../TopLabsProject/src/SharedInput.vue";
import AuthLayout from "@/layout/AuthLayout.vue";
</script>

<template>
  <AuthLayout>
    <div class="container">
      <div class="left-side-container">
        <img src="../../pictures/Logo.svg" class="logo" alt="logotip"/>
        <div class="form">
          <h1>Создать пароль</h1>
          <SharedInput />
          <h2>Введите не менее 8 символов, включая символы и буквы</h2>
          <SharedInput />
          <button class="further" type="submit"> Создать пароль</button>
          <div class="inscription">
          <h3 class="inscription">Создавая аккаунт, я принимаю условия договора оферты и политики конфеденциальности.</h3>
        </div>
        </div>
        <div class="left-side-footer">
          © 2023 Toplabs. Все права защищены.
        </div>
      </div>
    </div>
  </AuthLayout>
</template>

<style scoped>
.left-side-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: space-between;
}

.further {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 25px;
  color: #3861CB;
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
  font-family: Nunito;
  font-style: normal;
  font-weight: 300;

}

</style>
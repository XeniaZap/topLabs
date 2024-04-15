<script setup>


</script>

<template>

  <div class="container">
    <div class="Left-side">
      <slot />
    </div>
    <div class="Right-side">
      <img class="pic" src="../pictures/IPAD.png" alt="fg"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-left: 16px;
  display: flex;
  gap: 16px;
  height: 100%;
}

.Left-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: space-between;

}

.Right-side {
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3861CB;
  width: 100%;
}

.pic {
  width: 800px;
  height: 460px;
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
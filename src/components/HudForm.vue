<template>
  <div class="HudForm">
    <button>Valider</button>
    <button>Fuir</button>
  </div>
</template>

<style scoped>
.HudForm {
  padding: 0.2rem;
  background: #34372F;
  color: #6A726C;
  text-transform: uppercase;
}

.HudForm__body {
  padding: 1.25rem 1.1rem;
  height: 100%;
  border: 5px solid #9e8bb7;
  border-radius: 3px;
  background: white;
  box-shadow: 0 0 3px inset;
}

.HudForm button {
  position: relative;
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.5rem 1.2rem;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 #e9e9e9;
}

button[data-state="highlighted"]:before {
  position: absolute;
  left: 0;
  content: '';
  display: inline-block;
  height: 0;
  width: 0;
  border-top : 6px solid transparent;
  border-bottom : 6px solid transparent;
  border-left : 10px solid #595851;
}
</style>
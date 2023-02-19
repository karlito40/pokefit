export default {
  mounted(el, binding) {
    el._onClickAway = OnClickAway(el, binding.value);
    window.addEventListener("pointerdown", el._onClickAway);
  },
  unmounted(el) {
    window.removeEventListener("pointerdown", el._onClickAway);
  },
};

function OnClickAway($el, callback) {
  return (e) => {
    if (!$el.contains(e.target)) {
      console.log("click away");
      callback();
    }
  };
}

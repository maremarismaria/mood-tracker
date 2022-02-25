<script setup lang="ts">
const emit = defineEmits<{
  (e: "close"): void;
}>();

function close() {
  emit("close");
}
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div class="modal-header" id="modalTitle">
          <slot name="header">Header</slot>
          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            &#10005;
          </button>
        </div>

        <section class="modal-body" id="modalDescription">
          <slot name="body">Body</slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--vt-c-black-transparent);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: var(--vt-c-white);
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: var(--small);
}

.modal-header,
.modal-body {
  position: relative;
  padding: 1em;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--vt-c-black-soft);
}

.btn-close {
  border: none;
  font-size: 1.3em;
  cursor: pointer;
  background: transparent;
}

.modal-header > * {
  font-weight: bold;
  color: var(--vt-c-white-soft);
}
</style>

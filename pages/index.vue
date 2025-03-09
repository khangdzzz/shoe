<script setup>
import { Wheel } from 'spin-wheel';
import { loadFonts, loadImages } from '~/utils/spin/index';
import { props } from '~/utils/spin/props';
definePageMeta({
  layout: false
});
const route = useRoute();

let modifier = 0;
const result = ref('');
const wheel = ref(null);
const idDisableBtn = ref(false);
const isShowFireworks = ref(false);
const isShowroomMessage = ref(false);
const isShowOpenForceCloseTap = ref(false);
const items = ref([...props.items].reverse());
const dataUser = ref(null);

const initProject = async () => {
  await loadFonts(props.itemLabelFont);

  wheel.value = new Wheel(document.querySelector('.wheel-wrapper'));

  const images = [];

  images.push(initImage(props, 'image'));
  images.push(initImage(props, 'overlayImage'));
  for (const item of props.items) {
    images.push(initImage(item, 'image'));
  }

  await loadImages(images);

  nextTick(() => {
    document.querySelector('.wheel-wrapper').style.visibility = 'visible';

    wheel.value.init({
      ...props,
      isInteractive: false,
      rotation: wheel.value.rotation,
      onCurrentIndexChange: ({ currentIndex }) => {
        result.value = props.items[currentIndex].label;
      },
      onRest: () => {
        isShowFireworks.value = true;
        isShowroomMessage.value = true;
        updateInfoUser();
        sendMessage(result.value);

        setTimeout(() => {
          isShowroomMessage.value = false;
          isShowFireworks.value = false;
        }, 3000);
      },
      onSpin: () => {
        idDisableBtn.value = true;
      }
    });
  });
};

const spin = (winningLabel = null) => {
  const { duration, winningItemRotaion } = calcSpinToValues(winningLabel);
  wheel.value.spinTo(winningItemRotaion, duration);
};

const calcSpinToValues = (winningLabel = null) => {
  const duration = 3000;

  let winningItemRotaion;
  if (winningLabel) {
    const winningIndex = [...items.value].findIndex((item) => item.label === winningLabel);
    if (winningIndex === -1) {
      console.warn('Hệ thống vòng quay có lỗi , bạn vui lòng liên hệ với người quản trị Running Store');
      return;
    }

    const sliceAngle = 360 / items.value.length;
    const baseRotation = winningIndex * sliceAngle;
    const randomSpin = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    winningItemRotaion = baseRotation + sliceAngle / 2 + 360 * 5 + randomSpin * 360;
  } else {
    winningItemRotaion = getRandomInt(360, 360 * 3) + modifier;
  }

  return { duration, winningItemRotaion };
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const initImage = (obj, pName) => {
  if (!obj[pName]) return null;
  const i = new Image();
  i.src = obj[pName];
  obj[pName] = i;
  return i;
};

onMounted(async () => {
  const name = route.query.name;
  if (!name) isShowOpenForceCloseTap.value = true;
  await findUserByName('spins', name);
  await initProject();
});

const updateInfoUser = async (fileName = 'spins') => {
  try {
    console.log('update');
    await $fetch('/api/file/update-by-id', {
      method: 'POST',
      params: { fileName, id: dataUser.value.id }
    });
  } catch (error) {
    console.error('Lỗi khi gọi API:', error);
  }
};

const sendMessage = async (text) => {
  try {
    await $fetch('/api/telegram/send-message', {
      method: 'POST',
      body: { message: `🎉 Chúc mừng ${dataUser.value.name}! \n Bạn đã quay trúng thưởng ${text} 🏆✨` }
    });
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

const findUserByName = async (fileName, name) => {
  try {
    const res = await $fetch('/api/file/find-by-name', {
      method: 'POST',
      params: { fileName, name }
    });

    if (!res) {
      isShowOpenForceCloseTap.value = true;
      return;
    } else dataUser.value = res;
  } catch (error) {
    console.error('Lỗi khi gọi API:', error);
  }
};
</script>

<template>
  <div class="gui-wrapper">
    <p class="title">Chào mừng bạn đến với vòng quay may mắn của RUNNING STORE!</p>
  </div>
  <SpinFireworks :is-show="isShowFireworks"></SpinFireworks>
  <SpinToast
    :message="'🎉 Bạn đã quay trúng thưởng:' + result + 'VND 🏆✨'"
    :is-visible="isShowroomMessage"
  ></SpinToast>

  <div
    class="wheel-wrapper"
    ref="wheelContainer"
  >
    <div
      class="btn-spin"
      :class="{ disabled: idDisableBtn }"
      @click="spin(dataUser.amount)"
    >
      <span>{{ result || 'QUAY' }}</span>
    </div>
  </div>
  <SpinConfirmName :is-open="isShowOpenForceCloseTap"></SpinConfirmName>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pragati+Narrow&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Lucida Grande', sans-serif;
  font-size: 15px;
  -webkit-tap-highlight-color: transparent;
  user-select: none; /* Prevent selecting ui text when dragging */
}

html,
body {
  height: 100%;
}

body {
  /* Prevent pull-down-to-refresh gesture */
  overscroll-behavior-y: contain;

  /* Prevent iOS rubber-band effect */
  position: fixed;
  width: 100%;

  /* Prevent browser from handling touch events */
  touch-action: none;

  display: flex;
  flex-direction: column;
  justify-items: stretch;
  align-items: stretch;
}

.wheel-wrapper {
  overflow: hidden;
  height: calc(100vh - 125px);
  width: 100%;
  position: relative;
}

.btn-spin {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 28px 15px;
  border-radius: 50%;
}

.disabled {
  pointer-events: none;
  opacity: 0.5;
}

.gui-wrapper {
  padding: 10px;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.gui-wrapper > div {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}

select {
  padding: 2px;
}

label {
  margin-right: 5px;
}

button {
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 10px;
  max-width: 100px;
}
</style>

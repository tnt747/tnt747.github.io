<template>
  <div class="h-screen flex justify-center items-center">
    <div class="background gradient">
      <ul class="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="container mx-auto max-w-screen-xl h-4/6 relative flex">
      <div
        :class="[
          'bg-white w-3/5 my-4 rounded rounded-tr-none rounded-br-none',
          $style.innerCard,
        ]"
      ></div>
      <div
        :class="[
          'bg-white h-full w-2/5 rounded shadow-2xl relative',
          $style.profileCard,
        ]"
      >
        <div
          :class="['relative h-1/2 rounded', $style.profilePictureWrapper]"
        ></div>
        <div class="mt-10 text-center font-bold text-2xl">
          {{ title }}
        </div>
        <div class="text-center text-green-500">
          {{ subtitleTyping }}
        </div>
      </div>
      <div :class="['h-full w-2/5 rounded', $style.profileShadow]"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      const subtitles = [
        'برنامه‌نویس',
        'توسعه دهنده فرانت‌اند',
        'تیم‌لید',
        'چپترلید فرانت‌اند',
      ];
      return {
        title: 'علی اسماعیلی',
        subtitles,
        subtitleCounter: 1,
        subtitleTyping: subtitles[0],
      };
    },
    mounted() {
      this.typeCharacterByCharacter();
    },
    methods: {
      typeCharacterByCharacter() {
        const word = this.subtitleTyping;
        const nextWord = this.subtitles[this.subtitleCounter];
        for (let i = 0; i < word.length; i++) {
          setTimeout(() => {
            this.subtitleTyping = word.slice(0, word.length - 1 - i);
          }, i * 50);
        }
        for (let i = 0; i <= nextWord.length; i++) {
          setTimeout(() => {
            this.subtitleTyping = nextWord.slice(0, i);
          }, word.length * 50 + i * 50);
        }
        this.subtitleCounter =
          (this.subtitleCounter + 1) % this.subtitles.length;
        setTimeout(() => {
          this.typeCharacterByCharacter();
        }, word.length * 50 + nextWord.length * 50 + 4000);
      },
    },
  };
</script>
<style module lang="scss">
  .innerCard {
    height: calc(100% - 2rem);
  }
  .profileCard {
    position: relative;
    z-index: 2;
  }

  .profileShadow {
    z-index: 1;
    position: absolute;
    right: -15px;
    top: -15px;
    background: linear-gradient(
      135deg,
      rgba(120, 204, 109, 0.4) 0%,
      rgba(120, 204, 109, 0.01) 100%
    );
  }
  .profilePictureWrapper {
    overflow: hidden;
    background-image: url('/images/me.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 0.25rem;
    &::after {
      content: '';
      width: 100%;
      height: 70px;
      display: block;
      background-color: white;
      transform: rotate(-8deg);
      right: -10px;
      position: absolute;
      bottom: -70px;
    }
    &::before {
      content: '';
      width: 100%;
      height: 70px;
      display: block;
      background-color: white;
      transform: rotate(8deg);
      left: -10px;
      position: absolute;
      bottom: -70px;
    }
  }
</style>

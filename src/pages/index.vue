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
      <div :class="[' w-3/5 my-4 relative overflow-hidden', $style.innerCard]">
        <transition
          name="innerCardTransition"
          enter-active-class="animate__animated animate__fadeInRight"
          leave-active-class="animate__animated animate__fadeOutRight"
        >
          <div
            v-if="aboutmeTab"
            key="aboutme"
            class="bg-white rounded rounded-tr-none rounded-br-none h-full w-full absolute"
          >
            about me
          </div>
          <div
            v-else-if="myResumeTab"
            key="myresume"
            class="bg-white rounded rounded-tr-none rounded-br-none h-full w-full absolute"
          >
            my resume
          </div>
        </transition>
      </div>
      <div class="relative w-2/5">
        <div
          :class="['h-full w-full rounded z-10', $style.profileShadow]"
        ></div>

        <div
          :class="[
            'bg-white h-full rounded shadow-2xl relative z-20',
            $style.profileCard,
          ]"
        >
          <div
            :class="['relative h-1/2 rounded', $style.profilePictureWrapper]"
          ></div>
          <div class="mt-10 text-center font-bold text-2xl">
            {{ title }}
          </div>
          <div class="mt-3 text-center text-green-500" style="min-height: 24px">
            {{ subtitleTyping }}
          </div>
          <div class="mt-4 flex justify-center">
            <a
              v-for="item in socials"
              :key="item.network"
              :href="item.link"
              class="mx-4 hover:text-green-500"
            >
              <i :class="`fab fa-${item.network}`"></i>
            </a>
          </div>
          <div class="absolute bottom-0 right-0 w-full h-16">
            <div
              :class="[
                'flex h-full justify-center items-center',
                $style.profileFooterButtons,
              ]"
            >
              <div
                class="relative h-full flex-1 flex justify-center items-center"
              >
                <a
                  href=""
                  class="text-center text-green-500 hover:text-green-700"
                >
                  ارتباط داشته باشیم ؟
                </a>
              </div>
              <div
                class="relative h-full flex-1 flex justify-center items-center"
              >
                <a href="" class="text-center hover:text-green-500"> رزومه </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="top-menu ml-2 z-30 top-4 relative w-20">
        <a
          :class="[$style.menuBtn]"
          href=""
          class="bg-white w-full px-2 py-8 text-center inline-block rounded hover:text-green-500 relative h-20"
        >
          <span></span>
        </a>
        <ul
          :class="[
            'flex flex-col bg-white items-center rounded',
            $style.topMenuUl,
          ]"
        >
          <li class="px-2 py-4 text-center w-full relative">
            <a
              href=""
              class="hover:text-green-500"
              @click.prevent="tab = 'about-me'"
            >
              <i class="fa fa-user-tie"></i>
              <small class="whitespace-nowrap block">درباره من</small>
            </a>
          </li>
          <li class="px-2 py-4 text-center w-full relative">
            <a
              href=""
              class="hover:text-green-500"
              @click.prevent="tab = 'my-resume'"
            >
              <i class="fa fa-book"></i>
              <small class="whitespace-nowrap block">رزومه</small>
            </a>
          </li>
          <li class="px-2 py-4 text-center w-full relative">
            <a href="" class="hover:text-green-500">
              <i class="fa fa-book"></i>
              <small class="whitespace-nowrap block">کارهای من</small>
            </a>
          </li>
        </ul>
      </div>
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
        tab: 'about-me',
        title: 'علی اسماعیلی',
        subtitles,
        socials: [
          {
            network: 'instagram',
            link: 'https://www.instagram.com/a.esmaeili/',
          },
          {
            network: 'twitter',
            link: 'https://twitter.com/aliesmaeili747/',
          },
          {
            network: 'linkedin',
            link: 'https://www.linkedin.com/in/ali-esmaeili/',
          },
          {
            network: 'github',
            link: 'https://github.com/designy',
          },
        ],
        subtitleCounter: 1,
        subtitleTyping: subtitles[0],
      };
    },
    computed: {
      aboutmeTab() {
        return this.tab === 'about-me';
      },
      myResumeTab() {
        return this.tab === 'my-resume';
      },
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
  }

  .profileShadow {
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
  .profileFooterButtons {
    a:nth-child(1) {
      &::before {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 1px;
        height: 100%;
        background: radial-gradient(
          ellipse at top,
          #ddd 0%,
          rgba(255, 255, 255, 0) 70%
        );
      }
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 1px;
      background: radial-gradient(
        ellipse at center,
        #ddd 0%,
        rgba(255, 255, 255, 0) 70%
      );
    }
  }
  .topMenuUl {
    li {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: radial-gradient(
          ellipse at left,
          #ddd 0%,
          rgba(255, 255, 255, 0) 70%
        );
      }
    }
  }
  .menuBtn {
    span {
      margin-left: -13px;
      margin-top: -1px;
      position: absolute;
      left: 50%;
      top: 50%;
      display: block;
      width: 26px;
      height: 2px;
      background: #323232;
      transition: all 0.3s ease 0s;
      -moz-transition: all 0.3s ease 0s;
      -webkit-transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: auto;
        bottom: -7px;
        width: 60%;
        height: 100%;
        background: #323232;
        transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -webkit-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
      }
      &::before {
        content: '';
        position: absolute;
        right: 0;
        top: -7px;
        width: 80%;
        height: 100%;
        background: #323232;
        transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -webkit-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
      }
    }
    &:hover {
      span {
        background: rgb(16, 185, 129);
        &::after,
        &::before {
          background: rgb(16, 185, 129);
          width: 100%;
        }
      }
    }
  }
</style>

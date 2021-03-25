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
    <div
      class="container mx-auto max-w-screen-xl md:max-w-screen-lg h-4/6 relative flex"
    >
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
              <i class="fa fa-file-alt"></i>
              <small class="whitespace-nowrap block"> رزومه من </small>
            </a>
          </li>
          <li class="px-2 py-4 text-center w-full relative">
            <a
              href=""
              class="hover:text-green-500"
              @click.prevent="tab = 'my-works'"
            >
              <i class="fa fa-paint-brush"></i>
              <small class="whitespace-nowrap block">کارهای من</small>
            </a>
          </li>
          <li class="px-2 py-4 text-center w-full relative">
            <a
              href=""
              class="hover:text-green-500"
              @click.prevent="tab = 'contact'"
            >
              <i class="far fa-at"></i>
              <small class="whitespace-nowrap block">ارتباط با من</small>
            </a>
          </li>
        </ul>
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
                  class="text-center hover:text-green-500"
                  @click.prevent="tab = 'my-resume'"
                >
                  رزومه
                </a>
              </div>
              <div
                :class="[
                  'relative h-full flex-1 flex justify-center items-center',
                  $style.gutterGradiant,
                ]"
              >
                <a
                  href=""
                  class="text-center text-green-500 hover:text-green-700"
                  @click.prevent="tab = 'contact'"
                >
                  ارتباط داشته باشیم ؟
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :class="[' w-3/5 my-4 relative overflow-hidden', $style.innerCard]">
        <transition
          name="innerCardTransition"
          enter-active-class="animate__animated animate__fadeInRight"
          leave-active-class="animate__animated animate__fadeOutRight"
        >
          <div
            v-if="aboutmeTab"
            key="aboutme"
            class="bg-white rounded rounded-tr-none rounded-br-none h-full w-full absolute overflow-auto"
          >
            <div :class="['text-start p-8 pb-0', $style.title]">
              <span
                :class="[
                  'text-green-500 font-semibold inline-block mb-8 text-lg relative',
                  $style.firstWord,
                ]"
              >
                درباره
              </span>
              <span class="font-semibold text-lg"> من </span>
            </div>
            <div class="flex">
              <div :class="['w-1/2 text-justify p-8']">
                <p class="text-gray-600">
                  من علی اسماعیلی هستم. <br />
                  یک فرانت‌اند دولوپر از ایران.
                  <br />
                  در حال حاضر در شرکت یکتانت مشغول به کار هستم.
                </p>
              </div>
              <div :class="['w-1/2 p-8 relative', $style.gutterGradiant]">
                <ul>
                  <li
                    :class="[
                      'flex justify-between items-center py-2 relative',
                      $style.centerEllipsisGradiantGutter,
                    ]"
                  >
                    <small>
                      <strong
                        class="pr-2 pl-8 bg-green-500 rounded text-start text-white"
                      >
                        سن
                      </strong>
                    </small>
                    <span class="text-gray-600">سن فقط یه عدده:دی</span>
                  </li>
                  <li
                    :class="[
                      'flex justify-between items-center relative py-2 relative',
                      $style.centerEllipsisGradiantGutter,
                    ]"
                  >
                    <small>
                      <strong
                        class="pr-2 pl-8 bg-green-500 rounded text-start text-white"
                      >
                        محل اقامت
                      </strong>
                    </small>
                    <span class="text-gray-600">ایران</span>
                  </li>
                  <li
                    :class="[
                      'flex justify-between items-center relative py-2 relative',
                      $style.centerEllipsisGradiantGutter,
                    ]"
                  >
                    <small>
                      <strong
                        class="pr-2 pl-8 bg-green-500 rounded text-start text-white"
                      >
                        وضعیت اشتغال
                      </strong>
                    </small>
                    <span class="text-gray-600">مشغول به کار</span>
                  </li>
                  <li
                    :class="['flex justify-between items-center relative py-2']"
                  >
                    <small>
                      <strong
                        class="pr-2 pl-8 bg-green-500 rounded text-start text-white"
                      >
                        آدرس
                      </strong>
                    </small>
                    <span class="text-gray-600">تهران</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            v-else-if="myResumeTab"
            key="myresume"
            class="bg-white rounded rounded-tr-none rounded-br-none h-full w-full absolute overflow-auto"
          >
            <div :class="['text-start p-8 pb-0', $style.title]">
              <span
                :class="[
                  'text-green-500 font-semibold inline-block mb-8 text-lg relative',
                  $style.firstWord,
                ]"
              >
                رزومه
              </span>
              <span class="font-semibold text-lg"> کاری/شغلی </span>
            </div>
            <div
              :class="[
                'p-8 flex items-center justify-start relative',
                $style.centerEllipsisGradiantGutter,
              ]"
            >
              <a
                href="https://yektanet.com"
                class="flex flex-col justify-center items-center ml-3"
              >
                <img
                  src="/images/logo/yektanet.png"
                  class="rounded w-8"
                  alt="yektanet"
                />
                <span class="mt-2"> یکتانت </span>
                <small> yektanet.com </small>
              </a>
              <p>
                از سال ۹۵ وارد مجموعه یکتانت شدم و اولین کارهام رو مثل تقریباً
                همه روی پروژه‌ای انجام دادم که هیچ‌وقت به مرحله Production
                نرسید:دی. اون پروژه که اسمش
                <strong> چطور پرو </strong>
                بود یه پنل حرفه‌ای برای
                <a href="https://chetor.com" class="text-green-500 underline">
                  وبسایت چطور
                </a>
                بود.
                <br />
                بعد از اون همزمان کار روی پروژه‌های
                <a href="https://najva.com" class="text-green-500 underline">
                  نجوا
                </a>
                و
                <a href="https://yektanet.com" class="text-green-500 underline">
                  یکتانت
                </a>
                رو شروع کردیم و من هم عضو تیم اولیه این پروژه‌ها بودم و کدهای
                اولیه این پروژه‌ها با جاوااسکریپت رو پیاده‌سازی کردم. <br />
                بعد‌ترها پنل‌هامون رو که با jquery زده بودیم رو با vue بازنویسی
                کردیم و کلی امکانات جذاب بهشون اضافه کردیم. <br />
                پروژه‌های مختلفی مثل
                <a href="https://triboon.net" class="text-green-500 underline">
                  تریبون
                </a>
                و
                <a href="https://jaryan.net" class="text-green-500 underline">
                  جریان
                </a>
                و ... رو شروع کردیم و در حال حاضر روی پروژه تریبون کار می‌کنم.
              </p>
            </div>
            <div class="bg-blue-100"></div>
          </div>
          <div
            v-else-if="contactTab"
            key="contact"
            class="bg-white rounded rounded-tr-none rounded-br-none h-full w-full absolute overflow-auto"
          >
            <div :class="['text-start p-8 pb-0', $style.title]">
              <span
                :class="[
                  'text-green-500 font-semibold inline-block mb-8 text-lg relative',
                  $style.firstWord,
                ]"
              >
                برای ارتباط با
              </span>
              <span class="font-semibold text-lg"> من </span>
            </div>
            <div class="p-8">
              <p>
                <i class="fa fa-phone"></i>
                <span class="fanum">09202062826</span>
              </p>
            </div>
          </div>
          <div
            v-else-if="myWorksTab"
            key="my-works"
            class="bg-white rounded rounded-tr-none rounded-br-none h-full w-full absolute overflow-auto"
          >
            <div :class="['text-start p-8 pb-0', $style.title]">
              <span
                :class="[
                  'text-green-500 font-semibold inline-block mb-8 text-lg relative',
                  $style.firstWord,
                ]"
              >
                کارهای
              </span>
              <span class="font-semibold text-lg"> من </span>
            </div>
            <div class="p-8">
              <p>به مرور کارهام رو اینجا قرار میدم.</p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<i18n lang="json">
{
  "en": {},
  "fa": {}
}
</i18n>
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
      myWorksTab() {
        return this.tab === 'my-works';
      },
      contactTab() {
        return this.tab === 'contact';
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
  @mixin gutterGradiant($ellipsis) {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: radial-gradient(
        ellipse at $ellipsis,
        #ddd 0%,
        rgba(255, 255, 255, 0) 70%
      );
    }
  }
  .centerEllipsisGradiantGutter {
    @include gutterGradiant(center);
  }
  .innerCard {
    height: calc(100% - 2rem);
  }
  .title {
    .firstWord {
      &::before {
        position: absolute;
        border-radius: 30px;
        right: -17px;
        top: 0;
        background: -webkit-linear-gradient(
          -45deg,
          rgba(46, 202, 127, 0.15) 0%,
          rgba(46, 202, 127, 0.01) 100%
        );
        width: 30px;
        height: 28px;
        content: '';
      }
    }
    &::after {
      right: -2rem;
      position: relative;
      content: '';
      display: block;
      height: 1px;
      background: -moz-radial-gradient(
        right,
        ellipse cover,
        #ddd 0%,
        rgba(255, 255, 255, 0) 70%
      );
      background: -webkit-radial-gradient(
        right,
        ellipse cover,
        #ddd 0%,
        rgba(255, 255, 255, 0) 70%
      );
      background: radial-gradient(
        ellipse at right,
        #ddd 0%,
        rgba(255, 255, 255, 0) 70%
      );
    }
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
  .gutterGradiant {
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
  .profileFooterButtons {
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

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
      class="container mx-auto max-w-screen-xl md:max-w-screen-lg lg:h-5/6 xl:h-4/6 h-full relative flex flex-col lg:flex-row"
    >
      <div
        class="top-menu lg:ml-2 z-30 lg:top-4 lg:relative lg:w-20 lg:h-auto fixed w-full max-h-20 h-20"
      >
        <div class="flex lg:flex-col h-full">
          <a
            :class="[$style.menuBtn, 'w-20']"
            href=""
            class="bg-white lg:w-full w-20 px-2 py-8 text-center inline-block lg:rounded hover:text-green-500 relative h-20 lg:h-auto"
          >
            <span></span>
          </a>
          <ul
            :class="[
              'flex lg:flex-col flex-1 bg-white items-center lg:rounded lg:mt-2',
              $style.topMenuUl,
            ]"
          >
            <li class="px-2 py-4 text-center w-full h-full relative">
              <a
                href=""
                class="hover:text-green-500"
                @click.prevent="tab = 'about-me'"
              >
                <i class="fa fa-user-tie"></i>
                <small class="whitespace-nowrap block">درباره من</small>
              </a>
            </li>
            <li class="px-2 py-4 text-center w-full h-full relative">
              <a
                href=""
                class="hover:text-green-500"
                @click.prevent="tab = 'my-resume'"
              >
                <i class="fa fa-file-alt"></i>
                <small class="whitespace-nowrap block"> رزومه من </small>
              </a>
            </li>
            <li class="px-2 py-4 text-center w-full h-full relative">
              <a
                href=""
                class="hover:text-green-500"
                @click.prevent="tab = 'my-works'"
              >
                <i class="fa fa-paint-brush"></i>
                <small class="whitespace-nowrap block">کارهای من</small>
              </a>
            </li>
            <li class="px-2 py-4 text-center w-full h-full relative">
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
      </div>
      <div class="lg:w-2/5 relative w-full mt-20 lg:mt-0">
        <div
          :class="[
            'h-full w-full rounded z-10 hidden sm:block',
            $style.profileShadow,
          ]"
        ></div>

        <div
          :class="[
            'bg-white h-full rounded shadow-2xl relative z-20 flex flex-col justify-between',
            $style.profileCard,
          ]"
        >
          <div :class="['relative rounded', $style.profilePictureWrapper]">
            <img
              src="/images/me.jpg"
              width="100%"
              height="auto"
              alt="ali
            esmaeili"
            />
          </div>
          <div class="mt-8 text-center font-bold text-2xl">
            {{ title }}
          </div>
          <div class="mt-3 text-center text-green-500" style="min-height: 24px">
            {{ subtitleTyping }}
          </div>
          <div class="my-3 h-16 flex justify-between items-center">
            <a
              v-for="item in socials"
              :key="item.network"
              :href="item.link"
              class="mx-4 flex-grow hover:text-green-500 flex justify-center items-center"
            >
              <i :class="`fab fa-${item.network}`"></i>
            </a>
          </div>
          <div :class="['w-full h-16 relative', $style.profileFooterButtons]">
            <div :class="['flex h-full justify-center items-center']">
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

      <div
        :class="[
          'lg:w-3/5 w-full my-4 relative lg:overflow-x-hidden',
          $style.innerCard,
        ]"
      >
        <transition
          name="innerCardTransition"
          :enter-active-class="`animate__animated 
            ${
              ['lg', 'xl', '2xl'].includes($screen.breakpoint)
                ? 'animate__fadeInRight'
                : 'animate__fadeIn'
            }
          `"
          :leave-active-class="`animate__animated 
          ${
            ['lg', 'xl', '2xl'].includes($screen.breakpoint)
              ? 'animate__fadeOutRight'
              : 'animate__fadeOut'
          }
          `"
        >
          <div
            v-if="aboutmeTab"
            key="aboutme"
            class="bg-white rounded rounded-tr-none rounded-br-none h-full w-full lg:absolute lg:overflow-auto"
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
            <div class="flex flex-col md:flex-row">
              <div :class="['text-justify p-8']">
                <p class="text-gray-600">
                  من علی اسماعیلی هستم. <br />
                  یک فرانت‌اند دولوپر از ایران.
                  <br />
                  در حال حاضر در شرکت یکتانت مشغول به کار هستم.
                </p>
              </div>
              <div :class="['p-8 relative flex-grow', $style.gutterGradiant]">
                <ul>
                  <li
                    :class="[
                      'flex justify-between items-center py-2 relative',
                      $style.centerEllipsisGradiantGutter,
                    ]"
                  >
                    <small>
                      <strong
                        class="px-2 bg-green-500 rounded text-start text-white"
                      >
                        سن
                      </strong>
                    </small>
                    <span class="text-gray-600 fanum">4</span>
                  </li>
                  <li
                    :class="[
                      'flex justify-between items-center relative py-2',
                      $style.centerEllipsisGradiantGutter,
                    ]"
                  >
                    <small>
                      <strong
                        class="px-2 bg-green-500 rounded text-start text-white"
                      >
                        محل اقامت
                      </strong>
                    </small>
                    <span class="text-gray-600">ایران</span>
                  </li>
                  <li
                    :class="[
                      'flex justify-between items-center relative py-2',
                      $style.centerEllipsisGradiantGutter,
                    ]"
                  >
                    <small>
                      <strong
                        class="px-2 bg-green-500 rounded text-start text-white whitespace-nowrap"
                      >
                        وضعیت اشتغال
                      </strong>
                    </small>
                    <span class="text-gray-600">مشغول </span>
                  </li>
                  <li
                    :class="['flex justify-between items-center relative py-2']"
                  >
                    <small>
                      <strong
                        class="px-2 bg-green-500 rounded text-start text-white"
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
            class="bg-white rounded rounded-tr-none rounded-br-none h-full w-full lg:absolute lg:overflow-auto"
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
                'p-8 flex flex-col md:flex-row items-center justify-start relative',
                $style.centerEllipsisGradiantGutter,
              ]"
            >
              <a
                href="https://yektanet.com"
                class="flex flex-col justify-between items-center ml-3"
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
            class="bg-white rounded rounded-tr-none rounded-br-none h-full w-full lg:absolute lg:overflow-auto"
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
              <form action="" method="post">
                <h3 class="my-3 rounded p-3 bg-blue-100">
                  می‌تونی برام یه پیام بفرستی تا از طریق ایمیل با هم در ارتباط
                  باشیم.
                </h3>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  ایمیلت رو بنویس تا جواب بدم
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  name="email"
                  placeholder="email"
                  class="block rounded border w-full mb-3"
                  dir="ltr"
                />
                <label
                  for="subject"
                  class="block text-sm font-medium text-gray-700"
                >
                  موضوع
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  name="subject"
                  placeholder="موضوع"
                  class="block border rounded w-full mb-3"
                />
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700"
                >
                  متن پیام
                </label>
                <textarea
                  v-model="form.message"
                  required
                  name="message"
                  placeholder="پیامت رو اینجا بنویس"
                  class="border rounded block w-full my-3"
                  cols="30"
                  rows="5"
                ></textarea>
                <button
                  class="block py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  @click.prevent="formSubmitted"
                >
                  ارسال
                </button>
              </form>
              <transition
                name="successMessage"
                enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut"
              >
                <div
                  v-if="showSuccessMessage"
                  class="bg-green-200 rounded p-4 mt-3"
                >
                  پیام شما با موفقیت ارسال شد.
                </div>
              </transition>
            </div>
          </div>
          <div
            v-else-if="myWorksTab"
            key="my-works"
            class="bg-white rounded rounded-tr-none rounded-br-none h-full w-full lg:absolute overflow-auto"
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
  import { init, send } from 'emailjs-com';
  export default {
    data() {
      const subtitles = [
        'برنامه‌نویس',
        'توسعه دهنده فرانت‌اند',
        'تیم‌لید',
        'چپترلید فرانت‌اند',
      ];
      return {
        showSuccessMessage: false,
        form: {
          email: '',
          subject: '',
          message: '',
        },
        tab: 'about-me',
        title: 'علی اسماعیلی',
        subtitles,
        socials: [
          {
            network: 'telegram',
            link: 'https://t.me/aesmaeili777/',
          },
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
    created() {
      init('user_bx0uG9YG3zkCIJOTbjfgv');
    },
    mounted() {
      this.typeCharacterByCharacter();
    },
    methods: {
      formSubmitted() {
        const templateParams = {
          ...this.form,
          accessToken: '3c2e26b0d6f5931847db819770596d10',
        };
        send('service_4f1wkk4', 'template_io22kod', templateParams)
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            this.form = {
              email: '',
              subject: '',
              message: '',
            };
            this.showSuccessMessage = true;
            setTimeout(() => (this.showSuccessMessage = false), 5000);
          })
          .catch((err) => console.error(err));
      },
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
  @mixin gutterGradiant($ellipsis, $horizontal: true) {
    &::after {
      content: '';
      position: absolute;
      @if $horizontal {
        right: 0;
        top: 100%;
        width: 100%;
        height: 1px;
      } @else {
        right: 100%;
        top: 0;
        width: 1px;
        height: 100%;
      }

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
    li:not(:last-child) {
      @include gutterGradiant(bottom, $horizontal: false);
      @screen lg {
        @include gutterGradiant(left);
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

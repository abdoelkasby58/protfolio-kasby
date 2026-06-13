<template>
  <section class="contact" id="contact">
    <div class="contact-left">
      <p class="section-label reveal">// Contact</p>
      <h2 class="section-title reveal">Let's Work<br />Together</h2>
      <p class="reveal">
        Have a project in mind or just want to say hi?<br />
        I'm always open to new opportunities and collaborations.
      </p>

      <div class="contact-links">
        <a
          v-for="link in contactLinks"
          :key="link.label"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          class="contact-link reveal"
        >
          <div class="contact-link-left">
            <span class="contact-link-icon">{{ link.icon }}</span>
            <div>
              <div class="contact-link-label">{{ link.label }}</div>
              <div class="contact-link-value">{{ link.value }}</div>
            </div>
          </div>
          <span class="contact-link-arrow">↗</span>
        </a>
      </div>
    </div>

    <!-- فورم الإرسال -->
    <form @submit.prevent="sendMessage" class="contact-form reveal-left">
      <!-- Success message -->
      <Transition name="fade">
        <div
          v-if="status === 'success'"
          class="form-status form-status--success"
        >
          ✓ Message sent! I'll get back to you soon.
        </div>
      </Transition>

      <!-- Error message -->
      <Transition name="fade">
        <div v-if="status === 'error'" class="form-status form-status--error">
          <span class="status-icon">✕</span>
          <span class="status-text">
            {{ errorMessage || "Something went wrong. Please try again." }}
          </span>
        </div>
      </Transition>

      <div class="form-field">
        <input
          v-model.trim="form.name"
          type="text"
          placeholder=" "
          id="fname"
          :disabled="loading"
          required
        />
        <label for="fname">Your Name</label>
      </div>

      <div class="form-field">
        <input
          v-model.trim="form.email"
          type="email"
          placeholder=" "
          id="femail"
          :disabled="loading"
          required
        />
        <label for="femail">Email Address</label>
      </div>

      <div class="form-field">
        <textarea
          v-model.trim="form.message"
          placeholder=" "
          id="fmsg"
          :disabled="loading"
          required
        ></textarea>
        <label for="fmsg">Your Message</label>
      </div>

      <div class="form-submit">
        <button
          type="submit"
          class="btn btn-glow"
          style="
            width: 100%;
            justify-content: center;
            border: none;
            cursor: pointer;
          "
          :disabled="loading"
        >
          <span v-if="loading" class="btn-spinner"></span>
          <span>{{ loading ? "Sending..." : "Send Message →" }}</span>
        </button>
      </div>
    </form>
  </section>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import emailjs from "@emailjs/browser";

// EmailJS Config
const EMAILJS_SERVICE_ID = "service_5p5kt67";
const EMAILJS_TEMPLATE_ID = "template_24bcuwg";
const EMAILJS_PUBLIC_KEY = "xhIm1-XLs47f8fi-k";

// Init EmailJS
onMounted(() => {
  emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY,
  });
});

const loading = ref(false);
const status = ref("");
const errorMessage = ref("");

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const sendMessage = async () => {
  status.value = "";
  errorMessage.value = "";

  if (!form.name || !form.email || !form.message) {
    status.value = "error";
    errorMessage.value = "Please fill in all fields.";
    return;
  }

  loading.value = true;

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      name: form.name,
      email: form.email,
      title: "Portfolio Contact",
      message: form.message,
    });

    status.value = "success";

    form.name = "";
    form.email = "";
    form.message = "";

    setTimeout(() => {
      status.value = "";
    }, 5000);
  } catch (error) {
    console.error("EmailJS Error:", error);

    status.value = "error";

    if (error?.text) {
      errorMessage.value = error.text;
    } else {
      errorMessage.value = "Failed to send message.";
    }

    console.log("STATUS:", error?.status);
    console.log("TEXT:", error?.text);

    setTimeout(() => {
      status.value = "";
    }, 5000);
  } finally {
    loading.value = false;
  }
};

const contactLinks = [
  {
    icon: "✉️",
    label: "Email",
    value: "abdoabdou1u5@gmail.com",
    href: "mailto:abdoabdou1u5@gmail.com",
    external: false,
  },
  {
    icon: "⌨️",
    label: "GitHub",
    value: "github.com/abdoelkasby58",
    href: "https://github.com/abdoelkasby58",
    external: true,
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "Abdelrahman Elkasby",
    href: "https://www.linkedin.com/in/abdelrahiman-elkasby-525411368/",
    external: true,
  },
];
</script>

<style scoped>
/* الحاوية الأساسية للرسالة */
.form-status {
  margin-top: 1.25rem;
  padding: 0.85rem 1.25rem;
  border-radius: 12px;
  font-family: var(--font-mono); /* استخدام الخط المونو ليعطي طابع تقني */
  font-size: 0.9rem;
  display: flex;
  background:rgba(0, 255, 0, 0.329);
  align-items: center;
  gap: 10px;
  backdrop-blur: 8px; /* تأثير زجاجي */
  transition: all 0.3s ease;
  animation: slideIn 0.4s ease-out;
}

/* استايل الخطأ (Error) */
.form-status--error {
  background: rgba(255, 45, 138, 0.1); /* شفافية من Nebula Pink */
  color: var(--nebula-pink);
  border: 1px solid rgba(255, 45, 138, 0.3);
  box-shadow: 0 0 15px rgba(255, 45, 138, 0.15); /* هالة نيون خفيفة */
}

/* تأثير أنيميشن عند الظهور */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

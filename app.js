// Mobile menu.
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", false); }
});

// Contact form: no backend yet, so it opens the visitor's email app with the message filled in.
// ponytail: mailto only; swap for a form endpoint (e.g. Formspree or own API) to capture leads server-side.
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target.elements;
  const body = [
    f.message.value,
    "",
    f.name.value + (f.company.value ? ", " + f.company.value : ""),
    f.email.value,
    f.phone.value,
  ].filter((line, i) => i < 2 || line).join("\n");
  location.href = "mailto:support@cyberia.tn?subject=" + encodeURIComponent(e.target.dataset.subject.replace("{topic}", f.topic.value)) +
    "&body=" + encodeURIComponent(body);
});

const body = document.body;
const yearNodes = document.querySelectorAll('[data-year]');
yearNodes.forEach(node => node.textContent = new Date().getFullYear());

const revealNodes = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px 80px' });
revealNodes.forEach(node => revealObserver.observe(node));
requestAnimationFrame(() => [...revealNodes].slice(0, 4).forEach(node => node.classList.add('visible')));

const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
function closeMenu() {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('open');
  body.classList.remove('menu-open');
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  mobileMenu.classList.toggle('open', open);
  body.classList.toggle('menu-open', open);
});
mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

const navLinks = [...document.querySelectorAll('.desktop-nav a[href^="#"]')];
const navSections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });
navSections.forEach(section => navObserver.observe(section));

const cursor = document.querySelector('.cursor');
if (cursor && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
  let tx = innerWidth / 2, ty = innerHeight / 2, x = tx, y = ty;
  const animateCursor = () => {
    x += (tx - x) * 0.18;
    y += (ty - y) * 0.18;
    cursor.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
    requestAnimationFrame(animateCursor);
  };
  animateCursor();
  addEventListener('pointermove', event => { tx = event.clientX; ty = event.clientY; cursor.classList.add('ready'); });
  addEventListener('pointerleave', () => cursor.classList.remove('ready'));
  document.querySelectorAll('a,button,.case-card').forEach(node => {
    node.addEventListener('pointerenter', () => cursor.classList.add('link'));
    node.addEventListener('pointerleave', () => cursor.classList.remove('link'));
  });
}

const projects = {
  talentforge: {
    kicker: 'CASE STUDY 01 / BACKEND PLATFORM',
    title: 'TalentForge Job Portal',
    summary: 'A production-ready backend for job seekers, employers and administrators, with secure authentication, role-based workflows and dependable persistence.',
    metrics: [['95%', 'reduction in unauthorized access attempts through JWT authentication'], ['40%', 'improvement in job posting and application processing efficiency']],
    stack: 'Java, Spring Boot, Spring Security, JWT, Spring Data JPA, Hibernate, MySQL, Docker, Maven'
  },
  learning: {
    kicker: 'CASE STUDY 02 / AI LEARNING PLATFORM',
    title: 'DainikBhaskar.ai Learning Platform',
    summary: 'Backend APIs and workflows for users, courses, payments, videos, live lectures, recordings and learning-content management, designed to remain stable during peak usage.',
    metrics: [['500+', 'concurrent learners supported without service disruption'], ['30%', 'reduction in system error rate through stronger architecture, validation and error handling'], ['20%', 'faster content-fetching and video-access flows']],
    stack: 'FastAPI, Fastify, Python, Clerk Authentication, Payment APIs, Multimedia APIs'
  },
  realtime: {
    kicker: 'CASE STUDY 03 / REAL-TIME AI',
    title: 'AI Conversation Platform',
    summary: 'A real-time speech and AI response system combining streaming APIs, mobile interfaces, transcription, tone classification and multi-role conversation workflows.',
    metrics: [['30+', 'product demonstrations powered by the platform'], ['30%', 'reduction in AI pipeline processing time'], ['15', 'multi-role conversation flows integrated']],
    stack: 'FastAPI, WebSockets, React Native, Expo, AssemblyAI, LLMs, Python'
  },
  contactpay: {
    kicker: 'CASE STUDY 04 / JAVA APPLICATION',
    title: 'Payment & Contact Manager',
    summary: 'A Java and Spring Boot application that combines contact-management workflows with secure transaction records for faster, clearer daily operations.',
    metrics: [['70%', 'less manual record-keeping through contact CRUD workflows'], ['40%', 'faster transaction completion through integrated payment features']],
    stack: 'Java, Spring Boot, Hibernate, Maven, MySQL, REST APIs'
  }
};

const dialog = document.querySelector('#project-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogKicker = document.querySelector('#dialog-kicker');
const dialogSummary = document.querySelector('#dialog-summary');
const dialogMetrics = document.querySelector('#dialog-metrics');
const dialogStack = document.querySelector('#dialog-stack');

function openProject(projectId) {
  const project = projects[projectId];
  if (!project || !dialog) return;
  dialogTitle.textContent = project.title;
  dialogKicker.textContent = project.kicker;
  dialogSummary.textContent = project.summary;
  dialogStack.textContent = project.stack;
  dialogMetrics.replaceChildren(...project.metrics.map(([value, label]) => {
    const item = document.createElement('span');
    const strong = document.createElement('strong');
    strong.textContent = value;
    item.append(strong, document.createTextNode(label));
    return item;
  }));
  dialog.showModal();
}

document.querySelectorAll('[data-open-project]').forEach(button => {
  button.addEventListener('click', event => {
    event.stopPropagation();
    openProject(button.dataset.openProject);
  });
});
document.querySelectorAll('.case-card[data-project]').forEach(card => {
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProject(card.dataset.project);
    }
  });
});
// Cards / buttons that navigate to a dedicated case-study route
document.querySelectorAll('[data-href]').forEach(el => {
  const go = () => window.location.assign(el.dataset.href);
  el.addEventListener('click', event => {
    if (event.target.closest('a')) return; // let real links handle themselves
    go();
  });
  el.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); go(); }
  });
});

dialog?.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) dialog.close();
});

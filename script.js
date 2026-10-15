/* English is the default on every visit. The language button switches in place. */
const chinese = {
  name: '马文恺<span class="name-dot">.</span>', footerName: '马文恺',
  skip: '跳转到正文', navLabel: '主导航', navAbout: '关于', navPublications: '论文', navContact: '联系',
  eyebrow: '个人学术主页', role: '本科生 · 访问学生',
  bio: '我目前就读于<a href="https://www.ukm.my/portalukm/" target="_blank" rel="noopener noreferrer">马来西亚国民大学（UKM）</a>软件工程专业，同时在<strong>西湖大学 TGAI Lab</strong>担任访问学生（Visiting Student）。',
  focus: '我的研究兴趣包括大语言模型安全、多智能体系统、人工智能安全，以及隐私与访问控制。',
  email: '邮件联系', portraitAlt: '马文恺的个人照片', portraitCaption: 'TGAI Lab · 西湖大学',
  researchTitle: '研究兴趣', interest1: '大语言模型安全', interest2: '多智能体系统', interest3: '人工智能安全', interest4: '隐私与访问控制',
  publicationsTitle: '学术论文', accepted: '已接收', author: '第一作者',
  backgroundTitle: '经历与教育', current: '目前', visitingTitle: '访问学生', lab: '西湖大学 TGAI Lab',
  educationDates: '2023 年 9 月 – 2027 年 7 月<br><span class="expected">（预计毕业）</span>',
  university: '马来西亚国民大学（UKM）', degree: '软件工程荣誉学士', specialization: '多媒体系统开发方向',
  record: 'CGPA：3.65 / 4.0 <span aria-hidden="true">·</span> 院长荣誉名单',
  contactEyebrow: '联系方式', contactTitle: '欢迎交流。'
};
const contentNodes = Array.from(document.querySelectorAll('[data-i18n]'));
const english = Object.fromEntries(contentNodes.map(node => [node.dataset.i18n, node.innerHTML]));
let language = 'en';
const toggle = document.getElementById('language-toggle');
toggle.addEventListener('click', () => {
  language = language === 'en' ? 'zh-CN' : 'en';
  const isChinese = language === 'zh-CN';
  const dictionary = isChinese ? chinese : english;
  document.documentElement.lang = language;
  contentNodes.forEach(node => { node.innerHTML = dictionary[node.dataset.i18n]; });
  document.querySelector('[data-i18n-aria]').setAttribute('aria-label', isChinese ? chinese.navLabel : 'Main navigation');
  document.querySelector('[data-i18n-alt]').alt = isChinese ? chinese.portraitAlt : 'Portrait of Wenkai Ma';
  document.getElementById('language-label').textContent = isChinese ? 'English' : '中文';
  toggle.setAttribute('aria-label', isChinese ? 'Switch to English' : 'Switch to Chinese');
  toggle.setAttribute('aria-pressed', String(isChinese));
  document.title = isChinese ? '马文恺 | 个人学术主页' : 'Wenkai Ma | Academic Homepage';
});
document.getElementById('year').textContent = new Date().getFullYear();

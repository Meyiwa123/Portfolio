import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from "../../chunks/ssr.js";
const app = "";
const mouseIcon = "/_app/immutable/assets/mouse.46dfd57c.svg";
const github = "/_app/immutable/assets/github.64869332.svg";
const linkedin = "/_app/immutable/assets/linkedin.4402f1c7.svg";
const HomeSection_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "main.svelte-gsz7e4.svelte-gsz7e4{width:80vw;height:100vh;display:flex;align-items:center;border-left:3px solid;border-image:linear-gradient(to top, var(--accent-primary) 60%, transparent 40%) 1}#dot.svelte-gsz7e4.svelte-gsz7e4{position:relative;left:-12px;top:-10%;width:20px;height:20px;transform:rotate(45deg);background-color:var(--accent-primary)}#title-block.svelte-gsz7e4.svelte-gsz7e4{margin-left:75px}#title-hi.svelte-gsz7e4.svelte-gsz7e4{font-size:var(--fsize-text-body);font-weight:800;letter-spacing:1px}#title-name.svelte-gsz7e4.svelte-gsz7e4{font-size:var(--fsize-title);margin-top:-20px;margin-left:-3px}#title-aka.svelte-gsz7e4.svelte-gsz7e4{color:var(--text-secondary);font-size:var(--fsize-text-small);margin-bottom:15px;margin-left:5px}#title-list.svelte-gsz7e4.svelte-gsz7e4{list-style:none;margin-bottom:20px}#title-list.svelte-gsz7e4 li.svelte-gsz7e4{color:var(--accent-primary);font-size:var(--fsize-text-subheading);margin-top:5px}#title-list.svelte-gsz7e4 li.svelte-gsz7e4::before{content:'-';font-weight:400;margin-right:5px}#scroll-img.svelte-gsz7e4.svelte-gsz7e4{width:40px;height:40px;position:absolute;left:calc(50% - 20px);bottom:50px;animation:svelte-gsz7e4-scroll-img-anim 2s ease-in-out infinite}@keyframes svelte-gsz7e4-scroll-img-anim{0%{transform:translateY(0)}50%{transform:translateY(-30px)}100%{transform:translateY(0)}}#scroll-text.svelte-gsz7e4.svelte-gsz7e4{width:200px;text-align:center;position:absolute;right:50%;left:50%;transform:translateX(-50%);bottom:50px;animation:svelte-gsz7e4-scroll-text-anim 2s ease-in-out infinite}@keyframes svelte-gsz7e4-scroll-text-anim{0%{opacity:0}25%{opacity:0}50%{opacity:100%}80%{opacity:0%}100%{opacity:0}}#title-socials.svelte-gsz7e4.svelte-gsz7e4{display:flex;margin-top:20px}#title-socials.svelte-gsz7e4 img.svelte-gsz7e4{margin-right:10px;transform:scale(0.8);opacity:60%;transition:250ms}#title-socials.svelte-gsz7e4 img.svelte-gsz7e4:hover{opacity:100%}.button.svelte-gsz7e4.svelte-gsz7e4{margin-right:20px}@media only screen and (max-width: 800px){main.svelte-gsz7e4.svelte-gsz7e4{width:100vw;border:none;justify-content:center}#title-block.svelte-gsz7e4.svelte-gsz7e4{margin-left:0;width:85%}.button.svelte-gsz7e4.svelte-gsz7e4{width:100%;text-align:center;margin-bottom:15px;margin-right:0}#dot.svelte-gsz7e4.svelte-gsz7e4,#scroll-img.svelte-gsz7e4.svelte-gsz7e4,#scroll-text.svelte-gsz7e4.svelte-gsz7e4{display:none}}",
  map: null
};
const HomeSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<main class="section svelte-gsz7e4" id="home" data-svelte-h="svelte-1p9uc0e"><span id="dot" class="svelte-gsz7e4"></span> <div id="title-block" class="svelte-gsz7e4"><p id="title-hi" data-animate class="svelte-gsz7e4"><span style="color: var(--accent-primary);">HI</span> THERE! I&#39;M</p> <p id="title-name" data-animate class="svelte-gsz7e4">Meyiwa Temile</p> <p id="title-aka" data-animate class="svelte-gsz7e4">I go to Carleton University</p> <ul id="title-list" data-animate class="svelte-gsz7e4"><li class="svelte-gsz7e4">Software Engineer</li> <li class="svelte-gsz7e4">Problem Solver</li> <li class="svelte-gsz7e4">Robotics Enthusiast</li></ul> <div style="display: flex; flex-wrap: wrap;"><a class="button svelte-gsz7e4" data-animate href="#projects">PROJECTS</a> <a class="button svelte-gsz7e4" data-animate href="#skills">SKILLS</a></div> <div id="title-socials" data-animate class="svelte-gsz7e4"><a href="https://github.com/meyiwa123" target="_blank" rel="noopener noreferrer"><img${add_attribute("src", github, 0)} alt="github" class="svelte-gsz7e4"></a> <a href="https://www.linkedin.com/in/meyiwa-temile/" target="_blank" rel="noopener noreferrer"><img${add_attribute("src", linkedin, 0)} alt="linkedin" class="svelte-gsz7e4"></a></div></div> <img${add_attribute("src", mouseIcon, 0)} alt="mouse" id="scroll-img" class="svelte-gsz7e4"> <p id="scroll-text" class="svelte-gsz7e4">SCROLL FOR MORE</p> </main>`;
});
const LanguageLabel_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: 'main.svelte-1tjozi3{display:flex;align-items:center;justify-content:center;padding:15px 30px;font-family:"JetBrains Mono";font-size:var(--fsize-text-body);font-weight:800;letter-spacing:3px;color:var(--text-primary);background-color:var(--background-secondary);margin-left:20px}div.svelte-1tjozi3{width:18px;height:18px;margin-right:15px;transform:rotate(45deg)}',
  map: null
};
const LanguageLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { language = "" } = $$props;
  const languages = {
    default: "#999999",
    rust: "#A58060",
    ruby: "#AE2828",
    qml: "#4B872F",
    svelte: "#ff4500",
    "p5.js": "#C53B70",
    python: "#FFC13A",
    html: "#D84923"
  };
  function getLanguageColor() {
    if (language.toLowerCase() in languages)
      return languages[language.toLowerCase()];
    else
      return languages.default;
  }
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  $$result.css.add(css$7);
  return `<main class="svelte-1tjozi3"><div style="${"background-color: " + escape(getLanguageColor(), true) + ";"}" class="svelte-1tjozi3"></div> <p>${escape(language.toUpperCase())}</p> </main>`;
});
const ProjectCard_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "main.svelte-t1d8t0.svelte-t1d8t0{display:flex;flex-wrap:wrap;width:500px;height:250px;margin-right:30px;margin-top:30px;background-color:var(--background-secondary);padding:20px;transform:skew(-5deg);overflow:hidden;border:2px solid var(--background-secondary)}main.svelte-t1d8t0:hover>img.svelte-t1d8t0,button.svelte-t1d8t0:focus~img.svelte-t1d8t0{opacity:45%;filter:blur(2px)}main.svelte-t1d8t0:hover>div.svelte-t1d8t0,button.svelte-t1d8t0:focus~div.svelte-t1d8t0{z-index:2 !important;opacity:100% !important;transform:translateX(0%) !important}button.svelte-t1d8t0.svelte-t1d8t0{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;background:none;border:none;outline:none}img.svelte-t1d8t0.svelte-t1d8t0{position:absolute;z-index:0;top:50%;left:50%;transition:250ms}#content.svelte-t1d8t0.svelte-t1d8t0{z-index:0;display:flex;flex-direction:column-reverse;opacity:0%;transform:translateX(-20%);transition:250ms}h1.svelte-t1d8t0.svelte-t1d8t0{margin-bottom:5px}p.svelte-t1d8t0.svelte-t1d8t0{font-size:var(--fsize-text-body);margin-bottom:20px}@media only screen and (max-width: 800px){main.svelte-t1d8t0.svelte-t1d8t0{transform:none}h1.svelte-t1d8t0.svelte-t1d8t0{word-break:break-all}p.svelte-t1d8t0.svelte-t1d8t0{word-wrap:break-word}}",
  map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { thumbnailImage = "" } = $$props;
  let { thumbnailScale = "1" } = $$props;
  let { visitURL = "" } = $$props;
  let { language = "" } = $$props;
  if ($$props.thumbnailImage === void 0 && $$bindings.thumbnailImage && thumbnailImage !== void 0)
    $$bindings.thumbnailImage(thumbnailImage);
  if ($$props.thumbnailScale === void 0 && $$bindings.thumbnailScale && thumbnailScale !== void 0)
    $$bindings.thumbnailScale(thumbnailScale);
  if ($$props.visitURL === void 0 && $$bindings.visitURL && visitURL !== void 0)
    $$bindings.visitURL(visitURL);
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  $$result.css.add(css$6);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<main data-animate class="svelte-t1d8t0"><button class="svelte-t1d8t0"></button> <img${add_attribute("src", thumbnailImage, 0)} alt="" style="${"transform: translate(-50%, -50%) scale(" + escape(thumbnailScale, true) + ");"}" class="svelte-t1d8t0"> <div id="content" class="svelte-t1d8t0"><div style="display: flex;"><a class="button" style="transform: none;"${add_attribute("href", visitURL, 0)} target="_blank" rel="noopener noreferrer">VISIT</a> ${language !== "" ? `${validate_component(LanguageLabel, "LanguageLabel").$$render(
      $$result,
      { language },
      {
        language: ($$value) => {
          language = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div> <p class="svelte-t1d8t0">${slots.description ? slots.description({}) : ``}</p> <h1 class="svelte-t1d8t0">${slots.title ? slots.title({}) : ``}</h1></div> </main>`;
  } while (!$$settled);
  return $$rendered;
});
const projects = [
  {
    name: "Building Elevator Control System",
    description: "An advanced elevator control system that efficiently manages vertical transportation, ensuring smooth, safe, and timely movements between floors.",
    thumbnailImage: "png/elevator_system.png",
    thumbnailScale: "0.6",
    url: "https://github.com/Meyiwa123/Elevator-Control-System-and-Simulation",
    language: "java"
  }
];
const projectsJSON = {
  projects
};
const ProjectsSection_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "main.svelte-1l957pi{display:flex;flex-direction:column;width:80vw;border-left:3px solid var(--accent-primary)}#dot.svelte-1l957pi{position:relative;left:-12px;top:150px;width:20px;height:20px;transform:rotate(45deg);background-color:var(--accent-primary)}#title-block.svelte-1l957pi{margin-left:75px;margin-top:100px;margin-bottom:50px}#title-name.svelte-1l957pi{font-size:var(--fsize-title);margin-top:-20px;margin-left:-3px}#title-sub.svelte-1l957pi{font-size:var(--fsize-text-body);color:var(--text-secondary)}#cards.svelte-1l957pi{display:flex;flex-wrap:wrap;max-width:100%;margin-left:75px;margin-bottom:200px}@media only screen and (max-width: 800px){main.svelte-1l957pi{width:100vw;border:none}#title-block.svelte-1l957pi{margin-left:10px;padding:20px}#cards.svelte-1l957pi{margin-left:25px;align-items:center;justify-content:center}#dot.svelte-1l957pi{display:none}}",
  map: null
};
const ProjectsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projects2 = projectsJSON.projects;
  $$result.css.add(css$5);
  return `<main class="section svelte-1l957pi" id="projects"><span id="dot" class="svelte-1l957pi"></span> <div id="title-block" class="svelte-1l957pi" data-svelte-h="svelte-rpzkxc"><p data-animate id="title-name" class="svelte-1l957pi">projects</p> <p data-animate id="title-sub" class="svelte-1l957pi">here are my most notable projects, hover or tap over them to get more info!</p></div> <div id="cards" class="svelte-1l957pi">${each(projects2, (project) => {
    return `${validate_component(ProjectCard, "ProjectCard").$$render(
      $$result,
      {
        thumbnailImage: project.thumbnailImage,
        thumbnailScale: project.thumbnailScale,
        visitURL: project.url,
        language: project.language
      },
      {},
      {
        description: () => {
          return `<span slot="description">${escape(project.description)}</span>`;
        },
        title: () => {
          return `<span slot="title">${escape(project.name)}</span>`;
        }
      }
    )}`;
  })}</div> </main>`;
});
const SkillCard_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "main.svelte-1boq14d.svelte-1boq14d{display:flex;flex-wrap:wrap;width:90%;margin-right:30px;margin-top:30px;background-color:var(--background-secondary);padding:20px;transform:skew(-5deg);overflow:hidden;border:2px solid var(--background-secondary)}#content.svelte-1boq14d.svelte-1boq14d{width:100%;display:flex;flex-direction:column;margin-bottom:-10px;transition:250ms}h1.svelte-1boq14d.svelte-1boq14d{margin-bottom:5px}#progress-bar-bg.svelte-1boq14d.svelte-1boq14d{width:100%;height:15px;margin-top:15px;margin-bottom:5px;background-color:var(--background-primary)}#progress-bar-fg.svelte-1boq14d.svelte-1boq14d{height:100%;background-color:var(--accent-primary);box-shadow:0 0 5px var(--accent-primary)}#progress-bar-labels.svelte-1boq14d.svelte-1boq14d{display:flex}#progress-bar-labels.svelte-1boq14d p.svelte-1boq14d{color:var(--text-secondary);flex:1}#labels.svelte-1boq14d.svelte-1boq14d{display:flex;margin-top:20px;margin-bottom:-10px}@media only screen and (max-width: 800px){main.svelte-1boq14d.svelte-1boq14d{transform:none;padding:10px}#content.svelte-1boq14d.svelte-1boq14d{margin-left:0;margin-bottom:0}h1.svelte-1boq14d.svelte-1boq14d{font-size:var(--fsize-text-subheading)}p.svelte-1boq14d.svelte-1boq14d{font-size:var(--fsize-text-small)}}",
  map: null
};
const SkillCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { knowledgeLevel = 0 } = $$props;
  if ($$props.knowledgeLevel === void 0 && $$bindings.knowledgeLevel && knowledgeLevel !== void 0)
    $$bindings.knowledgeLevel(knowledgeLevel);
  $$result.css.add(css$4);
  return `<main data-animate class="svelte-1boq14d"><div id="content" class="svelte-1boq14d"><h1 class="svelte-1boq14d">${slots.title ? slots.title({}) : ``}</h1> <div id="progress-bar-bg" class="svelte-1boq14d"><div id="progress-bar-fg" style="${"width: " + escape(knowledgeLevel, true) + "%;"}" class="svelte-1boq14d"></div></div> <div id="progress-bar-labels" class="svelte-1boq14d" data-svelte-h="svelte-oknh9r"><p style="text-align: left;" class="svelte-1boq14d">BEGINNER</p> <p style="text-align: center;" class="svelte-1boq14d">INTERMEDIATE</p> <p style="text-align: right;" class="svelte-1boq14d">ADVANCED</p></div> <div id="labels" class="svelte-1boq14d">${slots.labels ? slots.labels({}) : ``}</div></div> </main>`;
});
const LogoLabel_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: 'main.svelte-1xk6vlm{display:flex;align-items:center;justify-content:center;padding:15px 20px;font-family:"JetBrains Mono";font-size:var(--fsize-text-body);font-weight:800;letter-spacing:3px;color:var(--text-primary);background-color:var(--background-primary);margin-right:20px;margin-bottom:20px}img.svelte-1xk6vlm{width:28px;height:28px;margin-right:15px}@media only screen and (max-width: 800px){main.svelte-1xk6vlm{padding:10px 15px;margin-bottom:10px;margin-right:10px}}',
  map: null
};
const LogoLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { logoImage = "" } = $$props;
  let { text = "" } = $$props;
  if ($$props.logoImage === void 0 && $$bindings.logoImage && logoImage !== void 0)
    $$bindings.logoImage(logoImage);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$3);
  return `<main class="svelte-1xk6vlm"><img${add_attribute("src", logoImage, 0)} alt="" class="svelte-1xk6vlm"> <p>${escape(text.toUpperCase())}</p> </main>`;
});
const skills = [
  {
    name: "Programming & Software Development",
    knowledgeLevel: 85,
    labels: [
      "python",
      "java",
      "git",
      "intellij",
      "vscode",
      "bash"
    ]
  },
  {
    name: "Web Development",
    knowledgeLevel: 60,
    labels: [
      "html",
      "css",
      "javascript",
      "typescript",
      "svelte"
    ]
  },
  {
    name: "Backend Development",
    knowledgeLevel: 80,
    labels: [
      "spring",
      "database Integration",
      "junit",
      "swagger",
      "docker",
      "prometheus"
    ]
  },
  {
    name: "Robotics & Automation",
    knowledgeLevel: 75,
    labels: [
      "arduino",
      "raspberry pi",
      "c",
      "opencv",
      "tensorflow"
    ]
  }
];
const skillsJSON = {
  skills
};
const SkillsSection_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "main.svelte-1l957pi{display:flex;flex-direction:column;width:80vw;border-left:3px solid var(--accent-primary)}#dot.svelte-1l957pi{position:relative;left:-12px;top:150px;width:20px;height:20px;transform:rotate(45deg);background-color:var(--accent-primary)}#title-block.svelte-1l957pi{margin-left:75px;margin-top:100px;margin-bottom:50px}#title-name.svelte-1l957pi{font-size:var(--fsize-title);margin-top:-20px;margin-left:-3px}#title-sub.svelte-1l957pi{font-size:var(--fsize-text-body);color:var(--text-secondary)}#cards.svelte-1l957pi{display:flex;flex-wrap:wrap;max-width:100%;margin-left:75px;margin-bottom:200px}@media only screen and (max-width: 800px){main.svelte-1l957pi{width:100vw;border:none}#title-block.svelte-1l957pi{margin-left:10px;padding:20px}#cards.svelte-1l957pi{margin-left:25px;align-items:center;justify-content:center}#dot.svelte-1l957pi{display:none}}",
  map: null
};
const SkillsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let skills2 = skillsJSON.skills;
  $$result.css.add(css$2);
  return `<main class="section svelte-1l957pi" id="skills"><span id="dot" class="svelte-1l957pi"></span> <div id="title-block" class="svelte-1l957pi" data-svelte-h="svelte-11sffj3"><p id="title-name" data-animate class="svelte-1l957pi">skills and interests</p> <p id="title-sub" data-animate class="svelte-1l957pi">my skills &amp; knowledge as a computer enthusiast and topics I&#39;m interested in</p></div> <div id="cards" class="svelte-1l957pi">${each(skills2, (skill) => {
    return `${validate_component(SkillCard, "SkillCard").$$render($$result, { knowledgeLevel: skill.knowledgeLevel }, {}, {
      labels: () => {
        return `<span slot="labels" style="display: flex; flex-wrap: wrap;">${each(skill.labels, (label) => {
          return `${validate_component(LogoLabel, "LogoLabel").$$render(
            $$result,
            {
              logoImage: `/svg/${label}.svg`,
              text: label
            },
            {},
            {}
          )}`;
        })} </span>`;
      },
      title: () => {
        return `<span slot="title">${escape(skill.name)}</span>`;
      }
    })}`;
  })}</div> </main>`;
});
const logo = "/_app/immutable/assets/logo.c8f34ee4.png";
const FooterSection_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "main.svelte-1ebu401{width:80vw;height:600px;display:flex;align-items:center;border-left:3px solid;border-image:linear-gradient(to bottom, var(--accent-primary) 60%, transparent 40%) 1}#dot.svelte-1ebu401{position:relative;left:-12px;top:65px;width:20px;height:20px;transform:rotate(45deg);background-color:var(--accent-primary)}#content.svelte-1ebu401{display:flex;align-items:center;margin-left:25px;margin-top:125px}img.svelte-1ebu401{width:100;height:72px;margin-right:10px}p.svelte-1ebu401{color:var(--text-secondary);margin-top:3px}@media only screen and (max-width: 800px){main.svelte-1ebu401{width:100vw;border:none}#dot.svelte-1ebu401{display:none}}",
  map: null
};
const FooterSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main class="svelte-1ebu401" data-svelte-h="svelte-16rznyl"><span id="dot" class="svelte-1ebu401"></span> <div id="content" class="svelte-1ebu401"><img${add_attribute("src", logo, 0)} alt="logo" class="svelte-1ebu401"> <div id="text"><p class="svelte-1ebu401">Thank you for visiting my portfolio! I&#39;m Meyiwa, a passionate software engineer with a
				keen interest in robotics. This portfolio showcases my journey, projects, and
				accomplishments in the world of technology.</p> <p class="svelte-1ebu401">© Meyiwa Temile | 2023 | All rights reserved | Designed and developed with passion using cutting-edge technologies.</p></div></div> </main>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '[data-animate]{opacity:0;position:relative;left:-30%;transition-duration:350ms;transition-delay:50ms}.animated{opacity:1;left:0}[data-animate="fade"]{opacity:0;position:relative;transition-duration:500ms;transition-delay:100ms}.animated[data-animate="fade"]{opacity:1}main.svelte-8ioyzp{display:flex;flex-direction:column;align-items:center;height:100%;overflow:hidden}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-8ioyzp">${validate_component(HomeSection, "HomeSection").$$render($$result, {}, {}, {})} ${validate_component(ProjectsSection, "ProjectsSection").$$render($$result, {}, {}, {})} ${validate_component(SkillsSection, "SkillsSection").$$render($$result, {}, {}, {})} ${validate_component(FooterSection, "FooterSection").$$render($$result, {}, {}, {})} </main>`;
});
export {
  Page as default
};

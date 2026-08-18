// VENDORED from public/design-systems/prosomnus/_ds_bundle.js — do not hand-edit.
// The only change is the React import below: the bundle was authored for a page
// that loaded React from a CDN into the global scope, and its ~1400 bare
// `React.createElement` calls need that name to resolve under a bundler.
import React from 'react'
/* @ds-bundle: {"format":4,"namespace":"DesignSystem_e5ed69","components":[{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Testimonial","sourcePath":"components/display/Testimonial.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Icon","sourcePath":"components/media/Icon.jsx"}],"sourceHashes":{"brand-guide/bg-shared.jsx":"1151cff7d42c","brand-guide/pages-components.jsx":"afb42362cdab","brand-guide/pages-extra.jsx":"c1721a2f76b8","brand-guide/pages-foundation.jsx":"f151028b2d7f","brand-guide/pages-system.jsx":"ed881d1db5fb","brand-guide/pages.jsx":"a8279cedba3c","components/display/Badge.jsx":"0858b10a1f5d","components/display/Card.jsx":"eeb3aa6c691c","components/display/Stat.jsx":"e2d78526909b","components/display/Tag.jsx":"5509dc4933a7","components/display/Testimonial.jsx":"53e1f06937d7","components/feedback/Alert.jsx":"54572f2252cc","components/feedback/Dialog.jsx":"9b2fb1d88593","components/forms/Button.jsx":"cc90dfe8a44f","components/forms/Checkbox.jsx":"c8e368858d96","components/forms/Input.jsx":"6f3f2b00ccf1","components/forms/Radio.jsx":"359e03f7b89b","components/forms/Select.jsx":"8aabedef73b6","components/forms/Switch.jsx":"dfd37391559e","components/media/Icon.jsx":"9b9bd53c0a3e","homepage/Benefits.jsx":"3bc581056c3b","homepage/FinalCTA.jsx":"cf2323e46733","homepage/Footer.jsx":"23911ba7c9bc","homepage/Hero.jsx":"316655690a0b","homepage/HowItWorks.jsx":"9f5dbdfa7299","homepage/Nav.jsx":"7be715eea86b","homepage/ProviderTrust.jsx":"76b0376626f6","homepage/SocialProof.jsx":"be00d87e0a1b","homepage/Testimonials.jsx":"06c74b1374af","pages/faq/Faq.jsx":"1043f0eaec9c","pages/find-a-provider/FindProvider.jsx":"3fde5c5c8b9a","pages/how-it-works/HowItWorksMore.jsx":"dfb7304e128b","pages/how-it-works/HowItWorksSteps.jsx":"ee2ff2524fce","pages/providers/Providers.jsx":"a3eafc157883","pages/results/Results.jsx":"840b943461bd","shared/PageChrome.jsx":"1b26d263c8b0","ui_kits/patient-site/Comparison.jsx":"592b59776331","ui_kits/patient-site/Coverage.jsx":"b0e153fdc754","ui_kits/patient-site/Proof.jsx":"fd59ef6e5691","ui_kits/patient-site/SiteFooter.jsx":"127b83ae5521","ui_kits/patient-site/SiteHero.jsx":"79c8990ca2df","ui_kits/patient-site/SiteHowItWorks.jsx":"fb5bdae0e72a","ui_kits/patient-site/SiteNav.jsx":"b4c26f24aa71","ui_kits/provider-portal/CaseDetail.jsx":"6a10dafee47b","ui_kits/provider-portal/Dashboard.jsx":"5360538150c6","ui_kits/provider-portal/NewRx.jsx":"d354b0df1509","ui_kits/provider-portal/Sidebar.jsx":"707ea4e3673f","ui_kits/provider-portal/Topbar.jsx":"38fbadd01c09","ui_kits/provider-portal/data.jsx":"9fc5220ac0e5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_e5ed69 = window.DesignSystem_e5ed69 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// brand-guide/bg-shared.jsx
try { (() => {
// Shared helpers + page registry for the ProSomnus Brand Guide interior pages.
window.BG = window.BG || {};
window.BG.pages = window.BG.pages || {};
(function () {
  const {
    Icon
  } = window.DesignSystem_e5ed69;

  // Page header band (navy "night" easing into the light "morning" body)
  window.BG.PageHeader = function PageHeader({
    num,
    label,
    eyebrow,
    title,
    intro
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ihead"
    }, /*#__PURE__*/React.createElement("div", {
      className: "glow",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "wm",
      "aria-hidden": "true"
    }, num), /*#__PURE__*/React.createElement("div", {
      className: "hzn",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "eyebrow2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "d"
    }), " ", eyebrow || `${num} · ${label}`), /*#__PURE__*/React.createElement("h1", null, title), intro && /*#__PURE__*/React.createElement("p", {
      className: "intro"
    }, intro));
  };
  window.BG.Section = function Section({
    k,
    title,
    sub,
    children
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "isec"
    }, /*#__PURE__*/React.createElement("div", {
      className: "isecHead"
    }, k && /*#__PURE__*/React.createElement("span", {
      className: "k"
    }, k), /*#__PURE__*/React.createElement("h2", null, title), sub && /*#__PURE__*/React.createElement("span", {
      className: "sub"
    }, sub)), children);
  };

  // Do / Don't paired card
  window.BG.DoDont = function DoDont({
    good,
    children,
    title
  }) {
    const c = good ? {
      fg: 'var(--success)',
      bg: 'var(--success-bg)',
      ic: 'check',
      word: 'Do'
    } : {
      fg: 'var(--error)',
      bg: 'var(--error-bg)',
      ic: 'x',
      word: "Don't"
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '12px 18px',
        background: c.bg,
        color: c.fg,
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '.04em',
        textTransform: 'uppercase'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.ic,
      size: 16
    }), " ", title || c.word), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 18px',
        fontSize: 15,
        lineHeight: 1.6,
        color: 'var(--text-body)'
      }
    }, children));
  };

  // token chip: label + mono value
  window.BG.Token = function Token({
    name,
    value
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        padding: '9px 12px',
        background: 'var(--surface-soft)',
        borderRadius: 'var(--radius-sm)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        color: 'var(--text-heading)'
      }
    }, name), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        color: 'var(--text-muted)'
      }
    }, value));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "brand-guide/bg-shared.jsx", error: String((e && e.message) || e) }); }

// brand-guide/pages-components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Brand Guide pages 09–12: Buttons, Cards, Forms & Inputs, Motion
(function () {
  const {
    Icon,
    Card,
    Badge,
    Button,
    Input,
    Select,
    Checkbox,
    Radio,
    Switch,
    Testimonial,
    Alert,
    Stat
  } = window.DesignSystem_e5ed69;
  const {
    PageHeader,
    Section,
    DoDont
  } = window.BG;

  /* ---------------- 09 BUTTONS ---------------- */
  window.BG.pages['09'] = function Buttons() {
    return /*#__PURE__*/React.createElement("div", {
      className: "ipage"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      num: "09",
      label: "Buttons",
      title: "Clear actions, one hero",
      intro: "Amber is the primary action and appears once per view. Blue, outlined, and ghost carry everything else in descending emphasis."
    }), /*#__PURE__*/React.createElement("div", {
      className: "ibody"
    }, /*#__PURE__*/React.createElement(Section, {
      k: "9.1",
      title: "Variants"
    }, /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 28,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Find a Provider"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Save changes"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 16
      })
    }, "Download"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost"
    }, "Cancel")), /*#__PURE__*/React.createElement("div", {
      className: "g4",
      style: {
        marginTop: 16
      }
    }, [['Accent', 'The one primary CTA (amber)'], ['Primary', 'Standard actions (blue)'], ['Secondary', 'Lower emphasis (outlined)'], ['Ghost', 'Tertiary / inline']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      className: "panelSoft",
      style: {
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-heading)'
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, d))))), /*#__PURE__*/React.createElement(Section, {
      k: "9.2",
      title: "Sizes"
    }, /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 28,
        display: 'flex',
        gap: 16,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm"
    }, "Small"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "md"
    }, "Medium"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg"
    }, "Large"))), /*#__PURE__*/React.createElement(Section, {
      k: "9.3",
      title: "States"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g4"
    }, [['Default', {}], ['Disabled', {
      disabled: true
    }]].map(([label, props]) => /*#__PURE__*/React.createElement("div", {
      key: label,
      className: "panel",
      style: {
        padding: 22,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, _extends({
      variant: "accent"
    }, props), "Book now"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 12
      }
    }, label))), /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 22,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Hover / press"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 12
      }
    }, "Darkens + 0.97 scale")), /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 22,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true
    }, "Full width"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 12
      }
    }, "fullWidth")))), /*#__PURE__*/React.createElement(Section, {
      k: "9.4",
      title: "Rules"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, /*#__PURE__*/React.createElement(DoDont, {
      good: true,
      title: "One amber per view"
    }, "Reserve the amber accent for the single most important action on the screen."), /*#__PURE__*/React.createElement(DoDont, {
      title: "Competing CTAs"
    }, "Never place two amber buttons side by side \u2014 pair amber with a secondary or ghost.")))));
  };

  /* ---------------- 10 CARDS ---------------- */
  window.BG.pages['10'] = function Cards() {
    return /*#__PURE__*/React.createElement("div", {
      className: "ipage"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      num: "10",
      label: "Cards",
      title: "Soft surfaces",
      intro: "Cards are the system's base container \u2014 white, 12px radius, gentle shadow, generous padding. They lift on hover to invite interaction."
    }), /*#__PURE__*/React.createElement("div", {
      className: "ibody"
    }, /*#__PURE__*/React.createElement(Section, {
      k: "10.1",
      title: "Default & hover-lift"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 20,
        marginBottom: 8
      }
    }, "Custom-fit comfort"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        lineHeight: 1.65,
        color: 'var(--text-body)'
      }
    }, "Worn like a retainer, precision-milled for your mouth \u2014 no masks, hoses, or noise.")), /*#__PURE__*/React.createElement(Card, {
      hoverLift: true
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 20,
        marginBottom: 8
      }
    }, "Hover me"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        lineHeight: 1.65,
        color: 'var(--text-body)'
      }
    }, "With ", /*#__PURE__*/React.createElement("span", {
      className: "mono"
    }, "hoverLift"), ", the card rises 4px and deepens its shadow.")))), /*#__PURE__*/React.createElement(Section, {
      k: "10.2",
      title: "Testimonial card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, /*#__PURE__*/React.createElement(Testimonial, {
      rating: 5,
      quote: "I finally sleep through the night \u2014 and so does my husband.",
      name: "Dana R.",
      role: "Patient \xB7 2 years"
    }), /*#__PURE__*/React.createElement(Testimonial, {
      rating: 5,
      quote: "Compliance is night and day versus CPAP. My patients actually wear it.",
      name: "Dr. Elena Ruiz",
      role: "Sleep physician"
    }))), /*#__PURE__*/React.createElement(Section, {
      k: "10.3",
      title: "Provider card",
      sub: "Composed from primitives"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 52,
        height: 52,
        borderRadius: '50%',
        background: 'var(--blue-50)',
        color: 'var(--blue-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontFamily: 'var(--font-heading)'
      }
    }, "ER"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: 17,
        color: 'var(--text-heading)'
      }
    }, "Dr. Elena Ruiz"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--color-primary)',
        fontWeight: 500
      }
    }, "Sleep Physician"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginTop: 12,
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        color: 'var(--amber-500)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "star",
      size: 15,
      style: {
        fill: 'var(--amber-500)'
      }
    }), /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-heading)'
      }
    }, "4.9")), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 14
    }), " 1.2 mi")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "wellness",
      size: "sm"
    }, "Aetna"), /*#__PURE__*/React.createElement(Badge, {
      tone: "wellness",
      size: "sm"
    }, "Medicare")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      fullWidth: true,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 15
      })
    }, "Call"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm",
      fullWidth: true
    }, "Book"))), /*#__PURE__*/React.createElement("div", {
      className: "panelSoft",
      style: {
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 17,
        marginBottom: 10
      }
    }, "Anatomy"), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        paddingLeft: 18,
        fontSize: 14.5,
        lineHeight: 1.8,
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("li", null, "Avatar + name + specialty"), /*#__PURE__*/React.createElement("li", null, "Rating & distance meta"), /*#__PURE__*/React.createElement("li", null, "Insurance ", /*#__PURE__*/React.createElement("span", {
      className: "mono"
    }, "Badge"), "s"), /*#__PURE__*/React.createElement("li", null, "Call (secondary) + Book (accent)")))))));
  };

  /* ---------------- 11 FORMS & INPUTS ---------------- */
  window.BG.pages['11'] = function Forms() {
    return /*#__PURE__*/React.createElement("div", {
      className: "ipage"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      num: "11",
      label: "Forms & Inputs",
      title: "Calm, clear input",
      intro: "Inputs share an 8px radius and a soft focus ring. Errors are stated plainly and kindly \u2014 never alarming red walls."
    }), /*#__PURE__*/React.createElement("div", {
      className: "ibody"
    }, /*#__PURE__*/React.createElement(Section, {
      k: "11.1",
      title: "Text fields"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 22
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "you@example.com",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 16
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)',
        marginTop: 10
      }
    }, "Default")), /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 22
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "ZIP code",
      defaultValue: "94063",
      hint: "We use this to find nearby providers."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)',
        marginTop: 10
      }
    }, "With hint")), /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 22
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      defaultValue: "dana@sleep",
      error: "Please enter a valid email address."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)',
        marginTop: 10
      }
    }, "Error")))), /*#__PURE__*/React.createElement(Section, {
      k: "11.2",
      title: "Selection controls"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 22
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Insurance",
      options: ['Aetna', 'Cigna', 'Medicare', 'VA benefits']
    })), /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 22,
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: "I agree to the privacy policy",
      defaultChecked: true
    }), /*#__PURE__*/React.createElement(Radio, {
      options: ['Patient', 'Dentist', 'Physician'],
      defaultValue: "Patient"
    })), /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 22,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Switch, {
      label: "Email reminders",
      defaultChecked: true
    }), /*#__PURE__*/React.createElement(Switch, {
      label: "SMS reminders"
    })))), /*#__PURE__*/React.createElement(Section, {
      k: "11.3",
      title: "Validation & feedback"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: "You're covered"
    }, "ProSomnus is in network with your plan."), /*#__PURE__*/React.createElement(Alert, {
      tone: "error",
      title: "Something went wrong"
    }, "We couldn't verify your insurance. Please try again."))), /*#__PURE__*/React.createElement(Section, {
      k: "11.4",
      title: "Rules"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, /*#__PURE__*/React.createElement(DoDont, {
      good: true,
      title: "Label everything"
    }, "Every field has a visible label and, where useful, a short hint beneath it."), /*#__PURE__*/React.createElement(DoDont, {
      title: "Placeholder as label"
    }, "Never rely on placeholder text alone \u2014 it disappears on input and fails accessibility.")))));
  };

  /* ---------------- 12 MOTION ---------------- */
  window.BG.pages['12'] = function Motion() {
    const [replay, setReplay] = React.useState(0);
    return /*#__PURE__*/React.createElement("div", {
      className: "ipage"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      num: "12",
      label: "Motion",
      title: "Motion that reassures",
      intro: "Movement guides attention, never distracts. Soft ease-outs, short durations, and full respect for reduced-motion preferences."
    }), /*#__PURE__*/React.createElement("div", {
      className: "ibody"
    }, /*#__PURE__*/React.createElement(Section, {
      k: "12.1",
      title: "Timing tokens"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g4"
    }, [['Fast', '150ms', 'hover, press'], ['Base', '250ms', 'toggles, reveals'], ['Slow', '450ms', 'page & count-up'], ['Ease', 'cubic-bezier(.16,1,.3,1)', 'soft ease-out']].map(([n, v, u]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      className: "panelSoft",
      style: {
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--text-heading)'
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        color: 'var(--color-primary)',
        marginTop: 6,
        fontSize: 11.5
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-muted)',
        marginTop: 6
      }
    }, u))))), /*#__PURE__*/React.createElement(Section, {
      k: "12.2",
      title: "Signature motions",
      sub: "Hover the cards"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, /*#__PURE__*/React.createElement(Card, {
      hoverLift: true
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mouse-pointer-click",
      size: 22,
      color: "var(--color-primary)"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 18,
        margin: '12px 0 6px'
      }
    }, "Hover-lift"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: 1.55,
        color: 'var(--text-body)'
      }
    }, "translateY(-4px) + deeper shadow \xB7 250ms")), /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 24
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trending-up",
      size: 22,
      color: "var(--color-primary)"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 18,
        margin: '12px 0 6px'
      }
    }, "Count-up"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: 1.55,
        color: 'var(--text-body)'
      }
    }, "Stats animate from 0 on scroll-in \xB7 ~1.6s")), /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 24
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-down-to-line",
      size: 22,
      color: "var(--color-primary)"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 18,
        margin: '12px 0 6px'
      }
    }, "Scroll reveal"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: 1.55,
        color: 'var(--text-body)'
      }
    }, "Fade + 16px rise as sections enter \xB7 1s")))), /*#__PURE__*/React.createElement(Section, {
      k: "12.3",
      title: "Count-up in action"
    }, /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 32
      },
      key: replay
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, /*#__PURE__*/React.createElement(Stat, {
      value: 96,
      suffix: "%",
      label: "prefer ProSomnus over CPAP"
    }), /*#__PURE__*/React.createElement(Stat, {
      value: 200000,
      suffix: "+",
      label: "patients treated"
    }), /*#__PURE__*/React.createElement(Stat, {
      value: 94,
      suffix: "%",
      label: "continue at one year"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "rotate-ccw",
        size: 15
      }),
      onClick: () => setReplay(r => r + 1)
    }, "Replay")))), /*#__PURE__*/React.createElement(Section, {
      k: "12.4",
      title: "Reduced motion"
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "info",
      title: "Always honored"
    }, "Under ", /*#__PURE__*/React.createElement("span", {
      className: "mono"
    }, "prefers-reduced-motion"), ", durations collapse to 0, count-ups jump to final values, and scroll reveals show content immediately."))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "brand-guide/pages-components.jsx", error: String((e && e.message) || e) }); }

// brand-guide/pages-extra.jsx
try { (() => {
// Brand Guide pages 13–14: Email, Patterns
(function () {
  const {
    Icon,
    Card,
    Badge,
    Button
  } = window.DesignSystem_e5ed69;
  const {
    PageHeader,
    Section,
    DoDont
  } = window.BG;

  /* ---------------- 13 EMAIL ---------------- */
  window.BG.pages['13'] = function Email() {
    return /*#__PURE__*/React.createElement("div", {
      className: "ipage"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      num: "13",
      label: "Email",
      title: "Branded email",
      intro: "Emails carry the same calm: a navy header, warm body copy, one amber action, and a quiet footer. Built for real inbox widths (600px)."
    }), /*#__PURE__*/React.createElement("div", {
      className: "ibody"
    }, /*#__PURE__*/React.createElement(Section, {
      k: "13.1",
      title: "Patient template"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2",
      style: {
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 600,
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'linear-gradient(120deg,#0C447C,#06618B)',
        padding: '22px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-logo-white.svg",
      alt: "ProSomnus",
      style: {
        height: 24
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 12,
        letterSpacing: '.1em',
        textTransform: 'uppercase'
      }
    }, "Sleep better")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '32px 28px',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 26,
        lineHeight: 1.2,
        color: 'var(--text-heading)'
      }
    }, "You're one step from better sleep, Dana."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15.5,
        lineHeight: 1.7,
        color: 'var(--text-body)',
        marginTop: 14
      }
    }, "Good news \u2014 ProSomnus is covered by your plan. Your next step is a quick visit with a provider near you. No masks, no hoses, no noise."), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '24px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        background: 'var(--amber-500)',
        color: 'var(--gray-900)',
        fontWeight: 600,
        fontSize: 15,
        padding: '13px 26px',
        borderRadius: 'var(--radius-sm)'
      }
    }, "Find a Provider")), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 18,
        display: 'flex',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: 22,
        color: 'var(--color-primary-strong)'
      }
    }, "96%"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, "prefer it to CPAP")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: 22,
        color: 'var(--color-primary-strong)'
      }
    }, "$0"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, "typical cost with coverage")))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 28px',
        background: 'var(--gray-900)',
        color: 'rgba(255,255,255,0.6)',
        fontSize: 12,
        lineHeight: 1.6
      }
    }, "ProSomnus Sleep Technologies \xB7 You received this because you checked your coverage.", /*#__PURE__*/React.createElement("br", null), "Unsubscribe \xB7 Privacy")), /*#__PURE__*/React.createElement("div", {
      className: "panelSoft",
      style: {
        padding: 26
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 17,
        marginBottom: 12
      }
    }, "Structure"), /*#__PURE__*/React.createElement("ol", {
      style: {
        margin: 0,
        paddingLeft: 20,
        fontSize: 14.5,
        lineHeight: 1.9,
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("li", null, "Navy header, reversed logo"), /*#__PURE__*/React.createElement("li", null, "Serif headline, personalized"), /*#__PURE__*/React.createElement("li", null, "Warm, concise body copy"), /*#__PURE__*/React.createElement("li", null, "One amber CTA button"), /*#__PURE__*/React.createElement("li", null, "Two proof points, max"), /*#__PURE__*/React.createElement("li", null, "Dark footer with legal + unsubscribe")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "Width 600px \xB7 single column \xB7 web-safe fallbacks for Newsreader/Manrope.")))), /*#__PURE__*/React.createElement(Section, {
      k: "13.2",
      title: "Rules"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, /*#__PURE__*/React.createElement(DoDont, {
      good: true,
      title: "One action"
    }, "A single amber CTA and at most two proof points keeps the message calm and clear."), /*#__PURE__*/React.createElement(DoDont, {
      title: "Wall of buttons"
    }, "No stacked competing CTAs, no rainbow of links, no dense paragraphs.")))));
  };

  /* ---------------- 14 PATTERNS ---------------- */
  window.BG.pages['14'] = function Patterns() {
    const patterns = [['panels-top-left', 'Immersive hero', 'Deep-navy full-bleed band, reversed logo, serif headline, amber CTA. Opens patient pages.'], ['bar-chart-3', 'Proof strip', 'Count-up stats in a row — 96%, 200k+, coverage — right after the hero.'], ['layout-grid', 'Benefit trio', 'Three hover-lift cards with an icon, title, and one line each.'], ['list-ordered', 'Three-step how-it-works', 'Numbered steps with a simple diagram; ends in the primary CTA.'], ['quote', 'Testimonial wall', 'Masonry of quote cards with rating, name, and role for social proof.'], ['megaphone', 'Closing CTA band', 'Navy gradient panel, one reassuring line, single amber action.']];
    return /*#__PURE__*/React.createElement("div", {
      className: "ipage"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      num: "14",
      label: "Patterns",
      title: "Reusable page patterns",
      intro: "Pages are assembled from a small kit of proven sections. Reach for these before inventing something new."
    }), /*#__PURE__*/React.createElement("div", {
      className: "ibody"
    }, /*#__PURE__*/React.createElement(Section, {
      k: "14.1",
      title: "The pattern kit"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, patterns.map(([ic, t, b]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      className: "panel",
      style: {
        padding: 22
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 42,
        height: 42,
        borderRadius: 'var(--radius-sm)',
        background: 'var(--blue-50)',
        color: 'var(--color-primary)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 21
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 17,
        margin: '12px 0 6px'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: 1.6,
        color: 'var(--text-body)'
      }
    }, b))))), /*#__PURE__*/React.createElement(Section, {
      k: "14.2",
      title: "Page recipe",
      sub: "Patient landing"
    }, /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 26,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, ['Immersive hero', 'Proof strip', 'Benefit trio', 'Three-step how-it-works', 'Testimonial wall', 'Closing CTA band', 'Footer'].map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: s,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        color: 'var(--color-primary)',
        width: 26
      }
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 40,
        background: i === 0 ? 'linear-gradient(120deg,#0C447C,#06618B)' : 'var(--surface-soft)',
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        fontSize: 14,
        fontWeight: 500,
        color: i === 0 ? '#fff' : 'var(--text-heading)'
      }
    }, s))))), /*#__PURE__*/React.createElement(Section, {
      k: "14.3",
      title: "Do's & Don'ts summary"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, /*#__PURE__*/React.createElement(DoDont, {
      good: true,
      title: "Do"
    }, /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        paddingLeft: 18,
        lineHeight: 1.9
      }
    }, /*#__PURE__*/React.createElement("li", null, "Lead with feeling, back with proof"), /*#__PURE__*/React.createElement("li", null, "One amber CTA per view"), /*#__PURE__*/React.createElement("li", null, "Generous whitespace & soft shadows"), /*#__PURE__*/React.createElement("li", null, "Serif heads, sans body"), /*#__PURE__*/React.createElement("li", null, "Honor reduced-motion"))), /*#__PURE__*/React.createElement(DoDont, {
      title: "Don't"
    }, /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        paddingLeft: 18,
        lineHeight: 1.9
      }
    }, /*#__PURE__*/React.createElement("li", null, "Clinical jargon or cold stock photos"), /*#__PURE__*/React.createElement("li", null, "Amber as decoration"), /*#__PURE__*/React.createElement("li", null, "Competing CTAs"), /*#__PURE__*/React.createElement("li", null, "Hard borders or harsh shadows"), /*#__PURE__*/React.createElement("li", null, "Decorative stats with no meaning"))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 52,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(120deg,#0A2038,#0C447C 55%,#06618B)',
        padding: 'clamp(40px,6vw,64px)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        width: 360,
        height: 360,
        borderRadius: '50%',
        top: -140,
        right: -60,
        background: 'radial-gradient(circle, rgba(0,154,217,0.4), transparent 68%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-logo-white.svg",
      alt: "ProSomnus",
      style: {
        height: 30,
        marginBottom: 16
      }
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 28,
        color: '#fff'
      }
    }, "Build calm. Build trust. Build sleep."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.8)',
        maxWidth: 460,
        margin: '12px auto 0'
      }
    }, "Everything in this guide serves one feeling: the relief of a good night's rest.")))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "brand-guide/pages-extra.jsx", error: String((e && e.message) || e) }); }

// brand-guide/pages-foundation.jsx
try { (() => {
// Brand Guide pages 01–04: Foundation, Logo, Color, Type
(function () {
  const {
    Icon,
    Card,
    Badge,
    Button
  } = window.DesignSystem_e5ed69;
  const {
    PageHeader,
    Section,
    DoDont,
    Token
  } = window.BG;

  /* ---------------- 01 FOUNDATION ---------------- */
  window.BG.pages['01'] = function Foundation() {
    const principles = [['feather', 'Calm over clever', 'Every screen should lower the heart rate. Generous space, soft shadows, no visual shouting.'], ['heart-handshake', 'Human, not clinical', 'We speak like a trusted person, not a device manual. Warmth is a feature, not decoration.'], ['shield-check', 'Earned trust', 'Proof, coverage, and credentials are shown plainly — reassurance you can verify.'], ['accessibility', 'Care for everyone', 'Legible type, strong contrast, large targets, motion that respects preferences.']];
    return /*#__PURE__*/React.createElement("div", {
      className: "ipage"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      num: "01",
      label: "Foundation",
      title: "What ProSomnus stands for",
      intro: "Before a single color or component, the brand is a promise: restful sleep, made human. These principles guide every decision in this system."
    }), /*#__PURE__*/React.createElement("div", {
      className: "ibody"
    }, /*#__PURE__*/React.createElement(Section, {
      k: "1.1",
      title: "Brand story"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2",
      style: {
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "prose"
    }, /*#__PURE__*/React.createElement("p", null, "ProSomnus makes custom-fit oral appliances that treat sleep apnea \u2014 a comfortable, insurance-covered alternative to the CPAP machine. No masks. No hoses. No noise."), /*#__PURE__*/React.createElement("p", null, "For hundreds of thousands of people, that means finally sleeping through the night \u2014 and finally wanting to. Our job as a brand is to make that relief feel close, credible, and calm.")), /*#__PURE__*/React.createElement("div", {
      className: "panelSoft",
      style: {
        padding: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--color-primary)'
      }
    }, "Mission"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontSize: 24,
        lineHeight: 1.3,
        color: 'var(--text-heading)',
        margin: '12px 0 0'
      }
    }, "Help people breathe easier and sleep better \u2014 comfortably, and without the machine.")))), /*#__PURE__*/React.createElement(Section, {
      k: "1.2",
      title: "Two audiences, one voice",
      sub: "Primary & secondary"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Badge, {
      tone: "primary"
    }, "Primary"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 22,
        margin: '14px 0 8px'
      }
    }, "Patients"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        lineHeight: 1.65,
        color: 'var(--text-body)'
      }
    }, "People with sleep apnea seeking a CPAP alternative. Speak to relief, comfort, and everyday life \u2014 reassuring and human. Lead with feeling, back it with proof.")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Badge, {
      tone: "wellness"
    }, "Secondary"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 22,
        margin: '14px 0 8px'
      }
    }, "Providers"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        lineHeight: 1.65,
        color: 'var(--text-body)'
      }
    }, "Dentists & sleep physicians who prescribe. Speak to evidence, adherence, and workflow \u2014 credible and efficient, but never cold.")))), /*#__PURE__*/React.createElement(Section, {
      k: "1.3",
      title: "Design principles"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, principles.map(([ic, t, b]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      className: "panel",
      style: {
        padding: 22,
        display: 'flex',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 46,
        flexShrink: 0,
        borderRadius: 'var(--radius-md)',
        background: 'var(--blue-50)',
        color: 'var(--color-primary)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 23
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 18,
        marginBottom: 6
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14.5,
        lineHeight: 1.6,
        color: 'var(--text-body)'
      }
    }, b))))))));
  };

  /* ---------------- 02 LOGO ---------------- */
  window.BG.pages['02'] = function Logo() {
    return /*#__PURE__*/React.createElement("div", {
      className: "ipage"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      num: "02",
      label: "Logo",
      title: "The mark",
      intro: "The ProSomnus wordmark pairs a crescent \u2014 a quiet nod to sleep \u2014 with a confident, trustworthy wordmark. Protect it with space and use it consistently."
    }), /*#__PURE__*/React.createElement("div", {
      className: "ibody"
    }, /*#__PURE__*/React.createElement(Section, {
      k: "2.1",
      title: "Primary lockup"
    }, /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--surface-soft)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-logo.svg",
      alt: "ProSomnus primary logo",
      style: {
        height: 64
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "g3",
      style: {
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 28,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-mark.svg",
      alt: "ProSomnus mark",
      style: {
        height: 52
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute'
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 28,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--blue-700)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-logo-white.svg",
      alt: "ProSomnus reversed",
      style: {
        height: 40
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "panelSoft",
      style: {
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-heading)'
      }
    }, "Files"), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        color: 'var(--text-muted)'
      }
    }, "prosomnus-logo.svg"), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        color: 'var(--text-muted)'
      }
    }, "prosomnus-logo.png"), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        color: 'var(--text-muted)'
      }
    }, "prosomnus-logo-white.svg"), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        color: 'var(--text-muted)'
      }
    }, "prosomnus-mark.svg")))), /*#__PURE__*/React.createElement(Section, {
      k: "2.2",
      title: "Clear space & minimum size"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2",
      style: {
        alignItems: 'stretch'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        padding: 26,
        outline: '1px dashed var(--border-default)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-logo.svg",
      alt: "Clear space diagram",
      style: {
        height: 44,
        display: 'block'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        bottom: 16,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "Clear space = the height of the crescent mark on all sides.")), /*#__PURE__*/React.createElement("div", {
      className: "panelSoft",
      style: {
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-logo.svg",
      alt: "",
      style: {
        height: 24
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        color: 'var(--text-muted)'
      }
    }, "min 140px wide (digital)")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-mark.svg",
      alt: "",
      style: {
        height: 22
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        color: 'var(--text-muted)'
      }
    }, "mark min 20px")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: 1.6,
        color: 'var(--text-body)'
      }
    }, "Never place the logo smaller than these sizes; legibility of the wordmark comes first.")))), /*#__PURE__*/React.createElement(Section, {
      k: "2.3",
      title: "Misuse"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g4"
    }, [['stretch', 'Don\u2019t stretch or distort'], ['palette', 'Don\u2019t recolor the mark'], ['sparkles', 'Don\u2019t add effects or shadows'], ['type', 'Don\u2019t rebuild it in another font']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      className: "panel",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 92,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--surface-soft)',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-mark.svg",
      alt: "",
      style: {
        height: 34,
        opacity: 0.5,
        filter: ic === 'palette' ? 'hue-rotate(120deg) saturate(3)' : ic === 'stretch' ? 'none' : 'none',
        transform: ic === 'stretch' ? 'scaleX(1.8)' : 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: 'var(--error-bg)',
        color: 'var(--error)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 14
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 14px',
        fontSize: 13.5,
        color: 'var(--text-body)'
      }
    }, t)))))));
  };

  /* ---------------- 03 COLOR ---------------- */
  window.BG.pages['03'] = function Color() {
    const Swatch = ({
      v,
      name,
      hex,
      dark
    }) => /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 92,
        background: v
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-heading)'
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        color: 'var(--text-muted)',
        marginTop: 3
      }
    }, hex)));
    return /*#__PURE__*/React.createElement("div", {
      className: "ipage"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      num: "03",
      label: "Color",
      title: "A palette drawn from the logo",
      intro: "Royal blue anchors the system; cyan supports it. Amber is the single warm accent \u2014 reserved exclusively for primary calls to action."
    }), /*#__PURE__*/React.createElement("div", {
      className: "ibody"
    }, /*#__PURE__*/React.createElement(Section, {
      k: "3.1",
      title: "Primary \u2014 Royal blue",
      sub: "Trust & calm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g4"
    }, /*#__PURE__*/React.createElement(Swatch, {
      v: "var(--blue-50)",
      name: "Blue 50",
      hex: "#EAF1FA"
    }), /*#__PURE__*/React.createElement(Swatch, {
      v: "var(--blue-100)",
      name: "Blue 100",
      hex: "#CFE0F2"
    }), /*#__PURE__*/React.createElement(Swatch, {
      v: "var(--blue-500)",
      name: "Blue 500 \xB7 Primary",
      hex: "#2261AE"
    }), /*#__PURE__*/React.createElement(Swatch, {
      v: "var(--blue-700)",
      name: "Blue 700 \xB7 Dark",
      hex: "#16457E"
    }))), /*#__PURE__*/React.createElement(Section, {
      k: "3.2",
      title: "Secondary \u2014 Cyan",
      sub: "Wellness & reassurance"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g4"
    }, /*#__PURE__*/React.createElement(Swatch, {
      v: "var(--cyan-50)",
      name: "Cyan 50",
      hex: "#E1F4FC"
    }), /*#__PURE__*/React.createElement(Swatch, {
      v: "var(--cyan-100)",
      name: "Cyan 100",
      hex: "#BFE7F8"
    }), /*#__PURE__*/React.createElement(Swatch, {
      v: "var(--cyan-500)",
      name: "Cyan 500 \xB7 Secondary",
      hex: "#009AD9"
    }), /*#__PURE__*/React.createElement(Swatch, {
      v: "var(--cyan-700)",
      name: "Cyan 700 \xB7 Dark",
      hex: "#06618B"
    }))), /*#__PURE__*/React.createElement(Section, {
      k: "3.3",
      title: "Accent & status",
      sub: "Amber = CTA only"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g4"
    }, /*#__PURE__*/React.createElement(Swatch, {
      v: "var(--amber-500)",
      name: "Amber 500 \xB7 Accent",
      hex: "#FBBF24"
    }), /*#__PURE__*/React.createElement(Swatch, {
      v: "var(--success)",
      name: "Success",
      hex: "#059669"
    }), /*#__PURE__*/React.createElement(Swatch, {
      v: "var(--error)",
      name: "Error",
      hex: "#DC2626"
    }), /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'var(--gray-100)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'var(--gray-500)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'var(--gray-900)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-heading)'
      }
    }, "Neutrals"), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        color: 'var(--text-muted)',
        marginTop: 3
      }
    }, "#F3F4F6 \u2192 #1F2937"))))), /*#__PURE__*/React.createElement(Section, {
      k: "3.4",
      title: "Usage rules"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, /*#__PURE__*/React.createElement(DoDont, {
      good: true,
      title: "Amber for the one primary action"
    }, "Use amber for the single most important CTA on a view \u2014 \"Find a Provider,\" \"Book.\" One per screen."), /*#__PURE__*/React.createElement(DoDont, {
      title: "Amber as decoration"
    }, "Never use amber for backgrounds, icons, borders, or a second competing button. It loses its meaning.")))));
  };

  /* ---------------- 04 TYPE ---------------- */
  window.BG.pages['04'] = function Type() {
    const scale = [['H1', '48 / 600', 'Sleep, restored', 48], ['H2', '32 / 600', 'A better way to breathe', 32], ['H3', '24 / 600', 'Custom-fit for comfort', 24], ['H4', '20 / 500', 'Covered by your insurance', 20]];
    return /*#__PURE__*/React.createElement("div", {
      className: "ipage"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      num: "04",
      label: "Type",
      title: "Serif warmth, sans clarity",
      intro: "Newsreader (a modern serif) leads with editorial warmth; Manrope carries body and UI with clean legibility. Substitutes for the licensed Utopia + Univers."
    }), /*#__PURE__*/React.createElement("div", {
      className: "ibody"
    }, /*#__PURE__*/React.createElement(Section, {
      k: "4.1",
      title: "Typefaces"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontSize: 52,
        color: 'var(--text-heading)',
        lineHeight: 1
      }
    }, "Aa"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        fontFamily: 'var(--font-heading)',
        fontSize: 20,
        color: 'var(--text-heading)'
      }
    }, "Newsreader"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, "Headings \xB7 400\u2013700 \xB7 \u2248 Utopia"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontSize: 22,
        color: 'var(--text-body)',
        marginTop: 14
      }
    }, "ABCDEFGabcdefg 0123456789")), /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 52,
        fontWeight: 700,
        color: 'var(--text-heading)',
        lineHeight: 1
      }
    }, "Aa"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        fontFamily: 'var(--font-heading)',
        fontSize: 20,
        color: 'var(--text-heading)'
      }
    }, "Manrope"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, "Body & UI \xB7 400\u2013800 \xB7 \u2248 Univers"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 22,
        color: 'var(--text-body)',
        marginTop: 14
      }
    }, "ABCDEFGabcdefg 0123456789")))), /*#__PURE__*/React.createElement(Section, {
      k: "4.2",
      title: "Type scale"
    }, /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: '8px 28px'
      }
    }, scale.map(([tag, spec, sample, px]) => /*#__PURE__*/React.createElement("div", {
      key: tag,
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 20,
        padding: '18px 0',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        color: 'var(--color-primary)',
        width: 34
      }
    }, tag), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: px >= 24 ? 600 : 500,
        fontSize: Math.min(px, 40),
        color: 'var(--text-heading)',
        flex: 1
      }
    }, sample), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        color: 'var(--text-muted)'
      }
    }, spec))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 20,
        padding: '18px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        color: 'var(--color-primary)',
        width: 34
      }
    }, "Body"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        lineHeight: 1.7,
        color: 'var(--text-body)',
        flex: 1,
        maxWidth: 520
      }
    }, "Worn like a retainer and precisely made for your mouth \u2014 no masks, hoses, or noise."), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        color: 'var(--text-muted)'
      }
    }, "16 / 1.7")))), /*#__PURE__*/React.createElement(Section, {
      k: "4.3",
      title: "Pairing rules"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, /*#__PURE__*/React.createElement(DoDont, {
      good: true,
      title: "Serif heads, sans body"
    }, "Set headlines in Newsreader and everything functional \u2014 body, labels, buttons, captions \u2014 in Manrope."), /*#__PURE__*/React.createElement(DoDont, {
      title: "Serif in the UI"
    }, "Don't set buttons, form labels, or long body copy in the serif. It's for headlines and big stats only.")))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "brand-guide/pages-foundation.jsx", error: String((e && e.message) || e) }); }

// brand-guide/pages-system.jsx
try { (() => {
// Brand Guide pages 05–08: Grid & Spacing, Voice & Tone, Imagery, Components
(function () {
  const {
    Icon,
    Card,
    Badge,
    Button
  } = window.DesignSystem_e5ed69;
  const {
    PageHeader,
    Section,
    DoDont,
    Token
  } = window.BG;

  /* ---------------- 05 GRID & SPACING ---------------- */
  window.BG.pages['05'] = function Grid() {
    const scale = [['space-1', '4'], ['space-2', '8'], ['space-3', '12'], ['space-4', '16'], ['space-6', '24'], ['space-8', '32'], ['space-12', '48']];
    return /*#__PURE__*/React.createElement("div", {
      className: "ipage"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      num: "05",
      label: "Grid & Spacing",
      title: "Room to breathe",
      intro: "A 4px base scale keeps rhythm consistent, while generous whitespace does the calming work. Space is a feature, not empty room."
    }), /*#__PURE__*/React.createElement("div", {
      className: "ibody"
    }, /*#__PURE__*/React.createElement(Section, {
      k: "5.1",
      title: "Spacing scale",
      sub: "4px base"
    }, /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, scale.map(([tok, px]) => /*#__PURE__*/React.createElement("div", {
      key: tok,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        width: 90,
        color: 'var(--text-heading)'
      }
    }, tok), /*#__PURE__*/React.createElement("span", {
      style: {
        height: 16,
        width: px + 'px',
        background: 'var(--color-primary)',
        borderRadius: 3
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        color: 'var(--text-muted)'
      }
    }, px, "px"))))), /*#__PURE__*/React.createElement(Section, {
      k: "5.2",
      title: "Layout grid",
      sub: "12 columns \xB7 1160px max"
    }, /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12,1fr)',
        gap: 10,
        height: 120
      }
    }, Array.from({
      length: 12
    }).map((_, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--blue-50)',
        borderRadius: 4
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        color: 'var(--text-muted)'
      }
    }, "12 cols"), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        color: 'var(--text-muted)'
      }
    }, "gutter 24px \xB7 margin 40px")))), /*#__PURE__*/React.createElement(Section, {
      k: "5.3",
      title: "Breakpoints"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g4"
    }, [['Mobile', '< 640', 'smartphone'], ['Tablet', '640–1024', 'tablet'], ['Desktop', '1024–1440', 'monitor'], ['Wide', '> 1440', 'tv']].map(([n, r, ic]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      className: "panel",
      style: {
        padding: 22
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22,
      color: "var(--color-primary)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 600,
        color: 'var(--text-heading)',
        marginTop: 12
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, r, "px"))))), /*#__PURE__*/React.createElement(Section, {
      k: "5.4",
      title: "Radius & elevation"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 28,
        display: 'flex',
        gap: 18,
        alignItems: 'flex-end'
      }
    }, [['sm', '8'], ['md', '12'], ['lg', '16']].map(([n, px]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 72,
        height: 56,
        background: 'var(--blue-50)',
        boxShadow: 'inset 0 0 0 1.5px var(--color-primary)',
        borderRadius: px + 'px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        color: 'var(--text-muted)',
        marginTop: 8
      }
    }, px, "px")))), /*#__PURE__*/React.createElement("div", {
      className: "panelSoft",
      style: {
        padding: 28,
        display: 'flex',
        gap: 22,
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, ['var(--shadow-sm)', 'var(--shadow-md)', 'var(--shadow-lg)'].map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        width: 66,
        height: 54,
        background: '#fff',
        borderRadius: 12,
        boxShadow: s
      }
    })))))));
  };

  /* ---------------- 06 VOICE & TONE ---------------- */
  window.BG.pages['06'] = function Voice() {
    return /*#__PURE__*/React.createElement("div", {
      className: "ipage"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      num: "06",
      label: "Voice & Tone",
      title: "Reassuring. Warm. Human.",
      intro: "We talk like a trusted person who happens to be an expert \u2014 never like a device manual. Lead with how life feels better, then back it with proof."
    }), /*#__PURE__*/React.createElement("div", {
      className: "ibody"
    }, /*#__PURE__*/React.createElement(Section, {
      k: "6.1",
      title: "Principles"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, [['messages-square', 'Speak human', 'Plain words over jargon. "A comfortable device worn like a retainer," not "mandibular advancement device."'], ['hand-heart', 'Reassure first', 'Lead with relief and comfort; address worry gently and honestly.'], ['badge-check', 'Earn the claim', 'Every promise is backed by proof, coverage, or a credential.']].map(([ic, t, b]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      className: "panel",
      style: {
        padding: 22
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22,
      color: "var(--color-primary)"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 18,
        margin: '12px 0 6px'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14.5,
        lineHeight: 1.6,
        color: 'var(--text-body)'
      }
    }, b))))), /*#__PURE__*/React.createElement(Section, {
      k: "6.2",
      title: "Do & Don't"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, /*#__PURE__*/React.createElement(DoDont, {
      good: true,
      title: "We say"
    }, "\"Sleep through the night \u2014 no mask, no hose, no noise. 96% of patients prefer it.\""), /*#__PURE__*/React.createElement(DoDont, {
      title: "Not this"
    }, "\"Utilize our FDA-cleared MAD for the clinical management of OSA and associated comorbidities.\""))), /*#__PURE__*/React.createElement(Section, {
      k: "6.3",
      title: "Tone by audience"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Badge, {
      tone: "primary"
    }, "Patients"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontSize: 20,
        lineHeight: 1.35,
        color: 'var(--text-heading)',
        margin: '14px 0 0'
      }
    }, "\"You deserve a good night's sleep. We'll match you with a provider near you.\""), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        marginTop: 10
      }
    }, "Warm, second-person, life-focused.")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Badge, {
      tone: "wellness"
    }, "Providers"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontSize: 20,
        lineHeight: 1.35,
        color: 'var(--text-heading)',
        margin: '14px 0 0'
      }
    }, "\"Predictable titration and streamlined documentation \u2014 therapy your patients actually adhere to.\""), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        marginTop: 10
      }
    }, "Credible, efficient, still human.")))), /*#__PURE__*/React.createElement(Section, {
      k: "6.4",
      title: "Mechanics"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g4"
    }, [['Casing', 'Sentence case'], ['Person', 'You / we'], ['Emoji', 'Never in UI'], ['Numbers', 'Only real proof']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      className: "panelSoft",
      style: {
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, k), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 600,
        color: 'var(--text-heading)',
        marginTop: 6
      }
    }, v)))))));
  };

  /* ---------------- 07 IMAGERY ---------------- */
  window.BG.pages['07'] = function Imagery() {
    const gradients = [['Warm morning light', 'linear-gradient(150deg,#cfe6f6,#eaf4fc 55%,#fff3d6)'], ['Restful, real people', 'linear-gradient(150deg,#dfeef8,#cfe0f2)'], ['Calm bedroom tones', 'linear-gradient(150deg,#0C3B6B,#06618B)']];
    return /*#__PURE__*/React.createElement("div", {
      className: "ipage"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      num: "07",
      label: "Imagery",
      title: "Calm, real, human",
      intro: "Photography shows real rest and real people \u2014 soft natural light, warm mornings, quiet bedrooms. Never cold, clinical, or staged stock."
    }), /*#__PURE__*/React.createElement("div", {
      className: "ibody"
    }, /*#__PURE__*/React.createElement(Section, {
      k: "7.1",
      title: "Direction"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, gradients.map(([label, g], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "panel",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 150,
        background: g,
        display: 'flex',
        alignItems: 'flex-end',
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: i === 2 ? '#fff' : 'var(--blue-700)',
        fontSize: 13,
        fontWeight: 600,
        background: i === 2 ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.6)',
        padding: '4px 10px',
        borderRadius: 999,
        backdropFilter: 'blur(4px)'
      }
    }, label))))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 12
      }
    }, "Placeholders shown \u2014 supply real ProSomnus photography for production.")), /*#__PURE__*/React.createElement(Section, {
      k: "7.2",
      title: "Do & Don't"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, /*#__PURE__*/React.createElement(DoDont, {
      good: true,
      title: "Do"
    }, "Warm natural light, genuine calm, real patients and partners, generous negative space, soft focus backgrounds."), /*#__PURE__*/React.createElement(DoDont, {
      title: "Don't"
    }, "Cold blue clinical lighting, medical equipment close-ups, stock \"doctor points at camera,\" harsh flash, clutter."))), /*#__PURE__*/React.createElement(Section, {
      k: "7.3",
      title: "Treatment"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g4"
    }, [['sun', 'Warm white balance'], ['aperture', 'Soft depth of field'], ['maximize', 'Room to breathe'], ['users', 'People, not devices']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      className: "panelSoft",
      style: {
        padding: 20
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22,
      color: "var(--color-secondary-strong)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        fontWeight: 600,
        color: 'var(--text-heading)',
        marginTop: 10
      }
    }, t)))))));
  };

  /* ---------------- 08 COMPONENTS ---------------- */
  window.BG.pages['08'] = function Components() {
    const set = [['forms', 'Forms', 'Button, Input, Select, Checkbox, Radio, Switch'], ['display', 'Display', 'Card, Badge, Tag, Stat, Testimonial'], ['feedback', 'Feedback', 'Alert, Dialog'], ['media', 'Media', 'Icon (Lucide wrapper)']];
    return /*#__PURE__*/React.createElement("div", {
      className: "ipage"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      num: "08",
      label: "Components",
      title: "The building blocks",
      intro: "Fourteen reusable primitives, grouped by concern. All share the system's tokens \u2014 soft radius, gentle shadows, and the amber-for-CTA rule."
    }), /*#__PURE__*/React.createElement("div", {
      className: "ibody"
    }, /*#__PURE__*/React.createElement(Section, {
      k: "8.1",
      title: "The set"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, set.map(([ic, t, list]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      className: "panel",
      style: {
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 'var(--radius-sm)',
        background: 'var(--blue-50)',
        color: 'var(--color-primary)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic === 'forms' ? 'text-cursor-input' : ic === 'display' ? 'layout-grid' : ic === 'feedback' ? 'message-circle' : 'image',
      size: 20
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 19
      }
    }, t)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14.5,
        color: 'var(--text-body)',
        lineHeight: 1.6
      }
    }, list))))), /*#__PURE__*/React.createElement(Section, {
      k: "8.2",
      title: "Live sampler"
    }, /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 28,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 14,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent"
    }, "Primary CTA"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary"
    }, "Secondary"), /*#__PURE__*/React.createElement(Badge, {
      tone: "primary"
    }, "FDA cleared"), /*#__PURE__*/React.createElement(Badge, {
      tone: "wellness"
    }, "In network"), /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Approved"))), /*#__PURE__*/React.createElement(Section, {
      k: "8.3",
      title: "Principles"
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, [['blocks', 'Composable', 'Screens are built from primitives — never one-off markup.'], ['palette', 'Token-driven', 'Color, space, and type come from CSS variables, not literals.'], ['accessibility', 'Accessible', 'Focus rings, labels, and reduced-motion are built in.']].map(([ic, t, b]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      className: "panelSoft",
      style: {
        padding: 20
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 20,
      color: "var(--color-primary)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 600,
        color: 'var(--text-heading)',
        margin: '10px 0 5px'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: 1.55,
        color: 'var(--text-body)'
      }
    }, b)))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "brand-guide/pages-system.jsx", error: String((e && e.message) || e) }); }

// brand-guide/pages.jsx
try { (() => {
// ProSomnus Brand & Style Guide — page registry.
// Each page: { num, label, render } where render is a React component (or null = stub).
window.BRANDGUIDE_PAGES = function () {
  const {
    Icon
  } = window.DesignSystem_e5ed69;
  function Cover() {
    // stars clustered in the upper night sky (x%, y%, size, delay)
    const stars = [[10, 10, 2, 0], [20, 20, 1.5, 1.2], [32, 8, 1, 0.5], [46, 15, 1.5, 2], [60, 9, 2, 0.8], [72, 18, 1, 1.6], [84, 12, 1.5, 0.3], [15, 32, 1, 2.4], [28, 38, 1.5, 0.9], [54, 30, 1, 1.4], [68, 36, 2, 2.1], [88, 30, 1, 0.6], [6, 24, 1.5, 1.8], [40, 26, 1, 3]];
    return /*#__PURE__*/React.createElement("div", {
      className: "cover"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sky",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "crescent",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "sun",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "horizon",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "stars",
      "aria-hidden": "true"
    }, stars.map((s, i) => /*#__PURE__*/React.createElement("i", {
      key: i,
      style: {
        left: s[0] + '%',
        top: s[1] + '%',
        width: s[2],
        height: s[2],
        animationDelay: s[3] + 's'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 12,
        letterSpacing: '.16em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.55)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Brand & Style Guide"), /*#__PURE__*/React.createElement("span", null, "PSX.BRAND.001")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 780,
        marginTop: 'auto',
        marginBottom: 'auto',
        paddingTop: 36
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-logo-white.svg",
      alt: "ProSomnus",
      style: {
        height: 40,
        marginBottom: 44
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        color: 'var(--cyan-100)',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: 'var(--amber-500)',
        boxShadow: '0 0 12px 2px rgba(251,191,36,0.7)'
      }
    }), " The system behind the sleep"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(46px, 6.4vw, 88px)',
        lineHeight: 0.98,
        color: '#fff',
        letterSpacing: '-0.025em',
        fontWeight: 500
      }
    }, "Night ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: 'italic',
        fontWeight: 400,
        color: 'var(--cyan-100)'
      }
    }, "into"), " morning."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        lineHeight: 1.65,
        color: 'rgba(255,255,255,0.78)',
        maxWidth: 480,
        marginTop: 28
      }
    }, "The design system that carries ProSomnus from first hello to a full night's rest \u2014 calm, warm, and unmistakably human.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24,
        borderTop: '1px solid rgba(255,255,255,0.14)',
        paddingTop: 24,
        maxWidth: 780
      }
    }, [['System ID', 'PSX.BRAND.001'], ['Revision', '1.0 — 07.06.2026'], ['Owner', 'Brand & Design'], ['Status', 'Living document']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        letterSpacing: '.13em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.45)'
      }
    }, k), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        color: '#fff',
        marginTop: 6,
        fontWeight: 500
      }
    }, v)))));
  }
  return [{
    num: '00',
    label: 'Cover',
    render: Cover
  }, {
    num: '01',
    label: 'Foundation',
    render: null
  }, {
    num: '02',
    label: 'Logo',
    render: null
  }, {
    num: '03',
    label: 'Color',
    render: null
  }, {
    num: '04',
    label: 'Type',
    render: null
  }, {
    num: '05',
    label: 'Grid & Spacing',
    render: null
  }, {
    num: '06',
    label: 'Voice & Tone',
    render: null
  }, {
    num: '07',
    label: 'Imagery',
    render: null
  }, {
    num: '08',
    label: 'Components',
    render: null
  }, {
    num: '09',
    label: 'Buttons',
    render: null
  }, {
    num: '10',
    label: 'Cards',
    render: null
  }, {
    num: '11',
    label: 'Forms & Inputs',
    render: null
  }, {
    num: '12',
    label: 'Motion',
    render: null
  }, {
    num: '13',
    label: 'Email',
    render: null
  }, {
    num: '14',
    label: 'Patterns',
    render: null
  }];
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "brand-guide/pages.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
/** Small status label. tone: neutral | primary | success | warning | error | wellness */
function Badge({
  tone = 'neutral',
  size = 'md',
  style = {},
  children
}) {
  const tones = {
    neutral: {
      bg: 'var(--gray-100)',
      fg: 'var(--gray-700)'
    },
    primary: {
      bg: 'var(--blue-50)',
      fg: 'var(--blue-700)'
    },
    wellness: {
      bg: 'var(--cyan-50)',
      fg: 'var(--cyan-700)'
    },
    success: {
      bg: 'var(--success-bg)',
      fg: 'var(--success)'
    },
    warning: {
      bg: 'var(--amber-50)',
      fg: 'var(--amber-700)'
    },
    error: {
      bg: 'var(--error-bg)',
      fg: 'var(--error)'
    }
  };
  const t = tones[tone] || tones.neutral;
  const pad = size === 'sm' ? '2px 8px' : '4px 12px';
  const fs = size === 'sm' ? 12 : 13;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: pad,
      fontFamily: 'var(--font-body)',
      fontSize: fs,
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1.4,
      color: t.fg,
      background: t.bg,
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Soft rounded surface. `hoverLift` raises the card on hover. */
function Card({
  hoverLift = false,
  padding = 24,
  as = 'div',
  style = {},
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: hoverLift ? () => setHover(true) : undefined,
    onMouseLeave: hoverLift ? () => setHover(false) : undefined,
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      padding,
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'var(--lift-hover)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
/**
 * Big statistic with count-up animation when scrolled into view.
 * value: the target number. prefix/suffix wrap it (e.g. "96", "%").
 */
function Stat({
  value,
  prefix = '',
  suffix = '',
  label,
  duration = 1600,
  decimals = 0,
  align = 'center',
  style = {}
}) {
  const ref = React.useRef(null);
  const [display, setDisplay] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const run = () => {
      if (started) return;
      started = true;
      if (reduce) {
        setDisplay(value);
        return;
      }
      const start = performance.now();
      const tick = now => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(value * eased);
        if (p < 1) requestAnimationFrame(tick);else setDisplay(value);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) run();
      });
    }, {
      threshold: 0.4
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);
  const shown = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toLocaleString();
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      textAlign: align,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'clamp(40px, 6vw, 64px)',
      lineHeight: 1,
      color: 'var(--color-primary-strong)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, prefix, shown, suffix), label && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 16,
      color: 'var(--text-muted)',
      maxWidth: 260,
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
/** Removable/selectable chip. */
function Tag({
  selected = false,
  onRemove,
  onClick,
  style = {},
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 'var(--weight-medium)',
      color: selected ? 'var(--color-primary)' : 'var(--text-body)',
      background: selected ? 'var(--blue-50)' : 'var(--surface-card)',
      border: `1px solid ${selected ? 'var(--color-primary)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-pill)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    "aria-label": "Remove",
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'inherit',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/Testimonial.jsx
try { (() => {
/** Patient/provider testimonial card. */
function Testimonial({
  quote,
  name,
  role,
  rating = 5,
  avatar,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      padding: 28,
      boxShadow: 'var(--shadow-sm)',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      ...style
    }
  }, rating > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      color: 'var(--amber-500)'
    }
  }, Array.from({
    length: rating
  }).map((_, i) => /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  })))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-heading)'
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      flexShrink: 0,
      background: 'var(--blue-50)',
      color: 'var(--color-primary-strong)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 16,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: avatar ? `url(${avatar})` : 'none'
    }
  }, !avatar && name ? name.charAt(0) : ''), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, name), role && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, role))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
/** Inline message banner. tone: info | success | warning | error */
function Alert({
  tone = 'info',
  title,
  onClose,
  style = {},
  children
}) {
  const tones = {
    info: {
      bg: 'var(--blue-50)',
      fg: 'var(--blue-700)',
      icon: 'info'
    },
    success: {
      bg: 'var(--success-bg)',
      fg: 'var(--success)',
      icon: 'check'
    },
    warning: {
      bg: 'var(--amber-50)',
      fg: 'var(--amber-700)',
      icon: 'alert'
    },
    error: {
      bg: 'var(--error-bg)',
      fg: 'var(--error)',
      icon: 'x'
    }
  };
  const t = tones[tone] || tones.info;
  const paths = {
    info: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12.01",
      y2: "8"
    })),
    check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "9 12 11.5 14.5 16 9.5"
    })),
    alert: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "9",
      x2: "12",
      y2: "13"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17"
    })),
    x: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15",
      y1: "9",
      x2: "9",
      y2: "15"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9",
      y1: "9",
      x2: "15",
      y2: "15"
    }))
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 16px',
      background: t.bg,
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-body)',
      color: t.fg,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0,
      marginTop: 1
    }
  }, paths[t.icon]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 15,
      lineHeight: 1.5
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      marginBottom: children ? 3 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-body)'
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'inherit',
      opacity: 0.7,
      padding: 0,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Modal dialog with soft backdrop. Renders nothing when `open` is false. */
function Dialog({
  open,
  onClose,
  title,
  footer,
  width = 460,
  style = {},
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(15, 23, 42, 0.45)',
      backdropFilter: 'blur(2px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      fontFamily: 'var(--font-body)',
      animation: 'ps-fade var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden',
      animation: 'ps-pop var(--duration-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 24px 0'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 22,
      color: 'var(--text-heading)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 24px 20px',
      fontSize: 16,
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '0 24px 24px'
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, `@keyframes ps-fade{from{opacity:0}to{opacity:1}}@keyframes ps-pop{from{opacity:0;transform:translateY(12px) scale(.98)}to{opacity:1;transform:none}}`));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProSomnus Button.
 * `accent` (amber) is reserved for the single primary call-to-action on a view.
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: 14,
      gap: 6
    },
    md: {
      padding: '11px 20px',
      fontSize: 16,
      gap: 8
    },
    lg: {
      padding: '15px 28px',
      fontSize: 18,
      gap: 10
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--text-inverse)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--color-on-accent)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-md)',
      fontWeight: 'var(--weight-semibold)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--color-primary)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-xs)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverBg = {
    primary: 'var(--color-primary-hover)',
    accent: 'var(--color-accent-hover)',
    secondary: 'var(--surface-soft)',
    ghost: 'var(--color-primary-soft)'
  }[variant];
  const hoverColor = variant === 'accent' ? 'var(--text-inverse)' : undefined;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      width: fullWidth ? '100%' : 'auto',
      padding: s.padding,
      fontFamily: 'var(--font-body)',
      fontSize: s.fontSize,
      fontWeight: v.fontWeight || 'var(--weight-medium)',
      lineHeight: 1,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
      transform: active && !disabled ? 'scale(0.97)' : 'none',
      ...v,
      ...(hover && !disabled ? {
        background: hoverBg,
        color: hoverColor || v.color
      } : {}),
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox with label. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style = {}
}) {
  const cbId = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    onClick: e => {
      e.preventDefault();
      toggle();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: 6,
      border: `1.5px solid ${on ? 'var(--color-primary)' : 'var(--border-default)'}`,
      background: on ? 'var(--color-primary)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--duration-fast) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("input", {
    id: cbId,
    type: "checkbox",
    checked: on,
    onChange: () => {},
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with optional label, hint and error. */
function Input({
  label,
  hint,
  error,
  iconLeft = null,
  id,
  type = 'text',
  disabled = false,
  style = {},
  ...rest
}) {
  const inputId = id || React.useId();
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--error)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      display: 'inline-flex',
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: iconLeft ? '11px 14px 11px 38px' : '11px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-heading)',
      background: disabled ? 'var(--surface-soft)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focus && !error ? 'var(--ring-primary)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)'
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? 'var(--error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Radio group. options: [{value,label}] or [string]. */
function Radio({
  options = [],
  value,
  defaultValue,
  onChange,
  name,
  disabled = false,
  style = {}
}) {
  const grpName = name || React.useId();
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const pick = v => {
    if (disabled) return;
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const labelText = typeof o === 'string' ? o : o.label;
    const on = current === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      onClick: () => pick(v),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        fontSize: 15,
        color: 'var(--text-body)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        flexShrink: 0,
        borderRadius: '50%',
        border: `1.5px solid ${on ? 'var(--color-primary)' : 'var(--border-default)'}`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all var(--duration-fast) var(--ease-out)'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--color-primary)'
      }
    })), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: grpName,
      checked: on,
      onChange: () => {},
      disabled: disabled,
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), labelText);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match ProSomnus inputs. */
function Select({
  label,
  hint,
  id,
  options = [],
  disabled = false,
  style = {},
  ...rest
}) {
  const selId = id || React.useId();
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: 14,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      padding: '11px 38px 11px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-heading)',
      background: disabled ? 'var(--surface-soft)' : 'var(--surface-card)',
      border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focus ? 'var(--ring-primary)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)'
    }
  }, rest), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const labelText = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, labelText);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Toggle switch. */
function Switch({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  label,
  style = {}
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  const knob = /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    style: {
      width: 44,
      height: 26,
      flexShrink: 0,
      borderRadius: 999,
      background: on ? 'var(--color-primary)' : 'var(--gray-300)',
      position: 'relative',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-base) var(--ease-out)'
    }
  }));
  if (!label) return /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, knob);
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, knob, label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/media/Icon.jsx
try { (() => {
/* Convert kebab-case or snake_case to PascalCase (lucide icon key). */
function toPascal(name) {
  return String(name).split(/[-_\s]+/).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
}

/**
 * ProSomnus Icon — thin wrapper over Lucide (loaded from CDN).
 * Requires the Lucide UMD script on the page:
 *   <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  style = {},
  ...rest
}) {
  const lucide = typeof window !== 'undefined' ? window.lucide : null;
  const node = lucide && lucide.icons ? lucide.icons[toPascal(name)] : null;
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: {
      display: 'inline-block',
      flexShrink: 0,
      verticalAlign: 'middle',
      ...style
    },
    'aria-hidden': true,
    ...rest
  };
  if (!node) {
    // Fallback: empty box so layout is preserved if Lucide isn't loaded.
    return /*#__PURE__*/React.createElement("svg", common);
  }
  const children = node.map((child, i) => {
    const [tag, attrs] = child;
    return React.createElement(tag, {
      key: i,
      ...attrs
    });
  });
  return React.createElement('svg', common, children);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Icon.jsx", error: String((e && e.message) || e) }); }

// homepage/Benefits.jsx
try { (() => {
window.HP = window.HP || {};
(function () {
  const {
    Card,
    Icon
  } = window.DesignSystem_e5ed69;
  const benefits = [['piggy-bank', 'Affordable', 'A fraction of the lifetime cost of CPAP — no ongoing supplies, filters, or replacement parts to buy.'], ['shield-check', 'Covered by Insurance', 'Covered by nearly all medical insurance, Medicare, and VA benefits. Most patients pay little to nothing.'], ['calendar-heart', 'Flexible Payment Plans', 'Simple monthly options make treatment easy to start. We\u2019ll help you find a plan that fits.']];
  window.HP.Benefits = function Benefits() {
    return /*#__PURE__*/React.createElement("section", {
      id: "benefits",
      style: {
        padding: '120px 0',
        background: 'var(--surface-soft)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        textAlign: 'center',
        maxWidth: 640,
        margin: '0 auto 48px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Why ProSomnus"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(30px,4vw,42px)',
        marginTop: 12
      }
    }, "Better sleep, within reach")), /*#__PURE__*/React.createElement("div", {
      className: "grid-3",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24
      }
    }, benefits.map(([icon, title, body], i) => /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      key: title,
      style: {
        transitionDelay: i * 0.09 + 's'
      }
    }, /*#__PURE__*/React.createElement(BenefitCard, {
      icon: icon,
      title: title,
      body: body
    }))))));
  };
  function BenefitCard({
    icon,
    title,
    body
  }) {
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement(Card, {
      hoverLift: true,
      padding: 30,
      style: {
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false)
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: 60,
        height: 60,
        borderRadius: 'var(--radius-lg)',
        background: hover ? 'var(--color-primary)' : 'var(--blue-50)',
        color: hover ? '#fff' : 'var(--color-primary)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        transition: 'all var(--duration-base) var(--ease-out)',
        transform: hover ? 'translateY(-4px) rotate(-6deg)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 28
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 22,
        marginBottom: 10
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15.5,
        lineHeight: 1.65,
        color: 'var(--text-body)'
      }
    }, body)));
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "homepage/Benefits.jsx", error: String((e && e.message) || e) }); }

// homepage/FinalCTA.jsx
try { (() => {
window.HP = window.HP || {};
(function () {
  const {
    Button,
    Icon
  } = window.DesignSystem_e5ed69;
  window.HP.FinalCTA = function FinalCTA() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '124px 0',
        background: 'linear-gradient(180deg, var(--surface-card), var(--cyan-50))'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap reveal",
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-mark.svg",
      alt: "",
      "aria-hidden": "true",
      style: {
        height: 52,
        marginBottom: 24
      }
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(36px,5vw,56px)',
        lineHeight: 1.05
      }
    }, "Ready, set, sleep."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        lineHeight: 1.6,
        color: 'var(--text-body)',
        maxWidth: 480,
        margin: '18px auto 0'
      }
    }, "Find a ProSomnus provider near you and take the first step toward the rest you deserve."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 32,
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "../pages/find-a-provider/index.html"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18
      })
    }, "Find a Provider")))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "homepage/FinalCTA.jsx", error: String((e && e.message) || e) }); }

// homepage/Footer.jsx
try { (() => {
window.HP = window.HP || {};
(function () {
  const {
    Button,
    Input,
    Icon
  } = window.DesignSystem_e5ed69;
  const cols = [['Company', ['About', 'Newsroom', 'Careers', 'Contact']], ['Patients', ['How it works', 'Benefits', 'Insurance & coverage', 'Find a provider']], ['Providers', ['Prescribe ProSomnus', 'Provider portal', 'Clinical evidence', 'Education']], ['Legal', ['Privacy', 'Terms', 'Accessibility', 'HIPAA notice']]];
  window.HP.Footer = function Footer() {
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--gray-900)',
        color: 'rgba(255,255,255,0.72)',
        paddingTop: 64
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "footer-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: '1.5fr repeat(4, 1fr)',
        gap: 32,
        paddingBottom: 48
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: 'auto'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-logo-white.svg",
      alt: "ProSomnus",
      style: {
        height: 30
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        lineHeight: 1.65,
        marginTop: 16,
        maxWidth: 260
      }
    }, "Precision oral appliance therapy for obstructive sleep apnea \u2014 a comfortable, covered alternative to CPAP."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 20
      }
    }, ['facebook', 'instagram', 'linkedin', 'youtube'].map(n => /*#__PURE__*/React.createElement("a", {
      key: n,
      href: "#",
      "aria-label": n,
      style: {
        width: 38,
        height: 38,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255,255,255,0.75)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n,
      size: 18
    }))))), cols.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
      key: title
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        color: '#fff',
        fontSize: 15,
        marginBottom: 16
      }
    }, title), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 11
      }
    }, items.map(it => /*#__PURE__*/React.createElement("li", {
      key: it
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.72)'
      }
    }, it))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid rgba(255,255,255,0.12)',
        padding: '32px 0',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 28,
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 420
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        color: '#fff',
        fontSize: 18
      }
    }, "Sleep tips, straight to your inbox"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.6)',
        marginTop: 6
      }
    }, "Occasional, useful, never spammy.")), sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: 'var(--cyan-100)',
        fontSize: 15,
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle",
      size: 20
    }), " Thanks \u2014 you're subscribed!") : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      },
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'stretch',
        flex: '1 1 340px',
        maxWidth: 440
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Input, {
      type: "email",
      placeholder: "you@example.com",
      required: true,
      "aria-label": "Email address",
      style: {}
    })), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "accent"
    }, "Subscribe"))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid rgba(255,255,255,0.12)',
        padding: '22px 0 32px',
        fontSize: 13,
        color: 'rgba(255,255,255,0.5)',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 16,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ProSomnus Sleep Technologies. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Custom-fit comfort. Covered care. Quiet nights."))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "homepage/Footer.jsx", error: String((e && e.message) || e) }); }

// homepage/Hero.jsx
try { (() => {
window.HP = window.HP || {};
(function () {
  const {
    Button,
    Icon
  } = window.DesignSystem_e5ed69;
  const trust = [['badge-check', 'FDA cleared'], ['shield-check', 'Medicare & VA'], ['users', '100k+ patients treated']];
  window.HP.Hero = function Hero() {
    return /*#__PURE__*/React.createElement("section", {
      id: "top",
      style: {
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'min(94vh, 760px)',
        marginTop: -82,
        paddingTop: 82,
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(120deg, #0C447C 0%, #16457E 42%, #06618B 100%)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero-photo",
      style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: '48%',
        background: 'linear-gradient(150deg, rgba(0,154,217,0.35), rgba(12,68,124,0.05))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,255,255,0.35)',
        fontSize: 14
      }
    }, "Full-bleed lifestyle photo")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, #0C447C 34%, rgba(12,68,124,0.72) 52%, rgba(12,68,124,0) 78%)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: orb('560px', 'radial-gradient(circle, rgba(0,154,217,0.55), transparent 68%)', '-160px', 'auto', '30s', 'auto', '4%')
    }), /*#__PURE__*/React.createElement("span", {
      style: orb('360px', 'radial-gradient(circle, rgba(191,231,248,0.28), transparent 70%)', 'auto', '46%', '26s', '-120px', 'auto')
    })), /*#__PURE__*/React.createElement("div", {
      className: "wrap",
      style: {
        position: 'relative',
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal in",
      style: {
        maxWidth: 640
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow",
      style: {
        color: 'var(--cyan-100)'
      }
    }, "The CPAP alternative"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(40px, 5.6vw, 66px)',
        lineHeight: 1.03,
        marginTop: 16,
        color: '#fff'
      }
    }, "Sleep Better", /*#__PURE__*/React.createElement("br", null), "Without the Machine"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 20,
        lineHeight: 1.6,
        color: 'rgba(255,255,255,0.86)',
        maxWidth: 490,
        marginTop: 20
      }
    }, "Comfortable, custom-fit, and covered \u2014 the modern alternative to CPAP. No masks, no hoses, no noise."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        marginTop: 32,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "../pages/find-a-provider/index.html"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18
      }),
      style: {
        whiteSpace: 'nowrap'
      }
    }, "Find a Provider")), /*#__PURE__*/React.createElement("a", {
      href: "../pages/how-it-works/index.html",
      className: "hero-ghost",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 18,
        padding: '15px 28px',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        color: '#fff',
        textDecoration: 'none',
        background: 'rgba(255,255,255,0.14)',
        border: '1px solid rgba(255,255,255,0.42)',
        transition: 'background var(--duration-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 16
    }), " See How It Works")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '14px 26px',
        marginTop: 38
      }
    }, trust.map(([icon, label]) => /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 14,
        fontWeight: 500,
        color: 'rgba(255,255,255,0.9)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 17,
      color: "var(--cyan-100)"
    }), " ", label))))), /*#__PURE__*/React.createElement("style", null, `
          .hero-ghost:hover { background: rgba(255,255,255,0.24) !important; }
          @keyframes hp-drift { 0%{transform:translate(0,0)} 50%{transform:translate(40px,-30px)} 100%{transform:translate(0,0)} }
          @media (max-width: 900px){ .hero-photo{ opacity:0.55; width:100% !important; } }
          @media (prefers-reduced-motion: reduce){ [style*="hp-drift"]{animation:none !important} }
        `));
  };
  function orb(size, bg, top, left, dur, bottom, right) {
    return {
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      background: bg,
      filter: 'blur(8px)',
      top: top,
      left: left,
      bottom: bottom || 'auto',
      right: right || 'auto',
      animation: `hp-drift ${dur} var(--ease-in-out) infinite`
    };
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "homepage/Hero.jsx", error: String((e && e.message) || e) }); }

// homepage/HowItWorks.jsx
try { (() => {
window.HP = window.HP || {};
(function () {
  const {
    Icon
  } = window.DesignSystem_e5ed69;
  const steps = [['user-round-check', 'Meet a Provider', 'Connect with a ProSomnus dentist or sleep physician near you to confirm you\u2019re a good fit.', 'stethoscope'], ['house', 'Home Sleep Test', 'Test comfortably in your own bed with an easy at-home kit — no overnight lab visit required.', 'moon'], ['smile', 'Get Fitted', 'Receive your custom-milled appliance, fitted just for you. Wear it like a retainer and rest easy.', 'sparkles']];
  window.HP.HowItWorks = function HowItWorks() {
    return /*#__PURE__*/React.createElement("section", {
      id: "how",
      style: {
        padding: '120px 0',
        background: 'var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        textAlign: 'center',
        maxWidth: 640,
        margin: '0 auto 56px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "How it works"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(30px,4vw,42px)',
        marginTop: 12
      }
    }, "Three simple steps to better sleep")), /*#__PURE__*/React.createElement("div", {
      className: "grid-3",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "desktop-only",
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        top: 78,
        left: '18%',
        right: '18%',
        height: 2,
        background: 'repeating-linear-gradient(90deg, var(--cyan-100) 0 10px, transparent 10px 20px)'
      }
    }), steps.map(([icon, title, body, deco], i) => /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      key: title,
      style: {
        transitionDelay: i * 0.1 + 's',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 132,
        height: 132,
        borderRadius: '50%',
        background: 'linear-gradient(150deg, var(--blue-50), var(--cyan-50))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 48,
      color: "var(--color-primary)",
      strokeWidth: 1.6
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: -6,
        right: 8,
        width: 34,
        height: 34,
        borderRadius: '50%',
        background: 'var(--color-primary)',
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: 16,
        boxShadow: 'var(--shadow-md)'
      }
    }, i + 1)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 22,
        marginTop: 24
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15.5,
        lineHeight: 1.65,
        color: 'var(--text-body)',
        marginTop: 10,
        maxWidth: 300
      }
    }, body)))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "homepage/HowItWorks.jsx", error: String((e && e.message) || e) }); }

// homepage/Nav.jsx
try { (() => {
window.HP = window.HP || {};
(function () {
  const {
    Button,
    Icon
  } = window.DesignSystem_e5ed69;
  const links = [['How It Works', '../pages/how-it-works/index.html'], ['Find a Provider', '../pages/find-a-provider/index.html'], ['The Results', '../pages/results/index.html'], ['For Providers', '../pages/providers/index.html'], ['FAQ', '../pages/faq/index.html']];
  window.HP.Nav = function Nav() {
    const [scrolled, setScrolled] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
      const on = () => setScrolled(window.scrollY > 10);
      on();
      window.addEventListener('scroll', on, {
        passive: true
      });
      return () => window.removeEventListener('scroll', on);
    }, []);
    const barH = scrolled ? 60 : 82;
    const logoH = scrolled ? 25 : 31;
    const onDark = !scrolled; // hero is a deep-blue full-bleed band
    const linkColor = onDark ? 'rgba(255,255,255,0.92)' : 'var(--text-body)';
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        transition: 'background var(--duration-slow) var(--ease-out), box-shadow var(--duration-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap",
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: barH,
        transition: 'height var(--duration-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#top",
      "aria-label": "ProSomnus home"
    }, /*#__PURE__*/React.createElement("img", {
      src: onDark ? '/design-systems/prosomnus/assets/prosomnus-logo-white.svg' : '/design-systems/prosomnus/assets/prosomnus-logo.svg',
      alt: "ProSomnus",
      style: {
        height: logoH,
        display: 'block',
        transition: 'height var(--duration-slow) var(--ease-out)'
      }
    })), /*#__PURE__*/React.createElement("nav", {
      className: "desktop-only",
      "aria-label": "Primary",
      style: {
        display: 'flex',
        gap: 34
      }
    }, links.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
      key: h,
      href: h,
      style: {
        fontSize: 15,
        fontWeight: 500,
        color: linkColor,
        whiteSpace: 'nowrap',
        borderRadius: 4,
        transition: 'color var(--duration-slow) var(--ease-out)'
      }
    }, l))), /*#__PURE__*/React.createElement("div", {
      className: "desktop-only",
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        whiteSpace: 'nowrap',
        color: onDark ? '#fff' : undefined
      }
    }, "Provider login"), /*#__PURE__*/React.createElement("a", {
      href: "../pages/find-a-provider/index.html"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      }),
      style: {
        whiteSpace: 'nowrap'
      }
    }, "Find a Provider"))), /*#__PURE__*/React.createElement("div", {
      className: "mobile-cluster",
      style: {
        display: 'none',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "../pages/find-a-provider/index.html"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm",
      style: {
        whiteSpace: 'nowrap'
      }
    }, "Find a Provider")), /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(!open),
      "aria-label": open ? 'Close menu' : 'Open menu',
      "aria-expanded": open,
      "aria-controls": "mobile-menu",
      style: {
        display: 'inline-flex',
        border: '1px solid var(--border-default)',
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-sm)',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'var(--text-heading)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: open ? 'x' : 'menu',
      size: 22
    })))), open && /*#__PURE__*/React.createElement("div", {
      id: "mobile-menu",
      className: "mobile-cluster",
      style: {
        display: 'none',
        flexDirection: 'column',
        gap: 4,
        padding: '4px 22px 20px',
        background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(14px)'
      }
    }, links.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
      key: h,
      href: h,
      onClick: () => setOpen(false),
      style: {
        padding: '12px 0',
        fontSize: 16,
        fontWeight: 500,
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, l))), /*#__PURE__*/React.createElement("style", null, `
          @media (max-width:900px){
            .mobile-cluster{display:flex !important}
          }
          header nav a:focus-visible, header a:focus-visible, header button:focus-visible {
            outline: 3px solid var(--color-primary); outline-offset: 3px;
          }
        `));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "homepage/Nav.jsx", error: String((e && e.message) || e) }); }

// homepage/ProviderTrust.jsx
try { (() => {
window.HP = window.HP || {};
(function () {
  const {
    Card,
    Icon
  } = window.DesignSystem_e5ed69;
  const providers = [['Compliance is night and day versus CPAP. My patients actually wear it — and their outcomes show it.', 'Dr. Elena Ruiz', 'Sleep Physician · Board Certified', 'stethoscope'], ['Precision-milled fit and predictable titration make this the first appliance I reach for in my practice.', 'Dr. Aaron Feld', 'Dental Sleep Medicine', 'activity'], ['The insurance documentation is streamlined, so I can focus on care instead of paperwork.', 'Dr. Nadia Khan', 'DDS · Sleep Apnea Specialist', 'clipboard-check']];
  window.HP.ProviderTrust = function ProviderTrust() {
    return /*#__PURE__*/React.createElement("section", {
      id: "providers",
      style: {
        padding: '120px 0',
        background: 'var(--blue-700)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        top: -140,
        right: -120,
        width: 420,
        height: 420,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,154,217,0.35), transparent 68%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "wrap",
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        textAlign: 'center',
        maxWidth: 660,
        margin: '0 auto 48px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow",
      style: {
        color: 'var(--cyan-100)'
      }
    }, "For dentists & physicians"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(30px,4vw,42px)',
        marginTop: 12,
        color: '#fff'
      }
    }, "Trusted by the providers who prescribe it"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.6,
        color: 'rgba(255,255,255,0.8)',
        marginTop: 14
      }
    }, "Clinical precision and streamlined workflows, backed by peer-reviewed evidence.")), /*#__PURE__*/React.createElement("div", {
      className: "grid-3",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24
      }
    }, providers.map(([quote, name, role, icon], i) => /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      key: name,
      style: {
        transitionDelay: i * 0.09 + 's'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: 30,
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-md)',
        background: 'var(--cyan-50)',
        color: 'var(--cyan-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 24
    })), /*#__PURE__*/React.createElement("blockquote", {
      style: {
        margin: 0,
        fontSize: 17,
        lineHeight: 1.6,
        color: 'var(--text-heading)',
        flex: 1
      }
    }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: 'var(--text-heading)',
        fontSize: 15
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, role))))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "homepage/ProviderTrust.jsx", error: String((e && e.message) || e) }); }

// homepage/SocialProof.jsx
try { (() => {
window.HP = window.HP || {};
(function () {
  const {
    Stat,
    Icon
  } = window.DesignSystem_e5ed69;

  // Soft avatar initials in place of real patient photos
  const people = [['DR', 'var(--blue-500)'], ['MG', 'var(--cyan-500)'], ['JW', 'var(--blue-700)'], ['SD', 'var(--cyan-700)'], ['DO', 'var(--blue-500)'], ['LP', 'var(--cyan-500)'], ['RC', 'var(--blue-700)']];
  window.HP.SocialProof = function SocialProof() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '72px 0',
        background: 'var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap reveal",
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 40,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        flex: '1 1 420px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      value: 96,
      suffix: "%",
      align: "left",
      duration: 1800
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        lineHeight: 1.5,
        color: 'var(--text-heading)',
        maxWidth: 300,
        fontWeight: 500
      }
    }, "of patients prefer ProSomnus over CPAP")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, people.map(([initials, bg], i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 46,
        height: 46,
        borderRadius: '50%',
        background: bg,
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        fontWeight: 600,
        border: '3px solid var(--surface-card)',
        marginLeft: i === 0 ? 0 : -14,
        boxShadow: 'var(--shadow-xs)'
      }
    }, initials)), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 46,
        borderRadius: '50%',
        background: 'var(--blue-50)',
        color: 'var(--color-primary)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 700,
        border: '3px solid var(--surface-card)',
        marginLeft: -14
      }
    }, "100k+")), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.3
      }
    }, /*#__PURE__*/React.createElement("div", {
      role: "img",
      "aria-label": "Rated 5 out of 5 stars",
      style: {
        display: 'flex',
        gap: 2,
        color: 'var(--amber-500)'
      }
    }, Array.from({
      length: 5
    }).map((_, i) => /*#__PURE__*/React.createElement(Icon, {
      key: i,
      name: "star",
      size: 16,
      style: {
        fill: 'var(--amber-500)'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, "Trusted by patients nationwide")))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "homepage/SocialProof.jsx", error: String((e && e.message) || e) }); }

// homepage/Testimonials.jsx
try { (() => {
window.HP = window.HP || {};
(function () {
  const {
    Icon
  } = window.DesignSystem_e5ed69;
  const reviews = [['I finally sleep through the night — and so does my husband. I stopped dreading bedtime entirely.', 'Dana R.', 'Austin, TX', 5], ['I travel constantly and it fits in my pocket. No more lugging a machine and hoses through airport security.', 'Marcus T.', 'Denver, CO', 5], ['CPAP made me feel claustrophobic. This is just like a retainer — I forget I\u2019m even wearing it.', 'Priya S.', 'Seattle, WA', 5], ['My insurance covered nearly all of it. Wish I\u2019d switched years ago instead of fighting the mask.', 'Robert C.', 'Miami, FL', 5]];
  window.HP.Testimonials = function Testimonials() {
    const [idx, setIdx] = React.useState(0);
    const [perView, setPerView] = React.useState(getPer());
    function getPer() {
      return typeof window !== 'undefined' && window.innerWidth < 900 ? 1 : 2;
    }
    React.useEffect(() => {
      const on = () => setPerView(getPer());
      window.addEventListener('resize', on);
      return () => window.removeEventListener('resize', on);
    }, []);
    const maxIdx = Math.max(0, reviews.length - perView);
    const go = d => setIdx(p => Math.min(maxIdx, Math.max(0, p + d)));
    return /*#__PURE__*/React.createElement("section", {
      id: "reviews",
      "aria-label": "Patient testimonials",
      style: {
        padding: '120px 0',
        background: 'var(--surface-soft)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 40,
        gap: 20,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Patient stories"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(30px,4vw,42px)',
        marginTop: 12
      }
    }, "Loved by sleepers and their partners")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(CarouselBtn, {
      dir: "left",
      disabled: idx === 0,
      onClick: () => go(-1)
    }), /*#__PURE__*/React.createElement(CarouselBtn, {
      dir: "right",
      disabled: idx === maxIdx,
      onClick: () => go(1)
    }))), /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 24,
        transition: 'transform var(--duration-slow) var(--ease-out)',
        transform: `translateX(calc(-${idx} * (100% / ${perView} + ${24 / perView}px)))`
      }
    }, reviews.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: `0 0 calc((100% - ${(perView - 1) * 24}px) / ${perView})`
      }
    }, /*#__PURE__*/React.createElement(ReviewCard, {
      quote: r[0],
      name: r[1],
      loc: r[2],
      rating: r[3]
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 8,
        marginTop: 28
      }
    }, Array.from({
      length: maxIdx + 1
    }).map((_, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => setIdx(i),
      "aria-label": `Slide ${i + 1}`,
      style: {
        width: i === idx ? 26 : 9,
        height: 9,
        borderRadius: 999,
        border: 'none',
        cursor: 'pointer',
        background: i === idx ? 'var(--color-primary)' : 'var(--gray-300)',
        transition: 'all var(--duration-base) var(--ease-out)'
      }
    })))));
  };
  function ReviewCard({
    quote,
    name,
    loc,
    rating
  }) {
    return /*#__PURE__*/React.createElement("figure", {
      style: {
        margin: 0,
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-md)',
        padding: 32,
        boxShadow: 'var(--shadow-sm)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("div", {
      role: "img",
      "aria-label": `Rated ${rating} out of 5 stars`,
      style: {
        display: 'flex',
        gap: 2,
        color: 'var(--amber-500)'
      }
    }, Array.from({
      length: rating
    }).map((_, i) => /*#__PURE__*/React.createElement(Icon, {
      key: i,
      name: "star",
      size: 18,
      style: {
        fill: 'var(--amber-500)'
      }
    }))), /*#__PURE__*/React.createElement("blockquote", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-heading)',
        fontWeight: 500,
        fontSize: 21,
        lineHeight: 1.45,
        color: 'var(--text-heading)'
      }
    }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginTop: 'auto'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: 'var(--blue-50)',
        color: 'var(--blue-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
        fontSize: 16
      }
    }, name.charAt(0)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: 'var(--text-heading)'
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        display: 'flex',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 13
    }), " ", loc))));
  }
  function CarouselBtn({
    dir,
    disabled,
    onClick
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      disabled: disabled,
      "aria-label": dir === 'left' ? 'Previous' : 'Next',
      style: {
        width: 46,
        height: 46,
        borderRadius: '50%',
        border: '1px solid var(--border-default)',
        background: 'var(--surface-card)',
        color: disabled ? 'var(--gray-300)' : 'var(--color-primary)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: disabled ? 'none' : 'var(--shadow-xs)',
        transition: 'all var(--duration-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: dir === 'left' ? 'arrow-left' : 'arrow-right',
      size: 20
    }));
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "homepage/Testimonials.jsx", error: String((e && e.message) || e) }); }

// pages/faq/Faq.jsx
try { (() => {
window.FAQ = window.FAQ || {};
(function () {
  const {
    Button,
    Icon,
    Input,
    Badge
  } = window.DesignSystem_e5ed69;
  const DATA = {
    patients: [{
      q: 'Does oral appliance therapy really work as well as CPAP?',
      a: 'For most people with mild to moderate obstructive sleep apnea — and many with severe OSA who can\u2019t tolerate CPAP — it\u2019s a clinically proven, guideline-recommended treatment. 96% of ProSomnus patients prefer it over CPAP, and because it\u2019s comfortable, people actually keep using it.'
    }, {
      q: 'Is ProSomnus covered by my insurance?',
      a: 'Yes. ProSomnus is covered by nearly all medical insurance, Medicare, and VA benefits. Most patients pay little to nothing out of pocket, and your provider\u2019s team verifies your specific coverage before you begin.'
    }, {
      q: 'What does it feel like to wear?',
      a: 'It\u2019s worn like a retainer and precision-milled to fit your mouth exactly — no straps, masks, or hoses. Most people adjust within a few nights.'
    }, {
      q: 'How do I get started?',
      a: 'Find a ProSomnus-trained provider near you. After a short consult and an at-home sleep test, your custom appliance is milled, fitted, and fine-tuned for comfort.'
    }, {
      q: 'Will it help with snoring too?',
      a: 'Yes — by gently keeping your airway open, the appliance reduces or eliminates snoring for most patients, which your partner will appreciate as much as you do.'
    }, {
      q: 'How do I clean and care for it?',
      a: 'Just rinse and brush it gently each morning — no distilled water, filters, or hoses. Your provider will share simple care instructions at your fitting.'
    }],
    providers: [{
      q: 'What clinical evidence supports ProSomnus?',
      a: 'ProSomnus is backed by peer-reviewed outcomes showing significant AHI reduction and high adherence. Aggregated data shows a 91% average reduction in apnea events and 94% therapy continuation at one year.'
    }, {
      q: 'How does the digital workflow work?',
      a: 'Submit an intraoral scan through the provider portal. Our AI-assisted design engine optimizes fit and airway geometry, a clinician reviews every case, and the appliance is precision-milled and shipped — typically within 48 hours of design approval.'
    }, {
      q: 'What billing and prior-auth support do you offer?',
      a: 'We provide medical billing documentation and prior-authorization support so covered care doesn\u2019t become administrative burden. A dedicated clinical success manager helps your team throughout.'
    }, {
      q: 'Is there a cost to join the network?',
      a: 'No. There\u2019s no upfront cost to join, and clinical onboarding is free and CE-eligible. You can be prescribing within a few weeks.'
    }, {
      q: 'What training is provided?',
      a: 'Free, CE-eligible onboarding covers case selection, scanning, titration, and follow-up. Your success manager provides ongoing clinical and practice support.'
    }]
  };
  function Item({
    it,
    open,
    onToggle,
    query
  }) {
    const hl = text => {
      if (!query) return text;
      const i = text.toLowerCase().indexOf(query.toLowerCase());
      if (i < 0) return text;
      return /*#__PURE__*/React.createElement(React.Fragment, null, text.slice(0, i), /*#__PURE__*/React.createElement("mark", {
        style: {
          background: 'var(--amber-50)',
          color: 'inherit',
          padding: '0 2px',
          borderRadius: 3
        }
      }, text.slice(i, i + query.length)), text.slice(i + query.length));
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-md)',
        boxShadow: open ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        overflow: 'hidden',
        transition: 'box-shadow var(--duration-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onToggle,
      "aria-expanded": open,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        textAlign: 'left',
        padding: '20px 24px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: 18,
        color: 'var(--text-heading)'
      }
    }, /*#__PURE__*/React.createElement("span", null, hl(it.q)), /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        color: 'var(--color-primary)',
        transform: open ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--duration-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 22
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: open ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--duration-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 24px 22px',
        fontSize: 16,
        lineHeight: 1.7,
        color: 'var(--text-body)',
        maxWidth: 760
      }
    }, hl(it.a)))));
  }
  window.FAQ.Page = function Page() {
    const [tab, setTab] = React.useState('patients');
    const [query, setQuery] = React.useState('');
    const [open, setOpen] = React.useState('0');
    const list = DATA[tab].filter(it => !query || (it.q + ' ' + it.a).toLowerCase().includes(query.toLowerCase()));
    const switchTab = t => {
      setTab(t);
      setOpen('0');
    };
    return /*#__PURE__*/React.createElement("main", {
      id: "main"
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'linear-gradient(180deg, var(--blue-50), var(--surface-card))',
        padding: '72px 0 44px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap",
      style: {
        textAlign: 'center',
        maxWidth: 720,
        marginInline: 'auto'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "We're here to help"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(38px,5vw,58px)',
        lineHeight: 1.05,
        marginTop: 12
      }
    }, "Frequently Asked Questions"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        lineHeight: 1.6,
        color: 'var(--text-body)',
        maxWidth: 540,
        margin: '16px auto 0'
      }
    }, "Clear answers for patients and providers. Search, or browse by topic."), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 520,
        margin: '28px auto 0'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      value: query,
      onChange: e => setQuery(e.target.value),
      placeholder: "Search questions\u2026",
      "aria-label": "Search questions",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 18
      })
    })))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '48px 0 104px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap",
      style: {
        maxWidth: 820
      }
    }, /*#__PURE__*/React.createElement("div", {
      role: "tablist",
      "aria-label": "FAQ audience",
      style: {
        display: 'inline-flex',
        gap: 4,
        padding: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--surface-soft)',
        marginBottom: 32
      }
    }, [['patients', 'For Patients', 'user'], ['providers', 'For Providers', 'stethoscope']].map(([k, l, ic]) => {
      const on = tab === k;
      return /*#__PURE__*/React.createElement("button", {
        key: k,
        role: "tab",
        "aria-selected": on,
        onClick: () => switchTab(k),
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          border: 'none',
          cursor: 'pointer',
          padding: '10px 22px',
          borderRadius: 'var(--radius-pill)',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: 15,
          background: on ? 'var(--color-primary)' : 'transparent',
          color: on ? '#fff' : 'var(--text-body)',
          transition: 'all var(--duration-base) var(--ease-out)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: ic,
        size: 17
      }), " ", l);
    })), list.length ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, list.map((it, i) => {
      const id = `${tab}-${i}`;
      return /*#__PURE__*/React.createElement(Item, {
        key: id,
        it: it,
        query: query,
        open: open === id,
        onToggle: () => setOpen(open === id ? null : id)
      });
    })) : /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '56px 0',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search-x",
      size: 40
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        marginTop: 12
      }
    }, "No questions match \"", query, "\". Try a different search."), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setQuery('')
    }, "Clear search")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--surface-soft)',
        padding: 'clamp(28px,4vw,44px)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: 'var(--cyan-50)',
        color: 'var(--cyan-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "messages-square",
      size: 26
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 26
      }
    }, "Still have questions?"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 1.6,
        color: 'var(--text-body)',
        maxWidth: 420,
        margin: '10px auto 22px'
      }
    }, "Our care team is happy to help \u2014 or connect you with a provider near you."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 16
      })
    }, "Contact us"), /*#__PURE__*/React.createElement("a", {
      href: "../find-a-provider/index.html"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Find a Provider")))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/faq/Faq.jsx", error: String((e && e.message) || e) }); }

// pages/find-a-provider/FindProvider.jsx
try { (() => {
window.FAP = window.FAP || {};
(function () {
  const {
    Button,
    Icon,
    Select,
    Input,
    Badge
  } = window.DesignSystem_e5ed69;
  const PROVIDERS = [{
    id: 1,
    name: 'Dr. Elena Ruiz',
    spec: 'Sleep Physician',
    clinic: 'Bayside Sleep Medicine',
    rating: 4.9,
    reviews: 212,
    dist: 1.2,
    x: 28,
    y: 34,
    insur: ['Aetna', 'Medicare'],
    initials: 'ER'
  }, {
    id: 2,
    name: 'Dr. Marcus Lee',
    spec: 'Dental Sleep Medicine',
    clinic: 'Harborview Dental',
    rating: 4.8,
    reviews: 168,
    dist: 2.4,
    x: 54,
    y: 22,
    insur: ['Cigna', 'VA benefits'],
    initials: 'ML'
  }, {
    id: 3,
    name: 'Dr. Priya Anand',
    spec: 'Sleep Physician',
    clinic: 'Cascade Sleep Center',
    rating: 5.0,
    reviews: 301,
    dist: 3.1,
    x: 43,
    y: 58,
    insur: ['BCBS', 'Medicare'],
    initials: 'PA'
  }, {
    id: 4,
    name: 'Dr. James Whitfield',
    spec: 'Dental Sleep Medicine',
    clinic: 'Summit Family Dental',
    rating: 4.7,
    reviews: 94,
    dist: 4.0,
    x: 70,
    y: 47,
    insur: ['UnitedHealthcare'],
    initials: 'JW'
  }, {
    id: 5,
    name: 'Dr. Dana Okafor',
    spec: 'Sleep Physician',
    clinic: 'Lakeside Pulmonary',
    rating: 4.9,
    reviews: 145,
    dist: 5.3,
    x: 18,
    y: 66,
    insur: ['Aetna', 'VA benefits'],
    initials: 'DO'
  }, {
    id: 6,
    name: 'Dr. Sofia Martone',
    spec: 'Dental Sleep Medicine',
    clinic: 'Meridian Dental Group',
    rating: 4.8,
    reviews: 187,
    dist: 6.1,
    x: 62,
    y: 72,
    insur: ['Medicare', 'Cigna'],
    initials: 'SM'
  }];
  function Stars({
    r
  }) {
    return /*#__PURE__*/React.createElement("span", {
      role: "img",
      "aria-label": `Rated ${r} out of 5`,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 3,
        color: 'var(--amber-500)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "star",
      size: 15,
      style: {
        fill: 'var(--amber-500)'
      }
    }), /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-heading)',
        fontSize: 14
      }
    }, r.toFixed(1)));
  }
  function Skeleton() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-sm)',
        padding: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: sk(52, 52, '50%')
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: sk('60%', 15, 6, '0 0 8px')
    }), /*#__PURE__*/React.createElement("span", {
      style: sk('40%', 12, 6)
    }))), /*#__PURE__*/React.createElement("span", {
      style: sk('100%', 12, 6, '18px 0 8px')
    }), /*#__PURE__*/React.createElement("span", {
      style: sk('70%', 12, 6)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: sk('50%', 40, 8)
    }), /*#__PURE__*/React.createElement("span", {
      style: sk('50%', 40, 8)
    })));
  }
  function sk(w, h, r, m) {
    return {
      display: 'block',
      width: w,
      height: h,
      borderRadius: r,
      margin: m || 0,
      background: 'linear-gradient(90deg, var(--gray-100) 25%, var(--gray-200) 37%, var(--gray-100) 63%)',
      backgroundSize: '400% 100%',
      animation: 'fap-shimmer 1.4s ease infinite'
    };
  }
  function ProviderCard({
    p,
    hovered,
    onHover
  }) {
    return /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => onHover(p.id),
      onMouseLeave: () => onHover(null),
      style: {
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-md)',
        padding: 22,
        boxShadow: hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hovered ? 'translateY(-3px)' : 'none',
        transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
        border: hovered ? '1px solid var(--color-secondary)' : '1px solid transparent'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 52,
        height: 52,
        borderRadius: '50%',
        flexShrink: 0,
        background: 'var(--blue-50)',
        color: 'var(--blue-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontFamily: 'var(--font-heading)'
      }
    }, p.initials), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: 17,
        color: 'var(--text-heading)'
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--color-primary)',
        fontWeight: 500
      }
    }, p.spec))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginTop: 14,
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Stars, {
      r: p.rating
    }), " ", /*#__PURE__*/React.createElement("span", null, "(", p.reviews, ")"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 14
    }), " ", p.dist, " mi")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-body)',
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "building-2",
      size: 15,
      color: "var(--text-muted)"
    }), " ", p.clinic), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap',
        marginTop: 12
      }
    }, p.insur.map(x => /*#__PURE__*/React.createElement(Badge, {
      key: x,
      tone: "wellness",
      size: "sm"
    }, x))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      fullWidth: true,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 15
      })
    }, "Call"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm",
      fullWidth: true,
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 15
      })
    }, "Book")));
  }
  window.FAP.Page = function Page() {
    const [loading, setLoading] = React.useState(false);
    const [results, setResults] = React.useState(PROVIDERS);
    const [hovered, setHovered] = React.useState(null);
    const runSearch = () => {
      setLoading(true);
      setResults([]);
      setTimeout(() => {
        setResults(PROVIDERS);
        setLoading(false);
      }, 1300);
    };
    return /*#__PURE__*/React.createElement("main", {
      id: "main"
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'linear-gradient(180deg, var(--blue-50), var(--surface-card))',
        padding: '56px 0 40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        maxWidth: 640,
        margin: '0 auto 32px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "100k+ patients treated near you"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(34px,4.4vw,52px)',
        lineHeight: 1.06,
        marginTop: 12
      }
    }, "Find a Provider"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        lineHeight: 1.6,
        color: 'var(--text-body)',
        marginTop: 14
      }
    }, "Search ProSomnus-trained dentists and sleep physicians who accept your insurance.")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        padding: 18,
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr auto',
        gap: 12,
        alignItems: 'end',
        maxWidth: 940,
        margin: '0 auto'
      },
      className: "fap-search"
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Location",
      defaultValue: "San Mateo, CA",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "map-pin",
        size: 16
      })
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Specialty",
      options: ['All specialties', 'Sleep Physician', 'Dental Sleep Medicine']
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Insurance",
      options: ['All insurance', 'Aetna', 'BCBS', 'Cigna', 'UnitedHealthcare', 'Medicare', 'VA benefits']
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: runSearch,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 18
      }),
      style: {
        whiteSpace: 'nowrap'
      }
    }, "Search")))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '40px 0 96px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap fap-layout",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr',
        gap: 32,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'sticky',
        top: 92
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: 560,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        background: 'linear-gradient(160deg,#eaf2fb,#dfeef8)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(34,97,174,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,97,174,0.08) 1px, transparent 1px)',
        backgroundSize: '46px 46px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        width: 220,
        height: 220,
        borderRadius: '50%',
        left: '35%',
        top: '30%',
        background: 'radial-gradient(circle, rgba(0,154,217,0.12), transparent 70%)'
      }
    }), PROVIDERS.map(p => {
      const on = hovered === p.id;
      return /*#__PURE__*/React.createElement("button", {
        key: p.id,
        onMouseEnter: () => setHovered(p.id),
        onMouseLeave: () => setHovered(null),
        "aria-label": `${p.name}, ${p.dist} miles`,
        style: {
          position: 'absolute',
          left: `${p.x}%`,
          top: `${p.y}%`,
          transform: `translate(-50%,-100%) scale(${on ? 1.18 : 1})`,
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          transition: 'transform var(--duration-base) var(--ease-out)',
          zIndex: on ? 5 : 1
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 34,
          height: 34,
          borderRadius: '50% 50% 50% 0',
          transform: 'rotate(-45deg)',
          background: on ? 'var(--amber-500)' : 'var(--color-primary)',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          transform: 'rotate(45deg)',
          color: on ? 'var(--gray-900)' : '#fff',
          fontWeight: 700,
          fontSize: 12,
          fontFamily: 'var(--font-heading)'
        }
      }, p.initials)), on && /*#__PURE__*/React.createElement("span", {
        style: {
          marginTop: 6,
          background: 'var(--surface-card)',
          boxShadow: 'var(--shadow-md)',
          borderRadius: 6,
          padding: '4px 8px',
          fontSize: 12,
          fontWeight: 600,
          color: 'var(--text-heading)',
          whiteSpace: 'nowrap'
        }
      }, p.clinic)));
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 14,
        bottom: 14,
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(6px)',
        borderRadius: 'var(--radius-sm)',
        padding: '8px 12px',
        fontSize: 13,
        color: 'var(--text-body)',
        display: 'flex',
        alignItems: 'center',
        gap: 7
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "navigation",
      size: 15,
      color: "var(--color-primary)"
    }), " ", results.length || 6, " providers within 10 miles"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 22
      }
    }, loading ? 'Searching…' : `${results.length} providers near you`), /*#__PURE__*/React.createElement(Select, {
      options: ['Sort: Distance', 'Sort: Rating', 'Sort: Availability'],
      "aria-label": "Sort results",
      style: {
        maxWidth: 200
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16
      },
      className: "fap-cards"
    }, loading ? Array.from({
      length: 4
    }).map((_, i) => /*#__PURE__*/React.createElement(Skeleton, {
      key: i
    })) : results.map(p => /*#__PURE__*/React.createElement(ProviderCard, {
      key: p.id,
      p: p,
      hovered: hovered === p.id,
      onHover: setHovered
    })))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/find-a-provider/FindProvider.jsx", error: String((e && e.message) || e) }); }

// pages/how-it-works/HowItWorksMore.jsx
try { (() => {
window.HIW = window.HIW || {};
(function () {
  const {
    Button,
    Icon
  } = window.DesignSystem_e5ed69;
  const ROWS = [['Comfort', 'Worn like a retainer', 'Mask strapped to your face'], ['Noise', 'Silent', 'Constant motor hum'], ['Travel', 'Fits in your pocket', 'Bulky machine + power'], ['Maintenance', 'Just rinse & go', 'Hoses, filters, distilled water'], ['Getting started', 'Home sleep test', 'Often a sleep-lab stay']];
  window.HIW.Comparison = function Comparison() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '104px 0',
        background: 'var(--surface-soft)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        textAlign: 'center',
        maxWidth: 620,
        margin: '0 auto 44px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow",
      style: {
        color: 'var(--color-secondary-strong)'
      }
    }, "An honest comparison"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(30px,3.6vw,40px)',
        marginTop: 10
      }
    }, "ProSomnus vs. CPAP")), /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        maxWidth: 880,
        margin: '0 auto',
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr 1fr'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 24px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 24px',
        background: 'var(--blue-50)',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-mark.svg",
      style: {
        height: 22
      },
      alt: "",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        color: 'var(--blue-700)'
      }
    }, "ProSomnus")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 24px',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        color: 'var(--text-muted)'
      }
    }, "CPAP")), ROWS.map(([label, ps, cpap]) => /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr 1fr',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 24px',
        fontWeight: 600,
        color: 'var(--text-heading)',
        fontSize: 15
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 24px',
        background: 'rgba(230,241,251,0.4)',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 15,
        color: 'var(--text-heading)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18,
      color: "var(--success)"
    }), " ", ps), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 18,
      color: "var(--gray-400)"
    }), " ", cpap))))));
  };
  const FAQS = [{
    q: 'Does it really work as well as CPAP?',
    a: 'For most people with mild to moderate obstructive sleep apnea — and many with severe OSA who can\u2019t tolerate CPAP — oral appliance therapy is a clinically proven, guideline-recommended treatment. 96% of ProSomnus patients prefer it over CPAP, and higher comfort means people actually keep using it.'
  }, {
    q: 'Is it covered by insurance?',
    a: 'Yes. ProSomnus is covered by nearly all medical insurance, Medicare, and VA benefits. Most patients pay little to nothing out of pocket. Your provider\u2019s team verifies your specific coverage before you start.'
  }, {
    q: 'Is it comfortable to wear?',
    a: 'It\u2019s worn like a retainer and precision-milled to fit your mouth exactly. There are no straps, masks, or hoses — most people adjust within a few nights.'
  }, {
    q: 'How long does the whole process take?',
    a: 'Many patients go from first consult to a fitted device in a few weeks. The home sleep test returns results in days, and your custom appliance is milled and fitted shortly after.'
  }];
  window.HIW.FAQ = function FAQ() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '104px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap",
      style: {
        maxWidth: 820
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        textAlign: 'center',
        marginBottom: 40
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Good to know"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(30px,3.6vw,40px)',
        marginTop: 10
      }
    }, "Common questions")), /*#__PURE__*/React.createElement("div", {
      className: "reveal"
    }, /*#__PURE__*/React.createElement(window.SITE.Accordion, {
      items: FAQS
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginTop: 28
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "../faq/index.html",
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--color-primary)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, "See all FAQs ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })))));
  };
  window.HIW.CTA = function CTA() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '104px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(120deg, #0C447C, #16457E 45%, #06618B)',
        padding: 'clamp(48px,7vw,80px)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        width: 420,
        height: 420,
        borderRadius: '50%',
        top: -160,
        right: -80,
        background: 'radial-gradient(circle, rgba(0,154,217,0.4), transparent 68%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(32px,4vw,48px)',
        color: '#fff'
      }
    }, "Ready, set, sleep."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        lineHeight: 1.6,
        color: 'rgba(255,255,255,0.85)',
        maxWidth: 500,
        margin: '16px auto 32px'
      }
    }, "Find a ProSomnus-trained provider near you and take the first step tonight."), /*#__PURE__*/React.createElement("a", {
      href: "../find-a-provider/index.html"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18
      })
    }, "Find a Provider"))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/how-it-works/HowItWorksMore.jsx", error: String((e && e.message) || e) }); }

// pages/how-it-works/HowItWorksSteps.jsx
try { (() => {
window.HIW = window.HIW || {};
(function () {
  const {
    Button,
    Icon,
    Card
  } = window.DesignSystem_e5ed69;

  /* ---------- Animated per-step diagrams (functional, icon-based) ---------- */
  function DiagramMeet() {
    return /*#__PURE__*/React.createElement("div", {
      style: dbox()
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...ring(230),
        animation: 'hiw-pulse 4s var(--ease-in-out) infinite'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        ...ring(160),
        animation: 'hiw-pulse 4s var(--ease-in-out) 1s infinite'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 40,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: avatar('var(--blue-50)', 'var(--color-primary)')
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: 30
    })), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--cyan-500)',
        animation: 'hiw-travel 2.4s var(--ease-in-out) infinite'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: avatar('var(--cyan-50)', 'var(--cyan-700)')
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "stethoscope",
      size: 30
    }))), /*#__PURE__*/React.createElement("div", {
      style: caption()
    }, "A quick video or in-office visit"));
  }
  function DiagramTest() {
    return /*#__PURE__*/React.createElement("div", {
      style: dbox()
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...ring(230),
        animation: 'hiw-pulse 4s var(--ease-in-out) infinite'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 130,
        height: 130,
        borderRadius: 28,
        background: '#fff',
        boxShadow: 'var(--shadow-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
      }
    }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 8,
        borderRadius: 4,
        background: 'var(--color-primary)',
        height: 20,
        animation: `hiw-wave 1.1s var(--ease-in-out) ${i * 0.13}s infinite`
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 12,
        right: 14,
        color: 'var(--cyan-500)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "moon",
      size: 18
    }))), /*#__PURE__*/React.createElement("div", {
      style: caption()
    }, "Sleep at home, in your own bed"));
  }
  function DiagramFit() {
    return /*#__PURE__*/React.createElement("div", {
      style: dbox()
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...ring(230),
        animation: 'hiw-pulse 4s var(--ease-in-out) infinite'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 150,
        height: 150,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 50% 35%, var(--cyan-50), var(--blue-50))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "smile",
      size: 54,
      color: "var(--color-primary-strong)"
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 3,
        background: 'linear-gradient(90deg, transparent, var(--cyan-500), transparent)',
        animation: 'hiw-scan 2.6s var(--ease-in-out) infinite'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: caption()
    }, "A custom device, milled to fit"));
  }
  const STEPS = [{
    key: 'meet',
    n: '01',
    title: 'Meet a Provider',
    icon: 'calendar-check',
    body: 'Connect with a ProSomnus-trained dentist or sleep physician near you. They review your history and confirm oral appliance therapy is right for you — often in a single visit.',
    points: ['No referral needed to start', 'In-office or virtual consult'],
    Diagram: DiagramMeet
  }, {
    key: 'test',
    n: '02',
    title: 'Home Sleep Test',
    icon: 'moon',
    body: 'Skip the sleep lab. A simple, comfortable home test measures your breathing overnight in your own bed. Your provider uses the results to tailor your treatment.',
    points: ['Sleep in your own bed', 'Results in a few days'],
    Diagram: DiagramTest
  }, {
    key: 'fit',
    n: '03',
    title: 'Get Fitted',
    icon: 'badge-check',
    body: 'A quick digital scan captures your bite — no messy molds. Your custom appliance is precision-milled, then fitted and fine-tuned for comfort and results.',
    points: ['Digital scan, no molds', 'Adjusted for a perfect fit'],
    Diagram: DiagramFit
  }];
  window.HIW.Hero = function Hero() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        padding: '76px 0 88px',
        background: 'linear-gradient(180deg, var(--blue-50), #F4F9FE 60%, var(--surface-card))'
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        width: 420,
        height: 420,
        borderRadius: '50%',
        top: -140,
        right: -80,
        background: 'radial-gradient(circle, rgba(0,154,217,0.18), transparent 68%)',
        filter: 'blur(6px)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "wrap",
      style: {
        position: 'relative',
        textAlign: 'center',
        maxWidth: 760,
        marginInline: 'auto'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Simple from day one"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(38px, 5vw, 60px)',
        lineHeight: 1.05,
        marginTop: 14
      }
    }, "How ProSomnus Works"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 20,
        lineHeight: 1.6,
        color: 'var(--text-body)',
        maxWidth: 560,
        margin: '18px auto 0'
      }
    }, "Three calm, guided steps from first hello to a full night's sleep \u2014 no lab stays, no masks, no guesswork.")));
  };
  window.HIW.Steps = function Steps() {
    const [active, setActive] = React.useState(0);
    const step = STEPS[active];
    const Diagram = step.Diagram;
    return /*#__PURE__*/React.createElement("section", {
      id: "steps",
      style: {
        padding: '104px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        maxWidth: 620,
        margin: '0 auto 44px'
      },
      className: "reveal"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "The journey"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(30px,3.6vw,40px)',
        marginTop: 10
      }
    }, "Three steps to better sleep")), /*#__PURE__*/React.createElement("div", {
      role: "tablist",
      "aria-label": "Treatment steps",
      style: {
        display: 'flex',
        gap: 12,
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 40
      }
    }, STEPS.map((s, i) => {
      const on = i === active;
      return /*#__PURE__*/React.createElement("button", {
        key: s.key,
        role: "tab",
        "aria-selected": on,
        "aria-controls": `panel-${s.key}`,
        onClick: () => setActive(i),
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          padding: '12px 20px',
          cursor: 'pointer',
          borderRadius: 'var(--radius-pill)',
          fontFamily: 'var(--font-body)',
          fontSize: 15,
          fontWeight: 600,
          border: `1px solid ${on ? 'transparent' : 'var(--border-default)'}`,
          background: on ? 'var(--color-primary)' : 'var(--surface-card)',
          color: on ? '#fff' : 'var(--text-body)',
          boxShadow: on ? 'var(--shadow-md)' : 'none',
          transition: 'all var(--duration-base) var(--ease-out)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          opacity: on ? 0.85 : 0.5
        }
      }, s.n), s.title);
    })), /*#__PURE__*/React.createElement("div", {
      id: `panel-${step.key}`,
      role: "tabpanel",
      key: step.key,
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 48,
        alignItems: 'center',
        animation: 'hiw-fade var(--duration-slow) var(--ease-out)'
      },
      className: "hiw-panel"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 50,
        height: 50,
        borderRadius: 'var(--radius-md)',
        background: 'var(--blue-50)',
        color: 'var(--color-primary)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: step.icon,
      size: 26
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--color-primary)'
      }
    }, "Step ", step.n)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 30,
        marginBottom: 12
      }
    }, step.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.7,
        color: 'var(--text-body)',
        maxWidth: 460
      }
    }, step.body), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        padding: 0,
        margin: '20px 0 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, step.points.map(p => /*#__PURE__*/React.createElement("li", {
      key: p,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontSize: 15,
        color: 'var(--text-heading)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18,
      color: "var(--success)"
    }), " ", p))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 28
      }
    }, active > 0 && /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setActive(active - 1),
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-left",
        size: 16
      })
    }, "Back"), active < STEPS.length - 1 ? /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setActive(active + 1),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Next step") : /*#__PURE__*/React.createElement("a", {
      href: "../find-a-provider/index.html"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Find a Provider")))), /*#__PURE__*/React.createElement("div", {
      style: {
        order: 1
      }
    }, /*#__PURE__*/React.createElement(Diagram, null)))));
  };

  /* shared diagram styles */
  function dbox() {
    return {
      position: 'relative',
      minHeight: 320,
      borderRadius: 'var(--radius-lg)',
      background: 'linear-gradient(160deg, var(--surface-soft), var(--blue-50))',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 22,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    };
  }
  function ring(sz) {
    return {
      position: 'absolute',
      width: sz,
      height: sz,
      borderRadius: '50%',
      border: '1.5px solid rgba(34,97,174,0.16)',
      pointerEvents: 'none'
    };
  }
  function avatar(bg, fg) {
    return {
      width: 84,
      height: 84,
      borderRadius: '50%',
      background: bg,
      color: fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-md)',
      zIndex: 1
    };
  }
  function caption() {
    return {
      position: 'relative',
      fontSize: 14,
      color: 'var(--text-muted)',
      fontWeight: 500
    };
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/how-it-works/HowItWorksSteps.jsx", error: String((e && e.message) || e) }); }

// pages/providers/Providers.jsx
try { (() => {
window.PRV = window.PRV || {};
(function () {
  const {
    Button,
    Icon,
    Card,
    Badge,
    Input
  } = window.DesignSystem_e5ed69;
  window.PRV.Hero = function Hero() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(120deg, #0C447C, #16457E 45%, #06618B)',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        width: 520,
        height: 520,
        borderRadius: '50%',
        top: -160,
        right: -120,
        background: 'radial-gradient(circle, rgba(0,154,217,0.4), transparent 68%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "wrap prv-hero",
      style: {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: 48,
        alignItems: 'center',
        padding: '84px 0'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow",
      style: {
        color: 'var(--cyan-100)'
      }
    }, "For dentists & sleep physicians"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(36px,4.6vw,56px)',
        lineHeight: 1.05,
        marginTop: 14,
        color: '#fff'
      }
    }, "Prescribe with Confidence"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        lineHeight: 1.6,
        color: 'rgba(255,255,255,0.86)',
        maxWidth: 480,
        marginTop: 18
      }
    }, "Precision-milled oral appliances your patients actually wear \u2014 backed by clinical evidence, AI-assisted design, and streamlined insurance support."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        marginTop: 30,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#join"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18
      })
    }, "Join our network")), /*#__PURE__*/React.createElement("button", {
      className: "prv-ghost",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 18,
        padding: '15px 28px',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        color: '#fff',
        background: 'rgba(255,255,255,0.14)',
        border: '1px solid rgba(255,255,255,0.42)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "log-in",
      size: 16
    }), " Provider login"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14
      },
      className: "prv-hero-stats"
    }, [['94%', '1-year adherence', 'heart-pulse'], ['91%', 'AHI reduction', 'activity'], ['48hr', 'design turnaround', 'timer'], ['100%', 'digital workflow', 'scan']].map(([v, l, ic]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        background: 'rgba(255,255,255,0.1)',
        border: '1px solid rgba(255,255,255,0.16)',
        borderRadius: 'var(--radius-md)',
        padding: 20,
        backdropFilter: 'blur(4px)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22,
      color: "var(--cyan-100)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: 30,
        marginTop: 10,
        color: '#fff'
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.75)',
        marginTop: 2
      }
    }, l))))));
  };
  const WHY = [['smile-plus', 'Patients keep wearing it', 'Comfort drives compliance. 94% of patients continue therapy at one year — far above CPAP — which means better outcomes on your charts.'], ['line-chart', 'Predictable, measurable results', 'Precision milling and guided titration deliver consistent AHI reduction you can document and defend at follow-up.'], ['file-check-2', 'Insurance made simple', 'We support prior authorization and medical billing documentation, so covered care doesn\u2019t become administrative burden.'], ['trending-up', 'Grow your practice', 'Add a high-demand, reimbursable service line and become the go-to referral for sleep in your community.']];
  window.PRV.Why = function Why() {
    return /*#__PURE__*/React.createElement("section", {
      id: "why",
      style: {
        padding: '104px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        textAlign: 'center',
        maxWidth: 620,
        margin: '0 auto 44px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Why prescribe ProSomnus"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(30px,3.6vw,40px)',
        marginTop: 10
      }
    }, "Better for patients. Better for practice.")), /*#__PURE__*/React.createElement("div", {
      className: "reveal prv-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: 20
      }
    }, WHY.map(([ic, t, b]) => /*#__PURE__*/React.createElement(Card, {
      key: t,
      hoverLift: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 52,
        height: 52,
        flexShrink: 0,
        borderRadius: 'var(--radius-md)',
        background: 'var(--blue-50)',
        color: 'var(--color-primary)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 26
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 20,
        marginBottom: 8
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        lineHeight: 1.65,
        color: 'var(--text-body)'
      }
    }, b))))))));
  };
  window.PRV.Tech = function Tech() {
    const blocks = [{
      tag: 'AI-assisted design',
      title: 'Every appliance, optimized by algorithm',
      icon: 'cpu',
      body: 'Our design engine analyzes each patient\u2019s scan and bite to optimize fit, retention, and airway geometry — then a clinician reviews every case before milling.',
      points: ['Scan-driven fit optimization', 'Clinician-reviewed, every case']
    }, {
      tag: 'Precision manufacturing',
      title: 'Medical-grade, milled to microns',
      icon: 'settings-2',
      body: 'Control-cured, precision-milled from a single medical-grade block — no injection-molded weak points. The result is a stronger, thinner, more comfortable device.',
      points: ['Single-block milled control', 'Thinner, stronger, more comfortable']
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '104px 0',
        background: 'var(--surface-soft)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        textAlign: 'center',
        maxWidth: 620,
        margin: '0 auto 52px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow",
      style: {
        color: 'var(--color-secondary-strong)'
      }
    }, "The technology"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(30px,3.6vw,40px)',
        marginTop: 10
      }
    }, "Precision, end to end")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 28
      }
    }, blocks.map((b, i) => /*#__PURE__*/React.createElement("div", {
      key: b.tag,
      className: "reveal prv-tech",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 40,
        alignItems: 'center',
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)',
        padding: 'clamp(24px,3vw,40px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        order: i % 2 === 0 ? 0 : 1
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "primary"
    }, b.tag), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 26,
        margin: '14px 0 12px'
      }
    }, b.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 1.7,
        color: 'var(--text-body)',
        maxWidth: 440
      }
    }, b.body), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        padding: 0,
        margin: '18px 0 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, b.points.map(p => /*#__PURE__*/React.createElement("li", {
      key: p,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontSize: 15,
        color: 'var(--text-heading)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18,
      color: "var(--success)"
    }), " ", p)))), /*#__PURE__*/React.createElement("div", {
      style: {
        order: i % 2 === 0 ? 1 : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        aspectRatio: '4/3',
        borderRadius: 'var(--radius-md)',
        background: 'linear-gradient(150deg, var(--blue-50), var(--cyan-50))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: b.icon,
      size: 72,
      color: "var(--color-primary)",
      style: {
        opacity: 0.85
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(34,97,174,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,97,174,0.06) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }
    }))))))));
  };
  const STEPS = [['clipboard-list', 'Apply', 'Tell us about your practice. Approval is quick and there\u2019s no upfront cost to join.'], ['graduation-cap', 'Get trained', 'Free clinical onboarding and CE-eligible education get your team confident fast.'], ['send', 'Start prescribing', 'Submit digital scans through the portal. We handle design, milling, and billing support.']];
  window.PRV.Start = function Start() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '104px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        textAlign: 'center',
        maxWidth: 620,
        margin: '0 auto 44px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Getting started"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(30px,3.6vw,40px)',
        marginTop: 10
      }
    }, "Up and running in three steps")), /*#__PURE__*/React.createElement("div", {
      className: "reveal prv-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24
      }
    }, STEPS.map(([ic, t, b], i) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        position: 'relative',
        padding: '32px 24px',
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 20,
        right: 22,
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: 40,
        color: 'var(--blue-50)'
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 52,
        height: 52,
        borderRadius: 'var(--radius-md)',
        background: 'var(--cyan-50)',
        color: 'var(--cyan-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 26
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 21,
        margin: '16px 0 8px'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        lineHeight: 1.65,
        color: 'var(--text-body)'
      }
    }, b))))));
  };
  window.PRV.Join = function Join() {
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement("section", {
      id: "join",
      style: {
        padding: '40px 0 104px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 0,
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)'
      },
      className: "prv-join"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'clamp(36px,5vw,56px)',
        background: 'linear-gradient(150deg, #0C447C, #06618B)',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-logo-white.svg",
      alt: "ProSomnus",
      style: {
        height: 28,
        marginBottom: 22
      }
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(28px,3.4vw,40px)',
        color: '#fff',
        lineHeight: 1.1
      }
    }, "Join our provider network"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.6,
        color: 'rgba(255,255,255,0.85)',
        marginTop: 16,
        maxWidth: 380
      }
    }, "No upfront cost. Free training. Full billing support. Start offering the CPAP alternative your patients are asking for."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginTop: 26
      }
    }, ['Dedicated clinical success manager', 'CE-eligible onboarding', 'Digital scan-to-delivery workflow'].map(x => /*#__PURE__*/React.createElement("div", {
      key: x,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontSize: 15,
        color: 'rgba(255,255,255,0.9)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle",
      size: 18,
      color: "var(--cyan-100)"
    }), " ", x)))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'clamp(36px,5vw,56px)',
        background: 'var(--surface-card)'
      }
    }, sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: 'var(--success-bg)',
        color: 'var(--success)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 30
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 24
      }
    }, "Thanks \u2014 we'll be in touch"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        color: 'var(--text-muted)',
        marginTop: 8
      }
    }, "A clinical success manager will reach out within one business day.")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      },
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 22
      }
    }, "Request information"), /*#__PURE__*/React.createElement(Input, {
      label: "Full name",
      placeholder: "Dr. Jane Smith",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Practice name",
      placeholder: "Your clinic",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Work email",
      type: "email",
      placeholder: "you@practice.com",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 16
      }),
      required: true
    }), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "accent",
      size: "lg",
      fullWidth: true,
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18
      })
    }, "Join our network"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)',
        margin: 0,
        textAlign: 'center'
      }
    }, "Already a partner? ", /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'var(--color-primary)',
        fontWeight: 600
      }
    }, "Provider login")))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/providers/Providers.jsx", error: String((e && e.message) || e) }); }

// pages/results/Results.jsx
try { (() => {
window.RES = window.RES || {};
(function () {
  const {
    Button,
    Icon,
    Stat,
    Testimonial,
    Card,
    Badge
  } = window.DesignSystem_e5ed69;
  window.RES.Hero = function Hero() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'linear-gradient(180deg, var(--blue-50), var(--surface-card))',
        padding: '72px 0 40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap",
      style: {
        textAlign: 'center',
        maxWidth: 720,
        marginInline: 'auto'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Evidence-led outcomes"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(38px,5vw,60px)',
        lineHeight: 1.05,
        marginTop: 12
      }
    }, "The Results Speak for Themselves"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 20,
        lineHeight: 1.6,
        color: 'var(--text-body)',
        maxWidth: 560,
        margin: '18px auto 0'
      }
    }, "Better sleep isn't a promise \u2014 it's measured. Here's what precision oral appliance therapy delivers for real patients.")));
  };
  window.RES.Stats = function Stats() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '72px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal res-stats",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      value: 96,
      suffix: "%",
      label: "of patients prefer ProSomnus over CPAP"
    }), /*#__PURE__*/React.createElement(Stat, {
      value: 91,
      suffix: "%",
      label: "average reduction in apnea events (AHI)"
    }), /*#__PURE__*/React.createElement(Stat, {
      value: 200000,
      suffix: "+",
      label: "patients treated worldwide"
    }), /*#__PURE__*/React.createElement(Stat, {
      value: 94,
      suffix: "%",
      label: "continue therapy at one year"
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: 'center',
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 28
      }
    }, "Figures reflect aggregated ProSomnus clinical data and peer-reviewed outcomes. Individual results vary.")));
  };

  /* Before / After sleep quality visualization */
  const BEFORE = [2, 1, 3, 1, 1, 2, 1, 3, 1, 2, 1, 1]; // fragmented, frequent wake
  const AFTER = [3, 4, 4, 3, 4, 4, 3, 4, 4, 4, 3, 4]; // deep, steady
  window.RES.BeforeAfter = function BeforeAfter() {
    const [view, setView] = React.useState('after');
    const data = view === 'before' ? BEFORE : AFTER;
    const isAfter = view === 'after';
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '96px 0',
        background: 'var(--surface-soft)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        textAlign: 'center',
        maxWidth: 620,
        margin: '0 auto 40px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow",
      style: {
        color: 'var(--color-secondary-strong)'
      }
    }, "A single night, transformed"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(30px,3.6vw,40px)',
        marginTop: 10
      }
    }, "Sleep quality, before & after")), /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        maxWidth: 900,
        margin: '0 auto',
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
        padding: 'clamp(24px,4vw,40px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      role: "tablist",
      "aria-label": "Sleep view",
      style: {
        display: 'inline-flex',
        gap: 4,
        padding: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--surface-soft)',
        marginBottom: 28
      }
    }, [['before', 'Before ProSomnus'], ['after', 'With ProSomnus']].map(([k, l]) => {
      const on = view === k;
      return /*#__PURE__*/React.createElement("button", {
        key: k,
        role: "tab",
        "aria-selected": on,
        onClick: () => setView(k),
        style: {
          border: 'none',
          cursor: 'pointer',
          padding: '9px 18px',
          borderRadius: 'var(--radius-pill)',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: 14,
          background: on ? k === 'after' ? 'var(--color-primary)' : 'var(--gray-700)' : 'transparent',
          color: on ? '#fff' : 'var(--text-body)',
          transition: 'all var(--duration-base) var(--ease-out)'
        }
      }, l);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: 'clamp(4px,1vw,10px)',
        height: 200
      }
    }, data.map((v, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: `${v / 4 * 100}%`,
        borderRadius: '6px 6px 3px 3px',
        background: isAfter ? 'linear-gradient(180deg, var(--cyan-500), var(--color-primary))' : 'var(--gray-300)',
        transition: 'height var(--duration-slow) var(--ease-out), background var(--duration-slow) var(--ease-out)'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 10,
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "10 PM"), /*#__PURE__*/React.createElement("span", null, "Sleep depth over the night"), /*#__PURE__*/React.createElement("span", null, "6 AM")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 16,
        marginTop: 28
      },
      className: "res-stats"
    }, (isAfter ? [['Times woken', '2', 'moon'], ['Deep sleep', '+58%', 'trending-up'], ['Feel rested', 'Yes', 'smile']] : [['Times woken', '11', 'alarm-clock'], ['Deep sleep', 'Low', 'trending-down'], ['Feel rested', 'Rarely', 'frown']]).map(([l, v, ic]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        textAlign: 'center',
        padding: '16px 8px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-soft)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22,
      color: isAfter ? 'var(--color-secondary-strong)' : 'var(--text-muted)'
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: 24,
        color: 'var(--text-heading)',
        marginTop: 6
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, l)))))));
  };
  const WALL = [{
    quote: 'I finally sleep through the night — and so does my husband. I stopped dreading bedtime.',
    name: 'Dana R.',
    role: 'Patient · 2 years',
    rating: 5
  }, {
    quote: 'I travel constantly. It fits in my pocket. No more lugging a machine through airports.',
    name: 'Marcus T.',
    role: 'Patient · 1 year',
    rating: 5
  }, {
    quote: 'My AHI dropped from 28 to 4. My doctor was genuinely impressed at my follow-up.',
    name: 'Robert C.',
    role: 'Patient · 8 months',
    rating: 5
  }, {
    quote: 'After years of fighting my CPAP, this just works. I wear it every single night.',
    name: 'Susan D.',
    role: 'Patient · 3 years',
    rating: 5
  }, {
    quote: 'Quiet, comfortable, and covered by my VA benefits. I wish I\u2019d switched sooner.',
    name: 'James W.',
    role: 'Veteran · 1 year',
    rating: 5
  }, {
    quote: 'The fit is perfect and my mornings are completely different. I have energy again.',
    name: 'Linda P.',
    role: 'Patient · 6 months',
    rating: 5
  }];
  window.RES.Wall = function Wall() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '96px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        textAlign: 'center',
        maxWidth: 620,
        margin: '0 auto 44px'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "warning"
    }, "4.9 average \xB7 3,200+ reviews"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(30px,3.6vw,40px)',
        marginTop: 14
      }
    }, "Thousands of quiet nights")), /*#__PURE__*/React.createElement("div", {
      className: "reveal res-wall",
      style: {
        columnCount: 3,
        columnGap: 20
      }
    }, WALL.map((t, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        breakInside: 'avoid',
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(Testimonial, t))))));
  };
  window.RES.CTA = function CTA() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '40px 0 104px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(120deg, #0C447C, #16457E 45%, #06618B)',
        padding: 'clamp(48px,7vw,80px)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        width: 420,
        height: 420,
        borderRadius: '50%',
        top: -160,
        left: -80,
        background: 'radial-gradient(circle, rgba(0,154,217,0.4), transparent 68%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(32px,4vw,48px)',
        color: '#fff'
      }
    }, "Your results start tonight."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        lineHeight: 1.6,
        color: 'rgba(255,255,255,0.85)',
        maxWidth: 500,
        margin: '16px auto 32px'
      }
    }, "Join hundreds of thousands who traded the machine for a good night's sleep."), /*#__PURE__*/React.createElement("a", {
      href: "../find-a-provider/index.html"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18
      })
    }, "Find a Provider"))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/results/Results.jsx", error: String((e && e.message) || e) }); }

// shared/PageChrome.jsx
try { (() => {
// Shared page chrome for ProSomnus interior pages: solid sticky header + footer.
// Registers window.SITE.Header and window.SITE.Footer.
window.SITE = window.SITE || {};
(function () {
  const {
    Button,
    Input,
    Icon
  } = window.DesignSystem_e5ed69;

  // active: which nav key is the current page (for aria-current + styling)
  const LINKS = [['how', 'How It Works', '../how-it-works/index.html'], ['provider', 'Find a Provider', '../find-a-provider/index.html'], ['results', 'The Results', '../results/index.html'], ['providers', 'For Providers', '../providers/index.html'], ['faq', 'FAQ', '../faq/index.html']];
  window.SITE.Header = function Header({
    active
  }) {
    const [scrolled, setScrolled] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
      const on = () => setScrolled(window.scrollY > 10);
      on();
      window.addEventListener('scroll', on, {
        passive: true
      });
      return () => window.removeEventListener('scroll', on);
    }, []);
    const barH = scrolled ? 60 : 78;
    const logoH = scrolled ? 25 : 30;
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        boxShadow: scrolled ? 'var(--shadow-sm)' : '0 1px 0 var(--border-subtle)',
        transition: 'box-shadow var(--duration-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap",
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: barH,
        transition: 'height var(--duration-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "../../homepage/index.html",
      "aria-label": "ProSomnus home"
    }, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-logo.svg",
      alt: "ProSomnus",
      style: {
        height: logoH,
        display: 'block',
        transition: 'height var(--duration-slow) var(--ease-out)'
      }
    })), /*#__PURE__*/React.createElement("nav", {
      className: "desktop-only",
      "aria-label": "Primary",
      style: {
        display: 'flex',
        gap: 32
      }
    }, LINKS.map(([k, l, h]) => /*#__PURE__*/React.createElement("a", {
      key: k,
      href: h,
      "aria-current": active === k ? 'page' : undefined,
      style: {
        fontSize: 15,
        fontWeight: active === k ? 600 : 500,
        color: active === k ? 'var(--color-primary)' : 'var(--text-body)',
        whiteSpace: 'nowrap',
        borderRadius: 4
      }
    }, l))), /*#__PURE__*/React.createElement("div", {
      className: "desktop-only",
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        whiteSpace: 'nowrap'
      }
    }, "Provider login"), /*#__PURE__*/React.createElement("a", {
      href: "../find-a-provider/index.html"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      }),
      style: {
        whiteSpace: 'nowrap'
      }
    }, "Find a Provider"))), /*#__PURE__*/React.createElement("div", {
      className: "mobile-cluster",
      style: {
        display: 'none',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "../find-a-provider/index.html"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm",
      style: {
        whiteSpace: 'nowrap'
      }
    }, "Find a Provider")), /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(!open),
      "aria-label": open ? 'Close menu' : 'Open menu',
      "aria-expanded": open,
      "aria-controls": "m-menu",
      style: {
        display: 'inline-flex',
        border: '1px solid var(--border-default)',
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-sm)',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'var(--text-heading)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: open ? 'x' : 'menu',
      size: 22
    })))), open && /*#__PURE__*/React.createElement("div", {
      id: "m-menu",
      className: "mobile-cluster",
      style: {
        display: 'none',
        flexDirection: 'column',
        gap: 2,
        padding: '4px 22px 18px',
        background: 'rgba(255,255,255,0.98)'
      }
    }, LINKS.map(([k, l, h]) => /*#__PURE__*/React.createElement("a", {
      key: k,
      href: h,
      style: {
        padding: '12px 0',
        fontSize: 16,
        fontWeight: 500,
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, l))), /*#__PURE__*/React.createElement("style", null, `
          @media (max-width:900px){ .mobile-cluster{display:flex !important} }
          header a:focus-visible, header button:focus-visible { outline:3px solid var(--color-primary); outline-offset:3px; }
        `));
  };
  const cols = [['Company', ['About', 'Newsroom', 'Careers', 'Contact']], ['Patients', ['How it works', 'The results', 'Insurance & coverage', 'Find a provider']], ['Providers', ['Prescribe ProSomnus', 'Provider portal', 'Clinical evidence', 'Join our network']], ['Legal', ['Privacy', 'Terms', 'Accessibility', 'HIPAA notice']]];

  // Reusable single-open accordion. items: [{q, a}]. defaultOpen index or -1.
  window.SITE.Accordion = function Accordion({
    items,
    defaultOpen = 0
  }) {
    const [open, setOpen] = React.useState(defaultOpen);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, items.map((it, i) => {
      const on = open === i;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          background: 'var(--surface-card)',
          borderRadius: 'var(--radius-md)',
          boxShadow: on ? 'var(--shadow-md)' : 'var(--shadow-xs)',
          overflow: 'hidden',
          transition: 'box-shadow var(--duration-base) var(--ease-out)'
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => setOpen(on ? -1 : i),
        "aria-expanded": on,
        style: {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          textAlign: 'left',
          padding: '20px 24px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: 18,
          color: 'var(--text-heading)'
        }
      }, it.q, /*#__PURE__*/React.createElement("span", {
        style: {
          flexShrink: 0,
          color: 'var(--color-primary)',
          transform: on ? 'rotate(180deg)' : 'none',
          transition: 'transform var(--duration-base) var(--ease-out)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-down",
        size: 22
      }))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateRows: on ? '1fr' : '0fr',
          transition: 'grid-template-rows var(--duration-base) var(--ease-out)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          overflow: 'hidden'
        }
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0,
          padding: '0 24px 22px',
          fontSize: 16,
          lineHeight: 1.7,
          color: 'var(--text-body)',
          maxWidth: 720
        }
      }, it.a))));
    }));
  };
  window.SITE.Footer = function Footer() {
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--gray-900)',
        color: 'rgba(255,255,255,0.72)',
        paddingTop: 64
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "footer-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: '1.5fr repeat(4, 1fr)',
        gap: 32,
        paddingBottom: 48
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-logo-white.svg",
      alt: "ProSomnus",
      style: {
        height: 30
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        lineHeight: 1.65,
        marginTop: 16,
        maxWidth: 260
      }
    }, "Precision oral appliance therapy for obstructive sleep apnea \u2014 a comfortable, covered alternative to CPAP."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 20
      }
    }, ['facebook', 'instagram', 'linkedin', 'youtube'].map(n => /*#__PURE__*/React.createElement("a", {
      key: n,
      href: "#",
      "aria-label": n,
      style: {
        width: 38,
        height: 38,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255,255,255,0.75)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n,
      size: 18
    }))))), cols.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
      key: title
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        color: '#fff',
        fontSize: 15,
        marginBottom: 16
      }
    }, title), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 11
      }
    }, items.map(it => /*#__PURE__*/React.createElement("li", {
      key: it
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.72)'
      }
    }, it))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid rgba(255,255,255,0.12)',
        padding: '32px 0',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 28,
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 420
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        color: '#fff',
        fontSize: 18
      }
    }, "Sleep tips, straight to your inbox"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.6)',
        marginTop: 6
      }
    }, "Occasional, useful, never spammy.")), sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: 'var(--cyan-100)',
        fontSize: 15,
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle",
      size: 20
    }), " Thanks \u2014 you're subscribed!") : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      },
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'stretch',
        flex: '1 1 340px',
        maxWidth: 440
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Input, {
      type: "email",
      placeholder: "you@example.com",
      required: true,
      "aria-label": "Email address"
    })), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "accent"
    }, "Subscribe"))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid rgba(255,255,255,0.12)',
        padding: '22px 0 32px',
        fontSize: 13,
        color: 'rgba(255,255,255,0.5)',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 16,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ProSomnus Sleep Technologies. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Custom-fit comfort. Covered care. Quiet nights."))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "shared/PageChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-site/Comparison.jsx
try { (() => {
window.PS = window.PS || {};
(function () {
  const {
    Icon
  } = window.DesignSystem_e5ed69;
  const rows = [['Comfort', 'Worn like a retainer', 'Mask strapped to your face'], ['Noise', 'Silent', 'Constant motor hum'], ['Travel', 'Fits in your pocket', 'Bulky machine + power'], ['Maintenance', 'Just rinse & go', 'Hoses, filters, distilled water'], ['Partner-friendly', 'Quiet, unobtrusive', 'Noise & bedside clutter']];
  window.PS.Comparison = function Comparison() {
    return /*#__PURE__*/React.createElement("section", {
      id: "why",
      style: {
        padding: '84px 0',
        background: 'var(--surface-soft)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        textAlign: 'center',
        maxWidth: 620,
        margin: '0 auto 48px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'var(--color-secondary-strong)'
      }
    }, "Why ProSomnus"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 40,
        marginTop: 12
      }
    }, "The CPAP alternative people actually use")), /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
        overflow: 'hidden',
        maxWidth: 860,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr 1fr'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 24px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 24px',
        background: 'var(--blue-50)',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-mark.svg",
      style: {
        height: 22
      },
      alt: ""
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        color: 'var(--blue-700)'
      }
    }, "ProSomnus")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 24px',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        color: 'var(--text-muted)'
      }
    }, "CPAP")), rows.map(([label, ps, cpap], i) => /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr 1fr',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 24px',
        fontWeight: 600,
        color: 'var(--text-heading)',
        fontSize: 15
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 24px',
        background: 'rgba(230,241,251,0.4)',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 15,
        color: 'var(--text-heading)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18,
      color: "var(--success)"
    }), " ", ps), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 18,
      color: "var(--gray-400)"
    }), " ", cpap))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-site/Comparison.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-site/Coverage.jsx
try { (() => {
window.PS = window.PS || {};
(function () {
  const {
    Card,
    Button,
    Input,
    Select,
    Alert,
    Icon,
    Badge
  } = window.DesignSystem_e5ed69;
  window.PS.Coverage = function Coverage() {
    const [submitted, setSubmitted] = React.useState(false);
    const [insurer, setInsurer] = React.useState('Aetna');
    return /*#__PURE__*/React.createElement("section", {
      id: "coverage",
      style: {
        padding: '84px 0',
        background: 'linear-gradient(180deg, var(--surface-card), var(--cyan-50))'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement(Card, {
      className: "reveal",
      padding: 0,
      style: {
        overflow: 'hidden',
        maxWidth: 900,
        margin: '0 auto',
        boxShadow: 'var(--shadow-lg)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 40,
        background: 'var(--blue-700)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-logo-white.svg",
      alt: "ProSomnus",
      style: {
        height: 26,
        alignSelf: 'flex-start',
        marginBottom: 24
      }
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        color: '#fff',
        fontSize: 32,
        lineHeight: 1.15
      }
    }, "See if you're covered in 30 seconds"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'rgba(255,255,255,0.85)',
        fontSize: 16,
        lineHeight: 1.6,
        marginTop: 14
      }
    }, "ProSomnus is covered by nearly all medical insurance, Medicare, and VA benefits. Most patients pay little to nothing out of pocket."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "wellness"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 14
    }), " Medicare"), /*#__PURE__*/React.createElement(Badge, {
      tone: "wellness"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 14
    }), " VA benefits"), /*#__PURE__*/React.createElement(Badge, {
      tone: "wellness"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 14
    }), " Most PPOs"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 40
      }
    }, submitted ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: "Good news \u2014 you're likely covered!"
    }, "Based on ", insurer, ", ProSomnus is typically an in-network benefit. A provider will confirm your exact coverage."), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18
      })
    }, "Find a provider near me"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setSubmitted(false)
    }, "Start over")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSubmitted(true);
      },
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Your insurance provider",
      value: insurer,
      onChange: e => setInsurer(e.target.value),
      options: ['Aetna', 'Blue Cross Blue Shield', 'Cigna', 'UnitedHealthcare', 'Medicare', 'VA benefits', 'Other']
    }), /*#__PURE__*/React.createElement(Input, {
      label: "ZIP code",
      placeholder: "e.g. 94063",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "map-pin",
        size: 16
      }),
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "you@example.com",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 16
      }),
      required: true
    }), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "accent",
      size: "lg",
      fullWidth: true
    }, "Check my coverage"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)',
        margin: 0,
        textAlign: 'center'
      }
    }, "No obligation. We'll never share your information.")))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-site/Coverage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-site/Proof.jsx
try { (() => {
window.PS = window.PS || {};
(function () {
  const {
    Stat,
    Testimonial
  } = window.DesignSystem_e5ed69;
  window.PS.Proof = function Proof() {
    return /*#__PURE__*/React.createElement("section", {
      id: "proof",
      style: {
        padding: '84px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24,
        marginBottom: 64
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      value: 96,
      suffix: "%",
      label: "of patients prefer ProSomnus over CPAP"
    }), /*#__PURE__*/React.createElement(Stat, {
      value: 200000,
      prefix: "",
      suffix: "+",
      label: "patients treated and counting"
    }), /*#__PURE__*/React.createElement(Stat, {
      value: 98,
      suffix: "%",
      label: "covered by medical insurance, Medicare & VA"
    })), /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        textAlign: 'center',
        maxWidth: 620,
        margin: '0 auto 40px'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 36
      }
    }, "Loved by sleepers and their partners")), /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(Testimonial, {
      rating: 5,
      quote: "I finally sleep through the night \u2014 and so does my husband. I stopped dreading bedtime.",
      name: "Dana R.",
      role: "Patient \xB7 2 years"
    }), /*#__PURE__*/React.createElement(Testimonial, {
      rating: 5,
      quote: "I travel constantly. It fits in my pocket. No more lugging a machine through airports.",
      name: "Marcus T.",
      role: "Patient \xB7 1 year"
    }), /*#__PURE__*/React.createElement(Testimonial, {
      rating: 5,
      quote: "Compliance is night and day versus CPAP. My patients actually wear it.",
      name: "Dr. Elena Ruiz",
      role: "Sleep physician"
    }))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-site/Proof.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-site/SiteFooter.jsx
try { (() => {
window.PS = window.PS || {};
(function () {
  const {
    Icon
  } = window.DesignSystem_e5ed69;
  const cols = [['Product', ['How it works', 'ProSomnus vs CPAP', 'Comfort & fit', 'Insurance & coverage']], ['For providers', ['Prescribe ProSomnus', 'Provider portal', 'Clinical evidence', 'Education']], ['Company', ['About', 'Newsroom', 'Careers', 'Contact']]];
  window.PS.SiteFooter = function SiteFooter() {
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--gray-900)',
        color: 'rgba(255,255,255,0.7)',
        padding: '56px 0 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-logo-white.svg",
      alt: "ProSomnus",
      style: {
        height: 30
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        lineHeight: 1.6,
        marginTop: 16,
        maxWidth: 260
      }
    }, "Precision oral appliance therapy for obstructive sleep apnea. A comfortable, covered alternative to CPAP."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        marginTop: 18,
        color: 'rgba(255,255,255,0.6)'
      }
    }, ['facebook', 'instagram', 'linkedin', 'youtube'].map(n => /*#__PURE__*/React.createElement(Icon, {
      key: n,
      name: n,
      size: 20
    })))), cols.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
      key: title
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        color: '#fff',
        fontSize: 14,
        marginBottom: 14
      }
    }, title), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, items.map(it => /*#__PURE__*/React.createElement("li", {
      key: it
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.7)'
      }
    }, it))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid rgba(255,255,255,0.12)',
        marginTop: 40,
        paddingTop: 24,
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 13,
        color: 'rgba(255,255,255,0.5)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ProSomnus Sleep Technologies. All rights reserved."), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'inherit'
      }
    }, "Privacy"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'inherit'
      }
    }, "Terms"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'inherit'
      }
    }, "Accessibility")))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-site/SiteHero.jsx
try { (() => {
window.PS = window.PS || {};
(function () {
  const {
    Button,
    Badge,
    Icon
  } = window.DesignSystem_e5ed69;
  window.PS.SiteHero = function SiteHero() {
    return /*#__PURE__*/React.createElement("section", {
      id: "top",
      style: {
        background: 'linear-gradient(180deg, var(--blue-50) 0%, var(--surface-card) 78%)',
        paddingTop: 64,
        paddingBottom: 72
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap",
      style: {
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gap: 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal in"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "wellness"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "badge-check",
      size: 14
    }), " FDA cleared \xB7 100k+ patients"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 56,
        lineHeight: 1.05,
        marginTop: 20
      }
    }, "Sleep, restored."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 20,
        lineHeight: 1.6,
        color: 'var(--text-body)',
        maxWidth: 480,
        marginTop: 18
      }
    }, "A comfortable, custom-fit alternative to CPAP \u2014 worn like a retainer. No masks, no hoses, no noise. Just a quiet night's sleep."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        marginTop: 30
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18
      })
    }, "Check my coverage"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "play",
        size: 16
      })
    }, "See how it works")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 28,
        marginTop: 34,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 3,
        color: 'var(--amber-500)'
      }
    }, Array.from({
      length: 5
    }).map((_, i) => /*#__PURE__*/React.createElement(Icon, {
      key: i,
      name: "star",
      size: 18,
      style: {
        fill: 'var(--amber-500)'
      }
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-heading)'
      }
    }, "96%"), " prefer ProSomnus over CPAP"))), /*#__PURE__*/React.createElement("div", {
      className: "reveal in",
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '4/5',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        background: 'linear-gradient(150deg, #cfe2f7, #eaf3fc 60%, #e7f7f0)',
        boxShadow: 'var(--shadow-xl)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        color: 'var(--blue-700)',
        opacity: 0.5,
        marginBottom: 'auto',
        marginTop: 'auto'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "image",
      size: 40
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        marginTop: 8
      }
    }, "Patient photo"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 24,
        left: -24,
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-lg)',
        padding: '16px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        maxWidth: 240
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--cyan-50)',
        color: 'var(--cyan-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 20
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        lineHeight: 1.4,
        color: 'var(--text-heading)'
      }
    }, "Covered by most insurance, Medicare & VA")))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-site/SiteHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-site/SiteHowItWorks.jsx
try { (() => {
window.PS = window.PS || {};
(function () {
  const {
    Card,
    Icon
  } = window.DesignSystem_e5ed69;
  const steps = [['calendar-check', 'Talk to a provider', 'Connect with a ProSomnus dentist or physician near you and confirm you\u2019re a good fit.'], ['scan', 'Get a custom scan', 'A quick digital scan captures your bite \u2014 no messy molds, no CPAP fitting.'], ['bed', 'Sleep comfortably', 'Wear your precision-milled appliance like a retainer and wake up rested.']];
  window.PS.SiteHowItWorks = function SiteHowItWorks() {
    return /*#__PURE__*/React.createElement("section", {
      id: "how",
      style: {
        padding: '84px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        textAlign: 'center',
        maxWidth: 620,
        margin: '0 auto 48px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'var(--color-primary)'
      }
    }, "How it works"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 40,
        marginTop: 12
      }
    }, "Three simple steps to better sleep")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24
      }
    }, steps.map(([icon, title, body], i) => /*#__PURE__*/React.createElement(Card, {
      key: title,
      hoverLift: true,
      className: "reveal",
      style: {
        transitionDelay: i * 0.08 + 's'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-md)',
        background: 'var(--blue-50)',
        color: 'var(--color-primary)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 24
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--color-primary)'
      }
    }, "0", i + 1)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 21,
        marginBottom: 8
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        lineHeight: 1.65,
        margin: 0
      }
    }, body))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-site/SiteHowItWorks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-site/SiteNav.jsx
try { (() => {
window.PS = window.PS || {};
const {
  Button,
  Icon
} = window.DesignSystem_e5ed69;

// Scroll-reveal hook shared across sections
window.PS.useRevealObserver = function useRevealObserver() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
      });
    }, {
      threshold: 0.15
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
};
window.PS.SiteNav = function SiteNav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [['How it works', '#how'], ['Why ProSomnus', '#why'], ['Reviews', '#proof'], ['Coverage', '#coverage']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.85)' : 'var(--surface-card)',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-out), background var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 72
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/design-systems/prosomnus/assets/prosomnus-logo.svg",
    alt: "ProSomnus",
    style: {
      height: 30,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, links.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: href,
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--text-body)'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Find a provider"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Check coverage"))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-site/SiteNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/provider-portal/CaseDetail.jsx
try { (() => {
window.PP = window.PP || {};
(function () {
  const {
    Card,
    Badge,
    Icon,
    Button,
    Alert
  } = window.DesignSystem_e5ed69;
  const timeline = [['file-plus', 'Prescription created', 'Mar 2', true], ['clipboard-check', 'Prior authorization approved', 'Mar 4', true], ['scan', 'Digital impressions received', 'Mar 6', true], ['factory', 'In fabrication', 'Est. Mar 12', false], ['package-check', 'Delivery & fitting', 'Pending', false]];
  window.PP.CaseDetail = function CaseDetail({
    data,
    onBack
  }) {
    const c = data || window.PP.cases[0];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onBack,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        color: 'var(--color-primary)',
        fontSize: 14,
        fontWeight: 500,
        padding: 0,
        alignSelf: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    }), " Back to dashboard"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: 'var(--blue-50)',
        color: 'var(--blue-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: 20
      }
    }, c.name.split(' ').map(n => n[0]).join('')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 26
      }
    }, c.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 6,
        alignItems: 'center',
        color: 'var(--text-muted)',
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'ui-monospace, monospace'
      }
    }, c.id), " \xB7 Age ", c.age, " \xB7 ", /*#__PURE__*/React.createElement(Badge, {
      tone: c.status,
      size: "sm"
    }, c.stage)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "message-square",
        size: 16
      })
    }, "Message patient"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "pencil",
        size: 16
      })
    }, "Update case"))), /*#__PURE__*/React.createElement(Alert, {
      tone: "info"
    }, "This case is on track. Next milestone: fabrication complete, estimated Mar 12."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 18,
        marginBottom: 18
      }
    }, "Treatment timeline"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, timeline.map(([icon, label, date, done], i) => /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        display: 'flex',
        gap: 14,
        paddingBottom: i < timeline.length - 1 ? 22 : 0,
        position: 'relative'
      }
    }, i < timeline.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 17,
        top: 36,
        bottom: 0,
        width: 2,
        background: done ? 'var(--cyan-500)' : 'var(--border-subtle)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36,
        height: 36,
        flexShrink: 0,
        borderRadius: '50%',
        background: done ? 'var(--cyan-50)' : 'var(--surface-soft)',
        color: done ? 'var(--cyan-700)' : 'var(--text-muted)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: done ? 'check' : icon,
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: 'var(--text-heading)',
        fontSize: 15
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, date)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 16,
        marginBottom: 14
      }
    }, "Clinical summary"), /*#__PURE__*/React.createElement("dl", {
      style: {
        margin: 0,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        rowGap: 12,
        columnGap: 16,
        fontSize: 14
      }
    }, [['Diagnosis', 'Moderate OSA'], ['AHI (baseline)', c.ahi + ' events/hr'], ['Device', 'ProSomnus ' + c.device], ['Insurer', c.insurer], ['Referring MD', 'Dr. E. Ruiz']].map(([k, v]) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: k
    }, /*#__PURE__*/React.createElement("dt", {
      style: {
        color: 'var(--text-muted)'
      }
    }, k), /*#__PURE__*/React.createElement("dd", {
      style: {
        margin: 0,
        fontWeight: 600,
        color: 'var(--text-heading)',
        textAlign: 'right'
      }
    }, v))))), /*#__PURE__*/React.createElement(Card, {
      style: {
        background: 'var(--blue-700)',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: 16
      }
    }, "Coverage confirmed")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        lineHeight: 1.6,
        color: 'rgba(255,255,255,0.85)',
        margin: 0
      }
    }, c.insurer, " \u2014 in network. Patient responsibility estimated at $0\u2013$50.")))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/provider-portal/CaseDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/provider-portal/Dashboard.jsx
try { (() => {
window.PP = window.PP || {};
(function () {
  const {
    Card,
    Badge,
    Icon,
    Stat,
    Button
  } = window.DesignSystem_e5ed69;
  const kpis = [['Active cases', 24, 'folder-open', 'primary'], ['Awaiting prior auth', 3, 'clock', 'warning'], ['Delivered this month', 11, 'package-check', 'success'], ['Avg. days to deliver', 18, 'timer', 'wellness']];
  window.PP.Dashboard = function Dashboard({
    onOpenCase,
    onNewRx
  }) {
    const cases = window.PP.cases;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 30
      }
    }, "Good morning, Dr. Reyes"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        color: 'var(--text-muted)',
        marginTop: 6
      }
    }, "You have 3 cases awaiting prior authorization."))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 16
      }
    }, kpis.map(([label, val, icon, tone]) => /*#__PURE__*/React.createElement(Card, {
      key: label
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 32,
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        color: 'var(--text-heading)',
        lineHeight: 1
      }
    }, val), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 8
      }
    }, label)), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 'var(--radius-sm)',
        background: 'var(--blue-50)',
        color: 'var(--color-primary)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 19
    })))))), /*#__PURE__*/React.createElement(Card, {
      padding: 0,
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 24px',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 18
      }
    }, "Recent cases"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 15
      })
    }, "View all")), /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      style: {
        textAlign: 'left',
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: '.05em',
        color: 'var(--text-muted)'
      }
    }, ['Patient', 'Case #', 'AHI', 'Device', 'Stage', 'Insurer', 'Updated', ''].map(h => /*#__PURE__*/React.createElement("th", {
      key: h,
      style: {
        padding: '12px 24px',
        fontWeight: 600
      }
    }, h)))), /*#__PURE__*/React.createElement("tbody", null, cases.map(c => /*#__PURE__*/React.createElement("tr", {
      key: c.id,
      onClick: () => onOpenCase(c),
      style: {
        borderTop: '1px solid var(--border-subtle)',
        cursor: 'pointer'
      },
      onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-soft)',
      onMouseLeave: e => e.currentTarget.style.background = 'transparent'
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '14px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: '50%',
        background: 'var(--blue-50)',
        color: 'var(--blue-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
        fontSize: 13
      }
    }, c.name.split(' ').map(n => n[0]).join('')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: 'var(--text-heading)',
        fontSize: 14
      }
    }, c.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, "Age ", c.age)))), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '14px 24px',
        fontSize: 14,
        fontFamily: 'ui-monospace, monospace',
        color: 'var(--text-body)'
      }
    }, c.id), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '14px 24px',
        fontSize: 14
      }
    }, c.ahi), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '14px 24px',
        fontSize: 14
      }
    }, c.device), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '14px 24px'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: c.status,
      size: "sm"
    }, c.stage)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '14px 24px',
        fontSize: 14,
        color: 'var(--text-body)'
      }
    }, c.insurer), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '14px 24px',
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, c.updated), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '14px 24px',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 18
    }))))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/provider-portal/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/provider-portal/NewRx.jsx
try { (() => {
window.PP = window.PP || {};
(function () {
  const {
    Dialog,
    Button,
    Input,
    Select,
    Radio,
    Checkbox,
    Alert,
    Icon
  } = window.DesignSystem_e5ed69;
  window.PP.NewRx = function NewRx({
    open,
    onClose
  }) {
    const [done, setDone] = React.useState(false);
    React.useEffect(() => {
      if (open) setDone(false);
    }, [open]);
    return /*#__PURE__*/React.createElement(Dialog, {
      open: open,
      onClose: onClose,
      width: 520,
      title: done ? undefined : 'New prescription',
      footer: done ? /*#__PURE__*/React.createElement(Button, {
        variant: "accent",
        onClick: onClose
      }, "Done") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: onClose
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        variant: "accent",
        iconRight: /*#__PURE__*/React.createElement(Icon, {
          name: "send",
          size: 16
        }),
        onClick: () => setDone(true)
      }, "Submit prescription"))
    }, done ? /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '8px 0 4px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: 'var(--success-bg)',
        color: 'var(--success)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 30
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 22,
        marginBottom: 8
      }
    }, "Prescription submitted"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        color: 'var(--text-muted)',
        margin: 0
      }
    }, "Case ", /*#__PURE__*/React.createElement("strong", null, "PS-4822"), " created. We'll verify benefits and notify you when prior auth clears.")) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Patient name",
      placeholder: "First and last name"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Date of birth",
      placeholder: "MM/DD/YYYY"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Baseline AHI",
      placeholder: "events/hr"
    })), /*#__PURE__*/React.createElement(Select, {
      label: "Insurance",
      options: ['Aetna PPO', 'Blue Cross Blue Shield', 'Cigna', 'UnitedHealthcare', 'Medicare', 'VA benefits']
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        color: 'var(--text-heading)',
        marginBottom: 10
      }
    }, "Device"), /*#__PURE__*/React.createElement(Radio, {
      options: [{
        value: 'evo',
        label: 'ProSomnus EVO'
      }, {
        value: 'ph',
        label: 'ProSomnus [PH]'
      }, {
        value: 'ia',
        label: 'ProSomnus [IA]'
      }],
      defaultValue: "evo"
    })), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Include prior authorization documentation",
      defaultChecked: true
    }), /*#__PURE__*/React.createElement(Alert, {
      tone: "info"
    }, "Digital impressions can be uploaded after the case is created.")));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/provider-portal/NewRx.jsx", error: String((e && e.message) || e) }); }

// ui_kits/provider-portal/Sidebar.jsx
try { (() => {
window.PP = window.PP || {};
(function () {
  const {
    Icon,
    Button
  } = window.DesignSystem_e5ed69;
  const nav = [['layout-dashboard', 'Dashboard', true], ['users', 'Patients'], ['file-plus', 'Prescriptions'], ['clipboard-check', 'Prior auth'], ['graduation-cap', 'Education'], ['settings', 'Settings']];
  window.PP.Sidebar = function Sidebar({
    onHome,
    onNewRx
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 248,
        background: 'var(--surface-card)',
        borderRight: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 16px',
        position: 'sticky',
        top: 0,
        height: '100vh'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 8px 20px'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "/design-systems/prosomnus/assets/prosomnus-logo.svg",
      alt: "ProSomnus",
      style: {
        height: 26
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginTop: 8,
        paddingLeft: 2
      }
    }, "Provider Portal")), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, nav.map(([icon, label, active]) => /*#__PURE__*/React.createElement("a", {
      key: label,
      href: "#",
      onClick: e => {
        e.preventDefault();
        if (label === 'Dashboard') onHome();
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 'var(--radius-sm)',
        fontSize: 15,
        fontWeight: 500,
        textDecoration: 'none',
        color: active ? 'var(--color-primary)' : 'var(--text-body)',
        background: active ? 'var(--blue-50)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 19
    }), " ", label))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--cyan-50)',
        borderRadius: 'var(--radius-md)',
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--cyan-700)',
        fontWeight: 600,
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "headphones",
      size: 16
    }), " Need help?"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        lineHeight: 1.5,
        color: 'var(--text-body)',
        margin: '6px 0 10px'
      }
    }, "Our clinical team is one call away."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      fullWidth: true
    }, "Contact support")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '4px 8px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: '50%',
        background: 'var(--blue-700)',
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
        fontSize: 14
      }
    }, "DR"), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-heading)'
      }
    }, "Dr. Reyes"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, "Bayside Dental Sleep")))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/provider-portal/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/provider-portal/Topbar.jsx
try { (() => {
window.PP = window.PP || {};
(function () {
  const {
    Icon,
    Button,
    Input
  } = window.DesignSystem_e5ed69;
  window.PP.Topbar = function Topbar({
    onNewRx
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        height: 68,
        background: 'var(--surface-card)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        position: 'sticky',
        top: 0,
        zIndex: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 340
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search patients, cases, Rx #\u2026",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 16
      }),
      style: {}
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("button", {
      style: {
        position: 'relative',
        border: 'none',
        background: 'var(--surface-soft)',
        width: 40,
        height: 40,
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 19
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 8,
        right: 9,
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--error)',
        border: '2px solid var(--surface-card)'
      }
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "file-plus",
        size: 16
      }),
      onClick: onNewRx
    }, "New prescription")));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/provider-portal/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/provider-portal/data.jsx
try { (() => {
window.PP = window.PP || {};
window.PP.cases = [{
  id: 'PS-4821',
  name: 'Robert Chen',
  age: 54,
  ahi: 22,
  stage: 'Impressions',
  status: 'primary',
  updated: '2h ago',
  device: 'EVO',
  insurer: 'Aetna PPO'
}, {
  id: 'PS-4817',
  name: 'Maria Gonzalez',
  age: 47,
  ahi: 15,
  stage: 'In fabrication',
  status: 'wellness',
  updated: '5h ago',
  device: 'EVO',
  insurer: 'Medicare'
}, {
  id: 'PS-4805',
  name: 'James Whitfield',
  age: 61,
  ahi: 38,
  stage: 'Titration',
  status: 'warning',
  updated: '1d ago',
  device: 'PH',
  insurer: 'VA benefits'
}, {
  id: 'PS-4799',
  name: 'Susan Delgado',
  age: 39,
  ahi: 9,
  stage: 'Delivered',
  status: 'success',
  updated: '2d ago',
  device: 'EVO',
  insurer: 'BCBS'
}, {
  id: 'PS-4788',
  name: 'David Okafor',
  age: 58,
  ahi: 27,
  stage: 'Prior auth',
  status: 'neutral',
  updated: '3d ago',
  device: 'EVO',
  insurer: 'Cigna'
}, {
  id: 'PS-4772',
  name: 'Linda Park',
  age: 50,
  ahi: 18,
  stage: 'Follow-up',
  status: 'wellness',
  updated: '4d ago',
  device: 'PH',
  insurer: 'UnitedHealthcare'
}];
window.PP.stageTone = {
  'Impressions': 'primary',
  'In fabrication': 'wellness',
  'Titration': 'warning',
  'Delivered': 'success',
  'Prior auth': 'neutral',
  'Follow-up': 'wellness'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/provider-portal/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

})();

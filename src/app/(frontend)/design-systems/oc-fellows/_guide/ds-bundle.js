// VENDORED from public/design-systems/oc-fellows/_ds_bundle.js — do not hand-edit.
// Only change: the React import. The bundle was authored for a page that
// loaded React from a CDN into global scope, so its bare `React.createElement`
// calls need that name to resolve under a bundler.
import React from 'react'
/* @ds-bundle: {"format":4,"namespace":"OCFellowsDesignSystem_3dfef0","components":[{"name":"LogoWall","sourcePath":"components/content/LogoWall.jsx"},{"name":"PersonCard","sourcePath":"components/content/PersonCard.jsx"},{"name":"PressCard","sourcePath":"components/content/PressCard.jsx"},{"name":"ProgramCard","sourcePath":"components/content/ProgramCard.jsx"},{"name":"StatCounter","sourcePath":"components/content/StatCounter.jsx"},{"name":"StoryCard","sourcePath":"components/content/StoryCard.jsx"},{"name":"TimelineStep","sourcePath":"components/content/TimelineStep.jsx"},{"name":"ValueItem","sourcePath":"components/content/ValueItem.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"FilterChip","sourcePath":"components/forms/FilterChip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/content/LogoWall.jsx":"9a956cd57f91","components/content/PersonCard.jsx":"7d790a48a7fd","components/content/PressCard.jsx":"fa9f1bb23721","components/content/ProgramCard.jsx":"aa44c8a840ef","components/content/StatCounter.jsx":"bb30de9ab2ab","components/content/StoryCard.jsx":"bd404e890cd9","components/content/TimelineStep.jsx":"6ac7eed20532","components/content/ValueItem.jsx":"8e1fc5aef022","components/core/Badge.jsx":"a104d26fe595","components/core/Button.jsx":"e194299847b9","components/core/Card.jsx":"b14454336163","components/core/Eyebrow.jsx":"d38c8cd3c049","components/core/IconButton.jsx":"13a0aa6f4b9c","components/core/SectionHeading.jsx":"b3942f5fd23c","components/forms/Checkbox.jsx":"17b902e07e94","components/forms/Field.jsx":"4c669311902b","components/forms/FilterChip.jsx":"defe672239b0","components/forms/Input.jsx":"84fcb8e15152","components/forms/Select.jsx":"a8601be89c46","components/forms/Textarea.jsx":"6d1f7cddbb13","components/navigation/Footer.jsx":"d8d86a9bb18d","components/navigation/NavBar.jsx":"d22db17ff98e","ui_kits/website/App.jsx":"eaa4ba7b5e8d","ui_kits/website/ApplyScreen.jsx":"cb749e651e6f","ui_kits/website/FellowsScreen.jsx":"cc51b27cbcff","ui_kits/website/HomeScreen.jsx":"8f4be5821f7c","ui_kits/website/Shared.jsx":"f224e7308e10","ui_kits/website/StoriesScreen.jsx":"8aea8666b892","ui_kits/website/data.js":"abc1c05dd769"},"inlinedExternals":[],"unexposedExports":[{"name":"controlStyle","sourcePath":"components/forms/Field.jsx"}]} */

(() => {

const __ds_ns = (window.OCFellowsDesignSystem_3dfef0 = window.OCFellowsDesignSystem_3dfef0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/LogoWall.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LogoWall({
  logos = [],
  height = 40,
  label,
  tone = 'light',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignItems: 'center',
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: dark ? 'var(--aqua-500)' : 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-10)',
      width: '100%'
    }
  }, logos.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      height
    }
  }, l.src ? /*#__PURE__*/React.createElement("img", {
    src: l.src,
    alt: l.name,
    style: {
      height: '100%',
      width: 'auto',
      objectFit: 'contain',
      filter: dark ? 'brightness(0) invert(1)' : 'none'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.02em',
      color: dark ? 'rgba(255,255,255,.75)' : 'var(--neutral-500)'
    }
  }, l.name)))));
}
Object.assign(__ds_scope, { LogoWall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LogoWall.jsx", error: String((e && e.message) || e) }); }

// components/content/PersonCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PersonCard({
  name,
  meta,
  year,
  photo,
  href,
  linkedin,
  variant = 'fellow',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      textDecoration: 'none',
      transition: 'var(--transition-interactive)',
      transform: href && hover ? 'var(--lift-translate)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--neutral-100)',
      borderRadius: variant === 'team' ? 'var(--radius-circle)' : 'var(--radius-media)',
      aspectRatio: variant === 'team' ? '1 / 1' : '3 / 4'
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.03)' : 'scale(1)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }) : null, year ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 10,
      bottom: 10,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--neutral-0)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--navy-500)',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, year) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--fw-bold)',
      color: hover && href ? 'var(--orange-600)' : 'var(--text-heading)',
      transition: 'color var(--dur-fast) var(--ease-out)'
    }
  }, name), meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-muted)'
    }
  }, meta) : null, linkedin ? /*#__PURE__*/React.createElement("a", {
    href: linkedin,
    "aria-label": name + ' on LinkedIn',
    style: {
      display: 'inline-flex',
      marginTop: 2,
      color: 'var(--navy-500)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "linkedin",
    style: {
      width: 18,
      height: 18
    }
  })) : null));
}
Object.assign(__ds_scope, { PersonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PersonCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ProgramCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgramCard({
  kicker = 'Our Program',
  title,
  description,
  image,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'block',
      overflow: 'hidden',
      textDecoration: 'none',
      borderRadius: 'var(--radius-card)',
      aspectRatio: '4 / 5',
      minHeight: 380,
      transition: 'var(--transition-interactive)',
      boxShadow: hover ? 'var(--shadow-hover)' : 'var(--shadow-sm)',
      transform: hover ? 'var(--lift-translate)' : 'none',
      ...style
    }
  }, rest), image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--navy-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 'auto 0 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--aqua-500)'
    }
  }, kicker), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--text-inverse)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'rgba(255,255,255,.86)',
      maxHeight: hover ? 200 : 0,
      opacity: hover ? 1 : 0,
      overflow: 'hidden',
      transition: 'max-height var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out)'
    }
  }, description) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 'var(--space-2)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--neutral-0)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 18,
      height: 18
    }
  }))));
}
Object.assign(__ds_scope, { ProgramCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProgramCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StatCounter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatCounter({
  value,
  suffix = '',
  label,
  tone = 'light',
  animate = true,
  style,
  ...rest
}) {
  const [shown, setShown] = React.useState(animate ? 0 : value);
  React.useEffect(() => {
    if (!animate) {
      setShown(value);
      return;
    }
    const dur = 1200,
      t0 = performance.now();
    let raf;
    const tick = t => {
      const p = Math.min(1, (t - t0) / dur);
      setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, animate]);
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--type-stat-size)',
      fontWeight: 'var(--type-stat-weight)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tight)',
      color: dark ? 'var(--text-inverse)' : 'var(--navy-500)'
    }
  }, shown, suffix), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--fw-medium)',
      color: dark ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatCounter.jsx", error: String((e && e.message) || e) }); }

// components/content/TimelineStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TimelineStep({
  number,
  title,
  description,
  active = false,
  last = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-circle)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--fw-bold)',
      background: active ? 'var(--orange-500)' : 'var(--navy-500)',
      color: 'var(--neutral-0)'
    }
  }, number), !last ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      width: 2,
      minHeight: 28,
      marginTop: 8,
      background: 'var(--aqua-500)'
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      paddingBottom: last ? 0 : 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)',
      lineHeight: 'var(--leading-snug)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { TimelineStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TimelineStep.jsx", error: String((e && e.message) || e) }); }

// components/content/ValueItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ValueItem({
  title,
  description,
  icon,
  tone = 'light',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-circle)',
      background: dark ? 'rgba(255,255,255,.12)' : 'var(--aqua-100)',
      color: dark ? 'var(--aqua-500)' : 'var(--navy-500)'
    }
  }, icon) : null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontSize: 'var(--type-h4-size)',
      fontWeight: 'var(--type-h4-weight)',
      lineHeight: 'var(--type-h4-leading)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: dark ? 'rgba(255,255,255,.82)' : 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, description));
}
Object.assign(__ds_scope, { ValueItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ValueItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: 'var(--neutral-100)',
    color: 'var(--neutral-700)'
  },
  navy: {
    background: 'var(--navy-50)',
    color: 'var(--navy-500)'
  },
  orange: {
    background: 'var(--orange-50)',
    color: 'var(--orange-700)'
  },
  aqua: {
    background: 'var(--aqua-100)',
    color: 'var(--navy-500)'
  },
  teal: {
    background: 'var(--teal-100)',
    color: 'var(--teal-700)'
  },
  solidNavy: {
    background: 'var(--navy-500)',
    color: 'var(--neutral-0)'
  },
  solidOrange: {
    background: 'var(--orange-500)',
    color: 'var(--neutral-0)'
  }
};
function Badge({
  children,
  tone = 'aqua',
  size = 'md',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: size === 'sm' ? '3px 9px' : '5px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--tracking-wide)',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...TONES[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: 'var(--pad-button-sm-y) var(--pad-button-sm-x)',
    fontSize: 'var(--text-sm)',
    gap: '6px'
  },
  md: {
    padding: 'var(--pad-button-y) var(--pad-button-x)',
    fontSize: 'var(--text-base)',
    gap: '8px'
  },
  lg: {
    padding: 'var(--pad-button-lg-y) var(--pad-button-lg-x)',
    fontSize: 'var(--text-lg)',
    gap: '10px'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-fg)',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'var(--action-secondary-bg)',
    color: 'var(--action-secondary-fg)',
    border: '1px solid transparent'
  },
  outline: {
    background: 'transparent',
    color: 'var(--action-quiet-fg)',
    border: '1px solid var(--border-strong)'
  },
  quiet: {
    background: 'transparent',
    color: 'var(--action-quiet-fg)',
    border: '1px solid transparent'
  },
  inverse: {
    background: 'var(--neutral-0)',
    color: 'var(--navy-500)',
    border: '1px solid transparent'
  }
};
const HOVER = {
  primary: {
    background: 'var(--action-primary-bg-hover)'
  },
  secondary: {
    background: 'var(--action-secondary-bg-hover)'
  },
  outline: {
    background: 'var(--action-quiet-bg-hover)',
    borderColor: 'var(--border-accent)',
    color: 'var(--orange-600)'
  },
  quiet: {
    color: 'var(--text-link-hover)'
  },
  inverse: {
    background: 'var(--aqua-100)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  href,
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SIZES[size].gap,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-semibold)',
    lineHeight: 1.2,
    letterSpacing: '0.01em',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: 'var(--radius-button)',
    transition: 'var(--transition-interactive)',
    padding: SIZES[size].padding,
    fontSize: SIZES[size].fontSize,
    ...VARIANTS[variant],
    ...(hover && !disabled ? HOVER[variant] : null),
    ...(press && !disabled ? {
      transform: 'var(--press-translate)'
    } : null),
    ...(disabled ? {
      background: 'var(--disabled-bg)',
      color: 'var(--disabled-fg)',
      borderColor: 'transparent'
    } : null),
    ...style
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon && iconPosition === 'left' ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex'
    }
  }, icon) : null, /*#__PURE__*/React.createElement("span", null, children), icon && iconPosition === 'right' ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex'
    }
  }, icon) : null);
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: base
  }, handlers, rest), content);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SURFACES = {
  white: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)'
  },
  cream: {
    background: 'var(--surface-cream)',
    color: 'var(--text-body)'
  },
  aqua: {
    background: 'var(--surface-aqua-soft)',
    color: 'var(--text-body)'
  },
  navy: {
    background: 'var(--surface-navy)',
    color: 'var(--text-inverse)'
  }
};
function Card({
  children,
  surface = 'white',
  edge = 'shadow',
  padding = 'var(--pad-card)',
  interactive = false,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lifted = interactive && hover;
  const css = {
    display: 'block',
    position: 'relative',
    boxSizing: 'border-box',
    borderRadius: 'var(--radius-card)',
    padding,
    overflow: 'hidden',
    textDecoration: 'none',
    transition: 'var(--transition-interactive)',
    border: edge === 'border' ? '1px solid var(--border-subtle)' : '1px solid transparent',
    boxShadow: edge === 'shadow' ? lifted ? 'var(--shadow-hover)' : 'var(--shadow-sm)' : lifted ? 'var(--shadow-md)' : 'none',
    transform: lifted ? 'var(--lift-translate)' : 'none',
    ...SURFACES[surface],
    ...style
  };
  const handlers = interactive ? {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  } : {};
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: css
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/PressCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PressCard({
  publication,
  date,
  thumbnail,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    interactive: true,
    href: href,
    edge: "border",
    padding: "0",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '3 / 4',
      overflow: 'hidden',
      background: 'var(--neutral-100)'
    }
  }, thumbnail ? /*#__PURE__*/React.createElement("img", {
    src: thumbnail,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top',
      display: 'block'
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--fw-bold)',
      color: hover ? 'var(--orange-600)' : 'var(--text-heading)',
      transition: 'color var(--dur-fast) var(--ease-out)'
    }
  }, publication), date ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, date) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 4,
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--navy-500)'
    }
  }, "Read more", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "external-link",
    style: {
      width: 15,
      height: 15
    }
  }))));
}
Object.assign(__ds_scope, { PressCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PressCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StoryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StoryCard({
  title,
  excerpt,
  image,
  href,
  kicker,
  cta = 'Read More',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    interactive: true,
    href: href,
    edge: "shadow",
    padding: "0",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      aspectRatio: '16 / 10',
      background: 'var(--neutral-100)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.03)' : 'scale(1)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--pad-card)',
      flex: 1
    }
  }, kicker ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--orange-500)'
    }
  }, kicker) : null, /*#__PURE__*/React.createElement("h5", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--text-heading)',
      textWrap: 'pretty'
    }
  }, title), excerpt ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)',
      flex: 1,
      textWrap: 'pretty'
    }
  }, excerpt) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 'auto',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: hover ? 'var(--orange-600)' : 'var(--navy-500)',
      transition: 'color var(--dur-fast) var(--ease-out)'
    }
  }, cta, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 16,
      height: 16
    }
  }))));
}
Object.assign(__ds_scope, { StoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StoryCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  orange: 'var(--orange-500)',
  slate: 'var(--neutral-500)',
  navy: 'var(--navy-500)',
  teal: 'var(--teal-700)',
  inverse: 'var(--aqua-500)'
};
function Eyebrow({
  children,
  tone = 'orange',
  uppercase = false,
  as = 'p',
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--type-eyebrow-size)',
      fontWeight: 'var(--type-eyebrow-weight)',
      letterSpacing: 'var(--type-eyebrow-tracking)',
      textTransform: uppercase ? 'uppercase' : 'none',
      color: TONES[tone],
      lineHeight: 1.4,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
const VARIANTS = {
  solid: {
    background: 'var(--action-secondary-bg)',
    color: 'var(--neutral-0)',
    border: '1px solid transparent'
  },
  accent: {
    background: 'var(--action-primary-bg)',
    color: 'var(--neutral-0)',
    border: '1px solid transparent'
  },
  outline: {
    background: 'var(--neutral-0)',
    color: 'var(--navy-500)',
    border: '1px solid var(--border-default)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--navy-500)',
    border: '1px solid transparent'
  }
};
const HOVER = {
  solid: {
    background: 'var(--action-secondary-bg-hover)'
  },
  accent: {
    background: 'var(--action-primary-bg-hover)'
  },
  outline: {
    borderColor: 'var(--border-accent)',
    color: 'var(--orange-600)'
  },
  ghost: {
    background: 'var(--action-quiet-bg-hover)'
  }
};
function IconButton({
  icon,
  label,
  variant = 'outline',
  size = 'md',
  shape = 'circle',
  href,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size];
  const css = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: s,
    height: s,
    padding: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: shape === 'circle' ? 'var(--radius-circle)' : 'var(--radius-sm)',
    transition: 'var(--transition-interactive)',
    ...VARIANTS[variant],
    ...(hover && !disabled ? HOVER[variant] : null),
    ...(disabled ? {
      background: 'var(--disabled-bg)',
      color: 'var(--disabled-fg)',
      borderColor: 'transparent'
    } : null),
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    "aria-label": label,
    style: css
  }, handlers, rest), icon);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    style: css
  }, handlers, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'light',
  level = 2,
  maxWidth = 'var(--measure-prose)',
  style,
  ...rest
}) {
  const Tag = 'h' + level;
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      maxWidth,
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: dark ? 'inverse' : 'orange'
  }, eyebrow) : null, /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      color: dark ? 'var(--text-inverse)' : 'var(--text-heading)',
      fontSize: 'var(--type-h2-size)',
      fontWeight: 'var(--type-h2-weight)',
      lineHeight: 'var(--type-h2-leading)',
      letterSpacing: 'var(--tracking-tight)',
      textWrap: 'balance'
    }
  }, title), intro ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      marginTop: 'var(--space-1)',
      color: dark ? 'rgba(255,255,255,.82)' : 'var(--text-body)',
      fontSize: 'var(--type-lead-size)',
      lineHeight: 'var(--type-lead-leading)',
      textWrap: 'pretty'
    }
  }, intro) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  id,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const on = checked !== undefined ? checked : undefined;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: id,
    checked: on,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    style: {
      appearance: 'none',
      width: 20,
      height: 20,
      flex: '0 0 auto',
      margin: '2px 0 0',
      borderRadius: 'var(--radius-xs)',
      cursor: 'inherit',
      border: '1px solid ' + (hover && !disabled ? 'var(--navy-500)' : 'var(--border-default)'),
      background: 'var(--neutral-0)',
      transition: 'var(--transition-interactive)',
      backgroundImage: 'none'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 2,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--type-label-size)',
      fontWeight: 'var(--type-label-weight)',
      color: 'var(--text-heading)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-600)',
      marginLeft: 4
    }
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--status-danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
const controlStyle = (invalid, focused) => ({
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-base)',
  color: 'var(--text-body)',
  background: 'var(--neutral-0)',
  padding: 'var(--pad-input-y) var(--pad-input-x)',
  borderRadius: 'var(--radius-input)',
  border: '1px solid ' + (invalid ? 'var(--status-danger)' : focused ? 'var(--navy-500)' : 'var(--border-default)'),
  boxShadow: focused ? 'var(--ring-focus)' : 'none',
  outline: 'none',
  transition: 'var(--transition-interactive)'
});
Object.assign(__ds_scope, { Field, controlStyle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/FilterChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FilterChip({
  children,
  active = false,
  onClick,
  count,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-pressed": active,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      padding: '8px 16px',
      borderRadius: 'var(--radius-chip)',
      transition: 'var(--transition-interactive)',
      background: active ? 'var(--navy-500)' : hover ? 'var(--navy-50)' : 'var(--neutral-0)',
      color: active ? 'var(--neutral-0)' : 'var(--navy-500)',
      border: '1px solid ' + (active ? 'var(--navy-500)' : 'var(--border-default)'),
      ...style
    }
  }, rest), children, count !== undefined ? /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.65,
      fontWeight: 'var(--fw-regular)'
    }
  }, count) : null);
}
Object.assign(__ds_scope, { FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  required,
  id,
  icon,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const control = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      display: 'flex',
      color: 'var(--neutral-500)',
      pointerEvents: 'none'
    }
  }, icon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    required: required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      ...__ds_scope.controlStyle(!!error, focused),
      paddingLeft: icon ? 40 : undefined,
      ...style
    }
  }, rest)));
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    htmlFor: id,
    hint: hint,
    error: error,
    required: required
  }, control);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  required,
  id,
  options = [],
  placeholder,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    htmlFor: id,
    hint: hint,
    error: error,
    required: required
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    required: required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      ...__ds_scope.controlStyle(!!error, focused),
      appearance: 'none',
      paddingRight: 40,
      cursor: 'pointer',
      ...style
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const optLabel = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, optLabel);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--navy-500)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    style: {
      width: 18,
      height: 18
    }
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  required,
  id,
  rows = 5,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    htmlFor: id,
    hint: hint,
    error: error,
    required: required
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    required: required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      ...__ds_scope.controlStyle(!!error, focused),
      resize: 'vertical',
      lineHeight: 'var(--leading-normal)',
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Footer({
  logo,
  parentLogo,
  parentLabel = 'A program of',
  columns = [],
  social = [],
  copyright = '© 2026 OC Fellows. All Rights Reserved.',
  legal = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--surface-navy)',
      color: 'var(--text-inverse)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--container-pad) var(--space-8)',
      display: 'grid',
      gridTemplateColumns: 'minmax(220px,1.2fr) repeat(' + Math.max(columns.length, 1) + ', minmax(140px,1fr))',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "OC Fellows",
    style: {
      height: 44,
      width: 'auto'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-logo)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-xl)'
    }
  }, "OC Fellows"), parentLogo || parentLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--aqua-500)'
    }
  }, parentLabel), parentLogo ? /*#__PURE__*/React.createElement("img", {
    src: parentLogo,
    alt: "",
    style: {
      height: 34,
      width: 'auto'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, "CEO Leadership Alliance of Orange County")) : null, social.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href,
    "aria-label": s.label,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-circle)',
      border: '1px solid var(--border-inverse)',
      color: 'var(--neutral-0)'
    }
  }, s.icon))) : null), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h6", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--neutral-0)'
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    style: {
      fontSize: 'var(--text-sm)',
      color: 'rgba(255,255,255,.82)'
    }
  }, l.label))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--container-pad)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-4)',
      justifyContent: 'space-between',
      fontSize: 'var(--text-xs)',
      color: 'rgba(255,255,255,.7)'
    }
  }, /*#__PURE__*/React.createElement("span", null, copyright), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, legal.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      color: 'rgba(255,255,255,.7)'
    }
  }, l.label))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  logo,
  items = [],
  activeHref,
  cta = {
    label: 'Apply',
    href: '#'
  },
  onNavigate,
  sticky = true,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,.96)',
      backdropFilter: 'var(--blur-panel)',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-4) var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('/');
    },
    style: {
      display: 'flex',
      flex: '0 0 auto'
    }
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "OC Fellows",
    style: {
      height: 40,
      width: 'auto'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-logo)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-xl)',
      color: 'var(--navy-500)'
    }
  }, "OC Fellows")), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      marginLeft: 'auto'
    }
  }, items.map(item => {
    const active = activeHref === item.href;
    const hasChildren = item.children && item.children.length > 0;
    return /*#__PURE__*/React.createElement("li", {
      key: item.label,
      style: {
        position: 'relative'
      },
      onMouseEnter: () => hasChildren && setOpen(item.label),
      onMouseLeave: () => hasChildren && setOpen(null)
    }, /*#__PURE__*/React.createElement("a", {
      href: item.href,
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(item.href);
      },
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--fw-semibold)',
        color: active ? 'var(--orange-600)' : 'var(--navy-500)',
        whiteSpace: 'nowrap',
        paddingBottom: 2,
        borderBottom: '2px solid ' + (active ? 'var(--orange-500)' : 'transparent')
      }
    }, item.label, hasChildren ? /*#__PURE__*/React.createElement("i", {
      "data-lucide": "chevron-down",
      style: {
        width: 15,
        height: 15
      }
    }) : null), hasChildren && open === item.label ? /*#__PURE__*/React.createElement("ul", {
      style: {
        position: 'absolute',
        top: '100%',
        left: -12,
        marginTop: 10,
        padding: 'var(--space-2)',
        listStyle: 'none',
        minWidth: 210,
        background: 'var(--neutral-0)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-card)',
        boxShadow: 'var(--shadow-md)'
      }
    }, item.children.map(c => /*#__PURE__*/React.createElement("li", {
      key: c.label
    }, /*#__PURE__*/React.createElement("a", {
      href: c.href,
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(c.href);
      },
      style: {
        display: 'block',
        padding: '9px 12px',
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--navy-500)'
      }
    }, c.label)))) : null);
  })), cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: cta.href,
    size: "sm",
    style: {
      flex: '0 0 auto'
    }
  }, cta.label) : null));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const {
  NavBar,
  Footer
} = window.OCFellowsDesignSystem_3dfef0;
function App() {
  const S = window.SITE;
  const [route, setRoute] = React.useState('/');
  const go = href => {
    setRoute(href);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [route]);
  React.useEffect(() => {
    const t = setInterval(() => {
      if (window.lucide) window.lucide.createIcons();
    }, 600);
    return () => clearInterval(t);
  }, []);
  const Screen = route === '/our-fellows' ? FellowsScreen : route === '/stories' ? StoriesScreen : route === '/apply' ? ApplyScreen : HomeScreen;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, {
    logo: S.assets.logoPrimary,
    items: S.nav,
    activeHref: route,
    onNavigate: go,
    cta: {
      label: 'Apply',
      href: '#'
    }
  }), /*#__PURE__*/React.createElement(Screen, {
    go: go
  }), /*#__PURE__*/React.createElement(Footer, {
    logo: S.assets.logoWhite,
    columns: [{
      title: 'Navigate',
      links: [{
        label: 'About',
        href: '#'
      }, {
        label: 'Our Fellows',
        href: '#'
      }, {
        label: 'Stories',
        href: '#'
      }, {
        label: 'Our Network',
        href: '#'
      }]
    }, {
      title: 'Our Program',
      links: [{
        label: 'Learning',
        href: '#'
      }, {
        label: 'Social',
        href: '#'
      }, {
        label: 'Community',
        href: '#'
      }]
    }, {
      title: 'More',
      links: [{
        label: 'Our Team',
        href: '#'
      }, {
        label: 'Press',
        href: '#'
      }, {
        label: 'Apply',
        href: '#'
      }, {
        label: 'Contact us',
        href: '#'
      }]
    }],
    social: [{
      label: 'Follow us on LinkedIn',
      href: 'https://www.linkedin.com/company/orangefellowship/',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "linkedin",
        size: 18
      })
    }],
    legal: [{
      label: 'Privacy Policy',
      href: '#'
    }]
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
if (window.lucide) window.lucide.createIcons();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ApplyScreen.jsx
try { (() => {
const {
  Button,
  Input,
  Select,
  Textarea,
  Checkbox,
  TimelineStep,
  SectionHeading,
  Card
} = window.OCFellowsDesignSystem_3dfef0;
function ApplyScreen() {
  const S = window.SITE;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Connect. Grow. Succeed.",
    title: "Apply to OC Fellows",
    intro: "Applications open on March 1st each year and close at the end of April."
  }), /*#__PURE__*/React.createElement(Section, {
    surface: "white"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Future Leaders Making a Difference",
    title: "Timeline for our application process:"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, S.timeline.map((t, i) => /*#__PURE__*/React.createElement(TimelineStep, {
    key: t.title,
    number: i + 1,
    title: t.title,
    description: t.description,
    active: i === 0,
    last: i === S.timeline.length - 1
  })))), /*#__PURE__*/React.createElement(Card, {
    surface: "cream",
    edge: "border",
    padding: "var(--space-8)"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 48,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      background: 'var(--status-success-bg)',
      color: 'var(--status-success)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0
    }
  }, "Thanks \u2014 we have your interest."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "The OC Fellows team reviews expressions of interest as applications open. Final decisions are announced the first week of July."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Submit Another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0
    }
  }, "Express your interest"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "a-first",
    label: "First name",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    id: "a-last",
    label: "Last name",
    required: true
  })), /*#__PURE__*/React.createElement(Input, {
    id: "a-email",
    label: "Work email",
    type: "email",
    required: true,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 18
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "a-employer",
    label: "Employer",
    placeholder: "Where you work today"
  }), /*#__PURE__*/React.createElement(Select, {
    id: "a-cohort",
    label: "Target cohort",
    placeholder: "Select a year",
    options: ['2027', '2028']
  })), /*#__PURE__*/React.createElement(Textarea, {
    id: "a-why",
    label: "Why do you want to join OC Fellows?",
    rows: 4,
    hint: "Two or three sentences is plenty."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    id: "a-news",
    label: "Add me to the OC Fellows mailing list",
    description: "Quarterly updates only."
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true
  }, "Submit"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "The live site collects applications through an external Google Form. This form is a recreation of that step, not a working submission."))))));
}
Object.assign(window, {
  ApplyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ApplyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FellowsScreen.jsx
try { (() => {
const {
  FilterChip,
  Select,
  Input,
  Badge
} = window.OCFellowsDesignSystem_3dfef0;
function FellowsScreen() {
  const S = window.SITE;
  const years = ['All', ...Array.from(new Set(S.fellows.map(f => String(f.year)))).sort((a, b) => b - a)];
  const [year, setYear] = React.useState('All');
  const [query, setQuery] = React.useState('');
  const list = S.fellows.filter(f => (year === 'All' || String(f.year) === year) && f.name.toLowerCase().includes(query.toLowerCase()));
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Future Leaders Making a Difference",
    title: "Meet the OC Fellows",
    intro: "Every Fellow joins a two-year cohort of early-career professionals working across Orange County."
  }), /*#__PURE__*/React.createElement(Section, {
    surface: "white"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-6)',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-label-size)',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, "OC Fellows Group Filter"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, years.map(y => /*#__PURE__*/React.createElement(FilterChip, {
    key: y,
    active: year === y,
    onClick: () => setYear(y)
  }, y)))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "fellow-search",
    label: "Search Fellows",
    placeholder: "Search by name",
    value: query,
    onChange: e => setQuery(e.target.value),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 18
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, list.length, " ", list.length === 1 ? 'Fellow' : 'Fellows'), year !== 'All' ? /*#__PURE__*/React.createElement(Badge, {
    tone: "aqua"
  }, "Class of ", year) : null), list.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-6)'
    }
  }, list.map(f => /*#__PURE__*/React.createElement("a", {
    key: f.name,
    href: "#",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(PhotoPlaceholder, {
    label: "HEADSHOT"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, f.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, f.year))))) : /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-8)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)'
    }
  }, "No data was found"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-10) 0 0',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure-prose)'
    }
  }, "Fellow headshots are intentionally left as placeholders \u2014 no portrait photography was included in the supplied brand assets, and the brand forbids stock substitutes.")));
}
Object.assign(window, {
  FellowsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FellowsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  SectionHeading,
  Eyebrow,
  Badge,
  ProgramCard,
  StatCounter,
  ValueItem,
  PersonCard,
  StoryCard,
  PressCard,
  LogoWall,
  TimelineStep,
  Card
} = window.OCFellowsDesignSystem_3dfef0;
function HomeScreen({
  go
}) {
  const S = window.SITE;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--surface-navy)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: S.photos.group,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-left)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      paddingInline: 'var(--container-pad)',
      paddingBlock: 'var(--space-32)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    uppercase: true
  }, S.hero.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      color: 'var(--text-inverse)',
      fontSize: 'var(--type-display-size)',
      fontWeight: 700,
      lineHeight: 1.08,
      letterSpacing: 'var(--tracking-tight)'
    }
  }, S.hero.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'rgba(255,255,255,.88)',
      fontSize: 'var(--type-lead-size)',
      lineHeight: 'var(--leading-relaxed)',
      maxWidth: '52ch'
    }
  }, S.hero.intro), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('/apply')
  }, "Apply"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    onClick: () => go('/our-fellows')
  }, "Welcome Class of 2026"))))), /*#__PURE__*/React.createElement(Section, {
    surface: "white",
    compact: true
  }, /*#__PURE__*/React.createElement(LogoWall, {
    label: "WHERE OUR FELLOWS WORK",
    logos: S.employers.map(n => ({
      name: n
    }))
  })), /*#__PURE__*/React.createElement(Section, {
    surface: "cream"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--gutter)'
    }
  }, S.programs.map((p, i) => /*#__PURE__*/React.createElement(ProgramCard, {
    key: p.title,
    title: p.title,
    description: p.description,
    href: p.href,
    image: i === 1 ? S.photos.networking : S.photos.group
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(LogoWall, {
    label: "OC FELLOWS IS SPONSORED BY",
    logos: S.sponsors.map(n => ({
      name: n
    })),
    height: 34
  }))), /*#__PURE__*/React.createElement(Section, {
    surface: "white"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: S.about.eyebrow,
    title: S.about.title
  }), S.about.body.map(t => /*#__PURE__*/React.createElement("p", {
    key: t,
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)',
      maxWidth: 'var(--measure-prose)'
    }
  }, t)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('/our-fellows')
  }, "Meet the OC Fellows"))), /*#__PURE__*/React.createElement("img", {
    src: S.photos.networking,
    alt: "OC Fellows at a networking event",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-media)',
      boxShadow: 'var(--shadow-md)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-20)',
      paddingTop: 'var(--space-12)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(StatCounter, {
    value: 48,
    suffix: "+",
    label: "Events Held"
  }), /*#__PURE__*/React.createElement(StatCounter, {
    value: 96,
    suffix: "%",
    label: "Fellowship Completion Rate"
  }), /*#__PURE__*/React.createElement(StatCounter, {
    value: 180,
    suffix: "+",
    label: "Early Career Professionals Impacted"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "Figures are placeholders \u2014 the supplied sources publish no counts.")), /*#__PURE__*/React.createElement(Section, {
    surface: "navy"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    align: "center",
    eyebrow: S.values.eyebrow,
    title: S.values.title,
    intro: S.values.intro
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 'var(--space-8)',
      marginTop: 'var(--space-16)'
    }
  }, S.values.items.map(v => /*#__PURE__*/React.createElement(ValueItem, {
    key: v.title,
    tone: "dark",
    title: v.title,
    description: v.description,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: v.icon
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse"
  }, "Learn About Our Program"))), /*#__PURE__*/React.createElement(Section, {
    surface: "white"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Future Leaders Making a Difference",
    title: "Meet the OC Fellows"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('/our-fellows')
  }, "View All Fellows")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-12)'
    }
  }, S.fellows.slice(0, 6).map(f => /*#__PURE__*/React.createElement("div", {
    key: f.name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(PhotoPlaceholder, {
    label: "HEADSHOT"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, f.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, f.year)))))), /*#__PURE__*/React.createElement(Section, {
    surface: "cream"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "How OC Fellows Transform Lives",
    title: "Impact Stories",
    intro: "Stories from OC Fellows showcase growth, purpose, and connection. Each journey reflects the power of leadership, mentorship, and community in shaping change makers across Orange County and beyond."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-12)'
    }
  }, S.stories.map((s, i) => /*#__PURE__*/React.createElement(StoryCard, {
    key: s.title,
    title: s.title,
    excerpt: s.excerpt,
    href: "#",
    image: i === 1 ? S.photos.group : S.photos.networking
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('/stories')
  }, "View All Stories"))), /*#__PURE__*/React.createElement(Section, {
    surface: "white"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Leaders United for Lasting Impact",
    title: "OC Fellows Team",
    intro: "The OC Fellows Network is a growing community of diverse, impact-driven leaders. Together, we uplift one another, build meaningful connections, and collaborate to shape a more inclusive Orange County."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-12)'
    }
  }, S.team.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      textAlign: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '68%'
    }
  }, /*#__PURE__*/React.createElement(PhotoPlaceholder, {
    ratio: "1 / 1",
    radius: "var(--radius-circle)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-normal)'
    }
  }, t.meta))))), /*#__PURE__*/React.createElement(Section, {
    surface: "cream"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Featured in News & Media",
    title: "Press",
    intro: "Press from OC Fellows highlights the impact, voices, and leadership of our community."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-12)'
    }
  }, S.press.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.publication,
    edge: "border",
    padding: "0",
    interactive: true,
    href: "#"
  }, /*#__PURE__*/React.createElement(PhotoPlaceholder, {
    ratio: "3 / 4",
    label: "CLIPPING SCAN",
    radius: "0"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, p.publication), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, p.date)))))), /*#__PURE__*/React.createElement(Section, {
    surface: "aqua"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 190
    }
  }, /*#__PURE__*/React.createElement(PhotoPlaceholder, {
    ratio: "1 / 1",
    radius: "var(--radius-circle)",
    label: "CLAOC LOGO NOT SUPPLIED"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: S.claoc.eyebrow,
    title: S.claoc.title
  }), S.claoc.body.map(t => /*#__PURE__*/React.createElement("p", {
    key: t,
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)'
    }
  }, t)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    href: "https://claoc.org/"
  }, "Learn more"))))), /*#__PURE__*/React.createElement(Section, {
    surface: "white"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Future Leaders Making a Difference",
    title: "Timeline for our application process:"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0 var(--space-16)',
      marginTop: 'var(--space-12)'
    }
  }, S.timeline.map((t, i) => /*#__PURE__*/React.createElement(TimelineStep, {
    key: t.title,
    number: i + 1,
    title: t.title,
    description: t.description,
    last: i >= S.timeline.length - 2
  })))), /*#__PURE__*/React.createElement(Section, {
    surface: "navy",
    compact: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-6)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    align: "center",
    eyebrow: "Reach out if you are interested in OC Fellows",
    title: "Get Involved with OC Fellows"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('/apply')
  }, "Contact us"))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
const {
  Eyebrow,
  SectionHeading
} = window.OCFellowsDesignSystem_3dfef0;
const Icon = ({
  name,
  size = 20
}) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": name,
  style: {
    width: size,
    height: size
  }
});
function Section({
  children,
  surface = 'white',
  compact = false,
  style
}) {
  const bg = {
    white: 'var(--surface-page)',
    cream: 'var(--surface-cream)',
    aqua: 'var(--surface-aqua-soft)',
    navy: 'var(--surface-navy)'
  }[surface];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      paddingBlock: compact ? 'var(--section-y-compact)' : 'var(--section-y)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      paddingInline: 'var(--container-pad)'
    }
  }, children));
}
function PhotoPlaceholder({
  ratio = '3 / 4',
  label,
  radius = 'var(--radius-media)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      borderRadius: radius,
      background: 'var(--aqua-50)',
      border: '1px dashed var(--aqua-700)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      padding: 12,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.SITE.assets.symbol,
    alt: "",
    style: {
      width: 34,
      opacity: 0.28
    }
  }), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--aqua-700)',
      letterSpacing: '0.06em'
    }
  }, label) : null);
}
function PageHeader({
  eyebrow,
  title,
  intro
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-navy)',
      paddingBlock: 'var(--space-20) var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      paddingInline: 'var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    level: 1,
    eyebrow: eyebrow,
    title: title,
    intro: intro
  })));
}
Object.assign(window, {
  Icon,
  Section,
  PhotoPlaceholder,
  PageHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StoriesScreen.jsx
try { (() => {
const {
  StoryCard,
  Button,
  SectionHeading,
  Badge
} = window.OCFellowsDesignSystem_3dfef0;
function StoriesScreen() {
  const S = window.SITE;
  const featured = S.stories[0];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "How OC Fellows Transform Lives",
    title: "Impact Stories",
    intro: "Stories from OC Fellows showcase growth, purpose, and connection. Each journey reflects the power of leadership, mentorship, and community in shaping change makers across Orange County and beyond."
  }), /*#__PURE__*/React.createElement(Section, {
    surface: "white"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'var(--space-12)',
      alignItems: 'center',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: S.photos.group,
    alt: "",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-media)',
      boxShadow: 'var(--shadow-md)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "orange"
  }, "Featured Story"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--type-h2-size)',
      lineHeight: 'var(--leading-snug)'
    }
  }, featured.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--type-lead-size)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)'
    }
  }, featured.excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Read More"))))), /*#__PURE__*/React.createElement(Section, {
    surface: "cream",
    compact: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "More from the network",
    title: "All Stories"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-10)'
    }
  }, S.stories.concat(S.stories).map((s, i) => /*#__PURE__*/React.createElement(StoryCard, {
    key: i,
    title: s.title,
    excerpt: s.excerpt,
    href: "#",
    image: i % 2 ? S.photos.networking : S.photos.group
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-8) 0 0',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "Three stories exist in the fetched source; the grid repeats them to show the layout at scale.")));
}
Object.assign(window, {
  StoriesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StoriesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Content lifted from ocfellows.org (fetched Aug 2026). Copy is verbatim where the site provided it.
window.SITE = {
  nav: [{
    label: 'About',
    href: '/about'
  }, {
    label: 'Our Program',
    href: '/our-program',
    children: [{
      label: 'Learning Events',
      href: '/our-program/learning-events'
    }, {
      label: 'Social Events',
      href: '/our-program/social-events'
    }, {
      label: 'Community Partners',
      href: '/our-program/community-partner'
    }]
  }, {
    label: 'Our Fellows',
    href: '/our-fellows'
  }, {
    label: 'Stories',
    href: '/stories'
  }, {
    label: 'Our Network',
    href: '/our-network'
  }, {
    label: 'Our Team',
    href: '/team'
  }],
  hero: {
    eyebrow: 'Connect. Grow. Succeed.',
    title: 'Recognizing and Developing Orange County\u2019s Future Business Leaders',
    intro: 'OC Fellows is a two-year leadership experience designed for early-career professionals ready to lead with purpose and make meaningful impact across industries and communities.',
    note: 'Welcome Class of 2026'
  },
  employers: ['Terumo Neuro', 'Rivian', 'Medtronic', 'Slalom', 'Ingram Micro', 'Pacific Life', 'Edwards Lifesciences', 'Skyworks', 'City of Hope'],
  sponsors: ['Edwards Lifesciences', 'Bank of America'],
  programs: [{
    title: 'Learning Event',
    href: '/our-program/learning-events',
    description: 'Our Learning Events offer a workshop focused on leadership development, career growth and skill building. We also host a CEO Spotlight to learn from other business leaders in OC. Every OC Fellows event is an opportunity to network and create connections.'
  }, {
    title: 'Social Event',
    href: '/our-program/social-events',
    description: 'OC Fellows engage in quarterly social events, hosted at different locations around Orange County. This includes restaurants and activities.'
  }, {
    title: 'Community Partner',
    href: '/our-program/community-partner',
    description: 'OC Fellows partners with high school and university programs to provide career connections and mentoring. We offer unique opportunities to give back to our community.'
  }],
  about: {
    eyebrow: 'OC Fellows seeks to develop diverse young talent in Orange County, California.',
    title: 'What is the OC Fellows?',
    body: ['It is a two-year leadership development program for diverse early career professionals working in OC companies and businesses. We provide learning workshops, skill building, networking opportunities, community service and connection across industries.', 'It is an opportunity to grow and learn alongside other young professionals in Orange County.']
  },
  stats: [{
    label: 'Events Held',
    suffix: '+'
  }, {
    label: 'Fellowship Completion Rate',
    suffix: '%'
  }, {
    label: 'Early Career Professionals Impacted',
    suffix: '+'
  }],
  values: {
    eyebrow: 'Leading with Purpose, Impact, and Unity',
    title: 'Our Values',
    intro: 'We foster curiosity, inclusivity, and a sense of interconnectedness, encouraging individuals to grow while contributing to the collective success of Orange County.',
    items: [{
      title: 'Curiosity Sparks Growth',
      description: 'Our curiosity leads to learning and understanding',
      icon: 'sparkles'
    }, {
      title: 'Community-Centered Action',
      description: 'We seek opportunities for radical community care',
      icon: 'hand-heart'
    }, {
      title: 'Lead with Empathy',
      description: 'Leading with empathy helps us recognize and include others',
      icon: 'heart-handshake'
    }, {
      title: 'Intentional Communication',
      description: 'We are present and communicate with purpose',
      icon: 'message-circle'
    }, {
      title: 'Shared Connection',
      description: 'Working together we reflect our interconnectedness',
      icon: 'users'
    }]
  },
  fellows: [{
    name: 'Parshva Adani',
    year: 2026
  }, {
    name: 'Cameron Ahyaee',
    year: 2026
  }, {
    name: 'Sam Bethke',
    year: 2026
  }, {
    name: 'Roma Bhatia',
    year: 2025
  }, {
    name: 'Aaron Barel',
    year: 2024
  }, {
    name: 'Jacob Benson',
    year: 2024
  }, {
    name: 'Karla Bickenbach',
    year: 2024
  }, {
    name: 'Tasha Aboufadel',
    year: 2022
  }, {
    name: 'William Agnew',
    year: 2022
  }, {
    name: 'Kyle Alderman',
    year: 2022
  }, {
    name: 'Nicole Beltran',
    year: 2022
  }, {
    name: 'Kristofer Amparo',
    year: 2020
  }],
  stories: [{
    title: 'Life Sciences Engineer and Florida Native Kendra Washington Builds Community as an OC Fellow',
    excerpt: 'I really appreciate that the OC Fellows program provides opportunities for us\u2026'
  }, {
    title: 'Life Sciences Engineer Bianca Aleman Builds Skills and Friendships through OC Fellows',
    excerpt: 'The first year I moved to OC, it was hard to not\u2026'
  }, {
    title: 'OC Fellow Alumn Minh Nguyen Gives Back to OC\u2019s Future Leaders',
    excerpt: 'My goal has always been to launch an enterprise dedicated to improving\u2026'
  }],
  team: [{
    name: 'Minh Nguyen',
    meta: 'Program Manager, UCI Health'
  }, {
    name: 'Jasmine Pachnanda',
    meta: 'Chief Operating Officer, CEO Leadership Alliance Orange County'
  }, {
    name: 'Peggy Wolff',
    meta: 'Director, OC Fellows'
  }, {
    name: 'YeeYee Wang',
    meta: 'Director Strategic Initiatives, CEO Leadership Alliance Orange County'
  }],
  press: [{
    publication: 'Irvine Standard',
    date: 'April 2025'
  }, {
    publication: 'OCBJ Leaderboard',
    date: 'July 2025'
  }, {
    publication: 'A Spotlight on Future OC Business Leaders',
    date: 'July 2024'
  }, {
    publication: 'OC Fellows Leaderboard OCBJ',
    date: 'July 2023'
  }],
  timeline: [{
    title: 'Application Period',
    description: 'Application opens on March 1st each year. The application will be open until the end of April'
  }, {
    title: 'Submit Resume',
    description: 'Applicants need to include an updated resume.'
  }, {
    title: 'Application Review & Interviews',
    description: 'OC Fellows Team and Advisory Board will review applications and schedule interviews in May and June.'
  }, {
    title: 'Results Released',
    description: 'Final decisions are announced the first week of July.'
  }, {
    title: 'Program Begins',
    description: 'The new class kicks off their two-year program in July (Q3) of each year.'
  }, {
    title: 'About the OC Fellows Program',
    description: 'OC Fellows is a two-year program offering quarterly learning events and social events. The program also offers bonus opportunities with business leaders and community engagement.'
  }],
  claoc: {
    eyebrow: 'Working together to build a thriving Orange County for all.',
    title: 'CEO Leadership Alliance of Orange County',
    body: ['CEO Leadership Alliance of Orange County (CLAOC) is a collaborative effort led by purposeful CEOs who believe that contributing to the community is not only a responsibility, but the right thing to do.', 'CLAOC created OC Fellows to develop and retain top tier young talent in Orange County, California. Our goal is to cultivate OC into a premier, inclusive, innovation talent hub.']
  },
  photos: {
    group: '/design-systems/oc-fellows/assets/photography/oc-fellows-group.png',
    networking: '/design-systems/oc-fellows/assets/photography/oc-fellows-networking.png'
  },
  assets: {
    logoPrimary: '/design-systems/oc-fellows/assets/logo-primary.svg',
    logoWhite: '/design-systems/oc-fellows/assets/logo-white.svg',
    symbol: '/design-systems/oc-fellows/assets/logo-symbol.svg'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.LogoWall = __ds_scope.LogoWall;

__ds_ns.PersonCard = __ds_scope.PersonCard;

__ds_ns.PressCard = __ds_scope.PressCard;

__ds_ns.ProgramCard = __ds_scope.ProgramCard;

__ds_ns.StatCounter = __ds_scope.StatCounter;

__ds_ns.StoryCard = __ds_scope.StoryCard;

__ds_ns.TimelineStep = __ds_scope.TimelineStep;

__ds_ns.ValueItem = __ds_scope.ValueItem;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

})();

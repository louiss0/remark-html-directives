const q = function(n) {
  if (n == null)
    return tn;
  if (typeof n == "string")
    return ln(n);
  if (typeof n == "object")
    return Array.isArray(n) ? nn(n) : en(n);
  if (typeof n == "function")
    return L(n);
  throw new Error("Expected function, string, or object as test");
};
function nn(n) {
  const e = [];
  let t = -1;
  for (; ++t < n.length; )
    e[t] = q(n[t]);
  return L(o);
  function o(...i) {
    let r = -1;
    for (; ++r < e.length; )
      if (e[r].call(this, ...i))
        return !0;
    return !1;
  }
}
function en(n) {
  return L(e);
  function e(t) {
    let o;
    for (o in n)
      if (t[o] !== n[o])
        return !1;
    return !0;
  }
}
function ln(n) {
  return L(e);
  function e(t) {
    return t && t.type === n;
  }
}
function L(n) {
  return e;
  function e(...t) {
    return Boolean(n.call(this, ...t));
  }
}
function tn() {
  return !0;
}
const on = !0, rn = "skip", U = !1, an = function(n, e, t, o) {
  typeof e == "function" && typeof t != "function" && (o = t, t = e, e = null);
  const i = q(e), r = o ? -1 : 1;
  a(n, null, [])();
  function a(s, w, p) {
    const h = typeof s == "object" && s !== null ? s : {};
    let O;
    return typeof h.type == "string" && (O = typeof h.tagName == "string" ? h.tagName : typeof h.name == "string" ? h.name : void 0, Object.defineProperty(I, "name", {
      value: "node (" + (h.type + (O ? "<" + O + ">" : "")) + ")"
    })), I;
    function I() {
      let k = [], S, m, N;
      if ((!e || i(s, w, p[p.length - 1] || null)) && (k = un(t(s, p)), k[0] === U))
        return k;
      if (s.children && k[0] !== rn)
        for (m = (o ? s.children.length : -1) + r, N = p.concat(s); m > -1 && m < s.children.length; ) {
          if (S = a(s.children[m], m, N)(), S[0] === U)
            return S;
          m = typeof S[1] == "number" ? S[1] : m + r;
        }
      return k;
    }
  }
};
function un(n) {
  return Array.isArray(n) ? n : typeof n == "number" ? [on, n] : [n];
}
const sn = function(n, e, t, o) {
  typeof e == "function" && typeof t != "function" && (o = t, t = e, e = null), an(n, e, i, o);
  function i(r, a) {
    const s = a[a.length - 1];
    return t(
      r,
      s ? s.children.indexOf(r) : null,
      s
    );
  }
};
class C {
  constructor(e, t, o) {
    this.property = e, this.normal = t, o && (this.space = o);
  }
}
C.prototype.property = {};
C.prototype.normal = {};
C.prototype.space = null;
function K(n, e) {
  const t = {}, o = {};
  let i = -1;
  for (; ++i < n.length; )
    Object.assign(t, n[i].property), Object.assign(o, n[i].normal);
  return new C(t, o, e);
}
function x(n) {
  return n.toLowerCase();
}
class f {
  constructor(e, t) {
    this.property = e, this.attribute = t;
  }
}
f.prototype.space = null;
f.prototype.boolean = !1;
f.prototype.booleanish = !1;
f.prototype.overloadedBoolean = !1;
f.prototype.number = !1;
f.prototype.commaSeparated = !1;
f.prototype.spaceSeparated = !1;
f.prototype.commaOrSpaceSeparated = !1;
f.prototype.mustUseProperty = !1;
f.prototype.defined = !1;
let cn = 0;
const u = y(), d = y(), W = y(), l = y(), c = y(), b = y(), g = y();
function y() {
  return 2 ** ++cn;
}
const M = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: u,
  booleanish: d,
  overloadedBoolean: W,
  number: l,
  spaceSeparated: c,
  commaSeparated: b,
  commaOrSpaceSeparated: g
}, Symbol.toStringTag, { value: "Module" })), A = Object.keys(M);
class E extends f {
  constructor(e, t, o, i) {
    let r = -1;
    if (super(e, t), z(this, "space", i), typeof o == "number")
      for (; ++r < A.length; ) {
        const a = A[r];
        z(this, A[r], (o & M[a]) === M[a]);
      }
  }
}
E.prototype.defined = !0;
function z(n, e, t) {
  t && (n[e] = t);
}
const pn = {}.hasOwnProperty;
function v(n) {
  const e = {}, t = {};
  let o;
  for (o in n.properties)
    if (pn.call(n.properties, o)) {
      const i = n.properties[o], r = new E(
        o,
        n.transform(n.attributes || {}, o),
        i,
        n.space
      );
      n.mustUseProperty && n.mustUseProperty.includes(o) && (r.mustUseProperty = !0), e[o] = r, t[x(o)] = o, t[x(r.attribute)] = o;
    }
  return new C(e, t, n.space);
}
const X = v({
  space: "xlink",
  transform(n, e) {
    return "xlink:" + e.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
}), $ = v({
  space: "xml",
  transform(n, e) {
    return "xml:" + e.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function Y(n, e) {
  return e in n ? n[e] : e;
}
function _(n, e) {
  return Y(n, e.toLowerCase());
}
const Z = v({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: _,
  properties: { xmlns: null, xmlnsXLink: null }
}), J = v({
  transform(n, e) {
    return e === "role" ? e : "aria-" + e.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: d,
    ariaAutoComplete: null,
    ariaBusy: d,
    ariaChecked: d,
    ariaColCount: l,
    ariaColIndex: l,
    ariaColSpan: l,
    ariaControls: c,
    ariaCurrent: null,
    ariaDescribedBy: c,
    ariaDetails: null,
    ariaDisabled: d,
    ariaDropEffect: c,
    ariaErrorMessage: null,
    ariaExpanded: d,
    ariaFlowTo: c,
    ariaGrabbed: d,
    ariaHasPopup: null,
    ariaHidden: d,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: c,
    ariaLevel: l,
    ariaLive: null,
    ariaModal: d,
    ariaMultiLine: d,
    ariaMultiSelectable: d,
    ariaOrientation: null,
    ariaOwns: c,
    ariaPlaceholder: null,
    ariaPosInSet: l,
    ariaPressed: d,
    ariaReadOnly: d,
    ariaRelevant: null,
    ariaRequired: d,
    ariaRoleDescription: c,
    ariaRowCount: l,
    ariaRowIndex: l,
    ariaRowSpan: l,
    ariaSelected: d,
    ariaSetSize: l,
    ariaSort: null,
    ariaValueMax: l,
    ariaValueMin: l,
    ariaValueNow: l,
    ariaValueText: null,
    role: null
  }
}), dn = v({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: _,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: b,
    acceptCharset: c,
    accessKey: c,
    action: null,
    allow: null,
    allowFullScreen: u,
    allowPaymentRequest: u,
    allowUserMedia: u,
    alt: null,
    as: null,
    async: u,
    autoCapitalize: null,
    autoComplete: c,
    autoFocus: u,
    autoPlay: u,
    capture: u,
    charSet: null,
    checked: u,
    cite: null,
    className: c,
    cols: l,
    colSpan: null,
    content: null,
    contentEditable: d,
    controls: u,
    controlsList: c,
    coords: l | b,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: u,
    defer: u,
    dir: null,
    dirName: null,
    disabled: u,
    download: W,
    draggable: d,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: u,
    formTarget: null,
    headers: c,
    height: l,
    hidden: u,
    high: l,
    href: null,
    hrefLang: null,
    htmlFor: c,
    httpEquiv: c,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: u,
    itemId: null,
    itemProp: c,
    itemRef: c,
    itemScope: u,
    itemType: c,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: u,
    low: l,
    manifest: null,
    max: null,
    maxLength: l,
    media: null,
    method: null,
    min: null,
    minLength: l,
    multiple: u,
    muted: u,
    name: null,
    nonce: null,
    noModule: u,
    noValidate: u,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: u,
    optimum: l,
    pattern: null,
    ping: c,
    placeholder: null,
    playsInline: u,
    poster: null,
    preload: null,
    readOnly: u,
    referrerPolicy: null,
    rel: c,
    required: u,
    reversed: u,
    rows: l,
    rowSpan: l,
    sandbox: c,
    scope: null,
    scoped: u,
    seamless: u,
    selected: u,
    shape: null,
    size: l,
    sizes: null,
    slot: null,
    span: l,
    spellCheck: d,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: l,
    step: null,
    style: null,
    tabIndex: l,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: u,
    useMap: null,
    value: d,
    width: l,
    wrap: null,
    align: null,
    aLink: null,
    archive: c,
    axis: null,
    background: null,
    bgColor: null,
    border: l,
    borderColor: null,
    bottomMargin: l,
    cellPadding: null,
    cellSpacing: null,
    char: null,
    charOff: null,
    classId: null,
    clear: null,
    code: null,
    codeBase: null,
    codeType: null,
    color: null,
    compact: u,
    declare: u,
    event: null,
    face: null,
    frame: null,
    frameBorder: null,
    hSpace: l,
    leftMargin: l,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: l,
    marginWidth: l,
    noResize: u,
    noHref: u,
    noShade: u,
    noWrap: u,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: l,
    rules: null,
    scheme: null,
    scrolling: d,
    standby: null,
    summary: null,
    text: null,
    topMargin: l,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: l,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: u,
    disableRemotePlayback: u,
    prefix: null,
    property: null,
    results: l,
    security: null,
    unselectable: null
  }
}), gn = v({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: Y,
  properties: {
    about: g,
    accentHeight: l,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: l,
    amplitude: l,
    arabicForm: null,
    ascent: l,
    attributeName: null,
    attributeType: null,
    azimuth: l,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: l,
    by: null,
    calcMode: null,
    capHeight: l,
    className: c,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: l,
    diffuseConstant: l,
    direction: null,
    display: null,
    dur: null,
    divisor: l,
    dominantBaseline: null,
    download: u,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: l,
    enableBackground: null,
    end: null,
    event: null,
    exponent: l,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: l,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: b,
    g2: b,
    glyphName: b,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: l,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: l,
    horizOriginX: l,
    horizOriginY: l,
    id: null,
    ideographic: l,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: l,
    k: l,
    k1: l,
    k2: l,
    k3: l,
    k4: l,
    kernelMatrix: g,
    kernelUnitLength: null,
    keyPoints: null,
    keySplines: null,
    keyTimes: null,
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: l,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: l,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: l,
    overlineThickness: l,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: l,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: c,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: l,
    pointsAtY: l,
    pointsAtZ: l,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: g,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: g,
    rev: g,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: g,
    requiredFeatures: g,
    requiredFonts: g,
    requiredFormats: g,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: l,
    specularExponent: l,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: l,
    strikethroughThickness: l,
    string: null,
    stroke: null,
    strokeDashArray: g,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: l,
    strokeOpacity: l,
    strokeWidth: null,
    style: null,
    surfaceScale: l,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: g,
    tabIndex: l,
    tableValues: null,
    target: null,
    targetX: l,
    targetY: l,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: g,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: l,
    underlineThickness: l,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: l,
    values: null,
    vAlphabetic: l,
    vMathematical: l,
    vectorEffect: null,
    vHanging: l,
    vIdeographic: l,
    version: null,
    vertAdvY: l,
    vertOriginX: l,
    vertOriginY: l,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: l,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), fn = /^data[-\w.:]+$/i, B = /-[a-z]/g, hn = /[A-Z]/g;
function mn(n, e) {
  const t = x(e);
  let o = e, i = f;
  if (t in n.normal)
    return n.property[n.normal[t]];
  if (t.length > 4 && t.slice(0, 4) === "data" && fn.test(e)) {
    if (e.charAt(4) === "-") {
      const r = e.slice(5).replace(B, bn);
      o = "data" + r.charAt(0).toUpperCase() + r.slice(1);
    } else {
      const r = e.slice(4);
      if (!B.test(r)) {
        let a = r.replace(hn, yn);
        a.charAt(0) !== "-" && (a = "-" + a), e = "data" + a;
      }
    }
    i = E;
  }
  return new i(o, e);
}
function yn(n) {
  return "-" + n.toLowerCase();
}
function bn(n) {
  return n.charAt(1).toUpperCase();
}
const vn = K([$, X, Z, J, dn], "html");
K([$, X, Z, J, gn], "svg");
var j = /[#.]/g;
const kn = function(n, e = "div") {
  for (var t = n || "", o = {}, i = 0, r, a, s; i < t.length; )
    j.lastIndex = i, s = j.exec(t), r = t.slice(i, s ? s.index : t.length), r && (a ? a === "#" ? o.id = r : Array.isArray(o.className) ? o.className.push(r) : o.className = [r] : e = r, i += r.length), s && (a = s[0], i++);
  return {
    type: "element",
    tagName: e,
    properties: o,
    children: []
  };
};
function F(n) {
  const e = String(n || "").trim();
  return e ? e.split(/[ \t\n\r\f]+/g) : [];
}
function H(n) {
  for (var e = [], t = String(n || ""), o = t.indexOf(","), i = 0, r, a; !r; )
    o === -1 && (o = t.length, r = !0), a = t.slice(i, o).trim(), (a || !r) && e.push(a), i = o + 1, o = t.indexOf(",", i);
  return e;
}
const Sn = /* @__PURE__ */ new Set(["menu", "submit", "reset", "button"]), T = {}.hasOwnProperty;
function xn(n, e, t) {
  const o = t && Dn(t);
  return function(r, a, ...s) {
    let w = -1, p;
    if (r == null)
      p = { type: "root", children: [] }, s.unshift(a);
    else if (p = kn(r, e), p.tagName = p.tagName.toLowerCase(), o && T.call(o, p.tagName) && (p.tagName = o[p.tagName]), Cn(a, p.tagName)) {
      let h;
      for (h in a)
        T.call(a, h) && wn(n, p.properties, h, a[h]);
    } else
      s.unshift(a);
    for (; ++w < s.length; )
      R(p.children, s[w]);
    return p.type === "element" && p.tagName === "template" && (p.content = { type: "root", children: p.children }, p.children = []), p;
  };
}
function Cn(n, e) {
  return n == null || typeof n != "object" || Array.isArray(n) ? !1 : e === "input" || !n.type || typeof n.type != "string" ? !0 : "children" in n && Array.isArray(n.children) ? !1 : e === "button" ? Sn.has(n.type.toLowerCase()) : !("value" in n);
}
function wn(n, e, t, o) {
  const i = mn(n, t);
  let r = -1, a;
  if (o != null) {
    if (typeof o == "number") {
      if (Number.isNaN(o))
        return;
      a = o;
    } else
      typeof o == "boolean" ? a = o : typeof o == "string" ? i.spaceSeparated ? a = F(o) : i.commaSeparated ? a = H(o) : i.commaOrSpaceSeparated ? a = F(H(o).join(" ")) : a = V(i, i.property, o) : Array.isArray(o) ? a = o.concat() : a = i.property === "style" ? Pn(o) : String(o);
    if (Array.isArray(a)) {
      const s = [];
      for (; ++r < a.length; )
        s[r] = V(i, i.property, a[r]);
      a = s;
    }
    i.property === "className" && Array.isArray(e.className) && (a = e.className.concat(a)), e[i.property] = a;
  }
}
function R(n, e) {
  let t = -1;
  if (e != null)
    if (typeof e == "string" || typeof e == "number")
      n.push({ type: "text", value: String(e) });
    else if (Array.isArray(e))
      for (; ++t < e.length; )
        R(n, e[t]);
    else if (typeof e == "object" && "type" in e)
      e.type === "root" ? R(n, e.children) : n.push(e);
    else
      throw new Error("Expected node, nodes, or string, got `" + e + "`");
}
function V(n, e, t) {
  if (typeof t == "string") {
    if (n.number && t && !Number.isNaN(Number(t)))
      return Number(t);
    if ((n.boolean || n.overloadedBoolean) && (t === "" || x(t) === x(e)))
      return !0;
  }
  return t;
}
function Pn(n) {
  const e = [];
  let t;
  for (t in n)
    T.call(n, t) && e.push([t, n[t]].join(": "));
  return e.join("; ");
}
function Dn(n) {
  const e = {};
  let t = -1;
  for (; ++t < n.length; )
    e[n[t].toLowerCase()] = n[t];
  return e;
}
const Ln = xn(vn, "div"), On = [
  "textDirective",
  "leafDirective",
  "containerDirective"
], G = [
  "address",
  "article",
  "aside",
  "blockquote",
  "details",
  "summary",
  "div",
  "dl",
  "figcaption",
  "figure",
  "footer",
  "header",
  "hr",
  "li",
  "main",
  "nav",
  "ol",
  "p",
  "pre",
  "section",
  "ul",
  "video",
  "audio",
  "hgroup",
  "table",
  "tfoot",
  "thead",
  "tbody"
], Q = [
  "br",
  "button",
  "i",
  "img",
  "map",
  "iframe",
  "span"
], P = [
  "tr",
  "th",
  "td",
  "col",
  "caption",
  "colgroup"
], D = [
  "cite",
  "code",
  "dfn",
  "em",
  "strong",
  "sub",
  "sup",
  "time",
  "var",
  "mark",
  "q",
  "small",
  "kbd",
  "samp",
  "a",
  "abbr",
  "bdo",
  "data",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "dd",
  "dt"
];
function An(n) {
  return [
    n.type === "containerDirective" && G.includes(n.name),
    n.type === "containerDirective" && P.includes(n.name)
  ].some((e) => e);
}
function Mn(n) {
  return [
    n.type === "leafDirective" && Q.includes(n.name),
    n.type === "leafDirective" && D.includes(n.name),
    n.type === "leafDirective" && P.includes(n.name)
  ].some((e) => e);
}
function Tn(n) {
  return n.type === "textDirective" && D.includes(n.name);
}
function Rn(n) {
  if (![
    An(n),
    Mn(n),
    Tn(n)
  ].some((t) => t))
    throw Error(`

    A container directive must be written using these tag names 
    ${G.join(" , ")}${P.join(" , ")}.
    
    Remember to use ::: a name then put ::: at the bottom for them  

    A leaf directive must use these tag names 
    ${Q.join(",")}
    ${D.join(" , ")}${P.join(" , ")}

    Remember to use :: for them 

    A text based directive must contain these tags ${D.join(" , ")}
    
    Remember to use : for them 

  `);
}
function En() {
  return (n) => {
    sn(n, (e) => {
      const t = e;
      if (!On.includes(e.type))
        return;
      Rn(t);
      const i = t.data || (t.data = {}), r = Ln(t.name, t.attributes);
      i.hName = r.tagName, i.hProperties = r.properties;
    });
  };
}
export {
  En as default
};

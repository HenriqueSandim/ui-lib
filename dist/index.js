"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button_default
});
module.exports = __toCommonJS(src_exports);

// src/components/Button/ButtonRoot.tsx
var React = __toESM(require("react"));
var import_tailwind_merge = require("tailwind-merge");
var import_tailwind_variants = require("tailwind-variants");
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_tailwind_variants.tv)({
  base: "flex justify-center items-center gap-xs w-fit disabled:cursor-not-allowed",
  variants: {
    variant: {
      filled: "bg-brand-500 text-neuter-50 hover:bg-brand-400 hover:border-brand-400 transition-colors duration-300 ease-in-out border-2 border-brand-500 focus:border-brand-600 active:border-brand-600 active:bg-brand-600 disabled:opacity-50",
      outlined: "bg-neuter-transparent text-brand-500 hover:bg-brand-100 transition-colors duration-300 ease-in-out border-2 border-brand-500 focus:border-brand-600 active:border-brand-600 active:bg-brand-200 disabled:opacity-50",
      borderless: "bg-neuter-transparent text-brand-500 hover:bg-brand-100 transition-colors duration-300 ease-in-out focus:border-2 focus:border-brand-600 active:bg-brand-200 active:text-brand-600 disabled:opacity-50"
    },
    size: {
      sm: "h-10 px-2 text-sm font-bold",
      md: "h-12 px-3 text-md font-bold",
      lg: "h-14 px-4 text-lg font-bold"
    },
    shape: {
      square: "rounded-md",
      rounded: "rounded-full"
    }
  }
});
var ButtonRoot = React.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      children,
      href,
      variant = "filled",
      size = "lg",
      shape = "square"
    } = _b, props = __objRest(_b, [
      "className",
      "children",
      "href",
      "variant",
      "size",
      "shape"
    ]);
    if (href) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "a",
        {
          href,
          className: (0, import_tailwind_merge.twMerge)(
            buttonVariants({ variant, size, shape, className })
          ),
          children
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      __spreadProps(__spreadValues({
        className: (0, import_tailwind_merge.twMerge)(buttonVariants({ variant, size, shape, className })),
        ref
      }, props), {
        children
      })
    );
  }
);

// src/components/Icon/index.tsx
var FaIcons = __toESM(require("react-icons/fa"));
var AiIcons = __toESM(require("react-icons/ai"));
var BsIcons = __toESM(require("react-icons/bs"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var Icon = (_a) => {
  var _b = _a, { name, color } = _b, rest = __objRest(_b, ["name", "color"]);
  let IconComponent;
  const whichIcon = name.slice(0, 2);
  switch (whichIcon) {
    case "Fa": {
      IconComponent = FaIcons[name];
      break;
    }
    case "Bs": {
      IconComponent = BsIcons[name];
    }
    case "Ai": {
      IconComponent = AiIcons[name];
    }
    default: {
      IconComponent = FaIcons.FaBars;
      break;
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconComponent, __spreadProps(__spreadValues({}, rest), { color }));
};
var Icon_default = Icon;

// src/components/Button/ButtonIcon.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var ButtonIcon = ({ name }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon_default, { name });
};
var ButtonIcon_default = ButtonIcon;

// src/components/Button/ButtonText.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var ButtonText = ({ text }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: text });
};
var ButtonText_default = ButtonText;

// src/components/Button/Button.tsx
var Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon_default,
  Text: ButtonText_default
};
var Button_default = Button;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
//# sourceMappingURL=index.js.map
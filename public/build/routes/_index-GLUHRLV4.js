import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NRH5LTJ7.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-GCZIJPKA.js";
import {
  createHotContext
} from "/build/_shared/chunk-KAWLLCTY.js";
import "/build/_shared/chunk-K6PKGSTD.js";
import "/build/_shared/chunk-O4OKU2LD.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1694633781855.59";
}
var meta = () => {
  return [{
    title: "New Remix App"
  }, {
    name: "description",
    content: "Welcome to Remix!"
  }];
};
function Index() {
  _s();
  const data = useActionData();
  console.log(data);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    fontFamily: "system-ui, sans-serif",
    lineHeight: "1.8"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Plan your trip" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Destination" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "destination" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "submit" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_s(Index, "EuQJlwp+1/dClAy+OhUaWQ2c6r8=", false, function() {
  return [useActionData];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-GLUHRLV4.js.map

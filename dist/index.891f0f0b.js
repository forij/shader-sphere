// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6oY9T":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ceb3f8cc891f0f0b";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8tyFx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _app = require("./App");
var _appDefault = parcelHelpers.interopDefault(_app);
const app = new (0, _appDefault.default)();
app.init();
requestAnimationFrame(update);
function update(t) {
    requestAnimationFrame(update);
    app.update(t);
}

},{"./App":"KtOe7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"KtOe7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _oglTypescript = require("ogl-typescript");
var _vertGlsl = require("../shaders/vert.glsl");
var _vertGlslDefault = parcelHelpers.interopDefault(_vertGlsl);
var _fragGlsl = require("../shaders/frag.glsl");
var _fragGlslDefault = parcelHelpers.interopDefault(_fragGlsl);
var _tNoise03Png = require("../assets/T_Noise_03.png");
var _tNoise03PngDefault = parcelHelpers.interopDefault(_tNoise03Png);
var _tweakPanel = require("./TweakPanel");
var _tweakPanelDefault = parcelHelpers.interopDefault(_tweakPanel);
var _config = require("./config");
var _configDefault = parcelHelpers.interopDefault(_config);
var AppStatus;
(function(AppStatus) {
    AppStatus[AppStatus["INIT"] = 0] = "INIT";
    AppStatus[AppStatus["READY"] = 1] = "READY";
})(AppStatus || (AppStatus = {}));
class App {
    constructor(){
        this.status = AppStatus.INIT;
    }
    async init() {
        this.renderer = new (0, _oglTypescript.Renderer)({
            dpr: 3
        });
        this.gl = this.renderer.gl;
        document.body.appendChild(this.gl.canvas);
        this.gl.clearColor(0, 0, 0, 0);
        this.initCamera();
        window.addEventListener("resize", this.onResize.bind(this), false);
        this.onResize();
        this.scene = new (0, _oglTypescript.Transform)();
        this.noiseTex = await this.createTexture((0, _tNoise03PngDefault.default));
        const sphere = this.createSphere();
        sphere.setParent(this.scene);
        this.tweakPanel = new (0, _tweakPanelDefault.default)();
        this.tweakPanel.init((0, _configDefault.default));
        this.updateConfigUniforms = this.updateConfigUniforms.bind(this);
        this.tweakPanel.onChange(this.updateConfigUniforms);
        this.status = AppStatus.READY;
    }
    updateConfigUniforms() {
        if (!this.sphereShader) return;
        this.sphereShader.uniforms.speed.value = (0, _configDefault.default)["speed"];
        this.sphereShader.uniforms.noiseForce.value = (0, _configDefault.default)["noiseForce"];
        this.sphereShader.uniforms.noiseScale.value = (0, _configDefault.default)["noiseScale"];
    }
    initCamera() {
        this.camera = new (0, _oglTypescript.Camera)(this.gl, {
            fov: 35
        });
        this.camera.position.set(0, 1, 7);
        this.camera.lookAt([
            0,
            0,
            0
        ]);
        // @ts-ignore
        this.orbitControls = new (0, _oglTypescript.Orbit)(this.camera, {
            element: this.gl.canvas,
            target: new (0, _oglTypescript.Vec3)(0, 0, 0)
        });
    }
    onResize() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.perspective({
            aspect: this.gl.canvas.width / this.gl.canvas.height
        });
    }
    createSphereShader() {
        return new (0, _oglTypescript.Program)(this.gl, {
            vertex: (0, _vertGlslDefault.default),
            fragment: (0, _fragGlslDefault.default),
            transparent: true,
            uniforms: {
                uTime: {
                    value: 0
                },
                // conifg params
                speed: {
                    value: (0, _configDefault.default)["speed"]
                },
                noiseForce: {
                    value: (0, _configDefault.default)["noiseForce"]
                },
                noiseScale: {
                    value: (0, _configDefault.default)["noiseScale"]
                },
                nTex: {
                    value: this.noiseTex
                }
            }
        });
    }
    update(t) {
        if (this.status === AppStatus.INIT || !this.sphereShader) return;
        this.tweakPanel.tickStart();
        this.orbitControls.update();
        this.renderer.render({
            scene: this.scene,
            camera: this.camera
        });
        this.sphereShader.uniforms.uTime.value = t * 0.001;
        this.tweakPanel.tickEnd();
    }
    createTexture(src) {
        const texture = new (0, _oglTypescript.Texture)(this.gl);
        const img = new Image();
        const res = new Promise((res)=>{
            img.onload = ()=>{
                texture.image = img;
                res(texture);
            };
        });
        img.src = src;
        return res;
    }
    createSphere() {
        if (!this.sphereShader) this.sphereShader = this.createSphereShader();
        const N = 50000;
        const inc = Math.PI * (3 - Math.sqrt(5));
        const off = 2 / N;
        const vertexList = [];
        for(let i = 0; i < N; i++){
            const y = i * off - 1 + off / 2;
            const r2 = 1 - y * y;
            const r = Math.sqrt(r2);
            const phi = i * inc;
            const z = Math.sin(phi) * r;
            if (z < 0) continue;
            vertexList.push(Math.cos(phi) * r, y, Math.sin(phi) * r);
        }
        const vertexArray = new Float32Array(vertexList.length);
        vertexList.forEach((val, index)=>vertexArray[index] = val);
        const geometry = new (0, _oglTypescript.Geometry)(this.gl, {
            position: {
                size: 3,
                data: vertexArray
            }
        });
        const geometryMesh = new (0, _oglTypescript.Mesh)(this.gl, {
            mode: this.gl.POINTS,
            geometry,
            program: this.sphereShader
        });
        return geometryMesh;
    }
}
exports.default = App;

},{"ogl-typescript":"vB7m9","../shaders/vert.glsl":"kq7er","../shaders/frag.glsl":"c3ZTU","../assets/T_Noise_03.png":"cU3kb","./TweakPanel":"fwxNc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./config":"2S9PZ"}],"vB7m9":[function(require,module,exports) {
// Core
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _geometry = require("./core/Geometry");
parcelHelpers.exportAll(_geometry, exports);
var _program = require("./core/Program");
parcelHelpers.exportAll(_program, exports);
var _renderer = require("./core/Renderer");
parcelHelpers.exportAll(_renderer, exports);
var _camera = require("./core/Camera");
parcelHelpers.exportAll(_camera, exports);
var _transform = require("./core/Transform");
parcelHelpers.exportAll(_transform, exports);
var _mesh = require("./core/Mesh");
parcelHelpers.exportAll(_mesh, exports);
var _texture = require("./core/Texture");
parcelHelpers.exportAll(_texture, exports);
var _renderTarget = require("./core/RenderTarget");
parcelHelpers.exportAll(_renderTarget, exports);
// Maths
var _color = require("./math/Color");
parcelHelpers.exportAll(_color, exports);
var _euler = require("./math/Euler");
parcelHelpers.exportAll(_euler, exports);
var _mat3 = require("./math/Mat3");
parcelHelpers.exportAll(_mat3, exports);
var _mat4 = require("./math/Mat4");
parcelHelpers.exportAll(_mat4, exports);
var _quat = require("./math/Quat");
parcelHelpers.exportAll(_quat, exports);
var _vec2 = require("./math/Vec2");
parcelHelpers.exportAll(_vec2, exports);
var _vec3 = require("./math/Vec3");
parcelHelpers.exportAll(_vec3, exports);
var _vec4 = require("./math/Vec4");
parcelHelpers.exportAll(_vec4, exports);
// Extras
var _plane = require("./extras/Plane");
parcelHelpers.exportAll(_plane, exports);
var _box = require("./extras/Box");
parcelHelpers.exportAll(_box, exports);
var _sphere = require("./extras/Sphere");
parcelHelpers.exportAll(_sphere, exports);
var _cylinder = require("./extras/Cylinder");
parcelHelpers.exportAll(_cylinder, exports);
var _triangle = require("./extras/Triangle");
parcelHelpers.exportAll(_triangle, exports);
var _torus = require("./extras/Torus");
parcelHelpers.exportAll(_torus, exports);
var _orbit = require("./extras/Orbit");
parcelHelpers.exportAll(_orbit, exports);
var _raycast = require("./extras/Raycast");
parcelHelpers.exportAll(_raycast, exports);
var _curve = require("./extras/Curve");
parcelHelpers.exportAll(_curve, exports);
var _post = require("./extras/Post");
parcelHelpers.exportAll(_post, exports);
var _skin = require("./extras/Skin");
parcelHelpers.exportAll(_skin, exports);
var _animation = require("./extras/Animation");
parcelHelpers.exportAll(_animation, exports);
var _text = require("./extras/Text");
parcelHelpers.exportAll(_text, exports);
var _normalProgram = require("./extras/NormalProgram");
parcelHelpers.exportAll(_normalProgram, exports);
var _flowmap = require("./extras/Flowmap");
parcelHelpers.exportAll(_flowmap, exports);
var _gpgpu = require("./extras/GPGPU");
parcelHelpers.exportAll(_gpgpu, exports);
var _polyline = require("./extras/Polyline");
parcelHelpers.exportAll(_polyline, exports);
var _shadow = require("./extras/Shadow");
parcelHelpers.exportAll(_shadow, exports);
var _ktxtexture = require("./extras/KTXTexture");
parcelHelpers.exportAll(_ktxtexture, exports);
var _textureLoader = require("./extras/TextureLoader");
parcelHelpers.exportAll(_textureLoader, exports);
var _gltfloader = require("./extras/GLTFLoader");
parcelHelpers.exportAll(_gltfloader, exports);
var _gltfanimation = require("./extras/GLTFAnimation");
parcelHelpers.exportAll(_gltfanimation, exports);
var _gltfskin = require("./extras/GLTFSkin");
parcelHelpers.exportAll(_gltfskin, exports);

},{"./core/Geometry":"dD7Rh","./core/Program":"lTypD","./core/Renderer":"cEIva","./core/Camera":"cFVhr","./core/Transform":"2123V","./core/Mesh":"99L4I","./core/Texture":"cKaIX","./core/RenderTarget":"7aAb6","./math/Color":"2kRYs","./math/Euler":"dWr4j","./math/Mat3":"iPFiP","./math/Mat4":"2hzaT","./math/Quat":"dWzbo","./math/Vec2":"bzxgo","./math/Vec3":"iLWkB","./math/Vec4":"dpyAL","./extras/Plane":"1ogNo","./extras/Box":"9Etsl","./extras/Sphere":"8nBzC","./extras/Cylinder":"7Al6K","./extras/Triangle":"dQOfI","./extras/Torus":"jmwZH","./extras/Orbit":"iRJBY","./extras/Raycast":"jahad","./extras/Curve":"550LY","./extras/Post":"dj5jx","./extras/Skin":"2TwMh","./extras/Animation":"abOzX","./extras/Text":"33LVH","./extras/NormalProgram":"cdarh","./extras/Flowmap":"e9nuv","./extras/GPGPU":"iG9iu","./extras/Polyline":"ad3Ys","./extras/Shadow":"6JM11","./extras/KTXTexture":"hBe6g","./extras/TextureLoader":"jWhTZ","./extras/GLTFLoader":"dUwqK","./extras/GLTFAnimation":"9ly4m","./extras/GLTFSkin":"5b2v5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dD7Rh":[function(require,module,exports) {
// attribute params
// {
//     data - typed array eg UInt16Array for indices, Float32Array
//     size - int default 1
//     instanced - default null. Pass divisor amount
//     type - gl enum default gl.UNSIGNED_SHORT for 'index', gl.FLOAT for others
//     normalized - boolean default false
//     buffer - gl buffer, if buffer exists, don't need to provide data
//     stride - default 0 - for when passing in buffer
//     offset - default 0 - for when passing in buffer
//     count - default null - for when passing in buffer
//     min - array - for when passing in buffer
//     max - array - for when passing in buffer
// }
// TODO: fit in transform feedback
// TODO: when would I disableVertexAttribArray ?
// TODO: use offset/stride if exists
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Geometry", ()=>Geometry);
var _vec3 = require("../math/Vec3");
const tempVec3 = new (0, _vec3.Vec3)();
let ID = 1;
let ATTR_ID = 1;
// To stop inifinite warnings
let isBoundsWarned = false;
class Geometry {
    constructor(gl, attributes = {}){
        this.raycast = "box";
        if (!gl.canvas) console.error("gl not passed as fist argument to Geometry");
        this.gl = gl;
        this.attributes = attributes;
        this.id = ID++;
        // Store one VAO per program attribute locations order
        this.VAOs = {};
        this.drawRange = {
            start: 0,
            count: 0
        };
        this.instancedCount = 0;
        // Unbind current VAO so that new buffers don't get added to active mesh
        this.gl.renderer.bindVertexArray(null);
        this.gl.renderer.currentGeometry = null;
        // Alias for state store to avoid redundant calls for global state
        this.glState = this.gl.renderer.state;
        // create the buffers
        for(let key in attributes)this.addAttribute(key, attributes[key]);
    }
    addAttribute(key, attr) {
        this.attributes[key] = attr;
        // Set options
        attr.id = ATTR_ID++; // TODO: currently unused, remove?
        attr.size = attr.size || 1;
        attr.type = attr.type || (attr.data.constructor === Float32Array ? this.gl.FLOAT : attr.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT); // Uint32Array
        attr.target = key === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER;
        attr.normalized = attr.normalized || false;
        attr.stride = attr.stride || 0;
        attr.offset = attr.offset || 0;
        attr.count = attr.count || (attr.stride ? attr.data.byteLength / attr.stride : attr.data.length / attr.size);
        attr.divisor = attr.instanced || 0;
        attr.needsUpdate = false;
        if (!attr.buffer) {
            attr.buffer = this.gl.createBuffer();
            // Push data to buffer
            this.updateAttribute(attr);
        }
        // Update geometry counts. If indexed, ignore regular attributes
        if (attr.divisor) {
            this.isInstanced = true;
            if (this.instancedCount && this.instancedCount !== attr.count * attr.divisor) {
                console.warn("geometry has multiple instanced buffers of different length");
                return this.instancedCount = Math.min(this.instancedCount, attr.count * attr.divisor);
            }
            this.instancedCount = attr.count * attr.divisor;
        } else if (key === "index") this.drawRange.count = attr.count;
        else if (!this.attributes.index) this.drawRange.count = Math.max(this.drawRange.count, attr.count);
    }
    updateAttribute(attr) {
        if (this.glState.boundBuffer !== attr.buffer) {
            this.gl.bindBuffer(attr.target, attr.buffer);
            this.glState.boundBuffer = attr.buffer;
        }
        this.gl.bufferData(attr.target, attr.data, this.gl.STATIC_DRAW);
        attr.needsUpdate = false;
    }
    setIndex(value) {
        this.addAttribute("index", value);
    }
    setDrawRange(start, count) {
        this.drawRange.start = start;
        this.drawRange.count = count;
    }
    setInstancedCount(value) {
        this.instancedCount = value;
    }
    createVAO(program) {
        this.VAOs[program.attributeOrder] = this.gl.renderer.createVertexArray();
        this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
        this.bindAttributes(program);
    }
    bindAttributes(program) {
        // Link all attributes to program using gl.vertexAttribPointer
        program.attributeLocations.forEach((location, { name , type  })=>{
            // If geometry missing a required shader attribute
            if (!this.attributes[name]) {
                console.warn(`active attribute ${name} not being supplied`);
                return;
            }
            const attr = this.attributes[name];
            this.gl.bindBuffer(attr.target, attr.buffer);
            this.glState.boundBuffer = attr.buffer;
            // For matrix attributes, buffer needs to be defined per column
            let numLoc = 1;
            if (type === 35674) numLoc = 2; // mat2
            if (type === 35675) numLoc = 3; // mat3
            if (type === 35676) numLoc = 4; // mat4
            const size = attr.size / numLoc;
            const stride = numLoc === 1 ? 0 : numLoc * numLoc * numLoc;
            const offset = numLoc === 1 ? 0 : numLoc * numLoc;
            for(let i = 0; i < numLoc; i++){
                this.gl.vertexAttribPointer(location + i, size, attr.type, attr.normalized, attr.stride + stride, attr.offset + i * offset);
                this.gl.enableVertexAttribArray(location + i);
                // For instanced attributes, divisor needs to be set.
                // For firefox, need to set back to 0 if non-instanced drawn after instanced. Else won't render
                this.gl.renderer.vertexAttribDivisor(location + i, attr.divisor);
            }
        });
        // Bind indices if geometry indexed
        if (this.attributes.index) this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
    }
    draw({ program , mode =this.gl.TRIANGLES  }) {
        if (this.gl.renderer.currentGeometry !== `${this.id}_${program.attributeOrder}`) {
            if (!this.VAOs[program.attributeOrder]) this.createVAO(program);
            this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
            this.gl.renderer.currentGeometry = `${this.id}_${program.attributeOrder}`;
        }
        // Check if any attributes need updating
        program.attributeLocations.forEach((location, { name  })=>{
            const attr = this.attributes[name];
            if (attr.needsUpdate) this.updateAttribute(attr);
        });
        if (this.isInstanced) {
            if (this.attributes.index) this.gl.renderer.drawElementsInstanced(mode, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2, this.instancedCount);
            else this.gl.renderer.drawArraysInstanced(mode, this.drawRange.start, this.drawRange.count, this.instancedCount);
        } else if (this.attributes.index) this.gl.drawElements(mode, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2);
        else this.gl.drawArrays(mode, this.drawRange.start, this.drawRange.count);
    }
    getPosition() {
        // Use position buffer, or min/max if available
        const attr = this.attributes.position;
        // if (attr.min) return [...attr.min, ...attr.max];
        if (attr.data) return attr;
        if (isBoundsWarned) return;
        console.warn("No position buffer data found to compute bounds");
        return isBoundsWarned = true;
    }
    computeBoundingBox(attr = null) {
        if (!attr) attr = this.getPosition();
        const array = attr.data;
        const offset = attr.offset || 0;
        const stride = attr.stride || attr.size;
        if (!this.bounds) this.bounds = {
            min: new (0, _vec3.Vec3)(),
            max: new (0, _vec3.Vec3)(),
            center: new (0, _vec3.Vec3)(),
            scale: new (0, _vec3.Vec3)(),
            radius: Infinity
        };
        const min = this.bounds.min;
        const max = this.bounds.max;
        const center = this.bounds.center;
        const scale = this.bounds.scale;
        min.set(Infinity);
        max.set(-Infinity);
        // TODO: check size of position (eg triangle with Vec2)
        for(let i = offset, l = array.length; i < l; i += stride){
            const x = array[i];
            const y = array[i + 1];
            const z = array[i + 2];
            min.x = Math.min(x, min.x);
            min.y = Math.min(y, min.y);
            min.z = Math.min(z, min.z);
            max.x = Math.max(x, max.x);
            max.y = Math.max(y, max.y);
            max.z = Math.max(z, max.z);
        }
        scale.sub(max, min);
        center.add(min, max).divide(2);
    }
    computeBoundingSphere(attr = null) {
        if (!attr) attr = this.getPosition();
        const array = attr.data;
        const offset = attr.offset || 0;
        const stride = attr.stride || attr.size;
        if (!this.bounds) this.computeBoundingBox(attr);
        let maxRadiusSq = 0;
        for(let i = offset, l = array.length; i < l; i += stride){
            tempVec3.fromArray(array, i);
            maxRadiusSq = Math.max(maxRadiusSq, this.bounds.center.squaredDistance(tempVec3));
        }
        this.bounds.radius = Math.sqrt(maxRadiusSq);
    }
    computeVertexNormals() {
        const positionAttribute = this.attributes["position"];
        if (!positionAttribute) return;
        let normalAttribute = this.attributes["normal"];
        if (!normalAttribute) {
            this.addAttribute("normal", {
                size: 3,
                data: new Float32Array(positionAttribute.count * 3)
            });
            normalAttribute = this.attributes["normal"];
        } else normalAttribute.data.fill(0);
        const pA = new (0, _vec3.Vec3)(), pB = new (0, _vec3.Vec3)(), pC = new (0, _vec3.Vec3)();
        const nA = new (0, _vec3.Vec3)(), nB = new (0, _vec3.Vec3)(), nC = new (0, _vec3.Vec3)();
        const cb = new (0, _vec3.Vec3)(), ab = new (0, _vec3.Vec3)();
        const indexAttribute = this.attributes["index"];
        if (indexAttribute) {
            let iA, iB, iC;
            for(let i = 0, il = indexAttribute.count; i < il; i += 3){
                iA = indexAttribute.data[i];
                iB = indexAttribute.data[i + 1];
                iC = indexAttribute.data[i + 2];
                // copy points
                pA.fromArray(positionAttribute.data, iA * positionAttribute.size);
                pB.fromArray(positionAttribute.data, iB * positionAttribute.size);
                pC.fromArray(positionAttribute.data, iC * positionAttribute.size);
                // cross product two edges to get the face normal
                cb.sub(pC, pB);
                ab.sub(pA, pB);
                cb.cross(ab);
                // read vertex normals
                nA.fromArray(normalAttribute.data, iA * normalAttribute.size);
                nB.fromArray(normalAttribute.data, iB * normalAttribute.size);
                nC.fromArray(normalAttribute.data, iC * normalAttribute.size);
                // add face normal
                nA.add(cb);
                nB.add(cb);
                nC.add(cb);
                // write back
                iA *= normalAttribute.size;
                normalAttribute.data[iA] = nA.x;
                normalAttribute.data[iA + 1] = nA.y;
                normalAttribute.data[iA + 2] = nA.z;
                iB *= normalAttribute.size;
                normalAttribute.data[iB] = nB.x;
                normalAttribute.data[iB + 1] = nB.y;
                normalAttribute.data[iB + 2] = nB.z;
                iC *= normalAttribute.size;
                normalAttribute.data[iC] = nC.x;
                normalAttribute.data[iC + 1] = nC.y;
                normalAttribute.data[iC + 2] = nC.z;
            }
        } else // non-indexed elements (unconnected triangle soup)
        for(let i = 0, il = positionAttribute.count; i < il; i += 3){
            pA.fromArray(positionAttribute.data, i * positionAttribute.size);
            pB.fromArray(positionAttribute.data, (i + 1) * positionAttribute.size);
            pC.fromArray(positionAttribute.data, (i + 2) * positionAttribute.size);
            cb.sub(pC, pB);
            ab.sub(pA, pB);
            cb.cross(ab);
            normalAttribute.data[i * normalAttribute.size] = cb.x;
            normalAttribute.data[i * normalAttribute.size + 1] = cb.y;
            normalAttribute.data[i * normalAttribute.size + 2] = cb.z;
            normalAttribute.data[(i + 1) * normalAttribute.size] = cb.x;
            normalAttribute.data[(i + 1) * normalAttribute.size + 1] = cb.y;
            normalAttribute.data[(i + 1) * normalAttribute.size + 2] = cb.z;
            normalAttribute.data[(i + 2) * normalAttribute.size] = cb.x;
            normalAttribute.data[(i + 2) * normalAttribute.size + 1] = cb.y;
            normalAttribute.data[(i + 2) * normalAttribute.size + 2] = cb.z;
        }
        this.normalizeNormals();
        normalAttribute.needsUpdate = true;
    }
    normalizeNormals() {
        const normals = this.attributes.normal;
        for(let i = 0, il = normals.count; i < il; i++){
            tempVec3.fromArray(normals.data, i * normals.size);
            tempVec3.normalize();
            normals.data[i * normals.size] = tempVec3.x;
            normals.data[i * normals.size + 1] = tempVec3.y;
            normals.data[i * normals.size + 2] = tempVec3.z;
        }
    }
    remove() {
        // if (this.vao) this.gl.renderer.deleteVertexArray(this.vao);
        for(let key in this.attributes){
            this.gl.deleteBuffer(this.attributes[key].buffer);
            delete this.attributes[key];
        }
    }
}

},{"../math/Vec3":"iLWkB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iLWkB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vec3", ()=>Vec3);
var _vec3Func = require("./functions/Vec3Func");
var _guards = require("../Guards");
class Vec3 extends Array {
    constructor(x = 0, y = x, z = x){
        super(x, y, z);
        return this;
    }
    get x() {
        return this[0];
    }
    get y() {
        return this[1];
    }
    get z() {
        return this[2];
    }
    set x(v) {
        this[0] = v;
    }
    set y(v) {
        this[1] = v;
    }
    set z(v) {
        this[2] = v;
    }
    set(x, y = x, z = x) {
        if ((0, _guards.isArrayLike)(x)) return this.copy(x);
        _vec3Func.set(this, x, y, z);
        return this;
    }
    copy(v) {
        _vec3Func.copy(this, v);
        return this;
    }
    add(va, vb) {
        if (vb) _vec3Func.add(this, va, vb);
        else _vec3Func.add(this, this, va);
        return this;
    }
    sub(va, vb) {
        if (vb) _vec3Func.subtract(this, va, vb);
        else _vec3Func.subtract(this, this, va);
        return this;
    }
    multiply(v) {
        if (v.length) _vec3Func.multiply(this, this, v);
        else _vec3Func.scale(this, this, v);
        return this;
    }
    divide(v) {
        if (v.length) _vec3Func.divide(this, this, v);
        else _vec3Func.scale(this, this, 1 / v);
        return this;
    }
    inverse(v = this) {
        _vec3Func.inverse(this, v);
        return this;
    }
    // Can't use 'length' as Array.prototype uses it
    len() {
        return _vec3Func.length(this);
    }
    distance(v) {
        if (v) return _vec3Func.distance(this, v);
        else return _vec3Func.length(this);
    }
    squaredLen() {
        return _vec3Func.squaredLength(this);
    }
    squaredDistance(v) {
        if (v) return _vec3Func.squaredDistance(this, v);
        else return _vec3Func.squaredLength(this);
    }
    negate(v = this) {
        _vec3Func.negate(this, v);
        return this;
    }
    cross(va, vb) {
        if (vb) _vec3Func.cross(this, va, vb);
        else _vec3Func.cross(this, this, va);
        return this;
    }
    scale(v) {
        _vec3Func.scale(this, this, v);
        return this;
    }
    normalize() {
        _vec3Func.normalize(this, this);
        return this;
    }
    dot(v) {
        return _vec3Func.dot(this, v);
    }
    equals(v) {
        return _vec3Func.exactEquals(this, v);
    }
    applyMatrix4(mat4) {
        _vec3Func.transformMat4(this, this, mat4);
        return this;
    }
    scaleRotateMatrix4(mat4) {
        _vec3Func.scaleRotateMat4(this, this, mat4);
        return this;
    }
    applyQuaternion(q) {
        _vec3Func.transformQuat(this, this, q);
        return this;
    }
    angle(v) {
        return _vec3Func.angle(this, v);
    }
    lerp(v, t) {
        _vec3Func.lerp(this, this, v, t);
        return this;
    }
    clone() {
        return new Vec3(this[0], this[1], this[2]);
    }
    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        return this;
    }
    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        return a;
    }
    transformDirection(mat4) {
        const x = this[0];
        const y = this[1];
        const z = this[2];
        this[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z;
        this[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z;
        this[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z;
        return this.normalize();
    }
}

},{"./functions/Vec3Func":"7DG6Q","../Guards":"aXm3u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7DG6Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */ parcelHelpers.export(exports, "length", ()=>length);
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "divide", ()=>divide);
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */ parcelHelpers.export(exports, "distance", ()=>distance);
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */ parcelHelpers.export(exports, "squaredDistance", ()=>squaredDistance);
/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */ parcelHelpers.export(exports, "squaredLength", ()=>squaredLength);
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "negate", ()=>negate);
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "inverse", ()=>inverse);
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "normalize", ()=>normalize);
/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */ parcelHelpers.export(exports, "dot", ()=>dot);
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "cross", ()=>cross);
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "lerp", ()=>lerp);
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "transformMat4", ()=>transformMat4);
/**
 * Same as above but doesn't apply translation.
 * Useful for rays.
 */ parcelHelpers.export(exports, "scaleRotateMat4", ()=>scaleRotateMat4);
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "transformMat3", ()=>transformMat3);
/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "transformQuat", ()=>transformQuat);
parcelHelpers.export(exports, "angle", ()=>angle);
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
const EPSILON = 0.000001;
function length(a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    return Math.sqrt(x * x + y * y + z * z);
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
function set(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
}
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
}
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
}
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
}
function distance(a, b) {
    let x = b[0] - a[0];
    let y = b[1] - a[1];
    let z = b[2] - a[2];
    return Math.sqrt(x * x + y * y + z * z);
}
function squaredDistance(a, b) {
    let x = b[0] - a[0];
    let y = b[1] - a[1];
    let z = b[2] - a[2];
    return x * x + y * y + z * z;
}
function squaredLength(a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    return x * x + y * y + z * z;
}
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
}
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    return out;
}
function normalize(out, a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let len = x * x + y * y + z * z;
    if (len > 0) //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
    return out;
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(out, a, b) {
    let ax = a[0], ay = a[1], az = a[2];
    let bx = b[0], by = b[1], bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
}
function lerp(out, a, b, t) {
    let ax = a[0];
    let ay = a[1];
    let az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
}
function transformMat4(out, a, m) {
    let x = a[0], y = a[1], z = a[2];
    let w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
}
function scaleRotateMat4(out, a, m) {
    let x = a[0], y = a[1], z = a[2];
    let w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z) / w;
    return out;
}
function transformMat3(out, a, m) {
    let x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
}
function transformQuat(out, a, q) {
    // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
    let x = a[0], y = a[1], z = a[2];
    let qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    let uvx = qy * z - qz * y;
    let uvy = qz * x - qx * z;
    let uvz = qx * y - qy * x;
    let uuvx = qy * uvz - qz * uvy;
    let uuvy = qz * uvx - qx * uvz;
    let uuvz = qx * uvy - qy * uvx;
    let w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2;
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;
    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
}
const angle = function() {
    const tempA = [
        0,
        0,
        0
    ];
    const tempB = [
        0,
        0,
        0
    ];
    return function(a, b) {
        copy(tempA, a);
        copy(tempB, b);
        normalize(tempA, tempA);
        normalize(tempB, tempB);
        let cosine = dot(tempA, tempB);
        if (cosine > 1.0) return 0;
        else if (cosine < -1) return Math.PI;
        else return Math.acos(cosine);
    };
}();
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aXm3u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArrayLike", ()=>isArrayLike);
parcelHelpers.export(exports, "isMesh", ()=>isMesh);
parcelHelpers.export(exports, "isWebGl2", ()=>isWebGl2);
const isArrayLike = (term)=>{
    if (term.length) return true;
    return false;
};
const isMesh = (node)=>{
    return !!node.draw;
};
const isWebGl2 = (gl)=>{
    return gl.renderer.isWebgl2;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lTypD":[function(require,module,exports) {
// TODO: upload empty texture if null ? maybe not
// TODO: upload identity matrix if null ?
// TODO: sampler Cube
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Program", ()=>Program);
let ID = 1;
// cache of typed arrays used to flatten uniform arrays
const arrayCacheF32 = {};
class Program {
    constructor(gl, { vertex , fragment , uniforms ={} , transparent =false , cullFace =gl.BACK , frontFace =gl.CCW , depthTest =true , depthWrite =true , depthFunc =gl.LESS  } = {}){
        if (!gl.canvas) console.error("gl not passed as fist argument to Program");
        this.gl = gl;
        this.uniforms = uniforms;
        this.id = ID++;
        if (!vertex) console.warn("vertex shader not supplied");
        if (!fragment) console.warn("fragment shader not supplied");
        // Store program state
        this.transparent = transparent;
        this.cullFace = cullFace;
        this.frontFace = frontFace;
        this.depthTest = depthTest;
        this.depthWrite = depthWrite;
        this.depthFunc = depthFunc;
        this.blendFunc = {};
        this.blendEquation = {};
        // set default blendFunc if transparent flagged
        if (this.transparent && !this.blendFunc.src) {
            if (this.gl.renderer.premultipliedAlpha) this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
            else this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        }
        // compile vertex shader and log errors
        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertex);
        gl.compileShader(vertexShader);
        if (gl.getShaderInfoLog(vertexShader) !== "") console.warn(`${gl.getShaderInfoLog(vertexShader)}\nVertex Shader\n${addLineNumbers(vertex)}`);
        // compile fragment shader and log errors
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragment);
        gl.compileShader(fragmentShader);
        if (gl.getShaderInfoLog(fragmentShader) !== "") console.warn(`${gl.getShaderInfoLog(fragmentShader)}\nFragment Shader\n${addLineNumbers(fragment)}`);
        // compile program and log errors
        this.program = gl.createProgram();
        gl.attachShader(this.program, vertexShader);
        gl.attachShader(this.program, fragmentShader);
        gl.linkProgram(this.program);
        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
            console.warn(gl.getProgramInfoLog(this.program));
            return;
        }
        // Remove shader once linked
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        // Get active uniform locations
        this.uniformLocations = new Map();
        let numUniforms = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
        for(let uIndex = 0; uIndex < numUniforms; uIndex++){
            let uniform = gl.getActiveUniform(this.program, uIndex);
            this.uniformLocations.set(uniform, gl.getUniformLocation(this.program, uniform.name));
            // split uniforms' names to separate array and struct declarations
            const split = uniform.name.match(/(\w+)/g);
            uniform.uniformName = split[0];
            if (split.length === 3) {
                uniform.isStructArray = true;
                uniform.structIndex = Number(split[1]);
                uniform.structProperty = split[2];
            } else if (split.length === 2 && isNaN(Number(split[1]))) {
                uniform.isStruct = true;
                uniform.structProperty = split[1];
            }
        }
        // Get active attribute locations
        this.attributeLocations = new Map();
        const locations = [];
        const numAttribs = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);
        for(let aIndex = 0; aIndex < numAttribs; aIndex++){
            const attribute = gl.getActiveAttrib(this.program, aIndex);
            const location = gl.getAttribLocation(this.program, attribute.name);
            locations[location] = attribute.name;
            this.attributeLocations.set(attribute, location);
        }
        this.attributeOrder = locations.join("");
    }
    setBlendFunc(src, dst, srcAlpha, dstAlpha) {
        this.blendFunc.src = src;
        this.blendFunc.dst = dst;
        this.blendFunc.srcAlpha = srcAlpha;
        this.blendFunc.dstAlpha = dstAlpha;
        if (src) this.transparent = true;
    }
    setBlendEquation(modeRGB, modeAlpha) {
        this.blendEquation.modeRGB = modeRGB;
        this.blendEquation.modeAlpha = modeAlpha;
    }
    applyState() {
        if (this.depthTest) this.gl.renderer.enable(this.gl.DEPTH_TEST);
        else this.gl.renderer.disable(this.gl.DEPTH_TEST);
        if (this.cullFace) this.gl.renderer.enable(this.gl.CULL_FACE);
        else this.gl.renderer.disable(this.gl.CULL_FACE);
        if (this.blendFunc.src) this.gl.renderer.enable(this.gl.BLEND);
        else this.gl.renderer.disable(this.gl.BLEND);
        if (this.cullFace) this.gl.renderer.setCullFace(this.cullFace);
        this.gl.renderer.setFrontFace(this.frontFace);
        this.gl.renderer.setDepthMask(this.depthWrite);
        this.gl.renderer.setDepthFunc(this.depthFunc);
        if (this.blendFunc.src) this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha);
        this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
    }
    use({ flipFaces =false  } = {}) {
        let textureUnit = -1;
        const programActive = this.gl.renderer.currentProgram === this.id;
        // Avoid gl call if program already in use
        if (!programActive) {
            this.gl.useProgram(this.program);
            this.gl.renderer.currentProgram = this.id;
        }
        // Set only the active uniforms found in the shader
        this.uniformLocations.forEach((location, activeUniform)=>{
            let name = activeUniform.uniformName;
            // get supplied uniform
            let uniform = this.uniforms[name];
            // For structs, get the specific property instead of the entire object
            if (activeUniform.isStruct) {
                uniform = uniform[activeUniform.structProperty];
                name += `.${activeUniform.structProperty}`;
            }
            if (activeUniform.isStructArray) {
                uniform = uniform[activeUniform.structIndex][activeUniform.structProperty];
                name += `[${activeUniform.structIndex}].${activeUniform.structProperty}`;
            }
            if (!uniform) return warn(`Active uniform ${name} has not been supplied`);
            if (uniform && uniform.value === undefined) return warn(`${name} uniform is missing a value parameter`);
            if (uniform.value.texture) {
                textureUnit = textureUnit + 1;
                // Check if texture needs to be updated
                uniform.value.update(textureUnit);
                return setUniform(this.gl, activeUniform.type, location, textureUnit);
            }
            // For texture arrays, set uniform as an array of texture units instead of just one
            if (uniform.value.length && uniform.value[0].texture) {
                const textureUnits = [];
                uniform.value.forEach((value)=>{
                    textureUnit = textureUnit + 1;
                    value.update(textureUnit);
                    textureUnits.push(textureUnit);
                });
                return setUniform(this.gl, activeUniform.type, location, textureUnits);
            }
            setUniform(this.gl, activeUniform.type, location, uniform.value);
        });
        this.applyState();
        if (flipFaces) this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
    }
    remove() {
        this.gl.deleteProgram(this.program);
    }
}
function setUniform(gl, type, location, value) {
    value = value.length ? flatten(value) : value;
    const setValue = gl.renderer.state.uniformLocations.get(location);
    // Avoid redundant uniform commands
    if (value.length) {
        if (setValue === undefined || setValue.length !== value.length) // clone array to store as cache
        gl.renderer.state.uniformLocations.set(location, value.slice(0));
        else {
            if (arraysEqual(setValue, value)) return;
            // Update cached array values
            setValue.set ? setValue.set(value) : setArray(setValue, value);
            gl.renderer.state.uniformLocations.set(location, setValue);
        }
    } else {
        if (setValue === value) return;
        gl.renderer.state.uniformLocations.set(location, value);
    }
    switch(type){
        case 5126:
            return value.length ? gl.uniform1fv(location, value) : gl.uniform1f(location, value); // FLOAT
        case 35664:
            return gl.uniform2fv(location, value); // FLOAT_VEC2
        case 35665:
            return gl.uniform3fv(location, value); // FLOAT_VEC3
        case 35666:
            return gl.uniform4fv(location, value); // FLOAT_VEC4
        case 35670:
        case 5124:
        case 35678:
        case 35680:
            return value.length ? gl.uniform1iv(location, value) : gl.uniform1i(location, value); // SAMPLER_CUBE
        case 35671:
        case 35667:
            return gl.uniform2iv(location, value); // INT_VEC2
        case 35672:
        case 35668:
            return gl.uniform3iv(location, value); // INT_VEC3
        case 35673:
        case 35669:
            return gl.uniform4iv(location, value); // INT_VEC4
        case 35674:
            return gl.uniformMatrix2fv(location, false, value); // FLOAT_MAT2
        case 35675:
            return gl.uniformMatrix3fv(location, false, value); // FLOAT_MAT3
        case 35676:
            return gl.uniformMatrix4fv(location, false, value); // FLOAT_MAT4
    }
}
function addLineNumbers(string) {
    let lines = string.split("\n");
    for(let i = 0; i < lines.length; i++)lines[i] = i + 1 + ": " + lines[i];
    return lines.join("\n");
}
function flatten(a) {
    const arrayLen = a.length;
    const valueLen = a[0].length;
    if (valueLen === undefined) return a;
    const length = arrayLen * valueLen;
    let value = arrayCacheF32[length];
    if (!value) arrayCacheF32[length] = value = new Float32Array(length);
    for(let i = 0; i < arrayLen; i++)value.set(a[i], i * valueLen);
    return value;
}
function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for(let i = 0, l = a.length; i < l; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
function setArray(a, b) {
    for(let i = 0, l = a.length; i < l; i++)a[i] = b[i];
}
let warnCount = 0;
function warn(message) {
    if (warnCount > 100) return;
    console.warn(message);
    warnCount++;
    if (warnCount > 100) console.warn("More than 100 program warnings - stopping logs.");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cEIva":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Renderer", ()=>Renderer);
var _vec3 = require("../math/Vec3");
var _guards = require("../Guards");
// TODO: Handle context loss https://www.khronos.org/webgl/wiki/HandlingContextLost
// Not automatic - devs to use these methods manually
// gl.colorMask( colorMask, colorMask, colorMask, colorMask );
// gl.clearColor( r, g, b, a );
// gl.stencilMask( stencilMask );
// gl.stencilFunc( stencilFunc, stencilRef, stencilMask );
// gl.stencilOp( stencilFail, stencilZFail, stencilZPass );
// gl.clearStencil( stencil );
const tempVec3 = new (0, _vec3.Vec3)();
let ID = 1;
class Renderer {
    constructor({ canvas =document.createElement("canvas") , width =300 , height =150 , dpr =1 , alpha =false , depth =true , stencil =false , antialias =false , premultipliedAlpha =false , preserveDrawingBuffer =false , powerPreference ="default" , autoClear =true , webgl =2  } = {}){
        const attributes = {
            alpha,
            depth,
            stencil,
            antialias,
            premultipliedAlpha,
            preserveDrawingBuffer,
            powerPreference
        };
        this.dpr = dpr;
        this.alpha = alpha;
        this.color = true;
        this.depth = depth;
        this.stencil = stencil;
        this.premultipliedAlpha = premultipliedAlpha;
        this.autoClear = autoClear;
        this._id = ID++;
        // Attempt WebGL2 unless forced to 1, if not supported fallback to WebGL1
        if (webgl === 2) this.gl = canvas.getContext("webgl2", attributes);
        this.isWebgl2 = !!this.gl;
        if (!this.gl) this.gl = canvas.getContext("webgl", attributes) || canvas.getContext("experimental-webgl", attributes);
        if (!this.gl) console.error("unable to create webgl context");
        // Attach renderer to gl so that all classes have access to internal state functions
        this.gl.renderer = this;
        // initialise size values
        this.setSize(width, height);
        // gl state stores to avoid redundant calls on methods used internally
        this.state = {};
        this.state.blendFunc = {
            src: this.gl.ONE,
            dst: this.gl.ZERO
        };
        this.state.blendEquation = {
            modeRGB: this.gl.FUNC_ADD
        };
        this.state.cullFace = null;
        this.state.frontFace = this.gl.CCW;
        this.state.depthMask = true;
        this.state.depthFunc = this.gl.LESS;
        this.state.premultiplyAlpha = false;
        this.state.flipY = false;
        this.state.unpackAlignment = 4;
        this.state.framebuffer = null;
        this.state.viewport = {
            width: null,
            height: null
        };
        this.state.textureUnits = [];
        this.state.activeTextureUnit = 0;
        this.state.boundBuffer = null;
        this.state.uniformLocations = new Map();
        // store requested extensions
        this.extensions = {};
        // Initialise extra format types
        if (this.isWebgl2) {
            this.getExtension("EXT_color_buffer_float");
            this.getExtension("OES_texture_float_linear");
        } else {
            this.getExtension("OES_texture_float");
            this.getExtension("OES_texture_float_linear");
            this.getExtension("OES_texture_half_float");
            this.getExtension("OES_texture_half_float_linear");
            this.getExtension("OES_element_index_uint");
            this.getExtension("OES_standard_derivatives");
            this.getExtension("EXT_sRGB");
            this.getExtension("WEBGL_depth_texture");
            this.getExtension("WEBGL_draw_buffers");
        }
        // Create method aliases using extension (WebGL1) or native if available (WebGL2)
        this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE");
        this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE");
        this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE");
        this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES");
        this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES");
        this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES");
        this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL");
        // Store device parameters
        this.parameters = {};
        this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
    }
    get id() {
        return this._id;
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
        this.gl.canvas.width = width * this.dpr;
        this.gl.canvas.height = height * this.dpr;
        Object.assign(this.gl.canvas.style, {
            width: width + "px",
            height: height + "px"
        });
    }
    setViewport(width, height) {
        if (this.state.viewport.width === width && this.state.viewport.height === height) return;
        this.state.viewport.width = width;
        this.state.viewport.height = height;
        this.gl.viewport(0, 0, width, height);
    }
    enable(id) {
        if (this.state[id] === true) return;
        this.gl.enable(id);
        this.state[id] = true;
    }
    disable(id) {
        if (this.state[id] === false) return;
        this.gl.disable(id);
        this.state[id] = false;
    }
    setBlendFunc(src, dst, srcAlpha, dstAlpha) {
        if (this.state.blendFunc.src === src && this.state.blendFunc.dst === dst && this.state.blendFunc.srcAlpha === srcAlpha && this.state.blendFunc.dstAlpha === dstAlpha) return;
        this.state.blendFunc.src = src;
        this.state.blendFunc.dst = dst;
        this.state.blendFunc.srcAlpha = srcAlpha;
        this.state.blendFunc.dstAlpha = dstAlpha;
        if (srcAlpha !== undefined) this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);
        else this.gl.blendFunc(src, dst);
    }
    setBlendEquation(modeRGB, modeAlpha) {
        modeRGB = modeRGB || this.gl.FUNC_ADD;
        if (this.state.blendEquation.modeRGB === modeRGB && this.state.blendEquation.modeAlpha === modeAlpha) return;
        this.state.blendEquation.modeRGB = modeRGB;
        this.state.blendEquation.modeAlpha = modeAlpha;
        if (modeAlpha !== undefined) this.gl.blendEquationSeparate(modeRGB, modeAlpha);
        else this.gl.blendEquation(modeRGB);
    }
    setCullFace(value) {
        if (this.state.cullFace === value) return;
        this.state.cullFace = value;
        this.gl.cullFace(value);
    }
    setFrontFace(value) {
        if (this.state.frontFace === value) return;
        this.state.frontFace = value;
        this.gl.frontFace(value);
    }
    setDepthMask(value) {
        if (this.state.depthMask === value) return;
        this.state.depthMask = value;
        this.gl.depthMask(value);
    }
    setDepthFunc(value) {
        if (this.state.depthFunc === value) return;
        this.state.depthFunc = value;
        this.gl.depthFunc(value);
    }
    activeTexture(value) {
        if (this.state.activeTextureUnit === value) return;
        this.state.activeTextureUnit = value;
        this.gl.activeTexture(this.gl.TEXTURE0 + value);
    }
    bindFramebuffer({ target =this.gl.FRAMEBUFFER , buffer =null  } = {}) {
        if (this.state.framebuffer === buffer) return;
        this.state.framebuffer = buffer;
        this.gl.bindFramebuffer(target, buffer);
    }
    getExtension(extension, webgl2Func, extFunc) {
        // if webgl2 function supported, return func bound to gl context
        if (webgl2Func && this.gl[webgl2Func]) return this.gl[webgl2Func].bind(this.gl);
        // fetch extension once only
        if (!this.extensions[extension]) this.extensions[extension] = this.gl.getExtension(extension);
        // return extension if no function requested
        if (!webgl2Func) return this.extensions[extension];
        // Return null if extension not supported
        if (!this.extensions[extension]) return null;
        // return extension function, bound to extension
        return this.extensions[extension][extFunc].bind(this.extensions[extension]);
    }
    sortOpaque(a, b) {
        if (a.renderOrder !== b.renderOrder) return a.renderOrder - b.renderOrder;
        else if (a.program.id !== b.program.id) return a.program.id - b.program.id;
        else if (a.zDepth !== b.zDepth) return a.zDepth - b.zDepth;
        else return b.id - a.id;
    }
    sortTransparent(a, b) {
        if (a.renderOrder !== b.renderOrder) return a.renderOrder - b.renderOrder;
        if (a.zDepth !== b.zDepth) return b.zDepth - a.zDepth;
        else return b.id - a.id;
    }
    sortUI(a, b) {
        if (a.renderOrder !== b.renderOrder) return a.renderOrder - b.renderOrder;
        else if (a.program.id !== b.program.id) return a.program.id - b.program.id;
        else return b.id - a.id;
    }
    getRenderList({ scene , camera , frustumCull , sort  }) {
        let renderList = [];
        if (camera && frustumCull) camera.updateFrustum();
        // Get visible
        scene.traverse((node)=>{
            if (!node.visible) return true;
            if (!(0, _guards.isMesh)(node)) return;
            // if (!node.draw) return;
            if (frustumCull && node.frustumCulled && camera) {
                if (!camera.frustumIntersectsMesh(node)) return;
            }
            renderList.push(node);
        });
        if (sort) {
            const opaque = [];
            const transparent = []; // depthTest true
            const ui = []; // depthTest false
            renderList.forEach((node)=>{
                // Split into the 3 render groups
                if (!node.program.transparent) opaque.push(node);
                else if (node.program.depthTest) transparent.push(node);
                else ui.push(node);
                node.zDepth = 0;
                // Only calculate z-depth if renderOrder unset and depthTest is true
                if (node.renderOrder !== 0 || !node.program.depthTest || !camera) return;
                // update z-depth
                node.worldMatrix.getTranslation(tempVec3);
                tempVec3.applyMatrix4(camera.projectionViewMatrix);
                node.zDepth = tempVec3.z;
            });
            opaque.sort(this.sortOpaque);
            transparent.sort(this.sortTransparent);
            ui.sort(this.sortUI);
            renderList = opaque.concat(transparent, ui);
        }
        return renderList;
    }
    render({ scene , camera , target =null , update =true , sort =true , frustumCull =true , clear  }) {
        if (target === null) {
            // make sure no render target bound so draws to canvas
            this.bindFramebuffer();
            this.setViewport(this.width * this.dpr, this.height * this.dpr);
        } else {
            // bind supplied render target and update viewport
            this.bindFramebuffer(target);
            this.setViewport(target.width, target.height);
        }
        if (clear || this.autoClear && clear !== false) {
            // Ensure depth buffer writing is enabled so it can be cleared
            if (this.depth && (!target || target.depth)) {
                this.enable(this.gl.DEPTH_TEST);
                this.setDepthMask(true);
            }
            this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0));
        }
        // updates all scene graph matrices
        if (update) scene.updateMatrixWorld();
        // Update camera separately, in case not in scene graph
        if (camera) camera.updateMatrixWorld();
        // Get render list - entails culling and sorting
        const renderList = this.getRenderList({
            scene,
            camera,
            frustumCull,
            sort
        });
        renderList.forEach((node)=>{
            node.draw({
                camera
            });
        });
    }
}

},{"../math/Vec3":"iLWkB","../Guards":"aXm3u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cFVhr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Camera", ()=>Camera);
var _mat4 = require("../math/Mat4");
var _vec3 = require("../math/Vec3");
var _transform = require("./Transform");
const tempMat4 = new (0, _mat4.Mat4)();
const tempVec3a = new (0, _vec3.Vec3)();
const tempVec3b = new (0, _vec3.Vec3)();
class Camera extends (0, _transform.Transform) {
    constructor(gl, { near =0.1 , far =100 , fov =45 , aspect =1 , left , right , bottom , top , zoom =1  } = {}){
        super();
        Object.assign(this, {
            near,
            far,
            fov,
            aspect,
            left,
            right,
            bottom,
            top,
            zoom
        });
        this.projectionMatrix = new (0, _mat4.Mat4)();
        this.viewMatrix = new (0, _mat4.Mat4)();
        this.projectionViewMatrix = new (0, _mat4.Mat4)();
        this.worldPosition = new (0, _vec3.Vec3)();
        // Use orthographic if left/right set, else default to perspective camera
        this.type = left || right ? "orthographic" : "perspective";
        if (this.type === "orthographic") this.orthographic();
        else this.perspective();
    }
    perspective({ near =this.near , far =this.far , fov =this.fov , aspect =this.aspect  } = {}) {
        Object.assign(this, {
            near,
            far,
            fov,
            aspect
        });
        this.projectionMatrix.fromPerspective({
            fov: fov * (Math.PI / 180),
            aspect,
            near,
            far
        });
        this.type = "perspective";
        return this;
    }
    orthographic({ near =this.near , far =this.far , left =this.left , right =this.right , bottom =this.bottom , top =this.top , zoom =this.zoom  } = {}) {
        Object.assign(this, {
            near,
            far,
            left,
            right,
            bottom,
            top,
            zoom
        });
        left /= zoom;
        right /= zoom;
        bottom /= zoom;
        top /= zoom;
        this.projectionMatrix.fromOrthogonal({
            left,
            right,
            bottom,
            top,
            near,
            far
        });
        this.type = "orthographic";
        return this;
    }
    updateMatrixWorld() {
        super.updateMatrixWorld();
        this.viewMatrix.inverse(this.worldMatrix);
        this.worldMatrix.getTranslation(this.worldPosition);
        // used for sorting
        this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix);
        return this;
    }
    lookAt(target) {
        super.lookAt(target, true);
        return this;
    }
    // Project 3D coordinate to 2D point
    project(v) {
        v.applyMatrix4(this.viewMatrix);
        v.applyMatrix4(this.projectionMatrix);
        return this;
    }
    // Unproject 2D point to 3D coordinate
    unproject(v) {
        v.applyMatrix4(tempMat4.inverse(this.projectionMatrix));
        v.applyMatrix4(this.worldMatrix);
        return this;
    }
    updateFrustum() {
        if (!this.frustum) this.frustum = [
            new (0, _vec3.Vec3)(),
            new (0, _vec3.Vec3)(),
            new (0, _vec3.Vec3)(),
            new (0, _vec3.Vec3)(),
            new (0, _vec3.Vec3)(),
            new (0, _vec3.Vec3)()
        ];
        const m = this.projectionViewMatrix;
        this.frustum[0].set(m[3] - m[0], m[7] - m[4], m[11] - m[8]).constant = m[15] - m[12]; // -x
        this.frustum[1].set(m[3] + m[0], m[7] + m[4], m[11] + m[8]).constant = m[15] + m[12]; // +x
        this.frustum[2].set(m[3] + m[1], m[7] + m[5], m[11] + m[9]).constant = m[15] + m[13]; // +y
        this.frustum[3].set(m[3] - m[1], m[7] - m[5], m[11] - m[9]).constant = m[15] - m[13]; // -y
        this.frustum[4].set(m[3] - m[2], m[7] - m[6], m[11] - m[10]).constant = m[15] - m[14]; // +z (far)
        this.frustum[5].set(m[3] + m[2], m[7] + m[6], m[11] + m[10]).constant = m[15] + m[14]; // -z (near)
        for(let i = 0; i < 6; i++){
            const invLen = 1.0 / this.frustum[i].distance();
            this.frustum[i].multiply(invLen);
            this.frustum[i].constant *= invLen;
        }
    }
    frustumIntersectsMesh(node) {
        // If no position attribute, treat as frustumCulled false
        if (!node.geometry.attributes.position) return true;
        if (!node.geometry.bounds || node.geometry.bounds.radius === Infinity) node.geometry.computeBoundingSphere();
        if (!node.geometry.bounds) return true;
        const center = tempVec3a;
        center.copy(node.geometry.bounds.center);
        center.applyMatrix4(node.worldMatrix);
        const radius = node.geometry.bounds.radius * node.worldMatrix.getMaxScaleOnAxis();
        return this.frustumIntersectsSphere(center, radius);
    }
    frustumIntersectsSphere(center, radius) {
        const normal = tempVec3b;
        for(let i = 0; i < 6; i++){
            const plane = this.frustum[i];
            const distance = normal.copy(plane).dot(center) + plane.constant;
            if (distance < -radius) return false;
        }
        return true;
    }
}

},{"../math/Mat4":"2hzaT","../math/Vec3":"iLWkB","./Transform":"2123V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2hzaT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Mat4", ()=>Mat4);
var _mat4Func = require("./functions/Mat4Func");
class Mat4 extends Array {
    constructor(m00 = 1, m01 = 0, m02 = 0, m03 = 0, m10 = 0, m11 = 1, m12 = 0, m13 = 0, m20 = 0, m21 = 0, m22 = 1, m23 = 0, m30 = 0, m31 = 0, m32 = 0, m33 = 1){
        super(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
        return this;
    }
    get x() {
        return this[12];
    }
    get y() {
        return this[13];
    }
    get z() {
        return this[14];
    }
    get w() {
        return this[15];
    }
    set x(v) {
        this[12] = v;
    }
    set y(v) {
        this[13] = v;
    }
    set z(v) {
        this[14] = v;
    }
    set w(v) {
        this[15] = v;
    }
    set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        if (m00.length) return this.copy(m00);
        _mat4Func.set(this, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
        return this;
    }
    translate(v, m = this) {
        _mat4Func.translate(this, m, v);
        return this;
    }
    rotate(v, axis, m = this) {
        _mat4Func.rotate(this, m, v, axis);
        return this;
    }
    scale(v, m = this) {
        _mat4Func.scale(this, m, typeof v === "number" ? [
            v,
            v,
            v
        ] : v);
        return this;
    }
    multiply(ma, mb) {
        if (mb) _mat4Func.multiply(this, ma, mb);
        else _mat4Func.multiply(this, this, ma);
        return this;
    }
    identity() {
        _mat4Func.identity(this);
        return this;
    }
    copy(m) {
        _mat4Func.copy(this, m);
        return this;
    }
    fromPerspective({ fov , aspect , near , far  } = {}) {
        _mat4Func.perspective(this, fov, aspect, near, far);
        return this;
    }
    fromOrthogonal({ left , right , bottom , top , near , far  }) {
        _mat4Func.ortho(this, left, right, bottom, top, near, far);
        return this;
    }
    fromQuaternion(q) {
        _mat4Func.fromQuat(this, q);
        return this;
    }
    setPosition(v) {
        this.x = v[0];
        this.y = v[1];
        this.z = v[2];
        return this;
    }
    inverse(m = this) {
        _mat4Func.invert(this, m);
        return this;
    }
    compose(q, pos, scale) {
        _mat4Func.fromRotationTranslationScale(this, q, pos, scale);
        return this;
    }
    getRotation(q) {
        _mat4Func.getRotation(q, this);
        return this;
    }
    getTranslation(pos) {
        _mat4Func.getTranslation(pos, this);
        return this;
    }
    getScaling(scale) {
        _mat4Func.getScaling(scale, this);
        return this;
    }
    getMaxScaleOnAxis() {
        return _mat4Func.getMaxScaleOnAxis(this);
    }
    lookAt(eye, target, up) {
        _mat4Func.targetTo(this, eye, target, up);
        return this;
    }
    determinant() {
        return _mat4Func.determinant(this);
    }
    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        this[3] = a[o + 3];
        this[4] = a[o + 4];
        this[5] = a[o + 5];
        this[6] = a[o + 6];
        this[7] = a[o + 7];
        this[8] = a[o + 8];
        this[9] = a[o + 9];
        this[10] = a[o + 10];
        this[11] = a[o + 11];
        this[12] = a[o + 12];
        this[13] = a[o + 13];
        this[14] = a[o + 14];
        this[15] = a[o + 15];
        return this;
    }
    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        a[o + 3] = this[3];
        a[o + 4] = this[4];
        a[o + 5] = this[5];
        a[o + 6] = this[6];
        a[o + 7] = this[7];
        a[o + 8] = this[8];
        a[o + 9] = this[9];
        a[o + 10] = this[10];
        a[o + 11] = this[11];
        a[o + 12] = this[12];
        a[o + 13] = this[13];
        a[o + 14] = this[14];
        a[o + 15] = this[15];
        return a;
    }
}

},{"./functions/Mat4Func":"dn570","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dn570":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "identity", ()=>identity);
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "transpose", ()=>transpose);
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "invert", ()=>invert);
/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */ parcelHelpers.export(exports, "determinant", ()=>determinant);
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "translate", ()=>translate);
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */ parcelHelpers.export(exports, "getTranslation", ()=>getTranslation);
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */ parcelHelpers.export(exports, "getScaling", ()=>getScaling);
parcelHelpers.export(exports, "getMaxScaleOnAxis", ()=>getMaxScaleOnAxis);
parcelHelpers.export(exports, "getRotation", ()=>getRotation);
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromRotationTranslationScale", ()=>fromRotationTranslationScale);
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromQuat", ()=>fromQuat);
/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "perspective", ()=>perspective);
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "ortho", ()=>ortho);
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} target Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "targetTo", ()=>targetTo);
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "multiplyScalar", ()=>multiplyScalar);
const EPSILON = 0.000001;
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
}
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        let a01 = a[1], a02 = a[2], a03 = a[3];
        let a12 = a[6], a13 = a[7];
        let a23 = a[11];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    return out;
}
function invert(out, a) {
    let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    let b00 = a00 * a11 - a01 * a10;
    let b01 = a00 * a12 - a02 * a10;
    let b02 = a00 * a13 - a03 * a10;
    let b03 = a01 * a12 - a02 * a11;
    let b04 = a01 * a13 - a03 * a11;
    let b05 = a02 * a13 - a03 * a12;
    let b06 = a20 * a31 - a21 * a30;
    let b07 = a20 * a32 - a22 * a30;
    let b08 = a20 * a33 - a23 * a30;
    let b09 = a21 * a32 - a22 * a31;
    let b10 = a21 * a33 - a23 * a31;
    let b11 = a22 * a33 - a23 * a32;
    // Calculate the determinant
    let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) return null;
    det = 1.0 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return out;
}
function determinant(a) {
    let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    let b00 = a00 * a11 - a01 * a10;
    let b01 = a00 * a12 - a02 * a10;
    let b02 = a00 * a13 - a03 * a10;
    let b03 = a01 * a12 - a02 * a11;
    let b04 = a01 * a13 - a03 * a11;
    let b05 = a02 * a13 - a03 * a12;
    let b06 = a20 * a31 - a21 * a30;
    let b07 = a20 * a32 - a22 * a30;
    let b08 = a20 * a33 - a23 * a30;
    let b09 = a21 * a32 - a22 * a31;
    let b10 = a21 * a33 - a23 * a31;
    let b11 = a22 * a33 - a23 * a32;
    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
function multiply(out, a, b) {
    let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    // Cache only the current line of the second matrix
    let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
}
function translate(out, a, v) {
    let x = v[0], y = v[1], z = v[2];
    let a00, a01, a02, a03;
    let a10, a11, a12, a13;
    let a20, a21, a22, a23;
    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];
        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a03;
        out[4] = a10;
        out[5] = a11;
        out[6] = a12;
        out[7] = a13;
        out[8] = a20;
        out[9] = a21;
        out[10] = a22;
        out[11] = a23;
        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }
    return out;
}
function scale(out, a, v) {
    let x = v[0], y = v[1], z = v[2];
    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
function rotate(out, a, rad, axis) {
    let x = axis[0], y = axis[1], z = axis[2];
    let len = Math.hypot(x, y, z);
    let s, c, t;
    let a00, a01, a02, a03;
    let a10, a11, a12, a13;
    let a20, a21, a22, a23;
    let b00, b01, b02;
    let b10, b11, b12;
    let b20, b21, b22;
    if (Math.abs(len) < EPSILON) return null;
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    // Construct the elements of the rotation matrix
    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c;
    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
    if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
}
function getTranslation(out, mat) {
    out[0] = mat[12];
    out[1] = mat[13];
    out[2] = mat[14];
    return out;
}
function getScaling(out, mat) {
    let m11 = mat[0];
    let m12 = mat[1];
    let m13 = mat[2];
    let m21 = mat[4];
    let m22 = mat[5];
    let m23 = mat[6];
    let m31 = mat[8];
    let m32 = mat[9];
    let m33 = mat[10];
    out[0] = Math.hypot(m11, m12, m13);
    out[1] = Math.hypot(m21, m22, m23);
    out[2] = Math.hypot(m31, m32, m33);
    return out;
}
function getMaxScaleOnAxis(mat) {
    let m11 = mat[0];
    let m12 = mat[1];
    let m13 = mat[2];
    let m21 = mat[4];
    let m22 = mat[5];
    let m23 = mat[6];
    let m31 = mat[8];
    let m32 = mat[9];
    let m33 = mat[10];
    const x = m11 * m11 + m12 * m12 + m13 * m13;
    const y = m21 * m21 + m22 * m22 + m23 * m23;
    const z = m31 * m31 + m32 * m32 + m33 * m33;
    return Math.sqrt(Math.max(x, y, z));
}
const getRotation = function() {
    const temp = [
        0,
        0,
        0
    ];
    return function(out, mat) {
        let scaling = temp;
        getScaling(scaling, mat);
        let is1 = 1 / scaling[0];
        let is2 = 1 / scaling[1];
        let is3 = 1 / scaling[2];
        let sm11 = mat[0] * is1;
        let sm12 = mat[1] * is2;
        let sm13 = mat[2] * is3;
        let sm21 = mat[4] * is1;
        let sm22 = mat[5] * is2;
        let sm23 = mat[6] * is3;
        let sm31 = mat[8] * is1;
        let sm32 = mat[9] * is2;
        let sm33 = mat[10] * is3;
        let trace = sm11 + sm22 + sm33;
        let S = 0;
        if (trace > 0) {
            S = Math.sqrt(trace + 1.0) * 2;
            out[3] = 0.25 * S;
            out[0] = (sm23 - sm32) / S;
            out[1] = (sm31 - sm13) / S;
            out[2] = (sm12 - sm21) / S;
        } else if (sm11 > sm22 && sm11 > sm33) {
            S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
            out[3] = (sm23 - sm32) / S;
            out[0] = 0.25 * S;
            out[1] = (sm12 + sm21) / S;
            out[2] = (sm31 + sm13) / S;
        } else if (sm22 > sm33) {
            S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
            out[3] = (sm31 - sm13) / S;
            out[0] = (sm12 + sm21) / S;
            out[1] = 0.25 * S;
            out[2] = (sm23 + sm32) / S;
        } else {
            S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
            out[3] = (sm12 - sm21) / S;
            out[0] = (sm31 + sm13) / S;
            out[1] = (sm23 + sm32) / S;
            out[2] = 0.25 * S;
        }
        return out;
    };
}();
function fromRotationTranslationScale(out, q, v, s) {
    // Quaternion math
    let x = q[0], y = q[1], z = q[2], w = q[3];
    let x2 = x + x;
    let y2 = y + y;
    let z2 = z + z;
    let xx = x * x2;
    let xy = x * y2;
    let xz = x * z2;
    let yy = y * y2;
    let yz = y * z2;
    let zz = z * z2;
    let wx = w * x2;
    let wy = w * y2;
    let wz = w * z2;
    let sx = s[0];
    let sy = s[1];
    let sz = s[2];
    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
function fromQuat(out, q) {
    let x = q[0], y = q[1], z = q[2], w = q[3];
    let x2 = x + x;
    let y2 = y + y;
    let z2 = z + z;
    let xx = x * x2;
    let yx = y * x2;
    let yy = y * y2;
    let zx = z * x2;
    let zy = z * y2;
    let zz = z * z2;
    let wx = w * x2;
    let wy = w * y2;
    let wz = w * z2;
    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;
    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;
    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function perspective(out, fovy, aspect, near, far) {
    let f = 1.0 / Math.tan(fovy / 2);
    let nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = 2 * far * near * nf;
    out[15] = 0;
    return out;
}
function ortho(out, left, right, bottom, top, near, far) {
    let lr = 1 / (left - right);
    let bt = 1 / (bottom - top);
    let nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
}
function targetTo(out, eye, target, up) {
    let eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
    let z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
    let len = z0 * z0 + z1 * z1 + z2 * z2;
    if (len === 0) // eye and target are in the same position
    z2 = 1;
    else {
        len = 1 / Math.sqrt(len);
        z0 *= len;
        z1 *= len;
        z2 *= len;
    }
    let x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len = x0 * x0 + x1 * x1 + x2 * x2;
    if (len === 0) {
        // up and z are parallel
        if (upz) upx += 1e-6;
        else if (upy) upz += 1e-6;
        else upy += 1e-6;
        x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
        len = x0 * x0 + x1 * x1 + x2 * x2;
    }
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
    out[0] = x0;
    out[1] = x1;
    out[2] = x2;
    out[3] = 0;
    out[4] = z1 * x2 - z2 * x1;
    out[5] = z2 * x0 - z0 * x2;
    out[6] = z0 * x1 - z1 * x0;
    out[7] = 0;
    out[8] = z0;
    out[9] = z1;
    out[10] = z2;
    out[11] = 0;
    out[12] = eyex;
    out[13] = eyey;
    out[14] = eyez;
    out[15] = 1;
    return out;
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    out[9] = a[9] + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    out[9] = a[9] - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];
    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
    return out;
}
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    out[9] = a[9] * b;
    out[10] = a[10] * b;
    out[11] = a[11] * b;
    out[12] = a[12] * b;
    out[13] = a[13] * b;
    out[14] = a[14] * b;
    out[15] = a[15] * b;
    return out;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2123V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transform", ()=>Transform);
var _vec3 = require("../math/Vec3");
var _quat = require("../math/Quat");
var _mat4 = require("../math/Mat4");
var _euler = require("../math/Euler");
class Transform {
    constructor(){
        this.parent = null;
        this.children = [];
        this.visible = true;
        this.matrix = new (0, _mat4.Mat4)();
        this.worldMatrix = new (0, _mat4.Mat4)();
        this.matrixAutoUpdate = true;
        this.up = new (0, _vec3.Vec3)(0, 1, 0);
        this.position = new (0, _vec3.Vec3)();
        this.scale = new (0, _vec3.Vec3)(1);
        this.quaternion = new (0, _quat.Quat)();
        this.rotation = new (0, _euler.Euler)();
        this.rotation.onChange = ()=>this.quaternion.fromEuler(this.rotation);
        this.quaternion.onChange = ()=>this.rotation.fromQuaternion(this.quaternion);
    }
    setParent(parent, notifyParent = true) {
        if (this.parent && parent !== this.parent) this.parent.removeChild(this, false);
        this.parent = parent;
        if (notifyParent && parent) parent.addChild(this, false);
    }
    addChild(child, notifyChild = true) {
        if (!~this.children.indexOf(child)) this.children.push(child);
        if (notifyChild) child.setParent(this, false);
    }
    removeChild(child, notifyChild = true) {
        if (!!~this.children.indexOf(child)) this.children.splice(this.children.indexOf(child), 1);
        if (notifyChild) child.setParent(null, false);
    }
    updateMatrixWorld(force) {
        if (this.matrixAutoUpdate) this.updateMatrix();
        if (this.worldMatrixNeedsUpdate || force) {
            if (this.parent === null) this.worldMatrix.copy(this.matrix);
            else this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix);
            this.worldMatrixNeedsUpdate = false;
            force = true;
        }
        for(let i = 0, l = this.children.length; i < l; i++)this.children[i].updateMatrixWorld(force);
    }
    updateMatrix() {
        this.matrix.compose(this.quaternion, this.position, this.scale);
        this.worldMatrixNeedsUpdate = true;
    }
    traverse(callback) {
        // Return true in callback to stop traversing children
        if (callback(this)) return;
        for(let i = 0, l = this.children.length; i < l; i++)this.children[i].traverse(callback);
    }
    decompose() {
        this.matrix.getTranslation(this.position);
        this.matrix.getRotation(this.quaternion);
        this.matrix.getScaling(this.scale);
        this.rotation.fromQuaternion(this.quaternion);
    }
    lookAt(target, invert = false) {
        if (invert) this.matrix.lookAt(this.position, target, this.up);
        else this.matrix.lookAt(target, this.position, this.up);
        this.matrix.getRotation(this.quaternion);
        this.rotation.fromQuaternion(this.quaternion);
    }
}

},{"../math/Vec3":"iLWkB","../math/Quat":"dWzbo","../math/Mat4":"2hzaT","../math/Euler":"dWr4j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dWzbo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Quat", ()=>Quat);
var _quatFunc = require("./functions/QuatFunc");
class Quat extends Array {
    constructor(x = 0, y = 0, z = 0, w = 1){
        super(x, y, z, w);
        this.onChange = ()=>{};
        return this;
    }
    get x() {
        return this[0];
    }
    get y() {
        return this[1];
    }
    get z() {
        return this[2];
    }
    get w() {
        return this[3];
    }
    set x(v) {
        this[0] = v;
        this.onChange();
    }
    set y(v) {
        this[1] = v;
        this.onChange();
    }
    set z(v) {
        this[2] = v;
        this.onChange();
    }
    set w(v) {
        this[3] = v;
        this.onChange();
    }
    identity() {
        _quatFunc.identity(this);
        this.onChange();
        return this;
    }
    set(x, y, z, w) {
        if (x.length) return this.copy(x);
        _quatFunc.set(this, x, y, z, w);
        this.onChange();
        return this;
    }
    rotateX(a) {
        _quatFunc.rotateX(this, this, a);
        this.onChange();
        return this;
    }
    rotateY(a) {
        _quatFunc.rotateY(this, this, a);
        this.onChange();
        return this;
    }
    rotateZ(a) {
        _quatFunc.rotateZ(this, this, a);
        this.onChange();
        return this;
    }
    inverse(q = this) {
        _quatFunc.invert(this, q);
        this.onChange();
        return this;
    }
    conjugate(q = this) {
        _quatFunc.conjugate(this, q);
        this.onChange();
        return this;
    }
    copy(q) {
        _quatFunc.copy(this, q);
        this.onChange();
        return this;
    }
    normalize(q = this) {
        _quatFunc.normalize(this, q);
        this.onChange();
        return this;
    }
    multiply(qA, qB) {
        if (qB) _quatFunc.multiply(this, qA, qB);
        else _quatFunc.multiply(this, this, qA);
        this.onChange();
        return this;
    }
    dot(v) {
        return _quatFunc.dot(this, v);
    }
    fromMatrix3(matrix3) {
        _quatFunc.fromMat3(this, matrix3);
        this.onChange();
        return this;
    }
    fromEuler(euler) {
        _quatFunc.fromEuler(this, euler, euler.order);
        return this;
    }
    fromAxisAngle(axis, a) {
        _quatFunc.setAxisAngle(this, axis, a);
        return this;
    }
    slerp(q, t) {
        _quatFunc.slerp(this, this, q, t);
        return this;
    }
    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        this[3] = a[o + 3];
        return this;
    }
    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        a[o + 3] = this[3];
        return a;
    }
}

},{"./functions/QuatFunc":"dATBP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dATBP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */ parcelHelpers.export(exports, "identity", ()=>identity);
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/ parcelHelpers.export(exports, "setAxisAngle", ()=>setAxisAngle);
/**
 * Multiplies two quats
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */ parcelHelpers.export(exports, "rotateX", ()=>rotateX);
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */ parcelHelpers.export(exports, "rotateY", ()=>rotateY);
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */ parcelHelpers.export(exports, "rotateZ", ()=>rotateZ);
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */ parcelHelpers.export(exports, "slerp", ()=>slerp);
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */ parcelHelpers.export(exports, "invert", ()=>invert);
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */ parcelHelpers.export(exports, "conjugate", ()=>conjugate);
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */ parcelHelpers.export(exports, "fromMat3", ()=>fromMat3);
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} euler Angles to rotate around each axis in degrees.
 * @param {String} order detailing order of operations. Default 'XYZ'.
 * @returns {quat} out
 * @function
 */ parcelHelpers.export(exports, "fromEuler", ()=>fromEuler);
parcelHelpers.export(exports, "copy", ()=>copy);
parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "scale", ()=>scale);
parcelHelpers.export(exports, "dot", ()=>dot);
parcelHelpers.export(exports, "lerp", ()=>lerp);
parcelHelpers.export(exports, "length", ()=>length);
parcelHelpers.export(exports, "normalize", ()=>normalize);
var _vec4Func = require("./Vec4Func");
function identity(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}
function setAxisAngle(out, axis, rad) {
    rad = rad * 0.5;
    let s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
}
function multiply(out, a, b) {
    let ax = a[0], ay = a[1], az = a[2], aw = a[3];
    let bx = b[0], by = b[1], bz = b[2], bw = b[3];
    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
}
function rotateX(out, a, rad) {
    rad *= 0.5;
    let ax = a[0], ay = a[1], az = a[2], aw = a[3];
    let bx = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
}
function rotateY(out, a, rad) {
    rad *= 0.5;
    let ax = a[0], ay = a[1], az = a[2], aw = a[3];
    let by = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
}
function rotateZ(out, a, rad) {
    rad *= 0.5;
    let ax = a[0], ay = a[1], az = a[2], aw = a[3];
    let bz = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
}
function slerp(out, a, b, t) {
    // benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations
    let ax = a[0], ay = a[1], az = a[2], aw = a[3];
    let bx = b[0], by = b[1], bz = b[2], bw = b[3];
    let omega, cosom, sinom, scale0, scale1;
    // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    // adjust signs (if necessary)
    if (cosom < 0.0) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
    }
    // calculate coefficients
    if (1.0 - cosom > 0.000001) {
        // standard case (slerp)
        omega = Math.acos(cosom);
        sinom = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {
        // "from" and "to" quaternions are very close
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    }
    // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    return out;
}
function invert(out, a) {
    let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    let dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
    let invDot = dot ? 1.0 / dot : 0;
    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
    out[0] = -a0 * invDot;
    out[1] = -a1 * invDot;
    out[2] = -a2 * invDot;
    out[3] = a3 * invDot;
    return out;
}
function conjugate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
}
function fromMat3(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    let fTrace = m[0] + m[4] + m[8];
    let fRoot;
    if (fTrace > 0.0) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0); // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot; // 1/(4w)
        out[0] = (m[5] - m[7]) * fRoot;
        out[1] = (m[6] - m[2]) * fRoot;
        out[2] = (m[1] - m[3]) * fRoot;
    } else {
        // |w| <= 1/2
        let i = 0;
        if (m[4] > m[0]) i = 1;
        if (m[8] > m[i * 3 + i]) i = 2;
        let j = (i + 1) % 3;
        let k = (i + 2) % 3;
        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
    }
    return out;
}
function fromEuler(out, euler, order = "YXZ") {
    let sx = Math.sin(euler[0] * 0.5);
    let cx = Math.cos(euler[0] * 0.5);
    let sy = Math.sin(euler[1] * 0.5);
    let cy = Math.cos(euler[1] * 0.5);
    let sz = Math.sin(euler[2] * 0.5);
    let cz = Math.cos(euler[2] * 0.5);
    if (order === "XYZ") {
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz + sx * sy * cz;
        out[3] = cx * cy * cz - sx * sy * sz;
    } else if (order === "YXZ") {
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
    } else if (order === "ZXY") {
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz + sx * sy * cz;
        out[3] = cx * cy * cz - sx * sy * sz;
    } else if (order === "ZYX") {
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
    } else if (order === "YZX") {
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz - sx * sy * sz;
    } else if (order === "XZY") {
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz + sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
    }
    return out;
}
const copy = _vec4Func.copy;
const set = _vec4Func.set;
const add = _vec4Func.add;
const scale = _vec4Func.scale;
const dot = _vec4Func.dot;
const lerp = _vec4Func.lerp;
const length = _vec4Func.length;
const normalize = _vec4Func.normalize;

},{"./Vec4Func":"cxofr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cxofr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */ parcelHelpers.export(exports, "length", ()=>length);
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "normalize", ()=>normalize);
/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */ parcelHelpers.export(exports, "dot", ()=>dot);
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "lerp", ()=>lerp);
const EPSILON = 0.000001;
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}
function set(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
}
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
}
function length(a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let w = a[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
}
function normalize(out, a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let w = a[3];
    let len = x * x + y * y + z * z + w * w;
    if (len > 0) len = 1 / Math.sqrt(len);
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
    return out;
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
function lerp(out, a, b, t) {
    let ax = a[0];
    let ay = a[1];
    let az = a[2];
    let aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dWr4j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Euler", ()=>Euler);
var _eulerFunc = require("./functions/EulerFunc");
var _mat4 = require("./Mat4");
const tmpMat4 = new (0, _mat4.Mat4)();
class Euler extends Array {
    constructor(x = 0, y = x, z = x, order = "YXZ"){
        super(x, y, z);
        this.order = order;
        this.onChange = ()=>{};
        return this;
    }
    get x() {
        return this[0];
    }
    get y() {
        return this[1];
    }
    get z() {
        return this[2];
    }
    set x(v) {
        this[0] = v;
        this.onChange();
    }
    set y(v) {
        this[1] = v;
        this.onChange();
    }
    set z(v) {
        this[2] = v;
        this.onChange();
    }
    set(x, y = x, z = x) {
        if (x.length) return this.copy(x);
        this[0] = x;
        this[1] = y;
        this[2] = z;
        this.onChange();
        return this;
    }
    copy(v) {
        this[0] = v[0];
        this[1] = v[1];
        this[2] = v[2];
        this.onChange();
        return this;
    }
    reorder(order) {
        this.order = order;
        this.onChange();
        return this;
    }
    fromRotationMatrix(m, order = this.order) {
        _eulerFunc.fromRotationMatrix(this, m, order);
        return this;
    }
    fromQuaternion(q, order = this.order) {
        tmpMat4.fromQuaternion(q);
        return this.fromRotationMatrix(tmpMat4, order);
    }
    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        return a;
    }
}

},{"./functions/EulerFunc":"lyVxa","./Mat4":"2hzaT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lyVxa":[function(require,module,exports) {
// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromRotationMatrix", ()=>fromRotationMatrix);
function fromRotationMatrix(out, m, order = "YXZ") {
    if (order === "XYZ") {
        out[1] = Math.asin(Math.min(Math.max(m[8], -1), 1));
        if (Math.abs(m[8]) < 0.99999) {
            out[0] = Math.atan2(-m[9], m[10]);
            out[2] = Math.atan2(-m[4], m[0]);
        } else {
            out[0] = Math.atan2(m[6], m[5]);
            out[2] = 0;
        }
    } else if (order === "YXZ") {
        out[0] = Math.asin(-Math.min(Math.max(m[9], -1), 1));
        if (Math.abs(m[9]) < 0.99999) {
            out[1] = Math.atan2(m[8], m[10]);
            out[2] = Math.atan2(m[1], m[5]);
        } else {
            out[1] = Math.atan2(-m[2], m[0]);
            out[2] = 0;
        }
    } else if (order === "ZXY") {
        out[0] = Math.asin(Math.min(Math.max(m[6], -1), 1));
        if (Math.abs(m[6]) < 0.99999) {
            out[1] = Math.atan2(-m[2], m[10]);
            out[2] = Math.atan2(-m[4], m[5]);
        } else {
            out[1] = 0;
            out[2] = Math.atan2(m[1], m[0]);
        }
    } else if (order === "ZYX") {
        out[1] = Math.asin(-Math.min(Math.max(m[2], -1), 1));
        if (Math.abs(m[2]) < 0.99999) {
            out[0] = Math.atan2(m[6], m[10]);
            out[2] = Math.atan2(m[1], m[0]);
        } else {
            out[0] = 0;
            out[2] = Math.atan2(-m[4], m[5]);
        }
    } else if (order === "YZX") {
        out[2] = Math.asin(Math.min(Math.max(m[1], -1), 1));
        if (Math.abs(m[1]) < 0.99999) {
            out[0] = Math.atan2(-m[9], m[5]);
            out[1] = Math.atan2(-m[2], m[0]);
        } else {
            out[0] = 0;
            out[1] = Math.atan2(m[8], m[10]);
        }
    } else if (order === "XZY") {
        out[2] = Math.asin(-Math.min(Math.max(m[4], -1), 1));
        if (Math.abs(m[4]) < 0.99999) {
            out[0] = Math.atan2(m[6], m[5]);
            out[1] = Math.atan2(m[8], m[0]);
        } else {
            out[0] = Math.atan2(-m[9], m[10]);
            out[1] = 0;
        }
    }
    return out;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"99L4I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Mesh", ()=>Mesh);
var _transform = require("./Transform");
var _mat3 = require("../math/Mat3");
var _mat4 = require("../math/Mat4");
let ID = 0;
class Mesh extends (0, _transform.Transform) {
    constructor(gl, { geometry , program , mode =gl.TRIANGLES , frustumCulled =true , renderOrder =0  } = {}){
        super();
        // raycast.ts
        this.hit = null;
        if (!gl.canvas) console.error("gl not passed as first argument to Mesh");
        this.gl = gl;
        this.id = ID++;
        this.geometry = geometry;
        this.program = program;
        this.mode = mode;
        // Used to skip frustum culling
        this.frustumCulled = frustumCulled;
        // Override sorting to force an order
        this.renderOrder = renderOrder;
        this.modelViewMatrix = new (0, _mat4.Mat4)();
        this.normalMatrix = new (0, _mat3.Mat3)();
        this.beforeRenderCallbacks = [];
        this.afterRenderCallbacks = [];
    }
    onBeforeRender(f) {
        this.beforeRenderCallbacks.push(f);
        return this;
    }
    onAfterRender(f) {
        this.afterRenderCallbacks.push(f);
        return this;
    }
    draw({ camera  } = {}) {
        this.beforeRenderCallbacks.forEach((f)=>f && f({
                mesh: this,
                camera
            }));
        // Set the matrix uniforms
        if (camera) {
            // Add empty matrix uniforms to program if unset
            if (!this.program.uniforms.modelMatrix) Object.assign(this.program.uniforms, {
                modelMatrix: {
                    value: null
                },
                viewMatrix: {
                    value: null
                },
                modelViewMatrix: {
                    value: null
                },
                normalMatrix: {
                    value: null
                },
                projectionMatrix: {
                    value: null
                },
                cameraPosition: {
                    value: null
                }
            });
            // Set the matrix uniforms
            this.program.uniforms.projectionMatrix.value = camera.projectionMatrix;
            this.program.uniforms.cameraPosition.value = camera.worldPosition;
            this.program.uniforms.viewMatrix.value = camera.viewMatrix;
            this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
            this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
            this.program.uniforms.modelMatrix.value = this.worldMatrix;
            this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
            this.program.uniforms.normalMatrix.value = this.normalMatrix;
        }
        // determine if faces need to be flipped - when mesh scaled negatively
        let flipFaces = this.program.cullFace && this.worldMatrix.determinant() < 0;
        this.program.use({
            flipFaces
        });
        this.geometry.draw({
            mode: this.mode,
            program: this.program
        });
        this.afterRenderCallbacks.forEach((f)=>f && f({
                mesh: this,
                camera
            }));
    }
}

},{"./Transform":"2123V","../math/Mat3":"iPFiP","../math/Mat4":"2hzaT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iPFiP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Mat3", ()=>Mat3);
var _mat3Func = require("./functions/Mat3Func");
class Mat3 extends Array {
    constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1){
        super(m00, m01, m02, m10, m11, m12, m20, m21, m22);
        return this;
    }
    set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        if (m00.length) return this.copy(m00);
        _mat3Func.set(this, m00, m01, m02, m10, m11, m12, m20, m21, m22);
        return this;
    }
    translate(v, m = this) {
        _mat3Func.translate(this, m, v);
        return this;
    }
    rotate(v, m = this) {
        _mat3Func.rotate(this, m, v);
        return this;
    }
    scale(v, m = this) {
        _mat3Func.scale(this, m, v);
        return this;
    }
    multiply(ma, mb) {
        if (mb) _mat3Func.multiply(this, ma, mb);
        else _mat3Func.multiply(this, this, ma);
        return this;
    }
    identity() {
        _mat3Func.identity(this);
        return this;
    }
    copy(m) {
        _mat3Func.copy(this, m);
        return this;
    }
    fromMatrix4(m) {
        _mat3Func.fromMat4(this, m);
        return this;
    }
    fromQuaternion(q) {
        _mat3Func.fromQuat(this, q);
        return this;
    }
    fromBasis(vec3a, vec3b, vec3c) {
        this.set(vec3a[0], vec3a[1], vec3a[2], vec3b[0], vec3b[1], vec3b[2], vec3c[0], vec3c[1], vec3c[2]);
        return this;
    }
    inverse(m = this) {
        _mat3Func.invert(this, m);
        return this;
    }
    getNormalMatrix(m) {
        _mat3Func.normalFromMat4(this, m);
        return this;
    }
}

},{"./functions/Mat3Func":"6gkWz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6gkWz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "fromMat4", ()=>fromMat4);
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "fromQuat", ()=>fromQuat);
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "identity", ()=>identity);
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "transpose", ()=>transpose);
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "invert", ()=>invert);
/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */ parcelHelpers.export(exports, "determinant", ()=>determinant);
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "translate", ()=>translate);
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {mat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "normalFromMat4", ()=>normalFromMat4);
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "projection", ()=>projection);
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "multiplyScalar", ()=>multiplyScalar);
const EPSILON = 0.000001;
function fromMat4(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
}
function fromQuat(out, q) {
    let x = q[0], y = q[1], z = q[2], w = q[3];
    let x2 = x + x;
    let y2 = y + y;
    let z2 = z + z;
    let xx = x * x2;
    let yx = y * x2;
    let yy = y * y2;
    let zx = z * x2;
    let zy = z * y2;
    let zz = z * z2;
    let wx = w * x2;
    let wy = w * y2;
    let wz = w * z2;
    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;
    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;
    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
}
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        let a01 = a[1], a02 = a[2], a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }
    return out;
}
function invert(out, a) {
    let a00 = a[0], a01 = a[1], a02 = a[2];
    let a10 = a[3], a11 = a[4], a12 = a[5];
    let a20 = a[6], a21 = a[7], a22 = a[8];
    let b01 = a22 * a11 - a12 * a21;
    let b11 = -a22 * a10 + a12 * a20;
    let b21 = a21 * a10 - a11 * a20;
    // Calculate the determinant
    let det = a00 * b01 + a01 * b11 + a02 * b21;
    if (!det) return null;
    det = 1.0 / det;
    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
}
function determinant(a) {
    let a00 = a[0], a01 = a[1], a02 = a[2];
    let a10 = a[3], a11 = a[4], a12 = a[5];
    let a20 = a[6], a21 = a[7], a22 = a[8];
    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
function multiply(out, a, b) {
    let a00 = a[0], a01 = a[1], a02 = a[2];
    let a10 = a[3], a11 = a[4], a12 = a[5];
    let a20 = a[6], a21 = a[7], a22 = a[8];
    let b00 = b[0], b01 = b[1], b02 = b[2];
    let b10 = b[3], b11 = b[4], b12 = b[5];
    let b20 = b[6], b21 = b[7], b22 = b[8];
    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;
    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;
    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
}
function translate(out, a, v) {
    let a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], x = v[0], y = v[1];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a10;
    out[4] = a11;
    out[5] = a12;
    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
}
function rotate(out, a, rad) {
    let a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;
    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;
    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
}
function scale(out, a, v) {
    let x = v[0], y = v[1];
    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];
    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}
function normalFromMat4(out, a) {
    let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    let b00 = a00 * a11 - a01 * a10;
    let b01 = a00 * a12 - a02 * a10;
    let b02 = a00 * a13 - a03 * a10;
    let b03 = a01 * a12 - a02 * a11;
    let b04 = a01 * a13 - a03 * a11;
    let b05 = a02 * a13 - a03 * a12;
    let b06 = a20 * a31 - a21 * a30;
    let b07 = a20 * a32 - a22 * a30;
    let b08 = a20 * a33 - a23 * a30;
    let b09 = a21 * a32 - a22 * a31;
    let b10 = a21 * a33 - a23 * a31;
    let b11 = a22 * a33 - a23 * a32;
    // Calculate the determinant
    let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) return null;
    det = 1.0 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    return out;
}
function projection(out, width, height) {
    out[0] = 2 / width;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = -2 / height;
    out[5] = 0;
    out[6] = -1;
    out[7] = 1;
    out[8] = 1;
    return out;
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    return out;
}
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    return out;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cKaIX":[function(require,module,exports) {
// TODO: facilitate Compressed Textures
// TODO: delete texture
// TODO: check is ArrayBuffer.isView is best way to check for Typed Arrays?
// TODO: use texSubImage2D for updates
// TODO: need? encoding = linearEncoding
// TODO: support non-compressed mipmaps uploads
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Texture", ()=>Texture);
const emptyPixel = new Uint8Array(4);
function isPowerOf2(value) {
    return (value & value - 1) === 0;
}
let ID = 1;
const isCompressedImage = (image)=>image.isCompressedTexture === true;
class Texture {
    constructor(gl, { image , target =gl.TEXTURE_2D , type =gl.UNSIGNED_BYTE , format =gl.RGBA , internalFormat =format , wrapS =gl.CLAMP_TO_EDGE , wrapT =gl.CLAMP_TO_EDGE , generateMipmaps =true , minFilter =generateMipmaps ? gl.NEAREST_MIPMAP_LINEAR : gl.LINEAR , magFilter =gl.LINEAR , premultiplyAlpha =false , unpackAlignment =4 , flipY =target == gl.TEXTURE_2D ? true : false , anisotropy =0 , level =0 , width , height =width  } = {}){
        this.gl = gl;
        this.id = ID++;
        this.image = image;
        this.target = target;
        this.type = type;
        this.format = format;
        this.internalFormat = internalFormat;
        this.minFilter = minFilter;
        this.magFilter = magFilter;
        this.wrapS = wrapS;
        this.wrapT = wrapT;
        this.generateMipmaps = generateMipmaps;
        this.premultiplyAlpha = premultiplyAlpha;
        this.unpackAlignment = unpackAlignment;
        this.flipY = flipY;
        this.anisotropy = Math.min(anisotropy, this.gl.renderer.parameters.maxAnisotropy);
        this.level = level;
        this.width = width;
        this.height = height;
        this.texture = this.gl.createTexture();
        this.store = {
            image: null
        };
        // Alias for state store to avoid redundant calls for global state
        this.glState = this.gl.renderer.state;
        // State store to avoid redundant calls for per-texture state
        this.state = {
            minFilter: this.gl.NEAREST_MIPMAP_LINEAR,
            magFilter: this.gl.LINEAR,
            wrapS: this.gl.REPEAT,
            wrapT: this.gl.REPEAT,
            anisotropy: 0
        };
    }
    bind() {
        // Already bound to active texture unit
        if (this.glState.textureUnits[this.glState.activeTextureUnit] === this.id) return;
        this.gl.bindTexture(this.target, this.texture);
        this.glState.textureUnits[this.glState.activeTextureUnit] = this.id;
    }
    update(textureUnit = 0) {
        const needsUpdate = !(this.image === this.store.image && !this.needsUpdate);
        // Make sure that texture is bound to its texture unit
        if (needsUpdate || this.glState.textureUnits[textureUnit] !== this.id) {
            // set active texture unit to perform texture functions
            this.gl.renderer.activeTexture(textureUnit);
            this.bind();
        }
        if (!needsUpdate) return;
        this.needsUpdate = false;
        if (this.flipY !== this.glState.flipY) {
            this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY);
            this.glState.flipY = this.flipY;
        }
        if (this.premultiplyAlpha !== this.glState.premultiplyAlpha) {
            this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
            this.glState.premultiplyAlpha = this.premultiplyAlpha;
        }
        if (this.unpackAlignment !== this.glState.unpackAlignment) {
            this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment);
            this.glState.unpackAlignment = this.unpackAlignment;
        }
        if (this.minFilter !== this.state.minFilter) {
            this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter);
            this.state.minFilter = this.minFilter;
        }
        if (this.magFilter !== this.state.magFilter) {
            this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter);
            this.state.magFilter = this.magFilter;
        }
        if (this.wrapS !== this.state.wrapS) {
            this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS);
            this.state.wrapS = this.wrapS;
        }
        if (this.wrapT !== this.state.wrapT) {
            this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT);
            this.state.wrapT = this.wrapT;
        }
        if (this.anisotropy && this.anisotropy !== this.state.anisotropy) {
            this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy);
            this.state.anisotropy = this.anisotropy;
        }
        if (this.image) {
            if (this.image.width) {
                this.width = this.image.width;
                this.height = this.image.height;
            }
            if (this.target === this.gl.TEXTURE_CUBE_MAP) // For cube maps
            for(let i = 0; i < 6; i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, this.level, this.internalFormat, this.format, this.type, this.image[i]);
            else if (ArrayBuffer.isView(this.image)) // Data texture
            this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
            else if (isCompressedImage(this.image)) {
                // Compressed texture
                let m;
                for(let level = 0; level < this.image.length; level++){
                    m = this.image[level];
                    this.gl.compressedTexImage2D(this.target, level, this.internalFormat, m.width, m.height, 0, m.data);
                }
            } else // Regular texture
            this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
            if (this.generateMipmaps) {
                // For WebGL1, if not a power of 2, turn off mips, set wrapping to clamp to edge and minFilter to linear
                if (!this.gl.renderer.isWebgl2 && (!isPowerOf2(this.image.width) || !isPowerOf2(this.image.height))) {
                    this.generateMipmaps = false;
                    this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE;
                    this.minFilter = this.gl.LINEAR;
                } else this.gl.generateMipmap(this.target);
            }
            // Callback for when data is pushed to GPU
            this.onUpdate && this.onUpdate();
        } else {
            if (this.target === this.gl.TEXTURE_CUBE_MAP) // Upload empty pixel for each side while no image to avoid errors while image or video loading
            for(let i = 0; i < 6; i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, emptyPixel);
            else if (this.width) // image intentionally left null for RenderTarget
            this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null);
            else // Upload empty pixel if no image to avoid errors while image or video loading
            this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, emptyPixel);
        }
        this.store.image = this.image;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7aAb6":[function(require,module,exports) {
// TODO: multi target rendering
// TODO: test stencil and depth
// TODO: destroy
// TODO: blit on resize?
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RenderTarget", ()=>RenderTarget);
var _texture = require("./Texture");
class RenderTarget {
    constructor(gl, { width =gl.canvas.width , height =gl.canvas.height , target =gl.FRAMEBUFFER , color =1 , depth =true , stencil =false , depthTexture =false , wrapS =gl.CLAMP_TO_EDGE , wrapT =gl.CLAMP_TO_EDGE , minFilter =gl.LINEAR , magFilter =minFilter , type =gl.UNSIGNED_BYTE , format =gl.RGBA , internalFormat =format , unpackAlignment , premultiplyAlpha  } = {}){
        this.gl = gl;
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.buffer = this.gl.createFramebuffer();
        this.target = target;
        this.gl.bindFramebuffer(this.target, this.buffer);
        this.textures = [];
        const drawBuffers = [];
        // create and attach required num of color textures
        for(let i = 0; i < color; i++){
            this.textures.push(new (0, _texture.Texture)(gl, {
                width,
                height,
                wrapS,
                wrapT,
                minFilter,
                magFilter,
                type,
                format,
                internalFormat,
                unpackAlignment,
                premultiplyAlpha,
                flipY: false,
                generateMipmaps: false
            }));
            this.textures[i].update();
            this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + i, this.gl.TEXTURE_2D, this.textures[i].texture, 0 /* level */ );
            drawBuffers.push(this.gl.COLOR_ATTACHMENT0 + i);
        }
        // For multi-render targets shader access
        if (drawBuffers.length > 1) this.gl.renderer.drawBuffers(drawBuffers);
        // alias for majority of use cases
        this.texture = this.textures[0];
        // note depth textures break stencil - so can't use together
        if (depthTexture && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension("WEBGL_depth_texture"))) {
            this.depthTexture = new (0, _texture.Texture)(gl, {
                width,
                height,
                minFilter: this.gl.NEAREST,
                magFilter: this.gl.NEAREST,
                format: this.gl.DEPTH_COMPONENT,
                internalFormat: gl.renderer.isWebgl2 ? this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
                type: this.gl.UNSIGNED_INT
            });
            this.depthTexture.update();
            this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0 /* level */ );
        } else {
            // Render buffers
            if (depth && !stencil) {
                this.depthBuffer = this.gl.createRenderbuffer();
                this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer);
                this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, width, height);
                this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer);
            }
            if (stencil && !depth) {
                this.stencilBuffer = this.gl.createRenderbuffer();
                this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer);
                this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, width, height);
                this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer);
            }
            if (depth && stencil) {
                this.depthStencilBuffer = this.gl.createRenderbuffer();
                this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer);
                this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, width, height);
                this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer);
            }
        }
        this.gl.bindFramebuffer(this.target, null);
    }
}

},{"./Texture":"cKaIX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2kRYs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Color stored as an array of RGB decimal values (between 0 > 1)
// Constructor and set method accept following formats:
// new Color() - Empty (defaults to black)
// new Color([0.2, 0.4, 1.0]) - Decimal Array (or another Color instance)
// new Color(0.7, 0.0, 0.1) - Decimal RGB values
// new Color('#ff0000') - Hex string
// new Color('#ccc') - Short-hand Hex string
// new Color(0x4f27e8) - Number
// new Color('red') - Color name string (short list in ColorFunc.js)
parcelHelpers.export(exports, "Color", ()=>Color);
var _colorFunc = require("./functions/ColorFunc");
class Color extends Array {
    constructor(color = null){
        if (Array.isArray(color)) super(...color);
        else super(..._colorFunc.parseColor(...arguments));
    }
    get r() {
        return this[0];
    }
    get g() {
        return this[1];
    }
    get b() {
        return this[2];
    }
    set r(v) {
        this[0] = v;
    }
    set g(v) {
        this[1] = v;
    }
    set b(v) {
        this[2] = v;
    }
    set(color) {
        if (Array.isArray(color)) return this.copy(color);
        return this.copy(_colorFunc.parseColor(...arguments));
    }
    copy(v) {
        this[0] = v[0];
        this[1] = v[1];
        this[2] = v[2];
        return this;
    }
}

},{"./functions/ColorFunc":"3itOY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3itOY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hexToRGB", ()=>hexToRGB);
parcelHelpers.export(exports, "numberToRGB", ()=>numberToRGB);
parcelHelpers.export(exports, "parseColor", ()=>parseColor);
const NAMES = {
    black: "#000000",
    white: "#ffffff",
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    cyan: "#00ffff",
    yellow: "#ffff00",
    orange: "#ff8000"
};
function hexToRGB(hex) {
    if (hex.length === 4) hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!rgb) console.warn(`Unable to convert hex string ${hex} to rgb values`);
    return [
        parseInt(rgb[1], 16) / 255,
        parseInt(rgb[2], 16) / 255,
        parseInt(rgb[3], 16) / 255
    ];
}
function numberToRGB(num) {
    num = parseInt(num);
    return [
        (num >> 16 & 255) / 255,
        (num >> 8 & 255) / 255,
        (num & 255) / 255
    ];
}
function parseColor(color = null) {
    // Empty
    if (!color) return [
        0,
        0,
        0
    ];
    // Decimal
    if (arguments.length === 3) return arguments;
    // Number
    if (!isNaN(color)) return numberToRGB(color);
    // Hex
    if (color[0] === "#") return hexToRGB(color);
    // Names
    if (NAMES[color.toLowerCase()]) return hexToRGB(NAMES[color.toLowerCase()]);
    console.warn("Color format not recognised");
    return [
        0,
        0,
        0
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzxgo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vec2", ()=>Vec2);
var _vec2Func = require("./functions/Vec2Func");
class Vec2 extends Array {
    constructor(x = 0, y = x){
        super(x, y);
        return this;
    }
    get x() {
        return this[0];
    }
    get y() {
        return this[1];
    }
    set x(v) {
        this[0] = v;
    }
    set y(v) {
        this[1] = v;
    }
    set(x, y = x) {
        if (x.length) return this.copy(x);
        _vec2Func.set(this, x, y);
        return this;
    }
    copy(v) {
        _vec2Func.copy(this, v);
        return this;
    }
    add(va, vb) {
        if (vb) _vec2Func.add(this, va, vb);
        else _vec2Func.add(this, this, va);
        return this;
    }
    sub(va, vb) {
        if (vb) _vec2Func.subtract(this, va, vb);
        else _vec2Func.subtract(this, this, va);
        return this;
    }
    multiply(v) {
        if (v.length) _vec2Func.multiply(this, this, v);
        else _vec2Func.scale(this, this, v);
        return this;
    }
    divide(v) {
        if (v.length) _vec2Func.divide(this, this, v);
        else _vec2Func.scale(this, this, 1 / v);
        return this;
    }
    inverse(v = this) {
        _vec2Func.inverse(this, v);
        return this;
    }
    // Can't use 'length' as Array.prototype uses it
    len() {
        return _vec2Func.length(this);
    }
    distance(v) {
        if (v) return _vec2Func.distance(this, v);
        else return _vec2Func.length(this);
    }
    squaredLen() {
        return this.squaredDistance();
    }
    squaredDistance(v) {
        if (v) return _vec2Func.squaredDistance(this, v);
        else return _vec2Func.squaredLength(this);
    }
    negate(v = this) {
        _vec2Func.negate(this, v);
        return this;
    }
    cross(va, vb) {
        if (vb) return _vec2Func.cross(va, vb);
        return _vec2Func.cross(this, va);
    }
    scale(v) {
        _vec2Func.scale(this, this, v);
        return this;
    }
    normalize() {
        _vec2Func.normalize(this, this);
        return this;
    }
    dot(v) {
        return _vec2Func.dot(this, v);
    }
    equals(v) {
        return _vec2Func.exactEquals(this, v);
    }
    applyMatrix3(mat3) {
        _vec2Func.transformMat3(this, this, mat3);
        return this;
    }
    applyMatrix4(mat4) {
        _vec2Func.transformMat4(this, this, mat4);
        return this;
    }
    lerp(v, a) {
        _vec2Func.lerp(this, this, v, a);
    }
    clone() {
        return new Vec2(this[0], this[1]);
    }
    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        return this;
    }
    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        return a;
    }
}

},{"./functions/Vec2Func":"gmB07","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gmB07":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "divide", ()=>divide);
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */ parcelHelpers.export(exports, "distance", ()=>distance);
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */ parcelHelpers.export(exports, "squaredDistance", ()=>squaredDistance);
/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */ parcelHelpers.export(exports, "length", ()=>length);
/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */ parcelHelpers.export(exports, "squaredLength", ()=>squaredLength);
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "negate", ()=>negate);
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "inverse", ()=>inverse);
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "normalize", ()=>normalize);
/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */ parcelHelpers.export(exports, "dot", ()=>dot);
/**
 * Computes the cross product of two vec2's
 * Note that the cross product returns a scalar
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} cross product of a and b
 */ parcelHelpers.export(exports, "cross", ()=>cross);
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "lerp", ()=>lerp);
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "transformMat2", ()=>transformMat2);
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "transformMat2d", ()=>transformMat2d);
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "transformMat3", ()=>transformMat3);
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "transformMat4", ()=>transformMat4);
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
const EPSILON = 0.000001;
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
}
function set(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
}
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
}
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
}
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
}
function distance(a, b) {
    var x = b[0] - a[0], y = b[1] - a[1];
    return Math.sqrt(x * x + y * y);
}
function squaredDistance(a, b) {
    var x = b[0] - a[0], y = b[1] - a[1];
    return x * x + y * y;
}
function length(a) {
    var x = a[0], y = a[1];
    return Math.sqrt(x * x + y * y);
}
function squaredLength(a) {
    var x = a[0], y = a[1];
    return x * x + y * y;
}
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
}
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    return out;
}
function normalize(out, a) {
    var x = a[0], y = a[1];
    var len = x * x + y * y;
    if (len > 0) //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    return out;
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
}
function cross(a, b) {
    return a[0] * b[1] - a[1] * b[0];
}
function lerp(out, a, b, t) {
    var ax = a[0], ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
}
function transformMat2(out, a, m) {
    var x = a[0], y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
}
function transformMat2d(out, a, m) {
    var x = a[0], y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
}
function transformMat3(out, a, m) {
    var x = a[0], y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
}
function transformMat4(out, a, m) {
    let x = a[0];
    let y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dpyAL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vec4", ()=>Vec4);
var _vec4Func = require("./functions/Vec4Func");
class Vec4 extends Array {
    constructor(x = 0, y = x, z = x, w = x){
        super(x, y, z, w);
        return this;
    }
    get x() {
        return this[0];
    }
    get y() {
        return this[1];
    }
    get z() {
        return this[2];
    }
    get w() {
        return this[3];
    }
    set x(v) {
        this[0] = v;
    }
    set y(v) {
        this[1] = v;
    }
    set z(v) {
        this[2] = v;
    }
    set w(v) {
        this[3] = v;
    }
    set(x, y, z, w) {
        if (x.length) return this.copy(x);
        _vec4Func.set(this, x, y, z, w);
        return this;
    }
    copy(v) {
        _vec4Func.copy(this, v);
        return this;
    }
    normalize() {
        _vec4Func.normalize(this, this);
        return this;
    }
    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        this[3] = a[o + 3];
        return this;
    }
    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        a[o + 3] = this[3];
        return a;
    }
}

},{"./functions/Vec4Func":"cxofr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ogNo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Plane", ()=>Plane);
var _geometry = require("../core/Geometry");
class Plane extends (0, _geometry.Geometry) {
    constructor(gl, { width =1 , height =1 , widthSegments =1 , heightSegments =1 , attributes ={}  } = {}){
        const wSegs = widthSegments;
        const hSegs = heightSegments;
        // Determine length of arrays
        const num = (wSegs + 1) * (hSegs + 1);
        const numIndices = wSegs * hSegs * 6;
        // Generate empty arrays once
        const position = new Float32Array(num * 3);
        const normal = new Float32Array(num * 3);
        const uv = new Float32Array(num * 2);
        const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
        Plane.buildPlane(position, normal, uv, index, width, height, 0, wSegs, hSegs);
        Object.assign(attributes, {
            position: {
                size: 3,
                data: position
            },
            normal: {
                size: 3,
                data: normal
            },
            uv: {
                size: 2,
                data: uv
            },
            index: {
                data: index
            }
        });
        super(gl, attributes);
    }
    static buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, u = 0, v = 1, w = 2, uDir = 1, vDir = -1, i = 0, ii = 0) {
        const io = i;
        const segW = width / wSegs;
        const segH = height / hSegs;
        for(let iy = 0; iy <= hSegs; iy++){
            let y = iy * segH - height / 2;
            for(let ix = 0; ix <= wSegs; ix++, i++){
                let x = ix * segW - width / 2;
                position[i * 3 + u] = x * uDir;
                position[i * 3 + v] = y * vDir;
                position[i * 3 + w] = depth / 2;
                normal[i * 3 + u] = 0;
                normal[i * 3 + v] = 0;
                normal[i * 3 + w] = depth >= 0 ? 1 : -1;
                uv[i * 2] = ix / wSegs;
                uv[i * 2 + 1] = 1 - iy / hSegs;
                if (iy === hSegs || ix === wSegs) continue;
                let a = io + ix + iy * (wSegs + 1);
                let b = io + ix + (iy + 1) * (wSegs + 1);
                let c = io + ix + (iy + 1) * (wSegs + 1) + 1;
                let d = io + ix + iy * (wSegs + 1) + 1;
                index[ii * 6] = a;
                index[ii * 6 + 1] = b;
                index[ii * 6 + 2] = d;
                index[ii * 6 + 3] = b;
                index[ii * 6 + 4] = c;
                index[ii * 6 + 5] = d;
                ii++;
            }
        }
    }
}

},{"../core/Geometry":"dD7Rh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Etsl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Box", ()=>Box);
var _geometry = require("../core/Geometry");
var _plane = require("./Plane");
class Box extends (0, _geometry.Geometry) {
    constructor(gl, { width =1 , height =1 , depth =1 , widthSegments =1 , heightSegments =1 , depthSegments =1 , attributes ={}  } = {}){
        const wSegs = widthSegments;
        const hSegs = heightSegments;
        const dSegs = depthSegments;
        const num = (wSegs + 1) * (hSegs + 1) * 2 + (wSegs + 1) * (dSegs + 1) * 2 + (hSegs + 1) * (dSegs + 1) * 2;
        const numIndices = (wSegs * hSegs * 2 + wSegs * dSegs * 2 + hSegs * dSegs * 2) * 6;
        const position = new Float32Array(num * 3);
        const normal = new Float32Array(num * 3);
        const uv = new Float32Array(num * 2);
        const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
        let i = 0;
        let ii = 0;
        // left, right
        (0, _plane.Plane).buildPlane(position, normal, uv, index, depth, height, width, dSegs, hSegs, 2, 1, 0, -1, -1, i, ii);
        i += (dSegs + 1) * (hSegs + 1);
        ii += dSegs * hSegs;
        (0, _plane.Plane).buildPlane(position, normal, uv, index, depth, height, -width, dSegs, hSegs, 2, 1, 0, 1, -1, i, ii);
        i += (dSegs + 1) * (hSegs + 1);
        ii += dSegs * hSegs;
        // top, bottom
        (0, _plane.Plane).buildPlane(position, normal, uv, index, width, depth, height, dSegs, wSegs, 0, 2, 1, 1, 1, i, ii);
        i += (wSegs + 1) * (dSegs + 1);
        ii += wSegs * dSegs;
        (0, _plane.Plane).buildPlane(position, normal, uv, index, width, depth, -height, dSegs, wSegs, 0, 2, 1, 1, -1, i, ii);
        i += (wSegs + 1) * (dSegs + 1);
        ii += wSegs * dSegs;
        // front, back
        (0, _plane.Plane).buildPlane(position, normal, uv, index, width, height, -depth, wSegs, hSegs, 0, 1, 2, -1, -1, i, ii);
        i += (wSegs + 1) * (hSegs + 1);
        ii += wSegs * hSegs;
        (0, _plane.Plane).buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, 0, 1, 2, 1, -1, i, ii);
        Object.assign(attributes, {
            position: {
                size: 3,
                data: position
            },
            normal: {
                size: 3,
                data: normal
            },
            uv: {
                size: 2,
                data: uv
            },
            index: {
                data: index
            }
        });
        super(gl, attributes);
    }
}

},{"../core/Geometry":"dD7Rh","./Plane":"1ogNo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8nBzC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sphere", ()=>Sphere);
var _geometry = require("../core/Geometry");
var _vec3 = require("../math/Vec3");
class Sphere extends (0, _geometry.Geometry) {
    constructor(gl, { radius =0.5 , widthSegments =16 , heightSegments =Math.ceil(widthSegments * 0.5) , phiStart =0 , phiLength =Math.PI * 2 , thetaStart =0 , thetaLength =Math.PI , attributes ={}  } = {}){
        const wSegs = widthSegments;
        const hSegs = heightSegments;
        const pStart = phiStart;
        const pLength = phiLength;
        const tStart = thetaStart;
        const tLength = thetaLength;
        const num = (wSegs + 1) * (hSegs + 1);
        const numIndices = wSegs * hSegs * 6;
        const position = new Float32Array(num * 3);
        const normal = new Float32Array(num * 3);
        const uv = new Float32Array(num * 2);
        const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
        let i = 0;
        let iv = 0;
        let ii = 0;
        let te = tStart + tLength;
        const grid = [];
        let n = new (0, _vec3.Vec3)();
        for(let iy = 0; iy <= hSegs; iy++){
            let vRow = [];
            let v = iy / hSegs;
            for(let ix = 0; ix <= wSegs; ix++, i++){
                let u = ix / wSegs;
                let x = -radius * Math.cos(pStart + u * pLength) * Math.sin(tStart + v * tLength);
                let y = radius * Math.cos(tStart + v * tLength);
                let z = radius * Math.sin(pStart + u * pLength) * Math.sin(tStart + v * tLength);
                position[i * 3] = x;
                position[i * 3 + 1] = y;
                position[i * 3 + 2] = z;
                n.set(x, y, z).normalize();
                normal[i * 3] = n.x;
                normal[i * 3 + 1] = n.y;
                normal[i * 3 + 2] = n.z;
                uv[i * 2] = u;
                uv[i * 2 + 1] = 1 - v;
                vRow.push(iv++);
            }
            grid.push(vRow);
        }
        for(let iy = 0; iy < hSegs; iy++)for(let ix = 0; ix < wSegs; ix++){
            let a = grid[iy][ix + 1];
            let b = grid[iy][ix];
            let c = grid[iy + 1][ix];
            let d = grid[iy + 1][ix + 1];
            if (iy !== 0 || tStart > 0) {
                index[ii * 3] = a;
                index[ii * 3 + 1] = b;
                index[ii * 3 + 2] = d;
                ii++;
            }
            if (iy !== hSegs - 1 || te < Math.PI) {
                index[ii * 3] = b;
                index[ii * 3 + 1] = c;
                index[ii * 3 + 2] = d;
                ii++;
            }
        }
        Object.assign(attributes, {
            position: {
                size: 3,
                data: position
            },
            normal: {
                size: 3,
                data: normal
            },
            uv: {
                size: 2,
                data: uv
            },
            index: {
                data: index
            }
        });
        super(gl, attributes);
    }
}

},{"../core/Geometry":"dD7Rh","../math/Vec3":"iLWkB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Al6K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Cylinder", ()=>Cylinder);
var _geometry = require("../core/Geometry");
var _vec3 = require("../math/Vec3");
class Cylinder extends (0, _geometry.Geometry) {
    constructor(gl, { radiusTop =0.5 , radiusBottom =0.5 , height =1 , radialSegments =8 , heightSegments =1 , openEnded =false , thetaStart =0 , thetaLength =Math.PI * 2 , attributes ={}  } = {}){
        const rSegs = radialSegments;
        const hSegs = heightSegments;
        const tStart = thetaStart;
        const tLength = thetaLength;
        const numCaps = openEnded ? 0 : radiusBottom && radiusTop ? 2 : 1;
        const num = (rSegs + 1) * (hSegs + 1 + numCaps) + numCaps;
        const numIndices = rSegs * hSegs * 6 + numCaps * rSegs * 3;
        const position = new Float32Array(num * 3);
        const normal = new Float32Array(num * 3);
        const uv = new Float32Array(num * 2);
        const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
        let i = 0;
        let ii = 0;
        const indexArray = [];
        addHeight();
        if (!openEnded) {
            if (radiusTop) addCap(true);
            if (radiusBottom) addCap(false);
        }
        function addHeight() {
            let x, y;
            const n = new (0, _vec3.Vec3)();
            const slope = (radiusBottom - radiusTop) / height;
            for(y = 0; y <= hSegs; y++){
                const indexRow = [];
                const v = y / hSegs;
                const r = v * (radiusBottom - radiusTop) + radiusTop;
                for(x = 0; x <= rSegs; x++){
                    const u = x / rSegs;
                    const theta = u * tLength + tStart;
                    const sinTheta = Math.sin(theta);
                    const cosTheta = Math.cos(theta);
                    position.set([
                        r * sinTheta,
                        (0.5 - v) * height,
                        r * cosTheta
                    ], i * 3);
                    n.set(sinTheta, slope, cosTheta).normalize();
                    normal.set([
                        n.x,
                        n.y,
                        n.z
                    ], i * 3);
                    uv.set([
                        u,
                        1 - v
                    ], i * 2);
                    indexRow.push(i++);
                }
                indexArray.push(indexRow);
            }
            for(x = 0; x < rSegs; x++)for(y = 0; y < hSegs; y++){
                const a = indexArray[y][x];
                const b = indexArray[y + 1][x];
                const c = indexArray[y + 1][x + 1];
                const d = indexArray[y][x + 1];
                index.set([
                    a,
                    b,
                    d,
                    b,
                    c,
                    d
                ], ii * 3);
                ii += 2;
            }
        }
        function addCap(isTop) {
            let x;
            const r = isTop === true ? radiusTop : radiusBottom;
            const sign = isTop === true ? 1 : -1;
            const centerIndex = i;
            position.set([
                0,
                0.5 * height * sign,
                0
            ], i * 3);
            normal.set([
                0,
                sign,
                0
            ], i * 3);
            uv.set([
                0.5,
                0.5
            ], i * 2);
            i++;
            for(x = 0; x <= rSegs; x++){
                const u = x / rSegs;
                const theta = u * tLength + tStart;
                const cosTheta = Math.cos(theta);
                const sinTheta = Math.sin(theta);
                position.set([
                    r * sinTheta,
                    0.5 * height * sign,
                    r * cosTheta
                ], i * 3);
                normal.set([
                    0,
                    sign,
                    0
                ], i * 3);
                uv.set([
                    cosTheta * 0.5 + 0.5,
                    sinTheta * 0.5 * sign + 0.5
                ], i * 2);
                i++;
            }
            for(x = 0; x < rSegs; x++){
                const j = centerIndex + x + 1;
                if (isTop) index.set([
                    j,
                    j + 1,
                    centerIndex
                ], ii * 3);
                else index.set([
                    j + 1,
                    j,
                    centerIndex
                ], ii * 3);
                ii++;
            }
        }
        Object.assign(attributes, {
            position: {
                size: 3,
                data: position
            },
            normal: {
                size: 3,
                data: normal
            },
            uv: {
                size: 2,
                data: uv
            },
            index: {
                data: index
            }
        });
        super(gl, attributes);
    }
}

},{"../core/Geometry":"dD7Rh","../math/Vec3":"iLWkB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dQOfI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Triangle", ()=>Triangle);
var _geometry = require("../core/Geometry");
class Triangle extends (0, _geometry.Geometry) {
    constructor(gl, { attributes ={}  } = {}){
        //         position                uv
        //      (-1, 3)                  (0, 2)
        //         |\                      |\
        //         |__\(1, 1)              |__\(1, 1)
        //         |__|_\                  |__|_\
        //   (-1, -1)   (3, -1)        (0, 0)   (2, 0)
        Object.assign(attributes, {
            position: {
                size: 2,
                data: new Float32Array([
                    -1,
                    -1,
                    3,
                    -1,
                    -1,
                    3
                ])
            },
            uv: {
                size: 2,
                data: new Float32Array([
                    0,
                    0,
                    2,
                    0,
                    0,
                    2
                ])
            }
        });
        super(gl, attributes);
    }
}

},{"../core/Geometry":"dD7Rh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jmwZH":[function(require,module,exports) {
// https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusGeometry.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Torus", ()=>Torus);
var _geometry = require("../core/Geometry");
var _vec3 = require("../math/Vec3");
class Torus extends (0, _geometry.Geometry) {
    constructor(gl, { radius =0.5 , tube =0.2 , radialSegments =8 , tubularSegments =6 , arc =Math.PI * 2 , attributes ={}  } = {}){
        const num = (radialSegments + 1) * (tubularSegments + 1);
        const numIndices = radialSegments * tubularSegments * 6;
        const vertices = new Float32Array(num * 3);
        const normals = new Float32Array(num * 3);
        const uvs = new Float32Array(num * 2);
        const indices = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
        const center = new (0, _vec3.Vec3)();
        const vertex = new (0, _vec3.Vec3)();
        const normal = new (0, _vec3.Vec3)();
        // generate vertices, normals and uvs
        let idx = 0;
        for(let j = 0; j <= radialSegments; j++)for(let i = 0; i <= tubularSegments; i++, idx++){
            const u = i / tubularSegments * arc;
            const v = j / radialSegments * Math.PI * 2;
            // vertex
            vertex.x = (radius + tube * Math.cos(v)) * Math.cos(u);
            vertex.y = (radius + tube * Math.cos(v)) * Math.sin(u);
            vertex.z = tube * Math.sin(v);
            vertices.set([
                vertex.x,
                vertex.y,
                vertex.z
            ], idx * 3);
            // normal
            center.x = radius * Math.cos(u);
            center.y = radius * Math.sin(u);
            normal.sub(vertex, center).normalize();
            normals.set([
                normal.x,
                normal.y,
                normal.z
            ], idx * 3);
            // uv
            uvs.set([
                i / tubularSegments,
                j / radialSegments
            ], idx * 2);
        }
        // generate indices
        idx = 0;
        for(let j = 1; j <= radialSegments; j++)for(let i = 1; i <= tubularSegments; i++, idx++){
            // indices
            const a = (tubularSegments + 1) * j + i - 1;
            const b = (tubularSegments + 1) * (j - 1) + i - 1;
            const c = (tubularSegments + 1) * (j - 1) + i;
            const d = (tubularSegments + 1) * j + i;
            // faces
            indices.set([
                a,
                b,
                d,
                b,
                c,
                d
            ], idx * 6);
        }
        Object.assign(attributes, {
            position: {
                size: 3,
                data: vertices
            },
            normal: {
                size: 3,
                data: normals
            },
            uv: {
                size: 2,
                data: uvs
            },
            index: {
                data: indices
            }
        });
        super(gl, attributes);
    }
}

},{"../core/Geometry":"dD7Rh","../math/Vec3":"iLWkB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iRJBY":[function(require,module,exports) {
// Based from ThreeJS' OrbitControls class, rewritten using es6 with some additions and subtractions.
// TODO: abstract event handlers so can be fed from other sources
// TODO: make scroll zoom more accurate than just >/< zero
// TODO: be able to pass in new camera position
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Orbit", ()=>Orbit);
var _vec3 = require("../math/Vec3");
var _vec2 = require("../math/Vec2");
const STATE = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    DOLLY_PAN: 3
};
const tempVec3 = new (0, _vec3.Vec3)();
const tempVec2a = new (0, _vec2.Vec2)();
const tempVec2b = new (0, _vec2.Vec2)();
function Orbit(object, { element =document.body , enabled =true , target =new (0, _vec3.Vec3)() , ease =0.25 , inertia =0.85 , enableRotate =true , rotateSpeed =0.1 , autoRotate =false , autoRotateSpeed =1.0 , enableZoom =true , zoomSpeed =1 , enablePan =true , panSpeed =0.1 , minPolarAngle =0 , maxPolarAngle =Math.PI , minAzimuthAngle =-Infinity , maxAzimuthAngle =Infinity , minDistance =0 , maxDistance =Infinity  } = {}) {
    this.enabled = enabled;
    this.target = target;
    // Catch attempts to disable - set to 1 so has no effect
    ease = ease || 1;
    inertia = inertia || 0;
    this.minDistance = minDistance;
    this.maxDistance = maxDistance;
    // current position in sphericalTarget coordinates
    const sphericalDelta = {
        radius: 1,
        phi: 0,
        theta: 0
    };
    const sphericalTarget = {
        radius: 1,
        phi: 0,
        theta: 0
    };
    const spherical = {
        radius: 1,
        phi: 0,
        theta: 0
    };
    const panDelta = new (0, _vec3.Vec3)();
    // Grab initial position values
    const offset = new (0, _vec3.Vec3)();
    offset.copy(object.position).sub(this.target);
    spherical.radius = sphericalTarget.radius = offset.distance();
    spherical.theta = sphericalTarget.theta = Math.atan2(offset.x, offset.z);
    spherical.phi = sphericalTarget.phi = Math.acos(Math.min(Math.max(offset.y / sphericalTarget.radius, -1), 1));
    this.offset = offset;
    this.update = ()=>{
        if (autoRotate) handleAutoRotate();
        // apply delta
        sphericalTarget.radius *= sphericalDelta.radius;
        sphericalTarget.theta += sphericalDelta.theta;
        sphericalTarget.phi += sphericalDelta.phi;
        // apply boundaries
        sphericalTarget.theta = Math.max(minAzimuthAngle, Math.min(maxAzimuthAngle, sphericalTarget.theta));
        sphericalTarget.phi = Math.max(minPolarAngle, Math.min(maxPolarAngle, sphericalTarget.phi));
        sphericalTarget.radius = Math.max(this.minDistance, Math.min(this.maxDistance, sphericalTarget.radius));
        // ease values
        spherical.phi += (sphericalTarget.phi - spherical.phi) * ease;
        spherical.theta += (sphericalTarget.theta - spherical.theta) * ease;
        spherical.radius += (sphericalTarget.radius - spherical.radius) * ease;
        // apply pan to target. As offset is relative to target, it also shifts
        this.target.add(panDelta);
        // apply rotation to offset
        let sinPhiRadius = spherical.radius * Math.sin(Math.max(0.000001, spherical.phi));
        offset.x = sinPhiRadius * Math.sin(spherical.theta);
        offset.y = spherical.radius * Math.cos(spherical.phi);
        offset.z = sinPhiRadius * Math.cos(spherical.theta);
        // Apply updated values to object
        object.position.copy(this.target).add(offset);
        object.lookAt(this.target);
        // Apply inertia to values
        sphericalDelta.theta *= inertia;
        sphericalDelta.phi *= inertia;
        panDelta.multiply(inertia);
        // Reset scale every frame to avoid applying scale multiple times
        sphericalDelta.radius = 1;
    };
    // Updates internals with new position
    this.forcePosition = ()=>{
        offset.copy(object.position).sub(this.target);
        spherical.radius = sphericalTarget.radius = offset.distance();
        spherical.theta = sphericalTarget.theta = Math.atan2(offset.x, offset.z);
        spherical.phi = sphericalTarget.phi = Math.acos(Math.min(Math.max(offset.y / sphericalTarget.radius, -1), 1));
        object.lookAt(this.target);
    };
    // Everything below here just updates panDelta and sphericalDelta
    // Using those two objects' values, the orbit is calculated
    const rotateStart = new (0, _vec2.Vec2)();
    const panStart = new (0, _vec2.Vec2)();
    const dollyStart = new (0, _vec2.Vec2)();
    let state = STATE.NONE;
    this.mouseButtons = {
        ORBIT: 0,
        ZOOM: 1,
        PAN: 2
    };
    function getZoomScale() {
        return Math.pow(0.95, zoomSpeed);
    }
    function panLeft(distance, m) {
        tempVec3.set(m[0], m[1], m[2]);
        tempVec3.multiply(-distance);
        panDelta.add(tempVec3);
    }
    function panUp(distance, m) {
        tempVec3.set(m[4], m[5], m[6]);
        tempVec3.multiply(distance);
        panDelta.add(tempVec3);
    }
    const pan = (deltaX, deltaY)=>{
        // let el = element === document ? document.body : element;
        tempVec3.copy(object.position).sub(this.target);
        let targetDistance = tempVec3.distance();
        targetDistance *= Math.tan((object.fov || 45) / 2 * Math.PI / 180.0);
        panLeft(2 * deltaX * targetDistance / element.clientHeight, object.matrix);
        panUp(2 * deltaY * targetDistance / element.clientHeight, object.matrix);
    };
    function dolly(dollyScale) {
        sphericalDelta.radius /= dollyScale;
    }
    function handleAutoRotate() {
        const angle = 2 * Math.PI / 60 / 60 * autoRotateSpeed;
        sphericalDelta.theta -= angle;
    }
    function handleMoveRotate(x, y) {
        tempVec2a.set(x, y);
        tempVec2b.sub(tempVec2a, rotateStart).multiply(rotateSpeed);
        // let el = element === document ? document.body : element;
        sphericalDelta.theta -= 2 * Math.PI * tempVec2b.x / element.clientHeight;
        sphericalDelta.phi -= 2 * Math.PI * tempVec2b.y / element.clientHeight;
        rotateStart.copy(tempVec2a);
    }
    function handleMouseMoveDolly(e) {
        tempVec2a.set(e.clientX, e.clientY);
        tempVec2b.sub(tempVec2a, dollyStart);
        if (tempVec2b.y > 0) dolly(getZoomScale());
        else if (tempVec2b.y < 0) dolly(1 / getZoomScale());
        dollyStart.copy(tempVec2a);
    }
    function handleMovePan(x, y) {
        tempVec2a.set(x, y);
        tempVec2b.sub(tempVec2a, panStart).multiply(panSpeed);
        pan(tempVec2b.x, tempVec2b.y);
        panStart.copy(tempVec2a);
    }
    function handleTouchStartDollyPan(e) {
        if (enableZoom) {
            let dx = e.touches[0].pageX - e.touches[1].pageX;
            let dy = e.touches[0].pageY - e.touches[1].pageY;
            let distance = Math.sqrt(dx * dx + dy * dy);
            dollyStart.set(0, distance);
        }
        if (enablePan) {
            let x = 0.5 * (e.touches[0].pageX + e.touches[1].pageX);
            let y = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
            panStart.set(x, y);
        }
    }
    function handleTouchMoveDollyPan(e) {
        if (enableZoom) {
            let dx = e.touches[0].pageX - e.touches[1].pageX;
            let dy = e.touches[0].pageY - e.touches[1].pageY;
            let distance = Math.sqrt(dx * dx + dy * dy);
            tempVec2a.set(0, distance);
            tempVec2b.set(0, Math.pow(tempVec2a.y / dollyStart.y, zoomSpeed));
            dolly(tempVec2b.y);
            dollyStart.copy(tempVec2a);
        }
        if (enablePan) {
            let x = 0.5 * (e.touches[0].pageX + e.touches[1].pageX);
            let y = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
            handleMovePan(x, y);
        }
    }
    const onMouseDown = (e)=>{
        if (!this.enabled) return;
        switch(e.button){
            case this.mouseButtons.ORBIT:
                if (enableRotate === false) return;
                rotateStart.set(e.clientX, e.clientY);
                state = STATE.ROTATE;
                break;
            case this.mouseButtons.ZOOM:
                if (enableZoom === false) return;
                dollyStart.set(e.clientX, e.clientY);
                state = STATE.DOLLY;
                break;
            case this.mouseButtons.PAN:
                if (enablePan === false) return;
                panStart.set(e.clientX, e.clientY);
                state = STATE.PAN;
                break;
        }
        if (state !== STATE.NONE) {
            window.addEventListener("mousemove", onMouseMove, false);
            window.addEventListener("mouseup", onMouseUp, false);
        }
    };
    const onMouseMove = (e)=>{
        if (!this.enabled) return;
        switch(state){
            case STATE.ROTATE:
                if (enableRotate === false) return;
                handleMoveRotate(e.clientX, e.clientY);
                break;
            case STATE.DOLLY:
                if (enableZoom === false) return;
                handleMouseMoveDolly(e);
                break;
            case STATE.PAN:
                if (enablePan === false) return;
                handleMovePan(e.clientX, e.clientY);
                break;
        }
    };
    const onMouseUp = ()=>{
        window.removeEventListener("mousemove", onMouseMove, false);
        window.removeEventListener("mouseup", onMouseUp, false);
        state = STATE.NONE;
    };
    const onMouseWheel = (e)=>{
        if (!this.enabled || !enableZoom || state !== STATE.NONE && state !== STATE.ROTATE) return;
        e.stopPropagation();
        e.preventDefault();
        if (e.deltaY < 0) dolly(1 / getZoomScale());
        else if (e.deltaY > 0) dolly(getZoomScale());
    };
    const onTouchStart = (e)=>{
        if (!this.enabled) return;
        e.preventDefault();
        switch(e.touches.length){
            case 1:
                if (enableRotate === false) return;
                rotateStart.set(e.touches[0].pageX, e.touches[0].pageY);
                state = STATE.ROTATE;
                break;
            case 2:
                if (enableZoom === false && enablePan === false) return;
                handleTouchStartDollyPan(e);
                state = STATE.DOLLY_PAN;
                break;
            default:
                state = STATE.NONE;
        }
    };
    const onTouchMove = (e)=>{
        if (!this.enabled) return;
        e.preventDefault();
        e.stopPropagation();
        switch(e.touches.length){
            case 1:
                if (enableRotate === false) return;
                handleMoveRotate(e.touches[0].pageX, e.touches[0].pageY);
                break;
            case 2:
                if (enableZoom === false && enablePan === false) return;
                handleTouchMoveDollyPan(e);
                break;
            default:
                state = STATE.NONE;
        }
    };
    const onTouchEnd = ()=>{
        if (!this.enabled) return;
        state = STATE.NONE;
    };
    const onContextMenu = (e)=>{
        if (!this.enabled) return;
        e.preventDefault();
    };
    function addHandlers() {
        element.addEventListener("contextmenu", onContextMenu, false);
        element.addEventListener("mousedown", onMouseDown, false);
        element.addEventListener("wheel", onMouseWheel, {
            passive: false
        });
        element.addEventListener("touchstart", onTouchStart, {
            passive: false
        });
        element.addEventListener("touchend", onTouchEnd, false);
        element.addEventListener("touchmove", onTouchMove, {
            passive: false
        });
    }
    this.remove = function() {
        element.removeEventListener("contextmenu", onContextMenu);
        element.removeEventListener("mousedown", onMouseDown);
        element.removeEventListener("wheel", onMouseWheel);
        element.removeEventListener("touchstart", onTouchStart);
        element.removeEventListener("touchend", onTouchEnd);
        element.removeEventListener("touchmove", onTouchMove);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
    };
    addHandlers();
}

},{"../math/Vec3":"iLWkB","../math/Vec2":"bzxgo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jahad":[function(require,module,exports) {
// TODO: barycentric code shouldn't be here, but where?
// TODO: SphereCast?
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Raycast", ()=>Raycast);
var _vec3 = require("../math/Vec3");
var _mat4 = require("../math/Mat4");
var _vec2 = require("../math/Vec2");
const tempVec2a = new (0, _vec2.Vec2)();
const tempVec2b = new (0, _vec2.Vec2)();
const tempVec2c = new (0, _vec2.Vec2)();
const tempVec3a = new (0, _vec3.Vec3)();
const tempVec3b = new (0, _vec3.Vec3)();
const tempVec3c = new (0, _vec3.Vec3)();
const tempVec3d = new (0, _vec3.Vec3)();
const tempVec3e = new (0, _vec3.Vec3)();
const tempVec3f = new (0, _vec3.Vec3)();
const tempVec3g = new (0, _vec3.Vec3)();
const tempVec3h = new (0, _vec3.Vec3)();
const tempVec3i = new (0, _vec3.Vec3)();
const tempVec3j = new (0, _vec3.Vec3)();
const tempVec3k = new (0, _vec3.Vec3)();
const tempMat4 = new (0, _mat4.Mat4)();
class Raycast {
    constructor(gl){
        this.gl = gl;
        this.origin = new (0, _vec3.Vec3)();
        this.direction = new (0, _vec3.Vec3)();
    }
    // Set ray from mouse unprojection
    castMouse(camera, mouse = [
        0,
        0
    ]) {
        if (camera.type === "orthographic") {
            // Set origin
            // Since camera is orthographic, origin is not the camera position
            const { left , right , bottom , top , zoom  } = camera;
            const x = left / zoom + (right - left) / zoom * (mouse[0] * 0.5 + 0.5);
            const y = bottom / zoom + (top - bottom) / zoom * (mouse[1] * 0.5 + 0.5);
            this.origin.set(x, y, 0);
            this.origin.applyMatrix4(camera.worldMatrix);
            // Set direction
            // https://community.khronos.org/t/get-direction-from-transformation-matrix-or-quat/65502/2
            this.direction.x = -camera.worldMatrix[8];
            this.direction.y = -camera.worldMatrix[9];
            this.direction.z = -camera.worldMatrix[10];
        } else {
            // Set origin
            camera.worldMatrix.getTranslation(this.origin);
            // Set direction
            this.direction.set(mouse[0], mouse[1], 0.5);
            camera.unproject(this.direction);
            this.direction.sub(this.origin).normalize();
        }
    }
    intersectBounds(meshes, { maxDistance , output =[]  } = {}) {
        if (!Array.isArray(meshes)) meshes = [
            meshes
        ];
        const invWorldMat4 = tempMat4;
        const origin = tempVec3a;
        const direction = tempVec3b;
        const hits = output;
        hits.length = 0;
        meshes.forEach((mesh)=>{
            // Create bounds
            if (!mesh.geometry.bounds || mesh.geometry.bounds.radius === Infinity) mesh.geometry.computeBoundingSphere();
            const bounds = mesh.geometry.bounds;
            invWorldMat4.inverse(mesh.worldMatrix);
            // Get max distance locally
            let localMaxDistance;
            if (maxDistance) {
                direction.copy(this.direction).scaleRotateMatrix4(invWorldMat4);
                localMaxDistance = maxDistance * direction.len();
            }
            // Take world space ray and make it object space to align with bounding box
            origin.copy(this.origin).applyMatrix4(invWorldMat4);
            direction.copy(this.direction).transformDirection(invWorldMat4);
            // Break out early if bounds too far away from origin
            if (maxDistance) {
                if (origin.distance(bounds.center) - bounds.radius > localMaxDistance) return;
            }
            let localDistance = 0;
            // Check origin isn't inside bounds before testing intersection
            if (mesh.geometry.raycast === "sphere") {
                if (origin.distance(bounds.center) > bounds.radius) {
                    localDistance = this.intersectSphere(bounds, origin, direction);
                    if (!localDistance) return;
                }
            } else if (origin.x < bounds.min.x || origin.x > bounds.max.x || origin.y < bounds.min.y || origin.y > bounds.max.y || origin.z < bounds.min.z || origin.z > bounds.max.z) {
                localDistance = this.intersectBox(bounds, origin, direction);
                if (!localDistance) return;
            }
            if (maxDistance && localDistance > localMaxDistance) return;
            // Create object on mesh to avoid generating lots of objects
            if (!mesh.hit) mesh.hit = {
                localPoint: new (0, _vec3.Vec3)(),
                point: new (0, _vec3.Vec3)()
            };
            mesh.hit.localPoint.copy(direction).multiply(localDistance).add(origin);
            mesh.hit.point.copy(mesh.hit.localPoint).applyMatrix4(mesh.worldMatrix);
            mesh.hit.distance = mesh.hit.point.distance(this.origin);
            hits.push(mesh);
        });
        hits.sort((a, b)=>a.hit.distance - b.hit.distance);
        return hits;
    }
    intersectMeshes(meshes, { cullFace =true , maxDistance =null , includeUV =true , includeNormal =true , output =[]  } = {}) {
        // Test bounds first before testing geometry
        const hits = this.intersectBounds(meshes, {
            maxDistance,
            output
        });
        if (!hits.length) return hits;
        const invWorldMat4 = tempMat4;
        const origin = tempVec3a;
        const direction = tempVec3b;
        const a = tempVec3c;
        const b = tempVec3d;
        const c = tempVec3e;
        const closestFaceNormal = tempVec3f;
        const faceNormal = tempVec3g;
        const barycoord = tempVec3h;
        const uvA = tempVec2a;
        const uvB = tempVec2b;
        const uvC = tempVec2c;
        for(let i = hits.length - 1; i >= 0; i--){
            const mesh = hits[i];
            invWorldMat4.inverse(mesh.worldMatrix);
            // Get max distance locally
            let localMaxDistance;
            if (maxDistance) {
                direction.copy(this.direction).scaleRotateMatrix4(invWorldMat4);
                localMaxDistance = maxDistance * direction.len();
            }
            // Take world space ray and make it object space to align with bounding box
            origin.copy(this.origin).applyMatrix4(invWorldMat4);
            direction.copy(this.direction).transformDirection(invWorldMat4);
            let localDistance = 0;
            let closestA, closestB, closestC;
            const geometry = mesh.geometry;
            const attributes = geometry.attributes;
            const index = attributes.index;
            const start = Math.max(0, geometry.drawRange.start);
            const end = Math.min(index ? index.count : attributes.position.count, geometry.drawRange.start + geometry.drawRange.count);
            for(let j = start; j < end; j += 3){
                // Position attribute indices for each triangle
                const ai = index ? index.data[j] : j;
                const bi = index ? index.data[j + 1] : j + 1;
                const ci = index ? index.data[j + 2] : j + 2;
                a.fromArray(attributes.position.data, ai * 3);
                b.fromArray(attributes.position.data, bi * 3);
                c.fromArray(attributes.position.data, ci * 3);
                const distance = this.intersectTriangle(a, b, c, cullFace, origin, direction, faceNormal);
                if (!distance) continue;
                // Too far away
                if (maxDistance && distance > localMaxDistance) continue;
                if (!localDistance || distance < localDistance) {
                    localDistance = distance;
                    closestA = ai;
                    closestB = bi;
                    closestC = ci;
                    closestFaceNormal.copy(faceNormal);
                }
            }
            if (!localDistance) hits.splice(i, 1);
            // Update hit values from bounds-test
            mesh.hit.localPoint.copy(direction).multiply(localDistance).add(origin);
            mesh.hit.point.copy(mesh.hit.localPoint).applyMatrix4(mesh.worldMatrix);
            mesh.hit.distance = mesh.hit.point.distance(this.origin);
            // Add unique hit objects on mesh to avoid generating lots of objects
            if (!mesh.hit.faceNormal) {
                mesh.hit.localFaceNormal = new (0, _vec3.Vec3)();
                mesh.hit.faceNormal = new (0, _vec3.Vec3)();
                mesh.hit.uv = new (0, _vec2.Vec2)();
                mesh.hit.localNormal = new (0, _vec3.Vec3)();
                mesh.hit.normal = new (0, _vec3.Vec3)();
            }
            // Add face normal data which is already computed
            mesh.hit.localFaceNormal.copy(closestFaceNormal);
            mesh.hit.faceNormal.copy(mesh.hit.localFaceNormal).transformDirection(mesh.worldMatrix);
            // Optional data, opt out to optimise a bit if necessary
            if (includeUV || includeNormal) {
                // Calculate barycoords to find uv values at hit point
                a.fromArray(attributes.position.data, closestA * 3);
                b.fromArray(attributes.position.data, closestB * 3);
                c.fromArray(attributes.position.data, closestC * 3);
                this.getBarycoord(mesh.hit.localPoint, a, b, c, barycoord);
            }
            if (includeUV && attributes.uv) {
                uvA.fromArray(attributes.uv.data, closestA * 2);
                uvB.fromArray(attributes.uv.data, closestB * 2);
                uvC.fromArray(attributes.uv.data, closestC * 2);
                mesh.hit.uv.set(uvA.x * barycoord.x + uvB.x * barycoord.y + uvC.x * barycoord.z, uvA.y * barycoord.x + uvB.y * barycoord.y + uvC.y * barycoord.z);
            }
            if (includeNormal && attributes.normal) {
                a.fromArray(attributes.normal.data, closestA * 3);
                b.fromArray(attributes.normal.data, closestB * 3);
                c.fromArray(attributes.normal.data, closestC * 3);
                mesh.hit.localNormal.set(a.x * barycoord.x + b.x * barycoord.y + c.x * barycoord.z, a.y * barycoord.x + b.y * barycoord.y + c.y * barycoord.z, a.z * barycoord.x + b.z * barycoord.y + c.z * barycoord.z);
                mesh.hit.normal.copy(mesh.hit.localNormal).transformDirection(mesh.worldMatrix);
            }
        }
        hits.sort((a, b)=>a.hit.distance - b.hit.distance);
        return hits;
    }
    intersectSphere(sphere, origin = this.origin, direction = this.direction) {
        const ray = tempVec3c;
        ray.sub(sphere.center, origin);
        const tca = ray.dot(direction);
        const d2 = ray.dot(ray) - tca * tca;
        const radius2 = sphere.radius * sphere.radius;
        if (d2 > radius2) return 0;
        const thc = Math.sqrt(radius2 - d2);
        const t0 = tca - thc;
        const t1 = tca + thc;
        if (t0 < 0 && t1 < 0) return 0;
        if (t0 < 0) return t1;
        return t0;
    }
    // Ray AABB - Ray Axis aligned bounding box testing
    intersectBox(box, origin = this.origin, direction = this.direction) {
        let tmin, tmax, tYmin, tYmax, tZmin, tZmax;
        const invdirx = 1 / direction.x;
        const invdiry = 1 / direction.y;
        const invdirz = 1 / direction.z;
        const min = box.min;
        const max = box.max;
        tmin = ((invdirx >= 0 ? min.x : max.x) - origin.x) * invdirx;
        tmax = ((invdirx >= 0 ? max.x : min.x) - origin.x) * invdirx;
        tYmin = ((invdiry >= 0 ? min.y : max.y) - origin.y) * invdiry;
        tYmax = ((invdiry >= 0 ? max.y : min.y) - origin.y) * invdiry;
        if (tmin > tYmax || tYmin > tmax) return 0;
        if (tYmin > tmin) tmin = tYmin;
        if (tYmax < tmax) tmax = tYmax;
        tZmin = ((invdirz >= 0 ? min.z : max.z) - origin.z) * invdirz;
        tZmax = ((invdirz >= 0 ? max.z : min.z) - origin.z) * invdirz;
        if (tmin > tZmax || tZmin > tmax) return 0;
        if (tZmin > tmin) tmin = tZmin;
        if (tZmax < tmax) tmax = tZmax;
        if (tmax < 0) return 0;
        return tmin >= 0 ? tmin : tmax;
    }
    intersectTriangle(a, b, c, backfaceCulling = true, origin = this.origin, direction = this.direction, normal = tempVec3g) {
        // from https://github.com/mrdoob/three.js/blob/master/src/math/Ray.js
        // which is from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h
        const edge1 = tempVec3h;
        const edge2 = tempVec3i;
        const diff = tempVec3j;
        edge1.sub(b, a);
        edge2.sub(c, a);
        normal.cross(edge1, edge2);
        let DdN = direction.dot(normal);
        if (!DdN) return 0;
        let sign;
        if (DdN > 0) {
            if (backfaceCulling) return 0;
            sign = 1;
        } else {
            sign = -1;
            DdN = -DdN;
        }
        diff.sub(origin, a);
        let DdQxE2 = sign * direction.dot(edge2.cross(diff, edge2));
        if (DdQxE2 < 0) return 0;
        let DdE1xQ = sign * direction.dot(edge1.cross(diff));
        if (DdE1xQ < 0) return 0;
        if (DdQxE2 + DdE1xQ > DdN) return 0;
        let QdN = -sign * diff.dot(normal);
        if (QdN < 0) return 0;
        return QdN / DdN;
    }
    getBarycoord(point, a, b, c, target = tempVec3h) {
        // From https://github.com/mrdoob/three.js/blob/master/src/math/Triangle.js
        // static/instance method to calculate barycentric coordinates
        // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
        const v0 = tempVec3i;
        const v1 = tempVec3j;
        const v2 = tempVec3k;
        v0.sub(c, a);
        v1.sub(b, a);
        v2.sub(point, a);
        const dot00 = v0.dot(v0);
        const dot01 = v0.dot(v1);
        const dot02 = v0.dot(v2);
        const dot11 = v1.dot(v1);
        const dot12 = v1.dot(v2);
        const denom = dot00 * dot11 - dot01 * dot01;
        if (denom === 0) return target.set(-2, -1, -1);
        const invDenom = 1 / denom;
        const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
        const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
        return target.set(1 - u - v, v, u);
    }
}

},{"../math/Vec3":"iLWkB","../math/Mat4":"2hzaT","../math/Vec2":"bzxgo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"550LY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Curve", ()=>Curve);
var _vec3 = require("../math/Vec3");
const CATMULLROM = "catmullrom";
const CUBICBEZIER = "cubicbezier";
const QUADRATICBEZIER = "quadraticbezier";
// temp
const _a0 = new (0, _vec3.Vec3)(), _a1 = new (0, _vec3.Vec3)(), _a2 = new (0, _vec3.Vec3)(), _a3 = new (0, _vec3.Vec3)();
/**
 * Get the control points of cubic bezier curve.
 * @param {*} i
 * @param {*} a
 * @param {*} b
 */ function getCtrlPoint(points, i, a = 0.168, b = 0.168) {
    if (i < 1) _a0.sub(points[1], points[0]).scale(a).add(points[0]);
    else _a0.sub(points[i + 1], points[i - 1]).scale(a).add(points[i]);
    if (i > points.length - 3) {
        const last = points.length - 1;
        _a1.sub(points[last - 1], points[last]).scale(b).add(points[last]);
    } else _a1.sub(points[i], points[i + 2]).scale(b).add(points[i + 1]);
    return [
        _a0.clone(),
        _a1.clone()
    ];
}
function getQuadraticBezierPoint(t, p0, c0, p1) {
    const k = 1 - t;
    _a0.copy(p0).scale(k ** 2);
    _a1.copy(c0).scale(2 * k * t);
    _a2.copy(p1).scale(t ** 2);
    const ret = new (0, _vec3.Vec3)();
    ret.add(_a0, _a1).add(_a2);
    return ret;
}
function getCubicBezierPoint(t, p0, c0, c1, p1) {
    const k = 1 - t;
    _a0.copy(p0).scale(k ** 3);
    _a1.copy(c0).scale(3 * k ** 2 * t);
    _a2.copy(c1).scale(3 * k * t ** 2);
    _a3.copy(p1).scale(t ** 3);
    const ret = new (0, _vec3.Vec3)();
    ret.add(_a0, _a1).add(_a2).add(_a3);
    return ret;
}
class Curve {
    constructor({ points =[
        new (0, _vec3.Vec3)(0, 0, 0),
        new (0, _vec3.Vec3)(0, 1, 0),
        new (0, _vec3.Vec3)(1, 1, 0),
        new (0, _vec3.Vec3)(1, 0, 0)
    ] , divisions =12 , type =Curve.CATMULLROM  } = {}){
        this.points = points;
        this.divisions = divisions;
        this.type = type;
    }
    _getQuadraticBezierPoints(divisions = this.divisions) {
        const points = [];
        const count = this.points.length;
        if (count < 3) {
            console.warn("Not enough points provided.");
            return [];
        }
        const p0 = this.points[0];
        let c0 = this.points[1], p1 = this.points[2];
        for(let i = 0; i <= divisions; i++){
            const p = getQuadraticBezierPoint(i / divisions, p0, c0, p1);
            points.push(p);
        }
        let offset = 3;
        while(count - offset > 0){
            p0.copy(p1);
            c0 = p1.scale(2).sub(c0);
            p1 = this.points[offset];
            for(let i = 1; i <= divisions; i++){
                const p = getQuadraticBezierPoint(i / divisions, p0, c0, p1);
                points.push(p);
            }
            offset++;
        }
        return points;
    }
    _getCubicBezierPoints(divisions = this.divisions) {
        const points = [];
        const count = this.points.length;
        if (count < 4) {
            console.warn("Not enough points provided.");
            return [];
        }
        let p0 = this.points[0], c0 = this.points[1], c1 = this.points[2], p1 = this.points[3];
        for(let i = 0; i <= divisions; i++){
            const p = getCubicBezierPoint(i / divisions, p0, c0, c1, p1);
            points.push(p);
        }
        let offset = 4;
        while(count - offset > 1){
            p0.copy(p1);
            c0 = p1.scale(2).sub(c1);
            c1 = this.points[offset];
            p1 = this.points[offset + 1];
            for(let i = 1; i <= divisions; i++){
                const p = getCubicBezierPoint(i / divisions, p0, c0, c1, p1);
                points.push(p);
            }
            offset += 2;
        }
        return points;
    }
    _getCatmullRomPoints(divisions = this.divisions, a = 0.168, b = 0.168) {
        const points = [];
        const count = this.points.length;
        if (count <= 2) return this.points;
        let p0;
        this.points.forEach((p, i)=>{
            if (i === 0) p0 = p;
            else {
                const [c0, c1] = getCtrlPoint(this.points, i - 1, a, b);
                const c = new Curve({
                    points: [
                        p0,
                        c0,
                        c1,
                        p
                    ],
                    type: Curve.CUBICBEZIER
                });
                points.pop();
                points.push(...c.getPoints(divisions));
                p0 = p;
            }
        });
        return points;
    }
    getPoints(divisions = this.divisions, a = 0.168, b = 0.168) {
        const type = this.type;
        if (type === QUADRATICBEZIER) return this._getQuadraticBezierPoints(divisions);
        if (type === CUBICBEZIER) return this._getCubicBezierPoints(divisions);
        if (type === Curve.CATMULLROM) return this._getCatmullRomPoints(divisions, a, b);
        return this.points;
    }
}
Curve.CATMULLROM = "catmullrom";
Curve.CUBICBEZIER = "cubicbezier";
Curve.QUADRATICBEZIER = "quadraticbezier";
Curve.CATMULLROM = CATMULLROM;
Curve.CUBICBEZIER = CUBICBEZIER;
Curve.QUADRATICBEZIER = QUADRATICBEZIER;

},{"../math/Vec3":"iLWkB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dj5jx":[function(require,module,exports) {
// TODO: Destroy render targets if size changed and exists
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Post", ()=>Post);
var _program = require("../core/Program");
var _mesh = require("../core/Mesh");
var _renderTarget = require("../core/RenderTarget");
var _triangle = require("./Triangle");
class Post {
    constructor(gl, { width , height , dpr , wrapS =gl.CLAMP_TO_EDGE , wrapT =gl.CLAMP_TO_EDGE , minFilter =gl.LINEAR , magFilter =gl.LINEAR , geometry =new (0, _triangle.Triangle)(gl) , targetOnly =null  } = {}){
        this.gl = gl;
        this.options = {
            wrapS,
            wrapT,
            minFilter,
            magFilter
        };
        this.passes = [];
        this.geometry = geometry;
        this.uniform = {
            value: null
        };
        this.targetOnly = targetOnly;
        const fbo = this.fbo = {
            read: null,
            write: null,
            swap: ()=>{
                let temp = fbo.read;
                fbo.read = fbo.write;
                fbo.write = temp;
            }
        };
        this.resize({
            width,
            height,
            dpr
        });
    }
    addPass({ vertex =defaultVertex , fragment =defaultFragment , uniforms ={} , textureUniform ="tMap" , enabled =true  } = {}) {
        uniforms[textureUniform] = {
            value: this.fbo.read.texture
        };
        const program = new (0, _program.Program)(this.gl, {
            vertex,
            fragment,
            uniforms
        });
        const mesh = new (0, _mesh.Mesh)(this.gl, {
            geometry: this.geometry,
            program
        });
        const pass = {
            mesh,
            program,
            uniforms,
            enabled,
            textureUniform
        };
        this.passes.push(pass);
        return pass;
    }
    resize({ width , height , dpr  } = {}) {
        if (dpr) this.dpr = dpr;
        if (width) {
            this.width = width;
            this.height = height || width;
        }
        dpr = this.dpr || this.gl.renderer.dpr;
        width = Math.floor((this.width || this.gl.renderer.width) * dpr);
        height = Math.floor((this.height || this.gl.renderer.height) * dpr);
        this.options.width = width;
        this.options.height = height;
        this.fbo.read = new (0, _renderTarget.RenderTarget)(this.gl, this.options);
        this.fbo.write = new (0, _renderTarget.RenderTarget)(this.gl, this.options);
    }
    // Uses same arguments as renderer.render, with addition of optional texture passed in to avoid scene render
    render({ scene =null , camera =null , texture =null , target =null , update =true , sort =true , frustumCull =true  }) {
        const enabledPasses = this.passes.filter((pass)=>pass.enabled);
        if (!texture) {
            this.gl.renderer.render({
                scene,
                camera,
                target: enabledPasses.length || !target && this.targetOnly ? this.fbo.write : target,
                update,
                sort,
                frustumCull
            });
            this.fbo.swap();
        }
        enabledPasses.forEach((pass, i)=>{
            pass.mesh.program.uniforms[pass.textureUniform].value = !i && texture ? texture : this.fbo.read.texture;
            this.gl.renderer.render({
                scene: pass.mesh,
                target: i === enabledPasses.length - 1 && (target || !this.targetOnly) ? target : this.fbo.write,
                clear: true
            });
            this.fbo.swap();
        });
        this.uniform.value = this.fbo.read.texture;
    }
}
const defaultVertex = /* glsl */ `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;
const defaultFragment = /* glsl */ `
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`;

},{"../core/Program":"lTypD","../core/Mesh":"99L4I","../core/RenderTarget":"7aAb6","./Triangle":"dQOfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2TwMh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Skin", ()=>Skin);
var _mesh = require("../core/Mesh");
var _transform = require("../core/Transform");
var _mat4 = require("../math/Mat4");
var _texture = require("../core/Texture");
var _animation = require("./Animation");
var _guards = require("../Guards");
const tempMat4 = new (0, _mat4.Mat4)();
class Skin extends (0, _mesh.Mesh) {
    constructor(gl, { rig , geometry , program , mode =gl.TRIANGLES  } = {}){
        super(gl, {
            geometry,
            program,
            mode
        });
        this.createBones(rig);
        this.createBoneTexture();
        this.animations = [];
        Object.assign(this.program.uniforms, {
            boneTexture: {
                value: this.boneTexture
            },
            boneTextureSize: {
                value: this.boneTextureSize
            }
        });
    }
    createBones(rig) {
        // Create root so that can simply update world matrix of whole skeleton
        this.root = new (0, _transform.Transform)();
        // Create bones
        this.bones = [];
        if (!rig.bones || !rig.bones.length) return;
        for(let i = 0; i < rig.bones.length; i++){
            const bone = new (0, _transform.Transform)();
            // Set initial values (bind pose)
            bone.position.fromArray(rig.bindPose.position, i * 3);
            bone.quaternion.fromArray(rig.bindPose.quaternion, i * 4);
            bone.scale.fromArray(rig.bindPose.scale, i * 3);
            this.bones.push(bone);
        }
        // Once created, set the hierarchy
        rig.bones.forEach((data, i)=>{
            this.bones[i].name = data.name;
            if (data.parent === -1) return this.bones[i].setParent(this.root);
            this.bones[i].setParent(this.bones[data.parent]);
        });
        // Then update to calculate world matrices
        this.root.updateMatrixWorld(true);
        // Store inverse of bind pose to calculate differences
        this.bones.forEach((bone)=>{
            bone.bindInverse = new (0, _mat4.Mat4)(...bone.worldMatrix).inverse();
        });
    }
    createBoneTexture() {
        if (!this.bones.length) return;
        const size = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(this.bones.length * 4)) / Math.LN2)));
        this.boneMatrices = new Float32Array(size * size * 4);
        this.boneTextureSize = size;
        this.boneTexture = new (0, _texture.Texture)(this.gl, {
            image: this.boneMatrices,
            generateMipmaps: false,
            type: this.gl.FLOAT,
            internalFormat: (0, _guards.isWebGl2)(this.gl) ? this.gl.RGBA32F : this.gl.RGBA,
            minFilter: this.gl.NEAREST,
            magFilter: this.gl.NEAREST,
            flipY: false,
            width: size
        });
    }
    addAnimation(data) {
        const animation = new (0, _animation.Animation)({
            objects: this.bones,
            data
        });
        this.animations.push(animation);
        return animation;
    }
    update() {
        // Calculate combined animation weight
        let total = 0;
        this.animations.forEach((animation)=>total += animation.weight);
        this.animations.forEach((animation, i)=>{
            // force first animation to set in order to reset frame
            animation.update(total, i === 0);
        });
    }
    draw({ camera  } = {}) {
        // Update world matrices manually, as not part of scene graph
        this.root.updateMatrixWorld(true);
        // Update bone texture
        this.bones.forEach((bone, i)=>{
            // Find difference between current and bind pose
            tempMat4.multiply(bone.worldMatrix, bone.bindInverse);
            this.boneMatrices.set(tempMat4, i * 16);
        });
        if (this.boneTexture) this.boneTexture.needsUpdate = true;
        super.draw({
            camera
        });
    }
}

},{"../core/Mesh":"99L4I","../core/Transform":"2123V","../math/Mat4":"2hzaT","../core/Texture":"cKaIX","./Animation":"abOzX","../Guards":"aXm3u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"abOzX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Animation", ()=>Animation);
var _vec3 = require("../math/Vec3");
var _quat = require("../math/Quat");
const prevPos = new (0, _vec3.Vec3)();
const prevRot = new (0, _quat.Quat)();
const prevScl = new (0, _vec3.Vec3)();
const nextPos = new (0, _vec3.Vec3)();
const nextRot = new (0, _quat.Quat)();
const nextScl = new (0, _vec3.Vec3)();
class Animation {
    constructor({ objects , data  }){
        this.objects = objects;
        this.data = data;
        this.elapsed = 0;
        this.weight = 1;
        this.duration = data.frames.length - 1;
    }
    update(totalWeight = 1, isSet) {
        const weight = isSet ? 1 : this.weight / totalWeight;
        const elapsed = this.elapsed % this.duration;
        const floorFrame = Math.floor(elapsed);
        const blend = elapsed - floorFrame;
        const prevKey = this.data.frames[floorFrame];
        const nextKey = this.data.frames[(floorFrame + 1) % this.duration];
        this.objects.forEach((object, i)=>{
            prevPos.fromArray(prevKey.position, i * 3);
            prevRot.fromArray(prevKey.quaternion, i * 4);
            prevScl.fromArray(prevKey.scale, i * 3);
            nextPos.fromArray(nextKey.position, i * 3);
            nextRot.fromArray(nextKey.quaternion, i * 4);
            nextScl.fromArray(nextKey.scale, i * 3);
            prevPos.lerp(nextPos, blend);
            prevRot.slerp(nextRot, blend);
            prevScl.lerp(nextScl, blend);
            object.position.lerp(prevPos, weight);
            object.quaternion.slerp(prevRot, weight);
            object.scale.lerp(prevScl, weight);
        });
    }
}

},{"../math/Vec3":"iLWkB","../math/Quat":"dWzbo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"33LVH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Text", ()=>Text);
function Text({ font , text , width =Infinity , align ="left" , size =1 , letterSpacing =0 , lineHeight =1.4 , wordSpacing =0 , wordBreak =false  }) {
    const _this = this;
    let glyphs, buffers;
    let fontHeight, baseline, scale;
    const newline = /\n/;
    const whitespace = /\s/;
    parseFont();
    createGeometry();
    function parseFont() {
        glyphs = {};
        font.chars.forEach((d)=>glyphs[d.char] = d);
    }
    function createGeometry() {
        fontHeight = font.common.lineHeight;
        baseline = font.common.base;
        // Use baseline so that actual text height is as close to 'size' value as possible
        scale = size / baseline;
        // Strip spaces and newlines to get actual character length for buffers
        let chars = text.replace(/[ \n]/g, "");
        let numChars = chars.length;
        // Create output buffers
        buffers = {
            position: new Float32Array(numChars * 12),
            uv: new Float32Array(numChars * 8),
            id: new Float32Array(numChars * 4),
            index: new Uint16Array(numChars * 6)
        };
        // Set values for buffers that don't require calculation
        for(let i = 0; i < numChars; i++){
            buffers.id[i] = i;
            buffers.index.set([
                i * 4,
                i * 4 + 2,
                i * 4 + 1,
                i * 4 + 1,
                i * 4 + 2,
                i * 4 + 3
            ], i * 6);
        }
        layout();
    }
    function layout() {
        const lines = [];
        let cursor = 0;
        let wordCursor = 0;
        let wordWidth = 0;
        let line = newLine();
        function newLine() {
            const line = {
                width: 0,
                glyphs: []
            };
            lines.push(line);
            wordCursor = cursor;
            wordWidth = 0;
            return line;
        }
        let maxTimes = 100;
        let count = 0;
        while(cursor < text.length && count < maxTimes){
            count++;
            const char = text[cursor];
            // Skip whitespace at start of line
            if (!line.width && whitespace.test(char)) {
                cursor++;
                wordCursor = cursor;
                wordWidth = 0;
                continue;
            }
            // If newline char, skip to next line
            if (newline.test(char)) {
                cursor++;
                line = newLine();
                continue;
            }
            const glyph = glyphs[char] || glyphs[" "];
            // Find any applicable kern pairs
            if (line.glyphs.length) {
                const prevGlyph = line.glyphs[line.glyphs.length - 1][0];
                let kern = getKernPairOffset(glyph.id, prevGlyph.id) * scale;
                line.width += kern;
                wordWidth += kern;
            }
            // add char to line
            line.glyphs.push([
                glyph,
                line.width
            ]);
            // calculate advance for next glyph
            let advance = 0;
            // If whitespace, update location of current word for line breaks
            if (whitespace.test(char)) {
                wordCursor = cursor;
                wordWidth = 0;
                // Add wordspacing
                advance += wordSpacing * size;
            } else // Add letterspacing
            advance += letterSpacing * size;
            advance += glyph.xadvance * scale;
            line.width += advance;
            wordWidth += advance;
            // If width defined
            if (line.width > width) {
                // If can break words, undo latest glyph if line not empty and create new line
                if (wordBreak && line.glyphs.length > 1) {
                    line.width -= advance;
                    line.glyphs.pop();
                    line = newLine();
                    continue;
                // If not first word, undo current word and cursor and create new line
                } else if (!wordBreak && wordWidth !== line.width) {
                    let numGlyphs = cursor - wordCursor + 1;
                    line.glyphs.splice(-numGlyphs, numGlyphs);
                    cursor = wordCursor;
                    line.width -= wordWidth;
                    line = newLine();
                    continue;
                }
            }
            cursor++;
            // Reset infinite loop catch
            count = 0;
        }
        // Remove last line if empty
        if (!line.width) lines.pop();
        populateBuffers(lines);
    }
    function populateBuffers(lines) {
        const texW = font.common.scaleW;
        const texH = font.common.scaleH;
        // For all fonts tested, a little offset was needed to be right on the baseline, hence 0.07.
        let y = 0.07 * size;
        let j = 0;
        for(let lineIndex = 0; lineIndex < lines.length; lineIndex++){
            let line = lines[lineIndex];
            for(let i = 0; i < line.glyphs.length; i++){
                const glyph = line.glyphs[i][0];
                let x = line.glyphs[i][1];
                if (align === "center") x -= line.width * 0.5;
                else if (align === "right") x -= line.width;
                // If space, don't add to geometry
                if (whitespace.test(glyph.char)) continue;
                // Apply char sprite offsets
                x += glyph.xoffset * scale;
                y -= glyph.yoffset * scale;
                // each letter is a quad. axis bottom left
                let w = glyph.width * scale;
                let h = glyph.height * scale;
                buffers.position.set([
                    x,
                    y - h,
                    0,
                    x,
                    y,
                    0,
                    x + w,
                    y - h,
                    0,
                    x + w,
                    y,
                    0
                ], j * 12);
                let u = glyph.x / texW;
                let uw = glyph.width / texW;
                let v = 1.0 - glyph.y / texH;
                let vh = glyph.height / texH;
                buffers.uv.set([
                    u,
                    v - vh,
                    u,
                    v,
                    u + uw,
                    v - vh,
                    u + uw,
                    v
                ], j * 8);
                // Reset cursor to baseline
                y += glyph.yoffset * scale;
                j++;
            }
            y -= size * lineHeight;
        }
        _this.buffers = buffers;
        _this.numLines = lines.length;
        _this.height = _this.numLines * size * lineHeight;
        _this.width = Math.max(...lines.map((line)=>line.width));
    }
    function getKernPairOffset(id1, id2) {
        for(let i = 0; i < font.kernings.length; i++){
            let k = font.kernings[i];
            if (k.first < id1) continue;
            if (k.second < id2) continue;
            if (k.first > id1) return 0;
            if (k.first === id1 && k.second > id2) return 0;
            return k.amount;
        }
        return 0;
    }
    // Update buffers to layout with new layout
    this.resize = function(options) {
        ({ width  } = options);
        layout();
    };
    // Completely change text (like creating new Text)
    this.update = function(options) {
        ({ text  } = options);
        createGeometry();
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cdarh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NormalProgram", ()=>NormalProgram) // export class NormalProgram extends Program {
 //     public gltfMaterial;
 //     constructor(gl: OGLRenderingContext, options: Partial<ProgramOptions> = {}) {
 //         super(gl, options);
 //     }
 // }
;
var _program = require("../core/Program");
const vertex = /* glsl */ `
    precision highp float;
    precision highp int;

    attribute vec3 position;
    attribute vec3 normal;

    uniform mat3 normalMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    varying vec3 vNormal;

    void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;
const fragment = /* glsl */ `
    precision highp float;
    precision highp int;

    varying vec3 vNormal;

    void main() {
        gl_FragColor.rgb = normalize(vNormal);
        gl_FragColor.a = 1.0;
    }
`;
function NormalProgram(gl) {
    return new (0, _program.Program)(gl, {
        vertex: vertex,
        fragment: fragment,
        cullFace: null
    });
}

},{"../core/Program":"lTypD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e9nuv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Flowmap", ()=>Flowmap);
var _renderTarget = require("../core/RenderTarget");
var _program = require("../core/Program");
var _mesh = require("../core/Mesh");
var _vec2 = require("../math/Vec2");
var _triangle = require("./Triangle");
class Flowmap {
    constructor(gl, { size =128 , falloff =0.3 , alpha =1 , dissipation =0.98 , type  } = {}){
        const _this = this;
        this.gl = gl;
        // output uniform containing render target textures
        this.uniform = {
            value: null
        };
        this.mask = {
            read: null,
            write: null,
            // Helper function to ping pong the render targets and update the uniform
            swap: ()=>{
                let temp = _this.mask.read;
                _this.mask.read = _this.mask.write;
                _this.mask.write = temp;
                _this.uniform.value = _this.mask.read.texture;
            }
        };
        createFBOs();
        this.aspect = 1;
        this.mouse = new (0, _vec2.Vec2)();
        this.velocity = new (0, _vec2.Vec2)();
        this.mesh = initProgram();
        function createFBOs() {
            // Requested type not supported, fall back to half float
            if (!type) type = gl.HALF_FLOAT || gl.renderer.extensions["OES_texture_half_float"].HALF_FLOAT_OES;
            let minFilter = (()=>{
                if (gl.renderer.isWebgl2) return gl.LINEAR;
                if (gl.renderer.extensions[`OES_texture_${type === gl.FLOAT ? "" : "half_"}float_linear`]) return gl.LINEAR;
                return gl.NEAREST;
            })();
            const options = {
                width: size,
                height: size,
                type: type,
                format: gl.RGBA,
                internalFormat: gl.renderer.isWebgl2 ? type === gl.FLOAT ? gl.RGBA32F : gl.RGBA16F : gl.RGBA,
                minFilter,
                depth: false
            };
            _this.mask.read = new (0, _renderTarget.RenderTarget)(gl, options);
            _this.mask.write = new (0, _renderTarget.RenderTarget)(gl, options);
            _this.mask.swap();
        }
        function initProgram() {
            return new (0, _mesh.Mesh)(gl, {
                // Triangle that includes -1 to 1 range for 'position', and 0 to 1 range for 'uv'.
                geometry: new (0, _triangle.Triangle)(gl),
                program: new (0, _program.Program)(gl, {
                    vertex,
                    fragment,
                    uniforms: {
                        tMap: _this.uniform,
                        uFalloff: {
                            value: falloff * 0.5
                        },
                        uAlpha: {
                            value: alpha
                        },
                        uDissipation: {
                            value: dissipation
                        },
                        // User needs to update these
                        uAspect: {
                            value: 1
                        },
                        uMouse: {
                            value: _this.mouse
                        },
                        uVelocity: {
                            value: _this.velocity
                        }
                    },
                    depthTest: false
                })
            });
        }
    }
    update() {
        this.mesh.program.uniforms.uAspect.value = this.aspect;
        this.gl.renderer.render({
            scene: this.mesh,
            target: this.mask.write,
            clear: false
        });
        this.mask.swap();
    }
}
const vertex = /* glsl */ `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;
const fragment = /* glsl */ `
    precision highp float;

    uniform sampler2D tMap;

    uniform float uFalloff;
    uniform float uAlpha;
    uniform float uDissipation;
    
    uniform float uAspect;
    uniform vec2 uMouse;
    uniform vec2 uVelocity;

    varying vec2 vUv;

    void main() {
        vec4 color = texture2D(tMap, vUv) * uDissipation;

        vec2 cursor = vUv - uMouse;
        cursor.x *= uAspect;

        vec3 stamp = vec3(uVelocity * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));
        float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;

        color.rgb = mix(color.rgb, stamp, vec3(falloff));

        gl_FragColor = color;
    }
`;

},{"../core/RenderTarget":"7aAb6","../core/Program":"lTypD","../core/Mesh":"99L4I","../math/Vec2":"bzxgo","./Triangle":"dQOfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iG9iu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GPGPU", ()=>GPGPU);
var _program = require("../core/Program");
var _mesh = require("../core/Mesh");
var _texture = require("../core/Texture");
var _renderTarget = require("../core/RenderTarget");
var _triangle = require("./Triangle");
class GPGPU {
    constructor(gl, { // Always pass in array of vec4s (RGBA values within texture)
    data =new Float32Array(16) , geometry =new (0, _triangle.Triangle)(gl) , type =null  }){
        this.gl = gl;
        const initialData = data;
        this.passes = [];
        this.geometry = geometry;
        this.dataLength = initialData.length / 4;
        // Windows and iOS only like power of 2 textures
        // Find smallest PO2 that fits data
        this.size = Math.pow(2, Math.ceil(Math.log(Math.ceil(Math.sqrt(this.dataLength))) / Math.LN2));
        // Create coords for output texture
        this.coords = new Float32Array(this.dataLength * 2);
        for(let i = 0; i < this.dataLength; i++){
            const x = i % this.size / this.size; // to add 0.5 to be center pixel ?
            const y = Math.floor(i / this.size) / this.size;
            this.coords.set([
                x,
                y
            ], i * 2);
        }
        // Use original data if already correct length of PO2 texture, else copy to new array of correct length
        const floatArray = (()=>{
            if (initialData.length === this.size * this.size * 4) return initialData;
            else {
                const a = new Float32Array(this.size * this.size * 4);
                a.set(initialData);
                return a;
            }
        })();
        // Create output texture uniform using input float texture with initial data
        this.uniform = {
            value: new (0, _texture.Texture)(gl, {
                image: floatArray,
                target: gl.TEXTURE_2D,
                type: gl.FLOAT,
                format: gl.RGBA,
                internalFormat: gl.renderer.isWebgl2 ? gl.RGBA32F : gl.RGBA,
                wrapS: gl.CLAMP_TO_EDGE,
                wrapT: gl.CLAMP_TO_EDGE,
                generateMipmaps: false,
                minFilter: gl.NEAREST,
                magFilter: gl.NEAREST,
                width: this.size,
                flipY: false
            })
        };
        // Create FBOs
        const options = {
            width: this.size,
            height: this.size,
            type: type || gl.HALF_FLOAT || gl.renderer.extensions["OES_texture_half_float"].HALF_FLOAT_OES,
            format: gl.RGBA,
            internalFormat: gl.renderer.isWebgl2 ? type === gl.FLOAT ? gl.RGBA32F : gl.RGBA16F : gl.RGBA,
            minFilter: gl.NEAREST,
            depth: false,
            unpackAlignment: 1
        };
        this.fbo = {
            read: new (0, _renderTarget.RenderTarget)(gl, options),
            write: new (0, _renderTarget.RenderTarget)(gl, options),
            swap: ()=>{
                let temp = this.fbo.read;
                this.fbo.read = this.fbo.write;
                this.fbo.write = temp;
                this.uniform.value = this.fbo.read.texture;
            }
        };
    }
    addPass({ vertex =defaultVertex , fragment =defaultFragment , uniforms ={} , textureUniform ="tMap" , enabled =true  } = {}) {
        uniforms[textureUniform] = this.uniform;
        const program = new (0, _program.Program)(this.gl, {
            vertex,
            fragment,
            uniforms
        });
        const mesh = new (0, _mesh.Mesh)(this.gl, {
            geometry: this.geometry,
            program
        });
        const pass = {
            mesh,
            program,
            uniforms,
            enabled,
            textureUniform
        };
        this.passes.push(pass);
        return pass;
    }
    render() {
        const enabledPasses = this.passes.filter((pass)=>pass.enabled);
        enabledPasses.forEach((pass, i)=>{
            this.gl.renderer.render({
                scene: pass.mesh,
                target: this.fbo.write,
                clear: false
            });
            this.fbo.swap();
        });
    }
}
const defaultVertex = /* glsl */ `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;
const defaultFragment = /* glsl */ `
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`;

},{"../core/Program":"lTypD","../core/Mesh":"99L4I","../core/Texture":"cKaIX","../core/RenderTarget":"7aAb6","./Triangle":"dQOfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ad3Ys":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Polyline", ()=>Polyline);
var _geometry = require("../core/Geometry");
var _program = require("../core/Program");
var _mesh = require("../core/Mesh");
var _vec2 = require("../math/Vec2");
var _vec3 = require("../math/Vec3");
var _color = require("../math/Color");
const tmp = new (0, _vec3.Vec3)();
class Polyline {
    constructor(gl, { points , vertex =defaultVertex , fragment =defaultFragment , uniforms ={} , attributes ={}  }){
        this.gl = gl;
        this.points = points;
        this.count = points.length;
        // Create buffers
        this.position = new Float32Array(this.count * 6);
        this.prev = new Float32Array(this.count * 6);
        this.next = new Float32Array(this.count * 6);
        const side = new Float32Array(this.count * 2);
        const uv = new Float32Array(this.count * 4);
        const index = new Uint16Array((this.count - 1) * 6);
        // Set static buffers
        for(let i = 0; i < this.count; i++){
            side.set([
                -1,
                1
            ], i * 2);
            const v = i / (this.count - 1);
            uv.set([
                0,
                v,
                1,
                v
            ], i * 4);
            if (i === this.count - 1) continue;
            const ind = i * 2;
            index.set([
                ind + 0,
                ind + 1,
                ind + 2
            ], (ind + 0) * 3);
            index.set([
                ind + 2,
                ind + 1,
                ind + 3
            ], (ind + 1) * 3);
        }
        const geometry = this.geometry = new (0, _geometry.Geometry)(gl, Object.assign(attributes, {
            position: {
                size: 3,
                data: this.position
            },
            prev: {
                size: 3,
                data: this.prev
            },
            next: {
                size: 3,
                data: this.next
            },
            side: {
                size: 1,
                data: side
            },
            uv: {
                size: 2,
                data: uv
            },
            index: {
                size: 1,
                data: index
            }
        }));
        // Populate dynamic buffers
        this.updateGeometry();
        if (!uniforms.uResolution) this.resolution = uniforms.uResolution = {
            value: new (0, _vec2.Vec2)()
        };
        if (!uniforms.uDPR) this.dpr = uniforms.uDPR = {
            value: 1
        };
        if (!uniforms.uThickness) this.thickness = uniforms.uThickness = {
            value: 1
        };
        if (!uniforms.uColor) this.color = uniforms.uColor = {
            value: new (0, _color.Color)("#000")
        };
        if (!uniforms.uMiter) this.miter = uniforms.uMiter = {
            value: 1
        };
        // Set size uniforms' values
        this.resize();
        const program = this.program = new (0, _program.Program)(gl, {
            vertex,
            fragment,
            uniforms
        });
        this.mesh = new (0, _mesh.Mesh)(gl, {
            geometry,
            program
        });
    }
    updateGeometry() {
        this.points.forEach((p, i)=>{
            p.toArray(this.position, i * 6);
            p.toArray(this.position, i * 6 + 3);
            if (!i) {
                // If first point, calculate prev using the distance to 2nd point
                tmp.copy(p).sub(this.points[i + 1]).add(p);
                tmp.toArray(this.prev, i * 6);
                tmp.toArray(this.prev, i * 6 + 3);
            } else {
                p.toArray(this.next, (i - 1) * 6);
                p.toArray(this.next, (i - 1) * 6 + 3);
            }
            if (i === this.points.length - 1) {
                // If last point, calculate next using distance to 2nd last point
                tmp.copy(p).sub(this.points[i - 1]).add(p);
                tmp.toArray(this.next, i * 6);
                tmp.toArray(this.next, i * 6 + 3);
            } else {
                p.toArray(this.prev, (i + 1) * 6);
                p.toArray(this.prev, (i + 1) * 6 + 3);
            }
        });
        this.geometry.attributes.position.needsUpdate = true;
        this.geometry.attributes.prev.needsUpdate = true;
        this.geometry.attributes.next.needsUpdate = true;
    }
    // Only need to call if not handling resolution uniforms manually
    resize() {
        // Update automatic uniforms if not overridden
        if (this.resolution) this.resolution.value.set(this.gl.canvas.width, this.gl.canvas.height);
        if (this.dpr) this.dpr.value = this.gl.renderer.dpr;
    }
}
const defaultVertex = /* glsl */ `
    precision highp float;

    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;
    uniform float uMiter;

    varying vec2 vUv;

    vec4 getPosition() {
        mat4 mvp = projectionMatrix * modelViewMatrix;
        vec4 current = mvp * vec4(position, 1);
        vec4 nextPos = mvp * vec4(next, 1);
        vec4 prevPos = mvp * vec4(prev, 1);

        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    
        vec2 currentScreen = current.xy / current.w * aspect;
        vec2 nextScreen = nextPos.xy / nextPos.w * aspect;
        vec2 prevScreen = prevPos.xy / prevPos.w * aspect;
    
        vec2 dir1 = normalize(currentScreen - prevScreen);
        vec2 dir2 = normalize(nextScreen - currentScreen);
        vec2 dir = normalize(dir1 + dir2);
    
        vec2 normal = vec2(-dir.y, dir.x);
        normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);
        normal /= aspect;

        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;
    
        return current;
    }

    void main() {
        vUv = uv;
        gl_Position = getPosition();
    }
`;
const defaultFragment = /* glsl */ `
    precision highp float;

    uniform vec3 uColor;
    
    varying vec2 vUv;

    void main() {
        gl_FragColor.rgb = uColor;
        gl_FragColor.a = 1.0;
    }
`;

},{"../core/Geometry":"dD7Rh","../core/Program":"lTypD","../core/Mesh":"99L4I","../math/Vec2":"bzxgo","../math/Vec3":"iLWkB","../math/Color":"2kRYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6JM11":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Shadow", ()=>Shadow);
var _camera = require("../core/Camera");
var _program = require("../core/Program");
var _renderTarget = require("../core/RenderTarget");
class Shadow {
    constructor(gl, { light =new (0, _camera.Camera)(gl) , width =1024 , height =width  }){
        this.gl = gl;
        this.light = light;
        this.target = new (0, _renderTarget.RenderTarget)(gl, {
            width,
            height
        });
        this.depthProgram = new (0, _program.Program)(gl, {
            vertex: defaultVertex,
            fragment: defaultFragment,
            cullFace: null
        });
        this.castMeshes = [];
    }
    add({ mesh , receive =true , cast =true , vertex =defaultVertex , fragment =defaultFragment , uniformProjection ="shadowProjectionMatrix" , uniformView ="shadowViewMatrix" , uniformTexture ="tShadow"  }) {
        // Add uniforms to existing program
        if (receive && !mesh.program.uniforms[uniformProjection]) {
            mesh.program.uniforms[uniformProjection] = {
                value: this.light.projectionMatrix
            };
            mesh.program.uniforms[uniformView] = {
                value: this.light.viewMatrix
            };
            mesh.program.uniforms[uniformTexture] = {
                value: this.target.texture
            };
        }
        if (!cast) return;
        this.castMeshes.push(mesh);
        // Store program for when switching between depth override
        mesh.colorProgram = mesh.program;
        // Check if depth program already attached
        if (mesh.depthProgram) return;
        // Use global depth override if nothing custom passed in
        if (vertex === defaultVertex && fragment === defaultFragment) {
            mesh.depthProgram = this.depthProgram;
            return;
        }
        // Create custom override program
        mesh.depthProgram = new (0, _program.Program)(this.gl, {
            vertex,
            fragment,
            cullFace: null
        });
    }
    render({ scene  }) {
        // For depth render, replace program with depth override.
        // Hide meshes not casting shadows.
        scene.traverse((node)=>{
            if (!node.draw) return;
            if (!!~this.castMeshes.indexOf(node)) node.program = node.depthProgram;
            else {
                node.isForceVisibility = node.visible;
                node.visible = false;
            }
        });
        // Render the depth shadow map using the light as the camera
        this.gl.renderer.render({
            scene,
            camera: this.light,
            target: this.target
        });
        // Then switch the program back to the normal one
        scene.traverse((node)=>{
            if (!node.draw) return;
            if (!!~this.castMeshes.indexOf(node)) node.program = node.colorProgram;
            else node.visible = node.isForceVisibility;
        });
    }
}
const defaultVertex = /* glsl */ `
    attribute vec3 position;
    attribute vec2 uv;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;
const defaultFragment = /* glsl */ `
    precision highp float;

    vec4 packRGBA (float v) {
        vec4 pack = fract(vec4(1.0, 255.0, 65025.0, 16581375.0) * v);
        pack -= pack.yzww * vec2(1.0 / 255.0, 0.0).xxxy;
        return pack;
    }

    void main() {
        gl_FragColor = packRGBA(gl_FragCoord.z);
    }
`;

},{"../core/Camera":"cFVhr","../core/Program":"lTypD","../core/RenderTarget":"7aAb6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBe6g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KTXTexture", ()=>KTXTexture);
var _texture = require("../core/Texture");
class KTXTexture extends (0, _texture.Texture) {
    constructor(gl, { buffer , wrapS =gl.CLAMP_TO_EDGE , wrapT =gl.CLAMP_TO_EDGE , anisotropy =0 , minFilter , magFilter  } = {}){
        super(gl, {
            generateMipmaps: false,
            wrapS,
            wrapT,
            anisotropy,
            minFilter,
            magFilter
        });
        if (buffer) this.parseBuffer(buffer);
    }
    parseBuffer(buffer) {
        const ktx = new KhronosTextureContainer(buffer);
        ktx.mipmaps.isCompressedTexture = true;
        // Update texture
        this.image = ktx.mipmaps;
        this.internalFormat = ktx.glInternalFormat;
        if (ktx.numberOfMipmapLevels > 1) {
            if (this.minFilter === this.gl.LINEAR) this.minFilter = this.gl.NEAREST_MIPMAP_LINEAR;
        } else if (this.minFilter === this.gl.NEAREST_MIPMAP_LINEAR) this.minFilter = this.gl.LINEAR;
    // TODO: support cube maps
    // ktx.numberOfFaces
    }
}
class KhronosTextureContainer {
    constructor(buffer){
        const idCheck = [
            0xab,
            0x4b,
            0x54,
            0x58,
            0x20,
            0x31,
            0x31,
            0xbb,
            0x0d,
            0x0a,
            0x1a,
            0x0a
        ];
        const id = new Uint8Array(buffer, 0, 12);
        for(let i = 0; i < id.length; i++)if (id[i] !== idCheck[i]) {
            console.error("File missing KTX identifier");
            return;
        }
        // TODO: Is this always 4? Tested: [android, macos]
        const size = Uint32Array.BYTES_PER_ELEMENT;
        const head = new DataView(buffer, 12, 13 * size);
        const littleEndian = head.getUint32(0, true) === 0x04030201;
        const glType = head.getUint32(1 * size, littleEndian);
        if (glType !== 0) {
            console.warn("only compressed formats currently supported");
            return;
        }
        this.glInternalFormat = head.getUint32(4 * size, littleEndian);
        let width = head.getUint32(6 * size, littleEndian);
        let height = head.getUint32(7 * size, littleEndian);
        this.numberOfFaces = head.getUint32(10 * size, littleEndian);
        this.numberOfMipmapLevels = Math.max(1, head.getUint32(11 * size, littleEndian));
        const bytesOfKeyValueData = head.getUint32(12 * size, littleEndian);
        this.mipmaps = [];
        let offset = 64 + bytesOfKeyValueData;
        for(let level = 0; level < this.numberOfMipmapLevels; level++){
            const levelSize = new Int32Array(buffer, offset, 1)[0]; // size per face, since not supporting array cubemaps
            offset += 4; // levelSize field
            for(let face = 0; face < this.numberOfFaces; face++){
                const data = new Uint8Array(buffer, offset, levelSize);
                this.mipmaps.push({
                    data,
                    width,
                    height
                });
                offset += levelSize;
                offset += 3 - (levelSize + 3) % 4; // add padding for odd sized image
            }
            width = width >> 1;
            height = height >> 1;
        }
    }
}

},{"../core/Texture":"cKaIX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jWhTZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TextureLoader", ()=>TextureLoader);
var _texture = require("../core/Texture");
var _ktxtexture = require("./KTXTexture");
// For compressed textures, generate using https://github.com/TimvanScherpenzeel/texture-compressor
let cache = {};
const supportedExtensions = [];
class TextureLoader {
    static load(gl, { src , // {
    //     pvrtc: '...ktx',
    //     s3tc: '...ktx',
    //     etc: '...ktx',
    //     etc1: '...ktx',
    //     astc: '...ktx',
    //     webp: '...webp',
    //     jpg: '...jpg',
    //     png: '...png',
    // }
    // Only props relevant to KTXTexture
    wrapS =gl.CLAMP_TO_EDGE , wrapT =gl.CLAMP_TO_EDGE , anisotropy =0 , // For regular images
    format =gl.RGBA , internalFormat =format , generateMipmaps =true , minFilter =generateMipmaps ? gl.NEAREST_MIPMAP_LINEAR : gl.LINEAR , magFilter =gl.LINEAR , premultiplyAlpha =false , unpackAlignment =4 , flipY =true  } = {}) {
        const support = TextureLoader.getSupportedExtensions(gl);
        let ext = "none";
        // If src is string, determine which format from the extension
        if (typeof src === "string") ext = src.split(".").pop().split("?")[0].toLowerCase();
        // If src is object, use supported extensions and provided list to choose best option
        // Get first supported match, so put in order of preference
        if (typeof src === "object") {
            for(const prop in src)if (support.includes(prop.toLowerCase())) {
                ext = prop.toLowerCase();
                src = src[prop];
                break;
            }
        }
        // Stringify props
        const cacheID = String(src) + wrapS + wrapT + anisotropy + format + internalFormat + generateMipmaps + minFilter + magFilter + premultiplyAlpha + unpackAlignment + flipY + gl.renderer.id;
        // Check cache for existing texture
        if (cache[cacheID]) return cache[cacheID];
        let texture;
        switch(ext){
            case "ktx":
            case "pvrtc":
            case "s3tc":
            case "etc":
            case "etc1":
            case "astc":
                // Load compressed texture using KTX format
                texture = new (0, _ktxtexture.KTXTexture)(gl, {
                    src: src,
                    wrapS,
                    wrapT,
                    anisotropy,
                    minFilter,
                    magFilter
                });
                texture.loaded = this.loadKTX(src, texture);
                break;
            case "webp":
            case "jpg":
            case "jpeg":
            case "png":
                texture = new (0, _texture.Texture)(gl, {
                    wrapS,
                    wrapT,
                    anisotropy,
                    format,
                    internalFormat,
                    generateMipmaps,
                    minFilter,
                    magFilter,
                    premultiplyAlpha,
                    unpackAlignment,
                    flipY
                });
                texture.loaded = this.loadImage(gl, src, texture);
                break;
            default:
                console.warn("No supported format supplied");
                texture = new (0, _texture.Texture)(gl);
        }
        texture.ext = ext;
        cache[cacheID] = texture;
        return texture;
    }
    static getSupportedExtensions(gl) {
        if (supportedExtensions.length) return supportedExtensions;
        const extensions = {
            pvrtc: gl.renderer.getExtension("WEBGL_compressed_texture_pvrtc") || gl.renderer.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
            s3tc: gl.renderer.getExtension("WEBGL_compressed_texture_s3tc") || gl.renderer.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || gl.renderer.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),
            etc: gl.renderer.getExtension("WEBGL_compressed_texture_etc"),
            etc1: gl.renderer.getExtension("WEBGL_compressed_texture_etc1"),
            astc: gl.renderer.getExtension("WEBGL_compressed_texture_astc")
        };
        for(const ext in extensions)if (extensions[ext]) supportedExtensions.push(ext);
        // Check for WebP support
        if (detectWebP) supportedExtensions.push("webp");
        // Formats supported by all
        supportedExtensions.push("png", "jpg");
        return supportedExtensions;
    }
    static loadKTX(src, texture) {
        return fetch(src).then((res)=>res.arrayBuffer()).then((buffer)=>texture.parseBuffer(buffer));
    }
    static loadImage(gl, src, texture) {
        return decodeImage(src).then((imgBmp)=>{
            // Catch non POT textures and update params to avoid errors
            if (!powerOfTwo(imgBmp.width) || !powerOfTwo(imgBmp.height)) {
                if (texture.generateMipmaps) texture.generateMipmaps = false;
                if (texture.minFilter === gl.NEAREST_MIPMAP_LINEAR) texture.minFilter = gl.LINEAR;
                if (texture.wrapS === gl.REPEAT) texture.wrapS = texture.wrapT = gl.CLAMP_TO_EDGE;
            }
            texture.image = imgBmp;
            // For createImageBitmap, close once uploaded
            texture.onUpdate = ()=>{
                if (imgBmp.close) imgBmp.close();
                texture.onUpdate = null;
            };
            return imgBmp;
        });
    }
    static clearCache() {
        cache = {};
    }
}
function detectWebP() {
    return document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp") == 0;
}
function powerOfTwo(value) {
    return Math.log2(value) % 1 === 0;
}
function decodeImage(src) {
    return new Promise((resolve)=>{
        const img = new Image();
        img.crossOrigin = "";
        img.src = src;
        // Only chrome's implementation of createImageBitmap is fully supported
        // const isChrome = navigator.userAgent.toLowerCase().includes('chrome');
        // if (!!window.createImageBitmap && isChrome) {
        //     img.onload = () => {
        //         createImageBitmap(img, {
        //             imageOrientation: 'flipY',
        //             premultiplyAlpha: 'none',
        //         }).then(imgBmp => {
        //             resolve(imgBmp);
        //         });
        //     };
        // } else {
        img.onload = ()=>resolve(img);
    // }
    });
}

},{"../core/Texture":"cKaIX","./KTXTexture":"hBe6g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dUwqK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GLTFLoader", ()=>GLTFLoader);
var _geometry = require("../core/Geometry");
var _transform = require("../core/Transform");
var _texture = require("../core/Texture");
var _mesh = require("../core/Mesh");
var _gltfanimation = require("./GLTFAnimation");
var _gltfskin = require("./GLTFSkin");
var _mat4 = require("../math/Mat4");
var _normalProgram = require("./NormalProgram");
// Supports
// [x] Geometry
// [ ] Sparse support
// [x] Nodes and Hierarchy
// [x] Instancing
// [ ] Morph Targets
// [x] Skins
// [ ] Materials
// [x] Textures
// [x] Animation
// [ ] Cameras
// [ ] Extensions
// [x] GLB support
// TODO: Sparse accessor packing? For morph targets basically
// TODO: init accessor missing bufferView with 0s
// TODO: morph target animations
// TODO: what to do if multiple instances are in different groups? Only uses local matrices
// TODO: what if instancing isn't wanted? Eg collision maps
// TODO: ie11 fallback for TextDecoder?
const TYPE_ARRAY = {
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
    "image/jpeg": Uint8Array,
    "image/png": Uint8Array
};
const TYPE_SIZE = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
};
const ATTRIBUTES = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
};
const TRANSFORMS = {
    translation: "position",
    rotation: "quaternion",
    scale: "scale"
};
class GLTFLoader {
    static async load(gl, src) {
        const dir = src.split("/").slice(0, -1).join("/") + "/";
        // load main description json
        const desc = await this.parseDesc(src);
        return await this.parse(gl, desc, dir);
    }
    static async parse(gl, desc, dir) {
        if (desc.asset === undefined || desc.asset.version[0] < 2) console.warn("Only GLTF >=2.0 supported. Attempting to parse.");
        // Load buffers async
        const buffers = await this.loadBuffers(desc, dir);
        // Unbind current VAO so that new buffers don't get added to active mesh
        gl.renderer.bindVertexArray(null);
        // Create gl buffers from bufferViews
        const bufferViews = this.parseBufferViews(gl, desc, buffers);
        // Create images from either bufferViews or separate image files
        const images = this.parseImages(gl, desc, dir, bufferViews);
        const textures = this.parseTextures(gl, desc, images);
        // Just pass through material data for now
        const materials = this.parseMaterials(gl, desc, textures);
        // Fetch the inverse bind matrices for skeleton joints
        const skins = this.parseSkins(gl, desc, bufferViews);
        // Create geometries for each mesh primitive
        const meshes = this.parseMeshes(gl, desc, bufferViews, materials, skins);
        // Create transforms, meshes and hierarchy
        const nodes = this.parseNodes(gl, desc, meshes, skins);
        // Place nodes in skeletons
        this.populateSkins(skins, nodes);
        // Create animation handlers
        const animations = this.parseAnimations(gl, desc, nodes, bufferViews);
        // Get top level nodes for each scene
        const scenes = this.parseScenes(desc, nodes);
        const scene = scenes[desc.scene];
        // Remove null nodes (instanced transforms)
        for(let i = nodes.length; i >= 0; i--)if (!nodes[i]) nodes.splice(i, 1);
        return {
            json: desc,
            buffers,
            bufferViews,
            images,
            textures,
            materials,
            meshes,
            nodes,
            animations,
            scenes,
            scene
        };
    }
    static async parseDesc(src) {
        if (!src.match(/\.glb/)) return await fetch(src).then((res)=>res.json());
        else return await fetch(src).then((res)=>res.arrayBuffer()).then((glb)=>this.unpackGLB(glb));
    }
    // From https://github.com/donmccurdy/glTF-Transform/blob/e4108cc/packages/core/src/io/io.ts#L32
    static unpackGLB(glb) {
        // Decode and verify GLB header.
        const header = new Uint32Array(glb, 0, 3);
        if (header[0] !== 0x46546c67) throw new Error("Invalid glTF asset.");
        else if (header[1] !== 2) throw new Error(`Unsupported glTF binary version, "${header[1]}".`);
        // Decode and verify chunk headers.
        const jsonChunkHeader = new Uint32Array(glb, 12, 2);
        const jsonByteOffset = 20;
        const jsonByteLength = jsonChunkHeader[0];
        if (jsonChunkHeader[1] !== 0x4e4f534a) throw new Error("Unexpected GLB layout.");
        // Decode JSON.
        const jsonText = new TextDecoder().decode(glb.slice(jsonByteOffset, jsonByteOffset + jsonByteLength));
        const json = JSON.parse(jsonText);
        // JSON only
        if (jsonByteOffset + jsonByteLength === glb.byteLength) return json;
        const binaryChunkHeader = new Uint32Array(glb, jsonByteOffset + jsonByteLength, 2);
        if (binaryChunkHeader[1] !== 0x004e4942) throw new Error("Unexpected GLB layout.");
        // Decode content.
        const binaryByteOffset = jsonByteOffset + jsonByteLength + 8;
        const binaryByteLength = binaryChunkHeader[0];
        const binary = glb.slice(binaryByteOffset, binaryByteOffset + binaryByteLength);
        // Attach binary to buffer
        json.buffers[0].binary = binary;
        return json;
    }
    // Threejs GLTF Loader https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/GLTFLoader.js#L1085
    static resolveURI(uri, dir) {
        // Invalid URI
        if (typeof uri !== "string" || uri === "") return "";
        // Host Relative URI
        if (/^https?:\/\//i.test(dir) && /^\//.test(uri)) dir = dir.replace(/(^https?:\/\/[^\/]+).*/i, "$1");
        // Absolute URI http://, https://, //
        if (/^(https?:)?\/\//i.test(uri)) return uri;
        // Data URI
        if (/^data:.*,.*$/i.test(uri)) return uri;
        // Blob URI
        if (/^blob:.*$/i.test(uri)) return uri;
        // Relative URI
        return dir + uri;
    }
    static async loadBuffers(desc, dir) {
        if (!desc.buffers) return null;
        return await Promise.all(desc.buffers.map((buffer)=>{
            // For GLB, binary buffer ready to go
            if (buffer.binary) return buffer.binary;
            const uri = this.resolveURI(buffer.uri, dir);
            return fetch(uri).then((res)=>res.arrayBuffer());
        }));
    }
    static parseBufferViews(gl, desc, buffers) {
        if (!desc.bufferViews) return null;
        // Clone to leave description pure
        const bufferViews = desc.bufferViews.map((o)=>Object.assign({}, o));
        desc.meshes && desc.meshes.forEach(({ primitives  })=>{
            primitives.forEach(({ attributes , indices  })=>{
                // Flag bufferView as an attribute, so it knows to create a gl buffer
                for(let attr in attributes)bufferViews[desc.accessors[attributes[attr]].bufferView].isAttribute = true;
                if (indices === undefined) return;
                bufferViews[desc.accessors[indices].bufferView].isAttribute = true;
                // Make sure indices bufferView have a target property for gl buffer binding
                bufferViews[desc.accessors[indices].bufferView].target = gl.ELEMENT_ARRAY_BUFFER;
            });
        });
        // Get componentType of each bufferView from the accessors
        desc.accessors.forEach(({ bufferView: i , componentType  })=>{
            bufferViews[i].componentType = componentType;
        });
        // Get mimetype of bufferView from images
        desc.images && desc.images.forEach(({ uri , bufferView: i , mimeType  })=>{
            if (i === undefined) return;
            bufferViews[i].mimeType = mimeType;
        });
        // Push each bufferView to the GPU as a separate buffer
        bufferViews.forEach(({ buffer: bufferIndex , byteOffset =0 , byteLength , byteStride , target =gl.ARRAY_BUFFER , name , extensions , extras , componentType , mimeType , isAttribute  }, i)=>{
            const TypeArray = TYPE_ARRAY[componentType || mimeType];
            const elementBytes = TypeArray.BYTES_PER_ELEMENT;
            const data = new TypeArray(buffers[bufferIndex], byteOffset, byteLength / elementBytes);
            bufferViews[i].data = data;
            bufferViews[i].originalBuffer = buffers[bufferIndex];
            if (!isAttribute) return;
            // Create gl buffers for the bufferView, pushing it to the GPU
            const buffer = gl.createBuffer();
            gl.bindBuffer(target, buffer);
            gl.renderer.state.boundBuffer = buffer;
            gl.bufferData(target, data, gl.STATIC_DRAW);
            bufferViews[i].buffer = buffer;
        });
        return bufferViews;
    }
    static parseImages(gl, desc, dir, bufferViews) {
        if (!desc.images) return null;
        return desc.images.map(({ uri , bufferView: bufferViewIndex , mimeType , name  })=>{
            const image = new Image();
            image.name = name;
            if (uri) image.src = this.resolveURI(uri, dir);
            else if (bufferViewIndex !== undefined) {
                const { data  } = bufferViews[bufferViewIndex];
                const blob = new Blob([
                    data
                ], {
                    type: mimeType
                });
                image.src = URL.createObjectURL(blob);
            }
            image.ready = new Promise((res)=>{
                image.onload = ()=>res();
            });
            return image;
        });
    }
    static parseTextures(gl, desc, images) {
        if (!desc.textures) return null;
        return desc.textures.map(({ sampler: samplerIndex , source: sourceIndex , name , extensions , extras  })=>{
            const options = {
                flipY: false,
                wrapS: gl.REPEAT,
                wrapT: gl.REPEAT
            };
            const sampler = samplerIndex !== undefined ? desc.samplers[samplerIndex] : null;
            if (sampler) [
                "magFilter",
                "minFilter",
                "wrapS",
                "wrapT"
            ].forEach((prop)=>{
                if (sampler[prop]) options[prop] = sampler[prop];
            });
            const texture = new (0, _texture.Texture)(gl, options);
            texture.name = name;
            const image = images[sourceIndex];
            image.ready.then(()=>texture.image = image);
            return texture;
        });
    }
    static parseMaterials(gl, desc, textures) {
        if (!desc.materials) return null;
        return desc.materials.map(({ name , extensions , extras , pbrMetallicRoughness ={} , normalTexture , occlusionTexture , emissiveTexture , emissiveFactor =[
            0,
            0,
            0
        ] , alphaMode ="OPAQUE" , alphaCutoff =0.5 , doubleSided =false  })=>{
            const { baseColorFactor =[
                1,
                1,
                1,
                1
            ] , baseColorTexture , metallicFactor =1 , roughnessFactor =1 , metallicRoughnessTexture  } = pbrMetallicRoughness;
            if (baseColorTexture) baseColorTexture.texture = textures[baseColorTexture.index];
            if (normalTexture) normalTexture.texture = textures[normalTexture.index];
            if (metallicRoughnessTexture) metallicRoughnessTexture.texture = textures[metallicRoughnessTexture.index];
            if (occlusionTexture) occlusionTexture.texture = textures[occlusionTexture.index];
            if (emissiveTexture) emissiveTexture.texture = textures[emissiveTexture.index];
            return {
                name,
                baseColorFactor,
                baseColorTexture,
                metallicFactor,
                roughnessFactor,
                metallicRoughnessTexture,
                normalTexture,
                occlusionTexture,
                emissiveTexture,
                emissiveFactor,
                alphaMode,
                alphaCutoff,
                doubleSided
            };
        });
    }
    static parseSkins(gl, desc, bufferViews) {
        if (!desc.skins) return null;
        return desc.skins.map(({ inverseBindMatrices , skeleton , joints  })=>{
            return {
                inverseBindMatrices: this.parseAccessor(inverseBindMatrices, desc, bufferViews),
                skeleton,
                joints
            };
        });
    }
    static parseMeshes(gl, desc, bufferViews, materials, skins) {
        if (!desc.meshes) return null;
        return desc.meshes.map(({ primitives , weights , name , extensions , extras  }, meshIndex)=>{
            // TODO: weights stuff ?
            // Parse through nodes to see how many instances there are
            // and if there is a skin attached
            let numInstances = 0;
            let skinIndex = false;
            desc.nodes && desc.nodes.forEach(({ mesh , skin  })=>{
                if (mesh === meshIndex) {
                    numInstances++;
                    if (skin !== undefined) skinIndex = skin;
                }
            });
            primitives = this.parsePrimitives(gl, primitives, desc, bufferViews, materials, numInstances).map(({ geometry , program , mode  })=>{
                // Create either skinned mesh or regular mesh
                const mesh = typeof skinIndex === "number" ? new (0, _gltfskin.GLTFSkin)(gl, {
                    skeleton: skins[skinIndex],
                    geometry,
                    program,
                    mode
                }) : new (0, _mesh.Mesh)(gl, {
                    geometry,
                    program,
                    mode
                });
                mesh.name = name;
                if (mesh.geometry.isInstanced) {
                    // Tag mesh so that nodes can add their transforms to the instance attribute
                    mesh.numInstances = numInstances;
                    // Avoid incorrect culling for instances
                    mesh.frustumCulled = false;
                }
                return mesh;
            });
            return {
                primitives,
                weights,
                name
            };
        });
    }
    static parsePrimitives(gl, primitives, desc, bufferViews, materials, numInstances) {
        return primitives.map(({ attributes , indices , material: materialIndex , mode =4 , targets , extensions , extras  })=>{
            const geometry = new (0, _geometry.Geometry)(gl);
            // Add each attribute found in primitive
            for(let attr in attributes)geometry.addAttribute(ATTRIBUTES[attr], this.parseAccessor(attributes[attr], desc, bufferViews));
            // Add index attribute if found
            if (indices !== undefined) geometry.addAttribute("index", this.parseAccessor(indices, desc, bufferViews));
            // Add instanced transform attribute if multiple instances
            if (numInstances > 1) geometry.addAttribute("instanceMatrix", {
                instanced: 1,
                size: 16,
                data: new Float32Array(numInstances * 16)
            });
            // TODO: materials
            // const program = new NormalProgram(gl);
            const program = (0, _normalProgram.NormalProgram)(gl);
            if (materialIndex !== undefined) program.gltfMaterial = materials[materialIndex];
            return {
                geometry,
                program,
                mode
            };
        });
    }
    static parseAccessor(index, desc, bufferViews) {
        // TODO: init missing bufferView with 0s
        // TODO: support sparse
        const { bufferView: bufferViewIndex , byteOffset =0 , componentType , normalized =false , count , type , min , max , sparse  } = desc.accessors[index];
        const { data , originalBuffer , buffer , byteOffset: bufferByteOffset = 0 , // byteLength, // applied in parseBufferViews
        byteStride =0 , target  } = bufferViews[bufferViewIndex];
        const size = TYPE_SIZE[type];
        // Parse data from joined buffers
        const TypeArray = TYPE_ARRAY[componentType];
        const elementBytes = data.BYTES_PER_ELEMENT;
        const componentOffset = byteOffset / elementBytes;
        const componentStride = byteStride / elementBytes;
        const isInterleaved = !!byteStride && componentStride !== size;
        // TODO: interleaved
        const newData = isInterleaved ? data : new TypeArray(originalBuffer, byteOffset + bufferByteOffset, count * size);
        // Return attribute data
        return {
            data: newData,
            size,
            type: componentType,
            normalized,
            buffer,
            stride: byteStride,
            offset: byteOffset,
            count,
            min,
            max
        };
    }
    static parseNodes(gl, desc, meshes, skins) {
        if (!desc.nodes) return null;
        const nodes = desc.nodes.map(({ camera , children , skin: skinIndex , matrix , mesh: meshIndex , rotation , scale , translation , weights , name , extensions , extras  })=>{
            const node = new (0, _transform.Transform)();
            if (name) node.name = name;
            // Apply transformations
            if (matrix) {
                node.matrix.copy(matrix);
                node.decompose();
            } else {
                if (rotation) node.quaternion.copy(rotation);
                if (scale) node.scale.copy(scale);
                if (translation) node.position.copy(translation);
                node.updateMatrix();
            }
            // Flags for avoiding duplicate transforms and removing unused instance nodes
            let isInstanced = false;
            let isFirstInstance = true;
            // add mesh if included
            if (meshIndex !== undefined) meshes[meshIndex].primitives.forEach((mesh)=>{
                if (mesh.geometry.isInstanced) {
                    isInstanced = true;
                    if (!mesh.instanceCount) mesh.instanceCount = 0;
                    else isFirstInstance = false;
                    node.matrix.toArray(mesh.geometry.attributes.instanceMatrix.data, mesh.instanceCount * 16);
                    mesh.instanceCount++;
                    if (mesh.instanceCount === mesh.numInstances) {
                        // Remove properties once all instances added
                        delete mesh.numInstances;
                        delete mesh.instanceCount;
                        // Flag attribute as dirty
                        mesh.geometry.attributes.instanceMatrix.needsUpdate = true;
                    }
                }
                // For instances, only the first node will actually have the mesh
                if (isInstanced) {
                    if (isFirstInstance) mesh.setParent(node);
                } else mesh.setParent(node);
            });
            // Reset node if instanced to not duplicate transforms
            if (isInstanced) {
                // Remove unused nodes just providing an instance transform
                if (!isFirstInstance) return null;
                // Avoid duplicate transform for node containing the instanced mesh
                node.matrix.identity();
                node.decompose();
            }
            return node;
        });
        desc.nodes.forEach(({ children =[]  }, i)=>{
            // Set hierarchy now all nodes created
            children.forEach((childIndex)=>{
                if (!nodes[childIndex]) return;
                nodes[childIndex].setParent(nodes[i]);
            });
        });
        return nodes;
    }
    static populateSkins(skins, nodes) {
        if (!skins) return;
        skins.forEach((skin)=>{
            skin.joints = skin.joints.map((i, index)=>{
                const joint = nodes[i];
                joint.bindInverse = new (0, _mat4.Mat4)(...skin.inverseBindMatrices.data.slice(index * 16, (index + 1) * 16));
                return joint;
            });
            if (skin.skeleton) skin.skeleton = nodes[skin.skeleton];
        });
    }
    static parseAnimations(gl, desc, nodes, bufferViews) {
        if (!desc.animations) return null;
        return desc.animations.map(({ channels , samplers , name  })=>{
            const data = channels.map(({ sampler: samplerIndex , target  })=>{
                const { input: inputIndex , interpolation ="LINEAR" , output: outputIndex  } = samplers[samplerIndex];
                const { node: nodeIndex , path  } = target;
                const node = nodes[nodeIndex];
                const transform = TRANSFORMS[path];
                const times = this.parseAccessor(inputIndex, desc, bufferViews).data;
                const values = this.parseAccessor(outputIndex, desc, bufferViews).data;
                return {
                    node,
                    transform,
                    interpolation,
                    times,
                    values
                };
            });
            return {
                name,
                animation: new (0, _gltfanimation.GLTFAnimation)(data)
            };
        });
    }
    static parseScenes(desc, nodes) {
        if (!desc.scenes) return null;
        return desc.scenes.map(({ nodes: nodesIndices = [] , name , extensions , extras  })=>{
            return nodesIndices.reduce((map, i)=>{
                // Don't add null nodes (instanced transforms)
                if (nodes[i]) map.push(nodes[i]);
                return map;
            }, []);
        });
    }
}

},{"../core/Geometry":"dD7Rh","../core/Transform":"2123V","../core/Texture":"cKaIX","../core/Mesh":"99L4I","./GLTFAnimation":"9ly4m","./GLTFSkin":"5b2v5","../math/Mat4":"2hzaT","./NormalProgram":"cdarh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ly4m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GLTFAnimation", ()=>GLTFAnimation);
var _vec3 = require("../math/Vec3");
var _quat = require("../math/Quat");
const tmpVec3A = new (0, _vec3.Vec3)();
const tmpVec3B = new (0, _vec3.Vec3)();
const tmpVec3C = new (0, _vec3.Vec3)();
const tmpVec3D = new (0, _vec3.Vec3)();
const tmpQuatA = new (0, _quat.Quat)();
const tmpQuatB = new (0, _quat.Quat)();
const tmpQuatC = new (0, _quat.Quat)();
const tmpQuatD = new (0, _quat.Quat)();
class GLTFAnimation {
    constructor(data, weight = 1){
        this.data = data;
        this.elapsed = 0;
        this.weight = weight;
        // Set to false to not apply modulo to elapsed against duration
        this.loop = true;
        // Find starting time as exports from blender (perhaps others too) don't always start from 0
        this.startTime = data.reduce((a, { times  })=>Math.min(a, times[0]), Infinity);
        // Get largest final time in all channels to calculate duration
        this.endTime = data.reduce((a, { times  })=>Math.max(a, times[times.length - 1]), 0);
        this.duration = this.endTime - this.startTime;
    }
    update(totalWeight = 1, isSet) {
        const weight = isSet ? 1 : this.weight / totalWeight;
        const elapsed = (this.loop ? this.elapsed % this.duration : Math.min(this.elapsed, this.duration - 0.001)) + this.startTime;
        this.data.forEach(({ node , transform , interpolation , times , values  })=>{
            // Get index of two time values elapsed is between
            const prevIndex = Math.max(1, times.findIndex((t)=>t > elapsed)) - 1;
            const nextIndex = prevIndex + 1;
            // Get linear blend/alpha between the two
            let alpha = (elapsed - times[prevIndex]) / (times[nextIndex] - times[prevIndex]);
            if (interpolation === "STEP") alpha = 0;
            let prevVal = tmpVec3A;
            let prevTan = tmpVec3B;
            let nextTan = tmpVec3C;
            let nextVal = tmpVec3D;
            let size = 3;
            if (transform === "quaternion") {
                prevVal = tmpQuatA;
                prevTan = tmpQuatB;
                nextTan = tmpQuatC;
                nextVal = tmpQuatD;
                size = 4;
            }
            if (interpolation === "CUBICSPLINE") {
                // Get the prev and next values from the indices
                prevVal.fromArray(values, prevIndex * size * 3 + size * 1);
                prevTan.fromArray(values, prevIndex * size * 3 + size * 2);
                nextTan.fromArray(values, nextIndex * size * 3 + size * 0);
                nextVal.fromArray(values, nextIndex * size * 3 + size * 1);
                // interpolate for final value
                prevVal = this.cubicSplineInterpolate(alpha, prevVal, prevTan, nextTan, nextVal);
                if (size === 4) prevVal.normalize();
            } else {
                // Get the prev and next values from the indices
                prevVal.fromArray(values, prevIndex * size);
                nextVal.fromArray(values, nextIndex * size);
                // interpolate for final value
                if (size === 4) prevVal.slerp(nextVal, alpha);
                else prevVal.lerp(nextVal, alpha);
            }
            // interpolate between multiple possible animations
            if (size === 4) node[transform].slerp(prevVal, weight);
            else node[transform].lerp(prevVal, weight);
        });
    }
    cubicSplineInterpolate(t, prevVal, prevTan, nextTan, nextVal) {
        const t2 = t * t;
        const t3 = t2 * t;
        const s2 = 3 * t2 - 2 * t3;
        const s3 = t3 - t2;
        const s0 = 1 - s2;
        const s1 = s3 - t2 + t;
        for(let i = 0; i < prevVal.length; i++)prevVal[i] = s0 * prevVal[i] + s1 * (1 - t) * prevTan[i] + s2 * nextVal[i] + s3 * t * nextTan[i];
        return prevVal;
    }
}

},{"../math/Vec3":"iLWkB","../math/Quat":"dWzbo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5b2v5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GLTFSkin", ()=>GLTFSkin);
var _mesh = require("../core/Mesh");
var _mat4 = require("../math/Mat4");
var _texture = require("../core/Texture");
var _guards = require("../Guards");
const tempMat4 = new (0, _mat4.Mat4)();
const identity = new (0, _mat4.Mat4)();
class GLTFSkin extends (0, _mesh.Mesh) {
    constructor(gl, { skeleton , geometry , program , mode =gl.TRIANGLES  } = {}){
        super(gl, {
            geometry,
            program,
            mode
        });
        this.skeleton = skeleton;
        this.program = program;
        this.createBoneTexture();
        this.animations = [];
    }
    createBoneTexture() {
        if (!this.skeleton.joints.length) return;
        const size = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(this.skeleton.joints.length * 4)) / Math.LN2)));
        this.boneMatrices = new Float32Array(size * size * 4);
        this.boneTextureSize = size;
        this.boneTexture = new (0, _texture.Texture)(this.gl, {
            image: this.boneMatrices,
            generateMipmaps: false,
            type: this.gl.FLOAT,
            internalFormat: (0, _guards.isWebGl2)(this.gl) ? this.gl.RGBA32F : this.gl.RGBA,
            // internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA32F : this.gl.RGBA,
            minFilter: this.gl.NEAREST,
            magFilter: this.gl.NEAREST,
            flipY: false,
            width: size
        });
    }
    // addAnimation(data) {
    //     const animation = new Animation({ objects: this.bones, data });
    //     this.animations.push(animation);
    //     return animation;
    // }
    // updateAnimations() {
    //     // Calculate combined animation weight
    //     let total = 0;
    //     this.animations.forEach((animation) => (total += animation.weight));
    //     this.animations.forEach((animation, i) => {
    //         // force first animation to set in order to reset frame
    //         animation.update(total, i === 0);
    //     });
    // }
    updateUniforms() {
        // Update bone texture
        this.skeleton.joints.forEach((bone, i)=>{
            // Find difference between current and bind pose
            tempMat4.multiply(bone.worldMatrix, bone.bindInverse);
            this.boneMatrices.set(tempMat4, i * 16);
        });
        if (this.boneTexture) this.boneTexture.needsUpdate = true;
    }
    draw({ camera  } = {}) {
        if (!this.program.uniforms.boneTexture) Object.assign(this.program.uniforms, {
            boneTexture: {
                value: this.boneTexture
            },
            boneTextureSize: {
                value: this.boneTextureSize
            }
        });
        this.updateUniforms();
        // Switch the world matrix with identity to ignore any transforms
        // on the mesh itself - only use skeleton's transforms
        const _worldMatrix = this.worldMatrix;
        this.worldMatrix = identity;
        super.draw({
            camera
        });
        // Switch back to leave identity untouched
        this.worldMatrix = _worldMatrix;
    }
}

},{"../core/Mesh":"99L4I","../math/Mat4":"2hzaT","../core/Texture":"cKaIX","../Guards":"aXm3u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kq7er":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nattribute vec3 position;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nvarying vec3 pos3;\nuniform float uTime;\n\nuniform float speed; // 0.3\nuniform float noiseForce; // 0.5\nuniform float noiseScale; // 0.3\n\nuniform sampler2D nTex;\nuniform sampler2D nTex2;\n\nvoid main() {\n    pos3 = position;\n\n    vec2 uvNoise = pos3.xy * noiseScale;\n    uvNoise.x += uTime * speed;\n    pos3.z += texture2D(nTex, mod(uvNoise,1.0)).r * noiseForce;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos3, 1.0);\n    gl_PointSize = 3.0;\n}";

},{}],"c3ZTU":[function(require,module,exports) {
module.exports = "precision highp float;\n#define GLSLIFY 1\nuniform float uTime;\nvarying vec3 pos3;\n\nvoid main() {\n    gl_FragColor.rgb = vec3(0.98,0.965,0.941);\n    gl_FragColor.a = 1.0;\n}";

},{}],"cU3kb":[function(require,module,exports) {
module.exports = require("6154a509428ea1aa").getBundleURL("hKh4f") + "T_Noise_03.c5a7b39a.png" + "?" + Date.now();

},{"6154a509428ea1aa":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"fwxNc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tweakpane = require("tweakpane");
var _pluginEssentials = require("@tweakpane/plugin-essentials");
class TweakPanel {
    /**
     * This tweak panel modify original config object
     * @param configObj
     */ init(configObj) {
        this.config = configObj;
        this.pane = new (0, _tweakpane.Pane)();
        this.pane.registerPlugin(_pluginEssentials);
        this.main = this.pane.addFolder({
            title: "Parameters",
            expanded: true
        });
        this.fpsGraph = this.main.addBlade({
            view: "fpsgraph",
            label: "fps",
            rows: 2
        });
        this.main.on("change", (ev)=>{
            if (this.onChangeHandler) this.onChangeHandler(this.config);
        });
        this.addBindings();
    }
    onChange(onChangeHandlerArg) {
        this.onChangeHandler = onChangeHandlerArg;
    }
    addBindings() {
        this.main.addBinding(this.config, "speed", {
            min: -2,
            max: 2,
            step: 0.1
        });
        this.main.addBinding(this.config, "noiseForce", {
            min: -2,
            max: 2,
            step: 0.1
        });
        this.main.addBinding(this.config, "noiseScale", {
            min: 0.001,
            max: 1
        });
    }
    tickStart() {
        this.fpsGraph.begin();
    }
    tickEnd() {
        this.fpsGraph.end();
    }
}
exports.default = TweakPanel;

},{"tweakpane":"cvybH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@tweakpane/plugin-essentials":"b3FeX"}],"cvybH":[function(require,module,exports) {
/*! Tweakpane 4.0.3 (c) 2016 cocopon, licensed under the MIT license. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BladeApi", ()=>BladeApi);
parcelHelpers.export(exports, "ButtonApi", ()=>ButtonApi);
parcelHelpers.export(exports, "FolderApi", ()=>FolderApi);
parcelHelpers.export(exports, "ListBladeApi", ()=>ListBladeApi);
parcelHelpers.export(exports, "ListInputBindingApi", ()=>ListInputBindingApi);
parcelHelpers.export(exports, "Pane", ()=>Pane);
parcelHelpers.export(exports, "Semver", ()=>Semver);
parcelHelpers.export(exports, "SeparatorBladeApi", ()=>SeparatorBladeApi);
parcelHelpers.export(exports, "SliderBladeApi", ()=>SliderBladeApi);
parcelHelpers.export(exports, "SliderInputBindingApi", ()=>SliderInputBindingApi);
parcelHelpers.export(exports, "TabApi", ()=>TabApi);
parcelHelpers.export(exports, "TabPageApi", ()=>TabPageApi);
parcelHelpers.export(exports, "TextBladeApi", ()=>TextBladeApi);
parcelHelpers.export(exports, "TpChangeEvent", ()=>TpChangeEvent);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
function forceCast(v) {
    return v;
}
function isEmpty(value) {
    return value === null || value === undefined;
}
function isObject$1(value) {
    return value !== null && typeof value === "object";
}
function isRecord(value) {
    return value !== null && typeof value === "object";
}
function deepEqualsArray(a1, a2) {
    if (a1.length !== a2.length) return false;
    for(let i = 0; i < a1.length; i++){
        if (a1[i] !== a2[i]) return false;
    }
    return true;
}
function deepMerge(r1, r2) {
    const keys = Array.from(new Set([
        ...Object.keys(r1),
        ...Object.keys(r2)
    ]));
    return keys.reduce((result, key)=>{
        const v1 = r1[key];
        const v2 = r2[key];
        return isRecord(v1) && isRecord(v2) ? Object.assign(Object.assign({}, result), {
            [key]: deepMerge(v1, v2)
        }) : Object.assign(Object.assign({}, result), {
            [key]: key in r2 ? v2 : v1
        });
    }, {});
}
function isBinding(value) {
    if (!isObject$1(value)) return false;
    return "target" in value;
}
const CREATE_MESSAGE_MAP = {
    alreadydisposed: ()=>"View has been already disposed",
    invalidparams: (context)=>`Invalid parameters for '${context.name}'`,
    nomatchingcontroller: (context)=>`No matching controller for '${context.key}'`,
    nomatchingview: (context)=>`No matching view for '${JSON.stringify(context.params)}'`,
    notbindable: ()=>`Value is not bindable`,
    notcompatible: (context)=>`Not compatible with  plugin '${context.id}'`,
    propertynotfound: (context)=>`Property '${context.name}' not found`,
    shouldneverhappen: ()=>"This error should never happen"
};
class TpError {
    static alreadyDisposed() {
        return new TpError({
            type: "alreadydisposed"
        });
    }
    static notBindable() {
        return new TpError({
            type: "notbindable"
        });
    }
    static notCompatible(bundleId, id) {
        return new TpError({
            type: "notcompatible",
            context: {
                id: `${bundleId}.${id}`
            }
        });
    }
    static propertyNotFound(name) {
        return new TpError({
            type: "propertynotfound",
            context: {
                name: name
            }
        });
    }
    static shouldNeverHappen() {
        return new TpError({
            type: "shouldneverhappen"
        });
    }
    constructor(config){
        var _a;
        this.message = (_a = CREATE_MESSAGE_MAP[config.type](forceCast(config.context))) !== null && _a !== void 0 ? _a : "Unexpected error";
        this.name = this.constructor.name;
        this.stack = new Error(this.message).stack;
        this.type = config.type;
    }
    toString() {
        return this.message;
    }
}
class BindingTarget {
    constructor(obj, key){
        this.obj_ = obj;
        this.key = key;
    }
    static isBindable(obj) {
        if (obj === null) return false;
        if (typeof obj !== "object" && typeof obj !== "function") return false;
        return true;
    }
    read() {
        return this.obj_[this.key];
    }
    write(value) {
        this.obj_[this.key] = value;
    }
    writeProperty(name, value) {
        const valueObj = this.read();
        if (!BindingTarget.isBindable(valueObj)) throw TpError.notBindable();
        if (!(name in valueObj)) throw TpError.propertyNotFound(name);
        valueObj[name] = value;
    }
}
class Emitter {
    constructor(){
        this.observers_ = {};
    }
    on(eventName, handler, opt_options) {
        var _a;
        let observers = this.observers_[eventName];
        if (!observers) observers = this.observers_[eventName] = [];
        observers.push({
            handler: handler,
            key: (_a = opt_options === null || opt_options === void 0 ? void 0 : opt_options.key) !== null && _a !== void 0 ? _a : handler
        });
        return this;
    }
    off(eventName, key) {
        const observers = this.observers_[eventName];
        if (observers) this.observers_[eventName] = observers.filter((observer)=>{
            return observer.key !== key;
        });
        return this;
    }
    emit(eventName, event) {
        const observers = this.observers_[eventName];
        if (!observers) return;
        observers.forEach((observer)=>{
            observer.handler(event);
        });
    }
}
class ComplexValue {
    constructor(initialValue, config){
        var _a;
        this.constraint_ = config === null || config === void 0 ? void 0 : config.constraint;
        this.equals_ = (_a = config === null || config === void 0 ? void 0 : config.equals) !== null && _a !== void 0 ? _a : (v1, v2)=>v1 === v2;
        this.emitter = new Emitter();
        this.rawValue_ = initialValue;
    }
    get constraint() {
        return this.constraint_;
    }
    get rawValue() {
        return this.rawValue_;
    }
    set rawValue(rawValue) {
        this.setRawValue(rawValue, {
            forceEmit: false,
            last: true
        });
    }
    setRawValue(rawValue, options) {
        const opts = options !== null && options !== void 0 ? options : {
            forceEmit: false,
            last: true
        };
        const constrainedValue = this.constraint_ ? this.constraint_.constrain(rawValue) : rawValue;
        const prevValue = this.rawValue_;
        const changed = !this.equals_(prevValue, constrainedValue);
        if (!changed && !opts.forceEmit) return;
        this.emitter.emit("beforechange", {
            sender: this
        });
        this.rawValue_ = constrainedValue;
        this.emitter.emit("change", {
            options: opts,
            previousRawValue: prevValue,
            rawValue: constrainedValue,
            sender: this
        });
    }
}
class PrimitiveValue {
    constructor(initialValue){
        this.emitter = new Emitter();
        this.value_ = initialValue;
    }
    get rawValue() {
        return this.value_;
    }
    set rawValue(value) {
        this.setRawValue(value, {
            forceEmit: false,
            last: true
        });
    }
    setRawValue(value, options) {
        const opts = options !== null && options !== void 0 ? options : {
            forceEmit: false,
            last: true
        };
        const prevValue = this.value_;
        if (prevValue === value && !opts.forceEmit) return;
        this.emitter.emit("beforechange", {
            sender: this
        });
        this.value_ = value;
        this.emitter.emit("change", {
            options: opts,
            previousRawValue: prevValue,
            rawValue: this.value_,
            sender: this
        });
    }
}
class ReadonlyPrimitiveValue {
    constructor(value){
        this.emitter = new Emitter();
        this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.value_ = value;
        this.value_.emitter.on("beforechange", this.onValueBeforeChange_);
        this.value_.emitter.on("change", this.onValueChange_);
    }
    get rawValue() {
        return this.value_.rawValue;
    }
    onValueBeforeChange_(ev) {
        this.emitter.emit("beforechange", Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
    onValueChange_(ev) {
        this.emitter.emit("change", Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
}
function createValue(initialValue, config) {
    const constraint = config === null || config === void 0 ? void 0 : config.constraint;
    const equals = config === null || config === void 0 ? void 0 : config.equals;
    if (!constraint && !equals) return new PrimitiveValue(initialValue);
    return new ComplexValue(initialValue, config);
}
function createReadonlyValue(value) {
    return [
        new ReadonlyPrimitiveValue(value),
        (rawValue, options)=>{
            value.setRawValue(rawValue, options);
        }
    ];
}
class ValueMap {
    constructor(valueMap){
        this.emitter = new Emitter();
        this.valMap_ = valueMap;
        for(const key in this.valMap_){
            const v = this.valMap_[key];
            v.emitter.on("change", ()=>{
                this.emitter.emit("change", {
                    key: key,
                    sender: this
                });
            });
        }
    }
    static createCore(initialValue) {
        const keys = Object.keys(initialValue);
        return keys.reduce((o, key)=>{
            return Object.assign(o, {
                [key]: createValue(initialValue[key])
            });
        }, {});
    }
    static fromObject(initialValue) {
        const core = this.createCore(initialValue);
        return new ValueMap(core);
    }
    get(key) {
        return this.valMap_[key].rawValue;
    }
    set(key, value) {
        this.valMap_[key].rawValue = value;
    }
    value(key) {
        return this.valMap_[key];
    }
}
class DefiniteRangeConstraint {
    constructor(config){
        this.values = ValueMap.fromObject({
            max: config.max,
            min: config.min
        });
    }
    constrain(value) {
        const max = this.values.get("max");
        const min = this.values.get("min");
        return Math.min(Math.max(value, min), max);
    }
}
class RangeConstraint {
    constructor(config){
        this.values = ValueMap.fromObject({
            max: config.max,
            min: config.min
        });
    }
    constrain(value) {
        const max = this.values.get("max");
        const min = this.values.get("min");
        let result = value;
        if (!isEmpty(min)) result = Math.max(result, min);
        if (!isEmpty(max)) result = Math.min(result, max);
        return result;
    }
}
class StepConstraint {
    constructor(step, origin = 0){
        this.step = step;
        this.origin = origin;
    }
    constrain(value) {
        const o = this.origin % this.step;
        const r = Math.round((value - o) / this.step);
        return o + r * this.step;
    }
}
class NumberLiteralNode {
    constructor(text){
        this.text = text;
    }
    evaluate() {
        return Number(this.text);
    }
    toString() {
        return this.text;
    }
}
const BINARY_OPERATION_MAP = {
    "**": (v1, v2)=>Math.pow(v1, v2),
    "*": (v1, v2)=>v1 * v2,
    "/": (v1, v2)=>v1 / v2,
    "%": (v1, v2)=>v1 % v2,
    "+": (v1, v2)=>v1 + v2,
    "-": (v1, v2)=>v1 - v2,
    "<<": (v1, v2)=>v1 << v2,
    ">>": (v1, v2)=>v1 >> v2,
    ">>>": (v1, v2)=>v1 >>> v2,
    "&": (v1, v2)=>v1 & v2,
    "^": (v1, v2)=>v1 ^ v2,
    "|": (v1, v2)=>v1 | v2
};
class BinaryOperationNode {
    constructor(operator, left, right){
        this.left = left;
        this.operator = operator;
        this.right = right;
    }
    evaluate() {
        const op = BINARY_OPERATION_MAP[this.operator];
        if (!op) throw new Error(`unexpected binary operator: '${this.operator}`);
        return op(this.left.evaluate(), this.right.evaluate());
    }
    toString() {
        return [
            "b(",
            this.left.toString(),
            this.operator,
            this.right.toString(),
            ")"
        ].join(" ");
    }
}
const UNARY_OPERATION_MAP = {
    "+": (v)=>v,
    "-": (v)=>-v,
    "~": (v)=>~v
};
class UnaryOperationNode {
    constructor(operator, expr){
        this.operator = operator;
        this.expression = expr;
    }
    evaluate() {
        const op = UNARY_OPERATION_MAP[this.operator];
        if (!op) throw new Error(`unexpected unary operator: '${this.operator}`);
        return op(this.expression.evaluate());
    }
    toString() {
        return [
            "u(",
            this.operator,
            this.expression.toString(),
            ")"
        ].join(" ");
    }
}
function combineReader(parsers) {
    return (text, cursor)=>{
        for(let i = 0; i < parsers.length; i++){
            const result = parsers[i](text, cursor);
            if (result !== "") return result;
        }
        return "";
    };
}
function readWhitespace(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^\s+/);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
}
function readNonZeroDigit(text, cursor) {
    const ch = text.substr(cursor, 1);
    return ch.match(/^[1-9]$/) ? ch : "";
}
function readDecimalDigits(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^[0-9]+/);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
}
function readSignedInteger(text, cursor) {
    const ds = readDecimalDigits(text, cursor);
    if (ds !== "") return ds;
    const sign = text.substr(cursor, 1);
    cursor += 1;
    if (sign !== "-" && sign !== "+") return "";
    const sds = readDecimalDigits(text, cursor);
    if (sds === "") return "";
    return sign + sds;
}
function readExponentPart(text, cursor) {
    const e = text.substr(cursor, 1);
    cursor += 1;
    if (e.toLowerCase() !== "e") return "";
    const si = readSignedInteger(text, cursor);
    if (si === "") return "";
    return e + si;
}
function readDecimalIntegerLiteral(text, cursor) {
    const ch = text.substr(cursor, 1);
    if (ch === "0") return ch;
    const nzd = readNonZeroDigit(text, cursor);
    cursor += nzd.length;
    if (nzd === "") return "";
    return nzd + readDecimalDigits(text, cursor);
}
function readDecimalLiteral1(text, cursor) {
    const dil = readDecimalIntegerLiteral(text, cursor);
    cursor += dil.length;
    if (dil === "") return "";
    const dot = text.substr(cursor, 1);
    cursor += dot.length;
    if (dot !== ".") return "";
    const dds = readDecimalDigits(text, cursor);
    cursor += dds.length;
    return dil + dot + dds + readExponentPart(text, cursor);
}
function readDecimalLiteral2(text, cursor) {
    const dot = text.substr(cursor, 1);
    cursor += dot.length;
    if (dot !== ".") return "";
    const dds = readDecimalDigits(text, cursor);
    cursor += dds.length;
    if (dds === "") return "";
    return dot + dds + readExponentPart(text, cursor);
}
function readDecimalLiteral3(text, cursor) {
    const dil = readDecimalIntegerLiteral(text, cursor);
    cursor += dil.length;
    if (dil === "") return "";
    return dil + readExponentPart(text, cursor);
}
const readDecimalLiteral = combineReader([
    readDecimalLiteral1,
    readDecimalLiteral2,
    readDecimalLiteral3
]);
function parseBinaryDigits(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^[01]+/);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
}
function readBinaryIntegerLiteral(text, cursor) {
    const prefix = text.substr(cursor, 2);
    cursor += prefix.length;
    if (prefix.toLowerCase() !== "0b") return "";
    const bds = parseBinaryDigits(text, cursor);
    if (bds === "") return "";
    return prefix + bds;
}
function readOctalDigits(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^[0-7]+/);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
}
function readOctalIntegerLiteral(text, cursor) {
    const prefix = text.substr(cursor, 2);
    cursor += prefix.length;
    if (prefix.toLowerCase() !== "0o") return "";
    const ods = readOctalDigits(text, cursor);
    if (ods === "") return "";
    return prefix + ods;
}
function readHexDigits(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^[0-9a-f]+/i);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
}
function readHexIntegerLiteral(text, cursor) {
    const prefix = text.substr(cursor, 2);
    cursor += prefix.length;
    if (prefix.toLowerCase() !== "0x") return "";
    const hds = readHexDigits(text, cursor);
    if (hds === "") return "";
    return prefix + hds;
}
const readNonDecimalIntegerLiteral = combineReader([
    readBinaryIntegerLiteral,
    readOctalIntegerLiteral,
    readHexIntegerLiteral
]);
const readNumericLiteral = combineReader([
    readNonDecimalIntegerLiteral,
    readDecimalLiteral
]);
function parseLiteral(text, cursor) {
    const num = readNumericLiteral(text, cursor);
    cursor += num.length;
    if (num === "") return null;
    return {
        evaluable: new NumberLiteralNode(num),
        cursor: cursor
    };
}
function parseParenthesizedExpression(text, cursor) {
    const op = text.substr(cursor, 1);
    cursor += op.length;
    if (op !== "(") return null;
    const expr = parseExpression(text, cursor);
    if (!expr) return null;
    cursor = expr.cursor;
    cursor += readWhitespace(text, cursor).length;
    const cl = text.substr(cursor, 1);
    cursor += cl.length;
    if (cl !== ")") return null;
    return {
        evaluable: expr.evaluable,
        cursor: cursor
    };
}
function parsePrimaryExpression(text, cursor) {
    var _a;
    return (_a = parseLiteral(text, cursor)) !== null && _a !== void 0 ? _a : parseParenthesizedExpression(text, cursor);
}
function parseUnaryExpression(text, cursor) {
    const expr = parsePrimaryExpression(text, cursor);
    if (expr) return expr;
    const op = text.substr(cursor, 1);
    cursor += op.length;
    if (op !== "+" && op !== "-" && op !== "~") return null;
    const num = parseUnaryExpression(text, cursor);
    if (!num) return null;
    cursor = num.cursor;
    return {
        cursor: cursor,
        evaluable: new UnaryOperationNode(op, num.evaluable)
    };
}
function readBinaryOperator(ops, text, cursor) {
    cursor += readWhitespace(text, cursor).length;
    const op = ops.filter((op)=>text.startsWith(op, cursor))[0];
    if (!op) return null;
    cursor += op.length;
    cursor += readWhitespace(text, cursor).length;
    return {
        cursor: cursor,
        operator: op
    };
}
function createBinaryOperationExpressionParser(exprParser, ops) {
    return (text, cursor)=>{
        const firstExpr = exprParser(text, cursor);
        if (!firstExpr) return null;
        cursor = firstExpr.cursor;
        let expr = firstExpr.evaluable;
        for(;;){
            const op = readBinaryOperator(ops, text, cursor);
            if (!op) break;
            cursor = op.cursor;
            const nextExpr = exprParser(text, cursor);
            if (!nextExpr) return null;
            cursor = nextExpr.cursor;
            expr = new BinaryOperationNode(op.operator, expr, nextExpr.evaluable);
        }
        return expr ? {
            cursor: cursor,
            evaluable: expr
        } : null;
    };
}
const parseBinaryOperationExpression = [
    [
        "**"
    ],
    [
        "*",
        "/",
        "%"
    ],
    [
        "+",
        "-"
    ],
    [
        "<<",
        ">>>",
        ">>"
    ],
    [
        "&"
    ],
    [
        "^"
    ],
    [
        "|"
    ]
].reduce((parser, ops)=>{
    return createBinaryOperationExpressionParser(parser, ops);
}, parseUnaryExpression);
function parseExpression(text, cursor) {
    cursor += readWhitespace(text, cursor).length;
    return parseBinaryOperationExpression(text, cursor);
}
function parseEcmaNumberExpression(text) {
    const expr = parseExpression(text, 0);
    if (!expr) return null;
    const cursor = expr.cursor + readWhitespace(text, expr.cursor).length;
    if (cursor !== text.length) return null;
    return expr.evaluable;
}
function parseNumber(text) {
    var _a;
    const r = parseEcmaNumberExpression(text);
    return (_a = r === null || r === void 0 ? void 0 : r.evaluate()) !== null && _a !== void 0 ? _a : null;
}
function numberFromUnknown(value) {
    if (typeof value === "number") return value;
    if (typeof value === "string") {
        const pv = parseNumber(value);
        if (!isEmpty(pv)) return pv;
    }
    return 0;
}
function numberToString(value) {
    return String(value);
}
function createNumberFormatter(digits) {
    return (value)=>{
        return value.toFixed(Math.max(Math.min(digits, 20), 0));
    };
}
function mapRange(value, start1, end1, start2, end2) {
    const p = (value - start1) / (end1 - start1);
    return start2 + p * (end2 - start2);
}
function getDecimalDigits(value) {
    const text = String(value.toFixed(10));
    const frac = text.split(".")[1];
    return frac.replace(/0+$/, "").length;
}
function constrainRange(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function loopRange(value, max) {
    return (value % max + max) % max;
}
function getSuitableDecimalDigits(params, rawValue) {
    return !isEmpty(params.step) ? getDecimalDigits(params.step) : Math.max(getDecimalDigits(rawValue), 2);
}
function getSuitableKeyScale(params) {
    var _a;
    return (_a = params.step) !== null && _a !== void 0 ? _a : 1;
}
function getSuitablePointerScale(params, rawValue) {
    var _a;
    const base = Math.abs((_a = params.step) !== null && _a !== void 0 ? _a : rawValue);
    return base === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(base)) - 1);
}
function createStepConstraint(params, initialValue) {
    if (!isEmpty(params.step)) return new StepConstraint(params.step, initialValue);
    return null;
}
function createRangeConstraint(params) {
    if (!isEmpty(params.max) && !isEmpty(params.min)) return new DefiniteRangeConstraint({
        max: params.max,
        min: params.min
    });
    if (!isEmpty(params.max) || !isEmpty(params.min)) return new RangeConstraint({
        max: params.max,
        min: params.min
    });
    return null;
}
function createNumberTextPropsObject(params, initialValue) {
    var _a, _b, _c;
    return {
        formatter: (_a = params.format) !== null && _a !== void 0 ? _a : createNumberFormatter(getSuitableDecimalDigits(params, initialValue)),
        keyScale: (_b = params.keyScale) !== null && _b !== void 0 ? _b : getSuitableKeyScale(params),
        pointerScale: (_c = params.pointerScale) !== null && _c !== void 0 ? _c : getSuitablePointerScale(params, initialValue)
    };
}
function createNumberTextInputParamsParser(p) {
    return {
        format: p.optional.function,
        keyScale: p.optional.number,
        max: p.optional.number,
        min: p.optional.number,
        pointerScale: p.optional.number,
        step: p.optional.number
    };
}
function createPointAxis(config) {
    return {
        constraint: config.constraint,
        textProps: ValueMap.fromObject(createNumberTextPropsObject(config.params, config.initialValue))
    };
}
class BladeApi {
    constructor(controller){
        this.controller = controller;
    }
    get element() {
        return this.controller.view.element;
    }
    get disabled() {
        return this.controller.viewProps.get("disabled");
    }
    set disabled(disabled) {
        this.controller.viewProps.set("disabled", disabled);
    }
    get hidden() {
        return this.controller.viewProps.get("hidden");
    }
    set hidden(hidden) {
        this.controller.viewProps.set("hidden", hidden);
    }
    dispose() {
        this.controller.viewProps.set("disposed", true);
    }
    importState(state) {
        return this.controller.importState(state);
    }
    exportState() {
        return this.controller.exportState();
    }
}
class TpEvent {
    constructor(target){
        this.target = target;
    }
}
class TpChangeEvent extends TpEvent {
    constructor(target, value, last){
        super(target);
        this.value = value;
        this.last = last !== null && last !== void 0 ? last : true;
    }
}
class TpFoldEvent extends TpEvent {
    constructor(target, expanded){
        super(target);
        this.expanded = expanded;
    }
}
class TpTabSelectEvent extends TpEvent {
    constructor(target, index){
        super(target);
        this.index = index;
    }
}
class TpMouseEvent extends TpEvent {
    constructor(target, nativeEvent){
        super(target);
        this.native = nativeEvent;
    }
}
class BindingApi extends BladeApi {
    constructor(controller){
        super(controller);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.emitter_ = new Emitter();
        this.controller.value.emitter.on("change", this.onValueChange_);
    }
    get label() {
        return this.controller.labelController.props.get("label");
    }
    set label(label) {
        this.controller.labelController.props.set("label", label);
    }
    get key() {
        return this.controller.value.binding.target.key;
    }
    get tag() {
        return this.controller.tag;
    }
    set tag(tag) {
        this.controller.tag = tag;
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
    refresh() {
        this.controller.value.fetch();
    }
    onValueChange_(ev) {
        const value = this.controller.value;
        this.emitter_.emit("change", new TpChangeEvent(this, forceCast(value.binding.target.read()), ev.options.last));
    }
}
class InputBindingValue {
    constructor(value, binding){
        this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.binding = binding;
        this.value_ = value;
        this.value_.emitter.on("beforechange", this.onValueBeforeChange_);
        this.value_.emitter.on("change", this.onValueChange_);
        this.emitter = new Emitter();
    }
    get rawValue() {
        return this.value_.rawValue;
    }
    set rawValue(rawValue) {
        this.value_.rawValue = rawValue;
    }
    setRawValue(rawValue, options) {
        this.value_.setRawValue(rawValue, options);
    }
    fetch() {
        this.value_.rawValue = this.binding.read();
    }
    push() {
        this.binding.write(this.value_.rawValue);
    }
    onValueBeforeChange_(ev) {
        this.emitter.emit("beforechange", Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
    onValueChange_(ev) {
        this.push();
        this.emitter.emit("change", Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
}
function isInputBindingValue(v) {
    if (!("binding" in v)) return false;
    const b = v["binding"];
    return isBinding(b) && "read" in b && "write" in b;
}
function parseObject(value, keyToParserMap) {
    const keys = Object.keys(keyToParserMap);
    const result = keys.reduce((tmp, key)=>{
        if (tmp === undefined) return undefined;
        const parser = keyToParserMap[key];
        const result = parser(value[key]);
        return result.succeeded ? Object.assign(Object.assign({}, tmp), {
            [key]: result.value
        }) : undefined;
    }, {});
    return forceCast(result);
}
function parseArray(value, parseItem) {
    return value.reduce((tmp, item)=>{
        if (tmp === undefined) return undefined;
        const result = parseItem(item);
        if (!result.succeeded || result.value === undefined) return undefined;
        return [
            ...tmp,
            result.value
        ];
    }, []);
}
function isObject(value) {
    if (value === null) return false;
    return typeof value === "object";
}
function createMicroParserBuilder(parse) {
    return (optional)=>(v)=>{
            if (!optional && v === undefined) return {
                succeeded: false,
                value: undefined
            };
            if (optional && v === undefined) return {
                succeeded: true,
                value: undefined
            };
            const result = parse(v);
            return result !== undefined ? {
                succeeded: true,
                value: result
            } : {
                succeeded: false,
                value: undefined
            };
        };
}
function createMicroParserBuilders(optional) {
    return {
        custom: (parse)=>createMicroParserBuilder(parse)(optional),
        boolean: createMicroParserBuilder((v)=>typeof v === "boolean" ? v : undefined)(optional),
        number: createMicroParserBuilder((v)=>typeof v === "number" ? v : undefined)(optional),
        string: createMicroParserBuilder((v)=>typeof v === "string" ? v : undefined)(optional),
        function: createMicroParserBuilder((v)=>typeof v === "function" ? v : undefined)(optional),
        constant: (value)=>createMicroParserBuilder((v)=>v === value ? value : undefined)(optional),
        raw: createMicroParserBuilder((v)=>v)(optional),
        object: (keyToParserMap)=>createMicroParserBuilder((v)=>{
                if (!isObject(v)) return undefined;
                return parseObject(v, keyToParserMap);
            })(optional),
        array: (itemParser)=>createMicroParserBuilder((v)=>{
                if (!Array.isArray(v)) return undefined;
                return parseArray(v, itemParser);
            })(optional)
    };
}
const MicroParsers = {
    optional: createMicroParserBuilders(true),
    required: createMicroParserBuilders(false)
};
function parseRecord(value, keyToParserMap) {
    const map = keyToParserMap(MicroParsers);
    const result = MicroParsers.required.object(map)(value);
    return result.succeeded ? result.value : undefined;
}
function importBladeState(state, superImport, parser, callback) {
    if (superImport && !superImport(state)) return false;
    const result = parseRecord(state, parser);
    return result ? callback(result) : false;
}
function exportBladeState(superExport, thisState) {
    var _a;
    return deepMerge((_a = superExport === null || superExport === void 0 ? void 0 : superExport()) !== null && _a !== void 0 ? _a : {}, thisState);
}
function isValueBladeController(bc) {
    return "value" in bc;
}
function isBindingValue(v) {
    if (!isObject$1(v) || !("binding" in v)) return false;
    const b = v.binding;
    return isBinding(b);
}
const SVG_NS = "http://www.w3.org/2000/svg";
function forceReflow(element) {
    element.offsetHeight;
}
function disableTransitionTemporarily(element, callback) {
    const t = element.style.transition;
    element.style.transition = "none";
    callback();
    element.style.transition = t;
}
function supportsTouch(doc) {
    return doc.ontouchstart !== undefined;
}
function getGlobalObject() {
    return globalThis;
}
function getWindowDocument() {
    const globalObj = forceCast(getGlobalObject());
    return globalObj.document;
}
function getCanvasContext(canvasElement) {
    const win = canvasElement.ownerDocument.defaultView;
    if (!win) return null;
    const isBrowser = "document" in win;
    return isBrowser ? canvasElement.getContext("2d", {
        willReadFrequently: true
    }) : null;
}
const ICON_ID_TO_INNER_HTML_MAP = {
    check: '<path d="M2 8l4 4l8 -8"/>',
    dropdown: '<path d="M5 7h6l-3 3 z"/>',
    p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'
};
function createSvgIconElement(document, iconId) {
    const elem = document.createElementNS(SVG_NS, "svg");
    elem.innerHTML = ICON_ID_TO_INNER_HTML_MAP[iconId];
    return elem;
}
function insertElementAt(parentElement, element, index) {
    parentElement.insertBefore(element, parentElement.children[index]);
}
function removeElement(element) {
    if (element.parentElement) element.parentElement.removeChild(element);
}
function removeChildElements(element) {
    while(element.children.length > 0)element.removeChild(element.children[0]);
}
function removeChildNodes(element) {
    while(element.childNodes.length > 0)element.removeChild(element.childNodes[0]);
}
function findNextTarget(ev) {
    if (ev.relatedTarget) return forceCast(ev.relatedTarget);
    if ("explicitOriginalTarget" in ev) return ev.explicitOriginalTarget;
    return null;
}
function bindValue(value, applyValue) {
    value.emitter.on("change", (ev)=>{
        applyValue(ev.rawValue);
    });
    applyValue(value.rawValue);
}
function bindValueMap(valueMap, key, applyValue) {
    bindValue(valueMap.value(key), applyValue);
}
const PREFIX = "tp";
function ClassName(viewName) {
    const fn = (opt_elementName, opt_modifier)=>{
        return [
            PREFIX,
            "-",
            viewName,
            "v",
            opt_elementName ? `_${opt_elementName}` : "",
            opt_modifier ? `-${opt_modifier}` : ""
        ].join("");
    };
    return fn;
}
const cn$r = ClassName("lbl");
function createLabelNode(doc, label) {
    const frag = doc.createDocumentFragment();
    const lineNodes = label.split("\n").map((line)=>{
        return doc.createTextNode(line);
    });
    lineNodes.forEach((lineNode, index)=>{
        if (index > 0) frag.appendChild(doc.createElement("br"));
        frag.appendChild(lineNode);
    });
    return frag;
}
class LabelView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$r());
        config.viewProps.bindClassModifiers(this.element);
        const labelElem = doc.createElement("div");
        labelElem.classList.add(cn$r("l"));
        bindValueMap(config.props, "label", (value)=>{
            if (isEmpty(value)) this.element.classList.add(cn$r(undefined, "nol"));
            else {
                this.element.classList.remove(cn$r(undefined, "nol"));
                removeChildNodes(labelElem);
                labelElem.appendChild(createLabelNode(doc, value));
            }
        });
        this.element.appendChild(labelElem);
        this.labelElement = labelElem;
        const valueElem = doc.createElement("div");
        valueElem.classList.add(cn$r("v"));
        this.element.appendChild(valueElem);
        this.valueElement = valueElem;
    }
}
class LabelController {
    constructor(doc, config){
        this.props = config.props;
        this.valueController = config.valueController;
        this.viewProps = config.valueController.viewProps;
        this.view = new LabelView(doc, {
            props: config.props,
            viewProps: this.viewProps
        });
        this.view.valueElement.appendChild(this.valueController.view.element);
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                label: p.optional.string
            }), (result)=>{
            this.props.set("label", result.label);
            return true;
        });
    }
    exportProps() {
        return exportBladeState(null, {
            label: this.props.get("label")
        });
    }
}
function getAllBladePositions() {
    return [
        "veryfirst",
        "first",
        "last",
        "verylast"
    ];
}
const cn$q = ClassName("");
const POS_TO_CLASS_NAME_MAP = {
    veryfirst: "vfst",
    first: "fst",
    last: "lst",
    verylast: "vlst"
};
class BladeController {
    constructor(config){
        this.parent_ = null;
        this.blade = config.blade;
        this.view = config.view;
        this.viewProps = config.viewProps;
        const elem = this.view.element;
        this.blade.value("positions").emitter.on("change", ()=>{
            getAllBladePositions().forEach((pos)=>{
                elem.classList.remove(cn$q(undefined, POS_TO_CLASS_NAME_MAP[pos]));
            });
            this.blade.get("positions").forEach((pos)=>{
                elem.classList.add(cn$q(undefined, POS_TO_CLASS_NAME_MAP[pos]));
            });
        });
        this.viewProps.handleDispose(()=>{
            removeElement(elem);
        });
    }
    get parent() {
        return this.parent_;
    }
    set parent(parent) {
        this.parent_ = parent;
        this.viewProps.set("parent", this.parent_ ? this.parent_.viewProps : null);
    }
    importState(state) {
        return importBladeState(state, null, (p)=>({
                disabled: p.required.boolean,
                hidden: p.required.boolean
            }), (result)=>{
            this.viewProps.importState(result);
            return true;
        });
    }
    exportState() {
        return exportBladeState(null, Object.assign({}, this.viewProps.exportState()));
    }
}
class LabeledValueBladeController extends BladeController {
    constructor(doc, config){
        if (config.value !== config.valueController.value) throw TpError.shouldNeverHappen();
        const viewProps = config.valueController.viewProps;
        const lc = new LabelController(doc, {
            blade: config.blade,
            props: config.props,
            valueController: config.valueController
        });
        super(Object.assign(Object.assign({}, config), {
            view: new LabelView(doc, {
                props: config.props,
                viewProps: viewProps
            }),
            viewProps: viewProps
        }));
        this.labelController = lc;
        this.value = config.value;
        this.valueController = config.valueController;
        this.view.valueElement.appendChild(this.valueController.view.element);
    }
    importState(state) {
        return importBladeState(state, (s)=>{
            var _a, _b, _c;
            return super.importState(s) && this.labelController.importProps(s) && ((_c = (_b = (_a = this.valueController).importProps) === null || _b === void 0 ? void 0 : _b.call(_a, state)) !== null && _c !== void 0 ? _c : true);
        }, (p)=>({
                value: p.optional.raw
            }), (result)=>{
            if (result.value) this.value.rawValue = result.value;
            return true;
        });
    }
    exportState() {
        var _a, _b, _c;
        return exportBladeState(()=>super.exportState(), Object.assign(Object.assign({
            value: this.value.rawValue
        }, this.labelController.exportProps()), (_c = (_b = (_a = this.valueController).exportProps) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : {}));
    }
}
function excludeValue(state) {
    const result = Object.assign({}, state);
    delete result.value;
    return result;
}
class BindingController extends LabeledValueBladeController {
    constructor(doc, config){
        super(doc, config);
        this.tag = config.tag;
    }
    importState(state) {
        return importBladeState(state, (_s)=>super.importState(excludeValue(state)), (p)=>({
                tag: p.optional.string
            }), (result)=>{
            this.tag = result.tag;
            return true;
        });
    }
    exportState() {
        return exportBladeState(()=>excludeValue(super.exportState()), {
            binding: {
                key: this.value.binding.target.key,
                value: this.value.binding.target.read()
            },
            tag: this.tag
        });
    }
}
function isBindingController(bc) {
    return isValueBladeController(bc) && isBindingValue(bc.value);
}
class InputBindingController extends BindingController {
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s), (p)=>({
                binding: p.required.object({
                    value: p.required.raw
                })
            }), (result)=>{
            this.value.binding.inject(result.binding.value);
            this.value.fetch();
            return true;
        });
    }
}
function isInputBindingController(bc) {
    return isValueBladeController(bc) && isInputBindingValue(bc.value);
}
function fillBuffer(buffer, bufferSize) {
    while(buffer.length < bufferSize)buffer.push(undefined);
}
function initializeBuffer(bufferSize) {
    const buffer = [];
    fillBuffer(buffer, bufferSize);
    return buffer;
}
function createTrimmedBuffer(buffer) {
    const index = buffer.indexOf(undefined);
    return forceCast(index < 0 ? buffer : buffer.slice(0, index));
}
function createPushedBuffer(buffer, newValue) {
    const newBuffer = [
        ...createTrimmedBuffer(buffer),
        newValue
    ];
    if (newBuffer.length > buffer.length) newBuffer.splice(0, newBuffer.length - buffer.length);
    else fillBuffer(newBuffer, buffer.length);
    return newBuffer;
}
class MonitorBindingValue {
    constructor(config){
        this.emitter = new Emitter();
        this.onTick_ = this.onTick_.bind(this);
        this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.binding = config.binding;
        this.value_ = createValue(initializeBuffer(config.bufferSize));
        this.value_.emitter.on("beforechange", this.onValueBeforeChange_);
        this.value_.emitter.on("change", this.onValueChange_);
        this.ticker = config.ticker;
        this.ticker.emitter.on("tick", this.onTick_);
        this.fetch();
    }
    get rawValue() {
        return this.value_.rawValue;
    }
    set rawValue(rawValue) {
        this.value_.rawValue = rawValue;
    }
    setRawValue(rawValue, options) {
        this.value_.setRawValue(rawValue, options);
    }
    fetch() {
        this.value_.rawValue = createPushedBuffer(this.value_.rawValue, this.binding.read());
    }
    onTick_() {
        this.fetch();
    }
    onValueBeforeChange_(ev) {
        this.emitter.emit("beforechange", Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
    onValueChange_(ev) {
        this.emitter.emit("change", Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
}
function isMonitorBindingValue(v) {
    if (!("binding" in v)) return false;
    const b = v["binding"];
    return isBinding(b) && "read" in b && !("write" in b);
}
class MonitorBindingController extends BindingController {
    exportState() {
        return exportBladeState(()=>super.exportState(), {
            binding: {
                readonly: true
            }
        });
    }
}
function isMonitorBindingController(bc) {
    return isValueBladeController(bc) && isMonitorBindingValue(bc.value);
}
class ButtonApi extends BladeApi {
    get label() {
        return this.controller.labelController.props.get("label");
    }
    set label(label) {
        this.controller.labelController.props.set("label", label);
    }
    get title() {
        var _a;
        return (_a = this.controller.buttonController.props.get("title")) !== null && _a !== void 0 ? _a : "";
    }
    set title(title) {
        this.controller.buttonController.props.set("title", title);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        const emitter = this.controller.buttonController.emitter;
        emitter.on(eventName, (ev)=>{
            bh(new TpMouseEvent(this, ev.nativeEvent));
        });
        return this;
    }
    off(eventName, handler) {
        const emitter = this.controller.buttonController.emitter;
        emitter.off(eventName, handler);
        return this;
    }
}
function applyClass(elem, className, active) {
    if (active) elem.classList.add(className);
    else elem.classList.remove(className);
}
function valueToClassName(elem, className) {
    return (value)=>{
        applyClass(elem, className, value);
    };
}
function bindValueToTextContent(value, elem) {
    bindValue(value, (text)=>{
        elem.textContent = text !== null && text !== void 0 ? text : "";
    });
}
const cn$p = ClassName("btn");
class ButtonView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$p());
        config.viewProps.bindClassModifiers(this.element);
        const buttonElem = doc.createElement("button");
        buttonElem.classList.add(cn$p("b"));
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const titleElem = doc.createElement("div");
        titleElem.classList.add(cn$p("t"));
        bindValueToTextContent(config.props.value("title"), titleElem);
        this.buttonElement.appendChild(titleElem);
    }
}
class ButtonController {
    constructor(doc, config){
        this.emitter = new Emitter();
        this.onClick_ = this.onClick_.bind(this);
        this.props = config.props;
        this.viewProps = config.viewProps;
        this.view = new ButtonView(doc, {
            props: this.props,
            viewProps: this.viewProps
        });
        this.view.buttonElement.addEventListener("click", this.onClick_);
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                title: p.optional.string
            }), (result)=>{
            this.props.set("title", result.title);
            return true;
        });
    }
    exportProps() {
        return exportBladeState(null, {
            title: this.props.get("title")
        });
    }
    onClick_(ev) {
        this.emitter.emit("click", {
            nativeEvent: ev,
            sender: this
        });
    }
}
class ButtonBladeController extends BladeController {
    constructor(doc, config){
        const bc = new ButtonController(doc, {
            props: config.buttonProps,
            viewProps: config.viewProps
        });
        const lc = new LabelController(doc, {
            blade: config.blade,
            props: config.labelProps,
            valueController: bc
        });
        super({
            blade: config.blade,
            view: lc.view,
            viewProps: config.viewProps
        });
        this.buttonController = bc;
        this.labelController = lc;
    }
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s) && this.buttonController.importProps(s) && this.labelController.importProps(s), ()=>({}), ()=>true);
    }
    exportState() {
        return exportBladeState(()=>super.exportState(), Object.assign(Object.assign({}, this.buttonController.exportProps()), this.labelController.exportProps()));
    }
}
class Semver {
    constructor(text){
        const [core, prerelease] = text.split("-");
        const coreComps = core.split(".");
        this.major = parseInt(coreComps[0], 10);
        this.minor = parseInt(coreComps[1], 10);
        this.patch = parseInt(coreComps[2], 10);
        this.prerelease = prerelease !== null && prerelease !== void 0 ? prerelease : null;
    }
    toString() {
        const core = [
            this.major,
            this.minor,
            this.patch
        ].join(".");
        return this.prerelease !== null ? [
            core,
            this.prerelease
        ].join("-") : core;
    }
}
const VERSION$1 = new Semver("2.0.3");
function createPlugin(plugin) {
    return Object.assign({
        core: VERSION$1
    }, plugin);
}
const ButtonBladePlugin = createPlugin({
    id: "button",
    type: "blade",
    accept (params) {
        const result = parseRecord(params, (p)=>({
                title: p.required.string,
                view: p.required.constant("button"),
                label: p.optional.string
            }));
        return result ? {
            params: result
        } : null;
    },
    controller (args) {
        return new ButtonBladeController(args.document, {
            blade: args.blade,
            buttonProps: ValueMap.fromObject({
                title: args.params.title
            }),
            labelProps: ValueMap.fromObject({
                label: args.params.label
            }),
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (args.controller instanceof ButtonBladeController) return new ButtonApi(args.controller);
        return null;
    }
});
function addButtonAsBlade(api, params) {
    return api.addBlade(Object.assign(Object.assign({}, params), {
        view: "button"
    }));
}
function addFolderAsBlade(api, params) {
    return api.addBlade(Object.assign(Object.assign({}, params), {
        view: "folder"
    }));
}
function addTabAsBlade(api, params) {
    return api.addBlade(Object.assign(Object.assign({}, params), {
        view: "tab"
    }));
}
function isRefreshable(value) {
    if (!isObject$1(value)) return false;
    return "refresh" in value && typeof value.refresh === "function";
}
function createBindingTarget(obj, key) {
    if (!BindingTarget.isBindable(obj)) throw TpError.notBindable();
    return new BindingTarget(obj, key);
}
class RackApi {
    constructor(controller, pool){
        this.onRackValueChange_ = this.onRackValueChange_.bind(this);
        this.controller_ = controller;
        this.emitter_ = new Emitter();
        this.pool_ = pool;
        const rack = this.controller_.rack;
        rack.emitter.on("valuechange", this.onRackValueChange_);
    }
    get children() {
        return this.controller_.rack.children.map((bc)=>this.pool_.createApi(bc));
    }
    addBinding(object, key, opt_params) {
        const params = opt_params !== null && opt_params !== void 0 ? opt_params : {};
        const doc = this.controller_.element.ownerDocument;
        const bc = this.pool_.createBinding(doc, createBindingTarget(object, key), params);
        const api = this.pool_.createBindingApi(bc);
        return this.add(api, params.index);
    }
    addFolder(params) {
        return addFolderAsBlade(this, params);
    }
    addButton(params) {
        return addButtonAsBlade(this, params);
    }
    addTab(params) {
        return addTabAsBlade(this, params);
    }
    add(api, opt_index) {
        const bc = api.controller;
        this.controller_.rack.add(bc, opt_index);
        return api;
    }
    remove(api) {
        this.controller_.rack.remove(api.controller);
    }
    addBlade(params) {
        const doc = this.controller_.element.ownerDocument;
        const bc = this.pool_.createBlade(doc, params);
        const api = this.pool_.createApi(bc);
        return this.add(api, params.index);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
    refresh() {
        this.children.forEach((c)=>{
            if (isRefreshable(c)) c.refresh();
        });
    }
    onRackValueChange_(ev) {
        const bc = ev.bladeController;
        const api = this.pool_.createApi(bc);
        const binding = isBindingValue(bc.value) ? bc.value.binding : null;
        this.emitter_.emit("change", new TpChangeEvent(api, binding ? binding.target.read() : bc.value.rawValue, ev.options.last));
    }
}
class ContainerBladeApi extends BladeApi {
    constructor(controller, pool){
        super(controller);
        this.rackApi_ = new RackApi(controller.rackController, pool);
    }
    refresh() {
        this.rackApi_.refresh();
    }
}
class ContainerBladeController extends BladeController {
    constructor(config){
        super({
            blade: config.blade,
            view: config.view,
            viewProps: config.rackController.viewProps
        });
        this.rackController = config.rackController;
    }
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s), (p)=>({
                children: p.required.array(p.required.raw)
            }), (result)=>{
            return this.rackController.rack.children.every((c, index)=>{
                return c.importState(result.children[index]);
            });
        });
    }
    exportState() {
        return exportBladeState(()=>super.exportState(), {
            children: this.rackController.rack.children.map((c)=>c.exportState())
        });
    }
}
function isContainerBladeController(bc) {
    return "rackController" in bc;
}
class NestedOrderedSet {
    constructor(extract){
        this.emitter = new Emitter();
        this.items_ = [];
        this.cache_ = new Set();
        this.onSubListAdd_ = this.onSubListAdd_.bind(this);
        this.onSubListRemove_ = this.onSubListRemove_.bind(this);
        this.extract_ = extract;
    }
    get items() {
        return this.items_;
    }
    allItems() {
        return Array.from(this.cache_);
    }
    find(callback) {
        for (const item of this.allItems()){
            if (callback(item)) return item;
        }
        return null;
    }
    includes(item) {
        return this.cache_.has(item);
    }
    add(item, opt_index) {
        if (this.includes(item)) throw TpError.shouldNeverHappen();
        const index = opt_index !== undefined ? opt_index : this.items_.length;
        this.items_.splice(index, 0, item);
        this.cache_.add(item);
        const subList = this.extract_(item);
        if (subList) {
            subList.emitter.on("add", this.onSubListAdd_);
            subList.emitter.on("remove", this.onSubListRemove_);
            subList.allItems().forEach((i)=>{
                this.cache_.add(i);
            });
        }
        this.emitter.emit("add", {
            index: index,
            item: item,
            root: this,
            target: this
        });
    }
    remove(item) {
        const index = this.items_.indexOf(item);
        if (index < 0) return;
        this.items_.splice(index, 1);
        this.cache_.delete(item);
        const subList = this.extract_(item);
        if (subList) {
            subList.allItems().forEach((i)=>{
                this.cache_.delete(i);
            });
            subList.emitter.off("add", this.onSubListAdd_);
            subList.emitter.off("remove", this.onSubListRemove_);
        }
        this.emitter.emit("remove", {
            index: index,
            item: item,
            root: this,
            target: this
        });
    }
    onSubListAdd_(ev) {
        this.cache_.add(ev.item);
        this.emitter.emit("add", {
            index: ev.index,
            item: ev.item,
            root: this,
            target: ev.target
        });
    }
    onSubListRemove_(ev) {
        this.cache_.delete(ev.item);
        this.emitter.emit("remove", {
            index: ev.index,
            item: ev.item,
            root: this,
            target: ev.target
        });
    }
}
function findValueBladeController(bcs, v) {
    for(let i = 0; i < bcs.length; i++){
        const bc = bcs[i];
        if (isValueBladeController(bc) && bc.value === v) return bc;
    }
    return null;
}
function findSubBladeControllerSet(bc) {
    return isContainerBladeController(bc) ? bc.rackController.rack["bcSet_"] : null;
}
class Rack {
    constructor(config){
        var _a, _b;
        this.emitter = new Emitter();
        this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this);
        this.onSetAdd_ = this.onSetAdd_.bind(this);
        this.onSetRemove_ = this.onSetRemove_.bind(this);
        this.onChildDispose_ = this.onChildDispose_.bind(this);
        this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this);
        this.onChildValueChange_ = this.onChildValueChange_.bind(this);
        this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this);
        this.onRackLayout_ = this.onRackLayout_.bind(this);
        this.onRackValueChange_ = this.onRackValueChange_.bind(this);
        this.blade_ = (_a = config.blade) !== null && _a !== void 0 ? _a : null;
        (_b = this.blade_) === null || _b === void 0 || _b.value("positions").emitter.on("change", this.onBladePositionsChange_);
        this.viewProps = config.viewProps;
        this.bcSet_ = new NestedOrderedSet(findSubBladeControllerSet);
        this.bcSet_.emitter.on("add", this.onSetAdd_);
        this.bcSet_.emitter.on("remove", this.onSetRemove_);
    }
    get children() {
        return this.bcSet_.items;
    }
    add(bc, opt_index) {
        var _a;
        (_a = bc.parent) === null || _a === void 0 || _a.remove(bc);
        bc.parent = this;
        this.bcSet_.add(bc, opt_index);
    }
    remove(bc) {
        bc.parent = null;
        this.bcSet_.remove(bc);
    }
    find(finder) {
        return this.bcSet_.allItems().filter(finder);
    }
    onSetAdd_(ev) {
        this.updatePositions_();
        const root = ev.target === ev.root;
        this.emitter.emit("add", {
            bladeController: ev.item,
            index: ev.index,
            root: root,
            sender: this
        });
        if (!root) return;
        const bc = ev.item;
        bc.viewProps.emitter.on("change", this.onChildViewPropsChange_);
        bc.blade.value("positions").emitter.on("change", this.onChildPositionsChange_);
        bc.viewProps.handleDispose(this.onChildDispose_);
        if (isValueBladeController(bc)) bc.value.emitter.on("change", this.onChildValueChange_);
        else if (isContainerBladeController(bc)) {
            const rack = bc.rackController.rack;
            if (rack) {
                const emitter = rack.emitter;
                emitter.on("layout", this.onRackLayout_);
                emitter.on("valuechange", this.onRackValueChange_);
            }
        }
    }
    onSetRemove_(ev) {
        this.updatePositions_();
        const root = ev.target === ev.root;
        this.emitter.emit("remove", {
            bladeController: ev.item,
            root: root,
            sender: this
        });
        if (!root) return;
        const bc = ev.item;
        if (isValueBladeController(bc)) bc.value.emitter.off("change", this.onChildValueChange_);
        else if (isContainerBladeController(bc)) {
            const rack = bc.rackController.rack;
            if (rack) {
                const emitter = rack.emitter;
                emitter.off("layout", this.onRackLayout_);
                emitter.off("valuechange", this.onRackValueChange_);
            }
        }
    }
    updatePositions_() {
        const visibleItems = this.bcSet_.items.filter((bc)=>!bc.viewProps.get("hidden"));
        const firstVisibleItem = visibleItems[0];
        const lastVisibleItem = visibleItems[visibleItems.length - 1];
        this.bcSet_.items.forEach((bc)=>{
            const ps = [];
            if (bc === firstVisibleItem) {
                ps.push("first");
                if (!this.blade_ || this.blade_.get("positions").includes("veryfirst")) ps.push("veryfirst");
            }
            if (bc === lastVisibleItem) {
                ps.push("last");
                if (!this.blade_ || this.blade_.get("positions").includes("verylast")) ps.push("verylast");
            }
            bc.blade.set("positions", ps);
        });
    }
    onChildPositionsChange_() {
        this.updatePositions_();
        this.emitter.emit("layout", {
            sender: this
        });
    }
    onChildViewPropsChange_(_ev) {
        this.updatePositions_();
        this.emitter.emit("layout", {
            sender: this
        });
    }
    onChildDispose_() {
        const disposedUcs = this.bcSet_.items.filter((bc)=>{
            return bc.viewProps.get("disposed");
        });
        disposedUcs.forEach((bc)=>{
            this.bcSet_.remove(bc);
        });
    }
    onChildValueChange_(ev) {
        const bc = findValueBladeController(this.find(isValueBladeController), ev.sender);
        if (!bc) throw TpError.alreadyDisposed();
        this.emitter.emit("valuechange", {
            bladeController: bc,
            options: ev.options,
            sender: this
        });
    }
    onRackLayout_(_) {
        this.updatePositions_();
        this.emitter.emit("layout", {
            sender: this
        });
    }
    onRackValueChange_(ev) {
        this.emitter.emit("valuechange", {
            bladeController: ev.bladeController,
            options: ev.options,
            sender: this
        });
    }
    onBladePositionsChange_() {
        this.updatePositions_();
    }
}
class RackController {
    constructor(config){
        this.onRackAdd_ = this.onRackAdd_.bind(this);
        this.onRackRemove_ = this.onRackRemove_.bind(this);
        this.element = config.element;
        this.viewProps = config.viewProps;
        const rack = new Rack({
            blade: config.root ? undefined : config.blade,
            viewProps: config.viewProps
        });
        rack.emitter.on("add", this.onRackAdd_);
        rack.emitter.on("remove", this.onRackRemove_);
        this.rack = rack;
        this.viewProps.handleDispose(()=>{
            for(let i = this.rack.children.length - 1; i >= 0; i--){
                const bc = this.rack.children[i];
                bc.viewProps.set("disposed", true);
            }
        });
    }
    onRackAdd_(ev) {
        if (!ev.root) return;
        insertElementAt(this.element, ev.bladeController.view.element, ev.index);
    }
    onRackRemove_(ev) {
        if (!ev.root) return;
        removeElement(ev.bladeController.view.element);
    }
}
function createBlade() {
    return new ValueMap({
        positions: createValue([], {
            equals: deepEqualsArray
        })
    });
}
class Foldable extends ValueMap {
    constructor(valueMap){
        super(valueMap);
    }
    static create(expanded) {
        const coreObj = {
            completed: true,
            expanded: expanded,
            expandedHeight: null,
            shouldFixHeight: false,
            temporaryExpanded: null
        };
        const core = ValueMap.createCore(coreObj);
        return new Foldable(core);
    }
    get styleExpanded() {
        var _a;
        return (_a = this.get("temporaryExpanded")) !== null && _a !== void 0 ? _a : this.get("expanded");
    }
    get styleHeight() {
        if (!this.styleExpanded) return "0";
        const exHeight = this.get("expandedHeight");
        if (this.get("shouldFixHeight") && !isEmpty(exHeight)) return `${exHeight}px`;
        return "auto";
    }
    bindExpandedClass(elem, expandedClassName) {
        const onExpand = ()=>{
            const expanded = this.styleExpanded;
            if (expanded) elem.classList.add(expandedClassName);
            else elem.classList.remove(expandedClassName);
        };
        bindValueMap(this, "expanded", onExpand);
        bindValueMap(this, "temporaryExpanded", onExpand);
    }
    cleanUpTransition() {
        this.set("shouldFixHeight", false);
        this.set("expandedHeight", null);
        this.set("completed", true);
    }
}
function computeExpandedFolderHeight(folder, containerElement) {
    let height = 0;
    disableTransitionTemporarily(containerElement, ()=>{
        folder.set("expandedHeight", null);
        folder.set("temporaryExpanded", true);
        forceReflow(containerElement);
        height = containerElement.clientHeight;
        folder.set("temporaryExpanded", null);
        forceReflow(containerElement);
    });
    return height;
}
function applyHeight(foldable, elem) {
    elem.style.height = foldable.styleHeight;
}
function bindFoldable(foldable, elem) {
    foldable.value("expanded").emitter.on("beforechange", ()=>{
        foldable.set("completed", false);
        if (isEmpty(foldable.get("expandedHeight"))) {
            const h = computeExpandedFolderHeight(foldable, elem);
            if (h > 0) foldable.set("expandedHeight", h);
        }
        foldable.set("shouldFixHeight", true);
        forceReflow(elem);
    });
    foldable.emitter.on("change", ()=>{
        applyHeight(foldable, elem);
    });
    applyHeight(foldable, elem);
    elem.addEventListener("transitionend", (ev)=>{
        if (ev.propertyName !== "height") return;
        foldable.cleanUpTransition();
    });
}
class FolderApi extends ContainerBladeApi {
    constructor(controller, pool){
        super(controller, pool);
        this.emitter_ = new Emitter();
        this.controller.foldable.value("expanded").emitter.on("change", (ev)=>{
            this.emitter_.emit("fold", new TpFoldEvent(this, ev.sender.rawValue));
        });
        this.rackApi_.on("change", (ev)=>{
            this.emitter_.emit("change", ev);
        });
    }
    get expanded() {
        return this.controller.foldable.get("expanded");
    }
    set expanded(expanded) {
        this.controller.foldable.set("expanded", expanded);
    }
    get title() {
        return this.controller.props.get("title");
    }
    set title(title) {
        this.controller.props.set("title", title);
    }
    get children() {
        return this.rackApi_.children;
    }
    addBinding(object, key, opt_params) {
        return this.rackApi_.addBinding(object, key, opt_params);
    }
    addFolder(params) {
        return this.rackApi_.addFolder(params);
    }
    addButton(params) {
        return this.rackApi_.addButton(params);
    }
    addTab(params) {
        return this.rackApi_.addTab(params);
    }
    add(api, opt_index) {
        return this.rackApi_.add(api, opt_index);
    }
    remove(api) {
        this.rackApi_.remove(api);
    }
    addBlade(params) {
        return this.rackApi_.addBlade(params);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
}
const bladeContainerClassName = ClassName("cnt");
class FolderView {
    constructor(doc, config){
        var _a;
        this.className_ = ClassName((_a = config.viewName) !== null && _a !== void 0 ? _a : "fld");
        this.element = doc.createElement("div");
        this.element.classList.add(this.className_(), bladeContainerClassName());
        config.viewProps.bindClassModifiers(this.element);
        this.foldable_ = config.foldable;
        this.foldable_.bindExpandedClass(this.element, this.className_(undefined, "expanded"));
        bindValueMap(this.foldable_, "completed", valueToClassName(this.element, this.className_(undefined, "cpl")));
        const buttonElem = doc.createElement("button");
        buttonElem.classList.add(this.className_("b"));
        bindValueMap(config.props, "title", (title)=>{
            if (isEmpty(title)) this.element.classList.add(this.className_(undefined, "not"));
            else this.element.classList.remove(this.className_(undefined, "not"));
        });
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const indentElem = doc.createElement("div");
        indentElem.classList.add(this.className_("i"));
        this.element.appendChild(indentElem);
        const titleElem = doc.createElement("div");
        titleElem.classList.add(this.className_("t"));
        bindValueToTextContent(config.props.value("title"), titleElem);
        this.buttonElement.appendChild(titleElem);
        this.titleElement = titleElem;
        const markElem = doc.createElement("div");
        markElem.classList.add(this.className_("m"));
        this.buttonElement.appendChild(markElem);
        const containerElem = doc.createElement("div");
        containerElem.classList.add(this.className_("c"));
        this.element.appendChild(containerElem);
        this.containerElement = containerElem;
    }
}
class FolderController extends ContainerBladeController {
    constructor(doc, config){
        var _a;
        const foldable = Foldable.create((_a = config.expanded) !== null && _a !== void 0 ? _a : true);
        const view = new FolderView(doc, {
            foldable: foldable,
            props: config.props,
            viewName: config.root ? "rot" : undefined,
            viewProps: config.viewProps
        });
        super(Object.assign(Object.assign({}, config), {
            rackController: new RackController({
                blade: config.blade,
                element: view.containerElement,
                root: config.root,
                viewProps: config.viewProps
            }),
            view: view
        }));
        this.onTitleClick_ = this.onTitleClick_.bind(this);
        this.props = config.props;
        this.foldable = foldable;
        bindFoldable(this.foldable, this.view.containerElement);
        this.rackController.rack.emitter.on("add", ()=>{
            this.foldable.cleanUpTransition();
        });
        this.rackController.rack.emitter.on("remove", ()=>{
            this.foldable.cleanUpTransition();
        });
        this.view.buttonElement.addEventListener("click", this.onTitleClick_);
    }
    get document() {
        return this.view.element.ownerDocument;
    }
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s), (p)=>({
                expanded: p.required.boolean,
                title: p.optional.string
            }), (result)=>{
            this.foldable.set("expanded", result.expanded);
            this.props.set("title", result.title);
            return true;
        });
    }
    exportState() {
        return exportBladeState(()=>super.exportState(), {
            expanded: this.foldable.get("expanded"),
            title: this.props.get("title")
        });
    }
    onTitleClick_() {
        this.foldable.set("expanded", !this.foldable.get("expanded"));
    }
}
const FolderBladePlugin = createPlugin({
    id: "folder",
    type: "blade",
    accept (params) {
        const result = parseRecord(params, (p)=>({
                title: p.required.string,
                view: p.required.constant("folder"),
                expanded: p.optional.boolean
            }));
        return result ? {
            params: result
        } : null;
    },
    controller (args) {
        return new FolderController(args.document, {
            blade: args.blade,
            expanded: args.params.expanded,
            props: ValueMap.fromObject({
                title: args.params.title
            }),
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (!(args.controller instanceof FolderController)) return null;
        return new FolderApi(args.controller, args.pool);
    }
});
const cn$o = ClassName("");
function valueToModifier(elem, modifier) {
    return valueToClassName(elem, cn$o(undefined, modifier));
}
class ViewProps extends ValueMap {
    constructor(valueMap){
        var _a;
        super(valueMap);
        this.onDisabledChange_ = this.onDisabledChange_.bind(this);
        this.onParentChange_ = this.onParentChange_.bind(this);
        this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this);
        [this.globalDisabled_, this.setGlobalDisabled_] = createReadonlyValue(createValue(this.getGlobalDisabled_()));
        this.value("disabled").emitter.on("change", this.onDisabledChange_);
        this.value("parent").emitter.on("change", this.onParentChange_);
        (_a = this.get("parent")) === null || _a === void 0 || _a.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
    }
    static create(opt_initialValue) {
        var _a, _b, _c;
        const initialValue = opt_initialValue !== null && opt_initialValue !== void 0 ? opt_initialValue : {};
        return new ViewProps(ValueMap.createCore({
            disabled: (_a = initialValue.disabled) !== null && _a !== void 0 ? _a : false,
            disposed: false,
            hidden: (_b = initialValue.hidden) !== null && _b !== void 0 ? _b : false,
            parent: (_c = initialValue.parent) !== null && _c !== void 0 ? _c : null
        }));
    }
    get globalDisabled() {
        return this.globalDisabled_;
    }
    bindClassModifiers(elem) {
        bindValue(this.globalDisabled_, valueToModifier(elem, "disabled"));
        bindValueMap(this, "hidden", valueToModifier(elem, "hidden"));
    }
    bindDisabled(target) {
        bindValue(this.globalDisabled_, (disabled)=>{
            target.disabled = disabled;
        });
    }
    bindTabIndex(elem) {
        bindValue(this.globalDisabled_, (disabled)=>{
            elem.tabIndex = disabled ? -1 : 0;
        });
    }
    handleDispose(callback) {
        this.value("disposed").emitter.on("change", (disposed)=>{
            if (disposed) callback();
        });
    }
    importState(state) {
        this.set("disabled", state.disabled);
        this.set("hidden", state.hidden);
    }
    exportState() {
        return {
            disabled: this.get("disabled"),
            hidden: this.get("hidden")
        };
    }
    getGlobalDisabled_() {
        const parent = this.get("parent");
        const parentDisabled = parent ? parent.globalDisabled.rawValue : false;
        return parentDisabled || this.get("disabled");
    }
    updateGlobalDisabled_() {
        this.setGlobalDisabled_(this.getGlobalDisabled_());
    }
    onDisabledChange_() {
        this.updateGlobalDisabled_();
    }
    onParentGlobalDisabledChange_() {
        this.updateGlobalDisabled_();
    }
    onParentChange_(ev) {
        var _a;
        const prevParent = ev.previousRawValue;
        prevParent === null || prevParent === void 0 || prevParent.globalDisabled.emitter.off("change", this.onParentGlobalDisabledChange_);
        (_a = this.get("parent")) === null || _a === void 0 || _a.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
        this.updateGlobalDisabled_();
    }
}
const cn$n = ClassName("tbp");
class TabPageView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$n());
        config.viewProps.bindClassModifiers(this.element);
        const containerElem = doc.createElement("div");
        containerElem.classList.add(cn$n("c"));
        this.element.appendChild(containerElem);
        this.containerElement = containerElem;
    }
}
const cn$m = ClassName("tbi");
class TabItemView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$m());
        config.viewProps.bindClassModifiers(this.element);
        bindValueMap(config.props, "selected", (selected)=>{
            if (selected) this.element.classList.add(cn$m(undefined, "sel"));
            else this.element.classList.remove(cn$m(undefined, "sel"));
        });
        const buttonElem = doc.createElement("button");
        buttonElem.classList.add(cn$m("b"));
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const titleElem = doc.createElement("div");
        titleElem.classList.add(cn$m("t"));
        bindValueToTextContent(config.props.value("title"), titleElem);
        this.buttonElement.appendChild(titleElem);
        this.titleElement = titleElem;
    }
}
class TabItemController {
    constructor(doc, config){
        this.emitter = new Emitter();
        this.onClick_ = this.onClick_.bind(this);
        this.props = config.props;
        this.viewProps = config.viewProps;
        this.view = new TabItemView(doc, {
            props: config.props,
            viewProps: config.viewProps
        });
        this.view.buttonElement.addEventListener("click", this.onClick_);
    }
    onClick_() {
        this.emitter.emit("click", {
            sender: this
        });
    }
}
class TabPageController extends ContainerBladeController {
    constructor(doc, config){
        const view = new TabPageView(doc, {
            viewProps: config.viewProps
        });
        super(Object.assign(Object.assign({}, config), {
            rackController: new RackController({
                blade: config.blade,
                element: view.containerElement,
                viewProps: config.viewProps
            }),
            view: view
        }));
        this.onItemClick_ = this.onItemClick_.bind(this);
        this.ic_ = new TabItemController(doc, {
            props: config.itemProps,
            viewProps: ViewProps.create()
        });
        this.ic_.emitter.on("click", this.onItemClick_);
        this.props = config.props;
        bindValueMap(this.props, "selected", (selected)=>{
            this.itemController.props.set("selected", selected);
            this.viewProps.set("hidden", !selected);
        });
    }
    get itemController() {
        return this.ic_;
    }
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s), (p)=>({
                selected: p.required.boolean,
                title: p.required.string
            }), (result)=>{
            this.ic_.props.set("selected", result.selected);
            this.ic_.props.set("title", result.title);
            return true;
        });
    }
    exportState() {
        return exportBladeState(()=>super.exportState(), {
            selected: this.ic_.props.get("selected"),
            title: this.ic_.props.get("title")
        });
    }
    onItemClick_() {
        this.props.set("selected", true);
    }
}
class TabApi extends ContainerBladeApi {
    constructor(controller, pool){
        super(controller, pool);
        this.emitter_ = new Emitter();
        this.onSelect_ = this.onSelect_.bind(this);
        this.pool_ = pool;
        this.rackApi_.on("change", (ev)=>{
            this.emitter_.emit("change", ev);
        });
        this.controller.tab.selectedIndex.emitter.on("change", this.onSelect_);
    }
    get pages() {
        return this.rackApi_.children;
    }
    addPage(params) {
        const doc = this.controller.view.element.ownerDocument;
        const pc = new TabPageController(doc, {
            blade: createBlade(),
            itemProps: ValueMap.fromObject({
                selected: false,
                title: params.title
            }),
            props: ValueMap.fromObject({
                selected: false
            }),
            viewProps: ViewProps.create()
        });
        const papi = this.pool_.createApi(pc);
        return this.rackApi_.add(papi, params.index);
    }
    removePage(index) {
        this.rackApi_.remove(this.rackApi_.children[index]);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
    onSelect_(ev) {
        this.emitter_.emit("select", new TpTabSelectEvent(this, ev.rawValue));
    }
}
class TabPageApi extends ContainerBladeApi {
    get title() {
        var _a;
        return (_a = this.controller.itemController.props.get("title")) !== null && _a !== void 0 ? _a : "";
    }
    set title(title) {
        this.controller.itemController.props.set("title", title);
    }
    get selected() {
        return this.controller.props.get("selected");
    }
    set selected(selected) {
        this.controller.props.set("selected", selected);
    }
    get children() {
        return this.rackApi_.children;
    }
    addButton(params) {
        return this.rackApi_.addButton(params);
    }
    addFolder(params) {
        return this.rackApi_.addFolder(params);
    }
    addTab(params) {
        return this.rackApi_.addTab(params);
    }
    add(api, opt_index) {
        this.rackApi_.add(api, opt_index);
    }
    remove(api) {
        this.rackApi_.remove(api);
    }
    addBinding(object, key, opt_params) {
        return this.rackApi_.addBinding(object, key, opt_params);
    }
    addBlade(params) {
        return this.rackApi_.addBlade(params);
    }
}
const INDEX_NOT_SELECTED = -1;
class Tab {
    constructor(){
        this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this);
        this.empty = createValue(true);
        this.selectedIndex = createValue(INDEX_NOT_SELECTED);
        this.items_ = [];
    }
    add(item, opt_index) {
        const index = opt_index !== null && opt_index !== void 0 ? opt_index : this.items_.length;
        this.items_.splice(index, 0, item);
        item.emitter.on("change", this.onItemSelectedChange_);
        this.keepSelection_();
    }
    remove(item) {
        const index = this.items_.indexOf(item);
        if (index < 0) return;
        this.items_.splice(index, 1);
        item.emitter.off("change", this.onItemSelectedChange_);
        this.keepSelection_();
    }
    keepSelection_() {
        if (this.items_.length === 0) {
            this.selectedIndex.rawValue = INDEX_NOT_SELECTED;
            this.empty.rawValue = true;
            return;
        }
        const firstSelIndex = this.items_.findIndex((s)=>s.rawValue);
        if (firstSelIndex < 0) {
            this.items_.forEach((s, i)=>{
                s.rawValue = i === 0;
            });
            this.selectedIndex.rawValue = 0;
        } else {
            this.items_.forEach((s, i)=>{
                s.rawValue = i === firstSelIndex;
            });
            this.selectedIndex.rawValue = firstSelIndex;
        }
        this.empty.rawValue = false;
    }
    onItemSelectedChange_(ev) {
        if (ev.rawValue) {
            const index = this.items_.findIndex((s)=>s === ev.sender);
            this.items_.forEach((s, i)=>{
                s.rawValue = i === index;
            });
            this.selectedIndex.rawValue = index;
        } else this.keepSelection_();
    }
}
const cn$l = ClassName("tab");
class TabView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$l(), bladeContainerClassName());
        config.viewProps.bindClassModifiers(this.element);
        bindValue(config.empty, valueToClassName(this.element, cn$l(undefined, "nop")));
        const titleElem = doc.createElement("div");
        titleElem.classList.add(cn$l("t"));
        this.element.appendChild(titleElem);
        this.itemsElement = titleElem;
        const indentElem = doc.createElement("div");
        indentElem.classList.add(cn$l("i"));
        this.element.appendChild(indentElem);
        const contentsElem = doc.createElement("div");
        contentsElem.classList.add(cn$l("c"));
        this.element.appendChild(contentsElem);
        this.contentsElement = contentsElem;
    }
}
class TabController extends ContainerBladeController {
    constructor(doc, config){
        const tab = new Tab();
        const view = new TabView(doc, {
            empty: tab.empty,
            viewProps: config.viewProps
        });
        super({
            blade: config.blade,
            rackController: new RackController({
                blade: config.blade,
                element: view.contentsElement,
                viewProps: config.viewProps
            }),
            view: view
        });
        this.onRackAdd_ = this.onRackAdd_.bind(this);
        this.onRackRemove_ = this.onRackRemove_.bind(this);
        const rack = this.rackController.rack;
        rack.emitter.on("add", this.onRackAdd_);
        rack.emitter.on("remove", this.onRackRemove_);
        this.tab = tab;
    }
    add(pc, opt_index) {
        this.rackController.rack.add(pc, opt_index);
    }
    remove(index) {
        this.rackController.rack.remove(this.rackController.rack.children[index]);
    }
    onRackAdd_(ev) {
        if (!ev.root) return;
        const pc = ev.bladeController;
        insertElementAt(this.view.itemsElement, pc.itemController.view.element, ev.index);
        pc.itemController.viewProps.set("parent", this.viewProps);
        this.tab.add(pc.props.value("selected"));
    }
    onRackRemove_(ev) {
        if (!ev.root) return;
        const pc = ev.bladeController;
        removeElement(pc.itemController.view.element);
        pc.itemController.viewProps.set("parent", null);
        this.tab.remove(pc.props.value("selected"));
    }
}
const TabBladePlugin = createPlugin({
    id: "tab",
    type: "blade",
    accept (params) {
        const result = parseRecord(params, (p)=>({
                pages: p.required.array(p.required.object({
                    title: p.required.string
                })),
                view: p.required.constant("tab")
            }));
        if (!result || result.pages.length === 0) return null;
        return {
            params: result
        };
    },
    controller (args) {
        const c = new TabController(args.document, {
            blade: args.blade,
            viewProps: args.viewProps
        });
        args.params.pages.forEach((p)=>{
            const pc = new TabPageController(args.document, {
                blade: createBlade(),
                itemProps: ValueMap.fromObject({
                    selected: false,
                    title: p.title
                }),
                props: ValueMap.fromObject({
                    selected: false
                }),
                viewProps: ViewProps.create()
            });
            c.add(pc);
        });
        return c;
    },
    api (args) {
        if (args.controller instanceof TabController) return new TabApi(args.controller, args.pool);
        if (args.controller instanceof TabPageController) return new TabPageApi(args.controller, args.pool);
        return null;
    }
});
function createBladeController(plugin, args) {
    const ac = plugin.accept(args.params);
    if (!ac) return null;
    const params = parseRecord(args.params, (p)=>({
            disabled: p.optional.boolean,
            hidden: p.optional.boolean
        }));
    return plugin.controller({
        blade: createBlade(),
        document: args.document,
        params: forceCast(Object.assign(Object.assign({}, ac.params), {
            disabled: params === null || params === void 0 ? void 0 : params.disabled,
            hidden: params === null || params === void 0 ? void 0 : params.hidden
        })),
        viewProps: ViewProps.create({
            disabled: params === null || params === void 0 ? void 0 : params.disabled,
            hidden: params === null || params === void 0 ? void 0 : params.hidden
        })
    });
}
class ListInputBindingApi extends BindingApi {
    get options() {
        return this.controller.valueController.props.get("options");
    }
    set options(options) {
        this.controller.valueController.props.set("options", options);
    }
}
class ManualTicker {
    constructor(){
        this.disabled = false;
        this.emitter = new Emitter();
    }
    dispose() {}
    tick() {
        if (this.disabled) return;
        this.emitter.emit("tick", {
            sender: this
        });
    }
}
class IntervalTicker {
    constructor(doc, interval){
        this.disabled_ = false;
        this.timerId_ = null;
        this.onTick_ = this.onTick_.bind(this);
        this.doc_ = doc;
        this.emitter = new Emitter();
        this.interval_ = interval;
        this.setTimer_();
    }
    get disabled() {
        return this.disabled_;
    }
    set disabled(inactive) {
        this.disabled_ = inactive;
        if (this.disabled_) this.clearTimer_();
        else this.setTimer_();
    }
    dispose() {
        this.clearTimer_();
    }
    clearTimer_() {
        if (this.timerId_ === null) return;
        const win = this.doc_.defaultView;
        if (win) win.clearInterval(this.timerId_);
        this.timerId_ = null;
    }
    setTimer_() {
        this.clearTimer_();
        if (this.interval_ <= 0) return;
        const win = this.doc_.defaultView;
        if (win) this.timerId_ = win.setInterval(this.onTick_, this.interval_);
    }
    onTick_() {
        if (this.disabled_) return;
        this.emitter.emit("tick", {
            sender: this
        });
    }
}
class CompositeConstraint {
    constructor(constraints){
        this.constraints = constraints;
    }
    constrain(value) {
        return this.constraints.reduce((result, c)=>{
            return c.constrain(result);
        }, value);
    }
}
function findConstraint(c, constraintClass) {
    if (c instanceof constraintClass) return c;
    if (c instanceof CompositeConstraint) {
        const result = c.constraints.reduce((tmpResult, sc)=>{
            if (tmpResult) return tmpResult;
            return sc instanceof constraintClass ? sc : null;
        }, null);
        if (result) return result;
    }
    return null;
}
class ListConstraint {
    constructor(options){
        this.values = ValueMap.fromObject({
            options: options
        });
    }
    constrain(value) {
        const opts = this.values.get("options");
        if (opts.length === 0) return value;
        const matched = opts.filter((item)=>{
            return item.value === value;
        }).length > 0;
        return matched ? value : opts[0].value;
    }
}
function parseListOptions(value) {
    var _a;
    const p = MicroParsers;
    if (Array.isArray(value)) return (_a = parseRecord({
        items: value
    }, (p)=>({
            items: p.required.array(p.required.object({
                text: p.required.string,
                value: p.required.raw
            }))
        }))) === null || _a === void 0 ? void 0 : _a.items;
    if (typeof value === "object") return p.required.raw(value).value;
    return undefined;
}
function normalizeListOptions(options) {
    if (Array.isArray(options)) return options;
    const items = [];
    Object.keys(options).forEach((text)=>{
        items.push({
            text: text,
            value: options[text]
        });
    });
    return items;
}
function createListConstraint(options) {
    return !isEmpty(options) ? new ListConstraint(normalizeListOptions(forceCast(options))) : null;
}
const cn$k = ClassName("lst");
class ListView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.props_ = config.props;
        this.element = doc.createElement("div");
        this.element.classList.add(cn$k());
        config.viewProps.bindClassModifiers(this.element);
        const selectElem = doc.createElement("select");
        selectElem.classList.add(cn$k("s"));
        config.viewProps.bindDisabled(selectElem);
        this.element.appendChild(selectElem);
        this.selectElement = selectElem;
        const markElem = doc.createElement("div");
        markElem.classList.add(cn$k("m"));
        markElem.appendChild(createSvgIconElement(doc, "dropdown"));
        this.element.appendChild(markElem);
        config.value.emitter.on("change", this.onValueChange_);
        this.value_ = config.value;
        bindValueMap(this.props_, "options", (opts)=>{
            removeChildElements(this.selectElement);
            opts.forEach((item)=>{
                const optionElem = doc.createElement("option");
                optionElem.textContent = item.text;
                this.selectElement.appendChild(optionElem);
            });
            this.update_();
        });
    }
    update_() {
        const values = this.props_.get("options").map((o)=>o.value);
        this.selectElement.selectedIndex = values.indexOf(this.value_.rawValue);
    }
    onValueChange_() {
        this.update_();
    }
}
class ListController {
    constructor(doc, config){
        this.onSelectChange_ = this.onSelectChange_.bind(this);
        this.props = config.props;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new ListView(doc, {
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.selectElement.addEventListener("change", this.onSelectChange_);
    }
    onSelectChange_(e) {
        const selectElem = forceCast(e.currentTarget);
        this.value.rawValue = this.props.get("options")[selectElem.selectedIndex].value;
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                options: p.required.custom(parseListOptions)
            }), (result)=>{
            this.props.set("options", normalizeListOptions(result.options));
            return true;
        });
    }
    exportProps() {
        return exportBladeState(null, {
            options: this.props.get("options")
        });
    }
}
const cn$j = ClassName("pop");
class PopupView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$j());
        config.viewProps.bindClassModifiers(this.element);
        bindValue(config.shows, valueToClassName(this.element, cn$j(undefined, "v")));
    }
}
class PopupController {
    constructor(doc, config){
        this.shows = createValue(false);
        this.viewProps = config.viewProps;
        this.view = new PopupView(doc, {
            shows: this.shows,
            viewProps: this.viewProps
        });
    }
}
const cn$i = ClassName("txt");
class TextView {
    constructor(doc, config){
        this.onChange_ = this.onChange_.bind(this);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$i());
        config.viewProps.bindClassModifiers(this.element);
        this.props_ = config.props;
        this.props_.emitter.on("change", this.onChange_);
        const inputElem = doc.createElement("input");
        inputElem.classList.add(cn$i("i"));
        inputElem.type = "text";
        config.viewProps.bindDisabled(inputElem);
        this.element.appendChild(inputElem);
        this.inputElement = inputElem;
        config.value.emitter.on("change", this.onChange_);
        this.value_ = config.value;
        this.refresh();
    }
    refresh() {
        const formatter = this.props_.get("formatter");
        this.inputElement.value = formatter(this.value_.rawValue);
    }
    onChange_() {
        this.refresh();
    }
}
class TextController {
    constructor(doc, config){
        this.onInputChange_ = this.onInputChange_.bind(this);
        this.parser_ = config.parser;
        this.props = config.props;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new TextView(doc, {
            props: config.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.inputElement.addEventListener("change", this.onInputChange_);
    }
    onInputChange_(e) {
        const inputElem = forceCast(e.currentTarget);
        const value = inputElem.value;
        const parsedValue = this.parser_(value);
        if (!isEmpty(parsedValue)) this.value.rawValue = parsedValue;
        this.view.refresh();
    }
}
function boolToString(value) {
    return String(value);
}
function boolFromUnknown(value) {
    if (value === "false") return false;
    return !!value;
}
function BooleanFormatter(value) {
    return boolToString(value);
}
function composeParsers(parsers) {
    return (text)=>{
        return parsers.reduce((result, parser)=>{
            if (result !== null) return result;
            return parser(text);
        }, null);
    };
}
const innerFormatter = createNumberFormatter(0);
function formatPercentage(value) {
    return innerFormatter(value) + "%";
}
function stringFromUnknown(value) {
    return String(value);
}
function formatString(value) {
    return value;
}
function connectValues({ primary , secondary , forward , backward  }) {
    let changing = false;
    function preventFeedback(callback) {
        if (changing) return;
        changing = true;
        callback();
        changing = false;
    }
    primary.emitter.on("change", (ev)=>{
        preventFeedback(()=>{
            secondary.setRawValue(forward(primary.rawValue, secondary.rawValue), ev.options);
        });
    });
    secondary.emitter.on("change", (ev)=>{
        preventFeedback(()=>{
            primary.setRawValue(backward(primary.rawValue, secondary.rawValue), ev.options);
        });
        preventFeedback(()=>{
            secondary.setRawValue(forward(primary.rawValue, secondary.rawValue), ev.options);
        });
    });
    preventFeedback(()=>{
        secondary.setRawValue(forward(primary.rawValue, secondary.rawValue), {
            forceEmit: false,
            last: true
        });
    });
}
function getStepForKey(keyScale, keys) {
    const step = keyScale * (keys.altKey ? 0.1 : 1) * (keys.shiftKey ? 10 : 1);
    if (keys.upKey) return +step;
    else if (keys.downKey) return -step;
    return 0;
}
function getVerticalStepKeys(ev) {
    return {
        altKey: ev.altKey,
        downKey: ev.key === "ArrowDown",
        shiftKey: ev.shiftKey,
        upKey: ev.key === "ArrowUp"
    };
}
function getHorizontalStepKeys(ev) {
    return {
        altKey: ev.altKey,
        downKey: ev.key === "ArrowLeft",
        shiftKey: ev.shiftKey,
        upKey: ev.key === "ArrowRight"
    };
}
function isVerticalArrowKey(key) {
    return key === "ArrowUp" || key === "ArrowDown";
}
function isArrowKey(key) {
    return isVerticalArrowKey(key) || key === "ArrowLeft" || key === "ArrowRight";
}
function computeOffset$1(ev, elem) {
    var _a, _b;
    const win = elem.ownerDocument.defaultView;
    const rect = elem.getBoundingClientRect();
    return {
        x: ev.pageX - (((_a = win && win.scrollX) !== null && _a !== void 0 ? _a : 0) + rect.left),
        y: ev.pageY - (((_b = win && win.scrollY) !== null && _b !== void 0 ? _b : 0) + rect.top)
    };
}
class PointerHandler {
    constructor(element){
        this.lastTouch_ = null;
        this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this);
        this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this);
        this.onMouseDown_ = this.onMouseDown_.bind(this);
        this.onTouchEnd_ = this.onTouchEnd_.bind(this);
        this.onTouchMove_ = this.onTouchMove_.bind(this);
        this.onTouchStart_ = this.onTouchStart_.bind(this);
        this.elem_ = element;
        this.emitter = new Emitter();
        element.addEventListener("touchstart", this.onTouchStart_, {
            passive: false
        });
        element.addEventListener("touchmove", this.onTouchMove_, {
            passive: true
        });
        element.addEventListener("touchend", this.onTouchEnd_);
        element.addEventListener("mousedown", this.onMouseDown_);
    }
    computePosition_(offset) {
        const rect = this.elem_.getBoundingClientRect();
        return {
            bounds: {
                width: rect.width,
                height: rect.height
            },
            point: offset ? {
                x: offset.x,
                y: offset.y
            } : null
        };
    }
    onMouseDown_(ev) {
        var _a;
        ev.preventDefault();
        (_a = ev.currentTarget) === null || _a === void 0 || _a.focus();
        const doc = this.elem_.ownerDocument;
        doc.addEventListener("mousemove", this.onDocumentMouseMove_);
        doc.addEventListener("mouseup", this.onDocumentMouseUp_);
        this.emitter.emit("down", {
            altKey: ev.altKey,
            data: this.computePosition_(computeOffset$1(ev, this.elem_)),
            sender: this,
            shiftKey: ev.shiftKey
        });
    }
    onDocumentMouseMove_(ev) {
        this.emitter.emit("move", {
            altKey: ev.altKey,
            data: this.computePosition_(computeOffset$1(ev, this.elem_)),
            sender: this,
            shiftKey: ev.shiftKey
        });
    }
    onDocumentMouseUp_(ev) {
        const doc = this.elem_.ownerDocument;
        doc.removeEventListener("mousemove", this.onDocumentMouseMove_);
        doc.removeEventListener("mouseup", this.onDocumentMouseUp_);
        this.emitter.emit("up", {
            altKey: ev.altKey,
            data: this.computePosition_(computeOffset$1(ev, this.elem_)),
            sender: this,
            shiftKey: ev.shiftKey
        });
    }
    onTouchStart_(ev) {
        ev.preventDefault();
        const touch = ev.targetTouches.item(0);
        const rect = this.elem_.getBoundingClientRect();
        this.emitter.emit("down", {
            altKey: ev.altKey,
            data: this.computePosition_(touch ? {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
            } : undefined),
            sender: this,
            shiftKey: ev.shiftKey
        });
        this.lastTouch_ = touch;
    }
    onTouchMove_(ev) {
        const touch = ev.targetTouches.item(0);
        const rect = this.elem_.getBoundingClientRect();
        this.emitter.emit("move", {
            altKey: ev.altKey,
            data: this.computePosition_(touch ? {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
            } : undefined),
            sender: this,
            shiftKey: ev.shiftKey
        });
        this.lastTouch_ = touch;
    }
    onTouchEnd_(ev) {
        var _a;
        const touch = (_a = ev.targetTouches.item(0)) !== null && _a !== void 0 ? _a : this.lastTouch_;
        const rect = this.elem_.getBoundingClientRect();
        this.emitter.emit("up", {
            altKey: ev.altKey,
            data: this.computePosition_(touch ? {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
            } : undefined),
            sender: this,
            shiftKey: ev.shiftKey
        });
    }
}
const cn$h = ClassName("txt");
class NumberTextView {
    constructor(doc, config){
        this.onChange_ = this.onChange_.bind(this);
        this.props_ = config.props;
        this.props_.emitter.on("change", this.onChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$h(), cn$h(undefined, "num"));
        if (config.arrayPosition) this.element.classList.add(cn$h(undefined, config.arrayPosition));
        config.viewProps.bindClassModifiers(this.element);
        const inputElem = doc.createElement("input");
        inputElem.classList.add(cn$h("i"));
        inputElem.type = "text";
        config.viewProps.bindDisabled(inputElem);
        this.element.appendChild(inputElem);
        this.inputElement = inputElem;
        this.onDraggingChange_ = this.onDraggingChange_.bind(this);
        this.dragging_ = config.dragging;
        this.dragging_.emitter.on("change", this.onDraggingChange_);
        this.element.classList.add(cn$h());
        this.inputElement.classList.add(cn$h("i"));
        const knobElem = doc.createElement("div");
        knobElem.classList.add(cn$h("k"));
        this.element.appendChild(knobElem);
        this.knobElement = knobElem;
        const guideElem = doc.createElementNS(SVG_NS, "svg");
        guideElem.classList.add(cn$h("g"));
        this.knobElement.appendChild(guideElem);
        const bodyElem = doc.createElementNS(SVG_NS, "path");
        bodyElem.classList.add(cn$h("gb"));
        guideElem.appendChild(bodyElem);
        this.guideBodyElem_ = bodyElem;
        const headElem = doc.createElementNS(SVG_NS, "path");
        headElem.classList.add(cn$h("gh"));
        guideElem.appendChild(headElem);
        this.guideHeadElem_ = headElem;
        const tooltipElem = doc.createElement("div");
        tooltipElem.classList.add(ClassName("tt")());
        this.knobElement.appendChild(tooltipElem);
        this.tooltipElem_ = tooltipElem;
        config.value.emitter.on("change", this.onChange_);
        this.value = config.value;
        this.refresh();
    }
    onDraggingChange_(ev) {
        if (ev.rawValue === null) {
            this.element.classList.remove(cn$h(undefined, "drg"));
            return;
        }
        this.element.classList.add(cn$h(undefined, "drg"));
        const x = ev.rawValue / this.props_.get("pointerScale");
        const aox = x + (x > 0 ? -1 : x < 0 ? 1 : 0);
        const adx = constrainRange(-aox, -4, 4);
        this.guideHeadElem_.setAttributeNS(null, "d", [
            `M ${aox + adx},0 L${aox},4 L${aox + adx},8`,
            `M ${x},-1 L${x},9`
        ].join(" "));
        this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${x},4`);
        const formatter = this.props_.get("formatter");
        this.tooltipElem_.textContent = formatter(this.value.rawValue);
        this.tooltipElem_.style.left = `${x}px`;
    }
    refresh() {
        const formatter = this.props_.get("formatter");
        this.inputElement.value = formatter(this.value.rawValue);
    }
    onChange_() {
        this.refresh();
    }
}
class NumberTextController {
    constructor(doc, config){
        var _a;
        this.originRawValue_ = 0;
        this.onInputChange_ = this.onInputChange_.bind(this);
        this.onInputKeyDown_ = this.onInputKeyDown_.bind(this);
        this.onInputKeyUp_ = this.onInputKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.parser_ = config.parser;
        this.props = config.props;
        this.sliderProps_ = (_a = config.sliderProps) !== null && _a !== void 0 ? _a : null;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.dragging_ = createValue(null);
        this.view = new NumberTextView(doc, {
            arrayPosition: config.arrayPosition,
            dragging: this.dragging_,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.inputElement.addEventListener("change", this.onInputChange_);
        this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_);
        this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
        const ph = new PointerHandler(this.view.knobElement);
        ph.emitter.on("down", this.onPointerDown_);
        ph.emitter.on("move", this.onPointerMove_);
        ph.emitter.on("up", this.onPointerUp_);
    }
    constrainValue_(value) {
        var _a, _b;
        const min = (_a = this.sliderProps_) === null || _a === void 0 ? void 0 : _a.get("min");
        const max = (_b = this.sliderProps_) === null || _b === void 0 ? void 0 : _b.get("max");
        let v = value;
        if (min !== undefined) v = Math.max(v, min);
        if (max !== undefined) v = Math.min(v, max);
        return v;
    }
    onInputChange_(e) {
        const inputElem = forceCast(e.currentTarget);
        const value = inputElem.value;
        const parsedValue = this.parser_(value);
        if (!isEmpty(parsedValue)) this.value.rawValue = this.constrainValue_(parsedValue);
        this.view.refresh();
    }
    onInputKeyDown_(ev) {
        const step = getStepForKey(this.props.get("keyScale"), getVerticalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.constrainValue_(this.value.rawValue + step), {
            forceEmit: false,
            last: false
        });
    }
    onInputKeyUp_(ev) {
        const step = getStepForKey(this.props.get("keyScale"), getVerticalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
    onPointerDown_() {
        this.originRawValue_ = this.value.rawValue;
        this.dragging_.rawValue = 0;
    }
    computeDraggingValue_(data) {
        if (!data.point) return null;
        const dx = data.point.x - data.bounds.width / 2;
        return this.constrainValue_(this.originRawValue_ + dx * this.props.get("pointerScale"));
    }
    onPointerMove_(ev) {
        const v = this.computeDraggingValue_(ev.data);
        if (v === null) return;
        this.value.setRawValue(v, {
            forceEmit: false,
            last: false
        });
        this.dragging_.rawValue = this.value.rawValue - this.originRawValue_;
    }
    onPointerUp_(ev) {
        const v = this.computeDraggingValue_(ev.data);
        if (v === null) return;
        this.value.setRawValue(v, {
            forceEmit: true,
            last: true
        });
        this.dragging_.rawValue = null;
    }
}
const cn$g = ClassName("sld");
class SliderView {
    constructor(doc, config){
        this.onChange_ = this.onChange_.bind(this);
        this.props_ = config.props;
        this.props_.emitter.on("change", this.onChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$g());
        config.viewProps.bindClassModifiers(this.element);
        const trackElem = doc.createElement("div");
        trackElem.classList.add(cn$g("t"));
        config.viewProps.bindTabIndex(trackElem);
        this.element.appendChild(trackElem);
        this.trackElement = trackElem;
        const knobElem = doc.createElement("div");
        knobElem.classList.add(cn$g("k"));
        this.trackElement.appendChild(knobElem);
        this.knobElement = knobElem;
        config.value.emitter.on("change", this.onChange_);
        this.value = config.value;
        this.update_();
    }
    update_() {
        const p = constrainRange(mapRange(this.value.rawValue, this.props_.get("min"), this.props_.get("max"), 0, 100), 0, 100);
        this.knobElement.style.width = `${p}%`;
    }
    onChange_() {
        this.update_();
    }
}
class SliderController {
    constructor(doc, config){
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onKeyUp_ = this.onKeyUp_.bind(this);
        this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.props = config.props;
        this.view = new SliderView(doc, {
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.trackElement);
        this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_);
        this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_);
        this.ptHandler_.emitter.on("up", this.onPointerUp_);
        this.view.trackElement.addEventListener("keydown", this.onKeyDown_);
        this.view.trackElement.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        this.value.setRawValue(mapRange(constrainRange(d.point.x, 0, d.bounds.width), 0, d.bounds.width, this.props.get("min"), this.props.get("max")), opts);
    }
    onPointerDownOrMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onKeyDown_(ev) {
        const step = getStepForKey(this.props.get("keyScale"), getHorizontalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue + step, {
            forceEmit: false,
            last: false
        });
    }
    onKeyUp_(ev) {
        const step = getStepForKey(this.props.get("keyScale"), getHorizontalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
const cn$f = ClassName("sldtxt");
class SliderTextView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$f());
        const sliderElem = doc.createElement("div");
        sliderElem.classList.add(cn$f("s"));
        this.sliderView_ = config.sliderView;
        sliderElem.appendChild(this.sliderView_.element);
        this.element.appendChild(sliderElem);
        const textElem = doc.createElement("div");
        textElem.classList.add(cn$f("t"));
        this.textView_ = config.textView;
        textElem.appendChild(this.textView_.element);
        this.element.appendChild(textElem);
    }
}
class SliderTextController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.sliderC_ = new SliderController(doc, {
            props: config.sliderProps,
            value: config.value,
            viewProps: this.viewProps
        });
        this.textC_ = new NumberTextController(doc, {
            parser: config.parser,
            props: config.textProps,
            sliderProps: config.sliderProps,
            value: config.value,
            viewProps: config.viewProps
        });
        this.view = new SliderTextView(doc, {
            sliderView: this.sliderC_.view,
            textView: this.textC_.view
        });
    }
    get sliderController() {
        return this.sliderC_;
    }
    get textController() {
        return this.textC_;
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                max: p.required.number,
                min: p.required.number
            }), (result)=>{
            const sliderProps = this.sliderC_.props;
            sliderProps.set("max", result.max);
            sliderProps.set("min", result.min);
            return true;
        });
    }
    exportProps() {
        const sliderProps = this.sliderC_.props;
        return exportBladeState(null, {
            max: sliderProps.get("max"),
            min: sliderProps.get("min")
        });
    }
}
function createSliderTextProps(config) {
    return {
        sliderProps: new ValueMap({
            keyScale: config.keyScale,
            max: config.max,
            min: config.min
        }),
        textProps: new ValueMap({
            formatter: createValue(config.formatter),
            keyScale: config.keyScale,
            pointerScale: createValue(config.pointerScale)
        })
    };
}
const CSS_VAR_MAP = {
    containerUnitSize: "cnt-usz"
};
function getCssVar(key) {
    return `--${CSS_VAR_MAP[key]}`;
}
function createPointDimensionParser(p) {
    return createNumberTextInputParamsParser(p);
}
function parsePointDimensionParams(value) {
    if (!isRecord(value)) return undefined;
    return parseRecord(value, createPointDimensionParser);
}
function createDimensionConstraint(params, initialValue) {
    if (!params) return undefined;
    const constraints = [];
    const cs = createStepConstraint(params, initialValue);
    if (cs) constraints.push(cs);
    const rs = createRangeConstraint(params);
    if (rs) constraints.push(rs);
    return new CompositeConstraint(constraints);
}
function isCompatible(ver) {
    if (!ver) return false;
    return ver.major === VERSION$1.major;
}
function parsePickerLayout(value) {
    if (value === "inline" || value === "popup") return value;
    return undefined;
}
function writePrimitive(target, value) {
    target.write(value);
}
const cn$e = ClassName("ckb");
class CheckboxView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$e());
        config.viewProps.bindClassModifiers(this.element);
        const labelElem = doc.createElement("label");
        labelElem.classList.add(cn$e("l"));
        this.element.appendChild(labelElem);
        this.labelElement = labelElem;
        const inputElem = doc.createElement("input");
        inputElem.classList.add(cn$e("i"));
        inputElem.type = "checkbox";
        this.labelElement.appendChild(inputElem);
        this.inputElement = inputElem;
        config.viewProps.bindDisabled(this.inputElement);
        const wrapperElem = doc.createElement("div");
        wrapperElem.classList.add(cn$e("w"));
        this.labelElement.appendChild(wrapperElem);
        const markElem = createSvgIconElement(doc, "check");
        wrapperElem.appendChild(markElem);
        config.value.emitter.on("change", this.onValueChange_);
        this.value = config.value;
        this.update_();
    }
    update_() {
        this.inputElement.checked = this.value.rawValue;
    }
    onValueChange_() {
        this.update_();
    }
}
class CheckboxController {
    constructor(doc, config){
        this.onInputChange_ = this.onInputChange_.bind(this);
        this.onLabelMouseDown_ = this.onLabelMouseDown_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new CheckboxView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.inputElement.addEventListener("change", this.onInputChange_);
        this.view.labelElement.addEventListener("mousedown", this.onLabelMouseDown_);
    }
    onInputChange_(ev) {
        const inputElem = forceCast(ev.currentTarget);
        this.value.rawValue = inputElem.checked;
        ev.preventDefault();
        ev.stopPropagation();
    }
    onLabelMouseDown_(ev) {
        ev.preventDefault();
    }
}
function createConstraint$6(params) {
    const constraints = [];
    const lc = createListConstraint(params.options);
    if (lc) constraints.push(lc);
    return new CompositeConstraint(constraints);
}
const BooleanInputPlugin = createPlugin({
    id: "input-bool",
    type: "input",
    accept: (value, params)=>{
        if (typeof value !== "boolean") return null;
        const result = parseRecord(params, (p)=>({
                options: p.optional.custom(parseListOptions),
                readonly: p.optional.constant(false)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>boolFromUnknown,
        constraint: (args)=>createConstraint$6(args.params),
        writer: (_args)=>writePrimitive
    },
    controller: (args)=>{
        const doc = args.document;
        const value = args.value;
        const c = args.constraint;
        const lc = c && findConstraint(c, ListConstraint);
        if (lc) return new ListController(doc, {
            props: new ValueMap({
                options: lc.values.value("options")
            }),
            value: value,
            viewProps: args.viewProps
        });
        return new CheckboxController(doc, {
            value: value,
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (typeof args.controller.value.rawValue !== "boolean") return null;
        if (args.controller.valueController instanceof ListController) return new ListInputBindingApi(args.controller);
        return null;
    }
});
const cn$d = ClassName("col");
class ColorView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$d());
        config.foldable.bindExpandedClass(this.element, cn$d(undefined, "expanded"));
        bindValueMap(config.foldable, "completed", valueToClassName(this.element, cn$d(undefined, "cpl")));
        const headElem = doc.createElement("div");
        headElem.classList.add(cn$d("h"));
        this.element.appendChild(headElem);
        const swatchElem = doc.createElement("div");
        swatchElem.classList.add(cn$d("s"));
        headElem.appendChild(swatchElem);
        this.swatchElement = swatchElem;
        const textElem = doc.createElement("div");
        textElem.classList.add(cn$d("t"));
        headElem.appendChild(textElem);
        this.textElement = textElem;
        if (config.pickerLayout === "inline") {
            const pickerElem = doc.createElement("div");
            pickerElem.classList.add(cn$d("p"));
            this.element.appendChild(pickerElem);
            this.pickerElement = pickerElem;
        } else this.pickerElement = null;
    }
}
function rgbToHslInt(r, g, b) {
    const rp = constrainRange(r / 255, 0, 1);
    const gp = constrainRange(g / 255, 0, 1);
    const bp = constrainRange(b / 255, 0, 1);
    const cmax = Math.max(rp, gp, bp);
    const cmin = Math.min(rp, gp, bp);
    const c = cmax - cmin;
    let h = 0;
    let s = 0;
    const l = (cmin + cmax) / 2;
    if (c !== 0) {
        s = c / (1 - Math.abs(cmax + cmin - 1));
        if (rp === cmax) h = (gp - bp) / c;
        else if (gp === cmax) h = 2 + (bp - rp) / c;
        else h = 4 + (rp - gp) / c;
        h = h / 6 + (h < 0 ? 1 : 0);
    }
    return [
        h * 360,
        s * 100,
        l * 100
    ];
}
function hslToRgbInt(h, s, l) {
    const hp = (h % 360 + 360) % 360;
    const sp = constrainRange(s / 100, 0, 1);
    const lp = constrainRange(l / 100, 0, 1);
    const c = (1 - Math.abs(2 * lp - 1)) * sp;
    const x = c * (1 - Math.abs(hp / 60 % 2 - 1));
    const m = lp - c / 2;
    let rp, gp, bp;
    if (hp >= 0 && hp < 60) [rp, gp, bp] = [
        c,
        x,
        0
    ];
    else if (hp >= 60 && hp < 120) [rp, gp, bp] = [
        x,
        c,
        0
    ];
    else if (hp >= 120 && hp < 180) [rp, gp, bp] = [
        0,
        c,
        x
    ];
    else if (hp >= 180 && hp < 240) [rp, gp, bp] = [
        0,
        x,
        c
    ];
    else if (hp >= 240 && hp < 300) [rp, gp, bp] = [
        x,
        0,
        c
    ];
    else [rp, gp, bp] = [
        c,
        0,
        x
    ];
    return [
        (rp + m) * 255,
        (gp + m) * 255,
        (bp + m) * 255
    ];
}
function rgbToHsvInt(r, g, b) {
    const rp = constrainRange(r / 255, 0, 1);
    const gp = constrainRange(g / 255, 0, 1);
    const bp = constrainRange(b / 255, 0, 1);
    const cmax = Math.max(rp, gp, bp);
    const cmin = Math.min(rp, gp, bp);
    const d = cmax - cmin;
    let h;
    if (d === 0) h = 0;
    else if (cmax === rp) h = 60 * (((gp - bp) / d % 6 + 6) % 6);
    else if (cmax === gp) h = 60 * ((bp - rp) / d + 2);
    else h = 60 * ((rp - gp) / d + 4);
    const s = cmax === 0 ? 0 : d / cmax;
    const v = cmax;
    return [
        h,
        s * 100,
        v * 100
    ];
}
function hsvToRgbInt(h, s, v) {
    const hp = loopRange(h, 360);
    const sp = constrainRange(s / 100, 0, 1);
    const vp = constrainRange(v / 100, 0, 1);
    const c = vp * sp;
    const x = c * (1 - Math.abs(hp / 60 % 2 - 1));
    const m = vp - c;
    let rp, gp, bp;
    if (hp >= 0 && hp < 60) [rp, gp, bp] = [
        c,
        x,
        0
    ];
    else if (hp >= 60 && hp < 120) [rp, gp, bp] = [
        x,
        c,
        0
    ];
    else if (hp >= 120 && hp < 180) [rp, gp, bp] = [
        0,
        c,
        x
    ];
    else if (hp >= 180 && hp < 240) [rp, gp, bp] = [
        0,
        x,
        c
    ];
    else if (hp >= 240 && hp < 300) [rp, gp, bp] = [
        x,
        0,
        c
    ];
    else [rp, gp, bp] = [
        c,
        0,
        x
    ];
    return [
        (rp + m) * 255,
        (gp + m) * 255,
        (bp + m) * 255
    ];
}
function hslToHsvInt(h, s, l) {
    const sd = l + s * (100 - Math.abs(2 * l - 100)) / 200;
    return [
        h,
        sd !== 0 ? s * (100 - Math.abs(2 * l - 100)) / sd : 0,
        l + s * (100 - Math.abs(2 * l - 100)) / 200
    ];
}
function hsvToHslInt(h, s, v) {
    const sd = 100 - Math.abs(v * (200 - s) / 100 - 100);
    return [
        h,
        sd !== 0 ? s * v / sd : 0,
        v * (200 - s) / 200
    ];
}
function removeAlphaComponent(comps) {
    return [
        comps[0],
        comps[1],
        comps[2]
    ];
}
function appendAlphaComponent(comps, alpha) {
    return [
        comps[0],
        comps[1],
        comps[2],
        alpha
    ];
}
const MODE_CONVERTER_MAP = {
    hsl: {
        hsl: (h, s, l)=>[
                h,
                s,
                l
            ],
        hsv: hslToHsvInt,
        rgb: hslToRgbInt
    },
    hsv: {
        hsl: hsvToHslInt,
        hsv: (h, s, v)=>[
                h,
                s,
                v
            ],
        rgb: hsvToRgbInt
    },
    rgb: {
        hsl: rgbToHslInt,
        hsv: rgbToHsvInt,
        rgb: (r, g, b)=>[
                r,
                g,
                b
            ]
    }
};
function getColorMaxComponents(mode, type) {
    return [
        type === "float" ? 1 : mode === "rgb" ? 255 : 360,
        type === "float" ? 1 : mode === "rgb" ? 255 : 100,
        type === "float" ? 1 : mode === "rgb" ? 255 : 100
    ];
}
function loopHueRange(hue, max) {
    return hue === max ? max : loopRange(hue, max);
}
function constrainColorComponents(components, mode, type) {
    var _a;
    const ms = getColorMaxComponents(mode, type);
    return [
        mode === "rgb" ? constrainRange(components[0], 0, ms[0]) : loopHueRange(components[0], ms[0]),
        constrainRange(components[1], 0, ms[1]),
        constrainRange(components[2], 0, ms[2]),
        constrainRange((_a = components[3]) !== null && _a !== void 0 ? _a : 1, 0, 1)
    ];
}
function convertColorType(comps, mode, from, to) {
    const fms = getColorMaxComponents(mode, from);
    const tms = getColorMaxComponents(mode, to);
    return comps.map((c, index)=>c / fms[index] * tms[index]);
}
function convertColor(components, from, to) {
    const intComps = convertColorType(components, from.mode, from.type, "int");
    const result = MODE_CONVERTER_MAP[from.mode][to.mode](...intComps);
    return convertColorType(result, to.mode, "int", to.type);
}
class IntColor {
    static black() {
        return new IntColor([
            0,
            0,
            0
        ], "rgb");
    }
    constructor(comps, mode){
        this.type = "int";
        this.mode = mode;
        this.comps_ = constrainColorComponents(comps, mode, this.type);
    }
    getComponents(opt_mode) {
        return appendAlphaComponent(convertColor(removeAlphaComponent(this.comps_), {
            mode: this.mode,
            type: this.type
        }, {
            mode: opt_mode !== null && opt_mode !== void 0 ? opt_mode : this.mode,
            type: this.type
        }), this.comps_[3]);
    }
    toRgbaObject() {
        const rgbComps = this.getComponents("rgb");
        return {
            r: rgbComps[0],
            g: rgbComps[1],
            b: rgbComps[2],
            a: rgbComps[3]
        };
    }
}
const cn$c = ClassName("colp");
class ColorPickerView {
    constructor(doc, config){
        this.alphaViews_ = null;
        this.element = doc.createElement("div");
        this.element.classList.add(cn$c());
        config.viewProps.bindClassModifiers(this.element);
        const hsvElem = doc.createElement("div");
        hsvElem.classList.add(cn$c("hsv"));
        const svElem = doc.createElement("div");
        svElem.classList.add(cn$c("sv"));
        this.svPaletteView_ = config.svPaletteView;
        svElem.appendChild(this.svPaletteView_.element);
        hsvElem.appendChild(svElem);
        const hElem = doc.createElement("div");
        hElem.classList.add(cn$c("h"));
        this.hPaletteView_ = config.hPaletteView;
        hElem.appendChild(this.hPaletteView_.element);
        hsvElem.appendChild(hElem);
        this.element.appendChild(hsvElem);
        const rgbElem = doc.createElement("div");
        rgbElem.classList.add(cn$c("rgb"));
        this.textsView_ = config.textsView;
        rgbElem.appendChild(this.textsView_.element);
        this.element.appendChild(rgbElem);
        if (config.alphaViews) {
            this.alphaViews_ = {
                palette: config.alphaViews.palette,
                text: config.alphaViews.text
            };
            const aElem = doc.createElement("div");
            aElem.classList.add(cn$c("a"));
            const apElem = doc.createElement("div");
            apElem.classList.add(cn$c("ap"));
            apElem.appendChild(this.alphaViews_.palette.element);
            aElem.appendChild(apElem);
            const atElem = doc.createElement("div");
            atElem.classList.add(cn$c("at"));
            atElem.appendChild(this.alphaViews_.text.element);
            aElem.appendChild(atElem);
            this.element.appendChild(aElem);
        }
    }
    get allFocusableElements() {
        const elems = [
            this.svPaletteView_.element,
            this.hPaletteView_.element,
            this.textsView_.modeSelectElement,
            ...this.textsView_.inputViews.map((v)=>v.inputElement)
        ];
        if (this.alphaViews_) elems.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement);
        return elems;
    }
}
function parseColorType(value) {
    return value === "int" ? "int" : value === "float" ? "float" : undefined;
}
function parseColorInputParams(params) {
    return parseRecord(params, (p)=>({
            color: p.optional.object({
                alpha: p.optional.boolean,
                type: p.optional.custom(parseColorType)
            }),
            expanded: p.optional.boolean,
            picker: p.optional.custom(parsePickerLayout),
            readonly: p.optional.constant(false)
        }));
}
function getKeyScaleForColor(forAlpha) {
    return forAlpha ? 0.1 : 1;
}
function extractColorType(params) {
    var _a;
    return (_a = params.color) === null || _a === void 0 ? void 0 : _a.type;
}
class FloatColor {
    constructor(comps, mode){
        this.type = "float";
        this.mode = mode;
        this.comps_ = constrainColorComponents(comps, mode, this.type);
    }
    getComponents(opt_mode) {
        return appendAlphaComponent(convertColor(removeAlphaComponent(this.comps_), {
            mode: this.mode,
            type: this.type
        }, {
            mode: opt_mode !== null && opt_mode !== void 0 ? opt_mode : this.mode,
            type: this.type
        }), this.comps_[3]);
    }
    toRgbaObject() {
        const rgbComps = this.getComponents("rgb");
        return {
            r: rgbComps[0],
            g: rgbComps[1],
            b: rgbComps[2],
            a: rgbComps[3]
        };
    }
}
const TYPE_TO_CONSTRUCTOR_MAP = {
    int: (comps, mode)=>new IntColor(comps, mode),
    float: (comps, mode)=>new FloatColor(comps, mode)
};
function createColor(comps, mode, type) {
    return TYPE_TO_CONSTRUCTOR_MAP[type](comps, mode);
}
function isFloatColor(c) {
    return c.type === "float";
}
function isIntColor(c) {
    return c.type === "int";
}
function convertFloatToInt(cf) {
    const comps = cf.getComponents();
    const ms = getColorMaxComponents(cf.mode, "int");
    return new IntColor([
        Math.round(mapRange(comps[0], 0, 1, 0, ms[0])),
        Math.round(mapRange(comps[1], 0, 1, 0, ms[1])),
        Math.round(mapRange(comps[2], 0, 1, 0, ms[2])),
        comps[3]
    ], cf.mode);
}
function convertIntToFloat(ci) {
    const comps = ci.getComponents();
    const ms = getColorMaxComponents(ci.mode, "int");
    return new FloatColor([
        mapRange(comps[0], 0, ms[0], 0, 1),
        mapRange(comps[1], 0, ms[1], 0, 1),
        mapRange(comps[2], 0, ms[2], 0, 1),
        comps[3]
    ], ci.mode);
}
function mapColorType(c, type) {
    if (c.type === type) return c;
    if (isIntColor(c) && type === "float") return convertIntToFloat(c);
    if (isFloatColor(c) && type === "int") return convertFloatToInt(c);
    throw TpError.shouldNeverHappen();
}
function equalsStringColorFormat(f1, f2) {
    return f1.alpha === f2.alpha && f1.mode === f2.mode && f1.notation === f2.notation && f1.type === f2.type;
}
function parseCssNumberOrPercentage(text, max) {
    const m = text.match(/^(.+)%$/);
    if (!m) return Math.min(parseFloat(text), max);
    return Math.min(parseFloat(m[1]) * 0.01 * max, max);
}
const ANGLE_TO_DEG_MAP = {
    deg: (angle)=>angle,
    grad: (angle)=>angle * 360 / 400,
    rad: (angle)=>angle * 360 / (2 * Math.PI),
    turn: (angle)=>angle * 360
};
function parseCssNumberOrAngle(text) {
    const m = text.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
    if (!m) return parseFloat(text);
    const angle = parseFloat(m[1]);
    const unit = m[2];
    return ANGLE_TO_DEG_MAP[unit](angle);
}
function parseFunctionalRgbColorComponents(text) {
    const m = text.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!m) return null;
    const comps = [
        parseCssNumberOrPercentage(m[1], 255),
        parseCssNumberOrPercentage(m[2], 255),
        parseCssNumberOrPercentage(m[3], 255)
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) return null;
    return comps;
}
function parseFunctionalRgbColor(text) {
    const comps = parseFunctionalRgbColorComponents(text);
    return comps ? new IntColor(comps, "rgb") : null;
}
function parseFunctionalRgbaColorComponents(text) {
    const m = text.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!m) return null;
    const comps = [
        parseCssNumberOrPercentage(m[1], 255),
        parseCssNumberOrPercentage(m[2], 255),
        parseCssNumberOrPercentage(m[3], 255),
        parseCssNumberOrPercentage(m[4], 1)
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) return null;
    return comps;
}
function parseFunctionalRgbaColor(text) {
    const comps = parseFunctionalRgbaColorComponents(text);
    return comps ? new IntColor(comps, "rgb") : null;
}
function parseFunctionalHslColorComponents(text) {
    const m = text.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!m) return null;
    const comps = [
        parseCssNumberOrAngle(m[1]),
        parseCssNumberOrPercentage(m[2], 100),
        parseCssNumberOrPercentage(m[3], 100)
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) return null;
    return comps;
}
function parseFunctionalHslColor(text) {
    const comps = parseFunctionalHslColorComponents(text);
    return comps ? new IntColor(comps, "hsl") : null;
}
function parseHslaColorComponents(text) {
    const m = text.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!m) return null;
    const comps = [
        parseCssNumberOrAngle(m[1]),
        parseCssNumberOrPercentage(m[2], 100),
        parseCssNumberOrPercentage(m[3], 100),
        parseCssNumberOrPercentage(m[4], 1)
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) return null;
    return comps;
}
function parseFunctionalHslaColor(text) {
    const comps = parseHslaColorComponents(text);
    return comps ? new IntColor(comps, "hsl") : null;
}
function parseHexRgbColorComponents(text) {
    const mRgb = text.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
    if (mRgb) return [
        parseInt(mRgb[1] + mRgb[1], 16),
        parseInt(mRgb[2] + mRgb[2], 16),
        parseInt(mRgb[3] + mRgb[3], 16)
    ];
    const mRrggbb = text.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
    if (mRrggbb) return [
        parseInt(mRrggbb[1], 16),
        parseInt(mRrggbb[2], 16),
        parseInt(mRrggbb[3], 16)
    ];
    return null;
}
function parseHexRgbColor(text) {
    const comps = parseHexRgbColorComponents(text);
    return comps ? new IntColor(comps, "rgb") : null;
}
function parseHexRgbaColorComponents(text) {
    const mRgb = text.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
    if (mRgb) return [
        parseInt(mRgb[1] + mRgb[1], 16),
        parseInt(mRgb[2] + mRgb[2], 16),
        parseInt(mRgb[3] + mRgb[3], 16),
        mapRange(parseInt(mRgb[4] + mRgb[4], 16), 0, 255, 0, 1)
    ];
    const mRrggbb = text.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
    if (mRrggbb) return [
        parseInt(mRrggbb[1], 16),
        parseInt(mRrggbb[2], 16),
        parseInt(mRrggbb[3], 16),
        mapRange(parseInt(mRrggbb[4], 16), 0, 255, 0, 1)
    ];
    return null;
}
function parseHexRgbaColor(text) {
    const comps = parseHexRgbaColorComponents(text);
    return comps ? new IntColor(comps, "rgb") : null;
}
function parseObjectRgbColorComponents(text) {
    const m = text.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
    if (!m) return null;
    const comps = [
        parseFloat(m[1]),
        parseFloat(m[2]),
        parseFloat(m[3])
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) return null;
    return comps;
}
function createObjectRgbColorParser(type) {
    return (text)=>{
        const comps = parseObjectRgbColorComponents(text);
        return comps ? createColor(comps, "rgb", type) : null;
    };
}
function parseObjectRgbaColorComponents(text) {
    const m = text.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
    if (!m) return null;
    const comps = [
        parseFloat(m[1]),
        parseFloat(m[2]),
        parseFloat(m[3]),
        parseFloat(m[4])
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) return null;
    return comps;
}
function createObjectRgbaColorParser(type) {
    return (text)=>{
        const comps = parseObjectRgbaColorComponents(text);
        return comps ? createColor(comps, "rgb", type) : null;
    };
}
const PARSER_AND_RESULT = [
    {
        parser: parseHexRgbColorComponents,
        result: {
            alpha: false,
            mode: "rgb",
            notation: "hex"
        }
    },
    {
        parser: parseHexRgbaColorComponents,
        result: {
            alpha: true,
            mode: "rgb",
            notation: "hex"
        }
    },
    {
        parser: parseFunctionalRgbColorComponents,
        result: {
            alpha: false,
            mode: "rgb",
            notation: "func"
        }
    },
    {
        parser: parseFunctionalRgbaColorComponents,
        result: {
            alpha: true,
            mode: "rgb",
            notation: "func"
        }
    },
    {
        parser: parseFunctionalHslColorComponents,
        result: {
            alpha: false,
            mode: "hsl",
            notation: "func"
        }
    },
    {
        parser: parseHslaColorComponents,
        result: {
            alpha: true,
            mode: "hsl",
            notation: "func"
        }
    },
    {
        parser: parseObjectRgbColorComponents,
        result: {
            alpha: false,
            mode: "rgb",
            notation: "object"
        }
    },
    {
        parser: parseObjectRgbaColorComponents,
        result: {
            alpha: true,
            mode: "rgb",
            notation: "object"
        }
    }
];
function detectStringColor(text) {
    return PARSER_AND_RESULT.reduce((prev, { parser , result: detection  })=>{
        if (prev) return prev;
        return parser(text) ? detection : null;
    }, null);
}
function detectStringColorFormat(text, type = "int") {
    const r = detectStringColor(text);
    if (!r) return null;
    if (r.notation === "hex" && type !== "float") return Object.assign(Object.assign({}, r), {
        type: "int"
    });
    if (r.notation === "func") return Object.assign(Object.assign({}, r), {
        type: type
    });
    return null;
}
function createColorStringParser(type) {
    const parsers = [
        parseHexRgbColor,
        parseHexRgbaColor,
        parseFunctionalRgbColor,
        parseFunctionalRgbaColor,
        parseFunctionalHslColor,
        parseFunctionalHslaColor
    ];
    if (type === "int") parsers.push(createObjectRgbColorParser("int"), createObjectRgbaColorParser("int"));
    if (type === "float") parsers.push(createObjectRgbColorParser("float"), createObjectRgbaColorParser("float"));
    const parser = composeParsers(parsers);
    return (text)=>{
        const result = parser(text);
        return result ? mapColorType(result, type) : null;
    };
}
function readIntColorString(value) {
    const parser = createColorStringParser("int");
    if (typeof value !== "string") return IntColor.black();
    const result = parser(value);
    return result !== null && result !== void 0 ? result : IntColor.black();
}
function zerofill(comp) {
    const hex = constrainRange(Math.floor(comp), 0, 255).toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
}
function colorToHexRgbString(value, prefix = "#") {
    const hexes = removeAlphaComponent(value.getComponents("rgb")).map(zerofill).join("");
    return `${prefix}${hexes}`;
}
function colorToHexRgbaString(value, prefix = "#") {
    const rgbaComps = value.getComponents("rgb");
    const hexes = [
        rgbaComps[0],
        rgbaComps[1],
        rgbaComps[2],
        rgbaComps[3] * 255
    ].map(zerofill).join("");
    return `${prefix}${hexes}`;
}
function colorToFunctionalRgbString(value) {
    const formatter = createNumberFormatter(0);
    const ci = mapColorType(value, "int");
    const comps = removeAlphaComponent(ci.getComponents("rgb")).map((comp)=>formatter(comp));
    return `rgb(${comps.join(", ")})`;
}
function colorToFunctionalRgbaString(value) {
    const aFormatter = createNumberFormatter(2);
    const rgbFormatter = createNumberFormatter(0);
    const ci = mapColorType(value, "int");
    const comps = ci.getComponents("rgb").map((comp, index)=>{
        const formatter = index === 3 ? aFormatter : rgbFormatter;
        return formatter(comp);
    });
    return `rgba(${comps.join(", ")})`;
}
function colorToFunctionalHslString(value) {
    const formatters = [
        createNumberFormatter(0),
        formatPercentage,
        formatPercentage
    ];
    const ci = mapColorType(value, "int");
    const comps = removeAlphaComponent(ci.getComponents("hsl")).map((comp, index)=>formatters[index](comp));
    return `hsl(${comps.join(", ")})`;
}
function colorToFunctionalHslaString(value) {
    const formatters = [
        createNumberFormatter(0),
        formatPercentage,
        formatPercentage,
        createNumberFormatter(2)
    ];
    const ci = mapColorType(value, "int");
    const comps = ci.getComponents("hsl").map((comp, index)=>formatters[index](comp));
    return `hsla(${comps.join(", ")})`;
}
function colorToObjectRgbString(value, type) {
    const formatter = createNumberFormatter(type === "float" ? 2 : 0);
    const names = [
        "r",
        "g",
        "b"
    ];
    const cc = mapColorType(value, type);
    const comps = removeAlphaComponent(cc.getComponents("rgb")).map((comp, index)=>`${names[index]}: ${formatter(comp)}`);
    return `{${comps.join(", ")}}`;
}
function createObjectRgbColorFormatter(type) {
    return (value)=>colorToObjectRgbString(value, type);
}
function colorToObjectRgbaString(value, type) {
    const aFormatter = createNumberFormatter(2);
    const rgbFormatter = createNumberFormatter(type === "float" ? 2 : 0);
    const names = [
        "r",
        "g",
        "b",
        "a"
    ];
    const cc = mapColorType(value, type);
    const comps = cc.getComponents("rgb").map((comp, index)=>{
        const formatter = index === 3 ? aFormatter : rgbFormatter;
        return `${names[index]}: ${formatter(comp)}`;
    });
    return `{${comps.join(", ")}}`;
}
function createObjectRgbaColorFormatter(type) {
    return (value)=>colorToObjectRgbaString(value, type);
}
const FORMAT_AND_STRINGIFIERS = [
    {
        format: {
            alpha: false,
            mode: "rgb",
            notation: "hex",
            type: "int"
        },
        stringifier: colorToHexRgbString
    },
    {
        format: {
            alpha: true,
            mode: "rgb",
            notation: "hex",
            type: "int"
        },
        stringifier: colorToHexRgbaString
    },
    {
        format: {
            alpha: false,
            mode: "rgb",
            notation: "func",
            type: "int"
        },
        stringifier: colorToFunctionalRgbString
    },
    {
        format: {
            alpha: true,
            mode: "rgb",
            notation: "func",
            type: "int"
        },
        stringifier: colorToFunctionalRgbaString
    },
    {
        format: {
            alpha: false,
            mode: "hsl",
            notation: "func",
            type: "int"
        },
        stringifier: colorToFunctionalHslString
    },
    {
        format: {
            alpha: true,
            mode: "hsl",
            notation: "func",
            type: "int"
        },
        stringifier: colorToFunctionalHslaString
    },
    ...[
        "int",
        "float"
    ].reduce((prev, type)=>{
        return [
            ...prev,
            {
                format: {
                    alpha: false,
                    mode: "rgb",
                    notation: "object",
                    type: type
                },
                stringifier: createObjectRgbColorFormatter(type)
            },
            {
                format: {
                    alpha: true,
                    mode: "rgb",
                    notation: "object",
                    type: type
                },
                stringifier: createObjectRgbaColorFormatter(type)
            }
        ];
    }, [])
];
function findColorStringifier(format) {
    return FORMAT_AND_STRINGIFIERS.reduce((prev, fas)=>{
        if (prev) return prev;
        return equalsStringColorFormat(fas.format, format) ? fas.stringifier : null;
    }, null);
}
const cn$b = ClassName("apl");
class APaletteView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.value = config.value;
        this.value.emitter.on("change", this.onValueChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$b());
        config.viewProps.bindClassModifiers(this.element);
        config.viewProps.bindTabIndex(this.element);
        const barElem = doc.createElement("div");
        barElem.classList.add(cn$b("b"));
        this.element.appendChild(barElem);
        const colorElem = doc.createElement("div");
        colorElem.classList.add(cn$b("c"));
        barElem.appendChild(colorElem);
        this.colorElem_ = colorElem;
        const markerElem = doc.createElement("div");
        markerElem.classList.add(cn$b("m"));
        this.element.appendChild(markerElem);
        this.markerElem_ = markerElem;
        const previewElem = doc.createElement("div");
        previewElem.classList.add(cn$b("p"));
        this.markerElem_.appendChild(previewElem);
        this.previewElem_ = previewElem;
        this.update_();
    }
    update_() {
        const c = this.value.rawValue;
        const rgbaComps = c.getComponents("rgb");
        const leftColor = new IntColor([
            rgbaComps[0],
            rgbaComps[1],
            rgbaComps[2],
            0
        ], "rgb");
        const rightColor = new IntColor([
            rgbaComps[0],
            rgbaComps[1],
            rgbaComps[2],
            255
        ], "rgb");
        const gradientComps = [
            "to right",
            colorToFunctionalRgbaString(leftColor),
            colorToFunctionalRgbaString(rightColor)
        ];
        this.colorElem_.style.background = `linear-gradient(${gradientComps.join(",")})`;
        this.previewElem_.style.backgroundColor = colorToFunctionalRgbaString(c);
        const left = mapRange(rgbaComps[3], 0, 1, 0, 100);
        this.markerElem_.style.left = `${left}%`;
    }
    onValueChange_() {
        this.update_();
    }
}
class APaletteController {
    constructor(doc, config){
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onKeyUp_ = this.onKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new APaletteView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.element);
        this.ptHandler_.emitter.on("down", this.onPointerDown_);
        this.ptHandler_.emitter.on("move", this.onPointerMove_);
        this.ptHandler_.emitter.on("up", this.onPointerUp_);
        this.view.element.addEventListener("keydown", this.onKeyDown_);
        this.view.element.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        const alpha = d.point.x / d.bounds.width;
        const c = this.value.rawValue;
        const [h, s, v] = c.getComponents("hsv");
        this.value.setRawValue(new IntColor([
            h,
            s,
            v,
            alpha
        ], "hsv"), opts);
    }
    onPointerDown_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onKeyDown_(ev) {
        const step = getStepForKey(getKeyScaleForColor(true), getHorizontalStepKeys(ev));
        if (step === 0) return;
        const c = this.value.rawValue;
        const [h, s, v, a] = c.getComponents("hsv");
        this.value.setRawValue(new IntColor([
            h,
            s,
            v,
            a + step
        ], "hsv"), {
            forceEmit: false,
            last: false
        });
    }
    onKeyUp_(ev) {
        const step = getStepForKey(getKeyScaleForColor(true), getHorizontalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
const cn$a = ClassName("coltxt");
function createModeSelectElement(doc) {
    const selectElem = doc.createElement("select");
    const items = [
        {
            text: "RGB",
            value: "rgb"
        },
        {
            text: "HSL",
            value: "hsl"
        },
        {
            text: "HSV",
            value: "hsv"
        },
        {
            text: "HEX",
            value: "hex"
        }
    ];
    selectElem.appendChild(items.reduce((frag, item)=>{
        const optElem = doc.createElement("option");
        optElem.textContent = item.text;
        optElem.value = item.value;
        frag.appendChild(optElem);
        return frag;
    }, doc.createDocumentFragment()));
    return selectElem;
}
class ColorTextsView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$a());
        config.viewProps.bindClassModifiers(this.element);
        const modeElem = doc.createElement("div");
        modeElem.classList.add(cn$a("m"));
        this.modeElem_ = createModeSelectElement(doc);
        this.modeElem_.classList.add(cn$a("ms"));
        modeElem.appendChild(this.modeSelectElement);
        config.viewProps.bindDisabled(this.modeElem_);
        const modeMarkerElem = doc.createElement("div");
        modeMarkerElem.classList.add(cn$a("mm"));
        modeMarkerElem.appendChild(createSvgIconElement(doc, "dropdown"));
        modeElem.appendChild(modeMarkerElem);
        this.element.appendChild(modeElem);
        const inputsElem = doc.createElement("div");
        inputsElem.classList.add(cn$a("w"));
        this.element.appendChild(inputsElem);
        this.inputsElem_ = inputsElem;
        this.inputViews_ = config.inputViews;
        this.applyInputViews_();
        bindValue(config.mode, (mode)=>{
            this.modeElem_.value = mode;
        });
    }
    get modeSelectElement() {
        return this.modeElem_;
    }
    get inputViews() {
        return this.inputViews_;
    }
    set inputViews(inputViews) {
        this.inputViews_ = inputViews;
        this.applyInputViews_();
    }
    applyInputViews_() {
        removeChildElements(this.inputsElem_);
        const doc = this.element.ownerDocument;
        this.inputViews_.forEach((v)=>{
            const compElem = doc.createElement("div");
            compElem.classList.add(cn$a("c"));
            compElem.appendChild(v.element);
            this.inputsElem_.appendChild(compElem);
        });
    }
}
function createFormatter$2(type) {
    return createNumberFormatter(type === "float" ? 2 : 0);
}
function createConstraint$5(mode, type, index) {
    const max = getColorMaxComponents(mode, type)[index];
    return new DefiniteRangeConstraint({
        min: 0,
        max: max
    });
}
function createComponentController(doc, config, index) {
    return new NumberTextController(doc, {
        arrayPosition: index === 0 ? "fst" : index === 2 ? "lst" : "mid",
        parser: config.parser,
        props: ValueMap.fromObject({
            formatter: createFormatter$2(config.colorType),
            keyScale: getKeyScaleForColor(false),
            pointerScale: config.colorType === "float" ? 0.01 : 1
        }),
        value: createValue(0, {
            constraint: createConstraint$5(config.colorMode, config.colorType, index)
        }),
        viewProps: config.viewProps
    });
}
function createComponentControllers(doc, config) {
    const cc = {
        colorMode: config.colorMode,
        colorType: config.colorType,
        parser: parseNumber,
        viewProps: config.viewProps
    };
    return [
        0,
        1,
        2
    ].map((i)=>{
        const c = createComponentController(doc, cc, i);
        connectValues({
            primary: config.value,
            secondary: c.value,
            forward (p) {
                const mc = mapColorType(p, config.colorType);
                return mc.getComponents(config.colorMode)[i];
            },
            backward (p, s) {
                const pickedMode = config.colorMode;
                const mc = mapColorType(p, config.colorType);
                const comps = mc.getComponents(pickedMode);
                comps[i] = s;
                const c = createColor(appendAlphaComponent(removeAlphaComponent(comps), comps[3]), pickedMode, config.colorType);
                return mapColorType(c, "int");
            }
        });
        return c;
    });
}
function createHexController(doc, config) {
    const c = new TextController(doc, {
        parser: createColorStringParser("int"),
        props: ValueMap.fromObject({
            formatter: colorToHexRgbString
        }),
        value: createValue(IntColor.black()),
        viewProps: config.viewProps
    });
    connectValues({
        primary: config.value,
        secondary: c.value,
        forward: (p)=>new IntColor(removeAlphaComponent(p.getComponents()), p.mode),
        backward: (p, s)=>new IntColor(appendAlphaComponent(removeAlphaComponent(s.getComponents(p.mode)), p.getComponents()[3]), p.mode)
    });
    return [
        c
    ];
}
function isColorMode(mode) {
    return mode !== "hex";
}
class ColorTextsController {
    constructor(doc, config){
        this.onModeSelectChange_ = this.onModeSelectChange_.bind(this);
        this.colorType_ = config.colorType;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.colorMode = createValue(this.value.rawValue.mode);
        this.ccs_ = this.createComponentControllers_(doc);
        this.view = new ColorTextsView(doc, {
            mode: this.colorMode,
            inputViews: [
                this.ccs_[0].view,
                this.ccs_[1].view,
                this.ccs_[2].view
            ],
            viewProps: this.viewProps
        });
        this.view.modeSelectElement.addEventListener("change", this.onModeSelectChange_);
    }
    createComponentControllers_(doc) {
        const mode = this.colorMode.rawValue;
        if (isColorMode(mode)) return createComponentControllers(doc, {
            colorMode: mode,
            colorType: this.colorType_,
            value: this.value,
            viewProps: this.viewProps
        });
        return createHexController(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
    }
    onModeSelectChange_(ev) {
        const selectElem = ev.currentTarget;
        this.colorMode.rawValue = selectElem.value;
        this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument);
        this.view.inputViews = this.ccs_.map((cc)=>cc.view);
    }
}
const cn$9 = ClassName("hpl");
class HPaletteView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.value = config.value;
        this.value.emitter.on("change", this.onValueChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$9());
        config.viewProps.bindClassModifiers(this.element);
        config.viewProps.bindTabIndex(this.element);
        const colorElem = doc.createElement("div");
        colorElem.classList.add(cn$9("c"));
        this.element.appendChild(colorElem);
        const markerElem = doc.createElement("div");
        markerElem.classList.add(cn$9("m"));
        this.element.appendChild(markerElem);
        this.markerElem_ = markerElem;
        this.update_();
    }
    update_() {
        const c = this.value.rawValue;
        const [h] = c.getComponents("hsv");
        this.markerElem_.style.backgroundColor = colorToFunctionalRgbString(new IntColor([
            h,
            100,
            100
        ], "hsv"));
        const left = mapRange(h, 0, 360, 0, 100);
        this.markerElem_.style.left = `${left}%`;
    }
    onValueChange_() {
        this.update_();
    }
}
class HPaletteController {
    constructor(doc, config){
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onKeyUp_ = this.onKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new HPaletteView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.element);
        this.ptHandler_.emitter.on("down", this.onPointerDown_);
        this.ptHandler_.emitter.on("move", this.onPointerMove_);
        this.ptHandler_.emitter.on("up", this.onPointerUp_);
        this.view.element.addEventListener("keydown", this.onKeyDown_);
        this.view.element.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        const hue = mapRange(constrainRange(d.point.x, 0, d.bounds.width), 0, d.bounds.width, 0, 360);
        const c = this.value.rawValue;
        const [, s, v, a] = c.getComponents("hsv");
        this.value.setRawValue(new IntColor([
            hue,
            s,
            v,
            a
        ], "hsv"), opts);
    }
    onPointerDown_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onKeyDown_(ev) {
        const step = getStepForKey(getKeyScaleForColor(false), getHorizontalStepKeys(ev));
        if (step === 0) return;
        const c = this.value.rawValue;
        const [h, s, v, a] = c.getComponents("hsv");
        this.value.setRawValue(new IntColor([
            h + step,
            s,
            v,
            a
        ], "hsv"), {
            forceEmit: false,
            last: false
        });
    }
    onKeyUp_(ev) {
        const step = getStepForKey(getKeyScaleForColor(false), getHorizontalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
const cn$8 = ClassName("svp");
const CANVAS_RESOL = 64;
class SvPaletteView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.value = config.value;
        this.value.emitter.on("change", this.onValueChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$8());
        config.viewProps.bindClassModifiers(this.element);
        config.viewProps.bindTabIndex(this.element);
        const canvasElem = doc.createElement("canvas");
        canvasElem.height = CANVAS_RESOL;
        canvasElem.width = CANVAS_RESOL;
        canvasElem.classList.add(cn$8("c"));
        this.element.appendChild(canvasElem);
        this.canvasElement = canvasElem;
        const markerElem = doc.createElement("div");
        markerElem.classList.add(cn$8("m"));
        this.element.appendChild(markerElem);
        this.markerElem_ = markerElem;
        this.update_();
    }
    update_() {
        const ctx = getCanvasContext(this.canvasElement);
        if (!ctx) return;
        const c = this.value.rawValue;
        const hsvComps = c.getComponents("hsv");
        const width = this.canvasElement.width;
        const height = this.canvasElement.height;
        const imgData = ctx.getImageData(0, 0, width, height);
        const data = imgData.data;
        for(let iy = 0; iy < height; iy++)for(let ix = 0; ix < width; ix++){
            const s = mapRange(ix, 0, width, 0, 100);
            const v = mapRange(iy, 0, height, 100, 0);
            const rgbComps = hsvToRgbInt(hsvComps[0], s, v);
            const i = (iy * width + ix) * 4;
            data[i] = rgbComps[0];
            data[i + 1] = rgbComps[1];
            data[i + 2] = rgbComps[2];
            data[i + 3] = 255;
        }
        ctx.putImageData(imgData, 0, 0);
        const left = mapRange(hsvComps[1], 0, 100, 0, 100);
        this.markerElem_.style.left = `${left}%`;
        const top = mapRange(hsvComps[2], 0, 100, 100, 0);
        this.markerElem_.style.top = `${top}%`;
    }
    onValueChange_() {
        this.update_();
    }
}
class SvPaletteController {
    constructor(doc, config){
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onKeyUp_ = this.onKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new SvPaletteView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.element);
        this.ptHandler_.emitter.on("down", this.onPointerDown_);
        this.ptHandler_.emitter.on("move", this.onPointerMove_);
        this.ptHandler_.emitter.on("up", this.onPointerUp_);
        this.view.element.addEventListener("keydown", this.onKeyDown_);
        this.view.element.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        const saturation = mapRange(d.point.x, 0, d.bounds.width, 0, 100);
        const value = mapRange(d.point.y, 0, d.bounds.height, 100, 0);
        const [h, , , a] = this.value.rawValue.getComponents("hsv");
        this.value.setRawValue(new IntColor([
            h,
            saturation,
            value,
            a
        ], "hsv"), opts);
    }
    onPointerDown_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onKeyDown_(ev) {
        if (isArrowKey(ev.key)) ev.preventDefault();
        const [h, s, v, a] = this.value.rawValue.getComponents("hsv");
        const keyScale = getKeyScaleForColor(false);
        const ds = getStepForKey(keyScale, getHorizontalStepKeys(ev));
        const dv = getStepForKey(keyScale, getVerticalStepKeys(ev));
        if (ds === 0 && dv === 0) return;
        this.value.setRawValue(new IntColor([
            h,
            s + ds,
            v + dv,
            a
        ], "hsv"), {
            forceEmit: false,
            last: false
        });
    }
    onKeyUp_(ev) {
        const keyScale = getKeyScaleForColor(false);
        const ds = getStepForKey(keyScale, getHorizontalStepKeys(ev));
        const dv = getStepForKey(keyScale, getVerticalStepKeys(ev));
        if (ds === 0 && dv === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
class ColorPickerController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.hPaletteC_ = new HPaletteController(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.svPaletteC_ = new SvPaletteController(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.alphaIcs_ = config.supportsAlpha ? {
            palette: new APaletteController(doc, {
                value: this.value,
                viewProps: this.viewProps
            }),
            text: new NumberTextController(doc, {
                parser: parseNumber,
                props: ValueMap.fromObject({
                    pointerScale: 0.01,
                    keyScale: 0.1,
                    formatter: createNumberFormatter(2)
                }),
                value: createValue(0, {
                    constraint: new DefiniteRangeConstraint({
                        min: 0,
                        max: 1
                    })
                }),
                viewProps: this.viewProps
            })
        } : null;
        if (this.alphaIcs_) connectValues({
            primary: this.value,
            secondary: this.alphaIcs_.text.value,
            forward: (p)=>p.getComponents()[3],
            backward: (p, s)=>{
                const comps = p.getComponents();
                comps[3] = s;
                return new IntColor(comps, p.mode);
            }
        });
        this.textsC_ = new ColorTextsController(doc, {
            colorType: config.colorType,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view = new ColorPickerView(doc, {
            alphaViews: this.alphaIcs_ ? {
                palette: this.alphaIcs_.palette.view,
                text: this.alphaIcs_.text.view
            } : null,
            hPaletteView: this.hPaletteC_.view,
            supportsAlpha: config.supportsAlpha,
            svPaletteView: this.svPaletteC_.view,
            textsView: this.textsC_.view,
            viewProps: this.viewProps
        });
    }
    get textsController() {
        return this.textsC_;
    }
}
const cn$7 = ClassName("colsw");
class ColorSwatchView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        config.value.emitter.on("change", this.onValueChange_);
        this.value = config.value;
        this.element = doc.createElement("div");
        this.element.classList.add(cn$7());
        config.viewProps.bindClassModifiers(this.element);
        const swatchElem = doc.createElement("div");
        swatchElem.classList.add(cn$7("sw"));
        this.element.appendChild(swatchElem);
        this.swatchElem_ = swatchElem;
        const buttonElem = doc.createElement("button");
        buttonElem.classList.add(cn$7("b"));
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        this.update_();
    }
    update_() {
        const value = this.value.rawValue;
        this.swatchElem_.style.backgroundColor = colorToHexRgbaString(value);
    }
    onValueChange_() {
        this.update_();
    }
}
class ColorSwatchController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new ColorSwatchView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
    }
}
class ColorController {
    constructor(doc, config){
        this.onButtonBlur_ = this.onButtonBlur_.bind(this);
        this.onButtonClick_ = this.onButtonClick_.bind(this);
        this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
        this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.foldable_ = Foldable.create(config.expanded);
        this.swatchC_ = new ColorSwatchController(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        const buttonElem = this.swatchC_.view.buttonElement;
        buttonElem.addEventListener("blur", this.onButtonBlur_);
        buttonElem.addEventListener("click", this.onButtonClick_);
        this.textC_ = new TextController(doc, {
            parser: config.parser,
            props: ValueMap.fromObject({
                formatter: config.formatter
            }),
            value: this.value,
            viewProps: this.viewProps
        });
        this.view = new ColorView(doc, {
            foldable: this.foldable_,
            pickerLayout: config.pickerLayout
        });
        this.view.swatchElement.appendChild(this.swatchC_.view.element);
        this.view.textElement.appendChild(this.textC_.view.element);
        this.popC_ = config.pickerLayout === "popup" ? new PopupController(doc, {
            viewProps: this.viewProps
        }) : null;
        const pickerC = new ColorPickerController(doc, {
            colorType: config.colorType,
            supportsAlpha: config.supportsAlpha,
            value: this.value,
            viewProps: this.viewProps
        });
        pickerC.view.allFocusableElements.forEach((elem)=>{
            elem.addEventListener("blur", this.onPopupChildBlur_);
            elem.addEventListener("keydown", this.onPopupChildKeydown_);
        });
        this.pickerC_ = pickerC;
        if (this.popC_) {
            this.view.element.appendChild(this.popC_.view.element);
            this.popC_.view.element.appendChild(pickerC.view.element);
            connectValues({
                primary: this.foldable_.value("expanded"),
                secondary: this.popC_.shows,
                forward: (p)=>p,
                backward: (_, s)=>s
            });
        } else if (this.view.pickerElement) {
            this.view.pickerElement.appendChild(this.pickerC_.view.element);
            bindFoldable(this.foldable_, this.view.pickerElement);
        }
    }
    get textController() {
        return this.textC_;
    }
    onButtonBlur_(e) {
        if (!this.popC_) return;
        const elem = this.view.element;
        const nextTarget = forceCast(e.relatedTarget);
        if (!nextTarget || !elem.contains(nextTarget)) this.popC_.shows.rawValue = false;
    }
    onButtonClick_() {
        this.foldable_.set("expanded", !this.foldable_.get("expanded"));
        if (this.foldable_.get("expanded")) this.pickerC_.view.allFocusableElements[0].focus();
    }
    onPopupChildBlur_(ev) {
        if (!this.popC_) return;
        const elem = this.popC_.view.element;
        const nextTarget = findNextTarget(ev);
        if (nextTarget && elem.contains(nextTarget)) return;
        if (nextTarget && nextTarget === this.swatchC_.view.buttonElement && !supportsTouch(elem.ownerDocument)) return;
        this.popC_.shows.rawValue = false;
    }
    onPopupChildKeydown_(ev) {
        if (this.popC_) {
            if (ev.key === "Escape") this.popC_.shows.rawValue = false;
        } else if (this.view.pickerElement) {
            if (ev.key === "Escape") this.swatchC_.view.buttonElement.focus();
        }
    }
}
function colorToRgbNumber(value) {
    return removeAlphaComponent(value.getComponents("rgb")).reduce((result, comp)=>{
        return result << 8 | Math.floor(comp) & 0xff;
    }, 0);
}
function colorToRgbaNumber(value) {
    return value.getComponents("rgb").reduce((result, comp, index)=>{
        const hex = Math.floor(index === 3 ? comp * 255 : comp) & 0xff;
        return result << 8 | hex;
    }, 0) >>> 0;
}
function numberToRgbColor(num) {
    return new IntColor([
        num >> 16 & 0xff,
        num >> 8 & 0xff,
        num & 0xff
    ], "rgb");
}
function numberToRgbaColor(num) {
    return new IntColor([
        num >> 24 & 0xff,
        num >> 16 & 0xff,
        num >> 8 & 0xff,
        mapRange(num & 0xff, 0, 255, 0, 1)
    ], "rgb");
}
function colorFromRgbNumber(value) {
    if (typeof value !== "number") return IntColor.black();
    return numberToRgbColor(value);
}
function colorFromRgbaNumber(value) {
    if (typeof value !== "number") return IntColor.black();
    return numberToRgbaColor(value);
}
function isRgbColorComponent(obj, key) {
    if (typeof obj !== "object" || isEmpty(obj)) return false;
    return key in obj && typeof obj[key] === "number";
}
function isRgbColorObject(obj) {
    return isRgbColorComponent(obj, "r") && isRgbColorComponent(obj, "g") && isRgbColorComponent(obj, "b");
}
function isRgbaColorObject(obj) {
    return isRgbColorObject(obj) && isRgbColorComponent(obj, "a");
}
function isColorObject(obj) {
    return isRgbColorObject(obj);
}
function equalsColor(v1, v2) {
    if (v1.mode !== v2.mode) return false;
    if (v1.type !== v2.type) return false;
    const comps1 = v1.getComponents();
    const comps2 = v2.getComponents();
    for(let i = 0; i < comps1.length; i++){
        if (comps1[i] !== comps2[i]) return false;
    }
    return true;
}
function createColorComponentsFromRgbObject(obj) {
    return "a" in obj ? [
        obj.r,
        obj.g,
        obj.b,
        obj.a
    ] : [
        obj.r,
        obj.g,
        obj.b
    ];
}
function createColorStringWriter(format) {
    const stringify = findColorStringifier(format);
    return stringify ? (target, value)=>{
        writePrimitive(target, stringify(value));
    } : null;
}
function createColorNumberWriter(supportsAlpha) {
    const colorToNumber = supportsAlpha ? colorToRgbaNumber : colorToRgbNumber;
    return (target, value)=>{
        writePrimitive(target, colorToNumber(value));
    };
}
function writeRgbaColorObject(target, value, type) {
    const cc = mapColorType(value, type);
    const obj = cc.toRgbaObject();
    target.writeProperty("r", obj.r);
    target.writeProperty("g", obj.g);
    target.writeProperty("b", obj.b);
    target.writeProperty("a", obj.a);
}
function writeRgbColorObject(target, value, type) {
    const cc = mapColorType(value, type);
    const obj = cc.toRgbaObject();
    target.writeProperty("r", obj.r);
    target.writeProperty("g", obj.g);
    target.writeProperty("b", obj.b);
}
function createColorObjectWriter(supportsAlpha, type) {
    return (target, inValue)=>{
        if (supportsAlpha) writeRgbaColorObject(target, inValue, type);
        else writeRgbColorObject(target, inValue, type);
    };
}
function shouldSupportAlpha$1(inputParams) {
    var _a;
    if ((_a = inputParams === null || inputParams === void 0 ? void 0 : inputParams.color) === null || _a === void 0 ? void 0 : _a.alpha) return true;
    return false;
}
function createFormatter$1(supportsAlpha) {
    return supportsAlpha ? (v)=>colorToHexRgbaString(v, "0x") : (v)=>colorToHexRgbString(v, "0x");
}
function isForColor(params) {
    if ("color" in params) return true;
    if (params.view === "color") return true;
    return false;
}
const NumberColorInputPlugin = createPlugin({
    id: "input-color-number",
    type: "input",
    accept: (value, params)=>{
        if (typeof value !== "number") return null;
        if (!isForColor(params)) return null;
        const result = parseColorInputParams(params);
        return result ? {
            initialValue: value,
            params: Object.assign(Object.assign({}, result), {
                supportsAlpha: shouldSupportAlpha$1(params)
            })
        } : null;
    },
    binding: {
        reader: (args)=>{
            return args.params.supportsAlpha ? colorFromRgbaNumber : colorFromRgbNumber;
        },
        equals: equalsColor,
        writer: (args)=>{
            return createColorNumberWriter(args.params.supportsAlpha);
        }
    },
    controller: (args)=>{
        var _a, _b;
        return new ColorController(args.document, {
            colorType: "int",
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            formatter: createFormatter$1(args.params.supportsAlpha),
            parser: createColorStringParser("int"),
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : "popup",
            supportsAlpha: args.params.supportsAlpha,
            value: args.value,
            viewProps: args.viewProps
        });
    }
});
function colorFromObject(value, type) {
    if (!isColorObject(value)) return mapColorType(IntColor.black(), type);
    if (type === "int") {
        const comps = createColorComponentsFromRgbObject(value);
        return new IntColor(comps, "rgb");
    }
    if (type === "float") {
        const comps = createColorComponentsFromRgbObject(value);
        return new FloatColor(comps, "rgb");
    }
    return mapColorType(IntColor.black(), "int");
}
function shouldSupportAlpha(initialValue) {
    return isRgbaColorObject(initialValue);
}
function createColorObjectBindingReader(type) {
    return (value)=>{
        const c = colorFromObject(value, type);
        return mapColorType(c, "int");
    };
}
function createColorObjectFormatter(supportsAlpha, type) {
    return (value)=>{
        if (supportsAlpha) return colorToObjectRgbaString(value, type);
        return colorToObjectRgbString(value, type);
    };
}
const ObjectColorInputPlugin = createPlugin({
    id: "input-color-object",
    type: "input",
    accept: (value, params)=>{
        var _a;
        if (!isColorObject(value)) return null;
        const result = parseColorInputParams(params);
        return result ? {
            initialValue: value,
            params: Object.assign(Object.assign({}, result), {
                colorType: (_a = extractColorType(params)) !== null && _a !== void 0 ? _a : "int"
            })
        } : null;
    },
    binding: {
        reader: (args)=>createColorObjectBindingReader(args.params.colorType),
        equals: equalsColor,
        writer: (args)=>createColorObjectWriter(shouldSupportAlpha(args.initialValue), args.params.colorType)
    },
    controller: (args)=>{
        var _a, _b;
        const supportsAlpha = isRgbaColorObject(args.initialValue);
        return new ColorController(args.document, {
            colorType: args.params.colorType,
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            formatter: createColorObjectFormatter(supportsAlpha, args.params.colorType),
            parser: createColorStringParser("int"),
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : "popup",
            supportsAlpha: supportsAlpha,
            value: args.value,
            viewProps: args.viewProps
        });
    }
});
const StringColorInputPlugin = createPlugin({
    id: "input-color-string",
    type: "input",
    accept: (value, params)=>{
        if (typeof value !== "string") return null;
        if (params.view === "text") return null;
        const format = detectStringColorFormat(value, extractColorType(params));
        if (!format) return null;
        const stringifier = findColorStringifier(format);
        if (!stringifier) return null;
        const result = parseColorInputParams(params);
        return result ? {
            initialValue: value,
            params: Object.assign(Object.assign({}, result), {
                format: format,
                stringifier: stringifier
            })
        } : null;
    },
    binding: {
        reader: ()=>readIntColorString,
        equals: equalsColor,
        writer: (args)=>{
            const writer = createColorStringWriter(args.params.format);
            if (!writer) throw TpError.notBindable();
            return writer;
        }
    },
    controller: (args)=>{
        var _a, _b;
        return new ColorController(args.document, {
            colorType: args.params.format.type,
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            formatter: args.params.stringifier,
            parser: createColorStringParser("int"),
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : "popup",
            supportsAlpha: args.params.format.alpha,
            value: args.value,
            viewProps: args.viewProps
        });
    }
});
class PointNdConstraint {
    constructor(config){
        this.components = config.components;
        this.asm_ = config.assembly;
    }
    constrain(value) {
        const comps = this.asm_.toComponents(value).map((comp, index)=>{
            var _a, _b;
            return (_b = (_a = this.components[index]) === null || _a === void 0 ? void 0 : _a.constrain(comp)) !== null && _b !== void 0 ? _b : comp;
        });
        return this.asm_.fromComponents(comps);
    }
}
const cn$6 = ClassName("pndtxt");
class PointNdTextView {
    constructor(doc, config){
        this.textViews = config.textViews;
        this.element = doc.createElement("div");
        this.element.classList.add(cn$6());
        this.textViews.forEach((v)=>{
            const axisElem = doc.createElement("div");
            axisElem.classList.add(cn$6("a"));
            axisElem.appendChild(v.element);
            this.element.appendChild(axisElem);
        });
    }
}
function createAxisController(doc, config, index) {
    return new NumberTextController(doc, {
        arrayPosition: index === 0 ? "fst" : index === config.axes.length - 1 ? "lst" : "mid",
        parser: config.parser,
        props: config.axes[index].textProps,
        value: createValue(0, {
            constraint: config.axes[index].constraint
        }),
        viewProps: config.viewProps
    });
}
class PointNdTextController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.acs_ = config.axes.map((_, index)=>createAxisController(doc, config, index));
        this.acs_.forEach((c, index)=>{
            connectValues({
                primary: this.value,
                secondary: c.value,
                forward: (p)=>config.assembly.toComponents(p)[index],
                backward: (p, s)=>{
                    const comps = config.assembly.toComponents(p);
                    comps[index] = s;
                    return config.assembly.fromComponents(comps);
                }
            });
        });
        this.view = new PointNdTextView(doc, {
            textViews: this.acs_.map((ac)=>ac.view)
        });
    }
    get textControllers() {
        return this.acs_;
    }
}
class SliderInputBindingApi extends BindingApi {
    get max() {
        return this.controller.valueController.sliderController.props.get("max");
    }
    set max(max) {
        this.controller.valueController.sliderController.props.set("max", max);
    }
    get min() {
        return this.controller.valueController.sliderController.props.get("min");
    }
    set min(max) {
        this.controller.valueController.sliderController.props.set("min", max);
    }
}
function createConstraint$4(params, initialValue) {
    const constraints = [];
    const sc = createStepConstraint(params, initialValue);
    if (sc) constraints.push(sc);
    const rc = createRangeConstraint(params);
    if (rc) constraints.push(rc);
    const lc = createListConstraint(params.options);
    if (lc) constraints.push(lc);
    return new CompositeConstraint(constraints);
}
const NumberInputPlugin = createPlugin({
    id: "input-number",
    type: "input",
    accept: (value, params)=>{
        if (typeof value !== "number") return null;
        const result = parseRecord(params, (p)=>Object.assign(Object.assign({}, createNumberTextInputParamsParser(p)), {
                options: p.optional.custom(parseListOptions),
                readonly: p.optional.constant(false)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>numberFromUnknown,
        constraint: (args)=>createConstraint$4(args.params, args.initialValue),
        writer: (_args)=>writePrimitive
    },
    controller: (args)=>{
        const value = args.value;
        const c = args.constraint;
        const lc = c && findConstraint(c, ListConstraint);
        if (lc) return new ListController(args.document, {
            props: new ValueMap({
                options: lc.values.value("options")
            }),
            value: value,
            viewProps: args.viewProps
        });
        const textPropsObj = createNumberTextPropsObject(args.params, value.rawValue);
        const drc = c && findConstraint(c, DefiniteRangeConstraint);
        if (drc) return new SliderTextController(args.document, Object.assign(Object.assign({}, createSliderTextProps(Object.assign(Object.assign({}, textPropsObj), {
            keyScale: createValue(textPropsObj.keyScale),
            max: drc.values.value("max"),
            min: drc.values.value("min")
        }))), {
            parser: parseNumber,
            value: value,
            viewProps: args.viewProps
        }));
        return new NumberTextController(args.document, {
            parser: parseNumber,
            props: ValueMap.fromObject(textPropsObj),
            value: value,
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (typeof args.controller.value.rawValue !== "number") return null;
        if (args.controller.valueController instanceof SliderTextController) return new SliderInputBindingApi(args.controller);
        if (args.controller.valueController instanceof ListController) return new ListInputBindingApi(args.controller);
        return null;
    }
});
class Point2d {
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
    getComponents() {
        return [
            this.x,
            this.y
        ];
    }
    static isObject(obj) {
        if (isEmpty(obj)) return false;
        const x = obj.x;
        const y = obj.y;
        if (typeof x !== "number" || typeof y !== "number") return false;
        return true;
    }
    static equals(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y;
    }
    toObject() {
        return {
            x: this.x,
            y: this.y
        };
    }
}
const Point2dAssembly = {
    toComponents: (p)=>p.getComponents(),
    fromComponents: (comps)=>new Point2d(...comps)
};
const cn$5 = ClassName("p2d");
class Point2dView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$5());
        config.viewProps.bindClassModifiers(this.element);
        bindValue(config.expanded, valueToClassName(this.element, cn$5(undefined, "expanded")));
        const headElem = doc.createElement("div");
        headElem.classList.add(cn$5("h"));
        this.element.appendChild(headElem);
        const buttonElem = doc.createElement("button");
        buttonElem.classList.add(cn$5("b"));
        buttonElem.appendChild(createSvgIconElement(doc, "p2dpad"));
        config.viewProps.bindDisabled(buttonElem);
        headElem.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const textElem = doc.createElement("div");
        textElem.classList.add(cn$5("t"));
        headElem.appendChild(textElem);
        this.textElement = textElem;
        if (config.pickerLayout === "inline") {
            const pickerElem = doc.createElement("div");
            pickerElem.classList.add(cn$5("p"));
            this.element.appendChild(pickerElem);
            this.pickerElement = pickerElem;
        } else this.pickerElement = null;
    }
}
const cn$4 = ClassName("p2dp");
class Point2dPickerView {
    constructor(doc, config){
        this.onFoldableChange_ = this.onFoldableChange_.bind(this);
        this.onPropsChange_ = this.onPropsChange_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.props_ = config.props;
        this.props_.emitter.on("change", this.onPropsChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$4());
        if (config.layout === "popup") this.element.classList.add(cn$4(undefined, "p"));
        config.viewProps.bindClassModifiers(this.element);
        const padElem = doc.createElement("div");
        padElem.classList.add(cn$4("p"));
        config.viewProps.bindTabIndex(padElem);
        this.element.appendChild(padElem);
        this.padElement = padElem;
        const svgElem = doc.createElementNS(SVG_NS, "svg");
        svgElem.classList.add(cn$4("g"));
        this.padElement.appendChild(svgElem);
        this.svgElem_ = svgElem;
        const xAxisElem = doc.createElementNS(SVG_NS, "line");
        xAxisElem.classList.add(cn$4("ax"));
        xAxisElem.setAttributeNS(null, "x1", "0");
        xAxisElem.setAttributeNS(null, "y1", "50%");
        xAxisElem.setAttributeNS(null, "x2", "100%");
        xAxisElem.setAttributeNS(null, "y2", "50%");
        this.svgElem_.appendChild(xAxisElem);
        const yAxisElem = doc.createElementNS(SVG_NS, "line");
        yAxisElem.classList.add(cn$4("ax"));
        yAxisElem.setAttributeNS(null, "x1", "50%");
        yAxisElem.setAttributeNS(null, "y1", "0");
        yAxisElem.setAttributeNS(null, "x2", "50%");
        yAxisElem.setAttributeNS(null, "y2", "100%");
        this.svgElem_.appendChild(yAxisElem);
        const lineElem = doc.createElementNS(SVG_NS, "line");
        lineElem.classList.add(cn$4("l"));
        lineElem.setAttributeNS(null, "x1", "50%");
        lineElem.setAttributeNS(null, "y1", "50%");
        this.svgElem_.appendChild(lineElem);
        this.lineElem_ = lineElem;
        const markerElem = doc.createElement("div");
        markerElem.classList.add(cn$4("m"));
        this.padElement.appendChild(markerElem);
        this.markerElem_ = markerElem;
        config.value.emitter.on("change", this.onValueChange_);
        this.value = config.value;
        this.update_();
    }
    get allFocusableElements() {
        return [
            this.padElement
        ];
    }
    update_() {
        const [x, y] = this.value.rawValue.getComponents();
        const max = this.props_.get("max");
        const px = mapRange(x, -max, +max, 0, 100);
        const py = mapRange(y, -max, +max, 0, 100);
        const ipy = this.props_.get("invertsY") ? 100 - py : py;
        this.lineElem_.setAttributeNS(null, "x2", `${px}%`);
        this.lineElem_.setAttributeNS(null, "y2", `${ipy}%`);
        this.markerElem_.style.left = `${px}%`;
        this.markerElem_.style.top = `${ipy}%`;
    }
    onValueChange_() {
        this.update_();
    }
    onPropsChange_() {
        this.update_();
    }
    onFoldableChange_() {
        this.update_();
    }
}
function computeOffset(ev, keyScales, invertsY) {
    return [
        getStepForKey(keyScales[0], getHorizontalStepKeys(ev)),
        getStepForKey(keyScales[1], getVerticalStepKeys(ev)) * (invertsY ? 1 : -1)
    ];
}
class Point2dPickerController {
    constructor(doc, config){
        this.onPadKeyDown_ = this.onPadKeyDown_.bind(this);
        this.onPadKeyUp_ = this.onPadKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.props = config.props;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new Point2dPickerView(doc, {
            layout: config.layout,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.padElement);
        this.ptHandler_.emitter.on("down", this.onPointerDown_);
        this.ptHandler_.emitter.on("move", this.onPointerMove_);
        this.ptHandler_.emitter.on("up", this.onPointerUp_);
        this.view.padElement.addEventListener("keydown", this.onPadKeyDown_);
        this.view.padElement.addEventListener("keyup", this.onPadKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        const max = this.props.get("max");
        const px = mapRange(d.point.x, 0, d.bounds.width, -max, +max);
        const py = mapRange(this.props.get("invertsY") ? d.bounds.height - d.point.y : d.point.y, 0, d.bounds.height, -max, +max);
        this.value.setRawValue(new Point2d(px, py), opts);
    }
    onPointerDown_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onPadKeyDown_(ev) {
        if (isArrowKey(ev.key)) ev.preventDefault();
        const [dx, dy] = computeOffset(ev, [
            this.props.get("xKeyScale"),
            this.props.get("yKeyScale")
        ], this.props.get("invertsY"));
        if (dx === 0 && dy === 0) return;
        this.value.setRawValue(new Point2d(this.value.rawValue.x + dx, this.value.rawValue.y + dy), {
            forceEmit: false,
            last: false
        });
    }
    onPadKeyUp_(ev) {
        const [dx, dy] = computeOffset(ev, [
            this.props.get("xKeyScale"),
            this.props.get("yKeyScale")
        ], this.props.get("invertsY"));
        if (dx === 0 && dy === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
class Point2dController {
    constructor(doc, config){
        var _a, _b;
        this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
        this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
        this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this);
        this.onPadButtonClick_ = this.onPadButtonClick_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.foldable_ = Foldable.create(config.expanded);
        this.popC_ = config.pickerLayout === "popup" ? new PopupController(doc, {
            viewProps: this.viewProps
        }) : null;
        const padC = new Point2dPickerController(doc, {
            layout: config.pickerLayout,
            props: new ValueMap({
                invertsY: createValue(config.invertsY),
                max: createValue(config.max),
                xKeyScale: config.axes[0].textProps.value("keyScale"),
                yKeyScale: config.axes[1].textProps.value("keyScale")
            }),
            value: this.value,
            viewProps: this.viewProps
        });
        padC.view.allFocusableElements.forEach((elem)=>{
            elem.addEventListener("blur", this.onPopupChildBlur_);
            elem.addEventListener("keydown", this.onPopupChildKeydown_);
        });
        this.pickerC_ = padC;
        this.textC_ = new PointNdTextController(doc, {
            assembly: Point2dAssembly,
            axes: config.axes,
            parser: config.parser,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view = new Point2dView(doc, {
            expanded: this.foldable_.value("expanded"),
            pickerLayout: config.pickerLayout,
            viewProps: this.viewProps
        });
        this.view.textElement.appendChild(this.textC_.view.element);
        (_a = this.view.buttonElement) === null || _a === void 0 || _a.addEventListener("blur", this.onPadButtonBlur_);
        (_b = this.view.buttonElement) === null || _b === void 0 || _b.addEventListener("click", this.onPadButtonClick_);
        if (this.popC_) {
            this.view.element.appendChild(this.popC_.view.element);
            this.popC_.view.element.appendChild(this.pickerC_.view.element);
            connectValues({
                primary: this.foldable_.value("expanded"),
                secondary: this.popC_.shows,
                forward: (p)=>p,
                backward: (_, s)=>s
            });
        } else if (this.view.pickerElement) {
            this.view.pickerElement.appendChild(this.pickerC_.view.element);
            bindFoldable(this.foldable_, this.view.pickerElement);
        }
    }
    get textController() {
        return this.textC_;
    }
    onPadButtonBlur_(e) {
        if (!this.popC_) return;
        const elem = this.view.element;
        const nextTarget = forceCast(e.relatedTarget);
        if (!nextTarget || !elem.contains(nextTarget)) this.popC_.shows.rawValue = false;
    }
    onPadButtonClick_() {
        this.foldable_.set("expanded", !this.foldable_.get("expanded"));
        if (this.foldable_.get("expanded")) this.pickerC_.view.allFocusableElements[0].focus();
    }
    onPopupChildBlur_(ev) {
        if (!this.popC_) return;
        const elem = this.popC_.view.element;
        const nextTarget = findNextTarget(ev);
        if (nextTarget && elem.contains(nextTarget)) return;
        if (nextTarget && nextTarget === this.view.buttonElement && !supportsTouch(elem.ownerDocument)) return;
        this.popC_.shows.rawValue = false;
    }
    onPopupChildKeydown_(ev) {
        if (this.popC_) {
            if (ev.key === "Escape") this.popC_.shows.rawValue = false;
        } else if (this.view.pickerElement) {
            if (ev.key === "Escape") this.view.buttonElement.focus();
        }
    }
}
function point2dFromUnknown(value) {
    return Point2d.isObject(value) ? new Point2d(value.x, value.y) : new Point2d();
}
function writePoint2d(target, value) {
    target.writeProperty("x", value.x);
    target.writeProperty("y", value.y);
}
function createConstraint$3(params, initialValue) {
    return new PointNdConstraint({
        assembly: Point2dAssembly,
        components: [
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.x), initialValue.x),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.y), initialValue.y)
        ]
    });
}
function getSuitableMaxDimensionValue(params, rawValue) {
    var _a, _b;
    if (!isEmpty(params.min) || !isEmpty(params.max)) return Math.max(Math.abs((_a = params.min) !== null && _a !== void 0 ? _a : 0), Math.abs((_b = params.max) !== null && _b !== void 0 ? _b : 0));
    const step = getSuitableKeyScale(params);
    return Math.max(Math.abs(step) * 10, Math.abs(rawValue) * 10);
}
function getSuitableMax(params, initialValue) {
    var _a, _b;
    const xr = getSuitableMaxDimensionValue(deepMerge(params, (_a = params.x) !== null && _a !== void 0 ? _a : {}), initialValue.x);
    const yr = getSuitableMaxDimensionValue(deepMerge(params, (_b = params.y) !== null && _b !== void 0 ? _b : {}), initialValue.y);
    return Math.max(xr, yr);
}
function shouldInvertY(params) {
    if (!("y" in params)) return false;
    const yParams = params.y;
    if (!yParams) return false;
    return "inverted" in yParams ? !!yParams.inverted : false;
}
const Point2dInputPlugin = createPlugin({
    id: "input-point2d",
    type: "input",
    accept: (value, params)=>{
        if (!Point2d.isObject(value)) return null;
        const result = parseRecord(params, (p)=>Object.assign(Object.assign({}, createPointDimensionParser(p)), {
                expanded: p.optional.boolean,
                picker: p.optional.custom(parsePickerLayout),
                readonly: p.optional.constant(false),
                x: p.optional.custom(parsePointDimensionParams),
                y: p.optional.object(Object.assign(Object.assign({}, createPointDimensionParser(p)), {
                    inverted: p.optional.boolean
                }))
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: ()=>point2dFromUnknown,
        constraint: (args)=>createConstraint$3(args.params, args.initialValue),
        equals: Point2d.equals,
        writer: ()=>writePoint2d
    },
    controller: (args)=>{
        var _a, _b;
        const doc = args.document;
        const value = args.value;
        const c = args.constraint;
        const dParams = [
            args.params.x,
            args.params.y
        ];
        return new Point2dController(doc, {
            axes: value.rawValue.getComponents().map((comp, i)=>{
                var _a;
                return createPointAxis({
                    constraint: c.components[i],
                    initialValue: comp,
                    params: deepMerge(args.params, (_a = dParams[i]) !== null && _a !== void 0 ? _a : {})
                });
            }),
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            invertsY: shouldInvertY(args.params),
            max: getSuitableMax(args.params, value.rawValue),
            parser: parseNumber,
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : "popup",
            value: value,
            viewProps: args.viewProps
        });
    }
});
class Point3d {
    constructor(x = 0, y = 0, z = 0){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    getComponents() {
        return [
            this.x,
            this.y,
            this.z
        ];
    }
    static isObject(obj) {
        if (isEmpty(obj)) return false;
        const x = obj.x;
        const y = obj.y;
        const z = obj.z;
        if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") return false;
        return true;
    }
    static equals(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
    }
    toObject() {
        return {
            x: this.x,
            y: this.y,
            z: this.z
        };
    }
}
const Point3dAssembly = {
    toComponents: (p)=>p.getComponents(),
    fromComponents: (comps)=>new Point3d(...comps)
};
function point3dFromUnknown(value) {
    return Point3d.isObject(value) ? new Point3d(value.x, value.y, value.z) : new Point3d();
}
function writePoint3d(target, value) {
    target.writeProperty("x", value.x);
    target.writeProperty("y", value.y);
    target.writeProperty("z", value.z);
}
function createConstraint$2(params, initialValue) {
    return new PointNdConstraint({
        assembly: Point3dAssembly,
        components: [
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.x), initialValue.x),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.y), initialValue.y),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.z), initialValue.z)
        ]
    });
}
const Point3dInputPlugin = createPlugin({
    id: "input-point3d",
    type: "input",
    accept: (value, params)=>{
        if (!Point3d.isObject(value)) return null;
        const result = parseRecord(params, (p)=>Object.assign(Object.assign({}, createPointDimensionParser(p)), {
                readonly: p.optional.constant(false),
                x: p.optional.custom(parsePointDimensionParams),
                y: p.optional.custom(parsePointDimensionParams),
                z: p.optional.custom(parsePointDimensionParams)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>point3dFromUnknown,
        constraint: (args)=>createConstraint$2(args.params, args.initialValue),
        equals: Point3d.equals,
        writer: (_args)=>writePoint3d
    },
    controller: (args)=>{
        const value = args.value;
        const c = args.constraint;
        const dParams = [
            args.params.x,
            args.params.y,
            args.params.z
        ];
        return new PointNdTextController(args.document, {
            assembly: Point3dAssembly,
            axes: value.rawValue.getComponents().map((comp, i)=>{
                var _a;
                return createPointAxis({
                    constraint: c.components[i],
                    initialValue: comp,
                    params: deepMerge(args.params, (_a = dParams[i]) !== null && _a !== void 0 ? _a : {})
                });
            }),
            parser: parseNumber,
            value: value,
            viewProps: args.viewProps
        });
    }
});
class Point4d {
    constructor(x = 0, y = 0, z = 0, w = 0){
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    getComponents() {
        return [
            this.x,
            this.y,
            this.z,
            this.w
        ];
    }
    static isObject(obj) {
        if (isEmpty(obj)) return false;
        const x = obj.x;
        const y = obj.y;
        const z = obj.z;
        const w = obj.w;
        if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number" || typeof w !== "number") return false;
        return true;
    }
    static equals(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z && v1.w === v2.w;
    }
    toObject() {
        return {
            x: this.x,
            y: this.y,
            z: this.z,
            w: this.w
        };
    }
}
const Point4dAssembly = {
    toComponents: (p)=>p.getComponents(),
    fromComponents: (comps)=>new Point4d(...comps)
};
function point4dFromUnknown(value) {
    return Point4d.isObject(value) ? new Point4d(value.x, value.y, value.z, value.w) : new Point4d();
}
function writePoint4d(target, value) {
    target.writeProperty("x", value.x);
    target.writeProperty("y", value.y);
    target.writeProperty("z", value.z);
    target.writeProperty("w", value.w);
}
function createConstraint$1(params, initialValue) {
    return new PointNdConstraint({
        assembly: Point4dAssembly,
        components: [
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.x), initialValue.x),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.y), initialValue.y),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.z), initialValue.z),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.w), initialValue.w)
        ]
    });
}
const Point4dInputPlugin = createPlugin({
    id: "input-point4d",
    type: "input",
    accept: (value, params)=>{
        if (!Point4d.isObject(value)) return null;
        const result = parseRecord(params, (p)=>Object.assign(Object.assign({}, createPointDimensionParser(p)), {
                readonly: p.optional.constant(false),
                w: p.optional.custom(parsePointDimensionParams),
                x: p.optional.custom(parsePointDimensionParams),
                y: p.optional.custom(parsePointDimensionParams),
                z: p.optional.custom(parsePointDimensionParams)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>point4dFromUnknown,
        constraint: (args)=>createConstraint$1(args.params, args.initialValue),
        equals: Point4d.equals,
        writer: (_args)=>writePoint4d
    },
    controller: (args)=>{
        const value = args.value;
        const c = args.constraint;
        const dParams = [
            args.params.x,
            args.params.y,
            args.params.z,
            args.params.w
        ];
        return new PointNdTextController(args.document, {
            assembly: Point4dAssembly,
            axes: value.rawValue.getComponents().map((comp, i)=>{
                var _a;
                return createPointAxis({
                    constraint: c.components[i],
                    initialValue: comp,
                    params: deepMerge(args.params, (_a = dParams[i]) !== null && _a !== void 0 ? _a : {})
                });
            }),
            parser: parseNumber,
            value: value,
            viewProps: args.viewProps
        });
    }
});
function createConstraint(params) {
    const constraints = [];
    const lc = createListConstraint(params.options);
    if (lc) constraints.push(lc);
    return new CompositeConstraint(constraints);
}
const StringInputPlugin = createPlugin({
    id: "input-string",
    type: "input",
    accept: (value, params)=>{
        if (typeof value !== "string") return null;
        const result = parseRecord(params, (p)=>({
                readonly: p.optional.constant(false),
                options: p.optional.custom(parseListOptions)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>stringFromUnknown,
        constraint: (args)=>createConstraint(args.params),
        writer: (_args)=>writePrimitive
    },
    controller: (args)=>{
        const doc = args.document;
        const value = args.value;
        const c = args.constraint;
        const lc = c && findConstraint(c, ListConstraint);
        if (lc) return new ListController(doc, {
            props: new ValueMap({
                options: lc.values.value("options")
            }),
            value: value,
            viewProps: args.viewProps
        });
        return new TextController(doc, {
            parser: (v)=>v,
            props: ValueMap.fromObject({
                formatter: formatString
            }),
            value: value,
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (typeof args.controller.value.rawValue !== "string") return null;
        if (args.controller.valueController instanceof ListController) return new ListInputBindingApi(args.controller);
        return null;
    }
});
const Constants = {
    monitor: {
        defaultInterval: 200,
        defaultRows: 3
    }
};
const cn$3 = ClassName("mll");
class MultiLogView {
    constructor(doc, config){
        this.onValueUpdate_ = this.onValueUpdate_.bind(this);
        this.formatter_ = config.formatter;
        this.element = doc.createElement("div");
        this.element.classList.add(cn$3());
        config.viewProps.bindClassModifiers(this.element);
        const textareaElem = doc.createElement("textarea");
        textareaElem.classList.add(cn$3("i"));
        textareaElem.style.height = `calc(var(${getCssVar("containerUnitSize")}) * ${config.rows})`;
        textareaElem.readOnly = true;
        config.viewProps.bindDisabled(textareaElem);
        this.element.appendChild(textareaElem);
        this.textareaElem_ = textareaElem;
        config.value.emitter.on("change", this.onValueUpdate_);
        this.value = config.value;
        this.update_();
    }
    update_() {
        const elem = this.textareaElem_;
        const shouldScroll = elem.scrollTop === elem.scrollHeight - elem.clientHeight;
        const lines = [];
        this.value.rawValue.forEach((value)=>{
            if (value !== undefined) lines.push(this.formatter_(value));
        });
        elem.textContent = lines.join("\n");
        if (shouldScroll) elem.scrollTop = elem.scrollHeight;
    }
    onValueUpdate_() {
        this.update_();
    }
}
class MultiLogController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new MultiLogView(doc, {
            formatter: config.formatter,
            rows: config.rows,
            value: this.value,
            viewProps: this.viewProps
        });
    }
}
const cn$2 = ClassName("sgl");
class SingleLogView {
    constructor(doc, config){
        this.onValueUpdate_ = this.onValueUpdate_.bind(this);
        this.formatter_ = config.formatter;
        this.element = doc.createElement("div");
        this.element.classList.add(cn$2());
        config.viewProps.bindClassModifiers(this.element);
        const inputElem = doc.createElement("input");
        inputElem.classList.add(cn$2("i"));
        inputElem.readOnly = true;
        inputElem.type = "text";
        config.viewProps.bindDisabled(inputElem);
        this.element.appendChild(inputElem);
        this.inputElement = inputElem;
        config.value.emitter.on("change", this.onValueUpdate_);
        this.value = config.value;
        this.update_();
    }
    update_() {
        const values = this.value.rawValue;
        const lastValue = values[values.length - 1];
        this.inputElement.value = lastValue !== undefined ? this.formatter_(lastValue) : "";
    }
    onValueUpdate_() {
        this.update_();
    }
}
class SingleLogController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new SingleLogView(doc, {
            formatter: config.formatter,
            value: this.value,
            viewProps: this.viewProps
        });
    }
}
const BooleanMonitorPlugin = createPlugin({
    id: "monitor-bool",
    type: "monitor",
    accept: (value, params)=>{
        if (typeof value !== "boolean") return null;
        const result = parseRecord(params, (p)=>({
                readonly: p.required.constant(true),
                rows: p.optional.number
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>boolFromUnknown
    },
    controller: (args)=>{
        var _a;
        if (args.value.rawValue.length === 1) return new SingleLogController(args.document, {
            formatter: BooleanFormatter,
            value: args.value,
            viewProps: args.viewProps
        });
        return new MultiLogController(args.document, {
            formatter: BooleanFormatter,
            rows: (_a = args.params.rows) !== null && _a !== void 0 ? _a : Constants.monitor.defaultRows,
            value: args.value,
            viewProps: args.viewProps
        });
    }
});
class GraphLogMonitorBindingApi extends BindingApi {
    get max() {
        return this.controller.valueController.props.get("max");
    }
    set max(max) {
        this.controller.valueController.props.set("max", max);
    }
    get min() {
        return this.controller.valueController.props.get("min");
    }
    set min(min) {
        this.controller.valueController.props.set("min", min);
    }
}
const cn$1 = ClassName("grl");
class GraphLogView {
    constructor(doc, config){
        this.onCursorChange_ = this.onCursorChange_.bind(this);
        this.onValueUpdate_ = this.onValueUpdate_.bind(this);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$1());
        config.viewProps.bindClassModifiers(this.element);
        this.formatter_ = config.formatter;
        this.props_ = config.props;
        this.cursor_ = config.cursor;
        this.cursor_.emitter.on("change", this.onCursorChange_);
        const svgElem = doc.createElementNS(SVG_NS, "svg");
        svgElem.classList.add(cn$1("g"));
        svgElem.style.height = `calc(var(${getCssVar("containerUnitSize")}) * ${config.rows})`;
        this.element.appendChild(svgElem);
        this.svgElem_ = svgElem;
        const lineElem = doc.createElementNS(SVG_NS, "polyline");
        this.svgElem_.appendChild(lineElem);
        this.lineElem_ = lineElem;
        const tooltipElem = doc.createElement("div");
        tooltipElem.classList.add(cn$1("t"), ClassName("tt")());
        this.element.appendChild(tooltipElem);
        this.tooltipElem_ = tooltipElem;
        config.value.emitter.on("change", this.onValueUpdate_);
        this.value = config.value;
        this.update_();
    }
    get graphElement() {
        return this.svgElem_;
    }
    update_() {
        const { clientWidth: w , clientHeight: h  } = this.element;
        const maxIndex = this.value.rawValue.length - 1;
        const min = this.props_.get("min");
        const max = this.props_.get("max");
        const points = [];
        this.value.rawValue.forEach((v, index)=>{
            if (v === undefined) return;
            const x = mapRange(index, 0, maxIndex, 0, w);
            const y = mapRange(v, min, max, h, 0);
            points.push([
                x,
                y
            ].join(","));
        });
        this.lineElem_.setAttributeNS(null, "points", points.join(" "));
        const tooltipElem = this.tooltipElem_;
        const value = this.value.rawValue[this.cursor_.rawValue];
        if (value === undefined) {
            tooltipElem.classList.remove(cn$1("t", "a"));
            return;
        }
        const tx = mapRange(this.cursor_.rawValue, 0, maxIndex, 0, w);
        const ty = mapRange(value, min, max, h, 0);
        tooltipElem.style.left = `${tx}px`;
        tooltipElem.style.top = `${ty}px`;
        tooltipElem.textContent = `${this.formatter_(value)}`;
        if (!tooltipElem.classList.contains(cn$1("t", "a"))) {
            tooltipElem.classList.add(cn$1("t", "a"), cn$1("t", "in"));
            forceReflow(tooltipElem);
            tooltipElem.classList.remove(cn$1("t", "in"));
        }
    }
    onValueUpdate_() {
        this.update_();
    }
    onCursorChange_() {
        this.update_();
    }
}
class GraphLogController {
    constructor(doc, config){
        this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this);
        this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this);
        this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this);
        this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this);
        this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this);
        this.props = config.props;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.cursor_ = createValue(-1);
        this.view = new GraphLogView(doc, {
            cursor: this.cursor_,
            formatter: config.formatter,
            rows: config.rows,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        if (!supportsTouch(doc)) {
            this.view.element.addEventListener("mousemove", this.onGraphMouseMove_);
            this.view.element.addEventListener("mouseleave", this.onGraphMouseLeave_);
        } else {
            const ph = new PointerHandler(this.view.element);
            ph.emitter.on("down", this.onGraphPointerDown_);
            ph.emitter.on("move", this.onGraphPointerMove_);
            ph.emitter.on("up", this.onGraphPointerUp_);
        }
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                max: p.required.number,
                min: p.required.number
            }), (result)=>{
            this.props.set("max", result.max);
            this.props.set("min", result.min);
            return true;
        });
    }
    exportProps() {
        return exportBladeState(null, {
            max: this.props.get("max"),
            min: this.props.get("min")
        });
    }
    onGraphMouseLeave_() {
        this.cursor_.rawValue = -1;
    }
    onGraphMouseMove_(ev) {
        const { clientWidth: w  } = this.view.element;
        this.cursor_.rawValue = Math.floor(mapRange(ev.offsetX, 0, w, 0, this.value.rawValue.length));
    }
    onGraphPointerDown_(ev) {
        this.onGraphPointerMove_(ev);
    }
    onGraphPointerMove_(ev) {
        if (!ev.data.point) {
            this.cursor_.rawValue = -1;
            return;
        }
        this.cursor_.rawValue = Math.floor(mapRange(ev.data.point.x, 0, ev.data.bounds.width, 0, this.value.rawValue.length));
    }
    onGraphPointerUp_() {
        this.cursor_.rawValue = -1;
    }
}
function createFormatter(params) {
    return !isEmpty(params.format) ? params.format : createNumberFormatter(2);
}
function createTextMonitor(args) {
    var _a;
    if (args.value.rawValue.length === 1) return new SingleLogController(args.document, {
        formatter: createFormatter(args.params),
        value: args.value,
        viewProps: args.viewProps
    });
    return new MultiLogController(args.document, {
        formatter: createFormatter(args.params),
        rows: (_a = args.params.rows) !== null && _a !== void 0 ? _a : Constants.monitor.defaultRows,
        value: args.value,
        viewProps: args.viewProps
    });
}
function createGraphMonitor(args) {
    var _a, _b, _c;
    return new GraphLogController(args.document, {
        formatter: createFormatter(args.params),
        rows: (_a = args.params.rows) !== null && _a !== void 0 ? _a : Constants.monitor.defaultRows,
        props: ValueMap.fromObject({
            max: (_b = args.params.max) !== null && _b !== void 0 ? _b : 100,
            min: (_c = args.params.min) !== null && _c !== void 0 ? _c : 0
        }),
        value: args.value,
        viewProps: args.viewProps
    });
}
function shouldShowGraph(params) {
    return params.view === "graph";
}
const NumberMonitorPlugin = createPlugin({
    id: "monitor-number",
    type: "monitor",
    accept: (value, params)=>{
        if (typeof value !== "number") return null;
        const result = parseRecord(params, (p)=>({
                format: p.optional.function,
                max: p.optional.number,
                min: p.optional.number,
                readonly: p.required.constant(true),
                rows: p.optional.number,
                view: p.optional.string
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        defaultBufferSize: (params)=>shouldShowGraph(params) ? 64 : 1,
        reader: (_args)=>numberFromUnknown
    },
    controller: (args)=>{
        if (shouldShowGraph(args.params)) return createGraphMonitor(args);
        return createTextMonitor(args);
    },
    api: (args)=>{
        if (args.controller.valueController instanceof GraphLogController) return new GraphLogMonitorBindingApi(args.controller);
        return null;
    }
});
const StringMonitorPlugin = createPlugin({
    id: "monitor-string",
    type: "monitor",
    accept: (value, params)=>{
        if (typeof value !== "string") return null;
        const result = parseRecord(params, (p)=>({
                multiline: p.optional.boolean,
                readonly: p.required.constant(true),
                rows: p.optional.number
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>stringFromUnknown
    },
    controller: (args)=>{
        var _a;
        const value = args.value;
        const multiline = value.rawValue.length > 1 || args.params.multiline;
        if (multiline) return new MultiLogController(args.document, {
            formatter: formatString,
            rows: (_a = args.params.rows) !== null && _a !== void 0 ? _a : Constants.monitor.defaultRows,
            value: value,
            viewProps: args.viewProps
        });
        return new SingleLogController(args.document, {
            formatter: formatString,
            value: value,
            viewProps: args.viewProps
        });
    }
});
class BladeApiCache {
    constructor(){
        this.map_ = new Map();
    }
    get(bc) {
        var _a;
        return (_a = this.map_.get(bc)) !== null && _a !== void 0 ? _a : null;
    }
    has(bc) {
        return this.map_.has(bc);
    }
    add(bc, api) {
        this.map_.set(bc, api);
        bc.viewProps.handleDispose(()=>{
            this.map_.delete(bc);
        });
        return api;
    }
}
class ReadWriteBinding {
    constructor(config){
        this.target = config.target;
        this.reader_ = config.reader;
        this.writer_ = config.writer;
    }
    read() {
        return this.reader_(this.target.read());
    }
    write(value) {
        this.writer_(this.target, value);
    }
    inject(value) {
        this.write(this.reader_(value));
    }
}
function createInputBindingController(plugin, args) {
    var _a;
    const result = plugin.accept(args.target.read(), args.params);
    if (isEmpty(result)) return null;
    const valueArgs = {
        target: args.target,
        initialValue: result.initialValue,
        params: result.params
    };
    const params = parseRecord(args.params, (p)=>({
            disabled: p.optional.boolean,
            hidden: p.optional.boolean,
            label: p.optional.string,
            tag: p.optional.string
        }));
    const reader = plugin.binding.reader(valueArgs);
    const constraint = plugin.binding.constraint ? plugin.binding.constraint(valueArgs) : undefined;
    const binding = new ReadWriteBinding({
        reader: reader,
        target: args.target,
        writer: plugin.binding.writer(valueArgs)
    });
    const value = new InputBindingValue(createValue(reader(result.initialValue), {
        constraint: constraint,
        equals: plugin.binding.equals
    }), binding);
    const controller = plugin.controller({
        constraint: constraint,
        document: args.document,
        initialValue: result.initialValue,
        params: result.params,
        value: value,
        viewProps: ViewProps.create({
            disabled: params === null || params === void 0 ? void 0 : params.disabled,
            hidden: params === null || params === void 0 ? void 0 : params.hidden
        })
    });
    return new InputBindingController(args.document, {
        blade: createBlade(),
        props: ValueMap.fromObject({
            label: "label" in args.params ? (_a = params === null || params === void 0 ? void 0 : params.label) !== null && _a !== void 0 ? _a : null : args.target.key
        }),
        tag: params === null || params === void 0 ? void 0 : params.tag,
        value: value,
        valueController: controller
    });
}
class ReadonlyBinding {
    constructor(config){
        this.target = config.target;
        this.reader_ = config.reader;
    }
    read() {
        return this.reader_(this.target.read());
    }
}
function createTicker(document, interval) {
    return interval === 0 ? new ManualTicker() : new IntervalTicker(document, interval !== null && interval !== void 0 ? interval : Constants.monitor.defaultInterval);
}
function createMonitorBindingController(plugin, args) {
    var _a, _b, _c;
    const result = plugin.accept(args.target.read(), args.params);
    if (isEmpty(result)) return null;
    const bindingArgs = {
        target: args.target,
        initialValue: result.initialValue,
        params: result.params
    };
    const params = parseRecord(args.params, (p)=>({
            bufferSize: p.optional.number,
            disabled: p.optional.boolean,
            hidden: p.optional.boolean,
            interval: p.optional.number,
            label: p.optional.string
        }));
    const reader = plugin.binding.reader(bindingArgs);
    const bufferSize = (_b = (_a = params === null || params === void 0 ? void 0 : params.bufferSize) !== null && _a !== void 0 ? _a : plugin.binding.defaultBufferSize && plugin.binding.defaultBufferSize(result.params)) !== null && _b !== void 0 ? _b : 1;
    const value = new MonitorBindingValue({
        binding: new ReadonlyBinding({
            reader: reader,
            target: args.target
        }),
        bufferSize: bufferSize,
        ticker: createTicker(args.document, params === null || params === void 0 ? void 0 : params.interval)
    });
    const controller = plugin.controller({
        document: args.document,
        params: result.params,
        value: value,
        viewProps: ViewProps.create({
            disabled: params === null || params === void 0 ? void 0 : params.disabled,
            hidden: params === null || params === void 0 ? void 0 : params.hidden
        })
    });
    controller.viewProps.bindDisabled(value.ticker);
    controller.viewProps.handleDispose(()=>{
        value.ticker.dispose();
    });
    return new MonitorBindingController(args.document, {
        blade: createBlade(),
        props: ValueMap.fromObject({
            label: "label" in args.params ? (_c = params === null || params === void 0 ? void 0 : params.label) !== null && _c !== void 0 ? _c : null : args.target.key
        }),
        value: value,
        valueController: controller
    });
}
class PluginPool {
    constructor(apiCache){
        this.pluginsMap_ = {
            blades: [],
            inputs: [],
            monitors: []
        };
        this.apiCache_ = apiCache;
    }
    getAll() {
        return [
            ...this.pluginsMap_.blades,
            ...this.pluginsMap_.inputs,
            ...this.pluginsMap_.monitors
        ];
    }
    register(bundleId, r) {
        if (!isCompatible(r.core)) throw TpError.notCompatible(bundleId, r.id);
        if (r.type === "blade") this.pluginsMap_.blades.unshift(r);
        else if (r.type === "input") this.pluginsMap_.inputs.unshift(r);
        else if (r.type === "monitor") this.pluginsMap_.monitors.unshift(r);
    }
    createInput_(document, target, params) {
        return this.pluginsMap_.inputs.reduce((result, plugin)=>result !== null && result !== void 0 ? result : createInputBindingController(plugin, {
                document: document,
                target: target,
                params: params
            }), null);
    }
    createMonitor_(document, target, params) {
        return this.pluginsMap_.monitors.reduce((result, plugin)=>result !== null && result !== void 0 ? result : createMonitorBindingController(plugin, {
                document: document,
                params: params,
                target: target
            }), null);
    }
    createBinding(doc, target, params) {
        const initialValue = target.read();
        if (isEmpty(initialValue)) throw new TpError({
            context: {
                key: target.key
            },
            type: "nomatchingcontroller"
        });
        const ic = this.createInput_(doc, target, params);
        if (ic) return ic;
        const mc = this.createMonitor_(doc, target, params);
        if (mc) return mc;
        throw new TpError({
            context: {
                key: target.key
            },
            type: "nomatchingcontroller"
        });
    }
    createBlade(document, params) {
        const bc = this.pluginsMap_.blades.reduce((result, plugin)=>result !== null && result !== void 0 ? result : createBladeController(plugin, {
                document: document,
                params: params
            }), null);
        if (!bc) throw new TpError({
            type: "nomatchingview",
            context: {
                params: params
            }
        });
        return bc;
    }
    createInputBindingApi_(bc) {
        const api = this.pluginsMap_.inputs.reduce((result, plugin)=>{
            var _a, _b;
            if (result) return result;
            return (_b = (_a = plugin.api) === null || _a === void 0 ? void 0 : _a.call(plugin, {
                controller: bc
            })) !== null && _b !== void 0 ? _b : null;
        }, null);
        return this.apiCache_.add(bc, api !== null && api !== void 0 ? api : new BindingApi(bc));
    }
    createMonitorBindingApi_(bc) {
        const api = this.pluginsMap_.monitors.reduce((result, plugin)=>{
            var _a, _b;
            if (result) return result;
            return (_b = (_a = plugin.api) === null || _a === void 0 ? void 0 : _a.call(plugin, {
                controller: bc
            })) !== null && _b !== void 0 ? _b : null;
        }, null);
        return this.apiCache_.add(bc, api !== null && api !== void 0 ? api : new BindingApi(bc));
    }
    createBindingApi(bc) {
        if (this.apiCache_.has(bc)) return this.apiCache_.get(bc);
        if (isInputBindingController(bc)) return this.createInputBindingApi_(bc);
        if (isMonitorBindingController(bc)) return this.createMonitorBindingApi_(bc);
        throw TpError.shouldNeverHappen();
    }
    createApi(bc) {
        if (this.apiCache_.has(bc)) return this.apiCache_.get(bc);
        if (isBindingController(bc)) return this.createBindingApi(bc);
        const api = this.pluginsMap_.blades.reduce((result, plugin)=>result !== null && result !== void 0 ? result : plugin.api({
                controller: bc,
                pool: this
            }), null);
        if (!api) throw TpError.shouldNeverHappen();
        return this.apiCache_.add(bc, api);
    }
}
const sharedCache = new BladeApiCache();
function createDefaultPluginPool() {
    const pool = new PluginPool(sharedCache);
    [
        Point2dInputPlugin,
        Point3dInputPlugin,
        Point4dInputPlugin,
        StringInputPlugin,
        NumberInputPlugin,
        StringColorInputPlugin,
        ObjectColorInputPlugin,
        NumberColorInputPlugin,
        BooleanInputPlugin,
        BooleanMonitorPlugin,
        StringMonitorPlugin,
        NumberMonitorPlugin,
        ButtonBladePlugin,
        FolderBladePlugin,
        TabBladePlugin
    ].forEach((p)=>{
        pool.register("core", p);
    });
    return pool;
}
class ListBladeApi extends BladeApi {
    /**
     * @hidden
     */ constructor(controller){
        super(controller);
        this.emitter_ = new Emitter();
        this.controller.value.emitter.on("change", (ev)=>{
            this.emitter_.emit("change", new TpChangeEvent(this, ev.rawValue));
        });
    }
    get label() {
        return this.controller.labelController.props.get("label");
    }
    set label(label) {
        this.controller.labelController.props.set("label", label);
    }
    get options() {
        return this.controller.valueController.props.get("options");
    }
    set options(options) {
        this.controller.valueController.props.set("options", options);
    }
    get value() {
        return this.controller.value.rawValue;
    }
    set value(value) {
        this.controller.value.rawValue = value;
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
}
class SeparatorBladeApi extends BladeApi {
}
class SliderBladeApi extends BladeApi {
    /**
     * @hidden
     */ constructor(controller){
        super(controller);
        this.emitter_ = new Emitter();
        this.controller.value.emitter.on("change", (ev)=>{
            this.emitter_.emit("change", new TpChangeEvent(this, ev.rawValue));
        });
    }
    get label() {
        return this.controller.labelController.props.get("label");
    }
    set label(label) {
        this.controller.labelController.props.set("label", label);
    }
    get max() {
        return this.controller.valueController.sliderController.props.get("max");
    }
    set max(max) {
        this.controller.valueController.sliderController.props.set("max", max);
    }
    get min() {
        return this.controller.valueController.sliderController.props.get("min");
    }
    set min(min) {
        this.controller.valueController.sliderController.props.set("min", min);
    }
    get value() {
        return this.controller.value.rawValue;
    }
    set value(value) {
        this.controller.value.rawValue = value;
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
}
class TextBladeApi extends BladeApi {
    /**
     * @hidden
     */ constructor(controller){
        super(controller);
        this.emitter_ = new Emitter();
        this.controller.value.emitter.on("change", (ev)=>{
            this.emitter_.emit("change", new TpChangeEvent(this, ev.rawValue));
        });
    }
    get label() {
        return this.controller.labelController.props.get("label");
    }
    set label(label) {
        this.controller.labelController.props.set("label", label);
    }
    get formatter() {
        return this.controller.valueController.props.get("formatter");
    }
    set formatter(formatter) {
        this.controller.valueController.props.set("formatter", formatter);
    }
    get value() {
        return this.controller.value.rawValue;
    }
    set value(value) {
        this.controller.value.rawValue = value;
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        }, {
            key: handler
        });
        return this;
    }
    off(eventName, handler) {
        this.emitter_.off(eventName, handler);
        return this;
    }
}
const ListBladePlugin = function() {
    return {
        id: "list",
        type: "blade",
        core: VERSION$1,
        accept (params) {
            const result = parseRecord(params, (p)=>({
                    options: p.required.custom(parseListOptions),
                    value: p.required.raw,
                    view: p.required.constant("list"),
                    label: p.optional.string
                }));
            return result ? {
                params: result
            } : null;
        },
        controller (args) {
            const lc = new ListConstraint(normalizeListOptions(args.params.options));
            const value = createValue(args.params.value, {
                constraint: lc
            });
            const ic = new ListController(args.document, {
                props: new ValueMap({
                    options: lc.values.value("options")
                }),
                value: value,
                viewProps: args.viewProps
            });
            return new LabeledValueBladeController(args.document, {
                blade: args.blade,
                props: ValueMap.fromObject({
                    label: args.params.label
                }),
                value: value,
                valueController: ic
            });
        },
        api (args) {
            if (!(args.controller instanceof LabeledValueBladeController)) return null;
            if (!(args.controller.valueController instanceof ListController)) return null;
            return new ListBladeApi(args.controller);
        }
    };
}();
class RootApi extends FolderApi {
    /**
     * @hidden
     */ constructor(controller, pool){
        super(controller, pool);
    }
    get element() {
        return this.controller.view.element;
    }
}
/**
 * @hidden
 */ class RootController extends FolderController {
    constructor(doc, config){
        super(doc, {
            expanded: config.expanded,
            blade: config.blade,
            props: config.props,
            root: true,
            viewProps: config.viewProps
        });
    }
}
const cn = ClassName("spr");
/**
 * @hidden
 */ class SeparatorView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn());
        config.viewProps.bindClassModifiers(this.element);
        const hrElem = doc.createElement("hr");
        hrElem.classList.add(cn("r"));
        this.element.appendChild(hrElem);
    }
}
/**
 * @hidden
 */ class SeparatorController extends BladeController {
    /**
     * @hidden
     */ constructor(doc, config){
        super(Object.assign(Object.assign({}, config), {
            view: new SeparatorView(doc, {
                viewProps: config.viewProps
            })
        }));
    }
}
const SeparatorBladePlugin = {
    id: "separator",
    type: "blade",
    core: VERSION$1,
    accept (params) {
        const result = parseRecord(params, (p)=>({
                view: p.required.constant("separator")
            }));
        return result ? {
            params: result
        } : null;
    },
    controller (args) {
        return new SeparatorController(args.document, {
            blade: args.blade,
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (!(args.controller instanceof SeparatorController)) return null;
        return new SeparatorBladeApi(args.controller);
    }
};
const SliderBladePlugin = {
    id: "slider",
    type: "blade",
    core: VERSION$1,
    accept (params) {
        const result = parseRecord(params, (p)=>({
                max: p.required.number,
                min: p.required.number,
                view: p.required.constant("slider"),
                format: p.optional.function,
                label: p.optional.string,
                value: p.optional.number
            }));
        return result ? {
            params: result
        } : null;
    },
    controller (args) {
        var _a, _b;
        const initialValue = (_a = args.params.value) !== null && _a !== void 0 ? _a : 0;
        const drc = new DefiniteRangeConstraint({
            max: args.params.max,
            min: args.params.min
        });
        const v = createValue(initialValue, {
            constraint: drc
        });
        const vc = new SliderTextController(args.document, Object.assign(Object.assign({}, createSliderTextProps({
            formatter: (_b = args.params.format) !== null && _b !== void 0 ? _b : numberToString,
            keyScale: createValue(1),
            max: drc.values.value("max"),
            min: drc.values.value("min"),
            pointerScale: getSuitablePointerScale(args.params, initialValue)
        })), {
            parser: parseNumber,
            value: v,
            viewProps: args.viewProps
        }));
        return new LabeledValueBladeController(args.document, {
            blade: args.blade,
            props: ValueMap.fromObject({
                label: args.params.label
            }),
            value: v,
            valueController: vc
        });
    },
    api (args) {
        if (!(args.controller instanceof LabeledValueBladeController)) return null;
        if (!(args.controller.valueController instanceof SliderTextController)) return null;
        return new SliderBladeApi(args.controller);
    }
};
const TextBladePlugin = function() {
    return {
        id: "text",
        type: "blade",
        core: VERSION$1,
        accept (params) {
            const result = parseRecord(params, (p)=>({
                    parse: p.required.function,
                    value: p.required.raw,
                    view: p.required.constant("text"),
                    format: p.optional.function,
                    label: p.optional.string
                }));
            return result ? {
                params: result
            } : null;
        },
        controller (args) {
            var _a;
            const v = createValue(args.params.value);
            const ic = new TextController(args.document, {
                parser: args.params.parse,
                props: ValueMap.fromObject({
                    formatter: (_a = args.params.format) !== null && _a !== void 0 ? _a : (v)=>String(v)
                }),
                value: v,
                viewProps: args.viewProps
            });
            return new LabeledValueBladeController(args.document, {
                blade: args.blade,
                props: ValueMap.fromObject({
                    label: args.params.label
                }),
                value: v,
                valueController: ic
            });
        },
        api (args) {
            if (!(args.controller instanceof LabeledValueBladeController)) return null;
            if (!(args.controller.valueController instanceof TextController)) return null;
            return new TextBladeApi(args.controller);
        }
    };
}();
function createDefaultWrapperElement(doc) {
    const elem = doc.createElement("div");
    elem.classList.add(ClassName("dfw")());
    if (doc.body) doc.body.appendChild(elem);
    return elem;
}
function embedStyle(doc, id, css) {
    if (doc.querySelector(`style[data-tp-style=${id}]`)) return;
    const styleElem = doc.createElement("style");
    styleElem.dataset.tpStyle = id;
    styleElem.textContent = css;
    doc.head.appendChild(styleElem);
}
/**
 * The root pane of Tweakpane.
 */ class Pane extends RootApi {
    constructor(opt_config){
        var _a, _b;
        const config = opt_config !== null && opt_config !== void 0 ? opt_config : {};
        const doc = (_a = config.document) !== null && _a !== void 0 ? _a : getWindowDocument();
        const pool = createDefaultPluginPool();
        const rootController = new RootController(doc, {
            expanded: config.expanded,
            blade: createBlade(),
            props: ValueMap.fromObject({
                title: config.title
            }),
            viewProps: ViewProps.create()
        });
        super(rootController, pool);
        this.pool_ = pool;
        this.containerElem_ = (_b = config.container) !== null && _b !== void 0 ? _b : createDefaultWrapperElement(doc);
        this.containerElem_.appendChild(this.element);
        this.doc_ = doc;
        this.usesDefaultWrapper_ = !config.container;
        this.setUpDefaultPlugins_();
    }
    get document() {
        if (!this.doc_) throw TpError.alreadyDisposed();
        return this.doc_;
    }
    dispose() {
        const containerElem = this.containerElem_;
        if (!containerElem) throw TpError.alreadyDisposed();
        if (this.usesDefaultWrapper_) {
            const parentElem = containerElem.parentElement;
            if (parentElem) parentElem.removeChild(containerElem);
        }
        this.containerElem_ = null;
        this.doc_ = null;
        super.dispose();
    }
    registerPlugin(bundle) {
        if (bundle.css) embedStyle(this.document, `plugin-${bundle.id}`, bundle.css);
        const plugins = "plugin" in bundle ? [
            bundle.plugin
        ] : "plugins" in bundle ? bundle.plugins : [];
        plugins.forEach((p)=>{
            this.pool_.register(bundle.id, p);
        });
    }
    setUpDefaultPlugins_() {
        this.registerPlugin({
            id: "default",
            // NOTE: This string literal will be replaced with the default CSS by Rollup at the compilation time
            css: '.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',
            plugins: [
                ListBladePlugin,
                SeparatorBladePlugin,
                SliderBladePlugin,
                TabBladePlugin,
                TextBladePlugin
            ]
        });
    }
}
const VERSION = new Semver("4.0.3");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b3FeX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonCellApi", ()=>ButtonCellApi);
parcelHelpers.export(exports, "ButtonGridApi", ()=>ButtonGridApi);
parcelHelpers.export(exports, "ButtonGridController", ()=>ButtonGridController);
parcelHelpers.export(exports, "CubicBezier", ()=>CubicBezier);
parcelHelpers.export(exports, "CubicBezierApi", ()=>CubicBezierApi);
parcelHelpers.export(exports, "CubicBezierAssembly", ()=>CubicBezierAssembly);
parcelHelpers.export(exports, "CubicBezierController", ()=>CubicBezierController);
parcelHelpers.export(exports, "CubicBezierGraphController", ()=>CubicBezierGraphController);
parcelHelpers.export(exports, "CubicBezierGraphView", ()=>CubicBezierGraphView);
parcelHelpers.export(exports, "CubicBezierPickerController", ()=>CubicBezierPickerController);
parcelHelpers.export(exports, "CubicBezierPickerView", ()=>CubicBezierPickerView);
parcelHelpers.export(exports, "CubicBezierPreviewView", ()=>CubicBezierPreviewView);
parcelHelpers.export(exports, "CubicBezierView", ()=>CubicBezierView);
parcelHelpers.export(exports, "FpsGraphBladeApi", ()=>FpsGraphBladeApi);
parcelHelpers.export(exports, "FpsGraphController", ()=>FpsGraphController);
parcelHelpers.export(exports, "FpsView", ()=>FpsView);
parcelHelpers.export(exports, "Fpswatch", ()=>Fpswatch);
parcelHelpers.export(exports, "Interval", ()=>Interval);
parcelHelpers.export(exports, "IntervalAssembly", ()=>IntervalAssembly);
parcelHelpers.export(exports, "IntervalConstraint", ()=>IntervalConstraint);
parcelHelpers.export(exports, "RadioCellApi", ()=>RadioCellApi);
parcelHelpers.export(exports, "RadioController", ()=>RadioController);
parcelHelpers.export(exports, "RadioGridApi", ()=>RadioGridApi);
parcelHelpers.export(exports, "RadioGridController", ()=>RadioGridController);
parcelHelpers.export(exports, "RadioView", ()=>RadioView);
parcelHelpers.export(exports, "RangeSliderController", ()=>RangeSliderController);
parcelHelpers.export(exports, "RangeSliderTextController", ()=>RangeSliderTextController);
parcelHelpers.export(exports, "RangeSliderTextView", ()=>RangeSliderTextView);
parcelHelpers.export(exports, "RangeSliderView", ()=>RangeSliderView);
parcelHelpers.export(exports, "TpRadioGridChangeEvent", ()=>TpRadioGridChangeEvent);
parcelHelpers.export(exports, "css", ()=>css);
parcelHelpers.export(exports, "id", ()=>id);
parcelHelpers.export(exports, "plugins", ()=>plugins);
function forceCast(v) {
    return v;
}
function isEmpty(value) {
    return value === null || value === undefined;
}
function isObject$1(value) {
    return value !== null && typeof value === "object";
}
function isRecord(value) {
    return value !== null && typeof value === "object";
}
function deepEqualsArray(a1, a2) {
    if (a1.length !== a2.length) return false;
    for(let i = 0; i < a1.length; i++){
        if (a1[i] !== a2[i]) return false;
    }
    return true;
}
function deepMerge(r1, r2) {
    const keys = Array.from(new Set([
        ...Object.keys(r1),
        ...Object.keys(r2)
    ]));
    return keys.reduce((result, key)=>{
        const v1 = r1[key];
        const v2 = r2[key];
        return isRecord(v1) && isRecord(v2) ? Object.assign(Object.assign({}, result), {
            [key]: deepMerge(v1, v2)
        }) : Object.assign(Object.assign({}, result), {
            [key]: key in r2 ? v2 : v1
        });
    }, {});
}
function isBinding(value) {
    if (!isObject$1(value)) return false;
    return "target" in value;
}
const CREATE_MESSAGE_MAP = {
    alreadydisposed: ()=>"View has been already disposed",
    invalidparams: (context)=>`Invalid parameters for '${context.name}'`,
    nomatchingcontroller: (context)=>`No matching controller for '${context.key}'`,
    nomatchingview: (context)=>`No matching view for '${JSON.stringify(context.params)}'`,
    notbindable: ()=>`Value is not bindable`,
    notcompatible: (context)=>`Not compatible with  plugin '${context.id}'`,
    propertynotfound: (context)=>`Property '${context.name}' not found`,
    shouldneverhappen: ()=>"This error should never happen"
};
class TpError {
    static alreadyDisposed() {
        return new TpError({
            type: "alreadydisposed"
        });
    }
    static notBindable() {
        return new TpError({
            type: "notbindable"
        });
    }
    static notCompatible(bundleId, id) {
        return new TpError({
            type: "notcompatible",
            context: {
                id: `${bundleId}.${id}`
            }
        });
    }
    static propertyNotFound(name) {
        return new TpError({
            type: "propertynotfound",
            context: {
                name: name
            }
        });
    }
    static shouldNeverHappen() {
        return new TpError({
            type: "shouldneverhappen"
        });
    }
    constructor(config){
        var _a;
        this.message = (_a = CREATE_MESSAGE_MAP[config.type](forceCast(config.context))) !== null && _a !== void 0 ? _a : "Unexpected error";
        this.name = this.constructor.name;
        this.stack = new Error(this.message).stack;
        this.type = config.type;
    }
    toString() {
        return this.message;
    }
}
class BindingTarget {
    constructor(obj, key){
        this.obj_ = obj;
        this.key = key;
    }
    static isBindable(obj) {
        if (obj === null) return false;
        if (typeof obj !== "object" && typeof obj !== "function") return false;
        return true;
    }
    read() {
        return this.obj_[this.key];
    }
    write(value) {
        this.obj_[this.key] = value;
    }
    writeProperty(name, value) {
        const valueObj = this.read();
        if (!BindingTarget.isBindable(valueObj)) throw TpError.notBindable();
        if (!(name in valueObj)) throw TpError.propertyNotFound(name);
        valueObj[name] = value;
    }
}
class Emitter {
    constructor(){
        this.observers_ = {};
    }
    on(eventName, handler) {
        let observers = this.observers_[eventName];
        if (!observers) observers = this.observers_[eventName] = [];
        observers.push({
            handler: handler
        });
        return this;
    }
    off(eventName, handler) {
        const observers = this.observers_[eventName];
        if (observers) this.observers_[eventName] = observers.filter((observer)=>{
            return observer.handler !== handler;
        });
        return this;
    }
    emit(eventName, event) {
        const observers = this.observers_[eventName];
        if (!observers) return;
        observers.forEach((observer)=>{
            observer.handler(event);
        });
    }
}
class ComplexValue {
    constructor(initialValue, config){
        var _a;
        this.constraint_ = config === null || config === void 0 ? void 0 : config.constraint;
        this.equals_ = (_a = config === null || config === void 0 ? void 0 : config.equals) !== null && _a !== void 0 ? _a : (v1, v2)=>v1 === v2;
        this.emitter = new Emitter();
        this.rawValue_ = initialValue;
    }
    get constraint() {
        return this.constraint_;
    }
    get rawValue() {
        return this.rawValue_;
    }
    set rawValue(rawValue) {
        this.setRawValue(rawValue, {
            forceEmit: false,
            last: true
        });
    }
    setRawValue(rawValue, options) {
        const opts = options !== null && options !== void 0 ? options : {
            forceEmit: false,
            last: true
        };
        const constrainedValue = this.constraint_ ? this.constraint_.constrain(rawValue) : rawValue;
        const prevValue = this.rawValue_;
        const changed = !this.equals_(prevValue, constrainedValue);
        if (!changed && !opts.forceEmit) return;
        this.emitter.emit("beforechange", {
            sender: this
        });
        this.rawValue_ = constrainedValue;
        this.emitter.emit("change", {
            options: opts,
            previousRawValue: prevValue,
            rawValue: constrainedValue,
            sender: this
        });
    }
}
class PrimitiveValue {
    constructor(initialValue){
        this.emitter = new Emitter();
        this.value_ = initialValue;
    }
    get rawValue() {
        return this.value_;
    }
    set rawValue(value) {
        this.setRawValue(value, {
            forceEmit: false,
            last: true
        });
    }
    setRawValue(value, options) {
        const opts = options !== null && options !== void 0 ? options : {
            forceEmit: false,
            last: true
        };
        const prevValue = this.value_;
        if (prevValue === value && !opts.forceEmit) return;
        this.emitter.emit("beforechange", {
            sender: this
        });
        this.value_ = value;
        this.emitter.emit("change", {
            options: opts,
            previousRawValue: prevValue,
            rawValue: this.value_,
            sender: this
        });
    }
}
class ReadonlyPrimitiveValue {
    constructor(value){
        this.emitter = new Emitter();
        this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.value_ = value;
        this.value_.emitter.on("beforechange", this.onValueBeforeChange_);
        this.value_.emitter.on("change", this.onValueChange_);
    }
    get rawValue() {
        return this.value_.rawValue;
    }
    onValueBeforeChange_(ev) {
        this.emitter.emit("beforechange", Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
    onValueChange_(ev) {
        this.emitter.emit("change", Object.assign(Object.assign({}, ev), {
            sender: this
        }));
    }
}
function createValue(initialValue, config) {
    const constraint = config === null || config === void 0 ? void 0 : config.constraint;
    const equals = config === null || config === void 0 ? void 0 : config.equals;
    if (!constraint && !equals) return new PrimitiveValue(initialValue);
    return new ComplexValue(initialValue, config);
}
function createReadonlyValue(value) {
    return [
        new ReadonlyPrimitiveValue(value),
        (rawValue, options)=>{
            value.setRawValue(rawValue, options);
        }
    ];
}
class ValueMap {
    constructor(valueMap){
        this.emitter = new Emitter();
        this.valMap_ = valueMap;
        for(const key in this.valMap_){
            const v = this.valMap_[key];
            v.emitter.on("change", ()=>{
                this.emitter.emit("change", {
                    key: key,
                    sender: this
                });
            });
        }
    }
    static createCore(initialValue) {
        const keys = Object.keys(initialValue);
        return keys.reduce((o, key)=>{
            return Object.assign(o, {
                [key]: createValue(initialValue[key])
            });
        }, {});
    }
    static fromObject(initialValue) {
        const core = this.createCore(initialValue);
        return new ValueMap(core);
    }
    get(key) {
        return this.valMap_[key].rawValue;
    }
    set(key, value) {
        this.valMap_[key].rawValue = value;
    }
    value(key) {
        return this.valMap_[key];
    }
}
class DefiniteRangeConstraint {
    constructor(config){
        this.values = ValueMap.fromObject({
            max: config.max,
            min: config.min
        });
    }
    constrain(value) {
        const max = this.values.get("max");
        const min = this.values.get("min");
        return Math.min(Math.max(value, min), max);
    }
}
class RangeConstraint {
    constructor(config){
        this.values = ValueMap.fromObject({
            max: config.max,
            min: config.min
        });
    }
    constrain(value) {
        const max = this.values.get("max");
        const min = this.values.get("min");
        let result = value;
        if (!isEmpty(min)) result = Math.max(result, min);
        if (!isEmpty(max)) result = Math.min(result, max);
        return result;
    }
}
class StepConstraint {
    constructor(step, origin = 0){
        this.step = step;
        this.origin = origin;
    }
    constrain(value) {
        const o = this.origin % this.step;
        const r = Math.round((value - o) / this.step);
        return o + r * this.step;
    }
}
class NumberLiteralNode {
    constructor(text){
        this.text = text;
    }
    evaluate() {
        return Number(this.text);
    }
    toString() {
        return this.text;
    }
}
const BINARY_OPERATION_MAP = {
    "**": (v1, v2)=>Math.pow(v1, v2),
    "*": (v1, v2)=>v1 * v2,
    "/": (v1, v2)=>v1 / v2,
    "%": (v1, v2)=>v1 % v2,
    "+": (v1, v2)=>v1 + v2,
    "-": (v1, v2)=>v1 - v2,
    "<<": (v1, v2)=>v1 << v2,
    ">>": (v1, v2)=>v1 >> v2,
    ">>>": (v1, v2)=>v1 >>> v2,
    "&": (v1, v2)=>v1 & v2,
    "^": (v1, v2)=>v1 ^ v2,
    "|": (v1, v2)=>v1 | v2
};
class BinaryOperationNode {
    constructor(operator, left, right){
        this.left = left;
        this.operator = operator;
        this.right = right;
    }
    evaluate() {
        const op = BINARY_OPERATION_MAP[this.operator];
        if (!op) throw new Error(`unexpected binary operator: '${this.operator}`);
        return op(this.left.evaluate(), this.right.evaluate());
    }
    toString() {
        return [
            "b(",
            this.left.toString(),
            this.operator,
            this.right.toString(),
            ")"
        ].join(" ");
    }
}
const UNARY_OPERATION_MAP = {
    "+": (v)=>v,
    "-": (v)=>-v,
    "~": (v)=>~v
};
class UnaryOperationNode {
    constructor(operator, expr){
        this.operator = operator;
        this.expression = expr;
    }
    evaluate() {
        const op = UNARY_OPERATION_MAP[this.operator];
        if (!op) throw new Error(`unexpected unary operator: '${this.operator}`);
        return op(this.expression.evaluate());
    }
    toString() {
        return [
            "u(",
            this.operator,
            this.expression.toString(),
            ")"
        ].join(" ");
    }
}
function combineReader(parsers) {
    return (text, cursor)=>{
        for(let i = 0; i < parsers.length; i++){
            const result = parsers[i](text, cursor);
            if (result !== "") return result;
        }
        return "";
    };
}
function readWhitespace(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^\s+/);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
}
function readNonZeroDigit(text, cursor) {
    const ch = text.substr(cursor, 1);
    return ch.match(/^[1-9]$/) ? ch : "";
}
function readDecimalDigits(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^[0-9]+/);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
}
function readSignedInteger(text, cursor) {
    const ds = readDecimalDigits(text, cursor);
    if (ds !== "") return ds;
    const sign = text.substr(cursor, 1);
    cursor += 1;
    if (sign !== "-" && sign !== "+") return "";
    const sds = readDecimalDigits(text, cursor);
    if (sds === "") return "";
    return sign + sds;
}
function readExponentPart(text, cursor) {
    const e = text.substr(cursor, 1);
    cursor += 1;
    if (e.toLowerCase() !== "e") return "";
    const si = readSignedInteger(text, cursor);
    if (si === "") return "";
    return e + si;
}
function readDecimalIntegerLiteral(text, cursor) {
    const ch = text.substr(cursor, 1);
    if (ch === "0") return ch;
    const nzd = readNonZeroDigit(text, cursor);
    cursor += nzd.length;
    if (nzd === "") return "";
    return nzd + readDecimalDigits(text, cursor);
}
function readDecimalLiteral1(text, cursor) {
    const dil = readDecimalIntegerLiteral(text, cursor);
    cursor += dil.length;
    if (dil === "") return "";
    const dot = text.substr(cursor, 1);
    cursor += dot.length;
    if (dot !== ".") return "";
    const dds = readDecimalDigits(text, cursor);
    cursor += dds.length;
    return dil + dot + dds + readExponentPart(text, cursor);
}
function readDecimalLiteral2(text, cursor) {
    const dot = text.substr(cursor, 1);
    cursor += dot.length;
    if (dot !== ".") return "";
    const dds = readDecimalDigits(text, cursor);
    cursor += dds.length;
    if (dds === "") return "";
    return dot + dds + readExponentPart(text, cursor);
}
function readDecimalLiteral3(text, cursor) {
    const dil = readDecimalIntegerLiteral(text, cursor);
    cursor += dil.length;
    if (dil === "") return "";
    return dil + readExponentPart(text, cursor);
}
const readDecimalLiteral = combineReader([
    readDecimalLiteral1,
    readDecimalLiteral2,
    readDecimalLiteral3
]);
function parseBinaryDigits(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^[01]+/);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
}
function readBinaryIntegerLiteral(text, cursor) {
    const prefix = text.substr(cursor, 2);
    cursor += prefix.length;
    if (prefix.toLowerCase() !== "0b") return "";
    const bds = parseBinaryDigits(text, cursor);
    if (bds === "") return "";
    return prefix + bds;
}
function readOctalDigits(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^[0-7]+/);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
}
function readOctalIntegerLiteral(text, cursor) {
    const prefix = text.substr(cursor, 2);
    cursor += prefix.length;
    if (prefix.toLowerCase() !== "0o") return "";
    const ods = readOctalDigits(text, cursor);
    if (ods === "") return "";
    return prefix + ods;
}
function readHexDigits(text, cursor) {
    var _a;
    const m = text.substr(cursor).match(/^[0-9a-f]+/i);
    return (_a = m && m[0]) !== null && _a !== void 0 ? _a : "";
}
function readHexIntegerLiteral(text, cursor) {
    const prefix = text.substr(cursor, 2);
    cursor += prefix.length;
    if (prefix.toLowerCase() !== "0x") return "";
    const hds = readHexDigits(text, cursor);
    if (hds === "") return "";
    return prefix + hds;
}
const readNonDecimalIntegerLiteral = combineReader([
    readBinaryIntegerLiteral,
    readOctalIntegerLiteral,
    readHexIntegerLiteral
]);
const readNumericLiteral = combineReader([
    readNonDecimalIntegerLiteral,
    readDecimalLiteral
]);
function parseLiteral(text, cursor) {
    const num = readNumericLiteral(text, cursor);
    cursor += num.length;
    if (num === "") return null;
    return {
        evaluable: new NumberLiteralNode(num),
        cursor: cursor
    };
}
function parseParenthesizedExpression(text, cursor) {
    const op = text.substr(cursor, 1);
    cursor += op.length;
    if (op !== "(") return null;
    const expr = parseExpression(text, cursor);
    if (!expr) return null;
    cursor = expr.cursor;
    cursor += readWhitespace(text, cursor).length;
    const cl = text.substr(cursor, 1);
    cursor += cl.length;
    if (cl !== ")") return null;
    return {
        evaluable: expr.evaluable,
        cursor: cursor
    };
}
function parsePrimaryExpression(text, cursor) {
    var _a;
    return (_a = parseLiteral(text, cursor)) !== null && _a !== void 0 ? _a : parseParenthesizedExpression(text, cursor);
}
function parseUnaryExpression(text, cursor) {
    const expr = parsePrimaryExpression(text, cursor);
    if (expr) return expr;
    const op = text.substr(cursor, 1);
    cursor += op.length;
    if (op !== "+" && op !== "-" && op !== "~") return null;
    const num = parseUnaryExpression(text, cursor);
    if (!num) return null;
    cursor = num.cursor;
    return {
        cursor: cursor,
        evaluable: new UnaryOperationNode(op, num.evaluable)
    };
}
function readBinaryOperator(ops, text, cursor) {
    cursor += readWhitespace(text, cursor).length;
    const op = ops.filter((op)=>text.startsWith(op, cursor))[0];
    if (!op) return null;
    cursor += op.length;
    cursor += readWhitespace(text, cursor).length;
    return {
        cursor: cursor,
        operator: op
    };
}
function createBinaryOperationExpressionParser(exprParser, ops) {
    return (text, cursor)=>{
        const firstExpr = exprParser(text, cursor);
        if (!firstExpr) return null;
        cursor = firstExpr.cursor;
        let expr = firstExpr.evaluable;
        for(;;){
            const op = readBinaryOperator(ops, text, cursor);
            if (!op) break;
            cursor = op.cursor;
            const nextExpr = exprParser(text, cursor);
            if (!nextExpr) return null;
            cursor = nextExpr.cursor;
            expr = new BinaryOperationNode(op.operator, expr, nextExpr.evaluable);
        }
        return expr ? {
            cursor: cursor,
            evaluable: expr
        } : null;
    };
}
const parseBinaryOperationExpression = [
    [
        "**"
    ],
    [
        "*",
        "/",
        "%"
    ],
    [
        "+",
        "-"
    ],
    [
        "<<",
        ">>>",
        ">>"
    ],
    [
        "&"
    ],
    [
        "^"
    ],
    [
        "|"
    ]
].reduce((parser, ops)=>{
    return createBinaryOperationExpressionParser(parser, ops);
}, parseUnaryExpression);
function parseExpression(text, cursor) {
    cursor += readWhitespace(text, cursor).length;
    return parseBinaryOperationExpression(text, cursor);
}
function parseEcmaNumberExpression(text) {
    const expr = parseExpression(text, 0);
    if (!expr) return null;
    const cursor = expr.cursor + readWhitespace(text, expr.cursor).length;
    if (cursor !== text.length) return null;
    return expr.evaluable;
}
function parseNumber(text) {
    var _a;
    const r = parseEcmaNumberExpression(text);
    return (_a = r === null || r === void 0 ? void 0 : r.evaluate()) !== null && _a !== void 0 ? _a : null;
}
function numberFromUnknown(value) {
    if (typeof value === "number") return value;
    if (typeof value === "string") {
        const pv = parseNumber(value);
        if (!isEmpty(pv)) return pv;
    }
    return 0;
}
function createNumberFormatter(digits) {
    return (value)=>{
        return value.toFixed(Math.max(Math.min(digits, 20), 0));
    };
}
function mapRange(value, start1, end1, start2, end2) {
    const p = (value - start1) / (end1 - start1);
    return start2 + p * (end2 - start2);
}
function getDecimalDigits(value) {
    const text = String(value.toFixed(10));
    const frac = text.split(".")[1];
    return frac.replace(/0+$/, "").length;
}
function constrainRange(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function loopRange(value, max) {
    return (value % max + max) % max;
}
function getSuitableDecimalDigits(params, rawValue) {
    return !isEmpty(params.step) ? getDecimalDigits(params.step) : Math.max(getDecimalDigits(rawValue), 2);
}
function getSuitableKeyScale(params) {
    var _a;
    return (_a = params.step) !== null && _a !== void 0 ? _a : 1;
}
function getSuitablePointerScale(params, rawValue) {
    var _a;
    const base = Math.abs((_a = params.step) !== null && _a !== void 0 ? _a : rawValue);
    return base === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(base)) - 1);
}
function createStepConstraint(params, initialValue) {
    if (!isEmpty(params.step)) return new StepConstraint(params.step, initialValue);
    return null;
}
function createRangeConstraint(params) {
    if (!isEmpty(params.max) && !isEmpty(params.min)) return new DefiniteRangeConstraint({
        max: params.max,
        min: params.min
    });
    if (!isEmpty(params.max) || !isEmpty(params.min)) return new RangeConstraint({
        max: params.max,
        min: params.min
    });
    return null;
}
function createNumberTextPropsObject(params, initialValue) {
    var _a, _b, _c;
    return {
        formatter: (_a = params.format) !== null && _a !== void 0 ? _a : createNumberFormatter(getSuitableDecimalDigits(params, initialValue)),
        keyScale: (_b = params.keyScale) !== null && _b !== void 0 ? _b : getSuitableKeyScale(params),
        pointerScale: (_c = params.pointerScale) !== null && _c !== void 0 ? _c : getSuitablePointerScale(params, initialValue)
    };
}
function createNumberTextInputParamsParser(p) {
    return {
        format: p.optional.function,
        keyScale: p.optional.number,
        max: p.optional.number,
        min: p.optional.number,
        pointerScale: p.optional.number,
        step: p.optional.number
    };
}
function createPointAxis(config) {
    return {
        constraint: config.constraint,
        textProps: ValueMap.fromObject(createNumberTextPropsObject(config.params, config.initialValue))
    };
}
class BladeApi {
    constructor(controller){
        this.controller = controller;
    }
    get element() {
        return this.controller.view.element;
    }
    get disabled() {
        return this.controller.viewProps.get("disabled");
    }
    set disabled(disabled) {
        this.controller.viewProps.set("disabled", disabled);
    }
    get hidden() {
        return this.controller.viewProps.get("hidden");
    }
    set hidden(hidden) {
        this.controller.viewProps.set("hidden", hidden);
    }
    dispose() {
        this.controller.viewProps.set("disposed", true);
    }
    importState(state) {
        return this.controller.importState(state);
    }
    exportState() {
        return this.controller.exportState();
    }
}
class TpEvent {
    constructor(target){
        this.target = target;
    }
}
class TpChangeEvent extends TpEvent {
    constructor(target, value, last){
        super(target);
        this.value = value;
        this.last = last !== null && last !== void 0 ? last : true;
    }
}
class TpFoldEvent extends TpEvent {
    constructor(target, expanded){
        super(target);
        this.expanded = expanded;
    }
}
class TpTabSelectEvent extends TpEvent {
    constructor(target, index){
        super(target);
        this.index = index;
    }
}
class BindingApi extends BladeApi {
    constructor(controller){
        super(controller);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.emitter_ = new Emitter();
        this.controller.value.emitter.on("change", this.onValueChange_);
    }
    get label() {
        return this.controller.labelController.props.get("label");
    }
    set label(label) {
        this.controller.labelController.props.set("label", label);
    }
    get key() {
        return this.controller.value.binding.target.key;
    }
    get tag() {
        return this.controller.tag;
    }
    set tag(tag) {
        this.controller.tag = tag;
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        });
        return this;
    }
    refresh() {
        this.controller.value.fetch();
    }
    onValueChange_(ev) {
        const value = this.controller.value;
        this.emitter_.emit("change", new TpChangeEvent(this, forceCast(value.binding.target.read()), ev.options.last));
    }
}
function parseObject(value, keyToParserMap) {
    const keys = Object.keys(keyToParserMap);
    const result = keys.reduce((tmp, key)=>{
        if (tmp === undefined) return undefined;
        const parser = keyToParserMap[key];
        const result = parser(value[key]);
        return result.succeeded ? Object.assign(Object.assign({}, tmp), {
            [key]: result.value
        }) : undefined;
    }, {});
    return forceCast(result);
}
function parseArray(value, parseItem) {
    return value.reduce((tmp, item)=>{
        if (tmp === undefined) return undefined;
        const result = parseItem(item);
        if (!result.succeeded || result.value === undefined) return undefined;
        return [
            ...tmp,
            result.value
        ];
    }, []);
}
function isObject(value) {
    if (value === null) return false;
    return typeof value === "object";
}
function createMicroParserBuilder(parse) {
    return (optional)=>(v)=>{
            if (!optional && v === undefined) return {
                succeeded: false,
                value: undefined
            };
            if (optional && v === undefined) return {
                succeeded: true,
                value: undefined
            };
            const result = parse(v);
            return result !== undefined ? {
                succeeded: true,
                value: result
            } : {
                succeeded: false,
                value: undefined
            };
        };
}
function createMicroParserBuilders(optional) {
    return {
        custom: (parse)=>createMicroParserBuilder(parse)(optional),
        boolean: createMicroParserBuilder((v)=>typeof v === "boolean" ? v : undefined)(optional),
        number: createMicroParserBuilder((v)=>typeof v === "number" ? v : undefined)(optional),
        string: createMicroParserBuilder((v)=>typeof v === "string" ? v : undefined)(optional),
        function: createMicroParserBuilder((v)=>typeof v === "function" ? v : undefined)(optional),
        constant: (value)=>createMicroParserBuilder((v)=>v === value ? value : undefined)(optional),
        raw: createMicroParserBuilder((v)=>v)(optional),
        object: (keyToParserMap)=>createMicroParserBuilder((v)=>{
                if (!isObject(v)) return undefined;
                return parseObject(v, keyToParserMap);
            })(optional),
        array: (itemParser)=>createMicroParserBuilder((v)=>{
                if (!Array.isArray(v)) return undefined;
                return parseArray(v, itemParser);
            })(optional)
    };
}
const MicroParsers = {
    optional: createMicroParserBuilders(true),
    required: createMicroParserBuilders(false)
};
function parseRecord(value, keyToParserMap) {
    const map = keyToParserMap(MicroParsers);
    const result = MicroParsers.required.object(map)(value);
    return result.succeeded ? result.value : undefined;
}
function importBladeState(state, superImport, parser, callback) {
    if (superImport && !superImport(state)) return false;
    const result = parseRecord(state, parser);
    return result ? callback(result) : false;
}
function exportBladeState(superExport, thisState) {
    var _a;
    return deepMerge((_a = superExport === null || superExport === void 0 ? void 0 : superExport()) !== null && _a !== void 0 ? _a : {}, thisState);
}
function isValueBladeController(bc) {
    return "value" in bc;
}
function isBindingValue(v) {
    if (!isObject$1(v) || !("binding" in v)) return false;
    const b = v.binding;
    return isBinding(b);
}
const SVG_NS = "http://www.w3.org/2000/svg";
function forceReflow(element) {
    element.offsetHeight;
}
function disableTransitionTemporarily(element, callback) {
    const t = element.style.transition;
    element.style.transition = "none";
    callback();
    element.style.transition = t;
}
function supportsTouch(doc) {
    return doc.ontouchstart !== undefined;
}
function getCanvasContext(canvasElement) {
    const win = canvasElement.ownerDocument.defaultView;
    if (!win) return null;
    const isBrowser = "document" in win;
    return isBrowser ? canvasElement.getContext("2d", {
        willReadFrequently: true
    }) : null;
}
const ICON_ID_TO_INNER_HTML_MAP = {
    check: '<path d="M2 8l4 4l8 -8"/>',
    dropdown: '<path d="M5 7h6l-3 3 z"/>',
    p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'
};
function createSvgIconElement(document, iconId) {
    const elem = document.createElementNS(SVG_NS, "svg");
    elem.innerHTML = ICON_ID_TO_INNER_HTML_MAP[iconId];
    return elem;
}
function insertElementAt(parentElement, element, index) {
    parentElement.insertBefore(element, parentElement.children[index]);
}
function removeElement(element) {
    if (element.parentElement) element.parentElement.removeChild(element);
}
function removeChildElements(element) {
    while(element.children.length > 0)element.removeChild(element.children[0]);
}
function removeChildNodes(element) {
    while(element.childNodes.length > 0)element.removeChild(element.childNodes[0]);
}
function findNextTarget(ev) {
    if (ev.relatedTarget) return forceCast(ev.relatedTarget);
    if ("explicitOriginalTarget" in ev) return ev.explicitOriginalTarget;
    return null;
}
function bindValue(value, applyValue) {
    value.emitter.on("change", (ev)=>{
        applyValue(ev.rawValue);
    });
    applyValue(value.rawValue);
}
function bindValueMap(valueMap, key, applyValue) {
    bindValue(valueMap.value(key), applyValue);
}
const PREFIX = "tp";
function ClassName(viewName) {
    const fn = (opt_elementName, opt_modifier)=>{
        return [
            PREFIX,
            "-",
            viewName,
            "v",
            opt_elementName ? `_${opt_elementName}` : "",
            opt_modifier ? `-${opt_modifier}` : ""
        ].join("");
    };
    return fn;
}
const cn$q = ClassName("lbl");
function createLabelNode(doc, label) {
    const frag = doc.createDocumentFragment();
    const lineNodes = label.split("\n").map((line)=>{
        return doc.createTextNode(line);
    });
    lineNodes.forEach((lineNode, index)=>{
        if (index > 0) frag.appendChild(doc.createElement("br"));
        frag.appendChild(lineNode);
    });
    return frag;
}
class LabelView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$q());
        config.viewProps.bindClassModifiers(this.element);
        const labelElem = doc.createElement("div");
        labelElem.classList.add(cn$q("l"));
        bindValueMap(config.props, "label", (value)=>{
            if (isEmpty(value)) this.element.classList.add(cn$q(undefined, "nol"));
            else {
                this.element.classList.remove(cn$q(undefined, "nol"));
                removeChildNodes(labelElem);
                labelElem.appendChild(createLabelNode(doc, value));
            }
        });
        this.element.appendChild(labelElem);
        this.labelElement = labelElem;
        const valueElem = doc.createElement("div");
        valueElem.classList.add(cn$q("v"));
        this.element.appendChild(valueElem);
        this.valueElement = valueElem;
    }
}
class LabelController {
    constructor(doc, config){
        this.props = config.props;
        this.valueController = config.valueController;
        this.viewProps = config.valueController.viewProps;
        this.view = new LabelView(doc, {
            props: config.props,
            viewProps: this.viewProps
        });
        this.view.valueElement.appendChild(this.valueController.view.element);
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                label: p.optional.string
            }), (result)=>{
            this.props.set("label", result.label);
            return true;
        });
    }
    exportProps() {
        return exportBladeState(null, {
            label: this.props.get("label")
        });
    }
}
function getAllBladePositions() {
    return [
        "veryfirst",
        "first",
        "last",
        "verylast"
    ];
}
const cn$p = ClassName("");
const POS_TO_CLASS_NAME_MAP = {
    veryfirst: "vfst",
    first: "fst",
    last: "lst",
    verylast: "vlst"
};
class BladeController {
    constructor(config){
        this.parent_ = null;
        this.blade = config.blade;
        this.view = config.view;
        this.viewProps = config.viewProps;
        const elem = this.view.element;
        this.blade.value("positions").emitter.on("change", ()=>{
            getAllBladePositions().forEach((pos)=>{
                elem.classList.remove(cn$p(undefined, POS_TO_CLASS_NAME_MAP[pos]));
            });
            this.blade.get("positions").forEach((pos)=>{
                elem.classList.add(cn$p(undefined, POS_TO_CLASS_NAME_MAP[pos]));
            });
        });
        this.viewProps.handleDispose(()=>{
            removeElement(elem);
        });
    }
    get parent() {
        return this.parent_;
    }
    set parent(parent) {
        this.parent_ = parent;
        this.viewProps.set("parent", this.parent_ ? this.parent_.viewProps : null);
    }
    importState(state) {
        return importBladeState(state, null, (p)=>({
                disabled: p.required.boolean,
                hidden: p.required.boolean
            }), (result)=>{
            this.viewProps.importState(result);
            return true;
        });
    }
    exportState() {
        return exportBladeState(null, Object.assign({}, this.viewProps.exportState()));
    }
}
class LabeledValueBladeController extends BladeController {
    constructor(doc, config){
        if (config.value !== config.valueController.value) throw TpError.shouldNeverHappen();
        const viewProps = config.valueController.viewProps;
        const lc = new LabelController(doc, {
            blade: config.blade,
            props: config.props,
            valueController: config.valueController
        });
        super(Object.assign(Object.assign({}, config), {
            view: new LabelView(doc, {
                props: config.props,
                viewProps: viewProps
            }),
            viewProps: viewProps
        }));
        this.labelController = lc;
        this.value = config.value;
        this.valueController = config.valueController;
        this.view.valueElement.appendChild(this.valueController.view.element);
    }
    importState(state) {
        return importBladeState(state, (s)=>{
            var _a, _b, _c;
            return super.importState(s) && this.labelController.importProps(s) && ((_c = (_b = (_a = this.valueController).importProps) === null || _b === void 0 ? void 0 : _b.call(_a, state)) !== null && _c !== void 0 ? _c : true);
        }, (p)=>({
                value: p.optional.raw
            }), (result)=>{
            if (result.value) this.value.rawValue = result.value;
            return true;
        });
    }
    exportState() {
        var _a, _b, _c;
        return exportBladeState(()=>super.exportState(), Object.assign(Object.assign({
            value: this.value.rawValue
        }, this.labelController.exportProps()), (_c = (_b = (_a = this.valueController).exportProps) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : {}));
    }
}
function fillBuffer(buffer, bufferSize) {
    while(buffer.length < bufferSize)buffer.push(undefined);
}
function initializeBuffer(bufferSize) {
    const buffer = [];
    fillBuffer(buffer, bufferSize);
    return buffer;
}
function createTrimmedBuffer(buffer) {
    const index = buffer.indexOf(undefined);
    return forceCast(index < 0 ? buffer : buffer.slice(0, index));
}
function createPushedBuffer(buffer, newValue) {
    const newBuffer = [
        ...createTrimmedBuffer(buffer),
        newValue
    ];
    if (newBuffer.length > buffer.length) newBuffer.splice(0, newBuffer.length - buffer.length);
    else fillBuffer(newBuffer, buffer.length);
    return newBuffer;
}
class ButtonApi extends BladeApi {
    get label() {
        return this.controller.labelController.props.get("label");
    }
    set label(label) {
        this.controller.labelController.props.set("label", label);
    }
    get title() {
        var _a;
        return (_a = this.controller.buttonController.props.get("title")) !== null && _a !== void 0 ? _a : "";
    }
    set title(title) {
        this.controller.buttonController.props.set("title", title);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        const emitter = this.controller.buttonController.emitter;
        emitter.on(eventName, ()=>{
            bh(new TpEvent(this));
        });
        return this;
    }
}
function applyClass(elem, className, active) {
    if (active) elem.classList.add(className);
    else elem.classList.remove(className);
}
function valueToClassName(elem, className) {
    return (value)=>{
        applyClass(elem, className, value);
    };
}
function bindValueToTextContent(value, elem) {
    bindValue(value, (text)=>{
        elem.textContent = text !== null && text !== void 0 ? text : "";
    });
}
const cn$o = ClassName("btn");
class ButtonView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$o());
        config.viewProps.bindClassModifiers(this.element);
        const buttonElem = doc.createElement("button");
        buttonElem.classList.add(cn$o("b"));
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const titleElem = doc.createElement("div");
        titleElem.classList.add(cn$o("t"));
        bindValueToTextContent(config.props.value("title"), titleElem);
        this.buttonElement.appendChild(titleElem);
    }
}
class ButtonController {
    constructor(doc, config){
        this.emitter = new Emitter();
        this.onClick_ = this.onClick_.bind(this);
        this.props = config.props;
        this.viewProps = config.viewProps;
        this.view = new ButtonView(doc, {
            props: this.props,
            viewProps: this.viewProps
        });
        this.view.buttonElement.addEventListener("click", this.onClick_);
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                title: p.optional.string
            }), (result)=>{
            this.props.set("title", result.title);
            return true;
        });
    }
    exportProps() {
        return exportBladeState(null, {
            title: this.props.get("title")
        });
    }
    onClick_() {
        this.emitter.emit("click", {
            sender: this
        });
    }
}
class ButtonBladeController extends BladeController {
    constructor(doc, config){
        const bc = new ButtonController(doc, {
            props: config.buttonProps,
            viewProps: config.viewProps
        });
        const lc = new LabelController(doc, {
            blade: config.blade,
            props: config.labelProps,
            valueController: bc
        });
        super({
            blade: config.blade,
            view: lc.view,
            viewProps: config.viewProps
        });
        this.buttonController = bc;
        this.labelController = lc;
    }
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s) && this.buttonController.importProps(s) && this.labelController.importProps(s), ()=>({}), ()=>true);
    }
    exportState() {
        return exportBladeState(()=>super.exportState(), Object.assign(Object.assign({}, this.buttonController.exportProps()), this.labelController.exportProps()));
    }
}
class Semver {
    constructor(text){
        const [core, prerelease] = text.split("-");
        const coreComps = core.split(".");
        this.major = parseInt(coreComps[0], 10);
        this.minor = parseInt(coreComps[1], 10);
        this.patch = parseInt(coreComps[2], 10);
        this.prerelease = prerelease !== null && prerelease !== void 0 ? prerelease : null;
    }
    toString() {
        const core = [
            this.major,
            this.minor,
            this.patch
        ].join(".");
        return this.prerelease !== null ? [
            core,
            this.prerelease
        ].join("-") : core;
    }
}
const VERSION = new Semver("2.0.0-beta.2");
function createPlugin(plugin) {
    return Object.assign({
        core: VERSION
    }, plugin);
}
createPlugin({
    id: "button",
    type: "blade",
    accept (params) {
        const result = parseRecord(params, (p)=>({
                title: p.required.string,
                view: p.required.constant("button"),
                label: p.optional.string
            }));
        return result ? {
            params: result
        } : null;
    },
    controller (args) {
        return new ButtonBladeController(args.document, {
            blade: args.blade,
            buttonProps: ValueMap.fromObject({
                title: args.params.title
            }),
            labelProps: ValueMap.fromObject({
                label: args.params.label
            }),
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (args.controller instanceof ButtonBladeController) return new ButtonApi(args.controller);
        return null;
    }
});
function addButtonAsBlade(api, params) {
    return api.addBlade(Object.assign(Object.assign({}, params), {
        view: "button"
    }));
}
function addFolderAsBlade(api, params) {
    return api.addBlade(Object.assign(Object.assign({}, params), {
        view: "folder"
    }));
}
function addTabAsBlade(api, params) {
    return api.addBlade(Object.assign(Object.assign({}, params), {
        view: "tab"
    }));
}
function isRefreshable(value) {
    if (!isObject$1(value)) return false;
    return "refresh" in value && typeof value.refresh === "function";
}
function createBindingTarget(obj, key) {
    if (!BindingTarget.isBindable(obj)) throw TpError.notBindable();
    return new BindingTarget(obj, key);
}
class RackApi {
    constructor(controller, pool){
        this.onRackValueChange_ = this.onRackValueChange_.bind(this);
        this.controller_ = controller;
        this.emitter_ = new Emitter();
        this.pool_ = pool;
        const rack = this.controller_.rack;
        rack.emitter.on("valuechange", this.onRackValueChange_);
    }
    get children() {
        return this.controller_.rack.children.map((bc)=>this.pool_.createApi(bc));
    }
    addBinding(object, key, opt_params) {
        const params = opt_params !== null && opt_params !== void 0 ? opt_params : {};
        const doc = this.controller_.element.ownerDocument;
        const bc = this.pool_.createBinding(doc, createBindingTarget(object, key), params);
        const api = this.pool_.createBindingApi(bc);
        return this.add(api, params.index);
    }
    addFolder(params) {
        return addFolderAsBlade(this, params);
    }
    addButton(params) {
        return addButtonAsBlade(this, params);
    }
    addTab(params) {
        return addTabAsBlade(this, params);
    }
    add(api, opt_index) {
        const bc = api.controller;
        this.controller_.rack.add(bc, opt_index);
        return api;
    }
    remove(api) {
        this.controller_.rack.remove(api.controller);
    }
    addBlade(params) {
        const doc = this.controller_.element.ownerDocument;
        const bc = this.pool_.createBlade(doc, params);
        const api = this.pool_.createApi(bc);
        return this.add(api, params.index);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        });
        return this;
    }
    refresh() {
        this.children.forEach((c)=>{
            if (isRefreshable(c)) c.refresh();
        });
    }
    onRackValueChange_(ev) {
        const bc = ev.bladeController;
        const api = this.pool_.createApi(bc);
        const binding = isBindingValue(bc.value) ? bc.value.binding : null;
        this.emitter_.emit("change", new TpChangeEvent(api, binding ? binding.target.read() : bc.value.rawValue, ev.options.last));
    }
}
class ContainerBladeApi extends BladeApi {
    constructor(controller, pool){
        super(controller);
        this.rackApi_ = new RackApi(controller.rackController, pool);
    }
}
class ContainerBladeController extends BladeController {
    constructor(config){
        super({
            blade: config.blade,
            view: config.view,
            viewProps: config.rackController.viewProps
        });
        this.rackController = config.rackController;
    }
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s), (p)=>({
                children: p.required.array(p.required.raw)
            }), (result)=>{
            return this.rackController.rack.children.every((c, index)=>{
                return c.importState(result.children[index]);
            });
        });
    }
    exportState() {
        return exportBladeState(()=>super.exportState(), {
            children: this.rackController.rack.children.map((c)=>c.exportState())
        });
    }
}
function isContainerBladeController(bc) {
    return "rackController" in bc;
}
class NestedOrderedSet {
    constructor(extract){
        this.emitter = new Emitter();
        this.items_ = [];
        this.cache_ = new Set();
        this.onSubListAdd_ = this.onSubListAdd_.bind(this);
        this.onSubListRemove_ = this.onSubListRemove_.bind(this);
        this.extract_ = extract;
    }
    get items() {
        return this.items_;
    }
    allItems() {
        return Array.from(this.cache_);
    }
    find(callback) {
        for (const item of this.allItems()){
            if (callback(item)) return item;
        }
        return null;
    }
    includes(item) {
        return this.cache_.has(item);
    }
    add(item, opt_index) {
        if (this.includes(item)) throw TpError.shouldNeverHappen();
        const index = opt_index !== undefined ? opt_index : this.items_.length;
        this.items_.splice(index, 0, item);
        this.cache_.add(item);
        const subList = this.extract_(item);
        if (subList) {
            subList.emitter.on("add", this.onSubListAdd_);
            subList.emitter.on("remove", this.onSubListRemove_);
            subList.allItems().forEach((i)=>{
                this.cache_.add(i);
            });
        }
        this.emitter.emit("add", {
            index: index,
            item: item,
            root: this,
            target: this
        });
    }
    remove(item) {
        const index = this.items_.indexOf(item);
        if (index < 0) return;
        this.items_.splice(index, 1);
        this.cache_.delete(item);
        const subList = this.extract_(item);
        if (subList) {
            subList.allItems().forEach((i)=>{
                this.cache_.delete(i);
            });
            subList.emitter.off("add", this.onSubListAdd_);
            subList.emitter.off("remove", this.onSubListRemove_);
        }
        this.emitter.emit("remove", {
            index: index,
            item: item,
            root: this,
            target: this
        });
    }
    onSubListAdd_(ev) {
        this.cache_.add(ev.item);
        this.emitter.emit("add", {
            index: ev.index,
            item: ev.item,
            root: this,
            target: ev.target
        });
    }
    onSubListRemove_(ev) {
        this.cache_.delete(ev.item);
        this.emitter.emit("remove", {
            index: ev.index,
            item: ev.item,
            root: this,
            target: ev.target
        });
    }
}
function findValueBladeController(bcs, v) {
    for(let i = 0; i < bcs.length; i++){
        const bc = bcs[i];
        if (isValueBladeController(bc) && bc.value === v) return bc;
    }
    return null;
}
function findSubBladeControllerSet(bc) {
    return isContainerBladeController(bc) ? bc.rackController.rack["bcSet_"] : null;
}
class Rack {
    constructor(config){
        var _a, _b;
        this.emitter = new Emitter();
        this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this);
        this.onSetAdd_ = this.onSetAdd_.bind(this);
        this.onSetRemove_ = this.onSetRemove_.bind(this);
        this.onChildDispose_ = this.onChildDispose_.bind(this);
        this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this);
        this.onChildValueChange_ = this.onChildValueChange_.bind(this);
        this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this);
        this.onRackLayout_ = this.onRackLayout_.bind(this);
        this.onRackValueChange_ = this.onRackValueChange_.bind(this);
        this.blade_ = (_a = config.blade) !== null && _a !== void 0 ? _a : null;
        (_b = this.blade_) === null || _b === void 0 || _b.value("positions").emitter.on("change", this.onBladePositionsChange_);
        this.viewProps = config.viewProps;
        this.bcSet_ = new NestedOrderedSet(findSubBladeControllerSet);
        this.bcSet_.emitter.on("add", this.onSetAdd_);
        this.bcSet_.emitter.on("remove", this.onSetRemove_);
    }
    get children() {
        return this.bcSet_.items;
    }
    add(bc, opt_index) {
        var _a;
        (_a = bc.parent) === null || _a === void 0 || _a.remove(bc);
        bc.parent = this;
        this.bcSet_.add(bc, opt_index);
    }
    remove(bc) {
        bc.parent = null;
        this.bcSet_.remove(bc);
    }
    find(finder) {
        return this.bcSet_.allItems().filter(finder);
    }
    onSetAdd_(ev) {
        this.updatePositions_();
        const root = ev.target === ev.root;
        this.emitter.emit("add", {
            bladeController: ev.item,
            index: ev.index,
            root: root,
            sender: this
        });
        if (!root) return;
        const bc = ev.item;
        bc.viewProps.emitter.on("change", this.onChildViewPropsChange_);
        bc.blade.value("positions").emitter.on("change", this.onChildPositionsChange_);
        bc.viewProps.handleDispose(this.onChildDispose_);
        if (isValueBladeController(bc)) bc.value.emitter.on("change", this.onChildValueChange_);
        else if (isContainerBladeController(bc)) {
            const rack = bc.rackController.rack;
            if (rack) {
                const emitter = rack.emitter;
                emitter.on("layout", this.onRackLayout_);
                emitter.on("valuechange", this.onRackValueChange_);
            }
        }
    }
    onSetRemove_(ev) {
        this.updatePositions_();
        const root = ev.target === ev.root;
        this.emitter.emit("remove", {
            bladeController: ev.item,
            root: root,
            sender: this
        });
        if (!root) return;
        const bc = ev.item;
        if (isValueBladeController(bc)) bc.value.emitter.off("change", this.onChildValueChange_);
        else if (isContainerBladeController(bc)) {
            const rack = bc.rackController.rack;
            if (rack) {
                const emitter = rack.emitter;
                emitter.off("layout", this.onRackLayout_);
                emitter.off("valuechange", this.onRackValueChange_);
            }
        }
    }
    updatePositions_() {
        const visibleItems = this.bcSet_.items.filter((bc)=>!bc.viewProps.get("hidden"));
        const firstVisibleItem = visibleItems[0];
        const lastVisibleItem = visibleItems[visibleItems.length - 1];
        this.bcSet_.items.forEach((bc)=>{
            const ps = [];
            if (bc === firstVisibleItem) {
                ps.push("first");
                if (!this.blade_ || this.blade_.get("positions").includes("veryfirst")) ps.push("veryfirst");
            }
            if (bc === lastVisibleItem) {
                ps.push("last");
                if (!this.blade_ || this.blade_.get("positions").includes("verylast")) ps.push("verylast");
            }
            bc.blade.set("positions", ps);
        });
    }
    onChildPositionsChange_() {
        this.updatePositions_();
        this.emitter.emit("layout", {
            sender: this
        });
    }
    onChildViewPropsChange_(_ev) {
        this.updatePositions_();
        this.emitter.emit("layout", {
            sender: this
        });
    }
    onChildDispose_() {
        const disposedUcs = this.bcSet_.items.filter((bc)=>{
            return bc.viewProps.get("disposed");
        });
        disposedUcs.forEach((bc)=>{
            this.bcSet_.remove(bc);
        });
    }
    onChildValueChange_(ev) {
        const bc = findValueBladeController(this.find(isValueBladeController), ev.sender);
        if (!bc) throw TpError.alreadyDisposed();
        this.emitter.emit("valuechange", {
            bladeController: bc,
            options: ev.options,
            sender: this
        });
    }
    onRackLayout_(_) {
        this.updatePositions_();
        this.emitter.emit("layout", {
            sender: this
        });
    }
    onRackValueChange_(ev) {
        this.emitter.emit("valuechange", {
            bladeController: ev.bladeController,
            options: ev.options,
            sender: this
        });
    }
    onBladePositionsChange_() {
        this.updatePositions_();
    }
}
class RackController {
    constructor(config){
        this.onRackAdd_ = this.onRackAdd_.bind(this);
        this.onRackRemove_ = this.onRackRemove_.bind(this);
        this.element = config.element;
        this.viewProps = config.viewProps;
        const rack = new Rack({
            blade: config.root ? undefined : config.blade,
            viewProps: config.viewProps
        });
        rack.emitter.on("add", this.onRackAdd_);
        rack.emitter.on("remove", this.onRackRemove_);
        this.rack = rack;
        this.viewProps.handleDispose(()=>{
            for(let i = this.rack.children.length - 1; i >= 0; i--){
                const bc = this.rack.children[i];
                bc.viewProps.set("disposed", true);
            }
        });
    }
    onRackAdd_(ev) {
        if (!ev.root) return;
        insertElementAt(this.element, ev.bladeController.view.element, ev.index);
    }
    onRackRemove_(ev) {
        if (!ev.root) return;
        removeElement(ev.bladeController.view.element);
    }
}
function createBlade() {
    return new ValueMap({
        positions: createValue([], {
            equals: deepEqualsArray
        })
    });
}
class Foldable extends ValueMap {
    constructor(valueMap){
        super(valueMap);
    }
    static create(expanded) {
        const coreObj = {
            completed: true,
            expanded: expanded,
            expandedHeight: null,
            shouldFixHeight: false,
            temporaryExpanded: null
        };
        const core = ValueMap.createCore(coreObj);
        return new Foldable(core);
    }
    get styleExpanded() {
        var _a;
        return (_a = this.get("temporaryExpanded")) !== null && _a !== void 0 ? _a : this.get("expanded");
    }
    get styleHeight() {
        if (!this.styleExpanded) return "0";
        const exHeight = this.get("expandedHeight");
        if (this.get("shouldFixHeight") && !isEmpty(exHeight)) return `${exHeight}px`;
        return "auto";
    }
    bindExpandedClass(elem, expandedClassName) {
        const onExpand = ()=>{
            const expanded = this.styleExpanded;
            if (expanded) elem.classList.add(expandedClassName);
            else elem.classList.remove(expandedClassName);
        };
        bindValueMap(this, "expanded", onExpand);
        bindValueMap(this, "temporaryExpanded", onExpand);
    }
    cleanUpTransition() {
        this.set("shouldFixHeight", false);
        this.set("expandedHeight", null);
        this.set("completed", true);
    }
}
function computeExpandedFolderHeight(folder, containerElement) {
    let height = 0;
    disableTransitionTemporarily(containerElement, ()=>{
        folder.set("expandedHeight", null);
        folder.set("temporaryExpanded", true);
        forceReflow(containerElement);
        height = containerElement.clientHeight;
        folder.set("temporaryExpanded", null);
        forceReflow(containerElement);
    });
    return height;
}
function applyHeight(foldable, elem) {
    elem.style.height = foldable.styleHeight;
}
function bindFoldable(foldable, elem) {
    foldable.value("expanded").emitter.on("beforechange", ()=>{
        foldable.set("completed", false);
        if (isEmpty(foldable.get("expandedHeight"))) {
            const h = computeExpandedFolderHeight(foldable, elem);
            if (h > 0) foldable.set("expandedHeight", h);
        }
        foldable.set("shouldFixHeight", true);
        forceReflow(elem);
    });
    foldable.emitter.on("change", ()=>{
        applyHeight(foldable, elem);
    });
    applyHeight(foldable, elem);
    elem.addEventListener("transitionend", (ev)=>{
        if (ev.propertyName !== "height") return;
        foldable.cleanUpTransition();
    });
}
class FolderApi extends ContainerBladeApi {
    constructor(controller, pool){
        super(controller, pool);
        this.emitter_ = new Emitter();
        this.controller.foldable.value("expanded").emitter.on("change", (ev)=>{
            this.emitter_.emit("fold", new TpFoldEvent(this, ev.sender.rawValue));
        });
        this.rackApi_.on("change", (ev)=>{
            this.emitter_.emit("change", ev);
        });
    }
    get expanded() {
        return this.controller.foldable.get("expanded");
    }
    set expanded(expanded) {
        this.controller.foldable.set("expanded", expanded);
    }
    get title() {
        return this.controller.props.get("title");
    }
    set title(title) {
        this.controller.props.set("title", title);
    }
    get children() {
        return this.rackApi_.children;
    }
    addBinding(object, key, opt_params) {
        return this.rackApi_.addBinding(object, key, opt_params);
    }
    addFolder(params) {
        return this.rackApi_.addFolder(params);
    }
    addButton(params) {
        return this.rackApi_.addButton(params);
    }
    addTab(params) {
        return this.rackApi_.addTab(params);
    }
    add(api, opt_index) {
        return this.rackApi_.add(api, opt_index);
    }
    remove(api) {
        this.rackApi_.remove(api);
    }
    addBlade(params) {
        return this.rackApi_.addBlade(params);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        });
        return this;
    }
    refresh() {
        this.rackApi_.refresh();
    }
}
const bladeContainerClassName = ClassName("cnt");
class FolderView {
    constructor(doc, config){
        var _a;
        this.className_ = ClassName((_a = config.viewName) !== null && _a !== void 0 ? _a : "fld");
        this.element = doc.createElement("div");
        this.element.classList.add(this.className_(), bladeContainerClassName());
        config.viewProps.bindClassModifiers(this.element);
        this.foldable_ = config.foldable;
        this.foldable_.bindExpandedClass(this.element, this.className_(undefined, "expanded"));
        bindValueMap(this.foldable_, "completed", valueToClassName(this.element, this.className_(undefined, "cpl")));
        const buttonElem = doc.createElement("button");
        buttonElem.classList.add(this.className_("b"));
        bindValueMap(config.props, "title", (title)=>{
            if (isEmpty(title)) this.element.classList.add(this.className_(undefined, "not"));
            else this.element.classList.remove(this.className_(undefined, "not"));
        });
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const indentElem = doc.createElement("div");
        indentElem.classList.add(this.className_("i"));
        this.element.appendChild(indentElem);
        const titleElem = doc.createElement("div");
        titleElem.classList.add(this.className_("t"));
        bindValueToTextContent(config.props.value("title"), titleElem);
        this.buttonElement.appendChild(titleElem);
        this.titleElement = titleElem;
        const markElem = doc.createElement("div");
        markElem.classList.add(this.className_("m"));
        this.buttonElement.appendChild(markElem);
        const containerElem = doc.createElement("div");
        containerElem.classList.add(this.className_("c"));
        this.element.appendChild(containerElem);
        this.containerElement = containerElem;
    }
}
class FolderController extends ContainerBladeController {
    constructor(doc, config){
        var _a;
        const foldable = Foldable.create((_a = config.expanded) !== null && _a !== void 0 ? _a : true);
        const view = new FolderView(doc, {
            foldable: foldable,
            props: config.props,
            viewName: config.root ? "rot" : undefined,
            viewProps: config.viewProps
        });
        super(Object.assign(Object.assign({}, config), {
            rackController: new RackController({
                blade: config.blade,
                element: view.containerElement,
                root: config.root,
                viewProps: config.viewProps
            }),
            view: view
        }));
        this.onTitleClick_ = this.onTitleClick_.bind(this);
        this.props = config.props;
        this.foldable = foldable;
        bindFoldable(this.foldable, this.view.containerElement);
        this.rackController.rack.emitter.on("add", ()=>{
            this.foldable.cleanUpTransition();
        });
        this.rackController.rack.emitter.on("remove", ()=>{
            this.foldable.cleanUpTransition();
        });
        this.view.buttonElement.addEventListener("click", this.onTitleClick_);
    }
    get document() {
        return this.view.element.ownerDocument;
    }
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s), (p)=>({
                expanded: p.required.boolean,
                title: p.optional.string
            }), (result)=>{
            this.foldable.set("expanded", result.expanded);
            this.props.set("title", result.title);
            return true;
        });
    }
    exportState() {
        return exportBladeState(()=>super.exportState(), {
            expanded: this.foldable.get("expanded"),
            title: this.props.get("title")
        });
    }
    onTitleClick_() {
        this.foldable.set("expanded", !this.foldable.get("expanded"));
    }
}
createPlugin({
    id: "folder",
    type: "blade",
    accept (params) {
        const result = parseRecord(params, (p)=>({
                title: p.required.string,
                view: p.required.constant("folder"),
                expanded: p.optional.boolean
            }));
        return result ? {
            params: result
        } : null;
    },
    controller (args) {
        return new FolderController(args.document, {
            blade: args.blade,
            expanded: args.params.expanded,
            props: ValueMap.fromObject({
                title: args.params.title
            }),
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (!(args.controller instanceof FolderController)) return null;
        return new FolderApi(args.controller, args.pool);
    }
});
const cn$n = ClassName("");
function valueToModifier(elem, modifier) {
    return valueToClassName(elem, cn$n(undefined, modifier));
}
class ViewProps extends ValueMap {
    constructor(valueMap){
        var _a;
        super(valueMap);
        this.onDisabledChange_ = this.onDisabledChange_.bind(this);
        this.onParentChange_ = this.onParentChange_.bind(this);
        this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this);
        [this.globalDisabled_, this.setGlobalDisabled_] = createReadonlyValue(createValue(this.getGlobalDisabled_()));
        this.value("disabled").emitter.on("change", this.onDisabledChange_);
        this.value("parent").emitter.on("change", this.onParentChange_);
        (_a = this.get("parent")) === null || _a === void 0 || _a.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
    }
    static create(opt_initialValue) {
        var _a, _b, _c;
        const initialValue = opt_initialValue !== null && opt_initialValue !== void 0 ? opt_initialValue : {};
        return new ViewProps(ValueMap.createCore({
            disabled: (_a = initialValue.disabled) !== null && _a !== void 0 ? _a : false,
            disposed: false,
            hidden: (_b = initialValue.hidden) !== null && _b !== void 0 ? _b : false,
            parent: (_c = initialValue.parent) !== null && _c !== void 0 ? _c : null
        }));
    }
    get globalDisabled() {
        return this.globalDisabled_;
    }
    bindClassModifiers(elem) {
        bindValue(this.globalDisabled_, valueToModifier(elem, "disabled"));
        bindValueMap(this, "hidden", valueToModifier(elem, "hidden"));
    }
    bindDisabled(target) {
        bindValue(this.globalDisabled_, (disabled)=>{
            target.disabled = disabled;
        });
    }
    bindTabIndex(elem) {
        bindValue(this.globalDisabled_, (disabled)=>{
            elem.tabIndex = disabled ? -1 : 0;
        });
    }
    handleDispose(callback) {
        this.value("disposed").emitter.on("change", (disposed)=>{
            if (disposed) callback();
        });
    }
    importState(state) {
        this.set("disabled", state.disabled);
        this.set("hidden", state.hidden);
    }
    exportState() {
        return {
            disabled: this.get("disabled"),
            hidden: this.get("hidden")
        };
    }
    getGlobalDisabled_() {
        const parent = this.get("parent");
        const parentDisabled = parent ? parent.globalDisabled.rawValue : false;
        return parentDisabled || this.get("disabled");
    }
    updateGlobalDisabled_() {
        this.setGlobalDisabled_(this.getGlobalDisabled_());
    }
    onDisabledChange_() {
        this.updateGlobalDisabled_();
    }
    onParentGlobalDisabledChange_() {
        this.updateGlobalDisabled_();
    }
    onParentChange_(ev) {
        var _a;
        const prevParent = ev.previousRawValue;
        prevParent === null || prevParent === void 0 || prevParent.globalDisabled.emitter.off("change", this.onParentGlobalDisabledChange_);
        (_a = this.get("parent")) === null || _a === void 0 || _a.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
        this.updateGlobalDisabled_();
    }
}
const cn$m = ClassName("tbp");
class TabPageView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$m());
        config.viewProps.bindClassModifiers(this.element);
        const containerElem = doc.createElement("div");
        containerElem.classList.add(cn$m("c"));
        this.element.appendChild(containerElem);
        this.containerElement = containerElem;
    }
}
const cn$l = ClassName("tbi");
class TabItemView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$l());
        config.viewProps.bindClassModifiers(this.element);
        bindValueMap(config.props, "selected", (selected)=>{
            if (selected) this.element.classList.add(cn$l(undefined, "sel"));
            else this.element.classList.remove(cn$l(undefined, "sel"));
        });
        const buttonElem = doc.createElement("button");
        buttonElem.classList.add(cn$l("b"));
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const titleElem = doc.createElement("div");
        titleElem.classList.add(cn$l("t"));
        bindValueToTextContent(config.props.value("title"), titleElem);
        this.buttonElement.appendChild(titleElem);
        this.titleElement = titleElem;
    }
}
class TabItemController {
    constructor(doc, config){
        this.emitter = new Emitter();
        this.onClick_ = this.onClick_.bind(this);
        this.props = config.props;
        this.viewProps = config.viewProps;
        this.view = new TabItemView(doc, {
            props: config.props,
            viewProps: config.viewProps
        });
        this.view.buttonElement.addEventListener("click", this.onClick_);
    }
    onClick_() {
        this.emitter.emit("click", {
            sender: this
        });
    }
}
class TabPageController extends ContainerBladeController {
    constructor(doc, config){
        const view = new TabPageView(doc, {
            viewProps: config.viewProps
        });
        super(Object.assign(Object.assign({}, config), {
            rackController: new RackController({
                blade: config.blade,
                element: view.containerElement,
                viewProps: config.viewProps
            }),
            view: view
        }));
        this.onItemClick_ = this.onItemClick_.bind(this);
        this.ic_ = new TabItemController(doc, {
            props: config.itemProps,
            viewProps: ViewProps.create()
        });
        this.ic_.emitter.on("click", this.onItemClick_);
        this.props = config.props;
        bindValueMap(this.props, "selected", (selected)=>{
            this.itemController.props.set("selected", selected);
            this.viewProps.set("hidden", !selected);
        });
    }
    get itemController() {
        return this.ic_;
    }
    importState(state) {
        return importBladeState(state, (s)=>super.importState(s), (p)=>({
                selected: p.required.boolean,
                title: p.required.string
            }), (result)=>{
            this.ic_.props.set("selected", result.selected);
            this.ic_.props.set("title", result.title);
            return true;
        });
    }
    exportState() {
        return exportBladeState(()=>super.exportState(), {
            selected: this.ic_.props.get("selected"),
            title: this.ic_.props.get("title")
        });
    }
    onItemClick_() {
        this.props.set("selected", true);
    }
}
class TabApi extends ContainerBladeApi {
    constructor(controller, pool){
        super(controller, pool);
        this.emitter_ = new Emitter();
        this.onSelect_ = this.onSelect_.bind(this);
        this.pool_ = pool;
        this.rackApi_.on("change", (ev)=>{
            this.emitter_.emit("change", ev);
        });
        this.controller.tab.selectedIndex.emitter.on("change", this.onSelect_);
    }
    get pages() {
        return this.rackApi_.children;
    }
    addPage(params) {
        const doc = this.controller.view.element.ownerDocument;
        const pc = new TabPageController(doc, {
            blade: createBlade(),
            itemProps: ValueMap.fromObject({
                selected: false,
                title: params.title
            }),
            props: ValueMap.fromObject({
                selected: false
            }),
            viewProps: ViewProps.create()
        });
        const papi = this.pool_.createApi(pc);
        return this.rackApi_.add(papi, params.index);
    }
    removePage(index) {
        this.rackApi_.remove(this.rackApi_.children[index]);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev);
        });
        return this;
    }
    onSelect_(ev) {
        this.emitter_.emit("select", new TpTabSelectEvent(this, ev.rawValue));
    }
}
class TabPageApi extends ContainerBladeApi {
    get title() {
        var _a;
        return (_a = this.controller.itemController.props.get("title")) !== null && _a !== void 0 ? _a : "";
    }
    set title(title) {
        this.controller.itemController.props.set("title", title);
    }
    get selected() {
        return this.controller.props.get("selected");
    }
    set selected(selected) {
        this.controller.props.set("selected", selected);
    }
    get children() {
        return this.rackApi_.children;
    }
    addButton(params) {
        return this.rackApi_.addButton(params);
    }
    addFolder(params) {
        return this.rackApi_.addFolder(params);
    }
    addTab(params) {
        return this.rackApi_.addTab(params);
    }
    add(api, opt_index) {
        this.rackApi_.add(api, opt_index);
    }
    remove(api) {
        this.rackApi_.remove(api);
    }
    addBinding(object, key, opt_params) {
        return this.rackApi_.addBinding(object, key, opt_params);
    }
    addBlade(params) {
        return this.rackApi_.addBlade(params);
    }
    refresh() {
        this.rackApi_.refresh();
    }
}
const INDEX_NOT_SELECTED = -1;
class Tab {
    constructor(){
        this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this);
        this.empty = createValue(true);
        this.selectedIndex = createValue(INDEX_NOT_SELECTED);
        this.items_ = [];
    }
    add(item, opt_index) {
        const index = opt_index !== null && opt_index !== void 0 ? opt_index : this.items_.length;
        this.items_.splice(index, 0, item);
        item.emitter.on("change", this.onItemSelectedChange_);
        this.keepSelection_();
    }
    remove(item) {
        const index = this.items_.indexOf(item);
        if (index < 0) return;
        this.items_.splice(index, 1);
        item.emitter.off("change", this.onItemSelectedChange_);
        this.keepSelection_();
    }
    keepSelection_() {
        if (this.items_.length === 0) {
            this.selectedIndex.rawValue = INDEX_NOT_SELECTED;
            this.empty.rawValue = true;
            return;
        }
        const firstSelIndex = this.items_.findIndex((s)=>s.rawValue);
        if (firstSelIndex < 0) {
            this.items_.forEach((s, i)=>{
                s.rawValue = i === 0;
            });
            this.selectedIndex.rawValue = 0;
        } else {
            this.items_.forEach((s, i)=>{
                s.rawValue = i === firstSelIndex;
            });
            this.selectedIndex.rawValue = firstSelIndex;
        }
        this.empty.rawValue = false;
    }
    onItemSelectedChange_(ev) {
        if (ev.rawValue) {
            const index = this.items_.findIndex((s)=>s === ev.sender);
            this.items_.forEach((s, i)=>{
                s.rawValue = i === index;
            });
            this.selectedIndex.rawValue = index;
        } else this.keepSelection_();
    }
}
const cn$k = ClassName("tab");
class TabView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$k(), bladeContainerClassName());
        config.viewProps.bindClassModifiers(this.element);
        bindValue(config.empty, valueToClassName(this.element, cn$k(undefined, "nop")));
        const titleElem = doc.createElement("div");
        titleElem.classList.add(cn$k("t"));
        this.element.appendChild(titleElem);
        this.itemsElement = titleElem;
        const indentElem = doc.createElement("div");
        indentElem.classList.add(cn$k("i"));
        this.element.appendChild(indentElem);
        const contentsElem = doc.createElement("div");
        contentsElem.classList.add(cn$k("c"));
        this.element.appendChild(contentsElem);
        this.contentsElement = contentsElem;
    }
}
class TabController extends ContainerBladeController {
    constructor(doc, config){
        const tab = new Tab();
        const view = new TabView(doc, {
            empty: tab.empty,
            viewProps: config.viewProps
        });
        super({
            blade: config.blade,
            rackController: new RackController({
                blade: config.blade,
                element: view.contentsElement,
                viewProps: config.viewProps
            }),
            view: view
        });
        this.onRackAdd_ = this.onRackAdd_.bind(this);
        this.onRackRemove_ = this.onRackRemove_.bind(this);
        const rack = this.rackController.rack;
        rack.emitter.on("add", this.onRackAdd_);
        rack.emitter.on("remove", this.onRackRemove_);
        this.tab = tab;
    }
    add(pc, opt_index) {
        this.rackController.rack.add(pc, opt_index);
    }
    remove(index) {
        this.rackController.rack.remove(this.rackController.rack.children[index]);
    }
    onRackAdd_(ev) {
        if (!ev.root) return;
        const pc = ev.bladeController;
        insertElementAt(this.view.itemsElement, pc.itemController.view.element, ev.index);
        pc.itemController.viewProps.set("parent", this.viewProps);
        this.tab.add(pc.props.value("selected"));
    }
    onRackRemove_(ev) {
        if (!ev.root) return;
        const pc = ev.bladeController;
        removeElement(pc.itemController.view.element);
        pc.itemController.viewProps.set("parent", null);
        this.tab.remove(pc.props.value("selected"));
    }
}
createPlugin({
    id: "tab",
    type: "blade",
    accept (params) {
        const result = parseRecord(params, (p)=>({
                pages: p.required.array(p.required.object({
                    title: p.required.string
                })),
                view: p.required.constant("tab")
            }));
        if (!result || result.pages.length === 0) return null;
        return {
            params: result
        };
    },
    controller (args) {
        const c = new TabController(args.document, {
            blade: args.blade,
            viewProps: args.viewProps
        });
        args.params.pages.forEach((p)=>{
            const pc = new TabPageController(args.document, {
                blade: createBlade(),
                itemProps: ValueMap.fromObject({
                    selected: false,
                    title: p.title
                }),
                props: ValueMap.fromObject({
                    selected: false
                }),
                viewProps: ViewProps.create()
            });
            c.add(pc);
        });
        return c;
    },
    api (args) {
        if (args.controller instanceof TabController) return new TabApi(args.controller, args.pool);
        if (args.controller instanceof TabPageController) return new TabPageApi(args.controller, args.pool);
        return null;
    }
});
class ListInputBindingApi extends BindingApi {
    get options() {
        return this.controller.valueController.props.get("options");
    }
    set options(options) {
        this.controller.valueController.props.set("options", options);
    }
}
class ManualTicker {
    constructor(){
        this.disabled = false;
        this.emitter = new Emitter();
    }
    dispose() {}
    tick() {
        if (this.disabled) return;
        this.emitter.emit("tick", {
            sender: this
        });
    }
}
class IntervalTicker {
    constructor(doc, interval){
        this.disabled_ = false;
        this.timerId_ = null;
        this.onTick_ = this.onTick_.bind(this);
        this.doc_ = doc;
        this.emitter = new Emitter();
        this.interval_ = interval;
        this.setTimer_();
    }
    get disabled() {
        return this.disabled_;
    }
    set disabled(inactive) {
        this.disabled_ = inactive;
        if (this.disabled_) this.clearTimer_();
        else this.setTimer_();
    }
    dispose() {
        this.clearTimer_();
    }
    clearTimer_() {
        if (this.timerId_ === null) return;
        const win = this.doc_.defaultView;
        if (win) win.clearInterval(this.timerId_);
        this.timerId_ = null;
    }
    setTimer_() {
        this.clearTimer_();
        if (this.interval_ <= 0) return;
        const win = this.doc_.defaultView;
        if (win) this.timerId_ = win.setInterval(this.onTick_, this.interval_);
    }
    onTick_() {
        if (this.disabled_) return;
        this.emitter.emit("tick", {
            sender: this
        });
    }
}
class CompositeConstraint {
    constructor(constraints){
        this.constraints = constraints;
    }
    constrain(value) {
        return this.constraints.reduce((result, c)=>{
            return c.constrain(result);
        }, value);
    }
}
function findConstraint(c, constraintClass) {
    if (c instanceof constraintClass) return c;
    if (c instanceof CompositeConstraint) {
        const result = c.constraints.reduce((tmpResult, sc)=>{
            if (tmpResult) return tmpResult;
            return sc instanceof constraintClass ? sc : null;
        }, null);
        if (result) return result;
    }
    return null;
}
class ListConstraint {
    constructor(options){
        this.values = ValueMap.fromObject({
            options: options
        });
    }
    constrain(value) {
        const opts = this.values.get("options");
        if (opts.length === 0) return value;
        const matched = opts.filter((item)=>{
            return item.value === value;
        }).length > 0;
        return matched ? value : opts[0].value;
    }
}
function parseListOptions(value) {
    var _a;
    const p = MicroParsers;
    if (Array.isArray(value)) return (_a = parseRecord({
        items: value
    }, (p)=>({
            items: p.required.array(p.required.object({
                text: p.required.string,
                value: p.required.raw
            }))
        }))) === null || _a === void 0 ? void 0 : _a.items;
    if (typeof value === "object") return p.required.raw(value).value;
    return undefined;
}
function normalizeListOptions(options) {
    if (Array.isArray(options)) return options;
    const items = [];
    Object.keys(options).forEach((text)=>{
        items.push({
            text: text,
            value: options[text]
        });
    });
    return items;
}
function createListConstraint(options) {
    return !isEmpty(options) ? new ListConstraint(normalizeListOptions(forceCast(options))) : null;
}
const cn$j = ClassName("lst");
class ListView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.props_ = config.props;
        this.element = doc.createElement("div");
        this.element.classList.add(cn$j());
        config.viewProps.bindClassModifiers(this.element);
        const selectElem = doc.createElement("select");
        selectElem.classList.add(cn$j("s"));
        config.viewProps.bindDisabled(selectElem);
        this.element.appendChild(selectElem);
        this.selectElement = selectElem;
        const markElem = doc.createElement("div");
        markElem.classList.add(cn$j("m"));
        markElem.appendChild(createSvgIconElement(doc, "dropdown"));
        this.element.appendChild(markElem);
        config.value.emitter.on("change", this.onValueChange_);
        this.value_ = config.value;
        bindValueMap(this.props_, "options", (opts)=>{
            removeChildElements(this.selectElement);
            opts.forEach((item)=>{
                const optionElem = doc.createElement("option");
                optionElem.textContent = item.text;
                this.selectElement.appendChild(optionElem);
            });
            this.update_();
        });
    }
    update_() {
        const values = this.props_.get("options").map((o)=>o.value);
        this.selectElement.selectedIndex = values.indexOf(this.value_.rawValue);
    }
    onValueChange_() {
        this.update_();
    }
}
class ListController {
    constructor(doc, config){
        this.onSelectChange_ = this.onSelectChange_.bind(this);
        this.props = config.props;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new ListView(doc, {
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.selectElement.addEventListener("change", this.onSelectChange_);
    }
    onSelectChange_(e) {
        const selectElem = forceCast(e.currentTarget);
        this.value.rawValue = this.props.get("options")[selectElem.selectedIndex].value;
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                options: p.required.custom(parseListOptions)
            }), (result)=>{
            this.props.set("options", normalizeListOptions(result.options));
            return true;
        });
    }
    exportProps() {
        return exportBladeState(null, {
            options: this.props.get("options")
        });
    }
}
const cn$i = ClassName("pop");
class PopupView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$i());
        config.viewProps.bindClassModifiers(this.element);
        bindValue(config.shows, valueToClassName(this.element, cn$i(undefined, "v")));
    }
}
class PopupController {
    constructor(doc, config){
        this.shows = createValue(false);
        this.viewProps = config.viewProps;
        this.view = new PopupView(doc, {
            shows: this.shows,
            viewProps: this.viewProps
        });
    }
}
const cn$h = ClassName("txt");
class TextView {
    constructor(doc, config){
        this.onChange_ = this.onChange_.bind(this);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$h());
        config.viewProps.bindClassModifiers(this.element);
        this.props_ = config.props;
        this.props_.emitter.on("change", this.onChange_);
        const inputElem = doc.createElement("input");
        inputElem.classList.add(cn$h("i"));
        inputElem.type = "text";
        config.viewProps.bindDisabled(inputElem);
        this.element.appendChild(inputElem);
        this.inputElement = inputElem;
        config.value.emitter.on("change", this.onChange_);
        this.value_ = config.value;
        this.refresh();
    }
    refresh() {
        const formatter = this.props_.get("formatter");
        this.inputElement.value = formatter(this.value_.rawValue);
    }
    onChange_() {
        this.refresh();
    }
}
class TextController {
    constructor(doc, config){
        this.onInputChange_ = this.onInputChange_.bind(this);
        this.parser_ = config.parser;
        this.props = config.props;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new TextView(doc, {
            props: config.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.inputElement.addEventListener("change", this.onInputChange_);
    }
    onInputChange_(e) {
        const inputElem = forceCast(e.currentTarget);
        const value = inputElem.value;
        const parsedValue = this.parser_(value);
        if (!isEmpty(parsedValue)) this.value.rawValue = parsedValue;
        this.view.refresh();
    }
}
function boolToString(value) {
    return String(value);
}
function boolFromUnknown(value) {
    if (value === "false") return false;
    return !!value;
}
function BooleanFormatter(value) {
    return boolToString(value);
}
function composeParsers(parsers) {
    return (text)=>{
        return parsers.reduce((result, parser)=>{
            if (result !== null) return result;
            return parser(text);
        }, null);
    };
}
const innerFormatter = createNumberFormatter(0);
function formatPercentage(value) {
    return innerFormatter(value) + "%";
}
function stringFromUnknown(value) {
    return String(value);
}
function formatString(value) {
    return value;
}
function connectValues({ primary , secondary , forward , backward  }) {
    let changing = false;
    function preventFeedback(callback) {
        if (changing) return;
        changing = true;
        callback();
        changing = false;
    }
    primary.emitter.on("change", (ev)=>{
        preventFeedback(()=>{
            secondary.setRawValue(forward(primary.rawValue, secondary.rawValue), ev.options);
        });
    });
    secondary.emitter.on("change", (ev)=>{
        preventFeedback(()=>{
            primary.setRawValue(backward(primary.rawValue, secondary.rawValue), ev.options);
        });
        preventFeedback(()=>{
            secondary.setRawValue(forward(primary.rawValue, secondary.rawValue), ev.options);
        });
    });
    preventFeedback(()=>{
        secondary.setRawValue(forward(primary.rawValue, secondary.rawValue), {
            forceEmit: false,
            last: true
        });
    });
}
function getStepForKey(keyScale, keys) {
    const step = keyScale * (keys.altKey ? 0.1 : 1) * (keys.shiftKey ? 10 : 1);
    if (keys.upKey) return +step;
    else if (keys.downKey) return -step;
    return 0;
}
function getVerticalStepKeys(ev) {
    return {
        altKey: ev.altKey,
        downKey: ev.key === "ArrowDown",
        shiftKey: ev.shiftKey,
        upKey: ev.key === "ArrowUp"
    };
}
function getHorizontalStepKeys(ev) {
    return {
        altKey: ev.altKey,
        downKey: ev.key === "ArrowLeft",
        shiftKey: ev.shiftKey,
        upKey: ev.key === "ArrowRight"
    };
}
function isVerticalArrowKey(key) {
    return key === "ArrowUp" || key === "ArrowDown";
}
function isArrowKey(key) {
    return isVerticalArrowKey(key) || key === "ArrowLeft" || key === "ArrowRight";
}
function computeOffset$1(ev, elem) {
    var _a, _b;
    const win = elem.ownerDocument.defaultView;
    const rect = elem.getBoundingClientRect();
    return {
        x: ev.pageX - (((_a = win && win.scrollX) !== null && _a !== void 0 ? _a : 0) + rect.left),
        y: ev.pageY - (((_b = win && win.scrollY) !== null && _b !== void 0 ? _b : 0) + rect.top)
    };
}
class PointerHandler {
    constructor(element){
        this.lastTouch_ = null;
        this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this);
        this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this);
        this.onMouseDown_ = this.onMouseDown_.bind(this);
        this.onTouchEnd_ = this.onTouchEnd_.bind(this);
        this.onTouchMove_ = this.onTouchMove_.bind(this);
        this.onTouchStart_ = this.onTouchStart_.bind(this);
        this.elem_ = element;
        this.emitter = new Emitter();
        element.addEventListener("touchstart", this.onTouchStart_, {
            passive: false
        });
        element.addEventListener("touchmove", this.onTouchMove_, {
            passive: true
        });
        element.addEventListener("touchend", this.onTouchEnd_);
        element.addEventListener("mousedown", this.onMouseDown_);
    }
    computePosition_(offset) {
        const rect = this.elem_.getBoundingClientRect();
        return {
            bounds: {
                width: rect.width,
                height: rect.height
            },
            point: offset ? {
                x: offset.x,
                y: offset.y
            } : null
        };
    }
    onMouseDown_(ev) {
        var _a;
        ev.preventDefault();
        (_a = ev.currentTarget) === null || _a === void 0 || _a.focus();
        const doc = this.elem_.ownerDocument;
        doc.addEventListener("mousemove", this.onDocumentMouseMove_);
        doc.addEventListener("mouseup", this.onDocumentMouseUp_);
        this.emitter.emit("down", {
            altKey: ev.altKey,
            data: this.computePosition_(computeOffset$1(ev, this.elem_)),
            sender: this,
            shiftKey: ev.shiftKey
        });
    }
    onDocumentMouseMove_(ev) {
        this.emitter.emit("move", {
            altKey: ev.altKey,
            data: this.computePosition_(computeOffset$1(ev, this.elem_)),
            sender: this,
            shiftKey: ev.shiftKey
        });
    }
    onDocumentMouseUp_(ev) {
        const doc = this.elem_.ownerDocument;
        doc.removeEventListener("mousemove", this.onDocumentMouseMove_);
        doc.removeEventListener("mouseup", this.onDocumentMouseUp_);
        this.emitter.emit("up", {
            altKey: ev.altKey,
            data: this.computePosition_(computeOffset$1(ev, this.elem_)),
            sender: this,
            shiftKey: ev.shiftKey
        });
    }
    onTouchStart_(ev) {
        ev.preventDefault();
        const touch = ev.targetTouches.item(0);
        const rect = this.elem_.getBoundingClientRect();
        this.emitter.emit("down", {
            altKey: ev.altKey,
            data: this.computePosition_(touch ? {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
            } : undefined),
            sender: this,
            shiftKey: ev.shiftKey
        });
        this.lastTouch_ = touch;
    }
    onTouchMove_(ev) {
        const touch = ev.targetTouches.item(0);
        const rect = this.elem_.getBoundingClientRect();
        this.emitter.emit("move", {
            altKey: ev.altKey,
            data: this.computePosition_(touch ? {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
            } : undefined),
            sender: this,
            shiftKey: ev.shiftKey
        });
        this.lastTouch_ = touch;
    }
    onTouchEnd_(ev) {
        var _a;
        const touch = (_a = ev.targetTouches.item(0)) !== null && _a !== void 0 ? _a : this.lastTouch_;
        const rect = this.elem_.getBoundingClientRect();
        this.emitter.emit("up", {
            altKey: ev.altKey,
            data: this.computePosition_(touch ? {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top
            } : undefined),
            sender: this,
            shiftKey: ev.shiftKey
        });
    }
}
const cn$g = ClassName("txt");
class NumberTextView {
    constructor(doc, config){
        this.onChange_ = this.onChange_.bind(this);
        this.props_ = config.props;
        this.props_.emitter.on("change", this.onChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$g(), cn$g(undefined, "num"));
        if (config.arrayPosition) this.element.classList.add(cn$g(undefined, config.arrayPosition));
        config.viewProps.bindClassModifiers(this.element);
        const inputElem = doc.createElement("input");
        inputElem.classList.add(cn$g("i"));
        inputElem.type = "text";
        config.viewProps.bindDisabled(inputElem);
        this.element.appendChild(inputElem);
        this.inputElement = inputElem;
        this.onDraggingChange_ = this.onDraggingChange_.bind(this);
        this.dragging_ = config.dragging;
        this.dragging_.emitter.on("change", this.onDraggingChange_);
        this.element.classList.add(cn$g());
        this.inputElement.classList.add(cn$g("i"));
        const knobElem = doc.createElement("div");
        knobElem.classList.add(cn$g("k"));
        this.element.appendChild(knobElem);
        this.knobElement = knobElem;
        const guideElem = doc.createElementNS(SVG_NS, "svg");
        guideElem.classList.add(cn$g("g"));
        this.knobElement.appendChild(guideElem);
        const bodyElem = doc.createElementNS(SVG_NS, "path");
        bodyElem.classList.add(cn$g("gb"));
        guideElem.appendChild(bodyElem);
        this.guideBodyElem_ = bodyElem;
        const headElem = doc.createElementNS(SVG_NS, "path");
        headElem.classList.add(cn$g("gh"));
        guideElem.appendChild(headElem);
        this.guideHeadElem_ = headElem;
        const tooltipElem = doc.createElement("div");
        tooltipElem.classList.add(ClassName("tt")());
        this.knobElement.appendChild(tooltipElem);
        this.tooltipElem_ = tooltipElem;
        config.value.emitter.on("change", this.onChange_);
        this.value = config.value;
        this.refresh();
    }
    onDraggingChange_(ev) {
        if (ev.rawValue === null) {
            this.element.classList.remove(cn$g(undefined, "drg"));
            return;
        }
        this.element.classList.add(cn$g(undefined, "drg"));
        const x = ev.rawValue / this.props_.get("pointerScale");
        const aox = x + (x > 0 ? -1 : x < 0 ? 1 : 0);
        const adx = constrainRange(-aox, -4, 4);
        this.guideHeadElem_.setAttributeNS(null, "d", [
            `M ${aox + adx},0 L${aox},4 L${aox + adx},8`,
            `M ${x},-1 L${x},9`
        ].join(" "));
        this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${x},4`);
        const formatter = this.props_.get("formatter");
        this.tooltipElem_.textContent = formatter(this.value.rawValue);
        this.tooltipElem_.style.left = `${x}px`;
    }
    refresh() {
        const formatter = this.props_.get("formatter");
        this.inputElement.value = formatter(this.value.rawValue);
    }
    onChange_() {
        this.refresh();
    }
}
class NumberTextController {
    constructor(doc, config){
        var _a;
        this.originRawValue_ = 0;
        this.onInputChange_ = this.onInputChange_.bind(this);
        this.onInputKeyDown_ = this.onInputKeyDown_.bind(this);
        this.onInputKeyUp_ = this.onInputKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.parser_ = config.parser;
        this.props = config.props;
        this.sliderProps_ = (_a = config.sliderProps) !== null && _a !== void 0 ? _a : null;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.dragging_ = createValue(null);
        this.view = new NumberTextView(doc, {
            arrayPosition: config.arrayPosition,
            dragging: this.dragging_,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.inputElement.addEventListener("change", this.onInputChange_);
        this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_);
        this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
        const ph = new PointerHandler(this.view.knobElement);
        ph.emitter.on("down", this.onPointerDown_);
        ph.emitter.on("move", this.onPointerMove_);
        ph.emitter.on("up", this.onPointerUp_);
    }
    constrainValue_(value) {
        var _a, _b;
        const min = (_a = this.sliderProps_) === null || _a === void 0 ? void 0 : _a.get("min");
        const max = (_b = this.sliderProps_) === null || _b === void 0 ? void 0 : _b.get("max");
        let v = value;
        if (min !== undefined) v = Math.max(v, min);
        if (max !== undefined) v = Math.min(v, max);
        return v;
    }
    onInputChange_(e) {
        const inputElem = forceCast(e.currentTarget);
        const value = inputElem.value;
        const parsedValue = this.parser_(value);
        if (!isEmpty(parsedValue)) this.value.rawValue = this.constrainValue_(parsedValue);
        this.view.refresh();
    }
    onInputKeyDown_(ev) {
        const step = getStepForKey(this.props.get("keyScale"), getVerticalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.constrainValue_(this.value.rawValue + step), {
            forceEmit: false,
            last: false
        });
    }
    onInputKeyUp_(ev) {
        const step = getStepForKey(this.props.get("keyScale"), getVerticalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
    onPointerDown_() {
        this.originRawValue_ = this.value.rawValue;
        this.dragging_.rawValue = 0;
    }
    computeDraggingValue_(data) {
        if (!data.point) return null;
        const dx = data.point.x - data.bounds.width / 2;
        return this.constrainValue_(this.originRawValue_ + dx * this.props.get("pointerScale"));
    }
    onPointerMove_(ev) {
        const v = this.computeDraggingValue_(ev.data);
        if (v === null) return;
        this.value.setRawValue(v, {
            forceEmit: false,
            last: false
        });
        this.dragging_.rawValue = this.value.rawValue - this.originRawValue_;
    }
    onPointerUp_(ev) {
        const v = this.computeDraggingValue_(ev.data);
        if (v === null) return;
        this.value.setRawValue(v, {
            forceEmit: true,
            last: true
        });
        this.dragging_.rawValue = null;
    }
}
const cn$f = ClassName("sld");
class SliderView {
    constructor(doc, config){
        this.onChange_ = this.onChange_.bind(this);
        this.props_ = config.props;
        this.props_.emitter.on("change", this.onChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$f());
        config.viewProps.bindClassModifiers(this.element);
        const trackElem = doc.createElement("div");
        trackElem.classList.add(cn$f("t"));
        config.viewProps.bindTabIndex(trackElem);
        this.element.appendChild(trackElem);
        this.trackElement = trackElem;
        const knobElem = doc.createElement("div");
        knobElem.classList.add(cn$f("k"));
        this.trackElement.appendChild(knobElem);
        this.knobElement = knobElem;
        config.value.emitter.on("change", this.onChange_);
        this.value = config.value;
        this.update_();
    }
    update_() {
        const p = constrainRange(mapRange(this.value.rawValue, this.props_.get("min"), this.props_.get("max"), 0, 100), 0, 100);
        this.knobElement.style.width = `${p}%`;
    }
    onChange_() {
        this.update_();
    }
}
class SliderController {
    constructor(doc, config){
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onKeyUp_ = this.onKeyUp_.bind(this);
        this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.props = config.props;
        this.view = new SliderView(doc, {
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.trackElement);
        this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_);
        this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_);
        this.ptHandler_.emitter.on("up", this.onPointerUp_);
        this.view.trackElement.addEventListener("keydown", this.onKeyDown_);
        this.view.trackElement.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        this.value.setRawValue(mapRange(constrainRange(d.point.x, 0, d.bounds.width), 0, d.bounds.width, this.props.get("min"), this.props.get("max")), opts);
    }
    onPointerDownOrMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onKeyDown_(ev) {
        const step = getStepForKey(this.props.get("keyScale"), getHorizontalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue + step, {
            forceEmit: false,
            last: false
        });
    }
    onKeyUp_(ev) {
        const step = getStepForKey(this.props.get("keyScale"), getHorizontalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
const cn$e = ClassName("sldtxt");
class SliderTextView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$e());
        const sliderElem = doc.createElement("div");
        sliderElem.classList.add(cn$e("s"));
        this.sliderView_ = config.sliderView;
        sliderElem.appendChild(this.sliderView_.element);
        this.element.appendChild(sliderElem);
        const textElem = doc.createElement("div");
        textElem.classList.add(cn$e("t"));
        this.textView_ = config.textView;
        textElem.appendChild(this.textView_.element);
        this.element.appendChild(textElem);
    }
}
class SliderTextController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.sliderC_ = new SliderController(doc, {
            props: config.sliderProps,
            value: config.value,
            viewProps: this.viewProps
        });
        this.textC_ = new NumberTextController(doc, {
            parser: config.parser,
            props: config.textProps,
            sliderProps: config.sliderProps,
            value: config.value,
            viewProps: config.viewProps
        });
        this.view = new SliderTextView(doc, {
            sliderView: this.sliderC_.view,
            textView: this.textC_.view
        });
    }
    get sliderController() {
        return this.sliderC_;
    }
    get textController() {
        return this.textC_;
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                max: p.required.number,
                min: p.required.number
            }), (result)=>{
            const sliderProps = this.sliderC_.props;
            sliderProps.set("max", result.max);
            sliderProps.set("min", result.min);
            return true;
        });
    }
    exportProps() {
        const sliderProps = this.sliderC_.props;
        return exportBladeState(null, {
            max: sliderProps.get("max"),
            min: sliderProps.get("min")
        });
    }
}
function createSliderTextProps(config) {
    return {
        sliderProps: new ValueMap({
            keyScale: config.keyScale,
            max: config.max,
            min: config.min
        }),
        textProps: new ValueMap({
            formatter: createValue(config.formatter),
            keyScale: config.keyScale,
            pointerScale: createValue(config.pointerScale)
        })
    };
}
const CSS_VAR_MAP = {
    containerUnitSize: "cnt-usz"
};
function getCssVar(key) {
    return `--${CSS_VAR_MAP[key]}`;
}
class PlainView {
    constructor(doc, config){
        const cn = ClassName(config.viewName);
        this.element = doc.createElement("div");
        this.element.classList.add(cn());
        config.viewProps.bindClassModifiers(this.element);
    }
}
function createPointDimensionParser(p) {
    return createNumberTextInputParamsParser(p);
}
function parsePointDimensionParams(value) {
    if (!isRecord(value)) return undefined;
    return parseRecord(value, createPointDimensionParser);
}
function createDimensionConstraint(params, initialValue) {
    if (!params) return undefined;
    const constraints = [];
    const cs = createStepConstraint(params, initialValue);
    if (cs) constraints.push(cs);
    const rs = createRangeConstraint(params);
    if (rs) constraints.push(rs);
    return new CompositeConstraint(constraints);
}
function parsePickerLayout(value) {
    if (value === "inline" || value === "popup") return value;
    return undefined;
}
function writePrimitive(target, value) {
    target.write(value);
}
const cn$d = ClassName("ckb");
class CheckboxView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$d());
        config.viewProps.bindClassModifiers(this.element);
        const labelElem = doc.createElement("label");
        labelElem.classList.add(cn$d("l"));
        this.element.appendChild(labelElem);
        const inputElem = doc.createElement("input");
        inputElem.classList.add(cn$d("i"));
        inputElem.type = "checkbox";
        labelElem.appendChild(inputElem);
        this.inputElement = inputElem;
        config.viewProps.bindDisabled(this.inputElement);
        const wrapperElem = doc.createElement("div");
        wrapperElem.classList.add(cn$d("w"));
        labelElem.appendChild(wrapperElem);
        const markElem = createSvgIconElement(doc, "check");
        wrapperElem.appendChild(markElem);
        config.value.emitter.on("change", this.onValueChange_);
        this.value = config.value;
        this.update_();
    }
    update_() {
        this.inputElement.checked = this.value.rawValue;
    }
    onValueChange_() {
        this.update_();
    }
}
class CheckboxController {
    constructor(doc, config){
        this.onInputChange_ = this.onInputChange_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new CheckboxView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.inputElement.addEventListener("change", this.onInputChange_);
    }
    onInputChange_(e) {
        const inputElem = forceCast(e.currentTarget);
        this.value.rawValue = inputElem.checked;
    }
}
function createConstraint$8(params) {
    const constraints = [];
    const lc = createListConstraint(params.options);
    if (lc) constraints.push(lc);
    return new CompositeConstraint(constraints);
}
createPlugin({
    id: "input-bool",
    type: "input",
    accept: (value, params)=>{
        if (typeof value !== "boolean") return null;
        const result = parseRecord(params, (p)=>({
                options: p.optional.custom(parseListOptions),
                readonly: p.optional.constant(false)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>boolFromUnknown,
        constraint: (args)=>createConstraint$8(args.params),
        writer: (_args)=>writePrimitive
    },
    controller: (args)=>{
        const doc = args.document;
        const value = args.value;
        const c = args.constraint;
        const lc = c && findConstraint(c, ListConstraint);
        if (lc) return new ListController(doc, {
            props: new ValueMap({
                options: lc.values.value("options")
            }),
            value: value,
            viewProps: args.viewProps
        });
        return new CheckboxController(doc, {
            value: value,
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (typeof args.controller.value.rawValue !== "boolean") return null;
        if (args.controller.valueController instanceof ListController) return new ListInputBindingApi(args.controller);
        return null;
    }
});
const cn$c = ClassName("col");
class ColorView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$c());
        config.foldable.bindExpandedClass(this.element, cn$c(undefined, "expanded"));
        bindValueMap(config.foldable, "completed", valueToClassName(this.element, cn$c(undefined, "cpl")));
        const headElem = doc.createElement("div");
        headElem.classList.add(cn$c("h"));
        this.element.appendChild(headElem);
        const swatchElem = doc.createElement("div");
        swatchElem.classList.add(cn$c("s"));
        headElem.appendChild(swatchElem);
        this.swatchElement = swatchElem;
        const textElem = doc.createElement("div");
        textElem.classList.add(cn$c("t"));
        headElem.appendChild(textElem);
        this.textElement = textElem;
        if (config.pickerLayout === "inline") {
            const pickerElem = doc.createElement("div");
            pickerElem.classList.add(cn$c("p"));
            this.element.appendChild(pickerElem);
            this.pickerElement = pickerElem;
        } else this.pickerElement = null;
    }
}
function rgbToHslInt(r, g, b) {
    const rp = constrainRange(r / 255, 0, 1);
    const gp = constrainRange(g / 255, 0, 1);
    const bp = constrainRange(b / 255, 0, 1);
    const cmax = Math.max(rp, gp, bp);
    const cmin = Math.min(rp, gp, bp);
    const c = cmax - cmin;
    let h = 0;
    let s = 0;
    const l = (cmin + cmax) / 2;
    if (c !== 0) {
        s = c / (1 - Math.abs(cmax + cmin - 1));
        if (rp === cmax) h = (gp - bp) / c;
        else if (gp === cmax) h = 2 + (bp - rp) / c;
        else h = 4 + (rp - gp) / c;
        h = h / 6 + (h < 0 ? 1 : 0);
    }
    return [
        h * 360,
        s * 100,
        l * 100
    ];
}
function hslToRgbInt(h, s, l) {
    const hp = (h % 360 + 360) % 360;
    const sp = constrainRange(s / 100, 0, 1);
    const lp = constrainRange(l / 100, 0, 1);
    const c = (1 - Math.abs(2 * lp - 1)) * sp;
    const x = c * (1 - Math.abs(hp / 60 % 2 - 1));
    const m = lp - c / 2;
    let rp, gp, bp;
    if (hp >= 0 && hp < 60) [rp, gp, bp] = [
        c,
        x,
        0
    ];
    else if (hp >= 60 && hp < 120) [rp, gp, bp] = [
        x,
        c,
        0
    ];
    else if (hp >= 120 && hp < 180) [rp, gp, bp] = [
        0,
        c,
        x
    ];
    else if (hp >= 180 && hp < 240) [rp, gp, bp] = [
        0,
        x,
        c
    ];
    else if (hp >= 240 && hp < 300) [rp, gp, bp] = [
        x,
        0,
        c
    ];
    else [rp, gp, bp] = [
        c,
        0,
        x
    ];
    return [
        (rp + m) * 255,
        (gp + m) * 255,
        (bp + m) * 255
    ];
}
function rgbToHsvInt(r, g, b) {
    const rp = constrainRange(r / 255, 0, 1);
    const gp = constrainRange(g / 255, 0, 1);
    const bp = constrainRange(b / 255, 0, 1);
    const cmax = Math.max(rp, gp, bp);
    const cmin = Math.min(rp, gp, bp);
    const d = cmax - cmin;
    let h;
    if (d === 0) h = 0;
    else if (cmax === rp) h = 60 * (((gp - bp) / d % 6 + 6) % 6);
    else if (cmax === gp) h = 60 * ((bp - rp) / d + 2);
    else h = 60 * ((rp - gp) / d + 4);
    const s = cmax === 0 ? 0 : d / cmax;
    const v = cmax;
    return [
        h,
        s * 100,
        v * 100
    ];
}
function hsvToRgbInt(h, s, v) {
    const hp = loopRange(h, 360);
    const sp = constrainRange(s / 100, 0, 1);
    const vp = constrainRange(v / 100, 0, 1);
    const c = vp * sp;
    const x = c * (1 - Math.abs(hp / 60 % 2 - 1));
    const m = vp - c;
    let rp, gp, bp;
    if (hp >= 0 && hp < 60) [rp, gp, bp] = [
        c,
        x,
        0
    ];
    else if (hp >= 60 && hp < 120) [rp, gp, bp] = [
        x,
        c,
        0
    ];
    else if (hp >= 120 && hp < 180) [rp, gp, bp] = [
        0,
        c,
        x
    ];
    else if (hp >= 180 && hp < 240) [rp, gp, bp] = [
        0,
        x,
        c
    ];
    else if (hp >= 240 && hp < 300) [rp, gp, bp] = [
        x,
        0,
        c
    ];
    else [rp, gp, bp] = [
        c,
        0,
        x
    ];
    return [
        (rp + m) * 255,
        (gp + m) * 255,
        (bp + m) * 255
    ];
}
function hslToHsvInt(h, s, l) {
    const sd = l + s * (100 - Math.abs(2 * l - 100)) / 200;
    return [
        h,
        sd !== 0 ? s * (100 - Math.abs(2 * l - 100)) / sd : 0,
        l + s * (100 - Math.abs(2 * l - 100)) / 200
    ];
}
function hsvToHslInt(h, s, v) {
    const sd = 100 - Math.abs(v * (200 - s) / 100 - 100);
    return [
        h,
        sd !== 0 ? s * v / sd : 0,
        v * (200 - s) / 200
    ];
}
function removeAlphaComponent(comps) {
    return [
        comps[0],
        comps[1],
        comps[2]
    ];
}
function appendAlphaComponent(comps, alpha) {
    return [
        comps[0],
        comps[1],
        comps[2],
        alpha
    ];
}
const MODE_CONVERTER_MAP = {
    hsl: {
        hsl: (h, s, l)=>[
                h,
                s,
                l
            ],
        hsv: hslToHsvInt,
        rgb: hslToRgbInt
    },
    hsv: {
        hsl: hsvToHslInt,
        hsv: (h, s, v)=>[
                h,
                s,
                v
            ],
        rgb: hsvToRgbInt
    },
    rgb: {
        hsl: rgbToHslInt,
        hsv: rgbToHsvInt,
        rgb: (r, g, b)=>[
                r,
                g,
                b
            ]
    }
};
function getColorMaxComponents(mode, type) {
    return [
        type === "float" ? 1 : mode === "rgb" ? 255 : 360,
        type === "float" ? 1 : mode === "rgb" ? 255 : 100,
        type === "float" ? 1 : mode === "rgb" ? 255 : 100
    ];
}
function loopHueRange(hue, max) {
    return hue === max ? max : loopRange(hue, max);
}
function constrainColorComponents(components, mode, type) {
    var _a;
    const ms = getColorMaxComponents(mode, type);
    return [
        mode === "rgb" ? constrainRange(components[0], 0, ms[0]) : loopHueRange(components[0], ms[0]),
        constrainRange(components[1], 0, ms[1]),
        constrainRange(components[2], 0, ms[2]),
        constrainRange((_a = components[3]) !== null && _a !== void 0 ? _a : 1, 0, 1)
    ];
}
function convertColorType(comps, mode, from, to) {
    const fms = getColorMaxComponents(mode, from);
    const tms = getColorMaxComponents(mode, to);
    return comps.map((c, index)=>c / fms[index] * tms[index]);
}
function convertColor(components, from, to) {
    const intComps = convertColorType(components, from.mode, from.type, "int");
    const result = MODE_CONVERTER_MAP[from.mode][to.mode](...intComps);
    return convertColorType(result, to.mode, "int", to.type);
}
class IntColor {
    static black() {
        return new IntColor([
            0,
            0,
            0
        ], "rgb");
    }
    constructor(comps, mode){
        this.type = "int";
        this.mode = mode;
        this.comps_ = constrainColorComponents(comps, mode, this.type);
    }
    getComponents(opt_mode) {
        return appendAlphaComponent(convertColor(removeAlphaComponent(this.comps_), {
            mode: this.mode,
            type: this.type
        }, {
            mode: opt_mode !== null && opt_mode !== void 0 ? opt_mode : this.mode,
            type: this.type
        }), this.comps_[3]);
    }
    toRgbaObject() {
        const rgbComps = this.getComponents("rgb");
        return {
            r: rgbComps[0],
            g: rgbComps[1],
            b: rgbComps[2],
            a: rgbComps[3]
        };
    }
}
const cn$b = ClassName("colp");
class ColorPickerView {
    constructor(doc, config){
        this.alphaViews_ = null;
        this.element = doc.createElement("div");
        this.element.classList.add(cn$b());
        config.viewProps.bindClassModifiers(this.element);
        const hsvElem = doc.createElement("div");
        hsvElem.classList.add(cn$b("hsv"));
        const svElem = doc.createElement("div");
        svElem.classList.add(cn$b("sv"));
        this.svPaletteView_ = config.svPaletteView;
        svElem.appendChild(this.svPaletteView_.element);
        hsvElem.appendChild(svElem);
        const hElem = doc.createElement("div");
        hElem.classList.add(cn$b("h"));
        this.hPaletteView_ = config.hPaletteView;
        hElem.appendChild(this.hPaletteView_.element);
        hsvElem.appendChild(hElem);
        this.element.appendChild(hsvElem);
        const rgbElem = doc.createElement("div");
        rgbElem.classList.add(cn$b("rgb"));
        this.textsView_ = config.textsView;
        rgbElem.appendChild(this.textsView_.element);
        this.element.appendChild(rgbElem);
        if (config.alphaViews) {
            this.alphaViews_ = {
                palette: config.alphaViews.palette,
                text: config.alphaViews.text
            };
            const aElem = doc.createElement("div");
            aElem.classList.add(cn$b("a"));
            const apElem = doc.createElement("div");
            apElem.classList.add(cn$b("ap"));
            apElem.appendChild(this.alphaViews_.palette.element);
            aElem.appendChild(apElem);
            const atElem = doc.createElement("div");
            atElem.classList.add(cn$b("at"));
            atElem.appendChild(this.alphaViews_.text.element);
            aElem.appendChild(atElem);
            this.element.appendChild(aElem);
        }
    }
    get allFocusableElements() {
        const elems = [
            this.svPaletteView_.element,
            this.hPaletteView_.element,
            this.textsView_.modeSelectElement,
            ...this.textsView_.inputViews.map((v)=>v.inputElement)
        ];
        if (this.alphaViews_) elems.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement);
        return elems;
    }
}
function parseColorType(value) {
    return value === "int" ? "int" : value === "float" ? "float" : undefined;
}
function parseColorInputParams(params) {
    return parseRecord(params, (p)=>({
            color: p.optional.object({
                alpha: p.optional.boolean,
                type: p.optional.custom(parseColorType)
            }),
            expanded: p.optional.boolean,
            picker: p.optional.custom(parsePickerLayout),
            readonly: p.optional.constant(false)
        }));
}
function getKeyScaleForColor(forAlpha) {
    return forAlpha ? 0.1 : 1;
}
function extractColorType(params) {
    var _a;
    return (_a = params.color) === null || _a === void 0 ? void 0 : _a.type;
}
class FloatColor {
    constructor(comps, mode){
        this.type = "float";
        this.mode = mode;
        this.comps_ = constrainColorComponents(comps, mode, this.type);
    }
    getComponents(opt_mode) {
        return appendAlphaComponent(convertColor(removeAlphaComponent(this.comps_), {
            mode: this.mode,
            type: this.type
        }, {
            mode: opt_mode !== null && opt_mode !== void 0 ? opt_mode : this.mode,
            type: this.type
        }), this.comps_[3]);
    }
    toRgbaObject() {
        const rgbComps = this.getComponents("rgb");
        return {
            r: rgbComps[0],
            g: rgbComps[1],
            b: rgbComps[2],
            a: rgbComps[3]
        };
    }
}
const TYPE_TO_CONSTRUCTOR_MAP = {
    int: (comps, mode)=>new IntColor(comps, mode),
    float: (comps, mode)=>new FloatColor(comps, mode)
};
function createColor(comps, mode, type) {
    return TYPE_TO_CONSTRUCTOR_MAP[type](comps, mode);
}
function isFloatColor(c) {
    return c.type === "float";
}
function isIntColor(c) {
    return c.type === "int";
}
function convertFloatToInt(cf) {
    const comps = cf.getComponents();
    const ms = getColorMaxComponents(cf.mode, "int");
    return new IntColor([
        Math.round(mapRange(comps[0], 0, 1, 0, ms[0])),
        Math.round(mapRange(comps[1], 0, 1, 0, ms[1])),
        Math.round(mapRange(comps[2], 0, 1, 0, ms[2])),
        comps[3]
    ], cf.mode);
}
function convertIntToFloat(ci) {
    const comps = ci.getComponents();
    const ms = getColorMaxComponents(ci.mode, "int");
    return new FloatColor([
        mapRange(comps[0], 0, ms[0], 0, 1),
        mapRange(comps[1], 0, ms[1], 0, 1),
        mapRange(comps[2], 0, ms[2], 0, 1),
        comps[3]
    ], ci.mode);
}
function mapColorType(c, type) {
    if (c.type === type) return c;
    if (isIntColor(c) && type === "float") return convertIntToFloat(c);
    if (isFloatColor(c) && type === "int") return convertFloatToInt(c);
    throw TpError.shouldNeverHappen();
}
function equalsStringColorFormat(f1, f2) {
    return f1.alpha === f2.alpha && f1.mode === f2.mode && f1.notation === f2.notation && f1.type === f2.type;
}
function parseCssNumberOrPercentage(text, max) {
    const m = text.match(/^(.+)%$/);
    if (!m) return Math.min(parseFloat(text), max);
    return Math.min(parseFloat(m[1]) * 0.01 * max, max);
}
const ANGLE_TO_DEG_MAP = {
    deg: (angle)=>angle,
    grad: (angle)=>angle * 360 / 400,
    rad: (angle)=>angle * 360 / (2 * Math.PI),
    turn: (angle)=>angle * 360
};
function parseCssNumberOrAngle(text) {
    const m = text.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
    if (!m) return parseFloat(text);
    const angle = parseFloat(m[1]);
    const unit = m[2];
    return ANGLE_TO_DEG_MAP[unit](angle);
}
function parseFunctionalRgbColorComponents(text) {
    const m = text.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!m) return null;
    const comps = [
        parseCssNumberOrPercentage(m[1], 255),
        parseCssNumberOrPercentage(m[2], 255),
        parseCssNumberOrPercentage(m[3], 255)
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) return null;
    return comps;
}
function parseFunctionalRgbColor(text) {
    const comps = parseFunctionalRgbColorComponents(text);
    return comps ? new IntColor(comps, "rgb") : null;
}
function parseFunctionalRgbaColorComponents(text) {
    const m = text.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!m) return null;
    const comps = [
        parseCssNumberOrPercentage(m[1], 255),
        parseCssNumberOrPercentage(m[2], 255),
        parseCssNumberOrPercentage(m[3], 255),
        parseCssNumberOrPercentage(m[4], 1)
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) return null;
    return comps;
}
function parseFunctionalRgbaColor(text) {
    const comps = parseFunctionalRgbaColorComponents(text);
    return comps ? new IntColor(comps, "rgb") : null;
}
function parseFunctionalHslColorComponents(text) {
    const m = text.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!m) return null;
    const comps = [
        parseCssNumberOrAngle(m[1]),
        parseCssNumberOrPercentage(m[2], 100),
        parseCssNumberOrPercentage(m[3], 100)
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) return null;
    return comps;
}
function parseFunctionalHslColor(text) {
    const comps = parseFunctionalHslColorComponents(text);
    return comps ? new IntColor(comps, "hsl") : null;
}
function parseHslaColorComponents(text) {
    const m = text.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!m) return null;
    const comps = [
        parseCssNumberOrAngle(m[1]),
        parseCssNumberOrPercentage(m[2], 100),
        parseCssNumberOrPercentage(m[3], 100),
        parseCssNumberOrPercentage(m[4], 1)
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) return null;
    return comps;
}
function parseFunctionalHslaColor(text) {
    const comps = parseHslaColorComponents(text);
    return comps ? new IntColor(comps, "hsl") : null;
}
function parseHexRgbColorComponents(text) {
    const mRgb = text.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
    if (mRgb) return [
        parseInt(mRgb[1] + mRgb[1], 16),
        parseInt(mRgb[2] + mRgb[2], 16),
        parseInt(mRgb[3] + mRgb[3], 16)
    ];
    const mRrggbb = text.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
    if (mRrggbb) return [
        parseInt(mRrggbb[1], 16),
        parseInt(mRrggbb[2], 16),
        parseInt(mRrggbb[3], 16)
    ];
    return null;
}
function parseHexRgbColor(text) {
    const comps = parseHexRgbColorComponents(text);
    return comps ? new IntColor(comps, "rgb") : null;
}
function parseHexRgbaColorComponents(text) {
    const mRgb = text.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
    if (mRgb) return [
        parseInt(mRgb[1] + mRgb[1], 16),
        parseInt(mRgb[2] + mRgb[2], 16),
        parseInt(mRgb[3] + mRgb[3], 16),
        mapRange(parseInt(mRgb[4] + mRgb[4], 16), 0, 255, 0, 1)
    ];
    const mRrggbb = text.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
    if (mRrggbb) return [
        parseInt(mRrggbb[1], 16),
        parseInt(mRrggbb[2], 16),
        parseInt(mRrggbb[3], 16),
        mapRange(parseInt(mRrggbb[4], 16), 0, 255, 0, 1)
    ];
    return null;
}
function parseHexRgbaColor(text) {
    const comps = parseHexRgbaColorComponents(text);
    return comps ? new IntColor(comps, "rgb") : null;
}
function parseObjectRgbColorComponents(text) {
    const m = text.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
    if (!m) return null;
    const comps = [
        parseFloat(m[1]),
        parseFloat(m[2]),
        parseFloat(m[3])
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2])) return null;
    return comps;
}
function createObjectRgbColorParser(type) {
    return (text)=>{
        const comps = parseObjectRgbColorComponents(text);
        return comps ? createColor(comps, "rgb", type) : null;
    };
}
function parseObjectRgbaColorComponents(text) {
    const m = text.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
    if (!m) return null;
    const comps = [
        parseFloat(m[1]),
        parseFloat(m[2]),
        parseFloat(m[3]),
        parseFloat(m[4])
    ];
    if (isNaN(comps[0]) || isNaN(comps[1]) || isNaN(comps[2]) || isNaN(comps[3])) return null;
    return comps;
}
function createObjectRgbaColorParser(type) {
    return (text)=>{
        const comps = parseObjectRgbaColorComponents(text);
        return comps ? createColor(comps, "rgb", type) : null;
    };
}
const PARSER_AND_RESULT = [
    {
        parser: parseHexRgbColorComponents,
        result: {
            alpha: false,
            mode: "rgb",
            notation: "hex"
        }
    },
    {
        parser: parseHexRgbaColorComponents,
        result: {
            alpha: true,
            mode: "rgb",
            notation: "hex"
        }
    },
    {
        parser: parseFunctionalRgbColorComponents,
        result: {
            alpha: false,
            mode: "rgb",
            notation: "func"
        }
    },
    {
        parser: parseFunctionalRgbaColorComponents,
        result: {
            alpha: true,
            mode: "rgb",
            notation: "func"
        }
    },
    {
        parser: parseFunctionalHslColorComponents,
        result: {
            alpha: false,
            mode: "hsl",
            notation: "func"
        }
    },
    {
        parser: parseHslaColorComponents,
        result: {
            alpha: true,
            mode: "hsl",
            notation: "func"
        }
    },
    {
        parser: parseObjectRgbColorComponents,
        result: {
            alpha: false,
            mode: "rgb",
            notation: "object"
        }
    },
    {
        parser: parseObjectRgbaColorComponents,
        result: {
            alpha: true,
            mode: "rgb",
            notation: "object"
        }
    }
];
function detectStringColor(text) {
    return PARSER_AND_RESULT.reduce((prev, { parser , result: detection  })=>{
        if (prev) return prev;
        return parser(text) ? detection : null;
    }, null);
}
function detectStringColorFormat(text, type = "int") {
    const r = detectStringColor(text);
    if (!r) return null;
    if (r.notation === "hex" && type !== "float") return Object.assign(Object.assign({}, r), {
        type: "int"
    });
    if (r.notation === "func") return Object.assign(Object.assign({}, r), {
        type: type
    });
    return null;
}
function createColorStringParser(type) {
    const parsers = [
        parseHexRgbColor,
        parseHexRgbaColor,
        parseFunctionalRgbColor,
        parseFunctionalRgbaColor,
        parseFunctionalHslColor,
        parseFunctionalHslaColor
    ];
    if (type === "int") parsers.push(createObjectRgbColorParser("int"), createObjectRgbaColorParser("int"));
    if (type === "float") parsers.push(createObjectRgbColorParser("float"), createObjectRgbaColorParser("float"));
    const parser = composeParsers(parsers);
    return (text)=>{
        const result = parser(text);
        return result ? mapColorType(result, type) : null;
    };
}
function readIntColorString(value) {
    const parser = createColorStringParser("int");
    if (typeof value !== "string") return IntColor.black();
    const result = parser(value);
    return result !== null && result !== void 0 ? result : IntColor.black();
}
function zerofill(comp) {
    const hex = constrainRange(Math.floor(comp), 0, 255).toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
}
function colorToHexRgbString(value, prefix = "#") {
    const hexes = removeAlphaComponent(value.getComponents("rgb")).map(zerofill).join("");
    return `${prefix}${hexes}`;
}
function colorToHexRgbaString(value, prefix = "#") {
    const rgbaComps = value.getComponents("rgb");
    const hexes = [
        rgbaComps[0],
        rgbaComps[1],
        rgbaComps[2],
        rgbaComps[3] * 255
    ].map(zerofill).join("");
    return `${prefix}${hexes}`;
}
function colorToFunctionalRgbString(value) {
    const formatter = createNumberFormatter(0);
    const ci = mapColorType(value, "int");
    const comps = removeAlphaComponent(ci.getComponents("rgb")).map((comp)=>formatter(comp));
    return `rgb(${comps.join(", ")})`;
}
function colorToFunctionalRgbaString(value) {
    const aFormatter = createNumberFormatter(2);
    const rgbFormatter = createNumberFormatter(0);
    const ci = mapColorType(value, "int");
    const comps = ci.getComponents("rgb").map((comp, index)=>{
        const formatter = index === 3 ? aFormatter : rgbFormatter;
        return formatter(comp);
    });
    return `rgba(${comps.join(", ")})`;
}
function colorToFunctionalHslString(value) {
    const formatters = [
        createNumberFormatter(0),
        formatPercentage,
        formatPercentage
    ];
    const ci = mapColorType(value, "int");
    const comps = removeAlphaComponent(ci.getComponents("hsl")).map((comp, index)=>formatters[index](comp));
    return `hsl(${comps.join(", ")})`;
}
function colorToFunctionalHslaString(value) {
    const formatters = [
        createNumberFormatter(0),
        formatPercentage,
        formatPercentage,
        createNumberFormatter(2)
    ];
    const ci = mapColorType(value, "int");
    const comps = ci.getComponents("hsl").map((comp, index)=>formatters[index](comp));
    return `hsla(${comps.join(", ")})`;
}
function colorToObjectRgbString(value, type) {
    const formatter = createNumberFormatter(type === "float" ? 2 : 0);
    const names = [
        "r",
        "g",
        "b"
    ];
    const cc = mapColorType(value, type);
    const comps = removeAlphaComponent(cc.getComponents("rgb")).map((comp, index)=>`${names[index]}: ${formatter(comp)}`);
    return `{${comps.join(", ")}}`;
}
function createObjectRgbColorFormatter(type) {
    return (value)=>colorToObjectRgbString(value, type);
}
function colorToObjectRgbaString(value, type) {
    const aFormatter = createNumberFormatter(2);
    const rgbFormatter = createNumberFormatter(type === "float" ? 2 : 0);
    const names = [
        "r",
        "g",
        "b",
        "a"
    ];
    const cc = mapColorType(value, type);
    const comps = cc.getComponents("rgb").map((comp, index)=>{
        const formatter = index === 3 ? aFormatter : rgbFormatter;
        return `${names[index]}: ${formatter(comp)}`;
    });
    return `{${comps.join(", ")}}`;
}
function createObjectRgbaColorFormatter(type) {
    return (value)=>colorToObjectRgbaString(value, type);
}
const FORMAT_AND_STRINGIFIERS = [
    {
        format: {
            alpha: false,
            mode: "rgb",
            notation: "hex",
            type: "int"
        },
        stringifier: colorToHexRgbString
    },
    {
        format: {
            alpha: true,
            mode: "rgb",
            notation: "hex",
            type: "int"
        },
        stringifier: colorToHexRgbaString
    },
    {
        format: {
            alpha: false,
            mode: "rgb",
            notation: "func",
            type: "int"
        },
        stringifier: colorToFunctionalRgbString
    },
    {
        format: {
            alpha: true,
            mode: "rgb",
            notation: "func",
            type: "int"
        },
        stringifier: colorToFunctionalRgbaString
    },
    {
        format: {
            alpha: false,
            mode: "hsl",
            notation: "func",
            type: "int"
        },
        stringifier: colorToFunctionalHslString
    },
    {
        format: {
            alpha: true,
            mode: "hsl",
            notation: "func",
            type: "int"
        },
        stringifier: colorToFunctionalHslaString
    },
    ...[
        "int",
        "float"
    ].reduce((prev, type)=>{
        return [
            ...prev,
            {
                format: {
                    alpha: false,
                    mode: "rgb",
                    notation: "object",
                    type: type
                },
                stringifier: createObjectRgbColorFormatter(type)
            },
            {
                format: {
                    alpha: true,
                    mode: "rgb",
                    notation: "object",
                    type: type
                },
                stringifier: createObjectRgbaColorFormatter(type)
            }
        ];
    }, [])
];
function findColorStringifier(format) {
    return FORMAT_AND_STRINGIFIERS.reduce((prev, fas)=>{
        if (prev) return prev;
        return equalsStringColorFormat(fas.format, format) ? fas.stringifier : null;
    }, null);
}
const cn$a = ClassName("apl");
class APaletteView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.value = config.value;
        this.value.emitter.on("change", this.onValueChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$a());
        config.viewProps.bindClassModifiers(this.element);
        config.viewProps.bindTabIndex(this.element);
        const barElem = doc.createElement("div");
        barElem.classList.add(cn$a("b"));
        this.element.appendChild(barElem);
        const colorElem = doc.createElement("div");
        colorElem.classList.add(cn$a("c"));
        barElem.appendChild(colorElem);
        this.colorElem_ = colorElem;
        const markerElem = doc.createElement("div");
        markerElem.classList.add(cn$a("m"));
        this.element.appendChild(markerElem);
        this.markerElem_ = markerElem;
        const previewElem = doc.createElement("div");
        previewElem.classList.add(cn$a("p"));
        this.markerElem_.appendChild(previewElem);
        this.previewElem_ = previewElem;
        this.update_();
    }
    update_() {
        const c = this.value.rawValue;
        const rgbaComps = c.getComponents("rgb");
        const leftColor = new IntColor([
            rgbaComps[0],
            rgbaComps[1],
            rgbaComps[2],
            0
        ], "rgb");
        const rightColor = new IntColor([
            rgbaComps[0],
            rgbaComps[1],
            rgbaComps[2],
            255
        ], "rgb");
        const gradientComps = [
            "to right",
            colorToFunctionalRgbaString(leftColor),
            colorToFunctionalRgbaString(rightColor)
        ];
        this.colorElem_.style.background = `linear-gradient(${gradientComps.join(",")})`;
        this.previewElem_.style.backgroundColor = colorToFunctionalRgbaString(c);
        const left = mapRange(rgbaComps[3], 0, 1, 0, 100);
        this.markerElem_.style.left = `${left}%`;
    }
    onValueChange_() {
        this.update_();
    }
}
class APaletteController {
    constructor(doc, config){
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onKeyUp_ = this.onKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new APaletteView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.element);
        this.ptHandler_.emitter.on("down", this.onPointerDown_);
        this.ptHandler_.emitter.on("move", this.onPointerMove_);
        this.ptHandler_.emitter.on("up", this.onPointerUp_);
        this.view.element.addEventListener("keydown", this.onKeyDown_);
        this.view.element.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        const alpha = d.point.x / d.bounds.width;
        const c = this.value.rawValue;
        const [h, s, v] = c.getComponents("hsv");
        this.value.setRawValue(new IntColor([
            h,
            s,
            v,
            alpha
        ], "hsv"), opts);
    }
    onPointerDown_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onKeyDown_(ev) {
        const step = getStepForKey(getKeyScaleForColor(true), getHorizontalStepKeys(ev));
        if (step === 0) return;
        const c = this.value.rawValue;
        const [h, s, v, a] = c.getComponents("hsv");
        this.value.setRawValue(new IntColor([
            h,
            s,
            v,
            a + step
        ], "hsv"), {
            forceEmit: false,
            last: false
        });
    }
    onKeyUp_(ev) {
        const step = getStepForKey(getKeyScaleForColor(true), getHorizontalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
const cn$9 = ClassName("coltxt");
function createModeSelectElement(doc) {
    const selectElem = doc.createElement("select");
    const items = [
        {
            text: "RGB",
            value: "rgb"
        },
        {
            text: "HSL",
            value: "hsl"
        },
        {
            text: "HSV",
            value: "hsv"
        },
        {
            text: "HEX",
            value: "hex"
        }
    ];
    selectElem.appendChild(items.reduce((frag, item)=>{
        const optElem = doc.createElement("option");
        optElem.textContent = item.text;
        optElem.value = item.value;
        frag.appendChild(optElem);
        return frag;
    }, doc.createDocumentFragment()));
    return selectElem;
}
class ColorTextsView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$9());
        config.viewProps.bindClassModifiers(this.element);
        const modeElem = doc.createElement("div");
        modeElem.classList.add(cn$9("m"));
        this.modeElem_ = createModeSelectElement(doc);
        this.modeElem_.classList.add(cn$9("ms"));
        modeElem.appendChild(this.modeSelectElement);
        config.viewProps.bindDisabled(this.modeElem_);
        const modeMarkerElem = doc.createElement("div");
        modeMarkerElem.classList.add(cn$9("mm"));
        modeMarkerElem.appendChild(createSvgIconElement(doc, "dropdown"));
        modeElem.appendChild(modeMarkerElem);
        this.element.appendChild(modeElem);
        const inputsElem = doc.createElement("div");
        inputsElem.classList.add(cn$9("w"));
        this.element.appendChild(inputsElem);
        this.inputsElem_ = inputsElem;
        this.inputViews_ = config.inputViews;
        this.applyInputViews_();
        bindValue(config.mode, (mode)=>{
            this.modeElem_.value = mode;
        });
    }
    get modeSelectElement() {
        return this.modeElem_;
    }
    get inputViews() {
        return this.inputViews_;
    }
    set inputViews(inputViews) {
        this.inputViews_ = inputViews;
        this.applyInputViews_();
    }
    applyInputViews_() {
        removeChildElements(this.inputsElem_);
        const doc = this.element.ownerDocument;
        this.inputViews_.forEach((v)=>{
            const compElem = doc.createElement("div");
            compElem.classList.add(cn$9("c"));
            compElem.appendChild(v.element);
            this.inputsElem_.appendChild(compElem);
        });
    }
}
function createFormatter$2(type) {
    return createNumberFormatter(type === "float" ? 2 : 0);
}
function createConstraint$7(mode, type, index) {
    const max = getColorMaxComponents(mode, type)[index];
    return new DefiniteRangeConstraint({
        min: 0,
        max: max
    });
}
function createComponentController(doc, config, index) {
    return new NumberTextController(doc, {
        arrayPosition: index === 0 ? "fst" : index === 2 ? "lst" : "mid",
        parser: config.parser,
        props: ValueMap.fromObject({
            formatter: createFormatter$2(config.colorType),
            keyScale: getKeyScaleForColor(false),
            pointerScale: config.colorType === "float" ? 0.01 : 1
        }),
        value: createValue(0, {
            constraint: createConstraint$7(config.colorMode, config.colorType, index)
        }),
        viewProps: config.viewProps
    });
}
function createComponentControllers(doc, config) {
    const cc = {
        colorMode: config.colorMode,
        colorType: config.colorType,
        parser: parseNumber,
        viewProps: config.viewProps
    };
    return [
        0,
        1,
        2
    ].map((i)=>{
        const c = createComponentController(doc, cc, i);
        connectValues({
            primary: config.value,
            secondary: c.value,
            forward (p) {
                const mc = mapColorType(p, config.colorType);
                return mc.getComponents(config.colorMode)[i];
            },
            backward (p, s) {
                const pickedMode = config.colorMode;
                const mc = mapColorType(p, config.colorType);
                const comps = mc.getComponents(pickedMode);
                comps[i] = s;
                const c = createColor(appendAlphaComponent(removeAlphaComponent(comps), comps[3]), pickedMode, config.colorType);
                return mapColorType(c, "int");
            }
        });
        return c;
    });
}
function createHexController(doc, config) {
    const c = new TextController(doc, {
        parser: createColorStringParser("int"),
        props: ValueMap.fromObject({
            formatter: colorToHexRgbString
        }),
        value: createValue(IntColor.black()),
        viewProps: config.viewProps
    });
    connectValues({
        primary: config.value,
        secondary: c.value,
        forward: (p)=>new IntColor(removeAlphaComponent(p.getComponents()), p.mode),
        backward: (p, s)=>new IntColor(appendAlphaComponent(removeAlphaComponent(s.getComponents(p.mode)), p.getComponents()[3]), p.mode)
    });
    return [
        c
    ];
}
function isColorMode(mode) {
    return mode !== "hex";
}
class ColorTextsController {
    constructor(doc, config){
        this.onModeSelectChange_ = this.onModeSelectChange_.bind(this);
        this.colorType_ = config.colorType;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.colorMode = createValue(this.value.rawValue.mode);
        this.ccs_ = this.createComponentControllers_(doc);
        this.view = new ColorTextsView(doc, {
            mode: this.colorMode,
            inputViews: [
                this.ccs_[0].view,
                this.ccs_[1].view,
                this.ccs_[2].view
            ],
            viewProps: this.viewProps
        });
        this.view.modeSelectElement.addEventListener("change", this.onModeSelectChange_);
    }
    createComponentControllers_(doc) {
        const mode = this.colorMode.rawValue;
        if (isColorMode(mode)) return createComponentControllers(doc, {
            colorMode: mode,
            colorType: this.colorType_,
            value: this.value,
            viewProps: this.viewProps
        });
        return createHexController(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
    }
    onModeSelectChange_(ev) {
        const selectElem = ev.currentTarget;
        this.colorMode.rawValue = selectElem.value;
        this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument);
        this.view.inputViews = this.ccs_.map((cc)=>cc.view);
    }
}
const cn$8 = ClassName("hpl");
class HPaletteView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.value = config.value;
        this.value.emitter.on("change", this.onValueChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$8());
        config.viewProps.bindClassModifiers(this.element);
        config.viewProps.bindTabIndex(this.element);
        const colorElem = doc.createElement("div");
        colorElem.classList.add(cn$8("c"));
        this.element.appendChild(colorElem);
        const markerElem = doc.createElement("div");
        markerElem.classList.add(cn$8("m"));
        this.element.appendChild(markerElem);
        this.markerElem_ = markerElem;
        this.update_();
    }
    update_() {
        const c = this.value.rawValue;
        const [h] = c.getComponents("hsv");
        this.markerElem_.style.backgroundColor = colorToFunctionalRgbString(new IntColor([
            h,
            100,
            100
        ], "hsv"));
        const left = mapRange(h, 0, 360, 0, 100);
        this.markerElem_.style.left = `${left}%`;
    }
    onValueChange_() {
        this.update_();
    }
}
class HPaletteController {
    constructor(doc, config){
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onKeyUp_ = this.onKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new HPaletteView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.element);
        this.ptHandler_.emitter.on("down", this.onPointerDown_);
        this.ptHandler_.emitter.on("move", this.onPointerMove_);
        this.ptHandler_.emitter.on("up", this.onPointerUp_);
        this.view.element.addEventListener("keydown", this.onKeyDown_);
        this.view.element.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        const hue = mapRange(constrainRange(d.point.x, 0, d.bounds.width), 0, d.bounds.width, 0, 360);
        const c = this.value.rawValue;
        const [, s, v, a] = c.getComponents("hsv");
        this.value.setRawValue(new IntColor([
            hue,
            s,
            v,
            a
        ], "hsv"), opts);
    }
    onPointerDown_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onKeyDown_(ev) {
        const step = getStepForKey(getKeyScaleForColor(false), getHorizontalStepKeys(ev));
        if (step === 0) return;
        const c = this.value.rawValue;
        const [h, s, v, a] = c.getComponents("hsv");
        this.value.setRawValue(new IntColor([
            h + step,
            s,
            v,
            a
        ], "hsv"), {
            forceEmit: false,
            last: false
        });
    }
    onKeyUp_(ev) {
        const step = getStepForKey(getKeyScaleForColor(false), getHorizontalStepKeys(ev));
        if (step === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
const cn$7 = ClassName("svp");
const CANVAS_RESOL = 64;
class SvPaletteView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.value = config.value;
        this.value.emitter.on("change", this.onValueChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$7());
        config.viewProps.bindClassModifiers(this.element);
        config.viewProps.bindTabIndex(this.element);
        const canvasElem = doc.createElement("canvas");
        canvasElem.height = CANVAS_RESOL;
        canvasElem.width = CANVAS_RESOL;
        canvasElem.classList.add(cn$7("c"));
        this.element.appendChild(canvasElem);
        this.canvasElement = canvasElem;
        const markerElem = doc.createElement("div");
        markerElem.classList.add(cn$7("m"));
        this.element.appendChild(markerElem);
        this.markerElem_ = markerElem;
        this.update_();
    }
    update_() {
        const ctx = getCanvasContext(this.canvasElement);
        if (!ctx) return;
        const c = this.value.rawValue;
        const hsvComps = c.getComponents("hsv");
        const width = this.canvasElement.width;
        const height = this.canvasElement.height;
        const imgData = ctx.getImageData(0, 0, width, height);
        const data = imgData.data;
        for(let iy = 0; iy < height; iy++)for(let ix = 0; ix < width; ix++){
            const s = mapRange(ix, 0, width, 0, 100);
            const v = mapRange(iy, 0, height, 100, 0);
            const rgbComps = hsvToRgbInt(hsvComps[0], s, v);
            const i = (iy * width + ix) * 4;
            data[i] = rgbComps[0];
            data[i + 1] = rgbComps[1];
            data[i + 2] = rgbComps[2];
            data[i + 3] = 255;
        }
        ctx.putImageData(imgData, 0, 0);
        const left = mapRange(hsvComps[1], 0, 100, 0, 100);
        this.markerElem_.style.left = `${left}%`;
        const top = mapRange(hsvComps[2], 0, 100, 100, 0);
        this.markerElem_.style.top = `${top}%`;
    }
    onValueChange_() {
        this.update_();
    }
}
class SvPaletteController {
    constructor(doc, config){
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onKeyUp_ = this.onKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new SvPaletteView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.element);
        this.ptHandler_.emitter.on("down", this.onPointerDown_);
        this.ptHandler_.emitter.on("move", this.onPointerMove_);
        this.ptHandler_.emitter.on("up", this.onPointerUp_);
        this.view.element.addEventListener("keydown", this.onKeyDown_);
        this.view.element.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        const saturation = mapRange(d.point.x, 0, d.bounds.width, 0, 100);
        const value = mapRange(d.point.y, 0, d.bounds.height, 100, 0);
        const [h, , , a] = this.value.rawValue.getComponents("hsv");
        this.value.setRawValue(new IntColor([
            h,
            saturation,
            value,
            a
        ], "hsv"), opts);
    }
    onPointerDown_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onKeyDown_(ev) {
        if (isArrowKey(ev.key)) ev.preventDefault();
        const [h, s, v, a] = this.value.rawValue.getComponents("hsv");
        const keyScale = getKeyScaleForColor(false);
        const ds = getStepForKey(keyScale, getHorizontalStepKeys(ev));
        const dv = getStepForKey(keyScale, getVerticalStepKeys(ev));
        if (ds === 0 && dv === 0) return;
        this.value.setRawValue(new IntColor([
            h,
            s + ds,
            v + dv,
            a
        ], "hsv"), {
            forceEmit: false,
            last: false
        });
    }
    onKeyUp_(ev) {
        const keyScale = getKeyScaleForColor(false);
        const ds = getStepForKey(keyScale, getHorizontalStepKeys(ev));
        const dv = getStepForKey(keyScale, getVerticalStepKeys(ev));
        if (ds === 0 && dv === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
class ColorPickerController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.hPaletteC_ = new HPaletteController(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.svPaletteC_ = new SvPaletteController(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.alphaIcs_ = config.supportsAlpha ? {
            palette: new APaletteController(doc, {
                value: this.value,
                viewProps: this.viewProps
            }),
            text: new NumberTextController(doc, {
                parser: parseNumber,
                props: ValueMap.fromObject({
                    pointerScale: 0.01,
                    keyScale: 0.1,
                    formatter: createNumberFormatter(2)
                }),
                value: createValue(0, {
                    constraint: new DefiniteRangeConstraint({
                        min: 0,
                        max: 1
                    })
                }),
                viewProps: this.viewProps
            })
        } : null;
        if (this.alphaIcs_) connectValues({
            primary: this.value,
            secondary: this.alphaIcs_.text.value,
            forward: (p)=>p.getComponents()[3],
            backward: (p, s)=>{
                const comps = p.getComponents();
                comps[3] = s;
                return new IntColor(comps, p.mode);
            }
        });
        this.textsC_ = new ColorTextsController(doc, {
            colorType: config.colorType,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view = new ColorPickerView(doc, {
            alphaViews: this.alphaIcs_ ? {
                palette: this.alphaIcs_.palette.view,
                text: this.alphaIcs_.text.view
            } : null,
            hPaletteView: this.hPaletteC_.view,
            supportsAlpha: config.supportsAlpha,
            svPaletteView: this.svPaletteC_.view,
            textsView: this.textsC_.view,
            viewProps: this.viewProps
        });
    }
    get textsController() {
        return this.textsC_;
    }
}
const cn$6 = ClassName("colsw");
class ColorSwatchView {
    constructor(doc, config){
        this.onValueChange_ = this.onValueChange_.bind(this);
        config.value.emitter.on("change", this.onValueChange_);
        this.value = config.value;
        this.element = doc.createElement("div");
        this.element.classList.add(cn$6());
        config.viewProps.bindClassModifiers(this.element);
        const swatchElem = doc.createElement("div");
        swatchElem.classList.add(cn$6("sw"));
        this.element.appendChild(swatchElem);
        this.swatchElem_ = swatchElem;
        const buttonElem = doc.createElement("button");
        buttonElem.classList.add(cn$6("b"));
        config.viewProps.bindDisabled(buttonElem);
        this.element.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        this.update_();
    }
    update_() {
        const value = this.value.rawValue;
        this.swatchElem_.style.backgroundColor = colorToHexRgbaString(value);
    }
    onValueChange_() {
        this.update_();
    }
}
class ColorSwatchController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new ColorSwatchView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
    }
}
class ColorController {
    constructor(doc, config){
        this.onButtonBlur_ = this.onButtonBlur_.bind(this);
        this.onButtonClick_ = this.onButtonClick_.bind(this);
        this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
        this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.foldable_ = Foldable.create(config.expanded);
        this.swatchC_ = new ColorSwatchController(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        const buttonElem = this.swatchC_.view.buttonElement;
        buttonElem.addEventListener("blur", this.onButtonBlur_);
        buttonElem.addEventListener("click", this.onButtonClick_);
        this.textC_ = new TextController(doc, {
            parser: config.parser,
            props: ValueMap.fromObject({
                formatter: config.formatter
            }),
            value: this.value,
            viewProps: this.viewProps
        });
        this.view = new ColorView(doc, {
            foldable: this.foldable_,
            pickerLayout: config.pickerLayout
        });
        this.view.swatchElement.appendChild(this.swatchC_.view.element);
        this.view.textElement.appendChild(this.textC_.view.element);
        this.popC_ = config.pickerLayout === "popup" ? new PopupController(doc, {
            viewProps: this.viewProps
        }) : null;
        const pickerC = new ColorPickerController(doc, {
            colorType: config.colorType,
            supportsAlpha: config.supportsAlpha,
            value: this.value,
            viewProps: this.viewProps
        });
        pickerC.view.allFocusableElements.forEach((elem)=>{
            elem.addEventListener("blur", this.onPopupChildBlur_);
            elem.addEventListener("keydown", this.onPopupChildKeydown_);
        });
        this.pickerC_ = pickerC;
        if (this.popC_) {
            this.view.element.appendChild(this.popC_.view.element);
            this.popC_.view.element.appendChild(pickerC.view.element);
            connectValues({
                primary: this.foldable_.value("expanded"),
                secondary: this.popC_.shows,
                forward: (p)=>p,
                backward: (_, s)=>s
            });
        } else if (this.view.pickerElement) {
            this.view.pickerElement.appendChild(this.pickerC_.view.element);
            bindFoldable(this.foldable_, this.view.pickerElement);
        }
    }
    get textController() {
        return this.textC_;
    }
    onButtonBlur_(e) {
        if (!this.popC_) return;
        const elem = this.view.element;
        const nextTarget = forceCast(e.relatedTarget);
        if (!nextTarget || !elem.contains(nextTarget)) this.popC_.shows.rawValue = false;
    }
    onButtonClick_() {
        this.foldable_.set("expanded", !this.foldable_.get("expanded"));
        if (this.foldable_.get("expanded")) this.pickerC_.view.allFocusableElements[0].focus();
    }
    onPopupChildBlur_(ev) {
        if (!this.popC_) return;
        const elem = this.popC_.view.element;
        const nextTarget = findNextTarget(ev);
        if (nextTarget && elem.contains(nextTarget)) return;
        if (nextTarget && nextTarget === this.swatchC_.view.buttonElement && !supportsTouch(elem.ownerDocument)) return;
        this.popC_.shows.rawValue = false;
    }
    onPopupChildKeydown_(ev) {
        if (this.popC_) {
            if (ev.key === "Escape") this.popC_.shows.rawValue = false;
        } else if (this.view.pickerElement) {
            if (ev.key === "Escape") this.swatchC_.view.buttonElement.focus();
        }
    }
}
function colorToRgbNumber(value) {
    return removeAlphaComponent(value.getComponents("rgb")).reduce((result, comp)=>{
        return result << 8 | Math.floor(comp) & 0xff;
    }, 0);
}
function colorToRgbaNumber(value) {
    return value.getComponents("rgb").reduce((result, comp, index)=>{
        const hex = Math.floor(index === 3 ? comp * 255 : comp) & 0xff;
        return result << 8 | hex;
    }, 0) >>> 0;
}
function numberToRgbColor(num) {
    return new IntColor([
        num >> 16 & 0xff,
        num >> 8 & 0xff,
        num & 0xff
    ], "rgb");
}
function numberToRgbaColor(num) {
    return new IntColor([
        num >> 24 & 0xff,
        num >> 16 & 0xff,
        num >> 8 & 0xff,
        mapRange(num & 0xff, 0, 255, 0, 1)
    ], "rgb");
}
function colorFromRgbNumber(value) {
    if (typeof value !== "number") return IntColor.black();
    return numberToRgbColor(value);
}
function colorFromRgbaNumber(value) {
    if (typeof value !== "number") return IntColor.black();
    return numberToRgbaColor(value);
}
function isRgbColorComponent(obj, key) {
    if (typeof obj !== "object" || isEmpty(obj)) return false;
    return key in obj && typeof obj[key] === "number";
}
function isRgbColorObject(obj) {
    return isRgbColorComponent(obj, "r") && isRgbColorComponent(obj, "g") && isRgbColorComponent(obj, "b");
}
function isRgbaColorObject(obj) {
    return isRgbColorObject(obj) && isRgbColorComponent(obj, "a");
}
function isColorObject(obj) {
    return isRgbColorObject(obj);
}
function equalsColor(v1, v2) {
    if (v1.mode !== v2.mode) return false;
    if (v1.type !== v2.type) return false;
    const comps1 = v1.getComponents();
    const comps2 = v2.getComponents();
    for(let i = 0; i < comps1.length; i++){
        if (comps1[i] !== comps2[i]) return false;
    }
    return true;
}
function createColorComponentsFromRgbObject(obj) {
    return "a" in obj ? [
        obj.r,
        obj.g,
        obj.b,
        obj.a
    ] : [
        obj.r,
        obj.g,
        obj.b
    ];
}
function createColorStringWriter(format) {
    const stringify = findColorStringifier(format);
    return stringify ? (target, value)=>{
        writePrimitive(target, stringify(value));
    } : null;
}
function createColorNumberWriter(supportsAlpha) {
    const colorToNumber = supportsAlpha ? colorToRgbaNumber : colorToRgbNumber;
    return (target, value)=>{
        writePrimitive(target, colorToNumber(value));
    };
}
function writeRgbaColorObject(target, value, type) {
    const cc = mapColorType(value, type);
    const obj = cc.toRgbaObject();
    target.writeProperty("r", obj.r);
    target.writeProperty("g", obj.g);
    target.writeProperty("b", obj.b);
    target.writeProperty("a", obj.a);
}
function writeRgbColorObject(target, value, type) {
    const cc = mapColorType(value, type);
    const obj = cc.toRgbaObject();
    target.writeProperty("r", obj.r);
    target.writeProperty("g", obj.g);
    target.writeProperty("b", obj.b);
}
function createColorObjectWriter(supportsAlpha, type) {
    return (target, inValue)=>{
        if (supportsAlpha) writeRgbaColorObject(target, inValue, type);
        else writeRgbColorObject(target, inValue, type);
    };
}
function shouldSupportAlpha$1(inputParams) {
    var _a;
    if ((_a = inputParams === null || inputParams === void 0 ? void 0 : inputParams.color) === null || _a === void 0 ? void 0 : _a.alpha) return true;
    return false;
}
function createFormatter$1(supportsAlpha) {
    return supportsAlpha ? (v)=>colorToHexRgbaString(v, "0x") : (v)=>colorToHexRgbString(v, "0x");
}
function isForColor(params) {
    if ("color" in params) return true;
    if (params.view === "color") return true;
    return false;
}
createPlugin({
    id: "input-color-number",
    type: "input",
    accept: (value, params)=>{
        if (typeof value !== "number") return null;
        if (!isForColor(params)) return null;
        const result = parseColorInputParams(params);
        return result ? {
            initialValue: value,
            params: Object.assign(Object.assign({}, result), {
                supportsAlpha: shouldSupportAlpha$1(params)
            })
        } : null;
    },
    binding: {
        reader: (args)=>{
            return args.params.supportsAlpha ? colorFromRgbaNumber : colorFromRgbNumber;
        },
        equals: equalsColor,
        writer: (args)=>{
            return createColorNumberWriter(args.params.supportsAlpha);
        }
    },
    controller: (args)=>{
        var _a, _b;
        return new ColorController(args.document, {
            colorType: "int",
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            formatter: createFormatter$1(args.params.supportsAlpha),
            parser: createColorStringParser("int"),
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : "popup",
            supportsAlpha: args.params.supportsAlpha,
            value: args.value,
            viewProps: args.viewProps
        });
    }
});
function colorFromObject(value, type) {
    if (!isColorObject(value)) return mapColorType(IntColor.black(), type);
    if (type === "int") {
        const comps = createColorComponentsFromRgbObject(value);
        return new IntColor(comps, "rgb");
    }
    if (type === "float") {
        const comps = createColorComponentsFromRgbObject(value);
        return new FloatColor(comps, "rgb");
    }
    return mapColorType(IntColor.black(), "int");
}
function shouldSupportAlpha(initialValue) {
    return isRgbaColorObject(initialValue);
}
function createColorObjectBindingReader(type) {
    return (value)=>{
        const c = colorFromObject(value, type);
        return mapColorType(c, "int");
    };
}
function createColorObjectFormatter(supportsAlpha, type) {
    return (value)=>{
        if (supportsAlpha) return colorToObjectRgbaString(value, type);
        return colorToObjectRgbString(value, type);
    };
}
createPlugin({
    id: "input-color-object",
    type: "input",
    accept: (value, params)=>{
        var _a;
        if (!isColorObject(value)) return null;
        const result = parseColorInputParams(params);
        return result ? {
            initialValue: value,
            params: Object.assign(Object.assign({}, result), {
                colorType: (_a = extractColorType(params)) !== null && _a !== void 0 ? _a : "int"
            })
        } : null;
    },
    binding: {
        reader: (args)=>createColorObjectBindingReader(args.params.colorType),
        equals: equalsColor,
        writer: (args)=>createColorObjectWriter(shouldSupportAlpha(args.initialValue), args.params.colorType)
    },
    controller: (args)=>{
        var _a, _b;
        const supportsAlpha = isRgbaColorObject(args.initialValue);
        return new ColorController(args.document, {
            colorType: args.params.colorType,
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            formatter: createColorObjectFormatter(supportsAlpha, args.params.colorType),
            parser: createColorStringParser("int"),
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : "popup",
            supportsAlpha: supportsAlpha,
            value: args.value,
            viewProps: args.viewProps
        });
    }
});
createPlugin({
    id: "input-color-string",
    type: "input",
    accept: (value, params)=>{
        if (typeof value !== "string") return null;
        if (params.view === "text") return null;
        const format = detectStringColorFormat(value, extractColorType(params));
        if (!format) return null;
        const stringifier = findColorStringifier(format);
        if (!stringifier) return null;
        const result = parseColorInputParams(params);
        return result ? {
            initialValue: value,
            params: Object.assign(Object.assign({}, result), {
                format: format,
                stringifier: stringifier
            })
        } : null;
    },
    binding: {
        reader: ()=>readIntColorString,
        equals: equalsColor,
        writer: (args)=>{
            const writer = createColorStringWriter(args.params.format);
            if (!writer) throw TpError.notBindable();
            return writer;
        }
    },
    controller: (args)=>{
        var _a, _b;
        return new ColorController(args.document, {
            colorType: args.params.format.type,
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            formatter: args.params.stringifier,
            parser: createColorStringParser("int"),
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : "popup",
            supportsAlpha: args.params.format.alpha,
            value: args.value,
            viewProps: args.viewProps
        });
    }
});
class PointNdConstraint {
    constructor(config){
        this.components = config.components;
        this.asm_ = config.assembly;
    }
    constrain(value) {
        const comps = this.asm_.toComponents(value).map((comp, index)=>{
            var _a, _b;
            return (_b = (_a = this.components[index]) === null || _a === void 0 ? void 0 : _a.constrain(comp)) !== null && _b !== void 0 ? _b : comp;
        });
        return this.asm_.fromComponents(comps);
    }
}
const cn$5 = ClassName("pndtxt");
class PointNdTextView {
    constructor(doc, config){
        this.textViews = config.textViews;
        this.element = doc.createElement("div");
        this.element.classList.add(cn$5());
        this.textViews.forEach((v)=>{
            const axisElem = doc.createElement("div");
            axisElem.classList.add(cn$5("a"));
            axisElem.appendChild(v.element);
            this.element.appendChild(axisElem);
        });
    }
}
function createAxisController(doc, config, index) {
    return new NumberTextController(doc, {
        arrayPosition: index === 0 ? "fst" : index === config.axes.length - 1 ? "lst" : "mid",
        parser: config.parser,
        props: config.axes[index].textProps,
        value: createValue(0, {
            constraint: config.axes[index].constraint
        }),
        viewProps: config.viewProps
    });
}
class PointNdTextController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.acs_ = config.axes.map((_, index)=>createAxisController(doc, config, index));
        this.acs_.forEach((c, index)=>{
            connectValues({
                primary: this.value,
                secondary: c.value,
                forward: (p)=>config.assembly.toComponents(p)[index],
                backward: (p, s)=>{
                    const comps = config.assembly.toComponents(p);
                    comps[index] = s;
                    return config.assembly.fromComponents(comps);
                }
            });
        });
        this.view = new PointNdTextView(doc, {
            textViews: this.acs_.map((ac)=>ac.view)
        });
    }
    get textControllers() {
        return this.acs_;
    }
}
class SliderInputBindingApi extends BindingApi {
    get max() {
        return this.controller.valueController.sliderController.props.get("max");
    }
    set max(max) {
        this.controller.valueController.sliderController.props.set("max", max);
    }
    get min() {
        return this.controller.valueController.sliderController.props.get("min");
    }
    set min(max) {
        this.controller.valueController.sliderController.props.set("min", max);
    }
}
function createConstraint$6(params, initialValue) {
    const constraints = [];
    const sc = createStepConstraint(params, initialValue);
    if (sc) constraints.push(sc);
    const rc = createRangeConstraint(params);
    if (rc) constraints.push(rc);
    const lc = createListConstraint(params.options);
    if (lc) constraints.push(lc);
    return new CompositeConstraint(constraints);
}
createPlugin({
    id: "input-number",
    type: "input",
    accept: (value, params)=>{
        if (typeof value !== "number") return null;
        const result = parseRecord(params, (p)=>Object.assign(Object.assign({}, createNumberTextInputParamsParser(p)), {
                options: p.optional.custom(parseListOptions),
                readonly: p.optional.constant(false)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>numberFromUnknown,
        constraint: (args)=>createConstraint$6(args.params, args.initialValue),
        writer: (_args)=>writePrimitive
    },
    controller: (args)=>{
        const value = args.value;
        const c = args.constraint;
        const lc = c && findConstraint(c, ListConstraint);
        if (lc) return new ListController(args.document, {
            props: new ValueMap({
                options: lc.values.value("options")
            }),
            value: value,
            viewProps: args.viewProps
        });
        const textPropsObj = createNumberTextPropsObject(args.params, value.rawValue);
        const drc = c && findConstraint(c, DefiniteRangeConstraint);
        if (drc) return new SliderTextController(args.document, Object.assign(Object.assign({}, createSliderTextProps(Object.assign(Object.assign({}, textPropsObj), {
            keyScale: createValue(textPropsObj.keyScale),
            max: drc.values.value("max"),
            min: drc.values.value("min")
        }))), {
            parser: parseNumber,
            value: value,
            viewProps: args.viewProps
        }));
        return new NumberTextController(args.document, {
            parser: parseNumber,
            props: ValueMap.fromObject(textPropsObj),
            value: value,
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (typeof args.controller.value.rawValue !== "number") return null;
        if (args.controller.valueController instanceof SliderTextController) return new SliderInputBindingApi(args.controller);
        if (args.controller.valueController instanceof ListController) return new ListInputBindingApi(args.controller);
        return null;
    }
});
class Point2d {
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
    getComponents() {
        return [
            this.x,
            this.y
        ];
    }
    static isObject(obj) {
        if (isEmpty(obj)) return false;
        const x = obj.x;
        const y = obj.y;
        if (typeof x !== "number" || typeof y !== "number") return false;
        return true;
    }
    static equals(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y;
    }
    toObject() {
        return {
            x: this.x,
            y: this.y
        };
    }
}
const Point2dAssembly = {
    toComponents: (p)=>p.getComponents(),
    fromComponents: (comps)=>new Point2d(...comps)
};
const cn$4 = ClassName("p2d");
class Point2dView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(cn$4());
        config.viewProps.bindClassModifiers(this.element);
        bindValue(config.expanded, valueToClassName(this.element, cn$4(undefined, "expanded")));
        const headElem = doc.createElement("div");
        headElem.classList.add(cn$4("h"));
        this.element.appendChild(headElem);
        const buttonElem = doc.createElement("button");
        buttonElem.classList.add(cn$4("b"));
        buttonElem.appendChild(createSvgIconElement(doc, "p2dpad"));
        config.viewProps.bindDisabled(buttonElem);
        headElem.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const textElem = doc.createElement("div");
        textElem.classList.add(cn$4("t"));
        headElem.appendChild(textElem);
        this.textElement = textElem;
        if (config.pickerLayout === "inline") {
            const pickerElem = doc.createElement("div");
            pickerElem.classList.add(cn$4("p"));
            this.element.appendChild(pickerElem);
            this.pickerElement = pickerElem;
        } else this.pickerElement = null;
    }
}
const cn$3 = ClassName("p2dp");
class Point2dPickerView {
    constructor(doc, config){
        this.onFoldableChange_ = this.onFoldableChange_.bind(this);
        this.onPropsChange_ = this.onPropsChange_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.props_ = config.props;
        this.props_.emitter.on("change", this.onPropsChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(cn$3());
        if (config.layout === "popup") this.element.classList.add(cn$3(undefined, "p"));
        config.viewProps.bindClassModifiers(this.element);
        const padElem = doc.createElement("div");
        padElem.classList.add(cn$3("p"));
        config.viewProps.bindTabIndex(padElem);
        this.element.appendChild(padElem);
        this.padElement = padElem;
        const svgElem = doc.createElementNS(SVG_NS, "svg");
        svgElem.classList.add(cn$3("g"));
        this.padElement.appendChild(svgElem);
        this.svgElem_ = svgElem;
        const xAxisElem = doc.createElementNS(SVG_NS, "line");
        xAxisElem.classList.add(cn$3("ax"));
        xAxisElem.setAttributeNS(null, "x1", "0");
        xAxisElem.setAttributeNS(null, "y1", "50%");
        xAxisElem.setAttributeNS(null, "x2", "100%");
        xAxisElem.setAttributeNS(null, "y2", "50%");
        this.svgElem_.appendChild(xAxisElem);
        const yAxisElem = doc.createElementNS(SVG_NS, "line");
        yAxisElem.classList.add(cn$3("ax"));
        yAxisElem.setAttributeNS(null, "x1", "50%");
        yAxisElem.setAttributeNS(null, "y1", "0");
        yAxisElem.setAttributeNS(null, "x2", "50%");
        yAxisElem.setAttributeNS(null, "y2", "100%");
        this.svgElem_.appendChild(yAxisElem);
        const lineElem = doc.createElementNS(SVG_NS, "line");
        lineElem.classList.add(cn$3("l"));
        lineElem.setAttributeNS(null, "x1", "50%");
        lineElem.setAttributeNS(null, "y1", "50%");
        this.svgElem_.appendChild(lineElem);
        this.lineElem_ = lineElem;
        const markerElem = doc.createElement("div");
        markerElem.classList.add(cn$3("m"));
        this.padElement.appendChild(markerElem);
        this.markerElem_ = markerElem;
        config.value.emitter.on("change", this.onValueChange_);
        this.value = config.value;
        this.update_();
    }
    get allFocusableElements() {
        return [
            this.padElement
        ];
    }
    update_() {
        const [x, y] = this.value.rawValue.getComponents();
        const max = this.props_.get("max");
        const px = mapRange(x, -max, +max, 0, 100);
        const py = mapRange(y, -max, +max, 0, 100);
        const ipy = this.props_.get("invertsY") ? 100 - py : py;
        this.lineElem_.setAttributeNS(null, "x2", `${px}%`);
        this.lineElem_.setAttributeNS(null, "y2", `${ipy}%`);
        this.markerElem_.style.left = `${px}%`;
        this.markerElem_.style.top = `${ipy}%`;
    }
    onValueChange_() {
        this.update_();
    }
    onPropsChange_() {
        this.update_();
    }
    onFoldableChange_() {
        this.update_();
    }
}
function computeOffset(ev, keyScales, invertsY) {
    return [
        getStepForKey(keyScales[0], getHorizontalStepKeys(ev)),
        getStepForKey(keyScales[1], getVerticalStepKeys(ev)) * (invertsY ? 1 : -1)
    ];
}
class Point2dPickerController {
    constructor(doc, config){
        this.onPadKeyDown_ = this.onPadKeyDown_.bind(this);
        this.onPadKeyUp_ = this.onPadKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.props = config.props;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new Point2dPickerView(doc, {
            layout: config.layout,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        this.ptHandler_ = new PointerHandler(this.view.padElement);
        this.ptHandler_.emitter.on("down", this.onPointerDown_);
        this.ptHandler_.emitter.on("move", this.onPointerMove_);
        this.ptHandler_.emitter.on("up", this.onPointerUp_);
        this.view.padElement.addEventListener("keydown", this.onPadKeyDown_);
        this.view.padElement.addEventListener("keyup", this.onPadKeyUp_);
    }
    handlePointerEvent_(d, opts) {
        if (!d.point) return;
        const max = this.props.get("max");
        const px = mapRange(d.point.x, 0, d.bounds.width, -max, +max);
        const py = mapRange(this.props.get("invertsY") ? d.bounds.height - d.point.y : d.point.y, 0, d.bounds.height, -max, +max);
        this.value.setRawValue(new Point2d(px, py), opts);
    }
    onPointerDown_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerMove_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.handlePointerEvent_(ev.data, {
            forceEmit: true,
            last: true
        });
    }
    onPadKeyDown_(ev) {
        if (isArrowKey(ev.key)) ev.preventDefault();
        const [dx, dy] = computeOffset(ev, [
            this.props.get("xKeyScale"),
            this.props.get("yKeyScale")
        ], this.props.get("invertsY"));
        if (dx === 0 && dy === 0) return;
        this.value.setRawValue(new Point2d(this.value.rawValue.x + dx, this.value.rawValue.y + dy), {
            forceEmit: false,
            last: false
        });
    }
    onPadKeyUp_(ev) {
        const [dx, dy] = computeOffset(ev, [
            this.props.get("xKeyScale"),
            this.props.get("yKeyScale")
        ], this.props.get("invertsY"));
        if (dx === 0 && dy === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
class Point2dController {
    constructor(doc, config){
        var _a, _b;
        this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
        this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
        this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this);
        this.onPadButtonClick_ = this.onPadButtonClick_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.foldable_ = Foldable.create(config.expanded);
        this.popC_ = config.pickerLayout === "popup" ? new PopupController(doc, {
            viewProps: this.viewProps
        }) : null;
        const padC = new Point2dPickerController(doc, {
            layout: config.pickerLayout,
            props: new ValueMap({
                invertsY: createValue(config.invertsY),
                max: createValue(config.max),
                xKeyScale: config.axes[0].textProps.value("keyScale"),
                yKeyScale: config.axes[1].textProps.value("keyScale")
            }),
            value: this.value,
            viewProps: this.viewProps
        });
        padC.view.allFocusableElements.forEach((elem)=>{
            elem.addEventListener("blur", this.onPopupChildBlur_);
            elem.addEventListener("keydown", this.onPopupChildKeydown_);
        });
        this.pickerC_ = padC;
        this.textC_ = new PointNdTextController(doc, {
            assembly: Point2dAssembly,
            axes: config.axes,
            parser: config.parser,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view = new Point2dView(doc, {
            expanded: this.foldable_.value("expanded"),
            pickerLayout: config.pickerLayout,
            viewProps: this.viewProps
        });
        this.view.textElement.appendChild(this.textC_.view.element);
        (_a = this.view.buttonElement) === null || _a === void 0 || _a.addEventListener("blur", this.onPadButtonBlur_);
        (_b = this.view.buttonElement) === null || _b === void 0 || _b.addEventListener("click", this.onPadButtonClick_);
        if (this.popC_) {
            this.view.element.appendChild(this.popC_.view.element);
            this.popC_.view.element.appendChild(this.pickerC_.view.element);
            connectValues({
                primary: this.foldable_.value("expanded"),
                secondary: this.popC_.shows,
                forward: (p)=>p,
                backward: (_, s)=>s
            });
        } else if (this.view.pickerElement) {
            this.view.pickerElement.appendChild(this.pickerC_.view.element);
            bindFoldable(this.foldable_, this.view.pickerElement);
        }
    }
    get textController() {
        return this.textC_;
    }
    onPadButtonBlur_(e) {
        if (!this.popC_) return;
        const elem = this.view.element;
        const nextTarget = forceCast(e.relatedTarget);
        if (!nextTarget || !elem.contains(nextTarget)) this.popC_.shows.rawValue = false;
    }
    onPadButtonClick_() {
        this.foldable_.set("expanded", !this.foldable_.get("expanded"));
        if (this.foldable_.get("expanded")) this.pickerC_.view.allFocusableElements[0].focus();
    }
    onPopupChildBlur_(ev) {
        if (!this.popC_) return;
        const elem = this.popC_.view.element;
        const nextTarget = findNextTarget(ev);
        if (nextTarget && elem.contains(nextTarget)) return;
        if (nextTarget && nextTarget === this.view.buttonElement && !supportsTouch(elem.ownerDocument)) return;
        this.popC_.shows.rawValue = false;
    }
    onPopupChildKeydown_(ev) {
        if (this.popC_) {
            if (ev.key === "Escape") this.popC_.shows.rawValue = false;
        } else if (this.view.pickerElement) {
            if (ev.key === "Escape") this.view.buttonElement.focus();
        }
    }
}
function point2dFromUnknown(value) {
    return Point2d.isObject(value) ? new Point2d(value.x, value.y) : new Point2d();
}
function writePoint2d(target, value) {
    target.writeProperty("x", value.x);
    target.writeProperty("y", value.y);
}
function createConstraint$5(params, initialValue) {
    return new PointNdConstraint({
        assembly: Point2dAssembly,
        components: [
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.x), initialValue.x),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.y), initialValue.y)
        ]
    });
}
function getSuitableMaxDimensionValue(params, rawValue) {
    var _a, _b;
    if (!isEmpty(params.min) || !isEmpty(params.max)) return Math.max(Math.abs((_a = params.min) !== null && _a !== void 0 ? _a : 0), Math.abs((_b = params.max) !== null && _b !== void 0 ? _b : 0));
    const step = getSuitableKeyScale(params);
    return Math.max(Math.abs(step) * 10, Math.abs(rawValue) * 10);
}
function getSuitableMax(params, initialValue) {
    var _a, _b;
    const xr = getSuitableMaxDimensionValue(deepMerge(params, (_a = params.x) !== null && _a !== void 0 ? _a : {}), initialValue.x);
    const yr = getSuitableMaxDimensionValue(deepMerge(params, (_b = params.y) !== null && _b !== void 0 ? _b : {}), initialValue.y);
    return Math.max(xr, yr);
}
function shouldInvertY(params) {
    if (!("y" in params)) return false;
    const yParams = params.y;
    if (!yParams) return false;
    return "inverted" in yParams ? !!yParams.inverted : false;
}
createPlugin({
    id: "input-point2d",
    type: "input",
    accept: (value, params)=>{
        if (!Point2d.isObject(value)) return null;
        const result = parseRecord(params, (p)=>Object.assign(Object.assign({}, createPointDimensionParser(p)), {
                expanded: p.optional.boolean,
                picker: p.optional.custom(parsePickerLayout),
                readonly: p.optional.constant(false),
                x: p.optional.custom(parsePointDimensionParams),
                y: p.optional.object(Object.assign(Object.assign({}, createPointDimensionParser(p)), {
                    inverted: p.optional.boolean
                }))
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: ()=>point2dFromUnknown,
        constraint: (args)=>createConstraint$5(args.params, args.initialValue),
        equals: Point2d.equals,
        writer: ()=>writePoint2d
    },
    controller: (args)=>{
        var _a, _b;
        const doc = args.document;
        const value = args.value;
        const c = args.constraint;
        const dParams = [
            args.params.x,
            args.params.y
        ];
        return new Point2dController(doc, {
            axes: value.rawValue.getComponents().map((comp, i)=>{
                var _a;
                return createPointAxis({
                    constraint: c.components[i],
                    initialValue: comp,
                    params: deepMerge(args.params, (_a = dParams[i]) !== null && _a !== void 0 ? _a : {})
                });
            }),
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            invertsY: shouldInvertY(args.params),
            max: getSuitableMax(args.params, value.rawValue),
            parser: parseNumber,
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : "popup",
            value: value,
            viewProps: args.viewProps
        });
    }
});
class Point3d {
    constructor(x = 0, y = 0, z = 0){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    getComponents() {
        return [
            this.x,
            this.y,
            this.z
        ];
    }
    static isObject(obj) {
        if (isEmpty(obj)) return false;
        const x = obj.x;
        const y = obj.y;
        const z = obj.z;
        if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") return false;
        return true;
    }
    static equals(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
    }
    toObject() {
        return {
            x: this.x,
            y: this.y,
            z: this.z
        };
    }
}
const Point3dAssembly = {
    toComponents: (p)=>p.getComponents(),
    fromComponents: (comps)=>new Point3d(...comps)
};
function point3dFromUnknown(value) {
    return Point3d.isObject(value) ? new Point3d(value.x, value.y, value.z) : new Point3d();
}
function writePoint3d(target, value) {
    target.writeProperty("x", value.x);
    target.writeProperty("y", value.y);
    target.writeProperty("z", value.z);
}
function createConstraint$4(params, initialValue) {
    return new PointNdConstraint({
        assembly: Point3dAssembly,
        components: [
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.x), initialValue.x),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.y), initialValue.y),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.z), initialValue.z)
        ]
    });
}
createPlugin({
    id: "input-point3d",
    type: "input",
    accept: (value, params)=>{
        if (!Point3d.isObject(value)) return null;
        const result = parseRecord(params, (p)=>Object.assign(Object.assign({}, createPointDimensionParser(p)), {
                readonly: p.optional.constant(false),
                x: p.optional.custom(parsePointDimensionParams),
                y: p.optional.custom(parsePointDimensionParams),
                z: p.optional.custom(parsePointDimensionParams)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>point3dFromUnknown,
        constraint: (args)=>createConstraint$4(args.params, args.initialValue),
        equals: Point3d.equals,
        writer: (_args)=>writePoint3d
    },
    controller: (args)=>{
        const value = args.value;
        const c = args.constraint;
        const dParams = [
            args.params.x,
            args.params.y,
            args.params.z
        ];
        return new PointNdTextController(args.document, {
            assembly: Point3dAssembly,
            axes: value.rawValue.getComponents().map((comp, i)=>{
                var _a;
                return createPointAxis({
                    constraint: c.components[i],
                    initialValue: comp,
                    params: deepMerge(args.params, (_a = dParams[i]) !== null && _a !== void 0 ? _a : {})
                });
            }),
            parser: parseNumber,
            value: value,
            viewProps: args.viewProps
        });
    }
});
class Point4d {
    constructor(x = 0, y = 0, z = 0, w = 0){
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    getComponents() {
        return [
            this.x,
            this.y,
            this.z,
            this.w
        ];
    }
    static isObject(obj) {
        if (isEmpty(obj)) return false;
        const x = obj.x;
        const y = obj.y;
        const z = obj.z;
        const w = obj.w;
        if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number" || typeof w !== "number") return false;
        return true;
    }
    static equals(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z && v1.w === v2.w;
    }
    toObject() {
        return {
            x: this.x,
            y: this.y,
            z: this.z,
            w: this.w
        };
    }
}
const Point4dAssembly = {
    toComponents: (p)=>p.getComponents(),
    fromComponents: (comps)=>new Point4d(...comps)
};
function point4dFromUnknown(value) {
    return Point4d.isObject(value) ? new Point4d(value.x, value.y, value.z, value.w) : new Point4d();
}
function writePoint4d(target, value) {
    target.writeProperty("x", value.x);
    target.writeProperty("y", value.y);
    target.writeProperty("z", value.z);
    target.writeProperty("w", value.w);
}
function createConstraint$3(params, initialValue) {
    return new PointNdConstraint({
        assembly: Point4dAssembly,
        components: [
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.x), initialValue.x),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.y), initialValue.y),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.z), initialValue.z),
            createDimensionConstraint(Object.assign(Object.assign({}, params), params.w), initialValue.w)
        ]
    });
}
createPlugin({
    id: "input-point4d",
    type: "input",
    accept: (value, params)=>{
        if (!Point4d.isObject(value)) return null;
        const result = parseRecord(params, (p)=>Object.assign(Object.assign({}, createPointDimensionParser(p)), {
                readonly: p.optional.constant(false),
                w: p.optional.custom(parsePointDimensionParams),
                x: p.optional.custom(parsePointDimensionParams),
                y: p.optional.custom(parsePointDimensionParams),
                z: p.optional.custom(parsePointDimensionParams)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>point4dFromUnknown,
        constraint: (args)=>createConstraint$3(args.params, args.initialValue),
        equals: Point4d.equals,
        writer: (_args)=>writePoint4d
    },
    controller: (args)=>{
        const value = args.value;
        const c = args.constraint;
        const dParams = [
            args.params.x,
            args.params.y,
            args.params.z,
            args.params.w
        ];
        return new PointNdTextController(args.document, {
            assembly: Point4dAssembly,
            axes: value.rawValue.getComponents().map((comp, i)=>{
                var _a;
                return createPointAxis({
                    constraint: c.components[i],
                    initialValue: comp,
                    params: deepMerge(args.params, (_a = dParams[i]) !== null && _a !== void 0 ? _a : {})
                });
            }),
            parser: parseNumber,
            value: value,
            viewProps: args.viewProps
        });
    }
});
function createConstraint$2(params) {
    const constraints = [];
    const lc = createListConstraint(params.options);
    if (lc) constraints.push(lc);
    return new CompositeConstraint(constraints);
}
createPlugin({
    id: "input-string",
    type: "input",
    accept: (value, params)=>{
        if (typeof value !== "string") return null;
        const result = parseRecord(params, (p)=>({
                readonly: p.optional.constant(false),
                options: p.optional.custom(parseListOptions)
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>stringFromUnknown,
        constraint: (args)=>createConstraint$2(args.params),
        writer: (_args)=>writePrimitive
    },
    controller: (args)=>{
        const doc = args.document;
        const value = args.value;
        const c = args.constraint;
        const lc = c && findConstraint(c, ListConstraint);
        if (lc) return new ListController(doc, {
            props: new ValueMap({
                options: lc.values.value("options")
            }),
            value: value,
            viewProps: args.viewProps
        });
        return new TextController(doc, {
            parser: (v)=>v,
            props: ValueMap.fromObject({
                formatter: formatString
            }),
            value: value,
            viewProps: args.viewProps
        });
    },
    api (args) {
        if (typeof args.controller.value.rawValue !== "string") return null;
        if (args.controller.valueController instanceof ListController) return new ListInputBindingApi(args.controller);
        return null;
    }
});
const Constants = {
    monitor: {
        defaultInterval: 200,
        defaultRows: 3
    }
};
const cn$2 = ClassName("mll");
class MultiLogView {
    constructor(doc, config){
        this.onValueUpdate_ = this.onValueUpdate_.bind(this);
        this.formatter_ = config.formatter;
        this.element = doc.createElement("div");
        this.element.classList.add(cn$2());
        config.viewProps.bindClassModifiers(this.element);
        const textareaElem = doc.createElement("textarea");
        textareaElem.classList.add(cn$2("i"));
        textareaElem.style.height = `calc(var(${getCssVar("containerUnitSize")}) * ${config.rows})`;
        textareaElem.readOnly = true;
        config.viewProps.bindDisabled(textareaElem);
        this.element.appendChild(textareaElem);
        this.textareaElem_ = textareaElem;
        config.value.emitter.on("change", this.onValueUpdate_);
        this.value = config.value;
        this.update_();
    }
    update_() {
        const elem = this.textareaElem_;
        const shouldScroll = elem.scrollTop === elem.scrollHeight - elem.clientHeight;
        const lines = [];
        this.value.rawValue.forEach((value)=>{
            if (value !== undefined) lines.push(this.formatter_(value));
        });
        elem.textContent = lines.join("\n");
        if (shouldScroll) elem.scrollTop = elem.scrollHeight;
    }
    onValueUpdate_() {
        this.update_();
    }
}
class MultiLogController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new MultiLogView(doc, {
            formatter: config.formatter,
            rows: config.rows,
            value: this.value,
            viewProps: this.viewProps
        });
    }
}
const cn$1 = ClassName("sgl");
class SingleLogView {
    constructor(doc, config){
        this.onValueUpdate_ = this.onValueUpdate_.bind(this);
        this.formatter_ = config.formatter;
        this.element = doc.createElement("div");
        this.element.classList.add(cn$1());
        config.viewProps.bindClassModifiers(this.element);
        const inputElem = doc.createElement("input");
        inputElem.classList.add(cn$1("i"));
        inputElem.readOnly = true;
        inputElem.type = "text";
        config.viewProps.bindDisabled(inputElem);
        this.element.appendChild(inputElem);
        this.inputElement = inputElem;
        config.value.emitter.on("change", this.onValueUpdate_);
        this.value = config.value;
        this.update_();
    }
    update_() {
        const values = this.value.rawValue;
        const lastValue = values[values.length - 1];
        this.inputElement.value = lastValue !== undefined ? this.formatter_(lastValue) : "";
    }
    onValueUpdate_() {
        this.update_();
    }
}
class SingleLogController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new SingleLogView(doc, {
            formatter: config.formatter,
            value: this.value,
            viewProps: this.viewProps
        });
    }
}
createPlugin({
    id: "monitor-bool",
    type: "monitor",
    accept: (value, params)=>{
        if (typeof value !== "boolean") return null;
        const result = parseRecord(params, (p)=>({
                readonly: p.required.constant(true),
                rows: p.optional.number
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>boolFromUnknown
    },
    controller: (args)=>{
        var _a;
        if (args.value.rawValue.length === 1) return new SingleLogController(args.document, {
            formatter: BooleanFormatter,
            value: args.value,
            viewProps: args.viewProps
        });
        return new MultiLogController(args.document, {
            formatter: BooleanFormatter,
            rows: (_a = args.params.rows) !== null && _a !== void 0 ? _a : Constants.monitor.defaultRows,
            value: args.value,
            viewProps: args.viewProps
        });
    }
});
class GraphLogMonitorBindingApi extends BindingApi {
    get max() {
        return this.controller.valueController.props.get("max");
    }
    set max(max) {
        this.controller.valueController.props.set("max", max);
    }
    get min() {
        return this.controller.valueController.props.get("min");
    }
    set min(min) {
        this.controller.valueController.props.set("min", min);
    }
}
const cn = ClassName("grl");
class GraphLogView {
    constructor(doc, config){
        this.onCursorChange_ = this.onCursorChange_.bind(this);
        this.onValueUpdate_ = this.onValueUpdate_.bind(this);
        this.element = doc.createElement("div");
        this.element.classList.add(cn());
        config.viewProps.bindClassModifiers(this.element);
        this.formatter_ = config.formatter;
        this.props_ = config.props;
        this.cursor_ = config.cursor;
        this.cursor_.emitter.on("change", this.onCursorChange_);
        const svgElem = doc.createElementNS(SVG_NS, "svg");
        svgElem.classList.add(cn("g"));
        svgElem.style.height = `calc(var(${getCssVar("containerUnitSize")}) * ${config.rows})`;
        this.element.appendChild(svgElem);
        this.svgElem_ = svgElem;
        const lineElem = doc.createElementNS(SVG_NS, "polyline");
        this.svgElem_.appendChild(lineElem);
        this.lineElem_ = lineElem;
        const tooltipElem = doc.createElement("div");
        tooltipElem.classList.add(cn("t"), ClassName("tt")());
        this.element.appendChild(tooltipElem);
        this.tooltipElem_ = tooltipElem;
        config.value.emitter.on("change", this.onValueUpdate_);
        this.value = config.value;
        this.update_();
    }
    get graphElement() {
        return this.svgElem_;
    }
    update_() {
        const bounds = this.svgElem_.getBoundingClientRect();
        const maxIndex = this.value.rawValue.length - 1;
        const min = this.props_.get("min");
        const max = this.props_.get("max");
        const points = [];
        this.value.rawValue.forEach((v, index)=>{
            if (v === undefined) return;
            const x = mapRange(index, 0, maxIndex, 0, bounds.width);
            const y = mapRange(v, min, max, bounds.height, 0);
            points.push([
                x,
                y
            ].join(","));
        });
        this.lineElem_.setAttributeNS(null, "points", points.join(" "));
        const tooltipElem = this.tooltipElem_;
        const value = this.value.rawValue[this.cursor_.rawValue];
        if (value === undefined) {
            tooltipElem.classList.remove(cn("t", "a"));
            return;
        }
        const tx = mapRange(this.cursor_.rawValue, 0, maxIndex, 0, bounds.width);
        const ty = mapRange(value, min, max, bounds.height, 0);
        tooltipElem.style.left = `${tx}px`;
        tooltipElem.style.top = `${ty}px`;
        tooltipElem.textContent = `${this.formatter_(value)}`;
        if (!tooltipElem.classList.contains(cn("t", "a"))) {
            tooltipElem.classList.add(cn("t", "a"), cn("t", "in"));
            forceReflow(tooltipElem);
            tooltipElem.classList.remove(cn("t", "in"));
        }
    }
    onValueUpdate_() {
        this.update_();
    }
    onCursorChange_() {
        this.update_();
    }
}
class GraphLogController {
    constructor(doc, config){
        this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this);
        this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this);
        this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this);
        this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this);
        this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this);
        this.props = config.props;
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.cursor_ = createValue(-1);
        this.view = new GraphLogView(doc, {
            cursor: this.cursor_,
            formatter: config.formatter,
            rows: config.rows,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        });
        if (!supportsTouch(doc)) {
            this.view.element.addEventListener("mousemove", this.onGraphMouseMove_);
            this.view.element.addEventListener("mouseleave", this.onGraphMouseLeave_);
        } else {
            const ph = new PointerHandler(this.view.element);
            ph.emitter.on("down", this.onGraphPointerDown_);
            ph.emitter.on("move", this.onGraphPointerMove_);
            ph.emitter.on("up", this.onGraphPointerUp_);
        }
    }
    importProps(state) {
        return importBladeState(state, null, (p)=>({
                max: p.required.number,
                min: p.required.number
            }), (result)=>{
            this.props.set("max", result.max);
            this.props.set("min", result.min);
            return true;
        });
    }
    exportProps() {
        return exportBladeState(null, {
            max: this.props.get("max"),
            min: this.props.get("min")
        });
    }
    onGraphMouseLeave_() {
        this.cursor_.rawValue = -1;
    }
    onGraphMouseMove_(ev) {
        const bounds = this.view.element.getBoundingClientRect();
        this.cursor_.rawValue = Math.floor(mapRange(ev.offsetX, 0, bounds.width, 0, this.value.rawValue.length));
    }
    onGraphPointerDown_(ev) {
        this.onGraphPointerMove_(ev);
    }
    onGraphPointerMove_(ev) {
        if (!ev.data.point) {
            this.cursor_.rawValue = -1;
            return;
        }
        this.cursor_.rawValue = Math.floor(mapRange(ev.data.point.x, 0, ev.data.bounds.width, 0, this.value.rawValue.length));
    }
    onGraphPointerUp_() {
        this.cursor_.rawValue = -1;
    }
}
function createFormatter(params) {
    return !isEmpty(params.format) ? params.format : createNumberFormatter(2);
}
function createTextMonitor(args) {
    var _a;
    if (args.value.rawValue.length === 1) return new SingleLogController(args.document, {
        formatter: createFormatter(args.params),
        value: args.value,
        viewProps: args.viewProps
    });
    return new MultiLogController(args.document, {
        formatter: createFormatter(args.params),
        rows: (_a = args.params.rows) !== null && _a !== void 0 ? _a : Constants.monitor.defaultRows,
        value: args.value,
        viewProps: args.viewProps
    });
}
function createGraphMonitor(args) {
    var _a, _b, _c;
    return new GraphLogController(args.document, {
        formatter: createFormatter(args.params),
        rows: (_a = args.params.rows) !== null && _a !== void 0 ? _a : Constants.monitor.defaultRows,
        props: ValueMap.fromObject({
            max: (_b = args.params.max) !== null && _b !== void 0 ? _b : 100,
            min: (_c = args.params.min) !== null && _c !== void 0 ? _c : 0
        }),
        value: args.value,
        viewProps: args.viewProps
    });
}
function shouldShowGraph(params) {
    return params.view === "graph";
}
createPlugin({
    id: "monitor-number",
    type: "monitor",
    accept: (value, params)=>{
        if (typeof value !== "number") return null;
        const result = parseRecord(params, (p)=>({
                format: p.optional.function,
                max: p.optional.number,
                min: p.optional.number,
                readonly: p.required.constant(true),
                rows: p.optional.number,
                view: p.optional.string
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        defaultBufferSize: (params)=>shouldShowGraph(params) ? 64 : 1,
        reader: (_args)=>numberFromUnknown
    },
    controller: (args)=>{
        if (shouldShowGraph(args.params)) return createGraphMonitor(args);
        return createTextMonitor(args);
    },
    api: (args)=>{
        if (args.controller.valueController instanceof GraphLogController) return new GraphLogMonitorBindingApi(args.controller);
        return null;
    }
});
createPlugin({
    id: "monitor-string",
    type: "monitor",
    accept: (value, params)=>{
        if (typeof value !== "string") return null;
        const result = parseRecord(params, (p)=>({
                multiline: p.optional.boolean,
                readonly: p.required.constant(true),
                rows: p.optional.number
            }));
        return result ? {
            initialValue: value,
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>stringFromUnknown
    },
    controller: (args)=>{
        var _a;
        const value = args.value;
        const multiline = value.rawValue.length > 1 || args.params.multiline;
        if (multiline) return new MultiLogController(args.document, {
            formatter: formatString,
            rows: (_a = args.params.rows) !== null && _a !== void 0 ? _a : Constants.monitor.defaultRows,
            value: value,
            viewProps: args.viewProps
        });
        return new SingleLogController(args.document, {
            formatter: formatString,
            value: value,
            viewProps: args.viewProps
        });
    }
});
class ButtonCellApi {
    constructor(controller){
        this.controller_ = controller;
    }
    get disabled() {
        return this.controller_.viewProps.get("disabled");
    }
    set disabled(disabled) {
        this.controller_.viewProps.set("disabled", disabled);
    }
    get title() {
        var _a;
        return (_a = this.controller_.props.get("title")) !== null && _a !== void 0 ? _a : "";
    }
    set title(title) {
        this.controller_.props.set("title", title);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        const emitter = this.controller_.emitter;
        emitter.on(eventName, ()=>{
            bh(new TpEvent(this));
        });
        return this;
    }
}
class TpButtonGridEvent extends TpEvent {
    constructor(target, cell, index){
        super(target);
        this.cell = cell;
        this.index = index;
    }
}
class ButtonGridApi extends BladeApi {
    constructor(controller){
        super(controller);
        this.cellToApiMap_ = new Map();
        this.emitter_ = new Emitter();
        const gc = this.controller.valueController;
        gc.cellControllers.forEach((cc, i)=>{
            const api = new ButtonCellApi(cc);
            this.cellToApiMap_.set(cc, api);
            cc.emitter.on("click", ()=>{
                const x = i % gc.size[0];
                const y = Math.floor(i / gc.size[0]);
                this.emitter_.emit("click", {
                    event: new TpButtonGridEvent(this, api, [
                        x,
                        y
                    ])
                });
            });
        });
    }
    cell(x, y) {
        const gc = this.controller.valueController;
        const cc = gc.cellControllers[y * gc.size[0] + x];
        return this.cellToApiMap_.get(cc);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.emitter_.on(eventName, (ev)=>{
            bh(ev.event);
        });
        return this;
    }
}
class ButtonGridController {
    constructor(doc, config){
        this.size = config.size;
        const [w, h] = this.size;
        const bcs = [];
        for(let y = 0; y < h; y++)for(let x = 0; x < w; x++){
            const bc = new ButtonController(doc, {
                props: ValueMap.fromObject(Object.assign({}, config.cellConfig(x, y))),
                viewProps: ViewProps.create()
            });
            bcs.push(bc);
        }
        this.cellCs_ = bcs;
        this.viewProps = ViewProps.create();
        this.viewProps.handleDispose(()=>{
            this.cellCs_.forEach((c)=>{
                c.viewProps.set("disposed", true);
            });
        });
        this.view = new PlainView(doc, {
            viewProps: this.viewProps,
            viewName: "btngrid"
        });
        this.view.element.style.gridTemplateColumns = `repeat(${w}, 1fr)`;
        this.cellCs_.forEach((bc)=>{
            this.view.element.appendChild(bc.view.element);
        });
    }
    get cellControllers() {
        return this.cellCs_;
    }
}
class ButtonGridBladeController extends BladeController {
    constructor(doc, config){
        const bc = config.valueController;
        const lc = new LabelController(doc, {
            blade: config.blade,
            props: config.labelProps,
            valueController: bc
        });
        super({
            blade: config.blade,
            view: lc.view,
            viewProps: bc.viewProps
        });
        this.valueController = bc;
        this.labelController = lc;
    }
}
const ButtonGridBladePlugin = createPlugin({
    id: "buttongrid",
    type: "blade",
    accept (params) {
        const result = parseRecord(params, (p)=>({
                cells: p.required.function,
                size: p.required.array(p.required.number),
                view: p.required.constant("buttongrid"),
                label: p.optional.string
            }));
        return result ? {
            params: result
        } : null;
    },
    controller (args) {
        return new ButtonGridBladeController(args.document, {
            blade: args.blade,
            labelProps: ValueMap.fromObject({
                label: args.params.label
            }),
            valueController: new ButtonGridController(args.document, {
                cellConfig: args.params.cells,
                size: args.params.size
            })
        });
    },
    api (args) {
        if (args.controller instanceof ButtonGridBladeController) return new ButtonGridApi(args.controller);
        return null;
    }
});
class CubicBezierApi extends BladeApi {
    get label() {
        return this.controller.labelController.props.get("label");
    }
    set label(label) {
        this.controller.labelController.props.set("label", label);
    }
    get value() {
        return this.controller.valueController.value.rawValue;
    }
    set value(value) {
        this.controller.valueController.value.rawValue = value;
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.controller.valueController.value.emitter.on(eventName, (ev)=>{
            bh(new TpChangeEvent(this, ev.rawValue, ev.options.last));
        });
        return this;
    }
}
function interpolate(x1, x2, t) {
    return x1 * (1 - t) + x2 * t;
}
const MAX_ITERATION = 20;
const X_DELTA = 0.001;
const CACHE_RESOLUTION = 100;
function y(cb, x) {
    let dt = 0.25;
    let t = 0.5;
    let y = -1;
    for(let i = 0; i < MAX_ITERATION; i++){
        const [tx, ty] = cb.curve(t);
        t += dt * (tx < x ? 1 : -1);
        y = ty;
        dt *= 0.5;
        if (Math.abs(x - tx) < X_DELTA) break;
    }
    return y;
}
class CubicBezier {
    constructor(x1 = 0, y1 = 0, x2 = 1, y2 = 1){
        this.cache_ = [];
        this.comps_ = [
            x1,
            y1,
            x2,
            y2
        ];
    }
    get x1() {
        return this.comps_[0];
    }
    get y1() {
        return this.comps_[1];
    }
    get x2() {
        return this.comps_[2];
    }
    get y2() {
        return this.comps_[3];
    }
    static isObject(obj) {
        if (isEmpty(obj)) return false;
        if (!Array.isArray(obj)) return false;
        return typeof obj[0] === "number" && typeof obj[1] === "number" && typeof obj[2] === "number" && typeof obj[3] === "number";
    }
    static equals(v1, v2) {
        return v1.x1 === v2.x1 && v1.y1 === v2.y1 && v1.x2 === v2.x2 && v1.y2 === v2.y2;
    }
    curve(t) {
        const x01 = interpolate(0, this.x1, t);
        const y01 = interpolate(0, this.y1, t);
        const x12 = interpolate(this.x1, this.x2, t);
        const y12 = interpolate(this.y1, this.y2, t);
        const x23 = interpolate(this.x2, 1, t);
        const y23 = interpolate(this.y2, 1, t);
        const xr0 = interpolate(x01, x12, t);
        const yr0 = interpolate(y01, y12, t);
        const xr1 = interpolate(x12, x23, t);
        const yr1 = interpolate(y12, y23, t);
        return [
            interpolate(xr0, xr1, t),
            interpolate(yr0, yr1, t)
        ];
    }
    y(x) {
        if (this.cache_.length === 0) {
            const cache = [];
            for(let i = 0; i < CACHE_RESOLUTION; i++)cache.push(y(this, mapRange(i, 0, CACHE_RESOLUTION - 1, 0, 1)));
            this.cache_ = cache;
        }
        return this.cache_[Math.round(mapRange(constrainRange(x, 0, 1), 0, 1, 0, CACHE_RESOLUTION - 1))];
    }
    toObject() {
        return [
            this.comps_[0],
            this.comps_[1],
            this.comps_[2],
            this.comps_[3]
        ];
    }
}
const CubicBezierAssembly = {
    toComponents: (p)=>p.toObject(),
    fromComponents: (comps)=>new CubicBezier(...comps)
};
function cubicBezierToString(cb) {
    const formatter = createNumberFormatter(2);
    const comps = cb.toObject().map((c)=>formatter(c));
    return `cubic-bezier(${comps.join(", ")})`;
}
const COMPS_EMPTY = [
    0,
    0.5,
    0.5,
    1
];
function cubicBezierFromString(text) {
    const m = text.match(/^cubic-bezier\s*\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*\)$/);
    if (!m) return new CubicBezier(...COMPS_EMPTY);
    const comps = [
        m[1],
        m[2],
        m[3],
        m[4]
    ].reduce((comps, comp)=>{
        if (!comps) return null;
        const n = Number(comp);
        if (isNaN(n)) return null;
        return [
            ...comps,
            n
        ];
    }, []);
    return new CubicBezier(...comps !== null && comps !== void 0 ? comps : COMPS_EMPTY);
}
const className$7 = ClassName("cbz");
class CubicBezierView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(className$7());
        config.viewProps.bindClassModifiers(this.element);
        config.foldable.bindExpandedClass(this.element, className$7(undefined, "expanded"));
        bindValueMap(config.foldable, "completed", valueToClassName(this.element, className$7(undefined, "cpl")));
        const headElem = doc.createElement("div");
        headElem.classList.add(className$7("h"));
        this.element.appendChild(headElem);
        const buttonElem = doc.createElement("button");
        buttonElem.classList.add(className$7("b"));
        config.viewProps.bindDisabled(buttonElem);
        const iconElem = doc.createElementNS(SVG_NS, "svg");
        iconElem.innerHTML = '<path d="M2 13C8 13 8 3 14 3"/>';
        buttonElem.appendChild(iconElem);
        headElem.appendChild(buttonElem);
        this.buttonElement = buttonElem;
        const textElem = doc.createElement("div");
        textElem.classList.add(className$7("t"));
        headElem.appendChild(textElem);
        this.textElement = textElem;
        if (config.pickerLayout === "inline") {
            const pickerElem = doc.createElement("div");
            pickerElem.classList.add(className$7("p"));
            this.element.appendChild(pickerElem);
            this.pickerElement = pickerElem;
        } else this.pickerElement = null;
    }
}
const className$6 = ClassName("cbzp");
class CubicBezierPickerView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(className$6());
        config.viewProps.bindClassModifiers(this.element);
        const graphElem = doc.createElement("div");
        graphElem.classList.add(className$6("g"));
        this.element.appendChild(graphElem);
        this.graphElement = graphElem;
        const textElem = doc.createElement("div");
        textElem.classList.add(className$6("t"));
        this.element.appendChild(textElem);
        this.textElement = textElem;
    }
}
function waitToBeAddedToDom(elem, callback) {
    const ob = new MutationObserver((ml)=>{
        for (const m of ml){
            if (m.type !== "childList") continue;
            m.addedNodes.forEach((elem)=>{
                if (!elem.contains(elem)) return;
                callback();
                ob.disconnect();
            });
        }
    });
    const doc = elem.ownerDocument;
    ob.observe(doc.body, {
        attributes: true,
        childList: true,
        subtree: true
    });
}
const className$5 = ClassName("cbzg");
// TODO: Apply to core
function compose(h1, h2) {
    return (input)=>h2(h1(input));
}
class CubicBezierGraphView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(className$5());
        config.viewProps.bindClassModifiers(this.element);
        config.viewProps.bindTabIndex(this.element);
        const previewElem = doc.createElement("div");
        previewElem.classList.add(className$5("p"));
        this.element.appendChild(previewElem);
        this.previewElement = previewElem;
        const svgElem = doc.createElementNS(SVG_NS, "svg");
        svgElem.classList.add(className$5("g"));
        this.element.appendChild(svgElem);
        this.svgElem_ = svgElem;
        const guideElem = doc.createElementNS(SVG_NS, "path");
        guideElem.classList.add(className$5("u"));
        this.svgElem_.appendChild(guideElem);
        this.guideElem_ = guideElem;
        const lineElem = doc.createElementNS(SVG_NS, "polyline");
        lineElem.classList.add(className$5("l"));
        this.svgElem_.appendChild(lineElem);
        this.lineElem_ = lineElem;
        this.handleElems_ = [
            doc.createElement("div"),
            doc.createElement("div")
        ];
        this.handleElems_.forEach((elem)=>{
            elem.classList.add(className$5("h"));
            this.element.appendChild(elem);
        });
        this.vectorElems_ = [
            doc.createElementNS(SVG_NS, "line"),
            doc.createElementNS(SVG_NS, "line")
        ];
        this.vectorElems_.forEach((elem)=>{
            elem.classList.add(className$5("v"));
            this.svgElem_.appendChild(elem);
        });
        this.value_ = config.value;
        this.value_.emitter.on("change", this.onValueChange_.bind(this));
        this.sel_ = config.selection;
        this.handleElems_.forEach((elem, index)=>{
            bindValue(this.sel_, compose((selection)=>selection === index, valueToClassName(elem, className$5("h", "sel"))));
        });
        waitToBeAddedToDom(this.element, ()=>{
            this.refresh();
        });
    }
    getVertMargin_(h) {
        return h * 0.25;
    }
    valueToPosition(x, y) {
        const { clientWidth: w , clientHeight: h  } = this.element;
        const vm = this.getVertMargin_(h);
        return {
            x: mapRange(x, 0, 1, 0, w),
            y: mapRange(y, 0, 1, h - vm, vm)
        };
    }
    positionToValue(x, y) {
        const bounds = this.element.getBoundingClientRect();
        const w = bounds.width;
        const h = bounds.height;
        const vm = this.getVertMargin_(h);
        return {
            x: constrainRange(mapRange(x, 0, w, 0, 1), 0, 1),
            y: mapRange(y, h - vm, vm, 0, 1)
        };
    }
    refresh() {
        this.guideElem_.setAttributeNS(null, "d", [
            0,
            1
        ].map((index)=>{
            const p1 = this.valueToPosition(0, index);
            const p2 = this.valueToPosition(1, index);
            return [
                `M ${p1.x},${p1.y}`,
                `L ${p2.x},${p2.y}`
            ].join(" ");
        }).join(" "));
        const bezier = this.value_.rawValue;
        const points = [];
        let t = 0;
        for(;;){
            const p = this.valueToPosition(...bezier.curve(t));
            points.push([
                p.x,
                p.y
            ].join(","));
            if (t >= 1) break;
            t = Math.min(t + 0.05, 1);
        }
        this.lineElem_.setAttributeNS(null, "points", points.join(" "));
        const obj = bezier.toObject();
        [
            0,
            1
        ].forEach((index)=>{
            const p1 = this.valueToPosition(index, index);
            const p2 = this.valueToPosition(obj[index * 2], obj[index * 2 + 1]);
            const vElem = this.vectorElems_[index];
            vElem.setAttributeNS(null, "x1", String(p1.x));
            vElem.setAttributeNS(null, "y1", String(p1.y));
            vElem.setAttributeNS(null, "x2", String(p2.x));
            vElem.setAttributeNS(null, "y2", String(p2.y));
            const hElem = this.handleElems_[index];
            hElem.style.left = `${p2.x}px`;
            hElem.style.top = `${p2.y}px`;
        });
    }
    onValueChange_() {
        this.refresh();
    }
}
const TICK_COUNT = 24;
const PREVIEW_DELAY = 400;
const PREVIEW_DURATION = 1000;
const className$4 = ClassName("cbzprv");
class CubicBezierPreviewView {
    constructor(doc, config){
        this.stopped_ = true;
        this.startTime_ = -1;
        this.onDispose_ = this.onDispose_.bind(this);
        this.onTimer_ = this.onTimer_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.element = doc.createElement("div");
        this.element.classList.add(className$4());
        config.viewProps.bindClassModifiers(this.element);
        const svgElem = doc.createElementNS(SVG_NS, "svg");
        svgElem.classList.add(className$4("g"));
        this.element.appendChild(svgElem);
        this.svgElem_ = svgElem;
        const ticksElem = doc.createElementNS(SVG_NS, "path");
        ticksElem.classList.add(className$4("t"));
        this.svgElem_.appendChild(ticksElem);
        this.ticksElem_ = ticksElem;
        const markerElem = doc.createElement("div");
        markerElem.classList.add(className$4("m"));
        this.element.appendChild(markerElem);
        this.markerElem_ = markerElem;
        this.value_ = config.value;
        this.value_.emitter.on("change", this.onValueChange_);
        config.viewProps.handleDispose(this.onDispose_);
        waitToBeAddedToDom(this.element, ()=>{
            this.refresh();
        });
    }
    play() {
        this.stop();
        this.updateMarker_(0);
        this.markerElem_.classList.add(className$4("m", "a"));
        this.startTime_ = new Date().getTime() + PREVIEW_DELAY;
        this.stopped_ = false;
        requestAnimationFrame(this.onTimer_);
    }
    stop() {
        this.stopped_ = true;
        this.markerElem_.classList.remove(className$4("m", "a"));
    }
    onDispose_() {
        this.stop();
    }
    updateMarker_(progress) {
        const p = this.value_.rawValue.y(constrainRange(progress, 0, 1));
        this.markerElem_.style.left = `${p * 100}%`;
    }
    refresh() {
        const { clientWidth: w , clientHeight: h  } = this.svgElem_;
        const ds = [];
        const bezier = this.value_.rawValue;
        for(let i = 0; i < TICK_COUNT; i++){
            const px = mapRange(i, 0, TICK_COUNT - 1, 0, 1);
            const x = mapRange(bezier.y(px), 0, 1, 0, w);
            ds.push(`M ${x},0 v${h}`);
        }
        this.ticksElem_.setAttributeNS(null, "d", ds.join(" "));
    }
    onTimer_() {
        if (this.startTime_ === null) return;
        const dt = new Date().getTime() - this.startTime_;
        const p = dt / PREVIEW_DURATION;
        this.updateMarker_(p);
        if (dt > PREVIEW_DURATION + PREVIEW_DELAY) this.stop();
        if (!this.stopped_) requestAnimationFrame(this.onTimer_);
    }
    onValueChange_() {
        this.refresh();
        this.play();
    }
}
function getDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}
function lockAngle(x1, y1, x2, y2) {
    const d = getDistance(x1, y1, x2, y2);
    const a = Math.atan2(y2 - y1, x2 - x1);
    const la = Math.round(a / (Math.PI / 4)) * Math.PI / 4;
    return {
        x: x1 + Math.cos(la) * d,
        y: y1 + Math.sin(la) * d
    };
}
class CubicBezierGraphController {
    constructor(doc, config){
        this.onKeyDown_ = this.onKeyDown_.bind(this);
        this.onKeyUp_ = this.onKeyUp_.bind(this);
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.keyScale_ = config.keyScale;
        this.value = config.value;
        this.sel_ = createValue(0);
        this.viewProps = config.viewProps;
        this.view = new CubicBezierGraphView(doc, {
            selection: this.sel_,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.element.addEventListener("keydown", this.onKeyDown_);
        this.view.element.addEventListener("keyup", this.onKeyUp_);
        this.prevView_ = new CubicBezierPreviewView(doc, {
            value: this.value,
            viewProps: this.viewProps
        });
        this.prevView_.element.addEventListener("mousedown", (ev)=>{
            ev.stopImmediatePropagation();
            ev.preventDefault();
            this.prevView_.play();
        });
        this.view.previewElement.appendChild(this.prevView_.element);
        const ptHandler = new PointerHandler(this.view.element);
        ptHandler.emitter.on("down", this.onPointerDown_);
        ptHandler.emitter.on("move", this.onPointerMove_);
        ptHandler.emitter.on("up", this.onPointerUp_);
    }
    refresh() {
        this.view.refresh();
        this.prevView_.refresh();
        this.prevView_.play();
    }
    updateValue_(point, locksAngle, opts) {
        const index = this.sel_.rawValue;
        const comps = this.value.rawValue.toObject();
        const vp = this.view.positionToValue(point.x, point.y);
        const v = locksAngle ? lockAngle(index, index, vp.x, vp.y) : vp;
        comps[index * 2] = v.x;
        comps[index * 2 + 1] = v.y;
        this.value.setRawValue(new CubicBezier(...comps), opts);
    }
    onPointerDown_(ev) {
        const data = ev.data;
        if (!data.point) return;
        const bezier = this.value.rawValue;
        const p1 = this.view.valueToPosition(bezier.x1, bezier.y1);
        const d1 = getDistance(data.point.x, data.point.y, p1.x, p1.y);
        const p2 = this.view.valueToPosition(bezier.x2, bezier.y2);
        const d2 = getDistance(data.point.x, data.point.y, p2.x, p2.y);
        this.sel_.rawValue = d1 <= d2 ? 0 : 1;
        this.updateValue_(data.point, ev.shiftKey, {
            forceEmit: false,
            last: false
        });
    }
    onPointerMove_(ev) {
        const data = ev.data;
        if (!data.point) return;
        this.updateValue_(data.point, ev.shiftKey, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        const data = ev.data;
        if (!data.point) return;
        this.updateValue_(data.point, ev.shiftKey, {
            forceEmit: true,
            last: true
        });
    }
    onKeyDown_(ev) {
        if (isArrowKey(ev.key)) ev.preventDefault();
        const index = this.sel_.rawValue;
        const comps = this.value.rawValue.toObject();
        const keyScale = this.keyScale_.rawValue;
        comps[index * 2] += getStepForKey(keyScale, getHorizontalStepKeys(ev));
        comps[index * 2 + 1] += getStepForKey(keyScale, getVerticalStepKeys(ev));
        this.value.setRawValue(new CubicBezier(...comps), {
            forceEmit: false,
            last: false
        });
    }
    onKeyUp_(ev) {
        if (isArrowKey(ev.key)) ev.preventDefault();
        const keyScale = this.keyScale_.rawValue;
        const xStep = getStepForKey(keyScale, getHorizontalStepKeys(ev));
        const yStep = getStepForKey(keyScale, getVerticalStepKeys(ev));
        if (xStep === 0 && yStep === 0) return;
        this.value.setRawValue(this.value.rawValue, {
            forceEmit: true,
            last: true
        });
    }
}
class CubicBezierPickerController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new CubicBezierPickerView(doc, {
            viewProps: this.viewProps
        });
        this.gc_ = new CubicBezierGraphController(doc, {
            keyScale: config.axis.textProps.value("keyScale"),
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.graphElement.appendChild(this.gc_.view.element);
        const xAxis = Object.assign(Object.assign({}, config.axis), {
            constraint: new RangeConstraint({
                max: 1,
                min: 0
            })
        });
        const yAxis = Object.assign(Object.assign({}, config.axis), {
            constraint: undefined
        });
        this.tc_ = new PointNdTextController(doc, {
            assembly: CubicBezierAssembly,
            axes: [
                xAxis,
                yAxis,
                xAxis,
                yAxis
            ],
            parser: parseNumber,
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.textElement.appendChild(this.tc_.view.element);
    }
    get allFocusableElements() {
        return [
            this.gc_.view.element,
            ...this.tc_.view.textViews.map((v)=>v.inputElement)
        ];
    }
    refresh() {
        this.gc_.refresh();
    }
}
class CubicBezierController {
    constructor(doc, config){
        this.onButtonBlur_ = this.onButtonBlur_.bind(this);
        this.onButtonClick_ = this.onButtonClick_.bind(this);
        this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
        this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.foldable_ = Foldable.create(config.expanded);
        this.view = new CubicBezierView(doc, {
            foldable: this.foldable_,
            pickerLayout: config.pickerLayout,
            viewProps: this.viewProps
        });
        this.view.buttonElement.addEventListener("blur", this.onButtonBlur_);
        this.view.buttonElement.addEventListener("click", this.onButtonClick_);
        this.tc_ = new TextController(doc, {
            parser: cubicBezierFromString,
            props: ValueMap.fromObject({
                formatter: cubicBezierToString
            }),
            value: this.value,
            viewProps: this.viewProps
        });
        this.view.textElement.appendChild(this.tc_.view.element);
        this.popC_ = config.pickerLayout === "popup" ? new PopupController(doc, {
            viewProps: this.viewProps
        }) : null;
        const pickerC = new CubicBezierPickerController(doc, {
            axis: config.axis,
            value: this.value,
            viewProps: this.viewProps
        });
        pickerC.allFocusableElements.forEach((elem)=>{
            elem.addEventListener("blur", this.onPopupChildBlur_);
            elem.addEventListener("keydown", this.onPopupChildKeydown_);
        });
        this.pickerC_ = pickerC;
        if (this.popC_) {
            this.view.element.appendChild(this.popC_.view.element);
            this.popC_.view.element.appendChild(this.pickerC_.view.element);
            bindValue(this.popC_.shows, (shows)=>{
                if (shows) pickerC.refresh();
            });
            connectValues({
                primary: this.foldable_.value("expanded"),
                secondary: this.popC_.shows,
                forward: (p)=>p,
                backward: (_, s)=>s
            });
        } else if (this.view.pickerElement) {
            this.view.pickerElement.appendChild(this.pickerC_.view.element);
            bindFoldable(this.foldable_, this.view.pickerElement);
        }
    }
    onButtonBlur_(ev) {
        if (!this.popC_) return;
        const nextTarget = forceCast(ev.relatedTarget);
        if (!nextTarget || !this.popC_.view.element.contains(nextTarget)) this.popC_.shows.rawValue = false;
    }
    onButtonClick_() {
        this.foldable_.set("expanded", !this.foldable_.get("expanded"));
        if (this.foldable_.get("expanded")) this.pickerC_.allFocusableElements[0].focus();
    }
    onPopupChildBlur_(ev) {
        if (!this.popC_) return;
        const elem = this.popC_.view.element;
        const nextTarget = findNextTarget(ev);
        if (nextTarget && elem.contains(nextTarget)) // Next target is in the popup
        return;
        if (nextTarget && nextTarget === this.view.buttonElement && !supportsTouch(elem.ownerDocument)) // Next target is the trigger button
        return;
        this.popC_.shows.rawValue = false;
    }
    onPopupChildKeydown_(ev) {
        if (!this.popC_) return;
        if (ev.key === "Escape") this.popC_.shows.rawValue = false;
    }
}
function createConstraint$1() {
    return new PointNdConstraint({
        assembly: CubicBezierAssembly,
        components: [
            0,
            1,
            2,
            3
        ].map((index)=>index % 2 === 0 ? new RangeConstraint({
                min: 0,
                max: 1
            }) : undefined)
    });
}
const CubicBezierBladePlugin = createPlugin({
    id: "cubicbezier",
    type: "blade",
    accept (params) {
        const result = parseRecord(params, (p)=>({
                value: p.required.array(p.required.number),
                view: p.required.constant("cubicbezier"),
                expanded: p.optional.boolean,
                label: p.optional.string,
                picker: p.optional.custom((v)=>{
                    return v === "inline" || v === "popup" ? v : undefined;
                })
            }));
        return result ? {
            params: result
        } : null;
    },
    controller (args) {
        var _a, _b;
        const rv = new CubicBezier(...args.params.value);
        const v = createValue(rv, {
            constraint: createConstraint$1(),
            equals: CubicBezier.equals
        });
        const vc = new CubicBezierController(args.document, {
            axis: {
                textProps: ValueMap.fromObject({
                    keyScale: 0.1,
                    pointerScale: 0.01,
                    formatter: createNumberFormatter(2)
                })
            },
            expanded: (_a = args.params.expanded) !== null && _a !== void 0 ? _a : false,
            pickerLayout: (_b = args.params.picker) !== null && _b !== void 0 ? _b : "popup",
            value: v,
            viewProps: args.viewProps
        });
        return new LabeledValueBladeController(args.document, {
            blade: args.blade,
            props: ValueMap.fromObject({
                label: args.params.label
            }),
            value: v,
            valueController: vc
        });
    },
    api (args) {
        if (!(args.controller instanceof LabeledValueBladeController)) return null;
        if (!(args.controller.valueController instanceof CubicBezierController)) return null;
        return new CubicBezierApi(args.controller);
    }
});
class FpsGraphBladeApi extends BladeApi {
    get fps() {
        return this.controller.valueController.fps;
    }
    get max() {
        return this.controller.valueController.props.get("max");
    }
    set max(max) {
        this.controller.valueController.props.set("max", max);
    }
    get min() {
        return this.controller.valueController.props.get("min");
    }
    set min(min) {
        this.controller.valueController.props.set("min", min);
    }
    begin() {
        this.controller.valueController.begin();
    }
    end() {
        this.controller.valueController.end();
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        const emitter = this.controller.valueController.ticker.emitter;
        emitter.on(eventName, ()=>{
            bh(new TpEvent(this));
        });
        return this;
    }
}
const MAX_TIMESTAMPS = 20;
class Fpswatch {
    constructor(){
        this.start_ = null;
        this.duration_ = 0;
        this.fps_ = null;
        this.frameCount_ = 0;
        this.timestamps_ = [];
    }
    get duration() {
        return this.duration_;
    }
    get fps() {
        return this.fps_;
    }
    begin(now) {
        this.start_ = now.getTime();
    }
    calculateFps_(nowTime) {
        if (this.timestamps_.length === 0) return null;
        const ts = this.timestamps_[0];
        return 1000 * (this.frameCount_ - ts.frameCount) / (nowTime - ts.time);
    }
    compactTimestamps_() {
        if (this.timestamps_.length <= MAX_TIMESTAMPS) return;
        const len = this.timestamps_.length - MAX_TIMESTAMPS;
        this.timestamps_.splice(0, len);
        const df = this.timestamps_[0].frameCount;
        this.timestamps_.forEach((ts)=>{
            ts.frameCount -= df;
        });
        this.frameCount_ -= df;
    }
    end(now) {
        if (this.start_ === null) return;
        const t = now.getTime();
        this.duration_ = t - this.start_;
        this.start_ = null;
        this.fps_ = this.calculateFps_(t);
        this.timestamps_.push({
            frameCount: this.frameCount_,
            time: t
        });
        ++this.frameCount_;
        this.compactTimestamps_();
    }
}
const className$3 = ClassName("fps");
class FpsView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(className$3());
        config.viewProps.bindClassModifiers(this.element);
        this.graphElement = doc.createElement("div");
        this.graphElement.classList.add(className$3("g"));
        this.element.appendChild(this.graphElement);
        const labelElement = doc.createElement("div");
        labelElement.classList.add(className$3("l"));
        this.element.appendChild(labelElement);
        const valueElement = doc.createElement("span");
        valueElement.classList.add(className$3("v"));
        valueElement.textContent = "--";
        labelElement.appendChild(valueElement);
        this.valueElement = valueElement;
        const unitElement = doc.createElement("span");
        unitElement.classList.add(className$3("u"));
        unitElement.textContent = "FPS";
        labelElement.appendChild(unitElement);
    }
}
class FpsGraphController {
    constructor(doc, config){
        this.stopwatch_ = new Fpswatch();
        this.onTick_ = this.onTick_.bind(this);
        this.ticker = config.ticker;
        this.ticker.emitter.on("tick", this.onTick_);
        this.props = config.props;
        this.value_ = config.value;
        this.viewProps = config.viewProps;
        this.view = new FpsView(doc, {
            viewProps: this.viewProps
        });
        this.graphC_ = new GraphLogController(doc, {
            formatter: createNumberFormatter(0),
            props: this.props,
            rows: config.rows,
            value: this.value_,
            viewProps: this.viewProps
        });
        this.view.graphElement.appendChild(this.graphC_.view.element);
        this.viewProps.handleDispose(()=>{
            this.graphC_.viewProps.set("disposed", true);
            this.ticker.dispose();
        });
    }
    get fps() {
        return this.stopwatch_.fps;
    }
    begin() {
        this.stopwatch_.begin(new Date());
    }
    end() {
        this.stopwatch_.end(new Date());
    }
    onTick_() {
        const fps = this.fps;
        if (fps !== null) {
            const buffer = this.value_.rawValue;
            this.value_.rawValue = createPushedBuffer(buffer, fps);
            this.view.valueElement.textContent = fps.toFixed(0);
        }
    }
}
class FpsGraphBladeController extends BladeController {
    constructor(doc, config){
        const fc = config.valueController;
        const lc = new LabelController(doc, {
            blade: config.blade,
            props: config.labelProps,
            valueController: fc
        });
        super({
            blade: config.blade,
            view: lc.view,
            viewProps: fc.viewProps
        });
        this.valueController = fc;
        this.labelController = lc;
    }
}
function createTicker(document, interval) {
    return interval === 0 ? new ManualTicker() : new IntervalTicker(document, interval !== null && interval !== void 0 ? interval : Constants.monitor.defaultInterval);
}
const FpsGraphBladePlugin = createPlugin({
    id: "fpsgraph",
    type: "blade",
    accept (params) {
        const result = parseRecord(params, (p)=>({
                view: p.required.constant("fpsgraph"),
                interval: p.optional.number,
                label: p.optional.string,
                rows: p.optional.number,
                max: p.optional.number,
                min: p.optional.number
            }));
        return result ? {
            params: result
        } : null;
    },
    controller (args) {
        var _a, _b, _c, _d;
        const interval = (_a = args.params.interval) !== null && _a !== void 0 ? _a : 500;
        return new FpsGraphBladeController(args.document, {
            blade: args.blade,
            labelProps: ValueMap.fromObject({
                label: args.params.label
            }),
            valueController: new FpsGraphController(args.document, {
                props: ValueMap.fromObject({
                    max: (_b = args.params.max) !== null && _b !== void 0 ? _b : 90,
                    min: (_c = args.params.min) !== null && _c !== void 0 ? _c : 0
                }),
                rows: (_d = args.params.rows) !== null && _d !== void 0 ? _d : 2,
                ticker: createTicker(args.document, interval),
                value: createValue(initializeBuffer(80)),
                viewProps: args.viewProps
            })
        });
    },
    api (args) {
        if (!(args.controller instanceof FpsGraphBladeController)) return null;
        return new FpsGraphBladeApi(args.controller);
    }
});
class Interval {
    constructor(min, max){
        this.min = min;
        this.max = max;
    }
    static isObject(obj) {
        if (typeof obj !== "object" || obj === null) return false;
        const min = obj.min;
        const max = obj.max;
        if (typeof min !== "number" || typeof max !== "number") return false;
        return true;
    }
    static equals(v1, v2) {
        return v1.min === v2.min && v1.max === v2.max;
    }
    get length() {
        return this.max - this.min;
    }
    toObject() {
        return {
            min: this.min,
            max: this.max
        };
    }
}
const IntervalAssembly = {
    fromComponents: (comps)=>new Interval(comps[0], comps[1]),
    toComponents: (p)=>[
            p.min,
            p.max
        ]
};
class IntervalConstraint {
    constructor(edge){
        this.edge = edge;
    }
    constrain(value) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (value.min <= value.max) return new Interval((_b = (_a = this.edge) === null || _a === void 0 ? void 0 : _a.constrain(value.min)) !== null && _b !== void 0 ? _b : value.min, (_d = (_c = this.edge) === null || _c === void 0 ? void 0 : _c.constrain(value.max)) !== null && _d !== void 0 ? _d : value.max);
        const c = (value.min + value.max) / 2;
        return new Interval((_f = (_e = this.edge) === null || _e === void 0 ? void 0 : _e.constrain(c)) !== null && _f !== void 0 ? _f : c, (_h = (_g = this.edge) === null || _g === void 0 ? void 0 : _g.constrain(c)) !== null && _h !== void 0 ? _h : c);
    }
}
const className$2 = ClassName("rsltxt");
class RangeSliderTextView {
    constructor(doc, config){
        this.sliderView_ = config.sliderView;
        this.textView_ = config.textView;
        this.element = doc.createElement("div");
        this.element.classList.add(className$2());
        const sliderElem = doc.createElement("div");
        sliderElem.classList.add(className$2("s"));
        sliderElem.appendChild(this.sliderView_.element);
        this.element.appendChild(sliderElem);
        const textElem = doc.createElement("div");
        textElem.classList.add(className$2("t"));
        textElem.appendChild(this.textView_.element);
        this.element.appendChild(textElem);
    }
}
const className$1 = ClassName("rsl");
class RangeSliderView {
    constructor(doc, config){
        this.onSliderPropsChange_ = this.onSliderPropsChange_.bind(this);
        this.onValueChange_ = this.onValueChange_.bind(this);
        this.sliderProps_ = config.sliderProps;
        this.sliderProps_.emitter.on("change", this.onSliderPropsChange_);
        this.element = doc.createElement("div");
        this.element.classList.add(className$1());
        config.viewProps.bindClassModifiers(this.element);
        this.value_ = config.value;
        this.value_.emitter.on("change", this.onValueChange_);
        const trackElem = doc.createElement("div");
        trackElem.classList.add(className$1("t"));
        this.element.appendChild(trackElem);
        this.trackElement = trackElem;
        const barElem = doc.createElement("div");
        barElem.classList.add(className$1("b"));
        trackElem.appendChild(barElem);
        this.barElement = barElem;
        const knobElems = [
            "min",
            "max"
        ].map((modifier)=>{
            const elem = doc.createElement("div");
            elem.classList.add(className$1("k"), className$1("k", modifier));
            trackElem.appendChild(elem);
            return elem;
        });
        this.knobElements = [
            knobElems[0],
            knobElems[1]
        ];
        this.update_();
    }
    valueToX_(value) {
        const min = this.sliderProps_.get("min");
        const max = this.sliderProps_.get("max");
        return constrainRange(mapRange(value, min, max, 0, 1), 0, 1) * 100;
    }
    update_() {
        const v = this.value_.rawValue;
        if (v.length === 0) this.element.classList.add(className$1(undefined, "zero"));
        else this.element.classList.remove(className$1(undefined, "zero"));
        const xs = [
            this.valueToX_(v.min),
            this.valueToX_(v.max)
        ];
        this.barElement.style.left = `${xs[0]}%`;
        this.barElement.style.right = `${100 - xs[1]}%`;
        this.knobElements.forEach((elem, index)=>{
            elem.style.left = `${xs[index]}%`;
        });
    }
    onSliderPropsChange_() {
        this.update_();
    }
    onValueChange_() {
        this.update_();
    }
}
class RangeSliderController {
    constructor(doc, config){
        this.grabbing_ = null;
        this.grabOffset_ = 0;
        this.onPointerDown_ = this.onPointerDown_.bind(this);
        this.onPointerMove_ = this.onPointerMove_.bind(this);
        this.onPointerUp_ = this.onPointerUp_.bind(this);
        this.sliderProps = config.sliderProps;
        this.viewProps = config.viewProps;
        this.value = config.value;
        this.view = new RangeSliderView(doc, {
            sliderProps: this.sliderProps,
            value: this.value,
            viewProps: config.viewProps
        });
        const ptHandler = new PointerHandler(this.view.trackElement);
        ptHandler.emitter.on("down", this.onPointerDown_);
        ptHandler.emitter.on("move", this.onPointerMove_);
        ptHandler.emitter.on("up", this.onPointerUp_);
    }
    ofs_() {
        if (this.grabbing_ === "min") return this.view.knobElements[0].getBoundingClientRect().width / 2;
        if (this.grabbing_ === "max") return -this.view.knobElements[1].getBoundingClientRect().width / 2;
        return 0;
    }
    valueFromData_(data) {
        if (!data.point) return null;
        const p = (data.point.x + this.ofs_()) / data.bounds.width;
        const min = this.sliderProps.get("min");
        const max = this.sliderProps.get("max");
        return mapRange(p, 0, 1, min, max);
    }
    onPointerDown_(ev) {
        if (!ev.data.point) return;
        const p = ev.data.point.x / ev.data.bounds.width;
        const v = this.value.rawValue;
        const min = this.sliderProps.get("min");
        const max = this.sliderProps.get("max");
        const pmin = mapRange(v.min, min, max, 0, 1);
        const pmax = mapRange(v.max, min, max, 0, 1);
        if (Math.abs(pmax - p) <= 0.025) this.grabbing_ = "max";
        else if (Math.abs(pmin - p) <= 0.025) this.grabbing_ = "min";
        else if (p >= pmin && p <= pmax) {
            this.grabbing_ = "length";
            this.grabOffset_ = mapRange(p - pmin, 0, 1, 0, max - min);
        } else if (p < pmin) {
            this.grabbing_ = "min";
            this.onPointerMove_(ev);
        } else if (p > pmax) {
            this.grabbing_ = "max";
            this.onPointerMove_(ev);
        }
    }
    applyPointToValue_(data, opts) {
        const v = this.valueFromData_(data);
        if (v === null) return;
        const rmin = this.sliderProps.get("min");
        const rmax = this.sliderProps.get("max");
        if (this.grabbing_ === "min") this.value.setRawValue(new Interval(v, this.value.rawValue.max), opts);
        else if (this.grabbing_ === "max") this.value.setRawValue(new Interval(this.value.rawValue.min, v), opts);
        else if (this.grabbing_ === "length") {
            const len = this.value.rawValue.length;
            let min = v - this.grabOffset_;
            let max = min + len;
            if (min < rmin) {
                min = rmin;
                max = rmin + len;
            } else if (max > rmax) {
                min = rmax - len;
                max = rmax;
            }
            this.value.setRawValue(new Interval(min, max), opts);
        }
    }
    onPointerMove_(ev) {
        this.applyPointToValue_(ev.data, {
            forceEmit: false,
            last: false
        });
    }
    onPointerUp_(ev) {
        this.applyPointToValue_(ev.data, {
            forceEmit: true,
            last: true
        });
        this.grabbing_ = null;
    }
}
class RangeSliderTextController {
    constructor(doc, config){
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.sc_ = new RangeSliderController(doc, config);
        const axis = {
            constraint: config.constraint,
            textProps: config.textProps
        };
        this.tc_ = new PointNdTextController(doc, {
            assembly: IntervalAssembly,
            axes: [
                axis,
                axis
            ],
            parser: config.parser,
            value: this.value,
            viewProps: config.viewProps
        });
        this.view = new RangeSliderTextView(doc, {
            sliderView: this.sc_.view,
            textView: this.tc_.view
        });
    }
    get textController() {
        return this.tc_;
    }
}
function intervalFromUnknown(value) {
    return Interval.isObject(value) ? new Interval(value.min, value.max) : new Interval(0, 0);
}
function writeInterval(target, value) {
    target.writeProperty("max", value.max);
    target.writeProperty("min", value.min);
}
function createConstraint(params) {
    const constraints = [];
    const rc = createRangeConstraint(params);
    if (rc) constraints.push(rc);
    const sc = createStepConstraint(params);
    if (sc) constraints.push(sc);
    return new IntervalConstraint(new CompositeConstraint(constraints));
}
const IntervalInputPlugin = createPlugin({
    id: "input-interval",
    type: "input",
    accept: (exValue, params)=>{
        if (!Interval.isObject(exValue)) return null;
        const result = parseRecord(params, (p)=>Object.assign(Object.assign({}, createNumberTextInputParamsParser(p)), {
                readonly: p.optional.constant(false)
            }));
        return result ? {
            initialValue: new Interval(exValue.min, exValue.max),
            params: result
        } : null;
    },
    binding: {
        reader: (_args)=>intervalFromUnknown,
        constraint: (args)=>createConstraint(args.params),
        equals: Interval.equals,
        writer: (_args)=>writeInterval
    },
    controller (args) {
        const v = args.value;
        const c = args.constraint;
        if (!(c instanceof IntervalConstraint)) throw TpError.shouldNeverHappen();
        const midValue = (v.rawValue.min + v.rawValue.max) / 2;
        const textProps = ValueMap.fromObject(createNumberTextPropsObject(args.params, midValue));
        const drc = c.edge && findConstraint(c.edge, DefiniteRangeConstraint);
        if (drc) return new RangeSliderTextController(args.document, {
            constraint: c.edge,
            parser: parseNumber,
            sliderProps: new ValueMap({
                keyScale: textProps.value("keyScale"),
                max: drc.values.value("max"),
                min: drc.values.value("min")
            }),
            textProps: textProps,
            value: v,
            viewProps: args.viewProps
        });
        const axis = {
            constraint: c.edge,
            textProps: textProps
        };
        return new PointNdTextController(args.document, {
            assembly: IntervalAssembly,
            axes: [
                axis,
                axis
            ],
            parser: parseNumber,
            value: v,
            viewProps: args.viewProps
        });
    }
});
class RadioCellApi {
    constructor(controller){
        this.controller_ = controller;
    }
    get disabled() {
        return this.controller_.viewProps.get("disabled");
    }
    set disabled(disabled) {
        this.controller_.viewProps.set("disabled", disabled);
    }
    get title() {
        var _a;
        return (_a = this.controller_.props.get("title")) !== null && _a !== void 0 ? _a : "";
    }
    set title(title) {
        this.controller_.props.set("title", title);
    }
}
class TpRadioGridChangeEvent extends TpChangeEvent {
    constructor(target, cell, index, value, last){
        super(target, value, last);
        this.cell = cell;
        this.index = index;
    }
}
class RadioGridApi extends BladeApi {
    constructor(controller){
        super(controller);
        this.cellToApiMap_ = new Map();
        const gc = this.controller.valueController;
        gc.cellControllers.forEach((cc)=>{
            const api = new RadioCellApi(cc);
            this.cellToApiMap_.set(cc, api);
        });
    }
    get value() {
        return this.controller.value;
    }
    cell(x, y) {
        const gc = this.controller.valueController;
        const cc = gc.cellControllers[y * gc.size[0] + x];
        return this.cellToApiMap_.get(cc);
    }
    on(eventName, handler) {
        const bh = handler.bind(this);
        this.controller.value.emitter.on(eventName, (ev)=>{
            const gc = this.controller.valueController;
            const cc = gc.findCellByValue(ev.rawValue);
            if (!cc) return;
            const capi = this.cellToApiMap_.get(cc);
            if (!capi) return;
            const i = gc.cellControllers.indexOf(cc);
            bh(new TpRadioGridChangeEvent(this, capi, [
                i % gc.size[0],
                Math.floor(i / gc.size[0])
            ], ev.rawValue));
        });
    }
}
const className = ClassName("rad");
class RadioView {
    constructor(doc, config){
        this.element = doc.createElement("div");
        this.element.classList.add(className());
        config.viewProps.bindClassModifiers(this.element);
        const labelElem = doc.createElement("label");
        labelElem.classList.add(className("l"));
        this.element.appendChild(labelElem);
        const inputElem = doc.createElement("input");
        inputElem.classList.add(className("i"));
        inputElem.name = config.name;
        inputElem.type = "radio";
        config.viewProps.bindDisabled(inputElem);
        labelElem.appendChild(inputElem);
        this.inputElement = inputElem;
        const bodyElem = doc.createElement("div");
        bodyElem.classList.add(className("b"));
        labelElem.appendChild(bodyElem);
        const titleElem = doc.createElement("div");
        titleElem.classList.add(className("t"));
        bodyElem.appendChild(titleElem);
        bindValueMap(config.props, "title", (title)=>{
            titleElem.textContent = title;
        });
    }
}
class RadioController {
    constructor(doc, config){
        this.props = config.props;
        this.viewProps = config.viewProps;
        this.view = new RadioView(doc, {
            name: config.name,
            props: this.props,
            viewProps: this.viewProps
        });
    }
}
class RadioGridController {
    constructor(doc, config){
        this.cellCs_ = [];
        this.cellValues_ = [];
        this.onCellInputChange_ = this.onCellInputChange_.bind(this);
        this.size = config.size;
        const [w, h] = this.size;
        for(let y = 0; y < h; y++)for(let x = 0; x < w; x++){
            const bc = new RadioController(doc, {
                name: config.groupName,
                props: ValueMap.fromObject(Object.assign({}, config.cellConfig(x, y))),
                viewProps: ViewProps.create()
            });
            this.cellCs_.push(bc);
            this.cellValues_.push(config.cellConfig(x, y).value);
        }
        this.value = config.value;
        bindValue(this.value, (value)=>{
            const cc = this.findCellByValue(value);
            if (!cc) return;
            cc.view.inputElement.checked = true;
        });
        this.viewProps = ViewProps.create();
        this.view = new PlainView(doc, {
            viewProps: this.viewProps,
            viewName: "radgrid"
        });
        this.view.element.style.gridTemplateColumns = `repeat(${w}, 1fr)`;
        this.cellCs_.forEach((bc)=>{
            bc.view.inputElement.addEventListener("change", this.onCellInputChange_);
            this.view.element.appendChild(bc.view.element);
        });
    }
    get cellControllers() {
        return this.cellCs_;
    }
    findCellByValue(value) {
        const index = this.cellValues_.findIndex((v)=>v === value);
        if (index < 0) return null;
        return this.cellCs_[index];
    }
    onCellInputChange_(ev) {
        const inputElem = ev.currentTarget;
        const index = this.cellCs_.findIndex((c)=>c.view.inputElement === inputElem);
        if (index < 0) return;
        this.value.rawValue = this.cellValues_[index];
    }
}
const RadioGridBladePlugin = function() {
    return createPlugin({
        id: "radiogrid",
        type: "blade",
        accept (params) {
            const result = parseRecord(params, (p)=>({
                    cells: p.required.function,
                    groupName: p.required.string,
                    size: p.required.array(p.required.number),
                    value: p.required.raw,
                    view: p.required.constant("radiogrid"),
                    label: p.optional.string
                }));
            return result ? {
                params: result
            } : null;
        },
        controller (args) {
            const value = createValue(args.params.value);
            return new LabeledValueBladeController(args.document, {
                blade: args.blade,
                props: ValueMap.fromObject({
                    label: args.params.label
                }),
                value: value,
                valueController: new RadioGridController(args.document, {
                    groupName: args.params.groupName,
                    cellConfig: args.params.cells,
                    size: args.params.size,
                    value: value
                })
            });
        },
        api (args) {
            if (!(args.controller instanceof LabeledValueBladeController)) return null;
            if (!(args.controller.valueController instanceof RadioGridController)) return null;
            return new RadioGridApi(args.controller);
        }
    });
}();
function createRadioGridInputPlugin(config) {
    return createPlugin({
        id: "input-radiogrid",
        type: "input",
        accept (value, params) {
            if (!config.isType(value)) return null;
            const result = parseRecord(params, (p)=>({
                    cells: p.required.function,
                    groupName: p.required.string,
                    size: p.required.array(p.required.number),
                    view: p.required.constant("radiogrid")
                }));
            return result ? {
                initialValue: value,
                params: result
            } : null;
        },
        binding: config.binding,
        controller: (args)=>{
            return new RadioGridController(args.document, {
                cellConfig: args.params.cells,
                groupName: args.params.groupName,
                size: args.params.size,
                value: args.value
            });
        }
    });
}
const RadioGruidNumberInputPlugin = createRadioGridInputPlugin({
    isType: (value)=>{
        return typeof value === "number";
    },
    binding: {
        reader: (_args)=>numberFromUnknown,
        writer: (_args)=>writePrimitive
    }
});
const RadioGruidStringInputPlugin = createRadioGridInputPlugin({
    isType: (value)=>{
        return typeof value === "string";
    },
    binding: {
        reader: (_args)=>stringFromUnknown,
        writer: (_args)=>writePrimitive
    }
});
const RadioGruidBooleanInputPlugin = createRadioGridInputPlugin({
    isType: (value)=>{
        return typeof value === "boolean";
    },
    binding: {
        reader: (_args)=>boolFromUnknown,
        writer: (_args)=>writePrimitive
    }
});
const id = "essentials";
const css = '.tp-cbzgv,.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-radv_b,.tp-rslv_k,.tp-cbzv_b{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-radv_b:hover,.tp-rslv_k:hover,.tp-cbzv_b:hover{background-color:var(--btn-bg-h)}.tp-radv_b:focus,.tp-rslv_k:focus,.tp-cbzv_b:focus{background-color:var(--btn-bg-f)}.tp-radv_b:active,.tp-rslv_k:active,.tp-cbzv_b:active{background-color:var(--btn-bg-a)}.tp-radv_b:disabled,.tp-rslv_k:disabled,.tp-cbzv_b:disabled{opacity:.5}.tp-cbzgv{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-cbzgv:hover{background-color:var(--in-bg-h)}.tp-cbzgv:focus{background-color:var(--in-bg-f)}.tp-cbzgv:active{background-color:var(--in-bg-a)}.tp-cbzgv:disabled{opacity:.5}.tp-btngridv{border-radius:var(--bld-br);display:grid;overflow:hidden;gap:2px}.tp-btngridv.tp-v-disabled{opacity:.5}.tp-btngridv .tp-btnv_b:disabled{opacity:1}.tp-btngridv .tp-btnv_b:disabled .tp-btnv_t{opacity:.5}.tp-btngridv .tp-btnv_b{border-radius:0}.tp-cbzv{position:relative}.tp-cbzv_h{display:flex}.tp-cbzv_b{margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-cbzv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-cbzv_b svg path{stroke:var(--bs-bg);stroke-width:2}.tp-cbzv_t{flex:1}.tp-cbzv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-cbzv.tp-cbzv-expanded .tp-cbzv_p{margin-top:var(--cnt-usp);opacity:1}.tp-cbzv.tp-cbzv-cpl .tp-cbzv_p{overflow:visible}.tp-cbzv .tp-popv{left:calc(-1 * var(--cnt-hp));position:absolute;right:calc(-1 * var(--cnt-hp));top:var(--cnt-usz)}.tp-cbzpv_t{margin-top:var(--cnt-usp)}.tp-cbzgv{height:auto;overflow:hidden;position:relative}.tp-cbzgv.tp-v-disabled{opacity:.5}.tp-cbzgv_p{left:16px;position:absolute;right:16px;top:0}.tp-cbzgv_g{cursor:pointer;display:block;height:calc(var(--cnt-usz) * 5);width:100%}.tp-cbzgv_u{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_l{fill:rgba(0,0,0,0);stroke:var(--in-fg)}.tp-cbzgv_v{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-cbzgv_h{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;pointer-events:none;position:absolute;width:4px}.tp-cbzgv:focus .tp-cbzgv_h-sel{background-color:var(--in-fg);border-width:0}.tp-cbzprvv{cursor:pointer;height:4px;padding:4px 0;position:relative}.tp-cbzprvv_g{display:block;height:100%;overflow:visible;width:100%}.tp-cbzprvv_t{opacity:.5;stroke:var(--mo-fg)}.tp-cbzprvv_m{background-color:var(--mo-fg);border-radius:50%;height:4px;margin-left:-2px;margin-top:-2px;opacity:0;position:absolute;top:50%;transition:opacity .2s ease-out;width:4px}.tp-cbzprvv_m.tp-cbzprvv_m-a{opacity:1}.tp-fpsv{position:relative}.tp-fpsv_l{bottom:4px;color:var(--mo-fg);line-height:1;right:4px;pointer-events:none;position:absolute}.tp-fpsv_u{margin-left:.2em;opacity:.7}.tp-rslv{cursor:pointer;padding-left:8px;padding-right:8px}.tp-rslv.tp-v-disabled{opacity:.5}.tp-rslv_t{height:calc(var(--cnt-usz));position:relative}.tp-rslv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:-4px;right:-4px}.tp-rslv_b{bottom:0;top:0;position:absolute}.tp-rslv_b::before{background-color:var(--in-fg);content:"";height:2px;margin-top:-1px;position:absolute;top:50%;left:0;right:0}.tp-rslv_k{height:calc(var(--cnt-usz) - 8px);margin-top:calc((var(--cnt-usz) - 8px)/-2);position:absolute;top:50%;width:8px}.tp-rslv_k.tp-rslv_k-min{margin-left:-8px}.tp-rslv_k.tp-rslv_k-max{margin-left:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-min{border-bottom-right-radius:0;border-top-right-radius:0}.tp-rslv.tp-rslv-zero .tp-rslv_k.tp-rslv_k-max{border-bottom-left-radius:0;border-top-left-radius:0}.tp-rsltxtv{display:flex}.tp-rsltxtv_s{flex:1}.tp-rsltxtv_t{flex:1;margin-left:4px}.tp-radv_l{display:block;position:relative}.tp-radv_i{left:0;opacity:0;position:absolute;top:0}.tp-radv_b{opacity:.5}.tp-radv_i:hover+.tp-radv_b{background-color:var(--btn-bg-h)}.tp-radv_i:focus+.tp-radv_b{background-color:var(--btn-bg-f)}.tp-radv_i:active+.tp-radv_b{background-color:var(--btn-bg-a)}.tp-radv_i:checked+.tp-radv_b{opacity:1}.tp-radv_t{bottom:0;color:inherit;left:0;overflow:hidden;position:absolute;right:0;text-align:center;text-overflow:ellipsis;top:0}.tp-radv_i:disabled+.tp-radv_b>.tp-radv_t{opacity:.5}.tp-radgridv{border-radius:var(--bld-br);display:grid;overflow:hidden;gap:2px}.tp-radgridv.tp-v-disabled{opacity:.5}.tp-radgridv .tp-radv_b{border-radius:0}';
const plugins = [
    ButtonGridBladePlugin,
    CubicBezierBladePlugin,
    FpsGraphBladePlugin,
    IntervalInputPlugin,
    RadioGridBladePlugin,
    RadioGruidBooleanInputPlugin,
    RadioGruidNumberInputPlugin,
    RadioGruidStringInputPlugin
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2S9PZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
const config = {
    speed: 0.2,
    noiseForce: 0.5,
    noiseScale: 0.3
};
exports.default = config;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6oY9T","8tyFx"], "8tyFx", "parcelRequire3fb0")

//# sourceMappingURL=index.891f0f0b.js.map

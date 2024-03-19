globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, getRequestHeaders, removeResponseHeader, createError, getResponseHeader, readBody, getQuery as getQuery$1, getCookie, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/ofetch/dist/node.mjs';
import destr, { destr as destr$1 } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/hookable/dist/index.mjs';
import { snakeCase, kebabCase, pascalCase, camelCase } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/scule/dist/index.mjs';
import { klona } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/klona/dist/index.mjs';
import defu, { defuFn, defu as defu$1 } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash, isRelative as isRelative$1 } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47fs_45lite from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/radix3/dist/index.mjs';
import Path from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/crosspath/dist/esm/index.js';
import getImageSize from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/image-size/dist/index.js';
import debounce from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/debounce/index.js';
import githubDriver from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unstorage/drivers/github.mjs';
import { visit, SKIP, CONTINUE } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unist-util-visit/index.js';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, extname } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/pathe/dist/index.mjs';
import nodemailer from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/nodemailer/lib/nodemailer.js';
import findIndex from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/@dword-design/functions/dist/find-index.js';
import omit$1 from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/@dword-design/functions/dist/omit.js';
import { unified } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unified/index.js';
import { toString } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/mdast-util-to-string/index.js';
import { postprocess, preprocess } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/micromark/index.js';
import { stringifyPosition } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/unist-util-stringify-position/index.js';
import { markdownLineEnding, markdownSpace } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/micromark-util-character/index.js';
import { push, splice } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/micromark-util-chunked/index.js';
import { resolveAll } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/micromark-util-resolve-all/index.js';
import { normalizeUri } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/micromark-util-sanitize-uri/index.js';
import slugify from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/slugify/slugify.js';
import remarkParse from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/remark-parse/index.js';
import remark2rehype from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/remark-rehype/index.js';
import remarkMDC, { parseFrontMatter } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/remark-mdc/dist/index.mjs';
import { toString as toString$1 } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/hast-util-to-string/index.js';
import Slugger from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/github-slugger/index.js';
import { detab } from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/detab/index.js';
import remarkEmoji from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/remark-emoji/index.js';
import remarkGFM from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/remark-gfm/index.js';
import rehypeExternalLinks from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/rehype-external-links/index.js';
import rehypeSortAttributeValues from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/rehype-sort-attribute-values/index.js';
import rehypeSortAttributes from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/rehype-sort-attributes/index.js';
import rehypeRaw from 'file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/rehype-raw/index.js';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "gtagId": "G-WGEXVSDGV1",
    "mdc": {
      "components": {
        "prose": true,
        "map": {
          "p": "prose-p",
          "a": "prose-a",
          "blockquote": "prose-blockquote",
          "code-inline": "prose-code-inline",
          "code": "ProseCodeInline",
          "em": "prose-em",
          "h1": "prose-h1",
          "h2": "prose-h2",
          "h3": "prose-h3",
          "h4": "prose-h4",
          "h5": "prose-h5",
          "h6": "prose-h6",
          "hr": "prose-hr",
          "img": "prose-img",
          "ul": "prose-ul",
          "ol": "prose-ol",
          "li": "prose-li",
          "strong": "prose-strong",
          "table": "prose-table",
          "thead": "prose-thead",
          "tbody": "prose-tbody",
          "td": "prose-td",
          "th": "prose-th",
          "tr": "prose-tr"
        }
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      }
    },
    "content": {
      "locales": [],
      "defaultLocale": "",
      "integrity": 1710825503037,
      "experimental": {
        "stripQueryParameters": false,
        "advanceQuery": false,
        "clientDB": false
      },
      "respectPathCase": false,
      "api": {
        "baseURL": "/api/_content"
      },
      "navigation": {
        "fields": []
      },
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "highlight": false,
      "wsUrl": "",
      "documentDriven": false,
      "host": "",
      "trailingSlash": false,
      "search": "",
      "contentHead": true,
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      }
    }
  },
  "mdc": {
    "highlight": {}
  },
  "content": {
    "cacheVersion": 2,
    "cacheIntegrity": "dLYeSFVwsx",
    "transformers": [],
    "base": "",
    "api": {
      "baseURL": "/api/_content"
    },
    "watch": {
      "ws": {
        "port": {
          "port": 4000,
          "portRange": [
            4000,
            4040
          ]
        },
        "hostname": "localhost",
        "showURL": false
      }
    },
    "sources": {},
    "ignores": [
      "^(?:(?!(md|csv|ya?ml|json)).)+$"
    ],
    "locales": [],
    "defaultLocale": "",
    "highlight": false,
    "markdown": {
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      },
      "remarkPlugins": {},
      "rehypePlugins": {}
    },
    "yaml": {},
    "csv": {
      "delimeter": ",",
      "json": true
    },
    "navigation": {
      "fields": []
    },
    "contentHead": true,
    "documentDriven": false,
    "respectPathCase": false,
    "experimental": {
      "clientDB": false,
      "stripQueryParameters": false,
      "advanceQuery": false,
      "search": ""
    }
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"E:/desktop-temp/sources/rpai/rpai-official/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"E:\\desktop-temp\\sources\\rpai\\rpai-official\\.data\\kv"}));
storage.mount('content:source:content', unstorage_47drivers_47fs({"name":"content:source:content","driver":"fs","base":"E:\\desktop-temp\\sources\\rpai\\rpai-official\\content","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache:content', unstorage_47drivers_47fs({"driver":"fs","base":"E:\\desktop-temp\\sources\\rpai\\rpai-official\\.nuxt\\content-cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"E:\\desktop-temp\\sources\\rpai\\rpai-official","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"E:\\desktop-temp\\sources\\rpai\\rpai-official\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"E:\\desktop-temp\\sources\\rpai\\rpai-official\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"E:\\desktop-temp\\sources\\rpai\\rpai-official\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function matchTokens(value) {
  let tokens = [];
  if (typeof value === "string") {
    tokens = value.match(/[^\s,|]+/g) || [];
  } else if (Array.isArray(value)) {
    tokens = value.filter((value2) => typeof value2 === "string").reduce((output, input) => {
      return [...output, ...matchTokens(input)];
    }, []);
  } else if (!!value && typeof value === "object") {
    tokens = Object.values(value).reduce((output, value2) => {
      return [...output, ...matchTokens(value2)];
    }, []);
  }
  return tokens.length ? Array.from(new Set(tokens)) : tokens;
}

const extensions = {
  // used to get image size
  image: matchTokens("png jpg jpeg gif svg webp ico"),
  // unused for now
  media: matchTokens("mp3 m4a wav mp4 mov webm ogg avi flv avchd")
};

function parseQuery(path) {
  const matches = path.match(/\?.+$/);
  return matches ? matches[0] : "";
}
function removeQuery(path) {
  return path.replace(/\?.*$/, "");
}
function isRelative(path) {
  return !(path.startsWith("http") || Path.isAbsolute(path));
}
function isImage(path) {
  const ext = Path.extname(path).substring(1);
  return extensions.image.includes(ext);
}
function isArticle(path) {
  return removeQuery(path).endsWith(".md");
}
function isAsset(path) {
  return !isArticle(path);
}
function isValidAsset(value) {
  return typeof value === "string" && isAsset(value) && isRelative(value);
}

function walk(node, callback, filter) {
  function visit(node2, callback2, parent, key) {
    if (filter) {
      const result = filter(node2, key);
      if (result === false) {
        return;
      }
    }
    if (Array.isArray(node2)) {
      node2.forEach((value, index) => {
        visit(value, callback2, node2, index);
      });
    } else if (isObject$1(node2)) {
      Object.keys(node2).forEach((key2) => {
        visit(node2[key2], callback2, node2, key2);
      });
    } else {
      callback2(node2, parent, key);
    }
  }
  visit(node, callback, { node }, "node");
}
function isObject$1(data) {
  return data && typeof data === "object" && !Array.isArray(data);
}

function walkMeta(content, callback) {
  walk(content, callback, (value, key) => !(String(key).startsWith("_") || key === "body"));
}
function walkBody(content, callback) {
  visit(content.body, (node) => node.type === "element", (node) => {
    const { tag, props } = node;
    const excluded = tags.exclude.includes(tag);
    if (excluded) {
      return SKIP;
    }
    const included = tags.include.includes(tag);
    if (included || !props) {
      return CONTINUE;
    }
    callback(node);
  });
}
const tags = {
  // unlikely to contain assets
  exclude: matchTokens({
    container: "pre code code-inline",
    formatting: "acronym abbr address bdi bdo big center cite del dfn font ins kbd mark meter progress q rp rt ruby s samp small strike sub sup time tt u var wbr",
    headers: "h1 h2 h3 h4 h5 h6",
    controls: "input textarea button select optgroup option label legend datalist output",
    media: "map area canvas svg",
    other: "style script noscript template",
    empty: "hr br"
  }),
  // may contain assets
  include: matchTokens({
    content: "main header footer section article aside details dialog summary data object nav blockquote div span p",
    table: "table caption th tr td thead tbody tfoot col colgroup",
    media: "figcaption figure picture",
    form: "form fieldset",
    list: "ul ol li dir dl dt dd",
    formatting: "strong b em i"
  }),
  // assets
  assets: "a img audio source track video embed"
};

const label = "[content-assets]";
function warn(...data) {
  console.warn(label, ...data);
}

function buildStyle(...expr) {
  return expr.map((expr2) => expr2.replace(/^[; ]+|[; ]+$/g, "")).filter((s) => s).join(";").replace(/\s*;\s*/g, "; ") + ";";
}
function buildQuery(...expr) {
  const output = expr.map((expr2) => expr2.replace(/^[?&]+|&+$/g, "")).filter((s) => s);
  if (output.length) {
    const [first, ...rest] = output;
    const isParam = (expr2) => /^[^?]+=[^=]+$/.test(expr2);
    return !isParam(first) ? rest.length > 0 ? first + (first.includes("?") ? "&" : "?") + rest.join("&") : first : "?" + output.join("&");
  }
  return "";
}

function makeSourceStorage(source, key = "") {
  const storage = createStorage();
  const options = typeof source === "string" ? { driver: "fs", base: source } : source;
  switch (options.driver) {
    case "fs":
      storage.mount(key, unstorage_47drivers_47fs({
        ...options,
        ignore: [
          "[^:]+?\\.md",
          "_dir\\.yml"
        ]
      }));
      break;
    case "github":
      storage.mount(key, githubDriver({
        branch: "main",
        dir: "/",
        ...options
      }));
      break;
  }
  return storage;
}

function makeAssetsManager(publicPath) {
  const indexKey = "assets.json";
  const storage = makeSourceStorage(Path.join(publicPath, ".."));
  void storage.watch(async (event, key) => {
    if (event === "update" && key === indexKey) {
      await load();
    }
  });
  const assets = {};
  async function load() {
    const data = await storage.getItem(indexKey);
    Object.assign(assets, data || {});
  }
  const save = debounce(function() {
    void storage.setItem(indexKey, assets);
  }, 50);
  function resolveAsset(content, relAsset, registerContent = false) {
    const srcDir = Path.dirname(content._file);
    const srcAsset = Path.join(srcDir, relAsset);
    const asset = assets[srcAsset];
    if (asset && registerContent) {
      const { _id } = content;
      if (!asset.content.includes(_id)) {
        asset.content.push(_id);
        save();
      }
    }
    return asset || {};
  }
  function setAsset(path) {
    const { srcRel, srcAttr } = getAssetPaths(publicPath, path);
    const { width, height } = getAssetSize(path);
    const oldAsset = assets[srcRel];
    const newAsset = {
      srcAttr,
      content: oldAsset?.content || [],
      width,
      height
    };
    assets[srcRel] = newAsset;
    save();
    return newAsset;
  }
  function getAsset(path) {
    const { srcRel } = getAssetPaths(publicPath, path);
    return srcRel ? { ...assets[srcRel] } : void 0;
  }
  function removeAsset(path) {
    const { srcRel } = getAssetPaths(publicPath, path);
    const asset = assets[srcRel];
    if (asset) {
      delete assets[srcRel];
      save();
    }
    return asset;
  }
  void load();
  return {
    setAsset,
    getAsset,
    removeAsset,
    resolveAsset
  };
}
function getAssetPaths(srcDir, srcAbs) {
  const srcRel = Path.relative(srcDir, srcAbs);
  const srcAttr = "/" + srcRel;
  return {
    srcRel,
    srcAttr
  };
}
function getAssetSize(srcAbs) {
  if (isImage(srcAbs)) {
    try {
      return getImageSize(srcAbs);
    } catch (err) {
      warn(`could not read image "${srcAbs}`);
    }
  }
  return {};
}

const publicPath = "E:/desktop-temp/sources/rpai/rpai-official/.nuxt/content-assets/public";
const imageSizes = ["style"];

function processMeta(content, imageSizes2 = [], updated = []) {
  walkMeta(content, (value, parent, key) => {
    if (isValidAsset(value)) {
      const { srcAttr, width, height } = resolveAsset(content, removeQuery(value), true);
      if (srcAttr) {
        const query = width && height && (imageSizes2.includes("src") || imageSizes2.includes("url")) ? `width=${width}&height=${height}` : "";
        const srcUrl = query ? buildQuery(srcAttr, parseQuery(value), query) : srcAttr;
        parent[key] = srcUrl;
        updated.push(`meta: ${key} to "${srcUrl}"`);
      }
    }
  });
}
function processBody(content, imageSizes2 = [], updated = []) {
  walkBody(content, function(node) {
    const { tag, props } = node;
    for (const [prop, value] of Object.entries(props)) {
      if (typeof value !== "string") {
        return;
      }
      const { srcAttr, width, height } = resolveAsset(content, value, true);
      if (srcAttr) {
        node.props[prop] = srcAttr;
        if (node.tag === "img" || node.tag === "nuxt-img") {
          if (width && height) {
            if (imageSizes2.includes("attrs")) {
              node.props.width = width;
              node.props.height = height;
            }
            if (imageSizes2.includes("style")) {
              const ratio = `${width}/${height}`;
              if (typeof node.props.style === "string") {
                node.props.style = buildStyle(node.props.style, `aspect-ratio: ${ratio}`);
              } else {
                node.props.style ||= {};
                node.props.style.aspectRatio = ratio;
              }
            }
          }
        } else if (node.tag === "a") {
          node.props.target ||= "_blank";
        }
        updated.push(`page: ${tag}[${prop}] to "${srcAttr}"`);
      }
    }
  });
}
const { resolveAsset } = makeAssetsManager(publicPath);
const plugin = async (nitro) => {
  nitro.hooks.hook("content:file:afterParse", function(content) {
    if (content._extension === "md") {
      const updated = [];
      processMeta(content, imageSizes, updated);
      processBody(content, imageSizes, updated);
    }
  });
};
const _UQS5P7tXVh = plugin;

const plugins = [
  _UQS5P7tXVh
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"25be-GtcUDu58/Zz/oejmvYQWfoY3TqY\"",
    "mtime": "2024-03-19T05:16:28.519Z",
    "size": 9662,
    "path": "../../.output/public/favicon.ico"
  },
  "/img/article-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"7758-Vh75RUOsxsXhfx/iB4wcSzHxAnc\"",
    "mtime": "2024-03-19T05:16:28.520Z",
    "size": 30552,
    "path": "../../.output/public/img/article-bg.jpg"
  },
  "/img/case-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"3f6d3-YXPy/D9QhMNIFyJh/nUdK8nbyns\"",
    "mtime": "2024-03-19T05:16:28.521Z",
    "size": 259795,
    "path": "../../.output/public/img/case-bg.jpg"
  },
  "/img/contact-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"3ff6b8-c7zo50kKk7nbwWuSiM8Oy823Sag\"",
    "mtime": "2024-03-19T05:16:28.529Z",
    "size": 4191928,
    "path": "../../.output/public/img/contact-bg.jpg"
  },
  "/img/home-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"8f4f6-cFlgKQdcowO8vvYj7Le5Yq2wrsY\"",
    "mtime": "2024-03-19T05:16:28.531Z",
    "size": 586998,
    "path": "../../.output/public/img/home-bg.jpg"
  },
  "/js/scripts.js": {
    "type": "application/javascript",
    "etag": "\"3b0-FQV/4Pk5bfd7Z2kfXCet7ni9vgU\"",
    "mtime": "2024-03-19T05:16:28.532Z",
    "size": 944,
    "path": "../../.output/public/js/scripts.js"
  },
  "/svg/At work-amico.svg": {
    "type": "image/svg+xml",
    "etag": "\"7c10-K4pJ8rplA1sSKIA4STMQQ8eDKAQ\"",
    "mtime": "2024-03-19T05:16:28.532Z",
    "size": 31760,
    "path": "../../.output/public/svg/At work-amico.svg"
  },
  "/svg/Business Plan-amico.svg": {
    "type": "image/svg+xml",
    "etag": "\"228c2-rDVrPbjeBQgAP8XOpSZVk318UyM\"",
    "mtime": "2024-03-19T05:16:28.533Z",
    "size": 141506,
    "path": "../../.output/public/svg/Business Plan-amico.svg"
  },
  "/svg/Code typing-amico.svg": {
    "type": "image/svg+xml",
    "etag": "\"73ca-P9I33vxw73zXqtmfAlQ9lMLkyJw\"",
    "mtime": "2024-03-19T05:16:28.533Z",
    "size": 29642,
    "path": "../../.output/public/svg/Code typing-amico.svg"
  },
  "/svg/Collaboration-amico.svg": {
    "type": "image/svg+xml",
    "etag": "\"ab73-Owv4PtbKv8xhHprnyOOxpx/cLGg\"",
    "mtime": "2024-03-19T05:16:28.533Z",
    "size": 43891,
    "path": "../../.output/public/svg/Collaboration-amico.svg"
  },
  "/svg/Designer girl-amico.svg": {
    "type": "image/svg+xml",
    "etag": "\"a76b-ONG2d+Pr69Q1sce9wrSsI33y2BU\"",
    "mtime": "2024-03-19T05:16:28.533Z",
    "size": 42859,
    "path": "../../.output/public/svg/Designer girl-amico.svg"
  },
  "/svg/Research paper-amico.svg": {
    "type": "image/svg+xml",
    "etag": "\"13281-IzUMpXBgTxPkqfSlxFTQDRfZZN0\"",
    "mtime": "2024-03-19T05:16:28.535Z",
    "size": 78465,
    "path": "../../.output/public/svg/Research paper-amico.svg"
  },
  "/svg/Social strategy-amico.svg": {
    "type": "image/svg+xml",
    "etag": "\"5a4d-DTpfvYIdghH6LEE4iZvLFDfwgWY\"",
    "mtime": "2024-03-19T05:16:28.535Z",
    "size": 23117,
    "path": "../../.output/public/svg/Social strategy-amico.svg"
  },
  "/svg/Take Away-amico.svg": {
    "type": "image/svg+xml",
    "etag": "\"34042-uqTOCGi6JptvQtewF2HLq6Q+4tk\"",
    "mtime": "2024-03-19T05:16:28.536Z",
    "size": 213058,
    "path": "../../.output/public/svg/Take Away-amico.svg"
  },
  "/svg/Working-amico.svg": {
    "type": "image/svg+xml",
    "etag": "\"ab9b-xMmz6Inln4rSG0u29gqmByH9LFk\"",
    "mtime": "2024-03-19T05:16:28.537Z",
    "size": 43931,
    "path": "../../.output/public/svg/Working-amico.svg"
  },
  "/_nuxt/article-bg.a8576d38.jpg": {
    "type": "image/jpeg",
    "etag": "\"7758-Vh75RUOsxsXhfx/iB4wcSzHxAnc\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 30552,
    "path": "../../.output/public/_nuxt/article-bg.a8576d38.jpg"
  },
  "/_nuxt/Article.6395e4d5.js": {
    "type": "application/javascript",
    "etag": "\"107a-Eh6m+VeOMdvz/kqdg9H5MVWbWCI\"",
    "mtime": "2024-03-19T05:18:31.237Z",
    "size": 4218,
    "path": "../../.output/public/_nuxt/Article.6395e4d5.js"
  },
  "/_nuxt/Article.6f85bf22.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"78-vz0azCt1t1AIMNNAhG4RoSi1ZHo\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 120,
    "path": "../../.output/public/_nuxt/Article.6f85bf22.css"
  },
  "/_nuxt/ArticleMain.37ff7c3d.js": {
    "type": "application/javascript",
    "etag": "\"24b-cuDc4u5OWXmXZicQO/XQozFbF9s\"",
    "mtime": "2024-03-19T05:18:31.232Z",
    "size": 587,
    "path": "../../.output/public/_nuxt/ArticleMain.37ff7c3d.js"
  },
  "/_nuxt/At work-amico.d933d43f.svg": {
    "type": "image/svg+xml",
    "etag": "\"7c10-K4pJ8rplA1sSKIA4STMQQ8eDKAQ\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 31760,
    "path": "../../.output/public/_nuxt/At work-amico.d933d43f.svg"
  },
  "/_nuxt/BlockQuote.f6c4fe51.js": {
    "type": "application/javascript",
    "etag": "\"106-3wBMizGF3Re5PjISy2XE6igyzrk\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 262,
    "path": "../../.output/public/_nuxt/BlockQuote.f6c4fe51.js"
  },
  "/_nuxt/Business Plan-amico.b593602c.svg": {
    "type": "image/svg+xml",
    "etag": "\"228c2-rDVrPbjeBQgAP8XOpSZVk318UyM\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 141506,
    "path": "../../.output/public/_nuxt/Business Plan-amico.b593602c.svg"
  },
  "/_nuxt/CaptionTextMuted.41cded64.js": {
    "type": "application/javascript",
    "etag": "\"108-minL4YqnBpntrJvdILysuo/D3GQ\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 264,
    "path": "../../.output/public/_nuxt/CaptionTextMuted.41cded64.js"
  },
  "/_nuxt/Case.131d6b93.js": {
    "type": "application/javascript",
    "etag": "\"f4c-lNi8u0ksa9w9m2H4iqUzvPBt1Ec\"",
    "mtime": "2024-03-19T05:18:31.237Z",
    "size": 3916,
    "path": "../../.output/public/_nuxt/Case.131d6b93.js"
  },
  "/_nuxt/Case.7fb0c0d5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11b-UcKXVjokh8OW7QI2aMoLcDaFDtE\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 283,
    "path": "../../.output/public/_nuxt/Case.7fb0c0d5.css"
  },
  "/_nuxt/client-db.a6394c90.js": {
    "type": "application/javascript",
    "etag": "\"540b-p4BIeXqQlozne9Tp/dPhYv5p+sM\"",
    "mtime": "2024-03-19T05:18:31.237Z",
    "size": 21515,
    "path": "../../.output/public/_nuxt/client-db.a6394c90.js"
  },
  "/_nuxt/Code typing-amico.055deb4d.svg": {
    "type": "image/svg+xml",
    "etag": "\"73ca-P9I33vxw73zXqtmfAlQ9lMLkyJw\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 29642,
    "path": "../../.output/public/_nuxt/Code typing-amico.055deb4d.svg"
  },
  "/_nuxt/Collaboration-amico.a6191a3d.svg": {
    "type": "image/svg+xml",
    "etag": "\"ab73-Owv4PtbKv8xhHprnyOOxpx/cLGg\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 43891,
    "path": "../../.output/public/_nuxt/Collaboration-amico.a6191a3d.svg"
  },
  "/_nuxt/Contact.3de21b6d.js": {
    "type": "application/javascript",
    "etag": "\"eb0-RIh8ngv1PslO12Y+28TJfqWTRLo\"",
    "mtime": "2024-03-19T05:18:31.232Z",
    "size": 3760,
    "path": "../../.output/public/_nuxt/Contact.3de21b6d.js"
  },
  "/_nuxt/ContentDoc.ab2a7f4b.js": {
    "type": "application/javascript",
    "etag": "\"814-I8uEfGr2CPbukIXKnYvIc2OFQF8\"",
    "mtime": "2024-03-19T05:18:31.232Z",
    "size": 2068,
    "path": "../../.output/public/_nuxt/ContentDoc.ab2a7f4b.js"
  },
  "/_nuxt/ContentList.189d8502.js": {
    "type": "application/javascript",
    "etag": "\"380-XZa5JM/kgKJqi6CUeO/JOOrS2kY\"",
    "mtime": "2024-03-19T05:18:31.229Z",
    "size": 896,
    "path": "../../.output/public/_nuxt/ContentList.189d8502.js"
  },
  "/_nuxt/ContentNavigation.739eb2de.js": {
    "type": "application/javascript",
    "etag": "\"687-4C4KO2K+4FUVVmnNwi1gC59+ZwM\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 1671,
    "path": "../../.output/public/_nuxt/ContentNavigation.739eb2de.js"
  },
  "/_nuxt/ContentQuery.931fa0a0.js": {
    "type": "application/javascript",
    "etag": "\"9c1-G3fkbHXW21g3Mjce1fGy87bmpxk\"",
    "mtime": "2024-03-19T05:18:31.232Z",
    "size": 2497,
    "path": "../../.output/public/_nuxt/ContentQuery.931fa0a0.js"
  },
  "/_nuxt/ContentRenderer.ad1f83fe.js": {
    "type": "application/javascript",
    "etag": "\"4f7-jm76J5WnMsWNQHJdFlkSKwdUqYI\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 1271,
    "path": "../../.output/public/_nuxt/ContentRenderer.ad1f83fe.js"
  },
  "/_nuxt/ContentRendererMarkdown.7974d054.js": {
    "type": "application/javascript",
    "etag": "\"aa-OIDZTq7yi5zVj4hHwUYj6YzlTlo\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 170,
    "path": "../../.output/public/_nuxt/ContentRendererMarkdown.7974d054.js"
  },
  "/_nuxt/ContentRendererMarkdown.vue.9929f665.js": {
    "type": "application/javascript",
    "etag": "\"5bf6-Q3Dd6/UDQmQtzyim7sNAcHkNEpw\"",
    "mtime": "2024-03-19T05:18:31.237Z",
    "size": 23542,
    "path": "../../.output/public/_nuxt/ContentRendererMarkdown.vue.9929f665.js"
  },
  "/_nuxt/ContentSlot.21096be4.js": {
    "type": "application/javascript",
    "etag": "\"799-KFlaNPVnGEnm4F9grEcx2EhMdeU\"",
    "mtime": "2024-03-19T05:18:31.237Z",
    "size": 1945,
    "path": "../../.output/public/_nuxt/ContentSlot.21096be4.js"
  },
  "/_nuxt/Designer girl-amico.b56ce843.svg": {
    "type": "image/svg+xml",
    "etag": "\"a76b-ONG2d+Pr69Q1sce9wrSsI33y2BU\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 42859,
    "path": "../../.output/public/_nuxt/Designer girl-amico.b56ce843.svg"
  },
  "/_nuxt/DocumentDrivenEmpty.f8c315c1.js": {
    "type": "application/javascript",
    "etag": "\"120-z6tZGMTiiPZ4GkO5C8KETuNFsaM\"",
    "mtime": "2024-03-19T05:18:31.232Z",
    "size": 288,
    "path": "../../.output/public/_nuxt/DocumentDrivenEmpty.f8c315c1.js"
  },
  "/_nuxt/DocumentDrivenNotFound.539fda6c.js": {
    "type": "application/javascript",
    "etag": "\"9f-ufFWxVyUaFVzxO9XiB6Qz+hYEvA\"",
    "mtime": "2024-03-19T05:18:31.231Z",
    "size": 159,
    "path": "../../.output/public/_nuxt/DocumentDrivenNotFound.539fda6c.js"
  },
  "/_nuxt/entry.88c23b46.js": {
    "type": "application/javascript",
    "etag": "\"3c72f-98T13JCmaq0QT2vtMo2C+VQukcw\"",
    "mtime": "2024-03-19T05:18:31.237Z",
    "size": 247599,
    "path": "../../.output/public/_nuxt/entry.88c23b46.js"
  },
  "/_nuxt/error-404.094ddfa8.js": {
    "type": "application/javascript",
    "etag": "\"8e2-N7Jz1Obj5aCvoodKGbl6FrWKBPI\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 2274,
    "path": "../../.output/public/_nuxt/error-404.094ddfa8.js"
  },
  "/_nuxt/error-404.7fc72018.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-iNt1cqPQ0WDudfCTZVQd31BeRGs\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 3630,
    "path": "../../.output/public/_nuxt/error-404.7fc72018.css"
  },
  "/_nuxt/error-500.7170081c.js": {
    "type": "application/javascript",
    "etag": "\"78b-EZJ4Dv36xguB2QSNQiBHD/W7dbs\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 1931,
    "path": "../../.output/public/_nuxt/error-500.7170081c.js"
  },
  "/_nuxt/error-500.c5df6088.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-ByRo+49BgcevWdRjJy3CMx2IA5k\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 1950,
    "path": "../../.output/public/_nuxt/error-500.c5df6088.css"
  },
  "/_nuxt/index.41ceaddd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7d-vwB06WYVQvrUWg2gEVe/33Iad3k\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 125,
    "path": "../../.output/public/_nuxt/index.41ceaddd.css"
  },
  "/_nuxt/index.876b2189.js": {
    "type": "application/javascript",
    "etag": "\"1ccb-2ZA2MtglpoDb16H5vB40a4G586o\"",
    "mtime": "2024-03-19T05:18:31.237Z",
    "size": 7371,
    "path": "../../.output/public/_nuxt/index.876b2189.js"
  },
  "/_nuxt/index.b0fe9fac.js": {
    "type": "application/javascript",
    "etag": "\"2f0-+VP+dWrnpfm5Rq0aTasKZMJC7qs\"",
    "mtime": "2024-03-19T05:18:31.237Z",
    "size": 752,
    "path": "../../.output/public/_nuxt/index.b0fe9fac.js"
  },
  "/_nuxt/Markdown.b0bdc1f6.js": {
    "type": "application/javascript",
    "etag": "\"149-iLLnb8/dsg0FTiV5QJ7Z1VBFMZI\"",
    "mtime": "2024-03-19T05:18:31.232Z",
    "size": 329,
    "path": "../../.output/public/_nuxt/Markdown.b0bdc1f6.js"
  },
  "/_nuxt/preview.88d1b3d9.js": {
    "type": "application/javascript",
    "etag": "\"2e42-ID1ODJD/8JTtHTb2a3F9TGkOSlA\"",
    "mtime": "2024-03-19T05:18:31.237Z",
    "size": 11842,
    "path": "../../.output/public/_nuxt/preview.88d1b3d9.js"
  },
  "/_nuxt/ProseA.38b78f8f.js": {
    "type": "application/javascript",
    "etag": "\"166-aGKATT5uBkYj80XqGC5U/pvbUb0\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 358,
    "path": "../../.output/public/_nuxt/ProseA.38b78f8f.js"
  },
  "/_nuxt/ProseBlockquote.ad4b46c2.js": {
    "type": "application/javascript",
    "etag": "\"f7-8L453GZ/zMOeVqgX99Uz7UH3Vt8\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 247,
    "path": "../../.output/public/_nuxt/ProseBlockquote.ad4b46c2.js"
  },
  "/_nuxt/ProseCode.7ecc0f20.js": {
    "type": "application/javascript",
    "etag": "\"62-LDclP2xYQ6XJxbCujWRhtiXZ2ko\"",
    "mtime": "2024-03-19T05:18:31.231Z",
    "size": 98,
    "path": "../../.output/public/_nuxt/ProseCode.7ecc0f20.js"
  },
  "/_nuxt/ProseCode.vue.193ff273.js": {
    "type": "application/javascript",
    "etag": "\"141-T8oter9wPcQdN9HHR3wyOkLw2aY\"",
    "mtime": "2024-03-19T05:18:31.232Z",
    "size": 321,
    "path": "../../.output/public/_nuxt/ProseCode.vue.193ff273.js"
  },
  "/_nuxt/ProseCodeInline.54af4b4a.js": {
    "type": "application/javascript",
    "etag": "\"f1-ynRUeDwaTWyfDeLcpF3ElCBJh+8\"",
    "mtime": "2024-03-19T05:18:31.232Z",
    "size": 241,
    "path": "../../.output/public/_nuxt/ProseCodeInline.54af4b4a.js"
  },
  "/_nuxt/ProseEm.aa324c81.js": {
    "type": "application/javascript",
    "etag": "\"ef-Xo7Vtrd0cto20JbKbIPbjdt0Aho\"",
    "mtime": "2024-03-19T05:18:31.232Z",
    "size": 239,
    "path": "../../.output/public/_nuxt/ProseEm.aa324c81.js"
  },
  "/_nuxt/ProseH1.f752401c.js": {
    "type": "application/javascript",
    "etag": "\"1ba-I2RJaexAamERWjwk9ybkoQIJrMk\"",
    "mtime": "2024-03-19T05:18:31.232Z",
    "size": 442,
    "path": "../../.output/public/_nuxt/ProseH1.f752401c.js"
  },
  "/_nuxt/ProseH2.4f95b9da.js": {
    "type": "application/javascript",
    "etag": "\"1c0-f60Ts4Zh4S0WQtQ8fbLGHqA7l/c\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 448,
    "path": "../../.output/public/_nuxt/ProseH2.4f95b9da.js"
  },
  "/_nuxt/ProseH3.b06ced90.js": {
    "type": "application/javascript",
    "etag": "\"1c0-1rR6kbQseQFrU9nnhex7nM+4Zhw\"",
    "mtime": "2024-03-19T05:18:31.232Z",
    "size": 448,
    "path": "../../.output/public/_nuxt/ProseH3.b06ced90.js"
  },
  "/_nuxt/ProseH4.d6c44c71.js": {
    "type": "application/javascript",
    "etag": "\"1c0-XhIn5q+mlJjKmnNOSRFehcu30e8\"",
    "mtime": "2024-03-19T05:18:31.232Z",
    "size": 448,
    "path": "../../.output/public/_nuxt/ProseH4.d6c44c71.js"
  },
  "/_nuxt/ProseH5.188f888f.js": {
    "type": "application/javascript",
    "etag": "\"1c0-grbAVHqrIFzQveU4G0FMPtorbsw\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 448,
    "path": "../../.output/public/_nuxt/ProseH5.188f888f.js"
  },
  "/_nuxt/ProseH6.7716ae9a.js": {
    "type": "application/javascript",
    "etag": "\"1c0-ZKlYZPTrTSOGQv5FkjuMyCh7qDA\"",
    "mtime": "2024-03-19T05:18:31.232Z",
    "size": 448,
    "path": "../../.output/public/_nuxt/ProseH6.7716ae9a.js"
  },
  "/_nuxt/ProseHr.47833da5.js": {
    "type": "application/javascript",
    "etag": "\"cb-3ZvmiHwVDqYWE7b4oZXcbPzi4Qs\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 203,
    "path": "../../.output/public/_nuxt/ProseHr.47833da5.js"
  },
  "/_nuxt/ProseImg.91c99701.js": {
    "type": "application/javascript",
    "etag": "\"26c-ijvXIt4NWM4iiWnrW75W7Jewc6Q\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 620,
    "path": "../../.output/public/_nuxt/ProseImg.91c99701.js"
  },
  "/_nuxt/ProseLi.825809b6.js": {
    "type": "application/javascript",
    "etag": "\"ef-lYucJFDaQe9qZXqFdK45bsk6ZkM\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 239,
    "path": "../../.output/public/_nuxt/ProseLi.825809b6.js"
  },
  "/_nuxt/ProseOl.7a5421f5.js": {
    "type": "application/javascript",
    "etag": "\"ef-yhhps2D2AbR6c/bJNUqMu2Arqhg\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 239,
    "path": "../../.output/public/_nuxt/ProseOl.7a5421f5.js"
  },
  "/_nuxt/ProseP.4d824c53.js": {
    "type": "application/javascript",
    "etag": "\"ee-plhPSIYN3iSUohKZ2K1ucHNi1n8\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 238,
    "path": "../../.output/public/_nuxt/ProseP.4d824c53.js"
  },
  "/_nuxt/ProsePre.da0a74f9.js": {
    "type": "application/javascript",
    "etag": "\"2e5-stERlxUQOMJqNYOQvxKRopI+41U\"",
    "mtime": "2024-03-19T05:18:31.233Z",
    "size": 741,
    "path": "../../.output/public/_nuxt/ProsePre.da0a74f9.js"
  },
  "/_nuxt/ProsePre.e63e49c6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2e-GbvrqT5j9gSWlpa8e36U/Kv6Zx0\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 46,
    "path": "../../.output/public/_nuxt/ProsePre.e63e49c6.css"
  },
  "/_nuxt/ProseScript.859388b7.js": {
    "type": "application/javascript",
    "etag": "\"1eb-bwHMuov/B/aZhOEKLdyn1ZK3NQA\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 491,
    "path": "../../.output/public/_nuxt/ProseScript.859388b7.js"
  },
  "/_nuxt/ProseStrong.1eaa8f51.js": {
    "type": "application/javascript",
    "etag": "\"f3-fmTMG4tlhF0J6hJb09Gr0oenheM\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 243,
    "path": "../../.output/public/_nuxt/ProseStrong.1eaa8f51.js"
  },
  "/_nuxt/ProseTable.31b69b07.js": {
    "type": "application/javascript",
    "etag": "\"f2-p7A3fRauHgAG7/0L2dFtKU6UErI\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 242,
    "path": "../../.output/public/_nuxt/ProseTable.31b69b07.js"
  },
  "/_nuxt/ProseTbody.8043913a.js": {
    "type": "application/javascript",
    "etag": "\"f2-76PkMjYOWYHo6VAyog3f78F0/QY\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 242,
    "path": "../../.output/public/_nuxt/ProseTbody.8043913a.js"
  },
  "/_nuxt/ProseTd.6efaf0bf.js": {
    "type": "application/javascript",
    "etag": "\"ef-814P4RFGR1pK5367vGraUk0mHs0\"",
    "mtime": "2024-03-19T05:18:31.232Z",
    "size": 239,
    "path": "../../.output/public/_nuxt/ProseTd.6efaf0bf.js"
  },
  "/_nuxt/ProseTh.ce87978a.js": {
    "type": "application/javascript",
    "etag": "\"ef-ABiKuF7hJe6nE3am6LKaadvG0zE\"",
    "mtime": "2024-03-19T05:18:31.232Z",
    "size": 239,
    "path": "../../.output/public/_nuxt/ProseTh.ce87978a.js"
  },
  "/_nuxt/ProseThead.1e5d47ed.js": {
    "type": "application/javascript",
    "etag": "\"f2-FUaCyw2E/Y+AYwE+afUGqBJF280\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 242,
    "path": "../../.output/public/_nuxt/ProseThead.1e5d47ed.js"
  },
  "/_nuxt/ProseTr.07237ae1.js": {
    "type": "application/javascript",
    "etag": "\"ea-QPKa0gYWK5NxSBtLV5TOHbFE+iA\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 234,
    "path": "../../.output/public/_nuxt/ProseTr.07237ae1.js"
  },
  "/_nuxt/ProseUl.eacd5075.js": {
    "type": "application/javascript",
    "etag": "\"ef-oG9nm1w8YFiYK0EGlgy55CyCtTU\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 239,
    "path": "../../.output/public/_nuxt/ProseUl.eacd5075.js"
  },
  "/_nuxt/query.ab9bd6ae.js": {
    "type": "application/javascript",
    "etag": "\"1111-YExtjjmnEw0qkPDfI+Vi4u9L3EA\"",
    "mtime": "2024-03-19T05:18:31.237Z",
    "size": 4369,
    "path": "../../.output/public/_nuxt/query.ab9bd6ae.js"
  },
  "/_nuxt/SectionHeading.f97f1409.js": {
    "type": "application/javascript",
    "etag": "\"109-ZdbSt1ghMuO49EBzjoKYkPsiPKY\"",
    "mtime": "2024-03-19T05:18:31.235Z",
    "size": 265,
    "path": "../../.output/public/_nuxt/SectionHeading.f97f1409.js"
  },
  "/_nuxt/setup.75a1a77c.js": {
    "type": "application/javascript",
    "etag": "\"4bc-i07iVgZXPRKp50kCGoKd6bGx3Ro\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 1212,
    "path": "../../.output/public/_nuxt/setup.75a1a77c.js"
  },
  "/_nuxt/Social strategy-amico.56cab27d.svg": {
    "type": "image/svg+xml",
    "etag": "\"5a4d-DTpfvYIdghH6LEE4iZvLFDfwgWY\"",
    "mtime": "2024-03-19T05:18:31.214Z",
    "size": 23117,
    "path": "../../.output/public/_nuxt/Social strategy-amico.56cab27d.svg"
  },
  "/_nuxt/Take Away-amico.f942001b.svg": {
    "type": "image/svg+xml",
    "etag": "\"34042-uqTOCGi6JptvQtewF2HLq6Q+4tk\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 213058,
    "path": "../../.output/public/_nuxt/Take Away-amico.f942001b.svg"
  },
  "/_nuxt/Working-amico.da169cdd.svg": {
    "type": "image/svg+xml",
    "etag": "\"ab9b-xMmz6Inln4rSG0u29gqmByH9LFk\"",
    "mtime": "2024-03-19T05:18:31.228Z",
    "size": 43931,
    "path": "../../.output/public/_nuxt/Working-amico.da169cdd.svg"
  },
  "/_nuxt/_...slug_.9ee24d50.js": {
    "type": "application/javascript",
    "etag": "\"25b-9nAVbP83dDtD/0zEHlLvuViiSNw\"",
    "mtime": "2024-03-19T05:18:31.232Z",
    "size": 603,
    "path": "../../.output/public/_nuxt/_...slug_.9ee24d50.js"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2024-03-19T05:18:31.232Z",
    "size": 91,
    "path": "../../.output/public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  },
  "/article/pension-agency/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"2c44a-QoaGNmyaPxQsyMam/PKxEK5qPHw\"",
    "mtime": "2024-03-19T05:16:28.469Z",
    "size": 181322,
    "path": "../../.output/public/article/pension-agency/1.jpg"
  },
  "/article/rpai-private-project/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"6d5d-D4duVcWRKuF16NyhgL4Kb0thzl4\"",
    "mtime": "2024-03-19T05:16:28.469Z",
    "size": 27997,
    "path": "../../.output/public/article/rpai-private-project/1.jpg"
  },
  "/article/rpai-private-project/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"12dea-Vsj5V176U4RSfUDBUWTeiZY82l4\"",
    "mtime": "2024-03-19T05:16:28.470Z",
    "size": 77290,
    "path": "../../.output/public/article/rpai-private-project/2.jpg"
  },
  "/article/trend_department-RPA-prioriy/1.jpeg": {
    "type": "image/jpeg",
    "etag": "\"2c44a-QoaGNmyaPxQsyMam/PKxEK5qPHw\"",
    "mtime": "2024-03-19T05:16:28.471Z",
    "size": 181322,
    "path": "../../.output/public/article/trend_department-RPA-prioriy/1.jpeg"
  },
  "/article/trend_department-RPA-prioriy/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"4297d-ylxRJC+MoY/9KrDakvnq+oul3zk\"",
    "mtime": "2024-03-19T05:16:28.472Z",
    "size": 272765,
    "path": "../../.output/public/article/trend_department-RPA-prioriy/2.jpg"
  },
  "/case/hr-department/test.jpg": {
    "type": "image/jpeg",
    "etag": "\"4f7784-gY/NT4rPRTu/xg9PT63YY3MJKw4\"",
    "mtime": "2024-03-19T05:16:28.485Z",
    "size": 5207940,
    "path": "../../.output/public/case/hr-department/test.jpg"
  },
  "/case/pension-agency/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"12dea-Vsj5V176U4RSfUDBUWTeiZY82l4\"",
    "mtime": "2024-03-19T05:16:28.486Z",
    "size": 77290,
    "path": "../../.output/public/case/pension-agency/2.jpg"
  },
  "/case/rpai-private-project/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"12dea-Vsj5V176U4RSfUDBUWTeiZY82l4\"",
    "mtime": "2024-03-19T05:16:28.487Z",
    "size": 77290,
    "path": "../../.output/public/case/rpai-private-project/2.jpg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const options = {
  "message": [
    {
      "name": "rpaitw.com",
      "to": "rpadigitaltransformer@gmail.com"
    }
  ],
  "smtp": {
    "service": "gmail",
    "auth": {
      "user": "rpadigitaltransformer@gmail.com",
      "pass": "kkejtveutetnqnvp"
    }
  }
};

const send = (async (body, options, transport) => {
  body = {
    config: 0,
    ...body
  };
  if (typeof body.config === 'string') {
    const configIndex = findIndex(_ => _.name === body.config)(options.message);
    if (configIndex === -1) {
      throw new Error(`Message config with name '${body.config}' not found.`);
    }
    body.config = configIndex;
  } else if (!options.message[body.config]) {
    throw new Error(`Message config not found at index ${body.config}.`);
  }
  await transport.sendMail({
    ...omit$1(['config', 'to', 'cc', 'bcc'])(body),
    ...omit$1(['name'])(options.message[body.config])
  });
});

const transport = nodemailer.createTransport(options.smtp);
const _yBJYGd = defineEventHandler(async event => {
  try {
    await send(await readBody(event), options, transport);
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    });
  }
  return '';
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const omit = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => !keys.includes(key)) : obj;
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => {
  return Array.isArray(value) ? value : [void 0, null].includes(value) ? [] : [value];
};

const arrayParams = ["sort", "where", "only", "without"];
function createQuery(fetcher, opts = {}) {
  const queryParams = {};
  for (const key of Object.keys(opts.initialParams || {})) {
    queryParams[key] = arrayParams.includes(key) ? ensureArray(opts.initialParams[key]) : opts.initialParams[key];
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const resolveResult = (result) => {
    if (opts.legacy) {
      if (result?.surround) {
        return result.surround;
      }
      if (!result) {
        return result;
      }
      if (result?.dirConfig) {
        result.result = {
          _path: result.dirConfig?._path,
          ...result.result,
          _dir: result.dirConfig
        };
      }
      return result?._path || Array.isArray(result) || !Object.prototype.hasOwnProperty.call(result, "result") ? result : result?.result;
    }
    return result;
  };
  const query = {
    params: () => ({
      ...queryParams,
      ...queryParams.where ? { where: [...ensureArray(queryParams.where)] } : {},
      ...queryParams.sort ? { sort: [...ensureArray(queryParams.sort)] } : {}
    }),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query).then(resolveResult),
    findOne: () => fetcher($set("first")(true)).then(resolveResult),
    count: () => fetcher($set("count")(true)).then(resolveResult),
    // locale
    locale: (_locale) => query.where({ _locale }),
    withSurround: $set("surround", (surroundQuery, options) => ({ query: surroundQuery, ...options })),
    withDirConfig: () => $set("dirConfig")(true)
  };
  if (opts.legacy) {
    query.findSurround = (surroundQuery, options) => {
      return query.withSurround(surroundQuery, options).find().then(resolveResult);
    };
    return query;
  }
  return query;
}

const defineTransformer = (transformer) => {
  return transformer;
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs)
      ) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument },
    void 0
  );
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler()(
    postprocess(
      parse(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) {
        and.call(this, token);
      }
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) {
        and.call(this, token);
      }
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

const useProcessorPlugins = async (processor, plugins = {}) => {
  const toUse = Object.entries(plugins).filter((p) => p[1] !== false);
  for (const plugin of toUse) {
    const instance = plugin[1].instance || await import(
      /* @vite-ignore */
      plugin[0]
    ).then((m) => m.default || m);
    processor.use(instance, plugin[1].options);
  }
};

const unsafeLinkPrefix = [
  "javascript:",
  "data:text/html",
  "vbscript:",
  "data:text/javascript",
  "data:text/vbscript",
  "data:text/css",
  "data:text/plain",
  "data:text/xml"
];
const validateProp = (attribute, value) => {
  if (attribute.startsWith("on")) {
    return false;
  }
  if (attribute === "href" || attribute === "src") {
    return !unsafeLinkPrefix.some((prefix) => value.toLowerCase().startsWith(prefix));
  }
  return true;
};
const validateProps = (props) => {
  if (!props) {
    return {};
  }
  return Object.fromEntries(
    Object.entries(props).filter(([name, value]) => {
      const isValid = validateProp(name, value);
      if (!isValid) {
        console.warn(`[@nuxtjs/mdc] removing unsafe attribute: ${name}="${value}"`);
      }
      return isValid;
    })
  );
};

function compileHast() {
  const slugs = new Slugger();
  function compileToJSON(node, parent) {
    if (node.type === "root") {
      return {
        type: "root",
        children: node.children.map((child) => compileToJSON(child, node)).filter(Boolean)
      };
    }
    if (node.type === "element") {
      if (node.tagName === "p" && node.children.every((child) => child.type === "text" && /^\s*$/.test(child.value))) {
        return null;
      }
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children?.flatMap((child) => {
          if (child.type === "element" && child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName?.match(/^h\d$/)) {
        node.properties = node.properties || {};
        node.properties.id = String(node.properties?.id || slugs.slug(toString$1(node))).replace(/-+/g, "-").replace(/^-|-$/g, "").replace(/^(\d)/, "_$1");
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      return {
        type: "element",
        tag: node.tagName,
        props: validateProps(node.properties),
        children: node.children.map((child) => compileToJSON(child, node)).filter(Boolean)
      };
    }
    if (node.type === "text") {
      if (node.value !== "\n" || parent?.properties?.emptyLinePlaceholder) {
        return {
          type: "text",
          value: node.value
        };
      }
    }
    return null;
  }
  this.Compiler = (tree) => {
    const body = compileToJSON(tree);
    let excerpt = void 0;
    const excerptIndex = tree.children.findIndex((node) => node.type === "comment" && node.value?.trim() === "more");
    if (excerptIndex !== -1) {
      excerpt = compileToJSON({
        type: "root",
        children: tree.children.slice(0, excerptIndex)
      });
      if (excerpt.children.find((node) => node.type === "element" && node.tag === "pre")) {
        const lastChild = body.children[body.children.length - 1];
        if (lastChild.type === "element" && lastChild.tag === "style") {
          excerpt.children.push(lastChild);
        }
      }
    }
    return {
      body,
      excerpt
    };
  };
}

function emphasis(state, node) {
  const result = {
    type: "element",
    tagName: "em",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function parseThematicBlock(lang) {
  if (!lang?.trim()) {
    return {
      language: void 0,
      highlights: void 0,
      filename: void 0,
      meta: void 0
    };
  }
  const languageMatches = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokensMatches = lang.match(/{([^}]*)}/);
  const filenameMatches = lang.match(/\[((\\]|[^\]])*)\]/);
  const meta = lang.replace(languageMatches?.[0] ?? "", "").replace(highlightTokensMatches?.[0] ?? "", "").replace(filenameMatches?.[0] ?? "", "").trim();
  return {
    language: languageMatches?.[0] || void 0,
    highlights: parseHighlightedLines(highlightTokensMatches?.[1] || void 0),
    // https://github.com/nuxt/content/pull/2169
    filename: filenameMatches?.[1].replace(/\\]/g, "]") || void 0,
    meta
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}

const code = (state, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename, meta } = parseThematicBlock(lang);
  const value = node.value ? detab(node.value + "\n") : "";
  let result = {
    type: "element",
    tagName: "code",
    properties: { __ignoreMap: "" },
    children: [{ type: "text", value }]
  };
  if (meta) {
    result.data = {
      // @ts-ignore
      meta
    };
  }
  state.patch(node, result);
  result = state.applyData(node, result);
  const properties = {
    language,
    filename,
    highlights,
    meta,
    code: value
  };
  if (language) {
    properties.className = ["language-" + language];
  }
  result = { type: "element", tagName: "pre", properties, children: [result] };
  state.patch(node, result);
  return result;
};

function html(state, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (state.dangerous || state.options?.allowDangerousHtml) {
    const result = { type: "raw", value: node.value };
    state.patch(node, result);
    return state.applyData(node, result);
  }
  return void 0;
}

function link$1(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function list(state, node) {
  const properties = {};
  const results = state.all(node);
  let index = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    properties.start = node.start;
  }
  while (++index < results.length) {
    const child = results[index];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties.className = ["contains-task-list"];
      break;
    }
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    properties.className = ["contains-task-list"];
  }
  const result = {
    type: "element",
    tagName: node.ordered ? "ol" : "ul",
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

function paragraph(state, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return state.all(node);
    }
  }
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function image(state, node) {
  const properties = { ...node.attributes, src: normalizeUri(node.url) };
  if (node.alt !== null && node.alt !== void 0) {
    properties.alt = node.alt;
  }
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node, result);
  return state.applyData(node, result);
}

function strong(state, node) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function inlineCode(state, node) {
  const language = node.attributes?.language || node.attributes?.lang;
  const text = { type: "text", value: node.value.replace(/\r?\n|\r/g, " ") };
  state.patch(node, text);
  const result = {
    type: "element",
    tagName: "code",
    properties: node.attributes || {},
    children: [text]
  };
  const classes = (result.properties.class || "").split(" ");
  delete result.properties.class;
  if (language) {
    result.properties.language = language;
    delete result.properties.lang;
    classes.push("language-" + language);
  }
  result.properties.className = classes.join(" ");
  state.patch(node, result);
  return state.applyData(node, result);
}

function containerComponent(state, node) {
  const result = {
    type: "element",
    tagName: node.name,
    properties: {
      ...node.attributes,
      ...node.data?.hProperties
    },
    children: state.all(node)
  };
  state.patch(node, result);
  result.attributes = node.attributes;
  result.fmAttributes = node.fmAttributes;
  return result;
}

const handlers$1 = {
  emphasis,
  code,
  link: link$1,
  paragraph,
  html,
  list,
  image,
  strong,
  inlineCode,
  containerComponent
};

const defaults = {
  remark: {
    plugins: {
      "remark-mdc": {
        instance: remarkMDC
      },
      "remark-emoji": {
        instance: remarkEmoji
      },
      "remark-gfm": {
        instance: remarkGFM
      }
    }
  },
  rehype: {
    options: {
      // @ts-ignore
      handlers: handlers$1,
      allowDangerousHtml: true
    },
    plugins: {
      "rehype-external-links": {
        instance: rehypeExternalLinks
      },
      "rehype-sort-attribute-values": {
        instance: rehypeSortAttributeValues
      },
      "rehype-sort-attributes": {
        instance: rehypeSortAttributes
      },
      "rehype-raw": {
        instance: rehypeRaw,
        options: {
          passThrough: ["element"]
        }
      }
    }
  },
  highlight: false,
  toc: {
    searchDepth: 2,
    depth: 2
  }
};

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || isTag(vnode, Symbol.for("v-txt"));
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children?.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value || "";
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).filter(Boolean).join("");
  }
  return "";
}

let moduleOptions;
const parseMarkdown = async (md, opts = {}) => {
  if (!moduleOptions) {
    moduleOptions = await import(
      '../build/mdc-imports.mjs'
      /* @vite-ignore */
    ).catch(() => ({}));
  }
  const options = defu$1(opts, {
    remark: { plugins: moduleOptions?.remarkPlugins },
    rehype: { plugins: moduleOptions?.rehypePlugins },
    highlight: moduleOptions?.highlight
  }, defaults);
  if (options.rehype?.plugins?.highlight) {
    options.rehype.plugins.highlight.options = options.highlight || {};
  }
  const { content, data: frontmatter } = await parseFrontMatter(md);
  const processor = unified();
  processor.use(remarkParse);
  await useProcessorPlugins(processor, options.remark?.plugins);
  processor.use(remark2rehype, options.rehype?.options);
  await useProcessorPlugins(processor, options.rehype?.plugins);
  processor.use(compileHast);
  const processedFile = await processor.process({ value: content, data: frontmatter });
  const result = processedFile.result;
  const data = Object.assign(
    contentHeading(result.body),
    frontmatter,
    processedFile?.data || {}
  );
  let toc;
  if (data.toc !== false) {
    const tocOption = defu$1(data.toc || {}, options.toc);
    toc = generateToc(result.body, tocOption);
  }
  return {
    data,
    body: result.body,
    excerpt: result.excerpt,
    toc
  };
};
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (id) => {
  const [_source, ...parts] = id.split(":");
  const [, filename, _extension] = parts[parts.length - 1]?.match(/(.*)\.([^.]+)$/) || [];
  if (filename) {
    parts[parts.length - 1] = filename;
  }
  const _path = (parts || []).join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en", respectPathCase = false } = options;
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = generatePath(parts.join("/"), { respectPathCase });
    return {
      _path: filePath,
      _dir: filePath.split("/").slice(-2)[0],
      _draft: content._draft ?? isDraft(_path),
      _partial: isPartial(_path),
      _locale,
      ...content,
      // TODO: move title to Markdown parser
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path, { forceLeadingSlash = true, respectPathCase = false } = {}) => {
  path = path.split("/").map((part) => slugify(refineUrlPart(part), { lower: !respectPathCase })).join("/");
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path;
};
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const parsed = await parseMarkdown(content, {
      highlight: options.highlight,
      remark: {
        plugins: config.remarkPlugins
      },
      rehype: {
        options: {
          handlers: {
            link
          }
        },
        plugins: config.rehypePlugins
      },
      toc: config.toc
    });
    return {
      ...parsed.data,
      excerpt: parsed.excerpt,
      body: {
        ...parsed.body,
        toc: parsed.toc
      },
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        options: plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}
function link(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(normalizeLink(node.url))
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function normalizeLink(link2) {
  const match = link2.match(/#.+$/);
  const hash = match ? match[0] : "";
  if (link2.replace(/#.+$/, "").endsWith(".md") && (isRelative$1(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
    return generatePath(link2.replace(".md" + hash, ""), { forceLeadingSlash: false }) + hash;
  } else {
    return link2;
  }
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: (_id, content) => {
    const { data } = parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('file://E:/desktop-temp/sources/rpai/rpai-official/node_modules/json5/lib/index.js').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr$1(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)];
    if (transformOptions === false) {
      return next;
    }
    return cur.transform(next, transformOptions || {});
  }, Promise.resolve(parsed));
  return result;
}

function makeIgnored(ignores) {
  const rxAll = ["/\\.", "/-", ...ignores.filter((p) => p)].map((p) => new RegExp(p));
  return function isIgnored(key) {
    const path = "/" + key.replace(/:/g, "/");
    return rxAll.some((rx) => rx.test(path));
  };
}

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    /**
     * Match if item equals condition
     **/
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    /**
     * Match if item not equals condition
     **/
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    /**
     * Match is condition is false
     **/
    $not: (item, condition) => !match(item, condition),
    /**
     * Match only if all of nested conditions are true
     **/
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    /**
     * Match if any of nested conditions is true
     **/
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    /**
     * Match if item is in condition array
     **/
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    /**
     * Match if item contains every condition or math every rule in condition array
     **/
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    /**
     * Ignore case contains
     **/
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    /**
     * Match if item contains at least one rule from condition array
     */
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    /**
     * Check key existence
     */
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    /**
     * Match if type of item equals condition
     */
    $type: (item, condition) => typeof item === String(condition),
    /**
     * Provides regular expression capabilities for pattern matching strings.
     */
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    /**
     * Check if item is less than condition
     */
    $lt: (item, condition) => {
      return item < condition;
    },
    /**
     * Check if item is less than or equal to condition
     */
    $lte: (item, condition) => {
      return item <= condition;
    },
    /**
     * Check if item is greater than condition
     */
    $gt: (item, condition) => {
      return item > condition;
    },
    /**
     * Check if item is greater than or equal to condition
     */
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before ?? 1;
    after = after ?? 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const matchingPipelines = [
    // Conditions
    (state, params) => {
      const filtered = state.result.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery)));
      return {
        ...state,
        result: filtered,
        total: filtered.length
      };
    },
    // Sort data
    (state, params) => ensureArray(params.sort).forEach((options) => sortList(state.result, options)),
    function fetchSurround(state, params, db) {
      if (params.surround) {
        let _surround = surround(state.result?.length === 1 ? db : state.result, params.surround);
        _surround = apply(withoutKeys(params.without))(_surround);
        _surround = apply(withKeys(params.only))(_surround);
        state.surround = _surround;
      }
      return state;
    }
  ];
  const transformingPiples = [
    // Skip first items
    (state, params) => {
      if (params.skip) {
        return {
          ...state,
          result: state.result.slice(params.skip),
          skip: params.skip
        };
      }
    },
    // Pick first items
    (state, params) => {
      if (params.limit) {
        return {
          ...state,
          result: state.result.slice(0, params.limit),
          limit: params.limit
        };
      }
    },
    function fetchDirConfig(state, params, db) {
      if (params.dirConfig) {
        const path = state.result[0]?._path || params.where?.find((w) => w._path)?._path;
        if (typeof path === "string") {
          const dirConfig = db.find((item) => item._path === joinURL(path, "_dir"));
          if (dirConfig) {
            state.dirConfig = { _path: dirConfig._path, ...withoutKeys(["_"])(dirConfig) };
          }
        }
      }
      return state;
    },
    // Remove unwanted fields
    (state, params) => ({
      ...state,
      result: apply(withoutKeys(params.without))(state.result)
    }),
    // Select only wanted fields
    (state, params) => ({
      ...state,
      result: apply(withKeys(params.only))(state.result)
    })
  ];
  return async (query) => {
    const db = await getContentsList();
    const params = query.params();
    const result1 = {
      result: db,
      limit: 0,
      skip: 0,
      total: db.length
    };
    const matchedData = matchingPipelines.reduce(($data, pipe) => pipe($data, params, db) || $data, result1);
    if (params.count) {
      return {
        result: matchedData.result.length
      };
    }
    const result = transformingPiples.reduce(($data, pipe) => pipe($data, params, db) || $data, matchedData);
    if (params.first) {
      return {
        ...omit(["skip", "limit", "total"])(result),
        result: result.result[0]
      };
    }
    return result;
  };
}

const isPreview = (event) => {
  const previewToken = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

async function getContentIndex(event) {
  const defaultLocale = useRuntimeConfig().content.defaultLocale;
  let contentIndex = await cacheStorage.getItem("content-index.json");
  if (!contentIndex) {
    const data = await getContentsList(event);
    contentIndex = data.reduce((acc, item) => {
      acc[item._path] = acc[item._path] || [];
      if (item._locale === defaultLocale) {
        acc[item._path].unshift(item._id);
      } else {
        acc[item._path].push(item._id);
      }
      return acc;
    }, {});
    await cacheStorage.setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && !params.surround && !params.dirConfig && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).flatMap((key) => index[key]);
    const contents = await Promise.all(keys.map((key) => getContent(event, key)));
    return contents;
  }
  return getContentsList(event);
}

const transformers = [];

const sourceStorage = prefixStorage(useStorage(), "content:source");
const cacheStorage = prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const isIgnored = makeIgnored(contentConfig.ignores);
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  if (key.startsWith("preview:") || isIgnored(key)) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await sourceStorage.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
function* chunksFromArray(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const keyChunks = [...chunksFromArray(keys, 10)];
  const contents = [];
  for (const chunk of keyChunks) {
    const result = await Promise.all(chunk.map((key) => getContent(event, key)));
    contents.push(...result);
  }
  return contents;
};
const pendingPromises = {};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  const meta = await sourceStorage.getMeta(id);
  const mtime = meta.mtime;
  const size = meta.size || 0;
  const hash$1 = hash({
    // Last modified time
    mtime,
    // File size
    size,
    // Add Content version to the hash, to revalidate the cache on content update
    version: contentConfig.cacheVersion,
    integrity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  if (!pendingPromises[id + hash$1]) {
    pendingPromises[id + hash$1] = new Promise(async (resolve) => {
      const body = await sourceStorage.getItem(id);
      if (body === null) {
        return resolve({ _id: contentId, body: null });
      }
      const parsed = await parseContent(contentId, body);
      await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
      });
      resolve(parsed);
      delete pendingPromises[id + hash$1];
    });
  }
  return pendingPromises[id + hash$1];
};
const parseContent = async (id, content, opts = {}) => {
  const nitroApp = useNitroApp();
  const options = defu(
    opts,
    {
      markdown: {
        ...contentConfig.markdown,
        highlight: contentConfig.highlight
      },
      csv: contentConfig.csv,
      yaml: contentConfig.yaml,
      transformers: transformers,
      pathMeta: {
        defaultLocale: contentConfig.defaultLocale,
        locales: contentConfig.locales,
        respectPathCase: contentConfig.respectPathCase
      }
    }
  );
  const file = { _id: id, body: typeof content === "string" ? content.replace(/\r\n|\r/g, "\n") : content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
};
const createServerQueryFetch = (event) => (query) => {
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent(event, query, ...pathParts) {
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  const queryBuilder = advanceQuery ? createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: false }) : createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: true });
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!params.sort?.length) {
      params.sort = [{ _file: 1, $numeric: true }];
    }
    if (contentConfig.locales.length) {
      const queryLocale = params.where?.find((w) => w._locale)?._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: contentConfig.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseJSONQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const decodeQueryParams = (encoded) => {
  encoded = encoded.replace(/\//g, "");
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  encoded = encoded.padEnd(encoded.length + (4 - encoded.length % 4) % 4, "=");
  return parseJSONQueryParams(typeof Buffer !== "undefined" ? Buffer.from(encoded, "base64").toString() : atob(encoded));
};
const memory = {};
const getContentQuery = (event) => {
  const { params } = event.context.params || {};
  if (params) {
    return decodeQueryParams(params.replace(/.json$/, ""));
  }
  const qid = event.context.params?.qid?.replace(/.json$/, "");
  const query = getQuery$1(event) || {};
  if (qid && query._params) {
    memory[qid] = parseJSONQueryParams(decodeURIComponent(query._params));
    if (memory[qid].where && !Array.isArray(memory[qid].where)) {
      memory[qid].where = [memory[qid].where];
    }
    return memory[qid];
  }
  if (qid && memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseJSONQueryParams(decodeURIComponent(query._params));
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = String(query.sort).split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  return query;
};

const _QS93pX = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  if (query.first) {
    let contentQuery = serverQueryContent(event, query);
    if (!advanceQuery) {
      contentQuery = contentQuery.withDirConfig();
    }
    const content = await contentQuery.findOne();
    const _result = advanceQuery ? content?.result : content;
    const missing = !_result && !content?.dirConfig?.navigation?.redirect && !content?._dir?.navigation?.redirect;
    if (missing) {
      throw createError({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query
        }
      });
    }
    return content;
  }
  if (query.count) {
    return serverQueryContent(event, query).count();
  }
  return serverQueryContent(event, query).find();
});

const _PIajRn = defineEventHandler(async (event) => {
  const { content } = useRuntimeConfig();
  const now = Date.now();
  const contents = await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch(`${content.api.baseURL}/navigation`);
  await cacheStorage.setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents,
    navigation
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().public.content;
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(
        navItem,
        pickNavigationFields(dirConfig)
      );
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children?.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _mxSEAM = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage.getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query).where({
    /**
     * Partial contents are not included in the navigation
     * A partial content is a content that has `_` prefix in its path
     */
    _partial: false,
    /**
     * Exclude any pages which have opted out of navigation via frontmatter.
     */
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = (dirConfigs?.result || dirConfigs).reduce((configs2, conf) => {
    if (conf.title?.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      // Extract meta from body. (non MD files)
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents?.result || contents, configs);
});

const _lazy_uH96Ri = () => import('../renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/mail/send', handler: _yBJYGd, lazy: false, middleware: false, method: "post" },
  { route: '/api/_content/query/:qid/**:params', handler: _QS93pX, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _QS93pX, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _QS93pX, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.1710825503037.json', handler: _PIajRn, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid/**:params', handler: _mxSEAM, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _mxSEAM, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _mxSEAM, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_uH96Ri, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { useRuntimeConfig as a, getRouteRules as g, localFetch as l, useNitroApp as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map

/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined")
/******/ 				return reject(new Error("No browser support"));
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "60ab68e56e2dc27f518b"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) me.children.push(request);
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (typeof dep === "undefined") hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (typeof dep === "undefined") hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle")
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "workspace";
/******/ 			{
/******/ 				// eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {any} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/assets/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/web/back.client.js")(__webpack_require__.s = "./src/web/back.client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fast-levenshtein/levenshtein.js":
/*!******************************************************!*\
  !*** ./node_modules/fast-levenshtein/levenshtein.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  'use strict';
  
  var collator;
  try {
    collator = (typeof Intl !== "undefined" && typeof Intl.Collator !== "undefined") ? Intl.Collator("generic", { sensitivity: "base" }) : null;
  } catch (err){
    console.log("Collator could not be initialized and wouldn't be used");
  }
  // arrays to re-use
  var prevRow = [],
    str2Char = [];
  
  /**
   * Based on the algorithm at http://en.wikipedia.org/wiki/Levenshtein_distance.
   */
  var Levenshtein = {
    /**
     * Calculate levenshtein distance of the two strings.
     *
     * @param str1 String the first string.
     * @param str2 String the second string.
     * @param [options] Additional options.
     * @param [options.useCollator] Use `Intl.Collator` for locale-sensitive string comparison.
     * @return Integer the levenshtein distance (0 and above).
     */
    get: function(str1, str2, options) {
      var useCollator = (options && collator && options.useCollator);
      
      var str1Len = str1.length,
        str2Len = str2.length;
      
      // base cases
      if (str1Len === 0) return str2Len;
      if (str2Len === 0) return str1Len;

      // two rows
      var curCol, nextCol, i, j, tmp;

      // initialise previous row
      for (i=0; i<str2Len; ++i) {
        prevRow[i] = i;
        str2Char[i] = str2.charCodeAt(i);
      }
      prevRow[str2Len] = str2Len;

      var strCmp;
      if (useCollator) {
        // calculate current row distance from previous row using collator
        for (i = 0; i < str1Len; ++i) {
          nextCol = i + 1;

          for (j = 0; j < str2Len; ++j) {
            curCol = nextCol;

            // substution
            strCmp = 0 === collator.compare(str1.charAt(i), String.fromCharCode(str2Char[j]));

            nextCol = prevRow[j] + (strCmp ? 0 : 1);

            // insertion
            tmp = curCol + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }
            // deletion
            tmp = prevRow[j + 1] + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }

            // copy current col value into previous (in preparation for next iteration)
            prevRow[j] = curCol;
          }

          // copy last col value into previous (in preparation for next iteration)
          prevRow[j] = nextCol;
        }
      }
      else {
        // calculate current row distance from previous row without collator
        for (i = 0; i < str1Len; ++i) {
          nextCol = i + 1;

          for (j = 0; j < str2Len; ++j) {
            curCol = nextCol;

            // substution
            strCmp = str1.charCodeAt(i) === str2Char[j];

            nextCol = prevRow[j] + (strCmp ? 0 : 1);

            // insertion
            tmp = curCol + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }
            // deletion
            tmp = prevRow[j + 1] + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }

            // copy current col value into previous (in preparation for next iteration)
            prevRow[j] = curCol;
          }

          // copy last col value into previous (in preparation for next iteration)
          prevRow[j] = nextCol;
        }
      }
      return nextCol;
    }

  };

  // amd
  if ("function" !== "undefined" && __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") !== null && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return Levenshtein;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // commonjs
  else if (typeof module !== "undefined" && module !== null && typeof exports !== "undefined" && module.exports === exports) {
    module.exports = Levenshtein;
  }
  // web worker
  else if (typeof self !== "undefined" && typeof self.postMessage === 'function' && typeof self.importScripts === 'function') {
    self.Levenshtein = Levenshtein;
  }
  // browser main thread
  else if (typeof window !== "undefined" && window !== null) {
    window.Levenshtein = Levenshtein;
  }
}());


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/form-lib/lib/index.js":
/*!*****************************************************************************!*\
  !*** delegated ./node_modules/form-lib/lib/index.js from dll-reference lib ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/form-lib/lib/index.js");

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/index.js":
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/hoist-non-react-statics/index.js from dll-reference lib ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/hoist-non-react-statics/index.js");

/***/ }),

/***/ "./node_modules/moment/moment.js":
/*!************************************************************************!*\
  !*** delegated ./node_modules/moment/moment.js from dll-reference lib ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/moment/moment.js");

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/prop-types/index.js from dll-reference lib ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/prop-types/index.js");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!**************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference lib ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.development.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.development.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);
var shallowEqual = _interopDefault(__webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js"));
var levenshtein = _interopDefault(__webpack_require__(/*! fast-levenshtein */ "./node_modules/fast-levenshtein/levenshtein.js"));
var PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
var hoistNonReactStatic = _interopDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/index.js"));

/* eslint-disable no-underscore-dangle */

var isCompositeComponent = function isCompositeComponent(type) {
  return typeof type === 'function';
};

var getComponentDisplayName = function getComponentDisplayName(type) {
  return type.displayName || type.name || 'Component';
};

var getInternalInstance = function getInternalInstance(instance) {
  return instance._reactInternalFiber || // React 16
  instance._reactInternalInstance || // React 15
  null;
};

var updateInstance = function updateInstance(instance) {
  var updater = instance.updater,
      forceUpdate = instance.forceUpdate;

  if (typeof forceUpdate === 'function') {
    instance.forceUpdate();
  } else if (updater && typeof updater.enqueueForceUpdate === 'function') {
    updater.enqueueForceUpdate(instance);
  }
};

var isFragmentNode = function isFragmentNode(_ref) {
  var type = _ref.type;
  return React__default.Fragment && type === React__default.Fragment;
};

var generation = 1;

var increment = function increment() {
  return generation++;
};
var get = function get() {
  return generation;
};

var PREFIX = '__reactstandin__';
var PROXY_KEY = PREFIX + 'key';
var GENERATION = PREFIX + 'proxyGeneration';
var REGENERATE_METHOD = PREFIX + 'regenerateByEval';
var UNWRAP_PROXY = PREFIX + 'getCurrent';
var CACHED_RESULT = PREFIX + 'cachedResult';
var PROXY_IS_MOUNTED = PREFIX + 'isMounted';

var configuration = {
  logLevel: 'error'
};

/* eslint-disable no-console */

var logger = {
  debug: function debug() {
    if (['debug'].indexOf(configuration.logLevel) !== -1) {
      var _console;

      (_console = console).debug.apply(_console, arguments);
    }
  },
  log: function log() {
    if (['debug', 'log'].indexOf(configuration.logLevel) !== -1) {
      var _console2;

      (_console2 = console).log.apply(_console2, arguments);
    }
  },
  warn: function warn() {
    if (['debug', 'log', 'warn'].indexOf(configuration.logLevel) !== -1) {
      var _console3;

      (_console3 = console).warn.apply(_console3, arguments);
    }
  },
  error: function error() {
    if (['debug', 'log', 'warn', 'error'].indexOf(configuration.logLevel) !== -1) {
      var _console4;

      (_console4 = console).error.apply(_console4, arguments);
    }
  }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/* eslint-disable no-eval, func-names */

function getDisplayName(Component) {
  var displayName = Component.displayName || Component.name;
  return displayName && displayName !== 'ReactComponent' ? displayName : 'Component';
}

var reactLifeCycleMountMethods = ['componentWillMount', 'componentDidMount'];

function isReactClass(Component) {
  return Component.prototype && (Component.prototype.isReactComponent || Component.prototype.componentWillMount || Component.prototype.componentWillUnmount || Component.prototype.componentDidMount || Component.prototype.componentDidUnmount || Component.prototype.render);
}

function safeReactConstructor(Component, lastInstance) {
  try {
    if (lastInstance) {
      return new Component(lastInstance.props, lastInstance.context);
    }
    return new Component({}, {});
  } catch (e) {
    // some components, like Redux connect could not be created without proper context
  }
  return null;
}

function isNativeFunction(fn) {
  return typeof fn === 'function' ? fn.toString().indexOf('[native code]') > 0 : false;
}

var identity = function identity(a) {
  return a;
};
var indirectEval = eval;

var doesSupportClasses = function () {
  try {
    indirectEval('class Test {}');
    return true;
  } catch (e) {
    return false;
  }
}();

var ES6ProxyComponentFactory = doesSupportClasses && indirectEval('\n(function(InitialParent, postConstructionAction) {\n  return class ProxyComponent extends InitialParent {\n    constructor(props, context) {\n      super(props, context)\n      postConstructionAction.call(this)\n    }\n  }\n})\n');

var ES5ProxyComponentFactory = function ES5ProxyComponentFactory(InitialParent, postConstructionAction) {
  function ProxyComponent(props, context) {
    InitialParent.call(this, props, context);
    postConstructionAction.call(this);
  }
  ProxyComponent.prototype = Object.create(InitialParent.prototype);
  Object.setPrototypeOf(ProxyComponent, InitialParent);
  return ProxyComponent;
};

var isReactComponentInstance = function isReactComponentInstance(el) {
  return el && (typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object' && !el.type && el.render;
};

var proxyClassCreator = doesSupportClasses ? ES6ProxyComponentFactory : ES5ProxyComponentFactory;

function getOwnKeys(target) {
  return [].concat(Object.getOwnPropertyNames(target), Object.getOwnPropertySymbols(target));
}

function shallowStringsEqual(a, b) {
  for (var key in a) {
    if (String(a[key]) !== String(b[key])) {
      return false;
    }
  }
  return true;
}

function deepPrototypeUpdate(dest, source) {
  var deepDest = Object.getPrototypeOf(dest);
  var deepSrc = Object.getPrototypeOf(source);
  if (deepDest && deepSrc && deepSrc !== deepDest) {
    deepPrototypeUpdate(deepDest, deepSrc);
  }
  if (source.prototype && source.prototype !== dest.prototype) {
    dest.prototype = source.prototype;
  }
}

function safeDefineProperty(target, key, props) {
  try {
    Object.defineProperty(target, key, props);
  } catch (e) {
    logger.warn('Error while wrapping', key, ' -> ', e);
  }
}

var RESERVED_STATICS = ['length', 'displayName', 'name', 'arguments', 'caller', 'prototype', 'toString', 'valueOf', 'isStatelessFunctionalProxy', PROXY_KEY, UNWRAP_PROXY];

function transferStaticProps(ProxyComponent, savedDescriptors, PreviousComponent, NextComponent) {
  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }

    var prevDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    var savedDescriptor = savedDescriptors[key];

    if (!shallowEqual(prevDescriptor, savedDescriptor)) {
      safeDefineProperty(NextComponent, key, prevDescriptor);
    }
  });

  // Copy newly defined static methods and properties
  Object.getOwnPropertyNames(NextComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }

    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(ProxyComponent, key);
    var savedDescriptor = savedDescriptors[key];

    // Skip redefined descriptors
    if (prevDescriptor && savedDescriptor && !shallowEqual(savedDescriptor, prevDescriptor)) {
      safeDefineProperty(NextComponent, key, prevDescriptor);
      return;
    }

    if (prevDescriptor && !savedDescriptor) {
      safeDefineProperty(ProxyComponent, key, prevDescriptor);
      return;
    }

    var nextDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextComponent, key), {
      configurable: true
    });

    savedDescriptors[key] = nextDescriptor;
    safeDefineProperty(ProxyComponent, key, nextDescriptor);
  });

  // Remove static methods and properties that are no longer defined
  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }
    // Skip statics that exist on the next class
    if (NextComponent.hasOwnProperty(key)) {
      return;
    }
    // Skip non-configurable statics
    var proxyDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    if (proxyDescriptor && !proxyDescriptor.configurable) {
      return;
    }

    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(PreviousComponent, key);
    var savedDescriptor = savedDescriptors[key];

    // Skip redefined descriptors
    if (prevDescriptor && savedDescriptor && !shallowEqual(savedDescriptor, prevDescriptor)) {
      return;
    }

    safeDefineProperty(ProxyComponent, key, {
      value: undefined
    });
  });

  return savedDescriptors;
}

function mergeComponents(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers) {
  var injectedCode = {};
  try {
    var nextInstance = safeReactConstructor(NextComponent, lastInstance);

    try {
      // Bypass babel class inheritance checking
      deepPrototypeUpdate(InitialComponent, NextComponent);
    } catch (e) {
      // It was ES6 class
    }

    var proxyInstance = safeReactConstructor(ProxyComponent, lastInstance);

    if (!nextInstance || !proxyInstance) {
      return injectedCode;
    }

    var mergedAttrs = _extends({}, proxyInstance, nextInstance);
    var hasRegenerate = proxyInstance[REGENERATE_METHOD];
    var ownKeys = getOwnKeys(Object.getPrototypeOf(ProxyComponent.prototype));
    Object.keys(mergedAttrs).forEach(function (key) {
      if (key.startsWith(PREFIX)) return;
      var nextAttr = nextInstance[key];
      var prevAttr = proxyInstance[key];
      if (prevAttr && nextAttr) {
        if (isNativeFunction(nextAttr) || isNativeFunction(prevAttr)) {
          // this is bound method
          var isSameArity = nextAttr.length === prevAttr.length;
          var existsInPrototype = ownKeys.indexOf(key) >= 0 || ProxyComponent.prototype[key];
          if (isSameArity && existsInPrototype) {
            if (hasRegenerate) {
              injectedCode[key] = 'Object.getPrototypeOf(this)[\'' + key + '\'].bind(this)';
            } else {
              logger.warn('React Hot Loader:,', 'Non-controlled class', ProxyComponent.name, 'contains a new native or bound function ', key, nextAttr, '. Unable to reproduce');
            }
          } else {
            logger.warn('React Hot Loader:', 'Updated class ', ProxyComponent.name, 'contains native or bound function ', key, nextAttr, '. Unable to reproduce, use arrow functions instead.', '(arity: ' + nextAttr.length + '/' + prevAttr.length + ', proto: ' + (existsInPrototype ? 'yes' : 'no'));
          }
          return;
        }

        var nextString = String(nextAttr);
        var injectedBefore = injectedMembers[key];
        if (nextString !== String(prevAttr) || injectedBefore && nextString !== String(injectedBefore)) {
          if (!hasRegenerate) {
            if (nextString.indexOf('function') < 0 && nextString.indexOf('=>') < 0) {
              // just copy prop over
              injectedCode[key] = nextAttr;
            } else {
              logger.warn('React Hot Loader:', ' Updated class ', ProxyComponent.name, 'had different code for', key, nextAttr, '. Unable to reproduce. Regeneration support needed.');
            }
          } else {
            injectedCode[key] = nextAttr;
          }
        }
      }
    });
  } catch (e) {
    logger.warn('React Hot Loader:', e);
  }
  return injectedCode;
}

function checkLifeCycleMethods(ProxyComponent, NextComponent) {
  try {
    var p1 = Object.getPrototypeOf(ProxyComponent.prototype);
    var p2 = NextComponent.prototype;
    reactLifeCycleMountMethods.forEach(function (key) {
      var d1 = Object.getOwnPropertyDescriptor(p1, key) || { value: p1[key] };
      var d2 = Object.getOwnPropertyDescriptor(p2, key) || { value: p2[key] };
      if (!shallowStringsEqual(d1, d2)) {
        logger.warn('React Hot Loader:', 'You did update', ProxyComponent.name, 's lifecycle method', key, '. Unable to repeat');
      }
    });
  } catch (e) {
    // Ignore errors
  }
}

function inject(target, currentGeneration, injectedMembers) {
  if (target[GENERATION] !== currentGeneration) {
    var hasRegenerate = !!target[REGENERATE_METHOD];
    Object.keys(injectedMembers).forEach(function (key) {
      try {
        if (hasRegenerate) {
          target[REGENERATE_METHOD](key, '(function REACT_HOT_LOADER_SANDBOX () {\n          var _this  = this; // common babel transpile\n          var _this2 = this; // common babel transpile\n          var _this3 = this; // common babel transpile\n          return ' + injectedMembers[key] + ';\n          }).call(this)');
        } else {
          target[key] = injectedMembers[key];
        }
      } catch (e) {
        logger.warn('React Hot Loader: Failed to regenerate method ', key, ' of class ', target);
        logger.warn('got error', e);
      }
    });

    target[GENERATION] = currentGeneration;
  }
}

var has = Object.prototype.hasOwnProperty;

var proxies = new WeakMap();

var resetClassProxies = function resetClassProxies() {
  proxies = new WeakMap();
};

var blackListedClassMembers = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'componentWillUnmount', 'hotComponentRender', 'getInitialState', 'getDefaultProps'];

var defaultRenderOptions = {
  componentWillRender: identity,
  componentDidUpdate: function componentDidUpdate(result) {
    return result;
  },
  componentDidRender: function componentDidRender(result) {
    return result;
  }
};

var defineClassMember = function defineClassMember(Class, methodName, methodBody) {
  return safeDefineProperty(Class.prototype, methodName, {
    configurable: true,
    writable: true,
    enumerable: false,
    value: methodBody
  });
};

var defineClassMembers = function defineClassMembers(Class, methods) {
  return Object.keys(methods).forEach(function (methodName) {
    return defineClassMember(Class, methodName, methods[methodName]);
  });
};

var setSFPFlag = function setSFPFlag(component, flag) {
  return safeDefineProperty(component, 'isStatelessFunctionalProxy', {
    configurable: false,
    writable: false,
    enumerable: false,
    value: flag
  });
};

var copyMethodDescriptors = function copyMethodDescriptors(target, source) {
  if (source) {
    // it is possible to use `function-double` to construct an ideal clone, but does not make a sence
    var keys = Object.getOwnPropertyNames(source);

    keys.forEach(function (key) {
      return safeDefineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });

    safeDefineProperty(target, 'toString', {
      configurable: true,
      writable: false,
      enumerable: false,
      value: function toString() {
        return String(source);
      }
    });
  }

  return target;
};

function createClassProxy(InitialComponent, proxyKey, options) {
  var renderOptions = _extends({}, defaultRenderOptions, options);
  // Prevent double wrapping.
  // Given a proxy class, return the existing proxy managing it.
  var existingProxy = proxies.get(InitialComponent);

  if (existingProxy) {
    return existingProxy;
  }

  var CurrentComponent = void 0;
  var savedDescriptors = {};
  var injectedMembers = {};
  var proxyGeneration = 0;
  var isFunctionalComponent = !isReactClass(InitialComponent);

  var lastInstance = null;

  function postConstructionAction() {
    this[GENERATION] = 0;

    // As long we can't override constructor
    // every class shall evolve from a base class
    inject(this, proxyGeneration, injectedMembers);

    lastInstance = this;
  }

  function proxiedUpdate() {
    if (this) {
      inject(this, proxyGeneration, injectedMembers);
    }
  }

  function lifeCycleWrapperFactory(wrapperName) {
    var sideEffect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;

    return copyMethodDescriptors(function wrappedMethod() {
      proxiedUpdate.call(this);
      sideEffect(this);

      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }

      return !isFunctionalComponent && CurrentComponent.prototype[wrapperName] && CurrentComponent.prototype[wrapperName].apply(this, rest);
    }, InitialComponent.prototype && InitialComponent.prototype[wrapperName]);
  }

  function methodWrapperFactory(wrapperName, realMethod) {
    return copyMethodDescriptors(function wrappedMethod() {
      for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        rest[_key2] = arguments[_key2];
      }

      return realMethod.apply(this, rest);
    }, realMethod);
  }

  var fakeBasePrototype = function fakeBasePrototype(Base) {
    return Object.getOwnPropertyNames(Base).filter(function (key) {
      return blackListedClassMembers.indexOf(key) === -1;
    }).filter(function (key) {
      var descriptor = Object.getOwnPropertyDescriptor(Base, key);
      return typeof descriptor.value === 'function';
    }).reduce(function (acc, key) {
      acc[key] = methodWrapperFactory(key, Base[key]);
      return acc;
    }, {});
  };

  var componentDidMount = lifeCycleWrapperFactory('componentDidMount', function (target) {
    target[PROXY_IS_MOUNTED] = true;
  });
  var componentDidUpdate = lifeCycleWrapperFactory('componentDidUpdate', renderOptions.componentDidUpdate);
  var componentWillUnmount = lifeCycleWrapperFactory('componentWillUnmount', function (target) {
    target[PROXY_IS_MOUNTED] = false;
  });

  function hotComponentRender() {
    // repeating subrender call to keep RENDERED_GENERATION up to date
    renderOptions.componentWillRender(this);
    proxiedUpdate.call(this);
    var result = void 0;

    // We need to use hasOwnProperty here, as the cached result is a React node
    // and can be null or some other falsy value.
    if (has.call(this, CACHED_RESULT)) {
      result = this[CACHED_RESULT];
      delete this[CACHED_RESULT];
    } else if (isFunctionalComponent) {
      result = CurrentComponent(this.props, this.context);
    } else {
      result = CurrentComponent.prototype.render.call(this);
    }

    return renderOptions.componentDidRender.call(this, result);
  }

  function proxiedRender() {
    renderOptions.componentWillRender(this);
    return hotComponentRender.call(this);
  }

  var defineProxyMethods = function defineProxyMethods(Proxy) {
    var Base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    defineClassMembers(Proxy, _extends({}, fakeBasePrototype(Base), {
      render: proxiedRender,
      hotComponentRender: hotComponentRender,
      componentDidMount: componentDidMount,
      componentDidUpdate: componentDidUpdate,
      componentWillUnmount: componentWillUnmount
    }));
  };

  var _ProxyFacade = void 0;
  var ProxyComponent = null;
  var proxy = void 0;

  if (!isFunctionalComponent) {
    ProxyComponent = proxyClassCreator(InitialComponent, postConstructionAction);

    defineProxyMethods(ProxyComponent, InitialComponent.prototype);

    _ProxyFacade = ProxyComponent;
  } else {
    // This function only gets called for the initial mount. The actual
    // rendered component instance will be the return value.

    // eslint-disable-next-line func-names
    _ProxyFacade = function ProxyFacade(props, context) {
      var result = CurrentComponent(props, context);

      // simple SFC
      if (!CurrentComponent.contextTypes) {
        if (!_ProxyFacade.isStatelessFunctionalProxy) {
          setSFPFlag(_ProxyFacade, true);
        }

        return renderOptions.componentDidRender(result);
      }
      setSFPFlag(_ProxyFacade, false);

      // This is a Relay-style container constructor. We can't do the prototype-
      // style wrapping for this as we do elsewhere, so just we just pass it
      // through as-is.
      if (isReactComponentInstance(result)) {
        ProxyComponent = null;
        return result;
      }

      // Otherwise, it's a normal functional component. Build the real proxy
      // and use it going forward.
      ProxyComponent = proxyClassCreator(React.Component, postConstructionAction);

      defineProxyMethods(ProxyComponent);

      var determinateResult = new ProxyComponent(props, context);

      // Cache the initial render result so we don't call the component function
      // a second time for the initial render.
      determinateResult[CACHED_RESULT] = result;
      return determinateResult;
    };
  }

  function get() {
    return _ProxyFacade;
  }

  function getCurrent() {
    return CurrentComponent;
  }

  safeDefineProperty(_ProxyFacade, UNWRAP_PROXY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  safeDefineProperty(_ProxyFacade, PROXY_KEY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: proxyKey
  });

  safeDefineProperty(_ProxyFacade, 'toString', {
    configurable: true,
    writable: false,
    enumerable: false,
    value: function toString() {
      return String(CurrentComponent);
    }
  });

  function update(NextComponent) {
    if (typeof NextComponent !== 'function') {
      throw new Error('Expected a constructor.');
    }

    if (NextComponent === CurrentComponent) {
      return;
    }

    // Prevent proxy cycles
    var existingProxy = proxies.get(NextComponent);
    if (existingProxy) {
      return;
    }

    proxies.set(NextComponent, proxy);

    isFunctionalComponent = !isReactClass(NextComponent);
    proxyGeneration++;

    // Save the next constructor so we call it
    var PreviousComponent = CurrentComponent;
    CurrentComponent = NextComponent;

    // Try to infer displayName
    var displayName = getDisplayName(CurrentComponent);

    safeDefineProperty(_ProxyFacade, 'displayName', {
      configurable: true,
      writable: false,
      enumerable: true,
      value: displayName
    });

    if (ProxyComponent) {
      safeDefineProperty(ProxyComponent, 'name', {
        value: displayName
      });
    }

    savedDescriptors = transferStaticProps(_ProxyFacade, savedDescriptors, PreviousComponent, NextComponent);

    if (isFunctionalComponent || !ProxyComponent) ; else {
      checkLifeCycleMethods(ProxyComponent, NextComponent);
      Object.setPrototypeOf(ProxyComponent.prototype, NextComponent.prototype);
      defineProxyMethods(ProxyComponent, NextComponent.prototype);
      if (proxyGeneration > 1) {
        injectedMembers = mergeComponents(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers);
      }
    }
  }

  update(InitialComponent);

  proxy = { get: get, update: update };

  proxies.set(InitialComponent, proxy);
  proxies.set(_ProxyFacade, proxy);

  safeDefineProperty(proxy, UNWRAP_PROXY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  return proxy;
}

var proxiesByID = void 0;
var idsByType = void 0;

var elementCount = 0;
var renderOptions = {};

var generateTypeId = function generateTypeId() {
  return 'auto-' + elementCount++;
};

var getIdByType = function getIdByType(type) {
  return idsByType.get(type);
};

var getProxyById = function getProxyById(id) {
  return proxiesByID[id];
};
var getProxyByType = function getProxyByType(type) {
  return getProxyById(getIdByType(type));
};

var setStandInOptions = function setStandInOptions(options) {
  renderOptions = options;
};

var updateProxyById = function updateProxyById(id, type) {
  // Remember the ID.
  idsByType.set(type, id);

  if (!proxiesByID[id]) {
    proxiesByID[id] = createClassProxy(type, id, renderOptions);
  } else {
    proxiesByID[id].update(type);
  }
  return proxiesByID[id];
};

var createProxyForType = function createProxyForType(type) {
  return getProxyByType(type) || updateProxyById(generateTypeId(), type);
};

var resetProxies = function resetProxies() {
  proxiesByID = {};
  idsByType = new WeakMap();
  resetClassProxies();
};

resetProxies();

/* eslint-disable no-use-before-define */

function resolveType(type) {
  if (!isCompositeComponent(type)) return type;

  var proxy = reactHotLoader.disableProxyCreation ? getProxyByType(type) : createProxyForType(type);

  return proxy ? proxy.get() : type;
}

var reactHotLoader = {
  register: function register(type, uniqueLocalName, fileName) {
    if (isCompositeComponent(type) && typeof uniqueLocalName === 'string' && uniqueLocalName && typeof fileName === 'string' && fileName) {
      var id = fileName + '#' + uniqueLocalName;

      if (getProxyById(id)) {
        // component got replaced. Need to reconsile
        increment();
      }

      updateProxyById(id, type);
    }
  },
  reset: function reset() {
    resetProxies();
  },
  patch: function patch(React$$1) {
    if (!React$$1.createElement.isPatchedByReactHotLoader) {
      var originalCreateElement = React$$1.createElement;
      // Trick React into rendering a proxy so that
      // its state is preserved when the class changes.
      // This will update the proxy if it's for a known type.
      React$$1.createElement = function (type) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return originalCreateElement.apply(undefined, [resolveType(type)].concat(args));
      };
      React$$1.createElement.isPatchedByReactHotLoader = true;
    }

    if (!React$$1.createFactory.isPatchedByReactHotLoader) {
      // Patch React.createFactory to use patched createElement
      // because the original implementation uses the internal,
      // unpatched ReactElement.createElement
      React$$1.createFactory = function (type) {
        var factory = React$$1.createElement.bind(null, type);
        factory.type = type;
        return factory;
      };
      React$$1.createFactory.isPatchedByReactHotLoader = true;
    }

    if (!React$$1.Children.only.isPatchedByReactHotLoader) {
      var originalChildrenOnly = React$$1.Children.only;
      // Use the same trick as React.createElement
      React$$1.Children.only = function (children) {
        return originalChildrenOnly(_extends({}, children, { type: resolveType(children.type) }));
      };
      React$$1.Children.only.isPatchedByReactHotLoader = true;
    }

    reactHotLoader.reset();
  },


  disableProxyCreation: false
};

/* eslint-disable no-underscore-dangle */

function pushStack(stack, node) {
  stack.type = node.type;
  stack.children = [];
  stack.instance = typeof node.type === 'function' ? node.stateNode : stack;

  if (!stack.instance) {
    stack.instance = {
      SFC_fake: stack.type,
      props: {},
      render: function render() {
        return stack.type(stack.instance.props);
      }
    };
  }
}

function hydrateFiberStack(node, stack) {
  pushStack(stack, node);
  if (node.child) {
    var child = node.child;

    do {
      var childStack = {};
      hydrateFiberStack(child, childStack);
      stack.children.push(childStack);
      child = child.sibling;
    } while (child);
  }
}

/* eslint-disable no-underscore-dangle */

function pushState(stack, type, instance) {
  stack.type = type;
  stack.children = [];
  stack.instance = instance || stack;

  if (typeof type === 'function' && type.isStatelessFunctionalProxy) {
    // In React 15 SFC is wrapped by component. We have to detect our proxies and change the way it works
    stack.instance = {
      SFC_fake: type,
      props: {},
      render: function render() {
        return type(stack.instance.props);
      }
    };
  }
}

function hydrateLegacyStack(node, stack) {
  if (node._currentElement) {
    pushState(stack, node._currentElement.type, node._instance || stack);
  }

  if (node._renderedComponent) {
    var childStack = {};
    hydrateLegacyStack(node._renderedComponent, childStack);
    stack.children.push(childStack);
  } else if (node._renderedChildren) {
    Object.keys(node._renderedChildren).forEach(function (key) {
      var childStack = {};
      hydrateLegacyStack(node._renderedChildren[key], childStack);
      stack.children.push(childStack);
    });
  }
}

/* eslint-disable no-underscore-dangle */

function getReactStack(instance) {
  var rootNode = getInternalInstance(instance);
  var stack = {};
  var isFiber = typeof rootNode.tag === 'number';
  if (isFiber) {
    hydrateFiberStack(rootNode, stack);
  } else {
    hydrateLegacyStack(rootNode, stack);
  }
  return stack;
}

// some `empty` names, React can autoset display name to...
var UNDEFINED_NAMES = {
  Unknown: true,
  Component: true
};

var renderStack = [];

var stackReport = function stackReport() {
  var rev = renderStack.slice().reverse();
  logger.warn('in', rev[0].name, rev);
};

var areNamesEqual = function areNamesEqual(a, b) {
  return a === b || UNDEFINED_NAMES[a] && UNDEFINED_NAMES[b];
};
var isReactClass$1 = function isReactClass(fn) {
  return fn && !!fn.render;
};
var isFunctional = function isFunctional(fn) {
  return typeof fn === 'function';
};
var isArray = function isArray(fn) {
  return Array.isArray(fn);
};
var asArray = function asArray(a) {
  return isArray(a) ? a : [a];
};
var getTypeOf = function getTypeOf(type) {
  if (isReactClass$1(type)) return 'ReactComponent';
  if (isFunctional(type)) return 'StatelessFunctional';
  return 'Fragment'; // ?
};

var filterNullArray = function filterNullArray(a) {
  if (!a) return [];
  return a.filter(function (x) {
    return !!x;
  });
};

var unflatten = function unflatten(a) {
  return a.reduce(function (acc, a) {
    if (Array.isArray(a)) {
      acc.push.apply(acc, unflatten(a));
    } else {
      acc.push(a);
    }
    return acc;
  }, []);
};

var getElementType = function getElementType(child) {
  return child.type[UNWRAP_PROXY] ? child.type[UNWRAP_PROXY]() : child.type;
};

var haveTextSimilarity = function haveTextSimilarity(a, b) {
  return (
    // equal or slight changed
    a === b || levenshtein.get(a, b) < a.length * 0.2
  );
};

var equalClasses = function equalClasses(a, b) {
  var prototypeA = a.prototype;
  var prototypeB = Object.getPrototypeOf(b.prototype);

  var hits = 0;
  var misses = 0;
  Object.getOwnPropertyNames(prototypeA).forEach(function (key) {
    if (typeof prototypeA[key] === 'function' && key !== 'constructor') {
      if (haveTextSimilarity(String(prototypeA[key]), String(prototypeB[key]))) {
        hits++;
      } else {
        misses++;
        if (key === 'render') {
          misses++;
        }
      }
    }
  });
  // allow to add or remove one function
  return hits > 0 && misses <= 1;
};

var isSwappable = function isSwappable(a, b) {
  // both are registered components
  if (getIdByType(b) && getIdByType(a) === getIdByType(b)) {
    return true;
  }
  if (getTypeOf(a) !== getTypeOf(b)) {
    return false;
  }
  if (isReactClass$1(a.prototype)) {
    return areNamesEqual(getComponentDisplayName(a), getComponentDisplayName(b)) && equalClasses(a, b);
  }

  if (isFunctional(a)) {
    var nameA = getComponentDisplayName(a);
    return areNamesEqual(nameA, getComponentDisplayName(b)) && nameA !== 'Component' || haveTextSimilarity(String(a), String(b));
  }
  return false;
};

var render = function render(component) {
  if (!component) {
    return [];
  }
  if (isReactClass$1(component)) {
    // not calling real render method to prevent call recursion.
    // stateless components does not have hotComponentRender
    return component.hotComponentRender ? component.hotComponentRender() : component.render();
  }
  if (isArray(component)) {
    return component.map(render);
  }
  if (component.children) {
    return component.children;
  }

  return [];
};

var NO_CHILDREN = { children: [] };
var mapChildren = function mapChildren(children, instances) {
  return {
    children: children.filter(function (c) {
      return c;
    }).map(function (child, index) {
      if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object' || child.isMerged) {
        return child;
      }
      var instanceLine = instances[index] || {};
      var oldChildren = asArray(instanceLine.children || []);

      if (Array.isArray(child)) {
        return _extends({
          type: null
        }, mapChildren(child, oldChildren));
      }

      var newChildren = asArray(child.props && child.props.children || child.children || []);
      var nextChildren = child.type !== 'function' && oldChildren.length && mapChildren(newChildren, oldChildren);

      return _extends({
        nextProps: child.props,
        isMerged: true
      }, instanceLine, nextChildren || {}, {
        type: child.type
      });
    })
  };
};

var mergeInject = function mergeInject(a, b, instance) {
  if (a && !Array.isArray(a)) {
    return mergeInject([a], b);
  }
  if (b && !Array.isArray(b)) {
    return mergeInject(a, [b]);
  }

  if (!a || !b) {
    return NO_CHILDREN;
  }
  if (a.length === b.length) {
    return mapChildren(a, b);
  }

  // in some cases (no confidence here) B could contain A except null children
  // in some cases - could not.
  // this depends on React version and the way you build component.

  var nonNullA = filterNullArray(a);
  if (nonNullA.length === b.length) {
    return mapChildren(nonNullA, b);
  }

  var flatA = unflatten(nonNullA);
  var flatB = unflatten(b);
  if (flatA.length === flatB.length) {
    return mapChildren(flatA, flatB);
  }
  if (flatB.length === 0 && flatA.length === 1 && _typeof(flatA[0]) !== 'object') ; else {
    logger.warn('React-hot-loader: unable to merge ', a, 'and children of ', instance);
    stackReport();
  }
  return NO_CHILDREN;
};

var transformFlowNode = function transformFlowNode(flow) {
  return flow.reduce(function (acc, node) {
    if (isFragmentNode(node) && node.props && node.props.children) {
      return [].concat(acc, filterNullArray(node.props.children));
    }
    return [].concat(acc, [node]);
  }, []);
};

var scheduledUpdates = [];
var scheduledUpdate = 0;

var flushScheduledUpdates = function flushScheduledUpdates() {
  var instances = scheduledUpdates;
  scheduledUpdates = [];
  scheduledUpdate = 0;
  instances.forEach(function (instance) {
    return instance[PROXY_IS_MOUNTED] && updateInstance(instance);
  });
};

var unscheduleUpdate = function unscheduleUpdate(instance) {
  scheduledUpdates = scheduledUpdates.filter(function (inst) {
    return inst !== instance;
  });
};

var scheduleInstanceUpdate = function scheduleInstanceUpdate(instance) {
  scheduledUpdates.push(instance);
  if (!scheduledUpdate) {
    scheduledUpdate = setTimeout(flushScheduledUpdates);
  }
};

var hotReplacementRender = function hotReplacementRender(instance, stack) {
  if (isReactClass$1(instance)) {
    var type = getElementType(stack);
    renderStack.push({
      name: getComponentDisplayName(type),
      type: type,
      props: stack.instance.props
    });
  }
  var flow = transformFlowNode(filterNullArray(asArray(render(instance))));

  var children = stack.children;


  flow.forEach(function (child, index) {
    var stackChild = children[index];
    var next = function next(instance) {
      // copy over props as long new component may be hidden inside them
      // child does not have all props, as long some of them can be calculated on componentMount.
      var nextProps = _extends({}, instance.props, child.nextProps || {}, child.props || {});

      if (isReactClass$1(instance) && instance.componentWillUpdate) {
        // Force-refresh component (bypass redux renderedComponent)
        instance.componentWillUpdate(nextProps, instance.state);
      }
      instance.props = nextProps;
      hotReplacementRender(instance, stackChild);
    };

    // text node
    if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object' || !stackChild || !stackChild.instance) {
      return;
    }

    if (_typeof(child.type) !== _typeof(stackChild.type)) {
      // Portals could generate undefined !== null
      if (child.type && stackChild.type) {
        logger.warn('React-hot-loader: got ', child.type, 'instead of', stackChild.type);
        stackReport();
      }
      return;
    }

    if (typeof child.type !== 'function') {
      next(
      // move types from render to the instances of hydrated tree
      mergeInject(asArray(child.props ? child.props.children : child.children), stackChild.instance.children, stackChild.instance));
    } else {
      // unwrap proxy
      var childType = getElementType(child);
      if (!stackChild.type[PROXY_KEY]) {
        /* eslint-disable no-console */
        logger.error('React-hot-loader: fatal error caused by ', stackChild.type, ' - no instrumentation found. ', 'Please require react-hot-loader before React. More in troubleshooting.');
        stackReport();
        throw new Error('React-hot-loader: wrong configuration');
      }

      if (child.type === stackChild.type) {
        next(stackChild.instance);
      } else if (isSwappable(childType, stackChild.type)) {
        // they are both registered, or have equal code/displayname/signature

        // update proxy using internal PROXY_KEY
        updateProxyById(stackChild.type[PROXY_KEY], childType);

        next(stackChild.instance);
      } else {
        logger.warn('React-hot-loader: a ' + getComponentDisplayName(childType) + ' was found where a ' + getComponentDisplayName(stackChild) + ' was expected.\n          ' + childType);
        stackReport();
      }

      scheduleInstanceUpdate(stackChild.instance);
    }
  });

  if (isReactClass$1(instance)) {
    renderStack.pop();
  }
};

var hotReplacementRender$1 = (function (instance, stack) {
  try {
    // disable reconciler to prevent upcoming components from proxying.
    reactHotLoader.disableProxyCreation = true;
    renderStack = [];
    hotReplacementRender(instance, stack);
  } catch (e) {
    logger.warn('React-hot-loader: reconcilation failed due to error', e);
  } finally {
    reactHotLoader.disableProxyCreation = false;
  }
});

var reconcileHotReplacement = function reconcileHotReplacement(ReactInstance) {
  return hotReplacementRender$1(ReactInstance, getReactStack(ReactInstance));
};

var RENDERED_GENERATION = 'REACT_HOT_LOADER_RENDERED_GENERATION';

var renderReconciler = function renderReconciler(target, force) {
  // we are not inside parent reconcilation
  var currentGeneration = get();
  var componentGeneration = target[RENDERED_GENERATION];

  target[RENDERED_GENERATION] = currentGeneration;

  if (!reactHotLoader.disableProxyCreation) {
    if ((componentGeneration || force) && componentGeneration !== currentGeneration) {
      reconcileHotReplacement(target);
      return true;
    }
  }
  return false;
};

function asyncReconciledRender(target) {
  renderReconciler(target, false);
}

function proxyWrapper(element) {
  // post wrap on post render
  if (!reactHotLoader.disableProxyCreation) {
    unscheduleUpdate(this);
  }

  if (!element) {
    return element;
  }
  if (Array.isArray(element)) {
    return element.map(proxyWrapper);
  }
  if (typeof element.type === 'function') {
    var proxy = getProxyByType(element.type);
    if (proxy) {
      return _extends({}, element, {
        type: proxy.get()
      });
    }
  }
  return element;
}

setStandInOptions({
  componentWillRender: asyncReconciledRender,
  componentDidRender: proxyWrapper,
  componentDidUpdate: flushScheduledUpdates
});

var AppContainer = function (_React$Component) {
  inherits(AppContainer, _React$Component);

  function AppContainer() {
    var _temp, _this, _ret;

    classCallCheck(this, AppContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      error: null,
      // eslint-disable-next-line react/no-unused-state
      generation: 0
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  AppContainer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.generation !== get()) {
      // Hot reload is happening.
      return {
        error: null,
        generation: get()
      };
    }
    return null;
  };

  AppContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(prevProps, prevState) {
    // Don't update the component if the state had an error and still has one.
    // This allows to break an infinite loop of error -> render -> error -> render
    // https://github.com/gaearon/react-hot-loader/issues/696
    if (prevState.error && this.state.error) {
      return false;
    }

    return true;
  };

  AppContainer.prototype.componentDidCatch = function componentDidCatch(error) {
    logger.error(error);
    this.setState({ error: error });
  };

  AppContainer.prototype.render = function render() {
    var error = this.state.error;


    if (this.props.errorReporter && error) {
      return React__default.createElement(this.props.errorReporter, { error: error });
    }

    return React__default.Children.only(this.props.children);
  };

  return AppContainer;
}(React__default.Component);

AppContainer.propTypes = {
  children: function children(props) {
    if (React__default.Children.count(props.children) !== 1) {
      return new Error('Invalid prop "children" supplied to AppContainer. ' + 'Expected a single React element with your app’s root component, e.g. <App />.');
    }

    return undefined;
  },

  errorReporter: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};

reactLifecyclesCompat.polyfill(AppContainer);

var openedModules = {};

var hotModules = {};

var createHotModule = function createHotModule() {
  return { instances: [], updateTimeout: 0 };
};

var hotModule = function hotModule(moduleId) {
  if (!hotModules[moduleId]) {
    hotModules[moduleId] = createHotModule();
  }
  return hotModules[moduleId];
};

var isOpened = function isOpened(sourceModule) {
  return sourceModule && !!openedModules[sourceModule.id];
};

var enter = function enter(sourceModule) {
  if (sourceModule && sourceModule.id) {
    openedModules[sourceModule.id] = true;
  } else {
    logger.warn('React-hot-loader: no `module` variable found. Do you shadow system variable?');
  }
};

var leave = function leave(sourceModule) {
  if (sourceModule && sourceModule.id) {
    delete openedModules[sourceModule.id];
  }
};

/* eslint-disable camelcase, no-undef */
var requireIndirect =  true ? __webpack_require__ : undefined;
/* eslint-enable */

var createHoc = function createHoc(SourceComponent, TargetComponent) {
  hoistNonReactStatic(TargetComponent, SourceComponent);
  TargetComponent.displayName = 'HotExported' + getComponentDisplayName(SourceComponent);
  return TargetComponent;
};

var makeHotExport = function makeHotExport(sourceModule) {
  var updateInstances = function updateInstances() {
    var module = hotModule(sourceModule.id);
    clearTimeout(module.updateTimeout);
    module.updateTimeout = setTimeout(function () {
      try {
        requireIndirect(sourceModule.id);
      } catch (e) {
        // just swallow
      }
      module.instances.forEach(function (inst) {
        return inst.forceUpdate();
      });
    });
  };

  if (sourceModule.hot) {
    // Mark as self-accepted for Webpack
    // Update instances for Parcel
    sourceModule.hot.accept(updateInstances);

    // Webpack way
    if (sourceModule.hot.addStatusHandler) {
      if (sourceModule.hot.status() === 'idle') {
        sourceModule.hot.addStatusHandler(function (status) {
          if (status === 'apply') {
            updateInstances();
          }
        });
      }
    }
  }
};

var hot = function hot(sourceModule) {
  if (!sourceModule || !sourceModule.id) {
    // this is fatal
    throw new Error('React-hot-loader: `hot` could not find the `id` property in the `module` you have provided');
  }
  var moduleId = sourceModule.id;
  var module = hotModule(moduleId);
  makeHotExport(sourceModule);

  // TODO: Ensure that all exports from this file are react components.

  return function (WrappedComponent) {
    // register proxy for wrapped component
    reactHotLoader.register(WrappedComponent, getComponentDisplayName(WrappedComponent), 'RHL' + moduleId);

    return createHoc(WrappedComponent, function (_Component) {
      inherits(ExportedComponent, _Component);

      function ExportedComponent() {
        classCallCheck(this, ExportedComponent);
        return possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      ExportedComponent.prototype.componentDidMount = function componentDidMount() {
        module.instances.push(this);
      };

      ExportedComponent.prototype.componentWillUnmount = function componentWillUnmount() {
        var _this2 = this;

        if (isOpened(sourceModule)) {
          var componentName = getComponentDisplayName(WrappedComponent);
          logger.error('React-hot-loader: Detected AppContainer unmount on module \'' + moduleId + '\' update.\n' + ('Did you use "hot(' + componentName + ')" and "ReactDOM.render()" in the same file?\n') + ('"hot(' + componentName + ')" shall only be used as export.\n') + 'Please refer to "Getting Started" (https://github.com/gaearon/react-hot-loader/).');
        }
        module.instances = module.instances.filter(function (a) {
          return a !== _this2;
        });
      };

      ExportedComponent.prototype.render = function render() {
        return React__default.createElement(
          AppContainer,
          null,
          React__default.createElement(WrappedComponent, this.props)
        );
      };

      return ExportedComponent;
    }(React.Component));
  };
};

var getProxyOrType = function getProxyOrType(type) {
  var proxy = getProxyByType(type);
  return proxy ? proxy.get() : type;
};

var areComponentsEqual = function areComponentsEqual(a, b) {
  return getProxyOrType(a) === getProxyOrType(b);
};

var setConfig = function setConfig(config) {
  return Object.assign(configuration, config);
};

reactHotLoader.patch(React__default);

exports.default = reactHotLoader;
exports.AppContainer = AppContainer;
exports.hot = hot;
exports.enterModule = enter;
exports.leaveModule = leave;
exports.areComponentsEqual = areComponentsEqual;
exports.setConfig = setConfig;


/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.development.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.development.js");
}


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(nextProps, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-router-dom/es/index.js":
/*!************************************************************************************!*\
  !*** delegated ./node_modules/react-router-dom/es/index.js from dll-reference lib ***!
  \************************************************************************************/
/*! exports provided: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, matchPath, withRouter */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/react-router-dom/es/index.js");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!**********************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference lib ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/redux-thunk/lib/index.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/redux-thunk/lib/index.js from dll-reference lib ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/redux-thunk/lib/index.js");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!*************************************************************************!*\
  !*** delegated ./node_modules/redux/es/redux.js from dll-reference lib ***!
  \*************************************************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/redux/es/redux.js");

/***/ }),

/***/ "./node_modules/rsuite-schema/lib/index.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/rsuite-schema/lib/index.js from dll-reference lib ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/rsuite-schema/lib/index.js");

/***/ }),

/***/ "./node_modules/rsuite/lib/index.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/rsuite/lib/index.js from dll-reference lib ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/rsuite/lib/index.js");

/***/ }),

/***/ "./node_modules/rsuite/styles/less/index.less":
/*!****************************************************!*\
  !*** ./node_modules/rsuite/styles/less/index.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (1:0)\nYou may need an appropriate loader to handle this file type.\n| @import \"rsuite\";\n| ");

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function shallowEqual(objA, objB, compare, compareContext) {

    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if(ret !== void 0) {
        return !!ret;
    }

    if(objA === objB) {
        return true;
    }

    if(typeof objA !== 'object' || !objA ||
       typeof objB !== 'object' || !objB) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if(keysA.length !== keysB.length) {
        return false;
    }

    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++) {

        var key = keysA[idx];

        if(!bHasOwnProperty(key)) {
            return false;
        }

        var valueA = objA[key];
        var valueB = objB[key];

        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

        if(ret === false ||
           ret === void 0 && valueA !== valueB) {
            return false;
        }

    }

    return true;

};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/module.js from dll-reference lib ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/webpack/buildin/module.js");

/***/ }),

/***/ "./src/components/Container.js":
/*!*************************************!*\
  !*** ./src/components/Container.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(route) {
  return _react2.default.createElement(_reactRouterDom.Route, { path: route.path, render: function render(props) {
      return _react2.default.createElement(route.component, _extends({ OrderMess: route.OrderMess }, props));
    } });
};

exports.default = Container;

/***/ }),

/***/ "./src/components/GoodEditor.js":
/*!**************************************!*\
  !*** ./src/components/GoodEditor.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var model = (0, _rsuiteSchema.SchemaModel)({ Name: (0, _rsuiteSchema.StringType)().isRequired('角色名不能为空') });

/**
 * 药品基础数据编辑组件
 * @extends React.Component
 */

var GoodEditor = function (_React$Component) {
    _inherits(GoodEditor, _React$Component);

    function GoodEditor(props) {
        _classCallCheck(this, GoodEditor);

        var _this = _possibleConstructorReturn(this, (GoodEditor.__proto__ || Object.getPrototypeOf(GoodEditor)).call(this, props));

        _this.state = {
            values: {},
            errors: {},
            isFetching: false
        };

        _this.submitGood = _this._submitGood.bind(_this);
        _this.cancel = _this._cancel.bind(_this);
        return _this;
    }

    _createClass(GoodEditor, [{
        key: '_cancel',
        value: function _cancel() {
            if (this.props.onCanceled) {
                this.props.onCanceled();
            }
        }
    }, {
        key: '_submitGood',
        value: function _submitGood() {
            var _this2 = this;

            if (!this.form.check()) {
                this.setState({ message: "数据格式有错误" });
                return;
            }

            var formData = new FormData(document.getElementById('form'));

            fetch('/api/good/save', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                if (json.code == 0) {
                    _this2.props.onGoodSaveCompleted();
                }
                //TODO
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var good = this.props.good;


            if (good) {
                this.setState({ values: good });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var good = nextProps.good,
                action = nextProps.action;
            var oldGood = this.props.good;

            // console.log({action, good});

            if (good && oldGood) {
                if (good.ID != oldGood.ID) {
                    this.setState({ values: good });
                }
            } else if (good) {
                this.setState({ values: good });
            } else if (action == "add") {
                //添加会员
                this.setState({
                    values: {
                        Name: "",
                        OfficalName: "",
                        Unit: "",
                        Dimension: "",
                        DefaultCostPrice: "",
                        DefaultPrice: "",
                        LimitPrice: "",
                        UseWay: "",
                        Manufacturer: ""
                    }
                });

                this.form.cleanErrors();
            }
        }
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {
            // this.unSubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                values = _state.values,
                errors = _state.errors;


            return _react2.default.createElement(
                'div',
                { id: 'GoodEditor', className: 'editor_zone' },
                _react2.default.createElement(
                    _formLib.Form,
                    { className: 'form-horizontal', ref: function ref(_ref) {
                            return _this3.form = _ref;
                        }, values: values, id: 'form', model: model, onChange: function onChange(values) {
                            _this3.setState({ values: values });
                            _this3.form.cleanErrors();
                        }, onCheck: function onCheck(errors) {
                            _this3.setState({ errors: errors });
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u540D\u79F0'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' })
                        ),
                        _react2.default.createElement(_formLib.Field, { type: 'hidden', className: '', name: 'ID' }),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Name
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u62FC\u97F3'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'NamePinYin', id: 'NamePinYin' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.NamePinYin
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u901A\u7528\u540D'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'OfficalName', id: 'OfficalName' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.OfficalName
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u89C4\u683C'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Dimension', id: 'Dimension' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Dimension
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u5242\u578B'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'FormOfDrug', id: 'FormOfDrug' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.FormOfDrug
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u5355\u4F4D'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Unit', id: 'Unit' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Unit
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u7528\u6CD5\u7528\u91CF'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'UseWay', id: 'UseWay' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.UseWay
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u4E2D\u6807\u4EF7:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'BidPrice', id: 'BidPrice' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.BidPrice
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u7ADE\u4E89\u60C5\u51B5:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Competion', id: 'Competion' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Competion
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u533B\u4FDD\u60C5\u51B5:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Medicare', id: 'Medicare' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Medicare
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u7597\u7A0B:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'PeriodTreatment', id: 'PeriodTreatment' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.PeriodTreatment
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u9002\u5E94\u75C7:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Translation', id: 'Translation' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Translation
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u662F\u5426\u8FDB\u53E3:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(
                                'label',
                                { 'class': 'radio-inline' },
                                _react2.default.createElement('input', { type: 'radio', name: 'IsForeign', id: 'IsForeign', value: '0' }),
                                '\u975E\u8FDB\u53E3'
                            ),
                            _react2.default.createElement(
                                'label',
                                { 'class': 'radio-inline' },
                                _react2.default.createElement('input', { type: 'radio', name: 'IsForeign', id: 'IsForeign', value: '1' }),
                                '\u8FDB\u53E3'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u6279\u51C6\u6587\u53F7:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'ApprovalNumber', id: 'ApprovalNumber' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.ApprovalNumber
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u9ED8\u8BA4\u6210\u672C'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'DefaultCostPrice', id: 'DefaultCostPrice' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.DefaultCostPrice
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u9ED8\u8BA4\u4EF7\u683C'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'DefaultPrice', id: 'DefaultPrice' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.DefaultPrice
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u6743\u9650\u4EF7\u683C'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'LimitPrice', id: 'LimitPrice' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.LimitPrice
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u751F\u4EA7\u5382\u5546'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Manufacturer', id: 'Manufacturer' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Manufacturer
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement('label', { className: 'control-label col-sm-3' }),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.submit, className: 'btn btn-primary' },
                            '\u4FDD\u5B58'
                        ),
                        '\xA0\xA0',
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-default', onClick: this.cancel },
                            '\u53D6\u6D88'
                        )
                    )
                )
            );
        }
    }]);

    return GoodEditor;
}(_react2.default.Component);

exports.default = GoodEditor;

/***/ }),

/***/ "./src/components/GoodList.js":
/*!************************************!*\
  !*** ./src/components/GoodList.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

var _GoodEditor = __webpack_require__(/*! ./GoodEditor */ "./src/components/GoodEditor.js");

var _GoodEditor2 = _interopRequireDefault(_GoodEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 药品列表管理
 * @extends React.Component
 */
var GoodList = function (_React$Component) {
    _inherits(GoodList, _React$Component);

    function GoodList(props) {
        _classCallCheck(this, GoodList);

        var _this = _possibleConstructorReturn(this, (GoodList.__proto__ || Object.getPrototypeOf(GoodList)).call(this, props));

        _this.unSubscribe = _Reducer2.default.subscribe(function () {
            var s = _Reducer2.default.getState();
            _this.setState(s);
        });

        _this.state = _Reducer2.default.getState();
        _this.loadGoodListFromDB = _this._loadGoodListFromDB.bind(_this);
        _this.onCancel = _this._onCancel.bind(_this);
        _this.onSaveCompleted = _this._onSaveCompleted.bind(_this);
        return _this;
    }

    _createClass(GoodList, [{
        key: '_onCancel',
        value: function _onCancel() {
            _Reducer2.default.dispatch({ type: "GOOD_EDITOR_CANCEL" });
        }
    }, {
        key: '_onSaveCompleted',
        value: function _onSaveCompleted() {
            _Reducer2.default.dispatch({ type: "GOOD_EDITOR_DONE" });
        }
    }, {
        key: '_loadGoodListFromDB',
        value: function _loadGoodListFromDB() {
            _Reducer2.default.dispatch({ type: "FETCH_GOODS" });

            var formData = new FormData();

            formData.append("KeyWord", "");
            formData.append("Page", 0);
            formData.append("Limit", 10);

            fetch('/api/good/search', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                console.log(json);
                if (json.code == 0) {
                    _Reducer2.default.dispatch({ type: "FETCH_GOODS_DONE", payload: json.data });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadGoodListFromDB();
        }
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {
            this.unSubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state$goodList = this.state.goodList,
                goods = _state$goodList.goods,
                good = _state$goodList.good,
                action = _state$goodList.action;


            var editorJsx = "";
            if (good && action == "update") {
                editorJsx = _react2.default.createElement(
                    'div',
                    { className: 'col-md-5' },
                    _react2.default.createElement(_GoodEditor2.default, { action: action, good: good, onCanceled: this.onCancel, onGoodSaveCompleted: this.onGoodSaveCompleted })
                );
            } else if (action == "add") {
                editorJsx = _react2.default.createElement(
                    'div',
                    { className: 'col-md-5' },
                    _react2.default.createElement(_GoodEditor2.default, { action: action, good: null, onCanceled: this.onCancel, onGoodSaveCompleted: this.onGoodSaveCompleted })
                );
            }

            var mListJsx = goods.map(function (g, index) {
                return _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'td',
                        null,
                        g.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        g.OfficalName
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        g.Dimension
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        g.Unit
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        g.DefaultCostPrice
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        g.DefaultPrice
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        g.LimitPrice
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        g.Manufacturer
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        g.UseWay
                    ),
                    _react2.default.createElement(
                        'td',
                        { style: {
                                "width": "80px"
                            } },
                        _react2.default.createElement(
                            'button',
                            { onClick: function onClick() {
                                    _Reducer2.default.dispatch({ type: "EDITOR_GOOD", payload: g });
                                } },
                            '\u7F16\u8F91'
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { id: 'GoodList' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6 col-md-offset-1 main' },
                    _react2.default.createElement(
                        'div',
                        { id: 'page_title' },
                        _react2.default.createElement(
                            'h4',
                            null,
                            '\u836F\u54C1\u7BA1\u7406'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'fun_zone' },
                            _react2.default.createElement(
                                _formLib.Form,
                                { className: 'form-inline', ref: function ref(_ref) {
                                        return _this2.form = _ref;
                                    }, id: 'form', onChange: function onChange(values) {
                                        _this2.setState({ role: values });
                                        _this2.form.cleanErrors();
                                    }, onCheck: function onCheck(errors) {
                                        _this2.setState({ errors: errors });
                                    } },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group' },
                                    _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' }),
                                    '\xA0\xA0',
                                    _react2.default.createElement(
                                        'button',
                                        { onClick: this.submit, className: 'btn btn-default' },
                                        '\u67E5\u8BE2'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'button',
                                { onClick: function onClick() {
                                        _Reducer2.default.dispatch({ type: "SET_ADD_MODE" });
                                    } },
                                '\u6DFB\u52A0'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'table',
                        { className: 'table table-striped table-hover' },
                        _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u836F\u54C1\u540D'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u901A\u7528\u540D'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u89C4\u683C'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u5355\u4F4D'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u9ED8\u8BA4\u6210\u672C'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u9ED8\u8BA4\u552E\u4EF7'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u6743\u9650\u4EF7'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u751F\u4EA7\u5546'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u7528\u6CD5'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u8FDB\u53E3'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'tbody',
                            null,
                            mListJsx
                        )
                    )
                ),
                editorJsx
            );
        }
    }]);

    return GoodList;
}(_react2.default.Component);

exports.default = GoodList;

/***/ }),

/***/ "./src/components/IntentionEditor.js":
/*!*******************************************!*\
  !*** ./src/components/IntentionEditor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _IntentionList = __webpack_require__(/*! ./IntentionList */ "./src/components/IntentionList.js");

var _IntentionList2 = _interopRequireDefault(_IntentionList);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var model = (0, _rsuiteSchema.SchemaModel)({ Name: (0, _rsuiteSchema.StringType)().isRequired('角色名不能为空') });

/**
 * 会员意向编辑组件
 * @extends React.Component
 */

var IntentionEditor = function (_React$Component) {
    _inherits(IntentionEditor, _React$Component);

    function IntentionEditor(props) {
        _classCallCheck(this, IntentionEditor);

        var _this = _possibleConstructorReturn(this, (IntentionEditor.__proto__ || Object.getPrototypeOf(IntentionEditor)).call(this, props));

        _this.state = {
            values: {},
            errors: {},
            isFetching: false
        };

        _this.loadObjectDetail = _this._loadObjectDetail.bind(_this);
        _this.submitIntention = _this._submitIntention.bind(_this);
        return _this;
    }

    _createClass(IntentionEditor, [{
        key: '_loadObjectDetail',
        value: function _loadObjectDetail() {}
    }, {
        key: '_submitIntention',
        value: function _submitIntention() {
            var member = this.props.member;

            var formData = new FormData();

            var Remarks = this.state.values.Remarks;


            formData.append("MemberID", member.ID);
            formData.append("Goods", Remarks);

            fetch('/api/intention/save', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                if (json.code == 0) {
                    console.log(json);
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var member = this.props.member;

            if (member) {
                this.setState({ values: member });
            }
        }
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var member = this.props.member;
            var _state = this.state,
                values = _state.values,
                errors = _state.errors,
                isFetching = _state.isFetching;


            return _react2.default.createElement(
                'div',
                { id: 'IntentionEditor' },
                _react2.default.createElement(_IntentionList2.default, { member: member }),
                _react2.default.createElement(
                    _formLib.Form,
                    { ref: function ref(_ref) {
                            return _this2.form = _ref;
                        }, values: values, id: 'form', model: model, onChange: function onChange(values) {
                            _this2.setState({ values: values });
                            _this2.form.cleanErrors();
                        }, onCheck: function onCheck(errors) {
                            _this2.setState({ errors: errors });
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            null,
                            '\u610F\u5411\u836F\u54C1'
                        ),
                        _react2.default.createElement(_formLib.Field, { name: 'Remark', id: 'Remark' }),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Remark
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'button',
                            { onClick: this.submitIntention, className: 'btn btn-primary' },
                            '\u4FDD\u5B58'
                        ),
                        '\xA0\xA0',
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-default', onClick: this.cancel },
                            '\u53D6\u6D88'
                        )
                    )
                )
            );
        }
    }]);

    return IntentionEditor;
}(_react2.default.Component);

exports.default = IntentionEditor;

/***/ }),

/***/ "./src/components/IntentionList.js":
/*!*****************************************!*\
  !*** ./src/components/IntentionList.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntentionList = function (_React$Component) {
    _inherits(IntentionList, _React$Component);

    function IntentionList(props) {
        _classCallCheck(this, IntentionList);

        var _this = _possibleConstructorReturn(this, (IntentionList.__proto__ || Object.getPrototypeOf(IntentionList)).call(this, props));

        _this.unSubscribe = _Reducer2.default.subscribe(function () {
            var s = _Reducer2.default.getState();
            _this.setState(s);
        });

        _this.state = _Reducer2.default.getState();
        _this.loadIntentionsFromDB = _this._loadIntentionsFromDB.bind(_this);
        return _this;
    }

    _createClass(IntentionList, [{
        key: '_loadIntentionsFromDB',
        value: function _loadIntentionsFromDB(member) {
            _Reducer2.default.dispatch({ type: "FETCH_INTENTIONS" });

            fetch('/api/member/' + member.ID, {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                console.log(json);
                if (json.code == 0) {
                    _Reducer2.default.dispatch({ type: "FETCH_INTENTIONS_DONE", payload: json.intentionData });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var member = this.props.member;

            console.log(member);
            if (member) {
                this.loadIntentionsFromDB(member);
            }
        }
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {
            this.unSubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _state$intentionList = this.state.intentionList,
                intentions = _state$intentionList.intentions,
                isFetching = _state$intentionList.isFetching,
                values = _state$intentionList.values,
                errors = _state$intentionList.errors;


            var listJsx = intentions.map(function (i, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        null,
                        i.ID
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        i.Goods
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        i.OperatorID
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        i.CreateTime
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { id: 'IntentionList' },
                _react2.default.createElement(
                    'h4',
                    null,
                    '\u5BA2\u6237\u610F\u5411\u8BB0\u5F55'
                ),
                _react2.default.createElement(
                    'table',
                    { className: 'table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5BA2\u4EBA\u59D3\u540D'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u610F\u5411\u5355\u8BE6\u60C5'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u65F6\u95F4'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u836F\u5E08'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u64CD\u4F5C'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        listJsx
                    )
                )
            );
        }
    }]);

    return IntentionList;
}(_react2.default.Component);

exports.default = IntentionList;

/***/ }),

/***/ "./src/components/InviteEditor.js":
/*!****************************************!*\
  !*** ./src/components/InviteEditor.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _InviteList = __webpack_require__(/*! ./InviteList */ "./src/components/InviteList.js");

var _InviteList2 = _interopRequireDefault(_InviteList);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var model = (0, _rsuiteSchema.SchemaModel)({ Name: (0, _rsuiteSchema.StringType)().isRequired('角色名不能为空') });

/**
 * 客户回访编辑组件
 * @extends React.Component
 */

var InviteEditor = function (_React$Component) {
    _inherits(InviteEditor, _React$Component);

    function InviteEditor(props) {
        _classCallCheck(this, InviteEditor);

        var _this = _possibleConstructorReturn(this, (InviteEditor.__proto__ || Object.getPrototypeOf(InviteEditor)).call(this, props));

        _this.state = {
            values: {},
            errors: {},
            isFetching: false
        };

        _this.submitInvite = _this._submitInvite.bind(_this);
        return _this;
    }

    _createClass(InviteEditor, [{
        key: '_submitInvite',
        value: function _submitInvite() {
            var member = this.props.member;

            var formData = new FormData();

            var Remarks = this.state.values.Remarks;


            formData.append("MemberID", member.ID);
            formData.append("Remarks", Remarks);

            fetch('/api/visit/save', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                if (json.code == 0) {
                    console.log(json);
                } else {
                    alert(json.message);
                }
                //TODO
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var member = this.props.member;

            if (member) {
                this.setState({ values: member });
            }
        }
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {
            this.unSubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                values = _state.values,
                errors = _state.errors,
                isFetching = _state.isFetching;
            var member = this.props.member;

            console.log({ member: member });
            return _react2.default.createElement(
                'div',
                { id: 'InviteEditor' },
                _react2.default.createElement(
                    'h4',
                    null,
                    '\u5BA2\u6237\u56DE\u8BBF\u8BB0\u5F55'
                ),
                _react2.default.createElement(_InviteList2.default, { member: member }),
                _react2.default.createElement(
                    _formLib.Form,
                    { ref: function ref(_ref) {
                            return _this2.form = _ref;
                        }, values: values, id: 'form', model: model, onChange: function onChange(values) {
                            _this2.setState({ values: values });
                            _this2.form.cleanErrors();
                        }, onCheck: function onCheck(errors) {
                            _this2.setState({ errors: errors });
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            null,
                            '\u56DE\u8BBF'
                        ),
                        _react2.default.createElement(_formLib.Field, { name: 'Remarks', id: 'Remarks' }),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Remarks
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'button',
                            { onClick: this.submitInvite, className: 'btn btn-primary' },
                            '\u4FDD\u5B58'
                        ),
                        '\xA0\xA0',
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-default', onClick: this.cancel },
                            '\u53D6\u6D88'
                        )
                    )
                )
            );
        }
    }]);

    return InviteEditor;
}(_react2.default.Component);

exports.default = InviteEditor;

/***/ }),

/***/ "./src/components/InviteList.js":
/*!**************************************!*\
  !*** ./src/components/InviteList.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InviteList = function (_React$Component) {
    _inherits(InviteList, _React$Component);

    function InviteList(props) {
        _classCallCheck(this, InviteList);

        var _this = _possibleConstructorReturn(this, (InviteList.__proto__ || Object.getPrototypeOf(InviteList)).call(this, props));

        _this.unSubscribe = _Reducer2.default.subscribe(function () {
            var s = _Reducer2.default.getState();
            _this.setState(s);
        });

        _this.state = _Reducer2.default.getState();
        _this.loadVistsFromDB = _this._loadVistsFromDB.bind(_this);
        return _this;
    }

    _createClass(InviteList, [{
        key: '_loadVistsFromDB',
        value: function _loadVistsFromDB(member) {
            _Reducer2.default.dispatch({ type: "FETCH_INVITE" });
            console.log(member.ID);
            fetch('/api/member/' + member.ID, {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                console.log({ json: json });
                if (json.code == 0) {
                    _Reducer2.default.dispatch({ type: "FETCH_INVITE_DONE", payload: json.visitData });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var member = nextProps.member;
            var oldMember = this.props.member;


            if (member.ID != oldMember.ID) {
                console.log({ member: member });
                if (member) {
                    this.loadVistsFromDB(member);
                }
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var member = this.props.member;

            console.log({ member: member });
            if (member) {
                this.loadVistsFromDB(member);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _state$invistList = this.state.invistList,
                invists = _state$invistList.invists,
                isFetching = _state$invistList.isFetching;


            var listJsx = invists.map(function (i, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        null,
                        i.MemberID
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        i.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        i.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        i.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        i.Name
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { id: 'InviteList' },
                _react2.default.createElement(
                    'table',
                    { className: 'table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5BA2\u4EBA\u59D3\u540D'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u56DE\u8BBF\u8BB0\u5F55'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u65F6\u95F4'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u836F\u5E08'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u64CD\u4F5C'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        listJsx
                    )
                )
            );
        }
    }]);

    return InviteList;
}(_react2.default.Component);

exports.default = InviteList;

/***/ }),

/***/ "./src/components/MainMenu.js":
/*!************************************!*\
  !*** ./src/components/MainMenu.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainMenu = function MainMenu() {
    return _react2.default.createElement(
        'ul',
        { id: 'back_menu', className: 'nav nav-sidebar' },
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/back_index' },
                '\u9ED8\u8BA4\u9875'
            )
        ),
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/orders', activeClassName: 'checked' },
                '\u9500\u552E\u8BA2\u5355'
            )
        ),
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/receipts', activeClassName: 'checked' },
                '\u8FDB\u8D27\u5355'
            )
        ),
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/stats', activeClassName: 'checked' },
                '\u6570\u636E'
            )
        ),
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/members', activeClassName: 'checked' },
                '\u4F1A\u5458'
            )
        ),
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/goods', activeClassName: 'checked' },
                '\u836F\u54C1'
            )
        ),
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/vendors', activeClassName: 'checked' },
                '\u4F9B\u5E94\u5546'
            )
        )
    );
};

exports.default = MainMenu;

/***/ }),

/***/ "./src/components/ManagerRouter.js":
/*!*****************************************!*\
  !*** ./src/components/ManagerRouter.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");

var _index = __webpack_require__(/*! ./index */ "./src/components/index.js");

__webpack_require__(/*! rsuite/styles/less/index.less */ "./node_modules/rsuite/styles/less/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var routes = [{
    path: "/orders/",
    extra: true,
    component: _index.OrderList
}, {
    path: "/order/editor",
    extra: true,
    component: _index.OrderEditor
}, {
    path: "/receipts/",
    extra: true,
    component: _index.ReceiptList
}, {
    path: "/receipt/editor",
    extra: true,
    component: _index.ReceiptEditor
}, {
    path: "/stats/",
    extra: true,
    component: _index.StatsList
}, {
    path: "/members/",
    extra: true,
    component: _index.MemberList
}, {
    path: "/vendors/",
    extra: true,
    component: _index.VendorList
}, {
    path: "/goods/",
    extra: true,
    component: _index.GoodList
}, {
    path: "/back_index",
    extra: true,
    component: _index.SiteIndex
}];

/**
 * 厨师工作台
 * @extends React.Component
 */

var ManagerRouter = function (_React$Component) {
    _inherits(ManagerRouter, _React$Component);

    function ManagerRouter(props) {
        _classCallCheck(this, ManagerRouter);

        var _this = _possibleConstructorReturn(this, (ManagerRouter.__proto__ || Object.getPrototypeOf(ManagerRouter)).call(this, props));

        _this.state = {
            employee: {}
        };
        return _this;
    }

    _createClass(ManagerRouter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // fetch('/api/employee/profile', {
            //     method: "GET",
            //     mode: 'same-origin',
            //     credentials: 'same-origin'
            // }).then(res => res.json()).then(json => {
            //     if (json.code == 0) {
            //         console.log("加载雇员详细信息", json);
            //         this.setState({employee: json.data})
            //     } else {
            //         alert(json.message);
            //     }
            // }).catch(err => console.log(err));
        }
    }, {
        key: 'render',
        value: function render() {
            var employee = this.state.employee;


            return _react2.default.createElement(
                _reactRouterDom.BrowserRouter,
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'navbar navbar-inverse navbar-fixed-top' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            '\u7F8E\u4FE1\u5EB7\u5E74\u5927\u836F\u623F'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'container-fluid' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-1 sidebar' },
                                _react2.default.createElement(_index.MainMenu, null)
                            ),
                            _react2.default.createElement(
                                _reactRouterDom.Switch,
                                null,
                                routes.map(function (route, i) {
                                    return _react2.default.createElement(_index.Container, _extends({ key: i, Employee: employee }, route));
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ManagerRouter;
}(_react2.default.Component);

// export default ManagerRouter;

exports.default = (0, _reactHotLoader.hot)(module)(ManagerRouter);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/MemberEditor.js":
/*!****************************************!*\
  !*** ./src/components/MemberEditor.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var model = (0, _rsuiteSchema.SchemaModel)({ Name: (0, _rsuiteSchema.StringType)().isRequired('角色名不能为空') });

/**
 * 会员基础数据编辑组件
 * @extends React.Component
 */

var MemberEditor = function (_React$Component) {
    _inherits(MemberEditor, _React$Component);

    function MemberEditor(props) {
        _classCallCheck(this, MemberEditor);

        // this.unSubscribe = Store.subscribe(() => {
        //     let s = Store.getState();
        //     this.setState(s);
        // });

        // this.state = Store.getState();
        var _this = _possibleConstructorReturn(this, (MemberEditor.__proto__ || Object.getPrototypeOf(MemberEditor)).call(this, props));

        _this.state = {
            values: {},
            errors: {}
        };

        _this.loadObjectDetail = _this._loadObjectDetail.bind(_this);
        _this.submit = _this._submit.bind(_this);
        _this.cancel = _this._cancel.bind(_this);
        return _this;
    }

    _createClass(MemberEditor, [{
        key: '_loadObjectDetail',
        value: function _loadObjectDetail() {}
    }, {
        key: '_cancel',
        value: function _cancel() {
            if (this.props.onCanceled) {
                this.props.onCanceled();
            }
        }
    }, {
        key: '_submit',
        value: function _submit() {
            var _this2 = this;

            if (!this.form.check()) {
                this.setState({ message: "数据格式有错误" });
                return;
            }

            var formData = new FormData(document.getElementById('form'));
            var action = this.props.action;


            var url = "/api/member/add";
            if (action == "update") {
                url = "/api/member/update";
            }

            fetch(url, {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                if (json.code == 0) {
                    if (_this2.props.onMemberDetailSaveCompleted) {
                        _this2.props.onMemberDetailSaveCompleted(json.data);
                    }
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var member = nextProps.member,
                action = nextProps.action;
            var oldMember = this.props.member;


            console.log({ action: action, member: member });

            if (member && oldMember) {
                if (member.ID != oldMember.ID) {
                    this.setState({ values: member });
                }
            } else if (member) {
                this.setState({ values: member });
            } else if (action == "add") {
                //添加会员
                this.setState({
                    values: {
                        Name: "",
                        PinYin: "",
                        Gender: "",
                        Telephone: "",
                        "City": "",
                        "Address": "",
                        Diseases: "",
                        Remark: "",
                        RelationWithPatient: ""
                    }
                });
                this.form.cleanErrors();
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var member = this.props.member;

            if (member) {
                this.setState({ values: member });
            }
        }
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {
            this.unSubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                values = _state.values,
                errors = _state.errors;
            var action = this.props.action;


            var header = "添加新会员";
            if (action == "update") {
                header = "修改会员";
            }

            return _react2.default.createElement(
                'div',
                { id: 'MemberEditor' },
                _react2.default.createElement(
                    'h4',
                    null,
                    header
                ),
                _react2.default.createElement(
                    _formLib.Form,
                    { className: 'form-horizontal', ref: function ref(_ref) {
                            return _this3.form = _ref;
                        }, values: values, id: 'form', model: model, onChange: function onChange(values) {
                            _this3.setState({ values: values });
                            _this3.form.cleanErrors();
                        }, onCheck: function onCheck(errors) {
                            _this3.setState({ errors: errors });
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u540D\u79F0'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' })
                        ),
                        _react2.default.createElement(_formLib.Field, { type: 'hidden', name: 'ID' }),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Name
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u62FC\u97F3'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'PinYin', id: 'PinYin' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.PinYin
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u6027\u522B'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(
                                'label',
                                { className: 'radio-inline' },
                                _react2.default.createElement('input', { type: 'radio', name: 'IsForeign', id: 'IsForeign', value: '1' }),
                                '\u7537\u751F'
                            ),
                            _react2.default.createElement(
                                'label',
                                { className: 'radio-inline' },
                                _react2.default.createElement('input', { type: 'radio', name: 'IsForeign', id: 'IsForeign', value: '2' }),
                                '\u5973\u751F'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Gender
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u7535\u8BDD'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Telephone', id: 'Telephone' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Telephone
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u57CE\u5E02'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'City', id: 'City' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.City
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u5730\u5740'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Address', id: 'Address' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Address
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u5FAE\u4FE1\u53F7'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'WeiXinCode', id: 'WeiXinCode' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.WeiXinCode
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u597D\u53CB'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'FriendName', id: 'FriendName' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.FriendName
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u5E74\u4EE3'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'BirthYear', id: 'BirthYear' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.BirthYear
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u75BE\u75C5'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Diseases', id: 'Diseases' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Diseases
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u60A3\u8005\u5173\u7CFB'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'RelationWithPatient', id: 'RelationWithPatient' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.RelationWithPatient
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u5907\u6CE8'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Remark', id: 'Remark' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Remark
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement('label', { className: 'control-label col-sm-3' }),
                        _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        '\xA0\xA0',
                        _react2.default.createElement(
                            'button',
                            { onClick: this.submit, className: 'btn btn-default' },
                            '\u4FDD\u5B58'
                        ),
                        '\xA0\xA0',
                        _react2.default.createElement(
                            'button',
                            { className: 'btn', onClick: this.cancel },
                            '\u53D6\u6D88'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' }),
                        '\xA0\xA0',
                        _react2.default.createElement(
                            'button',
                            { onClick: this.submit, className: 'btn btn-default' },
                            '\u67E5\u8BE2'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' }),
                        '\xA0\xA0',
                        _react2.default.createElement(
                            'button',
                            { onClick: this.submit, className: 'btn btn-default' },
                            '\u67E5\u8BE2'
                        )
                    )
                )
            );
        }
    }]);

    return MemberEditor;
}(_react2.default.Component);

exports.default = MemberEditor;

/***/ }),

/***/ "./src/components/MemberList.js":
/*!**************************************!*\
  !*** ./src/components/MemberList.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

var _MemberEditor = __webpack_require__(/*! ./MemberEditor */ "./src/components/MemberEditor.js");

var _MemberEditor2 = _interopRequireDefault(_MemberEditor);

var _InviteEditor = __webpack_require__(/*! ./InviteEditor */ "./src/components/InviteEditor.js");

var _InviteEditor2 = _interopRequireDefault(_InviteEditor);

var _IntentionEditor = __webpack_require__(/*! ./IntentionEditor */ "./src/components/IntentionEditor.js");

var _IntentionEditor2 = _interopRequireDefault(_IntentionEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MemberList = function (_React$Component) {
    _inherits(MemberList, _React$Component);

    function MemberList(props) {
        _classCallCheck(this, MemberList);

        var _this = _possibleConstructorReturn(this, (MemberList.__proto__ || Object.getPrototypeOf(MemberList)).call(this, props));

        _this.unSubscribe = _Reducer2.default.subscribe(function () {
            var s = _Reducer2.default.getState();
            _this.setState(s);
        });

        _this.state = _Reducer2.default.getState();
        _this.loadMemberList = _this._loadMemberList.bind(_this);
        _this.onMemberDetailSaveCompleted = _this._onMemberDetailSaveCompleted.bind(_this);
        _this.onMemberDetailCancel = _this._onMemberDetailCancel.bind(_this);
        return _this;
    }

    _createClass(MemberList, [{
        key: '_loadMemberList',
        value: function _loadMemberList() {
            _Reducer2.default.dispatch({ type: "FETCH_MEMBER" });

            var formData = new FormData();

            formData.append("KeyWord", "测试");
            formData.append("MobilPhone", "");
            formData.append("Page", 0);
            formData.append("Limit", 20);

            fetch('/api/member/search', {
                body: formData,
                method: "POST",
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                if (json.code == 0) {
                    console.log(json);
                    _Reducer2.default.dispatch({ type: "FETCH_MEMBER_DONE", payload: json.data });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {
            this.unSubscribe();
        }
    }, {
        key: '_onMemberDetailSaveCompleted',
        value: function _onMemberDetailSaveCompleted(newMember) {
            _Reducer2.default.dispatch({ type: "MEMBER_EDITOR_DONE" });
        }
    }, {
        key: '_onMemberDetailCancel',
        value: function _onMemberDetailCancel() {
            _Reducer2.default.dispatch({ type: "MEMBER_EDITOR_CANCEL" });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadMemberList();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state$memberList = this.state.memberList,
                members = _state$memberList.members,
                member = _state$memberList.member,
                action = _state$memberList.action;


            var editorJsx = "";

            // console.log({action, member});

            switch (action) {
                case "update_member":
                    editorJsx = _react2.default.createElement(
                        'div',
                        { className: 'col-md-5' },
                        _react2.default.createElement(_MemberEditor2.default, { action: action, member: member, onCanceled: this.onMemberDetailCancel, onSaveCompleted: this.onMemberDetailSaveCompleted })
                    );
                    break;
                case "add_member":
                    editorJsx = _react2.default.createElement(
                        'div',
                        { className: 'col-md-5' },
                        _react2.default.createElement(_MemberEditor2.default, { action: action, member: null, onCanceled: this.onMemberDetailCancel, onSaveCompleted: this.onMemberDetailSaveCompleted })
                    );
                    break;
                case "add_visit":
                    editorJsx = _react2.default.createElement(
                        'div',
                        { className: 'col-md-5' },
                        _react2.default.createElement(_InviteEditor2.default, { action: action, member: member, onCanceled: this.onMemberDetailCancel, onSaveCompleted: this.onMemberDetailSaveCompleted })
                    );
                    break;
                case "add_intention":
                    editorJsx = _react2.default.createElement(
                        'div',
                        { className: 'col-md-5' },
                        _react2.default.createElement(_IntentionEditor2.default, { action: action, member: member, onCanceled: this.onMemberDetailCancel, onSaveCompleted: this.onMemberDetailSaveCompleted })
                    );
                    break;
            }

            var mListJsx = members.map(function (m, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        { style: {
                                "width": "60px"
                            } },
                        m.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.City
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.MobilPhone
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.IntentionGoods
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.IntentionQuantity
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.VisitQuantity
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.OrderQuantity
                    ),
                    _react2.default.createElement(
                        'td',
                        { style: {
                                "width": "120px"
                            } },
                        _react2.default.createElement(
                            'a',
                            { href: '#', onClick: function onClick() {
                                    _Reducer2.default.dispatch({ type: "EDITOR_MEMBER", payload: m });
                                } },
                            '\u7F16\u8F91'
                        ),
                        '\xA0',
                        _react2.default.createElement(
                            'a',
                            { href: '#', onClick: function onClick() {
                                    _Reducer2.default.dispatch({ type: "EDITOR_MEMBER_INTENTIONS", payload: m });
                                } },
                            '\u610F\u5411'
                        ),
                        '\xA0',
                        _react2.default.createElement(
                            'a',
                            { href: '#', onClick: function onClick() {
                                    _Reducer2.default.dispatch({ type: "EDITOR_MEMBER_VISIT", payload: m });
                                } },
                            '\u56DE\u8BBF'
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { id: 'MemberList' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6 col-md-offset-1 main' },
                    _react2.default.createElement(
                        'div',
                        { id: 'page_title' },
                        _react2.default.createElement(
                            'h4',
                            null,
                            '\u4F1A\u5458\u7BA1\u7406'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'fun_zone' },
                            _react2.default.createElement(
                                _formLib.Form,
                                { className: 'form-inline', ref: function ref(_ref) {
                                        return _this2.form = _ref;
                                    }, id: 'form', onChange: function onChange(values) {
                                        _this2.setState({ role: values });
                                        _this2.form.cleanErrors();
                                    }, onCheck: function onCheck(errors) {
                                        _this2.setState({ errors: errors });
                                    } },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group' },
                                    _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' }),
                                    '\xA0\xA0',
                                    _react2.default.createElement(
                                        'button',
                                        { onClick: this.submit, className: 'btn btn-primary' },
                                        '\u67E5\u8BE2'
                                    )
                                ),
                                '\xA0\xA0',
                                _react2.default.createElement(
                                    'button',
                                    { className: 'btn btn-default', onClick: function onClick() {
                                            _Reducer2.default.dispatch({ type: "SET_ADD_MODE" });
                                        } },
                                    '\u6DFB\u52A0\u65B0\u4F1A\u5458'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'table',
                        { className: 'table' },
                        _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u5BA2\u4EBA\u59D3\u540D'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u57CE\u5E02'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u7535\u8BDD'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u610F\u5411\u6807\u7B7E'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u610F\u5411\u5546\u54C1'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u56DE\u8BBF'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u6210\u5355'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u64CD\u4F5C'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'tbody',
                            null,
                            mListJsx
                        )
                    )
                ),
                editorJsx
            );
        }
    }]);

    return MemberList;
}(_react2.default.Component);

exports.default = MemberList;

/***/ }),

/***/ "./src/components/OrderEditor.js":
/*!***************************************!*\
  !*** ./src/components/OrderEditor.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

var _GoodList = __webpack_require__(/*! ./GoodList */ "./src/components/GoodList.js");

var _GoodList2 = _interopRequireDefault(_GoodList);

var _OrderGoodList = __webpack_require__(/*! ./OrderGoodList */ "./src/components/OrderGoodList.js");

var _OrderGoodList2 = _interopRequireDefault(_OrderGoodList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var model = (0, _rsuiteSchema.SchemaModel)({ Name: (0, _rsuiteSchema.StringType)().isRequired('角色名不能为空') });

var OrderEditor = function (_React$Component) {
    _inherits(OrderEditor, _React$Component);

    function OrderEditor(_ref) {
        var location = _ref.location,
            props = _ref.props;

        _classCallCheck(this, OrderEditor);

        var _this = _possibleConstructorReturn(this, (OrderEditor.__proto__ || Object.getPrototypeOf(OrderEditor)).call(this, props));

        _this.unSubscribe = _Reducer2.default.subscribe(function () {
            var s = _Reducer2.default.getState();
            _this.setState(s);
        });

        _this.state = _Reducer2.default.getState();

        _this.loadOrderGoodsFromDB = _this._loadOrderGoodsFromDB.bind(_this);
        return _this;
    }

    _createClass(OrderEditor, [{
        key: '_loadOrderGoodsFromDB',
        value: function _loadOrderGoodsFromDB(order) {
            _Reducer2.default.dispatch({ type: "FETCH_ORDER" });

            fetch('/api/order/info', {
                body: JSON.stringify({ ID: order.ID }),
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (res) {
                return res.json();
            }).then(function (json) {

                if (json.code == 0) {
                    _Reducer2.default.dispatch({ type: "FETCH_ORDER_DONE", payload: json });
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var order = this.props.order;
            var state = this.props.location.state;


            console.log({ state: state });

            if (state) {
                this.loadOrderGoodsFromDB(state);
                _Reducer2.default.dispatch({ type: "SET_CHECKED_ORDER", payload: state });
                console.log(state);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state$orderEditor = this.state.orderEditor,
                values = _state$orderEditor.values,
                errors = _state$orderEditor.errors,
                order = _state$orderEditor.order,
                orderGoods = _state$orderEditor.orderGoods;


            return _react2.default.createElement(
                'div',
                { id: 'OrderEditor' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-7 col-md-offset-1 main' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        '\u9500\u552E\u8BA2\u5355\u7F16\u8F91'
                    ),
                    _react2.default.createElement(
                        _formLib.Form,
                        { className: 'form-horizontal', ref: function ref(_ref2) {
                                return _this2.form = _ref2;
                            }, values: values, id: 'form', model: model, onChange: function onChange(values) {
                                _this2.setState({ values: values });
                                _this2.form.cleanErrors();
                            }, onCheck: function onCheck(errors) {
                                _this2.setState({ errors: errors });
                            } },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label col-md-2' },
                                '\u5BA2\u6237\xA0',
                                _react2.default.createElement(
                                    'span',
                                    { className: 'red' },
                                    '*'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4' },
                                _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'text-danger' },
                                errors.Name
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'col-md-2 control-label' },
                                '\u7535\u8BDD\xA0',
                                _react2.default.createElement(
                                    'span',
                                    { className: 'red' },
                                    '*'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4' },
                                _react2.default.createElement(_formLib.Field, { name: 'MobilPhone', type: 'tel', placeholder: '\u7535\u8BDD', id: 'MobilPhone' })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'text-danger' },
                                errors.MobilPhone
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label col-md-2' },
                                '\u5730\u5740\xA0',
                                _react2.default.createElement(
                                    'span',
                                    { className: 'red' },
                                    '*'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4' },
                                _react2.default.createElement(_formLib.Field, { name: 'Address', id: 'Address', placeholder: '\u5730\u5740' })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'text-danger' },
                                errors.Address
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label col-md-2' },
                                '\u4ED8\u6B3E\u65B9\u5F0F\xA0',
                                _react2.default.createElement(
                                    'span',
                                    { className: 'red' },
                                    '*'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-8' },
                                _react2.default.createElement(
                                    'label',
                                    { 'class': 'radio-inline' },
                                    _react2.default.createElement('input', { type: 'radio', name: 'PayStyle', id: 'PayStyle', value: '1' }),
                                    '\u5FAE\u4FE1'
                                ),
                                _react2.default.createElement(
                                    'label',
                                    { 'class': 'radio-inline' },
                                    _react2.default.createElement('input', { type: 'radio', name: 'PayStyle', id: 'PayStyle', value: '2' }),
                                    '\u652F\u4ED8\u5B9D'
                                ),
                                _react2.default.createElement(
                                    'label',
                                    { 'class': 'radio-inline' },
                                    _react2.default.createElement('input', { type: 'radio', name: 'PayStyle', id: 'PayStyle', value: '3' }),
                                    '\u73B0\u91D1'
                                ),
                                _react2.default.createElement(
                                    'label',
                                    { 'class': 'radio-inline' },
                                    _react2.default.createElement('input', { type: 'radio', name: 'PayStyle', id: 'PayStyle', value: '4' }),
                                    '\u8D27\u5230\u4ED8\u6B3E'
                                ),
                                _react2.default.createElement(
                                    'label',
                                    { 'class': 'radio-inline' },
                                    _react2.default.createElement('input', { type: 'radio', name: 'PayStyle', id: 'PayStyle', value: '5' }),
                                    '\u4E8C\u7EF4\u7801'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label col-md-2' },
                                '\u5FEB\u9012\u516C\u53F8'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4' },
                                _react2.default.createElement(_formLib.Field, { name: 'DeliveryCompany', id: 'DeliveryCompany' })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'text-danger' },
                                errors.DeliveryCompany
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label col-md-2' },
                                '\u5FEB\u9012\u8D39\u7528'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4 ' },
                                _react2.default.createElement(_formLib.Field, { name: 'DeliveryFee', id: 'DeliveryFee' })
                            ),
                            _react2.default.createElement(_formLib.Field, { type: 'hidden', className: '', name: 'ID' }),
                            _react2.default.createElement(
                                'p',
                                { className: 'text-danger' },
                                errors.DeliveryFee
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label col-md-2' },
                                '\u9500\u552E\u5458'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4' },
                                _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'text-danger' },
                                errors.Name
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement('label', { className: ' col-md-2' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'btn btn-info btn-sm' },
                                    '\u6253\u5370\u5C0F\u7968'
                                ),
                                '\xA0\xA0',
                                _react2.default.createElement(
                                    'button',
                                    { className: 'btn btn-info btn-sm' },
                                    '\u6253\u5370\u5FEB\u9012\u5355'
                                )
                            )
                        ),
                        _react2.default.createElement('hr', null),
                        _react2.default.createElement(_OrderGoodList2.default, { orderGoods: orderGoods }),
                        _react2.default.createElement('hr', null),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'btn btn-primary' },
                                    '\u4FDD\u5B58\u9500\u552E\u5355'
                                ),
                                '\xA0\xA0'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return OrderEditor;
}(_react2.default.Component);

exports.default = OrderEditor;

/***/ }),

/***/ "./src/components/OrderGoodList.js":
/*!*****************************************!*\
  !*** ./src/components/OrderGoodList.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderGoodList = function (_React$Component) {
    _inherits(OrderGoodList, _React$Component);

    function OrderGoodList(props) {
        _classCallCheck(this, OrderGoodList);

        var _this = _possibleConstructorReturn(this, (OrderGoodList.__proto__ || Object.getPrototypeOf(OrderGoodList)).call(this, props));

        _this.state = {
            orderGood: null

        };

        _this.loadOrderGoodsFromDB = _this._loadOrderGoodsFromDB.bind(_this);
        return _this;
    }

    _createClass(OrderGoodList, [{
        key: '_loadOrderGoodsFromDB',
        value: function _loadOrderGoodsFromDB(order) {
            _Reducer2.default.dispatch({ type: "FETCH_ORDER_GOODS" });

            var formData = new FormData();
            formData.append("orderid", order.ID);

            fetch('/api/order/goods', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {

                console.log({ json: json });

                if (json.code == 0) {
                    _Reducer2.default.dispatch({ type: "FETCH_ORDER_GOODS_DONE", payload: json.data });
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var order = this.props.order;

            console.log({ order: order });
            if (order) {
                this.loadOrderGoodsFromDB(order);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var orderGoods = this.props.orderGoods;
            var orderGood = this.state.orderGood;


            var listJsx = orderGoods.map(function (og, index) {

                if (orderGood && orderGood.ID == og.ID) {
                    return _react2.default.createElement(
                        'tr',
                        { key: index },
                        _react2.default.createElement(
                            'td',
                            null,
                            og.GoodName
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            og.OfficalName
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            og.Dimension
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            og.Unit
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement('input', { id: 'Price', value: og.DefaultPrice })
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement('input', { id: 'Quantity', value: og.Quantity })
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            og.TotalCostPrice
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#', onClick: function onClick() {
                                        _this2.setState({ orderGood: null });
                                    } },
                                '\u786E\u5B9A'
                            )
                        )
                    );
                } else {
                    return _react2.default.createElement(
                        'tr',
                        { key: index },
                        _react2.default.createElement(
                            'td',
                            null,
                            og.GoodName
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            og.OfficalName
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            og.Dimension
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            og.Unit
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            og.DefaultPrice
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            og.Quantity
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            og.TotalCostPrice
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#', onClick: function onClick() {
                                        _this2.setState({ orderGood: og });
                                    } },
                                '\u7F16\u8F91'
                            )
                        )
                    );
                }
            });

            return _react2.default.createElement(
                'div',
                { id: 'OrderGoodList' },
                _react2.default.createElement(
                    'table',
                    { className: 'table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u836F\u54C1\u540D'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u901A\u7528\u540D'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u89C4\u683C'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5355\u4F4D'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u552E\u4EF7'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u6570\u91CF'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u91D1\u989D'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u64CD\u4F5C'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        listJsx
                    ),
                    _react2.default.createElement(
                        'tfoot',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                { colSpan: '8' },
                                _react2.default.createElement(
                                    'button',
                                    { style: {
                                            "float": "right"
                                        } },
                                    '\u6DFB\u52A0\u836F\u54C1'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return OrderGoodList;
}(_react2.default.Component);

exports.default = OrderGoodList;

/***/ }),

/***/ "./src/components/OrderList.js":
/*!*************************************!*\
  !*** ./src/components/OrderList.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 销售订单页面
 * @extends React.Component
 */
var OrderList = function (_React$Component) {
    _inherits(OrderList, _React$Component);

    function OrderList(props) {
        _classCallCheck(this, OrderList);

        var _this = _possibleConstructorReturn(this, (OrderList.__proto__ || Object.getPrototypeOf(OrderList)).call(this, props));

        _this.unSubscribe = _Reducer2.default.subscribe(function () {
            var s = _Reducer2.default.getState();
            _this.setState(s);
        });

        _this.state = _Reducer2.default.getState();

        _this.loadOrderListFromDB = _this._loadOrderListFromDB.bind(_this);
        _this.onGoOrderEditor = _this._onGoOrderEditor.bind(_this);

        return _this;
    }

    _createClass(OrderList, [{
        key: '_onGoOrderEditor',
        value: function _onGoOrderEditor(order) {
            this.props.history.push("/order/editor");
        }
    }, {
        key: '_loadOrderListFromDB',
        value: function _loadOrderListFromDB() {
            _Reducer2.default.dispatch({ type: "FETCH_ORDERS" });

            var formData = new FormData();

            formData.append("keyword", "");
            formData.append("start", 0);
            formData.append("length", 10);

            fetch('/api/order/search', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                console.log(json);
                if (json.code == 0) {
                    _Reducer2.default.dispatch({ type: "FETCH_ORDERS_DONE", payload: json.data });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadOrderListFromDB();
        }
    }, {
        key: '_loadOrdersFromDB',
        value: function _loadOrdersFromDB() {
            _Reducer2.default.dispatch({ type: "FETCH_ORDERS" });

            var formData = new FormData();
            formData.append("keyword", "");

            fetch('/api/order/search', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                console.log(json);
                if (json.code == 0) {
                    _Reducer2.default.dispatch({ type: "FETCH_ORDERS_DONE", payload: json.data });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {
            this.unSubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state$orderList = this.state.orderList,
                orders = _state$orderList.orders,
                order = _state$orderList.order;


            var mListJsx = orders.map(function (o, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        null,
                        o.Name
                    ),
                    _react2.default.createElement('td', null),
                    _react2.default.createElement(
                        'td',
                        null,
                        o.ReceiptAmount
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        o.PayStyleLabel
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        o.DeliveryCompany
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        o.DeliveryFee
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        o.DeliverCode
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        o.DeliverReceiptFee
                    ),
                    _react2.default.createElement(
                        'td',
                        { style: {
                                "width": "80px"
                            } },
                        _react2.default.createElement(
                            'button',
                            { onClick: function onClick() {
                                    _this2.props.history.push({ pathname: "/order/editor", state: o });
                                    // Store.dispatch({type: "EDITOR_MEMBER", payload: o})
                                } },
                            '\u7F16\u8F91'
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { id: 'OrderList', className: 'col-md-10 col-md-offset-1 main' },
                _react2.default.createElement(
                    'div',
                    { id: 'page_title' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        '\u9500\u552E\u8BA2\u5355\u7BA1\u7406'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'fun_zone' },
                        _react2.default.createElement(
                            _formLib.Form,
                            { className: 'form-inline', ref: function ref(_ref) {
                                    return _this2.form = _ref;
                                }, id: 'form', onChange: function onChange(values) {
                                    _this2.setState({ role: values });
                                    _this2.form.cleanErrors();
                                }, onCheck: function onCheck(errors) {
                                    _this2.setState({ errors: errors });
                                } },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' }),
                                '\xA0\xA0',
                                _react2.default.createElement(
                                    'button',
                                    { onClick: this.submit, className: 'btn btn-default' },
                                    '\u67E5\u8BE2'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'table',
                    { className: 'table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5BA2\u4EBA\u59D3\u540D'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u836F\u54C1'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u91D1\u989D'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u4ED8\u6B3E\u65B9\u5F0F'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5FEB\u9012\u516C\u53F8'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5FEB\u9012\u8D39'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5FEB\u9012\u5355'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u4EE3\u6536'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u9500\u552E\u5458'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u64CD\u4F5C'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        mListJsx
                    )
                )
            );
        }
    }]);

    return OrderList;
}(_react2.default.Component);

exports.default = OrderList;

/***/ }),

/***/ "./src/components/ReceiptEditor.js":
/*!*****************************************!*\
  !*** ./src/components/ReceiptEditor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

var _rsuite = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/lib/index.js");

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _ReceiptGoodList = __webpack_require__(/*! ./ReceiptGoodList */ "./src/components/ReceiptGoodList.js");

var _ReceiptGoodList2 = _interopRequireDefault(_ReceiptGoodList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var model = (0, _rsuiteSchema.SchemaModel)({ Name: (0, _rsuiteSchema.StringType)().isRequired('角色名不能为空') });

/**
 * 进货单详情管理
 * @extends React.Component
 */
var ReceiptEditor = function (_React$Component) {
    _inherits(ReceiptEditor, _React$Component);

    function ReceiptEditor(props) {
        _classCallCheck(this, ReceiptEditor);

        var _this = _possibleConstructorReturn(this, (ReceiptEditor.__proto__ || Object.getPrototypeOf(ReceiptEditor)).call(this, props));

        _this.state = {
            receipt: null,
            values: {},
            errors: {},
            receiptGoods: []
        };

        _this.loadReceiptDetailFromDB = _this._loadReceiptDetailFromDB.bind(_this);
        return _this;
    }

    _createClass(ReceiptEditor, [{
        key: '_loadReceiptDetailFromDB',
        value: function _loadReceiptDetailFromDB(receipt) {
            var _this2 = this;

            console.log(receipt);

            fetch('/api/receipt/detail', {
                body: JSON.stringify({ ID: receipt.ID }),
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                console.log(json);
                if (json.code == 0) {
                    _this2.setState({ receipt: json.data, values: json.data, receiptGoods: json.ReceiptGoodData });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var receipt = nextProps.location.state;
            var oldReceipt = this.props.location.state;


            console.log(receipt);

            if (oldReceipt) {
                if (receipt && receipt.ID != oldReceipt.ID) {
                    this.loadReceiptDetailFromDB(receipt);
                    this.setState({ values: receipt, receipt: receipt });
                }
            } else if (receipt) {
                this.loadReceiptDetailFromDB(receipt);
                this.setState({ values: receipt, receipt: receipt });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var receipt = this.props.location.state;


            console.log(receipt);

            if (receipt) {
                this.loadReceiptDetailFromDB(receipt);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                receipt = _state.receipt,
                values = _state.values,
                errors = _state.errors,
                receiptGoods = _state.receiptGoods;


            return _react2.default.createElement(
                'div',
                { id: 'ReceiptEditor' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6 col-md-offset-1 main' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        '\u8FDB\u8D27\u5355\u7F16\u8F91'
                    ),
                    _react2.default.createElement(
                        _formLib.Form,
                        { className: 'form-horizontal', ref: function ref(_ref) {
                                return _this3.form = _ref;
                            }, values: values, id: 'form', model: model, onChange: function onChange(values) {
                                _this3.setState({ values: values });
                                _this3.form.cleanErrors();
                            }, onCheck: function onCheck(errors) {
                                _this3.setState({ errors: errors });
                            } },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label col-md-2' },
                                '\u4F9B\u5E94\u5546\xA0',
                                _react2.default.createElement(
                                    'span',
                                    { className: 'red' },
                                    '*'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4' },
                                _react2.default.createElement(_formLib.Field, { name: 'VendorName', id: 'VendorName', placeholder: '\u4F9B\u5E94\u5546' })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'text-danger' },
                                errors.VendorName
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label col-md-2' },
                                '\u8054\u7CFB\u4EBA\xA0',
                                _react2.default.createElement(
                                    'span',
                                    { className: 'red' },
                                    '*'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4' },
                                _react2.default.createElement(_formLib.Field, { name: 'Contact', id: 'Contact', placeholder: '\u8054\u7CFB\u4EBA' })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'text-danger' },
                                errors.Contact
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label col-md-2' },
                                '\u7535\u8BDD\xA0',
                                _react2.default.createElement(
                                    'span',
                                    { className: 'red' },
                                    '*'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4' },
                                _react2.default.createElement(_formLib.Field, { name: 'Telephone', id: 'Telephone', placeholder: '\u7535\u8BDD' })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'text-danger' },
                                errors.Telephone
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label col-md-2' },
                                '\u9500\u552E\u5458\xA0',
                                _react2.default.createElement(
                                    'span',
                                    { className: 'red' },
                                    '*'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4' },
                                _react2.default.createElement(_formLib.Field, { name: 'EmployeeName', id: 'EmployeeName', placeholder: '\u9500\u552E\u5458' })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'text-danger' },
                                errors.EmployeeName
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label col-md-2' },
                                '\u8FDB\u8D27\u65E5\u671F\xA0',
                                _react2.default.createElement(
                                    'span',
                                    { className: 'red' },
                                    '*'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-4' },
                                _react2.default.createElement(_rsuite.DatePicker, { value: (0, _moment2.default)() }),
                                _react2.default.createElement(_formLib.Field, { name: 'Date', id: 'Date', placeholder: '\u65E5\u671F' })
                            )
                        ),
                        _react2.default.createElement(_ReceiptGoodList2.default, { goods: receiptGoods })
                    )
                )
            );
        }
    }]);

    return ReceiptEditor;
}(_react2.default.Component);

exports.default = ReceiptEditor;

/***/ }),

/***/ "./src/components/ReceiptGoodList.js":
/*!*******************************************!*\
  !*** ./src/components/ReceiptGoodList.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReceiptGoodList = function (_React$Component) {
    _inherits(ReceiptGoodList, _React$Component);

    function ReceiptGoodList(props) {
        _classCallCheck(this, ReceiptGoodList);

        var _this = _possibleConstructorReturn(this, (ReceiptGoodList.__proto__ || Object.getPrototypeOf(ReceiptGoodList)).call(this, props));

        _this.state = {
            receiptGood: null
        };
        return _this;
    }

    _createClass(ReceiptGoodList, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var goods = this.props.goods;
            var receiptGood = this.state.receiptGood;


            var jsx = goods.map(function (g, index) {

                if (receiptGood && receiptGood.ID == g.ID) {
                    return _react2.default.createElement(
                        "tr",
                        { key: index },
                        _react2.default.createElement(
                            "td",
                            null,
                            g.GoodID
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            g.Name
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            _react2.default.createElement("input", { style: { "width": "80px" }, type: "text", id: "ExpiredDate", value: g.ExpiryDate, placeholder: "\u6709\u6548\u671F" })
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            _react2.default.createElement("input", { style: { "width": "60px" }, type: "text", id: "CostPrice", value: g.CostPrice, placeholder: "\u6210\u672C\u4EF7" })
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            _react2.default.createElement("input", { style: { "width": "60px" }, type: "text", id: "Amount", value: g.Amount, placeholder: "\u91D1\u989D" })
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            _react2.default.createElement("input", { style: { "width": "80px" }, type: "text", id: "BatchNo", value: g.BatchNo, placeholder: "\u6279\u53F7" })
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            _react2.default.createElement(
                                "a",
                                { href: "#", onClick: function onClick() {} },
                                "\u4FDD\u5B58"
                            )
                        )
                    );
                } else {
                    return _react2.default.createElement(
                        "tr",
                        { key: index },
                        _react2.default.createElement(
                            "td",
                            null,
                            g.GoodID
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            g.Name
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            g.ExpiryDate
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            g.CostPrice
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            g.Amount
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            g.BatchNo
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            _react2.default.createElement(
                                "a",
                                { href: "#", onClick: function onClick() {
                                        _this2.setState({ receiptGood: g });
                                    } },
                                "\u7F16\u8F91"
                            )
                        )
                    );
                }
            });

            return _react2.default.createElement(
                "div",
                { id: "GoodList" },
                _react2.default.createElement(
                    "table",
                    { className: "table" },
                    _react2.default.createElement(
                        "thead",
                        null,
                        _react2.default.createElement(
                            "tr",
                            null,
                            _react2.default.createElement(
                                "th",
                                null,
                                "\u836F\u54C1\u540D"
                            ),
                            _react2.default.createElement(
                                "th",
                                null,
                                "\u901A\u7528\u540D"
                            ),
                            _react2.default.createElement(
                                "th",
                                null,
                                "\u6709\u6548\u671F"
                            ),
                            _react2.default.createElement(
                                "th",
                                null,
                                "\u8FDB\u4EF7"
                            ),
                            _react2.default.createElement(
                                "th",
                                null,
                                "\u6570\u91CF"
                            ),
                            _react2.default.createElement(
                                "th",
                                null,
                                "\u6279\u53F7"
                            ),
                            _react2.default.createElement(
                                "th",
                                null,
                                "\u64CD\u4F5C"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "tbody",
                        null,
                        jsx
                    )
                )
            );
        }
    }]);

    return ReceiptGoodList;
}(_react2.default.Component);

exports.default = ReceiptGoodList;

/***/ }),

/***/ "./src/components/ReceiptList.js":
/*!***************************************!*\
  !*** ./src/components/ReceiptList.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

var _ReceiptEditor = __webpack_require__(/*! ./ReceiptEditor */ "./src/components/ReceiptEditor.js");

var _ReceiptEditor2 = _interopRequireDefault(_ReceiptEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReceiptList = function (_React$Component) {
    _inherits(ReceiptList, _React$Component);

    function ReceiptList(props) {
        _classCallCheck(this, ReceiptList);

        var _this = _possibleConstructorReturn(this, (ReceiptList.__proto__ || Object.getPrototypeOf(ReceiptList)).call(this, props));

        _this.unSubscribe = _Reducer2.default.subscribe(function () {
            var s = _Reducer2.default.getState();
            _this.setState(s);
        });

        _this.state = _Reducer2.default.getState();

        _this.loadReceiptsFromDB = _this._loadReceiptsFromDB.bind(_this);
        return _this;
    }

    _createClass(ReceiptList, [{
        key: '_loadReceiptsFromDB',
        value: function _loadReceiptsFromDB() {
            _Reducer2.default.dispatch({ type: "FETCH_RECEIPTS" });

            var formData = new FormData();

            formData.append("KeyWord", "");
            formData.append("Page", 0);
            formData.append("Limit", 10);

            fetch('/api/receipt/search', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                if (json.code == 0) {
                    _Reducer2.default.dispatch({ type: "FETCH_RECEIPTS_DONE", payload: json.data });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadReceiptsFromDB();
        }
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {
            this.unSubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state$receiptList = this.state.receiptList,
                receipts = _state$receiptList.receipts,
                receipt = _state$receiptList.receipt,
                isFetching = _state$receiptList.isFetching;


            var editorJsx = "";

            if (receipt) {
                editorJsx = _react2.default.createElement(
                    'div',
                    { className: 'col-md-5' },
                    _react2.default.createElement(_ReceiptEditor2.default, { receipt: receipt, onSaveCompleted: this.onSaveCompleted, onCanceled: this.onCanceled })
                );
            }

            var listJsx = receipts.map(function (r, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        null,
                        r.VendorName
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        r.Telephone
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        r.Contact
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        r.Date
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        r.Amount
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        r.EmployeeName
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: '#', onClick: function onClick() {
                                    _this2.props.history.push({
                                        pathname: "/receipt/editor",
                                        state: r
                                    });
                                    // Store.dispatch({type: "CHECKED_RECEIPT", payload: r})
                                } },
                            '\u7F16\u8F91'
                        )
                    )
                );
            });
            return _react2.default.createElement(
                'div',
                { id: 'ReceiptList' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6 col-md-offset-1 main' },
                    _react2.default.createElement(
                        'div',
                        { id: 'page_title' },
                        _react2.default.createElement(
                            'h4',
                            null,
                            '\u8FDB\u8D27\u5355\u7BA1\u7406'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'fun_zone' },
                            _react2.default.createElement(
                                _formLib.Form,
                                { className: 'form-inline' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group' },
                                    _react2.default.createElement(_formLib.Field, { name: 'Keyword', id: 'Keyword' }),
                                    '\xA0\xA0',
                                    _react2.default.createElement(
                                        'button',
                                        { onClick: this.submit, className: 'btn btn-primary' },
                                        '\u67E5\u8BE2'
                                    ),
                                    '\xA0\xA0',
                                    _react2.default.createElement(
                                        'button',
                                        { onClick: function onClick() {
                                                return _Reducer2.default.dispatch({ type: "CHECKED_RECEIPT", payload: {} });
                                            }, className: 'btn btn-default' },
                                        '\u6DFB\u52A0\u65B0\u8FDB\u8D27\u5355'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'table',
                        { className: 'table' },
                        _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u4F9B\u5E94\u5546'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u7535\u8BDD'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u8054\u7CFB\u4EBA'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u65E5\u671F'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u91D1\u989D'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u836F\u5E08'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u64CD\u4F5C'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'tbody',
                            null,
                            listJsx
                        )
                    )
                ),
                editorJsx
            );
        }
    }]);

    return ReceiptList;
}(_react2.default.Component);

exports.default = ReceiptList;

/***/ }),

/***/ "./src/components/Reducer.js":
/*!***********************************!*\
  !*** ./src/components/Reducer.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defaultState;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultState = (_defaultState = {
    goodList: {
        goods: [],
        isFetching: false,
        good: null,
        action: "hidden"
    },
    goodEdit: {
        good: null,
        isFetching: false
    },
    orderList: {
        isFetching: false,
        orders: [],
        order: null
    },
    orderEditor: {
        order: null,
        orderGoods: [],
        values: {},
        errors: {},
        isFetching: false,
        message: ""
    },
    memberList: {
        isFetching: false,
        members: [],
        member: null,
        action: "hidden"
    },
    memberEditor: {
        isFetching: false,
        values: [],
        errors: {}
    },

    intentionList: {
        isFetching: false,
        intentions: [],
        values: {},
        errors: {}
    },

    invistList: {
        isFetching: false,
        invists: [],
        values: {},
        errors: {}
    }
}, _defineProperty(_defaultState, 'memberList', {
    isFetching: false,
    members: [],
    member: {}
}), _defineProperty(_defaultState, 'vendorList', {
    vendors: [],
    isFetching: false,
    vendor: {}
}), _defineProperty(_defaultState, 'receiptList', {
    receipts: [],
    isFetching: false,
    receipt: null
}), _defineProperty(_defaultState, 'orderGoodList', {
    orderGoods: [],
    isFetching: false
}), _defineProperty(_defaultState, 'xxxx', {}), _defaultState);

function XXXXReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.xxxx;
    var action = arguments[1];

    switch (action.type) {
        case "":
            break;
        default:
            return state;
    }
}

function OrderGoodListReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.orderGoodList;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_ORDER_GOODS":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_ORDER_GOODS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                orderGoods: action.payload
            });
        default:
            return state;
    }
}

function ReceiptsListReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.receiptList;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_RECEIPTS":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_RECEIPTS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                receipts: action.payload
            });
        case "CHECKED_RECEIPT":
            return Object.assign({}, state, {
                isFetching: false,
                receipt: action.payload
            });
        case "CHECKED_NONE":
            return Object.assign({}, state, {
                isFetching: false,
                vendor: null
            });

        default:
            return state;
    }
}

function VendorListReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.vendorList;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_VENDORS":
            return Object.assign({}, state, {
                isFetching: true,
                vendor: null
            });
        case "FETCH_VENDORS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                vendors: action.payload
            });
        case "CHECKED_VENDOR":
            return Object.assign({}, state, {
                isFetching: false,
                vendor: action.payload
            });
        case "CHECKED_NONE":
            return Object.assign({}, state, {
                isFetching: false,
                vendor: null
            });

        default:
            return state;
    }
}

function InvistListReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.invistList;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_INVITE":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_INVITE_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                invists: action.payload
            });

        default:
            return state;
    }
}

function IntentionsListReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.intentionList;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_INTENTIONS":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_INTENTIONS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                intentions: action.payload
            });

        default:
            return state;
    }
}

function MemberEditorReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.memberEditor;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_MEMBER":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_MEMBER_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                members: action.payload
            });

        default:
            return state;
    }
}

function MemberListReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.memberList;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_MEMBER":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_MEMBER_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                members: action.payload
            });
        case "EDITOR_MEMBER":
            return Object.assign({}, state, {
                member: action.payload,
                action: "update_member"
            });
        case "MEMBER_EDITOR_DONE":
            return Object.assign({}, state, {
                member: null,
                action: "hidden"
            });
        case "SET_ADD_MODE":
            return Object.assign({}, state, { action: "add_member" });
        case "MEMBER_EDITOR_CANCEL":
            return Object.assign({}, state, {
                action: "hidden",
                member: null
            });
        case "EDITOR_MEMBER_INTENTIONS":
            return Object.assign({}, state, {
                action: "add_intention",
                member: action.payload
            });
        case "EDITOR_MEMBER_VISIT":
            return Object.assign({}, state, {
                action: "add_visit",
                member: action.payload
            });
        default:
            return state;
    }
}

function OrderListReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.orderList;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_ORDERS":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_ORDERS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                orders: action.payload
            });
        case "":
            return;
        default:
            return state;
    }
}

function OrderEditorReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.orderEditor;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_ORDER":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_ORDER_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                order: action.payload.data,
                orderGoods: action.payload.goodsData
            });
        case "SET_CHECKED_ORDER":
            return Object.assign({}, state, {
                isFetching: false,
                values: action.payload,
                order: action.payload
            });
        case "FETCH_ORDERS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                orders: action.payload
            });
        default:
            return state;
    }
}

function GoodListReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.goodList;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_GOODS":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_GOODS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                goods: action.payload
            });
        case "EDITOR_GOOD":
            return Object.assign({}, state, {
                good: action.payload,
                action: "update"
            });
        case "SET_ADD_MODE":
            return Object.assign({}, state, {
                good: null,
                action: "add"
            });
        case "GOOD_EDITOR_CANCEL":
            return Object.assign({}, state, {
                action: "hidden",
                good: null
            });

        default:
            return state;
    }
}

function GoodEditorReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.goodEdit;
    var action = arguments[1];

    switch (action.type) {
        case "CLEAR_GOOD_DETAIL":
            return Object.assign({}, state, {
                isFetching: false,
                item: null
            });
        case "LOAD_GOODD_ETAIL":
            return Object.assign({}, state, { isFetching: true });;
        case "LOAD_GOODD_ETAIL_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                item: action.payload
            });;
        case "APPEND_GOOD":
            return Object.assign({}, state, { isFetching: true });
        case "APPEND_GOOD_DONE":
            return Object.assign({}, state, { isFetching: false });
        default:
            return state;
    }
}

var reducer = (0, _redux.combineReducers)({
    goodList: GoodListReducer,
    goodEdit: GoodEditorReducer,
    memberList: MemberListReducer,
    orderList: OrderListReducer,
    invistList: InvistListReducer,
    intentionList: IntentionsListReducer,
    vendorList: VendorListReducer,
    receiptList: ReceiptsListReducer,
    orderEditor: OrderEditorReducer,
    orderGoodList: OrderGoodListReducer
    // vendorEditor: VendorEditorReducer
});

var store = (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));
exports.default = store;

/***/ }),

/***/ "./src/components/SiteIndex.js":
/*!*************************************!*\
  !*** ./src/components/SiteIndex.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SiteIndex = function (_React$Component) {
    _inherits(SiteIndex, _React$Component);

    function SiteIndex(props) {
        _classCallCheck(this, SiteIndex);

        return _possibleConstructorReturn(this, (SiteIndex.__proto__ || Object.getPrototypeOf(SiteIndex)).call(this, props));
    }

    _createClass(SiteIndex, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                '\u9ED8\u8BA4\u9875\u9762'
            );
        }
    }]);

    return SiteIndex;
}(_react2.default.Component);

exports.default = SiteIndex;

/***/ }),

/***/ "./src/components/StatsList.js":
/*!*************************************!*\
  !*** ./src/components/StatsList.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatsList = function (_React$Component) {
    _inherits(StatsList, _React$Component);

    function StatsList(props) {
        _classCallCheck(this, StatsList);

        return _possibleConstructorReturn(this, (StatsList.__proto__ || Object.getPrototypeOf(StatsList)).call(this, props));
    }

    _createClass(StatsList, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "StatsList" },
                "\u6570\u636E\u7EDF\u8BA1"
            );
        }
    }]);

    return StatsList;
}(_react2.default.Component);

exports.default = StatsList;

/***/ }),

/***/ "./src/components/VendorEditor.js":
/*!****************************************!*\
  !*** ./src/components/VendorEditor.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var model = (0, _rsuiteSchema.SchemaModel)({ Name: (0, _rsuiteSchema.StringType)().isRequired('角色名不能为空') });

function param(formdata) {}

var VendorEditor = function (_React$Component) {
    _inherits(VendorEditor, _React$Component);

    function VendorEditor(props) {
        _classCallCheck(this, VendorEditor);

        var _this = _possibleConstructorReturn(this, (VendorEditor.__proto__ || Object.getPrototypeOf(VendorEditor)).call(this, props));

        _this.state = {
            values: {},
            errors: {}
        };

        _this.saveVendor = _this._saveVendor.bind(_this);
        return _this;
    }

    _createClass(VendorEditor, [{
        key: '_saveVendor',
        value: function _saveVendor() {
            var _this2 = this;

            if (!this.form.check()) {
                this.setState({ message: "数据格式有错误" });
                return;
            }

            var values = this.state.values;


            var action = values.ID && values.ID > 0 ? "update" : "save";

            fetch('/api/vendor/' + action, {
                body: JSON.stringify(values),
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                console.log({ json: json });
                if (json.code == 0) {
                    _this2.props.onSaveCompleted();
                }
                //TODO
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var vendor = nextProps.vendor;
            var oldVendor = this.props.vendor.oldVendor;


            if (oldVendor) {
                if (vendor && vendor.ID != oldVendor.ID) {
                    this.setState({ values: vendor });
                }
            } else {
                this.setState({ values: vendor });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var vendor = this.props.vendor;


            if (vendor) {
                this.setState({ values: vendor });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var vendor = this.props.vendor;
            var _state = this.state,
                values = _state.values,
                errors = _state.errors,
                message = _state.message;


            return _react2.default.createElement(
                'div',
                { id: 'VendorEditor', className: 'editor_zone' },
                _react2.default.createElement(
                    'h4',
                    null,
                    '\u4F9B\u5E94\u5546\u7BA1\u7406'
                ),
                _react2.default.createElement(
                    _formLib.Form,
                    { className: 'form-horizontal', ref: function ref(_ref) {
                            return _this3.form = _ref;
                        }, values: values, id: 'form2', model: model, onChange: function onChange(values) {
                            _this3.setState({ values: values });
                            _this3.form.cleanErrors();
                        }, onCheck: function onCheck(errors) {
                            _this3.setState({ errors: errors });
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u4F9B\u5E94\u5546\xA0',
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' })
                        ),
                        _react2.default.createElement(_formLib.Field, { type: 'hidden', className: '', name: 'ID' }),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Name
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u8054\u7CFB\u4EBA\xA0',
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Contact', id: 'Contact' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Contact
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u8054\u7CFB\u7535\u8BDD\xA0',
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Telephone', id: 'Telephone' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Telephone
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u5730\u5740'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Address', id: 'Address' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Address
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u5907\u6CE8'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Remark', id: 'Remark' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Remark
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            message
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement('label', { className: 'control-label col-sm-3' }),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.saveVendor, className: 'btn btn-primary' },
                            '\u4FDD\u5B58s'
                        ),
                        '\xA0\xA0',
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-default', onClick: function onClick() {
                                    _this3.props.onCancel();
                                } },
                            '\u53D6\u6D88'
                        )
                    )
                )
            );
        }
    }]);

    return VendorEditor;
}(_react2.default.Component);

exports.default = VendorEditor;

/***/ }),

/***/ "./src/components/VendorList.js":
/*!**************************************!*\
  !*** ./src/components/VendorList.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

var _VendorEditor = __webpack_require__(/*! ./VendorEditor */ "./src/components/VendorEditor.js");

var _VendorEditor2 = _interopRequireDefault(_VendorEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VendorList = function (_React$Component) {
    _inherits(VendorList, _React$Component);

    function VendorList(props) {
        _classCallCheck(this, VendorList);

        var _this = _possibleConstructorReturn(this, (VendorList.__proto__ || Object.getPrototypeOf(VendorList)).call(this, props));

        _this.unSubscribe = _Reducer2.default.subscribe(function () {
            var s = _Reducer2.default.getState();
            _this.setState(s);
        });

        _this.state = _Reducer2.default.getState();

        _this.loadVendorsFromDB = _this._loadVendorsFromDB.bind(_this);
        _this.onCancel = _this._onCancel.bind(_this);
        _this.onSaveCompleted = _this._onSaveCompleted.bind(_this);
        return _this;
    }

    _createClass(VendorList, [{
        key: '_onCancel',
        value: function _onCancel() {
            _Reducer2.default.dispatch({ type: "CHECKED_NONE" });
        }
    }, {
        key: '_onSaveCompleted',
        value: function _onSaveCompleted() {
            this.loadVendorsFromDB();
        }
    }, {
        key: '_loadVendorsFromDB',
        value: function _loadVendorsFromDB() {
            _Reducer2.default.dispatch({ type: "FETCH_VENDORS" });

            var formData = new FormData();

            formData.append("KeyWord", "");
            formData.append("Page", 0);
            formData.append("Limit", 10);

            fetch('/api/vendor/search', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                console.log(json);
                if (json.code == 0) {
                    _Reducer2.default.dispatch({ type: "FETCH_VENDORS_DONE", payload: json.data });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadVendorsFromDB();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.unSubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state$vendorList = this.state.vendorList,
                vendors = _state$vendorList.vendors,
                vendor = _state$vendorList.vendor,
                isFetching = _state$vendorList.isFetching;


            var editorJsx = "";
            if (vendor) {
                editorJsx = _react2.default.createElement(
                    'div',
                    { className: 'col-md-5' },
                    _react2.default.createElement(_VendorEditor2.default, { vendor: vendor, onSaveCompleted: this.onSaveCompleted, onCancel: this.onCancel })
                );
            }

            var listJsx = vendors.map(function (v, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        null,
                        v.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        v.Telephone
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        v.Address
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        v.Contact
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        v.Remark
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        v.UpdateTime
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: '#', onClick: function onClick() {
                                    _Reducer2.default.dispatch({ type: "CHECKED_VENDOR", payload: v });
                                } },
                            '\u7F16\u8F91'
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { id: 'VendorList' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6 col-md-offset-1 main' },
                    _react2.default.createElement(
                        'div',
                        { id: 'page_title' },
                        _react2.default.createElement(
                            'h4',
                            null,
                            '\u4F9B\u5E94\u5546\u7BA1\u7406'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'fun_zone' },
                            _react2.default.createElement(
                                _formLib.Form,
                                { className: 'form-inline', ref: function ref(_ref) {
                                        return _this2.form = _ref;
                                    }, id: 'form', onChange: function onChange(values) {
                                        _this2.setState({ role: values });
                                        _this2.form.cleanErrors();
                                    }, onCheck: function onCheck(errors) {
                                        _this2.setState({ errors: errors });
                                    } },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group' },
                                    _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' }),
                                    '\xA0\xA0',
                                    _react2.default.createElement(
                                        'button',
                                        { onClick: this.submit, className: 'btn btn-primary' },
                                        '\u67E5\u8BE2'
                                    ),
                                    '\xA0\xA0',
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'btn btn-default' },
                                        '\u6DFB\u52A0\u4F9B\u5E94\u5546'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'table',
                        { className: 'table' },
                        _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u4F9B\u5E94\u5546\u540D'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u7535\u8BDD'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u5730\u5740'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u8054\u7CFB\u4EBA'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u5907\u6CE8'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u521B\u5EFA\u65F6\u95F4'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u64CD\u4F5C'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'tbody',
                            null,
                            listJsx
                        )
                    ),
                    _react2.default.createElement(
                        'nav',
                        { 'aria-label': 'Page navigation' },
                        _react2.default.createElement(
                            'ul',
                            { 'class': 'pagination' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#', 'aria-label': 'Previous' },
                                    _react2.default.createElement(
                                        'span',
                                        { 'aria-hidden': 'true' },
                                        '\xAB'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    '1'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    '2'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    '3'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    '4'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    '5'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#', 'aria-label': 'Next' },
                                    _react2.default.createElement(
                                        'span',
                                        { 'aria-hidden': 'true' },
                                        '\xBB'
                                    )
                                )
                            )
                        )
                    )
                ),
                editorJsx
            );
        }
    }]);

    return VendorList;
}(_react2.default.Component);

exports.default = VendorList;

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _GoodList = __webpack_require__(/*! ./GoodList */ "./src/components/GoodList.js");

Object.defineProperty(exports, 'GoodList', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_GoodList).default;
    }
});

var _OrderList = __webpack_require__(/*! ./OrderList */ "./src/components/OrderList.js");

Object.defineProperty(exports, 'OrderList', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_OrderList).default;
    }
});

var _StatsList = __webpack_require__(/*! ./StatsList */ "./src/components/StatsList.js");

Object.defineProperty(exports, 'StatsList', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_StatsList).default;
    }
});

var _ReceiptList = __webpack_require__(/*! ./ReceiptList */ "./src/components/ReceiptList.js");

Object.defineProperty(exports, 'ReceiptList', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_ReceiptList).default;
    }
});

var _MemberList = __webpack_require__(/*! ./MemberList */ "./src/components/MemberList.js");

Object.defineProperty(exports, 'MemberList', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_MemberList).default;
    }
});

var _VendorList = __webpack_require__(/*! ./VendorList */ "./src/components/VendorList.js");

Object.defineProperty(exports, 'VendorList', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_VendorList).default;
    }
});

var _SiteIndex = __webpack_require__(/*! ./SiteIndex */ "./src/components/SiteIndex.js");

Object.defineProperty(exports, 'SiteIndex', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_SiteIndex).default;
    }
});

var _MainMenu = __webpack_require__(/*! ./MainMenu */ "./src/components/MainMenu.js");

Object.defineProperty(exports, 'MainMenu', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_MainMenu).default;
    }
});

var _Container = __webpack_require__(/*! ./Container */ "./src/components/Container.js");

Object.defineProperty(exports, 'Container', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_Container).default;
    }
});

var _OrderEditor = __webpack_require__(/*! ./OrderEditor */ "./src/components/OrderEditor.js");

Object.defineProperty(exports, 'OrderEditor', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_OrderEditor).default;
    }
});

var _ReceiptEditor = __webpack_require__(/*! ./ReceiptEditor */ "./src/components/ReceiptEditor.js");

Object.defineProperty(exports, 'ReceiptEditor', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_ReceiptEditor).default;
    }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/web/back.client.js":
/*!********************************!*\
  !*** ./src/web/back.client.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ManagerRouter = __webpack_require__(/*! ../components/ManagerRouter */ "./src/components/ManagerRouter.js");

var _ManagerRouter2 = _interopRequireDefault(_ManagerRouter);

__webpack_require__(/*! rsuite/styles/less/index.less */ "./node_modules/rsuite/styles/less/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
    _reactDom2.default.render(_react2.default.createElement(_ManagerRouter2.default, null), document.getElementById('App'));
};

// if(module.hot){
//     module.hot.accept('../components/ManagerRouter',function(){
//         console.log('Accepting the updated ManagerRouter module!');
//     })
// }

/***/ }),

/***/ "dll-reference lib":
/*!**********************!*\
  !*** external "lib" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = lib;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zhc3QtbGV2ZW5zaHRlaW4vbGV2ZW5zaHRlaW4uanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9mb3JtLWxpYi9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBsaWIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9tb21lbnQvbW9tZW50LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBsaWIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBsaWIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaG90LWxvYWRlci9kaXN0L3JlYWN0LWhvdC1sb2FkZXIuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWhvdC1sb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0L3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0LmVzLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9lcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvcmVkdXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JzdWl0ZS1zY2hlbWEvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBsaWIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yc3VpdGUvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBsaWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NoYWxsb3dlcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSBsaWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dvb2RFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR29vZExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW50ZW50aW9uRWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ludGVudGlvbkxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW52aXRlRWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ludml0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbk1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFuYWdlclJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW1iZXJFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVtYmVyTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcmRlckVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcmRlckdvb2RMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09yZGVyTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWNlaXB0RWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlY2VpcHRHb29kTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWNlaXB0TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpdGVJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdGF0c0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVmVuZG9yRWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZlbmRvckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi9iYWNrLmNsaWVudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsaWJcIiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJyb3V0ZSIsInBhdGgiLCJPcmRlck1lc3MiLCJwcm9wcyIsIm1vZGVsIiwiTmFtZSIsImlzUmVxdWlyZWQiLCJHb29kRWRpdG9yIiwic3RhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJpc0ZldGNoaW5nIiwic3VibWl0R29vZCIsIl9zdWJtaXRHb29kIiwiYmluZCIsImNhbmNlbCIsIl9jYW5jZWwiLCJvbkNhbmNlbGVkIiwiZm9ybSIsImNoZWNrIiwic2V0U3RhdGUiLCJtZXNzYWdlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmZXRjaCIsImJvZHkiLCJtZXRob2QiLCJtb2RlIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwianNvbiIsImNvZGUiLCJvbkdvb2RTYXZlQ29tcGxldGVkIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJlcnIiLCJnb29kIiwibmV4dFByb3BzIiwiYWN0aW9uIiwib2xkR29vZCIsIklEIiwiT2ZmaWNhbE5hbWUiLCJVbml0IiwiRGltZW5zaW9uIiwiRGVmYXVsdENvc3RQcmljZSIsIkRlZmF1bHRQcmljZSIsIkxpbWl0UHJpY2UiLCJVc2VXYXkiLCJNYW51ZmFjdHVyZXIiLCJjbGVhbkVycm9ycyIsInJlZiIsIk5hbWVQaW5ZaW4iLCJGb3JtT2ZEcnVnIiwiQmlkUHJpY2UiLCJDb21wZXRpb24iLCJNZWRpY2FyZSIsIlBlcmlvZFRyZWF0bWVudCIsIlRyYW5zbGF0aW9uIiwiQXBwcm92YWxOdW1iZXIiLCJzdWJtaXQiLCJDb21wb25lbnQiLCJHb29kTGlzdCIsInVuU3Vic2NyaWJlIiwic3Vic2NyaWJlIiwicyIsImdldFN0YXRlIiwibG9hZEdvb2RMaXN0RnJvbURCIiwiX2xvYWRHb29kTGlzdEZyb21EQiIsIm9uQ2FuY2VsIiwiX29uQ2FuY2VsIiwib25TYXZlQ29tcGxldGVkIiwiX29uU2F2ZUNvbXBsZXRlZCIsImRpc3BhdGNoIiwidHlwZSIsImFwcGVuZCIsImxvZyIsInBheWxvYWQiLCJkYXRhIiwiYWxlcnQiLCJnb29kTGlzdCIsImdvb2RzIiwiZWRpdG9ySnN4IiwibUxpc3RKc3giLCJtYXAiLCJnIiwiaW5kZXgiLCJyb2xlIiwiSW50ZW50aW9uRWRpdG9yIiwibG9hZE9iamVjdERldGFpbCIsIl9sb2FkT2JqZWN0RGV0YWlsIiwic3VibWl0SW50ZW50aW9uIiwiX3N1Ym1pdEludGVudGlvbiIsIm1lbWJlciIsIlJlbWFya3MiLCJSZW1hcmsiLCJJbnRlbnRpb25MaXN0IiwibG9hZEludGVudGlvbnNGcm9tREIiLCJfbG9hZEludGVudGlvbnNGcm9tREIiLCJpbnRlbnRpb25EYXRhIiwiaW50ZW50aW9uTGlzdCIsImludGVudGlvbnMiLCJsaXN0SnN4IiwiaSIsIkdvb2RzIiwiT3BlcmF0b3JJRCIsIkNyZWF0ZVRpbWUiLCJJbnZpdGVFZGl0b3IiLCJzdWJtaXRJbnZpdGUiLCJfc3VibWl0SW52aXRlIiwiSW52aXRlTGlzdCIsImxvYWRWaXN0c0Zyb21EQiIsIl9sb2FkVmlzdHNGcm9tREIiLCJ2aXNpdERhdGEiLCJvbGRNZW1iZXIiLCJpbnZpc3RMaXN0IiwiaW52aXN0cyIsIk1lbWJlcklEIiwiTWFpbk1lbnUiLCJyb3V0ZXMiLCJleHRyYSIsImNvbXBvbmVudCIsIk1hbmFnZXJSb3V0ZXIiLCJlbXBsb3llZSIsIm1vZHVsZSIsIk1lbWJlckVkaXRvciIsIl9zdWJtaXQiLCJ1cmwiLCJvbk1lbWJlckRldGFpbFNhdmVDb21wbGV0ZWQiLCJQaW5ZaW4iLCJHZW5kZXIiLCJUZWxlcGhvbmUiLCJEaXNlYXNlcyIsIlJlbGF0aW9uV2l0aFBhdGllbnQiLCJoZWFkZXIiLCJDaXR5IiwiQWRkcmVzcyIsIldlaVhpbkNvZGUiLCJGcmllbmROYW1lIiwiQmlydGhZZWFyIiwiTWVtYmVyTGlzdCIsImxvYWRNZW1iZXJMaXN0IiwiX2xvYWRNZW1iZXJMaXN0IiwiX29uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZCIsIm9uTWVtYmVyRGV0YWlsQ2FuY2VsIiwiX29uTWVtYmVyRGV0YWlsQ2FuY2VsIiwibmV3TWVtYmVyIiwibWVtYmVyTGlzdCIsIm1lbWJlcnMiLCJtIiwiTW9iaWxQaG9uZSIsIkludGVudGlvbkdvb2RzIiwiSW50ZW50aW9uUXVhbnRpdHkiLCJWaXNpdFF1YW50aXR5IiwiT3JkZXJRdWFudGl0eSIsIk9yZGVyRWRpdG9yIiwibG9jYXRpb24iLCJsb2FkT3JkZXJHb29kc0Zyb21EQiIsIl9sb2FkT3JkZXJHb29kc0Zyb21EQiIsIm9yZGVyIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJvcmRlckVkaXRvciIsIm9yZGVyR29vZHMiLCJEZWxpdmVyeUNvbXBhbnkiLCJEZWxpdmVyeUZlZSIsIk9yZGVyR29vZExpc3QiLCJvcmRlckdvb2QiLCJvZyIsIkdvb2ROYW1lIiwiUXVhbnRpdHkiLCJUb3RhbENvc3RQcmljZSIsIk9yZGVyTGlzdCIsImxvYWRPcmRlckxpc3RGcm9tREIiLCJfbG9hZE9yZGVyTGlzdEZyb21EQiIsIm9uR29PcmRlckVkaXRvciIsIl9vbkdvT3JkZXJFZGl0b3IiLCJoaXN0b3J5IiwicHVzaCIsIm9yZGVyTGlzdCIsIm9yZGVycyIsIm8iLCJSZWNlaXB0QW1vdW50IiwiUGF5U3R5bGVMYWJlbCIsIkRlbGl2ZXJDb2RlIiwiRGVsaXZlclJlY2VpcHRGZWUiLCJwYXRobmFtZSIsIlJlY2VpcHRFZGl0b3IiLCJyZWNlaXB0IiwicmVjZWlwdEdvb2RzIiwibG9hZFJlY2VpcHREZXRhaWxGcm9tREIiLCJfbG9hZFJlY2VpcHREZXRhaWxGcm9tREIiLCJSZWNlaXB0R29vZERhdGEiLCJvbGRSZWNlaXB0IiwiVmVuZG9yTmFtZSIsIkNvbnRhY3QiLCJFbXBsb3llZU5hbWUiLCJSZWNlaXB0R29vZExpc3QiLCJyZWNlaXB0R29vZCIsImpzeCIsIkdvb2RJRCIsIkV4cGlyeURhdGUiLCJDb3N0UHJpY2UiLCJBbW91bnQiLCJCYXRjaE5vIiwiUmVjZWlwdExpc3QiLCJsb2FkUmVjZWlwdHNGcm9tREIiLCJfbG9hZFJlY2VpcHRzRnJvbURCIiwicmVjZWlwdExpc3QiLCJyZWNlaXB0cyIsInIiLCJEYXRlIiwiZGVmYXVsdFN0YXRlIiwiZ29vZEVkaXQiLCJtZW1iZXJFZGl0b3IiLCJ2ZW5kb3JzIiwidmVuZG9yIiwiWFhYWFJlZHVjZXIiLCJ4eHh4IiwiT3JkZXJHb29kTGlzdFJlZHVjZXIiLCJvcmRlckdvb2RMaXN0IiwiT2JqZWN0IiwiYXNzaWduIiwiUmVjZWlwdHNMaXN0UmVkdWNlciIsIlZlbmRvckxpc3RSZWR1Y2VyIiwidmVuZG9yTGlzdCIsIkludmlzdExpc3RSZWR1Y2VyIiwiSW50ZW50aW9uc0xpc3RSZWR1Y2VyIiwiTWVtYmVyRWRpdG9yUmVkdWNlciIsIk1lbWJlckxpc3RSZWR1Y2VyIiwiT3JkZXJMaXN0UmVkdWNlciIsIk9yZGVyRWRpdG9yUmVkdWNlciIsImdvb2RzRGF0YSIsIkdvb2RMaXN0UmVkdWNlciIsIkdvb2RFZGl0b3JSZWR1Y2VyIiwiaXRlbSIsInJlZHVjZXIiLCJzdG9yZSIsIlNpdGVJbmRleCIsIlN0YXRzTGlzdCIsInBhcmFtIiwiZm9ybWRhdGEiLCJWZW5kb3JFZGl0b3IiLCJzYXZlVmVuZG9yIiwiX3NhdmVWZW5kb3IiLCJvbGRWZW5kb3IiLCJWZW5kb3JMaXN0IiwibG9hZFZlbmRvcnNGcm9tREIiLCJfbG9hZFZlbmRvcnNGcm9tREIiLCJ2IiwiVXBkYXRlVGltZSIsImRlZmF1bHQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBLHNEQUE4QztBQUM5QztBQUNBO0FBQ0Esb0NBQTRCO0FBQzVCLHFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsSUFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQixZQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVCQUFlLDRCQUE0QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUFlLDRCQUE0QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLHVD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LGVBQWU7QUFDdkY7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFdBQVc7O0FBRVg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRixhQUFhO0FBQ3ZHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxhQUFhLG1DQUFtQztBQUMvRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxrQ0FBa0M7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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdnREE7O0FBRUEsYUFFQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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L0I7QUFDSCxDQUZEOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7QUNkQSxxQiIsImZpbGUiOiJqcy93b3Jrc3BhY2UuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdH0gO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0XHQ7XG4gXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKVxuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiNjBhYjY4ZTU2ZTJkYzI3ZjUxOGJcIjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSlcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgZGVwID09PSBcInVuZGVmaW5lZFwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBkZXAgPT09IFwidW5kZWZpbmVkXCIpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG5cbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0dmFyIGNodW5rSWQgPSBcIndvcmtzcGFjZVwiO1xuIFx0XHRcdHtcbiBcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmICghbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCkgY29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7YW55fSAqL1xuIFx0XHRcdFx0dmFyIHJlc3VsdDtcbiBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRcdCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0KVxuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG5cbiBcdFx0dmFyIGlkeDtcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbiBcdFx0XHRcdGNiKGRhdGEpO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbiBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3QgaW4gXCJhcHBseVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG4gXHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbiBcdFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbiBcdFx0aWYgKGVycm9yKSB7XG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuIFx0XHR9XG5cbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Fzc2V0cy9cIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKFwiLi9zcmMvd2ViL2JhY2suY2xpZW50LmpzXCIpKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvd2ViL2JhY2suY2xpZW50LmpzXCIpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG4gIFxuICB2YXIgY29sbGF0b3I7XG4gIHRyeSB7XG4gICAgY29sbGF0b3IgPSAodHlwZW9mIEludGwgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIEludGwuQ29sbGF0b3IgIT09IFwidW5kZWZpbmVkXCIpID8gSW50bC5Db2xsYXRvcihcImdlbmVyaWNcIiwgeyBzZW5zaXRpdml0eTogXCJiYXNlXCIgfSkgOiBudWxsO1xuICB9IGNhdGNoIChlcnIpe1xuICAgIGNvbnNvbGUubG9nKFwiQ29sbGF0b3IgY291bGQgbm90IGJlIGluaXRpYWxpemVkIGFuZCB3b3VsZG4ndCBiZSB1c2VkXCIpO1xuICB9XG4gIC8vIGFycmF5cyB0byByZS11c2VcbiAgdmFyIHByZXZSb3cgPSBbXSxcbiAgICBzdHIyQ2hhciA9IFtdO1xuICBcbiAgLyoqXG4gICAqIEJhc2VkIG9uIHRoZSBhbGdvcml0aG0gYXQgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MZXZlbnNodGVpbl9kaXN0YW5jZS5cbiAgICovXG4gIHZhciBMZXZlbnNodGVpbiA9IHtcbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgbGV2ZW5zaHRlaW4gZGlzdGFuY2Ugb2YgdGhlIHR3byBzdHJpbmdzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0cjEgU3RyaW5nIHRoZSBmaXJzdCBzdHJpbmcuXG4gICAgICogQHBhcmFtIHN0cjIgU3RyaW5nIHRoZSBzZWNvbmQgc3RyaW5nLlxuICAgICAqIEBwYXJhbSBbb3B0aW9uc10gQWRkaXRpb25hbCBvcHRpb25zLlxuICAgICAqIEBwYXJhbSBbb3B0aW9ucy51c2VDb2xsYXRvcl0gVXNlIGBJbnRsLkNvbGxhdG9yYCBmb3IgbG9jYWxlLXNlbnNpdGl2ZSBzdHJpbmcgY29tcGFyaXNvbi5cbiAgICAgKiBAcmV0dXJuIEludGVnZXIgdGhlIGxldmVuc2h0ZWluIGRpc3RhbmNlICgwIGFuZCBhYm92ZSkuXG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbihzdHIxLCBzdHIyLCBvcHRpb25zKSB7XG4gICAgICB2YXIgdXNlQ29sbGF0b3IgPSAob3B0aW9ucyAmJiBjb2xsYXRvciAmJiBvcHRpb25zLnVzZUNvbGxhdG9yKTtcbiAgICAgIFxuICAgICAgdmFyIHN0cjFMZW4gPSBzdHIxLmxlbmd0aCxcbiAgICAgICAgc3RyMkxlbiA9IHN0cjIubGVuZ3RoO1xuICAgICAgXG4gICAgICAvLyBiYXNlIGNhc2VzXG4gICAgICBpZiAoc3RyMUxlbiA9PT0gMCkgcmV0dXJuIHN0cjJMZW47XG4gICAgICBpZiAoc3RyMkxlbiA9PT0gMCkgcmV0dXJuIHN0cjFMZW47XG5cbiAgICAgIC8vIHR3byByb3dzXG4gICAgICB2YXIgY3VyQ29sLCBuZXh0Q29sLCBpLCBqLCB0bXA7XG5cbiAgICAgIC8vIGluaXRpYWxpc2UgcHJldmlvdXMgcm93XG4gICAgICBmb3IgKGk9MDsgaTxzdHIyTGVuOyArK2kpIHtcbiAgICAgICAgcHJldlJvd1tpXSA9IGk7XG4gICAgICAgIHN0cjJDaGFyW2ldID0gc3RyMi5jaGFyQ29kZUF0KGkpO1xuICAgICAgfVxuICAgICAgcHJldlJvd1tzdHIyTGVuXSA9IHN0cjJMZW47XG5cbiAgICAgIHZhciBzdHJDbXA7XG4gICAgICBpZiAodXNlQ29sbGF0b3IpIHtcbiAgICAgICAgLy8gY2FsY3VsYXRlIGN1cnJlbnQgcm93IGRpc3RhbmNlIGZyb20gcHJldmlvdXMgcm93IHVzaW5nIGNvbGxhdG9yXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdHIxTGVuOyArK2kpIHtcbiAgICAgICAgICBuZXh0Q29sID0gaSArIDE7XG5cbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgc3RyMkxlbjsgKytqKSB7XG4gICAgICAgICAgICBjdXJDb2wgPSBuZXh0Q29sO1xuXG4gICAgICAgICAgICAvLyBzdWJzdHV0aW9uXG4gICAgICAgICAgICBzdHJDbXAgPSAwID09PSBjb2xsYXRvci5jb21wYXJlKHN0cjEuY2hhckF0KGkpLCBTdHJpbmcuZnJvbUNoYXJDb2RlKHN0cjJDaGFyW2pdKSk7XG5cbiAgICAgICAgICAgIG5leHRDb2wgPSBwcmV2Um93W2pdICsgKHN0ckNtcCA/IDAgOiAxKTtcblxuICAgICAgICAgICAgLy8gaW5zZXJ0aW9uXG4gICAgICAgICAgICB0bXAgPSBjdXJDb2wgKyAxO1xuICAgICAgICAgICAgaWYgKG5leHRDb2wgPiB0bXApIHtcbiAgICAgICAgICAgICAgbmV4dENvbCA9IHRtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRlbGV0aW9uXG4gICAgICAgICAgICB0bXAgPSBwcmV2Um93W2ogKyAxXSArIDE7XG4gICAgICAgICAgICBpZiAobmV4dENvbCA+IHRtcCkge1xuICAgICAgICAgICAgICBuZXh0Q29sID0gdG1wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb3B5IGN1cnJlbnQgY29sIHZhbHVlIGludG8gcHJldmlvdXMgKGluIHByZXBhcmF0aW9uIGZvciBuZXh0IGl0ZXJhdGlvbilcbiAgICAgICAgICAgIHByZXZSb3dbal0gPSBjdXJDb2w7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY29weSBsYXN0IGNvbCB2YWx1ZSBpbnRvIHByZXZpb3VzIChpbiBwcmVwYXJhdGlvbiBmb3IgbmV4dCBpdGVyYXRpb24pXG4gICAgICAgICAgcHJldlJvd1tqXSA9IG5leHRDb2w7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBjYWxjdWxhdGUgY3VycmVudCByb3cgZGlzdGFuY2UgZnJvbSBwcmV2aW91cyByb3cgd2l0aG91dCBjb2xsYXRvclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3RyMUxlbjsgKytpKSB7XG4gICAgICAgICAgbmV4dENvbCA9IGkgKyAxO1xuXG4gICAgICAgICAgZm9yIChqID0gMDsgaiA8IHN0cjJMZW47ICsraikge1xuICAgICAgICAgICAgY3VyQ29sID0gbmV4dENvbDtcblxuICAgICAgICAgICAgLy8gc3Vic3R1dGlvblxuICAgICAgICAgICAgc3RyQ21wID0gc3RyMS5jaGFyQ29kZUF0KGkpID09PSBzdHIyQ2hhcltqXTtcblxuICAgICAgICAgICAgbmV4dENvbCA9IHByZXZSb3dbal0gKyAoc3RyQ21wID8gMCA6IDEpO1xuXG4gICAgICAgICAgICAvLyBpbnNlcnRpb25cbiAgICAgICAgICAgIHRtcCA9IGN1ckNvbCArIDE7XG4gICAgICAgICAgICBpZiAobmV4dENvbCA+IHRtcCkge1xuICAgICAgICAgICAgICBuZXh0Q29sID0gdG1wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGVsZXRpb25cbiAgICAgICAgICAgIHRtcCA9IHByZXZSb3dbaiArIDFdICsgMTtcbiAgICAgICAgICAgIGlmIChuZXh0Q29sID4gdG1wKSB7XG4gICAgICAgICAgICAgIG5leHRDb2wgPSB0bXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvcHkgY3VycmVudCBjb2wgdmFsdWUgaW50byBwcmV2aW91cyAoaW4gcHJlcGFyYXRpb24gZm9yIG5leHQgaXRlcmF0aW9uKVxuICAgICAgICAgICAgcHJldlJvd1tqXSA9IGN1ckNvbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjb3B5IGxhc3QgY29sIHZhbHVlIGludG8gcHJldmlvdXMgKGluIHByZXBhcmF0aW9uIGZvciBuZXh0IGl0ZXJhdGlvbilcbiAgICAgICAgICBwcmV2Um93W2pdID0gbmV4dENvbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHRDb2w7XG4gICAgfVxuXG4gIH07XG5cbiAgLy8gYW1kXG4gIGlmICh0eXBlb2YgZGVmaW5lICE9PSBcInVuZGVmaW5lZFwiICYmIGRlZmluZSAhPT0gbnVsbCAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIExldmVuc2h0ZWluO1xuICAgIH0pO1xuICB9XG4gIC8vIGNvbW1vbmpzXG4gIGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlICE9PSBudWxsICYmIHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzID09PSBleHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBMZXZlbnNodGVpbjtcbiAgfVxuICAvLyB3ZWIgd29ya2VyXG4gIGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBzZWxmLnBvc3RNZXNzYWdlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBzZWxmLmltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzZWxmLkxldmVuc2h0ZWluID0gTGV2ZW5zaHRlaW47XG4gIH1cbiAgLy8gYnJvd3NlciBtYWluIHRocmVhZFxuICBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdyAhPT0gbnVsbCkge1xuICAgIHdpbmRvdy5MZXZlbnNodGVpbiA9IExldmVuc2h0ZWluO1xuICB9XG59KCkpO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL2Zvcm0tbGliL2xpYi9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L21vbWVudC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanNcIik7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdF9fZGVmYXVsdCA9IF9pbnRlcm9wRGVmYXVsdChSZWFjdCk7XG52YXIgc2hhbGxvd0VxdWFsID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3NoYWxsb3dlcXVhbCcpKTtcbnZhciBsZXZlbnNodGVpbiA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdmYXN0LWxldmVuc2h0ZWluJykpO1xudmFyIFByb3BUeXBlcyA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdwcm9wLXR5cGVzJykpO1xudmFyIHJlYWN0TGlmZWN5Y2xlc0NvbXBhdCA9IHJlcXVpcmUoJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0Jyk7XG52YXIgaG9pc3ROb25SZWFjdFN0YXRpYyA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdob2lzdC1ub24tcmVhY3Qtc3RhdGljcycpKTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxudmFyIGlzQ29tcG9zaXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gaXNDb21wb3NpdGVDb21wb25lbnQodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgZ2V0Q29tcG9uZW50RGlzcGxheU5hbWUgPSBmdW5jdGlvbiBnZXRDb21wb25lbnREaXNwbGF5TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnQ29tcG9uZW50Jztcbn07XG5cbnZhciBnZXRJbnRlcm5hbEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0SW50ZXJuYWxJbnN0YW5jZShpbnN0YW5jZSkge1xuICByZXR1cm4gaW5zdGFuY2UuX3JlYWN0SW50ZXJuYWxGaWJlciB8fCAvLyBSZWFjdCAxNlxuICBpbnN0YW5jZS5fcmVhY3RJbnRlcm5hbEluc3RhbmNlIHx8IC8vIFJlYWN0IDE1XG4gIG51bGw7XG59O1xuXG52YXIgdXBkYXRlSW5zdGFuY2UgPSBmdW5jdGlvbiB1cGRhdGVJbnN0YW5jZShpbnN0YW5jZSkge1xuICB2YXIgdXBkYXRlciA9IGluc3RhbmNlLnVwZGF0ZXIsXG4gICAgICBmb3JjZVVwZGF0ZSA9IGluc3RhbmNlLmZvcmNlVXBkYXRlO1xuXG4gIGlmICh0eXBlb2YgZm9yY2VVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICB9IGVsc2UgaWYgKHVwZGF0ZXIgJiYgdHlwZW9mIHVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUoaW5zdGFuY2UpO1xuICB9XG59O1xuXG52YXIgaXNGcmFnbWVudE5vZGUgPSBmdW5jdGlvbiBpc0ZyYWdtZW50Tm9kZShfcmVmKSB7XG4gIHZhciB0eXBlID0gX3JlZi50eXBlO1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuRnJhZ21lbnQgJiYgdHlwZSA9PT0gUmVhY3RfX2RlZmF1bHQuRnJhZ21lbnQ7XG59O1xuXG52YXIgZ2VuZXJhdGlvbiA9IDE7XG5cbnZhciBpbmNyZW1lbnQgPSBmdW5jdGlvbiBpbmNyZW1lbnQoKSB7XG4gIHJldHVybiBnZW5lcmF0aW9uKys7XG59O1xudmFyIGdldCA9IGZ1bmN0aW9uIGdldCgpIHtcbiAgcmV0dXJuIGdlbmVyYXRpb247XG59O1xuXG52YXIgUFJFRklYID0gJ19fcmVhY3RzdGFuZGluX18nO1xudmFyIFBST1hZX0tFWSA9IFBSRUZJWCArICdrZXknO1xudmFyIEdFTkVSQVRJT04gPSBQUkVGSVggKyAncHJveHlHZW5lcmF0aW9uJztcbnZhciBSRUdFTkVSQVRFX01FVEhPRCA9IFBSRUZJWCArICdyZWdlbmVyYXRlQnlFdmFsJztcbnZhciBVTldSQVBfUFJPWFkgPSBQUkVGSVggKyAnZ2V0Q3VycmVudCc7XG52YXIgQ0FDSEVEX1JFU1VMVCA9IFBSRUZJWCArICdjYWNoZWRSZXN1bHQnO1xudmFyIFBST1hZX0lTX01PVU5URUQgPSBQUkVGSVggKyAnaXNNb3VudGVkJztcblxudmFyIGNvbmZpZ3VyYXRpb24gPSB7XG4gIGxvZ0xldmVsOiAnZXJyb3InXG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cbnZhciBsb2dnZXIgPSB7XG4gIGRlYnVnOiBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICBpZiAoWydkZWJ1ZyddLmluZGV4T2YoY29uZmlndXJhdGlvbi5sb2dMZXZlbCkgIT09IC0xKSB7XG4gICAgICB2YXIgX2NvbnNvbGU7XG5cbiAgICAgIChfY29uc29sZSA9IGNvbnNvbGUpLmRlYnVnLmFwcGx5KF9jb25zb2xlLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSxcbiAgbG9nOiBmdW5jdGlvbiBsb2coKSB7XG4gICAgaWYgKFsnZGVidWcnLCAnbG9nJ10uaW5kZXhPZihjb25maWd1cmF0aW9uLmxvZ0xldmVsKSAhPT0gLTEpIHtcbiAgICAgIHZhciBfY29uc29sZTI7XG5cbiAgICAgIChfY29uc29sZTIgPSBjb25zb2xlKS5sb2cuYXBwbHkoX2NvbnNvbGUyLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSxcbiAgd2FybjogZnVuY3Rpb24gd2FybigpIHtcbiAgICBpZiAoWydkZWJ1ZycsICdsb2cnLCAnd2FybiddLmluZGV4T2YoY29uZmlndXJhdGlvbi5sb2dMZXZlbCkgIT09IC0xKSB7XG4gICAgICB2YXIgX2NvbnNvbGUzO1xuXG4gICAgICAoX2NvbnNvbGUzID0gY29uc29sZSkud2Fybi5hcHBseShfY29uc29sZTMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LFxuICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgaWYgKFsnZGVidWcnLCAnbG9nJywgJ3dhcm4nLCAnZXJyb3InXS5pbmRleE9mKGNvbmZpZ3VyYXRpb24ubG9nTGV2ZWwpICE9PSAtMSkge1xuICAgICAgdmFyIF9jb25zb2xlNDtcblxuICAgICAgKF9jb25zb2xlNCA9IGNvbnNvbGUpLmVycm9yLmFwcGx5KF9jb25zb2xlNCwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1ldmFsLCBmdW5jLW5hbWVzICovXG5cbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWU7XG4gIHJldHVybiBkaXNwbGF5TmFtZSAmJiBkaXNwbGF5TmFtZSAhPT0gJ1JlYWN0Q29tcG9uZW50JyA/IGRpc3BsYXlOYW1lIDogJ0NvbXBvbmVudCc7XG59XG5cbnZhciByZWFjdExpZmVDeWNsZU1vdW50TWV0aG9kcyA9IFsnY29tcG9uZW50V2lsbE1vdW50JywgJ2NvbXBvbmVudERpZE1vdW50J107XG5cbmZ1bmN0aW9uIGlzUmVhY3RDbGFzcyhDb21wb25lbnQpIHtcbiAgcmV0dXJuIENvbXBvbmVudC5wcm90b3R5cGUgJiYgKENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCB8fCBDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCB8fCBDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50IHx8IENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgfHwgQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnREaWRVbm1vdW50IHx8IENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyKTtcbn1cblxuZnVuY3Rpb24gc2FmZVJlYWN0Q29uc3RydWN0b3IoQ29tcG9uZW50LCBsYXN0SW5zdGFuY2UpIHtcbiAgdHJ5IHtcbiAgICBpZiAobGFzdEluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gbmV3IENvbXBvbmVudChsYXN0SW5zdGFuY2UucHJvcHMsIGxhc3RJbnN0YW5jZS5jb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDb21wb25lbnQoe30sIHt9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIHNvbWUgY29tcG9uZW50cywgbGlrZSBSZWR1eCBjb25uZWN0IGNvdWxkIG5vdCBiZSBjcmVhdGVkIHdpdGhvdXQgcHJvcGVyIGNvbnRleHRcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nID8gZm4udG9TdHJpbmcoKS5pbmRleE9mKCdbbmF0aXZlIGNvZGVdJykgPiAwIDogZmFsc2U7XG59XG5cbnZhciBpZGVudGl0eSA9IGZ1bmN0aW9uIGlkZW50aXR5KGEpIHtcbiAgcmV0dXJuIGE7XG59O1xudmFyIGluZGlyZWN0RXZhbCA9IGV2YWw7XG5cbnZhciBkb2VzU3VwcG9ydENsYXNzZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgaW5kaXJlY3RFdmFsKCdjbGFzcyBUZXN0IHt9Jyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0oKTtcblxudmFyIEVTNlByb3h5Q29tcG9uZW50RmFjdG9yeSA9IGRvZXNTdXBwb3J0Q2xhc3NlcyAmJiBpbmRpcmVjdEV2YWwoJ1xcbihmdW5jdGlvbihJbml0aWFsUGFyZW50LCBwb3N0Q29uc3RydWN0aW9uQWN0aW9uKSB7XFxuICByZXR1cm4gY2xhc3MgUHJveHlDb21wb25lbnQgZXh0ZW5kcyBJbml0aWFsUGFyZW50IHtcXG4gICAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcXG4gICAgICBzdXBlcihwcm9wcywgY29udGV4dClcXG4gICAgICBwb3N0Q29uc3RydWN0aW9uQWN0aW9uLmNhbGwodGhpcylcXG4gICAgfVxcbiAgfVxcbn0pXFxuJyk7XG5cbnZhciBFUzVQcm94eUNvbXBvbmVudEZhY3RvcnkgPSBmdW5jdGlvbiBFUzVQcm94eUNvbXBvbmVudEZhY3RvcnkoSW5pdGlhbFBhcmVudCwgcG9zdENvbnN0cnVjdGlvbkFjdGlvbikge1xuICBmdW5jdGlvbiBQcm94eUNvbXBvbmVudChwcm9wcywgY29udGV4dCkge1xuICAgIEluaXRpYWxQYXJlbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCk7XG4gICAgcG9zdENvbnN0cnVjdGlvbkFjdGlvbi5jYWxsKHRoaXMpO1xuICB9XG4gIFByb3h5Q29tcG9uZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW5pdGlhbFBhcmVudC5wcm90b3R5cGUpO1xuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoUHJveHlDb21wb25lbnQsIEluaXRpYWxQYXJlbnQpO1xuICByZXR1cm4gUHJveHlDb21wb25lbnQ7XG59O1xuXG52YXIgaXNSZWFjdENvbXBvbmVudEluc3RhbmNlID0gZnVuY3Rpb24gaXNSZWFjdENvbXBvbmVudEluc3RhbmNlKGVsKSB7XG4gIHJldHVybiBlbCAmJiAodHlwZW9mIGVsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihlbCkpID09PSAnb2JqZWN0JyAmJiAhZWwudHlwZSAmJiBlbC5yZW5kZXI7XG59O1xuXG52YXIgcHJveHlDbGFzc0NyZWF0b3IgPSBkb2VzU3VwcG9ydENsYXNzZXMgPyBFUzZQcm94eUNvbXBvbmVudEZhY3RvcnkgOiBFUzVQcm94eUNvbXBvbmVudEZhY3Rvcnk7XG5cbmZ1bmN0aW9uIGdldE93bktleXModGFyZ2V0KSB7XG4gIHJldHVybiBbXS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KSwgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbn1cblxuZnVuY3Rpb24gc2hhbGxvd1N0cmluZ3NFcXVhbChhLCBiKSB7XG4gIGZvciAodmFyIGtleSBpbiBhKSB7XG4gICAgaWYgKFN0cmluZyhhW2tleV0pICE9PSBTdHJpbmcoYltrZXldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZGVlcFByb3RvdHlwZVVwZGF0ZShkZXN0LCBzb3VyY2UpIHtcbiAgdmFyIGRlZXBEZXN0ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGRlc3QpO1xuICB2YXIgZGVlcFNyYyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihzb3VyY2UpO1xuICBpZiAoZGVlcERlc3QgJiYgZGVlcFNyYyAmJiBkZWVwU3JjICE9PSBkZWVwRGVzdCkge1xuICAgIGRlZXBQcm90b3R5cGVVcGRhdGUoZGVlcERlc3QsIGRlZXBTcmMpO1xuICB9XG4gIGlmIChzb3VyY2UucHJvdG90eXBlICYmIHNvdXJjZS5wcm90b3R5cGUgIT09IGRlc3QucHJvdG90eXBlKSB7XG4gICAgZGVzdC5wcm90b3R5cGUgPSBzb3VyY2UucHJvdG90eXBlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhZmVEZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgcHJvcHMpIHtcbiAgdHJ5IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHByb3BzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvZ2dlci53YXJuKCdFcnJvciB3aGlsZSB3cmFwcGluZycsIGtleSwgJyAtPiAnLCBlKTtcbiAgfVxufVxuXG52YXIgUkVTRVJWRURfU1RBVElDUyA9IFsnbGVuZ3RoJywgJ2Rpc3BsYXlOYW1lJywgJ25hbWUnLCAnYXJndW1lbnRzJywgJ2NhbGxlcicsICdwcm90b3R5cGUnLCAndG9TdHJpbmcnLCAndmFsdWVPZicsICdpc1N0YXRlbGVzc0Z1bmN0aW9uYWxQcm94eScsIFBST1hZX0tFWSwgVU5XUkFQX1BST1hZXTtcblxuZnVuY3Rpb24gdHJhbnNmZXJTdGF0aWNQcm9wcyhQcm94eUNvbXBvbmVudCwgc2F2ZWREZXNjcmlwdG9ycywgUHJldmlvdXNDb21wb25lbnQsIE5leHRDb21wb25lbnQpIHtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoUHJveHlDb21wb25lbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChSRVNFUlZFRF9TVEFUSUNTLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJldkRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFByb3h5Q29tcG9uZW50LCBrZXkpO1xuICAgIHZhciBzYXZlZERlc2NyaXB0b3IgPSBzYXZlZERlc2NyaXB0b3JzW2tleV07XG5cbiAgICBpZiAoIXNoYWxsb3dFcXVhbChwcmV2RGVzY3JpcHRvciwgc2F2ZWREZXNjcmlwdG9yKSkge1xuICAgICAgc2FmZURlZmluZVByb3BlcnR5KE5leHRDb21wb25lbnQsIGtleSwgcHJldkRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQ29weSBuZXdseSBkZWZpbmVkIHN0YXRpYyBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE5leHRDb21wb25lbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChSRVNFUlZFRF9TVEFUSUNTLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJldkRlc2NyaXB0b3IgPSBQcmV2aW91c0NvbXBvbmVudCAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFByb3h5Q29tcG9uZW50LCBrZXkpO1xuICAgIHZhciBzYXZlZERlc2NyaXB0b3IgPSBzYXZlZERlc2NyaXB0b3JzW2tleV07XG5cbiAgICAvLyBTa2lwIHJlZGVmaW5lZCBkZXNjcmlwdG9yc1xuICAgIGlmIChwcmV2RGVzY3JpcHRvciAmJiBzYXZlZERlc2NyaXB0b3IgJiYgIXNoYWxsb3dFcXVhbChzYXZlZERlc2NyaXB0b3IsIHByZXZEZXNjcmlwdG9yKSkge1xuICAgICAgc2FmZURlZmluZVByb3BlcnR5KE5leHRDb21wb25lbnQsIGtleSwgcHJldkRlc2NyaXB0b3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcmV2RGVzY3JpcHRvciAmJiAhc2F2ZWREZXNjcmlwdG9yKSB7XG4gICAgICBzYWZlRGVmaW5lUHJvcGVydHkoUHJveHlDb21wb25lbnQsIGtleSwgcHJldkRlc2NyaXB0b3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0RGVzY3JpcHRvciA9IF9leHRlbmRzKHt9LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5leHRDb21wb25lbnQsIGtleSksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgc2F2ZWREZXNjcmlwdG9yc1trZXldID0gbmV4dERlc2NyaXB0b3I7XG4gICAgc2FmZURlZmluZVByb3BlcnR5KFByb3h5Q29tcG9uZW50LCBrZXksIG5leHREZXNjcmlwdG9yKTtcbiAgfSk7XG5cbiAgLy8gUmVtb3ZlIHN0YXRpYyBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIHRoYXQgYXJlIG5vIGxvbmdlciBkZWZpbmVkXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFByb3h5Q29tcG9uZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoUkVTRVJWRURfU1RBVElDUy5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFNraXAgc3RhdGljcyB0aGF0IGV4aXN0IG9uIHRoZSBuZXh0IGNsYXNzXG4gICAgaWYgKE5leHRDb21wb25lbnQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTa2lwIG5vbi1jb25maWd1cmFibGUgc3RhdGljc1xuICAgIHZhciBwcm94eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFByb3h5Q29tcG9uZW50LCBrZXkpO1xuICAgIGlmIChwcm94eURlc2NyaXB0b3IgJiYgIXByb3h5RGVzY3JpcHRvci5jb25maWd1cmFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJldkRlc2NyaXB0b3IgPSBQcmV2aW91c0NvbXBvbmVudCAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFByZXZpb3VzQ29tcG9uZW50LCBrZXkpO1xuICAgIHZhciBzYXZlZERlc2NyaXB0b3IgPSBzYXZlZERlc2NyaXB0b3JzW2tleV07XG5cbiAgICAvLyBTa2lwIHJlZGVmaW5lZCBkZXNjcmlwdG9yc1xuICAgIGlmIChwcmV2RGVzY3JpcHRvciAmJiBzYXZlZERlc2NyaXB0b3IgJiYgIXNoYWxsb3dFcXVhbChzYXZlZERlc2NyaXB0b3IsIHByZXZEZXNjcmlwdG9yKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNhZmVEZWZpbmVQcm9wZXJ0eShQcm94eUNvbXBvbmVudCwga2V5LCB7XG4gICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBzYXZlZERlc2NyaXB0b3JzO1xufVxuXG5mdW5jdGlvbiBtZXJnZUNvbXBvbmVudHMoUHJveHlDb21wb25lbnQsIE5leHRDb21wb25lbnQsIEluaXRpYWxDb21wb25lbnQsIGxhc3RJbnN0YW5jZSwgaW5qZWN0ZWRNZW1iZXJzKSB7XG4gIHZhciBpbmplY3RlZENvZGUgPSB7fTtcbiAgdHJ5IHtcbiAgICB2YXIgbmV4dEluc3RhbmNlID0gc2FmZVJlYWN0Q29uc3RydWN0b3IoTmV4dENvbXBvbmVudCwgbGFzdEluc3RhbmNlKTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBCeXBhc3MgYmFiZWwgY2xhc3MgaW5oZXJpdGFuY2UgY2hlY2tpbmdcbiAgICAgIGRlZXBQcm90b3R5cGVVcGRhdGUoSW5pdGlhbENvbXBvbmVudCwgTmV4dENvbXBvbmVudCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gSXQgd2FzIEVTNiBjbGFzc1xuICAgIH1cblxuICAgIHZhciBwcm94eUluc3RhbmNlID0gc2FmZVJlYWN0Q29uc3RydWN0b3IoUHJveHlDb21wb25lbnQsIGxhc3RJbnN0YW5jZSk7XG5cbiAgICBpZiAoIW5leHRJbnN0YW5jZSB8fCAhcHJveHlJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIGluamVjdGVkQ29kZTtcbiAgICB9XG5cbiAgICB2YXIgbWVyZ2VkQXR0cnMgPSBfZXh0ZW5kcyh7fSwgcHJveHlJbnN0YW5jZSwgbmV4dEluc3RhbmNlKTtcbiAgICB2YXIgaGFzUmVnZW5lcmF0ZSA9IHByb3h5SW5zdGFuY2VbUkVHRU5FUkFURV9NRVRIT0RdO1xuICAgIHZhciBvd25LZXlzID0gZ2V0T3duS2V5cyhPYmplY3QuZ2V0UHJvdG90eXBlT2YoUHJveHlDb21wb25lbnQucHJvdG90eXBlKSk7XG4gICAgT2JqZWN0LmtleXMobWVyZ2VkQXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKFBSRUZJWCkpIHJldHVybjtcbiAgICAgIHZhciBuZXh0QXR0ciA9IG5leHRJbnN0YW5jZVtrZXldO1xuICAgICAgdmFyIHByZXZBdHRyID0gcHJveHlJbnN0YW5jZVtrZXldO1xuICAgICAgaWYgKHByZXZBdHRyICYmIG5leHRBdHRyKSB7XG4gICAgICAgIGlmIChpc05hdGl2ZUZ1bmN0aW9uKG5leHRBdHRyKSB8fCBpc05hdGl2ZUZ1bmN0aW9uKHByZXZBdHRyKSkge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYm91bmQgbWV0aG9kXG4gICAgICAgICAgdmFyIGlzU2FtZUFyaXR5ID0gbmV4dEF0dHIubGVuZ3RoID09PSBwcmV2QXR0ci5sZW5ndGg7XG4gICAgICAgICAgdmFyIGV4aXN0c0luUHJvdG90eXBlID0gb3duS2V5cy5pbmRleE9mKGtleSkgPj0gMCB8fCBQcm94eUNvbXBvbmVudC5wcm90b3R5cGVba2V5XTtcbiAgICAgICAgICBpZiAoaXNTYW1lQXJpdHkgJiYgZXhpc3RzSW5Qcm90b3R5cGUpIHtcbiAgICAgICAgICAgIGlmIChoYXNSZWdlbmVyYXRlKSB7XG4gICAgICAgICAgICAgIGluamVjdGVkQ29kZVtrZXldID0gJ09iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKVtcXCcnICsga2V5ICsgJ1xcJ10uYmluZCh0aGlzKSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsb2dnZXIud2FybignUmVhY3QgSG90IExvYWRlcjosJywgJ05vbi1jb250cm9sbGVkIGNsYXNzJywgUHJveHlDb21wb25lbnQubmFtZSwgJ2NvbnRhaW5zIGEgbmV3IG5hdGl2ZSBvciBib3VuZCBmdW5jdGlvbiAnLCBrZXksIG5leHRBdHRyLCAnLiBVbmFibGUgdG8gcmVwcm9kdWNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKCdSZWFjdCBIb3QgTG9hZGVyOicsICdVcGRhdGVkIGNsYXNzICcsIFByb3h5Q29tcG9uZW50Lm5hbWUsICdjb250YWlucyBuYXRpdmUgb3IgYm91bmQgZnVuY3Rpb24gJywga2V5LCBuZXh0QXR0ciwgJy4gVW5hYmxlIHRvIHJlcHJvZHVjZSwgdXNlIGFycm93IGZ1bmN0aW9ucyBpbnN0ZWFkLicsICcoYXJpdHk6ICcgKyBuZXh0QXR0ci5sZW5ndGggKyAnLycgKyBwcmV2QXR0ci5sZW5ndGggKyAnLCBwcm90bzogJyArIChleGlzdHNJblByb3RvdHlwZSA/ICd5ZXMnIDogJ25vJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV4dFN0cmluZyA9IFN0cmluZyhuZXh0QXR0cik7XG4gICAgICAgIHZhciBpbmplY3RlZEJlZm9yZSA9IGluamVjdGVkTWVtYmVyc1trZXldO1xuICAgICAgICBpZiAobmV4dFN0cmluZyAhPT0gU3RyaW5nKHByZXZBdHRyKSB8fCBpbmplY3RlZEJlZm9yZSAmJiBuZXh0U3RyaW5nICE9PSBTdHJpbmcoaW5qZWN0ZWRCZWZvcmUpKSB7XG4gICAgICAgICAgaWYgKCFoYXNSZWdlbmVyYXRlKSB7XG4gICAgICAgICAgICBpZiAobmV4dFN0cmluZy5pbmRleE9mKCdmdW5jdGlvbicpIDwgMCAmJiBuZXh0U3RyaW5nLmluZGV4T2YoJz0+JykgPCAwKSB7XG4gICAgICAgICAgICAgIC8vIGp1c3QgY29weSBwcm9wIG92ZXJcbiAgICAgICAgICAgICAgaW5qZWN0ZWRDb2RlW2tleV0gPSBuZXh0QXR0cjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxvZ2dlci53YXJuKCdSZWFjdCBIb3QgTG9hZGVyOicsICcgVXBkYXRlZCBjbGFzcyAnLCBQcm94eUNvbXBvbmVudC5uYW1lLCAnaGFkIGRpZmZlcmVudCBjb2RlIGZvcicsIGtleSwgbmV4dEF0dHIsICcuIFVuYWJsZSB0byByZXByb2R1Y2UuIFJlZ2VuZXJhdGlvbiBzdXBwb3J0IG5lZWRlZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5qZWN0ZWRDb2RlW2tleV0gPSBuZXh0QXR0cjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvZ2dlci53YXJuKCdSZWFjdCBIb3QgTG9hZGVyOicsIGUpO1xuICB9XG4gIHJldHVybiBpbmplY3RlZENvZGU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTGlmZUN5Y2xlTWV0aG9kcyhQcm94eUNvbXBvbmVudCwgTmV4dENvbXBvbmVudCkge1xuICB0cnkge1xuICAgIHZhciBwMSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihQcm94eUNvbXBvbmVudC5wcm90b3R5cGUpO1xuICAgIHZhciBwMiA9IE5leHRDb21wb25lbnQucHJvdG90eXBlO1xuICAgIHJlYWN0TGlmZUN5Y2xlTW91bnRNZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIGQxID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwMSwga2V5KSB8fCB7IHZhbHVlOiBwMVtrZXldIH07XG4gICAgICB2YXIgZDIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHAyLCBrZXkpIHx8IHsgdmFsdWU6IHAyW2tleV0gfTtcbiAgICAgIGlmICghc2hhbGxvd1N0cmluZ3NFcXVhbChkMSwgZDIpKSB7XG4gICAgICAgIGxvZ2dlci53YXJuKCdSZWFjdCBIb3QgTG9hZGVyOicsICdZb3UgZGlkIHVwZGF0ZScsIFByb3h5Q29tcG9uZW50Lm5hbWUsICdzIGxpZmVjeWNsZSBtZXRob2QnLCBrZXksICcuIFVuYWJsZSB0byByZXBlYXQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIElnbm9yZSBlcnJvcnNcbiAgfVxufVxuXG5mdW5jdGlvbiBpbmplY3QodGFyZ2V0LCBjdXJyZW50R2VuZXJhdGlvbiwgaW5qZWN0ZWRNZW1iZXJzKSB7XG4gIGlmICh0YXJnZXRbR0VORVJBVElPTl0gIT09IGN1cnJlbnRHZW5lcmF0aW9uKSB7XG4gICAgdmFyIGhhc1JlZ2VuZXJhdGUgPSAhIXRhcmdldFtSRUdFTkVSQVRFX01FVEhPRF07XG4gICAgT2JqZWN0LmtleXMoaW5qZWN0ZWRNZW1iZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYXNSZWdlbmVyYXRlKSB7XG4gICAgICAgICAgdGFyZ2V0W1JFR0VORVJBVEVfTUVUSE9EXShrZXksICcoZnVuY3Rpb24gUkVBQ1RfSE9UX0xPQURFUl9TQU5EQk9YICgpIHtcXG4gICAgICAgICAgdmFyIF90aGlzICA9IHRoaXM7IC8vIGNvbW1vbiBiYWJlbCB0cmFuc3BpbGVcXG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7IC8vIGNvbW1vbiBiYWJlbCB0cmFuc3BpbGVcXG4gICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7IC8vIGNvbW1vbiBiYWJlbCB0cmFuc3BpbGVcXG4gICAgICAgICAgcmV0dXJuICcgKyBpbmplY3RlZE1lbWJlcnNba2V5XSArICc7XFxuICAgICAgICAgIH0pLmNhbGwodGhpcyknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IGluamVjdGVkTWVtYmVyc1trZXldO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxvZ2dlci53YXJuKCdSZWFjdCBIb3QgTG9hZGVyOiBGYWlsZWQgdG8gcmVnZW5lcmF0ZSBtZXRob2QgJywga2V5LCAnIG9mIGNsYXNzICcsIHRhcmdldCk7XG4gICAgICAgIGxvZ2dlci53YXJuKCdnb3QgZXJyb3InLCBlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRhcmdldFtHRU5FUkFUSU9OXSA9IGN1cnJlbnRHZW5lcmF0aW9uO1xuICB9XG59XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgcHJveGllcyA9IG5ldyBXZWFrTWFwKCk7XG5cbnZhciByZXNldENsYXNzUHJveGllcyA9IGZ1bmN0aW9uIHJlc2V0Q2xhc3NQcm94aWVzKCkge1xuICBwcm94aWVzID0gbmV3IFdlYWtNYXAoKTtcbn07XG5cbnZhciBibGFja0xpc3RlZENsYXNzTWVtYmVycyA9IFsnY29uc3RydWN0b3InLCAncmVuZGVyJywgJ2NvbXBvbmVudFdpbGxNb3VudCcsICdjb21wb25lbnREaWRNb3VudCcsICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJywgJ2NvbXBvbmVudFdpbGxVbm1vdW50JywgJ2hvdENvbXBvbmVudFJlbmRlcicsICdnZXRJbml0aWFsU3RhdGUnLCAnZ2V0RGVmYXVsdFByb3BzJ107XG5cbnZhciBkZWZhdWx0UmVuZGVyT3B0aW9ucyA9IHtcbiAgY29tcG9uZW50V2lsbFJlbmRlcjogaWRlbnRpdHksXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHJlc3VsdCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4gIGNvbXBvbmVudERpZFJlbmRlcjogZnVuY3Rpb24gY29tcG9uZW50RGlkUmVuZGVyKHJlc3VsdCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5cbnZhciBkZWZpbmVDbGFzc01lbWJlciA9IGZ1bmN0aW9uIGRlZmluZUNsYXNzTWVtYmVyKENsYXNzLCBtZXRob2ROYW1lLCBtZXRob2RCb2R5KSB7XG4gIHJldHVybiBzYWZlRGVmaW5lUHJvcGVydHkoQ2xhc3MucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBtZXRob2RCb2R5XG4gIH0pO1xufTtcblxudmFyIGRlZmluZUNsYXNzTWVtYmVycyA9IGZ1bmN0aW9uIGRlZmluZUNsYXNzTWVtYmVycyhDbGFzcywgbWV0aG9kcykge1xuICByZXR1cm4gT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgIHJldHVybiBkZWZpbmVDbGFzc01lbWJlcihDbGFzcywgbWV0aG9kTmFtZSwgbWV0aG9kc1ttZXRob2ROYW1lXSk7XG4gIH0pO1xufTtcblxudmFyIHNldFNGUEZsYWcgPSBmdW5jdGlvbiBzZXRTRlBGbGFnKGNvbXBvbmVudCwgZmxhZykge1xuICByZXR1cm4gc2FmZURlZmluZVByb3BlcnR5KGNvbXBvbmVudCwgJ2lzU3RhdGVsZXNzRnVuY3Rpb25hbFByb3h5Jywge1xuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmbGFnXG4gIH0pO1xufTtcblxudmFyIGNvcHlNZXRob2REZXNjcmlwdG9ycyA9IGZ1bmN0aW9uIGNvcHlNZXRob2REZXNjcmlwdG9ycyh0YXJnZXQsIHNvdXJjZSkge1xuICBpZiAoc291cmNlKSB7XG4gICAgLy8gaXQgaXMgcG9zc2libGUgdG8gdXNlIGBmdW5jdGlvbi1kb3VibGVgIHRvIGNvbnN0cnVjdCBhbiBpZGVhbCBjbG9uZSwgYnV0IGRvZXMgbm90IG1ha2UgYSBzZW5jZVxuICAgIHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKTtcblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gc2FmZURlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfSk7XG5cbiAgICBzYWZlRGVmaW5lUHJvcGVydHkodGFyZ2V0LCAndG9TdHJpbmcnLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhzb3VyY2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzUHJveHkoSW5pdGlhbENvbXBvbmVudCwgcHJveHlLZXksIG9wdGlvbnMpIHtcbiAgdmFyIHJlbmRlck9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFJlbmRlck9wdGlvbnMsIG9wdGlvbnMpO1xuICAvLyBQcmV2ZW50IGRvdWJsZSB3cmFwcGluZy5cbiAgLy8gR2l2ZW4gYSBwcm94eSBjbGFzcywgcmV0dXJuIHRoZSBleGlzdGluZyBwcm94eSBtYW5hZ2luZyBpdC5cbiAgdmFyIGV4aXN0aW5nUHJveHkgPSBwcm94aWVzLmdldChJbml0aWFsQ29tcG9uZW50KTtcblxuICBpZiAoZXhpc3RpbmdQcm94eSkge1xuICAgIHJldHVybiBleGlzdGluZ1Byb3h5O1xuICB9XG5cbiAgdmFyIEN1cnJlbnRDb21wb25lbnQgPSB2b2lkIDA7XG4gIHZhciBzYXZlZERlc2NyaXB0b3JzID0ge307XG4gIHZhciBpbmplY3RlZE1lbWJlcnMgPSB7fTtcbiAgdmFyIHByb3h5R2VuZXJhdGlvbiA9IDA7XG4gIHZhciBpc0Z1bmN0aW9uYWxDb21wb25lbnQgPSAhaXNSZWFjdENsYXNzKEluaXRpYWxDb21wb25lbnQpO1xuXG4gIHZhciBsYXN0SW5zdGFuY2UgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIHBvc3RDb25zdHJ1Y3Rpb25BY3Rpb24oKSB7XG4gICAgdGhpc1tHRU5FUkFUSU9OXSA9IDA7XG5cbiAgICAvLyBBcyBsb25nIHdlIGNhbid0IG92ZXJyaWRlIGNvbnN0cnVjdG9yXG4gICAgLy8gZXZlcnkgY2xhc3Mgc2hhbGwgZXZvbHZlIGZyb20gYSBiYXNlIGNsYXNzXG4gICAgaW5qZWN0KHRoaXMsIHByb3h5R2VuZXJhdGlvbiwgaW5qZWN0ZWRNZW1iZXJzKTtcblxuICAgIGxhc3RJbnN0YW5jZSA9IHRoaXM7XG4gIH1cblxuICBmdW5jdGlvbiBwcm94aWVkVXBkYXRlKCkge1xuICAgIGlmICh0aGlzKSB7XG4gICAgICBpbmplY3QodGhpcywgcHJveHlHZW5lcmF0aW9uLCBpbmplY3RlZE1lbWJlcnMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxpZmVDeWNsZVdyYXBwZXJGYWN0b3J5KHdyYXBwZXJOYW1lKSB7XG4gICAgdmFyIHNpZGVFZmZlY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGlkZW50aXR5O1xuXG4gICAgcmV0dXJuIGNvcHlNZXRob2REZXNjcmlwdG9ycyhmdW5jdGlvbiB3cmFwcGVkTWV0aG9kKCkge1xuICAgICAgcHJveGllZFVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgICAgc2lkZUVmZmVjdCh0aGlzKTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgcmVzdFtfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICFpc0Z1bmN0aW9uYWxDb21wb25lbnQgJiYgQ3VycmVudENvbXBvbmVudC5wcm90b3R5cGVbd3JhcHBlck5hbWVdICYmIEN1cnJlbnRDb21wb25lbnQucHJvdG90eXBlW3dyYXBwZXJOYW1lXS5hcHBseSh0aGlzLCByZXN0KTtcbiAgICB9LCBJbml0aWFsQ29tcG9uZW50LnByb3RvdHlwZSAmJiBJbml0aWFsQ29tcG9uZW50LnByb3RvdHlwZVt3cmFwcGVyTmFtZV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWV0aG9kV3JhcHBlckZhY3Rvcnkod3JhcHBlck5hbWUsIHJlYWxNZXRob2QpIHtcbiAgICByZXR1cm4gY29weU1ldGhvZERlc2NyaXB0b3JzKGZ1bmN0aW9uIHdyYXBwZWRNZXRob2QoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICByZXN0W19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZWFsTWV0aG9kLmFwcGx5KHRoaXMsIHJlc3QpO1xuICAgIH0sIHJlYWxNZXRob2QpO1xuICB9XG5cbiAgdmFyIGZha2VCYXNlUHJvdG90eXBlID0gZnVuY3Rpb24gZmFrZUJhc2VQcm90b3R5cGUoQmFzZSkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhCYXNlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGJsYWNrTGlzdGVkQ2xhc3NNZW1iZXJzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihCYXNlLCBrZXkpO1xuICAgICAgcmV0dXJuIHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgIGFjY1trZXldID0gbWV0aG9kV3JhcHBlckZhY3Rvcnkoa2V5LCBCYXNlW2tleV0pO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH07XG5cbiAgdmFyIGNvbXBvbmVudERpZE1vdW50ID0gbGlmZUN5Y2xlV3JhcHBlckZhY3RvcnkoJ2NvbXBvbmVudERpZE1vdW50JywgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHRhcmdldFtQUk9YWV9JU19NT1VOVEVEXSA9IHRydWU7XG4gIH0pO1xuICB2YXIgY29tcG9uZW50RGlkVXBkYXRlID0gbGlmZUN5Y2xlV3JhcHBlckZhY3RvcnkoJ2NvbXBvbmVudERpZFVwZGF0ZScsIHJlbmRlck9wdGlvbnMuY29tcG9uZW50RGlkVXBkYXRlKTtcbiAgdmFyIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gbGlmZUN5Y2xlV3JhcHBlckZhY3RvcnkoJ2NvbXBvbmVudFdpbGxVbm1vdW50JywgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHRhcmdldFtQUk9YWV9JU19NT1VOVEVEXSA9IGZhbHNlO1xuICB9KTtcblxuICBmdW5jdGlvbiBob3RDb21wb25lbnRSZW5kZXIoKSB7XG4gICAgLy8gcmVwZWF0aW5nIHN1YnJlbmRlciBjYWxsIHRvIGtlZXAgUkVOREVSRURfR0VORVJBVElPTiB1cCB0byBkYXRlXG4gICAgcmVuZGVyT3B0aW9ucy5jb21wb25lbnRXaWxsUmVuZGVyKHRoaXMpO1xuICAgIHByb3hpZWRVcGRhdGUuY2FsbCh0aGlzKTtcbiAgICB2YXIgcmVzdWx0ID0gdm9pZCAwO1xuXG4gICAgLy8gV2UgbmVlZCB0byB1c2UgaGFzT3duUHJvcGVydHkgaGVyZSwgYXMgdGhlIGNhY2hlZCByZXN1bHQgaXMgYSBSZWFjdCBub2RlXG4gICAgLy8gYW5kIGNhbiBiZSBudWxsIG9yIHNvbWUgb3RoZXIgZmFsc3kgdmFsdWUuXG4gICAgaWYgKGhhcy5jYWxsKHRoaXMsIENBQ0hFRF9SRVNVTFQpKSB7XG4gICAgICByZXN1bHQgPSB0aGlzW0NBQ0hFRF9SRVNVTFRdO1xuICAgICAgZGVsZXRlIHRoaXNbQ0FDSEVEX1JFU1VMVF07XG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uYWxDb21wb25lbnQpIHtcbiAgICAgIHJlc3VsdCA9IEN1cnJlbnRDb21wb25lbnQodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gQ3VycmVudENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlck9wdGlvbnMuY29tcG9uZW50RGlkUmVuZGVyLmNhbGwodGhpcywgcmVzdWx0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3hpZWRSZW5kZXIoKSB7XG4gICAgcmVuZGVyT3B0aW9ucy5jb21wb25lbnRXaWxsUmVuZGVyKHRoaXMpO1xuICAgIHJldHVybiBob3RDb21wb25lbnRSZW5kZXIuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIHZhciBkZWZpbmVQcm94eU1ldGhvZHMgPSBmdW5jdGlvbiBkZWZpbmVQcm94eU1ldGhvZHMoUHJveHkpIHtcbiAgICB2YXIgQmFzZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBkZWZpbmVDbGFzc01lbWJlcnMoUHJveHksIF9leHRlbmRzKHt9LCBmYWtlQmFzZVByb3RvdHlwZShCYXNlKSwge1xuICAgICAgcmVuZGVyOiBwcm94aWVkUmVuZGVyLFxuICAgICAgaG90Q29tcG9uZW50UmVuZGVyOiBob3RDb21wb25lbnRSZW5kZXIsXG4gICAgICBjb21wb25lbnREaWRNb3VudDogY29tcG9uZW50RGlkTW91bnQsXG4gICAgICBjb21wb25lbnREaWRVcGRhdGU6IGNvbXBvbmVudERpZFVwZGF0ZSxcbiAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBjb21wb25lbnRXaWxsVW5tb3VudFxuICAgIH0pKTtcbiAgfTtcblxuICB2YXIgX1Byb3h5RmFjYWRlID0gdm9pZCAwO1xuICB2YXIgUHJveHlDb21wb25lbnQgPSBudWxsO1xuICB2YXIgcHJveHkgPSB2b2lkIDA7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uYWxDb21wb25lbnQpIHtcbiAgICBQcm94eUNvbXBvbmVudCA9IHByb3h5Q2xhc3NDcmVhdG9yKEluaXRpYWxDb21wb25lbnQsIHBvc3RDb25zdHJ1Y3Rpb25BY3Rpb24pO1xuXG4gICAgZGVmaW5lUHJveHlNZXRob2RzKFByb3h5Q29tcG9uZW50LCBJbml0aWFsQ29tcG9uZW50LnByb3RvdHlwZSk7XG5cbiAgICBfUHJveHlGYWNhZGUgPSBQcm94eUNvbXBvbmVudDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIHRoZSBpbml0aWFsIG1vdW50LiBUaGUgYWN0dWFsXG4gICAgLy8gcmVuZGVyZWQgY29tcG9uZW50IGluc3RhbmNlIHdpbGwgYmUgdGhlIHJldHVybiB2YWx1ZS5cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgX1Byb3h5RmFjYWRlID0gZnVuY3Rpb24gUHJveHlGYWNhZGUocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgIHZhciByZXN1bHQgPSBDdXJyZW50Q29tcG9uZW50KHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgLy8gc2ltcGxlIFNGQ1xuICAgICAgaWYgKCFDdXJyZW50Q29tcG9uZW50LmNvbnRleHRUeXBlcykge1xuICAgICAgICBpZiAoIV9Qcm94eUZhY2FkZS5pc1N0YXRlbGVzc0Z1bmN0aW9uYWxQcm94eSkge1xuICAgICAgICAgIHNldFNGUEZsYWcoX1Byb3h5RmFjYWRlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZW5kZXJPcHRpb25zLmNvbXBvbmVudERpZFJlbmRlcihyZXN1bHQpO1xuICAgICAgfVxuICAgICAgc2V0U0ZQRmxhZyhfUHJveHlGYWNhZGUsIGZhbHNlKTtcblxuICAgICAgLy8gVGhpcyBpcyBhIFJlbGF5LXN0eWxlIGNvbnRhaW5lciBjb25zdHJ1Y3Rvci4gV2UgY2FuJ3QgZG8gdGhlIHByb3RvdHlwZS1cbiAgICAgIC8vIHN0eWxlIHdyYXBwaW5nIGZvciB0aGlzIGFzIHdlIGRvIGVsc2V3aGVyZSwgc28ganVzdCB3ZSBqdXN0IHBhc3MgaXRcbiAgICAgIC8vIHRocm91Z2ggYXMtaXMuXG4gICAgICBpZiAoaXNSZWFjdENvbXBvbmVudEluc3RhbmNlKHJlc3VsdCkpIHtcbiAgICAgICAgUHJveHlDb21wb25lbnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2UsIGl0J3MgYSBub3JtYWwgZnVuY3Rpb25hbCBjb21wb25lbnQuIEJ1aWxkIHRoZSByZWFsIHByb3h5XG4gICAgICAvLyBhbmQgdXNlIGl0IGdvaW5nIGZvcndhcmQuXG4gICAgICBQcm94eUNvbXBvbmVudCA9IHByb3h5Q2xhc3NDcmVhdG9yKFJlYWN0LkNvbXBvbmVudCwgcG9zdENvbnN0cnVjdGlvbkFjdGlvbik7XG5cbiAgICAgIGRlZmluZVByb3h5TWV0aG9kcyhQcm94eUNvbXBvbmVudCk7XG5cbiAgICAgIHZhciBkZXRlcm1pbmF0ZVJlc3VsdCA9IG5ldyBQcm94eUNvbXBvbmVudChwcm9wcywgY29udGV4dCk7XG5cbiAgICAgIC8vIENhY2hlIHRoZSBpbml0aWFsIHJlbmRlciByZXN1bHQgc28gd2UgZG9uJ3QgY2FsbCB0aGUgY29tcG9uZW50IGZ1bmN0aW9uXG4gICAgICAvLyBhIHNlY29uZCB0aW1lIGZvciB0aGUgaW5pdGlhbCByZW5kZXIuXG4gICAgICBkZXRlcm1pbmF0ZVJlc3VsdFtDQUNIRURfUkVTVUxUXSA9IHJlc3VsdDtcbiAgICAgIHJldHVybiBkZXRlcm1pbmF0ZVJlc3VsdDtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfUHJveHlGYWNhZGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50KCkge1xuICAgIHJldHVybiBDdXJyZW50Q29tcG9uZW50O1xuICB9XG5cbiAgc2FmZURlZmluZVByb3BlcnR5KF9Qcm94eUZhY2FkZSwgVU5XUkFQX1BST1hZLCB7XG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGdldEN1cnJlbnRcbiAgfSk7XG5cbiAgc2FmZURlZmluZVByb3BlcnR5KF9Qcm94eUZhY2FkZSwgUFJPWFlfS0VZLCB7XG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IHByb3h5S2V5XG4gIH0pO1xuXG4gIHNhZmVEZWZpbmVQcm9wZXJ0eShfUHJveHlGYWNhZGUsICd0b1N0cmluZycsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBTdHJpbmcoQ3VycmVudENvbXBvbmVudCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGUoTmV4dENvbXBvbmVudCkge1xuICAgIGlmICh0eXBlb2YgTmV4dENvbXBvbmVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBhIGNvbnN0cnVjdG9yLicpO1xuICAgIH1cblxuICAgIGlmIChOZXh0Q29tcG9uZW50ID09PSBDdXJyZW50Q29tcG9uZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUHJldmVudCBwcm94eSBjeWNsZXNcbiAgICB2YXIgZXhpc3RpbmdQcm94eSA9IHByb3hpZXMuZ2V0KE5leHRDb21wb25lbnQpO1xuICAgIGlmIChleGlzdGluZ1Byb3h5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJveGllcy5zZXQoTmV4dENvbXBvbmVudCwgcHJveHkpO1xuXG4gICAgaXNGdW5jdGlvbmFsQ29tcG9uZW50ID0gIWlzUmVhY3RDbGFzcyhOZXh0Q29tcG9uZW50KTtcbiAgICBwcm94eUdlbmVyYXRpb24rKztcblxuICAgIC8vIFNhdmUgdGhlIG5leHQgY29uc3RydWN0b3Igc28gd2UgY2FsbCBpdFxuICAgIHZhciBQcmV2aW91c0NvbXBvbmVudCA9IEN1cnJlbnRDb21wb25lbnQ7XG4gICAgQ3VycmVudENvbXBvbmVudCA9IE5leHRDb21wb25lbnQ7XG5cbiAgICAvLyBUcnkgdG8gaW5mZXIgZGlzcGxheU5hbWVcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZShDdXJyZW50Q29tcG9uZW50KTtcblxuICAgIHNhZmVEZWZpbmVQcm9wZXJ0eShfUHJveHlGYWNhZGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZGlzcGxheU5hbWVcbiAgICB9KTtcblxuICAgIGlmIChQcm94eUNvbXBvbmVudCkge1xuICAgICAgc2FmZURlZmluZVByb3BlcnR5KFByb3h5Q29tcG9uZW50LCAnbmFtZScsIHtcbiAgICAgICAgdmFsdWU6IGRpc3BsYXlOYW1lXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlZERlc2NyaXB0b3JzID0gdHJhbnNmZXJTdGF0aWNQcm9wcyhfUHJveHlGYWNhZGUsIHNhdmVkRGVzY3JpcHRvcnMsIFByZXZpb3VzQ29tcG9uZW50LCBOZXh0Q29tcG9uZW50KTtcblxuICAgIGlmIChpc0Z1bmN0aW9uYWxDb21wb25lbnQgfHwgIVByb3h5Q29tcG9uZW50KSA7IGVsc2Uge1xuICAgICAgY2hlY2tMaWZlQ3ljbGVNZXRob2RzKFByb3h5Q29tcG9uZW50LCBOZXh0Q29tcG9uZW50KTtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihQcm94eUNvbXBvbmVudC5wcm90b3R5cGUsIE5leHRDb21wb25lbnQucHJvdG90eXBlKTtcbiAgICAgIGRlZmluZVByb3h5TWV0aG9kcyhQcm94eUNvbXBvbmVudCwgTmV4dENvbXBvbmVudC5wcm90b3R5cGUpO1xuICAgICAgaWYgKHByb3h5R2VuZXJhdGlvbiA+IDEpIHtcbiAgICAgICAgaW5qZWN0ZWRNZW1iZXJzID0gbWVyZ2VDb21wb25lbnRzKFByb3h5Q29tcG9uZW50LCBOZXh0Q29tcG9uZW50LCBJbml0aWFsQ29tcG9uZW50LCBsYXN0SW5zdGFuY2UsIGluamVjdGVkTWVtYmVycyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKEluaXRpYWxDb21wb25lbnQpO1xuXG4gIHByb3h5ID0geyBnZXQ6IGdldCwgdXBkYXRlOiB1cGRhdGUgfTtcblxuICBwcm94aWVzLnNldChJbml0aWFsQ29tcG9uZW50LCBwcm94eSk7XG4gIHByb3hpZXMuc2V0KF9Qcm94eUZhY2FkZSwgcHJveHkpO1xuXG4gIHNhZmVEZWZpbmVQcm9wZXJ0eShwcm94eSwgVU5XUkFQX1BST1hZLCB7XG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGdldEN1cnJlbnRcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3h5O1xufVxuXG52YXIgcHJveGllc0J5SUQgPSB2b2lkIDA7XG52YXIgaWRzQnlUeXBlID0gdm9pZCAwO1xuXG52YXIgZWxlbWVudENvdW50ID0gMDtcbnZhciByZW5kZXJPcHRpb25zID0ge307XG5cbnZhciBnZW5lcmF0ZVR5cGVJZCA9IGZ1bmN0aW9uIGdlbmVyYXRlVHlwZUlkKCkge1xuICByZXR1cm4gJ2F1dG8tJyArIGVsZW1lbnRDb3VudCsrO1xufTtcblxudmFyIGdldElkQnlUeXBlID0gZnVuY3Rpb24gZ2V0SWRCeVR5cGUodHlwZSkge1xuICByZXR1cm4gaWRzQnlUeXBlLmdldCh0eXBlKTtcbn07XG5cbnZhciBnZXRQcm94eUJ5SWQgPSBmdW5jdGlvbiBnZXRQcm94eUJ5SWQoaWQpIHtcbiAgcmV0dXJuIHByb3hpZXNCeUlEW2lkXTtcbn07XG52YXIgZ2V0UHJveHlCeVR5cGUgPSBmdW5jdGlvbiBnZXRQcm94eUJ5VHlwZSh0eXBlKSB7XG4gIHJldHVybiBnZXRQcm94eUJ5SWQoZ2V0SWRCeVR5cGUodHlwZSkpO1xufTtcblxudmFyIHNldFN0YW5kSW5PcHRpb25zID0gZnVuY3Rpb24gc2V0U3RhbmRJbk9wdGlvbnMob3B0aW9ucykge1xuICByZW5kZXJPcHRpb25zID0gb3B0aW9ucztcbn07XG5cbnZhciB1cGRhdGVQcm94eUJ5SWQgPSBmdW5jdGlvbiB1cGRhdGVQcm94eUJ5SWQoaWQsIHR5cGUpIHtcbiAgLy8gUmVtZW1iZXIgdGhlIElELlxuICBpZHNCeVR5cGUuc2V0KHR5cGUsIGlkKTtcblxuICBpZiAoIXByb3hpZXNCeUlEW2lkXSkge1xuICAgIHByb3hpZXNCeUlEW2lkXSA9IGNyZWF0ZUNsYXNzUHJveHkodHlwZSwgaWQsIHJlbmRlck9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHByb3hpZXNCeUlEW2lkXS51cGRhdGUodHlwZSk7XG4gIH1cbiAgcmV0dXJuIHByb3hpZXNCeUlEW2lkXTtcbn07XG5cbnZhciBjcmVhdGVQcm94eUZvclR5cGUgPSBmdW5jdGlvbiBjcmVhdGVQcm94eUZvclR5cGUodHlwZSkge1xuICByZXR1cm4gZ2V0UHJveHlCeVR5cGUodHlwZSkgfHwgdXBkYXRlUHJveHlCeUlkKGdlbmVyYXRlVHlwZUlkKCksIHR5cGUpO1xufTtcblxudmFyIHJlc2V0UHJveGllcyA9IGZ1bmN0aW9uIHJlc2V0UHJveGllcygpIHtcbiAgcHJveGllc0J5SUQgPSB7fTtcbiAgaWRzQnlUeXBlID0gbmV3IFdlYWtNYXAoKTtcbiAgcmVzZXRDbGFzc1Byb3hpZXMoKTtcbn07XG5cbnJlc2V0UHJveGllcygpO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG5mdW5jdGlvbiByZXNvbHZlVHlwZSh0eXBlKSB7XG4gIGlmICghaXNDb21wb3NpdGVDb21wb25lbnQodHlwZSkpIHJldHVybiB0eXBlO1xuXG4gIHZhciBwcm94eSA9IHJlYWN0SG90TG9hZGVyLmRpc2FibGVQcm94eUNyZWF0aW9uID8gZ2V0UHJveHlCeVR5cGUodHlwZSkgOiBjcmVhdGVQcm94eUZvclR5cGUodHlwZSk7XG5cbiAgcmV0dXJuIHByb3h5ID8gcHJveHkuZ2V0KCkgOiB0eXBlO1xufVxuXG52YXIgcmVhY3RIb3RMb2FkZXIgPSB7XG4gIHJlZ2lzdGVyOiBmdW5jdGlvbiByZWdpc3Rlcih0eXBlLCB1bmlxdWVMb2NhbE5hbWUsIGZpbGVOYW1lKSB7XG4gICAgaWYgKGlzQ29tcG9zaXRlQ29tcG9uZW50KHR5cGUpICYmIHR5cGVvZiB1bmlxdWVMb2NhbE5hbWUgPT09ICdzdHJpbmcnICYmIHVuaXF1ZUxvY2FsTmFtZSAmJiB0eXBlb2YgZmlsZU5hbWUgPT09ICdzdHJpbmcnICYmIGZpbGVOYW1lKSB7XG4gICAgICB2YXIgaWQgPSBmaWxlTmFtZSArICcjJyArIHVuaXF1ZUxvY2FsTmFtZTtcblxuICAgICAgaWYgKGdldFByb3h5QnlJZChpZCkpIHtcbiAgICAgICAgLy8gY29tcG9uZW50IGdvdCByZXBsYWNlZC4gTmVlZCB0byByZWNvbnNpbGVcbiAgICAgICAgaW5jcmVtZW50KCk7XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZVByb3h5QnlJZChpZCwgdHlwZSk7XG4gICAgfVxuICB9LFxuICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgcmVzZXRQcm94aWVzKCk7XG4gIH0sXG4gIHBhdGNoOiBmdW5jdGlvbiBwYXRjaChSZWFjdCQkMSkge1xuICAgIGlmICghUmVhY3QkJDEuY3JlYXRlRWxlbWVudC5pc1BhdGNoZWRCeVJlYWN0SG90TG9hZGVyKSB7XG4gICAgICB2YXIgb3JpZ2luYWxDcmVhdGVFbGVtZW50ID0gUmVhY3QkJDEuY3JlYXRlRWxlbWVudDtcbiAgICAgIC8vIFRyaWNrIFJlYWN0IGludG8gcmVuZGVyaW5nIGEgcHJveHkgc28gdGhhdFxuICAgICAgLy8gaXRzIHN0YXRlIGlzIHByZXNlcnZlZCB3aGVuIHRoZSBjbGFzcyBjaGFuZ2VzLlxuICAgICAgLy8gVGhpcyB3aWxsIHVwZGF0ZSB0aGUgcHJveHkgaWYgaXQncyBmb3IgYSBrbm93biB0eXBlLlxuICAgICAgUmVhY3QkJDEuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsQ3JlYXRlRWxlbWVudC5hcHBseSh1bmRlZmluZWQsIFtyZXNvbHZlVHlwZSh0eXBlKV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH07XG4gICAgICBSZWFjdCQkMS5jcmVhdGVFbGVtZW50LmlzUGF0Y2hlZEJ5UmVhY3RIb3RMb2FkZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghUmVhY3QkJDEuY3JlYXRlRmFjdG9yeS5pc1BhdGNoZWRCeVJlYWN0SG90TG9hZGVyKSB7XG4gICAgICAvLyBQYXRjaCBSZWFjdC5jcmVhdGVGYWN0b3J5IHRvIHVzZSBwYXRjaGVkIGNyZWF0ZUVsZW1lbnRcbiAgICAgIC8vIGJlY2F1c2UgdGhlIG9yaWdpbmFsIGltcGxlbWVudGF0aW9uIHVzZXMgdGhlIGludGVybmFsLFxuICAgICAgLy8gdW5wYXRjaGVkIFJlYWN0RWxlbWVudC5jcmVhdGVFbGVtZW50XG4gICAgICBSZWFjdCQkMS5jcmVhdGVGYWN0b3J5ID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIGZhY3RvcnkgPSBSZWFjdCQkMS5jcmVhdGVFbGVtZW50LmJpbmQobnVsbCwgdHlwZSk7XG4gICAgICAgIGZhY3RvcnkudHlwZSA9IHR5cGU7XG4gICAgICAgIHJldHVybiBmYWN0b3J5O1xuICAgICAgfTtcbiAgICAgIFJlYWN0JCQxLmNyZWF0ZUZhY3RvcnkuaXNQYXRjaGVkQnlSZWFjdEhvdExvYWRlciA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFSZWFjdCQkMS5DaGlsZHJlbi5vbmx5LmlzUGF0Y2hlZEJ5UmVhY3RIb3RMb2FkZXIpIHtcbiAgICAgIHZhciBvcmlnaW5hbENoaWxkcmVuT25seSA9IFJlYWN0JCQxLkNoaWxkcmVuLm9ubHk7XG4gICAgICAvLyBVc2UgdGhlIHNhbWUgdHJpY2sgYXMgUmVhY3QuY3JlYXRlRWxlbWVudFxuICAgICAgUmVhY3QkJDEuQ2hpbGRyZW4ub25seSA9IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxDaGlsZHJlbk9ubHkoX2V4dGVuZHMoe30sIGNoaWxkcmVuLCB7IHR5cGU6IHJlc29sdmVUeXBlKGNoaWxkcmVuLnR5cGUpIH0pKTtcbiAgICAgIH07XG4gICAgICBSZWFjdCQkMS5DaGlsZHJlbi5vbmx5LmlzUGF0Y2hlZEJ5UmVhY3RIb3RMb2FkZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlYWN0SG90TG9hZGVyLnJlc2V0KCk7XG4gIH0sXG5cblxuICBkaXNhYmxlUHJveHlDcmVhdGlvbjogZmFsc2Vcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5cbmZ1bmN0aW9uIHB1c2hTdGFjayhzdGFjaywgbm9kZSkge1xuICBzdGFjay50eXBlID0gbm9kZS50eXBlO1xuICBzdGFjay5jaGlsZHJlbiA9IFtdO1xuICBzdGFjay5pbnN0YW5jZSA9IHR5cGVvZiBub2RlLnR5cGUgPT09ICdmdW5jdGlvbicgPyBub2RlLnN0YXRlTm9kZSA6IHN0YWNrO1xuXG4gIGlmICghc3RhY2suaW5zdGFuY2UpIHtcbiAgICBzdGFjay5pbnN0YW5jZSA9IHtcbiAgICAgIFNGQ19mYWtlOiBzdGFjay50eXBlLFxuICAgICAgcHJvcHM6IHt9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBzdGFjay50eXBlKHN0YWNrLmluc3RhbmNlLnByb3BzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVGaWJlclN0YWNrKG5vZGUsIHN0YWNrKSB7XG4gIHB1c2hTdGFjayhzdGFjaywgbm9kZSk7XG4gIGlmIChub2RlLmNoaWxkKSB7XG4gICAgdmFyIGNoaWxkID0gbm9kZS5jaGlsZDtcblxuICAgIGRvIHtcbiAgICAgIHZhciBjaGlsZFN0YWNrID0ge307XG4gICAgICBoeWRyYXRlRmliZXJTdGFjayhjaGlsZCwgY2hpbGRTdGFjayk7XG4gICAgICBzdGFjay5jaGlsZHJlbi5wdXNoKGNoaWxkU3RhY2spO1xuICAgICAgY2hpbGQgPSBjaGlsZC5zaWJsaW5nO1xuICAgIH0gd2hpbGUgKGNoaWxkKTtcbiAgfVxufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5mdW5jdGlvbiBwdXNoU3RhdGUoc3RhY2ssIHR5cGUsIGluc3RhbmNlKSB7XG4gIHN0YWNrLnR5cGUgPSB0eXBlO1xuICBzdGFjay5jaGlsZHJlbiA9IFtdO1xuICBzdGFjay5pbnN0YW5jZSA9IGluc3RhbmNlIHx8IHN0YWNrO1xuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlLmlzU3RhdGVsZXNzRnVuY3Rpb25hbFByb3h5KSB7XG4gICAgLy8gSW4gUmVhY3QgMTUgU0ZDIGlzIHdyYXBwZWQgYnkgY29tcG9uZW50LiBXZSBoYXZlIHRvIGRldGVjdCBvdXIgcHJveGllcyBhbmQgY2hhbmdlIHRoZSB3YXkgaXQgd29ya3NcbiAgICBzdGFjay5pbnN0YW5jZSA9IHtcbiAgICAgIFNGQ19mYWtlOiB0eXBlLFxuICAgICAgcHJvcHM6IHt9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0eXBlKHN0YWNrLmluc3RhbmNlLnByb3BzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVMZWdhY3lTdGFjayhub2RlLCBzdGFjaykge1xuICBpZiAobm9kZS5fY3VycmVudEVsZW1lbnQpIHtcbiAgICBwdXNoU3RhdGUoc3RhY2ssIG5vZGUuX2N1cnJlbnRFbGVtZW50LnR5cGUsIG5vZGUuX2luc3RhbmNlIHx8IHN0YWNrKTtcbiAgfVxuXG4gIGlmIChub2RlLl9yZW5kZXJlZENvbXBvbmVudCkge1xuICAgIHZhciBjaGlsZFN0YWNrID0ge307XG4gICAgaHlkcmF0ZUxlZ2FjeVN0YWNrKG5vZGUuX3JlbmRlcmVkQ29tcG9uZW50LCBjaGlsZFN0YWNrKTtcbiAgICBzdGFjay5jaGlsZHJlbi5wdXNoKGNoaWxkU3RhY2spO1xuICB9IGVsc2UgaWYgKG5vZGUuX3JlbmRlcmVkQ2hpbGRyZW4pIHtcbiAgICBPYmplY3Qua2V5cyhub2RlLl9yZW5kZXJlZENoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBjaGlsZFN0YWNrID0ge307XG4gICAgICBoeWRyYXRlTGVnYWN5U3RhY2sobm9kZS5fcmVuZGVyZWRDaGlsZHJlbltrZXldLCBjaGlsZFN0YWNrKTtcbiAgICAgIHN0YWNrLmNoaWxkcmVuLnB1c2goY2hpbGRTdGFjayk7XG4gICAgfSk7XG4gIH1cbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxuZnVuY3Rpb24gZ2V0UmVhY3RTdGFjayhpbnN0YW5jZSkge1xuICB2YXIgcm9vdE5vZGUgPSBnZXRJbnRlcm5hbEluc3RhbmNlKGluc3RhbmNlKTtcbiAgdmFyIHN0YWNrID0ge307XG4gIHZhciBpc0ZpYmVyID0gdHlwZW9mIHJvb3ROb2RlLnRhZyA9PT0gJ251bWJlcic7XG4gIGlmIChpc0ZpYmVyKSB7XG4gICAgaHlkcmF0ZUZpYmVyU3RhY2socm9vdE5vZGUsIHN0YWNrKTtcbiAgfSBlbHNlIHtcbiAgICBoeWRyYXRlTGVnYWN5U3RhY2socm9vdE5vZGUsIHN0YWNrKTtcbiAgfVxuICByZXR1cm4gc3RhY2s7XG59XG5cbi8vIHNvbWUgYGVtcHR5YCBuYW1lcywgUmVhY3QgY2FuIGF1dG9zZXQgZGlzcGxheSBuYW1lIHRvLi4uXG52YXIgVU5ERUZJTkVEX05BTUVTID0ge1xuICBVbmtub3duOiB0cnVlLFxuICBDb21wb25lbnQ6IHRydWVcbn07XG5cbnZhciByZW5kZXJTdGFjayA9IFtdO1xuXG52YXIgc3RhY2tSZXBvcnQgPSBmdW5jdGlvbiBzdGFja1JlcG9ydCgpIHtcbiAgdmFyIHJldiA9IHJlbmRlclN0YWNrLnNsaWNlKCkucmV2ZXJzZSgpO1xuICBsb2dnZXIud2FybignaW4nLCByZXZbMF0ubmFtZSwgcmV2KTtcbn07XG5cbnZhciBhcmVOYW1lc0VxdWFsID0gZnVuY3Rpb24gYXJlTmFtZXNFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiIHx8IFVOREVGSU5FRF9OQU1FU1thXSAmJiBVTkRFRklORURfTkFNRVNbYl07XG59O1xudmFyIGlzUmVhY3RDbGFzcyQxID0gZnVuY3Rpb24gaXNSZWFjdENsYXNzKGZuKSB7XG4gIHJldHVybiBmbiAmJiAhIWZuLnJlbmRlcjtcbn07XG52YXIgaXNGdW5jdGlvbmFsID0gZnVuY3Rpb24gaXNGdW5jdGlvbmFsKGZuKSB7XG4gIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbic7XG59O1xudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGZuKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGZuKTtcbn07XG52YXIgYXNBcnJheSA9IGZ1bmN0aW9uIGFzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheShhKSA/IGEgOiBbYV07XG59O1xudmFyIGdldFR5cGVPZiA9IGZ1bmN0aW9uIGdldFR5cGVPZih0eXBlKSB7XG4gIGlmIChpc1JlYWN0Q2xhc3MkMSh0eXBlKSkgcmV0dXJuICdSZWFjdENvbXBvbmVudCc7XG4gIGlmIChpc0Z1bmN0aW9uYWwodHlwZSkpIHJldHVybiAnU3RhdGVsZXNzRnVuY3Rpb25hbCc7XG4gIHJldHVybiAnRnJhZ21lbnQnOyAvLyA/XG59O1xuXG52YXIgZmlsdGVyTnVsbEFycmF5ID0gZnVuY3Rpb24gZmlsdGVyTnVsbEFycmF5KGEpIHtcbiAgaWYgKCFhKSByZXR1cm4gW107XG4gIHJldHVybiBhLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiAhIXg7XG4gIH0pO1xufTtcblxudmFyIHVuZmxhdHRlbiA9IGZ1bmN0aW9uIHVuZmxhdHRlbihhKSB7XG4gIHJldHVybiBhLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBhKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgIGFjYy5wdXNoLmFwcGx5KGFjYywgdW5mbGF0dGVuKGEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWNjLnB1c2goYSk7XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdKTtcbn07XG5cbnZhciBnZXRFbGVtZW50VHlwZSA9IGZ1bmN0aW9uIGdldEVsZW1lbnRUeXBlKGNoaWxkKSB7XG4gIHJldHVybiBjaGlsZC50eXBlW1VOV1JBUF9QUk9YWV0gPyBjaGlsZC50eXBlW1VOV1JBUF9QUk9YWV0oKSA6IGNoaWxkLnR5cGU7XG59O1xuXG52YXIgaGF2ZVRleHRTaW1pbGFyaXR5ID0gZnVuY3Rpb24gaGF2ZVRleHRTaW1pbGFyaXR5KGEsIGIpIHtcbiAgcmV0dXJuIChcbiAgICAvLyBlcXVhbCBvciBzbGlnaHQgY2hhbmdlZFxuICAgIGEgPT09IGIgfHwgbGV2ZW5zaHRlaW4uZ2V0KGEsIGIpIDwgYS5sZW5ndGggKiAwLjJcbiAgKTtcbn07XG5cbnZhciBlcXVhbENsYXNzZXMgPSBmdW5jdGlvbiBlcXVhbENsYXNzZXMoYSwgYikge1xuICB2YXIgcHJvdG90eXBlQSA9IGEucHJvdG90eXBlO1xuICB2YXIgcHJvdG90eXBlQiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihiLnByb3RvdHlwZSk7XG5cbiAgdmFyIGhpdHMgPSAwO1xuICB2YXIgbWlzc2VzID0gMDtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvdG90eXBlQSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKHR5cGVvZiBwcm90b3R5cGVBW2tleV0gPT09ICdmdW5jdGlvbicgJiYga2V5ICE9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBpZiAoaGF2ZVRleHRTaW1pbGFyaXR5KFN0cmluZyhwcm90b3R5cGVBW2tleV0pLCBTdHJpbmcocHJvdG90eXBlQltrZXldKSkpIHtcbiAgICAgICAgaGl0cysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWlzc2VzKys7XG4gICAgICAgIGlmIChrZXkgPT09ICdyZW5kZXInKSB7XG4gICAgICAgICAgbWlzc2VzKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICAvLyBhbGxvdyB0byBhZGQgb3IgcmVtb3ZlIG9uZSBmdW5jdGlvblxuICByZXR1cm4gaGl0cyA+IDAgJiYgbWlzc2VzIDw9IDE7XG59O1xuXG52YXIgaXNTd2FwcGFibGUgPSBmdW5jdGlvbiBpc1N3YXBwYWJsZShhLCBiKSB7XG4gIC8vIGJvdGggYXJlIHJlZ2lzdGVyZWQgY29tcG9uZW50c1xuICBpZiAoZ2V0SWRCeVR5cGUoYikgJiYgZ2V0SWRCeVR5cGUoYSkgPT09IGdldElkQnlUeXBlKGIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGdldFR5cGVPZihhKSAhPT0gZ2V0VHlwZU9mKGIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChpc1JlYWN0Q2xhc3MkMShhLnByb3RvdHlwZSkpIHtcbiAgICByZXR1cm4gYXJlTmFtZXNFcXVhbChnZXRDb21wb25lbnREaXNwbGF5TmFtZShhKSwgZ2V0Q29tcG9uZW50RGlzcGxheU5hbWUoYikpICYmIGVxdWFsQ2xhc3NlcyhhLCBiKTtcbiAgfVxuXG4gIGlmIChpc0Z1bmN0aW9uYWwoYSkpIHtcbiAgICB2YXIgbmFtZUEgPSBnZXRDb21wb25lbnREaXNwbGF5TmFtZShhKTtcbiAgICByZXR1cm4gYXJlTmFtZXNFcXVhbChuYW1lQSwgZ2V0Q29tcG9uZW50RGlzcGxheU5hbWUoYikpICYmIG5hbWVBICE9PSAnQ29tcG9uZW50JyB8fCBoYXZlVGV4dFNpbWlsYXJpdHkoU3RyaW5nKGEpLCBTdHJpbmcoYikpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoY29tcG9uZW50KSB7XG4gIGlmICghY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmIChpc1JlYWN0Q2xhc3MkMShjb21wb25lbnQpKSB7XG4gICAgLy8gbm90IGNhbGxpbmcgcmVhbCByZW5kZXIgbWV0aG9kIHRvIHByZXZlbnQgY2FsbCByZWN1cnNpb24uXG4gICAgLy8gc3RhdGVsZXNzIGNvbXBvbmVudHMgZG9lcyBub3QgaGF2ZSBob3RDb21wb25lbnRSZW5kZXJcbiAgICByZXR1cm4gY29tcG9uZW50LmhvdENvbXBvbmVudFJlbmRlciA/IGNvbXBvbmVudC5ob3RDb21wb25lbnRSZW5kZXIoKSA6IGNvbXBvbmVudC5yZW5kZXIoKTtcbiAgfVxuICBpZiAoaXNBcnJheShjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5tYXAocmVuZGVyKTtcbiAgfVxuICBpZiAoY29tcG9uZW50LmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5jaGlsZHJlbjtcbiAgfVxuXG4gIHJldHVybiBbXTtcbn07XG5cbnZhciBOT19DSElMRFJFTiA9IHsgY2hpbGRyZW46IFtdIH07XG52YXIgbWFwQ2hpbGRyZW4gPSBmdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgaW5zdGFuY2VzKSB7XG4gIHJldHVybiB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgIGlmICgodHlwZW9mIGNoaWxkID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihjaGlsZCkpICE9PSAnb2JqZWN0JyB8fCBjaGlsZC5pc01lcmdlZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG4gICAgICB2YXIgaW5zdGFuY2VMaW5lID0gaW5zdGFuY2VzW2luZGV4XSB8fCB7fTtcbiAgICAgIHZhciBvbGRDaGlsZHJlbiA9IGFzQXJyYXkoaW5zdGFuY2VMaW5lLmNoaWxkcmVuIHx8IFtdKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgICAgdHlwZTogbnVsbFxuICAgICAgICB9LCBtYXBDaGlsZHJlbihjaGlsZCwgb2xkQ2hpbGRyZW4pKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld0NoaWxkcmVuID0gYXNBcnJheShjaGlsZC5wcm9wcyAmJiBjaGlsZC5wcm9wcy5jaGlsZHJlbiB8fCBjaGlsZC5jaGlsZHJlbiB8fCBbXSk7XG4gICAgICB2YXIgbmV4dENoaWxkcmVuID0gY2hpbGQudHlwZSAhPT0gJ2Z1bmN0aW9uJyAmJiBvbGRDaGlsZHJlbi5sZW5ndGggJiYgbWFwQ2hpbGRyZW4obmV3Q2hpbGRyZW4sIG9sZENoaWxkcmVuKTtcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgbmV4dFByb3BzOiBjaGlsZC5wcm9wcyxcbiAgICAgICAgaXNNZXJnZWQ6IHRydWVcbiAgICAgIH0sIGluc3RhbmNlTGluZSwgbmV4dENoaWxkcmVuIHx8IHt9LCB7XG4gICAgICAgIHR5cGU6IGNoaWxkLnR5cGVcbiAgICAgIH0pO1xuICAgIH0pXG4gIH07XG59O1xuXG52YXIgbWVyZ2VJbmplY3QgPSBmdW5jdGlvbiBtZXJnZUluamVjdChhLCBiLCBpbnN0YW5jZSkge1xuICBpZiAoYSAmJiAhQXJyYXkuaXNBcnJheShhKSkge1xuICAgIHJldHVybiBtZXJnZUluamVjdChbYV0sIGIpO1xuICB9XG4gIGlmIChiICYmICFBcnJheS5pc0FycmF5KGIpKSB7XG4gICAgcmV0dXJuIG1lcmdlSW5qZWN0KGEsIFtiXSk7XG4gIH1cblxuICBpZiAoIWEgfHwgIWIpIHtcbiAgICByZXR1cm4gTk9fQ0hJTERSRU47XG4gIH1cbiAgaWYgKGEubGVuZ3RoID09PSBiLmxlbmd0aCkge1xuICAgIHJldHVybiBtYXBDaGlsZHJlbihhLCBiKTtcbiAgfVxuXG4gIC8vIGluIHNvbWUgY2FzZXMgKG5vIGNvbmZpZGVuY2UgaGVyZSkgQiBjb3VsZCBjb250YWluIEEgZXhjZXB0IG51bGwgY2hpbGRyZW5cbiAgLy8gaW4gc29tZSBjYXNlcyAtIGNvdWxkIG5vdC5cbiAgLy8gdGhpcyBkZXBlbmRzIG9uIFJlYWN0IHZlcnNpb24gYW5kIHRoZSB3YXkgeW91IGJ1aWxkIGNvbXBvbmVudC5cblxuICB2YXIgbm9uTnVsbEEgPSBmaWx0ZXJOdWxsQXJyYXkoYSk7XG4gIGlmIChub25OdWxsQS5sZW5ndGggPT09IGIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG1hcENoaWxkcmVuKG5vbk51bGxBLCBiKTtcbiAgfVxuXG4gIHZhciBmbGF0QSA9IHVuZmxhdHRlbihub25OdWxsQSk7XG4gIHZhciBmbGF0QiA9IHVuZmxhdHRlbihiKTtcbiAgaWYgKGZsYXRBLmxlbmd0aCA9PT0gZmxhdEIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG1hcENoaWxkcmVuKGZsYXRBLCBmbGF0Qik7XG4gIH1cbiAgaWYgKGZsYXRCLmxlbmd0aCA9PT0gMCAmJiBmbGF0QS5sZW5ndGggPT09IDEgJiYgX3R5cGVvZihmbGF0QVswXSkgIT09ICdvYmplY3QnKSA7IGVsc2Uge1xuICAgIGxvZ2dlci53YXJuKCdSZWFjdC1ob3QtbG9hZGVyOiB1bmFibGUgdG8gbWVyZ2UgJywgYSwgJ2FuZCBjaGlsZHJlbiBvZiAnLCBpbnN0YW5jZSk7XG4gICAgc3RhY2tSZXBvcnQoKTtcbiAgfVxuICByZXR1cm4gTk9fQ0hJTERSRU47XG59O1xuXG52YXIgdHJhbnNmb3JtRmxvd05vZGUgPSBmdW5jdGlvbiB0cmFuc2Zvcm1GbG93Tm9kZShmbG93KSB7XG4gIHJldHVybiBmbG93LnJlZHVjZShmdW5jdGlvbiAoYWNjLCBub2RlKSB7XG4gICAgaWYgKGlzRnJhZ21lbnROb2RlKG5vZGUpICYmIG5vZGUucHJvcHMgJiYgbm9kZS5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChhY2MsIGZpbHRlck51bGxBcnJheShub2RlLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfVxuICAgIHJldHVybiBbXS5jb25jYXQoYWNjLCBbbm9kZV0pO1xuICB9LCBbXSk7XG59O1xuXG52YXIgc2NoZWR1bGVkVXBkYXRlcyA9IFtdO1xudmFyIHNjaGVkdWxlZFVwZGF0ZSA9IDA7XG5cbnZhciBmbHVzaFNjaGVkdWxlZFVwZGF0ZXMgPSBmdW5jdGlvbiBmbHVzaFNjaGVkdWxlZFVwZGF0ZXMoKSB7XG4gIHZhciBpbnN0YW5jZXMgPSBzY2hlZHVsZWRVcGRhdGVzO1xuICBzY2hlZHVsZWRVcGRhdGVzID0gW107XG4gIHNjaGVkdWxlZFVwZGF0ZSA9IDA7XG4gIGluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVtQUk9YWV9JU19NT1VOVEVEXSAmJiB1cGRhdGVJbnN0YW5jZShpbnN0YW5jZSk7XG4gIH0pO1xufTtcblxudmFyIHVuc2NoZWR1bGVVcGRhdGUgPSBmdW5jdGlvbiB1bnNjaGVkdWxlVXBkYXRlKGluc3RhbmNlKSB7XG4gIHNjaGVkdWxlZFVwZGF0ZXMgPSBzY2hlZHVsZWRVcGRhdGVzLmZpbHRlcihmdW5jdGlvbiAoaW5zdCkge1xuICAgIHJldHVybiBpbnN0ICE9PSBpbnN0YW5jZTtcbiAgfSk7XG59O1xuXG52YXIgc2NoZWR1bGVJbnN0YW5jZVVwZGF0ZSA9IGZ1bmN0aW9uIHNjaGVkdWxlSW5zdGFuY2VVcGRhdGUoaW5zdGFuY2UpIHtcbiAgc2NoZWR1bGVkVXBkYXRlcy5wdXNoKGluc3RhbmNlKTtcbiAgaWYgKCFzY2hlZHVsZWRVcGRhdGUpIHtcbiAgICBzY2hlZHVsZWRVcGRhdGUgPSBzZXRUaW1lb3V0KGZsdXNoU2NoZWR1bGVkVXBkYXRlcyk7XG4gIH1cbn07XG5cbnZhciBob3RSZXBsYWNlbWVudFJlbmRlciA9IGZ1bmN0aW9uIGhvdFJlcGxhY2VtZW50UmVuZGVyKGluc3RhbmNlLCBzdGFjaykge1xuICBpZiAoaXNSZWFjdENsYXNzJDEoaW5zdGFuY2UpKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRFbGVtZW50VHlwZShzdGFjayk7XG4gICAgcmVuZGVyU3RhY2sucHVzaCh7XG4gICAgICBuYW1lOiBnZXRDb21wb25lbnREaXNwbGF5TmFtZSh0eXBlKSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBwcm9wczogc3RhY2suaW5zdGFuY2UucHJvcHNcbiAgICB9KTtcbiAgfVxuICB2YXIgZmxvdyA9IHRyYW5zZm9ybUZsb3dOb2RlKGZpbHRlck51bGxBcnJheShhc0FycmF5KHJlbmRlcihpbnN0YW5jZSkpKSk7XG5cbiAgdmFyIGNoaWxkcmVuID0gc3RhY2suY2hpbGRyZW47XG5cblxuICBmbG93LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgIHZhciBzdGFja0NoaWxkID0gY2hpbGRyZW5baW5kZXhdO1xuICAgIHZhciBuZXh0ID0gZnVuY3Rpb24gbmV4dChpbnN0YW5jZSkge1xuICAgICAgLy8gY29weSBvdmVyIHByb3BzIGFzIGxvbmcgbmV3IGNvbXBvbmVudCBtYXkgYmUgaGlkZGVuIGluc2lkZSB0aGVtXG4gICAgICAvLyBjaGlsZCBkb2VzIG5vdCBoYXZlIGFsbCBwcm9wcywgYXMgbG9uZyBzb21lIG9mIHRoZW0gY2FuIGJlIGNhbGN1bGF0ZWQgb24gY29tcG9uZW50TW91bnQuXG4gICAgICB2YXIgbmV4dFByb3BzID0gX2V4dGVuZHMoe30sIGluc3RhbmNlLnByb3BzLCBjaGlsZC5uZXh0UHJvcHMgfHwge30sIGNoaWxkLnByb3BzIHx8IHt9KTtcblxuICAgICAgaWYgKGlzUmVhY3RDbGFzcyQxKGluc3RhbmNlKSAmJiBpbnN0YW5jZS5jb21wb25lbnRXaWxsVXBkYXRlKSB7XG4gICAgICAgIC8vIEZvcmNlLXJlZnJlc2ggY29tcG9uZW50IChieXBhc3MgcmVkdXggcmVuZGVyZWRDb21wb25lbnQpXG4gICAgICAgIGluc3RhbmNlLmNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBpbnN0YW5jZS5zdGF0ZSk7XG4gICAgICB9XG4gICAgICBpbnN0YW5jZS5wcm9wcyA9IG5leHRQcm9wcztcbiAgICAgIGhvdFJlcGxhY2VtZW50UmVuZGVyKGluc3RhbmNlLCBzdGFja0NoaWxkKTtcbiAgICB9O1xuXG4gICAgLy8gdGV4dCBub2RlXG4gICAgaWYgKCh0eXBlb2YgY2hpbGQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGNoaWxkKSkgIT09ICdvYmplY3QnIHx8ICFzdGFja0NoaWxkIHx8ICFzdGFja0NoaWxkLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF90eXBlb2YoY2hpbGQudHlwZSkgIT09IF90eXBlb2Yoc3RhY2tDaGlsZC50eXBlKSkge1xuICAgICAgLy8gUG9ydGFscyBjb3VsZCBnZW5lcmF0ZSB1bmRlZmluZWQgIT09IG51bGxcbiAgICAgIGlmIChjaGlsZC50eXBlICYmIHN0YWNrQ2hpbGQudHlwZSkge1xuICAgICAgICBsb2dnZXIud2FybignUmVhY3QtaG90LWxvYWRlcjogZ290ICcsIGNoaWxkLnR5cGUsICdpbnN0ZWFkIG9mJywgc3RhY2tDaGlsZC50eXBlKTtcbiAgICAgICAgc3RhY2tSZXBvcnQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNoaWxkLnR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5leHQoXG4gICAgICAvLyBtb3ZlIHR5cGVzIGZyb20gcmVuZGVyIHRvIHRoZSBpbnN0YW5jZXMgb2YgaHlkcmF0ZWQgdHJlZVxuICAgICAgbWVyZ2VJbmplY3QoYXNBcnJheShjaGlsZC5wcm9wcyA/IGNoaWxkLnByb3BzLmNoaWxkcmVuIDogY2hpbGQuY2hpbGRyZW4pLCBzdGFja0NoaWxkLmluc3RhbmNlLmNoaWxkcmVuLCBzdGFja0NoaWxkLmluc3RhbmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVud3JhcCBwcm94eVxuICAgICAgdmFyIGNoaWxkVHlwZSA9IGdldEVsZW1lbnRUeXBlKGNoaWxkKTtcbiAgICAgIGlmICghc3RhY2tDaGlsZC50eXBlW1BST1hZX0tFWV0pIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBsb2dnZXIuZXJyb3IoJ1JlYWN0LWhvdC1sb2FkZXI6IGZhdGFsIGVycm9yIGNhdXNlZCBieSAnLCBzdGFja0NoaWxkLnR5cGUsICcgLSBubyBpbnN0cnVtZW50YXRpb24gZm91bmQuICcsICdQbGVhc2UgcmVxdWlyZSByZWFjdC1ob3QtbG9hZGVyIGJlZm9yZSBSZWFjdC4gTW9yZSBpbiB0cm91Ymxlc2hvb3RpbmcuJyk7XG4gICAgICAgIHN0YWNrUmVwb3J0KCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QtaG90LWxvYWRlcjogd3JvbmcgY29uZmlndXJhdGlvbicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQudHlwZSA9PT0gc3RhY2tDaGlsZC50eXBlKSB7XG4gICAgICAgIG5leHQoc3RhY2tDaGlsZC5pbnN0YW5jZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzU3dhcHBhYmxlKGNoaWxkVHlwZSwgc3RhY2tDaGlsZC50eXBlKSkge1xuICAgICAgICAvLyB0aGV5IGFyZSBib3RoIHJlZ2lzdGVyZWQsIG9yIGhhdmUgZXF1YWwgY29kZS9kaXNwbGF5bmFtZS9zaWduYXR1cmVcblxuICAgICAgICAvLyB1cGRhdGUgcHJveHkgdXNpbmcgaW50ZXJuYWwgUFJPWFlfS0VZXG4gICAgICAgIHVwZGF0ZVByb3h5QnlJZChzdGFja0NoaWxkLnR5cGVbUFJPWFlfS0VZXSwgY2hpbGRUeXBlKTtcblxuICAgICAgICBuZXh0KHN0YWNrQ2hpbGQuaW5zdGFuY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nZ2VyLndhcm4oJ1JlYWN0LWhvdC1sb2FkZXI6IGEgJyArIGdldENvbXBvbmVudERpc3BsYXlOYW1lKGNoaWxkVHlwZSkgKyAnIHdhcyBmb3VuZCB3aGVyZSBhICcgKyBnZXRDb21wb25lbnREaXNwbGF5TmFtZShzdGFja0NoaWxkKSArICcgd2FzIGV4cGVjdGVkLlxcbiAgICAgICAgICAnICsgY2hpbGRUeXBlKTtcbiAgICAgICAgc3RhY2tSZXBvcnQoKTtcbiAgICAgIH1cblxuICAgICAgc2NoZWR1bGVJbnN0YW5jZVVwZGF0ZShzdGFja0NoaWxkLmluc3RhbmNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChpc1JlYWN0Q2xhc3MkMShpbnN0YW5jZSkpIHtcbiAgICByZW5kZXJTdGFjay5wb3AoKTtcbiAgfVxufTtcblxudmFyIGhvdFJlcGxhY2VtZW50UmVuZGVyJDEgPSAoZnVuY3Rpb24gKGluc3RhbmNlLCBzdGFjaykge1xuICB0cnkge1xuICAgIC8vIGRpc2FibGUgcmVjb25jaWxlciB0byBwcmV2ZW50IHVwY29taW5nIGNvbXBvbmVudHMgZnJvbSBwcm94eWluZy5cbiAgICByZWFjdEhvdExvYWRlci5kaXNhYmxlUHJveHlDcmVhdGlvbiA9IHRydWU7XG4gICAgcmVuZGVyU3RhY2sgPSBbXTtcbiAgICBob3RSZXBsYWNlbWVudFJlbmRlcihpbnN0YW5jZSwgc3RhY2spO1xuICB9IGNhdGNoIChlKSB7XG4gICAgbG9nZ2VyLndhcm4oJ1JlYWN0LWhvdC1sb2FkZXI6IHJlY29uY2lsYXRpb24gZmFpbGVkIGR1ZSB0byBlcnJvcicsIGUpO1xuICB9IGZpbmFsbHkge1xuICAgIHJlYWN0SG90TG9hZGVyLmRpc2FibGVQcm94eUNyZWF0aW9uID0gZmFsc2U7XG4gIH1cbn0pO1xuXG52YXIgcmVjb25jaWxlSG90UmVwbGFjZW1lbnQgPSBmdW5jdGlvbiByZWNvbmNpbGVIb3RSZXBsYWNlbWVudChSZWFjdEluc3RhbmNlKSB7XG4gIHJldHVybiBob3RSZXBsYWNlbWVudFJlbmRlciQxKFJlYWN0SW5zdGFuY2UsIGdldFJlYWN0U3RhY2soUmVhY3RJbnN0YW5jZSkpO1xufTtcblxudmFyIFJFTkRFUkVEX0dFTkVSQVRJT04gPSAnUkVBQ1RfSE9UX0xPQURFUl9SRU5ERVJFRF9HRU5FUkFUSU9OJztcblxudmFyIHJlbmRlclJlY29uY2lsZXIgPSBmdW5jdGlvbiByZW5kZXJSZWNvbmNpbGVyKHRhcmdldCwgZm9yY2UpIHtcbiAgLy8gd2UgYXJlIG5vdCBpbnNpZGUgcGFyZW50IHJlY29uY2lsYXRpb25cbiAgdmFyIGN1cnJlbnRHZW5lcmF0aW9uID0gZ2V0KCk7XG4gIHZhciBjb21wb25lbnRHZW5lcmF0aW9uID0gdGFyZ2V0W1JFTkRFUkVEX0dFTkVSQVRJT05dO1xuXG4gIHRhcmdldFtSRU5ERVJFRF9HRU5FUkFUSU9OXSA9IGN1cnJlbnRHZW5lcmF0aW9uO1xuXG4gIGlmICghcmVhY3RIb3RMb2FkZXIuZGlzYWJsZVByb3h5Q3JlYXRpb24pIHtcbiAgICBpZiAoKGNvbXBvbmVudEdlbmVyYXRpb24gfHwgZm9yY2UpICYmIGNvbXBvbmVudEdlbmVyYXRpb24gIT09IGN1cnJlbnRHZW5lcmF0aW9uKSB7XG4gICAgICByZWNvbmNpbGVIb3RSZXBsYWNlbWVudCh0YXJnZXQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmZ1bmN0aW9uIGFzeW5jUmVjb25jaWxlZFJlbmRlcih0YXJnZXQpIHtcbiAgcmVuZGVyUmVjb25jaWxlcih0YXJnZXQsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcHJveHlXcmFwcGVyKGVsZW1lbnQpIHtcbiAgLy8gcG9zdCB3cmFwIG9uIHBvc3QgcmVuZGVyXG4gIGlmICghcmVhY3RIb3RMb2FkZXIuZGlzYWJsZVByb3h5Q3JlYXRpb24pIHtcbiAgICB1bnNjaGVkdWxlVXBkYXRlKHRoaXMpO1xuICB9XG5cbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gZWxlbWVudC5tYXAocHJveHlXcmFwcGVyKTtcbiAgfVxuICBpZiAodHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBwcm94eSA9IGdldFByb3h5QnlUeXBlKGVsZW1lbnQudHlwZSk7XG4gICAgaWYgKHByb3h5KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGVsZW1lbnQsIHtcbiAgICAgICAgdHlwZTogcHJveHkuZ2V0KClcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuc2V0U3RhbmRJbk9wdGlvbnMoe1xuICBjb21wb25lbnRXaWxsUmVuZGVyOiBhc3luY1JlY29uY2lsZWRSZW5kZXIsXG4gIGNvbXBvbmVudERpZFJlbmRlcjogcHJveHlXcmFwcGVyLFxuICBjb21wb25lbnREaWRVcGRhdGU6IGZsdXNoU2NoZWR1bGVkVXBkYXRlc1xufSk7XG5cbnZhciBBcHBDb250YWluZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBpbmhlcml0cyhBcHBDb250YWluZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFwcENvbnRhaW5lcigpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQXBwQ29udGFpbmVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tdW51c2VkLXN0YXRlXG4gICAgICBnZW5lcmF0aW9uOiAwXG4gICAgfSwgX3RlbXApLCBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIEFwcENvbnRhaW5lci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAocHJldlN0YXRlLmdlbmVyYXRpb24gIT09IGdldCgpKSB7XG4gICAgICAvLyBIb3QgcmVsb2FkIGlzIGhhcHBlbmluZy5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICBnZW5lcmF0aW9uOiBnZXQoKVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgQXBwQ29udGFpbmVyLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAvLyBEb24ndCB1cGRhdGUgdGhlIGNvbXBvbmVudCBpZiB0aGUgc3RhdGUgaGFkIGFuIGVycm9yIGFuZCBzdGlsbCBoYXMgb25lLlxuICAgIC8vIFRoaXMgYWxsb3dzIHRvIGJyZWFrIGFuIGluZmluaXRlIGxvb3Agb2YgZXJyb3IgLT4gcmVuZGVyIC0+IGVycm9yIC0+IHJlbmRlclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nYWVhcm9uL3JlYWN0LWhvdC1sb2FkZXIvaXNzdWVzLzY5NlxuICAgIGlmIChwcmV2U3RhdGUuZXJyb3IgJiYgdGhpcy5zdGF0ZS5lcnJvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIEFwcENvbnRhaW5lci5wcm90b3R5cGUuY29tcG9uZW50RGlkQ2F0Y2ggPSBmdW5jdGlvbiBjb21wb25lbnREaWRDYXRjaChlcnJvcikge1xuICAgIGxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBlcnJvciB9KTtcbiAgfTtcblxuICBBcHBDb250YWluZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgZXJyb3IgPSB0aGlzLnN0YXRlLmVycm9yO1xuXG5cbiAgICBpZiAodGhpcy5wcm9wcy5lcnJvclJlcG9ydGVyICYmIGVycm9yKSB7XG4gICAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmVycm9yUmVwb3J0ZXIsIHsgZXJyb3I6IGVycm9yIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdF9fZGVmYXVsdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBBcHBDb250YWluZXI7XG59KFJlYWN0X19kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkFwcENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBmdW5jdGlvbiBjaGlsZHJlbihwcm9wcykge1xuICAgIGlmIChSZWFjdF9fZGVmYXVsdC5DaGlsZHJlbi5jb3VudChwcm9wcy5jaGlsZHJlbikgIT09IDEpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvcCBcImNoaWxkcmVuXCIgc3VwcGxpZWQgdG8gQXBwQ29udGFpbmVyLiAnICsgJ0V4cGVjdGVkIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgd2l0aCB5b3VyIGFwcOKAmXMgcm9vdCBjb21wb25lbnQsIGUuZy4gPEFwcCAvPi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LFxuXG4gIGVycm9yUmVwb3J0ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pXG59O1xuXG5yZWFjdExpZmVjeWNsZXNDb21wYXQucG9seWZpbGwoQXBwQ29udGFpbmVyKTtcblxudmFyIG9wZW5lZE1vZHVsZXMgPSB7fTtcblxudmFyIGhvdE1vZHVsZXMgPSB7fTtcblxudmFyIGNyZWF0ZUhvdE1vZHVsZSA9IGZ1bmN0aW9uIGNyZWF0ZUhvdE1vZHVsZSgpIHtcbiAgcmV0dXJuIHsgaW5zdGFuY2VzOiBbXSwgdXBkYXRlVGltZW91dDogMCB9O1xufTtcblxudmFyIGhvdE1vZHVsZSA9IGZ1bmN0aW9uIGhvdE1vZHVsZShtb2R1bGVJZCkge1xuICBpZiAoIWhvdE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gICAgaG90TW9kdWxlc1ttb2R1bGVJZF0gPSBjcmVhdGVIb3RNb2R1bGUoKTtcbiAgfVxuICByZXR1cm4gaG90TW9kdWxlc1ttb2R1bGVJZF07XG59O1xuXG52YXIgaXNPcGVuZWQgPSBmdW5jdGlvbiBpc09wZW5lZChzb3VyY2VNb2R1bGUpIHtcbiAgcmV0dXJuIHNvdXJjZU1vZHVsZSAmJiAhIW9wZW5lZE1vZHVsZXNbc291cmNlTW9kdWxlLmlkXTtcbn07XG5cbnZhciBlbnRlciA9IGZ1bmN0aW9uIGVudGVyKHNvdXJjZU1vZHVsZSkge1xuICBpZiAoc291cmNlTW9kdWxlICYmIHNvdXJjZU1vZHVsZS5pZCkge1xuICAgIG9wZW5lZE1vZHVsZXNbc291cmNlTW9kdWxlLmlkXSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbG9nZ2VyLndhcm4oJ1JlYWN0LWhvdC1sb2FkZXI6IG5vIGBtb2R1bGVgIHZhcmlhYmxlIGZvdW5kLiBEbyB5b3Ugc2hhZG93IHN5c3RlbSB2YXJpYWJsZT8nKTtcbiAgfVxufTtcblxudmFyIGxlYXZlID0gZnVuY3Rpb24gbGVhdmUoc291cmNlTW9kdWxlKSB7XG4gIGlmIChzb3VyY2VNb2R1bGUgJiYgc291cmNlTW9kdWxlLmlkKSB7XG4gICAgZGVsZXRlIG9wZW5lZE1vZHVsZXNbc291cmNlTW9kdWxlLmlkXTtcbiAgfVxufTtcblxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlLCBuby11bmRlZiAqL1xudmFyIHJlcXVpcmVJbmRpcmVjdCA9IHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19yZXF1aXJlX18gOiByZXF1aXJlO1xuLyogZXNsaW50LWVuYWJsZSAqL1xuXG52YXIgY3JlYXRlSG9jID0gZnVuY3Rpb24gY3JlYXRlSG9jKFNvdXJjZUNvbXBvbmVudCwgVGFyZ2V0Q29tcG9uZW50KSB7XG4gIGhvaXN0Tm9uUmVhY3RTdGF0aWMoVGFyZ2V0Q29tcG9uZW50LCBTb3VyY2VDb21wb25lbnQpO1xuICBUYXJnZXRDb21wb25lbnQuZGlzcGxheU5hbWUgPSAnSG90RXhwb3J0ZWQnICsgZ2V0Q29tcG9uZW50RGlzcGxheU5hbWUoU291cmNlQ29tcG9uZW50KTtcbiAgcmV0dXJuIFRhcmdldENvbXBvbmVudDtcbn07XG5cbnZhciBtYWtlSG90RXhwb3J0ID0gZnVuY3Rpb24gbWFrZUhvdEV4cG9ydChzb3VyY2VNb2R1bGUpIHtcbiAgdmFyIHVwZGF0ZUluc3RhbmNlcyA9IGZ1bmN0aW9uIHVwZGF0ZUluc3RhbmNlcygpIHtcbiAgICB2YXIgbW9kdWxlID0gaG90TW9kdWxlKHNvdXJjZU1vZHVsZS5pZCk7XG4gICAgY2xlYXJUaW1lb3V0KG1vZHVsZS51cGRhdGVUaW1lb3V0KTtcbiAgICBtb2R1bGUudXBkYXRlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWlyZUluZGlyZWN0KHNvdXJjZU1vZHVsZS5pZCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGp1c3Qgc3dhbGxvd1xuICAgICAgfVxuICAgICAgbW9kdWxlLmluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0KSB7XG4gICAgICAgIHJldHVybiBpbnN0LmZvcmNlVXBkYXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBpZiAoc291cmNlTW9kdWxlLmhvdCkge1xuICAgIC8vIE1hcmsgYXMgc2VsZi1hY2NlcHRlZCBmb3IgV2VicGFja1xuICAgIC8vIFVwZGF0ZSBpbnN0YW5jZXMgZm9yIFBhcmNlbFxuICAgIHNvdXJjZU1vZHVsZS5ob3QuYWNjZXB0KHVwZGF0ZUluc3RhbmNlcyk7XG5cbiAgICAvLyBXZWJwYWNrIHdheVxuICAgIGlmIChzb3VyY2VNb2R1bGUuaG90LmFkZFN0YXR1c0hhbmRsZXIpIHtcbiAgICAgIGlmIChzb3VyY2VNb2R1bGUuaG90LnN0YXR1cygpID09PSAnaWRsZScpIHtcbiAgICAgICAgc291cmNlTW9kdWxlLmhvdC5hZGRTdGF0dXNIYW5kbGVyKGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSAnYXBwbHknKSB7XG4gICAgICAgICAgICB1cGRhdGVJbnN0YW5jZXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIGhvdCA9IGZ1bmN0aW9uIGhvdChzb3VyY2VNb2R1bGUpIHtcbiAgaWYgKCFzb3VyY2VNb2R1bGUgfHwgIXNvdXJjZU1vZHVsZS5pZCkge1xuICAgIC8vIHRoaXMgaXMgZmF0YWxcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0LWhvdC1sb2FkZXI6IGBob3RgIGNvdWxkIG5vdCBmaW5kIHRoZSBgaWRgIHByb3BlcnR5IGluIHRoZSBgbW9kdWxlYCB5b3UgaGF2ZSBwcm92aWRlZCcpO1xuICB9XG4gIHZhciBtb2R1bGVJZCA9IHNvdXJjZU1vZHVsZS5pZDtcbiAgdmFyIG1vZHVsZSA9IGhvdE1vZHVsZShtb2R1bGVJZCk7XG4gIG1ha2VIb3RFeHBvcnQoc291cmNlTW9kdWxlKTtcblxuICAvLyBUT0RPOiBFbnN1cmUgdGhhdCBhbGwgZXhwb3J0cyBmcm9tIHRoaXMgZmlsZSBhcmUgcmVhY3QgY29tcG9uZW50cy5cblxuICByZXR1cm4gZnVuY3Rpb24gKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICAvLyByZWdpc3RlciBwcm94eSBmb3Igd3JhcHBlZCBjb21wb25lbnRcbiAgICByZWFjdEhvdExvYWRlci5yZWdpc3RlcihXcmFwcGVkQ29tcG9uZW50LCBnZXRDb21wb25lbnREaXNwbGF5TmFtZShXcmFwcGVkQ29tcG9uZW50KSwgJ1JITCcgKyBtb2R1bGVJZCk7XG5cbiAgICByZXR1cm4gY3JlYXRlSG9jKFdyYXBwZWRDb21wb25lbnQsIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBpbmhlcml0cyhFeHBvcnRlZENvbXBvbmVudCwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIEV4cG9ydGVkQ29tcG9uZW50KCkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBFeHBvcnRlZENvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9XG5cbiAgICAgIEV4cG9ydGVkQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBtb2R1bGUuaW5zdGFuY2VzLnB1c2godGhpcyk7XG4gICAgICB9O1xuXG4gICAgICBFeHBvcnRlZENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGlzT3BlbmVkKHNvdXJjZU1vZHVsZSkpIHtcbiAgICAgICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgICAgIGxvZ2dlci5lcnJvcignUmVhY3QtaG90LWxvYWRlcjogRGV0ZWN0ZWQgQXBwQ29udGFpbmVyIHVubW91bnQgb24gbW9kdWxlIFxcJycgKyBtb2R1bGVJZCArICdcXCcgdXBkYXRlLlxcbicgKyAoJ0RpZCB5b3UgdXNlIFwiaG90KCcgKyBjb21wb25lbnROYW1lICsgJylcIiBhbmQgXCJSZWFjdERPTS5yZW5kZXIoKVwiIGluIHRoZSBzYW1lIGZpbGU/XFxuJykgKyAoJ1wiaG90KCcgKyBjb21wb25lbnROYW1lICsgJylcIiBzaGFsbCBvbmx5IGJlIHVzZWQgYXMgZXhwb3J0LlxcbicpICsgJ1BsZWFzZSByZWZlciB0byBcIkdldHRpbmcgU3RhcnRlZFwiIChodHRwczovL2dpdGh1Yi5jb20vZ2FlYXJvbi9yZWFjdC1ob3QtbG9hZGVyLykuJyk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmluc3RhbmNlcyA9IG1vZHVsZS5pbnN0YW5jZXMuZmlsdGVyKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgcmV0dXJuIGEgIT09IF90aGlzMjtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBFeHBvcnRlZENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBBcHBDb250YWluZXIsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIHRoaXMucHJvcHMpXG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gRXhwb3J0ZWRDb21wb25lbnQ7XG4gICAgfShSZWFjdC5Db21wb25lbnQpKTtcbiAgfTtcbn07XG5cbnZhciBnZXRQcm94eU9yVHlwZSA9IGZ1bmN0aW9uIGdldFByb3h5T3JUeXBlKHR5cGUpIHtcbiAgdmFyIHByb3h5ID0gZ2V0UHJveHlCeVR5cGUodHlwZSk7XG4gIHJldHVybiBwcm94eSA/IHByb3h5LmdldCgpIDogdHlwZTtcbn07XG5cbnZhciBhcmVDb21wb25lbnRzRXF1YWwgPSBmdW5jdGlvbiBhcmVDb21wb25lbnRzRXF1YWwoYSwgYikge1xuICByZXR1cm4gZ2V0UHJveHlPclR5cGUoYSkgPT09IGdldFByb3h5T3JUeXBlKGIpO1xufTtcblxudmFyIHNldENvbmZpZyA9IGZ1bmN0aW9uIHNldENvbmZpZyhjb25maWcpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oY29uZmlndXJhdGlvbiwgY29uZmlnKTtcbn07XG5cbnJlYWN0SG90TG9hZGVyLnBhdGNoKFJlYWN0X19kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcmVhY3RIb3RMb2FkZXI7XG5leHBvcnRzLkFwcENvbnRhaW5lciA9IEFwcENvbnRhaW5lcjtcbmV4cG9ydHMuaG90ID0gaG90O1xuZXhwb3J0cy5lbnRlck1vZHVsZSA9IGVudGVyO1xuZXhwb3J0cy5sZWF2ZU1vZHVsZSA9IGxlYXZlO1xuZXhwb3J0cy5hcmVDb21wb25lbnRzRXF1YWwgPSBhcmVDb21wb25lbnRzRXF1YWw7XG5leHBvcnRzLnNldENvbmZpZyA9IHNldENvbmZpZztcbiIsIid1c2Ugc3RyaWN0J1xuXG5pZiAoIW1vZHVsZS5ob3QgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9yZWFjdC1ob3QtbG9hZGVyLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9yZWFjdC1ob3QtbG9hZGVyLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXG4gIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICBpZiAoc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHRoaXMuc3RhdGUpO1xuICBpZiAoc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgdHJ5IHtcbiAgICB2YXIgcHJldlByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcHJldlN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3QgPSB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlXG4gICAgKTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0aGlzLnByb3BzID0gcHJldlByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBwcmV2U3RhdGU7XG4gIH1cbn1cblxuLy8gUmVhY3QgbWF5IHdhcm4gYWJvdXQgY1dNL2NXUlAvY1dVIG1ldGhvZHMgYmVpbmcgZGVwcmVjYXRlZC5cbi8vIEFkZCBhIGZsYWcgdG8gc3VwcHJlc3MgdGhlc2Ugd2FybmluZ3MgZm9yIHRoaXMgc3BlY2lhbCBjYXNlLlxuY29tcG9uZW50V2lsbE1vdW50Ll9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcy5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxVcGRhdGUuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5cbmZ1bmN0aW9uIHBvbHlmaWxsKENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxuICBpZiAoIXByb3RvdHlwZSB8fCAhcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBvbmx5IHBvbHlmaWxsIGNsYXNzIGNvbXBvbmVudHMnKTtcbiAgfVxuXG4gIGlmIChcbiAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIENvbXBvbmVudDtcbiAgfVxuXG4gIC8vIElmIG5ldyBjb21wb25lbnQgQVBJcyBhcmUgZGVmaW5lZCwgXCJ1bnNhZmVcIiBsaWZlY3ljbGVzIHdvbid0IGJlIGNhbGxlZC5cbiAgLy8gRXJyb3IgaWYgYW55IG9mIHRoZXNlIGxpZmVjeWNsZXMgYXJlIHByZXNlbnQsXG4gIC8vIEJlY2F1c2UgdGhleSB3b3VsZCB3b3JrIGRpZmZlcmVudGx5IGJldHdlZW4gb2xkZXIgYW5kIG5ld2VyICgxNi4zKykgdmVyc2lvbnMgb2YgUmVhY3QuXG4gIHZhciBmb3VuZFdpbGxNb3VudE5hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9IG51bGw7XG4gIHZhciBmb3VuZFdpbGxVcGRhdGVOYW1lID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ2NvbXBvbmVudFdpbGxNb3VudCc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsTW91bnQnO1xuICB9XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdjb21wb25lbnRXaWxsVXBkYXRlJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH1cbiAgaWYgKFxuICAgIGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCB8fFxuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsXG4gICkge1xuICAgIHZhciBjb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lO1xuICAgIHZhciBuZXdBcGlOYW1lID1cbiAgICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gJ2dldERlcml2ZWRTdGF0ZUZyb21Qcm9wcygpJ1xuICAgICAgICA6ICdnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpJztcblxuICAgIHRocm93IEVycm9yKFxuICAgICAgJ1Vuc2FmZSBsZWdhY3kgbGlmZWN5Y2xlcyB3aWxsIG5vdCBiZSBjYWxsZWQgZm9yIGNvbXBvbmVudHMgdXNpbmcgbmV3IGNvbXBvbmVudCBBUElzLlxcblxcbicgK1xuICAgICAgICBjb21wb25lbnROYW1lICtcbiAgICAgICAgJyB1c2VzICcgK1xuICAgICAgICBuZXdBcGlOYW1lICtcbiAgICAgICAgJyBidXQgYWxzbyBjb250YWlucyB0aGUgZm9sbG93aW5nIGxlZ2FjeSBsaWZlY3ljbGVzOicgK1xuICAgICAgICAoZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbE1vdW50TmFtZSA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsXG4gICAgICAgICAgPyAnXFxuICAnICsgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZVxuICAgICAgICAgIDogJycpICtcbiAgICAgICAgKGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGwgPyAnXFxuICAnICsgZm91bmRXaWxsVXBkYXRlTmFtZSA6ICcnKSArXG4gICAgICAgICdcXG5cXG5UaGUgYWJvdmUgbGlmZWN5Y2xlcyBzaG91bGQgYmUgcmVtb3ZlZC4gTGVhcm4gbW9yZSBhYm91dCB0aGlzIHdhcm5pbmcgaGVyZTpcXG4nICtcbiAgICAgICAgJ2h0dHBzOi8vZmIubWUvcmVhY3QtYXN5bmMtY29tcG9uZW50LWxpZmVjeWNsZS1ob29rcydcbiAgICApO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXTSBhbmQgY1dSUCB0byBpbnZva2UgdGhlIG5ldyBzdGF0aWMgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGVzZSBsaWZlY3ljbGVzIGlmIGdEU0ZQIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGNvbXBvbmVudFdpbGxNb3VudDtcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM7XG4gIH1cblxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXVSB0byBpbnZva2UgdGhlIG5ldyBsaWZlY3ljbGUuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIFJlYWN0IHdpbGwgaWdub3JlIHRoYXQgbGlmZWN5Y2xlIGlmIGdTQlUgZXhpc3RzLlxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ2Fubm90IHBvbHlmaWxsIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKCkgZm9yIGNvbXBvbmVudHMgdGhhdCBkbyBub3QgZGVmaW5lIGNvbXBvbmVudERpZFVwZGF0ZSgpIG9uIHRoZSBwcm90b3R5cGUnXG4gICAgICApO1xuICAgIH1cblxuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID0gY29tcG9uZW50V2lsbFVwZGF0ZTtcblxuICAgIHZhciBjb21wb25lbnREaWRVcGRhdGUgPSBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlO1xuXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZVBvbHlmaWxsKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlLFxuICAgICAgbWF5YmVTbmFwc2hvdFxuICAgICkge1xuICAgICAgLy8gMTYuMysgd2lsbCBub3QgZXhlY3V0ZSBvdXIgd2lsbC11cGRhdGUgbWV0aG9kO1xuICAgICAgLy8gSXQgd2lsbCBwYXNzIGEgc25hcHNob3QgdmFsdWUgdG8gZGlkLXVwZGF0ZSB0aG91Z2guXG4gICAgICAvLyBPbGRlciB2ZXJzaW9ucyB3aWxsIHJlcXVpcmUgb3VyIHBvbHlmaWxsZWQgd2lsbC11cGRhdGUgdmFsdWUuXG4gICAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBib3RoIGNhc2VzLCBidXQgY2FuJ3QganVzdCBjaGVjayBmb3IgdGhlIHByZXNlbmNlIG9mIFwibWF5YmVTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBmb3IgPD0gMTUueCB2ZXJzaW9ucyB0aGlzIG1pZ2h0IGJlIGEgXCJwcmV2Q29udGV4dFwiIG9iamVjdC5cbiAgICAgIC8vIFdlIGFsc28gY2FuJ3QganVzdCBjaGVjayBcIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XCIsXG4gICAgICAvLyBCZWNhdXNlIGdldC1zbmFwc2hvdCBtaWdodCByZXR1cm4gYSBmYWxzeSB2YWx1ZS5cbiAgICAgIC8vIFNvIGNoZWNrIGZvciB0aGUgZXhwbGljaXQgX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnIGZsYWcgdG8gZGV0ZXJtaW5lIGJlaGF2aW9yLlxuICAgICAgdmFyIHNuYXBzaG90ID0gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWdcbiAgICAgICAgPyB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XG4gICAgICAgIDogbWF5YmVTbmFwc2hvdDtcblxuICAgICAgY29tcG9uZW50RGlkVXBkYXRlLmNhbGwodGhpcywgcHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcbn1cblxuZXhwb3J0IHsgcG9seWZpbGwgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9lcy9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvcmVkdXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9yc3VpdGUtc2NoZW1hL2xpYi9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JzdWl0ZS9saWIvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQiwgY29tcGFyZSwgY29tcGFyZUNvbnRleHQpIHtcblxuICAgIHZhciByZXQgPSBjb21wYXJlID8gY29tcGFyZS5jYWxsKGNvbXBhcmVDb250ZXh0LCBvYmpBLCBvYmpCKSA6IHZvaWQgMDtcblxuICAgIGlmKHJldCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiAhIXJldDtcbiAgICB9XG5cbiAgICBpZihvYmpBID09PSBvYmpCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmKHR5cGVvZiBvYmpBICE9PSAnb2JqZWN0JyB8fCAhb2JqQSB8fFxuICAgICAgIHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCAhb2JqQikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gICAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgICBpZihrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGJIYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuYmluZChvYmpCKTtcblxuICAgIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gICAgZm9yKHZhciBpZHggPSAwOyBpZHggPCBrZXlzQS5sZW5ndGg7IGlkeCsrKSB7XG5cbiAgICAgICAgdmFyIGtleSA9IGtleXNBW2lkeF07XG5cbiAgICAgICAgaWYoIWJIYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdmFsdWVBID0gb2JqQVtrZXldO1xuICAgICAgICB2YXIgdmFsdWVCID0gb2JqQltrZXldO1xuXG4gICAgICAgIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIHZhbHVlQSwgdmFsdWVCLCBrZXkpIDogdm9pZCAwO1xuXG4gICAgICAgIGlmKHJldCA9PT0gZmFsc2UgfHxcbiAgICAgICAgICAgcmV0ID09PSB2b2lkIDAgJiYgdmFsdWVBICE9PSB2YWx1ZUIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG5cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHRocm93IG5ldyBFcnJvcihcImRlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdFwiKTtcclxufTtcclxuIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXyAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9tb2R1bGUuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Um91dGUsIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgQ29udGFpbmVyID0gKHJvdXRlKSA9PiAoPFJvdXRlIHBhdGg9e3JvdXRlLnBhdGh9IHJlbmRlcj17cHJvcHMgPT4gKDxyb3V0ZS5jb21wb25lbnQgT3JkZXJNZXNzPXtyb3V0ZS5PcmRlck1lc3N9IHsuLi5wcm9wc30vPil9Lz4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuY29uc3QgbW9kZWwgPSBTY2hlbWFNb2RlbCh7TmFtZTogU3RyaW5nVHlwZSgpLmlzUmVxdWlyZWQoJ+inkuiJsuWQjeS4jeiDveS4uuepuicpfSk7XG5cbi8qKlxuICog6I2v5ZOB5Z+656GA5pWw5o2u57yW6L6R57uE5Lu2XG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuY2xhc3MgR29vZEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2YWx1ZXM6IHt9LFxuICAgICAgICAgICAgZXJyb3JzOiB7fSxcbiAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdWJtaXRHb29kID0gdGhpcy5fc3VibWl0R29vZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNhbmNlbCA9IHRoaXMuX2NhbmNlbC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9jYW5jZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2FuY2VsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DYW5jZWxlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3N1Ym1pdEdvb2QoKSB7XG4gICAgICAgIGlmICghdGhpcy5mb3JtLmNoZWNrKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBcIuaVsOaNruagvOW8j+aciemUmeivr1wiIH0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKSk7XG5cbiAgICAgICAgZmV0Y2goJy9hcGkvZ29vZC9zYXZlJywge1xuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgaWYgKGpzb24uY29kZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkdvb2RTYXZlQ29tcGxldGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL1RPRE9cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHtnb29kfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKGdvb2QpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlczogZ29vZH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IHtnb29kLCBhY3Rpb259ID0gbmV4dFByb3BzO1xuICAgICAgICBsZXQge2dvb2Q6IG9sZEdvb2R9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh7YWN0aW9uLCBnb29kfSk7XG5cbiAgICAgICAgaWYgKGdvb2QgJiYgb2xkR29vZCkge1xuICAgICAgICAgICAgaWYgKGdvb2QuSUQgIT0gb2xkR29vZC5JRCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlczogZ29vZH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGdvb2QpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlczogZ29vZH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PSBcImFkZFwiKSB7XG4gICAgICAgICAgICAvL+a3u+WKoOS8muWRmFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIE5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIE9mZmljYWxOYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBVbml0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBEaW1lbnNpb246IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIERlZmF1bHRDb3N0UHJpY2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIERlZmF1bHRQcmljZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgTGltaXRQcmljZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgVXNlV2F5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBNYW51ZmFjdHVyZXI6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFVuTW91bnQoKSB7XG4gICAgICAgIC8vIHRoaXMudW5TdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7dmFsdWVzLCBlcnJvcnN9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKDxkaXYgaWQ9XCJHb29kRWRpdG9yXCIgY2xhc3NOYW1lPVwiZWRpdG9yX3pvbmVcIj5cbiAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gdmFsdWVzPXt2YWx1ZXN9IGlkPVwiZm9ybVwiIG1vZGVsPXttb2RlbH0gb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVzfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7lkI3np7BcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJoaWRkZW5cIiBjbGFzc05hbWU9XCJcIiBuYW1lPVwiSURcIj48L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuTmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPio8L3NwYW4+5ou86Z+zXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVBpbllpblwiIGlkPVwiTmFtZVBpbllpblwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5OYW1lUGluWWlufTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7pgJrnlKjlkI1cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJPZmZpY2FsTmFtZVwiIGlkPVwiT2ZmaWNhbE5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuT2ZmaWNhbE5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPuinhOagvFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkRpbWVuc2lvblwiIGlkPVwiRGltZW5zaW9uXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkRpbWVuc2lvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPio8L3NwYW4+5YmC5Z6LXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiRm9ybU9mRHJ1Z1wiIGlkPVwiRm9ybU9mRHJ1Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5Gb3JtT2ZEcnVnfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7ljZXkvY1cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJVbml0XCIgaWQ9XCJVbml0XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLlVuaXR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPueUqOazleeUqOmHj1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiVXNlV2F5XCIgaWQ9XCJVc2VXYXlcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5Vc2VXYXl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDkuK3moIfku7c6XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiQmlkUHJpY2VcIiBpZD1cIkJpZFByaWNlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkJpZFByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAg56ue5LqJ5oOF5Ya1OlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkNvbXBldGlvblwiIGlkPVwiQ29tcGV0aW9uXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkNvbXBldGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOWMu+S/neaDheWGtTpcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJNZWRpY2FyZVwiIGlkPVwiTWVkaWNhcmVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuTWVkaWNhcmV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDnlpfnqIs6XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiUGVyaW9kVHJlYXRtZW50XCIgaWQ9XCJQZXJpb2RUcmVhdG1lbnRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuUGVyaW9kVHJlYXRtZW50fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAg6YCC5bqU55eHOlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIlRyYW5zbGF0aW9uXCIgaWQ9XCJUcmFuc2xhdGlvblwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5UcmFuc2xhdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOaYr+WQpui/m+WPozpcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8taW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJJc0ZvcmVpZ25cIiBpZD1cIklzRm9yZWlnblwiIHZhbHVlPVwiMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDpnZ7ov5vlj6NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIklzRm9yZWlnblwiIGlkPVwiSXNGb3JlaWduXCIgdmFsdWU9XCIxXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi/m+WPo1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOaJueWHhuaWh+WPtzpcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJBcHByb3ZhbE51bWJlclwiIGlkPVwiQXBwcm92YWxOdW1iZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuQXBwcm92YWxOdW1iZXJ9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDpu5jorqTmiJDmnKxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJEZWZhdWx0Q29zdFByaWNlXCIgaWQ9XCJEZWZhdWx0Q29zdFByaWNlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkRlZmF1bHRDb3N0UHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDpu5jorqTku7fmoLxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJEZWZhdWx0UHJpY2VcIiBpZD1cIkRlZmF1bHRQcmljZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5EZWZhdWx0UHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDmnYPpmZDku7fmoLxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJMaW1pdFByaWNlXCIgaWQ9XCJMaW1pdFByaWNlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkxpbWl0UHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDnlJ/kuqfljoLllYZcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJNYW51ZmFjdHVyZXJcIiBpZD1cIk1hbnVmYWN0dXJlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5NYW51ZmFjdHVyZXJ9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+PC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOS/neWtmFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17dGhpcy5jYW5jZWx9PuWPlua2iDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdvb2RFZGl0b3I7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuaW1wb3J0IEdvb2RFZGl0b3IgZnJvbSAnLi9Hb29kRWRpdG9yJztcblxuLyoqXG4gKiDoja/lk4HliJfooajnrqHnkIZcbiAqIEBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxuICovXG5jbGFzcyBHb29kTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUgPSBTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIHRoaXMubG9hZEdvb2RMaXN0RnJvbURCID0gdGhpcy5fbG9hZEdvb2RMaXN0RnJvbURCLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DYW5jZWwgPSB0aGlzLl9vbkNhbmNlbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU2F2ZUNvbXBsZXRlZCA9IHRoaXMuX29uU2F2ZUNvbXBsZXRlZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9vbkNhbmNlbCgpIHtcbiAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiR09PRF9FRElUT1JfQ0FOQ0VMXCJ9KTtcbiAgICB9XG5cbiAgICBfb25TYXZlQ29tcGxldGVkKCkge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJHT09EX0VESVRPUl9ET05FXCJ9KTtcbiAgICB9XG5cbiAgICBfbG9hZEdvb2RMaXN0RnJvbURCKCkge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9HT09EU1wifSk7XG5cbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiS2V5V29yZFwiLCBcIlwiKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiUGFnZVwiLCAwKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiTGltaXRcIiwgMTApO1xuXG4gICAgICAgIGZldGNoKCcvYXBpL2dvb2Qvc2VhcmNoJywge1xuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgICAgICBpZiAoanNvbi5jb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9HT09EU19ET05FXCIsIHBheWxvYWQ6IGpzb24uZGF0YX0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMubG9hZEdvb2RMaXN0RnJvbURCKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGdvb2RMaXN0OiB7XG4gICAgICAgICAgICAgICAgZ29vZHMsXG4gICAgICAgICAgICAgICAgZ29vZCxcbiAgICAgICAgICAgICAgICBhY3Rpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGVkaXRvckpzeCA9IChcIlwiKTtcbiAgICAgICAgaWYgKGdvb2QgJiYgYWN0aW9uID09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgIGVkaXRvckpzeCA9ICg8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgPEdvb2RFZGl0b3IgYWN0aW9uPXthY3Rpb259IGdvb2Q9e2dvb2R9IG9uQ2FuY2VsZWQ9e3RoaXMub25DYW5jZWx9IG9uR29vZFNhdmVDb21wbGV0ZWQ9e3RoaXMub25Hb29kU2F2ZUNvbXBsZXRlZH0vPlxuICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCJhZGRcIikge1xuICAgICAgICAgICAgZWRpdG9ySnN4ID0gKDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICA8R29vZEVkaXRvciBhY3Rpb249e2FjdGlvbn0gZ29vZD17bnVsbH0gb25DYW5jZWxlZD17dGhpcy5vbkNhbmNlbH0gb25Hb29kU2F2ZUNvbXBsZXRlZD17dGhpcy5vbkdvb2RTYXZlQ29tcGxldGVkfS8+XG4gICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1MaXN0SnN4ID0gZ29vZHMubWFwKChnLCBpbmRleCkgPT4gKDx0cj5cbiAgICAgICAgICAgIDx0ZD57Zy5OYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2cuT2ZmaWNhbE5hbWV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Zy5EaW1lbnNpb259PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Zy5Vbml0fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2cuRGVmYXVsdENvc3RQcmljZX08L3RkPlxuICAgICAgICAgICAgPHRkPntnLkRlZmF1bHRQcmljZX08L3RkPlxuICAgICAgICAgICAgPHRkPntnLkxpbWl0UHJpY2V9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Zy5NYW51ZmFjdHVyZXJ9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Zy5Vc2VXYXl9PC90ZD5cblxuICAgICAgICAgICAgPHRkIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIiA6IFwiODBweFwiXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJFRElUT1JfR09PRFwiLCBwYXlsb2FkOiBnfSlcbiAgICAgICAgICAgICAgICAgICAgfX0+57yW6L6RPC9idXR0b24+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPikpO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIkdvb2RMaXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtMSBtYWluXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2VfdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PuiNr+WTgeeuoeeQhjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuX3pvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCIgcmVmPXtyZWYgPT4gdGhpcy5mb3JtID0gcmVmfSBpZD1cImZvcm1cIiBvbkNoYW5nZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyb2xlOiB2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gb25DaGVjaz17KGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJTRVRfQUREX01PREVcIn0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+5re75YqgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuiNr+WTgeWQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPumAmueUqOWQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuinhOagvDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWNleS9jTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPum7mOiupOaIkOacrDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPum7mOiupOWUruS7tzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuadg+mZkOS7tzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPueUn+S6p+WVhjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPueUqOazlTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPui/m+WPozwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bUxpc3RKc3h9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7ZWRpdG9ySnN4fVxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHb29kTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9SZWR1Y2VyJ1xuXG5pbXBvcnQgSW50ZW50aW9uTGlzdCBmcm9tICcuL0ludGVudGlvbkxpc3QnO1xuXG5pbXBvcnQge0Zvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbH0gZnJvbSAnZm9ybS1saWInO1xuaW1wb3J0IHtTY2hlbWFNb2RlbCwgU3RyaW5nVHlwZX0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbmNvbnN0IG1vZGVsID0gU2NoZW1hTW9kZWwoe05hbWU6IFN0cmluZ1R5cGUoKS5pc1JlcXVpcmVkKCfop5LoibLlkI3kuI3og73kuLrnqbonKX0pO1xuXG4vKipcbiAqIOS8muWRmOaEj+WQkee8lui+kee7hOS7tlxuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmNsYXNzIEludGVudGlvbkVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2YWx1ZXM6IHt9LFxuICAgICAgICAgICAgZXJyb3JzOiB7fSxcbiAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5sb2FkT2JqZWN0RGV0YWlsID0gdGhpcy5fbG9hZE9iamVjdERldGFpbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN1Ym1pdEludGVudGlvbiA9IHRoaXMuX3N1Ym1pdEludGVudGlvbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9sb2FkT2JqZWN0RGV0YWlsKCkge31cblxuICAgIF9zdWJtaXRJbnRlbnRpb24oKSB7XG5cbiAgICAgICAgbGV0IHttZW1iZXJ9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgbGV0IHt2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBSZW1hcmtzXG4gICAgICAgICAgICB9fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiTWVtYmVySURcIiwgbWVtYmVyLklEKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiR29vZHNcIiwgUmVtYXJrcylcblxuICAgICAgICBmZXRjaCgnL2FwaS9pbnRlbnRpb24vc2F2ZScsIHtcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChqc29uLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge21lbWJlcn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAobWVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZXM6IG1lbWJlcn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHt9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7bWVtYmVyfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7dmFsdWVzLCBlcnJvcnMsIGlzRmV0Y2hpbmd9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKDxkaXYgaWQ9XCJJbnRlbnRpb25FZGl0b3JcIj5cbiAgICAgICAgICAgIDxJbnRlbnRpb25MaXN0IG1lbWJlcj17bWVtYmVyfS8+XG5cbiAgICAgICAgICAgIDxGb3JtIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gdmFsdWVzPXt2YWx1ZXN9IGlkPVwiZm9ybVwiIG1vZGVsPXttb2RlbH0gb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVzfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICDmhI/lkJHoja/lk4FcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJSZW1hcmtcIiBpZD1cIlJlbWFya1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLlJlbWFya308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdEludGVudGlvbn0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDkv53lrZhcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e3RoaXMuY2FuY2VsfT7lj5bmtog8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZW50aW9uRWRpdG9yO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInO1xuXG5jbGFzcyBJbnRlbnRpb25MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUgPSBTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIHRoaXMubG9hZEludGVudGlvbnNGcm9tREIgPSB0aGlzLl9sb2FkSW50ZW50aW9uc0Zyb21EQi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9sb2FkSW50ZW50aW9uc0Zyb21EQihtZW1iZXIpIHtcbiAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiRkVUQ0hfSU5URU5USU9OU1wifSk7XG5cbiAgICAgICAgZmV0Y2goYC9hcGkvbWVtYmVyLyR7bWVtYmVyLklEfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkZFVENIX0lOVEVOVElPTlNfRE9ORVwiLCBwYXlsb2FkOiBqc29uLmludGVudGlvbkRhdGF9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChqc29uLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge21lbWJlcn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zb2xlLmxvZyhtZW1iZXIpO1xuICAgICAgICBpZiAobWVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRJbnRlbnRpb25zRnJvbURCKG1lbWJlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgaW50ZW50aW9uTGlzdDoge1xuICAgICAgICAgICAgICAgIGludGVudGlvbnMsXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZyxcbiAgICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgZXJyb3JzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBsaXN0SnN4ID0gaW50ZW50aW9ucy5tYXAoKGksIGluZGV4KSA9PiAoPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHRkPntpLklEfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2kuR29vZHN9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57aS5PcGVyYXRvcklEfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2kuQ3JlYXRlVGltZX08L3RkPlxuICAgICAgICA8L3RyPikpO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIkludGVudGlvbkxpc3RcIj5cblxuICAgICAgICAgICAgPGg0PuWuouaIt+aEj+WQkeiusOW9lTwvaDQ+XG5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWuouS6uuWnk+WQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5oSP5ZCR5Y2V6K+m5oOFPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ml7bpl7Q8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuiNr+W4iDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pON5L2cPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAge2xpc3RKc3h9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlbnRpb25MaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInXG5cbmltcG9ydCBJbnZpdGVMaXN0IGZyb20gJy4vSW52aXRlTGlzdCc7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuY29uc3QgbW9kZWwgPSBTY2hlbWFNb2RlbCh7TmFtZTogU3RyaW5nVHlwZSgpLmlzUmVxdWlyZWQoJ+inkuiJsuWQjeS4jeiDveS4uuepuicpfSk7XG5cbi8qKlxuICog5a6i5oi35Zue6K6/57yW6L6R57uE5Lu2XG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuY2xhc3MgSW52aXRlRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlczoge30sXG4gICAgICAgICAgICBlcnJvcnM6IHt9LFxuICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN1Ym1pdEludml0ZSA9IHRoaXMuX3N1Ym1pdEludml0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9zdWJtaXRJbnZpdGUoKSB7XG4gICAgICAgIGxldCB7bWVtYmVyfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgIGxldCB7dmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgUmVtYXJrc1xuICAgICAgICAgICAgfX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIk1lbWJlcklEXCIsIG1lbWJlci5JRCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIlJlbWFya3NcIiwgUmVtYXJrcyk7XG5cbiAgICAgICAgZmV0Y2goJy9hcGkvdmlzaXQvc2F2ZScsIHtcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChqc29uLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9UT0RPXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge21lbWJlcn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAobWVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZXM6IG1lbWJlcn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt2YWx1ZXMsIGVycm9ycywgaXNGZXRjaGluZ30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQge21lbWJlcn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zb2xlLmxvZyh7bWVtYmVyfSk7XG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIkludml0ZUVkaXRvclwiPlxuICAgICAgICAgICAgPGg0PuWuouaIt+Wbnuiuv+iusOW9lTwvaDQ+XG4gICAgICAgICAgICA8SW52aXRlTGlzdCBtZW1iZXI9e21lbWJlcn0vPlxuICAgICAgICAgICAgPEZvcm0gcmVmPXtyZWYgPT4gdGhpcy5mb3JtID0gcmVmfSB2YWx1ZXM9e3ZhbHVlc30gaWQ9XCJmb3JtXCIgbW9kZWw9e21vZGVsfSBvbkNoYW5nZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgfX0gb25DaGVjaz17KGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCA+XG4gICAgICAgICAgICAgICAgICAgICAgICDlm57orr9cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJSZW1hcmtzXCIgaWQ9XCJSZW1hcmtzXCIvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuUmVtYXJrc308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXRJbnZpdGV9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5L+d5a2YXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXt0aGlzLmNhbmNlbH0+5Y+W5raIPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnZpdGVFZGl0b3I7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmNsYXNzIEludml0ZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSA9IFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcyA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgdGhpcy5sb2FkVmlzdHNGcm9tREIgPSB0aGlzLl9sb2FkVmlzdHNGcm9tREIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfbG9hZFZpc3RzRnJvbURCKG1lbWJlcikge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9JTlZJVEVcIn0pO1xuICAgICAgICBjb25zb2xlLmxvZyhtZW1iZXIuSUQpO1xuICAgICAgICBmZXRjaChgL2FwaS9tZW1iZXIvJHttZW1iZXIuSUR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtqc29ufSk7XG4gICAgICAgICAgICBpZiAoanNvbi5jb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9JTlZJVEVfRE9ORVwiLCBwYXlsb2FkOiBqc29uLnZpc2l0RGF0YX0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IHttZW1iZXJ9ID0gbmV4dFByb3BzO1xuICAgICAgICBsZXQge21lbWJlcjogb2xkTWVtYmVyfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKG1lbWJlci5JRCAhPSBvbGRNZW1iZXIuSUQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHttZW1iZXJ9KTtcbiAgICAgICAgICAgIGlmIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRWaXN0c0Zyb21EQihtZW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7bWVtYmVyfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnNvbGUubG9nKHttZW1iZXJ9KTtcbiAgICAgICAgaWYgKG1lbWJlcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkVmlzdHNGcm9tREIobWVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGludmlzdExpc3Q6IHtcbiAgICAgICAgICAgICAgICBpbnZpc3RzLFxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGxpc3RKc3ggPSBpbnZpc3RzLm1hcCgoaSwgaW5kZXgpID0+ICg8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8dGQ+e2kuTWVtYmVySUR9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57aS5OYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2kuTmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkPntpLk5hbWV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57aS5OYW1lfTwvdGQ+XG4gICAgICAgIDwvdHI+KSk7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiSW52aXRlTGlzdFwiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5a6i5Lq65aeT5ZCNPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lm57orr/orrDlvZU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaXtumXtDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6I2v5biIPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mk43kvZw8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7bGlzdEpzeH1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnZpdGVMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Um91dGUsIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIE5hdkxpbmssIExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBNYWluTWVudSA9ICgpID0+ICg8dWwgaWQ9XCJiYWNrX21lbnVcIiBjbGFzc05hbWU9XCJuYXYgbmF2LXNpZGViYXJcIj5cbiAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL2JhY2tfaW5kZXhcIj7pu5jorqTpobU8L05hdkxpbms+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL29yZGVyc1wiIGFjdGl2ZUNsYXNzTmFtZT1cImNoZWNrZWRcIj7plIDllK7orqLljZU8L05hdkxpbms+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL3JlY2VpcHRzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiY2hlY2tlZFwiPui/m+i0p+WNlTwvTmF2TGluaz5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvc3RhdHNcIiBhY3RpdmVDbGFzc05hbWU9XCJjaGVja2VkXCI+5pWw5o2uPC9OYXZMaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgICA8TmF2TGluayB0bz1cIi9tZW1iZXJzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiY2hlY2tlZFwiPuS8muWRmDwvTmF2TGluaz5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvZ29vZHNcIiBhY3RpdmVDbGFzc05hbWU9XCJjaGVja2VkXCI+6I2v5ZOBPC9OYXZMaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgICA8TmF2TGluayB0bz1cIi92ZW5kb3JzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiY2hlY2tlZFwiPuS+m+W6lOWVhjwvTmF2TGluaz5cbiAgICA8L2xpPlxuXG48L3VsPik7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5NZW51O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Um91dGUsIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIE5hdkxpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHtob3R9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXInXG5cbmltcG9ydCB7XG4gICAgR29vZExpc3QsXG4gICAgT3JkZXJMaXN0LFxuICAgIFJlY2VpcHRMaXN0LFxuICAgIFN0YXRzTGlzdCxcbiAgICBNZW1iZXJMaXN0LFxuICAgIFZlbmRvckxpc3QsXG4gICAgU2l0ZUluZGV4LFxuICAgIENvbnRhaW5lcixcbiAgICBNYWluTWVudSxcbiAgICBPcmRlckVkaXRvcixcbiAgICBSZWNlaXB0RWRpdG9yXG59IGZyb20gJy4vaW5kZXgnO1xuXG5pbXBvcnQgJ3JzdWl0ZS9zdHlsZXMvbGVzcy9pbmRleC5sZXNzJztcblxuXG5jb25zdCByb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiBcIi9vcmRlcnMvXCIsXG4gICAgICAgIGV4dHJhOiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IE9yZGVyTGlzdFxuICAgIH0sIHtcbiAgICAgICAgcGF0aDogXCIvb3JkZXIvZWRpdG9yXCIsXG4gICAgICAgIGV4dHJhOiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IE9yZGVyRWRpdG9yXG4gICAgfSwge1xuICAgICAgICBwYXRoOiBcIi9yZWNlaXB0cy9cIixcbiAgICAgICAgZXh0cmE6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudDogUmVjZWlwdExpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL3JlY2VpcHQvZWRpdG9yXCIsXG4gICAgICAgIGV4dHJhOiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IFJlY2VpcHRFZGl0b3JcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL3N0YXRzL1wiLFxuICAgICAgICBleHRyYTogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50OiBTdGF0c0xpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL21lbWJlcnMvXCIsXG4gICAgICAgIGV4dHJhOiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IE1lbWJlckxpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL3ZlbmRvcnMvXCIsXG4gICAgICAgIGV4dHJhOiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IFZlbmRvckxpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL2dvb2RzL1wiLFxuICAgICAgICBleHRyYTogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50OiBHb29kTGlzdFxuICAgIH0sIHtcbiAgICAgICAgcGF0aDogXCIvYmFja19pbmRleFwiLFxuICAgICAgICBleHRyYTogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50OiBTaXRlSW5kZXhcbiAgICB9XG5dO1xuXG4vKipcbiAqIOWOqOW4iOW3peS9nOWPsFxuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmNsYXNzIE1hbmFnZXJSb3V0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZW1wbG95ZWU6IHt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gZmV0Y2goJy9hcGkvZW1wbG95ZWUvcHJvZmlsZScsIHtcbiAgICAgICAgLy8gICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgLy8gICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIC8vICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICAvLyB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAvLyAgICAgaWYgKGpzb24uY29kZSA9PSAwKSB7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCLliqDovb3pm4flkZjor6bnu4bkv6Hmga9cIiwganNvbik7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW1wbG95ZWU6IGpzb24uZGF0YX0pXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7ZW1wbG95ZWV9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKDxSb3V0ZXI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPue+juS/oeW6t+W5tOWkp+iNr+aIvzwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+ICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIOW3puS+p+iPnOWNlSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEgc2lkZWJhclwiPjxNYWluTWVudS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog5Y+z5L6n5YaF5a65ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlcy5tYXAoKHJvdXRlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxDb250YWluZXIga2V5PXtpfSBFbXBsb3llZT17ZW1wbG95ZWV9IHsuLi5yb3V0ZX0vPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Sb3V0ZXI+KTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IE1hbmFnZXJSb3V0ZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGhvdChtb2R1bGUpKE1hbmFnZXJSb3V0ZXIpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcidcblxuaW1wb3J0IHsgRm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sIH0gZnJvbSAnZm9ybS1saWInO1xuaW1wb3J0IHsgU2NoZW1hTW9kZWwsIFN0cmluZ1R5cGUgfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuY29uc3QgbW9kZWwgPSBTY2hlbWFNb2RlbCh7IE5hbWU6IFN0cmluZ1R5cGUoKS5pc1JlcXVpcmVkKCfop5LoibLlkI3kuI3og73kuLrnqbonKSB9KTtcblxuLyoqXG4gKiDkvJrlkZjln7rnoYDmlbDmja7nvJbovpHnu4Tku7ZcbiAqIEBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxuICovXG5jbGFzcyBNZW1iZXJFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvLyB0aGlzLnVuU3Vic2NyaWJlID0gU3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgLy8gICAgIGxldCBzID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUocyk7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIHRoaXMuc3RhdGUgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWVzOiB7fSxcbiAgICAgICAgICAgIGVycm9yczoge31cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxvYWRPYmplY3REZXRhaWwgPSB0aGlzLl9sb2FkT2JqZWN0RGV0YWlsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy5fc3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2FuY2VsID0gdGhpcy5fY2FuY2VsLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2xvYWRPYmplY3REZXRhaWwoKSB7IH1cblxuICAgIF9jYW5jZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2FuY2VsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DYW5jZWxlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3N1Ym1pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm0uY2hlY2soKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IFwi5pWw5o2u5qC85byP5pyJ6ZSZ6K+vXCIgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpKTtcbiAgICAgICAgbGV0IHsgYWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCB1cmwgPSBcIi9hcGkvbWVtYmVyL2FkZFwiO1xuICAgICAgICBpZiAoYWN0aW9uID09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgIHVybCA9IFwiL2FwaS9tZW1iZXIvdXBkYXRlXCI7XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZChqc29uLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgeyBtZW1iZXIsIGFjdGlvbiB9ID0gbmV4dFByb3BzO1xuICAgICAgICBsZXQgeyBtZW1iZXI6IG9sZE1lbWJlciB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zb2xlLmxvZyh7IGFjdGlvbiwgbWVtYmVyIH0pO1xuXG4gICAgICAgIGlmIChtZW1iZXIgJiYgb2xkTWVtYmVyKSB7XG4gICAgICAgICAgICBpZiAobWVtYmVyLklEICE9IG9sZE1lbWJlci5JRCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZXM6IG1lbWJlciB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZXM6IG1lbWJlciB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCJhZGRcIikge1xuICAgICAgICAgICAgLy/mt7vliqDkvJrlkZhcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgICAgICBOYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBQaW5ZaW46IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIEdlbmRlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgVGVsZXBob25lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNpdHlcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJBZGRyZXNzXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIERpc2Vhc2VzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBSZW1hcms6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFJlbGF0aW9uV2l0aFBhdGllbnQ6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHsgbWVtYmVyIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAobWVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWVzOiBtZW1iZXIgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyB2YWx1ZXMsIGVycm9ycyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IHsgYWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCBoZWFkZXIgPSBcIua3u+WKoOaWsOS8muWRmFwiO1xuICAgICAgICBpZiAoYWN0aW9uID09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgIGhlYWRlciA9IFwi5L+u5pS55Lya5ZGYXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKDxkaXYgaWQ9XCJNZW1iZXJFZGl0b3JcIj5cbiAgICAgICAgICAgIDxoND57aGVhZGVyfTwvaDQ+XG4gICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtLWhvcml6b250YWxcIiByZWY9e3JlZiA9PiB0aGlzLmZvcm0gPSByZWZ9IHZhbHVlcz17dmFsdWVzfSBpZD1cImZvcm1cIiBtb2RlbD17bW9kZWx9IG9uQ2hhbmdlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlcyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzIH0pXG4gICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7lkI3np7BcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIklEXCI+PC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLk5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPuaLvOmfs1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIlBpbllpblwiIGlkPVwiUGluWWluXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5QaW5ZaW59PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPuaAp+WIq1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJJc0ZvcmVpZ25cIiBpZD1cIklzRm9yZWlnblwiIHZhbHVlPVwiMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg55S355SfXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiSXNGb3JlaWduXCIgaWQ9XCJJc0ZvcmVpZ25cIiB2YWx1ZT1cIjJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWls+eUn1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5HZW5kZXJ9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPueUteivnVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIlRlbGVwaG9uZVwiIGlkPVwiVGVsZXBob25lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5UZWxlcGhvbmV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPuWfjuW4glxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkNpdHlcIiBpZD1cIkNpdHlcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkNpdHl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPuWcsOWdgFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkFkZHJlc3NcIiBpZD1cIkFkZHJlc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkFkZHJlc3N9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDlvq7kv6Hlj7dcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJXZWlYaW5Db2RlXCIgaWQ9XCJXZWlYaW5Db2RlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5XZWlYaW5Db2RlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5aW95Y+LXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiRnJpZW5kTmFtZVwiIGlkPVwiRnJpZW5kTmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuRnJpZW5kTmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOW5tOS7o1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkJpcnRoWWVhclwiIGlkPVwiQmlydGhZZWFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5CaXJ0aFllYXJ9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDnlr7nl4VcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJEaXNlYXNlc1wiIGlkPVwiRGlzZWFzZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkRpc2Vhc2VzfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5oKj6ICF5YWz57O7XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiUmVsYXRpb25XaXRoUGF0aWVudFwiIGlkPVwiUmVsYXRpb25XaXRoUGF0aWVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuUmVsYXRpb25XaXRoUGF0aWVudH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOWkh+azqFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIlJlbWFya1wiIGlkPVwiUmVtYXJrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5SZW1hcmt9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDkv53lrZhcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e3RoaXMuY2FuY2VsfT7lj5bmtog8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5p+l6K+iXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDmn6Xor6JcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyRWRpdG9yO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInO1xuXG5pbXBvcnQge0Zvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbH0gZnJvbSAnZm9ybS1saWInO1xuaW1wb3J0IHtTY2hlbWFNb2RlbCwgU3RyaW5nVHlwZX0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbmltcG9ydCBNZW1iZXJFZGl0b3IgZnJvbSAnLi9NZW1iZXJFZGl0b3InO1xuaW1wb3J0IEludml0ZUVkaXRvciBmcm9tICcuL0ludml0ZUVkaXRvcic7XG5pbXBvcnQgSW50ZW50aW9uRWRpdG9yIGZyb20gJy4vSW50ZW50aW9uRWRpdG9yJztcblxuY2xhc3MgTWVtYmVyTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUgPSBTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIHRoaXMubG9hZE1lbWJlckxpc3QgPSB0aGlzLl9sb2FkTWVtYmVyTGlzdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZCA9IHRoaXMuX29uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTWVtYmVyRGV0YWlsQ2FuY2VsID0gdGhpcy5fb25NZW1iZXJEZXRhaWxDYW5jZWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfbG9hZE1lbWJlckxpc3QoKSB7XG4gICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkZFVENIX01FTUJFUlwifSk7XG5cbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiS2V5V29yZFwiLCBcIua1i+ivlVwiKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiTW9iaWxQaG9uZVwiLCBcIlwiKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiUGFnZVwiLCAwKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiTGltaXRcIiwgMjApO1xuXG4gICAgICAgIGZldGNoKCcvYXBpL21lbWJlci9zZWFyY2gnLCB7XG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkZFVENIX01FTUJFUl9ET05FXCIsIHBheWxvYWQ6IGpzb24uZGF0YX0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIF9vbk1lbWJlckRldGFpbFNhdmVDb21wbGV0ZWQobmV3TWVtYmVyKSB7XG4gICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIk1FTUJFUl9FRElUT1JfRE9ORVwifSk7XG4gICAgfVxuXG4gICAgX29uTWVtYmVyRGV0YWlsQ2FuY2VsKCkge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJNRU1CRVJfRURJVE9SX0NBTkNFTFwifSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMubG9hZE1lbWJlckxpc3QoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBtZW1iZXJMaXN0OiB7XG4gICAgICAgICAgICAgICAgbWVtYmVycyxcbiAgICAgICAgICAgICAgICBtZW1iZXIsXG4gICAgICAgICAgICAgICAgYWN0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBlZGl0b3JKc3ggPSAoXCJcIik7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coe2FjdGlvbiwgbWVtYmVyfSk7XG5cbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJ1cGRhdGVfbWVtYmVyXCI6XG4gICAgICAgICAgICAgICAgZWRpdG9ySnN4ID0gKDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPE1lbWJlckVkaXRvciBhY3Rpb249e2FjdGlvbn0gbWVtYmVyPXttZW1iZXJ9IG9uQ2FuY2VsZWQ9e3RoaXMub25NZW1iZXJEZXRhaWxDYW5jZWx9IG9uU2F2ZUNvbXBsZXRlZD17dGhpcy5vbk1lbWJlckRldGFpbFNhdmVDb21wbGV0ZWR9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFkZF9tZW1iZXJcIjpcbiAgICAgICAgICAgICAgICBlZGl0b3JKc3ggPSAoPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8TWVtYmVyRWRpdG9yIGFjdGlvbj17YWN0aW9ufSBtZW1iZXI9e251bGx9IG9uQ2FuY2VsZWQ9e3RoaXMub25NZW1iZXJEZXRhaWxDYW5jZWx9IG9uU2F2ZUNvbXBsZXRlZD17dGhpcy5vbk1lbWJlckRldGFpbFNhdmVDb21wbGV0ZWR9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFkZF92aXNpdFwiOlxuICAgICAgICAgICAgICAgIGVkaXRvckpzeCA9ICg8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbnZpdGVFZGl0b3IgYWN0aW9uPXthY3Rpb259IG1lbWJlcj17bWVtYmVyfSBvbkNhbmNlbGVkPXt0aGlzLm9uTWVtYmVyRGV0YWlsQ2FuY2VsfSBvblNhdmVDb21wbGV0ZWQ9e3RoaXMub25NZW1iZXJEZXRhaWxTYXZlQ29tcGxldGVkfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhZGRfaW50ZW50aW9uXCI6XG4gICAgICAgICAgICAgICAgZWRpdG9ySnN4ID0gKDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEludGVudGlvbkVkaXRvciBhY3Rpb249e2FjdGlvbn0gbWVtYmVyPXttZW1iZXJ9IG9uQ2FuY2VsZWQ9e3RoaXMub25NZW1iZXJEZXRhaWxDYW5jZWx9IG9uU2F2ZUNvbXBsZXRlZD17dGhpcy5vbk1lbWJlckRldGFpbFNhdmVDb21wbGV0ZWR9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1MaXN0SnN4ID0gbWVtYmVycy5tYXAoKG0sIGluZGV4KSA9PiAoPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHRkIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIiA6IFwiNjBweFwiXG4gICAgICAgICAgICAgICAgfX0+e20uTmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkPnttLkNpdHl9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bS5Nb2JpbFBob25lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e20uSW50ZW50aW9uR29vZHN9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bS5JbnRlbnRpb25RdWFudGl0eX08L3RkPlxuICAgICAgICAgICAgPHRkPnttLlZpc2l0UXVhbnRpdHl9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bS5PcmRlclF1YW50aXR5fTwvdGQ+XG4gICAgICAgICAgICA8dGQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiIDogXCIxMjBweFwiXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJFRElUT1JfTUVNQkVSXCIsIHBheWxvYWQ6IG19KVxuICAgICAgICAgICAgICAgICAgICB9fT7nvJbovpE8L2E+Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJFRElUT1JfTUVNQkVSX0lOVEVOVElPTlNcIiwgcGF5bG9hZDogbX0pXG4gICAgICAgICAgICAgICAgICAgIH19PuaEj+WQkTwvYT5cbiAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkVESVRPUl9NRU1CRVJfVklTSVRcIiwgcGF5bG9hZDogbX0pXG4gICAgICAgICAgICAgICAgICAgIH19PuWbnuiuvzwvYT5cblxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj4pKTtcblxuICAgICAgICByZXR1cm4gKDxkaXYgaWQ9XCJNZW1iZXJMaXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtMSBtYWluXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2VfdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PuS8muWRmOeuoeeQhjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuX3pvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCIgcmVmPXtyZWYgPT4gdGhpcy5mb3JtID0gcmVmfSBpZD1cImZvcm1cIiBvbkNoYW5nZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyb2xlOiB2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gb25DaGVjaz17KGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiU0VUX0FERF9NT0RFXCJ9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT7mt7vliqDmlrDkvJrlkZg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWuouS6uuWnk+WQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWfjuW4gjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPueUteivnTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaEj+WQkeagh+etvjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaEj+WQkeWVhuWTgTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWbnuiuvzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaIkOWNlTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaTjeS9nDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttTGlzdEpzeH1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7ZWRpdG9ySnN4fVxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInO1xuXG5pbXBvcnQge0Zvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbH0gZnJvbSAnZm9ybS1saWInO1xuaW1wb3J0IHtTY2hlbWFNb2RlbCwgU3RyaW5nVHlwZX0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbmltcG9ydCBHb29kTGlzdCBmcm9tICcuL0dvb2RMaXN0JztcbmltcG9ydCBPcmRlckdvb2RMaXN0IGZyb20gJy4vT3JkZXJHb29kTGlzdCc7XG5cbmNvbnN0IG1vZGVsID0gU2NoZW1hTW9kZWwoe05hbWU6IFN0cmluZ1R5cGUoKS5pc1JlcXVpcmVkKCfop5LoibLlkI3kuI3og73kuLrnqbonKX0pO1xuXG5jbGFzcyBPcmRlckVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Ioe2xvY2F0aW9uLCBwcm9wc30pIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUgPSBTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy5sb2FkT3JkZXJHb29kc0Zyb21EQiA9IHRoaXMuX2xvYWRPcmRlckdvb2RzRnJvbURCLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2xvYWRPcmRlckdvb2RzRnJvbURCKG9yZGVyKSB7XG4gICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkZFVENIX09SREVSXCJ9KVxuXG4gICAgICAgIGZldGNoKCcvYXBpL29yZGVyL2luZm8nLCB7XG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7SUQ6IG9yZGVyLklEfSksXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XG5cbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkZFVENIX09SREVSX0RPTkVcIiwgcGF5bG9hZDoganNvbn0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge29yZGVyfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IHtsb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgICB9fSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc29sZS5sb2coe3N0YXRlfSk7XG5cbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRPcmRlckdvb2RzRnJvbURCKHN0YXRlKTtcbiAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIlNFVF9DSEVDS0VEX09SREVSXCIsIHBheWxvYWQ6IHN0YXRlfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIG9yZGVyRWRpdG9yOiB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICAgICAgICBvcmRlcixcbiAgICAgICAgICAgICAgICBvcmRlckdvb2RzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIk9yZGVyRWRpdG9yXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTcgY29sLW1kLW9mZnNldC0xIG1haW5cIj5cbiAgICAgICAgICAgICAgICA8aDQ+6ZSA5ZSu6K6i5Y2V57yW6L6RPC9oND5cblxuICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gdmFsdWVzPXt2YWx1ZXN9IGlkPVwiZm9ybVwiIG1vZGVsPXttb2RlbH0gb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlrqLmiLcmbmJzcDs8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5OYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29sLW1kLTIgY29udHJvbC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOeUteivnSZuYnNwOzxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTW9iaWxQaG9uZVwiIHR5cGU9XCJ0ZWxcIiBwbGFjZWhvbGRlcj1cIueUteivnVwiIGlkPVwiTW9iaWxQaG9uZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLk1vYmlsUGhvbmV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5Zyw5Z2AJm5ic3A7PHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJBZGRyZXNzXCIgaWQ9XCJBZGRyZXNzXCIgcGxhY2Vob2xkZXI9XCLlnLDlnYBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5BZGRyZXNzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmgqPogIXlhbPns7smbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZXMuUmVsYXRpb25zaGlwfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkFkZHJlc3N9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi9cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDku5jmrL7mlrnlvI8mbmJzcDs8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJQYXlTdHlsZVwiIGlkPVwiUGF5U3R5bGVcIiB2YWx1ZT1cIjFcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOW+ruS/oVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8taW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiUGF5U3R5bGVcIiBpZD1cIlBheVN0eWxlXCIgdmFsdWU9XCIyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmlK/ku5jlrp1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIlBheVN0eWxlXCIgaWQ9XCJQYXlTdHlsZVwiIHZhbHVlPVwiM1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg546w6YeRXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJQYXlTdHlsZVwiIGlkPVwiUGF5U3R5bGVcIiB2YWx1ZT1cIjRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi0p+WIsOS7mOasvlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8taW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiUGF5U3R5bGVcIiBpZD1cIlBheVN0eWxlXCIgdmFsdWU9XCI1XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuoznu7TnoIFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlv6vpgJLlhazlj7hcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJEZWxpdmVyeUNvbXBhbnlcIiBpZD1cIkRlbGl2ZXJ5Q29tcGFueVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkRlbGl2ZXJ5Q29tcGFueX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlv6vpgJLotLnnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiRGVsaXZlcnlGZWVcIiBpZD1cIkRlbGl2ZXJ5RmVlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cImhpZGRlblwiIGNsYXNzTmFtZT1cIlwiIG5hbWU9XCJJRFwiPjwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuRGVsaXZlcnlGZWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6ZSA5ZSu5ZGYXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVwiIGlkPVwiTmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLk5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCIgY29sLW1kLTJcIj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zbVwiPuaJk+WNsOWwj+elqDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zbVwiPuaJk+WNsOW/q+mAkuWNlTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgIDxPcmRlckdvb2RMaXN0IG9yZGVyR29vZHM9e29yZGVyR29vZHN9Lz5cblxuICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPuS/neWtmOmUgOWUruWNlTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyRWRpdG9yO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInO1xuXG5jbGFzcyBPcmRlckdvb2RMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9yZGVyR29vZDogbnVsbFxuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRPcmRlckdvb2RzRnJvbURCID0gdGhpcy5fbG9hZE9yZGVyR29vZHNGcm9tREIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfbG9hZE9yZGVyR29vZHNGcm9tREIob3JkZXIpIHtcbiAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiRkVUQ0hfT1JERVJfR09PRFNcIn0pXG5cbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm9yZGVyaWRcIiwgb3JkZXIuSUQpO1xuXG4gICAgICAgIGZldGNoKCcvYXBpL29yZGVyL2dvb2RzJywge1xuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7anNvbn0pO1xuXG4gICAgICAgICAgICBpZiAoanNvbi5jb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9PUkRFUl9HT09EU19ET05FXCIsIHBheWxvYWQ6IGpzb24uZGF0YX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge29yZGVyfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnNvbGUubG9nKHtvcmRlcn0pO1xuICAgICAgICBpZiAob3JkZXIpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZE9yZGVyR29vZHNGcm9tREIob3JkZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge29yZGVyR29vZHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtvcmRlckdvb2R9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgbGlzdEpzeCA9IG9yZGVyR29vZHMubWFwKChvZywgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgaWYgKG9yZGVyR29vZCAmJiBvcmRlckdvb2QuSUQgPT0gb2cuSUQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntvZy5Hb29kTmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e29nLk9mZmljYWxOYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57b2cuRGltZW5zaW9ufTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57b2cuVW5pdH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJQcmljZVwiIHZhbHVlPXtvZy5EZWZhdWx0UHJpY2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiUXVhbnRpdHlcIiB2YWx1ZT17b2cuUXVhbnRpdHl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntvZy5Ub3RhbENvc3RQcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3JkZXJHb29kOiBudWxsfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT7noa7lrpo8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntvZy5Hb29kTmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e29nLk9mZmljYWxOYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57b2cuRGltZW5zaW9ufTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57b2cuVW5pdH08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e29nLkRlZmF1bHRQcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e29nLlF1YW50aXR5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57b2cuVG90YWxDb3N0UHJpY2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29yZGVyR29vZDogb2d9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pue8lui+kTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiT3JkZXJHb29kTGlzdFwiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6I2v5ZOB5ZCNPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7pgJrnlKjlkI08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuinhOagvDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5Y2V5L2NPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7llK7ku7c8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaVsOmHjzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6YeR6aKdPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mk43kvZw8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7bGlzdEpzeH1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDx0Zm9vdD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI4XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxvYXRcIiA6IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT7mt7vliqDoja/lk4E8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Zm9vdD5cbiAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJHb29kTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9SZWR1Y2VyJztcblxuaW1wb3J0IHtGb3JtLCBGaWVsZCwgY3JlYXRlRm9ybUNvbnRyb2x9IGZyb20gJ2Zvcm0tbGliJztcbmltcG9ydCB7U2NoZW1hTW9kZWwsIFN0cmluZ1R5cGV9IGZyb20gJ3JzdWl0ZS1zY2hlbWEnO1xuXG4vKipcbiAqIOmUgOWUruiuouWNlemhtemdolxuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmNsYXNzIE9yZGVyTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlID0gU3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBzID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUocyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIHRoaXMubG9hZE9yZGVyTGlzdEZyb21EQiA9IHRoaXMuX2xvYWRPcmRlckxpc3RGcm9tREIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkdvT3JkZXJFZGl0b3IgPSB0aGlzLl9vbkdvT3JkZXJFZGl0b3IuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIF9vbkdvT3JkZXJFZGl0b3Iob3JkZXIpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvb3JkZXIvZWRpdG9yXCIpO1xuICAgIH1cblxuICAgIF9sb2FkT3JkZXJMaXN0RnJvbURCKCkge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9PUkRFUlNcIn0pO1xuXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImtleXdvcmRcIiwgXCJcIik7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInN0YXJ0XCIsIDApO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJsZW5ndGhcIiwgMTApO1xuXG4gICAgICAgIGZldGNoKCcvYXBpL29yZGVyL3NlYXJjaCcsIHtcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAgICAgaWYgKGpzb24uY29kZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiRkVUQ0hfT1JERVJTX0RPTkVcIiwgcGF5bG9hZDoganNvbi5kYXRhfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkT3JkZXJMaXN0RnJvbURCKCk7XG4gICAgfVxuXG4gICAgX2xvYWRPcmRlcnNGcm9tREIoKSB7XG4gICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkZFVENIX09SREVSU1wifSk7XG5cbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImtleXdvcmRcIiwgXCJcIik7XG5cbiAgICAgICAgZmV0Y2goJy9hcGkvb3JkZXIvc2VhcmNoJywge1xuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgICAgICBpZiAoanNvbi5jb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9PUkRFUlNfRE9ORVwiLCBwYXlsb2FkOiBqc29uLmRhdGF9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChqc29uLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudFVuTW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBvcmRlckxpc3Q6IHtcbiAgICAgICAgICAgICAgICBvcmRlcnMsXG4gICAgICAgICAgICAgICAgb3JkZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IG1MaXN0SnN4ID0gb3JkZXJzLm1hcCgobywgaW5kZXgpID0+ICg8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8dGQ+e28uTmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICA8dGQ+e28uUmVjZWlwdEFtb3VudH08L3RkPlxuICAgICAgICAgICAgPHRkPntvLlBheVN0eWxlTGFiZWx9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57by5EZWxpdmVyeUNvbXBhbnl9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57by5EZWxpdmVyeUZlZX08L3RkPlxuICAgICAgICAgICAgPHRkPntvLkRlbGl2ZXJDb2RlfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e28uRGVsaXZlclJlY2VpcHRGZWV9PC90ZD5cblxuICAgICAgICAgICAgPHRkIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIiA6IFwiODBweFwiXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh7cGF0aG5hbWU6IFwiL29yZGVyL2VkaXRvclwiLCBzdGF0ZTogb30pXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJFRElUT1JfTUVNQkVSXCIsIHBheWxvYWQ6IG99KVxuICAgICAgICAgICAgICAgICAgICB9fT7nvJbovpE8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+KSk7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiT3JkZXJMaXN0XCIgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMSBtYWluXCI+XG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGg0PumUgOWUruiuouWNleeuoeeQhjwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5fem9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gaWQ9XCJmb3JtXCIgb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyb2xlOiB2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lrqLkurrlp5PlkI08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuiNr+WTgTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6YeR6aKdPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ku5jmrL7mlrnlvI88L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuW/q+mAkuWFrOWPuDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5b+r6YCS6LS5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lv6vpgJLljZU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuS7o+aUtjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6ZSA5ZSu5ZGYPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mk43kvZw8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7bUxpc3RKc3h9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtGb3JtLCBGaWVsZCwgY3JlYXRlRm9ybUNvbnRyb2x9IGZyb20gJ2Zvcm0tbGliJztcbmltcG9ydCB7U2NoZW1hTW9kZWwsIFN0cmluZ1R5cGV9IGZyb20gJ3JzdWl0ZS1zY2hlbWEnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ3JzdWl0ZSc7XG5pbXBvcnQgTW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmNvbnN0IG1vZGVsID0gU2NoZW1hTW9kZWwoe05hbWU6IFN0cmluZ1R5cGUoKS5pc1JlcXVpcmVkKCfop5LoibLlkI3kuI3og73kuLrnqbonKX0pO1xuXG5pbXBvcnQgUmVjZWlwdEdvb2RMaXN0IGZyb20gJy4vUmVjZWlwdEdvb2RMaXN0JztcblxuLyoqXG4gKiDov5votKfljZXor6bmg4XnrqHnkIZcbiAqIEBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxuICovXG5jbGFzcyBSZWNlaXB0RWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJlY2VpcHQ6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZXM6IHt9LFxuICAgICAgICAgICAgZXJyb3JzOiB7fSxcbiAgICAgICAgICAgIHJlY2VpcHRHb29kczogW11cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxvYWRSZWNlaXB0RGV0YWlsRnJvbURCID0gdGhpcy5fbG9hZFJlY2VpcHREZXRhaWxGcm9tREIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfbG9hZFJlY2VpcHREZXRhaWxGcm9tREIocmVjZWlwdCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlY2VpcHQpO1xuXG4gICAgICAgIGZldGNoKCcvYXBpL3JlY2VpcHQvZGV0YWlsJywge1xuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe0lEOiByZWNlaXB0LklEfSksXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpcHQ6IGpzb24uZGF0YSwgdmFsdWVzOiBqc29uLmRhdGEsIHJlY2VpcHRHb29kczoganNvbi5SZWNlaXB0R29vZERhdGF9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogcmVjZWlwdFxuICAgICAgICAgICAgfVxuICAgICAgICB9ID0gbmV4dFByb3BzO1xuXG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgIHN0YXRlOiBvbGRSZWNlaXB0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlY2VpcHQpO1xuXG4gICAgICAgIGlmIChvbGRSZWNlaXB0KSB7XG4gICAgICAgICAgICBpZiAocmVjZWlwdCAmJiByZWNlaXB0LklEICE9IG9sZFJlY2VpcHQuSUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRSZWNlaXB0RGV0YWlsRnJvbURCKHJlY2VpcHQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlczogcmVjZWlwdCwgcmVjZWlwdH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlY2VpcHQpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFJlY2VpcHREZXRhaWxGcm9tREIocmVjZWlwdCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZXM6IHJlY2VpcHQsIHJlY2VpcHR9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgIHN0YXRlOiByZWNlaXB0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlY2VpcHQpO1xuXG4gICAgICAgIGlmIChyZWNlaXB0KSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRSZWNlaXB0RGV0YWlsRnJvbURCKHJlY2VpcHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3JlY2VpcHQsIHZhbHVlcywgZXJyb3JzLCByZWNlaXB0R29vZHN9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKDxkaXYgaWQ9XCJSZWNlaXB0RWRpdG9yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtMSBtYWluXCI+XG4gICAgICAgICAgICAgICAgPGg0Pui/m+i0p+WNlee8lui+kTwvaDQ+XG4gICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ob3Jpem9udGFsXCIgcmVmPXtyZWYgPT4gdGhpcy5mb3JtID0gcmVmfSB2YWx1ZXM9e3ZhbHVlc30gaWQ9XCJmb3JtXCIgbW9kZWw9e21vZGVsfSBvbkNoYW5nZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfX0gb25DaGVjaz17KGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDkvpvlupTllYYmbmJzcDs8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIlZlbmRvck5hbWVcIiBpZD1cIlZlbmRvck5hbWVcIiBwbGFjZWhvbGRlcj1cIuS+m+W6lOWVhlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLlZlbmRvck5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOiBlOezu+S6uiZuYnNwOzxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiQ29udGFjdFwiIGlkPVwiQ29udGFjdFwiIHBsYWNlaG9sZGVyPVwi6IGU57O75Lq6XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuQ29udGFjdH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1tZC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg55S16K+dJm5ic3A7PHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJUZWxlcGhvbmVcIiBpZD1cIlRlbGVwaG9uZVwiIHBsYWNlaG9sZGVyPVwi55S16K+dXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuVGVsZXBob25lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDplIDllK7lkZgmbmJzcDs8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkVtcGxveWVlTmFtZVwiIGlkPVwiRW1wbG95ZWVOYW1lXCIgcGxhY2Vob2xkZXI9XCLplIDllK7lkZhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5FbXBsb3llZU5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi/m+i0p+aXpeacnyZuYnNwOzxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyICAgdmFsdWU9e01vbWVudCgpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJEYXRlXCIgaWQ9XCJEYXRlXCIgcGxhY2Vob2xkZXI9XCLml6XmnJ9cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPFJlY2VpcHRHb29kTGlzdCBnb29kcz17cmVjZWlwdEdvb2RzfSAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNlaXB0RWRpdG9yO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgUmVjZWlwdEdvb2RMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJlY2VpcHRHb29kOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Z29vZHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtyZWNlaXB0R29vZH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBqc3ggPSBnb29kcy5tYXAoKGcsIGluZGV4KSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChyZWNlaXB0R29vZCAmJiByZWNlaXB0R29vZC5JRCA9PSBnLklEKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57Zy5Hb29kSUR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntnLk5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBzdHlsZT17e1wid2lkdGhcIjpcIjgwcHhcIn19IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJFeHBpcmVkRGF0ZVwiIHZhbHVlPXtnLkV4cGlyeURhdGV9IHBsYWNlaG9sZGVyPVwi5pyJ5pWI5pyfXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHN0eWxlPXt7XCJ3aWR0aFwiOlwiNjBweFwifX0gdHlwZT1cInRleHRcIiBpZD1cIkNvc3RQcmljZVwiIHZhbHVlPXtnLkNvc3RQcmljZX0gcGxhY2Vob2xkZXI9XCLmiJDmnKzku7dcIi8+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBzdHlsZT17e1wid2lkdGhcIjpcIjYwcHhcIn19IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJBbW91bnRcIiB2YWx1ZT17Zy5BbW91bnR9IHBsYWNlaG9sZGVyPVwi6YeR6aKdXCIvPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgc3R5bGU9e3tcIndpZHRoXCI6XCI4MHB4XCJ9fSB0eXBlPVwidGV4dFwiIGlkPVwiQmF0Y2hOb1wiIHZhbHVlPXtnLkJhdGNoTm99IHBsYWNlaG9sZGVyPVwi5om55Y+3XCIvPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4ge319PuS/neWtmDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPik7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57Zy5Hb29kSUR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntnLk5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAge2cuRXhwaXJ5RGF0ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2cuQ29zdFByaWNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57Zy5BbW91bnR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntnLkJhdGNoTm99PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpcHRHb29kOmd9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pue8lui+kTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiR29vZExpc3RcIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuiNr+WTgeWQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6YCa55So5ZCNPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mnInmlYjmnJ88L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPui/m+S7tzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pWw6YePPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mibnlj7c8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaTjeS9nDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtqc3h9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNlaXB0R29vZExpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuaW1wb3J0IFJlY2VpcHRFZGl0b3IgZnJvbSAnLi9SZWNlaXB0RWRpdG9yJztcblxuY2xhc3MgUmVjZWlwdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlID0gU3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBzID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUocyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIHRoaXMubG9hZFJlY2VpcHRzRnJvbURCID0gdGhpcy5fbG9hZFJlY2VpcHRzRnJvbURCLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2xvYWRSZWNlaXB0c0Zyb21EQigpIHtcbiAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiRkVUQ0hfUkVDRUlQVFNcIn0pO1xuXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIktleVdvcmRcIiwgXCJcIik7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIlBhZ2VcIiwgMCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIkxpbWl0XCIsIDEwKTtcblxuICAgICAgICBmZXRjaCgnL2FwaS9yZWNlaXB0L3NlYXJjaCcsIHtcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkZFVENIX1JFQ0VJUFRTX0RPTkVcIiwgcGF5bG9hZDoganNvbi5kYXRhfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkUmVjZWlwdHNGcm9tREIoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICByZWNlaXB0TGlzdDoge1xuICAgICAgICAgICAgICAgIHJlY2VpcHRzLFxuICAgICAgICAgICAgICAgIHJlY2VpcHQsXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgZWRpdG9ySnN4ID0gKFwiXCIpO1xuXG4gICAgICAgIGlmIChyZWNlaXB0KSB7XG4gICAgICAgICAgICBlZGl0b3JKc3ggPSAoPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgIDxSZWNlaXB0RWRpdG9yIHJlY2VpcHQ9e3JlY2VpcHR9IG9uU2F2ZUNvbXBsZXRlZD17dGhpcy5vblNhdmVDb21wbGV0ZWR9IG9uQ2FuY2VsZWQ9e3RoaXMub25DYW5jZWxlZH0vPlxuICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsaXN0SnN4ID0gcmVjZWlwdHMubWFwKChyLCBpbmRleCkgPT4gKDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDx0ZD57ci5WZW5kb3JOYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3IuVGVsZXBob25lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3IuQ29udGFjdH08L3RkPlxuICAgICAgICAgICAgPHRkPntyLkRhdGV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57ci5BbW91bnR9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57ci5FbXBsb3llZU5hbWV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6XCIvcmVjZWlwdC9lZGl0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOnJcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkNIRUNLRURfUkVDRUlQVFwiLCBwYXlsb2FkOiByfSlcbiAgICAgICAgICAgICAgICAgICAgfX0+57yW6L6RPC9hPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj4pKTtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiUmVjZWlwdExpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0xIG1haW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGFnZV90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+6L+b6LSn5Y2V566h55CGPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5fem9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJLZXl3b3JkXCIgaWQ9XCJLZXl3b3JkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmn6Xor6JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkNIRUNLRURfUkVDRUlQVFwiLCBwYXlsb2FkOiB7fX0pfSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOa3u+WKoOaWsOi/m+i0p+WNlVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5L6b5bqU5ZWGPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+55S16K+dPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+6IGU57O75Lq6PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pel5pyfPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+6YeR6aKdPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+6I2v5biIPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pON5L2cPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SnN4fVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtlZGl0b3JKc3h9XG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2VpcHRMaXN0O1xuIiwiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgICBnb29kTGlzdDoge1xuICAgICAgICBnb29kczogW10sXG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBnb29kOiBudWxsLFxuICAgICAgICBhY3Rpb246IFwiaGlkZGVuXCJcbiAgICB9LFxuICAgIGdvb2RFZGl0OiB7XG4gICAgICAgIGdvb2Q6IG51bGwsXG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlXG4gICAgfSxcbiAgICBvcmRlckxpc3Q6IHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIG9yZGVyczogW10sXG4gICAgICAgIG9yZGVyOiBudWxsXG4gICAgfSxcbiAgICBvcmRlckVkaXRvcjoge1xuICAgICAgICBvcmRlcjogbnVsbCxcbiAgICAgICAgb3JkZXJHb29kczogW10sXG4gICAgICAgIHZhbHVlczoge30sXG4gICAgICAgIGVycm9yczoge30sXG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlwiXG4gICAgfSxcbiAgICBtZW1iZXJMaXN0OiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBtZW1iZXJzOiBbXSxcbiAgICAgICAgbWVtYmVyOiBudWxsLFxuICAgICAgICBhY3Rpb246IFwiaGlkZGVuXCJcbiAgICB9LFxuICAgIG1lbWJlckVkaXRvcjoge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgdmFsdWVzOiBbXSxcbiAgICAgICAgZXJyb3JzOiB7fVxuICAgIH0sXG5cbiAgICBpbnRlbnRpb25MaXN0OiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpbnRlbnRpb25zOiBbXSxcbiAgICAgICAgdmFsdWVzOiB7fSxcbiAgICAgICAgZXJyb3JzOiB7fVxuICAgIH0sXG5cbiAgICBpbnZpc3RMaXN0OiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpbnZpc3RzOiBbXSxcbiAgICAgICAgdmFsdWVzOiB7fSxcbiAgICAgICAgZXJyb3JzOiB7fVxuICAgIH0sXG4gICAgbWVtYmVyTGlzdDoge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgbWVtYmVyczogW10sXG4gICAgICAgIG1lbWJlcjoge31cbiAgICB9LFxuICAgIHZlbmRvckxpc3Q6IHtcbiAgICAgICAgdmVuZG9yczogW10sXG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB2ZW5kb3I6IHt9XG4gICAgfSxcbiAgICByZWNlaXB0TGlzdDoge1xuICAgICAgICByZWNlaXB0czogW10sXG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICByZWNlaXB0OiBudWxsXG4gICAgfSxcbiAgICBvcmRlckdvb2RMaXN0OiB7XG4gICAgICAgIG9yZGVyR29vZHM6IFtdLFxuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZVxuICAgIH0sXG4gICAgeHh4eDoge31cbn07XG5cbmZ1bmN0aW9uIFhYWFhSZWR1Y2VyKHN0YXRlID0gZGVmYXVsdFN0YXRlLnh4eHgsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIlwiOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBPcmRlckdvb2RMaXN0UmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS5vcmRlckdvb2RMaXN0LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9PUkRFUl9HT09EU1wiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNGZXRjaGluZzogdHJ1ZX0pXG4gICAgICAgIGNhc2UgXCJGRVRDSF9PUkRFUl9HT09EU19ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvcmRlckdvb2RzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFJlY2VpcHRzTGlzdFJlZHVjZXIoc3RhdGUgPSBkZWZhdWx0U3RhdGUucmVjZWlwdExpc3QsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkZFVENIX1JFQ0VJUFRTXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtpc0ZldGNoaW5nOiB0cnVlfSk7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9SRUNFSVBUU19ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZWNlaXB0czogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiQ0hFQ0tFRF9SRUNFSVBUXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZWNlaXB0OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgXCJDSEVDS0VEX05PTkVcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlbmRvcjogbnVsbFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFZlbmRvckxpc3RSZWR1Y2VyKHN0YXRlID0gZGVmYXVsdFN0YXRlLnZlbmRvckxpc3QsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkZFVENIX1ZFTkRPUlNcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgdmVuZG9yOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIkZFVENIX1ZFTkRPUlNfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVuZG9yczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiQ0hFQ0tFRF9WRU5ET1JcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlbmRvcjogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiQ0hFQ0tFRF9OT05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZW5kb3I6IG51bGxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBJbnZpc3RMaXN0UmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS5pbnZpc3RMaXN0LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9JTlZJVEVcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2lzRmV0Y2hpbmc6IHRydWV9KTtcbiAgICAgICAgY2FzZSBcIkZFVENIX0lOVklURV9ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbnZpc3RzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIEludGVudGlvbnNMaXN0UmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS5pbnRlbnRpb25MaXN0LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9JTlRFTlRJT05TXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtpc0ZldGNoaW5nOiB0cnVlfSk7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9JTlRFTlRJT05TX0RPTkVcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGludGVudGlvbnM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gTWVtYmVyRWRpdG9yUmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS5tZW1iZXJFZGl0b3IsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkZFVENIX01FTUJFUlwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNGZXRjaGluZzogdHJ1ZX0pO1xuICAgICAgICBjYXNlIFwiRkVUQ0hfTUVNQkVSX0RPTkVcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lbWJlcnM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gTWVtYmVyTGlzdFJlZHVjZXIoc3RhdGUgPSBkZWZhdWx0U3RhdGUubWVtYmVyTGlzdCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiRkVUQ0hfTUVNQkVSXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtpc0ZldGNoaW5nOiB0cnVlfSk7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9NRU1CRVJfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVtYmVyczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiRURJVE9SX01FTUJFUlwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgbWVtYmVyOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwidXBkYXRlX21lbWJlclwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIk1FTUJFUl9FRElUT1JfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgbWVtYmVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJoaWRkZW5cIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgXCJTRVRfQUREX01PREVcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2FjdGlvbjogXCJhZGRfbWVtYmVyXCJ9KTtcbiAgICAgICAgY2FzZSBcIk1FTUJFUl9FRElUT1JfQ0FOQ0VMXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgbWVtYmVyOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIkVESVRPUl9NRU1CRVJfSU5URU5USU9OU1wiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcImFkZF9pbnRlbnRpb25cIixcbiAgICAgICAgICAgICAgICBtZW1iZXI6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIkVESVRPUl9NRU1CRVJfVklTSVRcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJhZGRfdmlzaXRcIixcbiAgICAgICAgICAgICAgICBtZW1iZXI6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIE9yZGVyTGlzdFJlZHVjZXIoc3RhdGUgPSBkZWZhdWx0U3RhdGUub3JkZXJMaXN0LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9PUkRFUlNcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2lzRmV0Y2hpbmc6IHRydWV9KTtcbiAgICAgICAgY2FzZSBcIkZFVENIX09SREVSU19ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvcmRlcnM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIlwiOlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gT3JkZXJFZGl0b3JSZWR1Y2VyKHN0YXRlID0gZGVmYXVsdFN0YXRlLm9yZGVyRWRpdG9yLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9PUkRFUlwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNGZXRjaGluZzogdHJ1ZX0pO1xuICAgICAgICBjYXNlIFwiRkVUQ0hfT1JERVJfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgb3JkZXI6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICAgICAgICAgICAgb3JkZXJHb29kczogYWN0aW9uLnBheWxvYWQuZ29vZHNEYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIlNFVF9DSEVDS0VEX09SREVSXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIG9yZGVyOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9PUkRFUlNfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgb3JkZXJzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBHb29kTGlzdFJlZHVjZXIoc3RhdGUgPSBkZWZhdWx0U3RhdGUuZ29vZExpc3QsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkZFVENIX0dPT0RTXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtpc0ZldGNoaW5nOiB0cnVlfSk7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9HT09EU19ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBnb29kczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiRURJVE9SX0dPT0RcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGdvb2Q6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJ1cGRhdGVcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgXCJTRVRfQUREX01PREVcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGdvb2Q6IG51bGwsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcImFkZFwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIkdPT0RfRURJVE9SX0NBTkNFTFwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgIGdvb2Q6IG51bGxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBHb29kRWRpdG9yUmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS5nb29kRWRpdCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiQ0xFQVJfR09PRF9ERVRBSUxcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW06IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiTE9BRF9HT09ERF9FVEFJTFwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNGZXRjaGluZzogdHJ1ZX0pOztcbiAgICAgICAgY2FzZSBcIkxPQURfR09PRERfRVRBSUxfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pOztcbiAgICAgICAgY2FzZSBcIkFQUEVORF9HT09EXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtpc0ZldGNoaW5nOiB0cnVlfSk7XG4gICAgICAgIGNhc2UgXCJBUFBFTkRfR09PRF9ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtpc0ZldGNoaW5nOiBmYWxzZX0pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgZ29vZExpc3Q6IEdvb2RMaXN0UmVkdWNlcixcbiAgICBnb29kRWRpdDogR29vZEVkaXRvclJlZHVjZXIsXG4gICAgbWVtYmVyTGlzdDogTWVtYmVyTGlzdFJlZHVjZXIsXG4gICAgb3JkZXJMaXN0OiBPcmRlckxpc3RSZWR1Y2VyLFxuICAgIGludmlzdExpc3Q6IEludmlzdExpc3RSZWR1Y2VyLFxuICAgIGludGVudGlvbkxpc3Q6IEludGVudGlvbnNMaXN0UmVkdWNlcixcbiAgICB2ZW5kb3JMaXN0OiBWZW5kb3JMaXN0UmVkdWNlcixcbiAgICByZWNlaXB0TGlzdDogUmVjZWlwdHNMaXN0UmVkdWNlcixcbiAgICBvcmRlckVkaXRvcjogT3JkZXJFZGl0b3JSZWR1Y2VyLFxuICAgIG9yZGVyR29vZExpc3Q6IE9yZGVyR29vZExpc3RSZWR1Y2VyXG4gICAgLy8gdmVuZG9yRWRpdG9yOiBWZW5kb3JFZGl0b3JSZWR1Y2VyXG59KTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUodGh1bmspKTtcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5cbmNsYXNzIFNpdGVJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge31cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICg8ZGl2PlxuICAgICAgICAgICAg6buY6K6k6aG16Z2iXG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpdGVJbmRleDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFN0YXRzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge31cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiU3RhdHNMaXN0XCI+XG4gICAgICAgICAgICDmlbDmja7nu5/orqFcbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdHNMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuY29uc3QgbW9kZWwgPSBTY2hlbWFNb2RlbCh7TmFtZTogU3RyaW5nVHlwZSgpLmlzUmVxdWlyZWQoJ+inkuiJsuWQjeS4jeiDveS4uuepuicpfSk7XG5cbmZ1bmN0aW9uIHBhcmFtKGZvcm1kYXRhKSB7fVxuXG5jbGFzcyBWZW5kb3JFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWVzOiB7fSxcbiAgICAgICAgICAgIGVycm9yczoge31cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2F2ZVZlbmRvciA9IHRoaXMuX3NhdmVWZW5kb3IuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfc2F2ZVZlbmRvcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm0uY2hlY2soKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogXCLmlbDmja7moLzlvI/mnInplJnor69cIn0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQge3ZhbHVlc30gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBhY3Rpb24gPSB2YWx1ZXMuSUQgJiYgdmFsdWVzLklEID4gMFxuICAgICAgICAgICAgPyBcInVwZGF0ZVwiXG4gICAgICAgICAgICA6IFwic2F2ZVwiO1xuXG4gICAgICAgIGZldGNoKGAvYXBpL3ZlbmRvci8ke2FjdGlvbn1gLCB7XG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coe2pzb259KTtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TYXZlQ29tcGxldGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL1RPRE9cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGxldCB7dmVuZG9yfSA9IG5leHRQcm9wcztcblxuICAgICAgICBsZXQge3ZlbmRvcjoge1xuICAgICAgICAgICAgICAgIG9sZFZlbmRvclxuICAgICAgICAgICAgfX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChvbGRWZW5kb3IpIHtcbiAgICAgICAgICAgIGlmICh2ZW5kb3IgJiYgdmVuZG9yLklEICE9IG9sZFZlbmRvci5JRCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlczogdmVuZG9yfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZXM6IHZlbmRvcn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7dmVuZG9yfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKHZlbmRvcikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVzOiB2ZW5kb3J9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt2ZW5kb3J9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHt2YWx1ZXMsIGVycm9ycywgbWVzc2FnZX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIlZlbmRvckVkaXRvclwiIGNsYXNzTmFtZT1cImVkaXRvcl96b25lXCI+XG4gICAgICAgICAgICA8aDQ+5L6b5bqU5ZWG566h55CGPC9oND5cbiAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gdmFsdWVzPXt2YWx1ZXN9IGlkPVwiZm9ybTJcIiBtb2RlbD17bW9kZWx9IG9uQ2hhbmdlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlc30pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgICAgICB9fSBvbkNoZWNrPXsoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOS+m+W6lOWVhiZuYnNwOzxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVwiIGlkPVwiTmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwiaGlkZGVuXCIgY2xhc3NOYW1lPVwiXCIgbmFtZT1cIklEXCI+PC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLk5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDogZTns7vkurombmJzcDs8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkNvbnRhY3RcIiBpZD1cIkNvbnRhY3RcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuQ29udGFjdH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOiBlOezu+eUteivnSZuYnNwOzxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiVGVsZXBob25lXCIgaWQ9XCJUZWxlcGhvbmVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuVGVsZXBob25lfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5Zyw5Z2AXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiQWRkcmVzc1wiIGlkPVwiQWRkcmVzc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5BZGRyZXNzfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5aSH5rOoXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiUmVtYXJrXCIgaWQ9XCJSZW1hcmtcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuUmVtYXJrfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPnttZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zYXZlVmVuZG9yfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOS/neWtmHNcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2FuY2VsKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PuWPlua2iDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlbmRvckVkaXRvcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9SZWR1Y2VyJztcblxuaW1wb3J0IHtGb3JtLCBGaWVsZCwgY3JlYXRlRm9ybUNvbnRyb2x9IGZyb20gJ2Zvcm0tbGliJztcbmltcG9ydCB7U2NoZW1hTW9kZWwsIFN0cmluZ1R5cGV9IGZyb20gJ3JzdWl0ZS1zY2hlbWEnO1xuXG5pbXBvcnQgVmVuZG9yRWRpdG9yIGZyb20gJy4vVmVuZG9yRWRpdG9yJztcblxuY2xhc3MgVmVuZG9yTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUgPSBTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy5sb2FkVmVuZG9yc0Zyb21EQiA9IHRoaXMuX2xvYWRWZW5kb3JzRnJvbURCLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DYW5jZWwgPSB0aGlzLl9vbkNhbmNlbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU2F2ZUNvbXBsZXRlZCA9IHRoaXMuX29uU2F2ZUNvbXBsZXRlZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9vbkNhbmNlbCgpIHtcbiAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiQ0hFQ0tFRF9OT05FXCJ9KTtcbiAgICB9XG5cbiAgICBfb25TYXZlQ29tcGxldGVkKCkge1xuICAgICAgICB0aGlzLmxvYWRWZW5kb3JzRnJvbURCKCk7XG4gICAgfVxuXG4gICAgX2xvYWRWZW5kb3JzRnJvbURCKCkge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9WRU5ET1JTXCJ9KTtcblxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJLZXlXb3JkXCIsIFwiXCIpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJQYWdlXCIsIDApO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJMaW1pdFwiLCAxMCk7XG5cbiAgICAgICAgZmV0Y2goJy9hcGkvdmVuZG9yL3NlYXJjaCcsIHtcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAgICAgaWYgKGpzb24uY29kZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiRkVUQ0hfVkVORE9SU19ET05FXCIsIHBheWxvYWQ6IGpzb24uZGF0YX0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMubG9hZFZlbmRvcnNGcm9tREIoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHZlbmRvckxpc3Q6IHtcbiAgICAgICAgICAgICAgICB2ZW5kb3JzLFxuICAgICAgICAgICAgICAgIHZlbmRvcixcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBlZGl0b3JKc3ggPSAoXCJcIik7XG4gICAgICAgIGlmICh2ZW5kb3IpIHtcbiAgICAgICAgICAgIGVkaXRvckpzeCA9ICg8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgPFZlbmRvckVkaXRvciB2ZW5kb3I9e3ZlbmRvcn0gb25TYXZlQ29tcGxldGVkPXt0aGlzLm9uU2F2ZUNvbXBsZXRlZH0gb25DYW5jZWw9e3RoaXMub25DYW5jZWx9Lz5cbiAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsaXN0SnN4ID0gdmVuZG9ycy5tYXAoKHYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8dGQ+e3YuTmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57di5UZWxlcGhvbmV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3YuQWRkcmVzc308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57di5Db250YWN0fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt2LlJlbWFya308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57di5VcGRhdGVUaW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJDSEVDS0VEX1ZFTkRPUlwiLCBwYXlsb2FkOiB2fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Pue8lui+kTwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj4pO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIlZlbmRvckxpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0xIG1haW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGFnZV90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+5L6b5bqU5ZWG566h55CGPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5fem9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiByZWY9e3JlZiA9PiB0aGlzLmZvcm0gPSByZWZ9IGlkPVwiZm9ybVwiIG9uQ2hhbmdlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JvbGU6IHZhbHVlc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBvbkNoZWNrPXsoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVwiIGlkPVwiTmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5p+l6K+iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj7mt7vliqDkvpvlupTllYY8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7kvpvlupTllYblkI08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7nlLXor508L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lnLDlnYA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ogZTns7vkuro8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lpIfms6g8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7liJvlu7rml7bpl7Q8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mk43kvZw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RKc3h9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cIlBhZ2UgbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdpbmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JmxhcXVvOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+MTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj4yPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+NDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj41PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGFyaWEtbGFiZWw9XCJOZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZyYXF1bzs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2VkaXRvckpzeH1cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVuZG9yTGlzdDtcbiIsImV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBHb29kTGlzdFxufVxuZnJvbSAnLi9Hb29kTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBPcmRlckxpc3Rcbn1cbmZyb20gJy4vT3JkZXJMaXN0JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIFN0YXRzTGlzdFxufVxuZnJvbSAnLi9TdGF0c0xpc3QnO1xuXG5leHBvcnQge1xuICAgIGRlZmF1bHQgYXMgUmVjZWlwdExpc3Rcbn1cbmZyb20gJy4vUmVjZWlwdExpc3QnO1xuXG5leHBvcnQge1xuICAgIGRlZmF1bHQgYXMgTWVtYmVyTGlzdFxufVxuZnJvbSAnLi9NZW1iZXJMaXN0JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIFZlbmRvckxpc3Rcbn1cbmZyb20gJy4vVmVuZG9yTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBTaXRlSW5kZXhcbn1cbmZyb20gJy4vU2l0ZUluZGV4JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIE1haW5NZW51XG59XG5mcm9tICcuL01haW5NZW51JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIENvbnRhaW5lclxufVxuZnJvbSAnLi9Db250YWluZXInO1xuXG5leHBvcnQge1xuICAgIGRlZmF1bHQgYXMgT3JkZXJFZGl0b3Jcbn1cbmZyb20gJy4vT3JkZXJFZGl0b3InO1xuXG5leHBvcnQge1xuICAgIGRlZmF1bHQgYXMgUmVjZWlwdEVkaXRvclxufVxuZnJvbSAnLi9SZWNlaXB0RWRpdG9yJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHBSb3V0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9NYW5hZ2VyUm91dGVyJztcbmltcG9ydCAncnN1aXRlL3N0eWxlcy9sZXNzL2luZGV4Lmxlc3MnO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIFJlYWN0RE9NLnJlbmRlcig8QXBwUm91dGVyIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQXBwJykpO1xufTtcblxuXG4vLyBpZihtb2R1bGUuaG90KXtcbi8vICAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vY29tcG9uZW50cy9NYW5hZ2VyUm91dGVyJyxmdW5jdGlvbigpe1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnQWNjZXB0aW5nIHRoZSB1cGRhdGVkIE1hbmFnZXJSb3V0ZXIgbW9kdWxlIScpO1xuLy8gICAgIH0pXG4vLyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGxpYjsiXSwic291cmNlUm9vdCI6IiJ9
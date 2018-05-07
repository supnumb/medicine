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
/******/ 	var hotCurrentHash = "75891b87f46c41cfa3f3"; // eslint-disable-line no-unused-vars
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

/***/ "./node_modules/redux/es/index.js":
/*!*************************************************************************!*\
  !*** delegated ./node_modules/redux/es/index.js from dll-reference lib ***!
  \*************************************************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/redux/es/index.js");

/***/ }),

/***/ "./node_modules/rsuite-schema/lib/index.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/rsuite-schema/lib/index.js from dll-reference lib ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/rsuite-schema/lib/index.js");

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

            var formData = new FormData();

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


            console.log({ action: action, good: good });

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
                { id: 'GoodEditor' },
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
                    { className: 'col-md-3' },
                    _react2.default.createElement(_GoodEditor2.default, { action: action, good: good, onCanceled: this.onCancel, onGoodSaveCompleted: this.onGoodSaveCompleted })
                );
            } else if (action == "add") {
                editorJsx = _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
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
                    { className: 'col-md-11 col-md-offset-1 main' },
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
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-8 col-md-offset-1 main' },
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var routes = [{
    path: "/orders/",
    extra: true,
    component: _index.OrderList
}, {
    path: "/receipts/",
    extra: true,
    component: _index.ReceiptList
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
 * 药品基础数据编辑组件
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
        key: 'componentDidMount',
        value: function componentDidMount() {

            this.loadOrdersFromDB();
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
                    _react2.default.createElement('td', null),
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
                                    _Reducer2.default.dispatch({ type: "EDITOR_MEMBER", payload: m });
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
        return _this;
    }

    _createClass(ReceiptList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {
            this.unSubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { id: 'ReceiptList', className: 'col-md-10 col-md-offset-1 main' },
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
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null)
                        )
                    )
                )
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

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

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
    intentionList: IntentionsListReducer
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

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VendorList = function (_React$Component) {
    _inherits(VendorList, _React$Component);

    function VendorList(props) {
        _classCallCheck(this, VendorList);

        return _possibleConstructorReturn(this, (VendorList.__proto__ || Object.getPrototypeOf(VendorList)).call(this, props));
    }

    _createClass(VendorList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { id: 'VendorList', className: 'col-md-10 col-md-offset-1 main' },
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
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null)
                        )
                    )
                )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zhc3QtbGV2ZW5zaHRlaW4vbGV2ZW5zaHRlaW4uanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9mb3JtLWxpYi9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBsaWIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBsaWIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaG90LWxvYWRlci9kaXN0L3JlYWN0LWhvdC1sb2FkZXIuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWhvdC1sb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0L3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0LmVzLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9lcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JzdWl0ZS1zY2hlbWEvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBsaWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NoYWxsb3dlcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSBsaWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dvb2RFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR29vZExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW50ZW50aW9uRWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ludGVudGlvbkxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW52aXRlRWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ludml0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbk1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFuYWdlclJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW1iZXJFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVtYmVyTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcmRlckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVjZWlwdExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaXRlSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RhdHNMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZlbmRvckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi9iYWNrLmNsaWVudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsaWJcIiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJyb3V0ZSIsInBhdGgiLCJPcmRlck1lc3MiLCJwcm9wcyIsIm1vZGVsIiwiTmFtZSIsImlzUmVxdWlyZWQiLCJHb29kRWRpdG9yIiwic3RhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJpc0ZldGNoaW5nIiwic3VibWl0R29vZCIsIl9zdWJtaXRHb29kIiwiYmluZCIsImNhbmNlbCIsIl9jYW5jZWwiLCJvbkNhbmNlbGVkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZldGNoIiwiYm9keSIsIm1ldGhvZCIsIm1vZGUiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29kZSIsIm9uR29vZFNhdmVDb21wbGV0ZWQiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsImVyciIsImdvb2QiLCJzZXRTdGF0ZSIsIm5leHRQcm9wcyIsImFjdGlvbiIsIm9sZEdvb2QiLCJsb2ciLCJJRCIsIk9mZmljYWxOYW1lIiwiVW5pdCIsIkRpbWVuc2lvbiIsIkRlZmF1bHRDb3N0UHJpY2UiLCJEZWZhdWx0UHJpY2UiLCJMaW1pdFByaWNlIiwiVXNlV2F5IiwiTWFudWZhY3R1cmVyIiwiZm9ybSIsImNsZWFuRXJyb3JzIiwicmVmIiwiTmFtZVBpbllpbiIsIkZvcm1PZkRydWciLCJCaWRQcmljZSIsIkNvbXBldGlvbiIsIk1lZGljYXJlIiwiUGVyaW9kVHJlYXRtZW50IiwiVHJhbnNsYXRpb24iLCJBcHByb3ZhbE51bWJlciIsInN1Ym1pdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiR29vZExpc3QiLCJ1blN1YnNjcmliZSIsIlN0b3JlIiwic3Vic2NyaWJlIiwicyIsImdldFN0YXRlIiwibG9hZEdvb2RMaXN0RnJvbURCIiwiX2xvYWRHb29kTGlzdEZyb21EQiIsIm9uQ2FuY2VsIiwiX29uQ2FuY2VsIiwib25TYXZlQ29tcGxldGVkIiwiX29uU2F2ZUNvbXBsZXRlZCIsImRpc3BhdGNoIiwidHlwZSIsImFwcGVuZCIsInBheWxvYWQiLCJkYXRhIiwiYWxlcnQiLCJtZXNzYWdlIiwiZ29vZExpc3QiLCJnb29kcyIsImVkaXRvckpzeCIsIm1MaXN0SnN4IiwibWFwIiwiZyIsImluZGV4Iiwicm9sZSIsIkludGVudGlvbkVkaXRvciIsImxvYWRPYmplY3REZXRhaWwiLCJfbG9hZE9iamVjdERldGFpbCIsInN1Ym1pdEludGVudGlvbiIsIl9zdWJtaXRJbnRlbnRpb24iLCJtZW1iZXIiLCJSZW1hcmtzIiwiUmVtYXJrIiwiSW50ZW50aW9uTGlzdCIsImxvYWRJbnRlbnRpb25zRnJvbURCIiwiX2xvYWRJbnRlbnRpb25zRnJvbURCIiwiaW50ZW50aW9uRGF0YSIsImludGVudGlvbkxpc3QiLCJpbnRlbnRpb25zIiwibGlzdEpzeCIsImkiLCJHb29kcyIsIk9wZXJhdG9ySUQiLCJDcmVhdGVUaW1lIiwiSW52aXRlRWRpdG9yIiwic3VibWl0SW52aXRlIiwiX3N1Ym1pdEludml0ZSIsIkludml0ZUxpc3QiLCJsb2FkVmlzdHNGcm9tREIiLCJfbG9hZFZpc3RzRnJvbURCIiwidmlzaXREYXRhIiwib2xkTWVtYmVyIiwiaW52aXN0TGlzdCIsImludmlzdHMiLCJNZW1iZXJJRCIsIk1haW5NZW51Iiwicm91dGVzIiwiZXh0cmEiLCJjb21wb25lbnQiLCJPcmRlckxpc3QiLCJSZWNlaXB0TGlzdCIsIlN0YXRzTGlzdCIsIk1lbWJlckxpc3QiLCJWZW5kb3JMaXN0IiwiU2l0ZUluZGV4IiwiTWFuYWdlclJvdXRlciIsImVtcGxveWVlIiwibW9kdWxlIiwiTWVtYmVyRWRpdG9yIiwiX3N1Ym1pdCIsImNoZWNrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInVybCIsIm9uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZCIsIlBpbllpbiIsIkdlbmRlciIsIlRlbGVwaG9uZSIsIkRpc2Vhc2VzIiwiUmVsYXRpb25XaXRoUGF0aWVudCIsImhlYWRlciIsIkNpdHkiLCJBZGRyZXNzIiwiV2VpWGluQ29kZSIsIkZyaWVuZE5hbWUiLCJCaXJ0aFllYXIiLCJsb2FkTWVtYmVyTGlzdCIsIl9sb2FkTWVtYmVyTGlzdCIsIl9vbk1lbWJlckRldGFpbFNhdmVDb21wbGV0ZWQiLCJvbk1lbWJlckRldGFpbENhbmNlbCIsIl9vbk1lbWJlckRldGFpbENhbmNlbCIsIm5ld01lbWJlciIsIm1lbWJlckxpc3QiLCJtZW1iZXJzIiwibSIsIk1vYmlsUGhvbmUiLCJJbnRlbnRpb25Hb29kcyIsIkludGVudGlvblF1YW50aXR5IiwiVmlzaXRRdWFudGl0eSIsIk9yZGVyUXVhbnRpdHkiLCJsb2FkT3JkZXJMaXN0RnJvbURCIiwiX2xvYWRPcmRlckxpc3RGcm9tREIiLCJvbkdvT3JkZXJFZGl0b3IiLCJfb25Hb09yZGVyRWRpdG9yIiwib3JkZXIiLCJoaXN0b3J5IiwicHVzaCIsImxvYWRPcmRlcnNGcm9tREIiLCJvcmRlckxpc3QiLCJvcmRlcnMiLCJvIiwiUmVjZWlwdEFtb3VudCIsIkRlbGl2ZXJ5Q29tcGFueSIsIkRlbGl2ZXJ5RmVlIiwiRGVsaXZlckNvZGUiLCJEZWxpdmVyUmVjZWlwdEZlZSIsImRlZmF1bHRTdGF0ZSIsImdvb2RFZGl0IiwibWVtYmVyRWRpdG9yIiwiWFhYWFJlZHVjZXIiLCJ4eHh4IiwiSW52aXN0TGlzdFJlZHVjZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJJbnRlbnRpb25zTGlzdFJlZHVjZXIiLCJNZW1iZXJFZGl0b3JSZWR1Y2VyIiwiTWVtYmVyTGlzdFJlZHVjZXIiLCJPcmRlckxpc3RSZWR1Y2VyIiwiR29vZExpc3RSZWR1Y2VyIiwiR29vZEVkaXRvclJlZHVjZXIiLCJpdGVtIiwicmVkdWNlciIsInN0b3JlIiwidGh1bmsiLCJkZWZhdWx0Iiwid2luZG93Iiwib25sb2FkIiwiUmVhY3RET00iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBLHNEQUE4QztBQUM5QztBQUNBO0FBQ0Esb0NBQTRCO0FBQzVCLHFDQUE2QjtBQUM3Qix5Q0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFLGFBQWE7QUFDbEY7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0Esd0VBQXdFLGVBQWU7QUFDdkY7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFdBQVc7O0FBRVg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRixhQUFhO0FBQ3ZHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxhQUFhLG1DQUFtQztBQUMvRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQzs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLHFFQUFxRSxlQUFlO0FBQ3BGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdnREE7O0FBRUEsYUFFQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVROzs7Ozs7Ozs7Ozs7QUMxSlIsb0k7Ozs7Ozs7Ozs7O0FDQUEsc0g7Ozs7Ozs7Ozs7O0FDQUEsZ0k7Ozs7Ozs7Ozs7O0FD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QUFBO0FBQUE7QUFBQTtBQUFBLDZCQU5KO0FBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBREoscUJBREo7QUFZSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFDSSxxRUFESjtBQUVJLHFFQUZKO0FBR0kscUVBSEo7QUFJSSxxRUFKSjtBQUtJLHFFQUxKO0FBTUkscUVBTko7QUFPSTtBQVBKO0FBREo7QUFaSjtBQXZCSSxhQUFSO0FBZ0RIOzs7O0VBeERvQkMsZ0JBQU1DLFM7O2tCQTJEaEJrRSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpREMvRFh1RSxPOzs7Ozs7Ozs7a0RBS0FBLE87Ozs7Ozs7OztrREFLQUEsTzs7Ozs7Ozs7O29EQUtBQSxPOzs7Ozs7Ozs7bURBS0FBLE87Ozs7Ozs7OzttREFLQUEsTzs7Ozs7Ozs7O2tEQU1BQSxPOzs7Ozs7Ozs7aURBS0FBLE87Ozs7Ozs7OztrREFLQUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNKOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFDLE9BQU9DLE1BQVAsR0FBZ0IsWUFBTTtBQUNsQkMsdUJBQVNDLE1BQVQsQ0FBZ0IsOEJBQUMsdUJBQUQsT0FBaEIsRUFBK0JuRSxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQS9CO0FBQ0gsQ0FGRDs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7O0FDYkEscUIiLCJmaWxlIjoianMvd29ya3NwYWNlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0O1xuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIilcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjc1ODkxYjg3ZjQ2YzQxY2ZhM2YzXCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpXG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSBtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGRlcCA9PT0gXCJ1bmRlZmluZWRcIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgZGVwID09PSBcInVuZGVmaW5lZFwiKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdHZhciBjaHVua0lkID0gXCJ3b3Jrc3BhY2VcIjtcbiBcdFx0XHR7XG4gXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWxvbmUtYmxvY2tzXG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge2FueX0gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdClcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm90IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hc3NldHMvXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZShcIi4vc3JjL3dlYi9iYWNrLmNsaWVudC5qc1wiKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3dlYi9iYWNrLmNsaWVudC5qc1wiKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBcbiAgdmFyIGNvbGxhdG9yO1xuICB0cnkge1xuICAgIGNvbGxhdG9yID0gKHR5cGVvZiBJbnRsICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBJbnRsLkNvbGxhdG9yICE9PSBcInVuZGVmaW5lZFwiKSA/IEludGwuQ29sbGF0b3IoXCJnZW5lcmljXCIsIHsgc2Vuc2l0aXZpdHk6IFwiYmFzZVwiIH0pIDogbnVsbDtcbiAgfSBjYXRjaCAoZXJyKXtcbiAgICBjb25zb2xlLmxvZyhcIkNvbGxhdG9yIGNvdWxkIG5vdCBiZSBpbml0aWFsaXplZCBhbmQgd291bGRuJ3QgYmUgdXNlZFwiKTtcbiAgfVxuICAvLyBhcnJheXMgdG8gcmUtdXNlXG4gIHZhciBwcmV2Um93ID0gW10sXG4gICAgc3RyMkNoYXIgPSBbXTtcbiAgXG4gIC8qKlxuICAgKiBCYXNlZCBvbiB0aGUgYWxnb3JpdGhtIGF0IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGV2ZW5zaHRlaW5fZGlzdGFuY2UuXG4gICAqL1xuICB2YXIgTGV2ZW5zaHRlaW4gPSB7XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGxldmVuc2h0ZWluIGRpc3RhbmNlIG9mIHRoZSB0d28gc3RyaW5ncy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHIxIFN0cmluZyB0aGUgZmlyc3Qgc3RyaW5nLlxuICAgICAqIEBwYXJhbSBzdHIyIFN0cmluZyB0aGUgc2Vjb25kIHN0cmluZy5cbiAgICAgKiBAcGFyYW0gW29wdGlvbnNdIEFkZGl0aW9uYWwgb3B0aW9ucy5cbiAgICAgKiBAcGFyYW0gW29wdGlvbnMudXNlQ29sbGF0b3JdIFVzZSBgSW50bC5Db2xsYXRvcmAgZm9yIGxvY2FsZS1zZW5zaXRpdmUgc3RyaW5nIGNvbXBhcmlzb24uXG4gICAgICogQHJldHVybiBJbnRlZ2VyIHRoZSBsZXZlbnNodGVpbiBkaXN0YW5jZSAoMCBhbmQgYWJvdmUpLlxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24oc3RyMSwgc3RyMiwgb3B0aW9ucykge1xuICAgICAgdmFyIHVzZUNvbGxhdG9yID0gKG9wdGlvbnMgJiYgY29sbGF0b3IgJiYgb3B0aW9ucy51c2VDb2xsYXRvcik7XG4gICAgICBcbiAgICAgIHZhciBzdHIxTGVuID0gc3RyMS5sZW5ndGgsXG4gICAgICAgIHN0cjJMZW4gPSBzdHIyLmxlbmd0aDtcbiAgICAgIFxuICAgICAgLy8gYmFzZSBjYXNlc1xuICAgICAgaWYgKHN0cjFMZW4gPT09IDApIHJldHVybiBzdHIyTGVuO1xuICAgICAgaWYgKHN0cjJMZW4gPT09IDApIHJldHVybiBzdHIxTGVuO1xuXG4gICAgICAvLyB0d28gcm93c1xuICAgICAgdmFyIGN1ckNvbCwgbmV4dENvbCwgaSwgaiwgdG1wO1xuXG4gICAgICAvLyBpbml0aWFsaXNlIHByZXZpb3VzIHJvd1xuICAgICAgZm9yIChpPTA7IGk8c3RyMkxlbjsgKytpKSB7XG4gICAgICAgIHByZXZSb3dbaV0gPSBpO1xuICAgICAgICBzdHIyQ2hhcltpXSA9IHN0cjIuY2hhckNvZGVBdChpKTtcbiAgICAgIH1cbiAgICAgIHByZXZSb3dbc3RyMkxlbl0gPSBzdHIyTGVuO1xuXG4gICAgICB2YXIgc3RyQ21wO1xuICAgICAgaWYgKHVzZUNvbGxhdG9yKSB7XG4gICAgICAgIC8vIGNhbGN1bGF0ZSBjdXJyZW50IHJvdyBkaXN0YW5jZSBmcm9tIHByZXZpb3VzIHJvdyB1c2luZyBjb2xsYXRvclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3RyMUxlbjsgKytpKSB7XG4gICAgICAgICAgbmV4dENvbCA9IGkgKyAxO1xuXG4gICAgICAgICAgZm9yIChqID0gMDsgaiA8IHN0cjJMZW47ICsraikge1xuICAgICAgICAgICAgY3VyQ29sID0gbmV4dENvbDtcblxuICAgICAgICAgICAgLy8gc3Vic3R1dGlvblxuICAgICAgICAgICAgc3RyQ21wID0gMCA9PT0gY29sbGF0b3IuY29tcGFyZShzdHIxLmNoYXJBdChpKSwgU3RyaW5nLmZyb21DaGFyQ29kZShzdHIyQ2hhcltqXSkpO1xuXG4gICAgICAgICAgICBuZXh0Q29sID0gcHJldlJvd1tqXSArIChzdHJDbXAgPyAwIDogMSk7XG5cbiAgICAgICAgICAgIC8vIGluc2VydGlvblxuICAgICAgICAgICAgdG1wID0gY3VyQ29sICsgMTtcbiAgICAgICAgICAgIGlmIChuZXh0Q29sID4gdG1wKSB7XG4gICAgICAgICAgICAgIG5leHRDb2wgPSB0bXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkZWxldGlvblxuICAgICAgICAgICAgdG1wID0gcHJldlJvd1tqICsgMV0gKyAxO1xuICAgICAgICAgICAgaWYgKG5leHRDb2wgPiB0bXApIHtcbiAgICAgICAgICAgICAgbmV4dENvbCA9IHRtcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY29weSBjdXJyZW50IGNvbCB2YWx1ZSBpbnRvIHByZXZpb3VzIChpbiBwcmVwYXJhdGlvbiBmb3IgbmV4dCBpdGVyYXRpb24pXG4gICAgICAgICAgICBwcmV2Um93W2pdID0gY3VyQ29sO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNvcHkgbGFzdCBjb2wgdmFsdWUgaW50byBwcmV2aW91cyAoaW4gcHJlcGFyYXRpb24gZm9yIG5leHQgaXRlcmF0aW9uKVxuICAgICAgICAgIHByZXZSb3dbal0gPSBuZXh0Q29sO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gY2FsY3VsYXRlIGN1cnJlbnQgcm93IGRpc3RhbmNlIGZyb20gcHJldmlvdXMgcm93IHdpdGhvdXQgY29sbGF0b3JcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0cjFMZW47ICsraSkge1xuICAgICAgICAgIG5leHRDb2wgPSBpICsgMTtcblxuICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBzdHIyTGVuOyArK2opIHtcbiAgICAgICAgICAgIGN1ckNvbCA9IG5leHRDb2w7XG5cbiAgICAgICAgICAgIC8vIHN1YnN0dXRpb25cbiAgICAgICAgICAgIHN0ckNtcCA9IHN0cjEuY2hhckNvZGVBdChpKSA9PT0gc3RyMkNoYXJbal07XG5cbiAgICAgICAgICAgIG5leHRDb2wgPSBwcmV2Um93W2pdICsgKHN0ckNtcCA/IDAgOiAxKTtcblxuICAgICAgICAgICAgLy8gaW5zZXJ0aW9uXG4gICAgICAgICAgICB0bXAgPSBjdXJDb2wgKyAxO1xuICAgICAgICAgICAgaWYgKG5leHRDb2wgPiB0bXApIHtcbiAgICAgICAgICAgICAgbmV4dENvbCA9IHRtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRlbGV0aW9uXG4gICAgICAgICAgICB0bXAgPSBwcmV2Um93W2ogKyAxXSArIDE7XG4gICAgICAgICAgICBpZiAobmV4dENvbCA+IHRtcCkge1xuICAgICAgICAgICAgICBuZXh0Q29sID0gdG1wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb3B5IGN1cnJlbnQgY29sIHZhbHVlIGludG8gcHJldmlvdXMgKGluIHByZXBhcmF0aW9uIGZvciBuZXh0IGl0ZXJhdGlvbilcbiAgICAgICAgICAgIHByZXZSb3dbal0gPSBjdXJDb2w7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY29weSBsYXN0IGNvbCB2YWx1ZSBpbnRvIHByZXZpb3VzIChpbiBwcmVwYXJhdGlvbiBmb3IgbmV4dCBpdGVyYXRpb24pXG4gICAgICAgICAgcHJldlJvd1tqXSA9IG5leHRDb2w7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0Q29sO1xuICAgIH1cblxuICB9O1xuXG4gIC8vIGFtZFxuICBpZiAodHlwZW9mIGRlZmluZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkZWZpbmUgIT09IG51bGwgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBMZXZlbnNodGVpbjtcbiAgICB9KTtcbiAgfVxuICAvLyBjb21tb25qc1xuICBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZSAhPT0gbnVsbCAmJiB0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuZXhwb3J0cyA9PT0gZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gTGV2ZW5zaHRlaW47XG4gIH1cbiAgLy8gd2ViIHdvcmtlclxuICBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygc2VsZi5wb3N0TWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygc2VsZi5pbXBvcnRTY3JpcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2VsZi5MZXZlbnNodGVpbiA9IExldmVuc2h0ZWluO1xuICB9XG4gIC8vIGJyb3dzZXIgbWFpbiB0aHJlYWRcbiAgZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cgIT09IG51bGwpIHtcbiAgICB3aW5kb3cuTGV2ZW5zaHRlaW4gPSBMZXZlbnNodGVpbjtcbiAgfVxufSgpKTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9mb3JtLWxpYi9saWIvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanNcIik7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdF9fZGVmYXVsdCA9IF9pbnRlcm9wRGVmYXVsdChSZWFjdCk7XG52YXIgc2hhbGxvd0VxdWFsID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3NoYWxsb3dlcXVhbCcpKTtcbnZhciBsZXZlbnNodGVpbiA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdmYXN0LWxldmVuc2h0ZWluJykpO1xudmFyIFByb3BUeXBlcyA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdwcm9wLXR5cGVzJykpO1xudmFyIHJlYWN0TGlmZWN5Y2xlc0NvbXBhdCA9IHJlcXVpcmUoJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0Jyk7XG52YXIgaG9pc3ROb25SZWFjdFN0YXRpYyA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdob2lzdC1ub24tcmVhY3Qtc3RhdGljcycpKTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxudmFyIGlzQ29tcG9zaXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gaXNDb21wb3NpdGVDb21wb25lbnQodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgZ2V0Q29tcG9uZW50RGlzcGxheU5hbWUgPSBmdW5jdGlvbiBnZXRDb21wb25lbnREaXNwbGF5TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnQ29tcG9uZW50Jztcbn07XG5cbnZhciBnZXRJbnRlcm5hbEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0SW50ZXJuYWxJbnN0YW5jZShpbnN0YW5jZSkge1xuICByZXR1cm4gaW5zdGFuY2UuX3JlYWN0SW50ZXJuYWxGaWJlciB8fCAvLyBSZWFjdCAxNlxuICBpbnN0YW5jZS5fcmVhY3RJbnRlcm5hbEluc3RhbmNlIHx8IC8vIFJlYWN0IDE1XG4gIG51bGw7XG59O1xuXG52YXIgdXBkYXRlSW5zdGFuY2UgPSBmdW5jdGlvbiB1cGRhdGVJbnN0YW5jZShpbnN0YW5jZSkge1xuICB2YXIgdXBkYXRlciA9IGluc3RhbmNlLnVwZGF0ZXIsXG4gICAgICBmb3JjZVVwZGF0ZSA9IGluc3RhbmNlLmZvcmNlVXBkYXRlO1xuXG4gIGlmICh0eXBlb2YgZm9yY2VVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICB9IGVsc2UgaWYgKHVwZGF0ZXIgJiYgdHlwZW9mIHVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUoaW5zdGFuY2UpO1xuICB9XG59O1xuXG52YXIgaXNGcmFnbWVudE5vZGUgPSBmdW5jdGlvbiBpc0ZyYWdtZW50Tm9kZShfcmVmKSB7XG4gIHZhciB0eXBlID0gX3JlZi50eXBlO1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuRnJhZ21lbnQgJiYgdHlwZSA9PT0gUmVhY3RfX2RlZmF1bHQuRnJhZ21lbnQ7XG59O1xuXG52YXIgZ2VuZXJhdGlvbiA9IDE7XG5cbnZhciBpbmNyZW1lbnQgPSBmdW5jdGlvbiBpbmNyZW1lbnQoKSB7XG4gIHJldHVybiBnZW5lcmF0aW9uKys7XG59O1xudmFyIGdldCA9IGZ1bmN0aW9uIGdldCgpIHtcbiAgcmV0dXJuIGdlbmVyYXRpb247XG59O1xuXG52YXIgUFJFRklYID0gJ19fcmVhY3RzdGFuZGluX18nO1xudmFyIFBST1hZX0tFWSA9IFBSRUZJWCArICdrZXknO1xudmFyIEdFTkVSQVRJT04gPSBQUkVGSVggKyAncHJveHlHZW5lcmF0aW9uJztcbnZhciBSRUdFTkVSQVRFX01FVEhPRCA9IFBSRUZJWCArICdyZWdlbmVyYXRlQnlFdmFsJztcbnZhciBVTldSQVBfUFJPWFkgPSBQUkVGSVggKyAnZ2V0Q3VycmVudCc7XG52YXIgQ0FDSEVEX1JFU1VMVCA9IFBSRUZJWCArICdjYWNoZWRSZXN1bHQnO1xudmFyIFBST1hZX0lTX01PVU5URUQgPSBQUkVGSVggKyAnaXNNb3VudGVkJztcblxudmFyIGNvbmZpZ3VyYXRpb24gPSB7XG4gIGxvZ0xldmVsOiAnZXJyb3InXG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cbnZhciBsb2dnZXIgPSB7XG4gIGRlYnVnOiBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICBpZiAoWydkZWJ1ZyddLmluZGV4T2YoY29uZmlndXJhdGlvbi5sb2dMZXZlbCkgIT09IC0xKSB7XG4gICAgICB2YXIgX2NvbnNvbGU7XG5cbiAgICAgIChfY29uc29sZSA9IGNvbnNvbGUpLmRlYnVnLmFwcGx5KF9jb25zb2xlLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSxcbiAgbG9nOiBmdW5jdGlvbiBsb2coKSB7XG4gICAgaWYgKFsnZGVidWcnLCAnbG9nJ10uaW5kZXhPZihjb25maWd1cmF0aW9uLmxvZ0xldmVsKSAhPT0gLTEpIHtcbiAgICAgIHZhciBfY29uc29sZTI7XG5cbiAgICAgIChfY29uc29sZTIgPSBjb25zb2xlKS5sb2cuYXBwbHkoX2NvbnNvbGUyLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSxcbiAgd2FybjogZnVuY3Rpb24gd2FybigpIHtcbiAgICBpZiAoWydkZWJ1ZycsICdsb2cnLCAnd2FybiddLmluZGV4T2YoY29uZmlndXJhdGlvbi5sb2dMZXZlbCkgIT09IC0xKSB7XG4gICAgICB2YXIgX2NvbnNvbGUzO1xuXG4gICAgICAoX2NvbnNvbGUzID0gY29uc29sZSkud2Fybi5hcHBseShfY29uc29sZTMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LFxuICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgaWYgKFsnZGVidWcnLCAnbG9nJywgJ3dhcm4nLCAnZXJyb3InXS5pbmRleE9mKGNvbmZpZ3VyYXRpb24ubG9nTGV2ZWwpICE9PSAtMSkge1xuICAgICAgdmFyIF9jb25zb2xlNDtcblxuICAgICAgKF9jb25zb2xlNCA9IGNvbnNvbGUpLmVycm9yLmFwcGx5KF9jb25zb2xlNCwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1ldmFsLCBmdW5jLW5hbWVzICovXG5cbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWU7XG4gIHJldHVybiBkaXNwbGF5TmFtZSAmJiBkaXNwbGF5TmFtZSAhPT0gJ1JlYWN0Q29tcG9uZW50JyA/IGRpc3BsYXlOYW1lIDogJ0NvbXBvbmVudCc7XG59XG5cbnZhciByZWFjdExpZmVDeWNsZU1vdW50TWV0aG9kcyA9IFsnY29tcG9uZW50V2lsbE1vdW50JywgJ2NvbXBvbmVudERpZE1vdW50J107XG5cbmZ1bmN0aW9uIGlzUmVhY3RDbGFzcyhDb21wb25lbnQpIHtcbiAgcmV0dXJuIENvbXBvbmVudC5wcm90b3R5cGUgJiYgKENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCB8fCBDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCB8fCBDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50IHx8IENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgfHwgQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnREaWRVbm1vdW50IHx8IENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyKTtcbn1cblxuZnVuY3Rpb24gc2FmZVJlYWN0Q29uc3RydWN0b3IoQ29tcG9uZW50LCBsYXN0SW5zdGFuY2UpIHtcbiAgdHJ5IHtcbiAgICBpZiAobGFzdEluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gbmV3IENvbXBvbmVudChsYXN0SW5zdGFuY2UucHJvcHMsIGxhc3RJbnN0YW5jZS5jb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDb21wb25lbnQoe30sIHt9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIHNvbWUgY29tcG9uZW50cywgbGlrZSBSZWR1eCBjb25uZWN0IGNvdWxkIG5vdCBiZSBjcmVhdGVkIHdpdGhvdXQgcHJvcGVyIGNvbnRleHRcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nID8gZm4udG9TdHJpbmcoKS5pbmRleE9mKCdbbmF0aXZlIGNvZGVdJykgPiAwIDogZmFsc2U7XG59XG5cbnZhciBpZGVudGl0eSA9IGZ1bmN0aW9uIGlkZW50aXR5KGEpIHtcbiAgcmV0dXJuIGE7XG59O1xudmFyIGluZGlyZWN0RXZhbCA9IGV2YWw7XG5cbnZhciBkb2VzU3VwcG9ydENsYXNzZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgaW5kaXJlY3RFdmFsKCdjbGFzcyBUZXN0IHt9Jyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0oKTtcblxudmFyIEVTNlByb3h5Q29tcG9uZW50RmFjdG9yeSA9IGRvZXNTdXBwb3J0Q2xhc3NlcyAmJiBpbmRpcmVjdEV2YWwoJ1xcbihmdW5jdGlvbihJbml0aWFsUGFyZW50LCBwb3N0Q29uc3RydWN0aW9uQWN0aW9uKSB7XFxuICByZXR1cm4gY2xhc3MgUHJveHlDb21wb25lbnQgZXh0ZW5kcyBJbml0aWFsUGFyZW50IHtcXG4gICAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcXG4gICAgICBzdXBlcihwcm9wcywgY29udGV4dClcXG4gICAgICBwb3N0Q29uc3RydWN0aW9uQWN0aW9uLmNhbGwodGhpcylcXG4gICAgfVxcbiAgfVxcbn0pXFxuJyk7XG5cbnZhciBFUzVQcm94eUNvbXBvbmVudEZhY3RvcnkgPSBmdW5jdGlvbiBFUzVQcm94eUNvbXBvbmVudEZhY3RvcnkoSW5pdGlhbFBhcmVudCwgcG9zdENvbnN0cnVjdGlvbkFjdGlvbikge1xuICBmdW5jdGlvbiBQcm94eUNvbXBvbmVudChwcm9wcywgY29udGV4dCkge1xuICAgIEluaXRpYWxQYXJlbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCk7XG4gICAgcG9zdENvbnN0cnVjdGlvbkFjdGlvbi5jYWxsKHRoaXMpO1xuICB9XG4gIFByb3h5Q29tcG9uZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW5pdGlhbFBhcmVudC5wcm90b3R5cGUpO1xuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoUHJveHlDb21wb25lbnQsIEluaXRpYWxQYXJlbnQpO1xuICByZXR1cm4gUHJveHlDb21wb25lbnQ7XG59O1xuXG52YXIgaXNSZWFjdENvbXBvbmVudEluc3RhbmNlID0gZnVuY3Rpb24gaXNSZWFjdENvbXBvbmVudEluc3RhbmNlKGVsKSB7XG4gIHJldHVybiBlbCAmJiAodHlwZW9mIGVsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihlbCkpID09PSAnb2JqZWN0JyAmJiAhZWwudHlwZSAmJiBlbC5yZW5kZXI7XG59O1xuXG52YXIgcHJveHlDbGFzc0NyZWF0b3IgPSBkb2VzU3VwcG9ydENsYXNzZXMgPyBFUzZQcm94eUNvbXBvbmVudEZhY3RvcnkgOiBFUzVQcm94eUNvbXBvbmVudEZhY3Rvcnk7XG5cbmZ1bmN0aW9uIGdldE93bktleXModGFyZ2V0KSB7XG4gIHJldHVybiBbXS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KSwgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbn1cblxuZnVuY3Rpb24gc2hhbGxvd1N0cmluZ3NFcXVhbChhLCBiKSB7XG4gIGZvciAodmFyIGtleSBpbiBhKSB7XG4gICAgaWYgKFN0cmluZyhhW2tleV0pICE9PSBTdHJpbmcoYltrZXldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZGVlcFByb3RvdHlwZVVwZGF0ZShkZXN0LCBzb3VyY2UpIHtcbiAgdmFyIGRlZXBEZXN0ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGRlc3QpO1xuICB2YXIgZGVlcFNyYyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihzb3VyY2UpO1xuICBpZiAoZGVlcERlc3QgJiYgZGVlcFNyYyAmJiBkZWVwU3JjICE9PSBkZWVwRGVzdCkge1xuICAgIGRlZXBQcm90b3R5cGVVcGRhdGUoZGVlcERlc3QsIGRlZXBTcmMpO1xuICB9XG4gIGlmIChzb3VyY2UucHJvdG90eXBlICYmIHNvdXJjZS5wcm90b3R5cGUgIT09IGRlc3QucHJvdG90eXBlKSB7XG4gICAgZGVzdC5wcm90b3R5cGUgPSBzb3VyY2UucHJvdG90eXBlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhZmVEZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgcHJvcHMpIHtcbiAgdHJ5IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHByb3BzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvZ2dlci53YXJuKCdFcnJvciB3aGlsZSB3cmFwcGluZycsIGtleSwgJyAtPiAnLCBlKTtcbiAgfVxufVxuXG52YXIgUkVTRVJWRURfU1RBVElDUyA9IFsnbGVuZ3RoJywgJ2Rpc3BsYXlOYW1lJywgJ25hbWUnLCAnYXJndW1lbnRzJywgJ2NhbGxlcicsICdwcm90b3R5cGUnLCAndG9TdHJpbmcnLCAndmFsdWVPZicsICdpc1N0YXRlbGVzc0Z1bmN0aW9uYWxQcm94eScsIFBST1hZX0tFWSwgVU5XUkFQX1BST1hZXTtcblxuZnVuY3Rpb24gdHJhbnNmZXJTdGF0aWNQcm9wcyhQcm94eUNvbXBvbmVudCwgc2F2ZWREZXNjcmlwdG9ycywgUHJldmlvdXNDb21wb25lbnQsIE5leHRDb21wb25lbnQpIHtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoUHJveHlDb21wb25lbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChSRVNFUlZFRF9TVEFUSUNTLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJldkRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFByb3h5Q29tcG9uZW50LCBrZXkpO1xuICAgIHZhciBzYXZlZERlc2NyaXB0b3IgPSBzYXZlZERlc2NyaXB0b3JzW2tleV07XG5cbiAgICBpZiAoIXNoYWxsb3dFcXVhbChwcmV2RGVzY3JpcHRvciwgc2F2ZWREZXNjcmlwdG9yKSkge1xuICAgICAgc2FmZURlZmluZVByb3BlcnR5KE5leHRDb21wb25lbnQsIGtleSwgcHJldkRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQ29weSBuZXdseSBkZWZpbmVkIHN0YXRpYyBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE5leHRDb21wb25lbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChSRVNFUlZFRF9TVEFUSUNTLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJldkRlc2NyaXB0b3IgPSBQcmV2aW91c0NvbXBvbmVudCAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFByb3h5Q29tcG9uZW50LCBrZXkpO1xuICAgIHZhciBzYXZlZERlc2NyaXB0b3IgPSBzYXZlZERlc2NyaXB0b3JzW2tleV07XG5cbiAgICAvLyBTa2lwIHJlZGVmaW5lZCBkZXNjcmlwdG9yc1xuICAgIGlmIChwcmV2RGVzY3JpcHRvciAmJiBzYXZlZERlc2NyaXB0b3IgJiYgIXNoYWxsb3dFcXVhbChzYXZlZERlc2NyaXB0b3IsIHByZXZEZXNjcmlwdG9yKSkge1xuICAgICAgc2FmZURlZmluZVByb3BlcnR5KE5leHRDb21wb25lbnQsIGtleSwgcHJldkRlc2NyaXB0b3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcmV2RGVzY3JpcHRvciAmJiAhc2F2ZWREZXNjcmlwdG9yKSB7XG4gICAgICBzYWZlRGVmaW5lUHJvcGVydHkoUHJveHlDb21wb25lbnQsIGtleSwgcHJldkRlc2NyaXB0b3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0RGVzY3JpcHRvciA9IF9leHRlbmRzKHt9LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5leHRDb21wb25lbnQsIGtleSksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgc2F2ZWREZXNjcmlwdG9yc1trZXldID0gbmV4dERlc2NyaXB0b3I7XG4gICAgc2FmZURlZmluZVByb3BlcnR5KFByb3h5Q29tcG9uZW50LCBrZXksIG5leHREZXNjcmlwdG9yKTtcbiAgfSk7XG5cbiAgLy8gUmVtb3ZlIHN0YXRpYyBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIHRoYXQgYXJlIG5vIGxvbmdlciBkZWZpbmVkXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFByb3h5Q29tcG9uZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoUkVTRVJWRURfU1RBVElDUy5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFNraXAgc3RhdGljcyB0aGF0IGV4aXN0IG9uIHRoZSBuZXh0IGNsYXNzXG4gICAgaWYgKE5leHRDb21wb25lbnQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTa2lwIG5vbi1jb25maWd1cmFibGUgc3RhdGljc1xuICAgIHZhciBwcm94eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFByb3h5Q29tcG9uZW50LCBrZXkpO1xuICAgIGlmIChwcm94eURlc2NyaXB0b3IgJiYgIXByb3h5RGVzY3JpcHRvci5jb25maWd1cmFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJldkRlc2NyaXB0b3IgPSBQcmV2aW91c0NvbXBvbmVudCAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFByZXZpb3VzQ29tcG9uZW50LCBrZXkpO1xuICAgIHZhciBzYXZlZERlc2NyaXB0b3IgPSBzYXZlZERlc2NyaXB0b3JzW2tleV07XG5cbiAgICAvLyBTa2lwIHJlZGVmaW5lZCBkZXNjcmlwdG9yc1xuICAgIGlmIChwcmV2RGVzY3JpcHRvciAmJiBzYXZlZERlc2NyaXB0b3IgJiYgIXNoYWxsb3dFcXVhbChzYXZlZERlc2NyaXB0b3IsIHByZXZEZXNjcmlwdG9yKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNhZmVEZWZpbmVQcm9wZXJ0eShQcm94eUNvbXBvbmVudCwga2V5LCB7XG4gICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBzYXZlZERlc2NyaXB0b3JzO1xufVxuXG5mdW5jdGlvbiBtZXJnZUNvbXBvbmVudHMoUHJveHlDb21wb25lbnQsIE5leHRDb21wb25lbnQsIEluaXRpYWxDb21wb25lbnQsIGxhc3RJbnN0YW5jZSwgaW5qZWN0ZWRNZW1iZXJzKSB7XG4gIHZhciBpbmplY3RlZENvZGUgPSB7fTtcbiAgdHJ5IHtcbiAgICB2YXIgbmV4dEluc3RhbmNlID0gc2FmZVJlYWN0Q29uc3RydWN0b3IoTmV4dENvbXBvbmVudCwgbGFzdEluc3RhbmNlKTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBCeXBhc3MgYmFiZWwgY2xhc3MgaW5oZXJpdGFuY2UgY2hlY2tpbmdcbiAgICAgIGRlZXBQcm90b3R5cGVVcGRhdGUoSW5pdGlhbENvbXBvbmVudCwgTmV4dENvbXBvbmVudCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gSXQgd2FzIEVTNiBjbGFzc1xuICAgIH1cblxuICAgIHZhciBwcm94eUluc3RhbmNlID0gc2FmZVJlYWN0Q29uc3RydWN0b3IoUHJveHlDb21wb25lbnQsIGxhc3RJbnN0YW5jZSk7XG5cbiAgICBpZiAoIW5leHRJbnN0YW5jZSB8fCAhcHJveHlJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIGluamVjdGVkQ29kZTtcbiAgICB9XG5cbiAgICB2YXIgbWVyZ2VkQXR0cnMgPSBfZXh0ZW5kcyh7fSwgcHJveHlJbnN0YW5jZSwgbmV4dEluc3RhbmNlKTtcbiAgICB2YXIgaGFzUmVnZW5lcmF0ZSA9IHByb3h5SW5zdGFuY2VbUkVHRU5FUkFURV9NRVRIT0RdO1xuICAgIHZhciBvd25LZXlzID0gZ2V0T3duS2V5cyhPYmplY3QuZ2V0UHJvdG90eXBlT2YoUHJveHlDb21wb25lbnQucHJvdG90eXBlKSk7XG4gICAgT2JqZWN0LmtleXMobWVyZ2VkQXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKFBSRUZJWCkpIHJldHVybjtcbiAgICAgIHZhciBuZXh0QXR0ciA9IG5leHRJbnN0YW5jZVtrZXldO1xuICAgICAgdmFyIHByZXZBdHRyID0gcHJveHlJbnN0YW5jZVtrZXldO1xuICAgICAgaWYgKHByZXZBdHRyICYmIG5leHRBdHRyKSB7XG4gICAgICAgIGlmIChpc05hdGl2ZUZ1bmN0aW9uKG5leHRBdHRyKSB8fCBpc05hdGl2ZUZ1bmN0aW9uKHByZXZBdHRyKSkge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYm91bmQgbWV0aG9kXG4gICAgICAgICAgdmFyIGlzU2FtZUFyaXR5ID0gbmV4dEF0dHIubGVuZ3RoID09PSBwcmV2QXR0ci5sZW5ndGg7XG4gICAgICAgICAgdmFyIGV4aXN0c0luUHJvdG90eXBlID0gb3duS2V5cy5pbmRleE9mKGtleSkgPj0gMCB8fCBQcm94eUNvbXBvbmVudC5wcm90b3R5cGVba2V5XTtcbiAgICAgICAgICBpZiAoaXNTYW1lQXJpdHkgJiYgZXhpc3RzSW5Qcm90b3R5cGUpIHtcbiAgICAgICAgICAgIGlmIChoYXNSZWdlbmVyYXRlKSB7XG4gICAgICAgICAgICAgIGluamVjdGVkQ29kZVtrZXldID0gJ09iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKVtcXCcnICsga2V5ICsgJ1xcJ10uYmluZCh0aGlzKSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsb2dnZXIud2FybignUmVhY3QgSG90IExvYWRlcjosJywgJ05vbi1jb250cm9sbGVkIGNsYXNzJywgUHJveHlDb21wb25lbnQubmFtZSwgJ2NvbnRhaW5zIGEgbmV3IG5hdGl2ZSBvciBib3VuZCBmdW5jdGlvbiAnLCBrZXksIG5leHRBdHRyLCAnLiBVbmFibGUgdG8gcmVwcm9kdWNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKCdSZWFjdCBIb3QgTG9hZGVyOicsICdVcGRhdGVkIGNsYXNzICcsIFByb3h5Q29tcG9uZW50Lm5hbWUsICdjb250YWlucyBuYXRpdmUgb3IgYm91bmQgZnVuY3Rpb24gJywga2V5LCBuZXh0QXR0ciwgJy4gVW5hYmxlIHRvIHJlcHJvZHVjZSwgdXNlIGFycm93IGZ1bmN0aW9ucyBpbnN0ZWFkLicsICcoYXJpdHk6ICcgKyBuZXh0QXR0ci5sZW5ndGggKyAnLycgKyBwcmV2QXR0ci5sZW5ndGggKyAnLCBwcm90bzogJyArIChleGlzdHNJblByb3RvdHlwZSA/ICd5ZXMnIDogJ25vJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV4dFN0cmluZyA9IFN0cmluZyhuZXh0QXR0cik7XG4gICAgICAgIHZhciBpbmplY3RlZEJlZm9yZSA9IGluamVjdGVkTWVtYmVyc1trZXldO1xuICAgICAgICBpZiAobmV4dFN0cmluZyAhPT0gU3RyaW5nKHByZXZBdHRyKSB8fCBpbmplY3RlZEJlZm9yZSAmJiBuZXh0U3RyaW5nICE9PSBTdHJpbmcoaW5qZWN0ZWRCZWZvcmUpKSB7XG4gICAgICAgICAgaWYgKCFoYXNSZWdlbmVyYXRlKSB7XG4gICAgICAgICAgICBpZiAobmV4dFN0cmluZy5pbmRleE9mKCdmdW5jdGlvbicpIDwgMCAmJiBuZXh0U3RyaW5nLmluZGV4T2YoJz0+JykgPCAwKSB7XG4gICAgICAgICAgICAgIC8vIGp1c3QgY29weSBwcm9wIG92ZXJcbiAgICAgICAgICAgICAgaW5qZWN0ZWRDb2RlW2tleV0gPSBuZXh0QXR0cjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxvZ2dlci53YXJuKCdSZWFjdCBIb3QgTG9hZGVyOicsICcgVXBkYXRlZCBjbGFzcyAnLCBQcm94eUNvbXBvbmVudC5uYW1lLCAnaGFkIGRpZmZlcmVudCBjb2RlIGZvcicsIGtleSwgbmV4dEF0dHIsICcuIFVuYWJsZSB0byByZXByb2R1Y2UuIFJlZ2VuZXJhdGlvbiBzdXBwb3J0IG5lZWRlZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5qZWN0ZWRDb2RlW2tleV0gPSBuZXh0QXR0cjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvZ2dlci53YXJuKCdSZWFjdCBIb3QgTG9hZGVyOicsIGUpO1xuICB9XG4gIHJldHVybiBpbmplY3RlZENvZGU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTGlmZUN5Y2xlTWV0aG9kcyhQcm94eUNvbXBvbmVudCwgTmV4dENvbXBvbmVudCkge1xuICB0cnkge1xuICAgIHZhciBwMSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihQcm94eUNvbXBvbmVudC5wcm90b3R5cGUpO1xuICAgIHZhciBwMiA9IE5leHRDb21wb25lbnQucHJvdG90eXBlO1xuICAgIHJlYWN0TGlmZUN5Y2xlTW91bnRNZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIGQxID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwMSwga2V5KSB8fCB7IHZhbHVlOiBwMVtrZXldIH07XG4gICAgICB2YXIgZDIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHAyLCBrZXkpIHx8IHsgdmFsdWU6IHAyW2tleV0gfTtcbiAgICAgIGlmICghc2hhbGxvd1N0cmluZ3NFcXVhbChkMSwgZDIpKSB7XG4gICAgICAgIGxvZ2dlci53YXJuKCdSZWFjdCBIb3QgTG9hZGVyOicsICdZb3UgZGlkIHVwZGF0ZScsIFByb3h5Q29tcG9uZW50Lm5hbWUsICdzIGxpZmVjeWNsZSBtZXRob2QnLCBrZXksICcuIFVuYWJsZSB0byByZXBlYXQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIElnbm9yZSBlcnJvcnNcbiAgfVxufVxuXG5mdW5jdGlvbiBpbmplY3QodGFyZ2V0LCBjdXJyZW50R2VuZXJhdGlvbiwgaW5qZWN0ZWRNZW1iZXJzKSB7XG4gIGlmICh0YXJnZXRbR0VORVJBVElPTl0gIT09IGN1cnJlbnRHZW5lcmF0aW9uKSB7XG4gICAgdmFyIGhhc1JlZ2VuZXJhdGUgPSAhIXRhcmdldFtSRUdFTkVSQVRFX01FVEhPRF07XG4gICAgT2JqZWN0LmtleXMoaW5qZWN0ZWRNZW1iZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYXNSZWdlbmVyYXRlKSB7XG4gICAgICAgICAgdGFyZ2V0W1JFR0VORVJBVEVfTUVUSE9EXShrZXksICcoZnVuY3Rpb24gUkVBQ1RfSE9UX0xPQURFUl9TQU5EQk9YICgpIHtcXG4gICAgICAgICAgdmFyIF90aGlzICA9IHRoaXM7IC8vIGNvbW1vbiBiYWJlbCB0cmFuc3BpbGVcXG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7IC8vIGNvbW1vbiBiYWJlbCB0cmFuc3BpbGVcXG4gICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7IC8vIGNvbW1vbiBiYWJlbCB0cmFuc3BpbGVcXG4gICAgICAgICAgcmV0dXJuICcgKyBpbmplY3RlZE1lbWJlcnNba2V5XSArICc7XFxuICAgICAgICAgIH0pLmNhbGwodGhpcyknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IGluamVjdGVkTWVtYmVyc1trZXldO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxvZ2dlci53YXJuKCdSZWFjdCBIb3QgTG9hZGVyOiBGYWlsZWQgdG8gcmVnZW5lcmF0ZSBtZXRob2QgJywga2V5LCAnIG9mIGNsYXNzICcsIHRhcmdldCk7XG4gICAgICAgIGxvZ2dlci53YXJuKCdnb3QgZXJyb3InLCBlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRhcmdldFtHRU5FUkFUSU9OXSA9IGN1cnJlbnRHZW5lcmF0aW9uO1xuICB9XG59XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgcHJveGllcyA9IG5ldyBXZWFrTWFwKCk7XG5cbnZhciByZXNldENsYXNzUHJveGllcyA9IGZ1bmN0aW9uIHJlc2V0Q2xhc3NQcm94aWVzKCkge1xuICBwcm94aWVzID0gbmV3IFdlYWtNYXAoKTtcbn07XG5cbnZhciBibGFja0xpc3RlZENsYXNzTWVtYmVycyA9IFsnY29uc3RydWN0b3InLCAncmVuZGVyJywgJ2NvbXBvbmVudFdpbGxNb3VudCcsICdjb21wb25lbnREaWRNb3VudCcsICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJywgJ2NvbXBvbmVudFdpbGxVbm1vdW50JywgJ2hvdENvbXBvbmVudFJlbmRlcicsICdnZXRJbml0aWFsU3RhdGUnLCAnZ2V0RGVmYXVsdFByb3BzJ107XG5cbnZhciBkZWZhdWx0UmVuZGVyT3B0aW9ucyA9IHtcbiAgY29tcG9uZW50V2lsbFJlbmRlcjogaWRlbnRpdHksXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHJlc3VsdCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4gIGNvbXBvbmVudERpZFJlbmRlcjogZnVuY3Rpb24gY29tcG9uZW50RGlkUmVuZGVyKHJlc3VsdCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5cbnZhciBkZWZpbmVDbGFzc01lbWJlciA9IGZ1bmN0aW9uIGRlZmluZUNsYXNzTWVtYmVyKENsYXNzLCBtZXRob2ROYW1lLCBtZXRob2RCb2R5KSB7XG4gIHJldHVybiBzYWZlRGVmaW5lUHJvcGVydHkoQ2xhc3MucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBtZXRob2RCb2R5XG4gIH0pO1xufTtcblxudmFyIGRlZmluZUNsYXNzTWVtYmVycyA9IGZ1bmN0aW9uIGRlZmluZUNsYXNzTWVtYmVycyhDbGFzcywgbWV0aG9kcykge1xuICByZXR1cm4gT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgIHJldHVybiBkZWZpbmVDbGFzc01lbWJlcihDbGFzcywgbWV0aG9kTmFtZSwgbWV0aG9kc1ttZXRob2ROYW1lXSk7XG4gIH0pO1xufTtcblxudmFyIHNldFNGUEZsYWcgPSBmdW5jdGlvbiBzZXRTRlBGbGFnKGNvbXBvbmVudCwgZmxhZykge1xuICByZXR1cm4gc2FmZURlZmluZVByb3BlcnR5KGNvbXBvbmVudCwgJ2lzU3RhdGVsZXNzRnVuY3Rpb25hbFByb3h5Jywge1xuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmbGFnXG4gIH0pO1xufTtcblxudmFyIGNvcHlNZXRob2REZXNjcmlwdG9ycyA9IGZ1bmN0aW9uIGNvcHlNZXRob2REZXNjcmlwdG9ycyh0YXJnZXQsIHNvdXJjZSkge1xuICBpZiAoc291cmNlKSB7XG4gICAgLy8gaXQgaXMgcG9zc2libGUgdG8gdXNlIGBmdW5jdGlvbi1kb3VibGVgIHRvIGNvbnN0cnVjdCBhbiBpZGVhbCBjbG9uZSwgYnV0IGRvZXMgbm90IG1ha2UgYSBzZW5jZVxuICAgIHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKTtcblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gc2FmZURlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfSk7XG5cbiAgICBzYWZlRGVmaW5lUHJvcGVydHkodGFyZ2V0LCAndG9TdHJpbmcnLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhzb3VyY2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzUHJveHkoSW5pdGlhbENvbXBvbmVudCwgcHJveHlLZXksIG9wdGlvbnMpIHtcbiAgdmFyIHJlbmRlck9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFJlbmRlck9wdGlvbnMsIG9wdGlvbnMpO1xuICAvLyBQcmV2ZW50IGRvdWJsZSB3cmFwcGluZy5cbiAgLy8gR2l2ZW4gYSBwcm94eSBjbGFzcywgcmV0dXJuIHRoZSBleGlzdGluZyBwcm94eSBtYW5hZ2luZyBpdC5cbiAgdmFyIGV4aXN0aW5nUHJveHkgPSBwcm94aWVzLmdldChJbml0aWFsQ29tcG9uZW50KTtcblxuICBpZiAoZXhpc3RpbmdQcm94eSkge1xuICAgIHJldHVybiBleGlzdGluZ1Byb3h5O1xuICB9XG5cbiAgdmFyIEN1cnJlbnRDb21wb25lbnQgPSB2b2lkIDA7XG4gIHZhciBzYXZlZERlc2NyaXB0b3JzID0ge307XG4gIHZhciBpbmplY3RlZE1lbWJlcnMgPSB7fTtcbiAgdmFyIHByb3h5R2VuZXJhdGlvbiA9IDA7XG4gIHZhciBpc0Z1bmN0aW9uYWxDb21wb25lbnQgPSAhaXNSZWFjdENsYXNzKEluaXRpYWxDb21wb25lbnQpO1xuXG4gIHZhciBsYXN0SW5zdGFuY2UgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIHBvc3RDb25zdHJ1Y3Rpb25BY3Rpb24oKSB7XG4gICAgdGhpc1tHRU5FUkFUSU9OXSA9IDA7XG5cbiAgICAvLyBBcyBsb25nIHdlIGNhbid0IG92ZXJyaWRlIGNvbnN0cnVjdG9yXG4gICAgLy8gZXZlcnkgY2xhc3Mgc2hhbGwgZXZvbHZlIGZyb20gYSBiYXNlIGNsYXNzXG4gICAgaW5qZWN0KHRoaXMsIHByb3h5R2VuZXJhdGlvbiwgaW5qZWN0ZWRNZW1iZXJzKTtcblxuICAgIGxhc3RJbnN0YW5jZSA9IHRoaXM7XG4gIH1cblxuICBmdW5jdGlvbiBwcm94aWVkVXBkYXRlKCkge1xuICAgIGlmICh0aGlzKSB7XG4gICAgICBpbmplY3QodGhpcywgcHJveHlHZW5lcmF0aW9uLCBpbmplY3RlZE1lbWJlcnMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxpZmVDeWNsZVdyYXBwZXJGYWN0b3J5KHdyYXBwZXJOYW1lKSB7XG4gICAgdmFyIHNpZGVFZmZlY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGlkZW50aXR5O1xuXG4gICAgcmV0dXJuIGNvcHlNZXRob2REZXNjcmlwdG9ycyhmdW5jdGlvbiB3cmFwcGVkTWV0aG9kKCkge1xuICAgICAgcHJveGllZFVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgICAgc2lkZUVmZmVjdCh0aGlzKTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgcmVzdFtfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICFpc0Z1bmN0aW9uYWxDb21wb25lbnQgJiYgQ3VycmVudENvbXBvbmVudC5wcm90b3R5cGVbd3JhcHBlck5hbWVdICYmIEN1cnJlbnRDb21wb25lbnQucHJvdG90eXBlW3dyYXBwZXJOYW1lXS5hcHBseSh0aGlzLCByZXN0KTtcbiAgICB9LCBJbml0aWFsQ29tcG9uZW50LnByb3RvdHlwZSAmJiBJbml0aWFsQ29tcG9uZW50LnByb3RvdHlwZVt3cmFwcGVyTmFtZV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWV0aG9kV3JhcHBlckZhY3Rvcnkod3JhcHBlck5hbWUsIHJlYWxNZXRob2QpIHtcbiAgICByZXR1cm4gY29weU1ldGhvZERlc2NyaXB0b3JzKGZ1bmN0aW9uIHdyYXBwZWRNZXRob2QoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICByZXN0W19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZWFsTWV0aG9kLmFwcGx5KHRoaXMsIHJlc3QpO1xuICAgIH0sIHJlYWxNZXRob2QpO1xuICB9XG5cbiAgdmFyIGZha2VCYXNlUHJvdG90eXBlID0gZnVuY3Rpb24gZmFrZUJhc2VQcm90b3R5cGUoQmFzZSkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhCYXNlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGJsYWNrTGlzdGVkQ2xhc3NNZW1iZXJzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihCYXNlLCBrZXkpO1xuICAgICAgcmV0dXJuIHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgIGFjY1trZXldID0gbWV0aG9kV3JhcHBlckZhY3Rvcnkoa2V5LCBCYXNlW2tleV0pO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH07XG5cbiAgdmFyIGNvbXBvbmVudERpZE1vdW50ID0gbGlmZUN5Y2xlV3JhcHBlckZhY3RvcnkoJ2NvbXBvbmVudERpZE1vdW50JywgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHRhcmdldFtQUk9YWV9JU19NT1VOVEVEXSA9IHRydWU7XG4gIH0pO1xuICB2YXIgY29tcG9uZW50RGlkVXBkYXRlID0gbGlmZUN5Y2xlV3JhcHBlckZhY3RvcnkoJ2NvbXBvbmVudERpZFVwZGF0ZScsIHJlbmRlck9wdGlvbnMuY29tcG9uZW50RGlkVXBkYXRlKTtcbiAgdmFyIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gbGlmZUN5Y2xlV3JhcHBlckZhY3RvcnkoJ2NvbXBvbmVudFdpbGxVbm1vdW50JywgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHRhcmdldFtQUk9YWV9JU19NT1VOVEVEXSA9IGZhbHNlO1xuICB9KTtcblxuICBmdW5jdGlvbiBob3RDb21wb25lbnRSZW5kZXIoKSB7XG4gICAgLy8gcmVwZWF0aW5nIHN1YnJlbmRlciBjYWxsIHRvIGtlZXAgUkVOREVSRURfR0VORVJBVElPTiB1cCB0byBkYXRlXG4gICAgcmVuZGVyT3B0aW9ucy5jb21wb25lbnRXaWxsUmVuZGVyKHRoaXMpO1xuICAgIHByb3hpZWRVcGRhdGUuY2FsbCh0aGlzKTtcbiAgICB2YXIgcmVzdWx0ID0gdm9pZCAwO1xuXG4gICAgLy8gV2UgbmVlZCB0byB1c2UgaGFzT3duUHJvcGVydHkgaGVyZSwgYXMgdGhlIGNhY2hlZCByZXN1bHQgaXMgYSBSZWFjdCBub2RlXG4gICAgLy8gYW5kIGNhbiBiZSBudWxsIG9yIHNvbWUgb3RoZXIgZmFsc3kgdmFsdWUuXG4gICAgaWYgKGhhcy5jYWxsKHRoaXMsIENBQ0hFRF9SRVNVTFQpKSB7XG4gICAgICByZXN1bHQgPSB0aGlzW0NBQ0hFRF9SRVNVTFRdO1xuICAgICAgZGVsZXRlIHRoaXNbQ0FDSEVEX1JFU1VMVF07XG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uYWxDb21wb25lbnQpIHtcbiAgICAgIHJlc3VsdCA9IEN1cnJlbnRDb21wb25lbnQodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gQ3VycmVudENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlck9wdGlvbnMuY29tcG9uZW50RGlkUmVuZGVyLmNhbGwodGhpcywgcmVzdWx0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3hpZWRSZW5kZXIoKSB7XG4gICAgcmVuZGVyT3B0aW9ucy5jb21wb25lbnRXaWxsUmVuZGVyKHRoaXMpO1xuICAgIHJldHVybiBob3RDb21wb25lbnRSZW5kZXIuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIHZhciBkZWZpbmVQcm94eU1ldGhvZHMgPSBmdW5jdGlvbiBkZWZpbmVQcm94eU1ldGhvZHMoUHJveHkpIHtcbiAgICB2YXIgQmFzZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBkZWZpbmVDbGFzc01lbWJlcnMoUHJveHksIF9leHRlbmRzKHt9LCBmYWtlQmFzZVByb3RvdHlwZShCYXNlKSwge1xuICAgICAgcmVuZGVyOiBwcm94aWVkUmVuZGVyLFxuICAgICAgaG90Q29tcG9uZW50UmVuZGVyOiBob3RDb21wb25lbnRSZW5kZXIsXG4gICAgICBjb21wb25lbnREaWRNb3VudDogY29tcG9uZW50RGlkTW91bnQsXG4gICAgICBjb21wb25lbnREaWRVcGRhdGU6IGNvbXBvbmVudERpZFVwZGF0ZSxcbiAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBjb21wb25lbnRXaWxsVW5tb3VudFxuICAgIH0pKTtcbiAgfTtcblxuICB2YXIgX1Byb3h5RmFjYWRlID0gdm9pZCAwO1xuICB2YXIgUHJveHlDb21wb25lbnQgPSBudWxsO1xuICB2YXIgcHJveHkgPSB2b2lkIDA7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uYWxDb21wb25lbnQpIHtcbiAgICBQcm94eUNvbXBvbmVudCA9IHByb3h5Q2xhc3NDcmVhdG9yKEluaXRpYWxDb21wb25lbnQsIHBvc3RDb25zdHJ1Y3Rpb25BY3Rpb24pO1xuXG4gICAgZGVmaW5lUHJveHlNZXRob2RzKFByb3h5Q29tcG9uZW50LCBJbml0aWFsQ29tcG9uZW50LnByb3RvdHlwZSk7XG5cbiAgICBfUHJveHlGYWNhZGUgPSBQcm94eUNvbXBvbmVudDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIHRoZSBpbml0aWFsIG1vdW50LiBUaGUgYWN0dWFsXG4gICAgLy8gcmVuZGVyZWQgY29tcG9uZW50IGluc3RhbmNlIHdpbGwgYmUgdGhlIHJldHVybiB2YWx1ZS5cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgX1Byb3h5RmFjYWRlID0gZnVuY3Rpb24gUHJveHlGYWNhZGUocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgIHZhciByZXN1bHQgPSBDdXJyZW50Q29tcG9uZW50KHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgLy8gc2ltcGxlIFNGQ1xuICAgICAgaWYgKCFDdXJyZW50Q29tcG9uZW50LmNvbnRleHRUeXBlcykge1xuICAgICAgICBpZiAoIV9Qcm94eUZhY2FkZS5pc1N0YXRlbGVzc0Z1bmN0aW9uYWxQcm94eSkge1xuICAgICAgICAgIHNldFNGUEZsYWcoX1Byb3h5RmFjYWRlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZW5kZXJPcHRpb25zLmNvbXBvbmVudERpZFJlbmRlcihyZXN1bHQpO1xuICAgICAgfVxuICAgICAgc2V0U0ZQRmxhZyhfUHJveHlGYWNhZGUsIGZhbHNlKTtcblxuICAgICAgLy8gVGhpcyBpcyBhIFJlbGF5LXN0eWxlIGNvbnRhaW5lciBjb25zdHJ1Y3Rvci4gV2UgY2FuJ3QgZG8gdGhlIHByb3RvdHlwZS1cbiAgICAgIC8vIHN0eWxlIHdyYXBwaW5nIGZvciB0aGlzIGFzIHdlIGRvIGVsc2V3aGVyZSwgc28ganVzdCB3ZSBqdXN0IHBhc3MgaXRcbiAgICAgIC8vIHRocm91Z2ggYXMtaXMuXG4gICAgICBpZiAoaXNSZWFjdENvbXBvbmVudEluc3RhbmNlKHJlc3VsdCkpIHtcbiAgICAgICAgUHJveHlDb21wb25lbnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2UsIGl0J3MgYSBub3JtYWwgZnVuY3Rpb25hbCBjb21wb25lbnQuIEJ1aWxkIHRoZSByZWFsIHByb3h5XG4gICAgICAvLyBhbmQgdXNlIGl0IGdvaW5nIGZvcndhcmQuXG4gICAgICBQcm94eUNvbXBvbmVudCA9IHByb3h5Q2xhc3NDcmVhdG9yKFJlYWN0LkNvbXBvbmVudCwgcG9zdENvbnN0cnVjdGlvbkFjdGlvbik7XG5cbiAgICAgIGRlZmluZVByb3h5TWV0aG9kcyhQcm94eUNvbXBvbmVudCk7XG5cbiAgICAgIHZhciBkZXRlcm1pbmF0ZVJlc3VsdCA9IG5ldyBQcm94eUNvbXBvbmVudChwcm9wcywgY29udGV4dCk7XG5cbiAgICAgIC8vIENhY2hlIHRoZSBpbml0aWFsIHJlbmRlciByZXN1bHQgc28gd2UgZG9uJ3QgY2FsbCB0aGUgY29tcG9uZW50IGZ1bmN0aW9uXG4gICAgICAvLyBhIHNlY29uZCB0aW1lIGZvciB0aGUgaW5pdGlhbCByZW5kZXIuXG4gICAgICBkZXRlcm1pbmF0ZVJlc3VsdFtDQUNIRURfUkVTVUxUXSA9IHJlc3VsdDtcbiAgICAgIHJldHVybiBkZXRlcm1pbmF0ZVJlc3VsdDtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfUHJveHlGYWNhZGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50KCkge1xuICAgIHJldHVybiBDdXJyZW50Q29tcG9uZW50O1xuICB9XG5cbiAgc2FmZURlZmluZVByb3BlcnR5KF9Qcm94eUZhY2FkZSwgVU5XUkFQX1BST1hZLCB7XG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGdldEN1cnJlbnRcbiAgfSk7XG5cbiAgc2FmZURlZmluZVByb3BlcnR5KF9Qcm94eUZhY2FkZSwgUFJPWFlfS0VZLCB7XG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IHByb3h5S2V5XG4gIH0pO1xuXG4gIHNhZmVEZWZpbmVQcm9wZXJ0eShfUHJveHlGYWNhZGUsICd0b1N0cmluZycsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBTdHJpbmcoQ3VycmVudENvbXBvbmVudCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGUoTmV4dENvbXBvbmVudCkge1xuICAgIGlmICh0eXBlb2YgTmV4dENvbXBvbmVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBhIGNvbnN0cnVjdG9yLicpO1xuICAgIH1cblxuICAgIGlmIChOZXh0Q29tcG9uZW50ID09PSBDdXJyZW50Q29tcG9uZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUHJldmVudCBwcm94eSBjeWNsZXNcbiAgICB2YXIgZXhpc3RpbmdQcm94eSA9IHByb3hpZXMuZ2V0KE5leHRDb21wb25lbnQpO1xuICAgIGlmIChleGlzdGluZ1Byb3h5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJveGllcy5zZXQoTmV4dENvbXBvbmVudCwgcHJveHkpO1xuXG4gICAgaXNGdW5jdGlvbmFsQ29tcG9uZW50ID0gIWlzUmVhY3RDbGFzcyhOZXh0Q29tcG9uZW50KTtcbiAgICBwcm94eUdlbmVyYXRpb24rKztcblxuICAgIC8vIFNhdmUgdGhlIG5leHQgY29uc3RydWN0b3Igc28gd2UgY2FsbCBpdFxuICAgIHZhciBQcmV2aW91c0NvbXBvbmVudCA9IEN1cnJlbnRDb21wb25lbnQ7XG4gICAgQ3VycmVudENvbXBvbmVudCA9IE5leHRDb21wb25lbnQ7XG5cbiAgICAvLyBUcnkgdG8gaW5mZXIgZGlzcGxheU5hbWVcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZShDdXJyZW50Q29tcG9uZW50KTtcblxuICAgIHNhZmVEZWZpbmVQcm9wZXJ0eShfUHJveHlGYWNhZGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZGlzcGxheU5hbWVcbiAgICB9KTtcblxuICAgIGlmIChQcm94eUNvbXBvbmVudCkge1xuICAgICAgc2FmZURlZmluZVByb3BlcnR5KFByb3h5Q29tcG9uZW50LCAnbmFtZScsIHtcbiAgICAgICAgdmFsdWU6IGRpc3BsYXlOYW1lXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlZERlc2NyaXB0b3JzID0gdHJhbnNmZXJTdGF0aWNQcm9wcyhfUHJveHlGYWNhZGUsIHNhdmVkRGVzY3JpcHRvcnMsIFByZXZpb3VzQ29tcG9uZW50LCBOZXh0Q29tcG9uZW50KTtcblxuICAgIGlmIChpc0Z1bmN0aW9uYWxDb21wb25lbnQgfHwgIVByb3h5Q29tcG9uZW50KSA7IGVsc2Uge1xuICAgICAgY2hlY2tMaWZlQ3ljbGVNZXRob2RzKFByb3h5Q29tcG9uZW50LCBOZXh0Q29tcG9uZW50KTtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihQcm94eUNvbXBvbmVudC5wcm90b3R5cGUsIE5leHRDb21wb25lbnQucHJvdG90eXBlKTtcbiAgICAgIGRlZmluZVByb3h5TWV0aG9kcyhQcm94eUNvbXBvbmVudCwgTmV4dENvbXBvbmVudC5wcm90b3R5cGUpO1xuICAgICAgaWYgKHByb3h5R2VuZXJhdGlvbiA+IDEpIHtcbiAgICAgICAgaW5qZWN0ZWRNZW1iZXJzID0gbWVyZ2VDb21wb25lbnRzKFByb3h5Q29tcG9uZW50LCBOZXh0Q29tcG9uZW50LCBJbml0aWFsQ29tcG9uZW50LCBsYXN0SW5zdGFuY2UsIGluamVjdGVkTWVtYmVycyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKEluaXRpYWxDb21wb25lbnQpO1xuXG4gIHByb3h5ID0geyBnZXQ6IGdldCwgdXBkYXRlOiB1cGRhdGUgfTtcblxuICBwcm94aWVzLnNldChJbml0aWFsQ29tcG9uZW50LCBwcm94eSk7XG4gIHByb3hpZXMuc2V0KF9Qcm94eUZhY2FkZSwgcHJveHkpO1xuXG4gIHNhZmVEZWZpbmVQcm9wZXJ0eShwcm94eSwgVU5XUkFQX1BST1hZLCB7XG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGdldEN1cnJlbnRcbiAgfSk7XG5cbiAgcmV0dXJuIHByb3h5O1xufVxuXG52YXIgcHJveGllc0J5SUQgPSB2b2lkIDA7XG52YXIgaWRzQnlUeXBlID0gdm9pZCAwO1xuXG52YXIgZWxlbWVudENvdW50ID0gMDtcbnZhciByZW5kZXJPcHRpb25zID0ge307XG5cbnZhciBnZW5lcmF0ZVR5cGVJZCA9IGZ1bmN0aW9uIGdlbmVyYXRlVHlwZUlkKCkge1xuICByZXR1cm4gJ2F1dG8tJyArIGVsZW1lbnRDb3VudCsrO1xufTtcblxudmFyIGdldElkQnlUeXBlID0gZnVuY3Rpb24gZ2V0SWRCeVR5cGUodHlwZSkge1xuICByZXR1cm4gaWRzQnlUeXBlLmdldCh0eXBlKTtcbn07XG5cbnZhciBnZXRQcm94eUJ5SWQgPSBmdW5jdGlvbiBnZXRQcm94eUJ5SWQoaWQpIHtcbiAgcmV0dXJuIHByb3hpZXNCeUlEW2lkXTtcbn07XG52YXIgZ2V0UHJveHlCeVR5cGUgPSBmdW5jdGlvbiBnZXRQcm94eUJ5VHlwZSh0eXBlKSB7XG4gIHJldHVybiBnZXRQcm94eUJ5SWQoZ2V0SWRCeVR5cGUodHlwZSkpO1xufTtcblxudmFyIHNldFN0YW5kSW5PcHRpb25zID0gZnVuY3Rpb24gc2V0U3RhbmRJbk9wdGlvbnMob3B0aW9ucykge1xuICByZW5kZXJPcHRpb25zID0gb3B0aW9ucztcbn07XG5cbnZhciB1cGRhdGVQcm94eUJ5SWQgPSBmdW5jdGlvbiB1cGRhdGVQcm94eUJ5SWQoaWQsIHR5cGUpIHtcbiAgLy8gUmVtZW1iZXIgdGhlIElELlxuICBpZHNCeVR5cGUuc2V0KHR5cGUsIGlkKTtcblxuICBpZiAoIXByb3hpZXNCeUlEW2lkXSkge1xuICAgIHByb3hpZXNCeUlEW2lkXSA9IGNyZWF0ZUNsYXNzUHJveHkodHlwZSwgaWQsIHJlbmRlck9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHByb3hpZXNCeUlEW2lkXS51cGRhdGUodHlwZSk7XG4gIH1cbiAgcmV0dXJuIHByb3hpZXNCeUlEW2lkXTtcbn07XG5cbnZhciBjcmVhdGVQcm94eUZvclR5cGUgPSBmdW5jdGlvbiBjcmVhdGVQcm94eUZvclR5cGUodHlwZSkge1xuICByZXR1cm4gZ2V0UHJveHlCeVR5cGUodHlwZSkgfHwgdXBkYXRlUHJveHlCeUlkKGdlbmVyYXRlVHlwZUlkKCksIHR5cGUpO1xufTtcblxudmFyIHJlc2V0UHJveGllcyA9IGZ1bmN0aW9uIHJlc2V0UHJveGllcygpIHtcbiAgcHJveGllc0J5SUQgPSB7fTtcbiAgaWRzQnlUeXBlID0gbmV3IFdlYWtNYXAoKTtcbiAgcmVzZXRDbGFzc1Byb3hpZXMoKTtcbn07XG5cbnJlc2V0UHJveGllcygpO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG5mdW5jdGlvbiByZXNvbHZlVHlwZSh0eXBlKSB7XG4gIGlmICghaXNDb21wb3NpdGVDb21wb25lbnQodHlwZSkpIHJldHVybiB0eXBlO1xuXG4gIHZhciBwcm94eSA9IHJlYWN0SG90TG9hZGVyLmRpc2FibGVQcm94eUNyZWF0aW9uID8gZ2V0UHJveHlCeVR5cGUodHlwZSkgOiBjcmVhdGVQcm94eUZvclR5cGUodHlwZSk7XG5cbiAgcmV0dXJuIHByb3h5ID8gcHJveHkuZ2V0KCkgOiB0eXBlO1xufVxuXG52YXIgcmVhY3RIb3RMb2FkZXIgPSB7XG4gIHJlZ2lzdGVyOiBmdW5jdGlvbiByZWdpc3Rlcih0eXBlLCB1bmlxdWVMb2NhbE5hbWUsIGZpbGVOYW1lKSB7XG4gICAgaWYgKGlzQ29tcG9zaXRlQ29tcG9uZW50KHR5cGUpICYmIHR5cGVvZiB1bmlxdWVMb2NhbE5hbWUgPT09ICdzdHJpbmcnICYmIHVuaXF1ZUxvY2FsTmFtZSAmJiB0eXBlb2YgZmlsZU5hbWUgPT09ICdzdHJpbmcnICYmIGZpbGVOYW1lKSB7XG4gICAgICB2YXIgaWQgPSBmaWxlTmFtZSArICcjJyArIHVuaXF1ZUxvY2FsTmFtZTtcblxuICAgICAgaWYgKGdldFByb3h5QnlJZChpZCkpIHtcbiAgICAgICAgLy8gY29tcG9uZW50IGdvdCByZXBsYWNlZC4gTmVlZCB0byByZWNvbnNpbGVcbiAgICAgICAgaW5jcmVtZW50KCk7XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZVByb3h5QnlJZChpZCwgdHlwZSk7XG4gICAgfVxuICB9LFxuICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgcmVzZXRQcm94aWVzKCk7XG4gIH0sXG4gIHBhdGNoOiBmdW5jdGlvbiBwYXRjaChSZWFjdCQkMSkge1xuICAgIGlmICghUmVhY3QkJDEuY3JlYXRlRWxlbWVudC5pc1BhdGNoZWRCeVJlYWN0SG90TG9hZGVyKSB7XG4gICAgICB2YXIgb3JpZ2luYWxDcmVhdGVFbGVtZW50ID0gUmVhY3QkJDEuY3JlYXRlRWxlbWVudDtcbiAgICAgIC8vIFRyaWNrIFJlYWN0IGludG8gcmVuZGVyaW5nIGEgcHJveHkgc28gdGhhdFxuICAgICAgLy8gaXRzIHN0YXRlIGlzIHByZXNlcnZlZCB3aGVuIHRoZSBjbGFzcyBjaGFuZ2VzLlxuICAgICAgLy8gVGhpcyB3aWxsIHVwZGF0ZSB0aGUgcHJveHkgaWYgaXQncyBmb3IgYSBrbm93biB0eXBlLlxuICAgICAgUmVhY3QkJDEuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsQ3JlYXRlRWxlbWVudC5hcHBseSh1bmRlZmluZWQsIFtyZXNvbHZlVHlwZSh0eXBlKV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH07XG4gICAgICBSZWFjdCQkMS5jcmVhdGVFbGVtZW50LmlzUGF0Y2hlZEJ5UmVhY3RIb3RMb2FkZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghUmVhY3QkJDEuY3JlYXRlRmFjdG9yeS5pc1BhdGNoZWRCeVJlYWN0SG90TG9hZGVyKSB7XG4gICAgICAvLyBQYXRjaCBSZWFjdC5jcmVhdGVGYWN0b3J5IHRvIHVzZSBwYXRjaGVkIGNyZWF0ZUVsZW1lbnRcbiAgICAgIC8vIGJlY2F1c2UgdGhlIG9yaWdpbmFsIGltcGxlbWVudGF0aW9uIHVzZXMgdGhlIGludGVybmFsLFxuICAgICAgLy8gdW5wYXRjaGVkIFJlYWN0RWxlbWVudC5jcmVhdGVFbGVtZW50XG4gICAgICBSZWFjdCQkMS5jcmVhdGVGYWN0b3J5ID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIGZhY3RvcnkgPSBSZWFjdCQkMS5jcmVhdGVFbGVtZW50LmJpbmQobnVsbCwgdHlwZSk7XG4gICAgICAgIGZhY3RvcnkudHlwZSA9IHR5cGU7XG4gICAgICAgIHJldHVybiBmYWN0b3J5O1xuICAgICAgfTtcbiAgICAgIFJlYWN0JCQxLmNyZWF0ZUZhY3RvcnkuaXNQYXRjaGVkQnlSZWFjdEhvdExvYWRlciA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFSZWFjdCQkMS5DaGlsZHJlbi5vbmx5LmlzUGF0Y2hlZEJ5UmVhY3RIb3RMb2FkZXIpIHtcbiAgICAgIHZhciBvcmlnaW5hbENoaWxkcmVuT25seSA9IFJlYWN0JCQxLkNoaWxkcmVuLm9ubHk7XG4gICAgICAvLyBVc2UgdGhlIHNhbWUgdHJpY2sgYXMgUmVhY3QuY3JlYXRlRWxlbWVudFxuICAgICAgUmVhY3QkJDEuQ2hpbGRyZW4ub25seSA9IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxDaGlsZHJlbk9ubHkoX2V4dGVuZHMoe30sIGNoaWxkcmVuLCB7IHR5cGU6IHJlc29sdmVUeXBlKGNoaWxkcmVuLnR5cGUpIH0pKTtcbiAgICAgIH07XG4gICAgICBSZWFjdCQkMS5DaGlsZHJlbi5vbmx5LmlzUGF0Y2hlZEJ5UmVhY3RIb3RMb2FkZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlYWN0SG90TG9hZGVyLnJlc2V0KCk7XG4gIH0sXG5cblxuICBkaXNhYmxlUHJveHlDcmVhdGlvbjogZmFsc2Vcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5cbmZ1bmN0aW9uIHB1c2hTdGFjayhzdGFjaywgbm9kZSkge1xuICBzdGFjay50eXBlID0gbm9kZS50eXBlO1xuICBzdGFjay5jaGlsZHJlbiA9IFtdO1xuICBzdGFjay5pbnN0YW5jZSA9IHR5cGVvZiBub2RlLnR5cGUgPT09ICdmdW5jdGlvbicgPyBub2RlLnN0YXRlTm9kZSA6IHN0YWNrO1xuXG4gIGlmICghc3RhY2suaW5zdGFuY2UpIHtcbiAgICBzdGFjay5pbnN0YW5jZSA9IHtcbiAgICAgIFNGQ19mYWtlOiBzdGFjay50eXBlLFxuICAgICAgcHJvcHM6IHt9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBzdGFjay50eXBlKHN0YWNrLmluc3RhbmNlLnByb3BzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVGaWJlclN0YWNrKG5vZGUsIHN0YWNrKSB7XG4gIHB1c2hTdGFjayhzdGFjaywgbm9kZSk7XG4gIGlmIChub2RlLmNoaWxkKSB7XG4gICAgdmFyIGNoaWxkID0gbm9kZS5jaGlsZDtcblxuICAgIGRvIHtcbiAgICAgIHZhciBjaGlsZFN0YWNrID0ge307XG4gICAgICBoeWRyYXRlRmliZXJTdGFjayhjaGlsZCwgY2hpbGRTdGFjayk7XG4gICAgICBzdGFjay5jaGlsZHJlbi5wdXNoKGNoaWxkU3RhY2spO1xuICAgICAgY2hpbGQgPSBjaGlsZC5zaWJsaW5nO1xuICAgIH0gd2hpbGUgKGNoaWxkKTtcbiAgfVxufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5mdW5jdGlvbiBwdXNoU3RhdGUoc3RhY2ssIHR5cGUsIGluc3RhbmNlKSB7XG4gIHN0YWNrLnR5cGUgPSB0eXBlO1xuICBzdGFjay5jaGlsZHJlbiA9IFtdO1xuICBzdGFjay5pbnN0YW5jZSA9IGluc3RhbmNlIHx8IHN0YWNrO1xuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlLmlzU3RhdGVsZXNzRnVuY3Rpb25hbFByb3h5KSB7XG4gICAgLy8gSW4gUmVhY3QgMTUgU0ZDIGlzIHdyYXBwZWQgYnkgY29tcG9uZW50LiBXZSBoYXZlIHRvIGRldGVjdCBvdXIgcHJveGllcyBhbmQgY2hhbmdlIHRoZSB3YXkgaXQgd29ya3NcbiAgICBzdGFjay5pbnN0YW5jZSA9IHtcbiAgICAgIFNGQ19mYWtlOiB0eXBlLFxuICAgICAgcHJvcHM6IHt9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0eXBlKHN0YWNrLmluc3RhbmNlLnByb3BzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVMZWdhY3lTdGFjayhub2RlLCBzdGFjaykge1xuICBpZiAobm9kZS5fY3VycmVudEVsZW1lbnQpIHtcbiAgICBwdXNoU3RhdGUoc3RhY2ssIG5vZGUuX2N1cnJlbnRFbGVtZW50LnR5cGUsIG5vZGUuX2luc3RhbmNlIHx8IHN0YWNrKTtcbiAgfVxuXG4gIGlmIChub2RlLl9yZW5kZXJlZENvbXBvbmVudCkge1xuICAgIHZhciBjaGlsZFN0YWNrID0ge307XG4gICAgaHlkcmF0ZUxlZ2FjeVN0YWNrKG5vZGUuX3JlbmRlcmVkQ29tcG9uZW50LCBjaGlsZFN0YWNrKTtcbiAgICBzdGFjay5jaGlsZHJlbi5wdXNoKGNoaWxkU3RhY2spO1xuICB9IGVsc2UgaWYgKG5vZGUuX3JlbmRlcmVkQ2hpbGRyZW4pIHtcbiAgICBPYmplY3Qua2V5cyhub2RlLl9yZW5kZXJlZENoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBjaGlsZFN0YWNrID0ge307XG4gICAgICBoeWRyYXRlTGVnYWN5U3RhY2sobm9kZS5fcmVuZGVyZWRDaGlsZHJlbltrZXldLCBjaGlsZFN0YWNrKTtcbiAgICAgIHN0YWNrLmNoaWxkcmVuLnB1c2goY2hpbGRTdGFjayk7XG4gICAgfSk7XG4gIH1cbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxuZnVuY3Rpb24gZ2V0UmVhY3RTdGFjayhpbnN0YW5jZSkge1xuICB2YXIgcm9vdE5vZGUgPSBnZXRJbnRlcm5hbEluc3RhbmNlKGluc3RhbmNlKTtcbiAgdmFyIHN0YWNrID0ge307XG4gIHZhciBpc0ZpYmVyID0gdHlwZW9mIHJvb3ROb2RlLnRhZyA9PT0gJ251bWJlcic7XG4gIGlmIChpc0ZpYmVyKSB7XG4gICAgaHlkcmF0ZUZpYmVyU3RhY2socm9vdE5vZGUsIHN0YWNrKTtcbiAgfSBlbHNlIHtcbiAgICBoeWRyYXRlTGVnYWN5U3RhY2socm9vdE5vZGUsIHN0YWNrKTtcbiAgfVxuICByZXR1cm4gc3RhY2s7XG59XG5cbi8vIHNvbWUgYGVtcHR5YCBuYW1lcywgUmVhY3QgY2FuIGF1dG9zZXQgZGlzcGxheSBuYW1lIHRvLi4uXG52YXIgVU5ERUZJTkVEX05BTUVTID0ge1xuICBVbmtub3duOiB0cnVlLFxuICBDb21wb25lbnQ6IHRydWVcbn07XG5cbnZhciByZW5kZXJTdGFjayA9IFtdO1xuXG52YXIgc3RhY2tSZXBvcnQgPSBmdW5jdGlvbiBzdGFja1JlcG9ydCgpIHtcbiAgdmFyIHJldiA9IHJlbmRlclN0YWNrLnNsaWNlKCkucmV2ZXJzZSgpO1xuICBsb2dnZXIud2FybignaW4nLCByZXZbMF0ubmFtZSwgcmV2KTtcbn07XG5cbnZhciBhcmVOYW1lc0VxdWFsID0gZnVuY3Rpb24gYXJlTmFtZXNFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiIHx8IFVOREVGSU5FRF9OQU1FU1thXSAmJiBVTkRFRklORURfTkFNRVNbYl07XG59O1xudmFyIGlzUmVhY3RDbGFzcyQxID0gZnVuY3Rpb24gaXNSZWFjdENsYXNzKGZuKSB7XG4gIHJldHVybiBmbiAmJiAhIWZuLnJlbmRlcjtcbn07XG52YXIgaXNGdW5jdGlvbmFsID0gZnVuY3Rpb24gaXNGdW5jdGlvbmFsKGZuKSB7XG4gIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbic7XG59O1xudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGZuKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGZuKTtcbn07XG52YXIgYXNBcnJheSA9IGZ1bmN0aW9uIGFzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheShhKSA/IGEgOiBbYV07XG59O1xudmFyIGdldFR5cGVPZiA9IGZ1bmN0aW9uIGdldFR5cGVPZih0eXBlKSB7XG4gIGlmIChpc1JlYWN0Q2xhc3MkMSh0eXBlKSkgcmV0dXJuICdSZWFjdENvbXBvbmVudCc7XG4gIGlmIChpc0Z1bmN0aW9uYWwodHlwZSkpIHJldHVybiAnU3RhdGVsZXNzRnVuY3Rpb25hbCc7XG4gIHJldHVybiAnRnJhZ21lbnQnOyAvLyA/XG59O1xuXG52YXIgZmlsdGVyTnVsbEFycmF5ID0gZnVuY3Rpb24gZmlsdGVyTnVsbEFycmF5KGEpIHtcbiAgaWYgKCFhKSByZXR1cm4gW107XG4gIHJldHVybiBhLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiAhIXg7XG4gIH0pO1xufTtcblxudmFyIHVuZmxhdHRlbiA9IGZ1bmN0aW9uIHVuZmxhdHRlbihhKSB7XG4gIHJldHVybiBhLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBhKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgIGFjYy5wdXNoLmFwcGx5KGFjYywgdW5mbGF0dGVuKGEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWNjLnB1c2goYSk7XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdKTtcbn07XG5cbnZhciBnZXRFbGVtZW50VHlwZSA9IGZ1bmN0aW9uIGdldEVsZW1lbnRUeXBlKGNoaWxkKSB7XG4gIHJldHVybiBjaGlsZC50eXBlW1VOV1JBUF9QUk9YWV0gPyBjaGlsZC50eXBlW1VOV1JBUF9QUk9YWV0oKSA6IGNoaWxkLnR5cGU7XG59O1xuXG52YXIgaGF2ZVRleHRTaW1pbGFyaXR5ID0gZnVuY3Rpb24gaGF2ZVRleHRTaW1pbGFyaXR5KGEsIGIpIHtcbiAgcmV0dXJuIChcbiAgICAvLyBlcXVhbCBvciBzbGlnaHQgY2hhbmdlZFxuICAgIGEgPT09IGIgfHwgbGV2ZW5zaHRlaW4uZ2V0KGEsIGIpIDwgYS5sZW5ndGggKiAwLjJcbiAgKTtcbn07XG5cbnZhciBlcXVhbENsYXNzZXMgPSBmdW5jdGlvbiBlcXVhbENsYXNzZXMoYSwgYikge1xuICB2YXIgcHJvdG90eXBlQSA9IGEucHJvdG90eXBlO1xuICB2YXIgcHJvdG90eXBlQiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihiLnByb3RvdHlwZSk7XG5cbiAgdmFyIGhpdHMgPSAwO1xuICB2YXIgbWlzc2VzID0gMDtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvdG90eXBlQSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKHR5cGVvZiBwcm90b3R5cGVBW2tleV0gPT09ICdmdW5jdGlvbicgJiYga2V5ICE9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBpZiAoaGF2ZVRleHRTaW1pbGFyaXR5KFN0cmluZyhwcm90b3R5cGVBW2tleV0pLCBTdHJpbmcocHJvdG90eXBlQltrZXldKSkpIHtcbiAgICAgICAgaGl0cysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWlzc2VzKys7XG4gICAgICAgIGlmIChrZXkgPT09ICdyZW5kZXInKSB7XG4gICAgICAgICAgbWlzc2VzKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICAvLyBhbGxvdyB0byBhZGQgb3IgcmVtb3ZlIG9uZSBmdW5jdGlvblxuICByZXR1cm4gaGl0cyA+IDAgJiYgbWlzc2VzIDw9IDE7XG59O1xuXG52YXIgaXNTd2FwcGFibGUgPSBmdW5jdGlvbiBpc1N3YXBwYWJsZShhLCBiKSB7XG4gIC8vIGJvdGggYXJlIHJlZ2lzdGVyZWQgY29tcG9uZW50c1xuICBpZiAoZ2V0SWRCeVR5cGUoYikgJiYgZ2V0SWRCeVR5cGUoYSkgPT09IGdldElkQnlUeXBlKGIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGdldFR5cGVPZihhKSAhPT0gZ2V0VHlwZU9mKGIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChpc1JlYWN0Q2xhc3MkMShhLnByb3RvdHlwZSkpIHtcbiAgICByZXR1cm4gYXJlTmFtZXNFcXVhbChnZXRDb21wb25lbnREaXNwbGF5TmFtZShhKSwgZ2V0Q29tcG9uZW50RGlzcGxheU5hbWUoYikpICYmIGVxdWFsQ2xhc3NlcyhhLCBiKTtcbiAgfVxuXG4gIGlmIChpc0Z1bmN0aW9uYWwoYSkpIHtcbiAgICB2YXIgbmFtZUEgPSBnZXRDb21wb25lbnREaXNwbGF5TmFtZShhKTtcbiAgICByZXR1cm4gYXJlTmFtZXNFcXVhbChuYW1lQSwgZ2V0Q29tcG9uZW50RGlzcGxheU5hbWUoYikpICYmIG5hbWVBICE9PSAnQ29tcG9uZW50JyB8fCBoYXZlVGV4dFNpbWlsYXJpdHkoU3RyaW5nKGEpLCBTdHJpbmcoYikpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoY29tcG9uZW50KSB7XG4gIGlmICghY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmIChpc1JlYWN0Q2xhc3MkMShjb21wb25lbnQpKSB7XG4gICAgLy8gbm90IGNhbGxpbmcgcmVhbCByZW5kZXIgbWV0aG9kIHRvIHByZXZlbnQgY2FsbCByZWN1cnNpb24uXG4gICAgLy8gc3RhdGVsZXNzIGNvbXBvbmVudHMgZG9lcyBub3QgaGF2ZSBob3RDb21wb25lbnRSZW5kZXJcbiAgICByZXR1cm4gY29tcG9uZW50LmhvdENvbXBvbmVudFJlbmRlciA/IGNvbXBvbmVudC5ob3RDb21wb25lbnRSZW5kZXIoKSA6IGNvbXBvbmVudC5yZW5kZXIoKTtcbiAgfVxuICBpZiAoaXNBcnJheShjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5tYXAocmVuZGVyKTtcbiAgfVxuICBpZiAoY29tcG9uZW50LmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5jaGlsZHJlbjtcbiAgfVxuXG4gIHJldHVybiBbXTtcbn07XG5cbnZhciBOT19DSElMRFJFTiA9IHsgY2hpbGRyZW46IFtdIH07XG52YXIgbWFwQ2hpbGRyZW4gPSBmdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgaW5zdGFuY2VzKSB7XG4gIHJldHVybiB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgIGlmICgodHlwZW9mIGNoaWxkID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihjaGlsZCkpICE9PSAnb2JqZWN0JyB8fCBjaGlsZC5pc01lcmdlZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG4gICAgICB2YXIgaW5zdGFuY2VMaW5lID0gaW5zdGFuY2VzW2luZGV4XSB8fCB7fTtcbiAgICAgIHZhciBvbGRDaGlsZHJlbiA9IGFzQXJyYXkoaW5zdGFuY2VMaW5lLmNoaWxkcmVuIHx8IFtdKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgICAgdHlwZTogbnVsbFxuICAgICAgICB9LCBtYXBDaGlsZHJlbihjaGlsZCwgb2xkQ2hpbGRyZW4pKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld0NoaWxkcmVuID0gYXNBcnJheShjaGlsZC5wcm9wcyAmJiBjaGlsZC5wcm9wcy5jaGlsZHJlbiB8fCBjaGlsZC5jaGlsZHJlbiB8fCBbXSk7XG4gICAgICB2YXIgbmV4dENoaWxkcmVuID0gY2hpbGQudHlwZSAhPT0gJ2Z1bmN0aW9uJyAmJiBvbGRDaGlsZHJlbi5sZW5ndGggJiYgbWFwQ2hpbGRyZW4obmV3Q2hpbGRyZW4sIG9sZENoaWxkcmVuKTtcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgbmV4dFByb3BzOiBjaGlsZC5wcm9wcyxcbiAgICAgICAgaXNNZXJnZWQ6IHRydWVcbiAgICAgIH0sIGluc3RhbmNlTGluZSwgbmV4dENoaWxkcmVuIHx8IHt9LCB7XG4gICAgICAgIHR5cGU6IGNoaWxkLnR5cGVcbiAgICAgIH0pO1xuICAgIH0pXG4gIH07XG59O1xuXG52YXIgbWVyZ2VJbmplY3QgPSBmdW5jdGlvbiBtZXJnZUluamVjdChhLCBiLCBpbnN0YW5jZSkge1xuICBpZiAoYSAmJiAhQXJyYXkuaXNBcnJheShhKSkge1xuICAgIHJldHVybiBtZXJnZUluamVjdChbYV0sIGIpO1xuICB9XG4gIGlmIChiICYmICFBcnJheS5pc0FycmF5KGIpKSB7XG4gICAgcmV0dXJuIG1lcmdlSW5qZWN0KGEsIFtiXSk7XG4gIH1cblxuICBpZiAoIWEgfHwgIWIpIHtcbiAgICByZXR1cm4gTk9fQ0hJTERSRU47XG4gIH1cbiAgaWYgKGEubGVuZ3RoID09PSBiLmxlbmd0aCkge1xuICAgIHJldHVybiBtYXBDaGlsZHJlbihhLCBiKTtcbiAgfVxuXG4gIC8vIGluIHNvbWUgY2FzZXMgKG5vIGNvbmZpZGVuY2UgaGVyZSkgQiBjb3VsZCBjb250YWluIEEgZXhjZXB0IG51bGwgY2hpbGRyZW5cbiAgLy8gaW4gc29tZSBjYXNlcyAtIGNvdWxkIG5vdC5cbiAgLy8gdGhpcyBkZXBlbmRzIG9uIFJlYWN0IHZlcnNpb24gYW5kIHRoZSB3YXkgeW91IGJ1aWxkIGNvbXBvbmVudC5cblxuICB2YXIgbm9uTnVsbEEgPSBmaWx0ZXJOdWxsQXJyYXkoYSk7XG4gIGlmIChub25OdWxsQS5sZW5ndGggPT09IGIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG1hcENoaWxkcmVuKG5vbk51bGxBLCBiKTtcbiAgfVxuXG4gIHZhciBmbGF0QSA9IHVuZmxhdHRlbihub25OdWxsQSk7XG4gIHZhciBmbGF0QiA9IHVuZmxhdHRlbihiKTtcbiAgaWYgKGZsYXRBLmxlbmd0aCA9PT0gZmxhdEIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG1hcENoaWxkcmVuKGZsYXRBLCBmbGF0Qik7XG4gIH1cbiAgaWYgKGZsYXRCLmxlbmd0aCA9PT0gMCAmJiBmbGF0QS5sZW5ndGggPT09IDEgJiYgX3R5cGVvZihmbGF0QVswXSkgIT09ICdvYmplY3QnKSA7IGVsc2Uge1xuICAgIGxvZ2dlci53YXJuKCdSZWFjdC1ob3QtbG9hZGVyOiB1bmFibGUgdG8gbWVyZ2UgJywgYSwgJ2FuZCBjaGlsZHJlbiBvZiAnLCBpbnN0YW5jZSk7XG4gICAgc3RhY2tSZXBvcnQoKTtcbiAgfVxuICByZXR1cm4gTk9fQ0hJTERSRU47XG59O1xuXG52YXIgdHJhbnNmb3JtRmxvd05vZGUgPSBmdW5jdGlvbiB0cmFuc2Zvcm1GbG93Tm9kZShmbG93KSB7XG4gIHJldHVybiBmbG93LnJlZHVjZShmdW5jdGlvbiAoYWNjLCBub2RlKSB7XG4gICAgaWYgKGlzRnJhZ21lbnROb2RlKG5vZGUpICYmIG5vZGUucHJvcHMgJiYgbm9kZS5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChhY2MsIGZpbHRlck51bGxBcnJheShub2RlLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfVxuICAgIHJldHVybiBbXS5jb25jYXQoYWNjLCBbbm9kZV0pO1xuICB9LCBbXSk7XG59O1xuXG52YXIgc2NoZWR1bGVkVXBkYXRlcyA9IFtdO1xudmFyIHNjaGVkdWxlZFVwZGF0ZSA9IDA7XG5cbnZhciBmbHVzaFNjaGVkdWxlZFVwZGF0ZXMgPSBmdW5jdGlvbiBmbHVzaFNjaGVkdWxlZFVwZGF0ZXMoKSB7XG4gIHZhciBpbnN0YW5jZXMgPSBzY2hlZHVsZWRVcGRhdGVzO1xuICBzY2hlZHVsZWRVcGRhdGVzID0gW107XG4gIHNjaGVkdWxlZFVwZGF0ZSA9IDA7XG4gIGluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVtQUk9YWV9JU19NT1VOVEVEXSAmJiB1cGRhdGVJbnN0YW5jZShpbnN0YW5jZSk7XG4gIH0pO1xufTtcblxudmFyIHVuc2NoZWR1bGVVcGRhdGUgPSBmdW5jdGlvbiB1bnNjaGVkdWxlVXBkYXRlKGluc3RhbmNlKSB7XG4gIHNjaGVkdWxlZFVwZGF0ZXMgPSBzY2hlZHVsZWRVcGRhdGVzLmZpbHRlcihmdW5jdGlvbiAoaW5zdCkge1xuICAgIHJldHVybiBpbnN0ICE9PSBpbnN0YW5jZTtcbiAgfSk7XG59O1xuXG52YXIgc2NoZWR1bGVJbnN0YW5jZVVwZGF0ZSA9IGZ1bmN0aW9uIHNjaGVkdWxlSW5zdGFuY2VVcGRhdGUoaW5zdGFuY2UpIHtcbiAgc2NoZWR1bGVkVXBkYXRlcy5wdXNoKGluc3RhbmNlKTtcbiAgaWYgKCFzY2hlZHVsZWRVcGRhdGUpIHtcbiAgICBzY2hlZHVsZWRVcGRhdGUgPSBzZXRUaW1lb3V0KGZsdXNoU2NoZWR1bGVkVXBkYXRlcyk7XG4gIH1cbn07XG5cbnZhciBob3RSZXBsYWNlbWVudFJlbmRlciA9IGZ1bmN0aW9uIGhvdFJlcGxhY2VtZW50UmVuZGVyKGluc3RhbmNlLCBzdGFjaykge1xuICBpZiAoaXNSZWFjdENsYXNzJDEoaW5zdGFuY2UpKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRFbGVtZW50VHlwZShzdGFjayk7XG4gICAgcmVuZGVyU3RhY2sucHVzaCh7XG4gICAgICBuYW1lOiBnZXRDb21wb25lbnREaXNwbGF5TmFtZSh0eXBlKSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBwcm9wczogc3RhY2suaW5zdGFuY2UucHJvcHNcbiAgICB9KTtcbiAgfVxuICB2YXIgZmxvdyA9IHRyYW5zZm9ybUZsb3dOb2RlKGZpbHRlck51bGxBcnJheShhc0FycmF5KHJlbmRlcihpbnN0YW5jZSkpKSk7XG5cbiAgdmFyIGNoaWxkcmVuID0gc3RhY2suY2hpbGRyZW47XG5cblxuICBmbG93LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgIHZhciBzdGFja0NoaWxkID0gY2hpbGRyZW5baW5kZXhdO1xuICAgIHZhciBuZXh0ID0gZnVuY3Rpb24gbmV4dChpbnN0YW5jZSkge1xuICAgICAgLy8gY29weSBvdmVyIHByb3BzIGFzIGxvbmcgbmV3IGNvbXBvbmVudCBtYXkgYmUgaGlkZGVuIGluc2lkZSB0aGVtXG4gICAgICAvLyBjaGlsZCBkb2VzIG5vdCBoYXZlIGFsbCBwcm9wcywgYXMgbG9uZyBzb21lIG9mIHRoZW0gY2FuIGJlIGNhbGN1bGF0ZWQgb24gY29tcG9uZW50TW91bnQuXG4gICAgICB2YXIgbmV4dFByb3BzID0gX2V4dGVuZHMoe30sIGluc3RhbmNlLnByb3BzLCBjaGlsZC5uZXh0UHJvcHMgfHwge30sIGNoaWxkLnByb3BzIHx8IHt9KTtcblxuICAgICAgaWYgKGlzUmVhY3RDbGFzcyQxKGluc3RhbmNlKSAmJiBpbnN0YW5jZS5jb21wb25lbnRXaWxsVXBkYXRlKSB7XG4gICAgICAgIC8vIEZvcmNlLXJlZnJlc2ggY29tcG9uZW50IChieXBhc3MgcmVkdXggcmVuZGVyZWRDb21wb25lbnQpXG4gICAgICAgIGluc3RhbmNlLmNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBpbnN0YW5jZS5zdGF0ZSk7XG4gICAgICB9XG4gICAgICBpbnN0YW5jZS5wcm9wcyA9IG5leHRQcm9wcztcbiAgICAgIGhvdFJlcGxhY2VtZW50UmVuZGVyKGluc3RhbmNlLCBzdGFja0NoaWxkKTtcbiAgICB9O1xuXG4gICAgLy8gdGV4dCBub2RlXG4gICAgaWYgKCh0eXBlb2YgY2hpbGQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGNoaWxkKSkgIT09ICdvYmplY3QnIHx8ICFzdGFja0NoaWxkIHx8ICFzdGFja0NoaWxkLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF90eXBlb2YoY2hpbGQudHlwZSkgIT09IF90eXBlb2Yoc3RhY2tDaGlsZC50eXBlKSkge1xuICAgICAgLy8gUG9ydGFscyBjb3VsZCBnZW5lcmF0ZSB1bmRlZmluZWQgIT09IG51bGxcbiAgICAgIGlmIChjaGlsZC50eXBlICYmIHN0YWNrQ2hpbGQudHlwZSkge1xuICAgICAgICBsb2dnZXIud2FybignUmVhY3QtaG90LWxvYWRlcjogZ290ICcsIGNoaWxkLnR5cGUsICdpbnN0ZWFkIG9mJywgc3RhY2tDaGlsZC50eXBlKTtcbiAgICAgICAgc3RhY2tSZXBvcnQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNoaWxkLnR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5leHQoXG4gICAgICAvLyBtb3ZlIHR5cGVzIGZyb20gcmVuZGVyIHRvIHRoZSBpbnN0YW5jZXMgb2YgaHlkcmF0ZWQgdHJlZVxuICAgICAgbWVyZ2VJbmplY3QoYXNBcnJheShjaGlsZC5wcm9wcyA/IGNoaWxkLnByb3BzLmNoaWxkcmVuIDogY2hpbGQuY2hpbGRyZW4pLCBzdGFja0NoaWxkLmluc3RhbmNlLmNoaWxkcmVuLCBzdGFja0NoaWxkLmluc3RhbmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVud3JhcCBwcm94eVxuICAgICAgdmFyIGNoaWxkVHlwZSA9IGdldEVsZW1lbnRUeXBlKGNoaWxkKTtcbiAgICAgIGlmICghc3RhY2tDaGlsZC50eXBlW1BST1hZX0tFWV0pIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBsb2dnZXIuZXJyb3IoJ1JlYWN0LWhvdC1sb2FkZXI6IGZhdGFsIGVycm9yIGNhdXNlZCBieSAnLCBzdGFja0NoaWxkLnR5cGUsICcgLSBubyBpbnN0cnVtZW50YXRpb24gZm91bmQuICcsICdQbGVhc2UgcmVxdWlyZSByZWFjdC1ob3QtbG9hZGVyIGJlZm9yZSBSZWFjdC4gTW9yZSBpbiB0cm91Ymxlc2hvb3RpbmcuJyk7XG4gICAgICAgIHN0YWNrUmVwb3J0KCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QtaG90LWxvYWRlcjogd3JvbmcgY29uZmlndXJhdGlvbicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQudHlwZSA9PT0gc3RhY2tDaGlsZC50eXBlKSB7XG4gICAgICAgIG5leHQoc3RhY2tDaGlsZC5pbnN0YW5jZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzU3dhcHBhYmxlKGNoaWxkVHlwZSwgc3RhY2tDaGlsZC50eXBlKSkge1xuICAgICAgICAvLyB0aGV5IGFyZSBib3RoIHJlZ2lzdGVyZWQsIG9yIGhhdmUgZXF1YWwgY29kZS9kaXNwbGF5bmFtZS9zaWduYXR1cmVcblxuICAgICAgICAvLyB1cGRhdGUgcHJveHkgdXNpbmcgaW50ZXJuYWwgUFJPWFlfS0VZXG4gICAgICAgIHVwZGF0ZVByb3h5QnlJZChzdGFja0NoaWxkLnR5cGVbUFJPWFlfS0VZXSwgY2hpbGRUeXBlKTtcblxuICAgICAgICBuZXh0KHN0YWNrQ2hpbGQuaW5zdGFuY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nZ2VyLndhcm4oJ1JlYWN0LWhvdC1sb2FkZXI6IGEgJyArIGdldENvbXBvbmVudERpc3BsYXlOYW1lKGNoaWxkVHlwZSkgKyAnIHdhcyBmb3VuZCB3aGVyZSBhICcgKyBnZXRDb21wb25lbnREaXNwbGF5TmFtZShzdGFja0NoaWxkKSArICcgd2FzIGV4cGVjdGVkLlxcbiAgICAgICAgICAnICsgY2hpbGRUeXBlKTtcbiAgICAgICAgc3RhY2tSZXBvcnQoKTtcbiAgICAgIH1cblxuICAgICAgc2NoZWR1bGVJbnN0YW5jZVVwZGF0ZShzdGFja0NoaWxkLmluc3RhbmNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChpc1JlYWN0Q2xhc3MkMShpbnN0YW5jZSkpIHtcbiAgICByZW5kZXJTdGFjay5wb3AoKTtcbiAgfVxufTtcblxudmFyIGhvdFJlcGxhY2VtZW50UmVuZGVyJDEgPSAoZnVuY3Rpb24gKGluc3RhbmNlLCBzdGFjaykge1xuICB0cnkge1xuICAgIC8vIGRpc2FibGUgcmVjb25jaWxlciB0byBwcmV2ZW50IHVwY29taW5nIGNvbXBvbmVudHMgZnJvbSBwcm94eWluZy5cbiAgICByZWFjdEhvdExvYWRlci5kaXNhYmxlUHJveHlDcmVhdGlvbiA9IHRydWU7XG4gICAgcmVuZGVyU3RhY2sgPSBbXTtcbiAgICBob3RSZXBsYWNlbWVudFJlbmRlcihpbnN0YW5jZSwgc3RhY2spO1xuICB9IGNhdGNoIChlKSB7XG4gICAgbG9nZ2VyLndhcm4oJ1JlYWN0LWhvdC1sb2FkZXI6IHJlY29uY2lsYXRpb24gZmFpbGVkIGR1ZSB0byBlcnJvcicsIGUpO1xuICB9IGZpbmFsbHkge1xuICAgIHJlYWN0SG90TG9hZGVyLmRpc2FibGVQcm94eUNyZWF0aW9uID0gZmFsc2U7XG4gIH1cbn0pO1xuXG52YXIgcmVjb25jaWxlSG90UmVwbGFjZW1lbnQgPSBmdW5jdGlvbiByZWNvbmNpbGVIb3RSZXBsYWNlbWVudChSZWFjdEluc3RhbmNlKSB7XG4gIHJldHVybiBob3RSZXBsYWNlbWVudFJlbmRlciQxKFJlYWN0SW5zdGFuY2UsIGdldFJlYWN0U3RhY2soUmVhY3RJbnN0YW5jZSkpO1xufTtcblxudmFyIFJFTkRFUkVEX0dFTkVSQVRJT04gPSAnUkVBQ1RfSE9UX0xPQURFUl9SRU5ERVJFRF9HRU5FUkFUSU9OJztcblxudmFyIHJlbmRlclJlY29uY2lsZXIgPSBmdW5jdGlvbiByZW5kZXJSZWNvbmNpbGVyKHRhcmdldCwgZm9yY2UpIHtcbiAgLy8gd2UgYXJlIG5vdCBpbnNpZGUgcGFyZW50IHJlY29uY2lsYXRpb25cbiAgdmFyIGN1cnJlbnRHZW5lcmF0aW9uID0gZ2V0KCk7XG4gIHZhciBjb21wb25lbnRHZW5lcmF0aW9uID0gdGFyZ2V0W1JFTkRFUkVEX0dFTkVSQVRJT05dO1xuXG4gIHRhcmdldFtSRU5ERVJFRF9HRU5FUkFUSU9OXSA9IGN1cnJlbnRHZW5lcmF0aW9uO1xuXG4gIGlmICghcmVhY3RIb3RMb2FkZXIuZGlzYWJsZVByb3h5Q3JlYXRpb24pIHtcbiAgICBpZiAoKGNvbXBvbmVudEdlbmVyYXRpb24gfHwgZm9yY2UpICYmIGNvbXBvbmVudEdlbmVyYXRpb24gIT09IGN1cnJlbnRHZW5lcmF0aW9uKSB7XG4gICAgICByZWNvbmNpbGVIb3RSZXBsYWNlbWVudCh0YXJnZXQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmZ1bmN0aW9uIGFzeW5jUmVjb25jaWxlZFJlbmRlcih0YXJnZXQpIHtcbiAgcmVuZGVyUmVjb25jaWxlcih0YXJnZXQsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcHJveHlXcmFwcGVyKGVsZW1lbnQpIHtcbiAgLy8gcG9zdCB3cmFwIG9uIHBvc3QgcmVuZGVyXG4gIGlmICghcmVhY3RIb3RMb2FkZXIuZGlzYWJsZVByb3h5Q3JlYXRpb24pIHtcbiAgICB1bnNjaGVkdWxlVXBkYXRlKHRoaXMpO1xuICB9XG5cbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gZWxlbWVudC5tYXAocHJveHlXcmFwcGVyKTtcbiAgfVxuICBpZiAodHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBwcm94eSA9IGdldFByb3h5QnlUeXBlKGVsZW1lbnQudHlwZSk7XG4gICAgaWYgKHByb3h5KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGVsZW1lbnQsIHtcbiAgICAgICAgdHlwZTogcHJveHkuZ2V0KClcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuc2V0U3RhbmRJbk9wdGlvbnMoe1xuICBjb21wb25lbnRXaWxsUmVuZGVyOiBhc3luY1JlY29uY2lsZWRSZW5kZXIsXG4gIGNvbXBvbmVudERpZFJlbmRlcjogcHJveHlXcmFwcGVyLFxuICBjb21wb25lbnREaWRVcGRhdGU6IGZsdXNoU2NoZWR1bGVkVXBkYXRlc1xufSk7XG5cbnZhciBBcHBDb250YWluZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBpbmhlcml0cyhBcHBDb250YWluZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFwcENvbnRhaW5lcigpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQXBwQ29udGFpbmVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tdW51c2VkLXN0YXRlXG4gICAgICBnZW5lcmF0aW9uOiAwXG4gICAgfSwgX3RlbXApLCBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIEFwcENvbnRhaW5lci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAocHJldlN0YXRlLmdlbmVyYXRpb24gIT09IGdldCgpKSB7XG4gICAgICAvLyBIb3QgcmVsb2FkIGlzIGhhcHBlbmluZy5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICBnZW5lcmF0aW9uOiBnZXQoKVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgQXBwQ29udGFpbmVyLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAvLyBEb24ndCB1cGRhdGUgdGhlIGNvbXBvbmVudCBpZiB0aGUgc3RhdGUgaGFkIGFuIGVycm9yIGFuZCBzdGlsbCBoYXMgb25lLlxuICAgIC8vIFRoaXMgYWxsb3dzIHRvIGJyZWFrIGFuIGluZmluaXRlIGxvb3Agb2YgZXJyb3IgLT4gcmVuZGVyIC0+IGVycm9yIC0+IHJlbmRlclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nYWVhcm9uL3JlYWN0LWhvdC1sb2FkZXIvaXNzdWVzLzY5NlxuICAgIGlmIChwcmV2U3RhdGUuZXJyb3IgJiYgdGhpcy5zdGF0ZS5lcnJvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIEFwcENvbnRhaW5lci5wcm90b3R5cGUuY29tcG9uZW50RGlkQ2F0Y2ggPSBmdW5jdGlvbiBjb21wb25lbnREaWRDYXRjaChlcnJvcikge1xuICAgIGxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBlcnJvciB9KTtcbiAgfTtcblxuICBBcHBDb250YWluZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgZXJyb3IgPSB0aGlzLnN0YXRlLmVycm9yO1xuXG5cbiAgICBpZiAodGhpcy5wcm9wcy5lcnJvclJlcG9ydGVyICYmIGVycm9yKSB7XG4gICAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmVycm9yUmVwb3J0ZXIsIHsgZXJyb3I6IGVycm9yIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdF9fZGVmYXVsdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBBcHBDb250YWluZXI7XG59KFJlYWN0X19kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkFwcENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBmdW5jdGlvbiBjaGlsZHJlbihwcm9wcykge1xuICAgIGlmIChSZWFjdF9fZGVmYXVsdC5DaGlsZHJlbi5jb3VudChwcm9wcy5jaGlsZHJlbikgIT09IDEpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvcCBcImNoaWxkcmVuXCIgc3VwcGxpZWQgdG8gQXBwQ29udGFpbmVyLiAnICsgJ0V4cGVjdGVkIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgd2l0aCB5b3VyIGFwcOKAmXMgcm9vdCBjb21wb25lbnQsIGUuZy4gPEFwcCAvPi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LFxuXG4gIGVycm9yUmVwb3J0ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pXG59O1xuXG5yZWFjdExpZmVjeWNsZXNDb21wYXQucG9seWZpbGwoQXBwQ29udGFpbmVyKTtcblxudmFyIG9wZW5lZE1vZHVsZXMgPSB7fTtcblxudmFyIGhvdE1vZHVsZXMgPSB7fTtcblxudmFyIGNyZWF0ZUhvdE1vZHVsZSA9IGZ1bmN0aW9uIGNyZWF0ZUhvdE1vZHVsZSgpIHtcbiAgcmV0dXJuIHsgaW5zdGFuY2VzOiBbXSwgdXBkYXRlVGltZW91dDogMCB9O1xufTtcblxudmFyIGhvdE1vZHVsZSA9IGZ1bmN0aW9uIGhvdE1vZHVsZShtb2R1bGVJZCkge1xuICBpZiAoIWhvdE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gICAgaG90TW9kdWxlc1ttb2R1bGVJZF0gPSBjcmVhdGVIb3RNb2R1bGUoKTtcbiAgfVxuICByZXR1cm4gaG90TW9kdWxlc1ttb2R1bGVJZF07XG59O1xuXG52YXIgaXNPcGVuZWQgPSBmdW5jdGlvbiBpc09wZW5lZChzb3VyY2VNb2R1bGUpIHtcbiAgcmV0dXJuIHNvdXJjZU1vZHVsZSAmJiAhIW9wZW5lZE1vZHVsZXNbc291cmNlTW9kdWxlLmlkXTtcbn07XG5cbnZhciBlbnRlciA9IGZ1bmN0aW9uIGVudGVyKHNvdXJjZU1vZHVsZSkge1xuICBpZiAoc291cmNlTW9kdWxlICYmIHNvdXJjZU1vZHVsZS5pZCkge1xuICAgIG9wZW5lZE1vZHVsZXNbc291cmNlTW9kdWxlLmlkXSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbG9nZ2VyLndhcm4oJ1JlYWN0LWhvdC1sb2FkZXI6IG5vIGBtb2R1bGVgIHZhcmlhYmxlIGZvdW5kLiBEbyB5b3Ugc2hhZG93IHN5c3RlbSB2YXJpYWJsZT8nKTtcbiAgfVxufTtcblxudmFyIGxlYXZlID0gZnVuY3Rpb24gbGVhdmUoc291cmNlTW9kdWxlKSB7XG4gIGlmIChzb3VyY2VNb2R1bGUgJiYgc291cmNlTW9kdWxlLmlkKSB7XG4gICAgZGVsZXRlIG9wZW5lZE1vZHVsZXNbc291cmNlTW9kdWxlLmlkXTtcbiAgfVxufTtcblxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlLCBuby11bmRlZiAqL1xudmFyIHJlcXVpcmVJbmRpcmVjdCA9IHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19yZXF1aXJlX18gOiByZXF1aXJlO1xuLyogZXNsaW50LWVuYWJsZSAqL1xuXG52YXIgY3JlYXRlSG9jID0gZnVuY3Rpb24gY3JlYXRlSG9jKFNvdXJjZUNvbXBvbmVudCwgVGFyZ2V0Q29tcG9uZW50KSB7XG4gIGhvaXN0Tm9uUmVhY3RTdGF0aWMoVGFyZ2V0Q29tcG9uZW50LCBTb3VyY2VDb21wb25lbnQpO1xuICBUYXJnZXRDb21wb25lbnQuZGlzcGxheU5hbWUgPSAnSG90RXhwb3J0ZWQnICsgZ2V0Q29tcG9uZW50RGlzcGxheU5hbWUoU291cmNlQ29tcG9uZW50KTtcbiAgcmV0dXJuIFRhcmdldENvbXBvbmVudDtcbn07XG5cbnZhciBtYWtlSG90RXhwb3J0ID0gZnVuY3Rpb24gbWFrZUhvdEV4cG9ydChzb3VyY2VNb2R1bGUpIHtcbiAgdmFyIHVwZGF0ZUluc3RhbmNlcyA9IGZ1bmN0aW9uIHVwZGF0ZUluc3RhbmNlcygpIHtcbiAgICB2YXIgbW9kdWxlID0gaG90TW9kdWxlKHNvdXJjZU1vZHVsZS5pZCk7XG4gICAgY2xlYXJUaW1lb3V0KG1vZHVsZS51cGRhdGVUaW1lb3V0KTtcbiAgICBtb2R1bGUudXBkYXRlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWlyZUluZGlyZWN0KHNvdXJjZU1vZHVsZS5pZCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGp1c3Qgc3dhbGxvd1xuICAgICAgfVxuICAgICAgbW9kdWxlLmluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0KSB7XG4gICAgICAgIHJldHVybiBpbnN0LmZvcmNlVXBkYXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBpZiAoc291cmNlTW9kdWxlLmhvdCkge1xuICAgIC8vIE1hcmsgYXMgc2VsZi1hY2NlcHRlZCBmb3IgV2VicGFja1xuICAgIC8vIFVwZGF0ZSBpbnN0YW5jZXMgZm9yIFBhcmNlbFxuICAgIHNvdXJjZU1vZHVsZS5ob3QuYWNjZXB0KHVwZGF0ZUluc3RhbmNlcyk7XG5cbiAgICAvLyBXZWJwYWNrIHdheVxuICAgIGlmIChzb3VyY2VNb2R1bGUuaG90LmFkZFN0YXR1c0hhbmRsZXIpIHtcbiAgICAgIGlmIChzb3VyY2VNb2R1bGUuaG90LnN0YXR1cygpID09PSAnaWRsZScpIHtcbiAgICAgICAgc291cmNlTW9kdWxlLmhvdC5hZGRTdGF0dXNIYW5kbGVyKGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSAnYXBwbHknKSB7XG4gICAgICAgICAgICB1cGRhdGVJbnN0YW5jZXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIGhvdCA9IGZ1bmN0aW9uIGhvdChzb3VyY2VNb2R1bGUpIHtcbiAgaWYgKCFzb3VyY2VNb2R1bGUgfHwgIXNvdXJjZU1vZHVsZS5pZCkge1xuICAgIC8vIHRoaXMgaXMgZmF0YWxcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0LWhvdC1sb2FkZXI6IGBob3RgIGNvdWxkIG5vdCBmaW5kIHRoZSBgaWRgIHByb3BlcnR5IGluIHRoZSBgbW9kdWxlYCB5b3UgaGF2ZSBwcm92aWRlZCcpO1xuICB9XG4gIHZhciBtb2R1bGVJZCA9IHNvdXJjZU1vZHVsZS5pZDtcbiAgdmFyIG1vZHVsZSA9IGhvdE1vZHVsZShtb2R1bGVJZCk7XG4gIG1ha2VIb3RFeHBvcnQoc291cmNlTW9kdWxlKTtcblxuICAvLyBUT0RPOiBFbnN1cmUgdGhhdCBhbGwgZXhwb3J0cyBmcm9tIHRoaXMgZmlsZSBhcmUgcmVhY3QgY29tcG9uZW50cy5cblxuICByZXR1cm4gZnVuY3Rpb24gKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICAvLyByZWdpc3RlciBwcm94eSBmb3Igd3JhcHBlZCBjb21wb25lbnRcbiAgICByZWFjdEhvdExvYWRlci5yZWdpc3RlcihXcmFwcGVkQ29tcG9uZW50LCBnZXRDb21wb25lbnREaXNwbGF5TmFtZShXcmFwcGVkQ29tcG9uZW50KSwgJ1JITCcgKyBtb2R1bGVJZCk7XG5cbiAgICByZXR1cm4gY3JlYXRlSG9jKFdyYXBwZWRDb21wb25lbnQsIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBpbmhlcml0cyhFeHBvcnRlZENvbXBvbmVudCwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIEV4cG9ydGVkQ29tcG9uZW50KCkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBFeHBvcnRlZENvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9XG5cbiAgICAgIEV4cG9ydGVkQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBtb2R1bGUuaW5zdGFuY2VzLnB1c2godGhpcyk7XG4gICAgICB9O1xuXG4gICAgICBFeHBvcnRlZENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGlzT3BlbmVkKHNvdXJjZU1vZHVsZSkpIHtcbiAgICAgICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgICAgIGxvZ2dlci5lcnJvcignUmVhY3QtaG90LWxvYWRlcjogRGV0ZWN0ZWQgQXBwQ29udGFpbmVyIHVubW91bnQgb24gbW9kdWxlIFxcJycgKyBtb2R1bGVJZCArICdcXCcgdXBkYXRlLlxcbicgKyAoJ0RpZCB5b3UgdXNlIFwiaG90KCcgKyBjb21wb25lbnROYW1lICsgJylcIiBhbmQgXCJSZWFjdERPTS5yZW5kZXIoKVwiIGluIHRoZSBzYW1lIGZpbGU/XFxuJykgKyAoJ1wiaG90KCcgKyBjb21wb25lbnROYW1lICsgJylcIiBzaGFsbCBvbmx5IGJlIHVzZWQgYXMgZXhwb3J0LlxcbicpICsgJ1BsZWFzZSByZWZlciB0byBcIkdldHRpbmcgU3RhcnRlZFwiIChodHRwczovL2dpdGh1Yi5jb20vZ2FlYXJvbi9yZWFjdC1ob3QtbG9hZGVyLykuJyk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmluc3RhbmNlcyA9IG1vZHVsZS5pbnN0YW5jZXMuZmlsdGVyKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgcmV0dXJuIGEgIT09IF90aGlzMjtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBFeHBvcnRlZENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBBcHBDb250YWluZXIsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIHRoaXMucHJvcHMpXG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gRXhwb3J0ZWRDb21wb25lbnQ7XG4gICAgfShSZWFjdC5Db21wb25lbnQpKTtcbiAgfTtcbn07XG5cbnZhciBnZXRQcm94eU9yVHlwZSA9IGZ1bmN0aW9uIGdldFByb3h5T3JUeXBlKHR5cGUpIHtcbiAgdmFyIHByb3h5ID0gZ2V0UHJveHlCeVR5cGUodHlwZSk7XG4gIHJldHVybiBwcm94eSA/IHByb3h5LmdldCgpIDogdHlwZTtcbn07XG5cbnZhciBhcmVDb21wb25lbnRzRXF1YWwgPSBmdW5jdGlvbiBhcmVDb21wb25lbnRzRXF1YWwoYSwgYikge1xuICByZXR1cm4gZ2V0UHJveHlPclR5cGUoYSkgPT09IGdldFByb3h5T3JUeXBlKGIpO1xufTtcblxudmFyIHNldENvbmZpZyA9IGZ1bmN0aW9uIHNldENvbmZpZyhjb25maWcpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oY29uZmlndXJhdGlvbiwgY29uZmlnKTtcbn07XG5cbnJlYWN0SG90TG9hZGVyLnBhdGNoKFJlYWN0X19kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcmVhY3RIb3RMb2FkZXI7XG5leHBvcnRzLkFwcENvbnRhaW5lciA9IEFwcENvbnRhaW5lcjtcbmV4cG9ydHMuaG90ID0gaG90O1xuZXhwb3J0cy5lbnRlck1vZHVsZSA9IGVudGVyO1xuZXhwb3J0cy5sZWF2ZU1vZHVsZSA9IGxlYXZlO1xuZXhwb3J0cy5hcmVDb21wb25lbnRzRXF1YWwgPSBhcmVDb21wb25lbnRzRXF1YWw7XG5leHBvcnRzLnNldENvbmZpZyA9IHNldENvbmZpZztcbiIsIid1c2Ugc3RyaWN0J1xuXG5pZiAoIW1vZHVsZS5ob3QgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9yZWFjdC1ob3QtbG9hZGVyLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9yZWFjdC1ob3QtbG9hZGVyLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXG4gIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICBpZiAoc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHRoaXMuc3RhdGUpO1xuICBpZiAoc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgdHJ5IHtcbiAgICB2YXIgcHJldlByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcHJldlN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3QgPSB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlXG4gICAgKTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0aGlzLnByb3BzID0gcHJldlByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBwcmV2U3RhdGU7XG4gIH1cbn1cblxuLy8gUmVhY3QgbWF5IHdhcm4gYWJvdXQgY1dNL2NXUlAvY1dVIG1ldGhvZHMgYmVpbmcgZGVwcmVjYXRlZC5cbi8vIEFkZCBhIGZsYWcgdG8gc3VwcHJlc3MgdGhlc2Ugd2FybmluZ3MgZm9yIHRoaXMgc3BlY2lhbCBjYXNlLlxuY29tcG9uZW50V2lsbE1vdW50Ll9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcy5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxVcGRhdGUuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5cbmZ1bmN0aW9uIHBvbHlmaWxsKENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxuICBpZiAoIXByb3RvdHlwZSB8fCAhcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBvbmx5IHBvbHlmaWxsIGNsYXNzIGNvbXBvbmVudHMnKTtcbiAgfVxuXG4gIGlmIChcbiAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIENvbXBvbmVudDtcbiAgfVxuXG4gIC8vIElmIG5ldyBjb21wb25lbnQgQVBJcyBhcmUgZGVmaW5lZCwgXCJ1bnNhZmVcIiBsaWZlY3ljbGVzIHdvbid0IGJlIGNhbGxlZC5cbiAgLy8gRXJyb3IgaWYgYW55IG9mIHRoZXNlIGxpZmVjeWNsZXMgYXJlIHByZXNlbnQsXG4gIC8vIEJlY2F1c2UgdGhleSB3b3VsZCB3b3JrIGRpZmZlcmVudGx5IGJldHdlZW4gb2xkZXIgYW5kIG5ld2VyICgxNi4zKykgdmVyc2lvbnMgb2YgUmVhY3QuXG4gIHZhciBmb3VuZFdpbGxNb3VudE5hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9IG51bGw7XG4gIHZhciBmb3VuZFdpbGxVcGRhdGVOYW1lID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ2NvbXBvbmVudFdpbGxNb3VudCc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsTW91bnQnO1xuICB9XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdjb21wb25lbnRXaWxsVXBkYXRlJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH1cbiAgaWYgKFxuICAgIGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCB8fFxuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsXG4gICkge1xuICAgIHZhciBjb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lO1xuICAgIHZhciBuZXdBcGlOYW1lID1cbiAgICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gJ2dldERlcml2ZWRTdGF0ZUZyb21Qcm9wcygpJ1xuICAgICAgICA6ICdnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpJztcblxuICAgIHRocm93IEVycm9yKFxuICAgICAgJ1Vuc2FmZSBsZWdhY3kgbGlmZWN5Y2xlcyB3aWxsIG5vdCBiZSBjYWxsZWQgZm9yIGNvbXBvbmVudHMgdXNpbmcgbmV3IGNvbXBvbmVudCBBUElzLlxcblxcbicgK1xuICAgICAgICBjb21wb25lbnROYW1lICtcbiAgICAgICAgJyB1c2VzICcgK1xuICAgICAgICBuZXdBcGlOYW1lICtcbiAgICAgICAgJyBidXQgYWxzbyBjb250YWlucyB0aGUgZm9sbG93aW5nIGxlZ2FjeSBsaWZlY3ljbGVzOicgK1xuICAgICAgICAoZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbE1vdW50TmFtZSA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsXG4gICAgICAgICAgPyAnXFxuICAnICsgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZVxuICAgICAgICAgIDogJycpICtcbiAgICAgICAgKGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGwgPyAnXFxuICAnICsgZm91bmRXaWxsVXBkYXRlTmFtZSA6ICcnKSArXG4gICAgICAgICdcXG5cXG5UaGUgYWJvdmUgbGlmZWN5Y2xlcyBzaG91bGQgYmUgcmVtb3ZlZC4gTGVhcm4gbW9yZSBhYm91dCB0aGlzIHdhcm5pbmcgaGVyZTpcXG4nICtcbiAgICAgICAgJ2h0dHBzOi8vZmIubWUvcmVhY3QtYXN5bmMtY29tcG9uZW50LWxpZmVjeWNsZS1ob29rcydcbiAgICApO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXTSBhbmQgY1dSUCB0byBpbnZva2UgdGhlIG5ldyBzdGF0aWMgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGVzZSBsaWZlY3ljbGVzIGlmIGdEU0ZQIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGNvbXBvbmVudFdpbGxNb3VudDtcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM7XG4gIH1cblxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXVSB0byBpbnZva2UgdGhlIG5ldyBsaWZlY3ljbGUuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIFJlYWN0IHdpbGwgaWdub3JlIHRoYXQgbGlmZWN5Y2xlIGlmIGdTQlUgZXhpc3RzLlxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ2Fubm90IHBvbHlmaWxsIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKCkgZm9yIGNvbXBvbmVudHMgdGhhdCBkbyBub3QgZGVmaW5lIGNvbXBvbmVudERpZFVwZGF0ZSgpIG9uIHRoZSBwcm90b3R5cGUnXG4gICAgICApO1xuICAgIH1cblxuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID0gY29tcG9uZW50V2lsbFVwZGF0ZTtcblxuICAgIHZhciBjb21wb25lbnREaWRVcGRhdGUgPSBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlO1xuXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZVBvbHlmaWxsKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlLFxuICAgICAgbWF5YmVTbmFwc2hvdFxuICAgICkge1xuICAgICAgLy8gMTYuMysgd2lsbCBub3QgZXhlY3V0ZSBvdXIgd2lsbC11cGRhdGUgbWV0aG9kO1xuICAgICAgLy8gSXQgd2lsbCBwYXNzIGEgc25hcHNob3QgdmFsdWUgdG8gZGlkLXVwZGF0ZSB0aG91Z2guXG4gICAgICAvLyBPbGRlciB2ZXJzaW9ucyB3aWxsIHJlcXVpcmUgb3VyIHBvbHlmaWxsZWQgd2lsbC11cGRhdGUgdmFsdWUuXG4gICAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBib3RoIGNhc2VzLCBidXQgY2FuJ3QganVzdCBjaGVjayBmb3IgdGhlIHByZXNlbmNlIG9mIFwibWF5YmVTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBmb3IgPD0gMTUueCB2ZXJzaW9ucyB0aGlzIG1pZ2h0IGJlIGEgXCJwcmV2Q29udGV4dFwiIG9iamVjdC5cbiAgICAgIC8vIFdlIGFsc28gY2FuJ3QganVzdCBjaGVjayBcIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XCIsXG4gICAgICAvLyBCZWNhdXNlIGdldC1zbmFwc2hvdCBtaWdodCByZXR1cm4gYSBmYWxzeSB2YWx1ZS5cbiAgICAgIC8vIFNvIGNoZWNrIGZvciB0aGUgZXhwbGljaXQgX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnIGZsYWcgdG8gZGV0ZXJtaW5lIGJlaGF2aW9yLlxuICAgICAgdmFyIHNuYXBzaG90ID0gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWdcbiAgICAgICAgPyB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XG4gICAgICAgIDogbWF5YmVTbmFwc2hvdDtcblxuICAgICAgY29tcG9uZW50RGlkVXBkYXRlLmNhbGwodGhpcywgcHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcbn1cblxuZXhwb3J0IHsgcG9seWZpbGwgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9lcy9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9yc3VpdGUtc2NoZW1hL2xpYi9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCLCBjb21wYXJlLCBjb21wYXJlQ29udGV4dCkge1xuXG4gICAgdmFyIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIG9iakEsIG9iakIpIDogdm9pZCAwO1xuXG4gICAgaWYocmV0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuICEhcmV0O1xuICAgIH1cblxuICAgIGlmKG9iakEgPT09IG9iakIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYodHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8ICFvYmpBIHx8XG4gICAgICAgdHlwZW9mIG9iakIgIT09ICdvYmplY3QnIHx8ICFvYmpCKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICAgIGlmKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgYkhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5iaW5kKG9iakIpO1xuXG4gICAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgICBmb3IodmFyIGlkeCA9IDA7IGlkeCA8IGtleXNBLmxlbmd0aDsgaWR4KyspIHtcblxuICAgICAgICB2YXIga2V5ID0ga2V5c0FbaWR4XTtcblxuICAgICAgICBpZighYkhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB2YWx1ZUEgPSBvYmpBW2tleV07XG4gICAgICAgIHZhciB2YWx1ZUIgPSBvYmpCW2tleV07XG5cbiAgICAgICAgcmV0ID0gY29tcGFyZSA/IGNvbXBhcmUuY2FsbChjb21wYXJlQ29udGV4dCwgdmFsdWVBLCB2YWx1ZUIsIGtleSkgOiB2b2lkIDA7XG5cbiAgICAgICAgaWYocmV0ID09PSBmYWxzZSB8fFxuICAgICAgICAgICByZXQgPT09IHZvaWQgMCAmJiB2YWx1ZUEgIT09IHZhbHVlQikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcblxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpO1xyXG59O1xyXG4iLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXHJcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZSwgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBDb250YWluZXIgPSAocm91dGUpID0+ICg8Um91dGUgcGF0aD17cm91dGUucGF0aH0gcmVuZGVyPXtwcm9wcyA9PiAoPHJvdXRlLmNvbXBvbmVudCBPcmRlck1lc3M9e3JvdXRlLk9yZGVyTWVzc30gey4uLnByb3BzfS8+KX0vPik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9SZWR1Y2VyJ1xuXG5pbXBvcnQge0Zvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbH0gZnJvbSAnZm9ybS1saWInO1xuaW1wb3J0IHtTY2hlbWFNb2RlbCwgU3RyaW5nVHlwZX0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbmNvbnN0IG1vZGVsID0gU2NoZW1hTW9kZWwoe05hbWU6IFN0cmluZ1R5cGUoKS5pc1JlcXVpcmVkKCfop5LoibLlkI3kuI3og73kuLrnqbonKX0pO1xuXG4vKipcbiAqIOiNr+WTgeWfuuehgOaVsOaNrue8lui+kee7hOS7tlxuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmNsYXNzIEdvb2RFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWVzOiB7fSxcbiAgICAgICAgICAgIGVycm9yczoge30sXG4gICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3VibWl0R29vZCA9IHRoaXMuX3N1Ym1pdEdvb2QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jYW5jZWwgPSB0aGlzLl9jYW5jZWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfY2FuY2VsKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNhbmNlbGVkKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2FuY2VsZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zdWJtaXRHb29kKCkge1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICBmZXRjaCgnL2FwaS9nb29kL3NhdmUnLCB7XG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBpZiAoanNvbi5jb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uR29vZFNhdmVDb21wbGV0ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vVE9ET1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge2dvb2R9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoZ29vZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVzOiBnb29kfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBsZXQge2dvb2QsIGFjdGlvbn0gPSBuZXh0UHJvcHM7XG4gICAgICAgIGxldCB7Z29vZDogb2xkR29vZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHthY3Rpb24sIGdvb2R9KTtcblxuICAgICAgICBpZiAoZ29vZCAmJiBvbGRHb29kKSB7XG4gICAgICAgICAgICBpZiAoZ29vZC5JRCAhPSBvbGRHb29kLklEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVzOiBnb29kfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZ29vZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVzOiBnb29kfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiYWRkXCIpIHtcbiAgICAgICAgICAgIC8v5re75Yqg5Lya5ZGYXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgTmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgT2ZmaWNhbE5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFVuaXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIERpbWVuc2lvbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgRGVmYXVsdENvc3RQcmljZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgRGVmYXVsdFByaWNlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBMaW1pdFByaWNlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBVc2VXYXk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIE1hbnVmYWN0dXJlcjogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHtcbiAgICAgICAgLy8gdGhpcy51blN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt2YWx1ZXMsIGVycm9yc30gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIkdvb2RFZGl0b3JcIj5cbiAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gdmFsdWVzPXt2YWx1ZXN9IGlkPVwiZm9ybVwiIG1vZGVsPXttb2RlbH0gb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVzfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7lkI3np7BcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJoaWRkZW5cIiBjbGFzc05hbWU9XCJcIiBuYW1lPVwiSURcIj48L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuTmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPio8L3NwYW4+5ou86Z+zXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVBpbllpblwiIGlkPVwiTmFtZVBpbllpblwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5OYW1lUGluWWlufTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7pgJrnlKjlkI1cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJPZmZpY2FsTmFtZVwiIGlkPVwiT2ZmaWNhbE5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuT2ZmaWNhbE5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPuinhOagvFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkRpbWVuc2lvblwiIGlkPVwiRGltZW5zaW9uXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkRpbWVuc2lvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPio8L3NwYW4+5YmC5Z6LXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiRm9ybU9mRHJ1Z1wiIGlkPVwiRm9ybU9mRHJ1Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5Gb3JtT2ZEcnVnfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7ljZXkvY1cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJVbml0XCIgaWQ9XCJVbml0XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLlVuaXR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPueUqOazleeUqOmHj1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiVXNlV2F5XCIgaWQ9XCJVc2VXYXlcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5Vc2VXYXl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDkuK3moIfku7c6XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiQmlkUHJpY2VcIiBpZD1cIkJpZFByaWNlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkJpZFByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAg56ue5LqJ5oOF5Ya1OlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkNvbXBldGlvblwiIGlkPVwiQ29tcGV0aW9uXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkNvbXBldGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOWMu+S/neaDheWGtTpcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJNZWRpY2FyZVwiIGlkPVwiTWVkaWNhcmVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuTWVkaWNhcmV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDnlpfnqIs6XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiUGVyaW9kVHJlYXRtZW50XCIgaWQ9XCJQZXJpb2RUcmVhdG1lbnRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuUGVyaW9kVHJlYXRtZW50fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAg6YCC5bqU55eHOlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIlRyYW5zbGF0aW9uXCIgaWQ9XCJUcmFuc2xhdGlvblwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5UcmFuc2xhdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOaYr+WQpui/m+WPozpcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8taW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJJc0ZvcmVpZ25cIiBpZD1cIklzRm9yZWlnblwiIHZhbHVlPVwiMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDpnZ7ov5vlj6NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIklzRm9yZWlnblwiIGlkPVwiSXNGb3JlaWduXCIgdmFsdWU9XCIxXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi/m+WPo1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOaJueWHhuaWh+WPtzpcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJBcHByb3ZhbE51bWJlclwiIGlkPVwiQXBwcm92YWxOdW1iZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuQXBwcm92YWxOdW1iZXJ9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDpu5jorqTmiJDmnKxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJEZWZhdWx0Q29zdFByaWNlXCIgaWQ9XCJEZWZhdWx0Q29zdFByaWNlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkRlZmF1bHRDb3N0UHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDpu5jorqTku7fmoLxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJEZWZhdWx0UHJpY2VcIiBpZD1cIkRlZmF1bHRQcmljZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5EZWZhdWx0UHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDmnYPpmZDku7fmoLxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJMaW1pdFByaWNlXCIgaWQ9XCJMaW1pdFByaWNlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkxpbWl0UHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDnlJ/kuqfljoLllYZcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJNYW51ZmFjdHVyZXJcIiBpZD1cIk1hbnVmYWN0dXJlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5NYW51ZmFjdHVyZXJ9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+PC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOS/neWtmFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17dGhpcy5jYW5jZWx9PuWPlua2iDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdvb2RFZGl0b3I7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuaW1wb3J0IEdvb2RFZGl0b3IgZnJvbSAnLi9Hb29kRWRpdG9yJztcblxuLyoqXG4gKiDoja/lk4HliJfooajnrqHnkIZcbiAqIEBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxuICovXG5jbGFzcyBHb29kTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUgPSBTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIHRoaXMubG9hZEdvb2RMaXN0RnJvbURCID0gdGhpcy5fbG9hZEdvb2RMaXN0RnJvbURCLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DYW5jZWwgPSB0aGlzLl9vbkNhbmNlbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU2F2ZUNvbXBsZXRlZCA9IHRoaXMuX29uU2F2ZUNvbXBsZXRlZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9vbkNhbmNlbCgpIHtcbiAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiR09PRF9FRElUT1JfQ0FOQ0VMXCJ9KTtcbiAgICB9XG5cbiAgICBfb25TYXZlQ29tcGxldGVkKCkge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJHT09EX0VESVRPUl9ET05FXCJ9KTtcbiAgICB9XG5cbiAgICBfbG9hZEdvb2RMaXN0RnJvbURCKCkge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9HT09EU1wifSk7XG5cbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiS2V5V29yZFwiLCBcIlwiKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiUGFnZVwiLCAwKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiTGltaXRcIiwgMTApO1xuXG4gICAgICAgIGZldGNoKCcvYXBpL2dvb2Qvc2VhcmNoJywge1xuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgICAgICBpZiAoanNvbi5jb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9HT09EU19ET05FXCIsIHBheWxvYWQ6IGpzb24uZGF0YX0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMubG9hZEdvb2RMaXN0RnJvbURCKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGdvb2RMaXN0OiB7XG4gICAgICAgICAgICAgICAgZ29vZHMsXG4gICAgICAgICAgICAgICAgZ29vZCxcbiAgICAgICAgICAgICAgICBhY3Rpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGVkaXRvckpzeCA9IChcIlwiKTtcbiAgICAgICAgaWYgKGdvb2QgJiYgYWN0aW9uID09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgIGVkaXRvckpzeCA9ICg8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XG4gICAgICAgICAgICAgICAgPEdvb2RFZGl0b3IgYWN0aW9uPXthY3Rpb259IGdvb2Q9e2dvb2R9IG9uQ2FuY2VsZWQ9e3RoaXMub25DYW5jZWx9IG9uR29vZFNhdmVDb21wbGV0ZWQ9e3RoaXMub25Hb29kU2F2ZUNvbXBsZXRlZH0vPlxuICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCJhZGRcIikge1xuICAgICAgICAgICAgZWRpdG9ySnN4ID0gKDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgICA8R29vZEVkaXRvciBhY3Rpb249e2FjdGlvbn0gZ29vZD17bnVsbH0gb25DYW5jZWxlZD17dGhpcy5vbkNhbmNlbH0gb25Hb29kU2F2ZUNvbXBsZXRlZD17dGhpcy5vbkdvb2RTYXZlQ29tcGxldGVkfS8+XG4gICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1MaXN0SnN4ID0gZ29vZHMubWFwKChnLCBpbmRleCkgPT4gKDx0cj5cbiAgICAgICAgICAgIDx0ZD57Zy5OYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2cuT2ZmaWNhbE5hbWV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Zy5EaW1lbnNpb259PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Zy5Vbml0fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2cuRGVmYXVsdENvc3RQcmljZX08L3RkPlxuICAgICAgICAgICAgPHRkPntnLkRlZmF1bHRQcmljZX08L3RkPlxuICAgICAgICAgICAgPHRkPntnLkxpbWl0UHJpY2V9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Zy5NYW51ZmFjdHVyZXJ9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Zy5Vc2VXYXl9PC90ZD5cblxuICAgICAgICAgICAgPHRkIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIiA6IFwiODBweFwiXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJFRElUT1JfR09PRFwiLCBwYXlsb2FkOiBnfSlcbiAgICAgICAgICAgICAgICAgICAgfX0+57yW6L6RPC9idXR0b24+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPikpO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIkdvb2RMaXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMSBjb2wtbWQtb2Zmc2V0LTEgbWFpblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoND7oja/lk4HnrqHnkIY8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bl96b25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gaWQ9XCJmb3JtXCIgb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cm9sZTogdmFsdWVzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmn6Xor6JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiU0VUX0FERF9NT0RFXCJ9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pua3u+WKoDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0xIG1haW5cIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuiNr+WTgeWQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPumAmueUqOWQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuinhOagvDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWNleS9jTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPum7mOiupOaIkOacrDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPum7mOiupOWUruS7tzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuadg+mZkOS7tzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPueUn+S6p+WVhjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPueUqOazlTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPui/m+WPozwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bUxpc3RKc3h9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7ZWRpdG9ySnN4fVxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHb29kTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9SZWR1Y2VyJ1xuXG5pbXBvcnQgSW50ZW50aW9uTGlzdCBmcm9tICcuL0ludGVudGlvbkxpc3QnO1xuXG5pbXBvcnQge0Zvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbH0gZnJvbSAnZm9ybS1saWInO1xuaW1wb3J0IHtTY2hlbWFNb2RlbCwgU3RyaW5nVHlwZX0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbmNvbnN0IG1vZGVsID0gU2NoZW1hTW9kZWwoe05hbWU6IFN0cmluZ1R5cGUoKS5pc1JlcXVpcmVkKCfop5LoibLlkI3kuI3og73kuLrnqbonKX0pO1xuXG4vKipcbiAqIOS8muWRmOaEj+WQkee8lui+kee7hOS7tlxuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmNsYXNzIEludGVudGlvbkVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2YWx1ZXM6IHt9LFxuICAgICAgICAgICAgZXJyb3JzOiB7fSxcbiAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5sb2FkT2JqZWN0RGV0YWlsID0gdGhpcy5fbG9hZE9iamVjdERldGFpbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN1Ym1pdEludGVudGlvbiA9IHRoaXMuX3N1Ym1pdEludGVudGlvbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9sb2FkT2JqZWN0RGV0YWlsKCkge31cblxuICAgIF9zdWJtaXRJbnRlbnRpb24oKSB7XG5cbiAgICAgICAgbGV0IHttZW1iZXJ9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgbGV0IHt2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBSZW1hcmtzXG4gICAgICAgICAgICB9fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiTWVtYmVySURcIiwgbWVtYmVyLklEKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiR29vZHNcIiwgUmVtYXJrcylcblxuICAgICAgICBmZXRjaCgnL2FwaS9pbnRlbnRpb24vc2F2ZScsIHtcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChqc29uLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge21lbWJlcn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAobWVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZXM6IG1lbWJlcn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHt9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7bWVtYmVyfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7dmFsdWVzLCBlcnJvcnMsIGlzRmV0Y2hpbmd9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKDxkaXYgaWQ9XCJJbnRlbnRpb25FZGl0b3JcIj5cbiAgICAgICAgICAgIDxJbnRlbnRpb25MaXN0IG1lbWJlcj17bWVtYmVyfS8+XG5cbiAgICAgICAgICAgIDxGb3JtIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gdmFsdWVzPXt2YWx1ZXN9IGlkPVwiZm9ybVwiIG1vZGVsPXttb2RlbH0gb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVzfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICDmhI/lkJHoja/lk4FcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJSZW1hcmtcIiBpZD1cIlJlbWFya1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLlJlbWFya308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdEludGVudGlvbn0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDkv53lrZhcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e3RoaXMuY2FuY2VsfT7lj5bmtog8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZW50aW9uRWRpdG9yO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInO1xuXG5jbGFzcyBJbnRlbnRpb25MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUgPSBTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIHRoaXMubG9hZEludGVudGlvbnNGcm9tREIgPSB0aGlzLl9sb2FkSW50ZW50aW9uc0Zyb21EQi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9sb2FkSW50ZW50aW9uc0Zyb21EQihtZW1iZXIpIHtcbiAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiRkVUQ0hfSU5URU5USU9OU1wifSk7XG5cbiAgICAgICAgZmV0Y2goYC9hcGkvbWVtYmVyLyR7bWVtYmVyLklEfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkZFVENIX0lOVEVOVElPTlNfRE9ORVwiLCBwYXlsb2FkOiBqc29uLmludGVudGlvbkRhdGF9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChqc29uLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge21lbWJlcn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zb2xlLmxvZyhtZW1iZXIpO1xuICAgICAgICBpZiAobWVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRJbnRlbnRpb25zRnJvbURCKG1lbWJlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgaW50ZW50aW9uTGlzdDoge1xuICAgICAgICAgICAgICAgIGludGVudGlvbnMsXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZyxcbiAgICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgZXJyb3JzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBsaXN0SnN4ID0gaW50ZW50aW9ucy5tYXAoKGksIGluZGV4KSA9PiAoPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHRkPntpLklEfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2kuR29vZHN9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57aS5PcGVyYXRvcklEfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2kuQ3JlYXRlVGltZX08L3RkPlxuICAgICAgICA8L3RyPikpO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIkludGVudGlvbkxpc3RcIj5cblxuICAgICAgICAgICAgPGg0PuWuouaIt+aEj+WQkeiusOW9lTwvaDQ+XG5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWuouS6uuWnk+WQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5oSP5ZCR5Y2V6K+m5oOFPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ml7bpl7Q8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuiNr+W4iDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pON5L2cPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAge2xpc3RKc3h9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlbnRpb25MaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInXG5cbmltcG9ydCBJbnZpdGVMaXN0IGZyb20gJy4vSW52aXRlTGlzdCc7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuY29uc3QgbW9kZWwgPSBTY2hlbWFNb2RlbCh7TmFtZTogU3RyaW5nVHlwZSgpLmlzUmVxdWlyZWQoJ+inkuiJsuWQjeS4jeiDveS4uuepuicpfSk7XG5cbi8qKlxuICog5a6i5oi35Zue6K6/57yW6L6R57uE5Lu2XG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuY2xhc3MgSW52aXRlRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlczoge30sXG4gICAgICAgICAgICBlcnJvcnM6IHt9LFxuICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN1Ym1pdEludml0ZSA9IHRoaXMuX3N1Ym1pdEludml0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9zdWJtaXRJbnZpdGUoKSB7XG4gICAgICAgIGxldCB7bWVtYmVyfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgIGxldCB7dmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgUmVtYXJrc1xuICAgICAgICAgICAgfX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIk1lbWJlcklEXCIsIG1lbWJlci5JRCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIlJlbWFya3NcIiwgUmVtYXJrcyk7XG5cbiAgICAgICAgZmV0Y2goJy9hcGkvdmlzaXQvc2F2ZScsIHtcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChqc29uLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9UT0RPXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge21lbWJlcn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAobWVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZXM6IG1lbWJlcn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt2YWx1ZXMsIGVycm9ycywgaXNGZXRjaGluZ30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQge21lbWJlcn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zb2xlLmxvZyh7bWVtYmVyfSk7XG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIkludml0ZUVkaXRvclwiPlxuICAgICAgICAgICAgPGg0PuWuouaIt+Wbnuiuv+iusOW9lTwvaDQ+XG4gICAgICAgICAgICA8SW52aXRlTGlzdCBtZW1iZXI9e21lbWJlcn0vPlxuICAgICAgICAgICAgPEZvcm0gcmVmPXtyZWYgPT4gdGhpcy5mb3JtID0gcmVmfSB2YWx1ZXM9e3ZhbHVlc30gaWQ9XCJmb3JtXCIgbW9kZWw9e21vZGVsfSBvbkNoYW5nZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgfX0gb25DaGVjaz17KGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCA+XG4gICAgICAgICAgICAgICAgICAgICAgICDlm57orr9cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJSZW1hcmtzXCIgaWQ9XCJSZW1hcmtzXCIvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuUmVtYXJrc308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXRJbnZpdGV9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5L+d5a2YXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXt0aGlzLmNhbmNlbH0+5Y+W5raIPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnZpdGVFZGl0b3I7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmNsYXNzIEludml0ZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSA9IFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcyA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgdGhpcy5sb2FkVmlzdHNGcm9tREIgPSB0aGlzLl9sb2FkVmlzdHNGcm9tREIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfbG9hZFZpc3RzRnJvbURCKG1lbWJlcikge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9JTlZJVEVcIn0pO1xuICAgICAgICBjb25zb2xlLmxvZyhtZW1iZXIuSUQpO1xuICAgICAgICBmZXRjaChgL2FwaS9tZW1iZXIvJHttZW1iZXIuSUR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtqc29ufSk7XG4gICAgICAgICAgICBpZiAoanNvbi5jb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9JTlZJVEVfRE9ORVwiLCBwYXlsb2FkOiBqc29uLnZpc2l0RGF0YX0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IHttZW1iZXJ9ID0gbmV4dFByb3BzO1xuICAgICAgICBsZXQge21lbWJlcjogb2xkTWVtYmVyfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKG1lbWJlci5JRCAhPSBvbGRNZW1iZXIuSUQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHttZW1iZXJ9KTtcbiAgICAgICAgICAgIGlmIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRWaXN0c0Zyb21EQihtZW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7bWVtYmVyfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnNvbGUubG9nKHttZW1iZXJ9KTtcbiAgICAgICAgaWYgKG1lbWJlcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkVmlzdHNGcm9tREIobWVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGludmlzdExpc3Q6IHtcbiAgICAgICAgICAgICAgICBpbnZpc3RzLFxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGxpc3RKc3ggPSBpbnZpc3RzLm1hcCgoaSwgaW5kZXgpID0+ICg8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8dGQ+e2kuTWVtYmVySUR9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57aS5OYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2kuTmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkPntpLk5hbWV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57aS5OYW1lfTwvdGQ+XG4gICAgICAgIDwvdHI+KSk7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiSW52aXRlTGlzdFwiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5a6i5Lq65aeT5ZCNPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lm57orr/orrDlvZU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaXtumXtDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6I2v5biIPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mk43kvZw8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7bGlzdEpzeH1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnZpdGVMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Um91dGUsIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIE5hdkxpbmssIExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBNYWluTWVudSA9ICgpID0+ICg8dWwgaWQ9XCJiYWNrX21lbnVcIiBjbGFzc05hbWU9XCJuYXYgbmF2LXNpZGViYXJcIj5cbiAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL2JhY2tfaW5kZXhcIj7pu5jorqTpobU8L05hdkxpbms+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL29yZGVyc1wiIGFjdGl2ZUNsYXNzTmFtZT1cImNoZWNrZWRcIj7plIDllK7orqLljZU8L05hdkxpbms+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL3JlY2VpcHRzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiY2hlY2tlZFwiPui/m+i0p+WNlTwvTmF2TGluaz5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvc3RhdHNcIiBhY3RpdmVDbGFzc05hbWU9XCJjaGVja2VkXCI+5pWw5o2uPC9OYXZMaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgICA8TmF2TGluayB0bz1cIi9tZW1iZXJzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiY2hlY2tlZFwiPuS8muWRmDwvTmF2TGluaz5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvZ29vZHNcIiBhY3RpdmVDbGFzc05hbWU9XCJjaGVja2VkXCI+6I2v5ZOBPC9OYXZMaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgICA8TmF2TGluayB0bz1cIi92ZW5kb3JzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiY2hlY2tlZFwiPuS+m+W6lOWVhjwvTmF2TGluaz5cbiAgICA8L2xpPlxuXG48L3VsPik7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5NZW51O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Um91dGUsIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIE5hdkxpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcidcblxuaW1wb3J0IHtcbiAgICBHb29kTGlzdCxcbiAgICBPcmRlckxpc3QsXG4gICAgUmVjZWlwdExpc3QsXG4gICAgU3RhdHNMaXN0LFxuICAgIE1lbWJlckxpc3QsXG4gICAgVmVuZG9yTGlzdCxcbiAgICBTaXRlSW5kZXgsXG4gICAgQ29udGFpbmVyLFxuICAgIE1haW5NZW51XG59IGZyb20gJy4vaW5kZXgnO1xuXG5jb25zdCByb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiBcIi9vcmRlcnMvXCIsXG4gICAgICAgIGV4dHJhOiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IE9yZGVyTGlzdFxuICAgIH0sIHtcbiAgICAgICAgcGF0aDogXCIvcmVjZWlwdHMvXCIsXG4gICAgICAgIGV4dHJhOiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IFJlY2VpcHRMaXN0XG4gICAgfSwge1xuICAgICAgICBwYXRoOiBcIi9zdGF0cy9cIixcbiAgICAgICAgZXh0cmE6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudDogU3RhdHNMaXN0XG4gICAgfSwge1xuICAgICAgICBwYXRoOiBcIi9tZW1iZXJzL1wiLFxuICAgICAgICBleHRyYTogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50OiBNZW1iZXJMaXN0XG4gICAgfSwge1xuICAgICAgICBwYXRoOiBcIi92ZW5kb3JzL1wiLFxuICAgICAgICBleHRyYTogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50OiBWZW5kb3JMaXN0XG4gICAgfSwge1xuICAgICAgICBwYXRoOiBcIi9nb29kcy9cIixcbiAgICAgICAgZXh0cmE6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudDogR29vZExpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL2JhY2tfaW5kZXhcIixcbiAgICAgICAgZXh0cmE6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudDogU2l0ZUluZGV4XG4gICAgfVxuXTtcblxuLyoqXG4gKiDljqjluIjlt6XkvZzlj7BcbiAqIEBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxuICovXG5jbGFzcyBNYW5hZ2VyUm91dGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGVtcGxveWVlOiB7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIGZldGNoKCcvYXBpL2VtcGxveWVlL3Byb2ZpbGUnLCB7XG4gICAgICAgIC8vICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIC8vICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAvLyAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgLy8gfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgLy8gICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqg6L296ZuH5ZGY6K+m57uG5L+h5oGvXCIsIGpzb24pO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VtcGxveWVlOiBqc29uLmRhdGF9KVxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBhbGVydChqc29uLm1lc3NhZ2UpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2VtcGxveWVlfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuICg8Um91dGVyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj7nvo7kv6HlurflubTlpKfoja/miL88L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog5bem5L6n6I+c5Y2VICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMSBzaWRlYmFyXCI+PE1haW5NZW51Lz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDlj7PkvqflhoXlrrkgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVzLm1hcCgocm91dGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPENvbnRhaW5lciBrZXk9e2l9IEVtcGxveWVlPXtlbXBsb3llZX0gey4uLnJvdXRlfS8+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1JvdXRlcj4pO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgTWFuYWdlclJvdXRlcjtcblxuZXhwb3J0IGRlZmF1bHQgaG90KG1vZHVsZSkoTWFuYWdlclJvdXRlcilcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInXG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuY29uc3QgbW9kZWwgPSBTY2hlbWFNb2RlbCh7TmFtZTogU3RyaW5nVHlwZSgpLmlzUmVxdWlyZWQoJ+inkuiJsuWQjeS4jeiDveS4uuepuicpfSk7XG5cbi8qKlxuICog6I2v5ZOB5Z+656GA5pWw5o2u57yW6L6R57uE5Lu2XG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuY2xhc3MgTWVtYmVyRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLy8gdGhpcy51blN1YnNjcmliZSA9IFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICBsZXQgcyA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHMpO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICAvLyB0aGlzLnN0YXRlID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlczoge30sXG4gICAgICAgICAgICBlcnJvcnM6IHt9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5sb2FkT2JqZWN0RGV0YWlsID0gdGhpcy5fbG9hZE9iamVjdERldGFpbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuX3N1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNhbmNlbCA9IHRoaXMuX2NhbmNlbC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9sb2FkT2JqZWN0RGV0YWlsKCkge31cblxuICAgIF9jYW5jZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2FuY2VsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DYW5jZWxlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3N1Ym1pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm0uY2hlY2soKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogXCLmlbDmja7moLzlvI/mnInplJnor69cIn0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKSk7XG4gICAgICAgIGxldCB7YWN0aW9ufSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IHVybCA9IFwiL2FwaS9tZW1iZXIvYWRkXCI7XG4gICAgICAgIGlmIChhY3Rpb24gPT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgdXJsID0gXCIvYXBpL21lbWJlci91cGRhdGVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoKHVybCwge1xuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgaWYgKGpzb24uY29kZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25NZW1iZXJEZXRhaWxTYXZlQ29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25NZW1iZXJEZXRhaWxTYXZlQ29tcGxldGVkKGpzb24uZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChqc29uLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGxldCB7bWVtYmVyLCBhY3Rpb259ID0gbmV4dFByb3BzO1xuICAgICAgICBsZXQge21lbWJlcjogb2xkTWVtYmVyfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc29sZS5sb2coe2FjdGlvbiwgbWVtYmVyfSk7XG5cbiAgICAgICAgaWYgKG1lbWJlciAmJiBvbGRNZW1iZXIpIHtcbiAgICAgICAgICAgIGlmIChtZW1iZXIuSUQgIT0gb2xkTWVtYmVyLklEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVzOiBtZW1iZXJ9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlczogbWVtYmVyfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiYWRkXCIpIHtcbiAgICAgICAgICAgIC8v5re75Yqg5Lya5ZGYXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgTmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgUGluWWluOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBHZW5kZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFRlbGVwaG9uZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDaXR5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQWRkcmVzc1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBEaXNlYXNlczogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgUmVtYXJrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBSZWxhdGlvbldpdGhQYXRpZW50OiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7bWVtYmVyfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChtZW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlczogbWVtYmVyfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3ZhbHVlcywgZXJyb3JzfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCB7YWN0aW9ufSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IGhlYWRlciA9IFwi5re75Yqg5paw5Lya5ZGYXCI7XG4gICAgICAgIGlmIChhY3Rpb24gPT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgaGVhZGVyID0gXCLkv67mlLnkvJrlkZhcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIk1lbWJlckVkaXRvclwiPlxuICAgICAgICAgICAgPGg0PntoZWFkZXJ9PC9oND5cbiAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gdmFsdWVzPXt2YWx1ZXN9IGlkPVwiZm9ybVwiIG1vZGVsPXttb2RlbH0gb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVzfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7lkI3np7BcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiSURcIj48L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuTmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPio8L3NwYW4+5ou86Z+zXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiUGluWWluXCIgaWQ9XCJQaW5ZaW5cIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuUGluWWlufTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7mgKfliKtcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiSXNGb3JlaWduXCIgaWQ9XCJJc0ZvcmVpZ25cIiB2YWx1ZT1cIjFcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg55S355SfXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiSXNGb3JlaWduXCIgaWQ9XCJJc0ZvcmVpZ25cIiB2YWx1ZT1cIjJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5aWz55SfXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkdlbmRlcn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPio8L3NwYW4+55S16K+dXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiVGVsZXBob25lXCIgaWQ9XCJUZWxlcGhvbmVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuVGVsZXBob25lfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7ln47luIJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJDaXR5XCIgaWQ9XCJDaXR5XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkNpdHl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPuWcsOWdgFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkFkZHJlc3NcIiBpZD1cIkFkZHJlc3NcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuQWRkcmVzc308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOW+ruS/oeWPt1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIldlaVhpbkNvZGVcIiBpZD1cIldlaVhpbkNvZGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuV2VpWGluQ29kZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOWlveWPi1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkZyaWVuZE5hbWVcIiBpZD1cIkZyaWVuZE5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuRnJpZW5kTmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOW5tOS7o1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkJpcnRoWWVhclwiIGlkPVwiQmlydGhZZWFyXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkJpcnRoWWVhcn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOeWvueXhVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkRpc2Vhc2VzXCIgaWQ9XCJEaXNlYXNlc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5EaXNlYXNlc308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOaCo+iAheWFs+ezu1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIlJlbGF0aW9uV2l0aFBhdGllbnRcIiBpZD1cIlJlbGF0aW9uV2l0aFBhdGllbnRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuUmVsYXRpb25XaXRoUGF0aWVudH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOWkh+azqFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIlJlbWFya1wiIGlkPVwiUmVtYXJrXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLlJlbWFya308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5L+d5a2YXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXt0aGlzLmNhbmNlbH0+5Y+W5raIPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVwiIGlkPVwiTmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5p+l6K+iXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJFZGl0b3I7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuaW1wb3J0IE1lbWJlckVkaXRvciBmcm9tICcuL01lbWJlckVkaXRvcic7XG5pbXBvcnQgSW52aXRlRWRpdG9yIGZyb20gJy4vSW52aXRlRWRpdG9yJztcbmltcG9ydCBJbnRlbnRpb25FZGl0b3IgZnJvbSAnLi9JbnRlbnRpb25FZGl0b3InO1xuXG5jbGFzcyBNZW1iZXJMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy51blN1YnNjcmliZSA9IFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcyA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgdGhpcy5sb2FkTWVtYmVyTGlzdCA9IHRoaXMuX2xvYWRNZW1iZXJMaXN0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25NZW1iZXJEZXRhaWxTYXZlQ29tcGxldGVkID0gdGhpcy5fb25NZW1iZXJEZXRhaWxTYXZlQ29tcGxldGVkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25NZW1iZXJEZXRhaWxDYW5jZWwgPSB0aGlzLl9vbk1lbWJlckRldGFpbENhbmNlbC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9sb2FkTWVtYmVyTGlzdCgpIHtcbiAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiRkVUQ0hfTUVNQkVSXCJ9KTtcblxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJLZXlXb3JkXCIsIFwi5rWL6K+VXCIpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJNb2JpbFBob25lXCIsIFwiXCIpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJQYWdlXCIsIDApO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJMaW1pdFwiLCAyMCk7XG5cbiAgICAgICAgZmV0Y2goJy9hcGkvbWVtYmVyL3NlYXJjaCcsIHtcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgaWYgKGpzb24uY29kZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgICAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiRkVUQ0hfTUVNQkVSX0RPTkVcIiwgcGF5bG9hZDoganNvbi5kYXRhfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgX29uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZChuZXdNZW1iZXIpIHtcbiAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiTUVNQkVSX0VESVRPUl9ET05FXCJ9KTtcbiAgICB9XG5cbiAgICBfb25NZW1iZXJEZXRhaWxDYW5jZWwoKSB7XG4gICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIk1FTUJFUl9FRElUT1JfQ0FOQ0VMXCJ9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkTWVtYmVyTGlzdCgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIG1lbWJlckxpc3Q6IHtcbiAgICAgICAgICAgICAgICBtZW1iZXJzLFxuICAgICAgICAgICAgICAgIG1lbWJlcixcbiAgICAgICAgICAgICAgICBhY3Rpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGVkaXRvckpzeCA9IChcIlwiKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh7YWN0aW9uLCBtZW1iZXJ9KTtcblxuICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcInVwZGF0ZV9tZW1iZXJcIjpcbiAgICAgICAgICAgICAgICBlZGl0b3JKc3ggPSAoPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8TWVtYmVyRWRpdG9yIGFjdGlvbj17YWN0aW9ufSBtZW1iZXI9e21lbWJlcn0gb25DYW5jZWxlZD17dGhpcy5vbk1lbWJlckRldGFpbENhbmNlbH0gb25TYXZlQ29tcGxldGVkPXt0aGlzLm9uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYWRkX21lbWJlclwiOlxuICAgICAgICAgICAgICAgIGVkaXRvckpzeCA9ICg8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxNZW1iZXJFZGl0b3IgYWN0aW9uPXthY3Rpb259IG1lbWJlcj17bnVsbH0gb25DYW5jZWxlZD17dGhpcy5vbk1lbWJlckRldGFpbENhbmNlbH0gb25TYXZlQ29tcGxldGVkPXt0aGlzLm9uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYWRkX3Zpc2l0XCI6XG4gICAgICAgICAgICAgICAgZWRpdG9ySnN4ID0gKDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEludml0ZUVkaXRvciBhY3Rpb249e2FjdGlvbn0gbWVtYmVyPXttZW1iZXJ9IG9uQ2FuY2VsZWQ9e3RoaXMub25NZW1iZXJEZXRhaWxDYW5jZWx9IG9uU2F2ZUNvbXBsZXRlZD17dGhpcy5vbk1lbWJlckRldGFpbFNhdmVDb21wbGV0ZWR9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFkZF9pbnRlbnRpb25cIjpcbiAgICAgICAgICAgICAgICBlZGl0b3JKc3ggPSAoPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8SW50ZW50aW9uRWRpdG9yIGFjdGlvbj17YWN0aW9ufSBtZW1iZXI9e21lbWJlcn0gb25DYW5jZWxlZD17dGhpcy5vbk1lbWJlckRldGFpbENhbmNlbH0gb25TYXZlQ29tcGxldGVkPXt0aGlzLm9uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbUxpc3RKc3ggPSBtZW1iZXJzLm1hcCgobSwgaW5kZXgpID0+ICg8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8dGQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiIDogXCI2MHB4XCJcbiAgICAgICAgICAgICAgICB9fT57bS5OYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e20uQ2l0eX08L3RkPlxuICAgICAgICAgICAgPHRkPnttLk1vYmlsUGhvbmV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bS5JbnRlbnRpb25Hb29kc308L3RkPlxuICAgICAgICAgICAgPHRkPnttLkludGVudGlvblF1YW50aXR5fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e20uVmlzaXRRdWFudGl0eX08L3RkPlxuICAgICAgICAgICAgPHRkPnttLk9yZGVyUXVhbnRpdHl9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCIgOiBcIjEyMHB4XCJcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkVESVRPUl9NRU1CRVJcIiwgcGF5bG9hZDogbX0pXG4gICAgICAgICAgICAgICAgICAgIH19Pue8lui+kTwvYT4mbmJzcDtcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkVESVRPUl9NRU1CRVJfSU5URU5USU9OU1wiLCBwYXlsb2FkOiBtfSlcbiAgICAgICAgICAgICAgICAgICAgfX0+5oSP5ZCRPC9hPlxuICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiRURJVE9SX01FTUJFUl9WSVNJVFwiLCBwYXlsb2FkOiBtfSlcbiAgICAgICAgICAgICAgICAgICAgfX0+5Zue6K6/PC9hPlxuXG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPikpO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIk1lbWJlckxpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0xIG1haW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGFnZV90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+5Lya5ZGY566h55CGPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5fem9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiByZWY9e3JlZiA9PiB0aGlzLmZvcm0gPSByZWZ9IGlkPVwiZm9ybVwiIG9uQ2hhbmdlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JvbGU6IHZhbHVlc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBvbkNoZWNrPXsoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVwiIGlkPVwiTmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5p+l6K+iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJTRVRfQUREX01PREVcIn0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pua3u+WKoOaWsOS8muWRmDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5a6i5Lq65aeT5ZCNPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5Z+O5biCPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+55S16K+dPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5oSP5ZCR5qCH562+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5oSP5ZCR5ZWG5ZOBPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5Zue6K6/PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5oiQ5Y2VPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pON5L2cPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge21MaXN0SnN4fVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtlZGl0b3JKc3h9XG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbWJlckxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmltcG9ydCB7IEZvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbCB9IGZyb20gJ2Zvcm0tbGliJztcbmltcG9ydCB7IFNjaGVtYU1vZGVsLCBTdHJpbmdUeXBlIH0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbi8qKlxuICog6ZSA5ZSu6K6i5Y2V6aG16Z2iXG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuY2xhc3MgT3JkZXJMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUgPSBTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy5sb2FkT3JkZXJMaXN0RnJvbURCID0gdGhpcy5fbG9hZE9yZGVyTGlzdEZyb21EQi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uR29PcmRlckVkaXRvciA9IHRoaXMuX29uR29PcmRlckVkaXRvci5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgX29uR29PcmRlckVkaXRvcihvcmRlcikge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9vcmRlci9lZGl0b3JcIik7XG4gICAgfVxuXG4gICAgX2xvYWRPcmRlckxpc3RGcm9tREIoKSB7XG4gICAgICAgIFN0b3JlLmRpc3BhdGNoKHsgdHlwZTogXCJGRVRDSF9PUkRFUlNcIiB9KTtcblxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJrZXl3b3JkXCIsIFwiXCIpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJzdGFydFwiLCAwKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwibGVuZ3RoXCIsIDEwKTtcblxuICAgICAgICBmZXRjaCgnL2FwaS9vcmRlci9zZWFyY2gnLCB7XG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHsgdHlwZTogXCJGRVRDSF9PUkRFUlNfRE9ORVwiLCBwYXlsb2FkOiBqc29uLmRhdGEgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkT3JkZXJMaXN0RnJvbURCKCk7XG4gICAgfVxuXG4gICAgX2xvYWRPcmRlcnNGcm9tREIoKSB7XG4gICAgICAgIFN0b3JlLmRpc3BhdGNoKHsgdHlwZTogXCJGRVRDSF9PUkRFUlNcIiB9KTtcblxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwia2V5d29yZFwiLCBcIlwiKTtcblxuICAgICAgICBmZXRjaCgnL2FwaS9vcmRlci9zZWFyY2gnLCB7XG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHsgdHlwZTogXCJGRVRDSF9PUkRFUlNfRE9ORVwiLCBwYXlsb2FkOiBqc29uLmRhdGEgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgICAgICB0aGlzLmxvYWRPcmRlcnNGcm9tREIoKTtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFVuTW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBvcmRlckxpc3Q6IHtcbiAgICAgICAgICAgICAgICBvcmRlcnMsXG4gICAgICAgICAgICAgICAgb3JkZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IG1MaXN0SnN4ID0gb3JkZXJzLm1hcCgobywgaW5kZXgpID0+ICg8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8dGQ+e28uTmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICA8dGQ+e28uUmVjZWlwdEFtb3VudH08L3RkPlxuICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICA8dGQ+e28uRGVsaXZlcnlDb21wYW55fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e28uRGVsaXZlcnlGZWV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57by5EZWxpdmVyQ29kZX08L3RkPlxuICAgICAgICAgICAgPHRkPntvLkRlbGl2ZXJSZWNlaXB0RmVlfTwvdGQ+XG5cbiAgICAgICAgICAgIDx0ZCBzdHlsZT17e1xuICAgICAgICAgICAgICAgIFwid2lkdGhcIjogXCI4MHB4XCJcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFwiRURJVE9SX01FTUJFUlwiLCBwYXlsb2FkOiBtIH0pXG4gICAgICAgICAgICAgICAgfX0+57yW6L6RPC9idXR0b24+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPikpO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIk9yZGVyTGlzdFwiIGNsYXNzTmFtZT1cImNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTEgbWFpblwiPlxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwicGFnZV90aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoND7plIDllK7orqLljZXnrqHnkIY8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuX3pvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiByZWY9e3JlZiA9PiB0aGlzLmZvcm0gPSByZWZ9IGlkPVwiZm9ybVwiIG9uQ2hhbmdlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm9sZTogdmFsdWVzIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgfSlcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmn6Xor6JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5a6i5Lq65aeT5ZCNPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7oja/lk4E8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPumHkeminTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5LuY5qy+5pa55byPPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lv6vpgJLlhazlj7g8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuW/q+mAkui0uTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5b+r6YCS5Y2VPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ku6PmlLY8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPumUgOWUruWRmDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pON5L2cPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAge21MaXN0SnN4fVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyTGlzdDtcblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuY2xhc3MgUmVjZWlwdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlID0gU3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBzID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUocyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge31cblxuICAgIGNvbXBvbmVudFVuTW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIlJlY2VpcHRMaXN0XCIgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMSBtYWluXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicGFnZV90aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoND7ov5votKfljZXnrqHnkIY8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuX3pvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiByZWY9e3JlZiA9PiB0aGlzLmZvcm0gPSByZWZ9IGlkPVwiZm9ybVwiIG9uQ2hhbmdlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cm9sZTogdmFsdWVzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBvbkNoZWNrPXsoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmn6Xor6JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuS+m+W6lOWVhjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+55S16K+dPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ogZTns7vkuro8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaXpeacnzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6YeR6aKdPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7oja/luIg8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaTjeS9nDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNlaXB0TGlzdDtcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgICBnb29kTGlzdDoge1xuICAgICAgICBnb29kczogW10sXG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBnb29kOiBudWxsLFxuICAgICAgICBhY3Rpb246IFwiaGlkZGVuXCJcbiAgICB9LFxuICAgIGdvb2RFZGl0OiB7XG4gICAgICAgIGdvb2Q6IG51bGwsXG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlXG4gICAgfSxcbiAgICBvcmRlckxpc3Q6IHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIG9yZGVyczogW10sXG4gICAgICAgIG9yZGVyOiBudWxsXG4gICAgfSxcbiAgICBtZW1iZXJMaXN0OiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBtZW1iZXJzOiBbXSxcbiAgICAgICAgbWVtYmVyOiBudWxsLFxuICAgICAgICBhY3Rpb246IFwiaGlkZGVuXCJcbiAgICB9LFxuICAgIG1lbWJlckVkaXRvcjoge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgdmFsdWVzOiBbXSxcbiAgICAgICAgZXJyb3JzOiB7fVxuICAgIH0sXG5cbiAgICBpbnRlbnRpb25MaXN0OiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpbnRlbnRpb25zOiBbXSxcbiAgICAgICAgdmFsdWVzOiB7fSxcbiAgICAgICAgZXJyb3JzOiB7fVxuICAgIH0sXG5cbiAgICBpbnZpc3RMaXN0OiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpbnZpc3RzOiBbXSxcbiAgICAgICAgdmFsdWVzOiB7fSxcbiAgICAgICAgZXJyb3JzOiB7fVxuICAgIH0sXG4gICAgbWVtYmVyTGlzdDoge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgbWVtYmVyczogW10sXG4gICAgICAgIG1lbWJlcjoge31cbiAgICB9LFxuICAgIHh4eHg6IHt9XG59O1xuXG5mdW5jdGlvbiBYWFhYUmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS54eHh4LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gSW52aXN0TGlzdFJlZHVjZXIoc3RhdGUgPSBkZWZhdWx0U3RhdGUuaW52aXN0TGlzdCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiRkVUQ0hfSU5WSVRFXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgaXNGZXRjaGluZzogdHJ1ZSB9KTtcbiAgICAgICAgY2FzZSBcIkZFVENIX0lOVklURV9ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbnZpc3RzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIEludGVudGlvbnNMaXN0UmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS5pbnRlbnRpb25MaXN0LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9JTlRFTlRJT05TXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgaXNGZXRjaGluZzogdHJ1ZSB9KTtcbiAgICAgICAgY2FzZSBcIkZFVENIX0lOVEVOVElPTlNfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW50ZW50aW9uczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBNZW1iZXJFZGl0b3JSZWR1Y2VyKHN0YXRlID0gZGVmYXVsdFN0YXRlLm1lbWJlckVkaXRvciwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiRkVUQ0hfTUVNQkVSXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgaXNGZXRjaGluZzogdHJ1ZSB9KTtcbiAgICAgICAgY2FzZSBcIkZFVENIX01FTUJFUl9ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZW1iZXJzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIE1lbWJlckxpc3RSZWR1Y2VyKHN0YXRlID0gZGVmYXVsdFN0YXRlLm1lbWJlckxpc3QsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkZFVENIX01FTUJFUlwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGlzRmV0Y2hpbmc6IHRydWUgfSk7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9NRU1CRVJfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVtYmVyczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiRURJVE9SX01FTUJFUlwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgbWVtYmVyOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwidXBkYXRlX21lbWJlclwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIk1FTUJFUl9FRElUT1JfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgbWVtYmVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJoaWRkZW5cIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgXCJTRVRfQUREX01PREVcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBhY3Rpb246IFwiYWRkX21lbWJlclwiIH0pO1xuICAgICAgICBjYXNlIFwiTUVNQkVSX0VESVRPUl9DQU5DRUxcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICBtZW1iZXI6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiRURJVE9SX01FTUJFUl9JTlRFTlRJT05TXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwiYWRkX2ludGVudGlvblwiLFxuICAgICAgICAgICAgICAgIG1lbWJlcjogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiRURJVE9SX01FTUJFUl9WSVNJVFwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcImFkZF92aXNpdFwiLFxuICAgICAgICAgICAgICAgIG1lbWJlcjogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gT3JkZXJMaXN0UmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS5vcmRlckxpc3QsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkZFVENIX09SREVSU1wiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGlzRmV0Y2hpbmc6IHRydWUgfSk7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9PUkRFUlNfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgb3JkZXJzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIEdvb2RMaXN0UmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS5nb29kTGlzdCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiRkVUQ0hfR09PRFNcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBpc0ZldGNoaW5nOiB0cnVlIH0pO1xuICAgICAgICBjYXNlIFwiRkVUQ0hfR09PRFNfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZ29vZHM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIkVESVRPUl9HT09EXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBnb29kOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwidXBkYXRlXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiU0VUX0FERF9NT0RFXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBnb29kOiBudWxsLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJhZGRcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgXCJHT09EX0VESVRPUl9DQU5DRUxcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICBnb29kOiBudWxsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gR29vZEVkaXRvclJlZHVjZXIoc3RhdGUgPSBkZWZhdWx0U3RhdGUuZ29vZEVkaXQsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkNMRUFSX0dPT0RfREVUQUlMXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIkxPQURfR09PRERfRVRBSUxcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBpc0ZldGNoaW5nOiB0cnVlIH0pOztcbiAgICAgICAgY2FzZSBcIkxPQURfR09PRERfRVRBSUxfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pOztcbiAgICAgICAgY2FzZSBcIkFQUEVORF9HT09EXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgaXNGZXRjaGluZzogdHJ1ZSB9KTtcbiAgICAgICAgY2FzZSBcIkFQUEVORF9HT09EX0RPTkVcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBpc0ZldGNoaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGdvb2RMaXN0OiBHb29kTGlzdFJlZHVjZXIsXG4gICAgZ29vZEVkaXQ6IEdvb2RFZGl0b3JSZWR1Y2VyLFxuICAgIG1lbWJlckxpc3Q6IE1lbWJlckxpc3RSZWR1Y2VyLFxuICAgIG9yZGVyTGlzdDogT3JkZXJMaXN0UmVkdWNlcixcbiAgICBpbnZpc3RMaXN0OiBJbnZpc3RMaXN0UmVkdWNlcixcbiAgICBpbnRlbnRpb25MaXN0OiBJbnRlbnRpb25zTGlzdFJlZHVjZXJcbn0pO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cblxuY2xhc3MgU2l0ZUluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICDpu5jorqTpobXpnaJcbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2l0ZUluZGV4O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgU3RhdHNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDxkaXYgaWQ9XCJTdGF0c0xpc3RcIj5cbiAgICAgICAgICAgIOaVsOaNrue7n+iuoVxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0c0xpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge0Zvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbH0gZnJvbSAnZm9ybS1saWInO1xuaW1wb3J0IHtTY2hlbWFNb2RlbCwgU3RyaW5nVHlwZX0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbmNsYXNzIFZlbmRvckxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIlZlbmRvckxpc3RcIiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xIG1haW5cIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGg0PuS+m+W6lOWVhueuoeeQhjwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5fem9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gaWQ9XCJmb3JtXCIgb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyb2xlOiB2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj7mt7vliqDkvpvlupTllYY8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5L6b5bqU5ZWG5ZCNPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7nlLXor508L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWcsOWdgDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6IGU57O75Lq6PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lpIfms6g8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWIm+W7uuaXtumXtDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pON5L2cPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlbmRvckxpc3Q7XG4iLCJleHBvcnQge1xuICAgIGRlZmF1bHQgYXMgR29vZExpc3Rcbn1cbmZyb20gJy4vR29vZExpc3QnO1xuXG5leHBvcnQge1xuICAgIGRlZmF1bHQgYXMgT3JkZXJMaXN0XG59XG5mcm9tICcuL09yZGVyTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBTdGF0c0xpc3Rcbn1cbmZyb20gJy4vU3RhdHNMaXN0JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIFJlY2VpcHRMaXN0XG59XG5mcm9tICcuL1JlY2VpcHRMaXN0JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIE1lbWJlckxpc3Rcbn1cbmZyb20gJy4vTWVtYmVyTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBWZW5kb3JMaXN0XG59XG5mcm9tICcuL1ZlbmRvckxpc3QnO1xuXG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBTaXRlSW5kZXhcbn1cbmZyb20gJy4vU2l0ZUluZGV4JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIE1haW5NZW51XG59XG5mcm9tICcuL01haW5NZW51JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIENvbnRhaW5lclxufVxuZnJvbSAnLi9Db250YWluZXInO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcFJvdXRlciBmcm9tICcuLi9jb21wb25lbnRzL01hbmFnZXJSb3V0ZXInO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIFJlYWN0RE9NLnJlbmRlcig8QXBwUm91dGVyIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQXBwJykpO1xufTtcblxuXG4vLyBpZihtb2R1bGUuaG90KXtcbi8vICAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vY29tcG9uZW50cy9NYW5hZ2VyUm91dGVyJyxmdW5jdGlvbigpe1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnQWNjZXB0aW5nIHRoZSB1cGRhdGVkIE1hbmFnZXJSb3V0ZXIgbW9kdWxlIScpO1xuLy8gICAgIH0pXG4vLyB9IiwibW9kdWxlLmV4cG9ydHMgPSBsaWI7Il0sInNvdXJjZVJvb3QiOiIifQ==
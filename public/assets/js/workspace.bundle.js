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
/******/ 	var hotCurrentHash = "2cf7e85d72c4adb1bdee"; // eslint-disable-line no-unused-vars
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

/***/ "./node_modules/form-lib/lib/index.js":
/*!*****************************************************************************!*\
  !*** delegated ./node_modules/form-lib/lib/index.js from dll-reference lib ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/form-lib/lib/index.js");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!**************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference lib ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/react-dom/index.js");

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
        return _this;
    }

    _createClass(GoodList, [{
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
                { className: 'col-md-10 col-md-offset-1 main' },
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
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
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

    return GoodList;
}(_react2.default.Component);

exports.default = GoodList;

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
                '\u4F1A\u5458\u7BA1\u7406'
            )
        ),
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/goods', activeClassName: 'checked' },
                '\u836F\u54C1\u7BA1\u7406'
            )
        ),
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/vendors', activeClassName: 'checked' },
                '\u4F9B\u5E94\u5546\u7BA1\u7406'
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


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

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
            var _this2 = this;

            fetch('/api/employee/profile', {
                method: "GET",
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                if (json.code == 0) {
                    console.log("加载雇员详细信息", json);
                    _this2.setState({ employee: json.data });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                return console.log(err);
            });
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
                    _react2.default.createElement('div', { className: 'navbar navbar-inverse navbar-fixed-top' }),
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

exports.default = ManagerRouter;

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

/**
 * 药品基础数据编辑组件
 * @extends React.Component
 */
var MemberEditor = function (_React$Component) {
    _inherits(MemberEditor, _React$Component);

    function MemberEditor(props) {
        _classCallCheck(this, MemberEditor);

        var _this = _possibleConstructorReturn(this, (MemberEditor.__proto__ || Object.getPrototypeOf(MemberEditor)).call(this, props));

        _this.unSubscribe = _Reducer2.default.subscribe(function () {
            var s = _Reducer2.default.getState();
            _this.setState(s);
        });

        _this.state = _Reducer2.default.getState();
        _this.loadObjectDetail = _this._loadObjectDetail.bind(_this);
        _this.submit = _this._submit.bind(_this);
        return _this;
    }

    _createClass(MemberEditor, [{
        key: '_loadObjectDetail',
        value: function _loadObjectDetail() {}
    }, {
        key: '_submit',
        value: function _submit() {
            if (!this.form.check()) {
                this.setState({ message: "数据格式有错误" });
                return;
            }

            var formData = new FormData(document.getElementById('form'));

            fetch('/api/member/add', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                //TODO
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var location = this.props.location;
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

            var member = this.props.member;


            return _react2.default.createElement(
                'div',
                { id: 'MemberEditor' },
                _react2.default.createElement(
                    _formLib.Form,
                    { className: 'form', ref: function ref(_ref) {
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
                        _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' })
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
                ),
                '\u4F1A\u5458\u7F16\u8F91\u9875\u9762: ',
                member.Name,
                member.Gender,
                member.City,
                member.Telephone
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
        return _this;
    }

    _createClass(MemberList, [{
        key: '_loadMemberList',
        value: function _loadMemberList() {
            _Reducer2.default.dispatch({ type: "FETCH_MEMBER" });

            var formData = new FormData();
            formData.append("keyword", "测试会员");

            fetch('/api/member/search', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                console.log(json);
                if (json.code == 0) {
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
                member = _state$memberList.member;


            var editorJsx = "";
            if (member) {
                editorJsx = _react2.default.createElement(
                    'div',
                    { className: 'col-md-2 col-md-offset-1' },
                    _react2.default.createElement(_MemberEditor2.default, { member: member })
                );
            }

            var mListJsx = members.map(function (m, index) {
                return _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'td',
                        null,
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
                        m.Gender
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.MobilPhone
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.WeiXinCode
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.FriendName
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.Diseases
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.BirthYear
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.IntentionCount
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
                        null,
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
                { id: 'MemberList' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-8 col-md-offset-1 main' },
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
                                    '\u57CE\u5E02'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u6027\u522B'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u7535\u8BDD'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u5FAE\u4FE1\u53F7'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u548C\u8C01\u597D\u53CB'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u75BE\u75C5'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u5E74\u4EE3'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u610F\u5411\u5355'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u56DE\u8BBF\u6B21'
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
        return _this;
    }

    _createClass(OrderList, [{
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

            var orders = this.state.orders;

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
                                '\u5BA2\u4EBA\u59D3s\u8981'
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
                                '\u4EE3\u6536'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5FEB\u9012\u8D39'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5FEB\u9012\u516C\u53F8'
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
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null)
                        )
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

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = {
    goodList: {
        goods: [],
        isFetching: false,
        checkedGood: null
    },
    goodEdit: {},
    orderList: {},
    memberList: {
        isFetching: false,
        members: [],
        member: {}
    },
    xxxx: {}
};

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
        case "":
            break;
        default:
            return state;
    }
}

function GoodListReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.goodList;
    var action = arguments[1];

    switch (action.type) {
        case "LOAD_GOODS":
            return Object.assign({}, state, { isFetching: true });
        case "LOAD_GOODS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                items: action.payload
            });
        case "LOAD_GOOD":
            return Object.assign({}, state, { isFetching: true });
        case "LOAD_GOOD_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                item: action.payload
            });
        case "LOAD_GOOD_CHECKED":
            return Object.assign({}, state, { checkedGood: action.payload });

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

var reducer = (0, _redux.combineReducers)({ goodList: GoodListReducer, goodEdit: GoodEditorReducer, memberList: MemberListReducer });
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
// 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9mb3JtLWxpYi9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9lcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JzdWl0ZS1zY2hlbWEvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBsaWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dvb2RMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hbmFnZXJSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVtYmVyRWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbWJlckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3JkZXJMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlY2VpcHRMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2l0ZUluZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N0YXRzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WZW5kb3JMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy93ZWIvYmFjay5jbGllbnQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibGliXCIiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwicm91dGUiLCJwYXRoIiwiT3JkZXJNZXNzIiwicHJvcHMiLCJHb29kTGlzdCIsInVuU3Vic2NyaWJlIiwiU3RvcmUiLCJzdWJzY3JpYmUiLCJzIiwiZ2V0U3RhdGUiLCJzZXRTdGF0ZSIsInN0YXRlIiwiZm9ybSIsInJlZiIsInZhbHVlcyIsInJvbGUiLCJjbGVhbkVycm9ycyIsImVycm9ycyIsInN1Ym1pdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiTWFpbk1lbnUiLCJyb3V0ZXMiLCJleHRyYSIsImNvbXBvbmVudCIsIk9yZGVyTGlzdCIsIlJlY2VpcHRMaXN0IiwiU3RhdHNMaXN0IiwiTWVtYmVyTGlzdCIsIlZlbmRvckxpc3QiLCJTaXRlSW5kZXgiLCJNYW5hZ2VyUm91dGVyIiwiZW1wbG95ZWUiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiYWxlcnQiLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnIiLCJtYXAiLCJpIiwiTWVtYmVyRWRpdG9yIiwibG9hZE9iamVjdERldGFpbCIsIl9sb2FkT2JqZWN0RGV0YWlsIiwiYmluZCIsIl9zdWJtaXQiLCJjaGVjayIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYm9keSIsImVycm9yIiwibG9jYXRpb24iLCJtZW1iZXIiLCJOYW1lIiwiR2VuZGVyIiwiQ2l0eSIsIlRlbGVwaG9uZSIsImxvYWRNZW1iZXJMaXN0IiwiX2xvYWRNZW1iZXJMaXN0IiwiZGlzcGF0Y2giLCJ0eXBlIiwiYXBwZW5kIiwicGF5bG9hZCIsIm1lbWJlckxpc3QiLCJtZW1iZXJzIiwiZWRpdG9ySnN4IiwibUxpc3RKc3giLCJtIiwiaW5kZXgiLCJNb2JpbFBob25lIiwiV2VpWGluQ29kZSIsIkZyaWVuZE5hbWUiLCJEaXNlYXNlcyIsIkJpcnRoWWVhciIsIkludGVudGlvbkNvdW50IiwiVmlzaXRRdWFudGl0eSIsIk9yZGVyUXVhbnRpdHkiLCJvcmRlcnMiLCJkZWZhdWx0U3RhdGUiLCJnb29kTGlzdCIsImdvb2RzIiwiaXNGZXRjaGluZyIsImNoZWNrZWRHb29kIiwiZ29vZEVkaXQiLCJvcmRlckxpc3QiLCJ4eHh4IiwiWFhYWFJlZHVjZXIiLCJhY3Rpb24iLCJNZW1iZXJMaXN0UmVkdWNlciIsIk9iamVjdCIsImFzc2lnbiIsIk9yZGVyTGlzdFJlZHVjZXIiLCJHb29kTGlzdFJlZHVjZXIiLCJpdGVtcyIsIml0ZW0iLCJHb29kRWRpdG9yUmVkdWNlciIsInJlZHVjZXIiLCJzdG9yZSIsInRodW5rIiwiZGVmYXVsdCIsIndpbmRvdyIsIm9ubG9hZCIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQSxzREFBOEM7QUFDOUM7QUFDQTtBQUNBLG9DQUE0QjtBQUM1QixxQ0FBNkI7QUFDN0IseUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBNkI7QUFDN0IscUNBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw2QkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQWtCLDhCQUE4QjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLElBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFD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S0FBLE87Ozs7Ozs7OztrREFNQUEsTzs7Ozs7Ozs7O2lEQUtBQSxPOzs7Ozs7Ozs7a0RBS0FBLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDSjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQyxPQUFPQyxNQUFQLEdBQWdCLFlBQU07QUFDbEJDLHVCQUFTQyxNQUFULENBQWdCLDhCQUFDLHVCQUFELE9BQWhCLEVBQStCeEQsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUEvQjtBQUNILENBRkQ7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7O0FDZEEscUIiLCJmaWxlIjoianMvd29ya3NwYWNlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0O1xuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIilcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjJjZjdlODVkNzJjNGFkYjFiZGVlXCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpXG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSBtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGRlcCA9PT0gXCJ1bmRlZmluZWRcIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgZGVwID09PSBcInVuZGVmaW5lZFwiKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdHZhciBjaHVua0lkID0gXCJ3b3Jrc3BhY2VcIjtcbiBcdFx0XHR7XG4gXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWxvbmUtYmxvY2tzXG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge2FueX0gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdClcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm90IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hc3NldHMvXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZShcIi4vc3JjL3dlYi9iYWNrLmNsaWVudC5qc1wiKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3dlYi9iYWNrLmNsaWVudC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvZm9ybS1saWIvbGliL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9lcy9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9yc3VpdGUtc2NoZW1hL2xpYi9pbmRleC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZSwgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBDb250YWluZXIgPSAocm91dGUpID0+ICg8Um91dGUgcGF0aD17cm91dGUucGF0aH0gcmVuZGVyPXtwcm9wcyA9PiAoPHJvdXRlLmNvbXBvbmVudCBPcmRlck1lc3M9e3JvdXRlLk9yZGVyTWVzc30gey4uLnByb3BzfS8+KX0vPik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9SZWR1Y2VyJztcblxuaW1wb3J0IHtGb3JtLCBGaWVsZCwgY3JlYXRlRm9ybUNvbnRyb2x9IGZyb20gJ2Zvcm0tbGliJztcbmltcG9ydCB7U2NoZW1hTW9kZWwsIFN0cmluZ1R5cGV9IGZyb20gJ3JzdWl0ZS1zY2hlbWEnO1xuXG4vKipcbiAqIOiNr+WTgeWIl+ihqOeuoeeQhlxuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmNsYXNzIEdvb2RMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy51blN1YnNjcmliZSA9IFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcyA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMSBtYWluXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicGFnZV90aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoND7oja/lk4HnrqHnkIY8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuX3pvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiByZWY9e3JlZiA9PiB0aGlzLmZvcm0gPSByZWZ9IGlkPVwiZm9ybVwiIG9uQ2hhbmdlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cm9sZTogdmFsdWVzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBvbkNoZWNrPXsoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmn6Xor6JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7oja/lk4HlkI08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPumAmueUqOWQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6KeE5qC8PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ljZXkvY08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPum7mOiupOaIkOacrDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6buY6K6k5ZSu5Lu3PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mnYPpmZDku7c8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPueUn+S6p+WVhjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+55So5rOVPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ov5vlj6M8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR29vZExpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZSwgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgTmF2TGluaywgTGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IE1haW5NZW51ID0gKCkgPT4gKDx1bCBpZD1cImJhY2tfbWVudVwiIGNsYXNzTmFtZT1cIm5hdiBuYXYtc2lkZWJhclwiPlxuICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvYmFja19pbmRleFwiPum7mOiupOmhtTwvTmF2TGluaz5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvb3JkZXJzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiY2hlY2tlZFwiPumUgOWUruiuouWNlTwvTmF2TGluaz5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvcmVjZWlwdHNcIiBhY3RpdmVDbGFzc05hbWU9XCJjaGVja2VkXCI+6L+b6LSn5Y2VPC9OYXZMaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgICA8TmF2TGluayB0bz1cIi9zdGF0c1wiIGFjdGl2ZUNsYXNzTmFtZT1cImNoZWNrZWRcIj7mlbDmja48L05hdkxpbms+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL21lbWJlcnNcIiBhY3RpdmVDbGFzc05hbWU9XCJjaGVja2VkXCI+5Lya5ZGY566h55CGPC9OYXZMaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgICA8TmF2TGluayB0bz1cIi9nb29kc1wiIGFjdGl2ZUNsYXNzTmFtZT1cImNoZWNrZWRcIj7oja/lk4HnrqHnkIY8L05hdkxpbms+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL3ZlbmRvcnNcIiBhY3RpdmVDbGFzc05hbWU9XCJjaGVja2VkXCI+5L6b5bqU5ZWG566h55CGPC9OYXZMaW5rPlxuICAgIDwvbGk+XG5cbjwvdWw+KTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbk1lbnU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZSwgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgTmF2TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge1xuICAgIEdvb2RMaXN0LFxuICAgIE9yZGVyTGlzdCxcbiAgICBSZWNlaXB0TGlzdCxcbiAgICBTdGF0c0xpc3QsXG4gICAgTWVtYmVyTGlzdCxcbiAgICBWZW5kb3JMaXN0LFxuICAgIFNpdGVJbmRleCxcbiAgICBDb250YWluZXIsXG4gICAgTWFpbk1lbnVcbn0gZnJvbSAnLi9pbmRleCc7XG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL29yZGVycy9cIixcbiAgICAgICAgZXh0cmE6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudDogT3JkZXJMaXN0XG4gICAgfSwge1xuICAgICAgICBwYXRoOiBcIi9yZWNlaXB0cy9cIixcbiAgICAgICAgZXh0cmE6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudDogUmVjZWlwdExpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL3N0YXRzL1wiLFxuICAgICAgICBleHRyYTogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50OiBTdGF0c0xpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL21lbWJlcnMvXCIsXG4gICAgICAgIGV4dHJhOiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IE1lbWJlckxpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL3ZlbmRvcnMvXCIsXG4gICAgICAgIGV4dHJhOiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IFZlbmRvckxpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL2dvb2RzL1wiLFxuICAgICAgICBleHRyYTogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50OiBHb29kTGlzdFxuICAgIH0sIHtcbiAgICAgICAgcGF0aDogXCIvYmFja19pbmRleFwiLFxuICAgICAgICBleHRyYTogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50OiBTaXRlSW5kZXhcbiAgICB9XG5dO1xuXG4vKipcbiAqIOWOqOW4iOW3peS9nOWPsFxuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmNsYXNzIE1hbmFnZXJSb3V0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZW1wbG95ZWU6IHt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZmV0Y2goJy9hcGkvZW1wbG95ZWUvcHJvZmlsZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgaWYgKGpzb24uY29kZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliqDovb3pm4flkZjor6bnu4bkv6Hmga9cIiwganNvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW1wbG95ZWU6IGpzb24uZGF0YX0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7ZW1wbG95ZWV9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKDxSb3V0ZXI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3BcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIOW3puS+p+iPnOWNlSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEgc2lkZWJhclwiPjxNYWluTWVudS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog5Y+z5L6n5YaF5a65ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlcy5tYXAoKHJvdXRlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxDb250YWluZXIga2V5PXtpfSBFbXBsb3llZT17ZW1wbG95ZWV9IHsuLi5yb3V0ZX0vPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Sb3V0ZXI+KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXJSb3V0ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcidcblxuaW1wb3J0IHtGb3JtLCBGaWVsZCwgY3JlYXRlRm9ybUNvbnRyb2x9IGZyb20gJ2Zvcm0tbGliJztcbmltcG9ydCB7U2NoZW1hTW9kZWwsIFN0cmluZ1R5cGV9IGZyb20gJ3JzdWl0ZS1zY2hlbWEnO1xuXG4vKipcbiAqIOiNr+WTgeWfuuehgOaVsOaNrue8lui+kee7hOS7tlxuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmNsYXNzIE1lbWJlckVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUgPSBTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIHRoaXMubG9hZE9iamVjdERldGFpbCA9IHRoaXMuX2xvYWRPYmplY3REZXRhaWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWJtaXQgPSB0aGlzLl9zdWJtaXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfbG9hZE9iamVjdERldGFpbCgpIHt9XG5cbiAgICBfc3VibWl0KCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybS5jaGVjaygpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiBcIuaVsOaNruagvOW8j+aciemUmeivr1wifSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpKTtcblxuICAgICAgICBmZXRjaCgnL2FwaS9tZW1iZXIvYWRkJywge1xuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgLy9UT0RPXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7bG9jYXRpb259ID0gdGhpcy5wcm9wc1xuICAgIH1cblxuICAgIGNvbXBvbmVudFVuTW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7bWVtYmVyfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiTWVtYmVyRWRpdG9yXCI+XG4gICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtXCIgcmVmPXtyZWYgPT4gdGhpcy5mb3JtID0gcmVmfSBpZD1cImZvcm1cIiBvbkNoYW5nZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyb2xlOiB2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgfX0gb25DaGVjaz17KGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVwiIGlkPVwiTmFtZVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDmn6Xor6JcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVwiIGlkPVwiTmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5p+l6K+iXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgICAgIOS8muWRmOe8lui+kemhtemdojoge21lbWJlci5OYW1lfVxuICAgICAgICAgICAge21lbWJlci5HZW5kZXJ9XG4gICAgICAgICAgICB7bWVtYmVyLkNpdHl9XG4gICAgICAgICAgICB7bWVtYmVyLlRlbGVwaG9uZX1cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyRWRpdG9yO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInO1xuXG5pbXBvcnQge0Zvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbH0gZnJvbSAnZm9ybS1saWInO1xuaW1wb3J0IHtTY2hlbWFNb2RlbCwgU3RyaW5nVHlwZX0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbmltcG9ydCBNZW1iZXJFZGl0b3IgZnJvbSAnLi9NZW1iZXJFZGl0b3InO1xuXG5jbGFzcyBNZW1iZXJMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy51blN1YnNjcmliZSA9IFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcyA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgdGhpcy5sb2FkTWVtYmVyTGlzdCA9IHRoaXMuX2xvYWRNZW1iZXJMaXN0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2xvYWRNZW1iZXJMaXN0KCkge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9NRU1CRVJcIn0pO1xuXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJrZXl3b3JkXCIsIFwi5rWL6K+V5Lya5ZGYXCIpO1xuXG4gICAgICAgIGZldGNoKCcvYXBpL21lbWJlci9zZWFyY2gnLCB7XG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkZFVENIX01FTUJFUl9ET05FXCIsIHBheWxvYWQ6IGpzb24uZGF0YX0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmxvYWRNZW1iZXJMaXN0KCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgbWVtYmVyTGlzdDoge1xuICAgICAgICAgICAgICAgIG1lbWJlcnMsXG4gICAgICAgICAgICAgICAgbWVtYmVyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBlZGl0b3JKc3ggPSAoXCJcIik7XG4gICAgICAgIGlmIChtZW1iZXIpIHtcbiAgICAgICAgICAgIGVkaXRvckpzeCA9ICg8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIGNvbC1tZC1vZmZzZXQtMVwiPlxuICAgICAgICAgICAgICAgIDxNZW1iZXJFZGl0b3IgbWVtYmVyPXttZW1iZXJ9Lz5cbiAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtTGlzdEpzeCA9IG1lbWJlcnMubWFwKChtLCBpbmRleCkgPT4gKDx0cj5cbiAgICAgICAgICAgIDx0ZD57bS5OYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e20uQ2l0eX08L3RkPlxuICAgICAgICAgICAgPHRkPnttLkdlbmRlcn08L3RkPlxuICAgICAgICAgICAgPHRkPnttLk1vYmlsUGhvbmV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bS5XZWlYaW5Db2RlfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e20uRnJpZW5kTmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkPnttLkRpc2Vhc2VzfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e20uQmlydGhZZWFyfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e20uSW50ZW50aW9uQ291bnR9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bS5WaXNpdFF1YW50aXR5fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e20uT3JkZXJRdWFudGl0eX08L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiRURJVE9SX01FTUJFUlwiLCBwYXlsb2FkOiBtfSlcbiAgICAgICAgICAgICAgICAgICAgfX0+57yW6L6RPC9idXR0b24+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPikpO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIk1lbWJlckxpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0xIG1haW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGFnZV90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+5Lya5ZGY566h55CGPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5fem9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiByZWY9e3JlZiA9PiB0aGlzLmZvcm0gPSByZWZ9IGlkPVwiZm9ybVwiIG9uQ2hhbmdlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JvbGU6IHZhbHVlc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBvbkNoZWNrPXsoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVwiIGlkPVwiTmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5p+l6K+iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWuouS6uuWnk+WQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWfjuW4gjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaAp+WIqzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPueUteivnTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuW+ruS/oeWPtzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWSjOiwgeWlveWPizwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPueWvueXhTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuW5tOS7ozwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaEj+WQkeWNlTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWbnuiuv+asoTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaIkOWNlTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaTjeS9nDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttTGlzdEpzeH1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7ZWRpdG9ySnN4fVxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInO1xuXG5pbXBvcnQge0Zvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbH0gZnJvbSAnZm9ybS1saWInO1xuaW1wb3J0IHtTY2hlbWFNb2RlbCwgU3RyaW5nVHlwZX0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbi8qKlxuICog6ZSA5ZSu6K6i5Y2V6aG16Z2iXG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuY2xhc3MgT3JkZXJMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUgPSBTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtvcmRlcnN9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiT3JkZXJMaXN0XCIgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMSBtYWluXCI+XG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGg0PumUgOWUruiuouWNleeuoeeQhjwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5fem9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gaWQ9XCJmb3JtXCIgb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyb2xlOiB2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lrqLkurrlp5Nz6KaBPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7oja/lk4E8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPumHkeminTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5Luj5pS2PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lv6vpgJLotLk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuW/q+mAkuWFrOWPuDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6I2v5biIPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mk43kvZw8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9SZWR1Y2VyJztcblxuaW1wb3J0IHtGb3JtLCBGaWVsZCwgY3JlYXRlRm9ybUNvbnRyb2x9IGZyb20gJ2Zvcm0tbGliJztcbmltcG9ydCB7U2NoZW1hTW9kZWwsIFN0cmluZ1R5cGV9IGZyb20gJ3JzdWl0ZS1zY2hlbWEnO1xuXG5jbGFzcyBSZWNlaXB0TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUgPSBTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiUmVjZWlwdExpc3RcIiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xIG1haW5cIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGg0Pui/m+i0p+WNleeuoeeQhjwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5fem9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gaWQ9XCJmb3JtXCIgb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyb2xlOiB2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5L6b5bqU5ZWGPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7nlLXor508L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuiBlOezu+S6ujwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pel5pyfPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ph5Hpop08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuiNr+W4iDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pON5L2cPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2VpcHRMaXN0O1xuIiwiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgICBnb29kTGlzdDoge1xuICAgICAgICBnb29kczogW10sXG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBjaGVja2VkR29vZDogbnVsbFxuICAgIH0sXG4gICAgZ29vZEVkaXQ6IHt9LFxuICAgIG9yZGVyTGlzdDoge30sXG4gICAgbWVtYmVyTGlzdDoge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgbWVtYmVyczogW10sXG4gICAgICAgIG1lbWJlcjp7fVxuICAgIH0sXG4gICAgeHh4eDoge31cbn07XG5cbmZ1bmN0aW9uIFhYWFhSZWR1Y2VyKHN0YXRlID0gZGVmYXVsdFN0YXRlLnh4eHgsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIlwiOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBNZW1iZXJMaXN0UmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS5tZW1iZXJMaXN0LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9NRU1CRVJcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2lzRmV0Y2hpbmc6IHRydWV9KTtcbiAgICAgICAgY2FzZSBcIkZFVENIX01FTUJFUl9ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZW1iZXJzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXNlIFwiRURJVE9SX01FTUJFUlwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgbWVtYmVyOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBPcmRlckxpc3RSZWR1Y2VyKHN0YXRlID0gZGVmYXVsdFN0YXRlLm9yZGVyTGlzdCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiXCI6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIEdvb2RMaXN0UmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS5nb29kTGlzdCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiTE9BRF9HT09EU1wiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNGZXRjaGluZzogdHJ1ZX0pO1xuICAgICAgICBjYXNlIFwiTE9BRF9HT09EU19ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiTE9BRF9HT09EXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtpc0ZldGNoaW5nOiB0cnVlfSk7XG4gICAgICAgIGNhc2UgXCJMT0FEX0dPT0RfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiTE9BRF9HT09EX0NIRUNLRURcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2NoZWNrZWRHb29kOiBhY3Rpb24ucGF5bG9hZH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBHb29kRWRpdG9yUmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS5nb29kRWRpdCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiQ0xFQVJfR09PRF9ERVRBSUxcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW06IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiTE9BRF9HT09ERF9FVEFJTFwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNGZXRjaGluZzogdHJ1ZX0pOztcbiAgICAgICAgY2FzZSBcIkxPQURfR09PRERfRVRBSUxfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pOztcbiAgICAgICAgY2FzZSBcIkFQUEVORF9HT09EXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtpc0ZldGNoaW5nOiB0cnVlfSk7XG4gICAgICAgIGNhc2UgXCJBUFBFTkRfR09PRF9ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtpc0ZldGNoaW5nOiBmYWxzZX0pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7Z29vZExpc3Q6IEdvb2RMaXN0UmVkdWNlciwgZ29vZEVkaXQ6IEdvb2RFZGl0b3JSZWR1Y2VyLCBtZW1iZXJMaXN0OiBNZW1iZXJMaXN0UmVkdWNlcn0pO1xuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUodGh1bmspKTtcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5cbmNsYXNzIFNpdGVJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge31cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICg8ZGl2PlxuICAgICAgICAgICAg6buY6K6k6aG16Z2iXG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpdGVJbmRleDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFN0YXRzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge31cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiU3RhdHNMaXN0XCI+XG4gICAgICAgICAgICDmlbDmja7nu5/orqFcbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdHNMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtGb3JtLCBGaWVsZCwgY3JlYXRlRm9ybUNvbnRyb2x9IGZyb20gJ2Zvcm0tbGliJztcbmltcG9ydCB7U2NoZW1hTW9kZWwsIFN0cmluZ1R5cGV9IGZyb20gJ3JzdWl0ZS1zY2hlbWEnO1xuXG5jbGFzcyBWZW5kb3JMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDxkaXYgaWQ9XCJWZW5kb3JMaXN0XCIgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMSBtYWluXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicGFnZV90aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoND7kvpvlupTllYbnrqHnkIY8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuX3pvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiByZWY9e3JlZiA9PiB0aGlzLmZvcm0gPSByZWZ9IGlkPVwiZm9ybVwiIG9uQ2hhbmdlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cm9sZTogdmFsdWVzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBvbkNoZWNrPXsoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmn6Xor6JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5L6b5bqU5ZWG5ZCNPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7nlLXor508L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWcsOWdgDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6IGU57O75Lq6PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lpIfms6g8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWIm+W7uuaXtumXtDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pON5L2cPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlbmRvckxpc3Q7XG4iLCJleHBvcnQge1xuICAgIGRlZmF1bHQgYXMgR29vZExpc3Rcbn1cbmZyb20gJy4vR29vZExpc3QnO1xuXG5leHBvcnQge1xuICAgIGRlZmF1bHQgYXMgT3JkZXJMaXN0XG59XG5mcm9tICcuL09yZGVyTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBTdGF0c0xpc3Rcbn1cbmZyb20gJy4vU3RhdHNMaXN0JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIFJlY2VpcHRMaXN0XG59XG5mcm9tICcuL1JlY2VpcHRMaXN0JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIE1lbWJlckxpc3Rcbn1cbmZyb20gJy4vTWVtYmVyTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBWZW5kb3JMaXN0XG59XG5mcm9tICcuL1ZlbmRvckxpc3QnO1xuXG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBTaXRlSW5kZXhcbn1cbmZyb20gJy4vU2l0ZUluZGV4JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIE1haW5NZW51XG59XG5mcm9tICcuL01haW5NZW51JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIENvbnRhaW5lclxufVxuZnJvbSAnLi9Db250YWluZXInO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcFJvdXRlciBmcm9tICcuLi9jb21wb25lbnRzL01hbmFnZXJSb3V0ZXInO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIFJlYWN0RE9NLnJlbmRlcig8QXBwUm91dGVyIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQXBwJykpO1xufTtcblxuXG4vLyBpZihtb2R1bGUuaG90KXtcbi8vICAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vY29tcG9uZW50cy9NYW5hZ2VyUm91dGVyJyxmdW5jdGlvbigpe1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnQWNjZXB0aW5nIHRoZSB1cGRhdGVkIE1hbmFnZXJSb3V0ZXIgbW9kdWxlIScpO1xuLy8gXG4vLyAgICAgfSlcbi8vIH0iLCJtb2R1bGUuZXhwb3J0cyA9IGxpYjsiXSwic291cmNlUm9vdCI6IiJ9
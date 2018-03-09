/* global self, workbox */
/* eslint-disable no-underscore-dangle,no-restricted-globals */

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

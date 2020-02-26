## TODO
Items I haven't gotten to yet

---
* (General) Create a build process to build the app to Chrome targets

* (General) For some reason `redux-persist-webextension-storage` causes both Chrome and Firefox to crash in production. There has to be something wrong with the package. Either fork/patch the package or find another way.

* (Firefox) The manual build process is broken and does not let you install the extension. This needs to be fixed.


* (Chrome) The extension uses browser.* actions which cause chrome to crap out (on add bookmark specifically). Helpers in the `browser` folder should re retrofitted to support chrome's `chrome.*` and firefox's `browser.*`




## DONE 
Move any done tasks here

---

* (General) Create a build process to build the app to Firefox targets
